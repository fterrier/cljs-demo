(ns cljs-demo.app
  (:require
    [cljs-demo.state :refer [app-state]]
    [om.core :as om]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]))


(defcomponent app [app owner]
  (render [_]
          (dom/div )))

(defn main []
    (om/root app app-state
             ; TODO listen on all state changes to fill up history
             {:target (. js/document (getElementById "main-area"))}))

(defn stop [])
