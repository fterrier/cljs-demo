// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__17614__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__17614__auto__){
return or__17614__auto__;
} else {
var G__31024 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__31024) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__31027 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__31027) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
om_tools.dom.format_opts;
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__31031){
var vec__31032 = p__31031;
var k = cljs.core.nth.call(null,vec__31032,(0),null);
var v = cljs.core.nth.call(null,vec__31032,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__17614__auto__ = React.isValidElement;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__31034 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__31034,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__31034,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args31035 = [];
var len__18672__auto___31660 = arguments.length;
var i__18673__auto___31661 = (0);
while(true){
if((i__18673__auto___31661 < len__18672__auto___31660)){
args31035.push((arguments[i__18673__auto___31661]));

var G__31662 = (i__18673__auto___31661 + (1));
i__18673__auto___31661 = G__31662;
continue;
} else {
}
break;
}

var G__31039 = args31035.length;
switch (G__31039) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31035.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq31036){
var G__31037 = cljs.core.first.call(null,seq31036);
var seq31036__$1 = cljs.core.next.call(null,seq31036);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__31037,seq31036__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args31040 = [];
var len__18672__auto___31664 = arguments.length;
var i__18673__auto___31665 = (0);
while(true){
if((i__18673__auto___31665 < len__18672__auto___31664)){
args31040.push((arguments[i__18673__auto___31665]));

var G__31666 = (i__18673__auto___31665 + (1));
i__18673__auto___31665 = G__31666;
continue;
} else {
}
break;
}

var G__31044 = args31040.length;
switch (G__31044) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31040.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq31041){
var G__31042 = cljs.core.first.call(null,seq31041);
var seq31041__$1 = cljs.core.next.call(null,seq31041);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__31042,seq31041__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args31045 = [];
var len__18672__auto___31668 = arguments.length;
var i__18673__auto___31669 = (0);
while(true){
if((i__18673__auto___31669 < len__18672__auto___31668)){
args31045.push((arguments[i__18673__auto___31669]));

var G__31670 = (i__18673__auto___31669 + (1));
i__18673__auto___31669 = G__31670;
continue;
} else {
}
break;
}

var G__31049 = args31045.length;
switch (G__31049) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31045.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq31046){
var G__31047 = cljs.core.first.call(null,seq31046);
var seq31046__$1 = cljs.core.next.call(null,seq31046);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__31047,seq31046__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args31050 = [];
var len__18672__auto___31672 = arguments.length;
var i__18673__auto___31673 = (0);
while(true){
if((i__18673__auto___31673 < len__18672__auto___31672)){
args31050.push((arguments[i__18673__auto___31673]));

var G__31674 = (i__18673__auto___31673 + (1));
i__18673__auto___31673 = G__31674;
continue;
} else {
}
break;
}

var G__31054 = args31050.length;
switch (G__31054) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31050.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq31051){
var G__31052 = cljs.core.first.call(null,seq31051);
var seq31051__$1 = cljs.core.next.call(null,seq31051);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__31052,seq31051__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args31055 = [];
var len__18672__auto___31676 = arguments.length;
var i__18673__auto___31677 = (0);
while(true){
if((i__18673__auto___31677 < len__18672__auto___31676)){
args31055.push((arguments[i__18673__auto___31677]));

var G__31678 = (i__18673__auto___31677 + (1));
i__18673__auto___31677 = G__31678;
continue;
} else {
}
break;
}

var G__31059 = args31055.length;
switch (G__31059) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31055.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq31056){
var G__31057 = cljs.core.first.call(null,seq31056);
var seq31056__$1 = cljs.core.next.call(null,seq31056);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__31057,seq31056__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args31060 = [];
var len__18672__auto___31680 = arguments.length;
var i__18673__auto___31681 = (0);
while(true){
if((i__18673__auto___31681 < len__18672__auto___31680)){
args31060.push((arguments[i__18673__auto___31681]));

var G__31682 = (i__18673__auto___31681 + (1));
i__18673__auto___31681 = G__31682;
continue;
} else {
}
break;
}

var G__31064 = args31060.length;
switch (G__31064) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31060.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq31061){
var G__31062 = cljs.core.first.call(null,seq31061);
var seq31061__$1 = cljs.core.next.call(null,seq31061);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__31062,seq31061__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args31065 = [];
var len__18672__auto___31684 = arguments.length;
var i__18673__auto___31685 = (0);
while(true){
if((i__18673__auto___31685 < len__18672__auto___31684)){
args31065.push((arguments[i__18673__auto___31685]));

var G__31686 = (i__18673__auto___31685 + (1));
i__18673__auto___31685 = G__31686;
continue;
} else {
}
break;
}

var G__31069 = args31065.length;
switch (G__31069) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31065.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq31066){
var G__31067 = cljs.core.first.call(null,seq31066);
var seq31066__$1 = cljs.core.next.call(null,seq31066);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__31067,seq31066__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args31070 = [];
var len__18672__auto___31688 = arguments.length;
var i__18673__auto___31689 = (0);
while(true){
if((i__18673__auto___31689 < len__18672__auto___31688)){
args31070.push((arguments[i__18673__auto___31689]));

var G__31690 = (i__18673__auto___31689 + (1));
i__18673__auto___31689 = G__31690;
continue;
} else {
}
break;
}

var G__31074 = args31070.length;
switch (G__31074) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31070.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq31071){
var G__31072 = cljs.core.first.call(null,seq31071);
var seq31071__$1 = cljs.core.next.call(null,seq31071);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__31072,seq31071__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args31075 = [];
var len__18672__auto___31692 = arguments.length;
var i__18673__auto___31693 = (0);
while(true){
if((i__18673__auto___31693 < len__18672__auto___31692)){
args31075.push((arguments[i__18673__auto___31693]));

var G__31694 = (i__18673__auto___31693 + (1));
i__18673__auto___31693 = G__31694;
continue;
} else {
}
break;
}

var G__31079 = args31075.length;
switch (G__31079) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31075.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq31076){
var G__31077 = cljs.core.first.call(null,seq31076);
var seq31076__$1 = cljs.core.next.call(null,seq31076);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__31077,seq31076__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args31080 = [];
var len__18672__auto___31696 = arguments.length;
var i__18673__auto___31697 = (0);
while(true){
if((i__18673__auto___31697 < len__18672__auto___31696)){
args31080.push((arguments[i__18673__auto___31697]));

var G__31698 = (i__18673__auto___31697 + (1));
i__18673__auto___31697 = G__31698;
continue;
} else {
}
break;
}

var G__31084 = args31080.length;
switch (G__31084) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31080.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq31081){
var G__31082 = cljs.core.first.call(null,seq31081);
var seq31081__$1 = cljs.core.next.call(null,seq31081);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__31082,seq31081__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args31085 = [];
var len__18672__auto___31700 = arguments.length;
var i__18673__auto___31701 = (0);
while(true){
if((i__18673__auto___31701 < len__18672__auto___31700)){
args31085.push((arguments[i__18673__auto___31701]));

var G__31702 = (i__18673__auto___31701 + (1));
i__18673__auto___31701 = G__31702;
continue;
} else {
}
break;
}

var G__31089 = args31085.length;
switch (G__31089) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31085.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq31086){
var G__31087 = cljs.core.first.call(null,seq31086);
var seq31086__$1 = cljs.core.next.call(null,seq31086);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__31087,seq31086__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args31090 = [];
var len__18672__auto___31704 = arguments.length;
var i__18673__auto___31705 = (0);
while(true){
if((i__18673__auto___31705 < len__18672__auto___31704)){
args31090.push((arguments[i__18673__auto___31705]));

var G__31706 = (i__18673__auto___31705 + (1));
i__18673__auto___31705 = G__31706;
continue;
} else {
}
break;
}

var G__31094 = args31090.length;
switch (G__31094) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31090.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq31091){
var G__31092 = cljs.core.first.call(null,seq31091);
var seq31091__$1 = cljs.core.next.call(null,seq31091);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__31092,seq31091__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args31095 = [];
var len__18672__auto___31708 = arguments.length;
var i__18673__auto___31709 = (0);
while(true){
if((i__18673__auto___31709 < len__18672__auto___31708)){
args31095.push((arguments[i__18673__auto___31709]));

var G__31710 = (i__18673__auto___31709 + (1));
i__18673__auto___31709 = G__31710;
continue;
} else {
}
break;
}

var G__31099 = args31095.length;
switch (G__31099) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31095.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq31096){
var G__31097 = cljs.core.first.call(null,seq31096);
var seq31096__$1 = cljs.core.next.call(null,seq31096);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__31097,seq31096__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args31100 = [];
var len__18672__auto___31712 = arguments.length;
var i__18673__auto___31713 = (0);
while(true){
if((i__18673__auto___31713 < len__18672__auto___31712)){
args31100.push((arguments[i__18673__auto___31713]));

var G__31714 = (i__18673__auto___31713 + (1));
i__18673__auto___31713 = G__31714;
continue;
} else {
}
break;
}

var G__31104 = args31100.length;
switch (G__31104) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31100.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq31101){
var G__31102 = cljs.core.first.call(null,seq31101);
var seq31101__$1 = cljs.core.next.call(null,seq31101);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__31102,seq31101__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args31105 = [];
var len__18672__auto___31716 = arguments.length;
var i__18673__auto___31717 = (0);
while(true){
if((i__18673__auto___31717 < len__18672__auto___31716)){
args31105.push((arguments[i__18673__auto___31717]));

var G__31718 = (i__18673__auto___31717 + (1));
i__18673__auto___31717 = G__31718;
continue;
} else {
}
break;
}

var G__31109 = args31105.length;
switch (G__31109) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31105.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq31106){
var G__31107 = cljs.core.first.call(null,seq31106);
var seq31106__$1 = cljs.core.next.call(null,seq31106);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__31107,seq31106__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args31110 = [];
var len__18672__auto___31720 = arguments.length;
var i__18673__auto___31721 = (0);
while(true){
if((i__18673__auto___31721 < len__18672__auto___31720)){
args31110.push((arguments[i__18673__auto___31721]));

var G__31722 = (i__18673__auto___31721 + (1));
i__18673__auto___31721 = G__31722;
continue;
} else {
}
break;
}

var G__31114 = args31110.length;
switch (G__31114) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31110.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq31111){
var G__31112 = cljs.core.first.call(null,seq31111);
var seq31111__$1 = cljs.core.next.call(null,seq31111);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__31112,seq31111__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args31115 = [];
var len__18672__auto___31724 = arguments.length;
var i__18673__auto___31725 = (0);
while(true){
if((i__18673__auto___31725 < len__18672__auto___31724)){
args31115.push((arguments[i__18673__auto___31725]));

var G__31726 = (i__18673__auto___31725 + (1));
i__18673__auto___31725 = G__31726;
continue;
} else {
}
break;
}

var G__31119 = args31115.length;
switch (G__31119) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31115.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq31116){
var G__31117 = cljs.core.first.call(null,seq31116);
var seq31116__$1 = cljs.core.next.call(null,seq31116);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__31117,seq31116__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args31120 = [];
var len__18672__auto___31728 = arguments.length;
var i__18673__auto___31729 = (0);
while(true){
if((i__18673__auto___31729 < len__18672__auto___31728)){
args31120.push((arguments[i__18673__auto___31729]));

var G__31730 = (i__18673__auto___31729 + (1));
i__18673__auto___31729 = G__31730;
continue;
} else {
}
break;
}

var G__31124 = args31120.length;
switch (G__31124) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31120.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq31121){
var G__31122 = cljs.core.first.call(null,seq31121);
var seq31121__$1 = cljs.core.next.call(null,seq31121);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__31122,seq31121__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args31125 = [];
var len__18672__auto___31732 = arguments.length;
var i__18673__auto___31733 = (0);
while(true){
if((i__18673__auto___31733 < len__18672__auto___31732)){
args31125.push((arguments[i__18673__auto___31733]));

var G__31734 = (i__18673__auto___31733 + (1));
i__18673__auto___31733 = G__31734;
continue;
} else {
}
break;
}

var G__31129 = args31125.length;
switch (G__31129) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31125.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq31126){
var G__31127 = cljs.core.first.call(null,seq31126);
var seq31126__$1 = cljs.core.next.call(null,seq31126);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__31127,seq31126__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args31130 = [];
var len__18672__auto___31736 = arguments.length;
var i__18673__auto___31737 = (0);
while(true){
if((i__18673__auto___31737 < len__18672__auto___31736)){
args31130.push((arguments[i__18673__auto___31737]));

var G__31738 = (i__18673__auto___31737 + (1));
i__18673__auto___31737 = G__31738;
continue;
} else {
}
break;
}

var G__31134 = args31130.length;
switch (G__31134) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31130.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq31131){
var G__31132 = cljs.core.first.call(null,seq31131);
var seq31131__$1 = cljs.core.next.call(null,seq31131);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__31132,seq31131__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args31135 = [];
var len__18672__auto___31740 = arguments.length;
var i__18673__auto___31741 = (0);
while(true){
if((i__18673__auto___31741 < len__18672__auto___31740)){
args31135.push((arguments[i__18673__auto___31741]));

var G__31742 = (i__18673__auto___31741 + (1));
i__18673__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31139 = args31135.length;
switch (G__31139) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31135.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq31136){
var G__31137 = cljs.core.first.call(null,seq31136);
var seq31136__$1 = cljs.core.next.call(null,seq31136);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__31137,seq31136__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args31140 = [];
var len__18672__auto___31744 = arguments.length;
var i__18673__auto___31745 = (0);
while(true){
if((i__18673__auto___31745 < len__18672__auto___31744)){
args31140.push((arguments[i__18673__auto___31745]));

var G__31746 = (i__18673__auto___31745 + (1));
i__18673__auto___31745 = G__31746;
continue;
} else {
}
break;
}

var G__31144 = args31140.length;
switch (G__31144) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31140.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq31141){
var G__31142 = cljs.core.first.call(null,seq31141);
var seq31141__$1 = cljs.core.next.call(null,seq31141);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__31142,seq31141__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args31145 = [];
var len__18672__auto___31748 = arguments.length;
var i__18673__auto___31749 = (0);
while(true){
if((i__18673__auto___31749 < len__18672__auto___31748)){
args31145.push((arguments[i__18673__auto___31749]));

var G__31750 = (i__18673__auto___31749 + (1));
i__18673__auto___31749 = G__31750;
continue;
} else {
}
break;
}

var G__31149 = args31145.length;
switch (G__31149) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31145.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq31146){
var G__31147 = cljs.core.first.call(null,seq31146);
var seq31146__$1 = cljs.core.next.call(null,seq31146);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__31147,seq31146__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args31150 = [];
var len__18672__auto___31752 = arguments.length;
var i__18673__auto___31753 = (0);
while(true){
if((i__18673__auto___31753 < len__18672__auto___31752)){
args31150.push((arguments[i__18673__auto___31753]));

var G__31754 = (i__18673__auto___31753 + (1));
i__18673__auto___31753 = G__31754;
continue;
} else {
}
break;
}

var G__31154 = args31150.length;
switch (G__31154) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31150.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq31151){
var G__31152 = cljs.core.first.call(null,seq31151);
var seq31151__$1 = cljs.core.next.call(null,seq31151);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__31152,seq31151__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args31155 = [];
var len__18672__auto___31756 = arguments.length;
var i__18673__auto___31757 = (0);
while(true){
if((i__18673__auto___31757 < len__18672__auto___31756)){
args31155.push((arguments[i__18673__auto___31757]));

var G__31758 = (i__18673__auto___31757 + (1));
i__18673__auto___31757 = G__31758;
continue;
} else {
}
break;
}

var G__31159 = args31155.length;
switch (G__31159) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31155.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq31156){
var G__31157 = cljs.core.first.call(null,seq31156);
var seq31156__$1 = cljs.core.next.call(null,seq31156);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__31157,seq31156__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args31160 = [];
var len__18672__auto___31760 = arguments.length;
var i__18673__auto___31761 = (0);
while(true){
if((i__18673__auto___31761 < len__18672__auto___31760)){
args31160.push((arguments[i__18673__auto___31761]));

var G__31762 = (i__18673__auto___31761 + (1));
i__18673__auto___31761 = G__31762;
continue;
} else {
}
break;
}

var G__31164 = args31160.length;
switch (G__31164) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31160.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq31161){
var G__31162 = cljs.core.first.call(null,seq31161);
var seq31161__$1 = cljs.core.next.call(null,seq31161);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__31162,seq31161__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args31165 = [];
var len__18672__auto___31764 = arguments.length;
var i__18673__auto___31765 = (0);
while(true){
if((i__18673__auto___31765 < len__18672__auto___31764)){
args31165.push((arguments[i__18673__auto___31765]));

var G__31766 = (i__18673__auto___31765 + (1));
i__18673__auto___31765 = G__31766;
continue;
} else {
}
break;
}

var G__31169 = args31165.length;
switch (G__31169) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31165.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq31166){
var G__31167 = cljs.core.first.call(null,seq31166);
var seq31166__$1 = cljs.core.next.call(null,seq31166);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__31167,seq31166__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args31170 = [];
var len__18672__auto___31768 = arguments.length;
var i__18673__auto___31769 = (0);
while(true){
if((i__18673__auto___31769 < len__18672__auto___31768)){
args31170.push((arguments[i__18673__auto___31769]));

var G__31770 = (i__18673__auto___31769 + (1));
i__18673__auto___31769 = G__31770;
continue;
} else {
}
break;
}

var G__31174 = args31170.length;
switch (G__31174) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31170.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq31171){
var G__31172 = cljs.core.first.call(null,seq31171);
var seq31171__$1 = cljs.core.next.call(null,seq31171);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__31172,seq31171__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args31175 = [];
var len__18672__auto___31772 = arguments.length;
var i__18673__auto___31773 = (0);
while(true){
if((i__18673__auto___31773 < len__18672__auto___31772)){
args31175.push((arguments[i__18673__auto___31773]));

var G__31774 = (i__18673__auto___31773 + (1));
i__18673__auto___31773 = G__31774;
continue;
} else {
}
break;
}

var G__31179 = args31175.length;
switch (G__31179) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31175.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq31176){
var G__31177 = cljs.core.first.call(null,seq31176);
var seq31176__$1 = cljs.core.next.call(null,seq31176);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__31177,seq31176__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args31180 = [];
var len__18672__auto___31776 = arguments.length;
var i__18673__auto___31777 = (0);
while(true){
if((i__18673__auto___31777 < len__18672__auto___31776)){
args31180.push((arguments[i__18673__auto___31777]));

var G__31778 = (i__18673__auto___31777 + (1));
i__18673__auto___31777 = G__31778;
continue;
} else {
}
break;
}

var G__31184 = args31180.length;
switch (G__31184) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31180.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq31181){
var G__31182 = cljs.core.first.call(null,seq31181);
var seq31181__$1 = cljs.core.next.call(null,seq31181);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__31182,seq31181__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args31185 = [];
var len__18672__auto___31780 = arguments.length;
var i__18673__auto___31781 = (0);
while(true){
if((i__18673__auto___31781 < len__18672__auto___31780)){
args31185.push((arguments[i__18673__auto___31781]));

var G__31782 = (i__18673__auto___31781 + (1));
i__18673__auto___31781 = G__31782;
continue;
} else {
}
break;
}

var G__31189 = args31185.length;
switch (G__31189) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31185.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq31186){
var G__31187 = cljs.core.first.call(null,seq31186);
var seq31186__$1 = cljs.core.next.call(null,seq31186);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__31187,seq31186__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args31190 = [];
var len__18672__auto___31784 = arguments.length;
var i__18673__auto___31785 = (0);
while(true){
if((i__18673__auto___31785 < len__18672__auto___31784)){
args31190.push((arguments[i__18673__auto___31785]));

var G__31786 = (i__18673__auto___31785 + (1));
i__18673__auto___31785 = G__31786;
continue;
} else {
}
break;
}

var G__31194 = args31190.length;
switch (G__31194) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31190.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq31191){
var G__31192 = cljs.core.first.call(null,seq31191);
var seq31191__$1 = cljs.core.next.call(null,seq31191);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__31192,seq31191__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args31200 = [];
var len__18672__auto___31788 = arguments.length;
var i__18673__auto___31789 = (0);
while(true){
if((i__18673__auto___31789 < len__18672__auto___31788)){
args31200.push((arguments[i__18673__auto___31789]));

var G__31790 = (i__18673__auto___31789 + (1));
i__18673__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var G__31204 = args31200.length;
switch (G__31204) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31200.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq31201){
var G__31202 = cljs.core.first.call(null,seq31201);
var seq31201__$1 = cljs.core.next.call(null,seq31201);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__31202,seq31201__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args31205 = [];
var len__18672__auto___31792 = arguments.length;
var i__18673__auto___31793 = (0);
while(true){
if((i__18673__auto___31793 < len__18672__auto___31792)){
args31205.push((arguments[i__18673__auto___31793]));

var G__31794 = (i__18673__auto___31793 + (1));
i__18673__auto___31793 = G__31794;
continue;
} else {
}
break;
}

var G__31209 = args31205.length;
switch (G__31209) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31205.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq31206){
var G__31207 = cljs.core.first.call(null,seq31206);
var seq31206__$1 = cljs.core.next.call(null,seq31206);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__31207,seq31206__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args31210 = [];
var len__18672__auto___31796 = arguments.length;
var i__18673__auto___31797 = (0);
while(true){
if((i__18673__auto___31797 < len__18672__auto___31796)){
args31210.push((arguments[i__18673__auto___31797]));

var G__31798 = (i__18673__auto___31797 + (1));
i__18673__auto___31797 = G__31798;
continue;
} else {
}
break;
}

var G__31214 = args31210.length;
switch (G__31214) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31210.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq31211){
var G__31212 = cljs.core.first.call(null,seq31211);
var seq31211__$1 = cljs.core.next.call(null,seq31211);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__31212,seq31211__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args31215 = [];
var len__18672__auto___31800 = arguments.length;
var i__18673__auto___31801 = (0);
while(true){
if((i__18673__auto___31801 < len__18672__auto___31800)){
args31215.push((arguments[i__18673__auto___31801]));

var G__31802 = (i__18673__auto___31801 + (1));
i__18673__auto___31801 = G__31802;
continue;
} else {
}
break;
}

var G__31219 = args31215.length;
switch (G__31219) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31215.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq31216){
var G__31217 = cljs.core.first.call(null,seq31216);
var seq31216__$1 = cljs.core.next.call(null,seq31216);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__31217,seq31216__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args31220 = [];
var len__18672__auto___31804 = arguments.length;
var i__18673__auto___31805 = (0);
while(true){
if((i__18673__auto___31805 < len__18672__auto___31804)){
args31220.push((arguments[i__18673__auto___31805]));

var G__31806 = (i__18673__auto___31805 + (1));
i__18673__auto___31805 = G__31806;
continue;
} else {
}
break;
}

var G__31224 = args31220.length;
switch (G__31224) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31220.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq31221){
var G__31222 = cljs.core.first.call(null,seq31221);
var seq31221__$1 = cljs.core.next.call(null,seq31221);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__31222,seq31221__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args31225 = [];
var len__18672__auto___31808 = arguments.length;
var i__18673__auto___31809 = (0);
while(true){
if((i__18673__auto___31809 < len__18672__auto___31808)){
args31225.push((arguments[i__18673__auto___31809]));

var G__31810 = (i__18673__auto___31809 + (1));
i__18673__auto___31809 = G__31810;
continue;
} else {
}
break;
}

var G__31229 = args31225.length;
switch (G__31229) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31225.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq31226){
var G__31227 = cljs.core.first.call(null,seq31226);
var seq31226__$1 = cljs.core.next.call(null,seq31226);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__31227,seq31226__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args31230 = [];
var len__18672__auto___31812 = arguments.length;
var i__18673__auto___31813 = (0);
while(true){
if((i__18673__auto___31813 < len__18672__auto___31812)){
args31230.push((arguments[i__18673__auto___31813]));

var G__31814 = (i__18673__auto___31813 + (1));
i__18673__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31234 = args31230.length;
switch (G__31234) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31230.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq31231){
var G__31232 = cljs.core.first.call(null,seq31231);
var seq31231__$1 = cljs.core.next.call(null,seq31231);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__31232,seq31231__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args31235 = [];
var len__18672__auto___31816 = arguments.length;
var i__18673__auto___31817 = (0);
while(true){
if((i__18673__auto___31817 < len__18672__auto___31816)){
args31235.push((arguments[i__18673__auto___31817]));

var G__31818 = (i__18673__auto___31817 + (1));
i__18673__auto___31817 = G__31818;
continue;
} else {
}
break;
}

var G__31239 = args31235.length;
switch (G__31239) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31235.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq31236){
var G__31237 = cljs.core.first.call(null,seq31236);
var seq31236__$1 = cljs.core.next.call(null,seq31236);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__31237,seq31236__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args31240 = [];
var len__18672__auto___31820 = arguments.length;
var i__18673__auto___31821 = (0);
while(true){
if((i__18673__auto___31821 < len__18672__auto___31820)){
args31240.push((arguments[i__18673__auto___31821]));

var G__31822 = (i__18673__auto___31821 + (1));
i__18673__auto___31821 = G__31822;
continue;
} else {
}
break;
}

var G__31244 = args31240.length;
switch (G__31244) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31240.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq31241){
var G__31242 = cljs.core.first.call(null,seq31241);
var seq31241__$1 = cljs.core.next.call(null,seq31241);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__31242,seq31241__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args31245 = [];
var len__18672__auto___31824 = arguments.length;
var i__18673__auto___31825 = (0);
while(true){
if((i__18673__auto___31825 < len__18672__auto___31824)){
args31245.push((arguments[i__18673__auto___31825]));

var G__31826 = (i__18673__auto___31825 + (1));
i__18673__auto___31825 = G__31826;
continue;
} else {
}
break;
}

var G__31249 = args31245.length;
switch (G__31249) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31245.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq31246){
var G__31247 = cljs.core.first.call(null,seq31246);
var seq31246__$1 = cljs.core.next.call(null,seq31246);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__31247,seq31246__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args31250 = [];
var len__18672__auto___31828 = arguments.length;
var i__18673__auto___31829 = (0);
while(true){
if((i__18673__auto___31829 < len__18672__auto___31828)){
args31250.push((arguments[i__18673__auto___31829]));

var G__31830 = (i__18673__auto___31829 + (1));
i__18673__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var G__31254 = args31250.length;
switch (G__31254) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31250.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq31251){
var G__31252 = cljs.core.first.call(null,seq31251);
var seq31251__$1 = cljs.core.next.call(null,seq31251);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__31252,seq31251__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args31255 = [];
var len__18672__auto___31832 = arguments.length;
var i__18673__auto___31833 = (0);
while(true){
if((i__18673__auto___31833 < len__18672__auto___31832)){
args31255.push((arguments[i__18673__auto___31833]));

var G__31834 = (i__18673__auto___31833 + (1));
i__18673__auto___31833 = G__31834;
continue;
} else {
}
break;
}

var G__31259 = args31255.length;
switch (G__31259) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31255.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq31256){
var G__31257 = cljs.core.first.call(null,seq31256);
var seq31256__$1 = cljs.core.next.call(null,seq31256);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__31257,seq31256__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args31260 = [];
var len__18672__auto___31836 = arguments.length;
var i__18673__auto___31837 = (0);
while(true){
if((i__18673__auto___31837 < len__18672__auto___31836)){
args31260.push((arguments[i__18673__auto___31837]));

var G__31838 = (i__18673__auto___31837 + (1));
i__18673__auto___31837 = G__31838;
continue;
} else {
}
break;
}

var G__31264 = args31260.length;
switch (G__31264) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31260.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq31261){
var G__31262 = cljs.core.first.call(null,seq31261);
var seq31261__$1 = cljs.core.next.call(null,seq31261);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__31262,seq31261__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args31265 = [];
var len__18672__auto___31840 = arguments.length;
var i__18673__auto___31841 = (0);
while(true){
if((i__18673__auto___31841 < len__18672__auto___31840)){
args31265.push((arguments[i__18673__auto___31841]));

var G__31842 = (i__18673__auto___31841 + (1));
i__18673__auto___31841 = G__31842;
continue;
} else {
}
break;
}

var G__31269 = args31265.length;
switch (G__31269) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31265.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq31266){
var G__31267 = cljs.core.first.call(null,seq31266);
var seq31266__$1 = cljs.core.next.call(null,seq31266);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__31267,seq31266__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args31270 = [];
var len__18672__auto___31844 = arguments.length;
var i__18673__auto___31845 = (0);
while(true){
if((i__18673__auto___31845 < len__18672__auto___31844)){
args31270.push((arguments[i__18673__auto___31845]));

var G__31846 = (i__18673__auto___31845 + (1));
i__18673__auto___31845 = G__31846;
continue;
} else {
}
break;
}

var G__31274 = args31270.length;
switch (G__31274) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31270.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq31271){
var G__31272 = cljs.core.first.call(null,seq31271);
var seq31271__$1 = cljs.core.next.call(null,seq31271);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__31272,seq31271__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args31275 = [];
var len__18672__auto___31848 = arguments.length;
var i__18673__auto___31849 = (0);
while(true){
if((i__18673__auto___31849 < len__18672__auto___31848)){
args31275.push((arguments[i__18673__auto___31849]));

var G__31850 = (i__18673__auto___31849 + (1));
i__18673__auto___31849 = G__31850;
continue;
} else {
}
break;
}

var G__31279 = args31275.length;
switch (G__31279) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31275.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq31276){
var G__31277 = cljs.core.first.call(null,seq31276);
var seq31276__$1 = cljs.core.next.call(null,seq31276);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__31277,seq31276__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args31280 = [];
var len__18672__auto___31852 = arguments.length;
var i__18673__auto___31853 = (0);
while(true){
if((i__18673__auto___31853 < len__18672__auto___31852)){
args31280.push((arguments[i__18673__auto___31853]));

var G__31854 = (i__18673__auto___31853 + (1));
i__18673__auto___31853 = G__31854;
continue;
} else {
}
break;
}

var G__31284 = args31280.length;
switch (G__31284) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31280.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq31281){
var G__31282 = cljs.core.first.call(null,seq31281);
var seq31281__$1 = cljs.core.next.call(null,seq31281);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__31282,seq31281__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args31285 = [];
var len__18672__auto___31856 = arguments.length;
var i__18673__auto___31857 = (0);
while(true){
if((i__18673__auto___31857 < len__18672__auto___31856)){
args31285.push((arguments[i__18673__auto___31857]));

var G__31858 = (i__18673__auto___31857 + (1));
i__18673__auto___31857 = G__31858;
continue;
} else {
}
break;
}

var G__31289 = args31285.length;
switch (G__31289) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31285.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq31286){
var G__31287 = cljs.core.first.call(null,seq31286);
var seq31286__$1 = cljs.core.next.call(null,seq31286);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__31287,seq31286__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args31290 = [];
var len__18672__auto___31860 = arguments.length;
var i__18673__auto___31861 = (0);
while(true){
if((i__18673__auto___31861 < len__18672__auto___31860)){
args31290.push((arguments[i__18673__auto___31861]));

var G__31862 = (i__18673__auto___31861 + (1));
i__18673__auto___31861 = G__31862;
continue;
} else {
}
break;
}

var G__31294 = args31290.length;
switch (G__31294) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31290.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq31291){
var G__31292 = cljs.core.first.call(null,seq31291);
var seq31291__$1 = cljs.core.next.call(null,seq31291);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__31292,seq31291__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args31295 = [];
var len__18672__auto___31864 = arguments.length;
var i__18673__auto___31865 = (0);
while(true){
if((i__18673__auto___31865 < len__18672__auto___31864)){
args31295.push((arguments[i__18673__auto___31865]));

var G__31866 = (i__18673__auto___31865 + (1));
i__18673__auto___31865 = G__31866;
continue;
} else {
}
break;
}

var G__31299 = args31295.length;
switch (G__31299) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31295.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq31296){
var G__31297 = cljs.core.first.call(null,seq31296);
var seq31296__$1 = cljs.core.next.call(null,seq31296);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__31297,seq31296__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args31300 = [];
var len__18672__auto___31868 = arguments.length;
var i__18673__auto___31869 = (0);
while(true){
if((i__18673__auto___31869 < len__18672__auto___31868)){
args31300.push((arguments[i__18673__auto___31869]));

var G__31870 = (i__18673__auto___31869 + (1));
i__18673__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var G__31304 = args31300.length;
switch (G__31304) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31300.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq31301){
var G__31302 = cljs.core.first.call(null,seq31301);
var seq31301__$1 = cljs.core.next.call(null,seq31301);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__31302,seq31301__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args31305 = [];
var len__18672__auto___31872 = arguments.length;
var i__18673__auto___31873 = (0);
while(true){
if((i__18673__auto___31873 < len__18672__auto___31872)){
args31305.push((arguments[i__18673__auto___31873]));

var G__31874 = (i__18673__auto___31873 + (1));
i__18673__auto___31873 = G__31874;
continue;
} else {
}
break;
}

var G__31309 = args31305.length;
switch (G__31309) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31305.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq31306){
var G__31307 = cljs.core.first.call(null,seq31306);
var seq31306__$1 = cljs.core.next.call(null,seq31306);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__31307,seq31306__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args31310 = [];
var len__18672__auto___31876 = arguments.length;
var i__18673__auto___31877 = (0);
while(true){
if((i__18673__auto___31877 < len__18672__auto___31876)){
args31310.push((arguments[i__18673__auto___31877]));

var G__31878 = (i__18673__auto___31877 + (1));
i__18673__auto___31877 = G__31878;
continue;
} else {
}
break;
}

var G__31314 = args31310.length;
switch (G__31314) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31310.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq31311){
var G__31312 = cljs.core.first.call(null,seq31311);
var seq31311__$1 = cljs.core.next.call(null,seq31311);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__31312,seq31311__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args31315 = [];
var len__18672__auto___31880 = arguments.length;
var i__18673__auto___31881 = (0);
while(true){
if((i__18673__auto___31881 < len__18672__auto___31880)){
args31315.push((arguments[i__18673__auto___31881]));

var G__31882 = (i__18673__auto___31881 + (1));
i__18673__auto___31881 = G__31882;
continue;
} else {
}
break;
}

var G__31319 = args31315.length;
switch (G__31319) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31315.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq31316){
var G__31317 = cljs.core.first.call(null,seq31316);
var seq31316__$1 = cljs.core.next.call(null,seq31316);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__31317,seq31316__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args31320 = [];
var len__18672__auto___31884 = arguments.length;
var i__18673__auto___31885 = (0);
while(true){
if((i__18673__auto___31885 < len__18672__auto___31884)){
args31320.push((arguments[i__18673__auto___31885]));

var G__31886 = (i__18673__auto___31885 + (1));
i__18673__auto___31885 = G__31886;
continue;
} else {
}
break;
}

var G__31324 = args31320.length;
switch (G__31324) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31320.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq31321){
var G__31322 = cljs.core.first.call(null,seq31321);
var seq31321__$1 = cljs.core.next.call(null,seq31321);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__31322,seq31321__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args31325 = [];
var len__18672__auto___31888 = arguments.length;
var i__18673__auto___31889 = (0);
while(true){
if((i__18673__auto___31889 < len__18672__auto___31888)){
args31325.push((arguments[i__18673__auto___31889]));

var G__31890 = (i__18673__auto___31889 + (1));
i__18673__auto___31889 = G__31890;
continue;
} else {
}
break;
}

var G__31329 = args31325.length;
switch (G__31329) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31325.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq31326){
var G__31327 = cljs.core.first.call(null,seq31326);
var seq31326__$1 = cljs.core.next.call(null,seq31326);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__31327,seq31326__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args31330 = [];
var len__18672__auto___31892 = arguments.length;
var i__18673__auto___31893 = (0);
while(true){
if((i__18673__auto___31893 < len__18672__auto___31892)){
args31330.push((arguments[i__18673__auto___31893]));

var G__31894 = (i__18673__auto___31893 + (1));
i__18673__auto___31893 = G__31894;
continue;
} else {
}
break;
}

var G__31334 = args31330.length;
switch (G__31334) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31330.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq31331){
var G__31332 = cljs.core.first.call(null,seq31331);
var seq31331__$1 = cljs.core.next.call(null,seq31331);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__31332,seq31331__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args31335 = [];
var len__18672__auto___31896 = arguments.length;
var i__18673__auto___31897 = (0);
while(true){
if((i__18673__auto___31897 < len__18672__auto___31896)){
args31335.push((arguments[i__18673__auto___31897]));

var G__31898 = (i__18673__auto___31897 + (1));
i__18673__auto___31897 = G__31898;
continue;
} else {
}
break;
}

var G__31339 = args31335.length;
switch (G__31339) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31335.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq31336){
var G__31337 = cljs.core.first.call(null,seq31336);
var seq31336__$1 = cljs.core.next.call(null,seq31336);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__31337,seq31336__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args31340 = [];
var len__18672__auto___31900 = arguments.length;
var i__18673__auto___31901 = (0);
while(true){
if((i__18673__auto___31901 < len__18672__auto___31900)){
args31340.push((arguments[i__18673__auto___31901]));

var G__31902 = (i__18673__auto___31901 + (1));
i__18673__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var G__31344 = args31340.length;
switch (G__31344) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31340.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq31341){
var G__31342 = cljs.core.first.call(null,seq31341);
var seq31341__$1 = cljs.core.next.call(null,seq31341);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__31342,seq31341__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args31345 = [];
var len__18672__auto___31904 = arguments.length;
var i__18673__auto___31905 = (0);
while(true){
if((i__18673__auto___31905 < len__18672__auto___31904)){
args31345.push((arguments[i__18673__auto___31905]));

var G__31906 = (i__18673__auto___31905 + (1));
i__18673__auto___31905 = G__31906;
continue;
} else {
}
break;
}

var G__31349 = args31345.length;
switch (G__31349) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31345.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq31346){
var G__31347 = cljs.core.first.call(null,seq31346);
var seq31346__$1 = cljs.core.next.call(null,seq31346);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__31347,seq31346__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args31350 = [];
var len__18672__auto___31908 = arguments.length;
var i__18673__auto___31909 = (0);
while(true){
if((i__18673__auto___31909 < len__18672__auto___31908)){
args31350.push((arguments[i__18673__auto___31909]));

var G__31910 = (i__18673__auto___31909 + (1));
i__18673__auto___31909 = G__31910;
continue;
} else {
}
break;
}

var G__31354 = args31350.length;
switch (G__31354) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31350.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq31351){
var G__31352 = cljs.core.first.call(null,seq31351);
var seq31351__$1 = cljs.core.next.call(null,seq31351);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__31352,seq31351__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args31355 = [];
var len__18672__auto___31912 = arguments.length;
var i__18673__auto___31913 = (0);
while(true){
if((i__18673__auto___31913 < len__18672__auto___31912)){
args31355.push((arguments[i__18673__auto___31913]));

var G__31914 = (i__18673__auto___31913 + (1));
i__18673__auto___31913 = G__31914;
continue;
} else {
}
break;
}

var G__31359 = args31355.length;
switch (G__31359) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31355.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq31356){
var G__31357 = cljs.core.first.call(null,seq31356);
var seq31356__$1 = cljs.core.next.call(null,seq31356);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__31357,seq31356__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args31360 = [];
var len__18672__auto___31916 = arguments.length;
var i__18673__auto___31917 = (0);
while(true){
if((i__18673__auto___31917 < len__18672__auto___31916)){
args31360.push((arguments[i__18673__auto___31917]));

var G__31918 = (i__18673__auto___31917 + (1));
i__18673__auto___31917 = G__31918;
continue;
} else {
}
break;
}

var G__31364 = args31360.length;
switch (G__31364) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31360.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq31361){
var G__31362 = cljs.core.first.call(null,seq31361);
var seq31361__$1 = cljs.core.next.call(null,seq31361);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__31362,seq31361__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args31365 = [];
var len__18672__auto___31920 = arguments.length;
var i__18673__auto___31921 = (0);
while(true){
if((i__18673__auto___31921 < len__18672__auto___31920)){
args31365.push((arguments[i__18673__auto___31921]));

var G__31922 = (i__18673__auto___31921 + (1));
i__18673__auto___31921 = G__31922;
continue;
} else {
}
break;
}

var G__31369 = args31365.length;
switch (G__31369) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31365.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq31366){
var G__31367 = cljs.core.first.call(null,seq31366);
var seq31366__$1 = cljs.core.next.call(null,seq31366);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__31367,seq31366__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args31370 = [];
var len__18672__auto___31924 = arguments.length;
var i__18673__auto___31925 = (0);
while(true){
if((i__18673__auto___31925 < len__18672__auto___31924)){
args31370.push((arguments[i__18673__auto___31925]));

var G__31926 = (i__18673__auto___31925 + (1));
i__18673__auto___31925 = G__31926;
continue;
} else {
}
break;
}

var G__31374 = args31370.length;
switch (G__31374) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31370.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq31371){
var G__31372 = cljs.core.first.call(null,seq31371);
var seq31371__$1 = cljs.core.next.call(null,seq31371);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__31372,seq31371__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args31375 = [];
var len__18672__auto___31928 = arguments.length;
var i__18673__auto___31929 = (0);
while(true){
if((i__18673__auto___31929 < len__18672__auto___31928)){
args31375.push((arguments[i__18673__auto___31929]));

var G__31930 = (i__18673__auto___31929 + (1));
i__18673__auto___31929 = G__31930;
continue;
} else {
}
break;
}

var G__31379 = args31375.length;
switch (G__31379) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31375.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq31376){
var G__31377 = cljs.core.first.call(null,seq31376);
var seq31376__$1 = cljs.core.next.call(null,seq31376);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__31377,seq31376__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args31380 = [];
var len__18672__auto___31932 = arguments.length;
var i__18673__auto___31933 = (0);
while(true){
if((i__18673__auto___31933 < len__18672__auto___31932)){
args31380.push((arguments[i__18673__auto___31933]));

var G__31934 = (i__18673__auto___31933 + (1));
i__18673__auto___31933 = G__31934;
continue;
} else {
}
break;
}

var G__31384 = args31380.length;
switch (G__31384) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31380.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq31381){
var G__31382 = cljs.core.first.call(null,seq31381);
var seq31381__$1 = cljs.core.next.call(null,seq31381);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__31382,seq31381__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args31385 = [];
var len__18672__auto___31936 = arguments.length;
var i__18673__auto___31937 = (0);
while(true){
if((i__18673__auto___31937 < len__18672__auto___31936)){
args31385.push((arguments[i__18673__auto___31937]));

var G__31938 = (i__18673__auto___31937 + (1));
i__18673__auto___31937 = G__31938;
continue;
} else {
}
break;
}

var G__31389 = args31385.length;
switch (G__31389) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31385.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq31386){
var G__31387 = cljs.core.first.call(null,seq31386);
var seq31386__$1 = cljs.core.next.call(null,seq31386);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__31387,seq31386__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args31390 = [];
var len__18672__auto___31940 = arguments.length;
var i__18673__auto___31941 = (0);
while(true){
if((i__18673__auto___31941 < len__18672__auto___31940)){
args31390.push((arguments[i__18673__auto___31941]));

var G__31942 = (i__18673__auto___31941 + (1));
i__18673__auto___31941 = G__31942;
continue;
} else {
}
break;
}

var G__31394 = args31390.length;
switch (G__31394) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31390.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq31391){
var G__31392 = cljs.core.first.call(null,seq31391);
var seq31391__$1 = cljs.core.next.call(null,seq31391);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__31392,seq31391__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args31395 = [];
var len__18672__auto___31944 = arguments.length;
var i__18673__auto___31945 = (0);
while(true){
if((i__18673__auto___31945 < len__18672__auto___31944)){
args31395.push((arguments[i__18673__auto___31945]));

var G__31946 = (i__18673__auto___31945 + (1));
i__18673__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var G__31399 = args31395.length;
switch (G__31399) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31395.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq31396){
var G__31397 = cljs.core.first.call(null,seq31396);
var seq31396__$1 = cljs.core.next.call(null,seq31396);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__31397,seq31396__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args31400 = [];
var len__18672__auto___31948 = arguments.length;
var i__18673__auto___31949 = (0);
while(true){
if((i__18673__auto___31949 < len__18672__auto___31948)){
args31400.push((arguments[i__18673__auto___31949]));

var G__31950 = (i__18673__auto___31949 + (1));
i__18673__auto___31949 = G__31950;
continue;
} else {
}
break;
}

var G__31404 = args31400.length;
switch (G__31404) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31400.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq31401){
var G__31402 = cljs.core.first.call(null,seq31401);
var seq31401__$1 = cljs.core.next.call(null,seq31401);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__31402,seq31401__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args31405 = [];
var len__18672__auto___31952 = arguments.length;
var i__18673__auto___31953 = (0);
while(true){
if((i__18673__auto___31953 < len__18672__auto___31952)){
args31405.push((arguments[i__18673__auto___31953]));

var G__31954 = (i__18673__auto___31953 + (1));
i__18673__auto___31953 = G__31954;
continue;
} else {
}
break;
}

var G__31409 = args31405.length;
switch (G__31409) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31405.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq31406){
var G__31407 = cljs.core.first.call(null,seq31406);
var seq31406__$1 = cljs.core.next.call(null,seq31406);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__31407,seq31406__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args31410 = [];
var len__18672__auto___31956 = arguments.length;
var i__18673__auto___31957 = (0);
while(true){
if((i__18673__auto___31957 < len__18672__auto___31956)){
args31410.push((arguments[i__18673__auto___31957]));

var G__31958 = (i__18673__auto___31957 + (1));
i__18673__auto___31957 = G__31958;
continue;
} else {
}
break;
}

var G__31414 = args31410.length;
switch (G__31414) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31410.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq31411){
var G__31412 = cljs.core.first.call(null,seq31411);
var seq31411__$1 = cljs.core.next.call(null,seq31411);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__31412,seq31411__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args31415 = [];
var len__18672__auto___31960 = arguments.length;
var i__18673__auto___31961 = (0);
while(true){
if((i__18673__auto___31961 < len__18672__auto___31960)){
args31415.push((arguments[i__18673__auto___31961]));

var G__31962 = (i__18673__auto___31961 + (1));
i__18673__auto___31961 = G__31962;
continue;
} else {
}
break;
}

var G__31419 = args31415.length;
switch (G__31419) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31415.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq31416){
var G__31417 = cljs.core.first.call(null,seq31416);
var seq31416__$1 = cljs.core.next.call(null,seq31416);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__31417,seq31416__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args31420 = [];
var len__18672__auto___31964 = arguments.length;
var i__18673__auto___31965 = (0);
while(true){
if((i__18673__auto___31965 < len__18672__auto___31964)){
args31420.push((arguments[i__18673__auto___31965]));

var G__31966 = (i__18673__auto___31965 + (1));
i__18673__auto___31965 = G__31966;
continue;
} else {
}
break;
}

var G__31424 = args31420.length;
switch (G__31424) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31420.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq31421){
var G__31422 = cljs.core.first.call(null,seq31421);
var seq31421__$1 = cljs.core.next.call(null,seq31421);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__31422,seq31421__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args31425 = [];
var len__18672__auto___31968 = arguments.length;
var i__18673__auto___31969 = (0);
while(true){
if((i__18673__auto___31969 < len__18672__auto___31968)){
args31425.push((arguments[i__18673__auto___31969]));

var G__31970 = (i__18673__auto___31969 + (1));
i__18673__auto___31969 = G__31970;
continue;
} else {
}
break;
}

var G__31429 = args31425.length;
switch (G__31429) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31425.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq31426){
var G__31427 = cljs.core.first.call(null,seq31426);
var seq31426__$1 = cljs.core.next.call(null,seq31426);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__31427,seq31426__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args31430 = [];
var len__18672__auto___31972 = arguments.length;
var i__18673__auto___31973 = (0);
while(true){
if((i__18673__auto___31973 < len__18672__auto___31972)){
args31430.push((arguments[i__18673__auto___31973]));

var G__31974 = (i__18673__auto___31973 + (1));
i__18673__auto___31973 = G__31974;
continue;
} else {
}
break;
}

var G__31434 = args31430.length;
switch (G__31434) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31430.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq31431){
var G__31432 = cljs.core.first.call(null,seq31431);
var seq31431__$1 = cljs.core.next.call(null,seq31431);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__31432,seq31431__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args31435 = [];
var len__18672__auto___31976 = arguments.length;
var i__18673__auto___31977 = (0);
while(true){
if((i__18673__auto___31977 < len__18672__auto___31976)){
args31435.push((arguments[i__18673__auto___31977]));

var G__31978 = (i__18673__auto___31977 + (1));
i__18673__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var G__31439 = args31435.length;
switch (G__31439) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31435.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq31436){
var G__31437 = cljs.core.first.call(null,seq31436);
var seq31436__$1 = cljs.core.next.call(null,seq31436);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__31437,seq31436__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args31440 = [];
var len__18672__auto___31980 = arguments.length;
var i__18673__auto___31981 = (0);
while(true){
if((i__18673__auto___31981 < len__18672__auto___31980)){
args31440.push((arguments[i__18673__auto___31981]));

var G__31982 = (i__18673__auto___31981 + (1));
i__18673__auto___31981 = G__31982;
continue;
} else {
}
break;
}

var G__31444 = args31440.length;
switch (G__31444) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31440.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq31441){
var G__31442 = cljs.core.first.call(null,seq31441);
var seq31441__$1 = cljs.core.next.call(null,seq31441);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__31442,seq31441__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args31445 = [];
var len__18672__auto___31984 = arguments.length;
var i__18673__auto___31985 = (0);
while(true){
if((i__18673__auto___31985 < len__18672__auto___31984)){
args31445.push((arguments[i__18673__auto___31985]));

var G__31986 = (i__18673__auto___31985 + (1));
i__18673__auto___31985 = G__31986;
continue;
} else {
}
break;
}

var G__31449 = args31445.length;
switch (G__31449) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31445.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq31446){
var G__31447 = cljs.core.first.call(null,seq31446);
var seq31446__$1 = cljs.core.next.call(null,seq31446);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__31447,seq31446__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args31450 = [];
var len__18672__auto___31988 = arguments.length;
var i__18673__auto___31989 = (0);
while(true){
if((i__18673__auto___31989 < len__18672__auto___31988)){
args31450.push((arguments[i__18673__auto___31989]));

var G__31990 = (i__18673__auto___31989 + (1));
i__18673__auto___31989 = G__31990;
continue;
} else {
}
break;
}

var G__31454 = args31450.length;
switch (G__31454) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31450.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq31451){
var G__31452 = cljs.core.first.call(null,seq31451);
var seq31451__$1 = cljs.core.next.call(null,seq31451);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__31452,seq31451__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(var_args){
var args31455 = [];
var len__18672__auto___31992 = arguments.length;
var i__18673__auto___31993 = (0);
while(true){
if((i__18673__auto___31993 < len__18672__auto___31992)){
args31455.push((arguments[i__18673__auto___31993]));

var G__31994 = (i__18673__auto___31993 + (1));
i__18673__auto___31993 = G__31994;
continue;
} else {
}
break;
}

var G__31459 = args31455.length;
switch (G__31459) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31455.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq31456){
var G__31457 = cljs.core.first.call(null,seq31456);
var seq31456__$1 = cljs.core.next.call(null,seq31456);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__31457,seq31456__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args31460 = [];
var len__18672__auto___31996 = arguments.length;
var i__18673__auto___31997 = (0);
while(true){
if((i__18673__auto___31997 < len__18672__auto___31996)){
args31460.push((arguments[i__18673__auto___31997]));

var G__31998 = (i__18673__auto___31997 + (1));
i__18673__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var G__31464 = args31460.length;
switch (G__31464) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31460.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq31461){
var G__31462 = cljs.core.first.call(null,seq31461);
var seq31461__$1 = cljs.core.next.call(null,seq31461);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__31462,seq31461__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args31465 = [];
var len__18672__auto___32000 = arguments.length;
var i__18673__auto___32001 = (0);
while(true){
if((i__18673__auto___32001 < len__18672__auto___32000)){
args31465.push((arguments[i__18673__auto___32001]));

var G__32002 = (i__18673__auto___32001 + (1));
i__18673__auto___32001 = G__32002;
continue;
} else {
}
break;
}

var G__31469 = args31465.length;
switch (G__31469) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31465.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq31466){
var G__31467 = cljs.core.first.call(null,seq31466);
var seq31466__$1 = cljs.core.next.call(null,seq31466);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__31467,seq31466__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args31470 = [];
var len__18672__auto___32004 = arguments.length;
var i__18673__auto___32005 = (0);
while(true){
if((i__18673__auto___32005 < len__18672__auto___32004)){
args31470.push((arguments[i__18673__auto___32005]));

var G__32006 = (i__18673__auto___32005 + (1));
i__18673__auto___32005 = G__32006;
continue;
} else {
}
break;
}

var G__31474 = args31470.length;
switch (G__31474) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31470.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq31471){
var G__31472 = cljs.core.first.call(null,seq31471);
var seq31471__$1 = cljs.core.next.call(null,seq31471);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__31472,seq31471__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args31475 = [];
var len__18672__auto___32008 = arguments.length;
var i__18673__auto___32009 = (0);
while(true){
if((i__18673__auto___32009 < len__18672__auto___32008)){
args31475.push((arguments[i__18673__auto___32009]));

var G__32010 = (i__18673__auto___32009 + (1));
i__18673__auto___32009 = G__32010;
continue;
} else {
}
break;
}

var G__31479 = args31475.length;
switch (G__31479) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31475.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq31476){
var G__31477 = cljs.core.first.call(null,seq31476);
var seq31476__$1 = cljs.core.next.call(null,seq31476);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__31477,seq31476__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args31480 = [];
var len__18672__auto___32012 = arguments.length;
var i__18673__auto___32013 = (0);
while(true){
if((i__18673__auto___32013 < len__18672__auto___32012)){
args31480.push((arguments[i__18673__auto___32013]));

var G__32014 = (i__18673__auto___32013 + (1));
i__18673__auto___32013 = G__32014;
continue;
} else {
}
break;
}

var G__31484 = args31480.length;
switch (G__31484) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31480.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq31481){
var G__31482 = cljs.core.first.call(null,seq31481);
var seq31481__$1 = cljs.core.next.call(null,seq31481);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__31482,seq31481__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args31485 = [];
var len__18672__auto___32016 = arguments.length;
var i__18673__auto___32017 = (0);
while(true){
if((i__18673__auto___32017 < len__18672__auto___32016)){
args31485.push((arguments[i__18673__auto___32017]));

var G__32018 = (i__18673__auto___32017 + (1));
i__18673__auto___32017 = G__32018;
continue;
} else {
}
break;
}

var G__31489 = args31485.length;
switch (G__31489) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31485.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq31486){
var G__31487 = cljs.core.first.call(null,seq31486);
var seq31486__$1 = cljs.core.next.call(null,seq31486);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__31487,seq31486__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args31490 = [];
var len__18672__auto___32020 = arguments.length;
var i__18673__auto___32021 = (0);
while(true){
if((i__18673__auto___32021 < len__18672__auto___32020)){
args31490.push((arguments[i__18673__auto___32021]));

var G__32022 = (i__18673__auto___32021 + (1));
i__18673__auto___32021 = G__32022;
continue;
} else {
}
break;
}

var G__31494 = args31490.length;
switch (G__31494) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31490.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq31491){
var G__31492 = cljs.core.first.call(null,seq31491);
var seq31491__$1 = cljs.core.next.call(null,seq31491);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__31492,seq31491__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args31495 = [];
var len__18672__auto___32024 = arguments.length;
var i__18673__auto___32025 = (0);
while(true){
if((i__18673__auto___32025 < len__18672__auto___32024)){
args31495.push((arguments[i__18673__auto___32025]));

var G__32026 = (i__18673__auto___32025 + (1));
i__18673__auto___32025 = G__32026;
continue;
} else {
}
break;
}

var G__31499 = args31495.length;
switch (G__31499) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31495.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq31496){
var G__31497 = cljs.core.first.call(null,seq31496);
var seq31496__$1 = cljs.core.next.call(null,seq31496);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__31497,seq31496__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args31500 = [];
var len__18672__auto___32028 = arguments.length;
var i__18673__auto___32029 = (0);
while(true){
if((i__18673__auto___32029 < len__18672__auto___32028)){
args31500.push((arguments[i__18673__auto___32029]));

var G__32030 = (i__18673__auto___32029 + (1));
i__18673__auto___32029 = G__32030;
continue;
} else {
}
break;
}

var G__31504 = args31500.length;
switch (G__31504) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31500.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq31501){
var G__31502 = cljs.core.first.call(null,seq31501);
var seq31501__$1 = cljs.core.next.call(null,seq31501);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__31502,seq31501__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args31505 = [];
var len__18672__auto___32032 = arguments.length;
var i__18673__auto___32033 = (0);
while(true){
if((i__18673__auto___32033 < len__18672__auto___32032)){
args31505.push((arguments[i__18673__auto___32033]));

var G__32034 = (i__18673__auto___32033 + (1));
i__18673__auto___32033 = G__32034;
continue;
} else {
}
break;
}

var G__31509 = args31505.length;
switch (G__31509) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31505.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq31506){
var G__31507 = cljs.core.first.call(null,seq31506);
var seq31506__$1 = cljs.core.next.call(null,seq31506);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__31507,seq31506__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args31510 = [];
var len__18672__auto___32036 = arguments.length;
var i__18673__auto___32037 = (0);
while(true){
if((i__18673__auto___32037 < len__18672__auto___32036)){
args31510.push((arguments[i__18673__auto___32037]));

var G__32038 = (i__18673__auto___32037 + (1));
i__18673__auto___32037 = G__32038;
continue;
} else {
}
break;
}

var G__31514 = args31510.length;
switch (G__31514) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31510.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq31511){
var G__31512 = cljs.core.first.call(null,seq31511);
var seq31511__$1 = cljs.core.next.call(null,seq31511);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__31512,seq31511__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args31515 = [];
var len__18672__auto___32040 = arguments.length;
var i__18673__auto___32041 = (0);
while(true){
if((i__18673__auto___32041 < len__18672__auto___32040)){
args31515.push((arguments[i__18673__auto___32041]));

var G__32042 = (i__18673__auto___32041 + (1));
i__18673__auto___32041 = G__32042;
continue;
} else {
}
break;
}

var G__31519 = args31515.length;
switch (G__31519) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31515.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq31516){
var G__31517 = cljs.core.first.call(null,seq31516);
var seq31516__$1 = cljs.core.next.call(null,seq31516);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__31517,seq31516__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args31520 = [];
var len__18672__auto___32044 = arguments.length;
var i__18673__auto___32045 = (0);
while(true){
if((i__18673__auto___32045 < len__18672__auto___32044)){
args31520.push((arguments[i__18673__auto___32045]));

var G__32046 = (i__18673__auto___32045 + (1));
i__18673__auto___32045 = G__32046;
continue;
} else {
}
break;
}

var G__31524 = args31520.length;
switch (G__31524) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31520.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq31521){
var G__31522 = cljs.core.first.call(null,seq31521);
var seq31521__$1 = cljs.core.next.call(null,seq31521);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__31522,seq31521__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args31525 = [];
var len__18672__auto___32048 = arguments.length;
var i__18673__auto___32049 = (0);
while(true){
if((i__18673__auto___32049 < len__18672__auto___32048)){
args31525.push((arguments[i__18673__auto___32049]));

var G__32050 = (i__18673__auto___32049 + (1));
i__18673__auto___32049 = G__32050;
continue;
} else {
}
break;
}

var G__31529 = args31525.length;
switch (G__31529) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31525.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq31526){
var G__31527 = cljs.core.first.call(null,seq31526);
var seq31526__$1 = cljs.core.next.call(null,seq31526);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__31527,seq31526__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args31530 = [];
var len__18672__auto___32052 = arguments.length;
var i__18673__auto___32053 = (0);
while(true){
if((i__18673__auto___32053 < len__18672__auto___32052)){
args31530.push((arguments[i__18673__auto___32053]));

var G__32054 = (i__18673__auto___32053 + (1));
i__18673__auto___32053 = G__32054;
continue;
} else {
}
break;
}

var G__31534 = args31530.length;
switch (G__31534) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31530.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq31531){
var G__31532 = cljs.core.first.call(null,seq31531);
var seq31531__$1 = cljs.core.next.call(null,seq31531);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__31532,seq31531__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args31535 = [];
var len__18672__auto___32056 = arguments.length;
var i__18673__auto___32057 = (0);
while(true){
if((i__18673__auto___32057 < len__18672__auto___32056)){
args31535.push((arguments[i__18673__auto___32057]));

var G__32058 = (i__18673__auto___32057 + (1));
i__18673__auto___32057 = G__32058;
continue;
} else {
}
break;
}

var G__31539 = args31535.length;
switch (G__31539) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31535.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq31536){
var G__31537 = cljs.core.first.call(null,seq31536);
var seq31536__$1 = cljs.core.next.call(null,seq31536);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__31537,seq31536__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args31540 = [];
var len__18672__auto___32060 = arguments.length;
var i__18673__auto___32061 = (0);
while(true){
if((i__18673__auto___32061 < len__18672__auto___32060)){
args31540.push((arguments[i__18673__auto___32061]));

var G__32062 = (i__18673__auto___32061 + (1));
i__18673__auto___32061 = G__32062;
continue;
} else {
}
break;
}

var G__31544 = args31540.length;
switch (G__31544) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31540.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq31541){
var G__31542 = cljs.core.first.call(null,seq31541);
var seq31541__$1 = cljs.core.next.call(null,seq31541);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__31542,seq31541__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args31545 = [];
var len__18672__auto___32064 = arguments.length;
var i__18673__auto___32065 = (0);
while(true){
if((i__18673__auto___32065 < len__18672__auto___32064)){
args31545.push((arguments[i__18673__auto___32065]));

var G__32066 = (i__18673__auto___32065 + (1));
i__18673__auto___32065 = G__32066;
continue;
} else {
}
break;
}

var G__31549 = args31545.length;
switch (G__31549) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31545.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq31546){
var G__31547 = cljs.core.first.call(null,seq31546);
var seq31546__$1 = cljs.core.next.call(null,seq31546);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__31547,seq31546__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args31550 = [];
var len__18672__auto___32068 = arguments.length;
var i__18673__auto___32069 = (0);
while(true){
if((i__18673__auto___32069 < len__18672__auto___32068)){
args31550.push((arguments[i__18673__auto___32069]));

var G__32070 = (i__18673__auto___32069 + (1));
i__18673__auto___32069 = G__32070;
continue;
} else {
}
break;
}

var G__31554 = args31550.length;
switch (G__31554) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31550.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq31551){
var G__31552 = cljs.core.first.call(null,seq31551);
var seq31551__$1 = cljs.core.next.call(null,seq31551);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__31552,seq31551__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args31555 = [];
var len__18672__auto___32072 = arguments.length;
var i__18673__auto___32073 = (0);
while(true){
if((i__18673__auto___32073 < len__18672__auto___32072)){
args31555.push((arguments[i__18673__auto___32073]));

var G__32074 = (i__18673__auto___32073 + (1));
i__18673__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var G__31559 = args31555.length;
switch (G__31559) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31555.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq31556){
var G__31557 = cljs.core.first.call(null,seq31556);
var seq31556__$1 = cljs.core.next.call(null,seq31556);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__31557,seq31556__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args31560 = [];
var len__18672__auto___32076 = arguments.length;
var i__18673__auto___32077 = (0);
while(true){
if((i__18673__auto___32077 < len__18672__auto___32076)){
args31560.push((arguments[i__18673__auto___32077]));

var G__32078 = (i__18673__auto___32077 + (1));
i__18673__auto___32077 = G__32078;
continue;
} else {
}
break;
}

var G__31564 = args31560.length;
switch (G__31564) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31560.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq31561){
var G__31562 = cljs.core.first.call(null,seq31561);
var seq31561__$1 = cljs.core.next.call(null,seq31561);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__31562,seq31561__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args31565 = [];
var len__18672__auto___32080 = arguments.length;
var i__18673__auto___32081 = (0);
while(true){
if((i__18673__auto___32081 < len__18672__auto___32080)){
args31565.push((arguments[i__18673__auto___32081]));

var G__32082 = (i__18673__auto___32081 + (1));
i__18673__auto___32081 = G__32082;
continue;
} else {
}
break;
}

var G__31569 = args31565.length;
switch (G__31569) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31565.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq31566){
var G__31567 = cljs.core.first.call(null,seq31566);
var seq31566__$1 = cljs.core.next.call(null,seq31566);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__31567,seq31566__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args31570 = [];
var len__18672__auto___32084 = arguments.length;
var i__18673__auto___32085 = (0);
while(true){
if((i__18673__auto___32085 < len__18672__auto___32084)){
args31570.push((arguments[i__18673__auto___32085]));

var G__32086 = (i__18673__auto___32085 + (1));
i__18673__auto___32085 = G__32086;
continue;
} else {
}
break;
}

var G__31574 = args31570.length;
switch (G__31574) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31570.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq31571){
var G__31572 = cljs.core.first.call(null,seq31571);
var seq31571__$1 = cljs.core.next.call(null,seq31571);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__31572,seq31571__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args31575 = [];
var len__18672__auto___32088 = arguments.length;
var i__18673__auto___32089 = (0);
while(true){
if((i__18673__auto___32089 < len__18672__auto___32088)){
args31575.push((arguments[i__18673__auto___32089]));

var G__32090 = (i__18673__auto___32089 + (1));
i__18673__auto___32089 = G__32090;
continue;
} else {
}
break;
}

var G__31579 = args31575.length;
switch (G__31579) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31575.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq31576){
var G__31577 = cljs.core.first.call(null,seq31576);
var seq31576__$1 = cljs.core.next.call(null,seq31576);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__31577,seq31576__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args31580 = [];
var len__18672__auto___32092 = arguments.length;
var i__18673__auto___32093 = (0);
while(true){
if((i__18673__auto___32093 < len__18672__auto___32092)){
args31580.push((arguments[i__18673__auto___32093]));

var G__32094 = (i__18673__auto___32093 + (1));
i__18673__auto___32093 = G__32094;
continue;
} else {
}
break;
}

var G__31584 = args31580.length;
switch (G__31584) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31580.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq31581){
var G__31582 = cljs.core.first.call(null,seq31581);
var seq31581__$1 = cljs.core.next.call(null,seq31581);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__31582,seq31581__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args31585 = [];
var len__18672__auto___32096 = arguments.length;
var i__18673__auto___32097 = (0);
while(true){
if((i__18673__auto___32097 < len__18672__auto___32096)){
args31585.push((arguments[i__18673__auto___32097]));

var G__32098 = (i__18673__auto___32097 + (1));
i__18673__auto___32097 = G__32098;
continue;
} else {
}
break;
}

var G__31589 = args31585.length;
switch (G__31589) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31585.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq31586){
var G__31587 = cljs.core.first.call(null,seq31586);
var seq31586__$1 = cljs.core.next.call(null,seq31586);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__31587,seq31586__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args31590 = [];
var len__18672__auto___32100 = arguments.length;
var i__18673__auto___32101 = (0);
while(true){
if((i__18673__auto___32101 < len__18672__auto___32100)){
args31590.push((arguments[i__18673__auto___32101]));

var G__32102 = (i__18673__auto___32101 + (1));
i__18673__auto___32101 = G__32102;
continue;
} else {
}
break;
}

var G__31594 = args31590.length;
switch (G__31594) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31590.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq31591){
var G__31592 = cljs.core.first.call(null,seq31591);
var seq31591__$1 = cljs.core.next.call(null,seq31591);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__31592,seq31591__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args31595 = [];
var len__18672__auto___32104 = arguments.length;
var i__18673__auto___32105 = (0);
while(true){
if((i__18673__auto___32105 < len__18672__auto___32104)){
args31595.push((arguments[i__18673__auto___32105]));

var G__32106 = (i__18673__auto___32105 + (1));
i__18673__auto___32105 = G__32106;
continue;
} else {
}
break;
}

var G__31599 = args31595.length;
switch (G__31599) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31595.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq31596){
var G__31597 = cljs.core.first.call(null,seq31596);
var seq31596__$1 = cljs.core.next.call(null,seq31596);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__31597,seq31596__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args31600 = [];
var len__18672__auto___32108 = arguments.length;
var i__18673__auto___32109 = (0);
while(true){
if((i__18673__auto___32109 < len__18672__auto___32108)){
args31600.push((arguments[i__18673__auto___32109]));

var G__32110 = (i__18673__auto___32109 + (1));
i__18673__auto___32109 = G__32110;
continue;
} else {
}
break;
}

var G__31604 = args31600.length;
switch (G__31604) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31600.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq31601){
var G__31602 = cljs.core.first.call(null,seq31601);
var seq31601__$1 = cljs.core.next.call(null,seq31601);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__31602,seq31601__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args31605 = [];
var len__18672__auto___32112 = arguments.length;
var i__18673__auto___32113 = (0);
while(true){
if((i__18673__auto___32113 < len__18672__auto___32112)){
args31605.push((arguments[i__18673__auto___32113]));

var G__32114 = (i__18673__auto___32113 + (1));
i__18673__auto___32113 = G__32114;
continue;
} else {
}
break;
}

var G__31609 = args31605.length;
switch (G__31609) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31605.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq31606){
var G__31607 = cljs.core.first.call(null,seq31606);
var seq31606__$1 = cljs.core.next.call(null,seq31606);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__31607,seq31606__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args31610 = [];
var len__18672__auto___32116 = arguments.length;
var i__18673__auto___32117 = (0);
while(true){
if((i__18673__auto___32117 < len__18672__auto___32116)){
args31610.push((arguments[i__18673__auto___32117]));

var G__32118 = (i__18673__auto___32117 + (1));
i__18673__auto___32117 = G__32118;
continue;
} else {
}
break;
}

var G__31614 = args31610.length;
switch (G__31614) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31610.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq31611){
var G__31612 = cljs.core.first.call(null,seq31611);
var seq31611__$1 = cljs.core.next.call(null,seq31611);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__31612,seq31611__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args31615 = [];
var len__18672__auto___32120 = arguments.length;
var i__18673__auto___32121 = (0);
while(true){
if((i__18673__auto___32121 < len__18672__auto___32120)){
args31615.push((arguments[i__18673__auto___32121]));

var G__32122 = (i__18673__auto___32121 + (1));
i__18673__auto___32121 = G__32122;
continue;
} else {
}
break;
}

var G__31619 = args31615.length;
switch (G__31619) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31615.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq31616){
var G__31617 = cljs.core.first.call(null,seq31616);
var seq31616__$1 = cljs.core.next.call(null,seq31616);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__31617,seq31616__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args31620 = [];
var len__18672__auto___32124 = arguments.length;
var i__18673__auto___32125 = (0);
while(true){
if((i__18673__auto___32125 < len__18672__auto___32124)){
args31620.push((arguments[i__18673__auto___32125]));

var G__32126 = (i__18673__auto___32125 + (1));
i__18673__auto___32125 = G__32126;
continue;
} else {
}
break;
}

var G__31624 = args31620.length;
switch (G__31624) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31620.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq31621){
var G__31622 = cljs.core.first.call(null,seq31621);
var seq31621__$1 = cljs.core.next.call(null,seq31621);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__31622,seq31621__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args31625 = [];
var len__18672__auto___32128 = arguments.length;
var i__18673__auto___32129 = (0);
while(true){
if((i__18673__auto___32129 < len__18672__auto___32128)){
args31625.push((arguments[i__18673__auto___32129]));

var G__32130 = (i__18673__auto___32129 + (1));
i__18673__auto___32129 = G__32130;
continue;
} else {
}
break;
}

var G__31629 = args31625.length;
switch (G__31629) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31625.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq31626){
var G__31627 = cljs.core.first.call(null,seq31626);
var seq31626__$1 = cljs.core.next.call(null,seq31626);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__31627,seq31626__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args31630 = [];
var len__18672__auto___32132 = arguments.length;
var i__18673__auto___32133 = (0);
while(true){
if((i__18673__auto___32133 < len__18672__auto___32132)){
args31630.push((arguments[i__18673__auto___32133]));

var G__32134 = (i__18673__auto___32133 + (1));
i__18673__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var G__31634 = args31630.length;
switch (G__31634) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31630.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq31631){
var G__31632 = cljs.core.first.call(null,seq31631);
var seq31631__$1 = cljs.core.next.call(null,seq31631);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__31632,seq31631__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args31635 = [];
var len__18672__auto___32136 = arguments.length;
var i__18673__auto___32137 = (0);
while(true){
if((i__18673__auto___32137 < len__18672__auto___32136)){
args31635.push((arguments[i__18673__auto___32137]));

var G__32138 = (i__18673__auto___32137 + (1));
i__18673__auto___32137 = G__32138;
continue;
} else {
}
break;
}

var G__31639 = args31635.length;
switch (G__31639) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31635.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq31636){
var G__31637 = cljs.core.first.call(null,seq31636);
var seq31636__$1 = cljs.core.next.call(null,seq31636);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__31637,seq31636__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args31640 = [];
var len__18672__auto___32140 = arguments.length;
var i__18673__auto___32141 = (0);
while(true){
if((i__18673__auto___32141 < len__18672__auto___32140)){
args31640.push((arguments[i__18673__auto___32141]));

var G__32142 = (i__18673__auto___32141 + (1));
i__18673__auto___32141 = G__32142;
continue;
} else {
}
break;
}

var G__31644 = args31640.length;
switch (G__31644) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31640.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq31641){
var G__31642 = cljs.core.first.call(null,seq31641);
var seq31641__$1 = cljs.core.next.call(null,seq31641);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__31642,seq31641__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args31645 = [];
var len__18672__auto___32144 = arguments.length;
var i__18673__auto___32145 = (0);
while(true){
if((i__18673__auto___32145 < len__18672__auto___32144)){
args31645.push((arguments[i__18673__auto___32145]));

var G__32146 = (i__18673__auto___32145 + (1));
i__18673__auto___32145 = G__32146;
continue;
} else {
}
break;
}

var G__31649 = args31645.length;
switch (G__31649) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31645.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq31646){
var G__31647 = cljs.core.first.call(null,seq31646);
var seq31646__$1 = cljs.core.next.call(null,seq31646);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__31647,seq31646__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args31650 = [];
var len__18672__auto___32148 = arguments.length;
var i__18673__auto___32149 = (0);
while(true){
if((i__18673__auto___32149 < len__18672__auto___32148)){
args31650.push((arguments[i__18673__auto___32149]));

var G__32150 = (i__18673__auto___32149 + (1));
i__18673__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var G__31654 = args31650.length;
switch (G__31654) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31650.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq31651){
var G__31652 = cljs.core.first.call(null,seq31651);
var seq31651__$1 = cljs.core.next.call(null,seq31651);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__31652,seq31651__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args31655 = [];
var len__18672__auto___32152 = arguments.length;
var i__18673__auto___32153 = (0);
while(true){
if((i__18673__auto___32153 < len__18672__auto___32152)){
args31655.push((arguments[i__18673__auto___32153]));

var G__32154 = (i__18673__auto___32153 + (1));
i__18673__auto___32153 = G__32154;
continue;
} else {
}
break;
}

var G__31659 = args31655.length;
switch (G__31659) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31655.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq31656){
var G__31657 = cljs.core.first.call(null,seq31656);
var seq31656__$1 = cljs.core.next.call(null,seq31656);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__31657,seq31656__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args31195 = [];
var len__18672__auto___32156 = arguments.length;
var i__18673__auto___32157 = (0);
while(true){
if((i__18673__auto___32157 < len__18672__auto___32156)){
args31195.push((arguments[i__18673__auto___32157]));

var G__32158 = (i__18673__auto___32157 + (1));
i__18673__auto___32157 = G__32158;
continue;
} else {
}
break;
}

var G__31199 = args31195.length;
switch (G__31199) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args31195.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18691__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27374__auto__,children__27375__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__27374__auto__,children__27375__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq31196){
var G__31197 = cljs.core.first.call(null,seq31196);
var seq31196__$1 = cljs.core.next.call(null,seq31196);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__31197,seq31196__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map