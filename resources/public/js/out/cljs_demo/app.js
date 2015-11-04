// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_demo.app');
goog.require('cljs.core');
goog.require('cljs_demo.state');
goog.require('om.core');
goog.require('om_tools.core');
goog.require('om_tools.dom');

var ufv___25308 = schema.utils.use_fn_validation;
var output_schema25293_25309 = schema.core.Any;
var input_schema25294_25310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker25295_25311 = schema.core.checker.call(null,input_schema25294_25310);
var output_checker25296_25312 = schema.core.checker.call(null,output_schema25293_25309);
/**
 * Inputs: [app owner]
 */
cljs_demo.app.app = ((function (ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function cljs_demo$app$app(G__25297,G__25298){
var validate__23343__auto__ = ufv___25308.get_cell();
if(cljs.core.truth_(validate__23343__auto__)){
var args__23344__auto___25313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25297,G__25298], null);
var temp__4425__auto___25314 = input_checker25295_25311.call(null,args__23344__auto___25313);
if(cljs.core.truth_(temp__4425__auto___25314)){
var error__23345__auto___25315 = temp__4425__auto___25314;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__23345__auto___25315)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25294_25310,new cljs.core.Keyword(null,"value","value",305978217),args__23344__auto___25313,new cljs.core.Keyword(null,"error","error",-978969032),error__23345__auto___25315], null));
} else {
}
} else {
}

var o__23346__auto__ = (function (){var app__$1 = G__25297;
var owner = G__25298;
while(true){
if(typeof cljs_demo.app.t_cljs_demo$app25302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_demo.app.t_cljs_demo$app25302 = (function (output_schema25293,G__25298,owner,output_checker25296,validate__23343__auto__,input_schema25294,input_checker25295,app,ufv__,G__25297,meta25303){
this.output_schema25293 = output_schema25293;
this.G__25298 = G__25298;
this.owner = owner;
this.output_checker25296 = output_checker25296;
this.validate__23343__auto__ = validate__23343__auto__;
this.input_schema25294 = input_schema25294;
this.input_checker25295 = input_checker25295;
this.app = app;
this.ufv__ = ufv__;
this.G__25297 = G__25297;
this.meta25303 = meta25303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_demo.app.t_cljs_demo$app25302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function (_25304,meta25303__$1){
var self__ = this;
var _25304__$1 = this;
return (new cljs_demo.app.t_cljs_demo$app25302(self__.output_schema25293,self__.G__25298,self__.owner,self__.output_checker25296,self__.validate__23343__auto__,self__.input_schema25294,self__.input_checker25295,self__.app,self__.ufv__,self__.G__25297,meta25303__$1));
});})(validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

cljs_demo.app.t_cljs_demo$app25302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function (_25304){
var self__ = this;
var _25304__$1 = this;
return self__.meta25303;
});})(validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

cljs_demo.app.t_cljs_demo$app25302.prototype.om$core$IDisplayName$ = true;

cljs_demo.app.t_cljs_demo$app25302.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

cljs_demo.app.t_cljs_demo$app25302.prototype.om$core$IRender$ = true;

cljs_demo.app.t_cljs_demo$app25302.prototype.om$core$IRender$render$arity$1 = ((function (validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,"test 123");
});})(validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

cljs_demo.app.t_cljs_demo$app25302.getBasis = ((function (validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema25293","output-schema25293",-1109958847,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__25298","G__25298",1689494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"output-checker25296","output-checker25296",-614675480,null),new cljs.core.Symbol(null,"validate__23343__auto__","validate__23343__auto__",-2120022995,null),new cljs.core.Symbol(null,"input-schema25294","input-schema25294",-1563506163,null),new cljs.core.Symbol(null,"input-checker25295","input-checker25295",-190997643,null),cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema25293","output-schema25293",-1109958847,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema25294","input-schema25294",-1563506163,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [app owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__25297","G__25297",683840318,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta25303","meta25303",2041276109,null)], null);
});})(validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

cljs_demo.app.t_cljs_demo$app25302.cljs$lang$type = true;

cljs_demo.app.t_cljs_demo$app25302.cljs$lang$ctorStr = "cljs-demo.app/t_cljs_demo$app25302";

cljs_demo.app.t_cljs_demo$app25302.cljs$lang$ctorPrWriter = ((function (validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs-demo.app/t_cljs_demo$app25302");
});})(validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

cljs_demo.app.__GT_t_cljs_demo$app25302 = ((function (validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312){
return (function cljs_demo$app$app_$___GT_t_cljs_demo$app25302(output_schema25293__$1,G__25298__$1,owner__$1,output_checker25296__$1,validate__23343__auto____$1,input_schema25294__$1,input_checker25295__$1,app__$2,ufv____$1,G__25297__$1,meta25303){
return (new cljs_demo.app.t_cljs_demo$app25302(output_schema25293__$1,G__25298__$1,owner__$1,output_checker25296__$1,validate__23343__auto____$1,input_schema25294__$1,input_checker25295__$1,app__$2,ufv____$1,G__25297__$1,meta25303));
});})(validate__23343__auto__,ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

}

return (new cljs_demo.app.t_cljs_demo$app25302(output_schema25293_25309,G__25298,owner,output_checker25296_25312,validate__23343__auto__,input_schema25294_25310,input_checker25295_25311,app__$1,ufv___25308,G__25297,null));
break;
}
})();
if(cljs.core.truth_(validate__23343__auto__)){
var temp__4425__auto___25316 = output_checker25296_25312.call(null,o__23346__auto__);
if(cljs.core.truth_(temp__4425__auto___25316)){
var error__23345__auto___25317 = temp__4425__auto___25316;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__23345__auto___25317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25293_25309,new cljs.core.Keyword(null,"value","value",305978217),o__23346__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__23345__auto___25317], null));
} else {
}
} else {
}

return o__23346__auto__;
});})(ufv___25308,output_schema25293_25309,input_schema25294_25310,input_checker25295_25311,output_checker25296_25312))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,cljs_demo.app.app),schema.core.make_fn_schema.call(null,output_schema25293_25309,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25294_25310], null)));

cljs_demo.app.__GT_app = (function cljs_demo$app$__GT_app(var_args){
var args25305 = [];
var len__18672__auto___25318 = arguments.length;
var i__18673__auto___25319 = (0);
while(true){
if((i__18673__auto___25319 < len__18672__auto___25318)){
args25305.push((arguments[i__18673__auto___25319]));

var G__25320 = (i__18673__auto___25319 + (1));
i__18673__auto___25319 = G__25320;
continue;
} else {
}
break;
}

var G__25307 = args25305.length;
switch (G__25307) {
case 1:
return cljs_demo.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_demo.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25305.length)].join('')));

}
});

cljs_demo.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__25144__auto__){
return om.core.build.call(null,cljs_demo.app.app,cursor__25144__auto__);
});

cljs_demo.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__25144__auto__,m25292){
return om.core.build.call(null,cljs_demo.app.app,cursor__25144__auto__,m25292);
});

cljs_demo.app.__GT_app.cljs$lang$maxFixedArity = 2;
cljs_demo.app.main = (function cljs_demo$app$main(){
return om.core.root.call(null,cljs_demo.app.app,cljs_demo.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main-area")], null));
});
cljs_demo.app.stop = (function cljs_demo$app$stop(){
return null;
});

//# sourceMappingURL=app.js.map