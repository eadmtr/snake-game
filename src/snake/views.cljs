(ns snake.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.core :as re-com :refer [at]]
   [re-pressed.core :as rp]

   [snake.tetris :as tetris]

   [snake.styles :as styles]
   [snake.events :as events]
   [snake.routes :as routes]
   [snake.subs :as subs]))

;;
;; SNAKE GAME
;;
;; Bugs
;;   Crash with many 'Move' tap AFTER game losed [   ]
;;
;; Refactor
;;   Subs for views with Snake, Grows, Empty Field [   ]
;;   Snake entity rename 'points' -> 'snake') [   ]
;;
;; Feature
;;   Bind moves to keys [   ]
;;     Turn actived snake with keys [   ]
;;
;;   Automatic move with speed [   ]
;;     Level up: increase speed [   ]
;;
;;   Scores Calculation [   ]
;;
;;   Achievment list [   ]
;;     Score level, Fill 50% field, Access spped level, Survive 100 movements etc
;;
;;   Switch btwn Infinite / Solid field with Bool flag [   ]
;;

;; Keys
;;   Codes
;;     space 32
;;     w 87 s 83 a 65 d 68
;;     s 83 x 88 z 90 c 67
;;     left37 up38 right39 down40
;;
;;   Actions
;;     Start
;;     Stop
;;     Restart
;;     Pause
;;
;;

(defn key-rules-move-snake-debug []
  (re-frame/dispatch
   [::rp/set-keydown-rules
    {:event-keys [[[:add-point] [{:keyCode 32}]]
                  [[:move-with-key :u] [{:keyCode 87}]]
                  [[:move-with-key :d] [{:keyCode 83}]]
                  [[:move-with-key :l] [{:keyCode 65}]]
                  [[:move-with-key :r] [{:keyCode 68}]]

                  [[:move-with-key :u] [{:keyCode 38}]]
                  [[:move-with-key :d] [{:keyCode 40}]]
                  [[:move-with-key :l] [{:keyCode 37}]]
                  [[:move-with-key :r] [{:keyCode 39}]]]

     :clear-keys
     [[{:keyCode 27} ;; escape
       ]]}]))

(re-frame/reg-cofx
 :key-press-time
 (fn[cofx]
   (assoc cofx :key-press-time (js/Date))))

(re-frame/reg-event-fx              ;; -fx registration, not -db registration
 :move-with-key
 [(re-frame/inject-cofx :key-press-time)]
 (fn [cofx [act value]]        ;; 1st argument is coeffects, instead of db
   {:db (assoc (:db cofx) :move-with-key value :key-press-time (:key-press-time cofx))
    :fx       [[:dispatch [:add-turn value]]
              ; [:dispatch [:move]]
               ]}))


;; Move
(re-frame/reg-event-fx              ;; -fx registration, not -db registration
 :move
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) act (fn [v] (inc v)))
    :fx       [[:dispatch [:update-crd]]
               [:dispatch [:snake-grow]]
               [:dispatch [:eat-food]]
               [:dispatch [:generate-growers]]
               [:dispatch [:check-lose]]
               [:dispatch [:update-crd-with-turns]]
               [:dispatch [:remove-vacant-turns]]]}))


;; Game
(defn dispatch-timer-event
  []
  (let [now (js/Date.)]
    (re-frame/dispatch [:timer now])))  ;; <-- dispatch used

(re-frame/reg-event-fx                 ;; usage:  (dispatch [:timer a-js-Date])
 :timer                         ;; every second an event of this kind will be dispatched
 (fn [cofx [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
   {:db      (assoc (:db cofx) :time new-time)
    :fx       [[:dispatch [:move]]]}))



;; Tick
;;
;; [:start-tick])} "Start tick"]]
;; [:stop-tick])} "Stop tick"]]
;; [:speed-up-tick])} "Speed up tick"]]
;; [:slow-down-tick])} "Slow down tick"]]
;;

(def matom (atom {:ticker nil :value 0})) ; reagent/atom ??

(re-frame/reg-event-fx
 :start-tick
 (fn [cofx [_ v]]
   {:start-tick-fx v}))

