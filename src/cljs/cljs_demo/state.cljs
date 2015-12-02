(ns cljs-demo.state)

(def initial-state {:todos #{}})

; state
(defonce app-state (atom initial-state))


; dev stuff
(defn reset []
  (reset! app-state initial-state))

(defn add-todo [todo]
  (swap! app-state update :todos conj todo))

(defn remove-todo [todo]
  (swap! app-state update :todos disj todo))
