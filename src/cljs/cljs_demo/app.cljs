(ns cljs-demo.app
  (:require
    [cljs-demo.state :refer [app-state add-todo]]
    [om.core :as om]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]))


(defcomponent todo [todo owner]
  (render [_]
          (dom/div (:text todo))))

(defcomponent app [app owner]
  (init-state [_]
    {:text ""})
  (render-state [_ state]
          (dom/div
           (dom/form {:on-submit (fn [e] (add-todo {:text (om/get-state owner :text)}) false)}
            (dom/input {:value (:text state)
                        :on-change (fn [e] (om/set-state! owner :text (.. e -target -value)) false)}))
           (if-not (empty? (:todos app))
            (om/build-all todo (:todos app))
            "no todos yet !"))))

(defn main []
    (om/root app app-state
             ; TODO listen on all state changes to fill up history
             {:target (. js/document (getElementById "main-area"))}))

(defn stop [])
