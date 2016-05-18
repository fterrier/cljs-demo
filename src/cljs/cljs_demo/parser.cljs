(ns cljs-demo.parser
  (:require [clojure.string :as string]
            [om.next :as om]))

(defmulti read om/dispatch)

(defn- get-movie-list [state movie-list]
  {:movie/list (map #(get-in state %) (:movie/list movie-list))})

(defmethod read :search/results
  [{:keys [state ast] :as env} k {:keys [query limit]}]
  (let [st @state]
    (merge
     {:value (get-movie-list st (get st k []))}
     (when-not (or (string/blank? query)
                   (< (count query) 3))
       {:search (assoc-in ast [:params :count] (count (get-in st [:search/results :movie/list])))}))))

(defmethod read :app/search
  [{:keys [state ast] }])

(defmulti mutate om/dispatch)

(defmethod mutate 'movie/like
  [{:keys [state]} _ {:keys [id]}]
  {:action
   (fn []
     (swap! state update-in
            [:movie/by-id id :movie/likes] inc))})

(def parser (om/parser {:read read 
                        :mutate mutate}))

;; this parser just uses db->tree to get back the non-normalized state
(def stupid-parser 
  (om/parser {:read 
              (fn [{:keys [state query] :as env} k _]
                (let [st @state]
                  {:value (om/db->tree query (get st k) st)}))}))
