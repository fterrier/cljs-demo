// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async36605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36605 = (function (fn_handler,f,meta36606){
this.fn_handler = fn_handler;
this.f = f;
this.meta36606 = meta36606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36607,meta36606__$1){
var self__ = this;
var _36607__$1 = this;
return (new cljs.core.async.t_cljs$core$async36605(self__.fn_handler,self__.f,meta36606__$1));
});

cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36607){
var self__ = this;
var _36607__$1 = this;
return self__.meta36606;
});

cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta36606","meta36606",-1747998968,null)], null);
});

cljs.core.async.t_cljs$core$async36605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36605";

cljs.core.async.t_cljs$core$async36605.cljs$lang$ctorPrWriter = (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async36605");
});

cljs.core.async.__GT_t_cljs$core$async36605 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async36605(fn_handler__$1,f__$1,meta36606){
return (new cljs.core.async.t_cljs$core$async36605(fn_handler__$1,f__$1,meta36606));
});

}

return (new cljs.core.async.t_cljs$core$async36605(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args36610 = [];
var len__18672__auto___36613 = arguments.length;
var i__18673__auto___36614 = (0);
while(true){
if((i__18673__auto___36614 < len__18672__auto___36613)){
args36610.push((arguments[i__18673__auto___36614]));

var G__36615 = (i__18673__auto___36614 + (1));
i__18673__auto___36614 = G__36615;
continue;
} else {
}
break;
}

var G__36612 = args36610.length;
switch (G__36612) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36610.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args36617 = [];
var len__18672__auto___36620 = arguments.length;
var i__18673__auto___36621 = (0);
while(true){
if((i__18673__auto___36621 < len__18672__auto___36620)){
args36617.push((arguments[i__18673__auto___36621]));

var G__36622 = (i__18673__auto___36621 + (1));
i__18673__auto___36621 = G__36622;
continue;
} else {
}
break;
}

var G__36619 = args36617.length;
switch (G__36619) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36617.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36624 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36624);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36624,ret){
return (function (){
return fn1.call(null,val_36624);
});})(val_36624,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args36625 = [];
var len__18672__auto___36628 = arguments.length;
var i__18673__auto___36629 = (0);
while(true){
if((i__18673__auto___36629 < len__18672__auto___36628)){
args36625.push((arguments[i__18673__auto___36629]));

var G__36630 = (i__18673__auto___36629 + (1));
i__18673__auto___36629 = G__36630;
continue;
} else {
}
break;
}

var G__36627 = args36625.length;
switch (G__36627) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36625.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18517__auto___36632 = n;
var x_36633 = (0);
while(true){
if((x_36633 < n__18517__auto___36632)){
(a[x_36633] = (0));

var G__36634 = (x_36633 + (1));
x_36633 = G__36634;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36635 = (i + (1));
i = G__36635;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36639 = (function (alt_flag,flag,meta36640){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36640 = meta36640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36641,meta36640__$1){
var self__ = this;
var _36641__$1 = this;
return (new cljs.core.async.t_cljs$core$async36639(self__.alt_flag,self__.flag,meta36640__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36641){
var self__ = this;
var _36641__$1 = this;
return self__.meta36640;
});})(flag))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36639.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36640","meta36640",117844789,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36639";

cljs.core.async.t_cljs$core$async36639.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async36639");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36639 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36639(alt_flag__$1,flag__$1,meta36640){
return (new cljs.core.async.t_cljs$core$async36639(alt_flag__$1,flag__$1,meta36640));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36639(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36645 = (function (alt_handler,flag,cb,meta36646){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36646 = meta36646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36647,meta36646__$1){
var self__ = this;
var _36647__$1 = this;
return (new cljs.core.async.t_cljs$core$async36645(self__.alt_handler,self__.flag,self__.cb,meta36646__$1));
});

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36647){
var self__ = this;
var _36647__$1 = this;
return self__.meta36646;
});

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36646","meta36646",1934259015,null)], null);
});

cljs.core.async.t_cljs$core$async36645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36645";

cljs.core.async.t_cljs$core$async36645.cljs$lang$ctorPrWriter = (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async36645");
});

cljs.core.async.__GT_t_cljs$core$async36645 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36645(alt_handler__$1,flag__$1,cb__$1,meta36646){
return (new cljs.core.async.t_cljs$core$async36645(alt_handler__$1,flag__$1,cb__$1,meta36646));
});

}

