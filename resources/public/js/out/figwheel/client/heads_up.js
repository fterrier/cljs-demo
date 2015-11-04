// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__18679__auto__ = [];
var len__18672__auto___35231 = arguments.length;
var i__18673__auto___35232 = (0);
while(true){
if((i__18673__auto___35232 < len__18672__auto___35231)){
args__18679__auto__.push((arguments[i__18673__auto___35232]));

var G__35233 = (i__18673__auto___35232 + (1));
i__18673__auto___35232 = G__35233;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((2) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18680__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35223_35234 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35224_35235 = null;
var count__35225_35236 = (0);
var i__35226_35237 = (0);
while(true){
if((i__35226_35237 < count__35225_35236)){
var k_35238 = cljs.core._nth.call(null,chunk__35224_35235,i__35226_35237);
e.setAttribute(cljs.core.name.call(null,k_35238),cljs.core.get.call(null,attrs,k_35238));

var G__35239 = seq__35223_35234;
var G__35240 = chunk__35224_35235;
var G__35241 = count__35225_35236;
var G__35242 = (i__35226_35237 + (1));
seq__35223_35234 = G__35239;
chunk__35224_35235 = G__35240;
count__35225_35236 = G__35241;
i__35226_35237 = G__35242;
continue;
} else {
var temp__4425__auto___35243 = cljs.core.seq.call(null,seq__35223_35234);
if(temp__4425__auto___35243){
var seq__35223_35244__$1 = temp__4425__auto___35243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35223_35244__$1)){
var c__18417__auto___35245 = cljs.core.chunk_first.call(null,seq__35223_35244__$1);
var G__35246 = cljs.core.chunk_rest.call(null,seq__35223_35244__$1);
var G__35247 = c__18417__auto___35245;
var G__35248 = cljs.core.count.call(null,c__18417__auto___35245);
var G__35249 = (0);
seq__35223_35234 = G__35246;
chunk__35224_35235 = G__35247;
count__35225_35236 = G__35248;
i__35226_35237 = G__35249;
continue;
} else {
var k_35250 = cljs.core.first.call(null,seq__35223_35244__$1);
e.setAttribute(cljs.core.name.call(null,k_35250),cljs.core.get.call(null,attrs,k_35250));

var G__35251 = cljs.core.next.call(null,seq__35223_35244__$1);
var G__35252 = null;
var G__35253 = (0);
var G__35254 = (0);
seq__35223_35234 = G__35251;
chunk__35224_35235 = G__35252;
count__35225_35236 = G__35253;
i__35226_35237 = G__35254;
continue;
}
} else {
}
}
break;
}

var seq__35227_35255 = cljs.core.seq.call(null,children);
var chunk__35228_35256 = null;
var count__35229_35257 = (0);
var i__35230_35258 = (0);
while(true){
if((i__35230_35258 < count__35229_35257)){
var ch_35259 = cljs.core._nth.call(null,chunk__35228_35256,i__35230_35258);
e.appendChild(ch_35259);

var G__35260 = seq__35227_35255;
var G__35261 = chunk__35228_35256;
var G__35262 = count__35229_35257;
var G__35263 = (i__35230_35258 + (1));
seq__35227_35255 = G__35260;
chunk__35228_35256 = G__35261;
count__35229_35257 = G__35262;
i__35230_35258 = G__35263;
continue;
} else {
var temp__4425__auto___35264 = cljs.core.seq.call(null,seq__35227_35255);
if(temp__4425__auto___35264){
var seq__35227_35265__$1 = temp__4425__auto___35264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35227_35265__$1)){
var c__18417__auto___35266 = cljs.core.chunk_first.call(null,seq__35227_35265__$1);
var G__35267 = cljs.core.chunk_rest.call(null,seq__35227_35265__$1);
var G__35268 = c__18417__auto___35266;
var G__35269 = cljs.core.count.call(null,c__18417__auto___35266);
var G__35270 = (0);
seq__35227_35255 = G__35267;
chunk__35228_35256 = G__35268;
count__35229_35257 = G__35269;
i__35230_35258 = G__35270;
continue;
} else {
var ch_35271 = cljs.core.first.call(null,seq__35227_35265__$1);
e.appendChild(ch_35271);

var G__35272 = cljs.core.next.call(null,seq__35227_35265__$1);
var G__35273 = null;
var G__35274 = (0);
var G__35275 = (0);
seq__35227_35255 = G__35272;
chunk__35228_35256 = G__35273;
count__35229_35257 = G__35274;
i__35230_35258 = G__35275;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35220){
var G__35221 = cljs.core.first.call(null,seq35220);
var seq35220__$1 = cljs.core.next.call(null,seq35220);
var G__35222 = cljs.core.first.call(null,seq35220__$1);
var seq35220__$2 = cljs.core.next.call(null,seq35220__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35221,G__35222,seq35220__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18528__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18529__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18530__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18531__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18527__auto__,prefer_table__18528__auto__,method_cache__18529__auto__,cached_hierarchy__18530__auto__,hierarchy__18531__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18527__auto__,prefer_table__18528__auto__,method_cache__18529__auto__,cached_hierarchy__18530__auto__,hierarchy__18531__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18531__auto__,method_table__18527__auto__,prefer_table__18528__auto__,method_cache__18529__auto__,cached_hierarchy__18530__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_35276 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35276.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35276.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_35276.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35276);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__35277,st_map){
var map__35282 = p__35277;
var map__35282__$1 = ((((!((map__35282 == null)))?((((map__35282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35282):map__35282);
var container_el = cljs.core.get.call(null,map__35282__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35282,map__35282__$1,container_el){
return (function (p__35284){
var vec__35285 = p__35284;
var k = cljs.core.nth.call(null,vec__35285,(0),null);
var v = cljs.core.nth.call(null,vec__35285,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35282,map__35282__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__35286,dom_str){
var map__35289 = p__35286;
var map__35289__$1 = ((((!((map__35289 == null)))?((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35289):map__35289);
var c = map__35289__$1;
var content_area_el = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__35291){
var map__35294 = p__35291;
var map__35294__$1 = ((((!((map__35294 == null)))?((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);
var content_area_el = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_35337){
var state_val_35338 = (state_35337[(1)]);
if((state_val_35338 === (1))){
var inst_35322 = (state_35337[(7)]);
var inst_35322__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35323 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35324 = ["10px","10px","100%","68px","1.0"];
var inst_35325 = cljs.core.PersistentHashMap.fromArrays(inst_35323,inst_35324);
var inst_35326 = cljs.core.merge.call(null,inst_35325,style);
var inst_35327 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35322__$1,inst_35326);
var inst_35328 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35322__$1,msg);
var inst_35329 = cljs.core.async.timeout.call(null,(300));
var state_35337__$1 = (function (){var statearr_35339 = state_35337;
(statearr_35339[(8)] = inst_35328);

(statearr_35339[(7)] = inst_35322__$1);

(statearr_35339[(9)] = inst_35327);

return statearr_35339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35337__$1,(2),inst_35329);
} else {
if((state_val_35338 === (2))){
var inst_35322 = (state_35337[(7)]);
var inst_35331 = (state_35337[(2)]);
var inst_35332 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35333 = ["auto"];
var inst_35334 = cljs.core.PersistentHashMap.fromArrays(inst_35332,inst_35333);
var inst_35335 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35322,inst_35334);
var state_35337__$1 = (function (){var statearr_35340 = state_35337;
(statearr_35340[(10)] = inst_35331);

return statearr_35340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35337__$1,inst_35335);
} else {
return null;
}
}
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto____0 = (function (){
var statearr_35344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35344[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto__);

(statearr_35344[(1)] = (1));

return statearr_35344;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto____1 = (function (state_35337){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_35337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e35345){if((e35345 instanceof Object)){
var ex__20633__auto__ = e35345;
var statearr_35346_35348 = state_35337;
(statearr_35346_35348[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35349 = state_35337;
state_35337 = G__35349;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto__ = function(state_35337){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto____1.call(this,state_35337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_35347 = f__20695__auto__.call(null);
(statearr_35347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_35347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35351 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__35351,(0),null);
var ln = cljs.core.nth.call(null,vec__35351,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__35354 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__35354,(0),null);
var file_line = cljs.core.nth.call(null,vec__35354,(1),null);
var file_column = cljs.core.nth.call(null,vec__35354,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35354,file_name,file_line,file_column){
return (function (p1__35352_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__35352_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__35354,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17614__auto__ = file_line;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
var and__17602__auto__ = cause;
if(cljs.core.truth_(and__17602__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17602__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35357 = figwheel.client.heads_up.ensure_container.call(null);
var map__35357__$1 = ((((!((map__35357 == null)))?((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35357):map__35357);
var content_area_el = cljs.core.get.call(null,map__35357__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_35405){
var state_val_35406 = (state_35405[(1)]);
if((state_val_35406 === (1))){
var inst_35388 = (state_35405[(7)]);
var inst_35388__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35389 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35390 = ["0.0"];
var inst_35391 = cljs.core.PersistentHashMap.fromArrays(inst_35389,inst_35390);
var inst_35392 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35388__$1,inst_35391);
var inst_35393 = cljs.core.async.timeout.call(null,(300));
var state_35405__$1 = (function (){var statearr_35407 = state_35405;
(statearr_35407[(7)] = inst_35388__$1);

(statearr_35407[(8)] = inst_35392);

return statearr_35407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35405__$1,(2),inst_35393);
} else {
if((state_val_35406 === (2))){
var inst_35388 = (state_35405[(7)]);
var inst_35395 = (state_35405[(2)]);
var inst_35396 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35397 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35398 = cljs.core.PersistentHashMap.fromArrays(inst_35396,inst_35397);
var inst_35399 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35388,inst_35398);
var inst_35400 = cljs.core.async.timeout.call(null,(200));
var state_35405__$1 = (function (){var statearr_35408 = state_35405;
(statearr_35408[(9)] = inst_35395);

(statearr_35408[(10)] = inst_35399);

return statearr_35408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35405__$1,(3),inst_35400);
} else {
if((state_val_35406 === (3))){
var inst_35388 = (state_35405[(7)]);
var inst_35402 = (state_35405[(2)]);
var inst_35403 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35388,"");
var state_35405__$1 = (function (){var statearr_35409 = state_35405;
(statearr_35409[(11)] = inst_35402);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35405__$1,inst_35403);
} else {
return null;
}
}
}
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20630__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20630__auto____0 = (function (){
var statearr_35413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35413[(0)] = figwheel$client$heads_up$clear_$_state_machine__20630__auto__);

(statearr_35413[(1)] = (1));

return statearr_35413;
});
var figwheel$client$heads_up$clear_$_state_machine__20630__auto____1 = (function (state_35405){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_35405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e35414){if((e35414 instanceof Object)){
var ex__20633__auto__ = e35414;
var statearr_35415_35417 = state_35405;
(statearr_35415_35417[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35418 = state_35405;
state_35405 = G__35418;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20630__auto__ = function(state_35405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20630__auto____1.call(this,state_35405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20630__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20630__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_35416 = f__20695__auto__.call(null);
(statearr_35416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_35416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_35450){
var state_val_35451 = (state_35450[(1)]);
if((state_val_35451 === (1))){
var inst_35440 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35450__$1 = state_35450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35450__$1,(2),inst_35440);
} else {
if((state_val_35451 === (2))){
var inst_35442 = (state_35450[(2)]);
var inst_35443 = cljs.core.async.timeout.call(null,(400));
var state_35450__$1 = (function (){var statearr_35452 = state_35450;
(statearr_35452[(7)] = inst_35442);

return statearr_35452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35450__$1,(3),inst_35443);
} else {
if((state_val_35451 === (3))){
var inst_35445 = (state_35450[(2)]);
var inst_35446 = figwheel.client.heads_up.clear.call(null);
var state_35450__$1 = (function (){var statearr_35453 = state_35450;
(statearr_35453[(8)] = inst_35445);

return statearr_35453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35450__$1,(4),inst_35446);
} else {
if((state_val_35451 === (4))){
var inst_35448 = (state_35450[(2)]);
var state_35450__$1 = state_35450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35450__$1,inst_35448);
} else {
return null;
}
}
}
}
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto____0 = (function (){
var statearr_35457 = [null,null,null,null,null,null,null,null,null];
(statearr_35457[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto__);

(statearr_35457[(1)] = (1));

return statearr_35457;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto____1 = (function (state_35450){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_35450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e35458){if((e35458 instanceof Object)){
var ex__20633__auto__ = e35458;
var statearr_35459_35461 = state_35450;
(statearr_35459_35461[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35462 = state_35450;
state_35450 = G__35462;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto__ = function(state_35450){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto____1.call(this,state_35450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_35460 = f__20695__auto__.call(null);
(statearr_35460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map