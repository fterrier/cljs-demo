// Compiled by ClojureScript 1.7.122 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args33451 = [];
var len__18672__auto___33460 = arguments.length;
var i__18673__auto___33461 = (0);
while(true){
if((i__18673__auto___33461 < len__18672__auto___33460)){
args33451.push((arguments[i__18673__auto___33461]));

var G__33462 = (i__18673__auto___33461 + (1));
i__18673__auto___33461 = G__33462;
continue;
} else {
}
break;
}

var G__33459 = args33451.length;
switch (G__33459) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args33451.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__18691__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq33452){
var G__33453 = cljs.core.first.call(null,seq33452);
var seq33452__$1 = cljs.core.next.call(null,seq33452);
var G__33454 = cljs.core.first.call(null,seq33452__$1);
var seq33452__$2 = cljs.core.next.call(null,seq33452__$1);
var G__33455 = cljs.core.first.call(null,seq33452__$2);
var seq33452__$3 = cljs.core.next.call(null,seq33452__$2);
var G__33456 = cljs.core.first.call(null,seq33452__$3);
var seq33452__$4 = cljs.core.next.call(null,seq33452__$3);
var G__33457 = cljs.core.first.call(null,seq33452__$4);
var seq33452__$5 = cljs.core.next.call(null,seq33452__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__33453,G__33454,G__33455,G__33456,G__33457,seq33452__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__30161__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__33472_33478 = cljs.core.seq.call(null,m);
var chunk__33473_33479 = null;
var count__33474_33480 = (0);
var i__33475_33481 = (0);
while(true){
if((i__33475_33481 < count__33474_33480)){
var vec__33476_33482 = cljs.core._nth.call(null,chunk__33473_33479,i__33475_33481);
var k_33483 = cljs.core.nth.call(null,vec__33476_33482,(0),null);
var v_33484 = cljs.core.nth.call(null,vec__33476_33482,(1),null);
var m33471_33485 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33471_33485,k_33483,f.call(null,v_33484)));

var G__33486 = seq__33472_33478;
var G__33487 = chunk__33473_33479;
var G__33488 = count__33474_33480;
var G__33489 = (i__33475_33481 + (1));
seq__33472_33478 = G__33486;
chunk__33473_33479 = G__33487;
count__33474_33480 = G__33488;
i__33475_33481 = G__33489;
continue;
} else {
var temp__4425__auto___33490 = cljs.core.seq.call(null,seq__33472_33478);
if(temp__4425__auto___33490){
var seq__33472_33491__$1 = temp__4425__auto___33490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33472_33491__$1)){
var c__18417__auto___33492 = cljs.core.chunk_first.call(null,seq__33472_33491__$1);
var G__33493 = cljs.core.chunk_rest.call(null,seq__33472_33491__$1);
var G__33494 = c__18417__auto___33492;
var G__33495 = cljs.core.count.call(null,c__18417__auto___33492);
var G__33496 = (0);
seq__33472_33478 = G__33493;
chunk__33473_33479 = G__33494;
count__33474_33480 = G__33495;
i__33475_33481 = G__33496;
continue;
} else {
var vec__33477_33497 = cljs.core.first.call(null,seq__33472_33491__$1);
var k_33498 = cljs.core.nth.call(null,vec__33477_33497,(0),null);
var v_33499 = cljs.core.nth.call(null,vec__33477_33497,(1),null);
var m33471_33500 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33471_33500,k_33498,f.call(null,v_33499)));

var G__33501 = cljs.core.next.call(null,seq__33472_33491__$1);
var G__33502 = null;
var G__33503 = (0);
var G__33504 = (0);
seq__33472_33478 = G__33501;
chunk__33473_33479 = G__33502;
count__33474_33480 = G__33503;
i__33475_33481 = G__33504;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__30161__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__30161__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__33513_33519 = cljs.core.seq.call(null,m);
var chunk__33514_33520 = null;
var count__33515_33521 = (0);
var i__33516_33522 = (0);
while(true){
if((i__33516_33522 < count__33515_33521)){
var vec__33517_33523 = cljs.core._nth.call(null,chunk__33514_33520,i__33516_33522);
var k_33524 = cljs.core.nth.call(null,vec__33517_33523,(0),null);
var v_33525 = cljs.core.nth.call(null,vec__33517_33523,(1),null);
var m33512_33526 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33512_33526,f.call(null,k_33524),v_33525));

