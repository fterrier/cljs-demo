// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34369 = cljs.core._EQ_;
var expr__34370 = (function (){var or__17614__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34369.call(null,"true",expr__34370))){
return true;
} else {
if(cljs.core.truth_(pred__34369.call(null,"false",expr__34370))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34370)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34372__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34373__i = 0, G__34373__a = new Array(arguments.length -  0);
while (G__34373__i < G__34373__a.length) {G__34373__a[G__34373__i] = arguments[G__34373__i + 0]; ++G__34373__i;}
  args = new cljs.core.IndexedSeq(G__34373__a,0);
} 
return G__34372__delegate.call(this,args);};
G__34372.cljs$lang$maxFixedArity = 0;
G__34372.cljs$lang$applyTo = (function (arglist__34374){
var args = cljs.core.seq(arglist__34374);
return G__34372__delegate(args);
});
G__34372.cljs$core$IFn$_invoke$arity$variadic = G__34372__delegate;
return G__34372;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34375){
var map__34378 = p__34375;
var map__34378__$1 = ((((!((map__34378 == null)))?((((map__34378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34378):map__34378);
var message = cljs.core.get.call(null,map__34378__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34378__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17614__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17602__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17602__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17602__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20694__auto___34540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___34540,ch){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___34540,ch){
return (function (state_34509){
var state_val_34510 = (state_34509[(1)]);
if((state_val_34510 === (7))){
var inst_34505 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34511_34541 = state_34509__$1;
(statearr_34511_34541[(2)] = inst_34505);

(statearr_34511_34541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (1))){
var state_34509__$1 = state_34509;
var statearr_34512_34542 = state_34509__$1;
(statearr_34512_34542[(2)] = null);

(statearr_34512_34542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (4))){
var inst_34462 = (state_34509[(7)]);
var inst_34462__$1 = (state_34509[(2)]);
var state_34509__$1 = (function (){var statearr_34513 = state_34509;
(statearr_34513[(7)] = inst_34462__$1);

return statearr_34513;
})();
if(cljs.core.truth_(inst_34462__$1)){
var statearr_34514_34543 = state_34509__$1;
(statearr_34514_34543[(1)] = (5));

} else {
var statearr_34515_34544 = state_34509__$1;
(statearr_34515_34544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (15))){
var inst_34469 = (state_34509[(8)]);
var inst_34484 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34469);
var inst_34485 = cljs.core.first.call(null,inst_34484);
var inst_34486 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34485);
var inst_34487 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34486)].join('');
var inst_34488 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34487);
var state_34509__$1 = state_34509;
var statearr_34516_34545 = state_34509__$1;
(statearr_34516_34545[(2)] = inst_34488);

(statearr_34516_34545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (13))){
var inst_34493 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34517_34546 = state_34509__$1;
(statearr_34517_34546[(2)] = inst_34493);

(statearr_34517_34546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (6))){
var state_34509__$1 = state_34509;
var statearr_34518_34547 = state_34509__$1;
(statearr_34518_34547[(2)] = null);

(statearr_34518_34547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (17))){
var inst_34491 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34519_34548 = state_34509__$1;
(statearr_34519_34548[(2)] = inst_34491);

(statearr_34519_34548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (3))){
var inst_34507 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34509__$1,inst_34507);
} else {
if((state_val_34510 === (12))){
var inst_34468 = (state_34509[(9)]);
var inst_34482 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34468,opts);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34482)){
var statearr_34520_34549 = state_34509__$1;
(statearr_34520_34549[(1)] = (15));

} else {
var statearr_34521_34550 = state_34509__$1;
(statearr_34521_34550[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (2))){
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(4),ch);
} else {
if((state_val_34510 === (11))){
var inst_34469 = (state_34509[(8)]);
var inst_34474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34475 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34469);
var inst_34476 = cljs.core.async.timeout.call(null,(1000));
var inst_34477 = [inst_34475,inst_34476];
var inst_34478 = (new cljs.core.PersistentVector(null,2,(5),inst_34474,inst_34477,null));
var state_34509__$1 = state_34509;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34509__$1,(14),inst_34478);
} else {
if((state_val_34510 === (9))){
var inst_34469 = (state_34509[(8)]);
var inst_34495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34496 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34469);
var inst_34497 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34496);
var inst_34498 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34497)].join('');
var inst_34499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34498);
var state_34509__$1 = (function (){var statearr_34522 = state_34509;
(statearr_34522[(10)] = inst_34495);

return statearr_34522;
})();
var statearr_34523_34551 = state_34509__$1;
(statearr_34523_34551[(2)] = inst_34499);

