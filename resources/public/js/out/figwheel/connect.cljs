(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [cljs-demo.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/cljs-demo.core.fig-reload (apply js/cljs-demo.core.fig-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'cljs-demo.core/fig-reload' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

