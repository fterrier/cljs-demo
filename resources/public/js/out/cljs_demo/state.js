// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_demo.state');
goog.require('cljs.core');
if(typeof cljs_demo.state.app_state !== 'undefined'){
} else {
cljs_demo.state.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs_demo.state.reset = (function cljs_demo$state$reset(){
return cljs.core.reset_BANG_.call(null,cljs_demo.state.app_state,cljs_demo.state.initial_state);
});

//# sourceMappingURL=state.js.map