(statearr_34523_34551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (5))){
var inst_34462 = (state_34509[(7)]);
var inst_34464 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34465 = (new cljs.core.PersistentArrayMap(null,2,inst_34464,null));
var inst_34466 = (new cljs.core.PersistentHashSet(null,inst_34465,null));
var inst_34467 = figwheel.client.focus_msgs.call(null,inst_34466,inst_34462);
var inst_34468 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34467);
var inst_34469 = cljs.core.first.call(null,inst_34467);
var inst_34470 = figwheel.client.autoload_QMARK_.call(null);
var state_34509__$1 = (function (){var statearr_34524 = state_34509;
(statearr_34524[(9)] = inst_34468);

(statearr_34524[(8)] = inst_34469);

return statearr_34524;
})();
if(cljs.core.truth_(inst_34470)){
var statearr_34525_34552 = state_34509__$1;
(statearr_34525_34552[(1)] = (8));

} else {
var statearr_34526_34553 = state_34509__$1;
(statearr_34526_34553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (14))){
var inst_34480 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34527_34554 = state_34509__$1;
(statearr_34527_34554[(2)] = inst_34480);

(statearr_34527_34554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (16))){
var state_34509__$1 = state_34509;
var statearr_34528_34555 = state_34509__$1;
(statearr_34528_34555[(2)] = null);

(statearr_34528_34555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (10))){
var inst_34501 = (state_34509[(2)]);
var state_34509__$1 = (function (){var statearr_34529 = state_34509;
(statearr_34529[(11)] = inst_34501);

return statearr_34529;
})();
var statearr_34530_34556 = state_34509__$1;
(statearr_34530_34556[(2)] = null);

(statearr_34530_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (8))){
var inst_34468 = (state_34509[(9)]);
var inst_34472 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34468,opts);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34472)){
var statearr_34531_34557 = state_34509__$1;
(statearr_34531_34557[(1)] = (11));

} else {
var statearr_34532_34558 = state_34509__$1;
(statearr_34532_34558[(1)] = (12));

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
});})(c__20694__auto___34540,ch))
;
return ((function (switch__20629__auto__,c__20694__auto___34540,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20630__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20630__auto____0 = (function (){
var statearr_34536 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34536[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20630__auto__);

(statearr_34536[(1)] = (1));

return statearr_34536;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20630__auto____1 = (function (state_34509){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_34509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e34537){if((e34537 instanceof Object)){
var ex__20633__auto__ = e34537;
var statearr_34538_34559 = state_34509;
(statearr_34538_34559[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34560 = state_34509;
state_34509 = G__34560;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20630__auto__ = function(state_34509){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20630__auto____1.call(this,state_34509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20630__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20630__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___34540,ch))
})();
var state__20696__auto__ = (function (){var statearr_34539 = f__20695__auto__.call(null);
(statearr_34539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___34540);

return statearr_34539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___34540,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34561_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34561_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34568 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34568){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_34566 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34567 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34566,_STAR_print_newline_STAR_34567,base_path_34568){
return (function() { 
var G__34569__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34570__i = 0, G__34570__a = new Array(arguments.length -  0);
while (G__34570__i < G__34570__a.length) {G__34570__a[G__34570__i] = arguments[G__34570__i + 0]; ++G__34570__i;}
  args = new cljs.core.IndexedSeq(G__34570__a,0);
} 
return G__34569__delegate.call(this,args);};
G__34569.cljs$lang$maxFixedArity = 0;
G__34569.cljs$lang$applyTo = (function (arglist__34571){
var args = cljs.core.seq(arglist__34571);
return G__34569__delegate(args);
});
G__34569.cljs$core$IFn$_invoke$arity$variadic = G__34569__delegate;
return G__34569;
})()
;})(_STAR_print_fn_STAR_34566,_STAR_print_newline_STAR_34567,base_path_34568))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34567;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34566;
}}catch (e34565){if((e34565 instanceof Error)){
var e = e34565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34568], null));
} else {
var e = e34565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34568))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34572){
var map__34579 = p__34572;
var map__34579__$1 = ((((!((map__34579 == null)))?((((map__34579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34579):map__34579);
var opts = map__34579__$1;
var build_id = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34579,map__34579__$1,opts,build_id){
return (function (p__34581){
var vec__34582 = p__34581;
var map__34583 = cljs.core.nth.call(null,vec__34582,(0),null);
var map__34583__$1 = ((((!((map__34583 == null)))?((((map__34583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34583):map__34583);
var msg = map__34583__$1;
var msg_name = cljs.core.get.call(null,map__34583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34582,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34582,map__34583,map__34583__$1,msg,msg_name,_,map__34579,map__34579__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34582,map__34583,map__34583__$1,msg,msg_name,_,map__34579,map__34579__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34579,map__34579__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34589){
var vec__34590 = p__34589;
var map__34591 = cljs.core.nth.call(null,vec__34590,(0),null);
var map__34591__$1 = ((((!((map__34591 == null)))?((((map__34591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34591):map__34591);
var msg = map__34591__$1;
var msg_name = cljs.core.get.call(null,map__34591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34590,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34593){
var map__34603 = p__34593;
var map__34603__$1 = ((((!((map__34603 == null)))?((((map__34603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34603):map__34603);
var on_compile_warning = cljs.core.get.call(null,map__34603__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34603__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34603,map__34603__$1,on_compile_warning,on_compile_fail){
return (function (p__34605){
var vec__34606 = p__34605;
var map__34607 = cljs.core.nth.call(null,vec__34606,(0),null);
var map__34607__$1 = ((((!((map__34607 == null)))?((((map__34607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34607):map__34607);
var msg = map__34607__$1;
var msg_name = cljs.core.get.call(null,map__34607__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34606,(1));
var pred__34609 = cljs.core._EQ_;
var expr__34610 = msg_name;
if(cljs.core.truth_(pred__34609.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34610))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34609.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34610))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34603,map__34603__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__,msg_hist,msg_names,msg){
return (function (state_34826){
var state_val_34827 = (state_34826[(1)]);
if((state_val_34827 === (7))){
var inst_34750 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34750)){
var statearr_34828_34874 = state_34826__$1;
(statearr_34828_34874[(1)] = (8));

} else {
var statearr_34829_34875 = state_34826__$1;
(statearr_34829_34875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (20))){
var inst_34820 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34830_34876 = state_34826__$1;
(statearr_34830_34876[(2)] = inst_34820);

(statearr_34830_34876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (27))){
var inst_34816 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34831_34877 = state_34826__$1;
(statearr_34831_34877[(2)] = inst_34816);

(statearr_34831_34877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (1))){
var inst_34743 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34743)){
var statearr_34832_34878 = state_34826__$1;
(statearr_34832_34878[(1)] = (2));

} else {
var statearr_34833_34879 = state_34826__$1;
(statearr_34833_34879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (24))){
var inst_34818 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34834_34880 = state_34826__$1;
(statearr_34834_34880[(2)] = inst_34818);

(statearr_34834_34880[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (4))){
var inst_34824 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34826__$1,inst_34824);
} else {
if((state_val_34827 === (15))){
var inst_34822 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34835_34881 = state_34826__$1;
(statearr_34835_34881[(2)] = inst_34822);

(statearr_34835_34881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (21))){
var inst_34781 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34836_34882 = state_34826__$1;
(statearr_34836_34882[(2)] = inst_34781);

(statearr_34836_34882[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (31))){
var inst_34805 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34805)){
var statearr_34837_34883 = state_34826__$1;
(statearr_34837_34883[(1)] = (34));

} else {
var statearr_34838_34884 = state_34826__$1;
(statearr_34838_34884[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (32))){
var inst_34814 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34839_34885 = state_34826__$1;
(statearr_34839_34885[(2)] = inst_34814);

(statearr_34839_34885[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (33))){
var inst_34803 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34840_34886 = state_34826__$1;
(statearr_34840_34886[(2)] = inst_34803);

(statearr_34840_34886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (13))){
var inst_34764 = figwheel.client.heads_up.clear.call(null);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(16),inst_34764);
} else {
if((state_val_34827 === (22))){
var inst_34785 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34786 = figwheel.client.heads_up.append_message.call(null,inst_34785);
var state_34826__$1 = state_34826;
var statearr_34841_34887 = state_34826__$1;
(statearr_34841_34887[(2)] = inst_34786);

(statearr_34841_34887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (36))){
var inst_34812 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34842_34888 = state_34826__$1;
(statearr_34842_34888[(2)] = inst_34812);

(statearr_34842_34888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (29))){
var inst_34796 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34843_34889 = state_34826__$1;
(statearr_34843_34889[(2)] = inst_34796);

(statearr_34843_34889[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (6))){
var inst_34745 = (state_34826[(7)]);
var state_34826__$1 = state_34826;
var statearr_34844_34890 = state_34826__$1;
(statearr_34844_34890[(2)] = inst_34745);

(statearr_34844_34890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (28))){
var inst_34792 = (state_34826[(2)]);
var inst_34793 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34794 = figwheel.client.heads_up.display_warning.call(null,inst_34793);
var state_34826__$1 = (function (){var statearr_34845 = state_34826;
(statearr_34845[(8)] = inst_34792);

return statearr_34845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(29),inst_34794);
} else {
if((state_val_34827 === (25))){
var inst_34790 = figwheel.client.heads_up.clear.call(null);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(28),inst_34790);
} else {
if((state_val_34827 === (34))){
var inst_34807 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(37),inst_34807);
} else {
if((state_val_34827 === (17))){
var inst_34772 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34846_34891 = state_34826__$1;
(statearr_34846_34891[(2)] = inst_34772);

(statearr_34846_34891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (3))){
var inst_34762 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34762)){
var statearr_34847_34892 = state_34826__$1;
(statearr_34847_34892[(1)] = (13));

} else {
var statearr_34848_34893 = state_34826__$1;
(statearr_34848_34893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (12))){
var inst_34758 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34849_34894 = state_34826__$1;
(statearr_34849_34894[(2)] = inst_34758);

(statearr_34849_34894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (2))){
var inst_34745 = (state_34826[(7)]);
var inst_34745__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34826__$1 = (function (){var statearr_34850 = state_34826;
(statearr_34850[(7)] = inst_34745__$1);

return statearr_34850;
})();
if(cljs.core.truth_(inst_34745__$1)){
var statearr_34851_34895 = state_34826__$1;
(statearr_34851_34895[(1)] = (5));

} else {
var statearr_34852_34896 = state_34826__$1;
(statearr_34852_34896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (23))){
var inst_34788 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34788)){
var statearr_34853_34897 = state_34826__$1;
(statearr_34853_34897[(1)] = (25));

} else {
var statearr_34854_34898 = state_34826__$1;
(statearr_34854_34898[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (35))){
var state_34826__$1 = state_34826;
var statearr_34855_34899 = state_34826__$1;
(statearr_34855_34899[(2)] = null);

(statearr_34855_34899[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (19))){
var inst_34783 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34783)){
var statearr_34856_34900 = state_34826__$1;
(statearr_34856_34900[(1)] = (22));

} else {
var statearr_34857_34901 = state_34826__$1;
(statearr_34857_34901[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (11))){
var inst_34754 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34858_34902 = state_34826__$1;
(statearr_34858_34902[(2)] = inst_34754);

(statearr_34858_34902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (9))){
var inst_34756 = figwheel.client.heads_up.clear.call(null);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(12),inst_34756);
} else {
if((state_val_34827 === (5))){
var inst_34747 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34826__$1 = state_34826;
var statearr_34859_34903 = state_34826__$1;
(statearr_34859_34903[(2)] = inst_34747);

(statearr_34859_34903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (14))){
var inst_34774 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34774)){
var statearr_34860_34904 = state_34826__$1;
(statearr_34860_34904[(1)] = (18));

} else {
var statearr_34861_34905 = state_34826__$1;
(statearr_34861_34905[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (26))){
var inst_34798 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34798)){
var statearr_34862_34906 = state_34826__$1;
(statearr_34862_34906[(1)] = (30));

} else {
var statearr_34863_34907 = state_34826__$1;
(statearr_34863_34907[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (16))){
var inst_34766 = (state_34826[(2)]);
var inst_34767 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34768 = figwheel.client.format_messages.call(null,inst_34767);
var inst_34769 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34770 = figwheel.client.heads_up.display_error.call(null,inst_34768,inst_34769);
var state_34826__$1 = (function (){var statearr_34864 = state_34826;
(statearr_34864[(9)] = inst_34766);

return statearr_34864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(17),inst_34770);
} else {
if((state_val_34827 === (30))){
var inst_34800 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34801 = figwheel.client.heads_up.display_warning.call(null,inst_34800);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(33),inst_34801);
} else {
if((state_val_34827 === (10))){
var inst_34760 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34865_34908 = state_34826__$1;
(statearr_34865_34908[(2)] = inst_34760);

(statearr_34865_34908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (18))){
var inst_34776 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34777 = figwheel.client.format_messages.call(null,inst_34776);
var inst_34778 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34779 = figwheel.client.heads_up.display_error.call(null,inst_34777,inst_34778);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(21),inst_34779);
} else {
if((state_val_34827 === (37))){
var inst_34809 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34866_34909 = state_34826__$1;
(statearr_34866_34909[(2)] = inst_34809);

(statearr_34866_34909[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (8))){
var inst_34752 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34826__$1,(11),inst_34752);
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
});})(c__20694__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20629__auto__,c__20694__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto____0 = (function (){
var statearr_34870 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34870[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto__);

(statearr_34870[(1)] = (1));

return statearr_34870;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto____1 = (function (state_34826){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_34826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e34871){if((e34871 instanceof Object)){
var ex__20633__auto__ = e34871;
var statearr_34872_34910 = state_34826;
(statearr_34872_34910[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34911 = state_34826;
state_34826 = G__34911;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto__ = function(state_34826){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto____1.call(this,state_34826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__,msg_hist,msg_names,msg))
})();
var state__20696__auto__ = (function (){var statearr_34873 = f__20695__auto__.call(null);
(statearr_34873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_34873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__,msg_hist,msg_names,msg))
);

return c__20694__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20694__auto___34974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___34974,ch){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___34974,ch){
return (function (state_34957){
var state_val_34958 = (state_34957[(1)]);
if((state_val_34958 === (1))){
var state_34957__$1 = state_34957;
var statearr_34959_34975 = state_34957__$1;
(statearr_34959_34975[(2)] = null);

(statearr_34959_34975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (2))){
var state_34957__$1 = state_34957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34957__$1,(4),ch);
} else {
if((state_val_34958 === (3))){
var inst_34955 = (state_34957[(2)]);
var state_34957__$1 = state_34957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34957__$1,inst_34955);
} else {
if((state_val_34958 === (4))){
var inst_34945 = (state_34957[(7)]);
var inst_34945__$1 = (state_34957[(2)]);
var state_34957__$1 = (function (){var statearr_34960 = state_34957;
(statearr_34960[(7)] = inst_34945__$1);

return statearr_34960;
})();
if(cljs.core.truth_(inst_34945__$1)){
var statearr_34961_34976 = state_34957__$1;
(statearr_34961_34976[(1)] = (5));

} else {
var statearr_34962_34977 = state_34957__$1;
(statearr_34962_34977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (5))){
var inst_34945 = (state_34957[(7)]);
var inst_34947 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34945);
var state_34957__$1 = state_34957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34957__$1,(8),inst_34947);
} else {
if((state_val_34958 === (6))){
var state_34957__$1 = state_34957;
var statearr_34963_34978 = state_34957__$1;
(statearr_34963_34978[(2)] = null);

(statearr_34963_34978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (7))){
var inst_34953 = (state_34957[(2)]);
var state_34957__$1 = state_34957;
var statearr_34964_34979 = state_34957__$1;
(statearr_34964_34979[(2)] = inst_34953);

(statearr_34964_34979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34958 === (8))){
var inst_34949 = (state_34957[(2)]);
var state_34957__$1 = (function (){var statearr_34965 = state_34957;
(statearr_34965[(8)] = inst_34949);

return statearr_34965;
})();
var statearr_34966_34980 = state_34957__$1;
(statearr_34966_34980[(2)] = null);

(statearr_34966_34980[(1)] = (2));


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
});})(c__20694__auto___34974,ch))
;
return ((function (switch__20629__auto__,c__20694__auto___34974,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20630__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20630__auto____0 = (function (){
var statearr_34970 = [null,null,null,null,null,null,null,null,null];
(statearr_34970[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20630__auto__);

(statearr_34970[(1)] = (1));

return statearr_34970;
});
var figwheel$client$heads_up_plugin_$_state_machine__20630__auto____1 = (function (state_34957){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_34957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e34971){if((e34971 instanceof Object)){
var ex__20633__auto__ = e34971;
var statearr_34972_34981 = state_34957;
(statearr_34972_34981[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34982 = state_34957;
state_34957 = G__34982;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20630__auto__ = function(state_34957){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20630__auto____1.call(this,state_34957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20630__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20630__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___34974,ch))
})();
var state__20696__auto__ = (function (){var statearr_34973 = f__20695__auto__.call(null);
(statearr_34973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___34974);

return statearr_34973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___34974,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_35003){
var state_val_35004 = (state_35003[(1)]);
if((state_val_35004 === (1))){
var inst_34998 = cljs.core.async.timeout.call(null,(3000));
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35003__$1,(2),inst_34998);
} else {
if((state_val_35004 === (2))){
var inst_35000 = (state_35003[(2)]);
var inst_35001 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35003__$1 = (function (){var statearr_35005 = state_35003;
(statearr_35005[(7)] = inst_35000);

return statearr_35005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35003__$1,inst_35001);
} else {
return null;
}
}
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20630__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20630__auto____0 = (function (){
var statearr_35009 = [null,null,null,null,null,null,null,null];
(statearr_35009[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20630__auto__);

(statearr_35009[(1)] = (1));

return statearr_35009;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20630__auto____1 = (function (state_35003){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_35003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e35010){if((e35010 instanceof Object)){
var ex__20633__auto__ = e35010;
var statearr_35011_35013 = state_35003;
(statearr_35011_35013[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35014 = state_35003;
state_35003 = G__35014;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20630__auto__ = function(state_35003){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20630__auto____1.call(this,state_35003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20630__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20630__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_35012 = f__20695__auto__.call(null);
(statearr_35012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_35012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35015){
var map__35022 = p__35015;
var map__35022__$1 = ((((!((map__35022 == null)))?((((map__35022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35022):map__35022);
var ed = map__35022__$1;
var formatted_exception = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35024_35028 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35025_35029 = null;
var count__35026_35030 = (0);
var i__35027_35031 = (0);
while(true){
if((i__35027_35031 < count__35026_35030)){
var msg_35032 = cljs.core._nth.call(null,chunk__35025_35029,i__35027_35031);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35032);

var G__35033 = seq__35024_35028;
var G__35034 = chunk__35025_35029;
var G__35035 = count__35026_35030;
var G__35036 = (i__35027_35031 + (1));
seq__35024_35028 = G__35033;
chunk__35025_35029 = G__35034;
count__35026_35030 = G__35035;
i__35027_35031 = G__35036;
continue;
} else {
var temp__4425__auto___35037 = cljs.core.seq.call(null,seq__35024_35028);
if(temp__4425__auto___35037){
var seq__35024_35038__$1 = temp__4425__auto___35037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35024_35038__$1)){
var c__18417__auto___35039 = cljs.core.chunk_first.call(null,seq__35024_35038__$1);
var G__35040 = cljs.core.chunk_rest.call(null,seq__35024_35038__$1);
var G__35041 = c__18417__auto___35039;
var G__35042 = cljs.core.count.call(null,c__18417__auto___35039);
var G__35043 = (0);
seq__35024_35028 = G__35040;
chunk__35025_35029 = G__35041;
count__35026_35030 = G__35042;
i__35027_35031 = G__35043;
continue;
} else {
var msg_35044 = cljs.core.first.call(null,seq__35024_35038__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35044);

var G__35045 = cljs.core.next.call(null,seq__35024_35038__$1);
var G__35046 = null;
var G__35047 = (0);
var G__35048 = (0);
seq__35024_35028 = G__35045;
chunk__35025_35029 = G__35046;
count__35026_35030 = G__35047;
i__35027_35031 = G__35048;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35049){
var map__35052 = p__35049;
var map__35052__$1 = ((((!((map__35052 == null)))?((((map__35052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35052):map__35052);
var w = map__35052__$1;
var message = cljs.core.get.call(null,map__35052__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17602__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17602__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17602__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35060 = cljs.core.seq.call(null,plugins);
var chunk__35061 = null;
var count__35062 = (0);
var i__35063 = (0);
while(true){
if((i__35063 < count__35062)){
var vec__35064 = cljs.core._nth.call(null,chunk__35061,i__35063);
var k = cljs.core.nth.call(null,vec__35064,(0),null);
var plugin = cljs.core.nth.call(null,vec__35064,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35066 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35060,chunk__35061,count__35062,i__35063,pl_35066,vec__35064,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35066.call(null,msg_hist);
});})(seq__35060,chunk__35061,count__35062,i__35063,pl_35066,vec__35064,k,plugin))
);
} else {
}

var G__35067 = seq__35060;
var G__35068 = chunk__35061;
var G__35069 = count__35062;
var G__35070 = (i__35063 + (1));
seq__35060 = G__35067;
chunk__35061 = G__35068;
count__35062 = G__35069;
i__35063 = G__35070;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35060);
if(temp__4425__auto__){
var seq__35060__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35060__$1)){
var c__18417__auto__ = cljs.core.chunk_first.call(null,seq__35060__$1);
var G__35071 = cljs.core.chunk_rest.call(null,seq__35060__$1);
var G__35072 = c__18417__auto__;
var G__35073 = cljs.core.count.call(null,c__18417__auto__);
var G__35074 = (0);
seq__35060 = G__35071;
chunk__35061 = G__35072;
count__35062 = G__35073;
i__35063 = G__35074;
continue;
} else {
var vec__35065 = cljs.core.first.call(null,seq__35060__$1);
var k = cljs.core.nth.call(null,vec__35065,(0),null);
var plugin = cljs.core.nth.call(null,vec__35065,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35075 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35060,chunk__35061,count__35062,i__35063,pl_35075,vec__35065,k,plugin,seq__35060__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35075.call(null,msg_hist);
});})(seq__35060,chunk__35061,count__35062,i__35063,pl_35075,vec__35065,k,plugin,seq__35060__$1,temp__4425__auto__))
);
} else {
}

var G__35076 = cljs.core.next.call(null,seq__35060__$1);
var G__35077 = null;
var G__35078 = (0);
var G__35079 = (0);
seq__35060 = G__35076;
chunk__35061 = G__35077;
count__35062 = G__35078;
i__35063 = G__35079;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35080 = [];
var len__18672__auto___35083 = arguments.length;
var i__18673__auto___35084 = (0);
while(true){
if((i__18673__auto___35084 < len__18672__auto___35083)){
args35080.push((arguments[i__18673__auto___35084]));

var G__35085 = (i__18673__auto___35084 + (1));
i__18673__auto___35084 = G__35085;
continue;
} else {
}
break;
}

var G__35082 = args35080.length;
switch (G__35082) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35080.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__18679__auto__ = [];
var len__18672__auto___35091 = arguments.length;
var i__18673__auto___35092 = (0);
while(true){
if((i__18673__auto___35092 < len__18672__auto___35091)){
args__18679__auto__.push((arguments[i__18673__auto___35092]));

var G__35093 = (i__18673__auto___35092 + (1));
i__18673__auto___35092 = G__35093;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((0) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18680__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35088){
var map__35089 = p__35088;
var map__35089__$1 = ((((!((map__35089 == null)))?((((map__35089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35089):map__35089);
var opts = map__35089__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35087){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35087));
});

//# sourceMappingURL=client.js.map