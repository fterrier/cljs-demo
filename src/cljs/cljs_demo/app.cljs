(ns cljs-demo.app
  (:require [cljs-demo.comm :as comm]
            [cljs-demo.movies :as movies :refer [movie-list MovieList]]
            [cljs-demo.parser :as parser]
            [cljs.test :refer-macros [is testing]]
            [cljs.reader :refer [read-string]]
            [clojure.walk :refer [postwalk-replace]]
            [devcards.core :as dc :refer-macros [defcard-om-next deftest]]
            [om-tools.dom :as dom :include-macros true]
            [om.next :as om :refer-macros [defui]])
  (:require-macros
   [utils.macros :refer [slurp]]))

(defn search-field [comp query]
  (dom/div
   (dom/input {:key "search-field"
               :value query
               :on-change
               (fn [e]
                 (om/set-query! comp
                                {:params {:query (.. e -target -value)
                                          :limit 10}}))})))

(defn load-more-button [comp]
  (dom/a {:href "#"
          :on-click (fn [e]
                      (. e preventDefault)
                      (om/update-query! comp 
                                        (fn [q]
                                          (update-in q [:params :limit] (partial + 10)))))} 
         "Load more"))

(defui MovieSearch
  static om/IQueryParams
  (params [_]
          {:query "" :limit 0})
  static om/IQuery
  (query [_]
         (let [subquery (om/get-query MovieList)]
           `[({:search/results ~subquery} {:query ~'?query :limit ~'?limit})]))
  Object
  (render [this]
          (println "RENDER")
          (let [{:keys [search/results]} (om/props this)
                {:keys [query limit]} (om/get-params this)]
            (dom/div
             (search-field this query)
             (movie-list results)
             (when (>= (count (:movie/list results)) limit)
               (load-more-button this))))))

(def movie-search (om/factory MovieSearch))

(comment
  (om/get-query MovieSearch)
  (om/query->ast (om/get-query MovieSearch))
  (om/process-roots (om/get-query MovieSearch)))

;; check that query is properly mapped to state
(def normalized-state
  (om/tree->db
   (om/get-query MovieSearch) {:search/results {:movie/list movies/my-movie-list}} true))

(deftest om-normalization
  (testing "IDs properly normalized"
    (let [db normalized-state]
      (is (= [[:movie/by-id 1]
              [:movie/by-id 2]
              [:movie/by-id 3]
              [:movie/by-id 4]] (get-in db [:search/results :movie/list])))
      (is (= 4 (count (:movie/by-id db)))))))

(comment
  (cljs.pprint/pprint normalized-state))

;; here om will use your parser to re-transform the state back to the tree format,
;; providing your own parser allows you to weigh in and add remote calls etc..
(comment
  (om/db->tree (om/get-query MovieSearch) normalized-state normalized-state)
  (om/db->tree (om/get-query MovieList) (:search/results normalized-state) normalized-state)
  (parser/stupid-parser {:state (atom normalized-state)} (om/get-query MovieSearch))
  (parser/parser {:state (atom normalized-state)} (om/get-query MovieSearch)))

(def test-stupid-reconciler
  (om/reconciler
   {:state  {:search/results {:movie/list movies/my-movie-list}}
    :parser parser/stupid-parser}))

(defcard-om-next movie-search-card-stupid-parser
  "This is not so useful"
  MovieSearch test-stupid-reconciler)

(deftest om-parser
  (testing "My parser gives back tree data"
    (let [data (parser/parser {:state (atom normalized-state)} (om/get-query MovieSearch))]
      (is (= "Back to the future" (get-in data [:search/results :movie/list 0 :movie/title])))))
  (testing "My parser works with query"
    (let [query (postwalk-replace {"" "test"} (om/get-query MovieSearch))
          data  (parser/parser {:state (atom normalized-state)} query :search)]
      (is (= ['({:search/results [{:movie/list [:movie/id :movie/title :movie/poster]}]} {:query "test"})] 
             data)))))

;; we now create a reconciler with our smarter parser
(def test-reconciler
  (om/reconciler 
   {:state   {:search/results {:movie/list movies/my-movie-list}}
    :parser  parser/parser
    :send    comm/send-fn
    :remotes [:search]}))

(defcard-om-next movie-search-card-stupid-parser
  "This is better" MovieSearch test-reconciler)

;; this is what Om does when you call cb on server response
(comment 
  (om/merge! test-reconciler 
             {:search/results {:movie/list
                               (comm/transform-search-response 
                                (read-string (slurp "fixtures/search.txt")))}}))
