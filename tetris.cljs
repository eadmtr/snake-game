(ns snake.tetris
  (:require
   [re-frame.core :as rf]
   [re-com.core :as re-com :refer [at]]
   [re-pressed.core :as rp]))

;;
;;
;;
;; Development.
;; Tasks:
;;   Game stage:
;;   [   ] Check lose for end game
;;   [   ] Bind actions to key-press
;;   [   ] Bind acceleration with long press down-key
;;   [   ] Score calculation
;;
;;   Rock massive:
;;   [   ] Inject new stone line by line
;;   [ X ] Join stone to rock massive
;;   [ X ] Flush lines with whole points
;;
;;   Stone:
;;   [   ] Add new random stones in queue
;;   [ X ] Define set of stones
;;   [ X ] CRUD operation with stones queue
;;   [ X ] Rotate stone
;;   [ X ] Move stone left, right, down
;;   [ X ] Inject stone to the field line by line (from 1 bottom to whole stone)
;;
;;   Field:
;;   [   ] Draw next stone from queue
;;   [ X ] Draw game field
;;   [ X ] Draw game field with rock massive
;;   [ X ] Draw game field with stone
;;
;;
;;

(defn shapes []
  [[[1 1 1 1]]
   [[1 1] [1 1]]
   [[1 1] [1 0] [1 0]]
   [[1 1] [0 1] [0 1]]
   [[0 1 1] [1 1 0]]
   [[1 1 0] [0 1 1]]
   [[1 1 1] [0 1 0]]])

(defn clear-whole-lines-in-rock [db]
   (let [rock (:rock db)
         cleared (filter #(not-every? #{1} %) rock)
         cleared-count (- (count rock) (count cleared))
         max-x (-> db :frame first)
         line (vec (take max-x (repeat 0)))
         addon (vec (take cleared-count (repeat line)))]
         (vec (concat addon cleared))))

;; Rock rotattion
(defn rotate-shape [m]
  (let [transpose (fn [v] (mapv (fn [ind] (mapv #(get % ind) (filter #(contains? % ind) v)))
                                (->> (map count v) (apply max) range)))
        transposed (transpose m)]
    (vec (map
          (fn [v] (-> v reverse vec))
          transposed))))

(defn get-coordinates [rock]
  (let [crd (:crd rock)
        x (first crd)
        y (last crd)
        shape (:shape rock)]
    (loop [r []
           rows shape]
      (if (nil? rows)
        r
        (let
         [coordinates (map
                       (fn [flag b]
                         (when (= flag 1) [(+ x b)
                                           (+ y (- (count shape)
                                                   (count rows)))]))
                       (first rows)
                       (range (count (first rows))))]
          (recur (apply conj r (remove nil? coordinates))
                 (next rows)))))))

(defn move-shape-to-in-field [direction shape field]
  (let [left (fn [crd] (assoc crd 0 (-> crd first dec)))
        right (fn [crd] (assoc crd 0 (-> crd first inc)))
        down (fn [crd] (assoc crd 1 (-> crd last inc)))
        rotate (fn [crd] crd)
        crd-mover (case direction :left left :right right :down down :rotate rotate)

        shape (case direction
                :rotate (update shape :shape (fn [s] (rotate-shape s)))
                shape)
        coordinates (get-coordinates shape)
        moved-coordinates (mapv crd-mover coordinates)]

    (loop [can-move? true crds moved-coordinates]
      (if (or (false? can-move?) (nil? crds))
        (if (false? can-move?) nil (first moved-coordinates))
        (let [dest-crd (first crds)
              content-crd (get-in field [(-> dest-crd last dec)
                                         (-> dest-crd first dec)])
              can-move? (if (or (nil? content-crd) (= 1 content-crd)) false true)]
          (recur can-move? (next crds)))))))

(defn inject-shape [field shape origin]
  (let [source field crd-x (first origin) crd-y (last origin)]
    (loop [usm shape
           src source y (dec crd-y) x (dec crd-x)]
      (if (empty? usm)
        src
        (recur (rest usm)
               (update src
                       y
                       (fn [v]
                         (let [f (remove zero? (first usm))
                               pre (take x v)
                               post (drop (+ (count pre) (count f)) v)]
                           (vec (flatten [pre f post])))))
               (inc y)
               x)))))


;; Events
(rf/reg-event-fx              ;; -fx registration, not -db registration
 :start-game
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) act (fn [v] (inc v)))
    :fx       [[:dispatch [:init-rock]]
               [:dispatch [:add-rock-test]]
               [:dispatch [:add-stones]]]}))

(rf/reg-event-db
 :rotate-stone
 (fn [db [_ _]]
   (let [rock (:rock db)
         stone (get-in db [:stones 0])
         new-crd (move-shape-to-in-field :rotate stone rock)]
     (if (nil? new-crd)
       db
       (update-in db [:stones 0 :shape] (fn [s] (rotate-shape s)))))))


