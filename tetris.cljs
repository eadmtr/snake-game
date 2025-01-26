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
    :fx       [[:dispatch [:add-empty-field]]
               [:dispatch [:add-rock]]
               [:dispatch [:add-stones]]]}))


(rf/reg-event-db
 :add-stones
 (fn [db]
   (let [
         shape2 [[1 1] [1 0] [1 0]]
         crd2 [1 1]
         shape1 [[1] [1] [1] [1]]
         crd1 [3 3]]

     (assoc db :stones [{:crd crd2 :shape shape2} {:crd crd1 :shape shape1}]))))

(rf/reg-event-db
 :rotate-stone
 (fn [db]
   (update-in db
              [:stones 0 :shape]
              (fn [shape] (rotate shape)))))


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
 :empty-field
 (fn [db]
   (:empty-field db)))

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
   [(rf/subscribe [:empty-field])
    (rf/subscribe [:rock])
    (rf/subscribe [:stone])])

 (fn [[empty-field rock stone]]
   (let [
         stone-on-field (inject-shape empty-field (:shape stone) (:crd stone))
         rock-on-field (concat (drop (count rock) empty-field) rock)
         ]

     (if true
       rock-on-field
       stone-on-field)

     )


   ))

(rf/reg-event-db
 :clear-rock
 (fn [db]
   (let [rock (:rock db)
         cleared (filter #(not-every? #{1} %) rock)
         flushed (filter #(every? #{1} %) rock)]

     (assoc db :rock cleared))))

;; Helpers
(rf/reg-event-db
 :add-rock
 (fn [db [_ _]]
   (let [flush (vec (take 15 (repeat 1)))
         l1 (assoc flush 3 0)
         l2 (assoc flush 6 0)
         l3 (assoc flush 9 0)
         l4 (assoc flush 12 0)
         l5 (assoc flush 9 0)
         r [flush l1 flush
            l2 flush flush l3 flush l4 flush l5]]

     (assoc db :rock r))))

(rf/reg-event-db
 :add-empty-field
 (fn [db]
   (let [max-x (-> db :frame first)
         max-y (-> db :frame last)
         line (vec (take max-x (repeat 0)))
         r (vec (take max-y (repeat line)))]
     (assoc db :empty-field r))))

;; View
(defn game-field []
  [:table
   [:tbody
    (for [frame @(rf/subscribe [:game-field])]
      [:tr {:key (rand-int 100000)}
       (for [cell frame]
         [:td {:key (rand-int 100000)} cell])])]])

(defn tetis-app []
  [:div {:style {:color :black}}
   [:h1 "Tetris game"]
   [:ol
    "- Helpers"
    ;; [:li [:button {:on-click #(rf/dispatch [:add-empty-field])} "Add field"]]
    ;; [:li [:button {:on-click #(rf/dispatch [:add-rock])} "Add rock"]]
    ;; [:li [:button {:on-click #(rf/dispatch [:add-stone])} "Add stone"]]

    "- Game"
    [:li [:button {:on-click #(rf/dispatch [:start-game])} "Start Game"]]
    [:li [:button {:on-click #(rf/dispatch [:clear-rock])} "Clear rock"]]
    [:li [:button {:on-click #(rf/dispatch [:rotate-stone])} "Rotate Stone"]]
    [:li [:button {:on-click #(rf/dispatch [:new-stone])} "New stone"]]

    [:li "Field" [game-field]]]])

;; (defn init-state [ ]
;;   (rf/dispatch-sync [:add-empty-field]))
