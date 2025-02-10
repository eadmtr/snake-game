(ns snake.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [snake.events :as events]
   [snake.routes :as routes]
   [snake.views :as views]
   [snake.config :as config]

   [snake.tetris :as t]
   [re-pressed.core :as rp]))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (routes/start!)

  ;(re-frame/dispatch-sync [::events/initialize-db-snake])
  (re-frame/dispatch-sync [::events/initialize-db-tetris])
  ;(t/init-state)

  (re-frame/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])






  (dev-setup)
  (mount-root))
