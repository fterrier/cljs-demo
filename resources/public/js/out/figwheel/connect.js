// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('cljs_demo.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__25254__delegate = function (x){
if(cljs.core.truth_(cljs_demo.core.fig_reload)){
return cljs.core.apply.call(null,cljs_demo.core.fig_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cljs-demo.core/fig-reload' is missing");
}
};
var G__25254 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__25255__i = 0, G__25255__a = new Array(arguments.length -  0);
while (G__25255__i < G__25255__a.length) {G__25255__a[G__25255__i] = arguments[G__25255__i + 0]; ++G__25255__i;}
  x = new cljs.core.IndexedSeq(G__25255__a,0);
} 
return G__25254__delegate.call(this,x);};
G__25254.cljs$lang$maxFixedArity = 0;
G__25254.cljs$lang$applyTo = (function (arglist__25256){
var x = cljs.core.seq(arglist__25256);
return G__25254__delegate(x);
});
G__25254.cljs$core$IFn$_invoke$arity$variadic = G__25254__delegate;
return G__25254;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map