// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35479_35493 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35480_35494 = null;
var count__35481_35495 = (0);
var i__35482_35496 = (0);
while(true){
if((i__35482_35496 < count__35481_35495)){
var f_35497 = cljs.core._nth.call(null,chunk__35480_35494,i__35482_35496);
cljs.core.println.call(null,"  ",f_35497);

var G__35498 = seq__35479_35493;
var G__35499 = chunk__35480_35494;
var G__35500 = count__35481_35495;
var G__35501 = (i__35482_35496 + (1));
seq__35479_35493 = G__35498;
chunk__35480_35494 = G__35499;
count__35481_35495 = G__35500;
i__35482_35496 = G__35501;
continue;
} else {
var temp__4425__auto___35502 = cljs.core.seq.call(null,seq__35479_35493);
if(temp__4425__auto___35502){
var seq__35479_35503__$1 = temp__4425__auto___35502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35479_35503__$1)){
var c__18417__auto___35504 = cljs.core.chunk_first.call(null,seq__35479_35503__$1);
var G__35505 = cljs.core.chunk_rest.call(null,seq__35479_35503__$1);
var G__35506 = c__18417__auto___35504;
var G__35507 = cljs.core.count.call(null,c__18417__auto___35504);
var G__35508 = (0);
seq__35479_35493 = G__35505;
chunk__35480_35494 = G__35506;
count__35481_35495 = G__35507;
i__35482_35496 = G__35508;
continue;
} else {
var f_35509 = cljs.core.first.call(null,seq__35479_35503__$1);
cljs.core.println.call(null,"  ",f_35509);

var G__35510 = cljs.core.next.call(null,seq__35479_35503__$1);
var G__35511 = null;
var G__35512 = (0);
var G__35513 = (0);
seq__35479_35493 = G__35510;
chunk__35480_35494 = G__35511;
count__35481_35495 = G__35512;
i__35482_35496 = G__35513;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35514 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17614__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35514);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35514)))?cljs.core.second.call(null,arglists_35514):arglists_35514));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35483 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35484 = null;
var count__35485 = (0);
var i__35486 = (0);
while(true){
if((i__35486 < count__35485)){
var vec__35487 = cljs.core._nth.call(null,chunk__35484,i__35486);
var name = cljs.core.nth.call(null,vec__35487,(0),null);
var map__35488 = cljs.core.nth.call(null,vec__35487,(1),null);
var map__35488__$1 = ((((!((map__35488 == null)))?((((map__35488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35488):map__35488);
var doc = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35515 = seq__35483;
var G__35516 = chunk__35484;
var G__35517 = count__35485;
var G__35518 = (i__35486 + (1));
seq__35483 = G__35515;
chunk__35484 = G__35516;
count__35485 = G__35517;
i__35486 = G__35518;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35483);
if(temp__4425__auto__){
var seq__35483__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35483__$1)){
var c__18417__auto__ = cljs.core.chunk_first.call(null,seq__35483__$1);
var G__35519 = cljs.core.chunk_rest.call(null,seq__35483__$1);
var G__35520 = c__18417__auto__;
var G__35521 = cljs.core.count.call(null,c__18417__auto__);
var G__35522 = (0);
seq__35483 = G__35519;
chunk__35484 = G__35520;
count__35485 = G__35521;
i__35486 = G__35522;
continue;
} else {
var vec__35490 = cljs.core.first.call(null,seq__35483__$1);
var name = cljs.core.nth.call(null,vec__35490,(0),null);
var map__35491 = cljs.core.nth.call(null,vec__35490,(1),null);
var map__35491__$1 = ((((!((map__35491 == null)))?((((map__35491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35491):map__35491);
var doc = cljs.core.get.call(null,map__35491__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35491__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35523 = cljs.core.next.call(null,seq__35483__$1);
var G__35524 = null;
var G__35525 = (0);
var G__35526 = (0);
seq__35483 = G__35523;
chunk__35484 = G__35524;
count__35485 = G__35525;
i__35486 = G__35526;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map