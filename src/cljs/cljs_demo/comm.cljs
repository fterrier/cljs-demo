(ns cljs-demo.comm
  (:require [cljs.core.async :as async :refer [<! chan put!]]
            [cljs.reader :refer [read-string]]
            [cljs.test :refer-macros [is testing]]
            [devcards.core :as dc :refer-macros [deftest]]
            [om.next :as om])
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [utils.macros :refer [slurp]])
  (:import goog.net.Jsonp
           goog.Uri))

(defn search-url [search page]
  (str "http://www.omdbapi.com/?y=&plot=short&r=json&s=" search "&page=" page))

(defn get-page [limit]
  (js/Math.ceil (/ limit 10)))

(defn transform-result [result]
  {:movie/title (:Title result)
   :movie/poster (:Poster result)
   :movie/id (:imdbID result)})

(defn transform-search-response [response]
  (into [] (map transform-result (:Search response))))

(deftest result-transform
  (testing "Transforming correct result" 
    (let [results (transform-search-response
                   (read-string (slurp "fixtures/search.txt")))]
      (is (= {:movie/title "Star Wars: Episode V - The Empire Strikes Back", :movie/poster "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg", :movie/id "tt0080684"}
             (first results)))
      (is (= 10 (count results))))))

(defn jsonp
  ([uri] (jsonp (chan) uri))
  ([c uri]
   (let [gjsonp (Jsonp. (Uri. uri))]
     (.send gjsonp nil 
            #(put! c [nil %]) 
            #(put! c [% nil]))
     c)))

(defn send-fn [{:keys [search] :as queries} cb]
  (println queries)
  (when search
    (let [{[search] :children} (om/query->ast search)
          {:keys [limit count query]} (get search :params)
          page (get-page limit)]
      (go
        (let [[error response] (<! (jsonp (search-url query page)))]
          (if-not error
            (cb {:search/results {:movie/list (transform-search-response 
                                               (js->clj response :keywordize-keys true))}})
            (cb nil)))))))