(re-frame/reg-fx
  :start-tick-fx
  (fn [v]
    (js/console.log "start-tick-fx" v)
    (reset! matom {:ticker (js/setInterval dispatch-timer-event v) :value v})))

(re-frame/reg-event-fx
 :speed-up-tick
 (fn [cofx [act _]]
   (let [v (:value @matom)
         new-v (- v 100)]
   {
    :fx       [
               [:dispatch [:stop-tick]]
               [:dispatch [:start-tick new-v]]
               ]})))

(re-frame/reg-event-fx
 :stop-tick
 (fn [cofx [_ _]]
   {:stop-tick-fx nil}))

(re-frame/reg-fx
  :stop-tick-fx
  (fn [ticker]
    (js/console.log "stop-tick-fx")
    (js/clearInterval (:ticker @matom))
    (reset! matom  {:ticker nil :value 0})))



;; Update coordinates

(re-frame/reg-event-db
 :update-crd
 (fn [db [_ _]]
   (update db
           :points
           (fn [points]
             (vec (map
                   (fn [p] (update-in p [:crd] (:nxt p) (:frame db)))
                   points))))))

;-solid field
(defn inc-x [pnt frm]
  (let [r (inc (:x pnt))]
    (assoc pnt :x r)))

(defn dec-x [pnt frm]
  (let [r (dec (:x pnt))]
    (assoc pnt :x r)))

(defn inc-y [pnt frm]
  (let [r (inc (:y pnt))]
    (assoc pnt :y r)))

(defn dec-y [pnt frm]
  (let [r (dec (:y pnt))]
    (assoc pnt :y r)))

;; - close field
(comment
(defn inc-x [pnt frm]
  (let [t (inc (:x pnt))
        r (if (> t (:x frm)) 0 t)]
    (assoc pnt :x r)))

(defn dec-x [pnt frm]
  (let [t (dec (:x pnt))
        r (if (< t 0) (:x frm) t)]
    (assoc pnt :x r)))

(defn inc-y [pnt frm]
  (let [t (inc (:y pnt))
        r (if (> t (:y frm)) 0 t)]
    (assoc pnt :y r)))

(defn dec-y [pnt frm]
  (let [t (dec (:y pnt))
        r (if (< t 0) (:y frm) t)]
    (assoc pnt :y r)))

(def turns-map {inc-x {:l dec-y :r inc-y}
                dec-x {:l inc-y :r dec-y}
                inc-y {:l dec-x :r inc-x}
                dec-y {:l inc-x :r dec-x}})
)
;; Check lose
(re-frame/reg-event-db
 :check-lose
 (fn [db [_ _]]
   (let [head (-> db :points first)
         hx (-> head :crd :x)
         hy (-> head :crd :y)
         fx (-> db :frame :x)
         fy (-> db :frame :y)]
     (if (or (not-empty (filter (fn [v] (= (:crd head) (:crd v)))
                                (rest (:points db))))
             (or (<= hx 0) (<= hy 0) (> hx fx) (> hy fy)))
       (update db :is-lose (fn [_] true))
       (update db :is-lose (fn [_] false))))))

