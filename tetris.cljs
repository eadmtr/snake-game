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
;;   [   ] Score calculation
;;
;;   Rock massive:
;;   [   ] Join stone to rock massive
;;   [ X ] Flush lines with whole points
;;
;;   Stone:
;;   [   ] Define set of stones
;;   [ X ] CRUD operation with stones queue
;;   [ X ] Rotate stone
;;   [   ] Inject stone to the field line by line (from 1 bottom to whole stone)
;;   [   ] Move stone left, right, down
;;
;;   Field:
;;   [ X ] Draw game field
;;   [ X ] Draw game field with rock massive
;;   [   ] Draw game field with stone
;;
;;
;;

(defn shapes []
  [[[1 1 1 1]]
   [[1 1][1 1]]
   [[1 1][1 0][1 0]]
   [[1 1][0 1][0 1]]
   [[0 1 1][1 1 0]]
   [[1 1 0][0 1 1]]
   [[1 1 1][0 1 0]]])


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

(defn can-move-shape-to-in-field [direction shape field]
  (let [left (fn [crd] (assoc crd 0 (-> crd first dec)))
        right (fn [crd] (assoc crd 0 (-> crd first inc)))
        down (fn [crd] (assoc crd 1 (-> crd last inc)))

        coordinates (get-coordinates shape)
        crd-getter (case direction :left left :right right :down down)]

    (loop [can-move? true
           crds coordinates]

      (if (or (false? can-move?) (nil? crds))
        can-move?
        (let [dest-crd (crd-getter (first crds))
              content-crd (get-in field [(-> dest-crd last dec)
                                         (-> dest-crd first dec)])
              can-move? (if (or (nil? content-crd) (= 1 content-crd)) false true)
              ]
          (print dest-crd content-crd)
          (recur can-move? (next crds)))))))

(defn inject-shape [field shape origin]
  (let [source field
        crd-x (first origin)
        crd-y (last origin)]

  (loop [usm shape ; upd-shape-map
         src source
         y (dec crd-y)
         x (dec crd-x)]

    (if (empty? usm)
      src
      (recur (rest usm)
             (update src
                     y
                     (fn [v]
                       (let [f (first usm)
                             pre (take x v)
                             post (drop (+ (count pre) (count f)) v)]
                         (vec (flatten [pre f post])))
                       ))
             (inc y)
             x)))
      ))

;; Rock rotattion
(defn rotate [m]
  (let [transpose (fn [v] (mapv (fn [ind] (mapv #(get % ind) (filter #(contains? % ind) v)))
                                (->> (map count v) (apply max) range)))
        transposed (transpose m)]
    (vec (map
          (fn [v] (-> v reverse vec))
          transposed))))


;; Events
(rf/reg-event-fx              ;; -fx registration, not -db registration
 :start-game
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) act (fn [v] (inc v)))
    :fx       [
               [:dispatch [:init-rock]]
               [:dispatch [:add-rock-test]]
               [:dispatch [:add-stones]]]}))


(rf/reg-event-db
 :add-stones
 (fn [db]
   (let [
         shape3 [[1]]
         crd3 [2 2]

         shape2 [[1 1] [1 0] [1 0]]
         crd2 [5 1]

         shape1 [[1] [1] [1] [1]]
         crd1 [3 3]
         ]

     (assoc db :stones [{:crd crd2 :shape shape2} {:crd crd1 :shape shape1}]))))

(rf/reg-event-db
 :rotate-stone
 (fn [db]
   (update-in db
              [:stones 0 :shape]
              (fn [shape] (rotate shape)))))

(rf/reg-event-db
 :move-stone
 (fn [db [_ dir]]

   (let [
         rock (:rock db)
         stone (get-in db [:stones 0])
         crd (get-in db [:stones 0 :crd])
         can-move (can-move-shape-to-in-field dir stone rock)
         ]

;(js/console.log "can move=" can-move)

     (print "cm" can-move)

     ;(assoc-in db [:stones 0 :crd 1] (inc (last crd)))

     db

     )))


(rf/reg-event-db
 :new-stone
 (fn [db]
   (let [rest (-> db :stones rest)
         shape [[1 1] [1 1]]
         crd [5 5]
         ]
     (assoc db
            :stones
            (conj (vec rest) {:crd crd :shape shape})))))


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
       stone-on-field
     )))


(rf/reg-event-db
 :clear-rock
 (fn [db]
   (let [rock (:rock db)
         cleared (filter #(not-every? #{1} %) rock)
         cleared-count (- (count rock ) (count cleared))

         max-x (-> db :frame first)

         line (vec (take max-x (repeat 0)))
         addon (vec (take cleared-count (repeat line)))

         r (vec (concat addon cleared))

         ]

     (assoc db :rock r)

     )))

;; Helpers
(rf/reg-event-db
 :add-rock-test

 (fn [db [_ _]]
   (let [
         rock (:rock db)
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
         r (inject-shape rock [[1 1 0 0 0 1 1 1 1 1 1 1 1 1 1]] [1 2])
         ]

     (assoc db :rock r))))

(rf/reg-event-db
 :init-rock
 (fn [db]
   (let [max-x (-> db :frame first)
         max-y (-> db :frame last)
         line (vec (take max-x (repeat 0)))
         rock (vec (take max-y (repeat line)))
         ]
     (assoc db :rock rock))))

;; View
(defn game-field []
  [:table
   [:tbody
    (for [frame @(rf/subscribe [:game-field])]
      [:tr {:key (rand-int 100000)}
       (for [cell frame]
         [:td {:key (rand-int 100000)}

          (if (= 1 cell) "+"  cell)])])]])

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

    [:li [:button {:on-click #(rf/dispatch [:new-stone])} "New stone"]]
    [:li [:button {:on-click #(rf/dispatch [:rotate-stone])} "^"]]
    [:li [:button {:on-click #(rf/dispatch [:move-stone :down])} "V"]]
    [:li [:button {:on-click #(rf/dispatch [:move-stone :left])} "<"]]
    [:li [:button {:on-click #(rf/dispatch [:move-stone :right])} ">"]]

    [:li "Field" [game-field]]]])


(rf/dispatch [:start-game])