(def fix-move
  (rf/enrich
    (fn [db [_ _]]
      (let [rock (:rock db)
            stone (get-in db [:stones 0])
            new-crd (move-shape-to-in-field :down stone rock)]
        (if (nil? new-crd)
          (let [r0 (inject-shape rock (:shape stone) (:crd stone))
                db0 (assoc db :rock r0)

                r1 (clear-whole-lines-in-rock db0)
                db1 (assoc db :rock r1)

                db2 (assoc db1 :stones (-> (:stones db1) rest vec))]
            db2)
          db)))))


(rf/reg-event-db
 :move-stone
 [fix-move]
 (fn [db [_ dir]]
   (let [rock (:rock db)
         stone (get-in db [:stones 0])
         new-crd (move-shape-to-in-field dir stone rock)]
     (if (nil? new-crd) db (assoc-in db [:stones 0 :crd] new-crd)))))

;; Subs
(rf/reg-sub
 :rock
 (fn [db]
   (:rock db)))

(rf/reg-sub
 :stone
 (fn [db]
   (-> db :stones first)))

(rf/reg-sub
 :game-field
 (fn []
   [(rf/subscribe [:rock])
    (rf/subscribe [:stone])])

 (fn [[rock stone]]
   (let [stone-on-field (inject-shape rock (:shape stone) (:crd stone))]
     stone-on-field)))

(rf/reg-event-db
 :init-rock
 (fn [db]
   (let [max-x (-> db :frame first)
         max-y (-> db :frame last)
         line (vec (take max-x (repeat 0)))
         rock (vec (take max-y (repeat line)))]
     (assoc db :rock rock))))



;; Helpers
(rf/reg-event-db
 :add-stones
 (fn [db]
   (let [
         shape0 [[1 1 1 1]]
         crd0 [1 1]

         shape1 [[1] [1] [1] [1]]
         crd1 [1 1]

         shape2 [[1 1] [1 0] [1 0]]
         crd2 [13 1]
         shape3 [[1]]
         crd3 [2 2]]

     (assoc db :stones [
                        {:crd crd2 :shape shape2}
                        {:crd crd1 :shape shape1}
                        {:crd crd2 :shape shape2}
                        {:crd crd3 :shape shape3}]))))


(rf/reg-event-db
 :clear-rock
 (fn [db]
   (assoc db :rock (clear-whole-lines-in-rock db))
   ))



(rf/reg-event-db
 :add-rock-test

 (fn [db [_ _]]
   (let [rock (:rock db)
         flush (vec (take 15 (repeat 1)))
         l1 (assoc flush 3 0)
         l2 (assoc flush 6 0)
         l3 (assoc flush 9 0)
         l4 (assoc flush 12 0)
         l5 (assoc flush 9 0)
         r [flush l1 flush l2
            flush flush
           ; l3 flush l4 flush l5
            ]
         ;r (assoc rock 14 flush)
         ;r (inject-shape rock r [1 10])
         r0 (assoc rock 12 [1 1 1 1 1 1 1 0 1 1 1 1 1 1 1] )
         r1(assoc r0 13 [1 1 1 1 1 1 1 0 1 1 1 1 1 1 1] )
         r2(assoc r1 14 [1 1 1 1 1 1 1 0 1 1 1 1 1 1 1] )
         r (assoc r2 15 [1 1 1 1 1 1 1 0 1 1 1 1 1 1 1] )
         ;r rock
         ]
     (assoc db :rock r))))

;; View
(defn game-field []
  [:table
   [:tbody
    (for [frame @(rf/subscribe [:game-field])]
      [:tr {:key (rand-int 100000)}
       (for [cell frame]
         [:td {:key (rand-int 100000)}
          (if (= 1 cell) "+" cell)])])]])

(defn tetis-app []
  [:div {:style {:color :black}}
   [:h1 "Tetris game"]
   [:ol
    "- Helpers"
    ;; [:li [:button {:on-click #(rf/dispatch [:add-stone])} "Add stone"]]

    "- Game"
    [:li [:button {:on-click #(rf/dispatch [:start-game])} "Start Game"]]
    [:li [:button {:on-click #(rf/dispatch [:add-rock-test])} "Add rock"]]
    [:li [:button {:on-click #(rf/dispatch [:clear-rock])} "Clear rock"]]

    [:li [:button {:on-click #(rf/dispatch [:rotate-stone])} "^"]]
    [:li [:button {:on-click #(rf/dispatch [:move-stone :down])} "V"]]
    [:li [:button {:on-click #(rf/dispatch [:move-stone :left])} "<"]]
    [:li [:button {:on-click #(rf/dispatch [:move-stone :right])} ">"]]

    [:li "Field" [game-field]]]])

(rf/dispatch [:start-game])