;; Grow
(re-frame/reg-event-db
 :eat-food
 (fn [db [_ _]]
   (let [head (-> db :points first)
         hx (-> head :crd :x)
         hy (-> head :crd :y)
         growers (:growers db)
         head-food (filter (fn [f] (and (= hx (:x f)) (= hy (:y f)))) growers)]
     (if (not-empty head-food)
       (let [tail (-> db :points last)
             eated-growers
             (update db
                     :growers
                     (fn [fds] (vec (remove #(= % (first head-food)) fds))))]
         (update eated-growers :grow-queue (fn [q] (conj q tail))))
       db))))

(re-frame/reg-event-db
 :snake-grow
 (fn [db [_ _]]
   (if-let [new (first (-> db :grow-queue))]
     (let [rst (rest (-> db :grow-queue))
           new-grow-queue (update db :grow-queue (fn [_] (vec rst)))]
       (update new-grow-queue :points (fn [points] (conj points new))))
     db)))

(re-frame/reg-event-db
 :generate-growers
 (fn [db [_ _]]
   (if (> (rand-int 100) 85)
     (let [x (inc (rand-int (-> db :frame :x)))
           y (inc (rand-int (-> db :frame :y)))]
       (assoc db :growers (conj (:growers db) {:x x :y y})))
       db)))

;; Turns queue
(defn remove-absent [t e]
  (filter
   (fn [r] (not-empty (filter
                       (fn [p] (and (= (-> r :crd :x) (-> p :crd :x))
                                    (= (-> r :crd :y) (-> p :crd :y))))
                       e)))
   t))

(defn merge-with-match [points turns]
  (vec (map
        (fn [p]
          (let [r (remove-absent turns [p])]
            (if (not-empty r) (merge p (first r)) p)))
        points)))

(re-frame/reg-event-db
 :update-crd-with-turns
 (fn [db [_ _]]
   (update db :points (fn [points] (merge-with-match points (:turns db))))))

(re-frame/reg-event-db
 :remove-vacant-turns
 (fn [db [_ _]]
   (update db :turns (fn [turns] (vec (remove-absent turns (:points db)))))))

;;; re-frame

(re-frame/reg-event-db
 :add-turn
 (fn [db [_ flow]]
   (let [flow-map {:l dec-x :r inc-x :u dec-y :d inc-y}
         new-flow (get flow-map flow)
         upd-with-head (update-in db [:points 0] (fn [p] (assoc p :nxt new-flow)))
         head (get-in upd-with-head [:points 0])]

     (let [hx (-> head :crd :x)
           hy (-> head :crd :y)
           clean-double (remove (fn [v] (and (= hx (-> v :crd :x))
                                             (= hy (-> v :crd :y))))
                                (:turns db))]
       (update upd-with-head
               :turns
               (fn [_] (conj clean-double head)))))))

;; subs
(re-frame/reg-sub
 :is-lose
 (fn [db] (:is-lose db)))

;; (re-frame/reg-sub
;;  :frame
;;  (fn [db] (:frame db)))

(re-frame/reg-sub
 :growers
 (fn [db] (:growers db)))

(re-frame/reg-sub
 :snake
 (fn [db] (:points db)))

(re-frame/reg-sub
 :frame-field-empty
 (fn [db]
   (let [frame (vec (map
                     (fn [_] (vec (map
                                   (fn [_] "[]")
                                   (range (-> db :frame :x)))))
                     (range (-> db :frame :y))))]
     frame)))

(re-frame/reg-sub
 :frame-field-content
 (fn []
   [(re-frame/subscribe [:frame-field-empty])
    (re-frame/subscribe [:snake])
    (re-frame/subscribe [:growers])
    (re-frame/subscribe [:is-lose])])

 (fn [[frame snake growers is-lose]]
   (def frame-with-growers
     (loop [i 0 frm frame]
       (if (>= i (count growers))
         frm
         (let [g (get growers i) gx (-> (get g :x) dec) gy (-> (get g :y) dec)]
           (recur (inc i)
                  (update-in frm [gy gx] (fn [_] "+")))))))

   (loop [i 0 frm frame-with-growers]
     (if (or (>= i (count snake)) is-lose)
       frm
       (let [p (get snake i) px (-> p :crd :x dec) py (-> p :crd :y dec)]
         (recur (inc i)
                (update-in frm [py px] (fn [_] "*"))))))))

;; Helpers
(re-frame/reg-event-db
 :add-point
 (fn [db [_ _]]
   (update db
           :points
           (fn [_]
             (->> (range 1 2)
                  (map (fn [v] {:crd {:x v :y 1} :nxt inc-x}))
                  reverse
                  vec)))))

;;; snake view

(defn table-frame []
  [:table
   [:tbody
    (for [frame @(re-frame/subscribe [:frame-field-content])]
      [:tr {:key (rand-int 100000)}
       (for [cell frame]
         [:td {:key (rand-int 100000)} cell])])]])

(defn snake-app []
  [:div {:style {:color :black}}
   [:h1 "Snake game"]
   [:ol

    ;"- Functions"
    [:li [:button {:on-click #(re-frame/dispatch [:start-tick 300])} "Start Game"]]

    ;; [:li [:button {:on-click #(re-frame/dispatch [:stop-tick])} "Stop tick"]]
    ;; [:li [:button {:on-click #(re-frame/dispatch [:speed-up-tick])} "Speed up tick"]]


    ;; [:li [:button {:on-click #(re-frame/dispatch [:update-crd])} "Update coordinate"]]
    ;; [:li [:button {:on-click #(re-frame/dispatch [:check-lose])} "Check lose"]]
    ;; [:li [:button {:on-click #(re-frame/dispatch [:eat-food])} "Eat foot"]]
    ;; [:li [:button {:on-click #(re-frame/dispatch [:snake-grow])} "Snake grow"]]
    ;; [:li [:button {:on-click #(re-frame/dispatch [:update-crd-with-turns])} "Update with turns"]]
    ;; [:li [:button {:on-click #(re-frame/dispatch [:remove-vacant-turns])} "Remove turns"]]
    ;[:li [:button {:on-click #(re-frame/dispatch [:generate-growers])} "Gen growers"]]
    ;"- Helpers"

    [:li [:button {:on-click #(re-frame/dispatch [:add-point])} "Create Snake"]]
    ;; [:li [:span
    ;;       [:button {:on-click
    ;;                 (fn [_]
    ;;                   (re-frame/dispatch [:add-turn :l])
    ;;                   (re-frame/dispatch [:move]))} "<"]
    ;;       [:button {:on-click
    ;;                 (fn [_]
    ;;                   (re-frame/dispatch [:add-turn :u])
    ;;                   (re-frame/dispatch [:move]))} "^"]
    ;;       [:button {:on-click
    ;;                 (fn [_]
    ;;                   (re-frame/dispatch [:add-turn :d])
    ;;                   (re-frame/dispatch [:move]))} "V"]
    ;;       [:button {:on-click
    ;;                 (fn [_]
    ;;                   (re-frame/dispatch [:add-turn :r])
    ;;                   (re-frame/dispatch [:move]))} ">"]]]

    ;[:li [:button {:on-click #(re-frame/dispatch [:move])} "Move"]]
    [:li [table-frame]]]])

;(key-rules-move-snake-debug)
;;; snake view

;; SNAKE

;;; exp

;; chain - experiment
(re-frame/reg-event-fx              ;; -fx registration, not -db registration
 :chain
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) act (fn [_] 3))
    :fx       [[:dispatch [:chain-2]]
               [:dispatch [:chain-3]]]}))

(re-frame/reg-event-fx              ;; -fx registration, not -db registration
 :chain-2
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) :chain (fn [v] (+ v v)))
     ;:fx       [[:dispatch [:add-turn-l3]]]
    }))

(re-frame/reg-event-fx              ;; -fx registration, not -db registration
 :chain-3
 (fn [cofx [act _]]        ;; 1st argument is coeffects, instead of db
   {:db       (update (:db cofx) :chain (fn [v] (* v v)))
     ;:fx       [[:dispatch [:do-something-else 3]]]
    }))
;; chain - experiment

;; exp

;; home
(defn home-title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :src   (at)
     :label (str "Hello from " @name ". This is the Home Page.")
     :level :level1
     :class (styles/level1)]))

(defn link-to-about-page []
  [re-com/hyperlink
   :src      (at)
   :label    "go to About Page"
   :on-click #(re-frame/dispatch [::events/navigate :about])])

(defn home-panel []
  [re-com/v-box
   :src      (at)
   :gap      "1em"
   :children [;; [home-title]
             ;; [link-to-about-page]

              ;; temp switching
              ;;[tetris/tetris-app]
              [snake-app]

              ]])

(defmethod routes/panels :home-panel [] [home-panel])

;; about

(defn about-title []
  [re-com/title
   :src   (at)
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [re-com/hyperlink
   :src      (at)
   :label    "go to Home Page"
   :on-click #(re-frame/dispatch [::events/navigate :home])])

(defn about-panel []
  [re-com/v-box
   :src      (at)
   :gap      "1em"
   :children [[about-title]
              [:div {:style {:color "black"}}
               [link-to-home-page]]]])

(defmethod routes/panels :about-panel [] [about-panel])

;;main
(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :src      (at)
     :height   "100%"
     :children [(routes/panels @active-panel)]]))


;; (contains? )
;; (some )
;; (some-fn)
;; ((fnil conj #{}) 1)
