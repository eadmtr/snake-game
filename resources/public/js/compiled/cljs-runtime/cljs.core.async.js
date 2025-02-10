goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72269 = (function (f,blockable,meta72270){
this.f = f;
this.blockable = blockable;
this.meta72270 = meta72270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72271,meta72270__$1){
var self__ = this;
var _72271__$1 = this;
return (new cljs.core.async.t_cljs$core$async72269(self__.f,self__.blockable,meta72270__$1));
}));

(cljs.core.async.t_cljs$core$async72269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72271){
var self__ = this;
var _72271__$1 = this;
return self__.meta72270;
}));

(cljs.core.async.t_cljs$core$async72269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async72269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async72269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta72270","meta72270",-1493278834,null)], null);
}));

(cljs.core.async.t_cljs$core$async72269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72269");

(cljs.core.async.t_cljs$core$async72269.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72269.
 */
cljs.core.async.__GT_t_cljs$core$async72269 = (function cljs$core$async$__GT_t_cljs$core$async72269(f,blockable,meta72270){
return (new cljs.core.async.t_cljs$core$async72269(f,blockable,meta72270));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__72268 = arguments.length;
switch (G__72268) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async72269(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__72279 = arguments.length;
switch (G__72279) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__72283 = arguments.length;
switch (G__72283) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__72288 = arguments.length;
switch (G__72288) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_75268 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75268) : fn1.call(null,val_75268));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_75268) : fn1.call(null,val_75268));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__72291 = arguments.length;
switch (G__72291) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___75280 = n;
var x_75281 = (0);
while(true){
if((x_75281 < n__5636__auto___75280)){
(a[x_75281] = x_75281);

var G__75282 = (x_75281 + (1));
x_75281 = G__75282;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72300 = (function (flag,meta72301){
this.flag = flag;
this.meta72301 = meta72301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72302,meta72301__$1){
var self__ = this;
var _72302__$1 = this;
return (new cljs.core.async.t_cljs$core$async72300(self__.flag,meta72301__$1));
}));

(cljs.core.async.t_cljs$core$async72300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72302){
var self__ = this;
var _72302__$1 = this;
return self__.meta72301;
}));

(cljs.core.async.t_cljs$core$async72300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async72300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta72301","meta72301",617584615,null)], null);
}));

(cljs.core.async.t_cljs$core$async72300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72300");

(cljs.core.async.t_cljs$core$async72300.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72300.
 */
cljs.core.async.__GT_t_cljs$core$async72300 = (function cljs$core$async$__GT_t_cljs$core$async72300(flag,meta72301){
return (new cljs.core.async.t_cljs$core$async72300(flag,meta72301));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async72300(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72307 = (function (flag,cb,meta72308){
this.flag = flag;
this.cb = cb;
this.meta72308 = meta72308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72309,meta72308__$1){
var self__ = this;
var _72309__$1 = this;
return (new cljs.core.async.t_cljs$core$async72307(self__.flag,self__.cb,meta72308__$1));
}));

(cljs.core.async.t_cljs$core$async72307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72309){
var self__ = this;
var _72309__$1 = this;
return self__.meta72308;
}));

(cljs.core.async.t_cljs$core$async72307.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async72307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async72307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta72308","meta72308",99029633,null)], null);
}));

