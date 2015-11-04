(defproject cljs-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [clj-stacktrace "0.2.8"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.omcljs/om "0.9.0"]
                 [prismatic/om-tools "0.3.12"]
                 [com.stuartsierra/component "0.3.0"]]
  :repl-options {:port 7888
                 :init (do (require 'clj-stacktrace.repl))
                 :caught clj-stacktrace.repl/pst+}
  :main ^:skip-aot system.init-dev
  :target-path "target/%s"
  :source-paths ["src/clj" "src/cljs" "src/cljc"]

  :cljsbuild {:builds {:app {:source-paths ["src/cljs" "src/cljc"]}}}

  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[org.clojure/tools.namespace "0.2.3"]
                                  [figwheel-sidecar "0.4.1"]]
                   :plugins [[lein-figwheel "0.4.1"]]}})