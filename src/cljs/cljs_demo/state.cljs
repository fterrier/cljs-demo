(ns cljs-demo.state)

; state
(defonce app-state (atom {}))


; dev stuff
(defn reset []
  (reset! app-state initial-state))
