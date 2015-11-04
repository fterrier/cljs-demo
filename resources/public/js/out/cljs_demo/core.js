// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs_demo.app');
cljs.core.enable_console_print_BANG_.call(null);
cljs_demo.core.fig_reload = (function cljs_demo$core$fig_reload(){
cljs_demo.app.stop.call(null);

return cljs_demo.app.main.call(null);
});
cljs_demo.app.main.call(null);

//# sourceMappingURL=core.js.map