var G__33527 = seq__33513_33519;
var G__33528 = chunk__33514_33520;
var G__33529 = count__33515_33521;
var G__33530 = (i__33516_33522 + (1));
seq__33513_33519 = G__33527;
chunk__33514_33520 = G__33528;
count__33515_33521 = G__33529;
i__33516_33522 = G__33530;
continue;
} else {
var temp__4425__auto___33531 = cljs.core.seq.call(null,seq__33513_33519);
if(temp__4425__auto___33531){
var seq__33513_33532__$1 = temp__4425__auto___33531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33513_33532__$1)){
var c__18417__auto___33533 = cljs.core.chunk_first.call(null,seq__33513_33532__$1);
var G__33534 = cljs.core.chunk_rest.call(null,seq__33513_33532__$1);
var G__33535 = c__18417__auto___33533;
var G__33536 = cljs.core.count.call(null,c__18417__auto___33533);
var G__33537 = (0);
seq__33513_33519 = G__33534;
chunk__33514_33520 = G__33535;
count__33515_33521 = G__33536;
i__33516_33522 = G__33537;
continue;
} else {
var vec__33518_33538 = cljs.core.first.call(null,seq__33513_33532__$1);
var k_33539 = cljs.core.nth.call(null,vec__33518_33538,(0),null);
var v_33540 = cljs.core.nth.call(null,vec__33518_33538,(1),null);
var m33512_33541 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33512_33541,f.call(null,k_33539),v_33540));

var G__33542 = cljs.core.next.call(null,seq__33513_33532__$1);
var G__33543 = null;
var G__33544 = (0);
var G__33545 = (0);
seq__33513_33519 = G__33542;
chunk__33514_33520 = G__33543;
count__33515_33521 = G__33544;
i__33516_33522 = G__33545;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__30161__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__30161__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__33552_33556 = cljs.core.seq.call(null,ks);
var chunk__33553_33557 = null;
var count__33554_33558 = (0);
var i__33555_33559 = (0);
while(true){
if((i__33555_33559 < count__33554_33558)){
var k_33560 = cljs.core._nth.call(null,chunk__33553_33557,i__33555_33559);
var m33551_33561 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33551_33561,k_33560,f.call(null,k_33560)));

var G__33562 = seq__33552_33556;
var G__33563 = chunk__33553_33557;
var G__33564 = count__33554_33558;
var G__33565 = (i__33555_33559 + (1));
seq__33552_33556 = G__33562;
chunk__33553_33557 = G__33563;
count__33554_33558 = G__33564;
i__33555_33559 = G__33565;
continue;
} else {
var temp__4425__auto___33566 = cljs.core.seq.call(null,seq__33552_33556);
if(temp__4425__auto___33566){
var seq__33552_33567__$1 = temp__4425__auto___33566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33552_33567__$1)){
var c__18417__auto___33568 = cljs.core.chunk_first.call(null,seq__33552_33567__$1);
var G__33569 = cljs.core.chunk_rest.call(null,seq__33552_33567__$1);
var G__33570 = c__18417__auto___33568;
var G__33571 = cljs.core.count.call(null,c__18417__auto___33568);
var G__33572 = (0);
seq__33552_33556 = G__33569;
chunk__33553_33557 = G__33570;
count__33554_33558 = G__33571;
i__33555_33559 = G__33572;
continue;
} else {
var k_33573 = cljs.core.first.call(null,seq__33552_33567__$1);
var m33551_33574 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33551_33574,k_33573,f.call(null,k_33573)));

var G__33575 = cljs.core.next.call(null,seq__33552_33567__$1);
var G__33576 = null;
var G__33577 = (0);
var G__33578 = (0);
seq__33552_33556 = G__33575;
chunk__33553_33557 = G__33576;
count__33554_33558 = G__33577;
i__33555_33559 = G__33578;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__30161__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__30161__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__33585_33589 = cljs.core.seq.call(null,vs);
var chunk__33586_33590 = null;
var count__33587_33591 = (0);
var i__33588_33592 = (0);
while(true){
if((i__33588_33592 < count__33587_33591)){
var v_33593 = cljs.core._nth.call(null,chunk__33586_33590,i__33588_33592);
var m33584_33594 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33584_33594,f.call(null,v_33593),v_33593));

