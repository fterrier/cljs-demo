// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17614__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17614__auto__){
return or__17614__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__17614__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35531_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35531_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35536 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35537 = null;
var count__35538 = (0);
var i__35539 = (0);
while(true){
if((i__35539 < count__35538)){
var n = cljs.core._nth.call(null,chunk__35537,i__35539);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35540 = seq__35536;
var G__35541 = chunk__35537;
var G__35542 = count__35538;
var G__35543 = (i__35539 + (1));
seq__35536 = G__35540;
chunk__35537 = G__35541;
count__35538 = G__35542;
i__35539 = G__35543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35536);
if(temp__4425__auto__){
var seq__35536__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35536__$1)){
var c__18417__auto__ = cljs.core.chunk_first.call(null,seq__35536__$1);
var G__35544 = cljs.core.chunk_rest.call(null,seq__35536__$1);
var G__35545 = c__18417__auto__;
var G__35546 = cljs.core.count.call(null,c__18417__auto__);
var G__35547 = (0);
seq__35536 = G__35544;
chunk__35537 = G__35545;
count__35538 = G__35546;
i__35539 = G__35547;
continue;
} else {
var n = cljs.core.first.call(null,seq__35536__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35548 = cljs.core.next.call(null,seq__35536__$1);
var G__35549 = null;
var G__35550 = (0);
var G__35551 = (0);
seq__35536 = G__35548;
chunk__35537 = G__35549;
count__35538 = G__35550;
i__35539 = G__35551;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35590_35597 = cljs.core.seq.call(null,deps);
var chunk__35591_35598 = null;
var count__35592_35599 = (0);
var i__35593_35600 = (0);
while(true){
if((i__35593_35600 < count__35592_35599)){
var dep_35601 = cljs.core._nth.call(null,chunk__35591_35598,i__35593_35600);
topo_sort_helper_STAR_.call(null,dep_35601,(depth + (1)),state);

var G__35602 = seq__35590_35597;
var G__35603 = chunk__35591_35598;
var G__35604 = count__35592_35599;
var G__35605 = (i__35593_35600 + (1));
seq__35590_35597 = G__35602;
chunk__35591_35598 = G__35603;
count__35592_35599 = G__35604;
i__35593_35600 = G__35605;
continue;
} else {
var temp__4425__auto___35606 = cljs.core.seq.call(null,seq__35590_35597);
if(temp__4425__auto___35606){
var seq__35590_35607__$1 = temp__4425__auto___35606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35590_35607__$1)){
var c__18417__auto___35608 = cljs.core.chunk_first.call(null,seq__35590_35607__$1);
var G__35609 = cljs.core.chunk_rest.call(null,seq__35590_35607__$1);
var G__35610 = c__18417__auto___35608;
var G__35611 = cljs.core.count.call(null,c__18417__auto___35608);
var G__35612 = (0);
seq__35590_35597 = G__35609;
chunk__35591_35598 = G__35610;
count__35592_35599 = G__35611;
i__35593_35600 = G__35612;
continue;
} else {
var dep_35613 = cljs.core.first.call(null,seq__35590_35607__$1);
topo_sort_helper_STAR_.call(null,dep_35613,(depth + (1)),state);

var G__35614 = cljs.core.next.call(null,seq__35590_35607__$1);
var G__35615 = null;
var G__35616 = (0);
var G__35617 = (0);
seq__35590_35597 = G__35614;
chunk__35591_35598 = G__35615;
count__35592_35599 = G__35616;
i__35593_35600 = G__35617;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35594){
var vec__35596 = p__35594;
var x = cljs.core.nth.call(null,vec__35596,(0),null);
var xs = cljs.core.nthnext.call(null,vec__35596,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35596,x,xs,get_deps__$1){
return (function (p1__35552_SHARP_){
return clojure.set.difference.call(null,p1__35552_SHARP_,x);
});})(vec__35596,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35630 = cljs.core.seq.call(null,provides);
var chunk__35631 = null;
var count__35632 = (0);
var i__35633 = (0);
while(true){
if((i__35633 < count__35632)){
var prov = cljs.core._nth.call(null,chunk__35631,i__35633);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35634_35642 = cljs.core.seq.call(null,requires);
var chunk__35635_35643 = null;
var count__35636_35644 = (0);
var i__35637_35645 = (0);
while(true){
if((i__35637_35645 < count__35636_35644)){
var req_35646 = cljs.core._nth.call(null,chunk__35635_35643,i__35637_35645);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35646,prov);

var G__35647 = seq__35634_35642;
var G__35648 = chunk__35635_35643;
var G__35649 = count__35636_35644;
var G__35650 = (i__35637_35645 + (1));
seq__35634_35642 = G__35647;
chunk__35635_35643 = G__35648;
count__35636_35644 = G__35649;
i__35637_35645 = G__35650;
continue;
} else {
var temp__4425__auto___35651 = cljs.core.seq.call(null,seq__35634_35642);
if(temp__4425__auto___35651){
var seq__35634_35652__$1 = temp__4425__auto___35651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35634_35652__$1)){
var c__18417__auto___35653 = cljs.core.chunk_first.call(null,seq__35634_35652__$1);
var G__35654 = cljs.core.chunk_rest.call(null,seq__35634_35652__$1);
var G__35655 = c__18417__auto___35653;
var G__35656 = cljs.core.count.call(null,c__18417__auto___35653);
var G__35657 = (0);
seq__35634_35642 = G__35654;
chunk__35635_35643 = G__35655;
count__35636_35644 = G__35656;
i__35637_35645 = G__35657;
continue;
} else {
var req_35658 = cljs.core.first.call(null,seq__35634_35652__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35658,prov);

var G__35659 = cljs.core.next.call(null,seq__35634_35652__$1);
var G__35660 = null;
var G__35661 = (0);
var G__35662 = (0);
seq__35634_35642 = G__35659;
chunk__35635_35643 = G__35660;
count__35636_35644 = G__35661;
i__35637_35645 = G__35662;
continue;
}
} else {
}
}
break;
}

var G__35663 = seq__35630;
var G__35664 = chunk__35631;
var G__35665 = count__35632;
var G__35666 = (i__35633 + (1));
seq__35630 = G__35663;
chunk__35631 = G__35664;
count__35632 = G__35665;
i__35633 = G__35666;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35630);
if(temp__4425__auto__){
var seq__35630__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35630__$1)){
var c__18417__auto__ = cljs.core.chunk_first.call(null,seq__35630__$1);
var G__35667 = cljs.core.chunk_rest.call(null,seq__35630__$1);
var G__35668 = c__18417__auto__;
var G__35669 = cljs.core.count.call(null,c__18417__auto__);
var G__35670 = (0);
seq__35630 = G__35667;
chunk__35631 = G__35668;
count__35632 = G__35669;
i__35633 = G__35670;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35630__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35638_35671 = cljs.core.seq.call(null,requires);
var chunk__35639_35672 = null;
var count__35640_35673 = (0);
var i__35641_35674 = (0);
while(true){
if((i__35641_35674 < count__35640_35673)){
var req_35675 = cljs.core._nth.call(null,chunk__35639_35672,i__35641_35674);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35675,prov);

var G__35676 = seq__35638_35671;
var G__35677 = chunk__35639_35672;
var G__35678 = count__35640_35673;
var G__35679 = (i__35641_35674 + (1));
seq__35638_35671 = G__35676;
chunk__35639_35672 = G__35677;
count__35640_35673 = G__35678;
i__35641_35674 = G__35679;
continue;
} else {
var temp__4425__auto___35680__$1 = cljs.core.seq.call(null,seq__35638_35671);
if(temp__4425__auto___35680__$1){
var seq__35638_35681__$1 = temp__4425__auto___35680__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35638_35681__$1)){
var c__18417__auto___35682 = cljs.core.chunk_first.call(null,seq__35638_35681__$1);
var G__35683 = cljs.core.chunk_rest.call(null,seq__35638_35681__$1);
var G__35684 = c__18417__auto___35682;
var G__35685 = cljs.core.count.call(null,c__18417__auto___35682);
var G__35686 = (0);
seq__35638_35671 = G__35683;
chunk__35639_35672 = G__35684;
count__35640_35673 = G__35685;
i__35641_35674 = G__35686;
continue;
} else {
var req_35687 = cljs.core.first.call(null,seq__35638_35681__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35687,prov);

var G__35688 = cljs.core.next.call(null,seq__35638_35681__$1);
var G__35689 = null;
var G__35690 = (0);
var G__35691 = (0);
seq__35638_35671 = G__35688;
chunk__35639_35672 = G__35689;
count__35640_35673 = G__35690;
i__35641_35674 = G__35691;
continue;
}
} else {
}
}
break;
}

