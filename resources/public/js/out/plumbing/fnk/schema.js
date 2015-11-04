// Compiled by ClojureScript 1.7.122 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__28645__28646__auto__){
if(!((p1__28645__28646__auto__ == null))){
if((false) || (p1__28645__28646__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__28645__28646__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__28645__28646__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__28645__28646__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__32825_SHARP_){
return (cljs.core.val.call(null,p1__32825_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__32827 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__32827,(0),null);
var v = cljs.core.nth.call(null,vec__32827,(1),null);
var p = vec__32827;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___32833 = schema.utils.use_fn_validation;
var output_schema32828_32834 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema32829_32835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker32830_32836 = schema.core.checker.call(null,input_schema32829_32835);
var output_checker32831_32837 = schema.core.checker.call(null,output_schema32828_32834);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___32833,output_schema32828_32834,input_schema32829_32835,input_checker32830_32836,output_checker32831_32837){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__32832){
var validate__28237__auto__ = ufv___32833.get_cell();
if(cljs.core.truth_(validate__28237__auto__)){
var args__28238__auto___32838 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32832], null);
var temp__4425__auto___32839 = input_checker32830_32836.call(null,args__28238__auto___32838);
if(cljs.core.truth_(temp__4425__auto___32839)){
var error__28239__auto___32840 = temp__4425__auto___32839;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__28239__auto___32840)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32829_32835,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___32838,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32840], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var k = G__32832;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__28237__auto__)){
var temp__4425__auto___32841 = output_checker32831_32837.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___32841)){
var error__28239__auto___32842 = temp__4425__auto___32841;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__28239__auto___32842)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32828_32834,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32842], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___32833,output_schema32828_32834,input_schema32829_32835,input_checker32830_32836,output_checker32831_32837))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema32828_32834,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32829_32835], null)));
var ufv___32848 = schema.utils.use_fn_validation;
var output_schema32843_32849 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema32844_32850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker32845_32851 = schema.core.checker.call(null,input_schema32844_32850);
var output_checker32846_32852 = schema.core.checker.call(null,output_schema32843_32849);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___32848,output_schema32843_32849,input_schema32844_32850,input_checker32845_32851,output_checker32846_32852){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__32847){
var validate__28237__auto__ = ufv___32848.get_cell();
if(cljs.core.truth_(validate__28237__auto__)){
var args__28238__auto___32853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32847], null);
var temp__4425__auto___32854 = input_checker32845_32851.call(null,args__28238__auto___32853);
if(cljs.core.truth_(temp__4425__auto___32854)){
var error__28239__auto___32855 = temp__4425__auto___32854;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__28239__auto___32855)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32844_32850,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___32853,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32855], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var s = G__32847;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__28237__auto__)){
var temp__4425__auto___32856 = output_checker32846_32852.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___32856)){
var error__28239__auto___32857 = temp__4425__auto___32856;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__28239__auto___32857)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32843_32849,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32857], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___32848,output_schema32843_32849,input_schema32844_32850,input_checker32845_32851,output_checker32846_32852))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema32843_32849,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32844_32850], null)));
var ufv___32863 = schema.utils.use_fn_validation;
var output_schema32858_32864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema32859_32865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker32860_32866 = schema.core.checker.call(null,input_schema32859_32865);
var output_checker32861_32867 = schema.core.checker.call(null,output_schema32858_32864);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___32863,output_schema32858_32864,input_schema32859_32865,input_checker32860_32866,output_checker32861_32867){
return (function plumbing$fnk$schema$split_schema_keys(G__32862){
var validate__28237__auto__ = ufv___32863.get_cell();
if(cljs.core.truth_(validate__28237__auto__)){
var args__28238__auto___32868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32862], null);
var temp__4425__auto___32869 = input_checker32860_32866.call(null,args__28238__auto___32868);
if(cljs.core.truth_(temp__4425__auto___32869)){
var error__28239__auto___32870 = temp__4425__auto___32869;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__28239__auto___32870)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32859_32865,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___32868,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32870], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var s = G__32862;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__28237__auto__)){
var temp__4425__auto___32871 = output_checker32861_32867.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___32871)){
var error__28239__auto___32872 = temp__4425__auto___32871;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__28239__auto___32872)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32858_32864,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32872], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___32863,output_schema32858_32864,input_schema32859_32865,input_checker32860_32866,output_checker32861_32867))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema32858_32864,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32859_32865], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__18679__auto__ = [];
var len__18672__auto___32880 = arguments.length;
var i__18673__auto___32881 = (0);
while(true){
if((i__18673__auto___32881 < len__18672__auto___32880)){
args__18679__auto__.push((arguments[i__18673__auto___32881]));

var G__32882 = (i__18673__auto___32881 + (1));
i__18673__auto___32881 = G__32882;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((3) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18680__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__32877){
var vec__32878 = p__32877;
var k = cljs.core.nth.call(null,vec__32878,(0),null);
var v = cljs.core.nth.call(null,vec__32878,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32879 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__32879,(0),null);
var ov = cljs.core.nth.call(null,vec__32879,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq32873){
var G__32874 = cljs.core.first.call(null,seq32873);
var seq32873__$1 = cljs.core.next.call(null,seq32873);
var G__32875 = cljs.core.first.call(null,seq32873__$1);
var seq32873__$2 = cljs.core.next.call(null,seq32873__$1);
var G__32876 = cljs.core.first.call(null,seq32873__$2);
var seq32873__$3 = cljs.core.next.call(null,seq32873__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__32874,G__32875,G__32876,seq32873__$3);
});
var ufv___32890 = schema.utils.use_fn_validation;
var output_schema32884_32891 = plumbing.fnk.schema.InputSchema;
var input_schema32885_32892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker32886_32893 = schema.core.checker.call(null,input_schema32885_32892);
var output_checker32887_32894 = schema.core.checker.call(null,output_schema32884_32891);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894){
return (function plumbing$fnk$schema$union_input_schemata(G__32888,G__32889){
var validate__28237__auto__ = ufv___32890.get_cell();
if(cljs.core.truth_(validate__28237__auto__)){
var args__28238__auto___32895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32888,G__32889], null);
var temp__4425__auto___32896 = input_checker32886_32893.call(null,args__28238__auto___32895);
if(cljs.core.truth_(temp__4425__auto___32896)){
var error__28239__auto___32897 = temp__4425__auto___32896;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__28239__auto___32897)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32885_32892,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___32895,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32897], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var i1 = G__32888;
var i2 = G__32889;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__28237__auto__,ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894){
return (function (p1__32883_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__32883_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__32883_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__28237__auto__,ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894))
,((function (validate__28237__auto__,ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__28237__auto__,ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894))
,((function (validate__28237__auto__,ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__17602__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__17602__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__17602__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__28237__auto__,ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__28237__auto__)){
var temp__4425__auto___32898 = output_checker32887_32894.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___32898)){
var error__28239__auto___32899 = temp__4425__auto___32898;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__28239__auto___32899)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32884_32891,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32899], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___32890,output_schema32884_32891,input_schema32885_32892,input_checker32886_32893,output_checker32887_32894))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema32884_32891,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32885_32892], null)));
var ufv___32905 = schema.utils.use_fn_validation;
var output_schema32900_32906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema32901_32907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker32902_32908 = schema.core.checker.call(null,input_schema32901_32907);
var output_checker32903_32909 = schema.core.checker.call(null,output_schema32900_32906);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___32905,output_schema32900_32906,input_schema32901_32907,input_checker32902_32908,output_checker32903_32909){
return (function plumbing$fnk$schema$required_toplevel_keys(G__32904){
var validate__28237__auto__ = ufv___32905.get_cell();
if(cljs.core.truth_(validate__28237__auto__)){
var args__28238__auto___32910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32904], null);
var temp__4425__auto___32911 = input_checker32902_32908.call(null,args__28238__auto___32910);
if(cljs.core.truth_(temp__4425__auto___32911)){
var error__28239__auto___32912 = temp__4425__auto___32911;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__28239__auto___32912)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32901_32907,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___32910,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32912], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var input_schema = G__32904;
while(true){
return cljs.core.keep.call(null,((function (validate__28237__auto__,ufv___32905,output_schema32900_32906,input_schema32901_32907,input_checker32902_32908,output_checker32903_32909){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__28237__auto__,ufv___32905,output_schema32900_32906,input_schema32901_32907,input_checker32902_32908,output_checker32903_32909))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__28237__auto__)){
var temp__4425__auto___32913 = output_checker32903_32909.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___32913)){
var error__28239__auto___32914 = temp__4425__auto___32913;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__28239__auto___32914)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32900_32906,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32914], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___32905,output_schema32900_32906,input_schema32901_32907,input_checker32902_32908,output_checker32903_32909))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema32900_32906,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32901_32907], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18386__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__32923(s__32924){
return (new cljs.core.LazySeq(null,(function (){
var s__32924__$1 = s__32924;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32924__$1);
if(temp__4425__auto__){
var s__32924__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32924__$2)){
var c__18384__auto__ = cljs.core.chunk_first.call(null,s__32924__$2);
var size__18385__auto__ = cljs.core.count.call(null,c__18384__auto__);
var b__32926 = cljs.core.chunk_buffer.call(null,size__18385__auto__);
if((function (){var i__32925 = (0);
while(true){
if((i__32925 < size__18385__auto__)){
var vec__32929 = cljs.core._nth.call(null,c__18384__auto__,i__32925);
var k = cljs.core.nth.call(null,vec__32929,(0),null);
var v = cljs.core.nth.call(null,vec__32929,(1),null);
cljs.core.chunk_append.call(null,b__32926,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__32931 = (i__32925 + (1));
i__32925 = G__32931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32926),plumbing$fnk$schema$guess_expr_output_schema_$_iter__32923.call(null,cljs.core.chunk_rest.call(null,s__32924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32926),null);
}
} else {
var vec__32930 = cljs.core.first.call(null,s__32924__$2);
var k = cljs.core.nth.call(null,vec__32930,(0),null);
var v = cljs.core.nth.call(null,vec__32930,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__32923.call(null,cljs.core.rest.call(null,s__32924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18386__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18386__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__32940(s__32941){
return (new cljs.core.LazySeq(null,(function (){
var s__32941__$1 = s__32941;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32941__$1);
if(temp__4425__auto__){
var s__32941__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32941__$2)){
var c__18384__auto__ = cljs.core.chunk_first.call(null,s__32941__$2);
var size__18385__auto__ = cljs.core.count.call(null,c__18384__auto__);
var b__32943 = cljs.core.chunk_buffer.call(null,size__18385__auto__);
if((function (){var i__32942 = (0);
while(true){
if((i__32942 < size__18385__auto__)){
var vec__32946 = cljs.core._nth.call(null,c__18384__auto__,i__32942);
var k = cljs.core.nth.call(null,vec__32946,(0),null);
var v = cljs.core.nth.call(null,vec__32946,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__17614__auto__ = required_QMARK_;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__32943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__32948 = (i__32942 + (1));
i__32942 = G__32948;
continue;
} else {
var G__32949 = (i__32942 + (1));
i__32942 = G__32949;
continue;
}
} else {
var G__32950 = (i__32942 + (1));
i__32942 = G__32950;
continue;
}
} else {
var G__32951 = (i__32942 + (1));
i__32942 = G__32951;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32943),plumbing$fnk$schema$schema_diff_$_iter__32940.call(null,cljs.core.chunk_rest.call(null,s__32941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32943),null);
}
} else {
var vec__32947 = cljs.core.first.call(null,s__32941__$2);
var k = cljs.core.nth.call(null,vec__32947,(0),null);
var v = cljs.core.nth.call(null,vec__32947,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__17614__auto__ = required_QMARK_;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__32940.call(null,cljs.core.rest.call(null,s__32941__$2)));
} else {
var G__32952 = cljs.core.rest.call(null,s__32941__$2);
s__32941__$1 = G__32952;
continue;
}
} else {
var G__32953 = cljs.core.rest.call(null,s__32941__$2);
s__32941__$1 = G__32953;
continue;
}
} else {
var G__32954 = cljs.core.rest.call(null,s__32941__$2);
s__32941__$1 = G__32954;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18386__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___32977 = schema.utils.use_fn_validation;
var output_schema32955_32978 = schema.core.Any;
var input_schema32956_32979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker32957_32980 = schema.core.checker.call(null,input_schema32956_32979);
var output_checker32958_32981 = schema.core.checker.call(null,output_schema32955_32978);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___32977,output_schema32955_32978,input_schema32956_32979,input_checker32957_32980,output_checker32958_32981){
return (function plumbing$fnk$schema$compose_schemata(G__32959,G__32960){
var validate__28237__auto__ = true;
if(validate__28237__auto__){
var args__28238__auto___32982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32959,G__32960], null);
var temp__4425__auto___32983 = input_checker32957_32980.call(null,args__28238__auto___32982);
if(cljs.core.truth_(temp__4425__auto___32983)){
var error__28239__auto___32984 = temp__4425__auto___32983;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__28239__auto___32984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32956_32979,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___32982,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32984], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var G__32971 = G__32959;
var vec__32973 = G__32971;
var i2 = cljs.core.nth.call(null,vec__32973,(0),null);
var o2 = cljs.core.nth.call(null,vec__32973,(1),null);
var G__32972 = G__32960;
var vec__32974 = G__32972;
var i1 = cljs.core.nth.call(null,vec__32974,(0),null);
var o1 = cljs.core.nth.call(null,vec__32974,(1),null);
var G__32971__$1 = G__32971;
var G__32972__$1 = G__32972;
while(true){
var vec__32975 = G__32971__$1;
var i2__$1 = cljs.core.nth.call(null,vec__32975,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__32975,(1),null);
var vec__32976 = G__32972__$1;
var i1__$1 = cljs.core.nth.call(null,vec__32976,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__32976,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__28237__auto__){
var temp__4425__auto___32985 = output_checker32958_32981.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___32985)){
var error__28239__auto___32986 = temp__4425__auto___32985;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__28239__auto___32986)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32955_32978,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___32986], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___32977,output_schema32955_32978,input_schema32956_32979,input_checker32957_32980,output_checker32958_32981))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema32955_32978,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32956_32979], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___33065 = schema.utils.use_fn_validation;
var output_schema32987_33066 = schema.core.Any;
var input_schema32988_33067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker32989_33068 = schema.core.checker.call(null,input_schema32988_33067);
var output_checker32990_33069 = schema.core.checker.call(null,output_schema32987_33066);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069){
return (function plumbing$fnk$schema$split_schema(G__32991,G__32992){
var validate__28237__auto__ = ufv___33065.get_cell();
if(cljs.core.truth_(validate__28237__auto__)){
var args__28238__auto___33070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32991,G__32992], null);
var temp__4425__auto___33071 = input_checker32989_33068.call(null,args__28238__auto___33070);
if(cljs.core.truth_(temp__4425__auto___33071)){
var error__28239__auto___33072 = temp__4425__auto___33071;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__28239__auto___33072)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32988_33067,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___33070,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___33072], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var s = G__32991;
var ks = G__32992;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__18386__auto__ = ((function (ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069){
return (function plumbing$fnk$schema$split_schema_$_iter__33029(s__33030){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069){
return (function (){
var s__33030__$1 = s__33030;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33030__$1);
if(temp__4425__auto__){
var s__33030__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33030__$2)){
var c__18384__auto__ = cljs.core.chunk_first.call(null,s__33030__$2);
var size__18385__auto__ = cljs.core.count.call(null,c__18384__auto__);
var b__33032 = cljs.core.chunk_buffer.call(null,size__18385__auto__);
if((function (){var i__33031 = (0);
while(true){
if((i__33031 < size__18385__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__18384__auto__,i__33031);
cljs.core.chunk_append.call(null,b__33032,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18386__auto__ = ((function (i__33031,in_QMARK_,c__18384__auto__,size__18385__auto__,b__33032,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069){
return (function plumbing$fnk$schema$split_schema_$_iter__33029_$_iter__33049(s__33050){
return (new cljs.core.LazySeq(null,((function (i__33031,in_QMARK_,c__18384__auto__,size__18385__auto__,b__33032,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069){
return (function (){
var s__33050__$1 = s__33050;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__33050__$1);
if(temp__4425__auto____$1){
var s__33050__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33050__$2)){
var c__18384__auto____$1 = cljs.core.chunk_first.call(null,s__33050__$2);
var size__18385__auto____$1 = cljs.core.count.call(null,c__18384__auto____$1);
var b__33052 = cljs.core.chunk_buffer.call(null,size__18385__auto____$1);
if((function (){var i__33051 = (0);
while(true){
if((i__33051 < size__18385__auto____$1)){
var vec__33055 = cljs.core._nth.call(null,c__18384__auto____$1,i__33051);
var k = cljs.core.nth.call(null,vec__33055,(0),null);
var v = cljs.core.nth.call(null,vec__33055,(1),null);
if(cljs.core.truth_((function (){var and__17602__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__17602__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__17602__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__33052,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33073 = (i__33051 + (1));
i__33051 = G__33073;
continue;
} else {
var G__33074 = (i__33051 + (1));
i__33051 = G__33074;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33052),plumbing$fnk$schema$split_schema_$_iter__33029_$_iter__33049.call(null,cljs.core.chunk_rest.call(null,s__33050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33052),null);
}
} else {
var vec__33056 = cljs.core.first.call(null,s__33050__$2);
var k = cljs.core.nth.call(null,vec__33056,(0),null);
var v = cljs.core.nth.call(null,vec__33056,(1),null);
if(cljs.core.truth_((function (){var and__17602__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__17602__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__17602__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__33029_$_iter__33049.call(null,cljs.core.rest.call(null,s__33050__$2)));
} else {
var G__33075 = cljs.core.rest.call(null,s__33050__$2);
s__33050__$1 = G__33075;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__33031,in_QMARK_,c__18384__auto__,size__18385__auto__,b__33032,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069))
,null,null));
});})(i__33031,in_QMARK_,c__18384__auto__,size__18385__auto__,b__33032,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069))
;
return iter__18386__auto__.call(null,s);
})()));

var G__33076 = (i__33031 + (1));
i__33031 = G__33076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33032),plumbing$fnk$schema$split_schema_$_iter__33029.call(null,cljs.core.chunk_rest.call(null,s__33030__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33032),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__33030__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18386__auto__ = ((function (in_QMARK_,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069){
return (function plumbing$fnk$schema$split_schema_$_iter__33029_$_iter__33057(s__33058){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069){
return (function (){
var s__33058__$1 = s__33058;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__33058__$1);
if(temp__4425__auto____$1){
var s__33058__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33058__$2)){
var c__18384__auto__ = cljs.core.chunk_first.call(null,s__33058__$2);
var size__18385__auto__ = cljs.core.count.call(null,c__18384__auto__);
var b__33060 = cljs.core.chunk_buffer.call(null,size__18385__auto__);
if((function (){var i__33059 = (0);
while(true){
if((i__33059 < size__18385__auto__)){
var vec__33063 = cljs.core._nth.call(null,c__18384__auto__,i__33059);
var k = cljs.core.nth.call(null,vec__33063,(0),null);
var v = cljs.core.nth.call(null,vec__33063,(1),null);
if(cljs.core.truth_((function (){var and__17602__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__17602__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__17602__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__33060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33077 = (i__33059 + (1));
i__33059 = G__33077;
continue;
} else {
var G__33078 = (i__33059 + (1));
i__33059 = G__33078;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33060),plumbing$fnk$schema$split_schema_$_iter__33029_$_iter__33057.call(null,cljs.core.chunk_rest.call(null,s__33058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33060),null);
}
} else {
var vec__33064 = cljs.core.first.call(null,s__33058__$2);
var k = cljs.core.nth.call(null,vec__33064,(0),null);
var v = cljs.core.nth.call(null,vec__33064,(1),null);
if(cljs.core.truth_((function (){var and__17602__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__17602__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__17602__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__33029_$_iter__33057.call(null,cljs.core.rest.call(null,s__33058__$2)));
} else {
var G__33079 = cljs.core.rest.call(null,s__33058__$2);
s__33058__$1 = G__33079;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069))
,null,null));
});})(in_QMARK_,s__33030__$2,temp__4425__auto__,ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069))
;
return iter__18386__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__33029.call(null,cljs.core.rest.call(null,s__33030__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069))
,null,null));
});})(ks__$1,validate__28237__auto__,ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069))
;
return iter__18386__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__28237__auto__)){
var temp__4425__auto___33080 = output_checker32990_33069.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___33080)){
var error__28239__auto___33081 = temp__4425__auto___33080;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__28239__auto___33081)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32987_33066,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___33081], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___33065,output_schema32987_33066,input_schema32988_33067,input_checker32989_33068,output_checker32990_33069))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema32987_33066,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32988_33067], null)));
var ufv___33112 = schema.utils.use_fn_validation;
var output_schema33082_33113 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema33083_33114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker33084_33115 = schema.core.checker.call(null,input_schema33083_33114);
var output_checker33085_33116 = schema.core.checker.call(null,output_schema33082_33113);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___33112,output_schema33082_33113,input_schema33083_33114,input_checker33084_33115,output_checker33085_33116){
return (function plumbing$fnk$schema$sequence_schemata(G__33086,G__33087){
var validate__28237__auto__ = ufv___33112.get_cell();
if(cljs.core.truth_(validate__28237__auto__)){
var args__28238__auto___33117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33086,G__33087], null);
var temp__4425__auto___33118 = input_checker33084_33115.call(null,args__28238__auto___33117);
if(cljs.core.truth_(temp__4425__auto___33118)){
var error__28239__auto___33119 = temp__4425__auto___33118;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__28239__auto___33119)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33083_33114,new cljs.core.Keyword(null,"value","value",305978217),args__28238__auto___33117,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___33119], null));
} else {
}
} else {
}

var o__28240__auto__ = (function (){var G__33103 = G__33086;
var vec__33105 = G__33103;
var i1 = cljs.core.nth.call(null,vec__33105,(0),null);
var o1 = cljs.core.nth.call(null,vec__33105,(1),null);
var G__33104 = G__33087;
var vec__33106 = G__33104;
var k = cljs.core.nth.call(null,vec__33106,(0),null);
var vec__33107 = cljs.core.nth.call(null,vec__33106,(1),null);
var i2 = cljs.core.nth.call(null,vec__33107,(0),null);
var o2 = cljs.core.nth.call(null,vec__33107,(1),null);
var G__33103__$1 = G__33103;
var G__33104__$1 = G__33104;
while(true){
var vec__33108 = G__33103__$1;
var i1__$1 = cljs.core.nth.call(null,vec__33108,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__33108,(1),null);
var vec__33109 = G__33104__$1;
var k__$1 = cljs.core.nth.call(null,vec__33109,(0),null);
var vec__33110 = cljs.core.nth.call(null,vec__33109,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__33110,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__33110,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__33111 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__33111,(0),null);
var unused = cljs.core.nth.call(null,vec__33111,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__28237__auto__)){
var temp__4425__auto___33120 = output_checker33085_33116.call(null,o__28240__auto__);
if(cljs.core.truth_(temp__4425__auto___33120)){
var error__28239__auto___33121 = temp__4425__auto___33120;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__28239__auto___33121)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33082_33113,new cljs.core.Keyword(null,"value","value",305978217),o__28240__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__28239__auto___33121], null));
} else {
}
} else {
}

return o__28240__auto__;
});})(ufv___33112,output_schema33082_33113,input_schema33083_33114,input_checker33084_33115,output_checker33085_33116))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema33082_33113,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33083_33114], null)));

//# sourceMappingURL=schema.js.map