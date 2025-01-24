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
;;   [  ] Check lose for end game
;;   [  ] Score calculation
;;
;;   Rock massive:
;;   [  ] Join stone to rock massive
;;   [  ] Flush lines with whole points
;;
;;   Stone:
;;   [  ] Define set of stones
;;   [  ] CRUD operation with stones queue
;;   [  ] Rotate stone
;;   [  ] Inject stone to the field line by line (from 1 bottom to whole stone)
;;   [  ] Move stone left, right, down
;;
;;
;;   Field:
;;   [  ] Draw game field
;;   [  ] Draw game field with stone
;;   [  ] Draw game field with rock massive & stone
;;
;;
;;


;; Events
(rf/reg-event-fx              ;; -fx registration, not -db registration
 :start-game
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) act (fn [v] (inc v)))
    :fx       [
               [:dispatch [:add-empty-field]]
               [:dispatch [:add-rock]]
               ]}))



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
 (fn [db] (:stone db)))

(rf/reg-sub
 :game-field
 (fn []
   [(rf/subscribe [:empty-field])
    (rf/subscribe [:rock])
    (rf/subscribe [:stone])])

 (fn [[empty-field rock _]]
   (let [rock-on-field (concat (drop (count rock) empty-field) rock)]
     rock-on-field
     )))


(rf/reg-event-db
 :clear-rock
 (fn [db]
   (let [rock (:rock db)
         cleared (filter #(not-every? #{1} %) rock)
         flushed (filter #(every? #{1} %) rock)
         ]

     (assoc db :rock cleared )
     )))
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
         r [
            flush l1 flush
            l2 flush flush l3 flush l4 flush l5
            ]
         ]
     (assoc db :rock r))
   ))

(rf/reg-event-db
 :add-empty-field
 (fn [db]
   (let [max-x (-> db :frame first)
         max-y (-> db :frame last)
         line (vec (take max-x (repeat 0)))
         r (def r (vec (take max-y (repeat line))))
         ]

     ;;(def r1 (assoc r 14 (vec (take 15 (repeat "X")))))
     ;;(assoc db :empty-field r1)

     (assoc db :empty-field r)
     )))




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
    [:li [:button {:on-click #(rf/dispatch [:clear-rock])} "Clear rock"]]

    "- Game"
    [:li [:button {:on-click #(rf/dispatch [:start-game])} "Start Game"]]
    [:li "Field"[game-field]]]])


(defn init-state [ ]
  (rf/dispatch-sync [:add-empty-field]))