var G__35692 = cljs.core.next.call(null,seq__35630__$1);
var G__35693 = null;
var G__35694 = (0);
var G__35695 = (0);
seq__35630 = G__35692;
chunk__35631 = G__35693;
count__35632 = G__35694;
i__35633 = G__35695;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35700_35704 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35701_35705 = null;
var count__35702_35706 = (0);
var i__35703_35707 = (0);
while(true){
if((i__35703_35707 < count__35702_35706)){
var ns_35708 = cljs.core._nth.call(null,chunk__35701_35705,i__35703_35707);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35708);

var G__35709 = seq__35700_35704;
var G__35710 = chunk__35701_35705;
var G__35711 = count__35702_35706;
var G__35712 = (i__35703_35707 + (1));
seq__35700_35704 = G__35709;
chunk__35701_35705 = G__35710;
count__35702_35706 = G__35711;
i__35703_35707 = G__35712;
continue;
} else {
var temp__4425__auto___35713 = cljs.core.seq.call(null,seq__35700_35704);
if(temp__4425__auto___35713){
var seq__35700_35714__$1 = temp__4425__auto___35713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35700_35714__$1)){
var c__18417__auto___35715 = cljs.core.chunk_first.call(null,seq__35700_35714__$1);
var G__35716 = cljs.core.chunk_rest.call(null,seq__35700_35714__$1);
var G__35717 = c__18417__auto___35715;
var G__35718 = cljs.core.count.call(null,c__18417__auto___35715);
var G__35719 = (0);
seq__35700_35704 = G__35716;
chunk__35701_35705 = G__35717;
count__35702_35706 = G__35718;
i__35703_35707 = G__35719;
continue;
} else {
var ns_35720 = cljs.core.first.call(null,seq__35700_35714__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35720);

var G__35721 = cljs.core.next.call(null,seq__35700_35714__$1);
var G__35722 = null;
var G__35723 = (0);
var G__35724 = (0);
seq__35700_35704 = G__35721;
chunk__35701_35705 = G__35722;
count__35702_35706 = G__35723;
i__35703_35707 = G__35724;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__17614__auto__ = goog.require__;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35725__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35726__i = 0, G__35726__a = new Array(arguments.length -  0);
while (G__35726__i < G__35726__a.length) {G__35726__a[G__35726__i] = arguments[G__35726__i + 0]; ++G__35726__i;}
  args = new cljs.core.IndexedSeq(G__35726__a,0);
} 
return G__35725__delegate.call(this,args);};
G__35725.cljs$lang$maxFixedArity = 0;
G__35725.cljs$lang$applyTo = (function (arglist__35727){
var args = cljs.core.seq(arglist__35727);
return G__35725__delegate(args);
});
G__35725.cljs$core$IFn$_invoke$arity$variadic = G__35725__delegate;
return G__35725;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35729 = cljs.core._EQ_;
var expr__35730 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35729.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35730))){
var path_parts = ((function (pred__35729,expr__35730){
return (function (p1__35728_SHARP_){
return clojure.string.split.call(null,p1__35728_SHARP_,/[\/\\]/);
});})(pred__35729,expr__35730))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35729,expr__35730){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e35732){if((e35732 instanceof Error)){
var e = e35732;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35732;

}
}})());
});
;})(path_parts,sep,root,pred__35729,expr__35730))
} else {
if(cljs.core.truth_(pred__35729.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35730))){
return ((function (pred__35729,expr__35730){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35729,expr__35730){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35729,expr__35730))
);

return deferred.addErrback(((function (deferred,pred__35729,expr__35730){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35729,expr__35730))
);
});
;})(pred__35729,expr__35730))
} else {
return ((function (pred__35729,expr__35730){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35729,expr__35730))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35733,callback){
var map__35736 = p__35733;
var map__35736__$1 = ((((!((map__35736 == null)))?((((map__35736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35736):map__35736);
var file_msg = map__35736__$1;
var request_url = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35736,map__35736__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35736,map__35736__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_35760){
var state_val_35761 = (state_35760[(1)]);
if((state_val_35761 === (7))){
var inst_35756 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
var statearr_35762_35782 = state_35760__$1;
(statearr_35762_35782[(2)] = inst_35756);

(statearr_35762_35782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (1))){
var state_35760__$1 = state_35760;
var statearr_35763_35783 = state_35760__$1;
(statearr_35763_35783[(2)] = null);

(statearr_35763_35783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (4))){
var inst_35740 = (state_35760[(7)]);
var inst_35740__$1 = (state_35760[(2)]);
var state_35760__$1 = (function (){var statearr_35764 = state_35760;
(statearr_35764[(7)] = inst_35740__$1);

return statearr_35764;
})();
if(cljs.core.truth_(inst_35740__$1)){
var statearr_35765_35784 = state_35760__$1;
(statearr_35765_35784[(1)] = (5));

} else {
var statearr_35766_35785 = state_35760__$1;
(statearr_35766_35785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (6))){
var state_35760__$1 = state_35760;
var statearr_35767_35786 = state_35760__$1;
(statearr_35767_35786[(2)] = null);

(statearr_35767_35786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (3))){
var inst_35758 = (state_35760[(2)]);
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35760__$1,inst_35758);
} else {
if((state_val_35761 === (2))){
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35760__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35761 === (11))){
var inst_35752 = (state_35760[(2)]);
var state_35760__$1 = (function (){var statearr_35768 = state_35760;
(statearr_35768[(8)] = inst_35752);

return statearr_35768;
})();
var statearr_35769_35787 = state_35760__$1;
(statearr_35769_35787[(2)] = null);

(statearr_35769_35787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (9))){
var inst_35744 = (state_35760[(9)]);
var inst_35746 = (state_35760[(10)]);
var inst_35748 = inst_35746.call(null,inst_35744);
var state_35760__$1 = state_35760;
var statearr_35770_35788 = state_35760__$1;
(statearr_35770_35788[(2)] = inst_35748);

(statearr_35770_35788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (5))){
var inst_35740 = (state_35760[(7)]);
var inst_35742 = figwheel.client.file_reloading.blocking_load.call(null,inst_35740);
var state_35760__$1 = state_35760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35760__$1,(8),inst_35742);
} else {
if((state_val_35761 === (10))){
var inst_35744 = (state_35760[(9)]);
var inst_35750 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35744);
var state_35760__$1 = state_35760;
var statearr_35771_35789 = state_35760__$1;
(statearr_35771_35789[(2)] = inst_35750);

(statearr_35771_35789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35761 === (8))){
var inst_35740 = (state_35760[(7)]);
var inst_35746 = (state_35760[(10)]);
var inst_35744 = (state_35760[(2)]);
var inst_35745 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35746__$1 = cljs.core.get.call(null,inst_35745,inst_35740);
var state_35760__$1 = (function (){var statearr_35772 = state_35760;
(statearr_35772[(9)] = inst_35744);

(statearr_35772[(10)] = inst_35746__$1);

return statearr_35772;
})();
if(cljs.core.truth_(inst_35746__$1)){
var statearr_35773_35790 = state_35760__$1;
(statearr_35773_35790[(1)] = (9));

} else {
var statearr_35774_35791 = state_35760__$1;
(statearr_35774_35791[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20630__auto__ = null;
var figwheel$client$file_reloading$state_machine__20630__auto____0 = (function (){
var statearr_35778 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35778[(0)] = figwheel$client$file_reloading$state_machine__20630__auto__);

(statearr_35778[(1)] = (1));

return statearr_35778;
});
var figwheel$client$file_reloading$state_machine__20630__auto____1 = (function (state_35760){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_35760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e35779){if((e35779 instanceof Object)){
var ex__20633__auto__ = e35779;
var statearr_35780_35792 = state_35760;
(statearr_35780_35792[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35793 = state_35760;
state_35760 = G__35793;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20630__auto__ = function(state_35760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20630__auto____1.call(this,state_35760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20630__auto____0;
figwheel$client$file_reloading$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20630__auto____1;
return figwheel$client$file_reloading$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_35781 = f__20695__auto__.call(null);
(statearr_35781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_35781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35794,callback){
var map__35797 = p__35794;
var map__35797__$1 = ((((!((map__35797 == null)))?((((map__35797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35797):map__35797);
var file_msg = map__35797__$1;
var namespace = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35797,map__35797__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35797,map__35797__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35799){
var map__35802 = p__35799;
var map__35802__$1 = ((((!((map__35802 == null)))?((((map__35802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35802):map__35802);
var file_msg = map__35802__$1;
var namespace = cljs.core.get.call(null,map__35802__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17602__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17602__auto__){
var or__17614__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
var or__17614__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17614__auto____$1)){
return or__17614__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17602__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35804,callback){
var map__35807 = p__35804;
var map__35807__$1 = ((((!((map__35807 == null)))?((((map__35807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35807):map__35807);
var file_msg = map__35807__$1;
var request_url = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20694__auto___35895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___35895,out){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___35895,out){
return (function (state_35877){
var state_val_35878 = (state_35877[(1)]);
if((state_val_35878 === (1))){
var inst_35855 = cljs.core.nth.call(null,files,(0),null);
var inst_35856 = cljs.core.nthnext.call(null,files,(1));
var inst_35857 = files;
var state_35877__$1 = (function (){var statearr_35879 = state_35877;
(statearr_35879[(7)] = inst_35856);

(statearr_35879[(8)] = inst_35857);

(statearr_35879[(9)] = inst_35855);

return statearr_35879;
})();
var statearr_35880_35896 = state_35877__$1;
(statearr_35880_35896[(2)] = null);

(statearr_35880_35896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (2))){
var inst_35857 = (state_35877[(8)]);
var inst_35860 = (state_35877[(10)]);
var inst_35860__$1 = cljs.core.nth.call(null,inst_35857,(0),null);
var inst_35861 = cljs.core.nthnext.call(null,inst_35857,(1));
var inst_35862 = (inst_35860__$1 == null);
var inst_35863 = cljs.core.not.call(null,inst_35862);
var state_35877__$1 = (function (){var statearr_35881 = state_35877;
(statearr_35881[(11)] = inst_35861);

(statearr_35881[(10)] = inst_35860__$1);

return statearr_35881;
})();
if(inst_35863){
var statearr_35882_35897 = state_35877__$1;
(statearr_35882_35897[(1)] = (4));

} else {
var statearr_35883_35898 = state_35877__$1;
(statearr_35883_35898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (3))){
var inst_35875 = (state_35877[(2)]);
var state_35877__$1 = state_35877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35877__$1,inst_35875);
} else {
if((state_val_35878 === (4))){
var inst_35860 = (state_35877[(10)]);
var inst_35865 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35860);
var state_35877__$1 = state_35877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35877__$1,(7),inst_35865);
} else {
if((state_val_35878 === (5))){
var inst_35871 = cljs.core.async.close_BANG_.call(null,out);
var state_35877__$1 = state_35877;
var statearr_35884_35899 = state_35877__$1;
(statearr_35884_35899[(2)] = inst_35871);

(statearr_35884_35899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (6))){
var inst_35873 = (state_35877[(2)]);
var state_35877__$1 = state_35877;
var statearr_35885_35900 = state_35877__$1;
(statearr_35885_35900[(2)] = inst_35873);

(statearr_35885_35900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35878 === (7))){
var inst_35861 = (state_35877[(11)]);
var inst_35867 = (state_35877[(2)]);
var inst_35868 = cljs.core.async.put_BANG_.call(null,out,inst_35867);
var inst_35857 = inst_35861;
var state_35877__$1 = (function (){var statearr_35886 = state_35877;
(statearr_35886[(8)] = inst_35857);

(statearr_35886[(12)] = inst_35868);

return statearr_35886;
})();
var statearr_35887_35901 = state_35877__$1;
(statearr_35887_35901[(2)] = null);

(statearr_35887_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20694__auto___35895,out))
;
return ((function (switch__20629__auto__,c__20694__auto___35895,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto____0 = (function (){
var statearr_35891 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35891[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto__);

(statearr_35891[(1)] = (1));

return statearr_35891;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto____1 = (function (state_35877){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_35877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e35892){if((e35892 instanceof Object)){
var ex__20633__auto__ = e35892;
var statearr_35893_35902 = state_35877;
(statearr_35893_35902[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35903 = state_35877;
state_35877 = G__35903;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto__ = function(state_35877){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto____1.call(this,state_35877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___35895,out))
})();
var state__20696__auto__ = (function (){var statearr_35894 = f__20695__auto__.call(null);
(statearr_35894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___35895);

return statearr_35894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___35895,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35904,opts){
var map__35908 = p__35904;
var map__35908__$1 = ((((!((map__35908 == null)))?((((map__35908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35908):map__35908);
var eval_body__$1 = cljs.core.get.call(null,map__35908__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17602__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17602__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17602__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35910){var e = e35910;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35911_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35911_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35916){
var vec__35917 = p__35916;
var k = cljs.core.nth.call(null,vec__35917,(0),null);
var v = cljs.core.nth.call(null,vec__35917,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35918){
var vec__35919 = p__35918;
var k = cljs.core.nth.call(null,vec__35919,(0),null);
var v = cljs.core.nth.call(null,vec__35919,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35923,p__35924){
var map__36171 = p__35923;
var map__36171__$1 = ((((!((map__36171 == null)))?((((map__36171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36171):map__36171);
var opts = map__36171__$1;
var before_jsload = cljs.core.get.call(null,map__36171__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36171__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36171__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36172 = p__35924;
var map__36172__$1 = ((((!((map__36172 == null)))?((((map__36172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36172):map__36172);
var msg = map__36172__$1;
var files = cljs.core.get.call(null,map__36172__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36172__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36172__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36325){
var state_val_36326 = (state_36325[(1)]);
if((state_val_36326 === (7))){
var inst_36188 = (state_36325[(7)]);
var inst_36186 = (state_36325[(8)]);
var inst_36187 = (state_36325[(9)]);
var inst_36189 = (state_36325[(10)]);
var inst_36194 = cljs.core._nth.call(null,inst_36187,inst_36189);
var inst_36195 = figwheel.client.file_reloading.eval_body.call(null,inst_36194,opts);
var inst_36196 = (inst_36189 + (1));
var tmp36327 = inst_36188;
var tmp36328 = inst_36186;
var tmp36329 = inst_36187;
var inst_36186__$1 = tmp36328;
var inst_36187__$1 = tmp36329;
var inst_36188__$1 = tmp36327;
var inst_36189__$1 = inst_36196;
var state_36325__$1 = (function (){var statearr_36330 = state_36325;
(statearr_36330[(7)] = inst_36188__$1);

(statearr_36330[(11)] = inst_36195);

(statearr_36330[(8)] = inst_36186__$1);

(statearr_36330[(9)] = inst_36187__$1);

(statearr_36330[(10)] = inst_36189__$1);

return statearr_36330;
})();
var statearr_36331_36417 = state_36325__$1;
(statearr_36331_36417[(2)] = null);

(statearr_36331_36417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (20))){
var inst_36229 = (state_36325[(12)]);
var inst_36237 = figwheel.client.file_reloading.sort_files.call(null,inst_36229);
var state_36325__$1 = state_36325;
var statearr_36332_36418 = state_36325__$1;
(statearr_36332_36418[(2)] = inst_36237);

(statearr_36332_36418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (27))){
var state_36325__$1 = state_36325;
var statearr_36333_36419 = state_36325__$1;
(statearr_36333_36419[(2)] = null);

(statearr_36333_36419[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (1))){
var inst_36178 = (state_36325[(13)]);
var inst_36175 = before_jsload.call(null,files);
var inst_36176 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36177 = (function (){return ((function (inst_36178,inst_36175,inst_36176,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35920_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35920_SHARP_);
});
;})(inst_36178,inst_36175,inst_36176,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36178__$1 = cljs.core.filter.call(null,inst_36177,files);
var inst_36179 = cljs.core.not_empty.call(null,inst_36178__$1);
var state_36325__$1 = (function (){var statearr_36334 = state_36325;
(statearr_36334[(14)] = inst_36176);

(statearr_36334[(15)] = inst_36175);

(statearr_36334[(13)] = inst_36178__$1);

return statearr_36334;
})();
if(cljs.core.truth_(inst_36179)){
var statearr_36335_36420 = state_36325__$1;
(statearr_36335_36420[(1)] = (2));

} else {
var statearr_36336_36421 = state_36325__$1;
(statearr_36336_36421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (24))){
var state_36325__$1 = state_36325;
var statearr_36337_36422 = state_36325__$1;
(statearr_36337_36422[(2)] = null);

(statearr_36337_36422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (39))){
var inst_36279 = (state_36325[(16)]);
var state_36325__$1 = state_36325;
var statearr_36338_36423 = state_36325__$1;
(statearr_36338_36423[(2)] = inst_36279);

(statearr_36338_36423[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (46))){
var inst_36320 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36339_36424 = state_36325__$1;
(statearr_36339_36424[(2)] = inst_36320);

(statearr_36339_36424[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (4))){
var inst_36223 = (state_36325[(2)]);
var inst_36224 = cljs.core.List.EMPTY;
var inst_36225 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36224);
var inst_36226 = (function (){return ((function (inst_36223,inst_36224,inst_36225,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35921_SHARP_){
var and__17602__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35921_SHARP_);
if(cljs.core.truth_(and__17602__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35921_SHARP_));
} else {
return and__17602__auto__;
}
});
;})(inst_36223,inst_36224,inst_36225,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36227 = cljs.core.filter.call(null,inst_36226,files);
var inst_36228 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36229 = cljs.core.concat.call(null,inst_36227,inst_36228);
var state_36325__$1 = (function (){var statearr_36340 = state_36325;
(statearr_36340[(12)] = inst_36229);

(statearr_36340[(17)] = inst_36223);

(statearr_36340[(18)] = inst_36225);

return statearr_36340;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36341_36425 = state_36325__$1;
(statearr_36341_36425[(1)] = (16));

} else {
var statearr_36342_36426 = state_36325__$1;
(statearr_36342_36426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (15))){
var inst_36213 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36343_36427 = state_36325__$1;
(statearr_36343_36427[(2)] = inst_36213);

(statearr_36343_36427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (21))){
var inst_36239 = (state_36325[(19)]);
var inst_36239__$1 = (state_36325[(2)]);
var inst_36240 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36239__$1);
var state_36325__$1 = (function (){var statearr_36344 = state_36325;
(statearr_36344[(19)] = inst_36239__$1);

return statearr_36344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36325__$1,(22),inst_36240);
} else {
if((state_val_36326 === (31))){
var inst_36323 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36325__$1,inst_36323);
} else {
if((state_val_36326 === (32))){
var inst_36279 = (state_36325[(16)]);
var inst_36284 = inst_36279.cljs$lang$protocol_mask$partition0$;
var inst_36285 = (inst_36284 & (64));
var inst_36286 = inst_36279.cljs$core$ISeq$;
var inst_36287 = (inst_36285) || (inst_36286);
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36287)){
var statearr_36345_36428 = state_36325__$1;
(statearr_36345_36428[(1)] = (35));

} else {
var statearr_36346_36429 = state_36325__$1;
(statearr_36346_36429[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (40))){
var inst_36300 = (state_36325[(20)]);
var inst_36299 = (state_36325[(2)]);
var inst_36300__$1 = cljs.core.get.call(null,inst_36299,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36301 = cljs.core.get.call(null,inst_36299,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36302 = cljs.core.not_empty.call(null,inst_36300__$1);
var state_36325__$1 = (function (){var statearr_36347 = state_36325;
(statearr_36347[(21)] = inst_36301);

(statearr_36347[(20)] = inst_36300__$1);

return statearr_36347;
})();
if(cljs.core.truth_(inst_36302)){
var statearr_36348_36430 = state_36325__$1;
(statearr_36348_36430[(1)] = (41));

} else {
var statearr_36349_36431 = state_36325__$1;
(statearr_36349_36431[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (33))){
var state_36325__$1 = state_36325;
var statearr_36350_36432 = state_36325__$1;
(statearr_36350_36432[(2)] = false);

(statearr_36350_36432[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (13))){
var inst_36199 = (state_36325[(22)]);
var inst_36203 = cljs.core.chunk_first.call(null,inst_36199);
var inst_36204 = cljs.core.chunk_rest.call(null,inst_36199);
var inst_36205 = cljs.core.count.call(null,inst_36203);
var inst_36186 = inst_36204;
var inst_36187 = inst_36203;
var inst_36188 = inst_36205;
var inst_36189 = (0);
var state_36325__$1 = (function (){var statearr_36351 = state_36325;
(statearr_36351[(7)] = inst_36188);

(statearr_36351[(8)] = inst_36186);

(statearr_36351[(9)] = inst_36187);

(statearr_36351[(10)] = inst_36189);

return statearr_36351;
})();
var statearr_36352_36433 = state_36325__$1;
(statearr_36352_36433[(2)] = null);

(statearr_36352_36433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (22))){
var inst_36243 = (state_36325[(23)]);
var inst_36247 = (state_36325[(24)]);
var inst_36239 = (state_36325[(19)]);
var inst_36242 = (state_36325[(25)]);
var inst_36242__$1 = (state_36325[(2)]);
var inst_36243__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36242__$1);
var inst_36244 = (function (){var all_files = inst_36239;
var res_SINGLEQUOTE_ = inst_36242__$1;
var res = inst_36243__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36243,inst_36247,inst_36239,inst_36242,inst_36242__$1,inst_36243__$1,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35922_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35922_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36243,inst_36247,inst_36239,inst_36242,inst_36242__$1,inst_36243__$1,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36245 = cljs.core.filter.call(null,inst_36244,inst_36242__$1);
var inst_36246 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36247__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36246);
var inst_36248 = cljs.core.not_empty.call(null,inst_36247__$1);
var state_36325__$1 = (function (){var statearr_36353 = state_36325;
(statearr_36353[(23)] = inst_36243__$1);

(statearr_36353[(24)] = inst_36247__$1);

(statearr_36353[(26)] = inst_36245);

(statearr_36353[(25)] = inst_36242__$1);

return statearr_36353;
})();
if(cljs.core.truth_(inst_36248)){
var statearr_36354_36434 = state_36325__$1;
(statearr_36354_36434[(1)] = (23));

} else {
var statearr_36355_36435 = state_36325__$1;
(statearr_36355_36435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (36))){
var state_36325__$1 = state_36325;
var statearr_36356_36436 = state_36325__$1;
(statearr_36356_36436[(2)] = false);

(statearr_36356_36436[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (41))){
var inst_36300 = (state_36325[(20)]);
var inst_36304 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36305 = cljs.core.map.call(null,inst_36304,inst_36300);
var inst_36306 = cljs.core.pr_str.call(null,inst_36305);
var inst_36307 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36306)].join('');
var inst_36308 = figwheel.client.utils.log.call(null,inst_36307);
var state_36325__$1 = state_36325;
var statearr_36357_36437 = state_36325__$1;
(statearr_36357_36437[(2)] = inst_36308);

(statearr_36357_36437[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (43))){
var inst_36301 = (state_36325[(21)]);
var inst_36311 = (state_36325[(2)]);
var inst_36312 = cljs.core.not_empty.call(null,inst_36301);
var state_36325__$1 = (function (){var statearr_36358 = state_36325;
(statearr_36358[(27)] = inst_36311);

return statearr_36358;
})();
if(cljs.core.truth_(inst_36312)){
var statearr_36359_36438 = state_36325__$1;
(statearr_36359_36438[(1)] = (44));

} else {
var statearr_36360_36439 = state_36325__$1;
(statearr_36360_36439[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (29))){
var inst_36243 = (state_36325[(23)]);
var inst_36247 = (state_36325[(24)]);
var inst_36245 = (state_36325[(26)]);
var inst_36279 = (state_36325[(16)]);
var inst_36239 = (state_36325[(19)]);
var inst_36242 = (state_36325[(25)]);
var inst_36275 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36278 = (function (){var all_files = inst_36239;
var res_SINGLEQUOTE_ = inst_36242;
var res = inst_36243;
var files_not_loaded = inst_36245;
var dependencies_that_loaded = inst_36247;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36279,inst_36239,inst_36242,inst_36275,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36277){
var map__36361 = p__36277;
var map__36361__$1 = ((((!((map__36361 == null)))?((((map__36361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36361):map__36361);
var namespace = cljs.core.get.call(null,map__36361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36279,inst_36239,inst_36242,inst_36275,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36279__$1 = cljs.core.group_by.call(null,inst_36278,inst_36245);
var inst_36281 = (inst_36279__$1 == null);
var inst_36282 = cljs.core.not.call(null,inst_36281);
var state_36325__$1 = (function (){var statearr_36363 = state_36325;
(statearr_36363[(28)] = inst_36275);

(statearr_36363[(16)] = inst_36279__$1);

return statearr_36363;
})();
if(inst_36282){
var statearr_36364_36440 = state_36325__$1;
(statearr_36364_36440[(1)] = (32));

} else {
var statearr_36365_36441 = state_36325__$1;
(statearr_36365_36441[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (44))){
var inst_36301 = (state_36325[(21)]);
var inst_36314 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36301);
var inst_36315 = cljs.core.pr_str.call(null,inst_36314);
var inst_36316 = [cljs.core.str("not required: "),cljs.core.str(inst_36315)].join('');
var inst_36317 = figwheel.client.utils.log.call(null,inst_36316);
var state_36325__$1 = state_36325;
var statearr_36366_36442 = state_36325__$1;
(statearr_36366_36442[(2)] = inst_36317);

(statearr_36366_36442[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (6))){
var inst_36220 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36367_36443 = state_36325__$1;
(statearr_36367_36443[(2)] = inst_36220);

(statearr_36367_36443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (28))){
var inst_36245 = (state_36325[(26)]);
var inst_36272 = (state_36325[(2)]);
var inst_36273 = cljs.core.not_empty.call(null,inst_36245);
var state_36325__$1 = (function (){var statearr_36368 = state_36325;
(statearr_36368[(29)] = inst_36272);

return statearr_36368;
})();
if(cljs.core.truth_(inst_36273)){
var statearr_36369_36444 = state_36325__$1;
(statearr_36369_36444[(1)] = (29));

} else {
var statearr_36370_36445 = state_36325__$1;
(statearr_36370_36445[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (25))){
var inst_36243 = (state_36325[(23)]);
var inst_36259 = (state_36325[(2)]);
var inst_36260 = cljs.core.not_empty.call(null,inst_36243);
var state_36325__$1 = (function (){var statearr_36371 = state_36325;
(statearr_36371[(30)] = inst_36259);

return statearr_36371;
})();
if(cljs.core.truth_(inst_36260)){
var statearr_36372_36446 = state_36325__$1;
(statearr_36372_36446[(1)] = (26));

} else {
var statearr_36373_36447 = state_36325__$1;
(statearr_36373_36447[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (34))){
var inst_36294 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36294)){
var statearr_36374_36448 = state_36325__$1;
(statearr_36374_36448[(1)] = (38));

} else {
var statearr_36375_36449 = state_36325__$1;
(statearr_36375_36449[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (17))){
var state_36325__$1 = state_36325;
var statearr_36376_36450 = state_36325__$1;
(statearr_36376_36450[(2)] = recompile_dependents);

(statearr_36376_36450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (3))){
var state_36325__$1 = state_36325;
var statearr_36377_36451 = state_36325__$1;
(statearr_36377_36451[(2)] = null);

(statearr_36377_36451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (12))){
var inst_36216 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36378_36452 = state_36325__$1;
(statearr_36378_36452[(2)] = inst_36216);

(statearr_36378_36452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (2))){
var inst_36178 = (state_36325[(13)]);
var inst_36185 = cljs.core.seq.call(null,inst_36178);
var inst_36186 = inst_36185;
var inst_36187 = null;
var inst_36188 = (0);
var inst_36189 = (0);
var state_36325__$1 = (function (){var statearr_36379 = state_36325;
(statearr_36379[(7)] = inst_36188);

(statearr_36379[(8)] = inst_36186);

(statearr_36379[(9)] = inst_36187);

(statearr_36379[(10)] = inst_36189);

return statearr_36379;
})();
var statearr_36380_36453 = state_36325__$1;
(statearr_36380_36453[(2)] = null);

(statearr_36380_36453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (23))){
var inst_36243 = (state_36325[(23)]);
var inst_36247 = (state_36325[(24)]);
var inst_36245 = (state_36325[(26)]);
var inst_36239 = (state_36325[(19)]);
var inst_36242 = (state_36325[(25)]);
var inst_36250 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36252 = (function (){var all_files = inst_36239;
var res_SINGLEQUOTE_ = inst_36242;
var res = inst_36243;
var files_not_loaded = inst_36245;
var dependencies_that_loaded = inst_36247;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36239,inst_36242,inst_36250,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36251){
var map__36381 = p__36251;
var map__36381__$1 = ((((!((map__36381 == null)))?((((map__36381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36381):map__36381);
var request_url = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36239,inst_36242,inst_36250,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36253 = cljs.core.reverse.call(null,inst_36247);
var inst_36254 = cljs.core.map.call(null,inst_36252,inst_36253);
var inst_36255 = cljs.core.pr_str.call(null,inst_36254);
var inst_36256 = figwheel.client.utils.log.call(null,inst_36255);
var state_36325__$1 = (function (){var statearr_36383 = state_36325;
(statearr_36383[(31)] = inst_36250);

return statearr_36383;
})();
var statearr_36384_36454 = state_36325__$1;
(statearr_36384_36454[(2)] = inst_36256);

(statearr_36384_36454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (35))){
var state_36325__$1 = state_36325;
var statearr_36385_36455 = state_36325__$1;
(statearr_36385_36455[(2)] = true);

(statearr_36385_36455[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (19))){
var inst_36229 = (state_36325[(12)]);
var inst_36235 = figwheel.client.file_reloading.expand_files.call(null,inst_36229);
var state_36325__$1 = state_36325;
var statearr_36386_36456 = state_36325__$1;
(statearr_36386_36456[(2)] = inst_36235);

(statearr_36386_36456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (11))){
var state_36325__$1 = state_36325;
var statearr_36387_36457 = state_36325__$1;
(statearr_36387_36457[(2)] = null);

(statearr_36387_36457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (9))){
var inst_36218 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36388_36458 = state_36325__$1;
(statearr_36388_36458[(2)] = inst_36218);

(statearr_36388_36458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (5))){
var inst_36188 = (state_36325[(7)]);
var inst_36189 = (state_36325[(10)]);
var inst_36191 = (inst_36189 < inst_36188);
var inst_36192 = inst_36191;
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36192)){
var statearr_36389_36459 = state_36325__$1;
(statearr_36389_36459[(1)] = (7));

} else {
var statearr_36390_36460 = state_36325__$1;
(statearr_36390_36460[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (14))){
var inst_36199 = (state_36325[(22)]);
var inst_36208 = cljs.core.first.call(null,inst_36199);
var inst_36209 = figwheel.client.file_reloading.eval_body.call(null,inst_36208,opts);
var inst_36210 = cljs.core.next.call(null,inst_36199);
var inst_36186 = inst_36210;
var inst_36187 = null;
var inst_36188 = (0);
var inst_36189 = (0);
var state_36325__$1 = (function (){var statearr_36391 = state_36325;
(statearr_36391[(7)] = inst_36188);

(statearr_36391[(8)] = inst_36186);

(statearr_36391[(32)] = inst_36209);

(statearr_36391[(9)] = inst_36187);

(statearr_36391[(10)] = inst_36189);

return statearr_36391;
})();
var statearr_36392_36461 = state_36325__$1;
(statearr_36392_36461[(2)] = null);

(statearr_36392_36461[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (45))){
var state_36325__$1 = state_36325;
var statearr_36393_36462 = state_36325__$1;
(statearr_36393_36462[(2)] = null);

(statearr_36393_36462[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (26))){
var inst_36243 = (state_36325[(23)]);
var inst_36247 = (state_36325[(24)]);
var inst_36245 = (state_36325[(26)]);
var inst_36239 = (state_36325[(19)]);
var inst_36242 = (state_36325[(25)]);
var inst_36262 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36264 = (function (){var all_files = inst_36239;
var res_SINGLEQUOTE_ = inst_36242;
var res = inst_36243;
var files_not_loaded = inst_36245;
var dependencies_that_loaded = inst_36247;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36239,inst_36242,inst_36262,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36263){
var map__36394 = p__36263;
var map__36394__$1 = ((((!((map__36394 == null)))?((((map__36394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36394):map__36394);
var namespace = cljs.core.get.call(null,map__36394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36394__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36239,inst_36242,inst_36262,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36265 = cljs.core.map.call(null,inst_36264,inst_36243);
var inst_36266 = cljs.core.pr_str.call(null,inst_36265);
var inst_36267 = figwheel.client.utils.log.call(null,inst_36266);
var inst_36268 = (function (){var all_files = inst_36239;
var res_SINGLEQUOTE_ = inst_36242;
var res = inst_36243;
var files_not_loaded = inst_36245;
var dependencies_that_loaded = inst_36247;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36239,inst_36242,inst_36262,inst_36264,inst_36265,inst_36266,inst_36267,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36243,inst_36247,inst_36245,inst_36239,inst_36242,inst_36262,inst_36264,inst_36265,inst_36266,inst_36267,state_val_36326,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36269 = setTimeout(inst_36268,(10));
var state_36325__$1 = (function (){var statearr_36396 = state_36325;
(statearr_36396[(33)] = inst_36267);

(statearr_36396[(34)] = inst_36262);

return statearr_36396;
})();
var statearr_36397_36463 = state_36325__$1;
(statearr_36397_36463[(2)] = inst_36269);

(statearr_36397_36463[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (16))){
var state_36325__$1 = state_36325;
var statearr_36398_36464 = state_36325__$1;
(statearr_36398_36464[(2)] = reload_dependents);

(statearr_36398_36464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (38))){
var inst_36279 = (state_36325[(16)]);
var inst_36296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36279);
var state_36325__$1 = state_36325;
var statearr_36399_36465 = state_36325__$1;
(statearr_36399_36465[(2)] = inst_36296);

(statearr_36399_36465[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (30))){
var state_36325__$1 = state_36325;
var statearr_36400_36466 = state_36325__$1;
(statearr_36400_36466[(2)] = null);

(statearr_36400_36466[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (10))){
var inst_36199 = (state_36325[(22)]);
var inst_36201 = cljs.core.chunked_seq_QMARK_.call(null,inst_36199);
var state_36325__$1 = state_36325;
if(inst_36201){
var statearr_36401_36467 = state_36325__$1;
(statearr_36401_36467[(1)] = (13));

} else {
var statearr_36402_36468 = state_36325__$1;
(statearr_36402_36468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (18))){
var inst_36233 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36233)){
var statearr_36403_36469 = state_36325__$1;
(statearr_36403_36469[(1)] = (19));

} else {
var statearr_36404_36470 = state_36325__$1;
(statearr_36404_36470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (42))){
var state_36325__$1 = state_36325;
var statearr_36405_36471 = state_36325__$1;
(statearr_36405_36471[(2)] = null);

(statearr_36405_36471[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (37))){
var inst_36291 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36406_36472 = state_36325__$1;
(statearr_36406_36472[(2)] = inst_36291);

(statearr_36406_36472[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (8))){
var inst_36199 = (state_36325[(22)]);
var inst_36186 = (state_36325[(8)]);
var inst_36199__$1 = cljs.core.seq.call(null,inst_36186);
var state_36325__$1 = (function (){var statearr_36407 = state_36325;
(statearr_36407[(22)] = inst_36199__$1);

return statearr_36407;
})();
if(inst_36199__$1){
var statearr_36408_36473 = state_36325__$1;
(statearr_36408_36473[(1)] = (10));

} else {
var statearr_36409_36474 = state_36325__$1;
(statearr_36409_36474[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20629__auto__,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto____0 = (function (){
var statearr_36413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36413[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto__);

(statearr_36413[(1)] = (1));

return statearr_36413;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto____1 = (function (state_36325){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_36325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e36414){if((e36414 instanceof Object)){
var ex__20633__auto__ = e36414;
var statearr_36415_36475 = state_36325;
(statearr_36415_36475[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36476 = state_36325;
state_36325 = G__36476;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto__ = function(state_36325){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto____1.call(this,state_36325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20696__auto__ = (function (){var statearr_36416 = f__20695__auto__.call(null);
(statearr_36416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_36416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__,map__36171,map__36171__$1,opts,before_jsload,on_jsload,reload_dependents,map__36172,map__36172__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20694__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36479,link){
var map__36482 = p__36479;
var map__36482__$1 = ((((!((map__36482 == null)))?((((map__36482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36482):map__36482);
var file = cljs.core.get.call(null,map__36482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__36482,map__36482__$1,file){
return (function (p1__36477_SHARP_,p2__36478_SHARP_){
if(cljs.core._EQ_.call(null,p1__36477_SHARP_,p2__36478_SHARP_)){
return p1__36477_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__36482,map__36482__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36488){
var map__36489 = p__36488;
var map__36489__$1 = ((((!((map__36489 == null)))?((((map__36489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36489):map__36489);
var match_length = cljs.core.get.call(null,map__36489__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36489__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36484_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36484_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args36491 = [];
var len__18672__auto___36494 = arguments.length;
var i__18673__auto___36495 = (0);
while(true){
if((i__18673__auto___36495 < len__18672__auto___36494)){
args36491.push((arguments[i__18673__auto___36495]));

var G__36496 = (i__18673__auto___36495 + (1));
i__18673__auto___36495 = G__36496;
continue;
} else {
}
break;
}

var G__36493 = args36491.length;
switch (G__36493) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36491.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36498_SHARP_,p2__36499_SHARP_){
return cljs.core.assoc.call(null,p1__36498_SHARP_,cljs.core.get.call(null,p2__36499_SHARP_,key),p2__36499_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36500){
var map__36503 = p__36500;
var map__36503__$1 = ((((!((map__36503 == null)))?((((map__36503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36503):map__36503);
var f_data = map__36503__$1;
var file = cljs.core.get.call(null,map__36503__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36505,files_msg){
var map__36512 = p__36505;
var map__36512__$1 = ((((!((map__36512 == null)))?((((map__36512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36512):map__36512);
var opts = map__36512__$1;
var on_cssload = cljs.core.get.call(null,map__36512__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36514_36518 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36515_36519 = null;
var count__36516_36520 = (0);
var i__36517_36521 = (0);
while(true){
if((i__36517_36521 < count__36516_36520)){
var f_36522 = cljs.core._nth.call(null,chunk__36515_36519,i__36517_36521);
figwheel.client.file_reloading.reload_css_file.call(null,f_36522);

var G__36523 = seq__36514_36518;
var G__36524 = chunk__36515_36519;
var G__36525 = count__36516_36520;
var G__36526 = (i__36517_36521 + (1));
seq__36514_36518 = G__36523;
chunk__36515_36519 = G__36524;
count__36516_36520 = G__36525;
i__36517_36521 = G__36526;
continue;
} else {
var temp__4425__auto___36527 = cljs.core.seq.call(null,seq__36514_36518);
if(temp__4425__auto___36527){
var seq__36514_36528__$1 = temp__4425__auto___36527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36514_36528__$1)){
var c__18417__auto___36529 = cljs.core.chunk_first.call(null,seq__36514_36528__$1);
var G__36530 = cljs.core.chunk_rest.call(null,seq__36514_36528__$1);
var G__36531 = c__18417__auto___36529;
var G__36532 = cljs.core.count.call(null,c__18417__auto___36529);
var G__36533 = (0);
seq__36514_36518 = G__36530;
chunk__36515_36519 = G__36531;
count__36516_36520 = G__36532;
i__36517_36521 = G__36533;
continue;
} else {
var f_36534 = cljs.core.first.call(null,seq__36514_36528__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36534);

var G__36535 = cljs.core.next.call(null,seq__36514_36528__$1);
var G__36536 = null;
var G__36537 = (0);
var G__36538 = (0);
seq__36514_36518 = G__36535;
chunk__36515_36519 = G__36536;
count__36516_36520 = G__36537;
i__36517_36521 = G__36538;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36512,map__36512__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__36512,map__36512__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map