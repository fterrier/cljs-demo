(ns cljs-demo.movies
  (:require [devcards.core :as dc :refer-macros [defcard defcard-om-next deftest]]
            [cljs.test :refer-macros [testing is]]
            [om-tools.dom :as dom :include-macros true]
            [om.next :as om :refer-macros [defui]]))

(defui Movie
  static om/Ident
  (ident [this {:keys [movie/id]}]
         [:movie/by-id id])
  static om/IQuery
  (query [this]
         [:movie/id
          :movie/title
          :movie/poster
          :movie/likes])
  Object
  (render [this]
          (let [{:keys [movie/title movie/poster movie/id movie/likes]} (om/props this)]
            (dom/div {:class "movie"}
             (dom/img {:src poster})
             (dom/h2 title)
             (dom/a {:href "#"
                     :onClick (fn [e] 
                                (. e preventDefault)
                                (om/transact! this `[(movie/like {:id ~id})]))}
                    (str "Like! - " (or likes 0)))))))

(def movie (om/factory Movie))

(comment
  (om/get-query Movie))

(defcard movie-card
  (movie {:movie/title "Point Break"
          :movie/poster "http://ia.media-imdb.com/images/M/MV5BMTIwNTk1MTgxMF5BMl5BanBnXkFtZTcwODI4NDUzMQ@@._V1_SX300.jpg"}))

(defcard movie-card-without-image
  (movie {:movie/title "No image"
          :movie/poster nil}))


(defui MovieList
  static om/IQuery
  (query [this]
         (let [subquery (om/get-query Movie)]
           [{:movie/list subquery}]))
  Object
  (render [this]
          (let [{:keys [movie/list]} (om/props this)]
            (dom/ul {:class "movie-list"}
             (map #(dom/li (movie %)) list)))))

(def movie-list (om/factory MovieList))

(comment
  (om/get-query MovieList))

(def my-movie-list [{:movie/id 1
                     :movie/title "Back to the future"
                     :movie/poster "http://ia.media-imdb.com/images/M/MV5BMjA5NTYzMDMyM15BMl5BanBnXkFtZTgwNjU3NDU2MTE@._V1_SX300.jpg"}
                    {:movie/id 2
                     :movie/title "The warrior"
                     :movie/poster "http://ia.media-imdb.com/images/M/MV5BNzMxNDE1ODQ4OV5BMl5BanBnXkFtZTcwMzA3MTIzMQ@@._V1_SX300.jpg"}
                    {:movie/id 3
                     :movie/title "Gremlins"
                     :movie/poster "http://ia.media-imdb.com/images/M/MV5BMTU4Njk2MzU4Ml5BMl5BanBnXkFtZTYwNjE1MTg4._V1_SX300.jpg"}
                    {:movie/id 4
                     :movie/title "Lock, Stock and Two Smoking Barrels"
                     :movie/poster "http://ia.media-imdb.com/images/M/MV5BMTU4MTM1MjUxMF5BMl5BanBnXkFtZTYwOTEzODY4._V1_SX300.jpg"}])

(defcard movie-list-card
  (movie-list {:movie/list my-movie-list}))

;; test Om data normalization
(comment (require '[cljs.pprint :as pp]))
(comment
  (om/tree->db (om/get-query MovieList) {:movie/list my-movie-list} true))

(deftest om-normalization
  (testing "IDs properly normalized"
    (let [db (om/tree->db (om/get-query MovieList) {:movie/list my-movie-list} true)]
      (is (= [[:movie/by-id 1]
              [:movie/by-id 2]
              [:movie/by-id 3]
              [:movie/by-id 4]] (:movie/list db)))
      (is (= 4 (count (:movie/by-id db)))))))