(cljs.core.async.t_cljs$core$async72307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72307");

(cljs.core.async.t_cljs$core$async72307.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72307.
 */
cljs.core.async.__GT_t_cljs$core$async72307 = (function cljs$core$async$__GT_t_cljs$core$async72307(flag,cb,meta72308){
return (new cljs.core.async.t_cljs$core$async72307(flag,cb,meta72308));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async72307(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__72315_SHARP_){
var G__72320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72315_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72320) : fret.call(null,G__72320));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__72316_SHARP_){
var G__72321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__72316_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__72321) : fret.call(null,G__72321));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__75301 = (i + (1));
i = G__75301;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___75302 = arguments.length;
var i__5770__auto___75303 = (0);
while(true){
if((i__5770__auto___75303 < len__5769__auto___75302)){
args__5775__auto__.push((arguments[i__5770__auto___75303]));

var G__75305 = (i__5770__auto___75303 + (1));
i__5770__auto___75303 = G__75305;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__72327){
var map__72328 = p__72327;
var map__72328__$1 = cljs.core.__destructure_map(map__72328);
var opts = map__72328__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq72324){
var G__72326 = cljs.core.first(seq72324);
var seq72324__$1 = cljs.core.next(seq72324);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72326,seq72324__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__72342 = arguments.length;
switch (G__72342) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21535__auto___75313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72368){
var state_val_72369 = (state_72368[(1)]);
if((state_val_72369 === (7))){
var inst_72364 = (state_72368[(2)]);
var state_72368__$1 = state_72368;
var statearr_72370_75314 = state_72368__$1;
(statearr_72370_75314[(2)] = inst_72364);

(statearr_72370_75314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (1))){
var state_72368__$1 = state_72368;
var statearr_72371_75315 = state_72368__$1;
(statearr_72371_75315[(2)] = null);

(statearr_72371_75315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (4))){
var inst_72345 = (state_72368[(7)]);
var inst_72345__$1 = (state_72368[(2)]);
var inst_72346 = (inst_72345__$1 == null);
var state_72368__$1 = (function (){var statearr_72372 = state_72368;
(statearr_72372[(7)] = inst_72345__$1);

return statearr_72372;
})();
if(cljs.core.truth_(inst_72346)){
var statearr_72373_75316 = state_72368__$1;
(statearr_72373_75316[(1)] = (5));

} else {
var statearr_72374_75317 = state_72368__$1;
(statearr_72374_75317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (13))){
var state_72368__$1 = state_72368;
var statearr_72375_75318 = state_72368__$1;
(statearr_72375_75318[(2)] = null);

(statearr_72375_75318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (6))){
var inst_72345 = (state_72368[(7)]);
var state_72368__$1 = state_72368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72368__$1,(11),to,inst_72345);
} else {
if((state_val_72369 === (3))){
var inst_72366 = (state_72368[(2)]);
var state_72368__$1 = state_72368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72368__$1,inst_72366);
} else {
if((state_val_72369 === (12))){
var state_72368__$1 = state_72368;
var statearr_72376_75320 = state_72368__$1;
(statearr_72376_75320[(2)] = null);

(statearr_72376_75320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (2))){
var state_72368__$1 = state_72368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72368__$1,(4),from);
} else {
if((state_val_72369 === (11))){
var inst_72355 = (state_72368[(2)]);
var state_72368__$1 = state_72368;
if(cljs.core.truth_(inst_72355)){
var statearr_72377_75321 = state_72368__$1;
(statearr_72377_75321[(1)] = (12));

} else {
var statearr_72379_75323 = state_72368__$1;
(statearr_72379_75323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (9))){
var state_72368__$1 = state_72368;
var statearr_72381_75324 = state_72368__$1;
(statearr_72381_75324[(2)] = null);

(statearr_72381_75324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (5))){
var state_72368__$1 = state_72368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72382_75325 = state_72368__$1;
(statearr_72382_75325[(1)] = (8));

} else {
var statearr_72383_75326 = state_72368__$1;
(statearr_72383_75326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (14))){
var inst_72360 = (state_72368[(2)]);
var state_72368__$1 = state_72368;
var statearr_72384_75327 = state_72368__$1;
(statearr_72384_75327[(2)] = inst_72360);

(statearr_72384_75327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (10))){
var inst_72352 = (state_72368[(2)]);
var state_72368__$1 = state_72368;
var statearr_72385_75328 = state_72368__$1;
(statearr_72385_75328[(2)] = inst_72352);

(statearr_72385_75328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72369 === (8))){
var inst_72349 = cljs.core.async.close_BANG_(to);
var state_72368__$1 = state_72368;
var statearr_72386_75330 = state_72368__$1;
(statearr_72386_75330[(2)] = inst_72349);

(statearr_72386_75330[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_72387 = [null,null,null,null,null,null,null,null];
(statearr_72387[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_72387[(1)] = (1));

return statearr_72387;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_72368){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72368);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72388){var ex__21351__auto__ = e72388;
var statearr_72389_75331 = state_72368;
(statearr_72389_75331[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72368[(4)]))){
var statearr_72390_75332 = state_72368;
(statearr_72390_75332[(1)] = cljs.core.first((state_72368[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75338 = state_72368;
state_72368 = G__75338;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_72368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_72368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72391 = f__21537__auto__();
(statearr_72391[(6)] = c__21535__auto___75313);

return statearr_72391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__72393){
var vec__72395 = p__72393;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72395,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72395,(1),null);
var job = vec__72395;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21535__auto___75342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72402){
var state_val_72403 = (state_72402[(1)]);
if((state_val_72403 === (1))){
var state_72402__$1 = state_72402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72402__$1,(2),res,v);
} else {
if((state_val_72403 === (2))){
var inst_72399 = (state_72402[(2)]);
var inst_72400 = cljs.core.async.close_BANG_(res);
var state_72402__$1 = (function (){var statearr_72404 = state_72402;
(statearr_72404[(7)] = inst_72399);

return statearr_72404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72402__$1,inst_72400);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_72405 = [null,null,null,null,null,null,null,null];
(statearr_72405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_72405[(1)] = (1));

return statearr_72405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_72402){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72402);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72406){var ex__21351__auto__ = e72406;
var statearr_72407_75345 = state_72402;
(statearr_72407_75345[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72402[(4)]))){
var statearr_72408_75347 = state_72402;
(statearr_72408_75347[(1)] = cljs.core.first((state_72402[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75348 = state_72402;
state_72402 = G__75348;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_72402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_72402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72409 = f__21537__auto__();
(statearr_72409[(6)] = c__21535__auto___75342);

return statearr_72409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__72410){
var vec__72411 = p__72410;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72411,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72411,(1),null);
var job = vec__72411;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___75351 = n;
var __75352 = (0);
while(true){
if((__75352 < n__5636__auto___75351)){
var G__72414_75353 = type;
var G__72414_75354__$1 = (((G__72414_75353 instanceof cljs.core.Keyword))?G__72414_75353.fqn:null);
switch (G__72414_75354__$1) {
case "compute":
var c__21535__auto___75357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75352,c__21535__auto___75357,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async){
return (function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = ((function (__75352,c__21535__auto___75357,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async){
return (function (state_72427){
var state_val_72428 = (state_72427[(1)]);
if((state_val_72428 === (1))){
var state_72427__$1 = state_72427;
var statearr_72429_75360 = state_72427__$1;
(statearr_72429_75360[(2)] = null);

(statearr_72429_75360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (2))){
var state_72427__$1 = state_72427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72427__$1,(4),jobs);
} else {
if((state_val_72428 === (3))){
var inst_72425 = (state_72427[(2)]);
var state_72427__$1 = state_72427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72427__$1,inst_72425);
} else {
if((state_val_72428 === (4))){
var inst_72417 = (state_72427[(2)]);
var inst_72418 = process__$1(inst_72417);
var state_72427__$1 = state_72427;
if(cljs.core.truth_(inst_72418)){
var statearr_72430_75361 = state_72427__$1;
(statearr_72430_75361[(1)] = (5));

} else {
var statearr_72431_75362 = state_72427__$1;
(statearr_72431_75362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (5))){
var state_72427__$1 = state_72427;
var statearr_72432_75363 = state_72427__$1;
(statearr_72432_75363[(2)] = null);

(statearr_72432_75363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (6))){
var state_72427__$1 = state_72427;
var statearr_72433_75364 = state_72427__$1;
(statearr_72433_75364[(2)] = null);

(statearr_72433_75364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72428 === (7))){
var inst_72423 = (state_72427[(2)]);
var state_72427__$1 = state_72427;
var statearr_72434_75372 = state_72427__$1;
(statearr_72434_75372[(2)] = inst_72423);

(statearr_72434_75372[(1)] = (3));


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
});})(__75352,c__21535__auto___75357,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async))
;
return ((function (__75352,switch__21347__auto__,c__21535__auto___75357,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_72435 = [null,null,null,null,null,null,null];
(statearr_72435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_72435[(1)] = (1));

return statearr_72435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_72427){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72427);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72436){var ex__21351__auto__ = e72436;
var statearr_72437_75390 = state_72427;
(statearr_72437_75390[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72427[(4)]))){
var statearr_72438_75391 = state_72427;
(statearr_72438_75391[(1)] = cljs.core.first((state_72427[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75392 = state_72427;
state_72427 = G__75392;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_72427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_72427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
;})(__75352,switch__21347__auto__,c__21535__auto___75357,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async))
})();
var state__21538__auto__ = (function (){var statearr_72441 = f__21537__auto__();
(statearr_72441[(6)] = c__21535__auto___75357);

return statearr_72441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
});})(__75352,c__21535__auto___75357,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async))
);


break;
case "async":
var c__21535__auto___75401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__75352,c__21535__auto___75401,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async){
return (function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = ((function (__75352,c__21535__auto___75401,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async){
return (function (state_72454){
var state_val_72455 = (state_72454[(1)]);
if((state_val_72455 === (1))){
var state_72454__$1 = state_72454;
var statearr_72456_75403 = state_72454__$1;
(statearr_72456_75403[(2)] = null);

(statearr_72456_75403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72455 === (2))){
var state_72454__$1 = state_72454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72454__$1,(4),jobs);
} else {
if((state_val_72455 === (3))){
var inst_72452 = (state_72454[(2)]);
var state_72454__$1 = state_72454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72454__$1,inst_72452);
} else {
if((state_val_72455 === (4))){
var inst_72444 = (state_72454[(2)]);
var inst_72445 = async(inst_72444);
var state_72454__$1 = state_72454;
if(cljs.core.truth_(inst_72445)){
var statearr_72457_75404 = state_72454__$1;
(statearr_72457_75404[(1)] = (5));

} else {
var statearr_72458_75405 = state_72454__$1;
(statearr_72458_75405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72455 === (5))){
var state_72454__$1 = state_72454;
var statearr_72459_75406 = state_72454__$1;
(statearr_72459_75406[(2)] = null);

(statearr_72459_75406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72455 === (6))){
var state_72454__$1 = state_72454;
var statearr_72460_75407 = state_72454__$1;
(statearr_72460_75407[(2)] = null);

(statearr_72460_75407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72455 === (7))){
var inst_72450 = (state_72454[(2)]);
var state_72454__$1 = state_72454;
var statearr_72463_75408 = state_72454__$1;
(statearr_72463_75408[(2)] = inst_72450);

(statearr_72463_75408[(1)] = (3));


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
});})(__75352,c__21535__auto___75401,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async))
;
return ((function (__75352,switch__21347__auto__,c__21535__auto___75401,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_72464 = [null,null,null,null,null,null,null];
(statearr_72464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_72464[(1)] = (1));

return statearr_72464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_72454){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72454);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72465){var ex__21351__auto__ = e72465;
var statearr_72466_75409 = state_72454;
(statearr_72466_75409[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72454[(4)]))){
var statearr_72467_75410 = state_72454;
(statearr_72467_75410[(1)] = cljs.core.first((state_72454[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75411 = state_72454;
state_72454 = G__75411;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_72454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_72454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
;})(__75352,switch__21347__auto__,c__21535__auto___75401,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async))
})();
var state__21538__auto__ = (function (){var statearr_72472 = f__21537__auto__();
(statearr_72472[(6)] = c__21535__auto___75401);

return statearr_72472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
});})(__75352,c__21535__auto___75401,G__72414_75353,G__72414_75354__$1,n__5636__auto___75351,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72414_75354__$1)].join('')));

}

var G__75412 = (__75352 + (1));
__75352 = G__75412;
continue;
} else {
}
break;
}

var c__21535__auto___75413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72495){
var state_val_72496 = (state_72495[(1)]);
if((state_val_72496 === (7))){
var inst_72491 = (state_72495[(2)]);
var state_72495__$1 = state_72495;
var statearr_72498_75414 = state_72495__$1;
(statearr_72498_75414[(2)] = inst_72491);

(statearr_72498_75414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72496 === (1))){
var state_72495__$1 = state_72495;
var statearr_72499_75416 = state_72495__$1;
(statearr_72499_75416[(2)] = null);

(statearr_72499_75416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72496 === (4))){
var inst_72476 = (state_72495[(7)]);
var inst_72476__$1 = (state_72495[(2)]);
var inst_72477 = (inst_72476__$1 == null);
var state_72495__$1 = (function (){var statearr_72504 = state_72495;
(statearr_72504[(7)] = inst_72476__$1);

return statearr_72504;
})();
if(cljs.core.truth_(inst_72477)){
var statearr_72505_75417 = state_72495__$1;
(statearr_72505_75417[(1)] = (5));

} else {
var statearr_72506_75419 = state_72495__$1;
(statearr_72506_75419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72496 === (6))){
var inst_72481 = (state_72495[(8)]);
var inst_72476 = (state_72495[(7)]);
var inst_72481__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_72482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72483 = [inst_72476,inst_72481__$1];
var inst_72484 = (new cljs.core.PersistentVector(null,2,(5),inst_72482,inst_72483,null));
var state_72495__$1 = (function (){var statearr_72507 = state_72495;
(statearr_72507[(8)] = inst_72481__$1);

return statearr_72507;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72495__$1,(8),jobs,inst_72484);
} else {
if((state_val_72496 === (3))){
var inst_72493 = (state_72495[(2)]);
var state_72495__$1 = state_72495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72495__$1,inst_72493);
} else {
if((state_val_72496 === (2))){
var state_72495__$1 = state_72495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72495__$1,(4),from);
} else {
if((state_val_72496 === (9))){
var inst_72488 = (state_72495[(2)]);
var state_72495__$1 = (function (){var statearr_72508 = state_72495;
(statearr_72508[(9)] = inst_72488);

return statearr_72508;
})();
var statearr_72509_75420 = state_72495__$1;
(statearr_72509_75420[(2)] = null);

(statearr_72509_75420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72496 === (5))){
var inst_72479 = cljs.core.async.close_BANG_(jobs);
var state_72495__$1 = state_72495;
var statearr_72510_75421 = state_72495__$1;
(statearr_72510_75421[(2)] = inst_72479);

(statearr_72510_75421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72496 === (8))){
var inst_72481 = (state_72495[(8)]);
var inst_72486 = (state_72495[(2)]);
var state_72495__$1 = (function (){var statearr_72511 = state_72495;
(statearr_72511[(10)] = inst_72486);

return statearr_72511;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72495__$1,(9),results,inst_72481);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_72512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_72512[(1)] = (1));

return statearr_72512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_72495){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72495);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72513){var ex__21351__auto__ = e72513;
var statearr_72514_75422 = state_72495;
(statearr_72514_75422[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72495[(4)]))){
var statearr_72515_75423 = state_72495;
(statearr_72515_75423[(1)] = cljs.core.first((state_72495[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75424 = state_72495;
state_72495 = G__75424;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_72495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_72495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72516 = f__21537__auto__();
(statearr_72516[(6)] = c__21535__auto___75413);

return statearr_72516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


var c__21535__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72555){
var state_val_72556 = (state_72555[(1)]);
if((state_val_72556 === (7))){
var inst_72551 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72560_75430 = state_72555__$1;
(statearr_72560_75430[(2)] = inst_72551);

(statearr_72560_75430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (20))){
var state_72555__$1 = state_72555;
var statearr_72561_75434 = state_72555__$1;
(statearr_72561_75434[(2)] = null);

(statearr_72561_75434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (1))){
var state_72555__$1 = state_72555;
var statearr_72562_75435 = state_72555__$1;
(statearr_72562_75435[(2)] = null);

(statearr_72562_75435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (4))){
var inst_72519 = (state_72555[(7)]);
var inst_72519__$1 = (state_72555[(2)]);
var inst_72520 = (inst_72519__$1 == null);
var state_72555__$1 = (function (){var statearr_72563 = state_72555;
(statearr_72563[(7)] = inst_72519__$1);

return statearr_72563;
})();
if(cljs.core.truth_(inst_72520)){
var statearr_72564_75439 = state_72555__$1;
(statearr_72564_75439[(1)] = (5));

} else {
var statearr_72565_75441 = state_72555__$1;
(statearr_72565_75441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (15))){
var inst_72532 = (state_72555[(8)]);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72555__$1,(18),to,inst_72532);
} else {
if((state_val_72556 === (21))){
var inst_72545 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72566_75442 = state_72555__$1;
(statearr_72566_75442[(2)] = inst_72545);

(statearr_72566_75442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (13))){
var inst_72547 = (state_72555[(2)]);
var state_72555__$1 = (function (){var statearr_72567 = state_72555;
(statearr_72567[(9)] = inst_72547);

return statearr_72567;
})();
var statearr_72568_75443 = state_72555__$1;
(statearr_72568_75443[(2)] = null);

(statearr_72568_75443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (6))){
var inst_72519 = (state_72555[(7)]);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72555__$1,(11),inst_72519);
} else {
if((state_val_72556 === (17))){
var inst_72540 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
if(cljs.core.truth_(inst_72540)){
var statearr_72569_75444 = state_72555__$1;
(statearr_72569_75444[(1)] = (19));

} else {
var statearr_72570_75445 = state_72555__$1;
(statearr_72570_75445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (3))){
var inst_72553 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72555__$1,inst_72553);
} else {
if((state_val_72556 === (12))){
var inst_72529 = (state_72555[(10)]);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72555__$1,(14),inst_72529);
} else {
if((state_val_72556 === (2))){
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72555__$1,(4),results);
} else {
if((state_val_72556 === (19))){
var state_72555__$1 = state_72555;
var statearr_72572_75446 = state_72555__$1;
(statearr_72572_75446[(2)] = null);

(statearr_72572_75446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (11))){
var inst_72529 = (state_72555[(2)]);
var state_72555__$1 = (function (){var statearr_72573 = state_72555;
(statearr_72573[(10)] = inst_72529);

return statearr_72573;
})();
var statearr_72574_75447 = state_72555__$1;
(statearr_72574_75447[(2)] = null);

(statearr_72574_75447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (9))){
var state_72555__$1 = state_72555;
var statearr_72575_75448 = state_72555__$1;
(statearr_72575_75448[(2)] = null);

(statearr_72575_75448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (5))){
var state_72555__$1 = state_72555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72576_75449 = state_72555__$1;
(statearr_72576_75449[(1)] = (8));

} else {
var statearr_72577_75450 = state_72555__$1;
(statearr_72577_75450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (14))){
var inst_72534 = (state_72555[(11)]);
var inst_72532 = (state_72555[(8)]);
var inst_72532__$1 = (state_72555[(2)]);
var inst_72533 = (inst_72532__$1 == null);
var inst_72534__$1 = cljs.core.not(inst_72533);
var state_72555__$1 = (function (){var statearr_72578 = state_72555;
(statearr_72578[(11)] = inst_72534__$1);

(statearr_72578[(8)] = inst_72532__$1);

return statearr_72578;
})();
if(inst_72534__$1){
var statearr_72579_75456 = state_72555__$1;
(statearr_72579_75456[(1)] = (15));

} else {
var statearr_72580_75458 = state_72555__$1;
(statearr_72580_75458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (16))){
var inst_72534 = (state_72555[(11)]);
var state_72555__$1 = state_72555;
var statearr_72581_75459 = state_72555__$1;
(statearr_72581_75459[(2)] = inst_72534);

(statearr_72581_75459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (10))){
var inst_72526 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72582_75460 = state_72555__$1;
(statearr_72582_75460[(2)] = inst_72526);

(statearr_72582_75460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (18))){
var inst_72537 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72583_75461 = state_72555__$1;
(statearr_72583_75461[(2)] = inst_72537);

(statearr_72583_75461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (8))){
var inst_72523 = cljs.core.async.close_BANG_(to);
var state_72555__$1 = state_72555;
var statearr_72584_75462 = state_72555__$1;
(statearr_72584_75462[(2)] = inst_72523);

(statearr_72584_75462[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_72585 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_72585[(1)] = (1));

return statearr_72585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_72555){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72555);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72586){var ex__21351__auto__ = e72586;
var statearr_72587_75471 = state_72555;
(statearr_72587_75471[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72555[(4)]))){
var statearr_72588_75472 = state_72555;
(statearr_72588_75472[(1)] = cljs.core.first((state_72555[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75473 = state_72555;
state_72555 = G__75473;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_72555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_72555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72589 = f__21537__auto__();
(statearr_72589[(6)] = c__21535__auto__);

return statearr_72589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

return c__21535__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__72591 = arguments.length;
switch (G__72591) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__72593 = arguments.length;
switch (G__72593) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__72595 = arguments.length;
switch (G__72595) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21535__auto___75502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72623){
var state_val_72624 = (state_72623[(1)]);
if((state_val_72624 === (7))){
var inst_72619 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
var statearr_72625_75503 = state_72623__$1;
(statearr_72625_75503[(2)] = inst_72619);

(statearr_72625_75503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (1))){
var state_72623__$1 = state_72623;
var statearr_72626_75504 = state_72623__$1;
(statearr_72626_75504[(2)] = null);

(statearr_72626_75504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (4))){
var inst_72600 = (state_72623[(7)]);
var inst_72600__$1 = (state_72623[(2)]);
var inst_72601 = (inst_72600__$1 == null);
var state_72623__$1 = (function (){var statearr_72627 = state_72623;
(statearr_72627[(7)] = inst_72600__$1);

return statearr_72627;
})();
if(cljs.core.truth_(inst_72601)){
var statearr_72628_75506 = state_72623__$1;
(statearr_72628_75506[(1)] = (5));

} else {
var statearr_72629_75507 = state_72623__$1;
(statearr_72629_75507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (13))){
var state_72623__$1 = state_72623;
var statearr_72630_75508 = state_72623__$1;
(statearr_72630_75508[(2)] = null);

(statearr_72630_75508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (6))){
var inst_72600 = (state_72623[(7)]);
var inst_72606 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_72600) : p.call(null,inst_72600));
var state_72623__$1 = state_72623;
if(cljs.core.truth_(inst_72606)){
var statearr_72633_75513 = state_72623__$1;
(statearr_72633_75513[(1)] = (9));

} else {
var statearr_72634_75514 = state_72623__$1;
(statearr_72634_75514[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (3))){
var inst_72621 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72623__$1,inst_72621);
} else {
if((state_val_72624 === (12))){
var state_72623__$1 = state_72623;
var statearr_72635_75515 = state_72623__$1;
(statearr_72635_75515[(2)] = null);

(statearr_72635_75515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (2))){
var state_72623__$1 = state_72623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72623__$1,(4),ch);
} else {
if((state_val_72624 === (11))){
var inst_72600 = (state_72623[(7)]);
var inst_72610 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72623__$1,(8),inst_72610,inst_72600);
} else {
if((state_val_72624 === (9))){
var state_72623__$1 = state_72623;
var statearr_72636_75522 = state_72623__$1;
(statearr_72636_75522[(2)] = tc);

(statearr_72636_75522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (5))){
var inst_72603 = cljs.core.async.close_BANG_(tc);
var inst_72604 = cljs.core.async.close_BANG_(fc);
var state_72623__$1 = (function (){var statearr_72637 = state_72623;
(statearr_72637[(8)] = inst_72603);

return statearr_72637;
})();
var statearr_72638_75523 = state_72623__$1;
(statearr_72638_75523[(2)] = inst_72604);

(statearr_72638_75523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (14))){
var inst_72617 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
var statearr_72639_75524 = state_72623__$1;
(statearr_72639_75524[(2)] = inst_72617);

(statearr_72639_75524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (10))){
var state_72623__$1 = state_72623;
var statearr_72640_75525 = state_72623__$1;
(statearr_72640_75525[(2)] = fc);

(statearr_72640_75525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (8))){
var inst_72612 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
if(cljs.core.truth_(inst_72612)){
var statearr_72641_75526 = state_72623__$1;
(statearr_72641_75526[(1)] = (12));

} else {
var statearr_72642_75527 = state_72623__$1;
(statearr_72642_75527[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_72643 = [null,null,null,null,null,null,null,null,null];
(statearr_72643[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_72643[(1)] = (1));

return statearr_72643;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_72623){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72623);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72647){var ex__21351__auto__ = e72647;
var statearr_72648_75528 = state_72623;
(statearr_72648_75528[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72623[(4)]))){
var statearr_72649_75534 = state_72623;
(statearr_72649_75534[(1)] = cljs.core.first((state_72623[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75535 = state_72623;
state_72623 = G__75535;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_72623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_72623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72650 = f__21537__auto__();
(statearr_72650[(6)] = c__21535__auto___75502);

return statearr_72650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21535__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72680){
var state_val_72681 = (state_72680[(1)]);
if((state_val_72681 === (7))){
var inst_72675 = (state_72680[(2)]);
var state_72680__$1 = state_72680;
var statearr_72691_75536 = state_72680__$1;
(statearr_72691_75536[(2)] = inst_72675);

(statearr_72691_75536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72681 === (1))){
var inst_72658 = init;
var inst_72659 = inst_72658;
var state_72680__$1 = (function (){var statearr_72692 = state_72680;
(statearr_72692[(7)] = inst_72659);

return statearr_72692;
})();
var statearr_72694_75537 = state_72680__$1;
(statearr_72694_75537[(2)] = null);

(statearr_72694_75537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72681 === (4))){
var inst_72662 = (state_72680[(8)]);
var inst_72662__$1 = (state_72680[(2)]);
var inst_72663 = (inst_72662__$1 == null);
var state_72680__$1 = (function (){var statearr_72695 = state_72680;
(statearr_72695[(8)] = inst_72662__$1);

return statearr_72695;
})();
if(cljs.core.truth_(inst_72663)){
var statearr_72696_75538 = state_72680__$1;
(statearr_72696_75538[(1)] = (5));

} else {
var statearr_72700_75539 = state_72680__$1;
(statearr_72700_75539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72681 === (6))){
var inst_72666 = (state_72680[(9)]);
var inst_72659 = (state_72680[(7)]);
var inst_72662 = (state_72680[(8)]);
var inst_72666__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_72659,inst_72662) : f.call(null,inst_72659,inst_72662));
var inst_72667 = cljs.core.reduced_QMARK_(inst_72666__$1);
var state_72680__$1 = (function (){var statearr_72704 = state_72680;
(statearr_72704[(9)] = inst_72666__$1);

return statearr_72704;
})();
if(inst_72667){
var statearr_72705_75540 = state_72680__$1;
(statearr_72705_75540[(1)] = (8));

} else {
var statearr_72706_75541 = state_72680__$1;
(statearr_72706_75541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72681 === (3))){
var inst_72677 = (state_72680[(2)]);
var state_72680__$1 = state_72680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72680__$1,inst_72677);
} else {
if((state_val_72681 === (2))){
var state_72680__$1 = state_72680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72680__$1,(4),ch);
} else {
if((state_val_72681 === (9))){
var inst_72666 = (state_72680[(9)]);
var inst_72659 = inst_72666;
var state_72680__$1 = (function (){var statearr_72710 = state_72680;
(statearr_72710[(7)] = inst_72659);

return statearr_72710;
})();
var statearr_72711_75542 = state_72680__$1;
(statearr_72711_75542[(2)] = null);

(statearr_72711_75542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72681 === (5))){
var inst_72659 = (state_72680[(7)]);
var state_72680__$1 = state_72680;
var statearr_72712_75543 = state_72680__$1;
(statearr_72712_75543[(2)] = inst_72659);

(statearr_72712_75543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72681 === (10))){
var inst_72673 = (state_72680[(2)]);
var state_72680__$1 = state_72680;
var statearr_72713_75544 = state_72680__$1;
(statearr_72713_75544[(2)] = inst_72673);

(statearr_72713_75544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72681 === (8))){
var inst_72666 = (state_72680[(9)]);
var inst_72669 = cljs.core.deref(inst_72666);
var state_72680__$1 = state_72680;
var statearr_72714_75545 = state_72680__$1;
(statearr_72714_75545[(2)] = inst_72669);

(statearr_72714_75545[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__21348__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21348__auto____0 = (function (){
var statearr_72715 = [null,null,null,null,null,null,null,null,null,null];
(statearr_72715[(0)] = cljs$core$async$reduce_$_state_machine__21348__auto__);

(statearr_72715[(1)] = (1));

return statearr_72715;
});
var cljs$core$async$reduce_$_state_machine__21348__auto____1 = (function (state_72680){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72680);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72716){var ex__21351__auto__ = e72716;
var statearr_72717_75546 = state_72680;
(statearr_72717_75546[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72680[(4)]))){
var statearr_72719_75547 = state_72680;
(statearr_72719_75547[(1)] = cljs.core.first((state_72680[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75548 = state_72680;
state_72680 = G__75548;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21348__auto__ = function(state_72680){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21348__auto____1.call(this,state_72680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21348__auto____0;
cljs$core$async$reduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21348__auto____1;
return cljs$core$async$reduce_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72726 = f__21537__auto__();
(statearr_72726[(6)] = c__21535__auto__);

return statearr_72726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

return c__21535__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21535__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72733){
var state_val_72734 = (state_72733[(1)]);
if((state_val_72734 === (1))){
var inst_72728 = cljs.core.async.reduce(f__$1,init,ch);
var state_72733__$1 = state_72733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72733__$1,(2),inst_72728);
} else {
if((state_val_72734 === (2))){
var inst_72730 = (state_72733[(2)]);
var inst_72731 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_72730) : f__$1.call(null,inst_72730));
var state_72733__$1 = state_72733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72733__$1,inst_72731);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21348__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21348__auto____0 = (function (){
var statearr_72739 = [null,null,null,null,null,null,null];
(statearr_72739[(0)] = cljs$core$async$transduce_$_state_machine__21348__auto__);

(statearr_72739[(1)] = (1));

return statearr_72739;
});
var cljs$core$async$transduce_$_state_machine__21348__auto____1 = (function (state_72733){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72733);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72740){var ex__21351__auto__ = e72740;
var statearr_72741_75549 = state_72733;
(statearr_72741_75549[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72733[(4)]))){
var statearr_72742_75550 = state_72733;
(statearr_72742_75550[(1)] = cljs.core.first((state_72733[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75551 = state_72733;
state_72733 = G__75551;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21348__auto__ = function(state_72733){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21348__auto____1.call(this,state_72733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21348__auto____0;
cljs$core$async$transduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21348__auto____1;
return cljs$core$async$transduce_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72744 = f__21537__auto__();
(statearr_72744[(6)] = c__21535__auto__);

return statearr_72744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

return c__21535__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__72746 = arguments.length;
switch (G__72746) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21535__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72771){
var state_val_72772 = (state_72771[(1)]);
if((state_val_72772 === (7))){
var inst_72753 = (state_72771[(2)]);
var state_72771__$1 = state_72771;
var statearr_72777_75553 = state_72771__$1;
(statearr_72777_75553[(2)] = inst_72753);

(statearr_72777_75553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (1))){
var inst_72747 = cljs.core.seq(coll);
var inst_72748 = inst_72747;
var state_72771__$1 = (function (){var statearr_72781 = state_72771;
(statearr_72781[(7)] = inst_72748);

return statearr_72781;
})();
var statearr_72782_75554 = state_72771__$1;
(statearr_72782_75554[(2)] = null);

(statearr_72782_75554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (4))){
var inst_72748 = (state_72771[(7)]);
var inst_72751 = cljs.core.first(inst_72748);
var state_72771__$1 = state_72771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72771__$1,(7),ch,inst_72751);
} else {
if((state_val_72772 === (13))){
var inst_72765 = (state_72771[(2)]);
var state_72771__$1 = state_72771;
var statearr_72785_75556 = state_72771__$1;
(statearr_72785_75556[(2)] = inst_72765);

(statearr_72785_75556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (6))){
var inst_72756 = (state_72771[(2)]);
var state_72771__$1 = state_72771;
if(cljs.core.truth_(inst_72756)){
var statearr_72787_75557 = state_72771__$1;
(statearr_72787_75557[(1)] = (8));

} else {
var statearr_72788_75558 = state_72771__$1;
(statearr_72788_75558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (3))){
var inst_72769 = (state_72771[(2)]);
var state_72771__$1 = state_72771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72771__$1,inst_72769);
} else {
if((state_val_72772 === (12))){
var state_72771__$1 = state_72771;
var statearr_72791_75560 = state_72771__$1;
(statearr_72791_75560[(2)] = null);

(statearr_72791_75560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (2))){
var inst_72748 = (state_72771[(7)]);
var state_72771__$1 = state_72771;
if(cljs.core.truth_(inst_72748)){
var statearr_72793_75561 = state_72771__$1;
(statearr_72793_75561[(1)] = (4));

} else {
var statearr_72794_75562 = state_72771__$1;
(statearr_72794_75562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (11))){
var inst_72762 = cljs.core.async.close_BANG_(ch);
var state_72771__$1 = state_72771;
var statearr_72795_75563 = state_72771__$1;
(statearr_72795_75563[(2)] = inst_72762);

(statearr_72795_75563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (9))){
var state_72771__$1 = state_72771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_72796_75564 = state_72771__$1;
(statearr_72796_75564[(1)] = (11));

} else {
var statearr_72797_75566 = state_72771__$1;
(statearr_72797_75566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (5))){
var inst_72748 = (state_72771[(7)]);
var state_72771__$1 = state_72771;
var statearr_72798_75567 = state_72771__$1;
(statearr_72798_75567[(2)] = inst_72748);

(statearr_72798_75567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (10))){
var inst_72767 = (state_72771[(2)]);
var state_72771__$1 = state_72771;
var statearr_72801_75568 = state_72771__$1;
(statearr_72801_75568[(2)] = inst_72767);

(statearr_72801_75568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72772 === (8))){
var inst_72748 = (state_72771[(7)]);
var inst_72758 = cljs.core.next(inst_72748);
var inst_72748__$1 = inst_72758;
var state_72771__$1 = (function (){var statearr_72803 = state_72771;
(statearr_72803[(7)] = inst_72748__$1);

return statearr_72803;
})();
var statearr_72804_75569 = state_72771__$1;
(statearr_72804_75569[(2)] = null);

(statearr_72804_75569[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_72805 = [null,null,null,null,null,null,null,null];
(statearr_72805[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_72805[(1)] = (1));

return statearr_72805;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_72771){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72771);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e72806){var ex__21351__auto__ = e72806;
var statearr_72807_75570 = state_72771;
(statearr_72807_75570[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72771[(4)]))){
var statearr_72808_75571 = state_72771;
(statearr_72808_75571[(1)] = cljs.core.first((state_72771[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75572 = state_72771;
state_72771 = G__75572;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_72771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_72771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_72812 = f__21537__auto__();
(statearr_72812[(6)] = c__21535__auto__);

return statearr_72812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

return c__21535__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__72817 = arguments.length;
switch (G__72817) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_75575 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_75575(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_75578 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_75578(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_75583 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_75583(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_75592 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_75592(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72846 = (function (ch,cs,meta72847){
this.ch = ch;
this.cs = cs;
this.meta72847 = meta72847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72848,meta72847__$1){
var self__ = this;
var _72848__$1 = this;
return (new cljs.core.async.t_cljs$core$async72846(self__.ch,self__.cs,meta72847__$1));
}));

(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72848){
var self__ = this;
var _72848__$1 = this;
return self__.meta72847;
}));

(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async72846.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async72846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta72847","meta72847",-1468443487,null)], null);
}));

(cljs.core.async.t_cljs$core$async72846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72846");

(cljs.core.async.t_cljs$core$async72846.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72846.
 */
cljs.core.async.__GT_t_cljs$core$async72846 = (function cljs$core$async$__GT_t_cljs$core$async72846(ch,cs,meta72847){
return (new cljs.core.async.t_cljs$core$async72846(ch,cs,meta72847));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async72846(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21535__auto___75599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_72986){
var state_val_72987 = (state_72986[(1)]);
if((state_val_72987 === (7))){
var inst_72982 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_72990_75601 = state_72986__$1;
(statearr_72990_75601[(2)] = inst_72982);

(statearr_72990_75601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (20))){
var inst_72885 = (state_72986[(7)]);
var inst_72897 = cljs.core.first(inst_72885);
var inst_72898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72897,(0),null);
var inst_72899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72897,(1),null);
var state_72986__$1 = (function (){var statearr_72991 = state_72986;
(statearr_72991[(8)] = inst_72898);

return statearr_72991;
})();
if(cljs.core.truth_(inst_72899)){
var statearr_72992_75606 = state_72986__$1;
(statearr_72992_75606[(1)] = (22));

} else {
var statearr_72993_75607 = state_72986__$1;
(statearr_72993_75607[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (27))){
var inst_72931 = (state_72986[(9)]);
var inst_72936 = (state_72986[(10)]);
var inst_72854 = (state_72986[(11)]);
var inst_72929 = (state_72986[(12)]);
var inst_72936__$1 = cljs.core._nth(inst_72929,inst_72931);
var inst_72937 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_72936__$1,inst_72854,done);
var state_72986__$1 = (function (){var statearr_72996 = state_72986;
(statearr_72996[(10)] = inst_72936__$1);

return statearr_72996;
})();
if(cljs.core.truth_(inst_72937)){
var statearr_72997_75609 = state_72986__$1;
(statearr_72997_75609[(1)] = (30));

} else {
var statearr_72998_75610 = state_72986__$1;
(statearr_72998_75610[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (1))){
var state_72986__$1 = state_72986;
var statearr_72999_75612 = state_72986__$1;
(statearr_72999_75612[(2)] = null);

(statearr_72999_75612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (24))){
var inst_72885 = (state_72986[(7)]);
var inst_72904 = (state_72986[(2)]);
var inst_72905 = cljs.core.next(inst_72885);
var inst_72863 = inst_72905;
var inst_72864 = null;
var inst_72865 = (0);
var inst_72866 = (0);
var state_72986__$1 = (function (){var statearr_73000 = state_72986;
(statearr_73000[(13)] = inst_72864);

(statearr_73000[(14)] = inst_72863);

(statearr_73000[(15)] = inst_72866);

(statearr_73000[(16)] = inst_72904);

(statearr_73000[(17)] = inst_72865);

return statearr_73000;
})();
var statearr_73001_75613 = state_72986__$1;
(statearr_73001_75613[(2)] = null);

(statearr_73001_75613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (39))){
var state_72986__$1 = state_72986;
var statearr_73005_75614 = state_72986__$1;
(statearr_73005_75614[(2)] = null);

(statearr_73005_75614[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (4))){
var inst_72854 = (state_72986[(11)]);
var inst_72854__$1 = (state_72986[(2)]);
var inst_72855 = (inst_72854__$1 == null);
var state_72986__$1 = (function (){var statearr_73008 = state_72986;
(statearr_73008[(11)] = inst_72854__$1);

return statearr_73008;
})();
if(cljs.core.truth_(inst_72855)){
var statearr_73009_75619 = state_72986__$1;
(statearr_73009_75619[(1)] = (5));

} else {
var statearr_73010_75620 = state_72986__$1;
(statearr_73010_75620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (15))){
var inst_72864 = (state_72986[(13)]);
var inst_72863 = (state_72986[(14)]);
var inst_72866 = (state_72986[(15)]);
var inst_72865 = (state_72986[(17)]);
var inst_72881 = (state_72986[(2)]);
var inst_72882 = (inst_72866 + (1));
var tmp73002 = inst_72864;
var tmp73003 = inst_72863;
var tmp73004 = inst_72865;
var inst_72863__$1 = tmp73003;
var inst_72864__$1 = tmp73002;
var inst_72865__$1 = tmp73004;
var inst_72866__$1 = inst_72882;
var state_72986__$1 = (function (){var statearr_73011 = state_72986;
(statearr_73011[(13)] = inst_72864__$1);

(statearr_73011[(14)] = inst_72863__$1);

(statearr_73011[(15)] = inst_72866__$1);

(statearr_73011[(18)] = inst_72881);

(statearr_73011[(17)] = inst_72865__$1);

return statearr_73011;
})();
var statearr_73012_75629 = state_72986__$1;
(statearr_73012_75629[(2)] = null);

(statearr_73012_75629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (21))){
var inst_72908 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73016_75632 = state_72986__$1;
(statearr_73016_75632[(2)] = inst_72908);

(statearr_73016_75632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (31))){
var inst_72936 = (state_72986[(10)]);
var inst_72940 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_72936);
var state_72986__$1 = state_72986;
var statearr_73017_75633 = state_72986__$1;
(statearr_73017_75633[(2)] = inst_72940);

(statearr_73017_75633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (32))){
var inst_72931 = (state_72986[(9)]);
var inst_72928 = (state_72986[(19)]);
var inst_72930 = (state_72986[(20)]);
var inst_72929 = (state_72986[(12)]);
var inst_72942 = (state_72986[(2)]);
var inst_72943 = (inst_72931 + (1));
var tmp73013 = inst_72928;
var tmp73014 = inst_72930;
var tmp73015 = inst_72929;
var inst_72928__$1 = tmp73013;
var inst_72929__$1 = tmp73015;
var inst_72930__$1 = tmp73014;
var inst_72931__$1 = inst_72943;
var state_72986__$1 = (function (){var statearr_73018 = state_72986;
(statearr_73018[(9)] = inst_72931__$1);

(statearr_73018[(19)] = inst_72928__$1);

(statearr_73018[(20)] = inst_72930__$1);

(statearr_73018[(21)] = inst_72942);

(statearr_73018[(12)] = inst_72929__$1);

return statearr_73018;
})();
var statearr_73019_75638 = state_72986__$1;
(statearr_73019_75638[(2)] = null);

(statearr_73019_75638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (40))){
var inst_72955 = (state_72986[(22)]);
var inst_72959 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_72955);
var state_72986__$1 = state_72986;
var statearr_73020_75642 = state_72986__$1;
(statearr_73020_75642[(2)] = inst_72959);

(statearr_73020_75642[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (33))){
var inst_72946 = (state_72986[(23)]);
var inst_72948 = cljs.core.chunked_seq_QMARK_(inst_72946);
var state_72986__$1 = state_72986;
if(inst_72948){
var statearr_73021_75643 = state_72986__$1;
(statearr_73021_75643[(1)] = (36));

} else {
var statearr_73022_75644 = state_72986__$1;
(statearr_73022_75644[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (13))){
var inst_72875 = (state_72986[(24)]);
var inst_72878 = cljs.core.async.close_BANG_(inst_72875);
var state_72986__$1 = state_72986;
var statearr_73026_75648 = state_72986__$1;
(statearr_73026_75648[(2)] = inst_72878);

(statearr_73026_75648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (22))){
var inst_72898 = (state_72986[(8)]);
var inst_72901 = cljs.core.async.close_BANG_(inst_72898);
var state_72986__$1 = state_72986;
var statearr_73027_75649 = state_72986__$1;
(statearr_73027_75649[(2)] = inst_72901);

(statearr_73027_75649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (36))){
var inst_72946 = (state_72986[(23)]);
var inst_72950 = cljs.core.chunk_first(inst_72946);
var inst_72951 = cljs.core.chunk_rest(inst_72946);
var inst_72952 = cljs.core.count(inst_72950);
var inst_72928 = inst_72951;
var inst_72929 = inst_72950;
var inst_72930 = inst_72952;
var inst_72931 = (0);
var state_72986__$1 = (function (){var statearr_73031 = state_72986;
(statearr_73031[(9)] = inst_72931);

(statearr_73031[(19)] = inst_72928);

(statearr_73031[(20)] = inst_72930);

(statearr_73031[(12)] = inst_72929);

return statearr_73031;
})();
var statearr_73032_75651 = state_72986__$1;
(statearr_73032_75651[(2)] = null);

(statearr_73032_75651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (41))){
var inst_72946 = (state_72986[(23)]);
var inst_72961 = (state_72986[(2)]);
var inst_72962 = cljs.core.next(inst_72946);
var inst_72928 = inst_72962;
var inst_72929 = null;
var inst_72930 = (0);
var inst_72931 = (0);
var state_72986__$1 = (function (){var statearr_73033 = state_72986;
(statearr_73033[(9)] = inst_72931);

(statearr_73033[(25)] = inst_72961);

(statearr_73033[(19)] = inst_72928);

(statearr_73033[(20)] = inst_72930);

(statearr_73033[(12)] = inst_72929);

return statearr_73033;
})();
var statearr_73034_75656 = state_72986__$1;
(statearr_73034_75656[(2)] = null);

(statearr_73034_75656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (43))){
var state_72986__$1 = state_72986;
var statearr_73038_75658 = state_72986__$1;
(statearr_73038_75658[(2)] = null);

(statearr_73038_75658[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (29))){
var inst_72970 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73039_75659 = state_72986__$1;
(statearr_73039_75659[(2)] = inst_72970);

(statearr_73039_75659[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (44))){
var inst_72979 = (state_72986[(2)]);
var state_72986__$1 = (function (){var statearr_73040 = state_72986;
(statearr_73040[(26)] = inst_72979);

return statearr_73040;
})();
var statearr_73041_75660 = state_72986__$1;
(statearr_73041_75660[(2)] = null);

(statearr_73041_75660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (6))){
var inst_72918 = (state_72986[(27)]);
var inst_72917 = cljs.core.deref(cs);
var inst_72918__$1 = cljs.core.keys(inst_72917);
var inst_72920 = cljs.core.count(inst_72918__$1);
var inst_72922 = cljs.core.reset_BANG_(dctr,inst_72920);
var inst_72927 = cljs.core.seq(inst_72918__$1);
var inst_72928 = inst_72927;
var inst_72929 = null;
var inst_72930 = (0);
var inst_72931 = (0);
var state_72986__$1 = (function (){var statearr_73042 = state_72986;
(statearr_73042[(9)] = inst_72931);

(statearr_73042[(19)] = inst_72928);

(statearr_73042[(27)] = inst_72918__$1);

(statearr_73042[(20)] = inst_72930);

(statearr_73042[(28)] = inst_72922);

(statearr_73042[(12)] = inst_72929);

return statearr_73042;
})();
var statearr_73043_75665 = state_72986__$1;
(statearr_73043_75665[(2)] = null);

(statearr_73043_75665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (28))){
var inst_72928 = (state_72986[(19)]);
var inst_72946 = (state_72986[(23)]);
var inst_72946__$1 = cljs.core.seq(inst_72928);
var state_72986__$1 = (function (){var statearr_73044 = state_72986;
(statearr_73044[(23)] = inst_72946__$1);

return statearr_73044;
})();
if(inst_72946__$1){
var statearr_73045_75666 = state_72986__$1;
(statearr_73045_75666[(1)] = (33));

} else {
var statearr_73046_75667 = state_72986__$1;
(statearr_73046_75667[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (25))){
var inst_72931 = (state_72986[(9)]);
var inst_72930 = (state_72986[(20)]);
var inst_72933 = (inst_72931 < inst_72930);
var inst_72934 = inst_72933;
var state_72986__$1 = state_72986;
if(cljs.core.truth_(inst_72934)){
var statearr_73047_75668 = state_72986__$1;
(statearr_73047_75668[(1)] = (27));

} else {
var statearr_73048_75669 = state_72986__$1;
(statearr_73048_75669[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (34))){
var state_72986__$1 = state_72986;
var statearr_73049_75670 = state_72986__$1;
(statearr_73049_75670[(2)] = null);

(statearr_73049_75670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (17))){
var state_72986__$1 = state_72986;
var statearr_73051_75671 = state_72986__$1;
(statearr_73051_75671[(2)] = null);

(statearr_73051_75671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (3))){
var inst_72984 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72986__$1,inst_72984);
} else {
if((state_val_72987 === (12))){
var inst_72913 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73055_75675 = state_72986__$1;
(statearr_73055_75675[(2)] = inst_72913);

(statearr_73055_75675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (2))){
var state_72986__$1 = state_72986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72986__$1,(4),ch);
} else {
if((state_val_72987 === (23))){
var state_72986__$1 = state_72986;
var statearr_73056_75677 = state_72986__$1;
(statearr_73056_75677[(2)] = null);

(statearr_73056_75677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (35))){
var inst_72968 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73057_75679 = state_72986__$1;
(statearr_73057_75679[(2)] = inst_72968);

(statearr_73057_75679[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (19))){
var inst_72885 = (state_72986[(7)]);
var inst_72889 = cljs.core.chunk_first(inst_72885);
var inst_72890 = cljs.core.chunk_rest(inst_72885);
var inst_72891 = cljs.core.count(inst_72889);
var inst_72863 = inst_72890;
var inst_72864 = inst_72889;
var inst_72865 = inst_72891;
var inst_72866 = (0);
var state_72986__$1 = (function (){var statearr_73073 = state_72986;
(statearr_73073[(13)] = inst_72864);

(statearr_73073[(14)] = inst_72863);

(statearr_73073[(15)] = inst_72866);

(statearr_73073[(17)] = inst_72865);

return statearr_73073;
})();
var statearr_73074_75681 = state_72986__$1;
(statearr_73074_75681[(2)] = null);

(statearr_73074_75681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (11))){
var inst_72885 = (state_72986[(7)]);
var inst_72863 = (state_72986[(14)]);
var inst_72885__$1 = cljs.core.seq(inst_72863);
var state_72986__$1 = (function (){var statearr_73075 = state_72986;
(statearr_73075[(7)] = inst_72885__$1);

return statearr_73075;
})();
if(inst_72885__$1){
var statearr_73076_75687 = state_72986__$1;
(statearr_73076_75687[(1)] = (16));

} else {
var statearr_73077_75690 = state_72986__$1;
(statearr_73077_75690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (9))){
var inst_72915 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73081_75692 = state_72986__$1;
(statearr_73081_75692[(2)] = inst_72915);

(statearr_73081_75692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (5))){
var inst_72861 = cljs.core.deref(cs);
var inst_72862 = cljs.core.seq(inst_72861);
var inst_72863 = inst_72862;
var inst_72864 = null;
var inst_72865 = (0);
var inst_72866 = (0);
var state_72986__$1 = (function (){var statearr_73082 = state_72986;
(statearr_73082[(13)] = inst_72864);

(statearr_73082[(14)] = inst_72863);

(statearr_73082[(15)] = inst_72866);

(statearr_73082[(17)] = inst_72865);

return statearr_73082;
})();
var statearr_73083_75694 = state_72986__$1;
(statearr_73083_75694[(2)] = null);

(statearr_73083_75694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (14))){
var state_72986__$1 = state_72986;
var statearr_73084_75695 = state_72986__$1;
(statearr_73084_75695[(2)] = null);

(statearr_73084_75695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (45))){
var inst_72976 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73085_75696 = state_72986__$1;
(statearr_73085_75696[(2)] = inst_72976);

(statearr_73085_75696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (26))){
var inst_72918 = (state_72986[(27)]);
var inst_72972 = (state_72986[(2)]);
var inst_72973 = cljs.core.seq(inst_72918);
var state_72986__$1 = (function (){var statearr_73086 = state_72986;
(statearr_73086[(29)] = inst_72972);

return statearr_73086;
})();
if(inst_72973){
var statearr_73087_75697 = state_72986__$1;
(statearr_73087_75697[(1)] = (42));

} else {
var statearr_73088_75698 = state_72986__$1;
(statearr_73088_75698[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (16))){
var inst_72885 = (state_72986[(7)]);
var inst_72887 = cljs.core.chunked_seq_QMARK_(inst_72885);
var state_72986__$1 = state_72986;
if(inst_72887){
var statearr_73089_75700 = state_72986__$1;
(statearr_73089_75700[(1)] = (19));

} else {
var statearr_73090_75701 = state_72986__$1;
(statearr_73090_75701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (38))){
var inst_72965 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73091_75702 = state_72986__$1;
(statearr_73091_75702[(2)] = inst_72965);

(statearr_73091_75702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (30))){
var state_72986__$1 = state_72986;
var statearr_73095_75703 = state_72986__$1;
(statearr_73095_75703[(2)] = null);

(statearr_73095_75703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (10))){
var inst_72864 = (state_72986[(13)]);
var inst_72866 = (state_72986[(15)]);
var inst_72874 = cljs.core._nth(inst_72864,inst_72866);
var inst_72875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72874,(0),null);
var inst_72876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72874,(1),null);
var state_72986__$1 = (function (){var statearr_73097 = state_72986;
(statearr_73097[(24)] = inst_72875);

return statearr_73097;
})();
if(cljs.core.truth_(inst_72876)){
var statearr_73098_75704 = state_72986__$1;
(statearr_73098_75704[(1)] = (13));

} else {
var statearr_73099_75705 = state_72986__$1;
(statearr_73099_75705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (18))){
var inst_72911 = (state_72986[(2)]);
var state_72986__$1 = state_72986;
var statearr_73100_75706 = state_72986__$1;
(statearr_73100_75706[(2)] = inst_72911);

(statearr_73100_75706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (42))){
var state_72986__$1 = state_72986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72986__$1,(45),dchan);
} else {
if((state_val_72987 === (37))){
var inst_72955 = (state_72986[(22)]);
var inst_72854 = (state_72986[(11)]);
var inst_72946 = (state_72986[(23)]);
var inst_72955__$1 = cljs.core.first(inst_72946);
var inst_72956 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_72955__$1,inst_72854,done);
var state_72986__$1 = (function (){var statearr_73101 = state_72986;
(statearr_73101[(22)] = inst_72955__$1);

return statearr_73101;
})();
if(cljs.core.truth_(inst_72956)){
var statearr_73102_75708 = state_72986__$1;
(statearr_73102_75708[(1)] = (39));

} else {
var statearr_73103_75709 = state_72986__$1;
(statearr_73103_75709[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72987 === (8))){
var inst_72866 = (state_72986[(15)]);
var inst_72865 = (state_72986[(17)]);
var inst_72868 = (inst_72866 < inst_72865);
var inst_72869 = inst_72868;
var state_72986__$1 = state_72986;
if(cljs.core.truth_(inst_72869)){
var statearr_73107_75714 = state_72986__$1;
(statearr_73107_75714[(1)] = (10));

} else {
var statearr_73108_75716 = state_72986__$1;
(statearr_73108_75716[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__21348__auto__ = null;
var cljs$core$async$mult_$_state_machine__21348__auto____0 = (function (){
var statearr_73109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73109[(0)] = cljs$core$async$mult_$_state_machine__21348__auto__);

(statearr_73109[(1)] = (1));

return statearr_73109;
});
var cljs$core$async$mult_$_state_machine__21348__auto____1 = (function (state_72986){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_72986);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e73110){var ex__21351__auto__ = e73110;
var statearr_73111_75721 = state_72986;
(statearr_73111_75721[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_72986[(4)]))){
var statearr_73112_75722 = state_72986;
(statearr_73112_75722[(1)] = cljs.core.first((state_72986[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75723 = state_72986;
state_72986 = G__75723;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21348__auto__ = function(state_72986){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21348__auto____1.call(this,state_72986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21348__auto____0;
cljs$core$async$mult_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21348__auto____1;
return cljs$core$async$mult_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_73113 = f__21537__auto__();
(statearr_73113[(6)] = c__21535__auto___75599);

return statearr_73113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__73121 = arguments.length;
switch (G__73121) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_75732 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_75732(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_75739 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_75739(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_75751 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_75751(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_75756 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_75756(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_75762 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_75762(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___75765 = arguments.length;
var i__5770__auto___75766 = (0);
while(true){
if((i__5770__auto___75766 < len__5769__auto___75765)){
args__5775__auto__.push((arguments[i__5770__auto___75766]));

var G__75771 = (i__5770__auto___75766 + (1));
i__5770__auto___75766 = G__75771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__73154){
var map__73155 = p__73154;
var map__73155__$1 = cljs.core.__destructure_map(map__73155);
var opts = map__73155__$1;
var statearr_73156_75774 = state;
(statearr_73156_75774[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_73157_75776 = state;
(statearr_73157_75776[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_73158_75781 = state;
(statearr_73158_75781[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq73128){
var G__73129 = cljs.core.first(seq73128);
var seq73128__$1 = cljs.core.next(seq73128);
var G__73130 = cljs.core.first(seq73128__$1);
var seq73128__$2 = cljs.core.next(seq73128__$1);
var G__73131 = cljs.core.first(seq73128__$2);
var seq73128__$3 = cljs.core.next(seq73128__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73129,G__73130,G__73131,seq73128__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73162 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta73163){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta73163 = meta73163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73164,meta73163__$1){
var self__ = this;
var _73164__$1 = this;
return (new cljs.core.async.t_cljs$core$async73162(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta73163__$1));
}));

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73164){
var self__ = this;
var _73164__$1 = this;
return self__.meta73163;
}));

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73162.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async73162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta73163","meta73163",-329432039,null)], null);
}));

(cljs.core.async.t_cljs$core$async73162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73162");

(cljs.core.async.t_cljs$core$async73162.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async73162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73162.
 */
cljs.core.async.__GT_t_cljs$core$async73162 = (function cljs$core$async$__GT_t_cljs$core$async73162(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta73163){
return (new cljs.core.async.t_cljs$core$async73162(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta73163));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async73162(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__21535__auto___75805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_73242){
var state_val_73243 = (state_73242[(1)]);
if((state_val_73243 === (7))){
var inst_73195 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
if(cljs.core.truth_(inst_73195)){
var statearr_73244_75811 = state_73242__$1;
(statearr_73244_75811[(1)] = (8));

} else {
var statearr_73245_75813 = state_73242__$1;
(statearr_73245_75813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (20))){
var inst_73188 = (state_73242[(7)]);
var state_73242__$1 = state_73242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73242__$1,(23),out,inst_73188);
} else {
if((state_val_73243 === (1))){
var inst_73171 = calc_state();
var inst_73172 = cljs.core.__destructure_map(inst_73171);
var inst_73173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73172,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_73174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_73175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73172,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_73176 = inst_73171;
var state_73242__$1 = (function (){var statearr_73250 = state_73242;
(statearr_73250[(8)] = inst_73174);

(statearr_73250[(9)] = inst_73176);

(statearr_73250[(10)] = inst_73173);

(statearr_73250[(11)] = inst_73175);

return statearr_73250;
})();
var statearr_73251_75824 = state_73242__$1;
(statearr_73251_75824[(2)] = null);

(statearr_73251_75824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (24))){
var inst_73179 = (state_73242[(12)]);
var inst_73176 = inst_73179;
var state_73242__$1 = (function (){var statearr_73252 = state_73242;
(statearr_73252[(9)] = inst_73176);

return statearr_73252;
})();
var statearr_73253_75826 = state_73242__$1;
(statearr_73253_75826[(2)] = null);

(statearr_73253_75826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (4))){
var inst_73188 = (state_73242[(7)]);
var inst_73190 = (state_73242[(13)]);
var inst_73187 = (state_73242[(2)]);
var inst_73188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73187,(0),null);
var inst_73189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73187,(1),null);
var inst_73190__$1 = (inst_73188__$1 == null);
var state_73242__$1 = (function (){var statearr_73255 = state_73242;
(statearr_73255[(7)] = inst_73188__$1);

(statearr_73255[(14)] = inst_73189);

(statearr_73255[(13)] = inst_73190__$1);

return statearr_73255;
})();
if(cljs.core.truth_(inst_73190__$1)){
var statearr_73256_75828 = state_73242__$1;
(statearr_73256_75828[(1)] = (5));

} else {
var statearr_73257_75829 = state_73242__$1;
(statearr_73257_75829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (15))){
var inst_73212 = (state_73242[(15)]);
var inst_73180 = (state_73242[(16)]);
var inst_73212__$1 = cljs.core.empty_QMARK_(inst_73180);
var state_73242__$1 = (function (){var statearr_73259 = state_73242;
(statearr_73259[(15)] = inst_73212__$1);

return statearr_73259;
})();
if(inst_73212__$1){
var statearr_73261_75830 = state_73242__$1;
(statearr_73261_75830[(1)] = (17));

} else {
var statearr_73263_75834 = state_73242__$1;
(statearr_73263_75834[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (21))){
var inst_73179 = (state_73242[(12)]);
var inst_73176 = inst_73179;
var state_73242__$1 = (function (){var statearr_73268 = state_73242;
(statearr_73268[(9)] = inst_73176);

return statearr_73268;
})();
var statearr_73270_75840 = state_73242__$1;
(statearr_73270_75840[(2)] = null);

(statearr_73270_75840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (13))){
var inst_73202 = (state_73242[(2)]);
var inst_73203 = calc_state();
var inst_73176 = inst_73203;
var state_73242__$1 = (function (){var statearr_73271 = state_73242;
(statearr_73271[(17)] = inst_73202);

(statearr_73271[(9)] = inst_73176);

return statearr_73271;
})();
var statearr_73272_75849 = state_73242__$1;
(statearr_73272_75849[(2)] = null);

(statearr_73272_75849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (22))){
var inst_73234 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
var statearr_73279_75850 = state_73242__$1;
(statearr_73279_75850[(2)] = inst_73234);

(statearr_73279_75850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (6))){
var inst_73189 = (state_73242[(14)]);
var inst_73193 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73189,change);
var state_73242__$1 = state_73242;
var statearr_73280_75851 = state_73242__$1;
(statearr_73280_75851[(2)] = inst_73193);

(statearr_73280_75851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (25))){
var state_73242__$1 = state_73242;
var statearr_73281_75853 = state_73242__$1;
(statearr_73281_75853[(2)] = null);

(statearr_73281_75853[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (17))){
var inst_73189 = (state_73242[(14)]);
var inst_73181 = (state_73242[(18)]);
var inst_73214 = (inst_73181.cljs$core$IFn$_invoke$arity$1 ? inst_73181.cljs$core$IFn$_invoke$arity$1(inst_73189) : inst_73181.call(null,inst_73189));
var inst_73215 = cljs.core.not(inst_73214);
var state_73242__$1 = state_73242;
var statearr_73287_75861 = state_73242__$1;
(statearr_73287_75861[(2)] = inst_73215);

(statearr_73287_75861[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (3))){
var inst_73238 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73242__$1,inst_73238);
} else {
if((state_val_73243 === (12))){
var state_73242__$1 = state_73242;
var statearr_73293_75868 = state_73242__$1;
(statearr_73293_75868[(2)] = null);

(statearr_73293_75868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (2))){
var inst_73179 = (state_73242[(12)]);
var inst_73176 = (state_73242[(9)]);
var inst_73179__$1 = cljs.core.__destructure_map(inst_73176);
var inst_73180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73179__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_73181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73179__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_73182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73179__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_73242__$1 = (function (){var statearr_73295 = state_73242;
(statearr_73295[(12)] = inst_73179__$1);

(statearr_73295[(16)] = inst_73180);

(statearr_73295[(18)] = inst_73181);

return statearr_73295;
})();
return cljs.core.async.ioc_alts_BANG_(state_73242__$1,(4),inst_73182);
} else {
if((state_val_73243 === (23))){
var inst_73223 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
if(cljs.core.truth_(inst_73223)){
var statearr_73302_75878 = state_73242__$1;
(statearr_73302_75878[(1)] = (24));

} else {
var statearr_73304_75881 = state_73242__$1;
(statearr_73304_75881[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (19))){
var inst_73218 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
var statearr_73313_75888 = state_73242__$1;
(statearr_73313_75888[(2)] = inst_73218);

(statearr_73313_75888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (11))){
var inst_73189 = (state_73242[(14)]);
var inst_73199 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_73189);
var state_73242__$1 = state_73242;
var statearr_73314_75890 = state_73242__$1;
(statearr_73314_75890[(2)] = inst_73199);

(statearr_73314_75890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (9))){
var inst_73189 = (state_73242[(14)]);
var inst_73208 = (state_73242[(19)]);
var inst_73180 = (state_73242[(16)]);
var inst_73208__$1 = (inst_73180.cljs$core$IFn$_invoke$arity$1 ? inst_73180.cljs$core$IFn$_invoke$arity$1(inst_73189) : inst_73180.call(null,inst_73189));
var state_73242__$1 = (function (){var statearr_73319 = state_73242;
(statearr_73319[(19)] = inst_73208__$1);

return statearr_73319;
})();
if(cljs.core.truth_(inst_73208__$1)){
var statearr_73320_75894 = state_73242__$1;
(statearr_73320_75894[(1)] = (14));

} else {
var statearr_73321_75896 = state_73242__$1;
(statearr_73321_75896[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (5))){
var inst_73190 = (state_73242[(13)]);
var state_73242__$1 = state_73242;
var statearr_73328_75898 = state_73242__$1;
(statearr_73328_75898[(2)] = inst_73190);

(statearr_73328_75898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (14))){
var inst_73208 = (state_73242[(19)]);
var state_73242__$1 = state_73242;
var statearr_73330_75906 = state_73242__$1;
(statearr_73330_75906[(2)] = inst_73208);

(statearr_73330_75906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (26))){
var inst_73230 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
var statearr_73332_75907 = state_73242__$1;
(statearr_73332_75907[(2)] = inst_73230);

(statearr_73332_75907[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (16))){
var inst_73220 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
if(cljs.core.truth_(inst_73220)){
var statearr_73339_75912 = state_73242__$1;
(statearr_73339_75912[(1)] = (20));

} else {
var statearr_73340_75913 = state_73242__$1;
(statearr_73340_75913[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (10))){
var inst_73236 = (state_73242[(2)]);
var state_73242__$1 = state_73242;
var statearr_73342_75916 = state_73242__$1;
(statearr_73342_75916[(2)] = inst_73236);

(statearr_73342_75916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (18))){
var inst_73212 = (state_73242[(15)]);
var state_73242__$1 = state_73242;
var statearr_73347_75918 = state_73242__$1;
(statearr_73347_75918[(2)] = inst_73212);

(statearr_73347_75918[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73243 === (8))){
var inst_73188 = (state_73242[(7)]);
var inst_73197 = (inst_73188 == null);
var state_73242__$1 = state_73242;
if(cljs.core.truth_(inst_73197)){
var statearr_73353_75923 = state_73242__$1;
(statearr_73353_75923[(1)] = (11));

} else {
var statearr_73354_75924 = state_73242__$1;
(statearr_73354_75924[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__21348__auto__ = null;
var cljs$core$async$mix_$_state_machine__21348__auto____0 = (function (){
var statearr_73359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73359[(0)] = cljs$core$async$mix_$_state_machine__21348__auto__);

(statearr_73359[(1)] = (1));

return statearr_73359;
});
var cljs$core$async$mix_$_state_machine__21348__auto____1 = (function (state_73242){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_73242);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e73361){var ex__21351__auto__ = e73361;
var statearr_73362_75928 = state_73242;
(statearr_73362_75928[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_73242[(4)]))){
var statearr_73366_75933 = state_73242;
(statearr_73366_75933[(1)] = cljs.core.first((state_73242[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75936 = state_73242;
state_73242 = G__75936;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21348__auto__ = function(state_73242){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21348__auto____1.call(this,state_73242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21348__auto____0;
cljs$core$async$mix_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21348__auto____1;
return cljs$core$async$mix_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_73367 = f__21537__auto__();
(statearr_73367[(6)] = c__21535__auto___75805);

return statearr_73367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_75945 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_75945(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_75947 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_75947(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_75951 = (function() {
var G__75952 = null;
var G__75952__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__75952__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__75952 = function(p,v){
switch(arguments.length){
case 1:
return G__75952__1.call(this,p);
case 2:
return G__75952__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75952.cljs$core$IFn$_invoke$arity$1 = G__75952__1;
G__75952.cljs$core$IFn$_invoke$arity$2 = G__75952__2;
return G__75952;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__73458 = arguments.length;
switch (G__73458) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_75951(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_75951(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73505 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta73506){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta73506 = meta73506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73507,meta73506__$1){
var self__ = this;
var _73507__$1 = this;
return (new cljs.core.async.t_cljs$core$async73505(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta73506__$1));
}));

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73507){
var self__ = this;
var _73507__$1 = this;
return self__.meta73506;
}));

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async73505.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async73505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta73506","meta73506",-350932131,null)], null);
}));

(cljs.core.async.t_cljs$core$async73505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73505");

(cljs.core.async.t_cljs$core$async73505.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async73505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73505.
 */
cljs.core.async.__GT_t_cljs$core$async73505 = (function cljs$core$async$__GT_t_cljs$core$async73505(ch,topic_fn,buf_fn,mults,ensure_mult,meta73506){
return (new cljs.core.async.t_cljs$core$async73505(ch,topic_fn,buf_fn,mults,ensure_mult,meta73506));
});


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
var G__73491 = arguments.length;
switch (G__73491) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__73477_SHARP_){
if(cljs.core.truth_((p1__73477_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__73477_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__73477_SHARP_.call(null,topic)))){
return p1__73477_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__73477_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async73505(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__21535__auto___75969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_73599){
var state_val_73600 = (state_73599[(1)]);
if((state_val_73600 === (7))){
var inst_73595 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
var statearr_73609_75976 = state_73599__$1;
(statearr_73609_75976[(2)] = inst_73595);

(statearr_73609_75976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (20))){
var state_73599__$1 = state_73599;
var statearr_73611_75977 = state_73599__$1;
(statearr_73611_75977[(2)] = null);

(statearr_73611_75977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (1))){
var state_73599__$1 = state_73599;
var statearr_73614_75978 = state_73599__$1;
(statearr_73614_75978[(2)] = null);

(statearr_73614_75978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (24))){
var inst_73574 = (state_73599[(7)]);
var inst_73583 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_73574);
var state_73599__$1 = state_73599;
var statearr_73618_75979 = state_73599__$1;
(statearr_73618_75979[(2)] = inst_73583);

(statearr_73618_75979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (4))){
var inst_73524 = (state_73599[(8)]);
var inst_73524__$1 = (state_73599[(2)]);
var inst_73525 = (inst_73524__$1 == null);
var state_73599__$1 = (function (){var statearr_73621 = state_73599;
(statearr_73621[(8)] = inst_73524__$1);

return statearr_73621;
})();
if(cljs.core.truth_(inst_73525)){
var statearr_73622_75981 = state_73599__$1;
(statearr_73622_75981[(1)] = (5));

} else {
var statearr_73623_75982 = state_73599__$1;
(statearr_73623_75982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (15))){
var inst_73568 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
var statearr_73624_75983 = state_73599__$1;
(statearr_73624_75983[(2)] = inst_73568);

(statearr_73624_75983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (21))){
var inst_73588 = (state_73599[(2)]);
var state_73599__$1 = (function (){var statearr_73627 = state_73599;
(statearr_73627[(9)] = inst_73588);

return statearr_73627;
})();
var statearr_73628_75984 = state_73599__$1;
(statearr_73628_75984[(2)] = null);

(statearr_73628_75984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (13))){
var inst_73550 = (state_73599[(10)]);
var inst_73552 = cljs.core.chunked_seq_QMARK_(inst_73550);
var state_73599__$1 = state_73599;
if(inst_73552){
var statearr_73630_75985 = state_73599__$1;
(statearr_73630_75985[(1)] = (16));

} else {
var statearr_73631_75986 = state_73599__$1;
(statearr_73631_75986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (22))){
var inst_73580 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
if(cljs.core.truth_(inst_73580)){
var statearr_73635_75987 = state_73599__$1;
(statearr_73635_75987[(1)] = (23));

} else {
var statearr_73637_75988 = state_73599__$1;
(statearr_73637_75988[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (6))){
var inst_73574 = (state_73599[(7)]);
var inst_73524 = (state_73599[(8)]);
var inst_73576 = (state_73599[(11)]);
var inst_73574__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_73524) : topic_fn.call(null,inst_73524));
var inst_73575 = cljs.core.deref(mults);
var inst_73576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73575,inst_73574__$1);
var state_73599__$1 = (function (){var statearr_73639 = state_73599;
(statearr_73639[(7)] = inst_73574__$1);

(statearr_73639[(11)] = inst_73576__$1);

return statearr_73639;
})();
if(cljs.core.truth_(inst_73576__$1)){
var statearr_73643_75994 = state_73599__$1;
(statearr_73643_75994[(1)] = (19));

} else {
var statearr_73644_75995 = state_73599__$1;
(statearr_73644_75995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (25))){
var inst_73585 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
var statearr_73646_75996 = state_73599__$1;
(statearr_73646_75996[(2)] = inst_73585);

(statearr_73646_75996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (17))){
var inst_73550 = (state_73599[(10)]);
var inst_73559 = cljs.core.first(inst_73550);
var inst_73560 = cljs.core.async.muxch_STAR_(inst_73559);
var inst_73561 = cljs.core.async.close_BANG_(inst_73560);
var inst_73562 = cljs.core.next(inst_73550);
var inst_73536 = inst_73562;
var inst_73537 = null;
var inst_73538 = (0);
var inst_73539 = (0);
var state_73599__$1 = (function (){var statearr_73650 = state_73599;
(statearr_73650[(12)] = inst_73537);

(statearr_73650[(13)] = inst_73561);

(statearr_73650[(14)] = inst_73536);

(statearr_73650[(15)] = inst_73539);

(statearr_73650[(16)] = inst_73538);

return statearr_73650;
})();
var statearr_73651_75998 = state_73599__$1;
(statearr_73651_75998[(2)] = null);

(statearr_73651_75998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (3))){
var inst_73597 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73599__$1,inst_73597);
} else {
if((state_val_73600 === (12))){
var inst_73570 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
var statearr_73655_75999 = state_73599__$1;
(statearr_73655_75999[(2)] = inst_73570);

(statearr_73655_75999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (2))){
var state_73599__$1 = state_73599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73599__$1,(4),ch);
} else {
if((state_val_73600 === (23))){
var state_73599__$1 = state_73599;
var statearr_73659_76000 = state_73599__$1;
(statearr_73659_76000[(2)] = null);

(statearr_73659_76000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (19))){
var inst_73524 = (state_73599[(8)]);
var inst_73576 = (state_73599[(11)]);
var inst_73578 = cljs.core.async.muxch_STAR_(inst_73576);
var state_73599__$1 = state_73599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73599__$1,(22),inst_73578,inst_73524);
} else {
if((state_val_73600 === (11))){
var inst_73536 = (state_73599[(14)]);
var inst_73550 = (state_73599[(10)]);
var inst_73550__$1 = cljs.core.seq(inst_73536);
var state_73599__$1 = (function (){var statearr_73663 = state_73599;
(statearr_73663[(10)] = inst_73550__$1);

return statearr_73663;
})();
if(inst_73550__$1){
var statearr_73664_76004 = state_73599__$1;
(statearr_73664_76004[(1)] = (13));

} else {
var statearr_73668_76005 = state_73599__$1;
(statearr_73668_76005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (9))){
var inst_73572 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
var statearr_73671_76006 = state_73599__$1;
(statearr_73671_76006[(2)] = inst_73572);

(statearr_73671_76006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (5))){
var inst_73533 = cljs.core.deref(mults);
var inst_73534 = cljs.core.vals(inst_73533);
var inst_73535 = cljs.core.seq(inst_73534);
var inst_73536 = inst_73535;
var inst_73537 = null;
var inst_73538 = (0);
var inst_73539 = (0);
var state_73599__$1 = (function (){var statearr_73672 = state_73599;
(statearr_73672[(12)] = inst_73537);

(statearr_73672[(14)] = inst_73536);

(statearr_73672[(15)] = inst_73539);

(statearr_73672[(16)] = inst_73538);

return statearr_73672;
})();
var statearr_73673_76009 = state_73599__$1;
(statearr_73673_76009[(2)] = null);

(statearr_73673_76009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (14))){
var state_73599__$1 = state_73599;
var statearr_73677_76010 = state_73599__$1;
(statearr_73677_76010[(2)] = null);

(statearr_73677_76010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (16))){
var inst_73550 = (state_73599[(10)]);
var inst_73554 = cljs.core.chunk_first(inst_73550);
var inst_73555 = cljs.core.chunk_rest(inst_73550);
var inst_73556 = cljs.core.count(inst_73554);
var inst_73536 = inst_73555;
var inst_73537 = inst_73554;
var inst_73538 = inst_73556;
var inst_73539 = (0);
var state_73599__$1 = (function (){var statearr_73678 = state_73599;
(statearr_73678[(12)] = inst_73537);

(statearr_73678[(14)] = inst_73536);

(statearr_73678[(15)] = inst_73539);

(statearr_73678[(16)] = inst_73538);

return statearr_73678;
})();
var statearr_73680_76017 = state_73599__$1;
(statearr_73680_76017[(2)] = null);

(statearr_73680_76017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (10))){
var inst_73537 = (state_73599[(12)]);
var inst_73536 = (state_73599[(14)]);
var inst_73539 = (state_73599[(15)]);
var inst_73538 = (state_73599[(16)]);
var inst_73544 = cljs.core._nth(inst_73537,inst_73539);
var inst_73545 = cljs.core.async.muxch_STAR_(inst_73544);
var inst_73546 = cljs.core.async.close_BANG_(inst_73545);
var inst_73547 = (inst_73539 + (1));
var tmp73674 = inst_73537;
var tmp73675 = inst_73536;
var tmp73676 = inst_73538;
var inst_73536__$1 = tmp73675;
var inst_73537__$1 = tmp73674;
var inst_73538__$1 = tmp73676;
var inst_73539__$1 = inst_73547;
var state_73599__$1 = (function (){var statearr_73681 = state_73599;
(statearr_73681[(12)] = inst_73537__$1);

(statearr_73681[(17)] = inst_73546);

(statearr_73681[(14)] = inst_73536__$1);

(statearr_73681[(15)] = inst_73539__$1);

(statearr_73681[(16)] = inst_73538__$1);

return statearr_73681;
})();
var statearr_73682_76019 = state_73599__$1;
(statearr_73682_76019[(2)] = null);

(statearr_73682_76019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (18))){
var inst_73565 = (state_73599[(2)]);
var state_73599__$1 = state_73599;
var statearr_73688_76024 = state_73599__$1;
(statearr_73688_76024[(2)] = inst_73565);

(statearr_73688_76024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73600 === (8))){
var inst_73539 = (state_73599[(15)]);
var inst_73538 = (state_73599[(16)]);
var inst_73541 = (inst_73539 < inst_73538);
var inst_73542 = inst_73541;
var state_73599__$1 = state_73599;
if(cljs.core.truth_(inst_73542)){
var statearr_73689_76025 = state_73599__$1;
(statearr_73689_76025[(1)] = (10));

} else {
var statearr_73690_76026 = state_73599__$1;
(statearr_73690_76026[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_73693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73693[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_73693[(1)] = (1));

return statearr_73693;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_73599){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_73599);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e73694){var ex__21351__auto__ = e73694;
var statearr_73695_76028 = state_73599;
(statearr_73695_76028[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_73599[(4)]))){
var statearr_73696_76029 = state_73599;
(statearr_73696_76029[(1)] = cljs.core.first((state_73599[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76030 = state_73599;
state_73599 = G__76030;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_73599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_73599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_73704 = f__21537__auto__();
(statearr_73704[(6)] = c__21535__auto___75969);

return statearr_73704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__73708 = arguments.length;
switch (G__73708) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__73714 = arguments.length;
switch (G__73714) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__73721 = arguments.length;
switch (G__73721) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__21535__auto___76039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_73774){
var state_val_73775 = (state_73774[(1)]);
if((state_val_73775 === (7))){
var state_73774__$1 = state_73774;
var statearr_73776_76041 = state_73774__$1;
(statearr_73776_76041[(2)] = null);

(statearr_73776_76041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (1))){
var state_73774__$1 = state_73774;
var statearr_73777_76042 = state_73774__$1;
(statearr_73777_76042[(2)] = null);

(statearr_73777_76042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (4))){
var inst_73735 = (state_73774[(7)]);
var inst_73734 = (state_73774[(8)]);
var inst_73737 = (inst_73735 < inst_73734);
var state_73774__$1 = state_73774;
if(cljs.core.truth_(inst_73737)){
var statearr_73778_76043 = state_73774__$1;
(statearr_73778_76043[(1)] = (6));

} else {
var statearr_73779_76044 = state_73774__$1;
(statearr_73779_76044[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (15))){
var inst_73760 = (state_73774[(9)]);
var inst_73765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_73760);
var state_73774__$1 = state_73774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73774__$1,(17),out,inst_73765);
} else {
if((state_val_73775 === (13))){
var inst_73760 = (state_73774[(9)]);
var inst_73760__$1 = (state_73774[(2)]);
var inst_73761 = cljs.core.some(cljs.core.nil_QMARK_,inst_73760__$1);
var state_73774__$1 = (function (){var statearr_73784 = state_73774;
(statearr_73784[(9)] = inst_73760__$1);

return statearr_73784;
})();
if(cljs.core.truth_(inst_73761)){
var statearr_73786_76052 = state_73774__$1;
(statearr_73786_76052[(1)] = (14));

} else {
var statearr_73787_76053 = state_73774__$1;
(statearr_73787_76053[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (6))){
var state_73774__$1 = state_73774;
var statearr_73788_76054 = state_73774__$1;
(statearr_73788_76054[(2)] = null);

(statearr_73788_76054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (17))){
var inst_73767 = (state_73774[(2)]);
var state_73774__$1 = (function (){var statearr_73790 = state_73774;
(statearr_73790[(10)] = inst_73767);

return statearr_73790;
})();
var statearr_73791_76055 = state_73774__$1;
(statearr_73791_76055[(2)] = null);

(statearr_73791_76055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (3))){
var inst_73772 = (state_73774[(2)]);
var state_73774__$1 = state_73774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73774__$1,inst_73772);
} else {
if((state_val_73775 === (12))){
var _ = (function (){var statearr_73792 = state_73774;
(statearr_73792[(4)] = cljs.core.rest((state_73774[(4)])));

return statearr_73792;
})();
var state_73774__$1 = state_73774;
var ex73789 = (state_73774__$1[(2)]);
var statearr_73793_76056 = state_73774__$1;
(statearr_73793_76056[(5)] = ex73789);


if((ex73789 instanceof Object)){
var statearr_73794_76057 = state_73774__$1;
(statearr_73794_76057[(1)] = (11));

(statearr_73794_76057[(5)] = null);

} else {
throw ex73789;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (2))){
var inst_73733 = cljs.core.reset_BANG_(dctr,cnt);
var inst_73734 = cnt;
var inst_73735 = (0);
var state_73774__$1 = (function (){var statearr_73801 = state_73774;
(statearr_73801[(7)] = inst_73735);

(statearr_73801[(8)] = inst_73734);

(statearr_73801[(11)] = inst_73733);

return statearr_73801;
})();
var statearr_73802_76060 = state_73774__$1;
(statearr_73802_76060[(2)] = null);

(statearr_73802_76060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (11))){
var inst_73739 = (state_73774[(2)]);
var inst_73740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_73774__$1 = (function (){var statearr_73803 = state_73774;
(statearr_73803[(12)] = inst_73739);

return statearr_73803;
})();
var statearr_73804_76062 = state_73774__$1;
(statearr_73804_76062[(2)] = inst_73740);

(statearr_73804_76062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (9))){
var inst_73735 = (state_73774[(7)]);
var _ = (function (){var statearr_73805 = state_73774;
(statearr_73805[(4)] = cljs.core.cons((12),(state_73774[(4)])));

return statearr_73805;
})();
var inst_73746 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_73735) : chs__$1.call(null,inst_73735));
var inst_73747 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_73735) : done.call(null,inst_73735));
var inst_73748 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_73746,inst_73747);
var ___$1 = (function (){var statearr_73806 = state_73774;
(statearr_73806[(4)] = cljs.core.rest((state_73774[(4)])));

return statearr_73806;
})();
var state_73774__$1 = state_73774;
var statearr_73807_76063 = state_73774__$1;
(statearr_73807_76063[(2)] = inst_73748);

(statearr_73807_76063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (5))){
var inst_73758 = (state_73774[(2)]);
var state_73774__$1 = (function (){var statearr_73809 = state_73774;
(statearr_73809[(13)] = inst_73758);

return statearr_73809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73774__$1,(13),dchan);
} else {
if((state_val_73775 === (14))){
var inst_73763 = cljs.core.async.close_BANG_(out);
var state_73774__$1 = state_73774;
var statearr_73810_76064 = state_73774__$1;
(statearr_73810_76064[(2)] = inst_73763);

(statearr_73810_76064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (16))){
var inst_73770 = (state_73774[(2)]);
var state_73774__$1 = state_73774;
var statearr_73811_76065 = state_73774__$1;
(statearr_73811_76065[(2)] = inst_73770);

(statearr_73811_76065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (10))){
var inst_73735 = (state_73774[(7)]);
var inst_73751 = (state_73774[(2)]);
var inst_73752 = (inst_73735 + (1));
var inst_73735__$1 = inst_73752;
var state_73774__$1 = (function (){var statearr_73812 = state_73774;
(statearr_73812[(7)] = inst_73735__$1);

(statearr_73812[(14)] = inst_73751);

return statearr_73812;
})();
var statearr_73813_76066 = state_73774__$1;
(statearr_73813_76066[(2)] = null);

(statearr_73813_76066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73775 === (8))){
var inst_73756 = (state_73774[(2)]);
var state_73774__$1 = state_73774;
var statearr_73814_76067 = state_73774__$1;
(statearr_73814_76067[(2)] = inst_73756);

(statearr_73814_76067[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_73815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73815[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_73815[(1)] = (1));

return statearr_73815;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_73774){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_73774);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e73816){var ex__21351__auto__ = e73816;
var statearr_73817_76070 = state_73774;
(statearr_73817_76070[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_73774[(4)]))){
var statearr_73818_76071 = state_73774;
(statearr_73818_76071[(1)] = cljs.core.first((state_73774[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76072 = state_73774;
state_73774 = G__76072;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_73774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_73774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_73819 = f__21537__auto__();
(statearr_73819[(6)] = c__21535__auto___76039);

return statearr_73819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__73826 = arguments.length;
switch (G__73826) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21535__auto___76076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_73859){
var state_val_73860 = (state_73859[(1)]);
if((state_val_73860 === (7))){
var inst_73837 = (state_73859[(7)]);
var inst_73838 = (state_73859[(8)]);
var inst_73837__$1 = (state_73859[(2)]);
var inst_73838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73837__$1,(0),null);
var inst_73839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73837__$1,(1),null);
var inst_73840 = (inst_73838__$1 == null);
var state_73859__$1 = (function (){var statearr_73862 = state_73859;
(statearr_73862[(7)] = inst_73837__$1);

(statearr_73862[(9)] = inst_73839);

(statearr_73862[(8)] = inst_73838__$1);

return statearr_73862;
})();
if(cljs.core.truth_(inst_73840)){
var statearr_73863_76079 = state_73859__$1;
(statearr_73863_76079[(1)] = (8));

} else {
var statearr_73864_76080 = state_73859__$1;
(statearr_73864_76080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73860 === (1))){
var inst_73827 = cljs.core.vec(chs);
var inst_73828 = inst_73827;
var state_73859__$1 = (function (){var statearr_73865 = state_73859;
(statearr_73865[(10)] = inst_73828);

return statearr_73865;
})();
var statearr_73870_76081 = state_73859__$1;
(statearr_73870_76081[(2)] = null);

(statearr_73870_76081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73860 === (4))){
var inst_73828 = (state_73859[(10)]);
var state_73859__$1 = state_73859;
return cljs.core.async.ioc_alts_BANG_(state_73859__$1,(7),inst_73828);
} else {
if((state_val_73860 === (6))){
var inst_73854 = (state_73859[(2)]);
var state_73859__$1 = state_73859;
var statearr_73875_76082 = state_73859__$1;
(statearr_73875_76082[(2)] = inst_73854);

(statearr_73875_76082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73860 === (3))){
var inst_73856 = (state_73859[(2)]);
var state_73859__$1 = state_73859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73859__$1,inst_73856);
} else {
if((state_val_73860 === (2))){
var inst_73828 = (state_73859[(10)]);
var inst_73830 = cljs.core.count(inst_73828);
var inst_73831 = (inst_73830 > (0));
var state_73859__$1 = state_73859;
if(cljs.core.truth_(inst_73831)){
var statearr_73877_76083 = state_73859__$1;
(statearr_73877_76083[(1)] = (4));

} else {
var statearr_73879_76085 = state_73859__$1;
(statearr_73879_76085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73860 === (11))){
var inst_73828 = (state_73859[(10)]);
var inst_73847 = (state_73859[(2)]);
var tmp73876 = inst_73828;
var inst_73828__$1 = tmp73876;
var state_73859__$1 = (function (){var statearr_73880 = state_73859;
(statearr_73880[(10)] = inst_73828__$1);

(statearr_73880[(11)] = inst_73847);

return statearr_73880;
})();
var statearr_73881_76087 = state_73859__$1;
(statearr_73881_76087[(2)] = null);

(statearr_73881_76087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73860 === (9))){
var inst_73838 = (state_73859[(8)]);
var state_73859__$1 = state_73859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73859__$1,(11),out,inst_73838);
} else {
if((state_val_73860 === (5))){
var inst_73852 = cljs.core.async.close_BANG_(out);
var state_73859__$1 = state_73859;
var statearr_73886_76088 = state_73859__$1;
(statearr_73886_76088[(2)] = inst_73852);

(statearr_73886_76088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73860 === (10))){
var inst_73850 = (state_73859[(2)]);
var state_73859__$1 = state_73859;
var statearr_73892_76089 = state_73859__$1;
(statearr_73892_76089[(2)] = inst_73850);

(statearr_73892_76089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73860 === (8))){
var inst_73837 = (state_73859[(7)]);
var inst_73839 = (state_73859[(9)]);
var inst_73838 = (state_73859[(8)]);
var inst_73828 = (state_73859[(10)]);
var inst_73842 = (function (){var cs = inst_73828;
var vec__73833 = inst_73837;
var v = inst_73838;
var c = inst_73839;
return (function (p1__73820_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__73820_SHARP_);
});
})();
var inst_73843 = cljs.core.filterv(inst_73842,inst_73828);
var inst_73828__$1 = inst_73843;
var state_73859__$1 = (function (){var statearr_73893 = state_73859;
(statearr_73893[(10)] = inst_73828__$1);

return statearr_73893;
})();
var statearr_73894_76091 = state_73859__$1;
(statearr_73894_76091[(2)] = null);

(statearr_73894_76091[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_73899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73899[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_73899[(1)] = (1));

return statearr_73899;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_73859){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_73859);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e73907){var ex__21351__auto__ = e73907;
var statearr_73908_76096 = state_73859;
(statearr_73908_76096[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_73859[(4)]))){
var statearr_73909_76097 = state_73859;
(statearr_73909_76097[(1)] = cljs.core.first((state_73859[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76098 = state_73859;
state_73859 = G__76098;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_73859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_73859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_73910 = f__21537__auto__();
(statearr_73910[(6)] = c__21535__auto___76076);

return statearr_73910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__73916 = arguments.length;
switch (G__73916) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21535__auto___76105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_73943){
var state_val_73944 = (state_73943[(1)]);
if((state_val_73944 === (7))){
var inst_73923 = (state_73943[(7)]);
var inst_73923__$1 = (state_73943[(2)]);
var inst_73924 = (inst_73923__$1 == null);
var inst_73925 = cljs.core.not(inst_73924);
var state_73943__$1 = (function (){var statearr_73948 = state_73943;
(statearr_73948[(7)] = inst_73923__$1);

return statearr_73948;
})();
if(inst_73925){
var statearr_73949_76108 = state_73943__$1;
(statearr_73949_76108[(1)] = (8));

} else {
var statearr_73950_76112 = state_73943__$1;
(statearr_73950_76112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (1))){
var inst_73918 = (0);
var state_73943__$1 = (function (){var statearr_73951 = state_73943;
(statearr_73951[(8)] = inst_73918);

return statearr_73951;
})();
var statearr_73952_76115 = state_73943__$1;
(statearr_73952_76115[(2)] = null);

(statearr_73952_76115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (4))){
var state_73943__$1 = state_73943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73943__$1,(7),ch);
} else {
if((state_val_73944 === (6))){
var inst_73937 = (state_73943[(2)]);
var state_73943__$1 = state_73943;
var statearr_73957_76117 = state_73943__$1;
(statearr_73957_76117[(2)] = inst_73937);

(statearr_73957_76117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (3))){
var inst_73939 = (state_73943[(2)]);
var inst_73940 = cljs.core.async.close_BANG_(out);
var state_73943__$1 = (function (){var statearr_73958 = state_73943;
(statearr_73958[(9)] = inst_73939);

return statearr_73958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73943__$1,inst_73940);
} else {
if((state_val_73944 === (2))){
var inst_73918 = (state_73943[(8)]);
var inst_73920 = (inst_73918 < n);
var state_73943__$1 = state_73943;
if(cljs.core.truth_(inst_73920)){
var statearr_73959_76119 = state_73943__$1;
(statearr_73959_76119[(1)] = (4));

} else {
var statearr_73960_76120 = state_73943__$1;
(statearr_73960_76120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (11))){
var inst_73918 = (state_73943[(8)]);
var inst_73928 = (state_73943[(2)]);
var inst_73929 = (inst_73918 + (1));
var inst_73918__$1 = inst_73929;
var state_73943__$1 = (function (){var statearr_73961 = state_73943;
(statearr_73961[(10)] = inst_73928);

(statearr_73961[(8)] = inst_73918__$1);

return statearr_73961;
})();
var statearr_73962_76127 = state_73943__$1;
(statearr_73962_76127[(2)] = null);

(statearr_73962_76127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (9))){
var state_73943__$1 = state_73943;
var statearr_73967_76128 = state_73943__$1;
(statearr_73967_76128[(2)] = null);

(statearr_73967_76128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (5))){
var state_73943__$1 = state_73943;
var statearr_73968_76129 = state_73943__$1;
(statearr_73968_76129[(2)] = null);

(statearr_73968_76129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (10))){
var inst_73934 = (state_73943[(2)]);
var state_73943__$1 = state_73943;
var statearr_73969_76130 = state_73943__$1;
(statearr_73969_76130[(2)] = inst_73934);

(statearr_73969_76130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73944 === (8))){
var inst_73923 = (state_73943[(7)]);
var state_73943__$1 = state_73943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73943__$1,(11),out,inst_73923);
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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_73971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73971[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_73971[(1)] = (1));

return statearr_73971;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_73943){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_73943);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e73972){var ex__21351__auto__ = e73972;
var statearr_73973_76131 = state_73943;
(statearr_73973_76131[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_73943[(4)]))){
var statearr_73974_76133 = state_73943;
(statearr_73974_76133[(1)] = cljs.core.first((state_73943[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76136 = state_73943;
state_73943 = G__76136;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_73943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_73943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_73975 = f__21537__auto__();
(statearr_73975[(6)] = c__21535__auto___76105);

return statearr_73975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73985 = (function (f,ch,meta73978,_,fn1,meta73986){
this.f = f;
this.ch = ch;
this.meta73978 = meta73978;
this._ = _;
this.fn1 = fn1;
this.meta73986 = meta73986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73987,meta73986__$1){
var self__ = this;
var _73987__$1 = this;
return (new cljs.core.async.t_cljs$core$async73985(self__.f,self__.ch,self__.meta73978,self__._,self__.fn1,meta73986__$1));
}));

(cljs.core.async.t_cljs$core$async73985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73987){
var self__ = this;
var _73987__$1 = this;
return self__.meta73986;
}));

(cljs.core.async.t_cljs$core$async73985.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async73985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__73976_SHARP_){
var G__73992 = (((p1__73976_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__73976_SHARP_) : self__.f.call(null,p1__73976_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__73992) : f1.call(null,G__73992));
});
}));

(cljs.core.async.t_cljs$core$async73985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73978","meta73978",-941968735,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async73977","cljs.core.async/t_cljs$core$async73977",232058867,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta73986","meta73986",1980501333,null)], null);
}));

(cljs.core.async.t_cljs$core$async73985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73985");

(cljs.core.async.t_cljs$core$async73985.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async73985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73985.
 */
cljs.core.async.__GT_t_cljs$core$async73985 = (function cljs$core$async$__GT_t_cljs$core$async73985(f,ch,meta73978,_,fn1,meta73986){
return (new cljs.core.async.t_cljs$core$async73985(f,ch,meta73978,_,fn1,meta73986));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73977 = (function (f,ch,meta73978){
this.f = f;
this.ch = ch;
this.meta73978 = meta73978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73979,meta73978__$1){
var self__ = this;
var _73979__$1 = this;
return (new cljs.core.async.t_cljs$core$async73977(self__.f,self__.ch,meta73978__$1));
}));

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73979){
var self__ = this;
var _73979__$1 = this;
return self__.meta73978;
}));

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async73985(self__.f,self__.ch,self__.meta73978,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__73999 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__73999) : self__.f.call(null,G__73999));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async73977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73978","meta73978",-941968735,null)], null);
}));

(cljs.core.async.t_cljs$core$async73977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73977");

(cljs.core.async.t_cljs$core$async73977.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async73977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73977.
 */
cljs.core.async.__GT_t_cljs$core$async73977 = (function cljs$core$async$__GT_t_cljs$core$async73977(f,ch,meta73978){
return (new cljs.core.async.t_cljs$core$async73977(f,ch,meta73978));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async73977(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74009 = (function (f,ch,meta74010){
this.f = f;
this.ch = ch;
this.meta74010 = meta74010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74011,meta74010__$1){
var self__ = this;
var _74011__$1 = this;
return (new cljs.core.async.t_cljs$core$async74009(self__.f,self__.ch,meta74010__$1));
}));

(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74011){
var self__ = this;
var _74011__$1 = this;
return self__.meta74010;
}));

(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async74009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74010","meta74010",1273121910,null)], null);
}));

(cljs.core.async.t_cljs$core$async74009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74009");

(cljs.core.async.t_cljs$core$async74009.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async74009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74009.
 */
cljs.core.async.__GT_t_cljs$core$async74009 = (function cljs$core$async$__GT_t_cljs$core$async74009(f,ch,meta74010){
return (new cljs.core.async.t_cljs$core$async74009(f,ch,meta74010));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async74009(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74019 = (function (p,ch,meta74020){
this.p = p;
this.ch = ch;
this.meta74020 = meta74020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74021,meta74020__$1){
var self__ = this;
var _74021__$1 = this;
return (new cljs.core.async.t_cljs$core$async74019(self__.p,self__.ch,meta74020__$1));
}));

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74021){
var self__ = this;
var _74021__$1 = this;
return self__.meta74020;
}));

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async74019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta74020","meta74020",929795487,null)], null);
}));

(cljs.core.async.t_cljs$core$async74019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74019");

(cljs.core.async.t_cljs$core$async74019.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async74019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74019.
 */
cljs.core.async.__GT_t_cljs$core$async74019 = (function cljs$core$async$__GT_t_cljs$core$async74019(p,ch,meta74020){
return (new cljs.core.async.t_cljs$core$async74019(p,ch,meta74020));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async74019(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__74045 = arguments.length;
switch (G__74045) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21535__auto___76163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_74097){
var state_val_74098 = (state_74097[(1)]);
if((state_val_74098 === (7))){
var inst_74083 = (state_74097[(2)]);
var state_74097__$1 = state_74097;
var statearr_74109_76164 = state_74097__$1;
(statearr_74109_76164[(2)] = inst_74083);

(statearr_74109_76164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (1))){
var state_74097__$1 = state_74097;
var statearr_74122_76165 = state_74097__$1;
(statearr_74122_76165[(2)] = null);

(statearr_74122_76165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (4))){
var inst_74069 = (state_74097[(7)]);
var inst_74069__$1 = (state_74097[(2)]);
var inst_74070 = (inst_74069__$1 == null);
var state_74097__$1 = (function (){var statearr_74124 = state_74097;
(statearr_74124[(7)] = inst_74069__$1);

return statearr_74124;
})();
if(cljs.core.truth_(inst_74070)){
var statearr_74135_76166 = state_74097__$1;
(statearr_74135_76166[(1)] = (5));

} else {
var statearr_74136_76167 = state_74097__$1;
(statearr_74136_76167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (6))){
var inst_74069 = (state_74097[(7)]);
var inst_74074 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_74069) : p.call(null,inst_74069));
var state_74097__$1 = state_74097;
if(cljs.core.truth_(inst_74074)){
var statearr_74137_76169 = state_74097__$1;
(statearr_74137_76169[(1)] = (8));

} else {
var statearr_74148_76170 = state_74097__$1;
(statearr_74148_76170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (3))){
var inst_74095 = (state_74097[(2)]);
var state_74097__$1 = state_74097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74097__$1,inst_74095);
} else {
if((state_val_74098 === (2))){
var state_74097__$1 = state_74097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74097__$1,(4),ch);
} else {
if((state_val_74098 === (11))){
var inst_74077 = (state_74097[(2)]);
var state_74097__$1 = state_74097;
var statearr_74162_76172 = state_74097__$1;
(statearr_74162_76172[(2)] = inst_74077);

(statearr_74162_76172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (9))){
var state_74097__$1 = state_74097;
var statearr_74163_76173 = state_74097__$1;
(statearr_74163_76173[(2)] = null);

(statearr_74163_76173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (5))){
var inst_74072 = cljs.core.async.close_BANG_(out);
var state_74097__$1 = state_74097;
var statearr_74174_76174 = state_74097__$1;
(statearr_74174_76174[(2)] = inst_74072);

(statearr_74174_76174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (10))){
var inst_74080 = (state_74097[(2)]);
var state_74097__$1 = (function (){var statearr_74175 = state_74097;
(statearr_74175[(8)] = inst_74080);

return statearr_74175;
})();
var statearr_74176_76175 = state_74097__$1;
(statearr_74176_76175[(2)] = null);

(statearr_74176_76175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74098 === (8))){
var inst_74069 = (state_74097[(7)]);
var state_74097__$1 = state_74097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74097__$1,(11),out,inst_74069);
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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_74194 = [null,null,null,null,null,null,null,null,null];
(statearr_74194[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_74194[(1)] = (1));

return statearr_74194;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_74097){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_74097);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e74205){var ex__21351__auto__ = e74205;
var statearr_74210_76178 = state_74097;
(statearr_74210_76178[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_74097[(4)]))){
var statearr_74213_76179 = state_74097;
(statearr_74213_76179[(1)] = cljs.core.first((state_74097[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76180 = state_74097;
state_74097 = G__76180;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_74097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_74097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_74232 = f__21537__auto__();
(statearr_74232[(6)] = c__21535__auto___76163);

return statearr_74232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__74255 = arguments.length;
switch (G__74255) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21535__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_74386){
var state_val_74387 = (state_74386[(1)]);
if((state_val_74387 === (7))){
var inst_74372 = (state_74386[(2)]);
var state_74386__$1 = state_74386;
var statearr_74396_76184 = state_74386__$1;
(statearr_74396_76184[(2)] = inst_74372);

(statearr_74396_76184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (20))){
var inst_74326 = (state_74386[(7)]);
var inst_74351 = (state_74386[(2)]);
var inst_74353 = cljs.core.next(inst_74326);
var inst_74301 = inst_74353;
var inst_74302 = null;
var inst_74303 = (0);
var inst_74304 = (0);
var state_74386__$1 = (function (){var statearr_74409 = state_74386;
(statearr_74409[(8)] = inst_74351);

(statearr_74409[(9)] = inst_74303);

(statearr_74409[(10)] = inst_74302);

(statearr_74409[(11)] = inst_74301);

(statearr_74409[(12)] = inst_74304);

return statearr_74409;
})();
var statearr_74420_76187 = state_74386__$1;
(statearr_74420_76187[(2)] = null);

(statearr_74420_76187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (1))){
var state_74386__$1 = state_74386;
var statearr_74424_76188 = state_74386__$1;
(statearr_74424_76188[(2)] = null);

(statearr_74424_76188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (4))){
var inst_74290 = (state_74386[(13)]);
var inst_74290__$1 = (state_74386[(2)]);
var inst_74291 = (inst_74290__$1 == null);
var state_74386__$1 = (function (){var statearr_74441 = state_74386;
(statearr_74441[(13)] = inst_74290__$1);

return statearr_74441;
})();
if(cljs.core.truth_(inst_74291)){
var statearr_74443_76191 = state_74386__$1;
(statearr_74443_76191[(1)] = (5));

} else {
var statearr_74445_76192 = state_74386__$1;
(statearr_74445_76192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (15))){
var state_74386__$1 = state_74386;
var statearr_74458_76193 = state_74386__$1;
(statearr_74458_76193[(2)] = null);

(statearr_74458_76193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (21))){
var state_74386__$1 = state_74386;
var statearr_74473_76194 = state_74386__$1;
(statearr_74473_76194[(2)] = null);

(statearr_74473_76194[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (13))){
var inst_74303 = (state_74386[(9)]);
var inst_74302 = (state_74386[(10)]);
var inst_74301 = (state_74386[(11)]);
var inst_74304 = (state_74386[(12)]);
var inst_74322 = (state_74386[(2)]);
var inst_74323 = (inst_74304 + (1));
var tmp74448 = inst_74303;
var tmp74449 = inst_74302;
var tmp74450 = inst_74301;
var inst_74301__$1 = tmp74450;
var inst_74302__$1 = tmp74449;
var inst_74303__$1 = tmp74448;
var inst_74304__$1 = inst_74323;
var state_74386__$1 = (function (){var statearr_74477 = state_74386;
(statearr_74477[(9)] = inst_74303__$1);

(statearr_74477[(10)] = inst_74302__$1);

(statearr_74477[(11)] = inst_74301__$1);

(statearr_74477[(12)] = inst_74304__$1);

(statearr_74477[(14)] = inst_74322);

return statearr_74477;
})();
var statearr_74488_76195 = state_74386__$1;
(statearr_74488_76195[(2)] = null);

(statearr_74488_76195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (22))){
var state_74386__$1 = state_74386;
var statearr_74492_76196 = state_74386__$1;
(statearr_74492_76196[(2)] = null);

(statearr_74492_76196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (6))){
var inst_74290 = (state_74386[(13)]);
var inst_74299 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_74290) : f.call(null,inst_74290));
var inst_74300 = cljs.core.seq(inst_74299);
var inst_74301 = inst_74300;
var inst_74302 = null;
var inst_74303 = (0);
var inst_74304 = (0);
var state_74386__$1 = (function (){var statearr_74496 = state_74386;
(statearr_74496[(9)] = inst_74303);

(statearr_74496[(10)] = inst_74302);

(statearr_74496[(11)] = inst_74301);

(statearr_74496[(12)] = inst_74304);

return statearr_74496;
})();
var statearr_74507_76204 = state_74386__$1;
(statearr_74507_76204[(2)] = null);

(statearr_74507_76204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (17))){
var inst_74326 = (state_74386[(7)]);
var inst_74340 = cljs.core.chunk_first(inst_74326);
var inst_74341 = cljs.core.chunk_rest(inst_74326);
var inst_74342 = cljs.core.count(inst_74340);
var inst_74301 = inst_74341;
var inst_74302 = inst_74340;
var inst_74303 = inst_74342;
var inst_74304 = (0);
var state_74386__$1 = (function (){var statearr_74508 = state_74386;
(statearr_74508[(9)] = inst_74303);

(statearr_74508[(10)] = inst_74302);

(statearr_74508[(11)] = inst_74301);

(statearr_74508[(12)] = inst_74304);

return statearr_74508;
})();
var statearr_74509_76206 = state_74386__$1;
(statearr_74509_76206[(2)] = null);

(statearr_74509_76206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (3))){
var inst_74374 = (state_74386[(2)]);
var state_74386__$1 = state_74386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74386__$1,inst_74374);
} else {
if((state_val_74387 === (12))){
var inst_74362 = (state_74386[(2)]);
var state_74386__$1 = state_74386;
var statearr_74519_76208 = state_74386__$1;
(statearr_74519_76208[(2)] = inst_74362);

(statearr_74519_76208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (2))){
var state_74386__$1 = state_74386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74386__$1,(4),in$);
} else {
if((state_val_74387 === (23))){
var inst_74370 = (state_74386[(2)]);
var state_74386__$1 = state_74386;
var statearr_74521_76211 = state_74386__$1;
(statearr_74521_76211[(2)] = inst_74370);

(statearr_74521_76211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (19))){
var inst_74357 = (state_74386[(2)]);
var state_74386__$1 = state_74386;
var statearr_74524_76212 = state_74386__$1;
(statearr_74524_76212[(2)] = inst_74357);

(statearr_74524_76212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (11))){
var inst_74301 = (state_74386[(11)]);
var inst_74326 = (state_74386[(7)]);
var inst_74326__$1 = cljs.core.seq(inst_74301);
var state_74386__$1 = (function (){var statearr_74526 = state_74386;
(statearr_74526[(7)] = inst_74326__$1);

return statearr_74526;
})();
if(inst_74326__$1){
var statearr_74527_76213 = state_74386__$1;
(statearr_74527_76213[(1)] = (14));

} else {
var statearr_74532_76214 = state_74386__$1;
(statearr_74532_76214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (9))){
var inst_74364 = (state_74386[(2)]);
var inst_74365 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_74386__$1 = (function (){var statearr_74535 = state_74386;
(statearr_74535[(15)] = inst_74364);

return statearr_74535;
})();
if(cljs.core.truth_(inst_74365)){
var statearr_74542_76215 = state_74386__$1;
(statearr_74542_76215[(1)] = (21));

} else {
var statearr_74543_76216 = state_74386__$1;
(statearr_74543_76216[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (5))){
var inst_74293 = cljs.core.async.close_BANG_(out);
var state_74386__$1 = state_74386;
var statearr_74545_76217 = state_74386__$1;
(statearr_74545_76217[(2)] = inst_74293);

(statearr_74545_76217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (14))){
var inst_74326 = (state_74386[(7)]);
var inst_74338 = cljs.core.chunked_seq_QMARK_(inst_74326);
var state_74386__$1 = state_74386;
if(inst_74338){
var statearr_74557_76218 = state_74386__$1;
(statearr_74557_76218[(1)] = (17));

} else {
var statearr_74560_76222 = state_74386__$1;
(statearr_74560_76222[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (16))){
var inst_74360 = (state_74386[(2)]);
var state_74386__$1 = state_74386;
var statearr_74561_76228 = state_74386__$1;
(statearr_74561_76228[(2)] = inst_74360);

(statearr_74561_76228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74387 === (10))){
var inst_74302 = (state_74386[(10)]);
var inst_74304 = (state_74386[(12)]);
var inst_74320 = cljs.core._nth(inst_74302,inst_74304);
var state_74386__$1 = state_74386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74386__$1,(13),out,inst_74320);
} else {
if((state_val_74387 === (18))){
var inst_74326 = (state_74386[(7)]);
var inst_74348 = cljs.core.first(inst_74326);
var state_74386__$1 = state_74386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74386__$1,(20),out,inst_74348);
} else {
if((state_val_74387 === (8))){
var inst_74303 = (state_74386[(9)]);
var inst_74304 = (state_74386[(12)]);
var inst_74317 = (inst_74304 < inst_74303);
var inst_74318 = inst_74317;
var state_74386__$1 = state_74386;
if(cljs.core.truth_(inst_74318)){
var statearr_74567_76229 = state_74386__$1;
(statearr_74567_76229[(1)] = (10));

} else {
var statearr_74568_76231 = state_74386__$1;
(statearr_74568_76231[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_74578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__);

(statearr_74578[(1)] = (1));

return statearr_74578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____1 = (function (state_74386){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_74386);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e74579){var ex__21351__auto__ = e74579;
var statearr_74580_76236 = state_74386;
(statearr_74580_76236[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_74386[(4)]))){
var statearr_74585_76237 = state_74386;
(statearr_74585_76237[(1)] = cljs.core.first((state_74386[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76238 = state_74386;
state_74386 = G__76238;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__ = function(state_74386){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____1.call(this,state_74386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_74598 = f__21537__auto__();
(statearr_74598[(6)] = c__21535__auto__);

return statearr_74598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

return c__21535__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__74613 = arguments.length;
switch (G__74613) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__74642 = arguments.length;
switch (G__74642) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__74659 = arguments.length;
switch (G__74659) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21535__auto___76249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_74698){
var state_val_74699 = (state_74698[(1)]);
if((state_val_74699 === (7))){
var inst_74693 = (state_74698[(2)]);
var state_74698__$1 = state_74698;
var statearr_74715_76250 = state_74698__$1;
(statearr_74715_76250[(2)] = inst_74693);

(statearr_74715_76250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74699 === (1))){
var inst_74675 = null;
var state_74698__$1 = (function (){var statearr_74718 = state_74698;
(statearr_74718[(7)] = inst_74675);

return statearr_74718;
})();
var statearr_74722_76253 = state_74698__$1;
(statearr_74722_76253[(2)] = null);

(statearr_74722_76253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74699 === (4))){
var inst_74678 = (state_74698[(8)]);
var inst_74678__$1 = (state_74698[(2)]);
var inst_74679 = (inst_74678__$1 == null);
var inst_74680 = cljs.core.not(inst_74679);
var state_74698__$1 = (function (){var statearr_74730 = state_74698;
(statearr_74730[(8)] = inst_74678__$1);

return statearr_74730;
})();
if(inst_74680){
var statearr_74731_76254 = state_74698__$1;
(statearr_74731_76254[(1)] = (5));

} else {
var statearr_74732_76255 = state_74698__$1;
(statearr_74732_76255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74699 === (6))){
var state_74698__$1 = state_74698;
var statearr_74735_76256 = state_74698__$1;
(statearr_74735_76256[(2)] = null);

(statearr_74735_76256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74699 === (3))){
var inst_74695 = (state_74698[(2)]);
var inst_74696 = cljs.core.async.close_BANG_(out);
var state_74698__$1 = (function (){var statearr_74743 = state_74698;
(statearr_74743[(9)] = inst_74695);

return statearr_74743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74698__$1,inst_74696);
} else {
if((state_val_74699 === (2))){
var state_74698__$1 = state_74698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74698__$1,(4),ch);
} else {
if((state_val_74699 === (11))){
var inst_74678 = (state_74698[(8)]);
var inst_74687 = (state_74698[(2)]);
var inst_74675 = inst_74678;
var state_74698__$1 = (function (){var statearr_74757 = state_74698;
(statearr_74757[(10)] = inst_74687);

(statearr_74757[(7)] = inst_74675);

return statearr_74757;
})();
var statearr_74760_76260 = state_74698__$1;
(statearr_74760_76260[(2)] = null);

(statearr_74760_76260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74699 === (9))){
var inst_74678 = (state_74698[(8)]);
var state_74698__$1 = state_74698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74698__$1,(11),out,inst_74678);
} else {
if((state_val_74699 === (5))){
var inst_74675 = (state_74698[(7)]);
var inst_74678 = (state_74698[(8)]);
var inst_74682 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74678,inst_74675);
var state_74698__$1 = state_74698;
if(inst_74682){
var statearr_74764_76261 = state_74698__$1;
(statearr_74764_76261[(1)] = (8));

} else {
var statearr_74766_76262 = state_74698__$1;
(statearr_74766_76262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74699 === (10))){
var inst_74690 = (state_74698[(2)]);
var state_74698__$1 = state_74698;
var statearr_74777_76264 = state_74698__$1;
(statearr_74777_76264[(2)] = inst_74690);

(statearr_74777_76264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74699 === (8))){
var inst_74675 = (state_74698[(7)]);
var tmp74763 = inst_74675;
var inst_74675__$1 = tmp74763;
var state_74698__$1 = (function (){var statearr_74778 = state_74698;
(statearr_74778[(7)] = inst_74675__$1);

return statearr_74778;
})();
var statearr_74783_76267 = state_74698__$1;
(statearr_74783_76267[(2)] = null);

(statearr_74783_76267[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_74785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74785[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_74785[(1)] = (1));

return statearr_74785;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_74698){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_74698);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e74786){var ex__21351__auto__ = e74786;
var statearr_74787_76268 = state_74698;
(statearr_74787_76268[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_74698[(4)]))){
var statearr_74790_76273 = state_74698;
(statearr_74790_76273[(1)] = cljs.core.first((state_74698[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76274 = state_74698;
state_74698 = G__76274;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_74698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_74698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_74797 = f__21537__auto__();
(statearr_74797[(6)] = c__21535__auto___76249);

return statearr_74797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__74800 = arguments.length;
switch (G__74800) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21535__auto___76278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_74857){
var state_val_74858 = (state_74857[(1)]);
if((state_val_74858 === (7))){
var inst_74853 = (state_74857[(2)]);
var state_74857__$1 = state_74857;
var statearr_74865_76282 = state_74857__$1;
(statearr_74865_76282[(2)] = inst_74853);

(statearr_74865_76282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (1))){
var inst_74812 = (new Array(n));
var inst_74813 = inst_74812;
var inst_74814 = (0);
var state_74857__$1 = (function (){var statearr_74868 = state_74857;
(statearr_74868[(7)] = inst_74814);

(statearr_74868[(8)] = inst_74813);

return statearr_74868;
})();
var statearr_74869_76285 = state_74857__$1;
(statearr_74869_76285[(2)] = null);

(statearr_74869_76285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (4))){
var inst_74817 = (state_74857[(9)]);
var inst_74817__$1 = (state_74857[(2)]);
var inst_74818 = (inst_74817__$1 == null);
var inst_74819 = cljs.core.not(inst_74818);
var state_74857__$1 = (function (){var statearr_74881 = state_74857;
(statearr_74881[(9)] = inst_74817__$1);

return statearr_74881;
})();
if(inst_74819){
var statearr_74883_76286 = state_74857__$1;
(statearr_74883_76286[(1)] = (5));

} else {
var statearr_74884_76287 = state_74857__$1;
(statearr_74884_76287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (15))){
var inst_74847 = (state_74857[(2)]);
var state_74857__$1 = state_74857;
var statearr_74885_76288 = state_74857__$1;
(statearr_74885_76288[(2)] = inst_74847);

(statearr_74885_76288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (13))){
var state_74857__$1 = state_74857;
var statearr_74888_76289 = state_74857__$1;
(statearr_74888_76289[(2)] = null);

(statearr_74888_76289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (6))){
var inst_74814 = (state_74857[(7)]);
var inst_74843 = (inst_74814 > (0));
var state_74857__$1 = state_74857;
if(cljs.core.truth_(inst_74843)){
var statearr_74889_76290 = state_74857__$1;
(statearr_74889_76290[(1)] = (12));

} else {
var statearr_74890_76291 = state_74857__$1;
(statearr_74890_76291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (3))){
var inst_74855 = (state_74857[(2)]);
var state_74857__$1 = state_74857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74857__$1,inst_74855);
} else {
if((state_val_74858 === (12))){
var inst_74813 = (state_74857[(8)]);
var inst_74845 = cljs.core.vec(inst_74813);
var state_74857__$1 = state_74857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74857__$1,(15),out,inst_74845);
} else {
if((state_val_74858 === (2))){
var state_74857__$1 = state_74857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74857__$1,(4),ch);
} else {
if((state_val_74858 === (11))){
var inst_74836 = (state_74857[(2)]);
var inst_74837 = (new Array(n));
var inst_74813 = inst_74837;
var inst_74814 = (0);
var state_74857__$1 = (function (){var statearr_74901 = state_74857;
(statearr_74901[(7)] = inst_74814);

(statearr_74901[(8)] = inst_74813);

(statearr_74901[(10)] = inst_74836);

return statearr_74901;
})();
var statearr_74902_76299 = state_74857__$1;
(statearr_74902_76299[(2)] = null);

(statearr_74902_76299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (9))){
var inst_74813 = (state_74857[(8)]);
var inst_74834 = cljs.core.vec(inst_74813);
var state_74857__$1 = state_74857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74857__$1,(11),out,inst_74834);
} else {
if((state_val_74858 === (5))){
var inst_74817 = (state_74857[(9)]);
var inst_74814 = (state_74857[(7)]);
var inst_74822 = (state_74857[(11)]);
var inst_74813 = (state_74857[(8)]);
var inst_74821 = (inst_74813[inst_74814] = inst_74817);
var inst_74822__$1 = (inst_74814 + (1));
var inst_74825 = (inst_74822__$1 < n);
var state_74857__$1 = (function (){var statearr_74905 = state_74857;
(statearr_74905[(11)] = inst_74822__$1);

(statearr_74905[(12)] = inst_74821);

return statearr_74905;
})();
if(cljs.core.truth_(inst_74825)){
var statearr_74906_76302 = state_74857__$1;
(statearr_74906_76302[(1)] = (8));

} else {
var statearr_74907_76303 = state_74857__$1;
(statearr_74907_76303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (14))){
var inst_74850 = (state_74857[(2)]);
var inst_74851 = cljs.core.async.close_BANG_(out);
var state_74857__$1 = (function (){var statearr_74909 = state_74857;
(statearr_74909[(13)] = inst_74850);

return statearr_74909;
})();
var statearr_74910_76304 = state_74857__$1;
(statearr_74910_76304[(2)] = inst_74851);

(statearr_74910_76304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (10))){
var inst_74840 = (state_74857[(2)]);
var state_74857__$1 = state_74857;
var statearr_74914_76305 = state_74857__$1;
(statearr_74914_76305[(2)] = inst_74840);

(statearr_74914_76305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74858 === (8))){
var inst_74822 = (state_74857[(11)]);
var inst_74813 = (state_74857[(8)]);
var tmp74908 = inst_74813;
var inst_74813__$1 = tmp74908;
var inst_74814 = inst_74822;
var state_74857__$1 = (function (){var statearr_74915 = state_74857;
(statearr_74915[(7)] = inst_74814);

(statearr_74915[(8)] = inst_74813__$1);

return statearr_74915;
})();
var statearr_74916_76306 = state_74857__$1;
(statearr_74916_76306[(2)] = null);

(statearr_74916_76306[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_74927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74927[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_74927[(1)] = (1));

return statearr_74927;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_74857){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_74857);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e74934){var ex__21351__auto__ = e74934;
var statearr_74935_76307 = state_74857;
(statearr_74935_76307[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_74857[(4)]))){
var statearr_74937_76312 = state_74857;
(statearr_74937_76312[(1)] = cljs.core.first((state_74857[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76314 = state_74857;
state_74857 = G__76314;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_74857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_74857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_74940 = f__21537__auto__();
(statearr_74940[(6)] = c__21535__auto___76278);

return statearr_74940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__74970 = arguments.length;
switch (G__74970) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21535__auto___76321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_75039){
var state_val_75040 = (state_75039[(1)]);
if((state_val_75040 === (7))){
var inst_75035 = (state_75039[(2)]);
var state_75039__$1 = state_75039;
var statearr_75049_76322 = state_75039__$1;
(statearr_75049_76322[(2)] = inst_75035);

(statearr_75049_76322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (1))){
var inst_74983 = [];
var inst_74984 = inst_74983;
var inst_74985 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_75039__$1 = (function (){var statearr_75053 = state_75039;
(statearr_75053[(7)] = inst_74985);

(statearr_75053[(8)] = inst_74984);

return statearr_75053;
})();
var statearr_75054_76327 = state_75039__$1;
(statearr_75054_76327[(2)] = null);

(statearr_75054_76327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (4))){
var inst_74992 = (state_75039[(9)]);
var inst_74992__$1 = (state_75039[(2)]);
var inst_74993 = (inst_74992__$1 == null);
var inst_74994 = cljs.core.not(inst_74993);
var state_75039__$1 = (function (){var statearr_75055 = state_75039;
(statearr_75055[(9)] = inst_74992__$1);

return statearr_75055;
})();
if(inst_74994){
var statearr_75056_76343 = state_75039__$1;
(statearr_75056_76343[(1)] = (5));

} else {
var statearr_75060_76347 = state_75039__$1;
(statearr_75060_76347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (15))){
var inst_74984 = (state_75039[(8)]);
var inst_75027 = cljs.core.vec(inst_74984);
var state_75039__$1 = state_75039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75039__$1,(18),out,inst_75027);
} else {
if((state_val_75040 === (13))){
var inst_75021 = (state_75039[(2)]);
var state_75039__$1 = state_75039;
var statearr_75062_76348 = state_75039__$1;
(statearr_75062_76348[(2)] = inst_75021);

(statearr_75062_76348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (6))){
var inst_74984 = (state_75039[(8)]);
var inst_75024 = inst_74984.length;
var inst_75025 = (inst_75024 > (0));
var state_75039__$1 = state_75039;
if(cljs.core.truth_(inst_75025)){
var statearr_75065_76349 = state_75039__$1;
(statearr_75065_76349[(1)] = (15));

} else {
var statearr_75074_76350 = state_75039__$1;
(statearr_75074_76350[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (17))){
var inst_75032 = (state_75039[(2)]);
var inst_75033 = cljs.core.async.close_BANG_(out);
var state_75039__$1 = (function (){var statearr_75075 = state_75039;
(statearr_75075[(10)] = inst_75032);

return statearr_75075;
})();
var statearr_75076_76353 = state_75039__$1;
(statearr_75076_76353[(2)] = inst_75033);

(statearr_75076_76353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (3))){
var inst_75037 = (state_75039[(2)]);
var state_75039__$1 = state_75039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75039__$1,inst_75037);
} else {
if((state_val_75040 === (12))){
var inst_74984 = (state_75039[(8)]);
var inst_75008 = cljs.core.vec(inst_74984);
var state_75039__$1 = state_75039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75039__$1,(14),out,inst_75008);
} else {
if((state_val_75040 === (2))){
var state_75039__$1 = state_75039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75039__$1,(4),ch);
} else {
if((state_val_75040 === (11))){
var inst_74997 = (state_75039[(11)]);
var inst_74992 = (state_75039[(9)]);
var inst_74984 = (state_75039[(8)]);
var inst_75005 = inst_74984.push(inst_74992);
var tmp75077 = inst_74984;
var inst_74984__$1 = tmp75077;
var inst_74985 = inst_74997;
var state_75039__$1 = (function (){var statearr_75084 = state_75039;
(statearr_75084[(12)] = inst_75005);

(statearr_75084[(7)] = inst_74985);

(statearr_75084[(8)] = inst_74984__$1);

return statearr_75084;
})();
var statearr_75085_76360 = state_75039__$1;
(statearr_75085_76360[(2)] = null);

(statearr_75085_76360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (9))){
var inst_74985 = (state_75039[(7)]);
var inst_75001 = cljs.core.keyword_identical_QMARK_(inst_74985,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_75039__$1 = state_75039;
var statearr_75086_76363 = state_75039__$1;
(statearr_75086_76363[(2)] = inst_75001);

(statearr_75086_76363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (5))){
var inst_74997 = (state_75039[(11)]);
var inst_74998 = (state_75039[(13)]);
var inst_74985 = (state_75039[(7)]);
var inst_74992 = (state_75039[(9)]);
var inst_74997__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_74992) : f.call(null,inst_74992));
var inst_74998__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74997__$1,inst_74985);
var state_75039__$1 = (function (){var statearr_75089 = state_75039;
(statearr_75089[(11)] = inst_74997__$1);

(statearr_75089[(13)] = inst_74998__$1);

return statearr_75089;
})();
if(inst_74998__$1){
var statearr_75090_76364 = state_75039__$1;
(statearr_75090_76364[(1)] = (8));

} else {
var statearr_75091_76365 = state_75039__$1;
(statearr_75091_76365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (14))){
var inst_74997 = (state_75039[(11)]);
var inst_74992 = (state_75039[(9)]);
var inst_75010 = (state_75039[(2)]);
var inst_75015 = [];
var inst_75017 = inst_75015.push(inst_74992);
var inst_74984 = inst_75015;
var inst_74985 = inst_74997;
var state_75039__$1 = (function (){var statearr_75092 = state_75039;
(statearr_75092[(14)] = inst_75017);

(statearr_75092[(15)] = inst_75010);

(statearr_75092[(7)] = inst_74985);

(statearr_75092[(8)] = inst_74984);

return statearr_75092;
})();
var statearr_75093_76373 = state_75039__$1;
(statearr_75093_76373[(2)] = null);

(statearr_75093_76373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (16))){
var state_75039__$1 = state_75039;
var statearr_75094_76375 = state_75039__$1;
(statearr_75094_76375[(2)] = null);

(statearr_75094_76375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (10))){
var inst_75003 = (state_75039[(2)]);
var state_75039__$1 = state_75039;
if(cljs.core.truth_(inst_75003)){
var statearr_75096_76376 = state_75039__$1;
(statearr_75096_76376[(1)] = (11));

} else {
var statearr_75097_76377 = state_75039__$1;
(statearr_75097_76377[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (18))){
var inst_75029 = (state_75039[(2)]);
var state_75039__$1 = state_75039;
var statearr_75098_76378 = state_75039__$1;
(statearr_75098_76378[(2)] = inst_75029);

(statearr_75098_76378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75040 === (8))){
var inst_74998 = (state_75039[(13)]);
var state_75039__$1 = state_75039;
var statearr_75099_76381 = state_75039__$1;
(statearr_75099_76381[(2)] = inst_74998);

(statearr_75099_76381[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__21348__auto__ = null;
var cljs$core$async$state_machine__21348__auto____0 = (function (){
var statearr_75100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75100[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_75100[(1)] = (1));

return statearr_75100;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_75039){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_75039);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e75103){var ex__21351__auto__ = e75103;
var statearr_75104_76386 = state_75039;
(statearr_75104_76386[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_75039[(4)]))){
var statearr_75105_76387 = state_75039;
(statearr_75105_76387[(1)] = cljs.core.first((state_75039[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76391 = state_75039;
state_75039 = G__76391;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_75039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_75039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_75111 = f__21537__auto__();
(statearr_75111[(6)] = c__21535__auto___76321);

return statearr_75111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
