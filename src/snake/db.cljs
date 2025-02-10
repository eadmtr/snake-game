(ns snake.db)

(def default-db-snake
  {:frame {:x 19 :y 9}

   :infinite-field false
   :move 0
   :is-lose false

   :points []
   :growers []

   :grow-queue []
   :turns []})

(def default-db-tetris
  {
   :frame [15 15]
   :move 0
   :is-lose false

   })
