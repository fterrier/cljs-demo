(ns system.init-dev
  (:require
    [clojure.tools.namespace.repl :as repl]
    [figwheel-sidecar.repl-api :as ra]
    [system.figwheel :refer :all]
    [com.stuartsierra.component :as component]))

(def system nil)

(defn init []
  (alter-var-root #'system
                  (constantly (component/system-map :figwheel (map->Figwheel figwheel-config)))))

(defn start []
  (alter-var-root #'system component/start))

(defn stop []
  (alter-var-root #'system
                  (fn [s] (when s (component/stop s)))))

(defn go []
  (init)
  (start))

(defn reset []
  (stop)
  (repl/refresh :after 'system.init-dev/go))

(defn cljs-repl []
  (ra/cljs-repl))
