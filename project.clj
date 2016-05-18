(defproject cljs-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.omcljs/om "1.0.0-alpha34"]
                 [prismatic/om-tools "0.4.0"]
                 [com.stuartsierra/component "0.3.1"]]
  :main ^:skip-aot system.init-dev
  :target-path "target/%s"
  :source-paths ["src/clj" "src/cljs" "src/cljc"]

  :cljsbuild {:builds {:app {:source-paths ["src/cljs" "src/cljc"]}}}

  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[org.clojure/tools.namespace "0.2.11"]
                                  [figwheel-sidecar "0.5.3-1"]
                                  [devcards "0.2.1-7"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :plugins [[lein-figwheel "0.5.3-1"]]}})