return (new cljs.core.async.t_cljs$core$async36645(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36648_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36648_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36649_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36649_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17614__auto__ = wport;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36650 = (i + (1));
i = G__36650;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17614__auto__ = ret;
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17602__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17602__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17602__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__18679__auto__ = [];
var len__18672__auto___36656 = arguments.length;
var i__18673__auto___36657 = (0);
while(true){
if((i__18673__auto___36657 < len__18672__auto___36656)){
args__18679__auto__.push((arguments[i__18673__auto___36657]));

var G__36658 = (i__18673__auto___36657 + (1));
i__18673__auto___36657 = G__36658;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((1) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18680__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36653){
var map__36654 = p__36653;
var map__36654__$1 = ((((!((map__36654 == null)))?((((map__36654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36654):map__36654);
var opts = map__36654__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36651){
var G__36652 = cljs.core.first.call(null,seq36651);
var seq36651__$1 = cljs.core.next.call(null,seq36651);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36652,seq36651__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args36659 = [];
var len__18672__auto___36709 = arguments.length;
var i__18673__auto___36710 = (0);
while(true){
if((i__18673__auto___36710 < len__18672__auto___36709)){
args36659.push((arguments[i__18673__auto___36710]));

var G__36711 = (i__18673__auto___36710 + (1));
i__18673__auto___36710 = G__36711;
continue;
} else {
}
break;
}

var G__36661 = args36659.length;
switch (G__36661) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36659.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20694__auto___36713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___36713){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___36713){
return (function (state_36685){
var state_val_36686 = (state_36685[(1)]);
if((state_val_36686 === (7))){
var inst_36681 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36687_36714 = state_36685__$1;
(statearr_36687_36714[(2)] = inst_36681);

(statearr_36687_36714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (1))){
var state_36685__$1 = state_36685;
var statearr_36688_36715 = state_36685__$1;
(statearr_36688_36715[(2)] = null);

(statearr_36688_36715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (4))){
var inst_36664 = (state_36685[(7)]);
var inst_36664__$1 = (state_36685[(2)]);
var inst_36665 = (inst_36664__$1 == null);
var state_36685__$1 = (function (){var statearr_36689 = state_36685;
(statearr_36689[(7)] = inst_36664__$1);

return statearr_36689;
})();
if(cljs.core.truth_(inst_36665)){
var statearr_36690_36716 = state_36685__$1;
(statearr_36690_36716[(1)] = (5));

} else {
var statearr_36691_36717 = state_36685__$1;
(statearr_36691_36717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (13))){
var state_36685__$1 = state_36685;
var statearr_36692_36718 = state_36685__$1;
(statearr_36692_36718[(2)] = null);

(statearr_36692_36718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (6))){
var inst_36664 = (state_36685[(7)]);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36685__$1,(11),to,inst_36664);
} else {
if((state_val_36686 === (3))){
var inst_36683 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36685__$1,inst_36683);
} else {
if((state_val_36686 === (12))){
var state_36685__$1 = state_36685;
var statearr_36693_36719 = state_36685__$1;
(statearr_36693_36719[(2)] = null);

(statearr_36693_36719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (2))){
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36685__$1,(4),from);
} else {
if((state_val_36686 === (11))){
var inst_36674 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
if(cljs.core.truth_(inst_36674)){
var statearr_36694_36720 = state_36685__$1;
(statearr_36694_36720[(1)] = (12));

} else {
var statearr_36695_36721 = state_36685__$1;
(statearr_36695_36721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (9))){
var state_36685__$1 = state_36685;
var statearr_36696_36722 = state_36685__$1;
(statearr_36696_36722[(2)] = null);

(statearr_36696_36722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (5))){
var state_36685__$1 = state_36685;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36697_36723 = state_36685__$1;
(statearr_36697_36723[(1)] = (8));

} else {
var statearr_36698_36724 = state_36685__$1;
(statearr_36698_36724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (14))){
var inst_36679 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36699_36725 = state_36685__$1;
(statearr_36699_36725[(2)] = inst_36679);

(statearr_36699_36725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (10))){
var inst_36671 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36700_36726 = state_36685__$1;
(statearr_36700_36726[(2)] = inst_36671);

(statearr_36700_36726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (8))){
var inst_36668 = cljs.core.async.close_BANG_.call(null,to);
var state_36685__$1 = state_36685;
var statearr_36701_36727 = state_36685__$1;
(statearr_36701_36727[(2)] = inst_36668);

(statearr_36701_36727[(1)] = (10));


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
});})(c__20694__auto___36713))
;
return ((function (switch__20629__auto__,c__20694__auto___36713){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_36705 = [null,null,null,null,null,null,null,null];
(statearr_36705[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_36705[(1)] = (1));

return statearr_36705;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_36685){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_36685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e36706){if((e36706 instanceof Object)){
var ex__20633__auto__ = e36706;
var statearr_36707_36728 = state_36685;
(statearr_36707_36728[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36729 = state_36685;
state_36685 = G__36729;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_36685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_36685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___36713))
})();
var state__20696__auto__ = (function (){var statearr_36708 = f__20695__auto__.call(null);
(statearr_36708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___36713);

return statearr_36708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___36713))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36913){
var vec__36914 = p__36913;
var v = cljs.core.nth.call(null,vec__36914,(0),null);
var p = cljs.core.nth.call(null,vec__36914,(1),null);
var job = vec__36914;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20694__auto___37096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___37096,res,vec__36914,v,p,job,jobs,results){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___37096,res,vec__36914,v,p,job,jobs,results){
return (function (state_36919){
var state_val_36920 = (state_36919[(1)]);
if((state_val_36920 === (1))){
var state_36919__$1 = state_36919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36919__$1,(2),res,v);
} else {
if((state_val_36920 === (2))){
var inst_36916 = (state_36919[(2)]);
var inst_36917 = cljs.core.async.close_BANG_.call(null,res);
var state_36919__$1 = (function (){var statearr_36921 = state_36919;
(statearr_36921[(7)] = inst_36916);

return statearr_36921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36919__$1,inst_36917);
} else {
return null;
}
}
});})(c__20694__auto___37096,res,vec__36914,v,p,job,jobs,results))
;
return ((function (switch__20629__auto__,c__20694__auto___37096,res,vec__36914,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0 = (function (){
var statearr_36925 = [null,null,null,null,null,null,null,null];
(statearr_36925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__);

(statearr_36925[(1)] = (1));

return statearr_36925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1 = (function (state_36919){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_36919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e36926){if((e36926 instanceof Object)){
var ex__20633__auto__ = e36926;
var statearr_36927_37097 = state_36919;
(statearr_36927_37097[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37098 = state_36919;
state_36919 = G__37098;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = function(state_36919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1.call(this,state_36919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___37096,res,vec__36914,v,p,job,jobs,results))
})();
var state__20696__auto__ = (function (){var statearr_36928 = f__20695__auto__.call(null);
(statearr_36928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___37096);

return statearr_36928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___37096,res,vec__36914,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36929){
var vec__36930 = p__36929;
var v = cljs.core.nth.call(null,vec__36930,(0),null);
var p = cljs.core.nth.call(null,vec__36930,(1),null);
var job = vec__36930;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18517__auto___37099 = n;
var __37100 = (0);
while(true){
if((__37100 < n__18517__auto___37099)){
var G__36931_37101 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36931_37101) {
case "compute":
var c__20694__auto___37103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37100,c__20694__auto___37103,G__36931_37101,n__18517__auto___37099,jobs,results,process,async){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (__37100,c__20694__auto___37103,G__36931_37101,n__18517__auto___37099,jobs,results,process,async){
return (function (state_36944){
var state_val_36945 = (state_36944[(1)]);
if((state_val_36945 === (1))){
var state_36944__$1 = state_36944;
var statearr_36946_37104 = state_36944__$1;
(statearr_36946_37104[(2)] = null);

(statearr_36946_37104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (2))){
var state_36944__$1 = state_36944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36944__$1,(4),jobs);
} else {
if((state_val_36945 === (3))){
var inst_36942 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36944__$1,inst_36942);
} else {
if((state_val_36945 === (4))){
var inst_36934 = (state_36944[(2)]);
var inst_36935 = process.call(null,inst_36934);
var state_36944__$1 = state_36944;
if(cljs.core.truth_(inst_36935)){
var statearr_36947_37105 = state_36944__$1;
(statearr_36947_37105[(1)] = (5));

} else {
var statearr_36948_37106 = state_36944__$1;
(statearr_36948_37106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (5))){
var state_36944__$1 = state_36944;
var statearr_36949_37107 = state_36944__$1;
(statearr_36949_37107[(2)] = null);

(statearr_36949_37107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (6))){
var state_36944__$1 = state_36944;
var statearr_36950_37108 = state_36944__$1;
(statearr_36950_37108[(2)] = null);

(statearr_36950_37108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (7))){
var inst_36940 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
var statearr_36951_37109 = state_36944__$1;
(statearr_36951_37109[(2)] = inst_36940);

(statearr_36951_37109[(1)] = (3));


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
});})(__37100,c__20694__auto___37103,G__36931_37101,n__18517__auto___37099,jobs,results,process,async))
;
return ((function (__37100,switch__20629__auto__,c__20694__auto___37103,G__36931_37101,n__18517__auto___37099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0 = (function (){
var statearr_36955 = [null,null,null,null,null,null,null];
(statearr_36955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__);

(statearr_36955[(1)] = (1));

return statearr_36955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1 = (function (state_36944){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_36944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e36956){if((e36956 instanceof Object)){
var ex__20633__auto__ = e36956;
var statearr_36957_37110 = state_36944;
(statearr_36957_37110[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37111 = state_36944;
state_36944 = G__37111;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = function(state_36944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1.call(this,state_36944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__;
})()
;})(__37100,switch__20629__auto__,c__20694__auto___37103,G__36931_37101,n__18517__auto___37099,jobs,results,process,async))
})();
var state__20696__auto__ = (function (){var statearr_36958 = f__20695__auto__.call(null);
(statearr_36958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___37103);

return statearr_36958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(__37100,c__20694__auto___37103,G__36931_37101,n__18517__auto___37099,jobs,results,process,async))
);


break;
case "async":
var c__20694__auto___37112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37100,c__20694__auto___37112,G__36931_37101,n__18517__auto___37099,jobs,results,process,async){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (__37100,c__20694__auto___37112,G__36931_37101,n__18517__auto___37099,jobs,results,process,async){
return (function (state_36971){
var state_val_36972 = (state_36971[(1)]);
if((state_val_36972 === (1))){
var state_36971__$1 = state_36971;
var statearr_36973_37113 = state_36971__$1;
(statearr_36973_37113[(2)] = null);

(statearr_36973_37113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36972 === (2))){
var state_36971__$1 = state_36971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36971__$1,(4),jobs);
} else {
if((state_val_36972 === (3))){
var inst_36969 = (state_36971[(2)]);
var state_36971__$1 = state_36971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36971__$1,inst_36969);
} else {
if((state_val_36972 === (4))){
var inst_36961 = (state_36971[(2)]);
var inst_36962 = async.call(null,inst_36961);
var state_36971__$1 = state_36971;
if(cljs.core.truth_(inst_36962)){
var statearr_36974_37114 = state_36971__$1;
(statearr_36974_37114[(1)] = (5));

} else {
var statearr_36975_37115 = state_36971__$1;
(statearr_36975_37115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36972 === (5))){
var state_36971__$1 = state_36971;
var statearr_36976_37116 = state_36971__$1;
(statearr_36976_37116[(2)] = null);

(statearr_36976_37116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36972 === (6))){
var state_36971__$1 = state_36971;
var statearr_36977_37117 = state_36971__$1;
(statearr_36977_37117[(2)] = null);

(statearr_36977_37117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36972 === (7))){
var inst_36967 = (state_36971[(2)]);
var state_36971__$1 = state_36971;
var statearr_36978_37118 = state_36971__$1;
(statearr_36978_37118[(2)] = inst_36967);

(statearr_36978_37118[(1)] = (3));


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
});})(__37100,c__20694__auto___37112,G__36931_37101,n__18517__auto___37099,jobs,results,process,async))
;
return ((function (__37100,switch__20629__auto__,c__20694__auto___37112,G__36931_37101,n__18517__auto___37099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0 = (function (){
var statearr_36982 = [null,null,null,null,null,null,null];
(statearr_36982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__);

(statearr_36982[(1)] = (1));

return statearr_36982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1 = (function (state_36971){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_36971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e36983){if((e36983 instanceof Object)){
var ex__20633__auto__ = e36983;
var statearr_36984_37119 = state_36971;
(statearr_36984_37119[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37120 = state_36971;
state_36971 = G__37120;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = function(state_36971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1.call(this,state_36971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__;
})()
;})(__37100,switch__20629__auto__,c__20694__auto___37112,G__36931_37101,n__18517__auto___37099,jobs,results,process,async))
})();
var state__20696__auto__ = (function (){var statearr_36985 = f__20695__auto__.call(null);
(statearr_36985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___37112);

return statearr_36985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(__37100,c__20694__auto___37112,G__36931_37101,n__18517__auto___37099,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37121 = (__37100 + (1));
__37100 = G__37121;
continue;
} else {
}
break;
}

var c__20694__auto___37122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___37122,jobs,results,process,async){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___37122,jobs,results,process,async){
return (function (state_37007){
var state_val_37008 = (state_37007[(1)]);
if((state_val_37008 === (1))){
var state_37007__$1 = state_37007;
var statearr_37009_37123 = state_37007__$1;
(statearr_37009_37123[(2)] = null);

(statearr_37009_37123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37008 === (2))){
var state_37007__$1 = state_37007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37007__$1,(4),from);
} else {
if((state_val_37008 === (3))){
var inst_37005 = (state_37007[(2)]);
var state_37007__$1 = state_37007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37007__$1,inst_37005);
} else {
if((state_val_37008 === (4))){
var inst_36988 = (state_37007[(7)]);
var inst_36988__$1 = (state_37007[(2)]);
var inst_36989 = (inst_36988__$1 == null);
var state_37007__$1 = (function (){var statearr_37010 = state_37007;
(statearr_37010[(7)] = inst_36988__$1);

return statearr_37010;
})();
if(cljs.core.truth_(inst_36989)){
var statearr_37011_37124 = state_37007__$1;
(statearr_37011_37124[(1)] = (5));

} else {
var statearr_37012_37125 = state_37007__$1;
(statearr_37012_37125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37008 === (5))){
var inst_36991 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37007__$1 = state_37007;
var statearr_37013_37126 = state_37007__$1;
(statearr_37013_37126[(2)] = inst_36991);

(statearr_37013_37126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37008 === (6))){
var inst_36993 = (state_37007[(8)]);
var inst_36988 = (state_37007[(7)]);
var inst_36993__$1 = cljs.core.async.chan.call(null,(1));
var inst_36994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36995 = [inst_36988,inst_36993__$1];
var inst_36996 = (new cljs.core.PersistentVector(null,2,(5),inst_36994,inst_36995,null));
var state_37007__$1 = (function (){var statearr_37014 = state_37007;
(statearr_37014[(8)] = inst_36993__$1);

return statearr_37014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37007__$1,(8),jobs,inst_36996);
} else {
if((state_val_37008 === (7))){
var inst_37003 = (state_37007[(2)]);
var state_37007__$1 = state_37007;
var statearr_37015_37127 = state_37007__$1;
(statearr_37015_37127[(2)] = inst_37003);

(statearr_37015_37127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37008 === (8))){
var inst_36993 = (state_37007[(8)]);
var inst_36998 = (state_37007[(2)]);
var state_37007__$1 = (function (){var statearr_37016 = state_37007;
(statearr_37016[(9)] = inst_36998);

return statearr_37016;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37007__$1,(9),results,inst_36993);
} else {
if((state_val_37008 === (9))){
var inst_37000 = (state_37007[(2)]);
var state_37007__$1 = (function (){var statearr_37017 = state_37007;
(statearr_37017[(10)] = inst_37000);

return statearr_37017;
})();
var statearr_37018_37128 = state_37007__$1;
(statearr_37018_37128[(2)] = null);

(statearr_37018_37128[(1)] = (2));


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
});})(c__20694__auto___37122,jobs,results,process,async))
;
return ((function (switch__20629__auto__,c__20694__auto___37122,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0 = (function (){
var statearr_37022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__);

(statearr_37022[(1)] = (1));

return statearr_37022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1 = (function (state_37007){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_37007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e37023){if((e37023 instanceof Object)){
var ex__20633__auto__ = e37023;
var statearr_37024_37129 = state_37007;
(statearr_37024_37129[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37130 = state_37007;
state_37007 = G__37130;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = function(state_37007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1.call(this,state_37007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___37122,jobs,results,process,async))
})();
var state__20696__auto__ = (function (){var statearr_37025 = f__20695__auto__.call(null);
(statearr_37025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___37122);

return statearr_37025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___37122,jobs,results,process,async))
);


var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__,jobs,results,process,async){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__,jobs,results,process,async){
return (function (state_37063){
var state_val_37064 = (state_37063[(1)]);
if((state_val_37064 === (7))){
var inst_37059 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
var statearr_37065_37131 = state_37063__$1;
(statearr_37065_37131[(2)] = inst_37059);

(statearr_37065_37131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (20))){
var state_37063__$1 = state_37063;
var statearr_37066_37132 = state_37063__$1;
(statearr_37066_37132[(2)] = null);

(statearr_37066_37132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (1))){
var state_37063__$1 = state_37063;
var statearr_37067_37133 = state_37063__$1;
(statearr_37067_37133[(2)] = null);

(statearr_37067_37133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (4))){
var inst_37028 = (state_37063[(7)]);
var inst_37028__$1 = (state_37063[(2)]);
var inst_37029 = (inst_37028__$1 == null);
var state_37063__$1 = (function (){var statearr_37068 = state_37063;
(statearr_37068[(7)] = inst_37028__$1);

return statearr_37068;
})();
if(cljs.core.truth_(inst_37029)){
var statearr_37069_37134 = state_37063__$1;
(statearr_37069_37134[(1)] = (5));

} else {
var statearr_37070_37135 = state_37063__$1;
(statearr_37070_37135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (15))){
var inst_37041 = (state_37063[(8)]);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37063__$1,(18),to,inst_37041);
} else {
if((state_val_37064 === (21))){
var inst_37054 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
var statearr_37071_37136 = state_37063__$1;
(statearr_37071_37136[(2)] = inst_37054);

(statearr_37071_37136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (13))){
var inst_37056 = (state_37063[(2)]);
var state_37063__$1 = (function (){var statearr_37072 = state_37063;
(statearr_37072[(9)] = inst_37056);

return statearr_37072;
})();
var statearr_37073_37137 = state_37063__$1;
(statearr_37073_37137[(2)] = null);

(statearr_37073_37137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (6))){
var inst_37028 = (state_37063[(7)]);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37063__$1,(11),inst_37028);
} else {
if((state_val_37064 === (17))){
var inst_37049 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
if(cljs.core.truth_(inst_37049)){
var statearr_37074_37138 = state_37063__$1;
(statearr_37074_37138[(1)] = (19));

} else {
var statearr_37075_37139 = state_37063__$1;
(statearr_37075_37139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (3))){
var inst_37061 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37063__$1,inst_37061);
} else {
if((state_val_37064 === (12))){
var inst_37038 = (state_37063[(10)]);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37063__$1,(14),inst_37038);
} else {
if((state_val_37064 === (2))){
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37063__$1,(4),results);
} else {
if((state_val_37064 === (19))){
var state_37063__$1 = state_37063;
var statearr_37076_37140 = state_37063__$1;
(statearr_37076_37140[(2)] = null);

(statearr_37076_37140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (11))){
var inst_37038 = (state_37063[(2)]);
var state_37063__$1 = (function (){var statearr_37077 = state_37063;
(statearr_37077[(10)] = inst_37038);

return statearr_37077;
})();
var statearr_37078_37141 = state_37063__$1;
(statearr_37078_37141[(2)] = null);

(statearr_37078_37141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (9))){
var state_37063__$1 = state_37063;
var statearr_37079_37142 = state_37063__$1;
(statearr_37079_37142[(2)] = null);

(statearr_37079_37142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (5))){
var state_37063__$1 = state_37063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37080_37143 = state_37063__$1;
(statearr_37080_37143[(1)] = (8));

} else {
var statearr_37081_37144 = state_37063__$1;
(statearr_37081_37144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (14))){
var inst_37041 = (state_37063[(8)]);
var inst_37043 = (state_37063[(11)]);
var inst_37041__$1 = (state_37063[(2)]);
var inst_37042 = (inst_37041__$1 == null);
var inst_37043__$1 = cljs.core.not.call(null,inst_37042);
var state_37063__$1 = (function (){var statearr_37082 = state_37063;
(statearr_37082[(8)] = inst_37041__$1);

(statearr_37082[(11)] = inst_37043__$1);

return statearr_37082;
})();
if(inst_37043__$1){
var statearr_37083_37145 = state_37063__$1;
(statearr_37083_37145[(1)] = (15));

} else {
var statearr_37084_37146 = state_37063__$1;
(statearr_37084_37146[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (16))){
var inst_37043 = (state_37063[(11)]);
var state_37063__$1 = state_37063;
var statearr_37085_37147 = state_37063__$1;
(statearr_37085_37147[(2)] = inst_37043);

(statearr_37085_37147[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (10))){
var inst_37035 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
var statearr_37086_37148 = state_37063__$1;
(statearr_37086_37148[(2)] = inst_37035);

(statearr_37086_37148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (18))){
var inst_37046 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
var statearr_37087_37149 = state_37063__$1;
(statearr_37087_37149[(2)] = inst_37046);

(statearr_37087_37149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (8))){
var inst_37032 = cljs.core.async.close_BANG_.call(null,to);
var state_37063__$1 = state_37063;
var statearr_37088_37150 = state_37063__$1;
(statearr_37088_37150[(2)] = inst_37032);

(statearr_37088_37150[(1)] = (10));


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
});})(c__20694__auto__,jobs,results,process,async))
;
return ((function (switch__20629__auto__,c__20694__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0 = (function (){
var statearr_37092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__);

(statearr_37092[(1)] = (1));

return statearr_37092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1 = (function (state_37063){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_37063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e37093){if((e37093 instanceof Object)){
var ex__20633__auto__ = e37093;
var statearr_37094_37151 = state_37063;
(statearr_37094_37151[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37152 = state_37063;
state_37063 = G__37152;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__ = function(state_37063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1.call(this,state_37063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__,jobs,results,process,async))
})();
var state__20696__auto__ = (function (){var statearr_37095 = f__20695__auto__.call(null);
(statearr_37095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_37095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__,jobs,results,process,async))
);

return c__20694__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args37153 = [];
var len__18672__auto___37156 = arguments.length;
var i__18673__auto___37157 = (0);
while(true){
if((i__18673__auto___37157 < len__18672__auto___37156)){
args37153.push((arguments[i__18673__auto___37157]));

var G__37158 = (i__18673__auto___37157 + (1));
i__18673__auto___37157 = G__37158;
continue;
} else {
}
break;
}

var G__37155 = args37153.length;
switch (G__37155) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37153.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args37160 = [];
var len__18672__auto___37163 = arguments.length;
var i__18673__auto___37164 = (0);
while(true){
if((i__18673__auto___37164 < len__18672__auto___37163)){
args37160.push((arguments[i__18673__auto___37164]));

var G__37165 = (i__18673__auto___37164 + (1));
i__18673__auto___37164 = G__37165;
continue;
} else {
}
break;
}

var G__37162 = args37160.length;
switch (G__37162) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37160.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args37167 = [];
var len__18672__auto___37220 = arguments.length;
var i__18673__auto___37221 = (0);
while(true){
if((i__18673__auto___37221 < len__18672__auto___37220)){
args37167.push((arguments[i__18673__auto___37221]));

var G__37222 = (i__18673__auto___37221 + (1));
i__18673__auto___37221 = G__37222;
continue;
} else {
}
break;
}

var G__37169 = args37167.length;
switch (G__37169) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37167.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20694__auto___37224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___37224,tc,fc){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___37224,tc,fc){
return (function (state_37195){
var state_val_37196 = (state_37195[(1)]);
if((state_val_37196 === (7))){
var inst_37191 = (state_37195[(2)]);
var state_37195__$1 = state_37195;
var statearr_37197_37225 = state_37195__$1;
(statearr_37197_37225[(2)] = inst_37191);

(statearr_37197_37225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (1))){
var state_37195__$1 = state_37195;
var statearr_37198_37226 = state_37195__$1;
(statearr_37198_37226[(2)] = null);

(statearr_37198_37226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (4))){
var inst_37172 = (state_37195[(7)]);
var inst_37172__$1 = (state_37195[(2)]);
var inst_37173 = (inst_37172__$1 == null);
var state_37195__$1 = (function (){var statearr_37199 = state_37195;
(statearr_37199[(7)] = inst_37172__$1);

return statearr_37199;
})();
if(cljs.core.truth_(inst_37173)){
var statearr_37200_37227 = state_37195__$1;
(statearr_37200_37227[(1)] = (5));

} else {
var statearr_37201_37228 = state_37195__$1;
(statearr_37201_37228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (13))){
var state_37195__$1 = state_37195;
var statearr_37202_37229 = state_37195__$1;
(statearr_37202_37229[(2)] = null);

(statearr_37202_37229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (6))){
var inst_37172 = (state_37195[(7)]);
var inst_37178 = p.call(null,inst_37172);
var state_37195__$1 = state_37195;
if(cljs.core.truth_(inst_37178)){
var statearr_37203_37230 = state_37195__$1;
(statearr_37203_37230[(1)] = (9));

} else {
var statearr_37204_37231 = state_37195__$1;
(statearr_37204_37231[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (3))){
var inst_37193 = (state_37195[(2)]);
var state_37195__$1 = state_37195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37195__$1,inst_37193);
} else {
if((state_val_37196 === (12))){
var state_37195__$1 = state_37195;
var statearr_37205_37232 = state_37195__$1;
(statearr_37205_37232[(2)] = null);

(statearr_37205_37232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (2))){
var state_37195__$1 = state_37195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37195__$1,(4),ch);
} else {
if((state_val_37196 === (11))){
var inst_37172 = (state_37195[(7)]);
var inst_37182 = (state_37195[(2)]);
var state_37195__$1 = state_37195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37195__$1,(8),inst_37182,inst_37172);
} else {
if((state_val_37196 === (9))){
var state_37195__$1 = state_37195;
var statearr_37206_37233 = state_37195__$1;
(statearr_37206_37233[(2)] = tc);

(statearr_37206_37233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (5))){
var inst_37175 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37176 = cljs.core.async.close_BANG_.call(null,fc);
var state_37195__$1 = (function (){var statearr_37207 = state_37195;
(statearr_37207[(8)] = inst_37175);

return statearr_37207;
})();
var statearr_37208_37234 = state_37195__$1;
(statearr_37208_37234[(2)] = inst_37176);

(statearr_37208_37234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (14))){
var inst_37189 = (state_37195[(2)]);
var state_37195__$1 = state_37195;
var statearr_37209_37235 = state_37195__$1;
(statearr_37209_37235[(2)] = inst_37189);

(statearr_37209_37235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (10))){
var state_37195__$1 = state_37195;
var statearr_37210_37236 = state_37195__$1;
(statearr_37210_37236[(2)] = fc);

(statearr_37210_37236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37196 === (8))){
var inst_37184 = (state_37195[(2)]);
var state_37195__$1 = state_37195;
if(cljs.core.truth_(inst_37184)){
var statearr_37211_37237 = state_37195__$1;
(statearr_37211_37237[(1)] = (12));

} else {
var statearr_37212_37238 = state_37195__$1;
(statearr_37212_37238[(1)] = (13));

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
});})(c__20694__auto___37224,tc,fc))
;
return ((function (switch__20629__auto__,c__20694__auto___37224,tc,fc){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_37216 = [null,null,null,null,null,null,null,null,null];
(statearr_37216[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_37216[(1)] = (1));

return statearr_37216;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_37195){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_37195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e37217){if((e37217 instanceof Object)){
var ex__20633__auto__ = e37217;
var statearr_37218_37239 = state_37195;
(statearr_37218_37239[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37240 = state_37195;
state_37195 = G__37240;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_37195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_37195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___37224,tc,fc))
})();
var state__20696__auto__ = (function (){var statearr_37219 = f__20695__auto__.call(null);
(statearr_37219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___37224);

return statearr_37219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___37224,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_37287){
var state_val_37288 = (state_37287[(1)]);
if((state_val_37288 === (1))){
var inst_37273 = init;
var state_37287__$1 = (function (){var statearr_37289 = state_37287;
(statearr_37289[(7)] = inst_37273);

return statearr_37289;
})();
var statearr_37290_37305 = state_37287__$1;
(statearr_37290_37305[(2)] = null);

(statearr_37290_37305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (2))){
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37287__$1,(4),ch);
} else {
if((state_val_37288 === (3))){
var inst_37285 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37287__$1,inst_37285);
} else {
if((state_val_37288 === (4))){
var inst_37276 = (state_37287[(8)]);
var inst_37276__$1 = (state_37287[(2)]);
var inst_37277 = (inst_37276__$1 == null);
var state_37287__$1 = (function (){var statearr_37291 = state_37287;
(statearr_37291[(8)] = inst_37276__$1);

return statearr_37291;
})();
if(cljs.core.truth_(inst_37277)){
var statearr_37292_37306 = state_37287__$1;
(statearr_37292_37306[(1)] = (5));

} else {
var statearr_37293_37307 = state_37287__$1;
(statearr_37293_37307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (5))){
var inst_37273 = (state_37287[(7)]);
var state_37287__$1 = state_37287;
var statearr_37294_37308 = state_37287__$1;
(statearr_37294_37308[(2)] = inst_37273);

(statearr_37294_37308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (6))){
var inst_37276 = (state_37287[(8)]);
var inst_37273 = (state_37287[(7)]);
var inst_37280 = f.call(null,inst_37273,inst_37276);
var inst_37273__$1 = inst_37280;
var state_37287__$1 = (function (){var statearr_37295 = state_37287;
(statearr_37295[(7)] = inst_37273__$1);

return statearr_37295;
})();
var statearr_37296_37309 = state_37287__$1;
(statearr_37296_37309[(2)] = null);

(statearr_37296_37309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (7))){
var inst_37283 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37297_37310 = state_37287__$1;
(statearr_37297_37310[(2)] = inst_37283);

(statearr_37297_37310[(1)] = (3));


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
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20630__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20630__auto____0 = (function (){
var statearr_37301 = [null,null,null,null,null,null,null,null,null];
(statearr_37301[(0)] = cljs$core$async$reduce_$_state_machine__20630__auto__);

(statearr_37301[(1)] = (1));

return statearr_37301;
});
var cljs$core$async$reduce_$_state_machine__20630__auto____1 = (function (state_37287){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_37287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e37302){if((e37302 instanceof Object)){
var ex__20633__auto__ = e37302;
var statearr_37303_37311 = state_37287;
(statearr_37303_37311[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37312 = state_37287;
state_37287 = G__37312;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20630__auto__ = function(state_37287){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20630__auto____1.call(this,state_37287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20630__auto____0;
cljs$core$async$reduce_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20630__auto____1;
return cljs$core$async$reduce_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_37304 = f__20695__auto__.call(null);
(statearr_37304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_37304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args37313 = [];
var len__18672__auto___37365 = arguments.length;
var i__18673__auto___37366 = (0);
while(true){
if((i__18673__auto___37366 < len__18672__auto___37365)){
args37313.push((arguments[i__18673__auto___37366]));

var G__37367 = (i__18673__auto___37366 + (1));
i__18673__auto___37366 = G__37367;
continue;
} else {
}
break;
}

var G__37315 = args37313.length;
switch (G__37315) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37313.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_37340){
var state_val_37341 = (state_37340[(1)]);
if((state_val_37341 === (7))){
var inst_37322 = (state_37340[(2)]);
var state_37340__$1 = state_37340;
var statearr_37342_37369 = state_37340__$1;
(statearr_37342_37369[(2)] = inst_37322);

(statearr_37342_37369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (1))){
var inst_37316 = cljs.core.seq.call(null,coll);
var inst_37317 = inst_37316;
var state_37340__$1 = (function (){var statearr_37343 = state_37340;
(statearr_37343[(7)] = inst_37317);

return statearr_37343;
})();
var statearr_37344_37370 = state_37340__$1;
(statearr_37344_37370[(2)] = null);

(statearr_37344_37370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (4))){
var inst_37317 = (state_37340[(7)]);
var inst_37320 = cljs.core.first.call(null,inst_37317);
var state_37340__$1 = state_37340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37340__$1,(7),ch,inst_37320);
} else {
if((state_val_37341 === (13))){
var inst_37334 = (state_37340[(2)]);
var state_37340__$1 = state_37340;
var statearr_37345_37371 = state_37340__$1;
(statearr_37345_37371[(2)] = inst_37334);

(statearr_37345_37371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (6))){
var inst_37325 = (state_37340[(2)]);
var state_37340__$1 = state_37340;
if(cljs.core.truth_(inst_37325)){
var statearr_37346_37372 = state_37340__$1;
(statearr_37346_37372[(1)] = (8));

} else {
var statearr_37347_37373 = state_37340__$1;
(statearr_37347_37373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (3))){
var inst_37338 = (state_37340[(2)]);
var state_37340__$1 = state_37340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37340__$1,inst_37338);
} else {
if((state_val_37341 === (12))){
var state_37340__$1 = state_37340;
var statearr_37348_37374 = state_37340__$1;
(statearr_37348_37374[(2)] = null);

(statearr_37348_37374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (2))){
var inst_37317 = (state_37340[(7)]);
var state_37340__$1 = state_37340;
if(cljs.core.truth_(inst_37317)){
var statearr_37349_37375 = state_37340__$1;
(statearr_37349_37375[(1)] = (4));

} else {
var statearr_37350_37376 = state_37340__$1;
(statearr_37350_37376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (11))){
var inst_37331 = cljs.core.async.close_BANG_.call(null,ch);
var state_37340__$1 = state_37340;
var statearr_37351_37377 = state_37340__$1;
(statearr_37351_37377[(2)] = inst_37331);

(statearr_37351_37377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (9))){
var state_37340__$1 = state_37340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37352_37378 = state_37340__$1;
(statearr_37352_37378[(1)] = (11));

} else {
var statearr_37353_37379 = state_37340__$1;
(statearr_37353_37379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (5))){
var inst_37317 = (state_37340[(7)]);
var state_37340__$1 = state_37340;
var statearr_37354_37380 = state_37340__$1;
(statearr_37354_37380[(2)] = inst_37317);

(statearr_37354_37380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (10))){
var inst_37336 = (state_37340[(2)]);
var state_37340__$1 = state_37340;
var statearr_37355_37381 = state_37340__$1;
(statearr_37355_37381[(2)] = inst_37336);

(statearr_37355_37381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37341 === (8))){
var inst_37317 = (state_37340[(7)]);
var inst_37327 = cljs.core.next.call(null,inst_37317);
var inst_37317__$1 = inst_37327;
var state_37340__$1 = (function (){var statearr_37356 = state_37340;
(statearr_37356[(7)] = inst_37317__$1);

return statearr_37356;
})();
var statearr_37357_37382 = state_37340__$1;
(statearr_37357_37382[(2)] = null);

(statearr_37357_37382[(1)] = (2));


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
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_37361 = [null,null,null,null,null,null,null,null];
(statearr_37361[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_37361[(1)] = (1));

return statearr_37361;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_37340){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_37340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e37362){if((e37362 instanceof Object)){
var ex__20633__auto__ = e37362;
var statearr_37363_37383 = state_37340;
(statearr_37363_37383[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37384 = state_37340;
state_37340 = G__37384;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_37340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_37340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_37364 = f__20695__auto__.call(null);
(statearr_37364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_37364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18269__auto__ = (((_ == null))?null:_);
var m__18270__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,_);
} else {
var m__18270__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18270__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m,ch);
} else {
var m__18270__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m);
} else {
var m__18270__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37606 = (function (mult,ch,cs,meta37607){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37607 = meta37607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37608,meta37607__$1){
var self__ = this;
var _37608__$1 = this;
return (new cljs.core.async.t_cljs$core$async37606(self__.mult,self__.ch,self__.cs,meta37607__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37608){
var self__ = this;
var _37608__$1 = this;
return self__.meta37607;
});})(cs))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37606.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37607","meta37607",1776576955,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37606";

cljs.core.async.t_cljs$core$async37606.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async37606");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37606 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37606(mult__$1,ch__$1,cs__$1,meta37607){
return (new cljs.core.async.t_cljs$core$async37606(mult__$1,ch__$1,cs__$1,meta37607));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37606(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20694__auto___37827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___37827,cs,m,dchan,dctr,done){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___37827,cs,m,dchan,dctr,done){
return (function (state_37739){
var state_val_37740 = (state_37739[(1)]);
if((state_val_37740 === (7))){
var inst_37735 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37741_37828 = state_37739__$1;
(statearr_37741_37828[(2)] = inst_37735);

(statearr_37741_37828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (20))){
var inst_37640 = (state_37739[(7)]);
var inst_37650 = cljs.core.first.call(null,inst_37640);
var inst_37651 = cljs.core.nth.call(null,inst_37650,(0),null);
var inst_37652 = cljs.core.nth.call(null,inst_37650,(1),null);
var state_37739__$1 = (function (){var statearr_37742 = state_37739;
(statearr_37742[(8)] = inst_37651);

return statearr_37742;
})();
if(cljs.core.truth_(inst_37652)){
var statearr_37743_37829 = state_37739__$1;
(statearr_37743_37829[(1)] = (22));

} else {
var statearr_37744_37830 = state_37739__$1;
(statearr_37744_37830[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (27))){
var inst_37682 = (state_37739[(9)]);
var inst_37687 = (state_37739[(10)]);
var inst_37680 = (state_37739[(11)]);
var inst_37611 = (state_37739[(12)]);
var inst_37687__$1 = cljs.core._nth.call(null,inst_37680,inst_37682);
var inst_37688 = cljs.core.async.put_BANG_.call(null,inst_37687__$1,inst_37611,done);
var state_37739__$1 = (function (){var statearr_37745 = state_37739;
(statearr_37745[(10)] = inst_37687__$1);

return statearr_37745;
})();
if(cljs.core.truth_(inst_37688)){
var statearr_37746_37831 = state_37739__$1;
(statearr_37746_37831[(1)] = (30));

} else {
var statearr_37747_37832 = state_37739__$1;
(statearr_37747_37832[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (1))){
var state_37739__$1 = state_37739;
var statearr_37748_37833 = state_37739__$1;
(statearr_37748_37833[(2)] = null);

(statearr_37748_37833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (24))){
var inst_37640 = (state_37739[(7)]);
var inst_37657 = (state_37739[(2)]);
var inst_37658 = cljs.core.next.call(null,inst_37640);
var inst_37620 = inst_37658;
var inst_37621 = null;
var inst_37622 = (0);
var inst_37623 = (0);
var state_37739__$1 = (function (){var statearr_37749 = state_37739;
(statearr_37749[(13)] = inst_37622);

(statearr_37749[(14)] = inst_37620);

(statearr_37749[(15)] = inst_37621);

(statearr_37749[(16)] = inst_37623);

(statearr_37749[(17)] = inst_37657);

return statearr_37749;
})();
var statearr_37750_37834 = state_37739__$1;
(statearr_37750_37834[(2)] = null);

(statearr_37750_37834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (39))){
var state_37739__$1 = state_37739;
var statearr_37754_37835 = state_37739__$1;
(statearr_37754_37835[(2)] = null);

(statearr_37754_37835[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (4))){
var inst_37611 = (state_37739[(12)]);
var inst_37611__$1 = (state_37739[(2)]);
var inst_37612 = (inst_37611__$1 == null);
var state_37739__$1 = (function (){var statearr_37755 = state_37739;
(statearr_37755[(12)] = inst_37611__$1);

return statearr_37755;
})();
if(cljs.core.truth_(inst_37612)){
var statearr_37756_37836 = state_37739__$1;
(statearr_37756_37836[(1)] = (5));

} else {
var statearr_37757_37837 = state_37739__$1;
(statearr_37757_37837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (15))){
var inst_37622 = (state_37739[(13)]);
var inst_37620 = (state_37739[(14)]);
var inst_37621 = (state_37739[(15)]);
var inst_37623 = (state_37739[(16)]);
var inst_37636 = (state_37739[(2)]);
var inst_37637 = (inst_37623 + (1));
var tmp37751 = inst_37622;
var tmp37752 = inst_37620;
var tmp37753 = inst_37621;
var inst_37620__$1 = tmp37752;
var inst_37621__$1 = tmp37753;
var inst_37622__$1 = tmp37751;
var inst_37623__$1 = inst_37637;
var state_37739__$1 = (function (){var statearr_37758 = state_37739;
(statearr_37758[(13)] = inst_37622__$1);

(statearr_37758[(14)] = inst_37620__$1);

(statearr_37758[(15)] = inst_37621__$1);

(statearr_37758[(16)] = inst_37623__$1);

(statearr_37758[(18)] = inst_37636);

return statearr_37758;
})();
var statearr_37759_37838 = state_37739__$1;
(statearr_37759_37838[(2)] = null);

(statearr_37759_37838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (21))){
var inst_37661 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37763_37839 = state_37739__$1;
(statearr_37763_37839[(2)] = inst_37661);

(statearr_37763_37839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (31))){
var inst_37687 = (state_37739[(10)]);
var inst_37691 = done.call(null,null);
var inst_37692 = cljs.core.async.untap_STAR_.call(null,m,inst_37687);
var state_37739__$1 = (function (){var statearr_37764 = state_37739;
(statearr_37764[(19)] = inst_37691);

return statearr_37764;
})();
var statearr_37765_37840 = state_37739__$1;
(statearr_37765_37840[(2)] = inst_37692);

(statearr_37765_37840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (32))){
var inst_37682 = (state_37739[(9)]);
var inst_37679 = (state_37739[(20)]);
var inst_37680 = (state_37739[(11)]);
var inst_37681 = (state_37739[(21)]);
var inst_37694 = (state_37739[(2)]);
var inst_37695 = (inst_37682 + (1));
var tmp37760 = inst_37679;
var tmp37761 = inst_37680;
var tmp37762 = inst_37681;
var inst_37679__$1 = tmp37760;
var inst_37680__$1 = tmp37761;
var inst_37681__$1 = tmp37762;
var inst_37682__$1 = inst_37695;
var state_37739__$1 = (function (){var statearr_37766 = state_37739;
(statearr_37766[(9)] = inst_37682__$1);

(statearr_37766[(20)] = inst_37679__$1);

(statearr_37766[(11)] = inst_37680__$1);

(statearr_37766[(21)] = inst_37681__$1);

(statearr_37766[(22)] = inst_37694);

return statearr_37766;
})();
var statearr_37767_37841 = state_37739__$1;
(statearr_37767_37841[(2)] = null);

(statearr_37767_37841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (40))){
var inst_37707 = (state_37739[(23)]);
var inst_37711 = done.call(null,null);
var inst_37712 = cljs.core.async.untap_STAR_.call(null,m,inst_37707);
var state_37739__$1 = (function (){var statearr_37768 = state_37739;
(statearr_37768[(24)] = inst_37711);

return statearr_37768;
})();
var statearr_37769_37842 = state_37739__$1;
(statearr_37769_37842[(2)] = inst_37712);

(statearr_37769_37842[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (33))){
var inst_37698 = (state_37739[(25)]);
var inst_37700 = cljs.core.chunked_seq_QMARK_.call(null,inst_37698);
var state_37739__$1 = state_37739;
if(inst_37700){
var statearr_37770_37843 = state_37739__$1;
(statearr_37770_37843[(1)] = (36));

} else {
var statearr_37771_37844 = state_37739__$1;
(statearr_37771_37844[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (13))){
var inst_37630 = (state_37739[(26)]);
var inst_37633 = cljs.core.async.close_BANG_.call(null,inst_37630);
var state_37739__$1 = state_37739;
var statearr_37772_37845 = state_37739__$1;
(statearr_37772_37845[(2)] = inst_37633);

(statearr_37772_37845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (22))){
var inst_37651 = (state_37739[(8)]);
var inst_37654 = cljs.core.async.close_BANG_.call(null,inst_37651);
var state_37739__$1 = state_37739;
var statearr_37773_37846 = state_37739__$1;
(statearr_37773_37846[(2)] = inst_37654);

(statearr_37773_37846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (36))){
var inst_37698 = (state_37739[(25)]);
var inst_37702 = cljs.core.chunk_first.call(null,inst_37698);
var inst_37703 = cljs.core.chunk_rest.call(null,inst_37698);
var inst_37704 = cljs.core.count.call(null,inst_37702);
var inst_37679 = inst_37703;
var inst_37680 = inst_37702;
var inst_37681 = inst_37704;
var inst_37682 = (0);
var state_37739__$1 = (function (){var statearr_37774 = state_37739;
(statearr_37774[(9)] = inst_37682);

(statearr_37774[(20)] = inst_37679);

(statearr_37774[(11)] = inst_37680);

(statearr_37774[(21)] = inst_37681);

return statearr_37774;
})();
var statearr_37775_37847 = state_37739__$1;
(statearr_37775_37847[(2)] = null);

(statearr_37775_37847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (41))){
var inst_37698 = (state_37739[(25)]);
var inst_37714 = (state_37739[(2)]);
var inst_37715 = cljs.core.next.call(null,inst_37698);
var inst_37679 = inst_37715;
var inst_37680 = null;
var inst_37681 = (0);
var inst_37682 = (0);
var state_37739__$1 = (function (){var statearr_37776 = state_37739;
(statearr_37776[(9)] = inst_37682);

(statearr_37776[(27)] = inst_37714);

(statearr_37776[(20)] = inst_37679);

(statearr_37776[(11)] = inst_37680);

(statearr_37776[(21)] = inst_37681);

return statearr_37776;
})();
var statearr_37777_37848 = state_37739__$1;
(statearr_37777_37848[(2)] = null);

(statearr_37777_37848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (43))){
var state_37739__$1 = state_37739;
var statearr_37778_37849 = state_37739__$1;
(statearr_37778_37849[(2)] = null);

(statearr_37778_37849[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (29))){
var inst_37723 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37779_37850 = state_37739__$1;
(statearr_37779_37850[(2)] = inst_37723);

(statearr_37779_37850[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (44))){
var inst_37732 = (state_37739[(2)]);
var state_37739__$1 = (function (){var statearr_37780 = state_37739;
(statearr_37780[(28)] = inst_37732);

return statearr_37780;
})();
var statearr_37781_37851 = state_37739__$1;
(statearr_37781_37851[(2)] = null);

(statearr_37781_37851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (6))){
var inst_37671 = (state_37739[(29)]);
var inst_37670 = cljs.core.deref.call(null,cs);
var inst_37671__$1 = cljs.core.keys.call(null,inst_37670);
var inst_37672 = cljs.core.count.call(null,inst_37671__$1);
var inst_37673 = cljs.core.reset_BANG_.call(null,dctr,inst_37672);
var inst_37678 = cljs.core.seq.call(null,inst_37671__$1);
var inst_37679 = inst_37678;
var inst_37680 = null;
var inst_37681 = (0);
var inst_37682 = (0);
var state_37739__$1 = (function (){var statearr_37782 = state_37739;
(statearr_37782[(9)] = inst_37682);

(statearr_37782[(20)] = inst_37679);

(statearr_37782[(11)] = inst_37680);

(statearr_37782[(29)] = inst_37671__$1);

(statearr_37782[(21)] = inst_37681);

(statearr_37782[(30)] = inst_37673);

return statearr_37782;
})();
var statearr_37783_37852 = state_37739__$1;
(statearr_37783_37852[(2)] = null);

(statearr_37783_37852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (28))){
var inst_37679 = (state_37739[(20)]);
var inst_37698 = (state_37739[(25)]);
var inst_37698__$1 = cljs.core.seq.call(null,inst_37679);
var state_37739__$1 = (function (){var statearr_37784 = state_37739;
(statearr_37784[(25)] = inst_37698__$1);

return statearr_37784;
})();
if(inst_37698__$1){
var statearr_37785_37853 = state_37739__$1;
(statearr_37785_37853[(1)] = (33));

} else {
var statearr_37786_37854 = state_37739__$1;
(statearr_37786_37854[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (25))){
var inst_37682 = (state_37739[(9)]);
var inst_37681 = (state_37739[(21)]);
var inst_37684 = (inst_37682 < inst_37681);
var inst_37685 = inst_37684;
var state_37739__$1 = state_37739;
if(cljs.core.truth_(inst_37685)){
var statearr_37787_37855 = state_37739__$1;
(statearr_37787_37855[(1)] = (27));

} else {
var statearr_37788_37856 = state_37739__$1;
(statearr_37788_37856[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (34))){
var state_37739__$1 = state_37739;
var statearr_37789_37857 = state_37739__$1;
(statearr_37789_37857[(2)] = null);

(statearr_37789_37857[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (17))){
var state_37739__$1 = state_37739;
var statearr_37790_37858 = state_37739__$1;
(statearr_37790_37858[(2)] = null);

(statearr_37790_37858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (3))){
var inst_37737 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37739__$1,inst_37737);
} else {
if((state_val_37740 === (12))){
var inst_37666 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37791_37859 = state_37739__$1;
(statearr_37791_37859[(2)] = inst_37666);

(statearr_37791_37859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (2))){
var state_37739__$1 = state_37739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37739__$1,(4),ch);
} else {
if((state_val_37740 === (23))){
var state_37739__$1 = state_37739;
var statearr_37792_37860 = state_37739__$1;
(statearr_37792_37860[(2)] = null);

(statearr_37792_37860[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (35))){
var inst_37721 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37793_37861 = state_37739__$1;
(statearr_37793_37861[(2)] = inst_37721);

(statearr_37793_37861[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (19))){
var inst_37640 = (state_37739[(7)]);
var inst_37644 = cljs.core.chunk_first.call(null,inst_37640);
var inst_37645 = cljs.core.chunk_rest.call(null,inst_37640);
var inst_37646 = cljs.core.count.call(null,inst_37644);
var inst_37620 = inst_37645;
var inst_37621 = inst_37644;
var inst_37622 = inst_37646;
var inst_37623 = (0);
var state_37739__$1 = (function (){var statearr_37794 = state_37739;
(statearr_37794[(13)] = inst_37622);

(statearr_37794[(14)] = inst_37620);

(statearr_37794[(15)] = inst_37621);

(statearr_37794[(16)] = inst_37623);

return statearr_37794;
})();
var statearr_37795_37862 = state_37739__$1;
(statearr_37795_37862[(2)] = null);

(statearr_37795_37862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (11))){
var inst_37620 = (state_37739[(14)]);
var inst_37640 = (state_37739[(7)]);
var inst_37640__$1 = cljs.core.seq.call(null,inst_37620);
var state_37739__$1 = (function (){var statearr_37796 = state_37739;
(statearr_37796[(7)] = inst_37640__$1);

return statearr_37796;
})();
if(inst_37640__$1){
var statearr_37797_37863 = state_37739__$1;
(statearr_37797_37863[(1)] = (16));

} else {
var statearr_37798_37864 = state_37739__$1;
(statearr_37798_37864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (9))){
var inst_37668 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37799_37865 = state_37739__$1;
(statearr_37799_37865[(2)] = inst_37668);

(statearr_37799_37865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (5))){
var inst_37618 = cljs.core.deref.call(null,cs);
var inst_37619 = cljs.core.seq.call(null,inst_37618);
var inst_37620 = inst_37619;
var inst_37621 = null;
var inst_37622 = (0);
var inst_37623 = (0);
var state_37739__$1 = (function (){var statearr_37800 = state_37739;
(statearr_37800[(13)] = inst_37622);

(statearr_37800[(14)] = inst_37620);

(statearr_37800[(15)] = inst_37621);

(statearr_37800[(16)] = inst_37623);

return statearr_37800;
})();
var statearr_37801_37866 = state_37739__$1;
(statearr_37801_37866[(2)] = null);

(statearr_37801_37866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (14))){
var state_37739__$1 = state_37739;
var statearr_37802_37867 = state_37739__$1;
(statearr_37802_37867[(2)] = null);

(statearr_37802_37867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (45))){
var inst_37729 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37803_37868 = state_37739__$1;
(statearr_37803_37868[(2)] = inst_37729);

(statearr_37803_37868[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (26))){
var inst_37671 = (state_37739[(29)]);
var inst_37725 = (state_37739[(2)]);
var inst_37726 = cljs.core.seq.call(null,inst_37671);
var state_37739__$1 = (function (){var statearr_37804 = state_37739;
(statearr_37804[(31)] = inst_37725);

return statearr_37804;
})();
if(inst_37726){
var statearr_37805_37869 = state_37739__$1;
(statearr_37805_37869[(1)] = (42));

} else {
var statearr_37806_37870 = state_37739__$1;
(statearr_37806_37870[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (16))){
var inst_37640 = (state_37739[(7)]);
var inst_37642 = cljs.core.chunked_seq_QMARK_.call(null,inst_37640);
var state_37739__$1 = state_37739;
if(inst_37642){
var statearr_37807_37871 = state_37739__$1;
(statearr_37807_37871[(1)] = (19));

} else {
var statearr_37808_37872 = state_37739__$1;
(statearr_37808_37872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (38))){
var inst_37718 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37809_37873 = state_37739__$1;
(statearr_37809_37873[(2)] = inst_37718);

(statearr_37809_37873[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (30))){
var state_37739__$1 = state_37739;
var statearr_37810_37874 = state_37739__$1;
(statearr_37810_37874[(2)] = null);

(statearr_37810_37874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (10))){
var inst_37621 = (state_37739[(15)]);
var inst_37623 = (state_37739[(16)]);
var inst_37629 = cljs.core._nth.call(null,inst_37621,inst_37623);
var inst_37630 = cljs.core.nth.call(null,inst_37629,(0),null);
var inst_37631 = cljs.core.nth.call(null,inst_37629,(1),null);
var state_37739__$1 = (function (){var statearr_37811 = state_37739;
(statearr_37811[(26)] = inst_37630);

return statearr_37811;
})();
if(cljs.core.truth_(inst_37631)){
var statearr_37812_37875 = state_37739__$1;
(statearr_37812_37875[(1)] = (13));

} else {
var statearr_37813_37876 = state_37739__$1;
(statearr_37813_37876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (18))){
var inst_37664 = (state_37739[(2)]);
var state_37739__$1 = state_37739;
var statearr_37814_37877 = state_37739__$1;
(statearr_37814_37877[(2)] = inst_37664);

(statearr_37814_37877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (42))){
var state_37739__$1 = state_37739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37739__$1,(45),dchan);
} else {
if((state_val_37740 === (37))){
var inst_37707 = (state_37739[(23)]);
var inst_37698 = (state_37739[(25)]);
var inst_37611 = (state_37739[(12)]);
var inst_37707__$1 = cljs.core.first.call(null,inst_37698);
var inst_37708 = cljs.core.async.put_BANG_.call(null,inst_37707__$1,inst_37611,done);
var state_37739__$1 = (function (){var statearr_37815 = state_37739;
(statearr_37815[(23)] = inst_37707__$1);

return statearr_37815;
})();
if(cljs.core.truth_(inst_37708)){
var statearr_37816_37878 = state_37739__$1;
(statearr_37816_37878[(1)] = (39));

} else {
var statearr_37817_37879 = state_37739__$1;
(statearr_37817_37879[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37740 === (8))){
var inst_37622 = (state_37739[(13)]);
var inst_37623 = (state_37739[(16)]);
var inst_37625 = (inst_37623 < inst_37622);
var inst_37626 = inst_37625;
var state_37739__$1 = state_37739;
if(cljs.core.truth_(inst_37626)){
var statearr_37818_37880 = state_37739__$1;
(statearr_37818_37880[(1)] = (10));

} else {
var statearr_37819_37881 = state_37739__$1;
(statearr_37819_37881[(1)] = (11));

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
});})(c__20694__auto___37827,cs,m,dchan,dctr,done))
;
return ((function (switch__20629__auto__,c__20694__auto___37827,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20630__auto__ = null;
var cljs$core$async$mult_$_state_machine__20630__auto____0 = (function (){
var statearr_37823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37823[(0)] = cljs$core$async$mult_$_state_machine__20630__auto__);

(statearr_37823[(1)] = (1));

return statearr_37823;
});
var cljs$core$async$mult_$_state_machine__20630__auto____1 = (function (state_37739){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_37739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e37824){if((e37824 instanceof Object)){
var ex__20633__auto__ = e37824;
var statearr_37825_37882 = state_37739;
(statearr_37825_37882[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37883 = state_37739;
state_37739 = G__37883;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20630__auto__ = function(state_37739){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20630__auto____1.call(this,state_37739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20630__auto____0;
cljs$core$async$mult_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20630__auto____1;
return cljs$core$async$mult_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___37827,cs,m,dchan,dctr,done))
})();
var state__20696__auto__ = (function (){var statearr_37826 = f__20695__auto__.call(null);
(statearr_37826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___37827);

return statearr_37826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___37827,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args37884 = [];
var len__18672__auto___37887 = arguments.length;
var i__18673__auto___37888 = (0);
while(true){
if((i__18673__auto___37888 < len__18672__auto___37887)){
args37884.push((arguments[i__18673__auto___37888]));

var G__37889 = (i__18673__auto___37888 + (1));
i__18673__auto___37888 = G__37889;
continue;
} else {
}
break;
}

var G__37886 = args37884.length;
switch (G__37886) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37884.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m,ch);
} else {
var m__18270__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m,ch);
} else {
var m__18270__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m);
} else {
var m__18270__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m,state_map);
} else {
var m__18270__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18269__auto__ = (((m == null))?null:m);
var m__18270__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,m,mode);
} else {
var m__18270__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18679__auto__ = [];
var len__18672__auto___37901 = arguments.length;
var i__18673__auto___37902 = (0);
while(true){
if((i__18673__auto___37902 < len__18672__auto___37901)){
args__18679__auto__.push((arguments[i__18673__auto___37902]));

var G__37903 = (i__18673__auto___37902 + (1));
i__18673__auto___37902 = G__37903;
continue;
} else {
}
break;
}

var argseq__18680__auto__ = ((((3) < args__18679__auto__.length))?(new cljs.core.IndexedSeq(args__18679__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18680__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37895){
var map__37896 = p__37895;
var map__37896__$1 = ((((!((map__37896 == null)))?((((map__37896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37896):map__37896);
var opts = map__37896__$1;
var statearr_37898_37904 = state;
(statearr_37898_37904[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__37896,map__37896__$1,opts){
return (function (val){
var statearr_37899_37905 = state;
(statearr_37899_37905[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37896,map__37896__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_37900_37906 = state;
(statearr_37900_37906[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37891){
var G__37892 = cljs.core.first.call(null,seq37891);
var seq37891__$1 = cljs.core.next.call(null,seq37891);
var G__37893 = cljs.core.first.call(null,seq37891__$1);
var seq37891__$2 = cljs.core.next.call(null,seq37891__$1);
var G__37894 = cljs.core.first.call(null,seq37891__$2);
var seq37891__$3 = cljs.core.next.call(null,seq37891__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37892,G__37893,G__37894,seq37891__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38070 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38071){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38071 = meta38071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38072,meta38071__$1){
var self__ = this;
var _38072__$1 = this;
return (new cljs.core.async.t_cljs$core$async38070(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38071__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38072){
var self__ = this;
var _38072__$1 = this;
return self__.meta38071;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38071","meta38071",1661414942,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38070";

cljs.core.async.t_cljs$core$async38070.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async38070");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38070 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38070(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38071){
return (new cljs.core.async.t_cljs$core$async38070(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38071));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38070(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20694__auto___38233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___38233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___38233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38170){
var state_val_38171 = (state_38170[(1)]);
if((state_val_38171 === (7))){
var inst_38088 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
var statearr_38172_38234 = state_38170__$1;
(statearr_38172_38234[(2)] = inst_38088);

(statearr_38172_38234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (20))){
var inst_38100 = (state_38170[(7)]);
var state_38170__$1 = state_38170;
var statearr_38173_38235 = state_38170__$1;
(statearr_38173_38235[(2)] = inst_38100);

(statearr_38173_38235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (27))){
var state_38170__$1 = state_38170;
var statearr_38174_38236 = state_38170__$1;
(statearr_38174_38236[(2)] = null);

(statearr_38174_38236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (1))){
var inst_38076 = (state_38170[(8)]);
var inst_38076__$1 = calc_state.call(null);
var inst_38078 = (inst_38076__$1 == null);
var inst_38079 = cljs.core.not.call(null,inst_38078);
var state_38170__$1 = (function (){var statearr_38175 = state_38170;
(statearr_38175[(8)] = inst_38076__$1);

return statearr_38175;
})();
if(inst_38079){
var statearr_38176_38237 = state_38170__$1;
(statearr_38176_38237[(1)] = (2));

} else {
var statearr_38177_38238 = state_38170__$1;
(statearr_38177_38238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (24))){
var inst_38130 = (state_38170[(9)]);
var inst_38123 = (state_38170[(10)]);
var inst_38144 = (state_38170[(11)]);
var inst_38144__$1 = inst_38123.call(null,inst_38130);
var state_38170__$1 = (function (){var statearr_38178 = state_38170;
(statearr_38178[(11)] = inst_38144__$1);

return statearr_38178;
})();
if(cljs.core.truth_(inst_38144__$1)){
var statearr_38179_38239 = state_38170__$1;
(statearr_38179_38239[(1)] = (29));

} else {
var statearr_38180_38240 = state_38170__$1;
(statearr_38180_38240[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (4))){
var inst_38091 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
if(cljs.core.truth_(inst_38091)){
var statearr_38181_38241 = state_38170__$1;
(statearr_38181_38241[(1)] = (8));

} else {
var statearr_38182_38242 = state_38170__$1;
(statearr_38182_38242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (15))){
var inst_38117 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
if(cljs.core.truth_(inst_38117)){
var statearr_38183_38243 = state_38170__$1;
(statearr_38183_38243[(1)] = (19));

} else {
var statearr_38184_38244 = state_38170__$1;
(statearr_38184_38244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (21))){
var inst_38122 = (state_38170[(12)]);
var inst_38122__$1 = (state_38170[(2)]);
var inst_38123 = cljs.core.get.call(null,inst_38122__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38124 = cljs.core.get.call(null,inst_38122__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38125 = cljs.core.get.call(null,inst_38122__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38170__$1 = (function (){var statearr_38185 = state_38170;
(statearr_38185[(12)] = inst_38122__$1);

(statearr_38185[(10)] = inst_38123);

(statearr_38185[(13)] = inst_38124);

return statearr_38185;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38170__$1,(22),inst_38125);
} else {
if((state_val_38171 === (31))){
var inst_38152 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
if(cljs.core.truth_(inst_38152)){
var statearr_38186_38245 = state_38170__$1;
(statearr_38186_38245[(1)] = (32));

} else {
var statearr_38187_38246 = state_38170__$1;
(statearr_38187_38246[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (32))){
var inst_38129 = (state_38170[(14)]);
var state_38170__$1 = state_38170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38170__$1,(35),out,inst_38129);
} else {
if((state_val_38171 === (33))){
var inst_38122 = (state_38170[(12)]);
var inst_38100 = inst_38122;
var state_38170__$1 = (function (){var statearr_38188 = state_38170;
(statearr_38188[(7)] = inst_38100);

return statearr_38188;
})();
var statearr_38189_38247 = state_38170__$1;
(statearr_38189_38247[(2)] = null);

(statearr_38189_38247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (13))){
var inst_38100 = (state_38170[(7)]);
var inst_38107 = inst_38100.cljs$lang$protocol_mask$partition0$;
var inst_38108 = (inst_38107 & (64));
var inst_38109 = inst_38100.cljs$core$ISeq$;
var inst_38110 = (inst_38108) || (inst_38109);
var state_38170__$1 = state_38170;
if(cljs.core.truth_(inst_38110)){
var statearr_38190_38248 = state_38170__$1;
(statearr_38190_38248[(1)] = (16));

} else {
var statearr_38191_38249 = state_38170__$1;
(statearr_38191_38249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (22))){
var inst_38130 = (state_38170[(9)]);
var inst_38129 = (state_38170[(14)]);
var inst_38128 = (state_38170[(2)]);
var inst_38129__$1 = cljs.core.nth.call(null,inst_38128,(0),null);
var inst_38130__$1 = cljs.core.nth.call(null,inst_38128,(1),null);
var inst_38131 = (inst_38129__$1 == null);
var inst_38132 = cljs.core._EQ_.call(null,inst_38130__$1,change);
var inst_38133 = (inst_38131) || (inst_38132);
var state_38170__$1 = (function (){var statearr_38192 = state_38170;
(statearr_38192[(9)] = inst_38130__$1);

(statearr_38192[(14)] = inst_38129__$1);

return statearr_38192;
})();
if(cljs.core.truth_(inst_38133)){
var statearr_38193_38250 = state_38170__$1;
(statearr_38193_38250[(1)] = (23));

} else {
var statearr_38194_38251 = state_38170__$1;
(statearr_38194_38251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (36))){
var inst_38122 = (state_38170[(12)]);
var inst_38100 = inst_38122;
var state_38170__$1 = (function (){var statearr_38195 = state_38170;
(statearr_38195[(7)] = inst_38100);

return statearr_38195;
})();
var statearr_38196_38252 = state_38170__$1;
(statearr_38196_38252[(2)] = null);

(statearr_38196_38252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (29))){
var inst_38144 = (state_38170[(11)]);
var state_38170__$1 = state_38170;
var statearr_38197_38253 = state_38170__$1;
(statearr_38197_38253[(2)] = inst_38144);

(statearr_38197_38253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (6))){
var state_38170__$1 = state_38170;
var statearr_38198_38254 = state_38170__$1;
(statearr_38198_38254[(2)] = false);

(statearr_38198_38254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (28))){
var inst_38140 = (state_38170[(2)]);
var inst_38141 = calc_state.call(null);
var inst_38100 = inst_38141;
var state_38170__$1 = (function (){var statearr_38199 = state_38170;
(statearr_38199[(7)] = inst_38100);

(statearr_38199[(15)] = inst_38140);

return statearr_38199;
})();
var statearr_38200_38255 = state_38170__$1;
(statearr_38200_38255[(2)] = null);

(statearr_38200_38255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (25))){
var inst_38166 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
var statearr_38201_38256 = state_38170__$1;
(statearr_38201_38256[(2)] = inst_38166);

(statearr_38201_38256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (34))){
var inst_38164 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
var statearr_38202_38257 = state_38170__$1;
(statearr_38202_38257[(2)] = inst_38164);

(statearr_38202_38257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (17))){
var state_38170__$1 = state_38170;
var statearr_38203_38258 = state_38170__$1;
(statearr_38203_38258[(2)] = false);

(statearr_38203_38258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (3))){
var state_38170__$1 = state_38170;
var statearr_38204_38259 = state_38170__$1;
(statearr_38204_38259[(2)] = false);

(statearr_38204_38259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (12))){
var inst_38168 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38170__$1,inst_38168);
} else {
if((state_val_38171 === (2))){
var inst_38076 = (state_38170[(8)]);
var inst_38081 = inst_38076.cljs$lang$protocol_mask$partition0$;
var inst_38082 = (inst_38081 & (64));
var inst_38083 = inst_38076.cljs$core$ISeq$;
var inst_38084 = (inst_38082) || (inst_38083);
var state_38170__$1 = state_38170;
if(cljs.core.truth_(inst_38084)){
var statearr_38205_38260 = state_38170__$1;
(statearr_38205_38260[(1)] = (5));

} else {
var statearr_38206_38261 = state_38170__$1;
(statearr_38206_38261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (23))){
var inst_38129 = (state_38170[(14)]);
var inst_38135 = (inst_38129 == null);
var state_38170__$1 = state_38170;
if(cljs.core.truth_(inst_38135)){
var statearr_38207_38262 = state_38170__$1;
(statearr_38207_38262[(1)] = (26));

} else {
var statearr_38208_38263 = state_38170__$1;
(statearr_38208_38263[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (35))){
var inst_38155 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
if(cljs.core.truth_(inst_38155)){
var statearr_38209_38264 = state_38170__$1;
(statearr_38209_38264[(1)] = (36));

} else {
var statearr_38210_38265 = state_38170__$1;
(statearr_38210_38265[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (19))){
var inst_38100 = (state_38170[(7)]);
var inst_38119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38100);
var state_38170__$1 = state_38170;
var statearr_38211_38266 = state_38170__$1;
(statearr_38211_38266[(2)] = inst_38119);

(statearr_38211_38266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (11))){
var inst_38100 = (state_38170[(7)]);
var inst_38104 = (inst_38100 == null);
var inst_38105 = cljs.core.not.call(null,inst_38104);
var state_38170__$1 = state_38170;
if(inst_38105){
var statearr_38212_38267 = state_38170__$1;
(statearr_38212_38267[(1)] = (13));

} else {
var statearr_38213_38268 = state_38170__$1;
(statearr_38213_38268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (9))){
var inst_38076 = (state_38170[(8)]);
var state_38170__$1 = state_38170;
var statearr_38214_38269 = state_38170__$1;
(statearr_38214_38269[(2)] = inst_38076);

(statearr_38214_38269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (5))){
var state_38170__$1 = state_38170;
var statearr_38215_38270 = state_38170__$1;
(statearr_38215_38270[(2)] = true);

(statearr_38215_38270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (14))){
var state_38170__$1 = state_38170;
var statearr_38216_38271 = state_38170__$1;
(statearr_38216_38271[(2)] = false);

(statearr_38216_38271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (26))){
var inst_38130 = (state_38170[(9)]);
var inst_38137 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38130);
var state_38170__$1 = state_38170;
var statearr_38217_38272 = state_38170__$1;
(statearr_38217_38272[(2)] = inst_38137);

(statearr_38217_38272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (16))){
var state_38170__$1 = state_38170;
var statearr_38218_38273 = state_38170__$1;
(statearr_38218_38273[(2)] = true);

(statearr_38218_38273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (38))){
var inst_38160 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
var statearr_38219_38274 = state_38170__$1;
(statearr_38219_38274[(2)] = inst_38160);

(statearr_38219_38274[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (30))){
var inst_38130 = (state_38170[(9)]);
var inst_38123 = (state_38170[(10)]);
var inst_38124 = (state_38170[(13)]);
var inst_38147 = cljs.core.empty_QMARK_.call(null,inst_38123);
var inst_38148 = inst_38124.call(null,inst_38130);
var inst_38149 = cljs.core.not.call(null,inst_38148);
var inst_38150 = (inst_38147) && (inst_38149);
var state_38170__$1 = state_38170;
var statearr_38220_38275 = state_38170__$1;
(statearr_38220_38275[(2)] = inst_38150);

(statearr_38220_38275[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (10))){
var inst_38076 = (state_38170[(8)]);
var inst_38096 = (state_38170[(2)]);
var inst_38097 = cljs.core.get.call(null,inst_38096,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38098 = cljs.core.get.call(null,inst_38096,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38099 = cljs.core.get.call(null,inst_38096,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38100 = inst_38076;
var state_38170__$1 = (function (){var statearr_38221 = state_38170;
(statearr_38221[(7)] = inst_38100);

(statearr_38221[(16)] = inst_38098);

(statearr_38221[(17)] = inst_38097);

(statearr_38221[(18)] = inst_38099);

return statearr_38221;
})();
var statearr_38222_38276 = state_38170__$1;
(statearr_38222_38276[(2)] = null);

(statearr_38222_38276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (18))){
var inst_38114 = (state_38170[(2)]);
var state_38170__$1 = state_38170;
var statearr_38223_38277 = state_38170__$1;
(statearr_38223_38277[(2)] = inst_38114);

(statearr_38223_38277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (37))){
var state_38170__$1 = state_38170;
var statearr_38224_38278 = state_38170__$1;
(statearr_38224_38278[(2)] = null);

(statearr_38224_38278[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38171 === (8))){
var inst_38076 = (state_38170[(8)]);
var inst_38093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38076);
var state_38170__$1 = state_38170;
var statearr_38225_38279 = state_38170__$1;
(statearr_38225_38279[(2)] = inst_38093);

(statearr_38225_38279[(1)] = (10));


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
});})(c__20694__auto___38233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20629__auto__,c__20694__auto___38233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20630__auto__ = null;
var cljs$core$async$mix_$_state_machine__20630__auto____0 = (function (){
var statearr_38229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38229[(0)] = cljs$core$async$mix_$_state_machine__20630__auto__);

(statearr_38229[(1)] = (1));

return statearr_38229;
});
var cljs$core$async$mix_$_state_machine__20630__auto____1 = (function (state_38170){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_38170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e38230){if((e38230 instanceof Object)){
var ex__20633__auto__ = e38230;
var statearr_38231_38280 = state_38170;
(statearr_38231_38280[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38281 = state_38170;
state_38170 = G__38281;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20630__auto__ = function(state_38170){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20630__auto____1.call(this,state_38170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20630__auto____0;
cljs$core$async$mix_$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20630__auto____1;
return cljs$core$async$mix_$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___38233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20696__auto__ = (function (){var statearr_38232 = f__20695__auto__.call(null);
(statearr_38232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___38233);

return statearr_38232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___38233,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18269__auto__ = (((p == null))?null:p);
var m__18270__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18270__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18269__auto__ = (((p == null))?null:p);
var m__18270__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,p,v,ch);
} else {
var m__18270__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38282 = [];
var len__18672__auto___38285 = arguments.length;
var i__18673__auto___38286 = (0);
while(true){
if((i__18673__auto___38286 < len__18672__auto___38285)){
args38282.push((arguments[i__18673__auto___38286]));

var G__38287 = (i__18673__auto___38286 + (1));
i__18673__auto___38286 = G__38287;
continue;
} else {
}
break;
}

var G__38284 = args38282.length;
switch (G__38284) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38282.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18269__auto__ = (((p == null))?null:p);
var m__18270__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,p);
} else {
var m__18270__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18269__auto__ = (((p == null))?null:p);
var m__18270__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18269__auto__)]);
if(!((m__18270__auto__ == null))){
return m__18270__auto__.call(null,p,v);
} else {
var m__18270__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18270__auto____$1 == null))){
return m__18270__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args38290 = [];
var len__18672__auto___38415 = arguments.length;
var i__18673__auto___38416 = (0);
while(true){
if((i__18673__auto___38416 < len__18672__auto___38415)){
args38290.push((arguments[i__18673__auto___38416]));

var G__38417 = (i__18673__auto___38416 + (1));
i__18673__auto___38416 = G__38417;
continue;
} else {
}
break;
}

var G__38292 = args38290.length;
switch (G__38292) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38290.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17614__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17614__auto__)){
return or__17614__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17614__auto__,mults){
return (function (p1__38289_SHARP_){
if(cljs.core.truth_(p1__38289_SHARP_.call(null,topic))){
return p1__38289_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38289_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17614__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38293 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38294){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38294 = meta38294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38295,meta38294__$1){
var self__ = this;
var _38295__$1 = this;
return (new cljs.core.async.t_cljs$core$async38293(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38294__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38295){
var self__ = this;
var _38295__$1 = this;
return self__.meta38294;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38294","meta38294",1870002347,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38293";

cljs.core.async.t_cljs$core$async38293.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async38293");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38293 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38293(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38294){
return (new cljs.core.async.t_cljs$core$async38293(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38294));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38293(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20694__auto___38419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___38419,mults,ensure_mult,p){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___38419,mults,ensure_mult,p){
return (function (state_38367){
var state_val_38368 = (state_38367[(1)]);
if((state_val_38368 === (7))){
var inst_38363 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38369_38420 = state_38367__$1;
(statearr_38369_38420[(2)] = inst_38363);

(statearr_38369_38420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (20))){
var state_38367__$1 = state_38367;
var statearr_38370_38421 = state_38367__$1;
(statearr_38370_38421[(2)] = null);

(statearr_38370_38421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (1))){
var state_38367__$1 = state_38367;
var statearr_38371_38422 = state_38367__$1;
(statearr_38371_38422[(2)] = null);

(statearr_38371_38422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (24))){
var inst_38346 = (state_38367[(7)]);
var inst_38355 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38346);
var state_38367__$1 = state_38367;
var statearr_38372_38423 = state_38367__$1;
(statearr_38372_38423[(2)] = inst_38355);

(statearr_38372_38423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (4))){
var inst_38298 = (state_38367[(8)]);
var inst_38298__$1 = (state_38367[(2)]);
var inst_38299 = (inst_38298__$1 == null);
var state_38367__$1 = (function (){var statearr_38373 = state_38367;
(statearr_38373[(8)] = inst_38298__$1);

return statearr_38373;
})();
if(cljs.core.truth_(inst_38299)){
var statearr_38374_38424 = state_38367__$1;
(statearr_38374_38424[(1)] = (5));

} else {
var statearr_38375_38425 = state_38367__$1;
(statearr_38375_38425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (15))){
var inst_38340 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38376_38426 = state_38367__$1;
(statearr_38376_38426[(2)] = inst_38340);

(statearr_38376_38426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (21))){
var inst_38360 = (state_38367[(2)]);
var state_38367__$1 = (function (){var statearr_38377 = state_38367;
(statearr_38377[(9)] = inst_38360);

return statearr_38377;
})();
var statearr_38378_38427 = state_38367__$1;
(statearr_38378_38427[(2)] = null);

(statearr_38378_38427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (13))){
var inst_38322 = (state_38367[(10)]);
var inst_38324 = cljs.core.chunked_seq_QMARK_.call(null,inst_38322);
var state_38367__$1 = state_38367;
if(inst_38324){
var statearr_38379_38428 = state_38367__$1;
(statearr_38379_38428[(1)] = (16));

} else {
var statearr_38380_38429 = state_38367__$1;
(statearr_38380_38429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (22))){
var inst_38352 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
if(cljs.core.truth_(inst_38352)){
var statearr_38381_38430 = state_38367__$1;
(statearr_38381_38430[(1)] = (23));

} else {
var statearr_38382_38431 = state_38367__$1;
(statearr_38382_38431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (6))){
var inst_38348 = (state_38367[(11)]);
var inst_38298 = (state_38367[(8)]);
var inst_38346 = (state_38367[(7)]);
var inst_38346__$1 = topic_fn.call(null,inst_38298);
var inst_38347 = cljs.core.deref.call(null,mults);
var inst_38348__$1 = cljs.core.get.call(null,inst_38347,inst_38346__$1);
var state_38367__$1 = (function (){var statearr_38383 = state_38367;
(statearr_38383[(11)] = inst_38348__$1);

(statearr_38383[(7)] = inst_38346__$1);

return statearr_38383;
})();
if(cljs.core.truth_(inst_38348__$1)){
var statearr_38384_38432 = state_38367__$1;
(statearr_38384_38432[(1)] = (19));

} else {
var statearr_38385_38433 = state_38367__$1;
(statearr_38385_38433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (25))){
var inst_38357 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38386_38434 = state_38367__$1;
(statearr_38386_38434[(2)] = inst_38357);

(statearr_38386_38434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (17))){
var inst_38322 = (state_38367[(10)]);
var inst_38331 = cljs.core.first.call(null,inst_38322);
var inst_38332 = cljs.core.async.muxch_STAR_.call(null,inst_38331);
var inst_38333 = cljs.core.async.close_BANG_.call(null,inst_38332);
var inst_38334 = cljs.core.next.call(null,inst_38322);
var inst_38308 = inst_38334;
var inst_38309 = null;
var inst_38310 = (0);
var inst_38311 = (0);
var state_38367__$1 = (function (){var statearr_38387 = state_38367;
(statearr_38387[(12)] = inst_38333);

(statearr_38387[(13)] = inst_38310);

(statearr_38387[(14)] = inst_38308);

(statearr_38387[(15)] = inst_38311);

(statearr_38387[(16)] = inst_38309);

return statearr_38387;
})();
var statearr_38388_38435 = state_38367__$1;
(statearr_38388_38435[(2)] = null);

(statearr_38388_38435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (3))){
var inst_38365 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38367__$1,inst_38365);
} else {
if((state_val_38368 === (12))){
var inst_38342 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38389_38436 = state_38367__$1;
(statearr_38389_38436[(2)] = inst_38342);

(statearr_38389_38436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (2))){
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38367__$1,(4),ch);
} else {
if((state_val_38368 === (23))){
var state_38367__$1 = state_38367;
var statearr_38390_38437 = state_38367__$1;
(statearr_38390_38437[(2)] = null);

(statearr_38390_38437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (19))){
var inst_38348 = (state_38367[(11)]);
var inst_38298 = (state_38367[(8)]);
var inst_38350 = cljs.core.async.muxch_STAR_.call(null,inst_38348);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38367__$1,(22),inst_38350,inst_38298);
} else {
if((state_val_38368 === (11))){
var inst_38308 = (state_38367[(14)]);
var inst_38322 = (state_38367[(10)]);
var inst_38322__$1 = cljs.core.seq.call(null,inst_38308);
var state_38367__$1 = (function (){var statearr_38391 = state_38367;
(statearr_38391[(10)] = inst_38322__$1);

return statearr_38391;
})();
if(inst_38322__$1){
var statearr_38392_38438 = state_38367__$1;
(statearr_38392_38438[(1)] = (13));

} else {
var statearr_38393_38439 = state_38367__$1;
(statearr_38393_38439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (9))){
var inst_38344 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38394_38440 = state_38367__$1;
(statearr_38394_38440[(2)] = inst_38344);

(statearr_38394_38440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (5))){
var inst_38305 = cljs.core.deref.call(null,mults);
var inst_38306 = cljs.core.vals.call(null,inst_38305);
var inst_38307 = cljs.core.seq.call(null,inst_38306);
var inst_38308 = inst_38307;
var inst_38309 = null;
var inst_38310 = (0);
var inst_38311 = (0);
var state_38367__$1 = (function (){var statearr_38395 = state_38367;
(statearr_38395[(13)] = inst_38310);

(statearr_38395[(14)] = inst_38308);

(statearr_38395[(15)] = inst_38311);

(statearr_38395[(16)] = inst_38309);

return statearr_38395;
})();
var statearr_38396_38441 = state_38367__$1;
(statearr_38396_38441[(2)] = null);

(statearr_38396_38441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (14))){
var state_38367__$1 = state_38367;
var statearr_38400_38442 = state_38367__$1;
(statearr_38400_38442[(2)] = null);

(statearr_38400_38442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (16))){
var inst_38322 = (state_38367[(10)]);
var inst_38326 = cljs.core.chunk_first.call(null,inst_38322);
var inst_38327 = cljs.core.chunk_rest.call(null,inst_38322);
var inst_38328 = cljs.core.count.call(null,inst_38326);
var inst_38308 = inst_38327;
var inst_38309 = inst_38326;
var inst_38310 = inst_38328;
var inst_38311 = (0);
var state_38367__$1 = (function (){var statearr_38401 = state_38367;
(statearr_38401[(13)] = inst_38310);

(statearr_38401[(14)] = inst_38308);

(statearr_38401[(15)] = inst_38311);

(statearr_38401[(16)] = inst_38309);

return statearr_38401;
})();
var statearr_38402_38443 = state_38367__$1;
(statearr_38402_38443[(2)] = null);

(statearr_38402_38443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (10))){
var inst_38310 = (state_38367[(13)]);
var inst_38308 = (state_38367[(14)]);
var inst_38311 = (state_38367[(15)]);
var inst_38309 = (state_38367[(16)]);
var inst_38316 = cljs.core._nth.call(null,inst_38309,inst_38311);
var inst_38317 = cljs.core.async.muxch_STAR_.call(null,inst_38316);
var inst_38318 = cljs.core.async.close_BANG_.call(null,inst_38317);
var inst_38319 = (inst_38311 + (1));
var tmp38397 = inst_38310;
var tmp38398 = inst_38308;
var tmp38399 = inst_38309;
var inst_38308__$1 = tmp38398;
var inst_38309__$1 = tmp38399;
var inst_38310__$1 = tmp38397;
var inst_38311__$1 = inst_38319;
var state_38367__$1 = (function (){var statearr_38403 = state_38367;
(statearr_38403[(13)] = inst_38310__$1);

(statearr_38403[(14)] = inst_38308__$1);

(statearr_38403[(17)] = inst_38318);

(statearr_38403[(15)] = inst_38311__$1);

(statearr_38403[(16)] = inst_38309__$1);

return statearr_38403;
})();
var statearr_38404_38444 = state_38367__$1;
(statearr_38404_38444[(2)] = null);

(statearr_38404_38444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (18))){
var inst_38337 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38405_38445 = state_38367__$1;
(statearr_38405_38445[(2)] = inst_38337);

(statearr_38405_38445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (8))){
var inst_38310 = (state_38367[(13)]);
var inst_38311 = (state_38367[(15)]);
var inst_38313 = (inst_38311 < inst_38310);
var inst_38314 = inst_38313;
var state_38367__$1 = state_38367;
if(cljs.core.truth_(inst_38314)){
var statearr_38406_38446 = state_38367__$1;
(statearr_38406_38446[(1)] = (10));

} else {
var statearr_38407_38447 = state_38367__$1;
(statearr_38407_38447[(1)] = (11));

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
});})(c__20694__auto___38419,mults,ensure_mult,p))
;
return ((function (switch__20629__auto__,c__20694__auto___38419,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_38411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38411[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_38411[(1)] = (1));

return statearr_38411;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_38367){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_38367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e38412){if((e38412 instanceof Object)){
var ex__20633__auto__ = e38412;
var statearr_38413_38448 = state_38367;
(statearr_38413_38448[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38449 = state_38367;
state_38367 = G__38449;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_38367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_38367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___38419,mults,ensure_mult,p))
})();
var state__20696__auto__ = (function (){var statearr_38414 = f__20695__auto__.call(null);
(statearr_38414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___38419);

return statearr_38414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___38419,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args38450 = [];
var len__18672__auto___38453 = arguments.length;
var i__18673__auto___38454 = (0);
while(true){
if((i__18673__auto___38454 < len__18672__auto___38453)){
args38450.push((arguments[i__18673__auto___38454]));

var G__38455 = (i__18673__auto___38454 + (1));
i__18673__auto___38454 = G__38455;
continue;
} else {
}
break;
}

var G__38452 = args38450.length;
switch (G__38452) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38450.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args38457 = [];
var len__18672__auto___38460 = arguments.length;
var i__18673__auto___38461 = (0);
while(true){
if((i__18673__auto___38461 < len__18672__auto___38460)){
args38457.push((arguments[i__18673__auto___38461]));

var G__38462 = (i__18673__auto___38461 + (1));
i__18673__auto___38461 = G__38462;
continue;
} else {
}
break;
}

var G__38459 = args38457.length;
switch (G__38459) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38457.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args38464 = [];
var len__18672__auto___38535 = arguments.length;
var i__18673__auto___38536 = (0);
while(true){
if((i__18673__auto___38536 < len__18672__auto___38535)){
args38464.push((arguments[i__18673__auto___38536]));

var G__38537 = (i__18673__auto___38536 + (1));
i__18673__auto___38536 = G__38537;
continue;
} else {
}
break;
}

var G__38466 = args38464.length;
switch (G__38466) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38464.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20694__auto___38539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___38539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___38539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38505){
var state_val_38506 = (state_38505[(1)]);
if((state_val_38506 === (7))){
var state_38505__$1 = state_38505;
var statearr_38507_38540 = state_38505__$1;
(statearr_38507_38540[(2)] = null);

(statearr_38507_38540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (1))){
var state_38505__$1 = state_38505;
var statearr_38508_38541 = state_38505__$1;
(statearr_38508_38541[(2)] = null);

(statearr_38508_38541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (4))){
var inst_38469 = (state_38505[(7)]);
var inst_38471 = (inst_38469 < cnt);
var state_38505__$1 = state_38505;
if(cljs.core.truth_(inst_38471)){
var statearr_38509_38542 = state_38505__$1;
(statearr_38509_38542[(1)] = (6));

} else {
var statearr_38510_38543 = state_38505__$1;
(statearr_38510_38543[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (15))){
var inst_38501 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
var statearr_38511_38544 = state_38505__$1;
(statearr_38511_38544[(2)] = inst_38501);

(statearr_38511_38544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (13))){
var inst_38494 = cljs.core.async.close_BANG_.call(null,out);
var state_38505__$1 = state_38505;
var statearr_38512_38545 = state_38505__$1;
(statearr_38512_38545[(2)] = inst_38494);

(statearr_38512_38545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (6))){
var state_38505__$1 = state_38505;
var statearr_38513_38546 = state_38505__$1;
(statearr_38513_38546[(2)] = null);

(statearr_38513_38546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (3))){
var inst_38503 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38505__$1,inst_38503);
} else {
if((state_val_38506 === (12))){
var inst_38491 = (state_38505[(8)]);
var inst_38491__$1 = (state_38505[(2)]);
var inst_38492 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38491__$1);
var state_38505__$1 = (function (){var statearr_38514 = state_38505;
(statearr_38514[(8)] = inst_38491__$1);

return statearr_38514;
})();
if(cljs.core.truth_(inst_38492)){
var statearr_38515_38547 = state_38505__$1;
(statearr_38515_38547[(1)] = (13));

} else {
var statearr_38516_38548 = state_38505__$1;
(statearr_38516_38548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (2))){
var inst_38468 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38469 = (0);
var state_38505__$1 = (function (){var statearr_38517 = state_38505;
(statearr_38517[(9)] = inst_38468);

(statearr_38517[(7)] = inst_38469);

return statearr_38517;
})();
var statearr_38518_38549 = state_38505__$1;
(statearr_38518_38549[(2)] = null);

(statearr_38518_38549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (11))){
var inst_38469 = (state_38505[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38505,(10),Object,null,(9));
var inst_38478 = chs__$1.call(null,inst_38469);
var inst_38479 = done.call(null,inst_38469);
var inst_38480 = cljs.core.async.take_BANG_.call(null,inst_38478,inst_38479);
var state_38505__$1 = state_38505;
var statearr_38519_38550 = state_38505__$1;
(statearr_38519_38550[(2)] = inst_38480);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (9))){
var inst_38469 = (state_38505[(7)]);
var inst_38482 = (state_38505[(2)]);
var inst_38483 = (inst_38469 + (1));
var inst_38469__$1 = inst_38483;
var state_38505__$1 = (function (){var statearr_38520 = state_38505;
(statearr_38520[(7)] = inst_38469__$1);

(statearr_38520[(10)] = inst_38482);

return statearr_38520;
})();
var statearr_38521_38551 = state_38505__$1;
(statearr_38521_38551[(2)] = null);

(statearr_38521_38551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (5))){
var inst_38489 = (state_38505[(2)]);
var state_38505__$1 = (function (){var statearr_38522 = state_38505;
(statearr_38522[(11)] = inst_38489);

return statearr_38522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38505__$1,(12),dchan);
} else {
if((state_val_38506 === (14))){
var inst_38491 = (state_38505[(8)]);
var inst_38496 = cljs.core.apply.call(null,f,inst_38491);
var state_38505__$1 = state_38505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38505__$1,(16),out,inst_38496);
} else {
if((state_val_38506 === (16))){
var inst_38498 = (state_38505[(2)]);
var state_38505__$1 = (function (){var statearr_38523 = state_38505;
(statearr_38523[(12)] = inst_38498);

return statearr_38523;
})();
var statearr_38524_38552 = state_38505__$1;
(statearr_38524_38552[(2)] = null);

(statearr_38524_38552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (10))){
var inst_38473 = (state_38505[(2)]);
var inst_38474 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38505__$1 = (function (){var statearr_38525 = state_38505;
(statearr_38525[(13)] = inst_38473);

return statearr_38525;
})();
var statearr_38526_38553 = state_38505__$1;
(statearr_38526_38553[(2)] = inst_38474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (8))){
var inst_38487 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
var statearr_38527_38554 = state_38505__$1;
(statearr_38527_38554[(2)] = inst_38487);

(statearr_38527_38554[(1)] = (5));


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
});})(c__20694__auto___38539,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20629__auto__,c__20694__auto___38539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_38531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38531[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_38531[(1)] = (1));

return statearr_38531;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_38505){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_38505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e38532){if((e38532 instanceof Object)){
var ex__20633__auto__ = e38532;
var statearr_38533_38555 = state_38505;
(statearr_38533_38555[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38556 = state_38505;
state_38505 = G__38556;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_38505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_38505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___38539,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20696__auto__ = (function (){var statearr_38534 = f__20695__auto__.call(null);
(statearr_38534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___38539);

return statearr_38534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___38539,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args38558 = [];
var len__18672__auto___38614 = arguments.length;
var i__18673__auto___38615 = (0);
while(true){
if((i__18673__auto___38615 < len__18672__auto___38614)){
args38558.push((arguments[i__18673__auto___38615]));

var G__38616 = (i__18673__auto___38615 + (1));
i__18673__auto___38615 = G__38616;
continue;
} else {
}
break;
}

var G__38560 = args38558.length;
switch (G__38560) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38558.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20694__auto___38618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___38618,out){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___38618,out){
return (function (state_38590){
var state_val_38591 = (state_38590[(1)]);
if((state_val_38591 === (7))){
var inst_38569 = (state_38590[(7)]);
var inst_38570 = (state_38590[(8)]);
var inst_38569__$1 = (state_38590[(2)]);
var inst_38570__$1 = cljs.core.nth.call(null,inst_38569__$1,(0),null);
var inst_38571 = cljs.core.nth.call(null,inst_38569__$1,(1),null);
var inst_38572 = (inst_38570__$1 == null);
var state_38590__$1 = (function (){var statearr_38592 = state_38590;
(statearr_38592[(9)] = inst_38571);

(statearr_38592[(7)] = inst_38569__$1);

(statearr_38592[(8)] = inst_38570__$1);

return statearr_38592;
})();
if(cljs.core.truth_(inst_38572)){
var statearr_38593_38619 = state_38590__$1;
(statearr_38593_38619[(1)] = (8));

} else {
var statearr_38594_38620 = state_38590__$1;
(statearr_38594_38620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (1))){
var inst_38561 = cljs.core.vec.call(null,chs);
var inst_38562 = inst_38561;
var state_38590__$1 = (function (){var statearr_38595 = state_38590;
(statearr_38595[(10)] = inst_38562);

return statearr_38595;
})();
var statearr_38596_38621 = state_38590__$1;
(statearr_38596_38621[(2)] = null);

(statearr_38596_38621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (4))){
var inst_38562 = (state_38590[(10)]);
var state_38590__$1 = state_38590;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38590__$1,(7),inst_38562);
} else {
if((state_val_38591 === (6))){
var inst_38586 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38597_38622 = state_38590__$1;
(statearr_38597_38622[(2)] = inst_38586);

(statearr_38597_38622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (3))){
var inst_38588 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38590__$1,inst_38588);
} else {
if((state_val_38591 === (2))){
var inst_38562 = (state_38590[(10)]);
var inst_38564 = cljs.core.count.call(null,inst_38562);
var inst_38565 = (inst_38564 > (0));
var state_38590__$1 = state_38590;
if(cljs.core.truth_(inst_38565)){
var statearr_38599_38623 = state_38590__$1;
(statearr_38599_38623[(1)] = (4));

} else {
var statearr_38600_38624 = state_38590__$1;
(statearr_38600_38624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (11))){
var inst_38562 = (state_38590[(10)]);
var inst_38579 = (state_38590[(2)]);
var tmp38598 = inst_38562;
var inst_38562__$1 = tmp38598;
var state_38590__$1 = (function (){var statearr_38601 = state_38590;
(statearr_38601[(10)] = inst_38562__$1);

(statearr_38601[(11)] = inst_38579);

return statearr_38601;
})();
var statearr_38602_38625 = state_38590__$1;
(statearr_38602_38625[(2)] = null);

(statearr_38602_38625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (9))){
var inst_38570 = (state_38590[(8)]);
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38590__$1,(11),out,inst_38570);
} else {
if((state_val_38591 === (5))){
var inst_38584 = cljs.core.async.close_BANG_.call(null,out);
var state_38590__$1 = state_38590;
var statearr_38603_38626 = state_38590__$1;
(statearr_38603_38626[(2)] = inst_38584);

(statearr_38603_38626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (10))){
var inst_38582 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38604_38627 = state_38590__$1;
(statearr_38604_38627[(2)] = inst_38582);

(statearr_38604_38627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (8))){
var inst_38562 = (state_38590[(10)]);
var inst_38571 = (state_38590[(9)]);
var inst_38569 = (state_38590[(7)]);
var inst_38570 = (state_38590[(8)]);
var inst_38574 = (function (){var cs = inst_38562;
var vec__38567 = inst_38569;
var v = inst_38570;
var c = inst_38571;
return ((function (cs,vec__38567,v,c,inst_38562,inst_38571,inst_38569,inst_38570,state_val_38591,c__20694__auto___38618,out){
return (function (p1__38557_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38557_SHARP_);
});
;})(cs,vec__38567,v,c,inst_38562,inst_38571,inst_38569,inst_38570,state_val_38591,c__20694__auto___38618,out))
})();
var inst_38575 = cljs.core.filterv.call(null,inst_38574,inst_38562);
var inst_38562__$1 = inst_38575;
var state_38590__$1 = (function (){var statearr_38605 = state_38590;
(statearr_38605[(10)] = inst_38562__$1);

return statearr_38605;
})();
var statearr_38606_38628 = state_38590__$1;
(statearr_38606_38628[(2)] = null);

(statearr_38606_38628[(1)] = (2));


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
});})(c__20694__auto___38618,out))
;
return ((function (switch__20629__auto__,c__20694__auto___38618,out){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_38610 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38610[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_38610[(1)] = (1));

return statearr_38610;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_38590){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_38590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e38611){if((e38611 instanceof Object)){
var ex__20633__auto__ = e38611;
var statearr_38612_38629 = state_38590;
(statearr_38612_38629[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38630 = state_38590;
state_38590 = G__38630;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_38590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_38590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___38618,out))
})();
var state__20696__auto__ = (function (){var statearr_38613 = f__20695__auto__.call(null);
(statearr_38613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___38618);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___38618,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args38631 = [];
var len__18672__auto___38680 = arguments.length;
var i__18673__auto___38681 = (0);
while(true){
if((i__18673__auto___38681 < len__18672__auto___38680)){
args38631.push((arguments[i__18673__auto___38681]));

var G__38682 = (i__18673__auto___38681 + (1));
i__18673__auto___38681 = G__38682;
continue;
} else {
}
break;
}

var G__38633 = args38631.length;
switch (G__38633) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38631.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20694__auto___38684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___38684,out){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___38684,out){
return (function (state_38657){
var state_val_38658 = (state_38657[(1)]);
if((state_val_38658 === (7))){
var inst_38639 = (state_38657[(7)]);
var inst_38639__$1 = (state_38657[(2)]);
var inst_38640 = (inst_38639__$1 == null);
var inst_38641 = cljs.core.not.call(null,inst_38640);
var state_38657__$1 = (function (){var statearr_38659 = state_38657;
(statearr_38659[(7)] = inst_38639__$1);

return statearr_38659;
})();
if(inst_38641){
var statearr_38660_38685 = state_38657__$1;
(statearr_38660_38685[(1)] = (8));

} else {
var statearr_38661_38686 = state_38657__$1;
(statearr_38661_38686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (1))){
var inst_38634 = (0);
var state_38657__$1 = (function (){var statearr_38662 = state_38657;
(statearr_38662[(8)] = inst_38634);

return statearr_38662;
})();
var statearr_38663_38687 = state_38657__$1;
(statearr_38663_38687[(2)] = null);

(statearr_38663_38687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (4))){
var state_38657__$1 = state_38657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38657__$1,(7),ch);
} else {
if((state_val_38658 === (6))){
var inst_38652 = (state_38657[(2)]);
var state_38657__$1 = state_38657;
var statearr_38664_38688 = state_38657__$1;
(statearr_38664_38688[(2)] = inst_38652);

(statearr_38664_38688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (3))){
var inst_38654 = (state_38657[(2)]);
var inst_38655 = cljs.core.async.close_BANG_.call(null,out);
var state_38657__$1 = (function (){var statearr_38665 = state_38657;
(statearr_38665[(9)] = inst_38654);

return statearr_38665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38657__$1,inst_38655);
} else {
if((state_val_38658 === (2))){
var inst_38634 = (state_38657[(8)]);
var inst_38636 = (inst_38634 < n);
var state_38657__$1 = state_38657;
if(cljs.core.truth_(inst_38636)){
var statearr_38666_38689 = state_38657__$1;
(statearr_38666_38689[(1)] = (4));

} else {
var statearr_38667_38690 = state_38657__$1;
(statearr_38667_38690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (11))){
var inst_38634 = (state_38657[(8)]);
var inst_38644 = (state_38657[(2)]);
var inst_38645 = (inst_38634 + (1));
var inst_38634__$1 = inst_38645;
var state_38657__$1 = (function (){var statearr_38668 = state_38657;
(statearr_38668[(8)] = inst_38634__$1);

(statearr_38668[(10)] = inst_38644);

return statearr_38668;
})();
var statearr_38669_38691 = state_38657__$1;
(statearr_38669_38691[(2)] = null);

(statearr_38669_38691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (9))){
var state_38657__$1 = state_38657;
var statearr_38670_38692 = state_38657__$1;
(statearr_38670_38692[(2)] = null);

(statearr_38670_38692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (5))){
var state_38657__$1 = state_38657;
var statearr_38671_38693 = state_38657__$1;
(statearr_38671_38693[(2)] = null);

(statearr_38671_38693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (10))){
var inst_38649 = (state_38657[(2)]);
var state_38657__$1 = state_38657;
var statearr_38672_38694 = state_38657__$1;
(statearr_38672_38694[(2)] = inst_38649);

(statearr_38672_38694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38658 === (8))){
var inst_38639 = (state_38657[(7)]);
var state_38657__$1 = state_38657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38657__$1,(11),out,inst_38639);
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
});})(c__20694__auto___38684,out))
;
return ((function (switch__20629__auto__,c__20694__auto___38684,out){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_38676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38676[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_38676[(1)] = (1));

return statearr_38676;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_38657){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_38657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e38677){if((e38677 instanceof Object)){
var ex__20633__auto__ = e38677;
var statearr_38678_38695 = state_38657;
(statearr_38678_38695[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38696 = state_38657;
state_38657 = G__38696;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_38657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_38657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___38684,out))
})();
var state__20696__auto__ = (function (){var statearr_38679 = f__20695__auto__.call(null);
(statearr_38679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___38684);

return statearr_38679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___38684,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38704 = (function (map_LT_,f,ch,meta38705){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38705 = meta38705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38706,meta38705__$1){
var self__ = this;
var _38706__$1 = this;
return (new cljs.core.async.t_cljs$core$async38704(self__.map_LT_,self__.f,self__.ch,meta38705__$1));
});

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38706){
var self__ = this;
var _38706__$1 = this;
return self__.meta38705;
});

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38707 = (function (map_LT_,f,ch,meta38705,_,fn1,meta38708){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38705 = meta38705;
this._ = _;
this.fn1 = fn1;
this.meta38708 = meta38708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38709,meta38708__$1){
var self__ = this;
var _38709__$1 = this;
return (new cljs.core.async.t_cljs$core$async38707(self__.map_LT_,self__.f,self__.ch,self__.meta38705,self__._,self__.fn1,meta38708__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38709){
var self__ = this;
var _38709__$1 = this;
return self__.meta38708;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38697_SHARP_){
return f1.call(null,(((p1__38697_SHARP_ == null))?null:self__.f.call(null,p1__38697_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38707.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38705","meta38705",1933975263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38704","cljs.core.async/t_cljs$core$async38704",-1466316365,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38708","meta38708",586156970,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38707";

cljs.core.async.t_cljs$core$async38707.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async38707");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38707 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38707(map_LT___$1,f__$1,ch__$1,meta38705__$1,___$2,fn1__$1,meta38708){
return (new cljs.core.async.t_cljs$core$async38707(map_LT___$1,f__$1,ch__$1,meta38705__$1,___$2,fn1__$1,meta38708));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38707(self__.map_LT_,self__.f,self__.ch,self__.meta38705,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17602__auto__ = ret;
if(cljs.core.truth_(and__17602__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17602__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38705","meta38705",1933975263,null)], null);
});

cljs.core.async.t_cljs$core$async38704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38704";

cljs.core.async.t_cljs$core$async38704.cljs$lang$ctorPrWriter = (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async38704");
});

cljs.core.async.__GT_t_cljs$core$async38704 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38704(map_LT___$1,f__$1,ch__$1,meta38705){
return (new cljs.core.async.t_cljs$core$async38704(map_LT___$1,f__$1,ch__$1,meta38705));
});

}

return (new cljs.core.async.t_cljs$core$async38704(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38713 = (function (map_GT_,f,ch,meta38714){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38714 = meta38714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38715,meta38714__$1){
var self__ = this;
var _38715__$1 = this;
return (new cljs.core.async.t_cljs$core$async38713(self__.map_GT_,self__.f,self__.ch,meta38714__$1));
});

cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38715){
var self__ = this;
var _38715__$1 = this;
return self__.meta38714;
});

cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38714","meta38714",-103671140,null)], null);
});

cljs.core.async.t_cljs$core$async38713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38713";

cljs.core.async.t_cljs$core$async38713.cljs$lang$ctorPrWriter = (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async38713");
});

cljs.core.async.__GT_t_cljs$core$async38713 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38713(map_GT___$1,f__$1,ch__$1,meta38714){
return (new cljs.core.async.t_cljs$core$async38713(map_GT___$1,f__$1,ch__$1,meta38714));
});

}

return (new cljs.core.async.t_cljs$core$async38713(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38719 = (function (filter_GT_,p,ch,meta38720){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38720 = meta38720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38721,meta38720__$1){
var self__ = this;
var _38721__$1 = this;
return (new cljs.core.async.t_cljs$core$async38719(self__.filter_GT_,self__.p,self__.ch,meta38720__$1));
});

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38721){
var self__ = this;
var _38721__$1 = this;
return self__.meta38720;
});

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38720","meta38720",614718485,null)], null);
});

cljs.core.async.t_cljs$core$async38719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38719";

cljs.core.async.t_cljs$core$async38719.cljs$lang$ctorPrWriter = (function (this__18212__auto__,writer__18213__auto__,opt__18214__auto__){
return cljs.core._write.call(null,writer__18213__auto__,"cljs.core.async/t_cljs$core$async38719");
});

cljs.core.async.__GT_t_cljs$core$async38719 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38719(filter_GT___$1,p__$1,ch__$1,meta38720){
return (new cljs.core.async.t_cljs$core$async38719(filter_GT___$1,p__$1,ch__$1,meta38720));
});

}

return (new cljs.core.async.t_cljs$core$async38719(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args38722 = [];
var len__18672__auto___38766 = arguments.length;
var i__18673__auto___38767 = (0);
while(true){
if((i__18673__auto___38767 < len__18672__auto___38766)){
args38722.push((arguments[i__18673__auto___38767]));

var G__38768 = (i__18673__auto___38767 + (1));
i__18673__auto___38767 = G__38768;
continue;
} else {
}
break;
}

var G__38724 = args38722.length;
switch (G__38724) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38722.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20694__auto___38770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___38770,out){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___38770,out){
return (function (state_38745){
var state_val_38746 = (state_38745[(1)]);
if((state_val_38746 === (7))){
var inst_38741 = (state_38745[(2)]);
var state_38745__$1 = state_38745;
var statearr_38747_38771 = state_38745__$1;
(statearr_38747_38771[(2)] = inst_38741);

(statearr_38747_38771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (1))){
var state_38745__$1 = state_38745;
var statearr_38748_38772 = state_38745__$1;
(statearr_38748_38772[(2)] = null);

(statearr_38748_38772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (4))){
var inst_38727 = (state_38745[(7)]);
var inst_38727__$1 = (state_38745[(2)]);
var inst_38728 = (inst_38727__$1 == null);
var state_38745__$1 = (function (){var statearr_38749 = state_38745;
(statearr_38749[(7)] = inst_38727__$1);

return statearr_38749;
})();
if(cljs.core.truth_(inst_38728)){
var statearr_38750_38773 = state_38745__$1;
(statearr_38750_38773[(1)] = (5));

} else {
var statearr_38751_38774 = state_38745__$1;
(statearr_38751_38774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (6))){
var inst_38727 = (state_38745[(7)]);
var inst_38732 = p.call(null,inst_38727);
var state_38745__$1 = state_38745;
if(cljs.core.truth_(inst_38732)){
var statearr_38752_38775 = state_38745__$1;
(statearr_38752_38775[(1)] = (8));

} else {
var statearr_38753_38776 = state_38745__$1;
(statearr_38753_38776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (3))){
var inst_38743 = (state_38745[(2)]);
var state_38745__$1 = state_38745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38745__$1,inst_38743);
} else {
if((state_val_38746 === (2))){
var state_38745__$1 = state_38745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38745__$1,(4),ch);
} else {
if((state_val_38746 === (11))){
var inst_38735 = (state_38745[(2)]);
var state_38745__$1 = state_38745;
var statearr_38754_38777 = state_38745__$1;
(statearr_38754_38777[(2)] = inst_38735);

(statearr_38754_38777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (9))){
var state_38745__$1 = state_38745;
var statearr_38755_38778 = state_38745__$1;
(statearr_38755_38778[(2)] = null);

(statearr_38755_38778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (5))){
var inst_38730 = cljs.core.async.close_BANG_.call(null,out);
var state_38745__$1 = state_38745;
var statearr_38756_38779 = state_38745__$1;
(statearr_38756_38779[(2)] = inst_38730);

(statearr_38756_38779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (10))){
var inst_38738 = (state_38745[(2)]);
var state_38745__$1 = (function (){var statearr_38757 = state_38745;
(statearr_38757[(8)] = inst_38738);

return statearr_38757;
})();
var statearr_38758_38780 = state_38745__$1;
(statearr_38758_38780[(2)] = null);

(statearr_38758_38780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38746 === (8))){
var inst_38727 = (state_38745[(7)]);
var state_38745__$1 = state_38745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38745__$1,(11),out,inst_38727);
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
});})(c__20694__auto___38770,out))
;
return ((function (switch__20629__auto__,c__20694__auto___38770,out){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_38762 = [null,null,null,null,null,null,null,null,null];
(statearr_38762[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_38762[(1)] = (1));

return statearr_38762;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_38745){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_38745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e38763){if((e38763 instanceof Object)){
var ex__20633__auto__ = e38763;
var statearr_38764_38781 = state_38745;
(statearr_38764_38781[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38782 = state_38745;
state_38745 = G__38782;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_38745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_38745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___38770,out))
})();
var state__20696__auto__ = (function (){var statearr_38765 = f__20695__auto__.call(null);
(statearr_38765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___38770);

return statearr_38765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___38770,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38783 = [];
var len__18672__auto___38786 = arguments.length;
var i__18673__auto___38787 = (0);
while(true){
if((i__18673__auto___38787 < len__18672__auto___38786)){
args38783.push((arguments[i__18673__auto___38787]));

var G__38788 = (i__18673__auto___38787 + (1));
i__18673__auto___38787 = G__38788;
continue;
} else {
}
break;
}

var G__38785 = args38783.length;
switch (G__38785) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38783.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto__){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto__){
return (function (state_38955){
var state_val_38956 = (state_38955[(1)]);
if((state_val_38956 === (7))){
var inst_38951 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38957_38998 = state_38955__$1;
(statearr_38957_38998[(2)] = inst_38951);

(statearr_38957_38998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (20))){
var inst_38921 = (state_38955[(7)]);
var inst_38932 = (state_38955[(2)]);
var inst_38933 = cljs.core.next.call(null,inst_38921);
var inst_38907 = inst_38933;
var inst_38908 = null;
var inst_38909 = (0);
var inst_38910 = (0);
var state_38955__$1 = (function (){var statearr_38958 = state_38955;
(statearr_38958[(8)] = inst_38910);

(statearr_38958[(9)] = inst_38932);

(statearr_38958[(10)] = inst_38908);

(statearr_38958[(11)] = inst_38909);

(statearr_38958[(12)] = inst_38907);

return statearr_38958;
})();
var statearr_38959_38999 = state_38955__$1;
(statearr_38959_38999[(2)] = null);

(statearr_38959_38999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (1))){
var state_38955__$1 = state_38955;
var statearr_38960_39000 = state_38955__$1;
(statearr_38960_39000[(2)] = null);

(statearr_38960_39000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (4))){
var inst_38896 = (state_38955[(13)]);
var inst_38896__$1 = (state_38955[(2)]);
var inst_38897 = (inst_38896__$1 == null);
var state_38955__$1 = (function (){var statearr_38961 = state_38955;
(statearr_38961[(13)] = inst_38896__$1);

return statearr_38961;
})();
if(cljs.core.truth_(inst_38897)){
var statearr_38962_39001 = state_38955__$1;
(statearr_38962_39001[(1)] = (5));

} else {
var statearr_38963_39002 = state_38955__$1;
(statearr_38963_39002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (15))){
var state_38955__$1 = state_38955;
var statearr_38967_39003 = state_38955__$1;
(statearr_38967_39003[(2)] = null);

(statearr_38967_39003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (21))){
var state_38955__$1 = state_38955;
var statearr_38968_39004 = state_38955__$1;
(statearr_38968_39004[(2)] = null);

(statearr_38968_39004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (13))){
var inst_38910 = (state_38955[(8)]);
var inst_38908 = (state_38955[(10)]);
var inst_38909 = (state_38955[(11)]);
var inst_38907 = (state_38955[(12)]);
var inst_38917 = (state_38955[(2)]);
var inst_38918 = (inst_38910 + (1));
var tmp38964 = inst_38908;
var tmp38965 = inst_38909;
var tmp38966 = inst_38907;
var inst_38907__$1 = tmp38966;
var inst_38908__$1 = tmp38964;
var inst_38909__$1 = tmp38965;
var inst_38910__$1 = inst_38918;
var state_38955__$1 = (function (){var statearr_38969 = state_38955;
(statearr_38969[(8)] = inst_38910__$1);

(statearr_38969[(10)] = inst_38908__$1);

(statearr_38969[(11)] = inst_38909__$1);

(statearr_38969[(14)] = inst_38917);

(statearr_38969[(12)] = inst_38907__$1);

return statearr_38969;
})();
var statearr_38970_39005 = state_38955__$1;
(statearr_38970_39005[(2)] = null);

(statearr_38970_39005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (22))){
var state_38955__$1 = state_38955;
var statearr_38971_39006 = state_38955__$1;
(statearr_38971_39006[(2)] = null);

(statearr_38971_39006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (6))){
var inst_38896 = (state_38955[(13)]);
var inst_38905 = f.call(null,inst_38896);
var inst_38906 = cljs.core.seq.call(null,inst_38905);
var inst_38907 = inst_38906;
var inst_38908 = null;
var inst_38909 = (0);
var inst_38910 = (0);
var state_38955__$1 = (function (){var statearr_38972 = state_38955;
(statearr_38972[(8)] = inst_38910);

(statearr_38972[(10)] = inst_38908);

(statearr_38972[(11)] = inst_38909);

(statearr_38972[(12)] = inst_38907);

return statearr_38972;
})();
var statearr_38973_39007 = state_38955__$1;
(statearr_38973_39007[(2)] = null);

(statearr_38973_39007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (17))){
var inst_38921 = (state_38955[(7)]);
var inst_38925 = cljs.core.chunk_first.call(null,inst_38921);
var inst_38926 = cljs.core.chunk_rest.call(null,inst_38921);
var inst_38927 = cljs.core.count.call(null,inst_38925);
var inst_38907 = inst_38926;
var inst_38908 = inst_38925;
var inst_38909 = inst_38927;
var inst_38910 = (0);
var state_38955__$1 = (function (){var statearr_38974 = state_38955;
(statearr_38974[(8)] = inst_38910);

(statearr_38974[(10)] = inst_38908);

(statearr_38974[(11)] = inst_38909);

(statearr_38974[(12)] = inst_38907);

return statearr_38974;
})();
var statearr_38975_39008 = state_38955__$1;
(statearr_38975_39008[(2)] = null);

(statearr_38975_39008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (3))){
var inst_38953 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38955__$1,inst_38953);
} else {
if((state_val_38956 === (12))){
var inst_38941 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38976_39009 = state_38955__$1;
(statearr_38976_39009[(2)] = inst_38941);

(statearr_38976_39009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (2))){
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38955__$1,(4),in$);
} else {
if((state_val_38956 === (23))){
var inst_38949 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38977_39010 = state_38955__$1;
(statearr_38977_39010[(2)] = inst_38949);

(statearr_38977_39010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (19))){
var inst_38936 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38978_39011 = state_38955__$1;
(statearr_38978_39011[(2)] = inst_38936);

(statearr_38978_39011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (11))){
var inst_38907 = (state_38955[(12)]);
var inst_38921 = (state_38955[(7)]);
var inst_38921__$1 = cljs.core.seq.call(null,inst_38907);
var state_38955__$1 = (function (){var statearr_38979 = state_38955;
(statearr_38979[(7)] = inst_38921__$1);

return statearr_38979;
})();
if(inst_38921__$1){
var statearr_38980_39012 = state_38955__$1;
(statearr_38980_39012[(1)] = (14));

} else {
var statearr_38981_39013 = state_38955__$1;
(statearr_38981_39013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (9))){
var inst_38943 = (state_38955[(2)]);
var inst_38944 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38955__$1 = (function (){var statearr_38982 = state_38955;
(statearr_38982[(15)] = inst_38943);

return statearr_38982;
})();
if(cljs.core.truth_(inst_38944)){
var statearr_38983_39014 = state_38955__$1;
(statearr_38983_39014[(1)] = (21));

} else {
var statearr_38984_39015 = state_38955__$1;
(statearr_38984_39015[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (5))){
var inst_38899 = cljs.core.async.close_BANG_.call(null,out);
var state_38955__$1 = state_38955;
var statearr_38985_39016 = state_38955__$1;
(statearr_38985_39016[(2)] = inst_38899);

(statearr_38985_39016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (14))){
var inst_38921 = (state_38955[(7)]);
var inst_38923 = cljs.core.chunked_seq_QMARK_.call(null,inst_38921);
var state_38955__$1 = state_38955;
if(inst_38923){
var statearr_38986_39017 = state_38955__$1;
(statearr_38986_39017[(1)] = (17));

} else {
var statearr_38987_39018 = state_38955__$1;
(statearr_38987_39018[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (16))){
var inst_38939 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38988_39019 = state_38955__$1;
(statearr_38988_39019[(2)] = inst_38939);

(statearr_38988_39019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (10))){
var inst_38910 = (state_38955[(8)]);
var inst_38908 = (state_38955[(10)]);
var inst_38915 = cljs.core._nth.call(null,inst_38908,inst_38910);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38955__$1,(13),out,inst_38915);
} else {
if((state_val_38956 === (18))){
var inst_38921 = (state_38955[(7)]);
var inst_38930 = cljs.core.first.call(null,inst_38921);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38955__$1,(20),out,inst_38930);
} else {
if((state_val_38956 === (8))){
var inst_38910 = (state_38955[(8)]);
var inst_38909 = (state_38955[(11)]);
var inst_38912 = (inst_38910 < inst_38909);
var inst_38913 = inst_38912;
var state_38955__$1 = state_38955;
if(cljs.core.truth_(inst_38913)){
var statearr_38989_39020 = state_38955__$1;
(statearr_38989_39020[(1)] = (10));

} else {
var statearr_38990_39021 = state_38955__$1;
(statearr_38990_39021[(1)] = (11));

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
});})(c__20694__auto__))
;
return ((function (switch__20629__auto__,c__20694__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20630__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20630__auto____0 = (function (){
var statearr_38994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38994[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20630__auto__);

(statearr_38994[(1)] = (1));

return statearr_38994;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20630__auto____1 = (function (state_38955){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_38955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e38995){if((e38995 instanceof Object)){
var ex__20633__auto__ = e38995;
var statearr_38996_39022 = state_38955;
(statearr_38996_39022[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39023 = state_38955;
state_38955 = G__39023;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20630__auto__ = function(state_38955){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20630__auto____1.call(this,state_38955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20630__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20630__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto__))
})();
var state__20696__auto__ = (function (){var statearr_38997 = f__20695__auto__.call(null);
(statearr_38997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto__);

return statearr_38997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto__))
);

return c__20694__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39024 = [];
var len__18672__auto___39027 = arguments.length;
var i__18673__auto___39028 = (0);
while(true){
if((i__18673__auto___39028 < len__18672__auto___39027)){
args39024.push((arguments[i__18673__auto___39028]));

var G__39029 = (i__18673__auto___39028 + (1));
i__18673__auto___39028 = G__39029;
continue;
} else {
}
break;
}

var G__39026 = args39024.length;
switch (G__39026) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39024.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39031 = [];
var len__18672__auto___39034 = arguments.length;
var i__18673__auto___39035 = (0);
while(true){
if((i__18673__auto___39035 < len__18672__auto___39034)){
args39031.push((arguments[i__18673__auto___39035]));

var G__39036 = (i__18673__auto___39035 + (1));
i__18673__auto___39035 = G__39036;
continue;
} else {
}
break;
}

var G__39033 = args39031.length;
switch (G__39033) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39031.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39038 = [];
var len__18672__auto___39089 = arguments.length;
var i__18673__auto___39090 = (0);
while(true){
if((i__18673__auto___39090 < len__18672__auto___39089)){
args39038.push((arguments[i__18673__auto___39090]));

var G__39091 = (i__18673__auto___39090 + (1));
i__18673__auto___39090 = G__39091;
continue;
} else {
}
break;
}

var G__39040 = args39038.length;
switch (G__39040) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39038.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20694__auto___39093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___39093,out){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___39093,out){
return (function (state_39064){
var state_val_39065 = (state_39064[(1)]);
if((state_val_39065 === (7))){
var inst_39059 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39066_39094 = state_39064__$1;
(statearr_39066_39094[(2)] = inst_39059);

(statearr_39066_39094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (1))){
var inst_39041 = null;
var state_39064__$1 = (function (){var statearr_39067 = state_39064;
(statearr_39067[(7)] = inst_39041);

return statearr_39067;
})();
var statearr_39068_39095 = state_39064__$1;
(statearr_39068_39095[(2)] = null);

(statearr_39068_39095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (4))){
var inst_39044 = (state_39064[(8)]);
var inst_39044__$1 = (state_39064[(2)]);
var inst_39045 = (inst_39044__$1 == null);
var inst_39046 = cljs.core.not.call(null,inst_39045);
var state_39064__$1 = (function (){var statearr_39069 = state_39064;
(statearr_39069[(8)] = inst_39044__$1);

return statearr_39069;
})();
if(inst_39046){
var statearr_39070_39096 = state_39064__$1;
(statearr_39070_39096[(1)] = (5));

} else {
var statearr_39071_39097 = state_39064__$1;
(statearr_39071_39097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (6))){
var state_39064__$1 = state_39064;
var statearr_39072_39098 = state_39064__$1;
(statearr_39072_39098[(2)] = null);

(statearr_39072_39098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (3))){
var inst_39061 = (state_39064[(2)]);
var inst_39062 = cljs.core.async.close_BANG_.call(null,out);
var state_39064__$1 = (function (){var statearr_39073 = state_39064;
(statearr_39073[(9)] = inst_39061);

return statearr_39073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39064__$1,inst_39062);
} else {
if((state_val_39065 === (2))){
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39064__$1,(4),ch);
} else {
if((state_val_39065 === (11))){
var inst_39044 = (state_39064[(8)]);
var inst_39053 = (state_39064[(2)]);
var inst_39041 = inst_39044;
var state_39064__$1 = (function (){var statearr_39074 = state_39064;
(statearr_39074[(7)] = inst_39041);

(statearr_39074[(10)] = inst_39053);

return statearr_39074;
})();
var statearr_39075_39099 = state_39064__$1;
(statearr_39075_39099[(2)] = null);

(statearr_39075_39099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (9))){
var inst_39044 = (state_39064[(8)]);
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39064__$1,(11),out,inst_39044);
} else {
if((state_val_39065 === (5))){
var inst_39041 = (state_39064[(7)]);
var inst_39044 = (state_39064[(8)]);
var inst_39048 = cljs.core._EQ_.call(null,inst_39044,inst_39041);
var state_39064__$1 = state_39064;
if(inst_39048){
var statearr_39077_39100 = state_39064__$1;
(statearr_39077_39100[(1)] = (8));

} else {
var statearr_39078_39101 = state_39064__$1;
(statearr_39078_39101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (10))){
var inst_39056 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39079_39102 = state_39064__$1;
(statearr_39079_39102[(2)] = inst_39056);

(statearr_39079_39102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (8))){
var inst_39041 = (state_39064[(7)]);
var tmp39076 = inst_39041;
var inst_39041__$1 = tmp39076;
var state_39064__$1 = (function (){var statearr_39080 = state_39064;
(statearr_39080[(7)] = inst_39041__$1);

return statearr_39080;
})();
var statearr_39081_39103 = state_39064__$1;
(statearr_39081_39103[(2)] = null);

(statearr_39081_39103[(1)] = (2));


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
});})(c__20694__auto___39093,out))
;
return ((function (switch__20629__auto__,c__20694__auto___39093,out){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_39085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39085[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_39085[(1)] = (1));

return statearr_39085;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_39064){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_39064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e39086){if((e39086 instanceof Object)){
var ex__20633__auto__ = e39086;
var statearr_39087_39104 = state_39064;
(statearr_39087_39104[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39105 = state_39064;
state_39064 = G__39105;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_39064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_39064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___39093,out))
})();
var state__20696__auto__ = (function (){var statearr_39088 = f__20695__auto__.call(null);
(statearr_39088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___39093);

return statearr_39088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___39093,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39106 = [];
var len__18672__auto___39176 = arguments.length;
var i__18673__auto___39177 = (0);
while(true){
if((i__18673__auto___39177 < len__18672__auto___39176)){
args39106.push((arguments[i__18673__auto___39177]));

var G__39178 = (i__18673__auto___39177 + (1));
i__18673__auto___39177 = G__39178;
continue;
} else {
}
break;
}

var G__39108 = args39106.length;
switch (G__39108) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39106.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20694__auto___39180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___39180,out){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___39180,out){
return (function (state_39146){
var state_val_39147 = (state_39146[(1)]);
if((state_val_39147 === (7))){
var inst_39142 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
var statearr_39148_39181 = state_39146__$1;
(statearr_39148_39181[(2)] = inst_39142);

(statearr_39148_39181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (1))){
var inst_39109 = (new Array(n));
var inst_39110 = inst_39109;
var inst_39111 = (0);
var state_39146__$1 = (function (){var statearr_39149 = state_39146;
(statearr_39149[(7)] = inst_39111);

(statearr_39149[(8)] = inst_39110);

return statearr_39149;
})();
var statearr_39150_39182 = state_39146__$1;
(statearr_39150_39182[(2)] = null);

(statearr_39150_39182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (4))){
var inst_39114 = (state_39146[(9)]);
var inst_39114__$1 = (state_39146[(2)]);
var inst_39115 = (inst_39114__$1 == null);
var inst_39116 = cljs.core.not.call(null,inst_39115);
var state_39146__$1 = (function (){var statearr_39151 = state_39146;
(statearr_39151[(9)] = inst_39114__$1);

return statearr_39151;
})();
if(inst_39116){
var statearr_39152_39183 = state_39146__$1;
(statearr_39152_39183[(1)] = (5));

} else {
var statearr_39153_39184 = state_39146__$1;
(statearr_39153_39184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (15))){
var inst_39136 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
var statearr_39154_39185 = state_39146__$1;
(statearr_39154_39185[(2)] = inst_39136);

(statearr_39154_39185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (13))){
var state_39146__$1 = state_39146;
var statearr_39155_39186 = state_39146__$1;
(statearr_39155_39186[(2)] = null);

(statearr_39155_39186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (6))){
var inst_39111 = (state_39146[(7)]);
var inst_39132 = (inst_39111 > (0));
var state_39146__$1 = state_39146;
if(cljs.core.truth_(inst_39132)){
var statearr_39156_39187 = state_39146__$1;
(statearr_39156_39187[(1)] = (12));

} else {
var statearr_39157_39188 = state_39146__$1;
(statearr_39157_39188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (3))){
var inst_39144 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39146__$1,inst_39144);
} else {
if((state_val_39147 === (12))){
var inst_39110 = (state_39146[(8)]);
var inst_39134 = cljs.core.vec.call(null,inst_39110);
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39146__$1,(15),out,inst_39134);
} else {
if((state_val_39147 === (2))){
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39146__$1,(4),ch);
} else {
if((state_val_39147 === (11))){
var inst_39126 = (state_39146[(2)]);
var inst_39127 = (new Array(n));
var inst_39110 = inst_39127;
var inst_39111 = (0);
var state_39146__$1 = (function (){var statearr_39158 = state_39146;
(statearr_39158[(10)] = inst_39126);

(statearr_39158[(7)] = inst_39111);

(statearr_39158[(8)] = inst_39110);

return statearr_39158;
})();
var statearr_39159_39189 = state_39146__$1;
(statearr_39159_39189[(2)] = null);

(statearr_39159_39189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (9))){
var inst_39110 = (state_39146[(8)]);
var inst_39124 = cljs.core.vec.call(null,inst_39110);
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39146__$1,(11),out,inst_39124);
} else {
if((state_val_39147 === (5))){
var inst_39111 = (state_39146[(7)]);
var inst_39119 = (state_39146[(11)]);
var inst_39110 = (state_39146[(8)]);
var inst_39114 = (state_39146[(9)]);
var inst_39118 = (inst_39110[inst_39111] = inst_39114);
var inst_39119__$1 = (inst_39111 + (1));
var inst_39120 = (inst_39119__$1 < n);
var state_39146__$1 = (function (){var statearr_39160 = state_39146;
(statearr_39160[(12)] = inst_39118);

(statearr_39160[(11)] = inst_39119__$1);

return statearr_39160;
})();
if(cljs.core.truth_(inst_39120)){
var statearr_39161_39190 = state_39146__$1;
(statearr_39161_39190[(1)] = (8));

} else {
var statearr_39162_39191 = state_39146__$1;
(statearr_39162_39191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (14))){
var inst_39139 = (state_39146[(2)]);
var inst_39140 = cljs.core.async.close_BANG_.call(null,out);
var state_39146__$1 = (function (){var statearr_39164 = state_39146;
(statearr_39164[(13)] = inst_39139);

return statearr_39164;
})();
var statearr_39165_39192 = state_39146__$1;
(statearr_39165_39192[(2)] = inst_39140);

(statearr_39165_39192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (10))){
var inst_39130 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
var statearr_39166_39193 = state_39146__$1;
(statearr_39166_39193[(2)] = inst_39130);

(statearr_39166_39193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (8))){
var inst_39119 = (state_39146[(11)]);
var inst_39110 = (state_39146[(8)]);
var tmp39163 = inst_39110;
var inst_39110__$1 = tmp39163;
var inst_39111 = inst_39119;
var state_39146__$1 = (function (){var statearr_39167 = state_39146;
(statearr_39167[(7)] = inst_39111);

(statearr_39167[(8)] = inst_39110__$1);

return statearr_39167;
})();
var statearr_39168_39194 = state_39146__$1;
(statearr_39168_39194[(2)] = null);

(statearr_39168_39194[(1)] = (2));


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
});})(c__20694__auto___39180,out))
;
return ((function (switch__20629__auto__,c__20694__auto___39180,out){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_39172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39172[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_39172[(1)] = (1));

return statearr_39172;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_39146){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_39146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e39173){if((e39173 instanceof Object)){
var ex__20633__auto__ = e39173;
var statearr_39174_39195 = state_39146;
(statearr_39174_39195[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39196 = state_39146;
state_39146 = G__39196;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_39146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_39146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___39180,out))
})();
var state__20696__auto__ = (function (){var statearr_39175 = f__20695__auto__.call(null);
(statearr_39175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___39180);

return statearr_39175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___39180,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39197 = [];
var len__18672__auto___39271 = arguments.length;
var i__18673__auto___39272 = (0);
while(true){
if((i__18673__auto___39272 < len__18672__auto___39271)){
args39197.push((arguments[i__18673__auto___39272]));

var G__39273 = (i__18673__auto___39272 + (1));
i__18673__auto___39272 = G__39273;
continue;
} else {
}
break;
}

var G__39199 = args39197.length;
switch (G__39199) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39197.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20694__auto___39275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20694__auto___39275,out){
return (function (){
var f__20695__auto__ = (function (){var switch__20629__auto__ = ((function (c__20694__auto___39275,out){
return (function (state_39241){
var state_val_39242 = (state_39241[(1)]);
if((state_val_39242 === (7))){
var inst_39237 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39243_39276 = state_39241__$1;
(statearr_39243_39276[(2)] = inst_39237);

(statearr_39243_39276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (1))){
var inst_39200 = [];
var inst_39201 = inst_39200;
var inst_39202 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39241__$1 = (function (){var statearr_39244 = state_39241;
(statearr_39244[(7)] = inst_39202);

(statearr_39244[(8)] = inst_39201);

return statearr_39244;
})();
var statearr_39245_39277 = state_39241__$1;
(statearr_39245_39277[(2)] = null);

(statearr_39245_39277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (4))){
var inst_39205 = (state_39241[(9)]);
var inst_39205__$1 = (state_39241[(2)]);
var inst_39206 = (inst_39205__$1 == null);
var inst_39207 = cljs.core.not.call(null,inst_39206);
var state_39241__$1 = (function (){var statearr_39246 = state_39241;
(statearr_39246[(9)] = inst_39205__$1);

return statearr_39246;
})();
if(inst_39207){
var statearr_39247_39278 = state_39241__$1;
(statearr_39247_39278[(1)] = (5));

} else {
var statearr_39248_39279 = state_39241__$1;
(statearr_39248_39279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (15))){
var inst_39231 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39249_39280 = state_39241__$1;
(statearr_39249_39280[(2)] = inst_39231);

(statearr_39249_39280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (13))){
var state_39241__$1 = state_39241;
var statearr_39250_39281 = state_39241__$1;
(statearr_39250_39281[(2)] = null);

(statearr_39250_39281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (6))){
var inst_39201 = (state_39241[(8)]);
var inst_39226 = inst_39201.length;
var inst_39227 = (inst_39226 > (0));
var state_39241__$1 = state_39241;
if(cljs.core.truth_(inst_39227)){
var statearr_39251_39282 = state_39241__$1;
(statearr_39251_39282[(1)] = (12));

} else {
var statearr_39252_39283 = state_39241__$1;
(statearr_39252_39283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (3))){
var inst_39239 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39241__$1,inst_39239);
} else {
if((state_val_39242 === (12))){
var inst_39201 = (state_39241[(8)]);
var inst_39229 = cljs.core.vec.call(null,inst_39201);
var state_39241__$1 = state_39241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39241__$1,(15),out,inst_39229);
} else {
if((state_val_39242 === (2))){
var state_39241__$1 = state_39241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39241__$1,(4),ch);
} else {
if((state_val_39242 === (11))){
var inst_39209 = (state_39241[(10)]);
var inst_39205 = (state_39241[(9)]);
var inst_39219 = (state_39241[(2)]);
var inst_39220 = [];
var inst_39221 = inst_39220.push(inst_39205);
var inst_39201 = inst_39220;
var inst_39202 = inst_39209;
var state_39241__$1 = (function (){var statearr_39253 = state_39241;
(statearr_39253[(11)] = inst_39221);

(statearr_39253[(12)] = inst_39219);

(statearr_39253[(7)] = inst_39202);

(statearr_39253[(8)] = inst_39201);

return statearr_39253;
})();
var statearr_39254_39284 = state_39241__$1;
(statearr_39254_39284[(2)] = null);

(statearr_39254_39284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (9))){
var inst_39201 = (state_39241[(8)]);
var inst_39217 = cljs.core.vec.call(null,inst_39201);
var state_39241__$1 = state_39241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39241__$1,(11),out,inst_39217);
} else {
if((state_val_39242 === (5))){
var inst_39209 = (state_39241[(10)]);
var inst_39202 = (state_39241[(7)]);
var inst_39205 = (state_39241[(9)]);
var inst_39209__$1 = f.call(null,inst_39205);
var inst_39210 = cljs.core._EQ_.call(null,inst_39209__$1,inst_39202);
var inst_39211 = cljs.core.keyword_identical_QMARK_.call(null,inst_39202,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39212 = (inst_39210) || (inst_39211);
var state_39241__$1 = (function (){var statearr_39255 = state_39241;
(statearr_39255[(10)] = inst_39209__$1);

return statearr_39255;
})();
if(cljs.core.truth_(inst_39212)){
var statearr_39256_39285 = state_39241__$1;
(statearr_39256_39285[(1)] = (8));

} else {
var statearr_39257_39286 = state_39241__$1;
(statearr_39257_39286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (14))){
var inst_39234 = (state_39241[(2)]);
var inst_39235 = cljs.core.async.close_BANG_.call(null,out);
var state_39241__$1 = (function (){var statearr_39259 = state_39241;
(statearr_39259[(13)] = inst_39234);

return statearr_39259;
})();
var statearr_39260_39287 = state_39241__$1;
(statearr_39260_39287[(2)] = inst_39235);

(statearr_39260_39287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (10))){
var inst_39224 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39261_39288 = state_39241__$1;
(statearr_39261_39288[(2)] = inst_39224);

(statearr_39261_39288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (8))){
var inst_39209 = (state_39241[(10)]);
var inst_39205 = (state_39241[(9)]);
var inst_39201 = (state_39241[(8)]);
var inst_39214 = inst_39201.push(inst_39205);
var tmp39258 = inst_39201;
var inst_39201__$1 = tmp39258;
var inst_39202 = inst_39209;
var state_39241__$1 = (function (){var statearr_39262 = state_39241;
(statearr_39262[(7)] = inst_39202);

(statearr_39262[(8)] = inst_39201__$1);

(statearr_39262[(14)] = inst_39214);

return statearr_39262;
})();
var statearr_39263_39289 = state_39241__$1;
(statearr_39263_39289[(2)] = null);

(statearr_39263_39289[(1)] = (2));


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
});})(c__20694__auto___39275,out))
;
return ((function (switch__20629__auto__,c__20694__auto___39275,out){
return (function() {
var cljs$core$async$state_machine__20630__auto__ = null;
var cljs$core$async$state_machine__20630__auto____0 = (function (){
var statearr_39267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39267[(0)] = cljs$core$async$state_machine__20630__auto__);

(statearr_39267[(1)] = (1));

return statearr_39267;
});
var cljs$core$async$state_machine__20630__auto____1 = (function (state_39241){
while(true){
var ret_value__20631__auto__ = (function (){try{while(true){
var result__20632__auto__ = switch__20629__auto__.call(null,state_39241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20632__auto__;
}
break;
}
}catch (e39268){if((e39268 instanceof Object)){
var ex__20633__auto__ = e39268;
var statearr_39269_39290 = state_39241;
(statearr_39269_39290[(5)] = ex__20633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39291 = state_39241;
state_39241 = G__39291;
continue;
} else {
return ret_value__20631__auto__;
}
break;
}
});
cljs$core$async$state_machine__20630__auto__ = function(state_39241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20630__auto____1.call(this,state_39241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20630__auto____0;
cljs$core$async$state_machine__20630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20630__auto____1;
return cljs$core$async$state_machine__20630__auto__;
})()
;})(switch__20629__auto__,c__20694__auto___39275,out))
})();
var state__20696__auto__ = (function (){var statearr_39270 = f__20695__auto__.call(null);
(statearr_39270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20694__auto___39275);

return statearr_39270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20696__auto__);
});})(c__20694__auto___39275,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map