var G__33595 = seq__33585_33589;
var G__33596 = chunk__33586_33590;
var G__33597 = count__33587_33591;
var G__33598 = (i__33588_33592 + (1));
seq__33585_33589 = G__33595;
chunk__33586_33590 = G__33596;
count__33587_33591 = G__33597;
i__33588_33592 = G__33598;
continue;
} else {
var temp__4425__auto___33599 = cljs.core.seq.call(null,seq__33585_33589);
if(temp__4425__auto___33599){
var seq__33585_33600__$1 = temp__4425__auto___33599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33585_33600__$1)){
var c__18417__auto___33601 = cljs.core.chunk_first.call(null,seq__33585_33600__$1);
var G__33602 = cljs.core.chunk_rest.call(null,seq__33585_33600__$1);
var G__33603 = c__18417__auto___33601;
var G__33604 = cljs.core.count.call(null,c__18417__auto___33601);
var G__33605 = (0);
seq__33585_33589 = G__33602;
chunk__33586_33590 = G__33603;
count__33587_33591 = G__33604;
i__33588_33592 = G__33605;
continue;
} else {
var v_33606 = cljs.core.first.call(null,seq__33585_33600__$1);
var m33584_33607 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33584_33607,f.call(null,v_33606),v_33606));

var G__33608 = cljs.core.next.call(null,seq__33585_33600__$1);
var G__33609 = null;
var G__33610 = (0);
var G__33611 = (0);
seq__33585_33589 = G__33608;
chunk__33586_33590 = G__33609;
count__33587_33591 = G__33610;
i__33588_33592 = G__33611;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__30161__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__33612){
var vec__33614 = p__33612;
var k = cljs.core.nth.call(null,vec__33614,(0),null);
var ks = cljs.core.nthnext.call(null,vec__33614,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__17602__auto__ = ks;
if(cljs.core.truth_(and__17602__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__17602__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__30161__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__33623_33629 = cljs.core.seq.call(null,x);
var chunk__33624_33630 = null;
var count__33625_33631 = (0);
var i__33626_33632 = (0);
while(true){
if((i__33626_33632 < count__33625_33631)){
var vec__33627_33633 = cljs.core._nth.call(null,chunk__33624_33630,i__33626_33632);
var k_33634 = cljs.core.nth.call(null,vec__33627_33633,(0),null);
var v_33635 = cljs.core.nth.call(null,vec__33627_33633,(1),null);
var m33622_33636 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33622_33636,((typeof k_33634 === 'string')?cljs.core.keyword.call(null,k_33634):k_33634),plumbing$core$keywordize_map.call(null,v_33635)));

var G__33637 = seq__33623_33629;
var G__33638 = chunk__33624_33630;
var G__33639 = count__33625_33631;
var G__33640 = (i__33626_33632 + (1));
seq__33623_33629 = G__33637;
chunk__33624_33630 = G__33638;
count__33625_33631 = G__33639;
i__33626_33632 = G__33640;
continue;
} else {
var temp__4425__auto___33641 = cljs.core.seq.call(null,seq__33623_33629);
if(temp__4425__auto___33641){
var seq__33623_33642__$1 = temp__4425__auto___33641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33623_33642__$1)){
var c__18417__auto___33643 = cljs.core.chunk_first.call(null,seq__33623_33642__$1);
var G__33644 = cljs.core.chunk_rest.call(null,seq__33623_33642__$1);
var G__33645 = c__18417__auto___33643;
var G__33646 = cljs.core.count.call(null,c__18417__auto___33643);
var G__33647 = (0);
seq__33623_33629 = G__33644;
chunk__33624_33630 = G__33645;
count__33625_33631 = G__33646;
i__33626_33632 = G__33647;
continue;
} else {
var vec__33628_33648 = cljs.core.first.call(null,seq__33623_33642__$1);
var k_33649 = cljs.core.nth.call(null,vec__33628_33648,(0),null);
var v_33650 = cljs.core.nth.call(null,vec__33628_33648,(1),null);
var m33622_33651 = cljs.core.deref.call(null,m_atom__30161__auto__);
cljs.core.reset_BANG_.call(null,m_atom__30161__auto__,cljs.core.assoc_BANG_.call(null,m33622_33651,((typeof k_33649 === 'string')?cljs.core.keyword.call(null,k_33649):k_33649),plumbing$core$keywordize_map.call(null,v_33650)));

var G__33652 = cljs.core.next.call(null,seq__33623_33642__$1);
var G__33653 = null;
var G__33654 = (0);
var G__33655 = (0);
seq__33623_33629 = G__33652;
chunk__33624_33630 = G__33653;
count__33625_33631 = G__33654;
i__33626_33632 = G__33655;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__30161__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__30237__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__30237__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__33656 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__33657 = cljs.core.next.call(null,ks);
m = G__33656;
ks = G__33657;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__18679__auto__ = [];
var len__18672__auto___33668 = arguments.length;
var i__18673__auto___33669 = (0);
while(true){
if((i__18673__auto___33669 < len__18672__auto___33668)){
args__18679__auto__.push((arguments[i__18673__auto___33669]));

var G__33670 = (i__18673__auto___33669 + (1));
i__18673__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((1) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18680__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__17614__auto__ = m;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__18386__auto__ = (function plumbing$core$iter__33660(s__33661){
return (new cljs.core.LazySeq(null,(function (){
var s__33661__$1 = s__33661;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33661__$1);
if(temp__4425__auto__){
var s__33661__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33661__$2)){
var c__18384__auto__ = cljs.core.chunk_first.call(null,s__33661__$2);
var size__18385__auto__ = cljs.core.count.call(null,c__18384__auto__);
var b__33663 = cljs.core.chunk_buffer.call(null,size__18385__auto__);
if((function (){var i__33662 = (0);
while(true){
if((i__33662 < size__18385__auto__)){
var vec__33666 = cljs.core._nth.call(null,c__18384__auto__,i__33662);
var k = cljs.core.nth.call(null,vec__33666,(0),null);
var v = cljs.core.nth.call(null,vec__33666,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__33663,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33671 = (i__33662 + (1));
i__33662 = G__33671;
continue;
} else {
var G__33672 = (i__33662 + (1));
i__33662 = G__33672;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33663),plumbing$core$iter__33660.call(null,cljs.core.chunk_rest.call(null,s__33661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33663),null);
}
} else {
var vec__33667 = cljs.core.first.call(null,s__33661__$2);
var k = cljs.core.nth.call(null,vec__33667,(0),null);
var v = cljs.core.nth.call(null,vec__33667,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__33660.call(null,cljs.core.rest.call(null,s__33661__$2)));
} else {
var G__33673 = cljs.core.rest.call(null,s__33661__$2);
s__33661__$1 = G__33673;
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
return iter__18386__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq33658){
var G__33659 = cljs.core.first.call(null,seq33658);
var seq33658__$1 = cljs.core.next.call(null,seq33658);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__33659,seq33658__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__18679__auto__ = [];
var len__18672__auto___33678 = arguments.length;
var i__18673__auto___33679 = (0);
while(true){
if((i__18673__auto___33679 < len__18672__auto___33678)){
args__18679__auto__.push((arguments[i__18673__auto___33679]));

var G__33680 = (i__18673__auto___33679 + (1));
i__18673__auto___33679 = G__33680;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((3) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18680__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq33674){
var G__33675 = cljs.core.first.call(null,seq33674);
var seq33674__$1 = cljs.core.next.call(null,seq33674);
var G__33676 = cljs.core.first.call(null,seq33674__$1);
var seq33674__$2 = cljs.core.next.call(null,seq33674__$1);
var G__33677 = cljs.core.first.call(null,seq33674__$2);
var seq33674__$3 = cljs.core.next.call(null,seq33674__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__33675,G__33676,G__33677,seq33674__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args33681 = [];
var len__18672__auto___33684 = arguments.length;
var i__18673__auto___33685 = (0);
while(true){
if((i__18673__auto___33685 < len__18672__auto___33684)){
args33681.push((arguments[i__18673__auto___33685]));

var G__33686 = (i__18673__auto___33685 + (1));
i__18673__auto___33685 = G__33686;
continue;
} else {
}
break;
}

var G__33683 = args33681.length;
switch (G__33683) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33681.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__18386__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__33692(s__33693){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__33693__$1 = s__33693;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33693__$1);
if(temp__4425__auto__){
var s__33693__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33693__$2)){
var c__18384__auto__ = cljs.core.chunk_first.call(null,s__33693__$2);
var size__18385__auto__ = cljs.core.count.call(null,c__18384__auto__);
var b__33695 = cljs.core.chunk_buffer.call(null,size__18385__auto__);
if((function (){var i__33694 = (0);
while(true){
if((i__33694 < size__18385__auto__)){
var x = cljs.core._nth.call(null,c__18384__auto__,i__33694);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__33695,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__33696 = (i__33694 + (1));
i__33694 = G__33696;
continue;
} else {
var G__33697 = (i__33694 + (1));
i__33694 = G__33697;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33695),plumbing$core$distinct_by_$_iter__33692.call(null,cljs.core.chunk_rest.call(null,s__33693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33695),null);
}
} else {
var x = cljs.core.first.call(null,s__33693__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__33692.call(null,cljs.core.rest.call(null,s__33693__$2)));
} else {
var G__33698 = cljs.core.rest.call(null,s__33693__$2);
s__33693__$1 = G__33698;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__18386__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__18679__auto__ = [];
var len__18672__auto___33700 = arguments.length;
var i__18673__auto___33701 = (0);
while(true){
if((i__18673__auto___33701 < len__18672__auto___33700)){
args__18679__auto__.push((arguments[i__18673__auto___33701]));

var G__33702 = (i__18673__auto___33701 + (1));
i__18673__auto___33701 = G__33702;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((0) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__18680__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq33699){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33699));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args33703 = [];
var len__18672__auto___33709 = arguments.length;
var i__18673__auto___33710 = (0);
while(true){
if((i__18673__auto___33710 < len__18672__auto___33709)){
args33703.push((arguments[i__18673__auto___33710]));

var G__33711 = (i__18673__auto___33710 + (1));
i__18673__auto___33710 = G__33711;
continue;
} else {
}
break;
}

var G__33708 = args33703.length;
switch (G__33708) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args33703.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18691__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__33713 = plumbing.core.conj_when.call(null,coll,x);
var G__33714 = cljs.core.first.call(null,xs);
var G__33715 = cljs.core.next.call(null,xs);
coll = G__33713;
x = G__33714;
xs = G__33715;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq33704){
var G__33705 = cljs.core.first.call(null,seq33704);
var seq33704__$1 = cljs.core.next.call(null,seq33704);
var G__33706 = cljs.core.first.call(null,seq33704__$1);
var seq33704__$2 = cljs.core.next.call(null,seq33704__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__33705,G__33706,seq33704__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args33717 = [];
var len__18672__auto___33723 = arguments.length;
var i__18673__auto___33724 = (0);
while(true){
if((i__18673__auto___33724 < len__18672__auto___33723)){
args33717.push((arguments[i__18673__auto___33724]));

var G__33725 = (i__18673__auto___33724 + (1));
i__18673__auto___33724 = G__33725;
continue;
} else {
}
break;
}

var G__33722 = args33717.length;
switch (G__33722) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args33717.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18691__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__33716_SHARP_){
return cljs.core.apply.call(null,f,p1__33716_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq33718){
var G__33719 = cljs.core.first.call(null,seq33718);
var seq33718__$1 = cljs.core.next.call(null,seq33718);
var G__33720 = cljs.core.first.call(null,seq33718__$1);
var seq33718__$2 = cljs.core.next.call(null,seq33718__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33719,G__33720,seq33718__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args33727 = [];
var len__18672__auto___33733 = arguments.length;
var i__18673__auto___33734 = (0);
while(true){
if((i__18673__auto___33734 < len__18672__auto___33733)){
args33727.push((arguments[i__18673__auto___33734]));

var G__33735 = (i__18673__auto___33734 + (1));
i__18673__auto___33734 = G__33735;
continue;
} else {
}
break;
}

var G__33732 = args33727.length;
switch (G__33732) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18691__auto__ = (new cljs.core.IndexedSeq(args33727.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18691__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq33728){
var G__33729 = cljs.core.first.call(null,seq33728);
var seq33728__$1 = cljs.core.next.call(null,seq33728);
var G__33730 = cljs.core.first.call(null,seq33728__$1);
var seq33728__$2 = cljs.core.next.call(null,seq33728__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__33729,G__33730,seq33728__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map