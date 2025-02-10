(ns snake.tetris
  (:require

   [re-frame.core :as rf]
   [re-com.core :as re-com :refer [at]]
   [re-pressed.core :as rp]))

;;<
;; Plan
;;>
;; Development.
;;
;; Tasks:
;;   Game stage:
;;   [ X ] Bind actions to key-press
;;   [   ] Auto mover / move engine
;;   [   ] Check lose for end game
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
;; Refactor:
;;   [   ] (def fix-move ...)
;;   [ X ] (defn move-shape-to-in-field [direction shape field]
;;   [ X ] merge :rotate-stone & :move-stone
;;



;;<
;; Func
;;>
;;

;; matrix utils
(defn empty-matrix-nm [n m]
  (let [line (->> (repeat 0) (take n) vec)]
    (->> (repeat line) (take m) vec)))

(defn rotate-matrix [m]
  (let [transpose (fn [v] (mapv (fn [ind] (mapv #(get % ind)
                                                (filter #(contains? % ind) v)))
                                (->> (map count v) (apply max) range)))
        transposed (transpose m)]
    (vec (map (fn [v] (-> v reverse vec)) transposed))))

(defn clear-matrix [m]
  (let [pure-m (remove #(every? #{1} %) m)
        zero-row (take (-> m first count) (repeat 0))
        zero-m (take (- (count m) (count pure-m)) (repeat zero-row))]
    (mapv vec (concat zero-m pure-m))))

(defn merge-matrices [dst src origin]
  (loop [y (-> origin last dec) src src dst dst]
    (if (empty? src)
      dst
      (recur
       (inc y)
       (rest src)
       (update dst
               y
               (fn [v]
                 (let [f (first src)
                       pre (take (dec (first origin)) (repeat 0))
                       post (take (- (count v) (+ (count pre) (count f)))
                                  (repeat 0))
                       f2 (vec (flatten [pre f post]))]
                   (mapv (fn [v f] (if (= 1 f) f v)) v f2))))))))

(defn relative-coordinates [[x y] matrix]
  (loop [r []
         row (first matrix)
         rest-rows (next matrix)]
    (if (nil? row)
      r
      (let [coordinates (map
                         (fn [a] [(+ x a)
                                  (+ y (- (count matrix) (-> rest-rows count inc)))])
                         (range (count row)))]
        (recur (apply conj r (remove nil? coordinates))
               (first rest-rows)
               (next rest-rows))))))

(defn can-merge-matrices-without-loses [dst src origin]
  (let [src-crds (relative-coordinates origin src)
        offset-x (get-in src-crds [0 0])
        offset-y (get-in src-crds [0 1])]
    (every? true?
            (map (fn [[x y]]
                   (let [src-value (get-in src [(- y offset-y) (- x offset-x)])
                         dst-value (get-in dst [(dec y) (dec x)])]
                     (cond
                       (and (= 1 src-value) (nil? dst-value)) false
                       (= 1 dst-value src-value) false
                       :else true)))
                 src-crds))))

;; stone utils
(def tetrominoes
  [[[1]]
   [[1 1 1 1]]
   [[1 1] [1 1]]
   [[1 1] [1 0] [1 0]]
   [[1 1] [0 1] [0 1]]
   [[0 1 1] [1 1 0]]
   [[1 1 0] [0 1 1]]
   [[1 1 1] [0 1 0]]])

(defn create-stone
  ([]
   {:crd [1 1]
    :shape (get tetrominoes
                (-> tetrominoes count rand-int))})
  ([n]
   {:crd [1 1]
    :shape (get tetrominoes n (get tetrominoes 0))}))

(defn move-stone [stone direction]
  (let [l (fn [stone] (update-in stone [:crd 0] #(dec %)))
        r (fn [stone] (update-in stone [:crd 0] #(inc %)))
        d (fn [stone] (update-in stone [:crd 1] #(inc %)))
        t (fn [stone] (update stone :shape (fn [m] (rotate-matrix m))))
        mover (case direction :left l :right r :down d :rotate t)]
    (mover stone)))

(defn can-move-stone-within-rock-to-direction [rock stone dir]
  (let [new-stone (move-stone stone dir)
        shape (:shape new-stone)
        origin (:crd new-stone)]
    (when (can-merge-matrices-without-loses rock shape origin)
      new-stone)))


;<
;; Events
;;>

;; todo refactor
;; (def fix-move
;;   (rf/enrich
;;    (fn [db [_ _]]
;;      (let [rock (:rock db)
;;            stone (get-in db [:stones 0])
;;            new-stone (move-stone stone)]
;;
;;  ;; -> IF can't move down and need fix state
;;        (if (nil? new-crd)
;;          (let [
;;                ;; add new stone to the queue
;;                db0 (update db :stones (fn [s] (create-stone)))
;
;;                move stone from queue to the rock matrix
;;                db1 (assoc db0
;;                           :rock
;;                           (merge-matrices rock (:shape stone) (:crd stone)))
;
;;                remove solid lines
;;                db2 (assoc db1 :rock (clear-matrix (:rock db0)))
;;
;;                ] db2)
;;
;;  ;; -> ELSE do noting
;;  db)))))

;; todo refactor
(rf/reg-event-db
 :move-stone
; [fix-move]
 (fn [db [_ dir]]
   (let [rock (:rock db)
         stone (get-in db [:stones 0])]
     (when-let [stone (can-move-stone-within-rock-to-direction rock stone dir)]
       (assoc-in db [:stones 0] stone)))))

;;<
;; Game stages
;;>

(rf/reg-event-db
 :init-rock
 (fn [db]
   (let [db
         (assoc db
                :rock
                (empty-matrix-nm (-> db :frame first)
                                 (-> db :frame last)))

         db (assoc-in db [:rock 5 5] 1)
         db (assoc-in db [:rock 5 7] 1)]
     db)))

(rf/reg-event-db
 :init-stones
 (fn [db]
   (let [stones [(create-stone 4) (create-stone 5)]]
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
    {:event-keys [[[:move-stone :rotate] [{:keyCode 87}]]
                  [[:move-stone :down] [{:keyCode 83}]]
                  [[:move-stone :left] [{:keyCode 65}]]
                  [[:move-stone :right] [{:keyCode 68}]]]
     :clear-keys [[;;escape
                   {:keyCode 27}]]}]))
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
     (merge-matrices (empty-matrix-nm 4 4) (:shape stone) #_[1 1] (:crd stone)))))

(rf/reg-sub
 :game-field
 (fn []
   [(rf/subscribe [:rock])
    (rf/subscribe [:stone])])

 (fn [[rock stone]]
   (let [stone-on-field (merge-matrices rock (:shape stone) (:crd stone))]
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

(defn tetris-app []
  [:div {:style {:color :black}}
   [:h1 "Tetris game"]
   [:ol
    [:li "Next" [next-stone]]
    [:li "Field" [game-field]]]])

;;<
;; Run
;;>

(key-rules-move-tetris)
(rf/dispatch [:init-game])
