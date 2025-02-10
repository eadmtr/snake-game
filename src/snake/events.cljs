(ns snake.events
  (:require
   [re-frame.core :as re-frame]
   [snake.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   ))

(re-frame/reg-event-db
 ::initialize-db-snake
 (fn-traced [_ _]
   db/default-db-snake))

(re-frame/reg-event-db
 ::initialize-db-tetris
 (fn-traced [_ _]
   db/default-db-tetris))


(re-frame/reg-event-fx
  ::navigate
  (fn-traced [_ [_ handler]]
   {:navigate handler}))

(re-frame/reg-event-fx
 ::set-active-panel
 (fn-traced [{:keys [db]} [_ active-panel]]
   {:db (assoc db :active-panel active-panel)}))
