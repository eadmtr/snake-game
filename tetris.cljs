(ns snake.tetris
  (:require

   [re-frame.core :as rf]
   [re-com.core :as re-com :refer [at]]
   [re-pressed.core :as rp]))



;;<
;; Plan
;;>
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
;;   [ X ] Add new random stones in queue
;;   [ X ] Define set of stones
;;   [ X ] CRUD operation with stones queue
;;   [ X ] Rotate stone
;;   [ X ] Move stone left, right, down
;;   [ X ] Inject stone to the field line by line (from 1 bottom to whole stone)
;;
;;   Field:
;;   [ X ] Draw next stone from queue
;;   [ X ] Draw game field
;;   [ X ] Draw game field with rock massive
;;   [ X ] Draw game field with stone
;;



;;<
;; Func
;;>


(defn empty-matrix-nm [n m]
   (let [line (->> (repeat 0) (take n) vec)]
         (->> (repeat line) (take m) vec)))


(defn game-shapes []
  [[[1 1 1 1]]
   [[1 1] [1 1]]
   [[1 1] [1 0] [1 0]]
   [[1 1] [0 1] [0 1]]
   [[0 1 1] [1 1 0]]
   [[1 1 0] [0 1 1]]
   [[1 1 1] [0 1 0]]])

(defn create-stone
  ([]
  {:crd [1 1]
   :shape (get (game-shapes)
               (-> (game-shapes) count rand-int))})
  ([n]
   {:crd [1 1]
    :shape (get (game-shapes) n (get (game-shapes) 0))}))


(defn rotate-shape [m]
  (let [transpose (fn [v] (mapv (fn [ind] (mapv #(get % ind)
                                                (filter #(contains? % ind) v)))
                                (->> (map count v) (apply max) range)))
        transposed (transpose m)]
    (vec (map (fn [v] (-> v reverse vec)) transposed))))


(defn clear-whole-lines-in-rock [db]
  (let [rock (:rock db)
        cleared (filter #(not-every? #{1} %) rock)
        cleared-count (- (count rock) (count cleared))
        max-x (-> db :frame first)
        line (vec (take max-x (repeat 0)))
        addon (vec (take cleared-count (repeat line)))]
    (vec (concat addon cleared))))


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
                               pre (take x (repeat 0))
                               post (take (- (count v) (+ (count pre) (count f)))
                                          (repeat 0))
                               f2 (vec (flatten [pre f post]))]
                           (mapv (fn [v f] (if (= 1 f) f v)) v f2))))

               (inc y)
               x)))))



;;<
;; Events
;;>

;; (def fix-move
;;   (rf/enrich
;;    (fn [db [_ _]]
;;      (let [rock (:rock db)
;;            stone (get-in db [:stones 0])
;;            new-crd (move-shape-to-in-field :down stone rock)]

;;        (if (nil? new-crd)
;;          (let [r0 (inject-shape rock (:shape stone) (:crd stone))
;;                db0 (assoc db :rock r0)

;;                r1 (clear-whole-lines-in-rock db0)
;;                db1 (assoc db :rock r1)

;;                new-stone (create-stone)
;;                db2 (update db1 :stones (fn [s] (conj  (-> s rest vec) new-stone)))]

;;            db2)
;;          db))))


(rf/reg-event-db
 :move-stone
; [fix-move]
 (fn [db [_ dir]]
   (let [rock (:rock db)
         stone (get-in db [:stones 0])
         new-crd (move-shape-to-in-field dir stone rock)]

     (print dir)
     (print stone)
     (print new-crd)
     (if (nil? new-crd) db (assoc-in db [:stones 0 :crd] new-crd)))))


(rf/reg-event-db
 :rotate-stone
 (fn [db [_ _]]
   (let [rock (:rock db)
         stone (get-in db [:stones 0])
         new-crd (move-shape-to-in-field :rotate stone rock)]
     (if (nil? new-crd)
       db
       (update-in db [:stones 0 :shape] (fn [s] (rotate-shape s)))))))





;;<
;; Game stages
;;>

(rf/reg-event-db
 :init-rock
 (fn [db]
   (assoc db
          :rock
          (empty-matrix-nm (-> db :frame first)
                           (-> db :frame last)))))

(rf/reg-event-db
 :init-stones
 (fn [db]
   (let [stones [(create-stone 0) (create-stone)]]
     (assoc db :stones stones))))

(rf/reg-event-fx              ;; -fx registration, not -db registration
 :init-game
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) act (fn [v] (inc v)))
    :fx       [[:dispatch [:init-rock]]
               [:dispatch [:init-stones]]]}))


(defn key-rules-move-tetris []
  (rf/dispatch
   [::rp/set-keydown-rules
    {:event-keys [

                  [[:rotate-stone] [{:keyCode 87}]]

                  ;[[:move-stone :rotate] [{:keyCode 87}]]
                  [[:move-stone :down] [{:keyCode 83}]]
                  [[:move-stone :left] [{:keyCode 65}]]
                  [[:move-stone :right] [{:keyCode 68}]]

                  ]

     :clear-keys
     [[{:keyCode 27} ;; escape
       ]]}]))

;;<
;; Subs
;;>
(rf/reg-sub
 :rock
 (fn [db]
   (:rock db)))

(rf/reg-sub
 :stones
 (fn [db]
   (:stones db)))

(rf/reg-sub
 :stone
 (fn []
   [(rf/subscribe [:stones])])
 (fn [[stones]]
   (first stones)))

(rf/reg-sub
 :next-stone
 (fn []
   [(rf/subscribe [:stones])])
 (fn [[stones]]
   (let [stone (second stones)]
     (inject-shape (empty-matrix-nm 4 4) (:shape stone) (:crd stone)))))

(rf/reg-sub
 :game-field
 (fn []
   [(rf/subscribe [:rock])
    (rf/subscribe [:stone])])

 (fn [[rock stone]]
   (let [stone-on-field (inject-shape rock (:shape stone) (:crd stone))]
     stone-on-field)))



;;<
;; View
;;>

(defn next-stone []
  [:table
   [:tbody
    (for [frame @(rf/subscribe [:next-stone])]
      [:tr {:key (rand-int 100000)}
       (for [cell frame]
         [:td {:key (rand-int 100000)}
          (if (= 1 cell) "+" cell)])])]])

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
    ;"- Helpers"
    ;; [:li [:button {:on-click #(rf/dispatch [:add-stone])} "Add stone"]]

    ;"- Game"
    ;[:li [:button {:on-click #(rf/dispatch [:init-game])} "Start Game"]]

    [:li "Next" [next-stone]]
    [:li "Field" [game-field]]]])




;;<
;; Run
;;>

(key-rules-move-tetris)
(rf/dispatch [:init-game])
