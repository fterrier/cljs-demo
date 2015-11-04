(ns ^:figwheel-no-load cljs-demo.core
  (:require [cljs-demo.app :as app]))

(enable-console-print!)

(defn fig-reload []
  (app/stop)
  (app/main))

(app/main)
