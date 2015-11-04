(ns cljs-demo.state)

; state
(defonce app-state (atom {:todos []}))


; dev stuff
(defn reset []
  (reset! app-state {:todos []}))

(defn add-todo [todo]
  (swap! app-state conj todo))
