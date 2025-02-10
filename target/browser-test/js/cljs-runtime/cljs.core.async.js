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
cljs.core.async.t_cljs$core$async31603 = (function (f,blockable,meta31604){
this.f = f;
this.blockable = blockable;
this.meta31604 = meta31604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31605,meta31604__$1){
var self__ = this;
var _31605__$1 = this;
return (new cljs.core.async.t_cljs$core$async31603(self__.f,self__.blockable,meta31604__$1));
}));

(cljs.core.async.t_cljs$core$async31603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31605){
var self__ = this;
var _31605__$1 = this;
return self__.meta31604;
}));

(cljs.core.async.t_cljs$core$async31603.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31604","meta31604",-2001237763,null)], null);
}));

(cljs.core.async.t_cljs$core$async31603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31603");

(cljs.core.async.t_cljs$core$async31603.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31603.
 */
cljs.core.async.__GT_t_cljs$core$async31603 = (function cljs$core$async$__GT_t_cljs$core$async31603(f,blockable,meta31604){
return (new cljs.core.async.t_cljs$core$async31603(f,blockable,meta31604));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31590 = arguments.length;
switch (G__31590) {
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
return (new cljs.core.async.t_cljs$core$async31603(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31701 = arguments.length;
switch (G__31701) {
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
var G__31745 = arguments.length;
switch (G__31745) {
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
var G__31774 = arguments.length;
switch (G__31774) {
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
var val_35238 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35238) : fn1.call(null,val_35238));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35238) : fn1.call(null,val_35238));
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
var G__31809 = arguments.length;
switch (G__31809) {
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
var n__5636__auto___35242 = n;
var x_35243 = (0);
while(true){
if((x_35243 < n__5636__auto___35242)){
(a[x_35243] = x_35243);

var G__35244 = (x_35243 + (1));
x_35243 = G__35244;
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
cljs.core.async.t_cljs$core$async31875 = (function (flag,meta31876){
this.flag = flag;
this.meta31876 = meta31876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31877,meta31876__$1){
var self__ = this;
var _31877__$1 = this;
return (new cljs.core.async.t_cljs$core$async31875(self__.flag,meta31876__$1));
}));

(cljs.core.async.t_cljs$core$async31875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31877){
var self__ = this;
var _31877__$1 = this;
return self__.meta31876;
}));

(cljs.core.async.t_cljs$core$async31875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31876","meta31876",1239024946,null)], null);
}));

(cljs.core.async.t_cljs$core$async31875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31875");

(cljs.core.async.t_cljs$core$async31875.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31875.
 */
cljs.core.async.__GT_t_cljs$core$async31875 = (function cljs$core$async$__GT_t_cljs$core$async31875(flag,meta31876){
return (new cljs.core.async.t_cljs$core$async31875(flag,meta31876));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31875(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31913 = (function (flag,cb,meta31914){
this.flag = flag;
this.cb = cb;
this.meta31914 = meta31914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31915,meta31914__$1){
var self__ = this;
var _31915__$1 = this;
return (new cljs.core.async.t_cljs$core$async31913(self__.flag,self__.cb,meta31914__$1));
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31915){
var self__ = this;
var _31915__$1 = this;
return self__.meta31914;
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31914","meta31914",-178376901,null)], null);
}));

(cljs.core.async.t_cljs$core$async31913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31913");

(cljs.core.async.t_cljs$core$async31913.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31913.
 */
cljs.core.async.__GT_t_cljs$core$async31913 = (function cljs$core$async$__GT_t_cljs$core$async31913(flag,cb,meta31914){
return (new cljs.core.async.t_cljs$core$async31913(flag,cb,meta31914));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31913(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31959_SHARP_){
var G__31987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31959_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31987) : fret.call(null,G__31987));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31960_SHARP_){
var G__31990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31960_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31990) : fret.call(null,G__31990));
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
var G__35254 = (i + (1));
i = G__35254;
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
var len__5769__auto___35255 = arguments.length;
var i__5770__auto___35256 = (0);
while(true){
if((i__5770__auto___35256 < len__5769__auto___35255)){
args__5775__auto__.push((arguments[i__5770__auto___35256]));

var G__35257 = (i__5770__auto___35256 + (1));
i__5770__auto___35256 = G__35257;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32022){
var map__32024 = p__32022;
var map__32024__$1 = cljs.core.__destructure_map(map__32024);
var opts = map__32024__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32017){
var G__32018 = cljs.core.first(seq32017);
var seq32017__$1 = cljs.core.next(seq32017);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32018,seq32017__$1);
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
var G__32043 = arguments.length;
switch (G__32043) {
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
var c__21535__auto___35273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32075){
var state_val_32076 = (state_32075[(1)]);
if((state_val_32076 === (7))){
var inst_32069 = (state_32075[(2)]);
var state_32075__$1 = state_32075;
var statearr_32077_35274 = state_32075__$1;
(statearr_32077_35274[(2)] = inst_32069);

(statearr_32077_35274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (1))){
var state_32075__$1 = state_32075;
var statearr_32078_35275 = state_32075__$1;
(statearr_32078_35275[(2)] = null);

(statearr_32078_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (4))){
var inst_32052 = (state_32075[(7)]);
var inst_32052__$1 = (state_32075[(2)]);
var inst_32053 = (inst_32052__$1 == null);
var state_32075__$1 = (function (){var statearr_32089 = state_32075;
(statearr_32089[(7)] = inst_32052__$1);

return statearr_32089;
})();
if(cljs.core.truth_(inst_32053)){
var statearr_32093_35277 = state_32075__$1;
(statearr_32093_35277[(1)] = (5));

} else {
var statearr_32100_35278 = state_32075__$1;
(statearr_32100_35278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (13))){
var state_32075__$1 = state_32075;
var statearr_32108_35279 = state_32075__$1;
(statearr_32108_35279[(2)] = null);

(statearr_32108_35279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (6))){
var inst_32052 = (state_32075[(7)]);
var state_32075__$1 = state_32075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32075__$1,(11),to,inst_32052);
} else {
if((state_val_32076 === (3))){
var inst_32073 = (state_32075[(2)]);
var state_32075__$1 = state_32075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32075__$1,inst_32073);
} else {
if((state_val_32076 === (12))){
var state_32075__$1 = state_32075;
var statearr_32110_35280 = state_32075__$1;
(statearr_32110_35280[(2)] = null);

(statearr_32110_35280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (2))){
var state_32075__$1 = state_32075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32075__$1,(4),from);
} else {
if((state_val_32076 === (11))){
var inst_32062 = (state_32075[(2)]);
var state_32075__$1 = state_32075;
if(cljs.core.truth_(inst_32062)){
var statearr_32112_35282 = state_32075__$1;
(statearr_32112_35282[(1)] = (12));

} else {
var statearr_32116_35283 = state_32075__$1;
(statearr_32116_35283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (9))){
var state_32075__$1 = state_32075;
var statearr_32119_35284 = state_32075__$1;
(statearr_32119_35284[(2)] = null);

(statearr_32119_35284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (5))){
var state_32075__$1 = state_32075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32123_35285 = state_32075__$1;
(statearr_32123_35285[(1)] = (8));

} else {
var statearr_32126_35287 = state_32075__$1;
(statearr_32126_35287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (14))){
var inst_32067 = (state_32075[(2)]);
var state_32075__$1 = state_32075;
var statearr_32127_35289 = state_32075__$1;
(statearr_32127_35289[(2)] = inst_32067);

(statearr_32127_35289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (10))){
var inst_32059 = (state_32075[(2)]);
var state_32075__$1 = state_32075;
var statearr_32130_35291 = state_32075__$1;
(statearr_32130_35291[(2)] = inst_32059);

(statearr_32130_35291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (8))){
var inst_32056 = cljs.core.async.close_BANG_(to);
var state_32075__$1 = state_32075;
var statearr_32131_35292 = state_32075__$1;
(statearr_32131_35292[(2)] = inst_32056);

(statearr_32131_35292[(1)] = (10));


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
var statearr_32133 = [null,null,null,null,null,null,null,null];
(statearr_32133[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_32133[(1)] = (1));

return statearr_32133;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_32075){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32075);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32135){var ex__21351__auto__ = e32135;
var statearr_32136_35293 = state_32075;
(statearr_32136_35293[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32075[(4)]))){
var statearr_32137_35294 = state_32075;
(statearr_32137_35294[(1)] = cljs.core.first((state_32075[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35295 = state_32075;
state_32075 = G__35295;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_32075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_32075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32148 = f__21537__auto__();
(statearr_32148[(6)] = c__21535__auto___35273);

return statearr_32148;
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
var process__$1 = (function (p__32188){
var vec__32191 = p__32188;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32191,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32191,(1),null);
var job = vec__32191;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21535__auto___35300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32216){
var state_val_32217 = (state_32216[(1)]);
if((state_val_32217 === (1))){
var state_32216__$1 = state_32216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32216__$1,(2),res,v);
} else {
if((state_val_32217 === (2))){
var inst_32212 = (state_32216[(2)]);
var inst_32213 = cljs.core.async.close_BANG_(res);
var state_32216__$1 = (function (){var statearr_32225 = state_32216;
(statearr_32225[(7)] = inst_32212);

return statearr_32225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32216__$1,inst_32213);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_32226 = [null,null,null,null,null,null,null,null];
(statearr_32226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_32226[(1)] = (1));

return statearr_32226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_32216){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32216);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32227){var ex__21351__auto__ = e32227;
var statearr_32229_35301 = state_32216;
(statearr_32229_35301[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32216[(4)]))){
var statearr_32231_35302 = state_32216;
(statearr_32231_35302[(1)] = cljs.core.first((state_32216[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35304 = state_32216;
state_32216 = G__35304;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_32216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_32216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32236 = f__21537__auto__();
(statearr_32236[(6)] = c__21535__auto___35300);

return statearr_32236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32240){
var vec__32241 = p__32240;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32241,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32241,(1),null);
var job = vec__32241;
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
var n__5636__auto___35307 = n;
var __35308 = (0);
while(true){
if((__35308 < n__5636__auto___35307)){
var G__32251_35309 = type;
var G__32251_35310__$1 = (((G__32251_35309 instanceof cljs.core.Keyword))?G__32251_35309.fqn:null);
switch (G__32251_35310__$1) {
case "compute":
var c__21535__auto___35312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35308,c__21535__auto___35312,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async){
return (function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = ((function (__35308,c__21535__auto___35312,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async){
return (function (state_32273){
var state_val_32274 = (state_32273[(1)]);
if((state_val_32274 === (1))){
var state_32273__$1 = state_32273;
var statearr_32277_35318 = state_32273__$1;
(statearr_32277_35318[(2)] = null);

(statearr_32277_35318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (2))){
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32273__$1,(4),jobs);
} else {
if((state_val_32274 === (3))){
var inst_32271 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32273__$1,inst_32271);
} else {
if((state_val_32274 === (4))){
var inst_32259 = (state_32273[(2)]);
var inst_32264 = process__$1(inst_32259);
var state_32273__$1 = state_32273;
if(cljs.core.truth_(inst_32264)){
var statearr_32280_35319 = state_32273__$1;
(statearr_32280_35319[(1)] = (5));

} else {
var statearr_32281_35320 = state_32273__$1;
(statearr_32281_35320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (5))){
var state_32273__$1 = state_32273;
var statearr_32282_35321 = state_32273__$1;
(statearr_32282_35321[(2)] = null);

(statearr_32282_35321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (6))){
var state_32273__$1 = state_32273;
var statearr_32284_35322 = state_32273__$1;
(statearr_32284_35322[(2)] = null);

(statearr_32284_35322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (7))){
var inst_32269 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32288_35323 = state_32273__$1;
(statearr_32288_35323[(2)] = inst_32269);

(statearr_32288_35323[(1)] = (3));


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
});})(__35308,c__21535__auto___35312,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async))
;
return ((function (__35308,switch__21347__auto__,c__21535__auto___35312,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_32289 = [null,null,null,null,null,null,null];
(statearr_32289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_32289[(1)] = (1));

return statearr_32289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_32273){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32273);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32294){var ex__21351__auto__ = e32294;
var statearr_32295_35327 = state_32273;
(statearr_32295_35327[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32273[(4)]))){
var statearr_32296_35328 = state_32273;
(statearr_32296_35328[(1)] = cljs.core.first((state_32273[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35329 = state_32273;
state_32273 = G__35329;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_32273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_32273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
;})(__35308,switch__21347__auto__,c__21535__auto___35312,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async))
})();
var state__21538__auto__ = (function (){var statearr_32298 = f__21537__auto__();
(statearr_32298[(6)] = c__21535__auto___35312);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
});})(__35308,c__21535__auto___35312,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async))
);


break;
case "async":
var c__21535__auto___35330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35308,c__21535__auto___35330,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async){
return (function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = ((function (__35308,c__21535__auto___35330,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async){
return (function (state_32311){
var state_val_32312 = (state_32311[(1)]);
if((state_val_32312 === (1))){
var state_32311__$1 = state_32311;
var statearr_32315_35332 = state_32311__$1;
(statearr_32315_35332[(2)] = null);

(statearr_32315_35332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (2))){
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32311__$1,(4),jobs);
} else {
if((state_val_32312 === (3))){
var inst_32309 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32311__$1,inst_32309);
} else {
if((state_val_32312 === (4))){
var inst_32301 = (state_32311[(2)]);
var inst_32302 = async(inst_32301);
var state_32311__$1 = state_32311;
if(cljs.core.truth_(inst_32302)){
var statearr_32319_35333 = state_32311__$1;
(statearr_32319_35333[(1)] = (5));

} else {
var statearr_32321_35334 = state_32311__$1;
(statearr_32321_35334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (5))){
var state_32311__$1 = state_32311;
var statearr_32322_35335 = state_32311__$1;
(statearr_32322_35335[(2)] = null);

(statearr_32322_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (6))){
var state_32311__$1 = state_32311;
var statearr_32326_35336 = state_32311__$1;
(statearr_32326_35336[(2)] = null);

(statearr_32326_35336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (7))){
var inst_32307 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32327_35337 = state_32311__$1;
(statearr_32327_35337[(2)] = inst_32307);

(statearr_32327_35337[(1)] = (3));


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
});})(__35308,c__21535__auto___35330,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async))
;
return ((function (__35308,switch__21347__auto__,c__21535__auto___35330,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0 = (function (){
var statearr_32329 = [null,null,null,null,null,null,null];
(statearr_32329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_32329[(1)] = (1));

return statearr_32329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_32311){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32311);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32330){var ex__21351__auto__ = e32330;
var statearr_32331_35342 = state_32311;
(statearr_32331_35342[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32311[(4)]))){
var statearr_32332_35344 = state_32311;
(statearr_32332_35344[(1)] = cljs.core.first((state_32311[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35351 = state_32311;
state_32311 = G__35351;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_32311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_32311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
;})(__35308,switch__21347__auto__,c__21535__auto___35330,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async))
})();
var state__21538__auto__ = (function (){var statearr_32333 = f__21537__auto__();
(statearr_32333[(6)] = c__21535__auto___35330);

return statearr_32333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
});})(__35308,c__21535__auto___35330,G__32251_35309,G__32251_35310__$1,n__5636__auto___35307,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32251_35310__$1)].join('')));

}

var G__35356 = (__35308 + (1));
__35308 = G__35356;
continue;
} else {
}
break;
}

var c__21535__auto___35357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32356){
var state_val_32357 = (state_32356[(1)]);
if((state_val_32357 === (7))){
var inst_32351 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32365_35359 = state_32356__$1;
(statearr_32365_35359[(2)] = inst_32351);

(statearr_32365_35359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (1))){
var state_32356__$1 = state_32356;
var statearr_32366_35360 = state_32356__$1;
(statearr_32366_35360[(2)] = null);

(statearr_32366_35360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (4))){
var inst_32336 = (state_32356[(7)]);
var inst_32336__$1 = (state_32356[(2)]);
var inst_32337 = (inst_32336__$1 == null);
var state_32356__$1 = (function (){var statearr_32367 = state_32356;
(statearr_32367[(7)] = inst_32336__$1);

return statearr_32367;
})();
if(cljs.core.truth_(inst_32337)){
var statearr_32368_35361 = state_32356__$1;
(statearr_32368_35361[(1)] = (5));

} else {
var statearr_32369_35362 = state_32356__$1;
(statearr_32369_35362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (6))){
var inst_32336 = (state_32356[(7)]);
var inst_32341 = (state_32356[(8)]);
var inst_32341__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32343 = [inst_32336,inst_32341__$1];
var inst_32344 = (new cljs.core.PersistentVector(null,2,(5),inst_32342,inst_32343,null));
var state_32356__$1 = (function (){var statearr_32371 = state_32356;
(statearr_32371[(8)] = inst_32341__$1);

return statearr_32371;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32356__$1,(8),jobs,inst_32344);
} else {
if((state_val_32357 === (3))){
var inst_32353 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32356__$1,inst_32353);
} else {
if((state_val_32357 === (2))){
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32356__$1,(4),from);
} else {
if((state_val_32357 === (9))){
var inst_32348 = (state_32356[(2)]);
var state_32356__$1 = (function (){var statearr_32372 = state_32356;
(statearr_32372[(9)] = inst_32348);

return statearr_32372;
})();
var statearr_32373_35373 = state_32356__$1;
(statearr_32373_35373[(2)] = null);

(statearr_32373_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (5))){
var inst_32339 = cljs.core.async.close_BANG_(jobs);
var state_32356__$1 = state_32356;
var statearr_32374_35374 = state_32356__$1;
(statearr_32374_35374[(2)] = inst_32339);

(statearr_32374_35374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (8))){
var inst_32341 = (state_32356[(8)]);
var inst_32346 = (state_32356[(2)]);
var state_32356__$1 = (function (){var statearr_32377 = state_32356;
(statearr_32377[(10)] = inst_32346);

return statearr_32377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32356__$1,(9),results,inst_32341);
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
var statearr_32378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_32378[(1)] = (1));

return statearr_32378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_32356){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32356);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32380){var ex__21351__auto__ = e32380;
var statearr_32383_35379 = state_32356;
(statearr_32383_35379[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32356[(4)]))){
var statearr_32387_35380 = state_32356;
(statearr_32387_35380[(1)] = cljs.core.first((state_32356[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35381 = state_32356;
state_32356 = G__35381;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_32356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_32356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32390 = f__21537__auto__();
(statearr_32390[(6)] = c__21535__auto___35357);

return statearr_32390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


var c__21535__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32429){
var state_val_32430 = (state_32429[(1)]);
if((state_val_32430 === (7))){
var inst_32424 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
var statearr_32432_35382 = state_32429__$1;
(statearr_32432_35382[(2)] = inst_32424);

(statearr_32432_35382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (20))){
var state_32429__$1 = state_32429;
var statearr_32433_35383 = state_32429__$1;
(statearr_32433_35383[(2)] = null);

(statearr_32433_35383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (1))){
var state_32429__$1 = state_32429;
var statearr_32434_35391 = state_32429__$1;
(statearr_32434_35391[(2)] = null);

(statearr_32434_35391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (4))){
var inst_32393 = (state_32429[(7)]);
var inst_32393__$1 = (state_32429[(2)]);
var inst_32394 = (inst_32393__$1 == null);
var state_32429__$1 = (function (){var statearr_32438 = state_32429;
(statearr_32438[(7)] = inst_32393__$1);

return statearr_32438;
})();
if(cljs.core.truth_(inst_32394)){
var statearr_32439_35394 = state_32429__$1;
(statearr_32439_35394[(1)] = (5));

} else {
var statearr_32440_35395 = state_32429__$1;
(statearr_32440_35395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (15))){
var inst_32406 = (state_32429[(8)]);
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32429__$1,(18),to,inst_32406);
} else {
if((state_val_32430 === (21))){
var inst_32419 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
var statearr_32443_35398 = state_32429__$1;
(statearr_32443_35398[(2)] = inst_32419);

(statearr_32443_35398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (13))){
var inst_32421 = (state_32429[(2)]);
var state_32429__$1 = (function (){var statearr_32448 = state_32429;
(statearr_32448[(9)] = inst_32421);

return statearr_32448;
})();
var statearr_32449_35400 = state_32429__$1;
(statearr_32449_35400[(2)] = null);

(statearr_32449_35400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (6))){
var inst_32393 = (state_32429[(7)]);
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32429__$1,(11),inst_32393);
} else {
if((state_val_32430 === (17))){
var inst_32414 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
if(cljs.core.truth_(inst_32414)){
var statearr_32450_35401 = state_32429__$1;
(statearr_32450_35401[(1)] = (19));

} else {
var statearr_32453_35402 = state_32429__$1;
(statearr_32453_35402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (3))){
var inst_32426 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32429__$1,inst_32426);
} else {
if((state_val_32430 === (12))){
var inst_32403 = (state_32429[(10)]);
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32429__$1,(14),inst_32403);
} else {
if((state_val_32430 === (2))){
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32429__$1,(4),results);
} else {
if((state_val_32430 === (19))){
var state_32429__$1 = state_32429;
var statearr_32460_35403 = state_32429__$1;
(statearr_32460_35403[(2)] = null);

(statearr_32460_35403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (11))){
var inst_32403 = (state_32429[(2)]);
var state_32429__$1 = (function (){var statearr_32466 = state_32429;
(statearr_32466[(10)] = inst_32403);

return statearr_32466;
})();
var statearr_32467_35404 = state_32429__$1;
(statearr_32467_35404[(2)] = null);

(statearr_32467_35404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (9))){
var state_32429__$1 = state_32429;
var statearr_32470_35407 = state_32429__$1;
(statearr_32470_35407[(2)] = null);

(statearr_32470_35407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (5))){
var state_32429__$1 = state_32429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32471_35408 = state_32429__$1;
(statearr_32471_35408[(1)] = (8));

} else {
var statearr_32472_35409 = state_32429__$1;
(statearr_32472_35409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (14))){
var inst_32406 = (state_32429[(8)]);
var inst_32408 = (state_32429[(11)]);
var inst_32406__$1 = (state_32429[(2)]);
var inst_32407 = (inst_32406__$1 == null);
var inst_32408__$1 = cljs.core.not(inst_32407);
var state_32429__$1 = (function (){var statearr_32473 = state_32429;
(statearr_32473[(8)] = inst_32406__$1);

(statearr_32473[(11)] = inst_32408__$1);

return statearr_32473;
})();
if(inst_32408__$1){
var statearr_32477_35415 = state_32429__$1;
(statearr_32477_35415[(1)] = (15));

} else {
var statearr_32478_35417 = state_32429__$1;
(statearr_32478_35417[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (16))){
var inst_32408 = (state_32429[(11)]);
var state_32429__$1 = state_32429;
var statearr_32479_35419 = state_32429__$1;
(statearr_32479_35419[(2)] = inst_32408);

(statearr_32479_35419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (10))){
var inst_32400 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
var statearr_32481_35420 = state_32429__$1;
(statearr_32481_35420[(2)] = inst_32400);

(statearr_32481_35420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (18))){
var inst_32411 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
var statearr_32482_35421 = state_32429__$1;
(statearr_32482_35421[(2)] = inst_32411);

(statearr_32482_35421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (8))){
var inst_32397 = cljs.core.async.close_BANG_(to);
var state_32429__$1 = state_32429;
var statearr_32485_35422 = state_32429__$1;
(statearr_32485_35422[(2)] = inst_32397);

(statearr_32485_35422[(1)] = (10));


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
var statearr_32488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__);

(statearr_32488[(1)] = (1));

return statearr_32488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1 = (function (state_32429){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32429);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32489){var ex__21351__auto__ = e32489;
var statearr_32490_35431 = state_32429;
(statearr_32490_35431[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32429[(4)]))){
var statearr_32499_35432 = state_32429;
(statearr_32499_35432[(1)] = cljs.core.first((state_32429[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35434 = state_32429;
state_32429 = G__35434;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__ = function(state_32429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1.call(this,state_32429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32502 = f__21537__auto__();
(statearr_32502[(6)] = c__21535__auto__);

return statearr_32502;
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
var G__32505 = arguments.length;
switch (G__32505) {
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
var G__32517 = arguments.length;
switch (G__32517) {
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
var G__32521 = arguments.length;
switch (G__32521) {
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
var c__21535__auto___35459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32552){
var state_val_32553 = (state_32552[(1)]);
if((state_val_32553 === (7))){
var inst_32548 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32557_35460 = state_32552__$1;
(statearr_32557_35460[(2)] = inst_32548);

(statearr_32557_35460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (1))){
var state_32552__$1 = state_32552;
var statearr_32558_35462 = state_32552__$1;
(statearr_32558_35462[(2)] = null);

(statearr_32558_35462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (4))){
var inst_32529 = (state_32552[(7)]);
var inst_32529__$1 = (state_32552[(2)]);
var inst_32530 = (inst_32529__$1 == null);
var state_32552__$1 = (function (){var statearr_32560 = state_32552;
(statearr_32560[(7)] = inst_32529__$1);

return statearr_32560;
})();
if(cljs.core.truth_(inst_32530)){
var statearr_32566_35468 = state_32552__$1;
(statearr_32566_35468[(1)] = (5));

} else {
var statearr_32567_35470 = state_32552__$1;
(statearr_32567_35470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (13))){
var state_32552__$1 = state_32552;
var statearr_32568_35475 = state_32552__$1;
(statearr_32568_35475[(2)] = null);

(statearr_32568_35475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (6))){
var inst_32529 = (state_32552[(7)]);
var inst_32535 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32529) : p.call(null,inst_32529));
var state_32552__$1 = state_32552;
if(cljs.core.truth_(inst_32535)){
var statearr_32569_35481 = state_32552__$1;
(statearr_32569_35481[(1)] = (9));

} else {
var statearr_32570_35489 = state_32552__$1;
(statearr_32570_35489[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (3))){
var inst_32550 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32552__$1,inst_32550);
} else {
if((state_val_32553 === (12))){
var state_32552__$1 = state_32552;
var statearr_32572_35491 = state_32552__$1;
(statearr_32572_35491[(2)] = null);

(statearr_32572_35491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (2))){
var state_32552__$1 = state_32552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32552__$1,(4),ch);
} else {
if((state_val_32553 === (11))){
var inst_32529 = (state_32552[(7)]);
var inst_32539 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32552__$1,(8),inst_32539,inst_32529);
} else {
if((state_val_32553 === (9))){
var state_32552__$1 = state_32552;
var statearr_32573_35499 = state_32552__$1;
(statearr_32573_35499[(2)] = tc);

(statearr_32573_35499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (5))){
var inst_32532 = cljs.core.async.close_BANG_(tc);
var inst_32533 = cljs.core.async.close_BANG_(fc);
var state_32552__$1 = (function (){var statearr_32574 = state_32552;
(statearr_32574[(8)] = inst_32532);

return statearr_32574;
})();
var statearr_32575_35500 = state_32552__$1;
(statearr_32575_35500[(2)] = inst_32533);

(statearr_32575_35500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (14))){
var inst_32546 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32576_35504 = state_32552__$1;
(statearr_32576_35504[(2)] = inst_32546);

(statearr_32576_35504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (10))){
var state_32552__$1 = state_32552;
var statearr_32577_35505 = state_32552__$1;
(statearr_32577_35505[(2)] = fc);

(statearr_32577_35505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (8))){
var inst_32541 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
if(cljs.core.truth_(inst_32541)){
var statearr_32578_35507 = state_32552__$1;
(statearr_32578_35507[(1)] = (12));

} else {
var statearr_32580_35508 = state_32552__$1;
(statearr_32580_35508[(1)] = (13));

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
var statearr_32581 = [null,null,null,null,null,null,null,null,null];
(statearr_32581[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_32581[(1)] = (1));

return statearr_32581;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_32552){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32552);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32583){var ex__21351__auto__ = e32583;
var statearr_32584_35513 = state_32552;
(statearr_32584_35513[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32552[(4)]))){
var statearr_32585_35514 = state_32552;
(statearr_32585_35514[(1)] = cljs.core.first((state_32552[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35515 = state_32552;
state_32552 = G__35515;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_32552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_32552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32586 = f__21537__auto__();
(statearr_32586[(6)] = c__21535__auto___35459);

return statearr_32586;
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
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32627){
var state_val_32628 = (state_32627[(1)]);
if((state_val_32628 === (7))){
var inst_32623 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32629_35519 = state_32627__$1;
(statearr_32629_35519[(2)] = inst_32623);

(statearr_32629_35519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (1))){
var inst_32594 = init;
var inst_32595 = inst_32594;
var state_32627__$1 = (function (){var statearr_32631 = state_32627;
(statearr_32631[(7)] = inst_32595);

return statearr_32631;
})();
var statearr_32632_35522 = state_32627__$1;
(statearr_32632_35522[(2)] = null);

(statearr_32632_35522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (4))){
var inst_32610 = (state_32627[(8)]);
var inst_32610__$1 = (state_32627[(2)]);
var inst_32611 = (inst_32610__$1 == null);
var state_32627__$1 = (function (){var statearr_32635 = state_32627;
(statearr_32635[(8)] = inst_32610__$1);

return statearr_32635;
})();
if(cljs.core.truth_(inst_32611)){
var statearr_32636_35523 = state_32627__$1;
(statearr_32636_35523[(1)] = (5));

} else {
var statearr_32637_35524 = state_32627__$1;
(statearr_32637_35524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (6))){
var inst_32595 = (state_32627[(7)]);
var inst_32614 = (state_32627[(9)]);
var inst_32610 = (state_32627[(8)]);
var inst_32614__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32595,inst_32610) : f.call(null,inst_32595,inst_32610));
var inst_32615 = cljs.core.reduced_QMARK_(inst_32614__$1);
var state_32627__$1 = (function (){var statearr_32638 = state_32627;
(statearr_32638[(9)] = inst_32614__$1);

return statearr_32638;
})();
if(inst_32615){
var statearr_32639_35529 = state_32627__$1;
(statearr_32639_35529[(1)] = (8));

} else {
var statearr_32640_35530 = state_32627__$1;
(statearr_32640_35530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (3))){
var inst_32625 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32627__$1,inst_32625);
} else {
if((state_val_32628 === (2))){
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32627__$1,(4),ch);
} else {
if((state_val_32628 === (9))){
var inst_32614 = (state_32627[(9)]);
var inst_32595 = inst_32614;
var state_32627__$1 = (function (){var statearr_32642 = state_32627;
(statearr_32642[(7)] = inst_32595);

return statearr_32642;
})();
var statearr_32643_35533 = state_32627__$1;
(statearr_32643_35533[(2)] = null);

(statearr_32643_35533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (5))){
var inst_32595 = (state_32627[(7)]);
var state_32627__$1 = state_32627;
var statearr_32644_35534 = state_32627__$1;
(statearr_32644_35534[(2)] = inst_32595);

(statearr_32644_35534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (10))){
var inst_32621 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32645_35535 = state_32627__$1;
(statearr_32645_35535[(2)] = inst_32621);

(statearr_32645_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (8))){
var inst_32614 = (state_32627[(9)]);
var inst_32617 = cljs.core.deref(inst_32614);
var state_32627__$1 = state_32627;
var statearr_32646_35536 = state_32627__$1;
(statearr_32646_35536[(2)] = inst_32617);

(statearr_32646_35536[(1)] = (10));


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
var statearr_32647 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32647[(0)] = cljs$core$async$reduce_$_state_machine__21348__auto__);

(statearr_32647[(1)] = (1));

return statearr_32647;
});
var cljs$core$async$reduce_$_state_machine__21348__auto____1 = (function (state_32627){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32627);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32648){var ex__21351__auto__ = e32648;
var statearr_32649_35539 = state_32627;
(statearr_32649_35539[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32627[(4)]))){
var statearr_32650_35540 = state_32627;
(statearr_32650_35540[(1)] = cljs.core.first((state_32627[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_32627;
state_32627 = G__35542;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21348__auto__ = function(state_32627){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21348__auto____1.call(this,state_32627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21348__auto____0;
cljs$core$async$reduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21348__auto____1;
return cljs$core$async$reduce_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32663 = f__21537__auto__();
(statearr_32663[(6)] = c__21535__auto__);

return statearr_32663;
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
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32675){
var state_val_32676 = (state_32675[(1)]);
if((state_val_32676 === (1))){
var inst_32670 = cljs.core.async.reduce(f__$1,init,ch);
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32675__$1,(2),inst_32670);
} else {
if((state_val_32676 === (2))){
var inst_32672 = (state_32675[(2)]);
var inst_32673 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32672) : f__$1.call(null,inst_32672));
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32675__$1,inst_32673);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21348__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21348__auto____0 = (function (){
var statearr_32680 = [null,null,null,null,null,null,null];
(statearr_32680[(0)] = cljs$core$async$transduce_$_state_machine__21348__auto__);

(statearr_32680[(1)] = (1));

return statearr_32680;
});
var cljs$core$async$transduce_$_state_machine__21348__auto____1 = (function (state_32675){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32675);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32681){var ex__21351__auto__ = e32681;
var statearr_32682_35551 = state_32675;
(statearr_32682_35551[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32675[(4)]))){
var statearr_32683_35552 = state_32675;
(statearr_32683_35552[(1)] = cljs.core.first((state_32675[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35555 = state_32675;
state_32675 = G__35555;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21348__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21348__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21348__auto____0;
cljs$core$async$transduce_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21348__auto____1;
return cljs$core$async$transduce_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32684 = f__21537__auto__();
(statearr_32684[(6)] = c__21535__auto__);

return statearr_32684;
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
var G__32688 = arguments.length;
switch (G__32688) {
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
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32715){
var state_val_32716 = (state_32715[(1)]);
if((state_val_32716 === (7))){
var inst_32697 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32717_35557 = state_32715__$1;
(statearr_32717_35557[(2)] = inst_32697);

(statearr_32717_35557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (1))){
var inst_32690 = cljs.core.seq(coll);
var inst_32691 = inst_32690;
var state_32715__$1 = (function (){var statearr_32718 = state_32715;
(statearr_32718[(7)] = inst_32691);

return statearr_32718;
})();
var statearr_32719_35559 = state_32715__$1;
(statearr_32719_35559[(2)] = null);

(statearr_32719_35559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (4))){
var inst_32691 = (state_32715[(7)]);
var inst_32695 = cljs.core.first(inst_32691);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32715__$1,(7),ch,inst_32695);
} else {
if((state_val_32716 === (13))){
var inst_32709 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32721_35560 = state_32715__$1;
(statearr_32721_35560[(2)] = inst_32709);

(statearr_32721_35560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (6))){
var inst_32700 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32700)){
var statearr_32728_35562 = state_32715__$1;
(statearr_32728_35562[(1)] = (8));

} else {
var statearr_32729_35563 = state_32715__$1;
(statearr_32729_35563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (3))){
var inst_32713 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32715__$1,inst_32713);
} else {
if((state_val_32716 === (12))){
var state_32715__$1 = state_32715;
var statearr_32731_35564 = state_32715__$1;
(statearr_32731_35564[(2)] = null);

(statearr_32731_35564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (2))){
var inst_32691 = (state_32715[(7)]);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32691)){
var statearr_32732_35565 = state_32715__$1;
(statearr_32732_35565[(1)] = (4));

} else {
var statearr_32735_35568 = state_32715__$1;
(statearr_32735_35568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (11))){
var inst_32706 = cljs.core.async.close_BANG_(ch);
var state_32715__$1 = state_32715;
var statearr_32738_35573 = state_32715__$1;
(statearr_32738_35573[(2)] = inst_32706);

(statearr_32738_35573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (9))){
var state_32715__$1 = state_32715;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32740_35574 = state_32715__$1;
(statearr_32740_35574[(1)] = (11));

} else {
var statearr_32741_35575 = state_32715__$1;
(statearr_32741_35575[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (5))){
var inst_32691 = (state_32715[(7)]);
var state_32715__$1 = state_32715;
var statearr_32743_35576 = state_32715__$1;
(statearr_32743_35576[(2)] = inst_32691);

(statearr_32743_35576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (10))){
var inst_32711 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32744_35577 = state_32715__$1;
(statearr_32744_35577[(2)] = inst_32711);

(statearr_32744_35577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (8))){
var inst_32691 = (state_32715[(7)]);
var inst_32702 = cljs.core.next(inst_32691);
var inst_32691__$1 = inst_32702;
var state_32715__$1 = (function (){var statearr_32745 = state_32715;
(statearr_32745[(7)] = inst_32691__$1);

return statearr_32745;
})();
var statearr_32748_35578 = state_32715__$1;
(statearr_32748_35578[(2)] = null);

(statearr_32748_35578[(1)] = (2));


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
var statearr_32749 = [null,null,null,null,null,null,null,null];
(statearr_32749[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_32749[(1)] = (1));

return statearr_32749;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_32715){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32715);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e32750){var ex__21351__auto__ = e32750;
var statearr_32751_35580 = state_32715;
(statearr_32751_35580[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32715[(4)]))){
var statearr_32752_35581 = state_32715;
(statearr_32752_35581[(1)] = cljs.core.first((state_32715[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35582 = state_32715;
state_32715 = G__35582;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_32715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_32715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_32754 = f__21537__auto__();
(statearr_32754[(6)] = c__21535__auto__);

return statearr_32754;
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
var G__32766 = arguments.length;
switch (G__32766) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35601 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35601(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35611 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35611(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35619 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35619(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35624 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35624(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32792 = (function (ch,cs,meta32793){
this.ch = ch;
this.cs = cs;
this.meta32793 = meta32793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32794,meta32793__$1){
var self__ = this;
var _32794__$1 = this;
return (new cljs.core.async.t_cljs$core$async32792(self__.ch,self__.cs,meta32793__$1));
}));

(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32794){
var self__ = this;
var _32794__$1 = this;
return self__.meta32793;
}));

(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32793","meta32793",-1998320934,null)], null);
}));

(cljs.core.async.t_cljs$core$async32792.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32792");

(cljs.core.async.t_cljs$core$async32792.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32792");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32792.
 */
cljs.core.async.__GT_t_cljs$core$async32792 = (function cljs$core$async$__GT_t_cljs$core$async32792(ch,cs,meta32793){
return (new cljs.core.async.t_cljs$core$async32792(ch,cs,meta32793));
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
var m = (new cljs.core.async.t_cljs$core$async32792(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21535__auto___35648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_32958){
var state_val_32959 = (state_32958[(1)]);
if((state_val_32959 === (7))){
var inst_32950 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32968_35657 = state_32958__$1;
(statearr_32968_35657[(2)] = inst_32950);

(statearr_32968_35657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (20))){
var inst_32852 = (state_32958[(7)]);
var inst_32864 = cljs.core.first(inst_32852);
var inst_32865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32864,(0),null);
var inst_32866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32864,(1),null);
var state_32958__$1 = (function (){var statearr_32972 = state_32958;
(statearr_32972[(8)] = inst_32865);

return statearr_32972;
})();
if(cljs.core.truth_(inst_32866)){
var statearr_32973_35672 = state_32958__$1;
(statearr_32973_35672[(1)] = (22));

} else {
var statearr_32974_35674 = state_32958__$1;
(statearr_32974_35674[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (27))){
var inst_32898 = (state_32958[(9)]);
var inst_32809 = (state_32958[(10)]);
var inst_32903 = (state_32958[(11)]);
var inst_32896 = (state_32958[(12)]);
var inst_32903__$1 = cljs.core._nth(inst_32896,inst_32898);
var inst_32904 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32903__$1,inst_32809,done);
var state_32958__$1 = (function (){var statearr_32975 = state_32958;
(statearr_32975[(11)] = inst_32903__$1);

return statearr_32975;
})();
if(cljs.core.truth_(inst_32904)){
var statearr_32976_35676 = state_32958__$1;
(statearr_32976_35676[(1)] = (30));

} else {
var statearr_32978_35677 = state_32958__$1;
(statearr_32978_35677[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (1))){
var state_32958__$1 = state_32958;
var statearr_32982_35678 = state_32958__$1;
(statearr_32982_35678[(2)] = null);

(statearr_32982_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (24))){
var inst_32852 = (state_32958[(7)]);
var inst_32873 = (state_32958[(2)]);
var inst_32874 = cljs.core.next(inst_32852);
var inst_32818 = inst_32874;
var inst_32819 = null;
var inst_32820 = (0);
var inst_32821 = (0);
var state_32958__$1 = (function (){var statearr_32989 = state_32958;
(statearr_32989[(13)] = inst_32821);

(statearr_32989[(14)] = inst_32818);

(statearr_32989[(15)] = inst_32820);

(statearr_32989[(16)] = inst_32819);

(statearr_32989[(17)] = inst_32873);

return statearr_32989;
})();
var statearr_32991_35686 = state_32958__$1;
(statearr_32991_35686[(2)] = null);

(statearr_32991_35686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (39))){
var state_32958__$1 = state_32958;
var statearr_32996_35688 = state_32958__$1;
(statearr_32996_35688[(2)] = null);

(statearr_32996_35688[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (4))){
var inst_32809 = (state_32958[(10)]);
var inst_32809__$1 = (state_32958[(2)]);
var inst_32810 = (inst_32809__$1 == null);
var state_32958__$1 = (function (){var statearr_33001 = state_32958;
(statearr_33001[(10)] = inst_32809__$1);

return statearr_33001;
})();
if(cljs.core.truth_(inst_32810)){
var statearr_33002_35690 = state_32958__$1;
(statearr_33002_35690[(1)] = (5));

} else {
var statearr_33003_35691 = state_32958__$1;
(statearr_33003_35691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (15))){
var inst_32821 = (state_32958[(13)]);
var inst_32818 = (state_32958[(14)]);
var inst_32820 = (state_32958[(15)]);
var inst_32819 = (state_32958[(16)]);
var inst_32844 = (state_32958[(2)]);
var inst_32845 = (inst_32821 + (1));
var tmp32992 = inst_32818;
var tmp32993 = inst_32820;
var tmp32994 = inst_32819;
var inst_32818__$1 = tmp32992;
var inst_32819__$1 = tmp32994;
var inst_32820__$1 = tmp32993;
var inst_32821__$1 = inst_32845;
var state_32958__$1 = (function (){var statearr_33009 = state_32958;
(statearr_33009[(13)] = inst_32821__$1);

(statearr_33009[(14)] = inst_32818__$1);

(statearr_33009[(18)] = inst_32844);

(statearr_33009[(15)] = inst_32820__$1);

(statearr_33009[(16)] = inst_32819__$1);

return statearr_33009;
})();
var statearr_33010_35700 = state_32958__$1;
(statearr_33010_35700[(2)] = null);

(statearr_33010_35700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (21))){
var inst_32877 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33022_35701 = state_32958__$1;
(statearr_33022_35701[(2)] = inst_32877);

(statearr_33022_35701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (31))){
var inst_32903 = (state_32958[(11)]);
var inst_32907 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32903);
var state_32958__$1 = state_32958;
var statearr_33028_35708 = state_32958__$1;
(statearr_33028_35708[(2)] = inst_32907);

(statearr_33028_35708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (32))){
var inst_32898 = (state_32958[(9)]);
var inst_32897 = (state_32958[(19)]);
var inst_32895 = (state_32958[(20)]);
var inst_32896 = (state_32958[(12)]);
var inst_32909 = (state_32958[(2)]);
var inst_32910 = (inst_32898 + (1));
var tmp33015 = inst_32897;
var tmp33016 = inst_32895;
var tmp33017 = inst_32896;
var inst_32895__$1 = tmp33016;
var inst_32896__$1 = tmp33017;
var inst_32897__$1 = tmp33015;
var inst_32898__$1 = inst_32910;
var state_32958__$1 = (function (){var statearr_33032 = state_32958;
(statearr_33032[(21)] = inst_32909);

(statearr_33032[(9)] = inst_32898__$1);

(statearr_33032[(19)] = inst_32897__$1);

(statearr_33032[(20)] = inst_32895__$1);

(statearr_33032[(12)] = inst_32896__$1);

return statearr_33032;
})();
var statearr_33036_35713 = state_32958__$1;
(statearr_33036_35713[(2)] = null);

(statearr_33036_35713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (40))){
var inst_32923 = (state_32958[(22)]);
var inst_32927 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32923);
var state_32958__$1 = state_32958;
var statearr_33039_35715 = state_32958__$1;
(statearr_33039_35715[(2)] = inst_32927);

(statearr_33039_35715[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (33))){
var inst_32913 = (state_32958[(23)]);
var inst_32916 = cljs.core.chunked_seq_QMARK_(inst_32913);
var state_32958__$1 = state_32958;
if(inst_32916){
var statearr_33040_35727 = state_32958__$1;
(statearr_33040_35727[(1)] = (36));

} else {
var statearr_33041_35728 = state_32958__$1;
(statearr_33041_35728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (13))){
var inst_32838 = (state_32958[(24)]);
var inst_32841 = cljs.core.async.close_BANG_(inst_32838);
var state_32958__$1 = state_32958;
var statearr_33043_35729 = state_32958__$1;
(statearr_33043_35729[(2)] = inst_32841);

(statearr_33043_35729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (22))){
var inst_32865 = (state_32958[(8)]);
var inst_32870 = cljs.core.async.close_BANG_(inst_32865);
var state_32958__$1 = state_32958;
var statearr_33048_35734 = state_32958__$1;
(statearr_33048_35734[(2)] = inst_32870);

(statearr_33048_35734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (36))){
var inst_32913 = (state_32958[(23)]);
var inst_32918 = cljs.core.chunk_first(inst_32913);
var inst_32919 = cljs.core.chunk_rest(inst_32913);
var inst_32920 = cljs.core.count(inst_32918);
var inst_32895 = inst_32919;
var inst_32896 = inst_32918;
var inst_32897 = inst_32920;
var inst_32898 = (0);
var state_32958__$1 = (function (){var statearr_33057 = state_32958;
(statearr_33057[(9)] = inst_32898);

(statearr_33057[(19)] = inst_32897);

(statearr_33057[(20)] = inst_32895);

(statearr_33057[(12)] = inst_32896);

return statearr_33057;
})();
var statearr_33059_35741 = state_32958__$1;
(statearr_33059_35741[(2)] = null);

(statearr_33059_35741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (41))){
var inst_32913 = (state_32958[(23)]);
var inst_32929 = (state_32958[(2)]);
var inst_32930 = cljs.core.next(inst_32913);
var inst_32895 = inst_32930;
var inst_32896 = null;
var inst_32897 = (0);
var inst_32898 = (0);
var state_32958__$1 = (function (){var statearr_33065 = state_32958;
(statearr_33065[(25)] = inst_32929);

(statearr_33065[(9)] = inst_32898);

(statearr_33065[(19)] = inst_32897);

(statearr_33065[(20)] = inst_32895);

(statearr_33065[(12)] = inst_32896);

return statearr_33065;
})();
var statearr_33070_35742 = state_32958__$1;
(statearr_33070_35742[(2)] = null);

(statearr_33070_35742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (43))){
var state_32958__$1 = state_32958;
var statearr_33074_35743 = state_32958__$1;
(statearr_33074_35743[(2)] = null);

(statearr_33074_35743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (29))){
var inst_32938 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33077_35745 = state_32958__$1;
(statearr_33077_35745[(2)] = inst_32938);

(statearr_33077_35745[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (44))){
var inst_32947 = (state_32958[(2)]);
var state_32958__$1 = (function (){var statearr_33080 = state_32958;
(statearr_33080[(26)] = inst_32947);

return statearr_33080;
})();
var statearr_33085_35750 = state_32958__$1;
(statearr_33085_35750[(2)] = null);

(statearr_33085_35750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (6))){
var inst_32887 = (state_32958[(27)]);
var inst_32886 = cljs.core.deref(cs);
var inst_32887__$1 = cljs.core.keys(inst_32886);
var inst_32888 = cljs.core.count(inst_32887__$1);
var inst_32889 = cljs.core.reset_BANG_(dctr,inst_32888);
var inst_32894 = cljs.core.seq(inst_32887__$1);
var inst_32895 = inst_32894;
var inst_32896 = null;
var inst_32897 = (0);
var inst_32898 = (0);
var state_32958__$1 = (function (){var statearr_33089 = state_32958;
(statearr_33089[(28)] = inst_32889);

(statearr_33089[(9)] = inst_32898);

(statearr_33089[(27)] = inst_32887__$1);

(statearr_33089[(19)] = inst_32897);

(statearr_33089[(20)] = inst_32895);

(statearr_33089[(12)] = inst_32896);

return statearr_33089;
})();
var statearr_33092_35758 = state_32958__$1;
(statearr_33092_35758[(2)] = null);

(statearr_33092_35758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (28))){
var inst_32913 = (state_32958[(23)]);
var inst_32895 = (state_32958[(20)]);
var inst_32913__$1 = cljs.core.seq(inst_32895);
var state_32958__$1 = (function (){var statearr_33094 = state_32958;
(statearr_33094[(23)] = inst_32913__$1);

return statearr_33094;
})();
if(inst_32913__$1){
var statearr_33097_35759 = state_32958__$1;
(statearr_33097_35759[(1)] = (33));

} else {
var statearr_33099_35760 = state_32958__$1;
(statearr_33099_35760[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (25))){
var inst_32898 = (state_32958[(9)]);
var inst_32897 = (state_32958[(19)]);
var inst_32900 = (inst_32898 < inst_32897);
var inst_32901 = inst_32900;
var state_32958__$1 = state_32958;
if(cljs.core.truth_(inst_32901)){
var statearr_33103_35764 = state_32958__$1;
(statearr_33103_35764[(1)] = (27));

} else {
var statearr_33104_35765 = state_32958__$1;
(statearr_33104_35765[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (34))){
var state_32958__$1 = state_32958;
var statearr_33107_35766 = state_32958__$1;
(statearr_33107_35766[(2)] = null);

(statearr_33107_35766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (17))){
var state_32958__$1 = state_32958;
var statearr_33109_35771 = state_32958__$1;
(statearr_33109_35771[(2)] = null);

(statearr_33109_35771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (3))){
var inst_32952 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32958__$1,inst_32952);
} else {
if((state_val_32959 === (12))){
var inst_32882 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33118_35773 = state_32958__$1;
(statearr_33118_35773[(2)] = inst_32882);

(statearr_33118_35773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (2))){
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32958__$1,(4),ch);
} else {
if((state_val_32959 === (23))){
var state_32958__$1 = state_32958;
var statearr_33121_35784 = state_32958__$1;
(statearr_33121_35784[(2)] = null);

(statearr_33121_35784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (35))){
var inst_32936 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33125_35791 = state_32958__$1;
(statearr_33125_35791[(2)] = inst_32936);

(statearr_33125_35791[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (19))){
var inst_32852 = (state_32958[(7)]);
var inst_32856 = cljs.core.chunk_first(inst_32852);
var inst_32857 = cljs.core.chunk_rest(inst_32852);
var inst_32858 = cljs.core.count(inst_32856);
var inst_32818 = inst_32857;
var inst_32819 = inst_32856;
var inst_32820 = inst_32858;
var inst_32821 = (0);
var state_32958__$1 = (function (){var statearr_33132 = state_32958;
(statearr_33132[(13)] = inst_32821);

(statearr_33132[(14)] = inst_32818);

(statearr_33132[(15)] = inst_32820);

(statearr_33132[(16)] = inst_32819);

return statearr_33132;
})();
var statearr_33136_35797 = state_32958__$1;
(statearr_33136_35797[(2)] = null);

(statearr_33136_35797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (11))){
var inst_32818 = (state_32958[(14)]);
var inst_32852 = (state_32958[(7)]);
var inst_32852__$1 = cljs.core.seq(inst_32818);
var state_32958__$1 = (function (){var statearr_33138 = state_32958;
(statearr_33138[(7)] = inst_32852__$1);

return statearr_33138;
})();
if(inst_32852__$1){
var statearr_33139_35798 = state_32958__$1;
(statearr_33139_35798[(1)] = (16));

} else {
var statearr_33142_35799 = state_32958__$1;
(statearr_33142_35799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (9))){
var inst_32884 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33144_35800 = state_32958__$1;
(statearr_33144_35800[(2)] = inst_32884);

(statearr_33144_35800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (5))){
var inst_32816 = cljs.core.deref(cs);
var inst_32817 = cljs.core.seq(inst_32816);
var inst_32818 = inst_32817;
var inst_32819 = null;
var inst_32820 = (0);
var inst_32821 = (0);
var state_32958__$1 = (function (){var statearr_33146 = state_32958;
(statearr_33146[(13)] = inst_32821);

(statearr_33146[(14)] = inst_32818);

(statearr_33146[(15)] = inst_32820);

(statearr_33146[(16)] = inst_32819);

return statearr_33146;
})();
var statearr_33150_35801 = state_32958__$1;
(statearr_33150_35801[(2)] = null);

(statearr_33150_35801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (14))){
var state_32958__$1 = state_32958;
var statearr_33153_35808 = state_32958__$1;
(statearr_33153_35808[(2)] = null);

(statearr_33153_35808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (45))){
var inst_32944 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33170_35809 = state_32958__$1;
(statearr_33170_35809[(2)] = inst_32944);

(statearr_33170_35809[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (26))){
var inst_32887 = (state_32958[(27)]);
var inst_32940 = (state_32958[(2)]);
var inst_32941 = cljs.core.seq(inst_32887);
var state_32958__$1 = (function (){var statearr_33175 = state_32958;
(statearr_33175[(29)] = inst_32940);

return statearr_33175;
})();
if(inst_32941){
var statearr_33177_35810 = state_32958__$1;
(statearr_33177_35810[(1)] = (42));

} else {
var statearr_33178_35811 = state_32958__$1;
(statearr_33178_35811[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (16))){
var inst_32852 = (state_32958[(7)]);
var inst_32854 = cljs.core.chunked_seq_QMARK_(inst_32852);
var state_32958__$1 = state_32958;
if(inst_32854){
var statearr_33182_35812 = state_32958__$1;
(statearr_33182_35812[(1)] = (19));

} else {
var statearr_33183_35813 = state_32958__$1;
(statearr_33183_35813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (38))){
var inst_32933 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33185_35814 = state_32958__$1;
(statearr_33185_35814[(2)] = inst_32933);

(statearr_33185_35814[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (30))){
var state_32958__$1 = state_32958;
var statearr_33188_35816 = state_32958__$1;
(statearr_33188_35816[(2)] = null);

(statearr_33188_35816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (10))){
var inst_32821 = (state_32958[(13)]);
var inst_32819 = (state_32958[(16)]);
var inst_32833 = cljs.core._nth(inst_32819,inst_32821);
var inst_32838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32833,(0),null);
var inst_32839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32833,(1),null);
var state_32958__$1 = (function (){var statearr_33193 = state_32958;
(statearr_33193[(24)] = inst_32838);

return statearr_33193;
})();
if(cljs.core.truth_(inst_32839)){
var statearr_33196_35820 = state_32958__$1;
(statearr_33196_35820[(1)] = (13));

} else {
var statearr_33198_35821 = state_32958__$1;
(statearr_33198_35821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (18))){
var inst_32880 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_33203_35822 = state_32958__$1;
(statearr_33203_35822[(2)] = inst_32880);

(statearr_33203_35822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (42))){
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32958__$1,(45),dchan);
} else {
if((state_val_32959 === (37))){
var inst_32913 = (state_32958[(23)]);
var inst_32923 = (state_32958[(22)]);
var inst_32809 = (state_32958[(10)]);
var inst_32923__$1 = cljs.core.first(inst_32913);
var inst_32924 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32923__$1,inst_32809,done);
var state_32958__$1 = (function (){var statearr_33208 = state_32958;
(statearr_33208[(22)] = inst_32923__$1);

return statearr_33208;
})();
if(cljs.core.truth_(inst_32924)){
var statearr_33209_35823 = state_32958__$1;
(statearr_33209_35823[(1)] = (39));

} else {
var statearr_33211_35824 = state_32958__$1;
(statearr_33211_35824[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (8))){
var inst_32821 = (state_32958[(13)]);
var inst_32820 = (state_32958[(15)]);
var inst_32823 = (inst_32821 < inst_32820);
var inst_32825 = inst_32823;
var state_32958__$1 = state_32958;
if(cljs.core.truth_(inst_32825)){
var statearr_33214_35825 = state_32958__$1;
(statearr_33214_35825[(1)] = (10));

} else {
var statearr_33216_35826 = state_32958__$1;
(statearr_33216_35826[(1)] = (11));

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
var statearr_33221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33221[(0)] = cljs$core$async$mult_$_state_machine__21348__auto__);

(statearr_33221[(1)] = (1));

return statearr_33221;
});
var cljs$core$async$mult_$_state_machine__21348__auto____1 = (function (state_32958){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_32958);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e33223){var ex__21351__auto__ = e33223;
var statearr_33224_35832 = state_32958;
(statearr_33224_35832[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_32958[(4)]))){
var statearr_33228_35833 = state_32958;
(statearr_33228_35833[(1)] = cljs.core.first((state_32958[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35844 = state_32958;
state_32958 = G__35844;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21348__auto__ = function(state_32958){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21348__auto____1.call(this,state_32958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21348__auto____0;
cljs$core$async$mult_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21348__auto____1;
return cljs$core$async$mult_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_33236 = f__21537__auto__();
(statearr_33236[(6)] = c__21535__auto___35648);

return statearr_33236;
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
var G__33248 = arguments.length;
switch (G__33248) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35856 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35856(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35857 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35857(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35862 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35862(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35863 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35863(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35864 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35864(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35871 = arguments.length;
var i__5770__auto___35872 = (0);
while(true){
if((i__5770__auto___35872 < len__5769__auto___35871)){
args__5775__auto__.push((arguments[i__5770__auto___35872]));

var G__35873 = (i__5770__auto___35872 + (1));
i__5770__auto___35872 = G__35873;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33340){
var map__33342 = p__33340;
var map__33342__$1 = cljs.core.__destructure_map(map__33342);
var opts = map__33342__$1;
var statearr_33343_35874 = state;
(statearr_33343_35874[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33348_35875 = state;
(statearr_33348_35875[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33351_35876 = state;
(statearr_33351_35876[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33325){
var G__33326 = cljs.core.first(seq33325);
var seq33325__$1 = cljs.core.next(seq33325);
var G__33327 = cljs.core.first(seq33325__$1);
var seq33325__$2 = cljs.core.next(seq33325__$1);
var G__33328 = cljs.core.first(seq33325__$2);
var seq33325__$3 = cljs.core.next(seq33325__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33326,G__33327,G__33328,seq33325__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33373 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33374){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33374 = meta33374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33375,meta33374__$1){
var self__ = this;
var _33375__$1 = this;
return (new cljs.core.async.t_cljs$core$async33373(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33374__$1));
}));

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33375){
var self__ = this;
var _33375__$1 = this;
return self__.meta33374;
}));

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33373.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33374","meta33374",-1270233819,null)], null);
}));

(cljs.core.async.t_cljs$core$async33373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33373");

(cljs.core.async.t_cljs$core$async33373.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33373.
 */
cljs.core.async.__GT_t_cljs$core$async33373 = (function cljs$core$async$__GT_t_cljs$core$async33373(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33374){
return (new cljs.core.async.t_cljs$core$async33373(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33374));
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
var m = (new cljs.core.async.t_cljs$core$async33373(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__21535__auto___35891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_33466){
var state_val_33467 = (state_33466[(1)]);
if((state_val_33467 === (7))){
var inst_33425 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
if(cljs.core.truth_(inst_33425)){
var statearr_33471_35892 = state_33466__$1;
(statearr_33471_35892[(1)] = (8));

} else {
var statearr_33472_35893 = state_33466__$1;
(statearr_33472_35893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (20))){
var inst_33418 = (state_33466[(7)]);
var state_33466__$1 = state_33466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33466__$1,(23),out,inst_33418);
} else {
if((state_val_33467 === (1))){
var inst_33401 = calc_state();
var inst_33402 = cljs.core.__destructure_map(inst_33401);
var inst_33403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33402,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33402,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33402,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33406 = inst_33401;
var state_33466__$1 = (function (){var statearr_33477 = state_33466;
(statearr_33477[(8)] = inst_33404);

(statearr_33477[(9)] = inst_33406);

(statearr_33477[(10)] = inst_33403);

(statearr_33477[(11)] = inst_33405);

return statearr_33477;
})();
var statearr_33479_35897 = state_33466__$1;
(statearr_33479_35897[(2)] = null);

(statearr_33479_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (24))){
var inst_33409 = (state_33466[(12)]);
var inst_33406 = inst_33409;
var state_33466__$1 = (function (){var statearr_33481 = state_33466;
(statearr_33481[(9)] = inst_33406);

return statearr_33481;
})();
var statearr_33482_35898 = state_33466__$1;
(statearr_33482_35898[(2)] = null);

(statearr_33482_35898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (4))){
var inst_33420 = (state_33466[(13)]);
var inst_33418 = (state_33466[(7)]);
var inst_33417 = (state_33466[(2)]);
var inst_33418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33417,(0),null);
var inst_33419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33417,(1),null);
var inst_33420__$1 = (inst_33418__$1 == null);
var state_33466__$1 = (function (){var statearr_33485 = state_33466;
(statearr_33485[(13)] = inst_33420__$1);

(statearr_33485[(7)] = inst_33418__$1);

(statearr_33485[(14)] = inst_33419);

return statearr_33485;
})();
if(cljs.core.truth_(inst_33420__$1)){
var statearr_33486_35903 = state_33466__$1;
(statearr_33486_35903[(1)] = (5));

} else {
var statearr_33487_35904 = state_33466__$1;
(statearr_33487_35904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (15))){
var inst_33410 = (state_33466[(15)]);
var inst_33440 = (state_33466[(16)]);
var inst_33440__$1 = cljs.core.empty_QMARK_(inst_33410);
var state_33466__$1 = (function (){var statearr_33488 = state_33466;
(statearr_33488[(16)] = inst_33440__$1);

return statearr_33488;
})();
if(inst_33440__$1){
var statearr_33492_35905 = state_33466__$1;
(statearr_33492_35905[(1)] = (17));

} else {
var statearr_33495_35906 = state_33466__$1;
(statearr_33495_35906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (21))){
var inst_33409 = (state_33466[(12)]);
var inst_33406 = inst_33409;
var state_33466__$1 = (function (){var statearr_33496 = state_33466;
(statearr_33496[(9)] = inst_33406);

return statearr_33496;
})();
var statearr_33497_35908 = state_33466__$1;
(statearr_33497_35908[(2)] = null);

(statearr_33497_35908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (13))){
var inst_33432 = (state_33466[(2)]);
var inst_33434 = calc_state();
var inst_33406 = inst_33434;
var state_33466__$1 = (function (){var statearr_33502 = state_33466;
(statearr_33502[(9)] = inst_33406);

(statearr_33502[(17)] = inst_33432);

return statearr_33502;
})();
var statearr_33503_35909 = state_33466__$1;
(statearr_33503_35909[(2)] = null);

(statearr_33503_35909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (22))){
var inst_33460 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33504_35910 = state_33466__$1;
(statearr_33504_35910[(2)] = inst_33460);

(statearr_33504_35910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (6))){
var inst_33419 = (state_33466[(14)]);
var inst_33423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33419,change);
var state_33466__$1 = state_33466;
var statearr_33510_35911 = state_33466__$1;
(statearr_33510_35911[(2)] = inst_33423);

(statearr_33510_35911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (25))){
var state_33466__$1 = state_33466;
var statearr_33515_35913 = state_33466__$1;
(statearr_33515_35913[(2)] = null);

(statearr_33515_35913[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (17))){
var inst_33411 = (state_33466[(18)]);
var inst_33419 = (state_33466[(14)]);
var inst_33442 = (inst_33411.cljs$core$IFn$_invoke$arity$1 ? inst_33411.cljs$core$IFn$_invoke$arity$1(inst_33419) : inst_33411.call(null,inst_33419));
var inst_33443 = cljs.core.not(inst_33442);
var state_33466__$1 = state_33466;
var statearr_33517_35916 = state_33466__$1;
(statearr_33517_35916[(2)] = inst_33443);

(statearr_33517_35916[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (3))){
var inst_33464 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33466__$1,inst_33464);
} else {
if((state_val_33467 === (12))){
var state_33466__$1 = state_33466;
var statearr_33520_35917 = state_33466__$1;
(statearr_33520_35917[(2)] = null);

(statearr_33520_35917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (2))){
var inst_33409 = (state_33466[(12)]);
var inst_33406 = (state_33466[(9)]);
var inst_33409__$1 = cljs.core.__destructure_map(inst_33406);
var inst_33410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33409__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33409__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33409__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33466__$1 = (function (){var statearr_33527 = state_33466;
(statearr_33527[(12)] = inst_33409__$1);

(statearr_33527[(18)] = inst_33411);

(statearr_33527[(15)] = inst_33410);

return statearr_33527;
})();
return cljs.core.async.ioc_alts_BANG_(state_33466__$1,(4),inst_33412);
} else {
if((state_val_33467 === (23))){
var inst_33451 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
if(cljs.core.truth_(inst_33451)){
var statearr_33549_35918 = state_33466__$1;
(statearr_33549_35918[(1)] = (24));

} else {
var statearr_33563_35919 = state_33466__$1;
(statearr_33563_35919[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (19))){
var inst_33446 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33567_35920 = state_33466__$1;
(statearr_33567_35920[(2)] = inst_33446);

(statearr_33567_35920[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (11))){
var inst_33419 = (state_33466[(14)]);
var inst_33429 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33419);
var state_33466__$1 = state_33466;
var statearr_33568_35921 = state_33466__$1;
(statearr_33568_35921[(2)] = inst_33429);

(statearr_33568_35921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (9))){
var inst_33410 = (state_33466[(15)]);
var inst_33419 = (state_33466[(14)]);
var inst_33437 = (state_33466[(19)]);
var inst_33437__$1 = (inst_33410.cljs$core$IFn$_invoke$arity$1 ? inst_33410.cljs$core$IFn$_invoke$arity$1(inst_33419) : inst_33410.call(null,inst_33419));
var state_33466__$1 = (function (){var statearr_33579 = state_33466;
(statearr_33579[(19)] = inst_33437__$1);

return statearr_33579;
})();
if(cljs.core.truth_(inst_33437__$1)){
var statearr_33583_35928 = state_33466__$1;
(statearr_33583_35928[(1)] = (14));

} else {
var statearr_33584_35929 = state_33466__$1;
(statearr_33584_35929[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (5))){
var inst_33420 = (state_33466[(13)]);
var state_33466__$1 = state_33466;
var statearr_33587_35930 = state_33466__$1;
(statearr_33587_35930[(2)] = inst_33420);

(statearr_33587_35930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (14))){
var inst_33437 = (state_33466[(19)]);
var state_33466__$1 = state_33466;
var statearr_33590_35931 = state_33466__$1;
(statearr_33590_35931[(2)] = inst_33437);

(statearr_33590_35931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (26))){
var inst_33456 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33591_35932 = state_33466__$1;
(statearr_33591_35932[(2)] = inst_33456);

(statearr_33591_35932[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (16))){
var inst_33448 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
if(cljs.core.truth_(inst_33448)){
var statearr_33592_35933 = state_33466__$1;
(statearr_33592_35933[(1)] = (20));

} else {
var statearr_33593_35934 = state_33466__$1;
(statearr_33593_35934[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (10))){
var inst_33462 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33598_35935 = state_33466__$1;
(statearr_33598_35935[(2)] = inst_33462);

(statearr_33598_35935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (18))){
var inst_33440 = (state_33466[(16)]);
var state_33466__$1 = state_33466;
var statearr_33599_35936 = state_33466__$1;
(statearr_33599_35936[(2)] = inst_33440);

(statearr_33599_35936[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (8))){
var inst_33418 = (state_33466[(7)]);
var inst_33427 = (inst_33418 == null);
var state_33466__$1 = state_33466;
if(cljs.core.truth_(inst_33427)){
var statearr_33600_35937 = state_33466__$1;
(statearr_33600_35937[(1)] = (11));

} else {
var statearr_33601_35938 = state_33466__$1;
(statearr_33601_35938[(1)] = (12));

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
var statearr_33603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33603[(0)] = cljs$core$async$mix_$_state_machine__21348__auto__);

(statearr_33603[(1)] = (1));

return statearr_33603;
});
var cljs$core$async$mix_$_state_machine__21348__auto____1 = (function (state_33466){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_33466);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e33604){var ex__21351__auto__ = e33604;
var statearr_33605_35943 = state_33466;
(statearr_33605_35943[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_33466[(4)]))){
var statearr_33606_35944 = state_33466;
(statearr_33606_35944[(1)] = cljs.core.first((state_33466[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35946 = state_33466;
state_33466 = G__35946;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21348__auto__ = function(state_33466){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21348__auto____1.call(this,state_33466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21348__auto____0;
cljs$core$async$mix_$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21348__auto____1;
return cljs$core$async$mix_$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_33616 = f__21537__auto__();
(statearr_33616[(6)] = c__21535__auto___35891);

return statearr_33616;
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

var cljs$core$async$Pub$sub_STAR_$dyn_35947 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35947(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35949 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35949(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35952 = (function() {
var G__35953 = null;
var G__35953__1 = (function (p){
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
var G__35953__2 = (function (p,v){
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
G__35953 = function(p,v){
switch(arguments.length){
case 1:
return G__35953__1.call(this,p);
case 2:
return G__35953__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35953.cljs$core$IFn$_invoke$arity$1 = G__35953__1;
G__35953.cljs$core$IFn$_invoke$arity$2 = G__35953__2;
return G__35953;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33660 = arguments.length;
switch (G__33660) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35952(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35952(p,v);
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
cljs.core.async.t_cljs$core$async33691 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33692){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33692 = meta33692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33693,meta33692__$1){
var self__ = this;
var _33693__$1 = this;
return (new cljs.core.async.t_cljs$core$async33691(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33692__$1));
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33693){
var self__ = this;
var _33693__$1 = this;
return self__.meta33692;
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33692","meta33692",-1025809691,null)], null);
}));

(cljs.core.async.t_cljs$core$async33691.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33691");

(cljs.core.async.t_cljs$core$async33691.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33691");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33691.
 */
cljs.core.async.__GT_t_cljs$core$async33691 = (function cljs$core$async$__GT_t_cljs$core$async33691(ch,topic_fn,buf_fn,mults,ensure_mult,meta33692){
return (new cljs.core.async.t_cljs$core$async33691(ch,topic_fn,buf_fn,mults,ensure_mult,meta33692));
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
var G__33676 = arguments.length;
switch (G__33676) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33663_SHARP_){
if(cljs.core.truth_((p1__33663_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33663_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33663_SHARP_.call(null,topic)))){
return p1__33663_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33663_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33691(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__21535__auto___35965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_33794){
var state_val_33795 = (state_33794[(1)]);
if((state_val_33795 === (7))){
var inst_33790 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33799_35970 = state_33794__$1;
(statearr_33799_35970[(2)] = inst_33790);

(statearr_33799_35970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (20))){
var state_33794__$1 = state_33794;
var statearr_33800_35971 = state_33794__$1;
(statearr_33800_35971[(2)] = null);

(statearr_33800_35971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (1))){
var state_33794__$1 = state_33794;
var statearr_33808_35972 = state_33794__$1;
(statearr_33808_35972[(2)] = null);

(statearr_33808_35972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (24))){
var inst_33773 = (state_33794[(7)]);
var inst_33782 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33773);
var state_33794__$1 = state_33794;
var statearr_33814_35973 = state_33794__$1;
(statearr_33814_35973[(2)] = inst_33782);

(statearr_33814_35973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (4))){
var inst_33718 = (state_33794[(8)]);
var inst_33718__$1 = (state_33794[(2)]);
var inst_33719 = (inst_33718__$1 == null);
var state_33794__$1 = (function (){var statearr_33815 = state_33794;
(statearr_33815[(8)] = inst_33718__$1);

return statearr_33815;
})();
if(cljs.core.truth_(inst_33719)){
var statearr_33816_35978 = state_33794__$1;
(statearr_33816_35978[(1)] = (5));

} else {
var statearr_33819_35979 = state_33794__$1;
(statearr_33819_35979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (15))){
var inst_33766 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33821_35980 = state_33794__$1;
(statearr_33821_35980[(2)] = inst_33766);

(statearr_33821_35980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (21))){
var inst_33787 = (state_33794[(2)]);
var state_33794__$1 = (function (){var statearr_33825 = state_33794;
(statearr_33825[(9)] = inst_33787);

return statearr_33825;
})();
var statearr_33826_35981 = state_33794__$1;
(statearr_33826_35981[(2)] = null);

(statearr_33826_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (13))){
var inst_33745 = (state_33794[(10)]);
var inst_33747 = cljs.core.chunked_seq_QMARK_(inst_33745);
var state_33794__$1 = state_33794;
if(inst_33747){
var statearr_33831_35982 = state_33794__$1;
(statearr_33831_35982[(1)] = (16));

} else {
var statearr_33832_35983 = state_33794__$1;
(statearr_33832_35983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (22))){
var inst_33779 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
if(cljs.core.truth_(inst_33779)){
var statearr_33833_35984 = state_33794__$1;
(statearr_33833_35984[(1)] = (23));

} else {
var statearr_33834_35985 = state_33794__$1;
(statearr_33834_35985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (6))){
var inst_33775 = (state_33794[(11)]);
var inst_33773 = (state_33794[(7)]);
var inst_33718 = (state_33794[(8)]);
var inst_33773__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33718) : topic_fn.call(null,inst_33718));
var inst_33774 = cljs.core.deref(mults);
var inst_33775__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33774,inst_33773__$1);
var state_33794__$1 = (function (){var statearr_33842 = state_33794;
(statearr_33842[(11)] = inst_33775__$1);

(statearr_33842[(7)] = inst_33773__$1);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33775__$1)){
var statearr_33844_35986 = state_33794__$1;
(statearr_33844_35986[(1)] = (19));

} else {
var statearr_33845_35987 = state_33794__$1;
(statearr_33845_35987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (25))){
var inst_33784 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33849_35988 = state_33794__$1;
(statearr_33849_35988[(2)] = inst_33784);

(statearr_33849_35988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (17))){
var inst_33745 = (state_33794[(10)]);
var inst_33757 = cljs.core.first(inst_33745);
var inst_33758 = cljs.core.async.muxch_STAR_(inst_33757);
var inst_33759 = cljs.core.async.close_BANG_(inst_33758);
var inst_33760 = cljs.core.next(inst_33745);
var inst_33728 = inst_33760;
var inst_33729 = null;
var inst_33730 = (0);
var inst_33731 = (0);
var state_33794__$1 = (function (){var statearr_33854 = state_33794;
(statearr_33854[(12)] = inst_33730);

(statearr_33854[(13)] = inst_33729);

(statearr_33854[(14)] = inst_33731);

(statearr_33854[(15)] = inst_33759);

(statearr_33854[(16)] = inst_33728);

return statearr_33854;
})();
var statearr_33856_35989 = state_33794__$1;
(statearr_33856_35989[(2)] = null);

(statearr_33856_35989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (3))){
var inst_33792 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33794__$1,inst_33792);
} else {
if((state_val_33795 === (12))){
var inst_33768 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33859_35994 = state_33794__$1;
(statearr_33859_35994[(2)] = inst_33768);

(statearr_33859_35994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (2))){
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33794__$1,(4),ch);
} else {
if((state_val_33795 === (23))){
var state_33794__$1 = state_33794;
var statearr_33862_35995 = state_33794__$1;
(statearr_33862_35995[(2)] = null);

(statearr_33862_35995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (19))){
var inst_33775 = (state_33794[(11)]);
var inst_33718 = (state_33794[(8)]);
var inst_33777 = cljs.core.async.muxch_STAR_(inst_33775);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33794__$1,(22),inst_33777,inst_33718);
} else {
if((state_val_33795 === (11))){
var inst_33745 = (state_33794[(10)]);
var inst_33728 = (state_33794[(16)]);
var inst_33745__$1 = cljs.core.seq(inst_33728);
var state_33794__$1 = (function (){var statearr_33867 = state_33794;
(statearr_33867[(10)] = inst_33745__$1);

return statearr_33867;
})();
if(inst_33745__$1){
var statearr_33868_35999 = state_33794__$1;
(statearr_33868_35999[(1)] = (13));

} else {
var statearr_33869_36000 = state_33794__$1;
(statearr_33869_36000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (9))){
var inst_33770 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33870_36001 = state_33794__$1;
(statearr_33870_36001[(2)] = inst_33770);

(statearr_33870_36001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (5))){
var inst_33725 = cljs.core.deref(mults);
var inst_33726 = cljs.core.vals(inst_33725);
var inst_33727 = cljs.core.seq(inst_33726);
var inst_33728 = inst_33727;
var inst_33729 = null;
var inst_33730 = (0);
var inst_33731 = (0);
var state_33794__$1 = (function (){var statearr_33871 = state_33794;
(statearr_33871[(12)] = inst_33730);

(statearr_33871[(13)] = inst_33729);

(statearr_33871[(14)] = inst_33731);

(statearr_33871[(16)] = inst_33728);

return statearr_33871;
})();
var statearr_33872_36009 = state_33794__$1;
(statearr_33872_36009[(2)] = null);

(statearr_33872_36009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (14))){
var state_33794__$1 = state_33794;
var statearr_33876_36010 = state_33794__$1;
(statearr_33876_36010[(2)] = null);

(statearr_33876_36010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (16))){
var inst_33745 = (state_33794[(10)]);
var inst_33752 = cljs.core.chunk_first(inst_33745);
var inst_33753 = cljs.core.chunk_rest(inst_33745);
var inst_33754 = cljs.core.count(inst_33752);
var inst_33728 = inst_33753;
var inst_33729 = inst_33752;
var inst_33730 = inst_33754;
var inst_33731 = (0);
var state_33794__$1 = (function (){var statearr_33877 = state_33794;
(statearr_33877[(12)] = inst_33730);

(statearr_33877[(13)] = inst_33729);

(statearr_33877[(14)] = inst_33731);

(statearr_33877[(16)] = inst_33728);

return statearr_33877;
})();
var statearr_33879_36020 = state_33794__$1;
(statearr_33879_36020[(2)] = null);

(statearr_33879_36020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (10))){
var inst_33730 = (state_33794[(12)]);
var inst_33729 = (state_33794[(13)]);
var inst_33731 = (state_33794[(14)]);
var inst_33728 = (state_33794[(16)]);
var inst_33739 = cljs.core._nth(inst_33729,inst_33731);
var inst_33740 = cljs.core.async.muxch_STAR_(inst_33739);
var inst_33741 = cljs.core.async.close_BANG_(inst_33740);
var inst_33742 = (inst_33731 + (1));
var tmp33873 = inst_33730;
var tmp33874 = inst_33729;
var tmp33875 = inst_33728;
var inst_33728__$1 = tmp33875;
var inst_33729__$1 = tmp33874;
var inst_33730__$1 = tmp33873;
var inst_33731__$1 = inst_33742;
var state_33794__$1 = (function (){var statearr_33886 = state_33794;
(statearr_33886[(12)] = inst_33730__$1);

(statearr_33886[(13)] = inst_33729__$1);

(statearr_33886[(17)] = inst_33741);

(statearr_33886[(14)] = inst_33731__$1);

(statearr_33886[(16)] = inst_33728__$1);

return statearr_33886;
})();
var statearr_33887_36024 = state_33794__$1;
(statearr_33887_36024[(2)] = null);

(statearr_33887_36024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (18))){
var inst_33763 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33888_36025 = state_33794__$1;
(statearr_33888_36025[(2)] = inst_33763);

(statearr_33888_36025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (8))){
var inst_33730 = (state_33794[(12)]);
var inst_33731 = (state_33794[(14)]);
var inst_33733 = (inst_33731 < inst_33730);
var inst_33734 = inst_33733;
var state_33794__$1 = state_33794;
if(cljs.core.truth_(inst_33734)){
var statearr_33889_36027 = state_33794__$1;
(statearr_33889_36027[(1)] = (10));

} else {
var statearr_33890_36029 = state_33794__$1;
(statearr_33890_36029[(1)] = (11));

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
var statearr_33892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33892[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_33892[(1)] = (1));

return statearr_33892;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_33794){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_33794);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e33894){var ex__21351__auto__ = e33894;
var statearr_33897_36036 = state_33794;
(statearr_33897_36036[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_33794[(4)]))){
var statearr_33903_36037 = state_33794;
(statearr_33903_36037[(1)] = cljs.core.first((state_33794[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36038 = state_33794;
state_33794 = G__36038;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_33904 = f__21537__auto__();
(statearr_33904[(6)] = c__21535__auto___35965);

return statearr_33904;
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
var G__33915 = arguments.length;
switch (G__33915) {
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
var G__33947 = arguments.length;
switch (G__33947) {
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
var G__33956 = arguments.length;
switch (G__33956) {
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
var c__21535__auto___36057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_34010){
var state_val_34011 = (state_34010[(1)]);
if((state_val_34011 === (7))){
var state_34010__$1 = state_34010;
var statearr_34018_36058 = state_34010__$1;
(statearr_34018_36058[(2)] = null);

(statearr_34018_36058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (1))){
var state_34010__$1 = state_34010;
var statearr_34019_36059 = state_34010__$1;
(statearr_34019_36059[(2)] = null);

(statearr_34019_36059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (4))){
var inst_33967 = (state_34010[(7)]);
var inst_33968 = (state_34010[(8)]);
var inst_33972 = (inst_33968 < inst_33967);
var state_34010__$1 = state_34010;
if(cljs.core.truth_(inst_33972)){
var statearr_34020_36063 = state_34010__$1;
(statearr_34020_36063[(1)] = (6));

} else {
var statearr_34021_36064 = state_34010__$1;
(statearr_34021_36064[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (15))){
var inst_33996 = (state_34010[(9)]);
var inst_34001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33996);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34010__$1,(17),out,inst_34001);
} else {
if((state_val_34011 === (13))){
var inst_33996 = (state_34010[(9)]);
var inst_33996__$1 = (state_34010[(2)]);
var inst_33997 = cljs.core.some(cljs.core.nil_QMARK_,inst_33996__$1);
var state_34010__$1 = (function (){var statearr_34030 = state_34010;
(statearr_34030[(9)] = inst_33996__$1);

return statearr_34030;
})();
if(cljs.core.truth_(inst_33997)){
var statearr_34035_36070 = state_34010__$1;
(statearr_34035_36070[(1)] = (14));

} else {
var statearr_34036_36071 = state_34010__$1;
(statearr_34036_36071[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (6))){
var state_34010__$1 = state_34010;
var statearr_34041_36072 = state_34010__$1;
(statearr_34041_36072[(2)] = null);

(statearr_34041_36072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (17))){
var inst_34003 = (state_34010[(2)]);
var state_34010__$1 = (function (){var statearr_34043 = state_34010;
(statearr_34043[(10)] = inst_34003);

return statearr_34043;
})();
var statearr_34045_36075 = state_34010__$1;
(statearr_34045_36075[(2)] = null);

(statearr_34045_36075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (3))){
var inst_34008 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34010__$1,inst_34008);
} else {
if((state_val_34011 === (12))){
var _ = (function (){var statearr_34047 = state_34010;
(statearr_34047[(4)] = cljs.core.rest((state_34010[(4)])));

return statearr_34047;
})();
var state_34010__$1 = state_34010;
var ex34042 = (state_34010__$1[(2)]);
var statearr_34052_36079 = state_34010__$1;
(statearr_34052_36079[(5)] = ex34042);


if((ex34042 instanceof Object)){
var statearr_34054_36080 = state_34010__$1;
(statearr_34054_36080[(1)] = (11));

(statearr_34054_36080[(5)] = null);

} else {
throw ex34042;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (2))){
var inst_33965 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33967 = cnt;
var inst_33968 = (0);
var state_34010__$1 = (function (){var statearr_34061 = state_34010;
(statearr_34061[(11)] = inst_33965);

(statearr_34061[(7)] = inst_33967);

(statearr_34061[(8)] = inst_33968);

return statearr_34061;
})();
var statearr_34064_36081 = state_34010__$1;
(statearr_34064_36081[(2)] = null);

(statearr_34064_36081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (11))){
var inst_33975 = (state_34010[(2)]);
var inst_33976 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34010__$1 = (function (){var statearr_34066 = state_34010;
(statearr_34066[(12)] = inst_33975);

return statearr_34066;
})();
var statearr_34067_36082 = state_34010__$1;
(statearr_34067_36082[(2)] = inst_33976);

(statearr_34067_36082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (9))){
var inst_33968 = (state_34010[(8)]);
var _ = (function (){var statearr_34068 = state_34010;
(statearr_34068[(4)] = cljs.core.cons((12),(state_34010[(4)])));

return statearr_34068;
})();
var inst_33982 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33968) : chs__$1.call(null,inst_33968));
var inst_33983 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33968) : done.call(null,inst_33968));
var inst_33984 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33982,inst_33983);
var ___$1 = (function (){var statearr_34072 = state_34010;
(statearr_34072[(4)] = cljs.core.rest((state_34010[(4)])));

return statearr_34072;
})();
var state_34010__$1 = state_34010;
var statearr_34073_36091 = state_34010__$1;
(statearr_34073_36091[(2)] = inst_33984);

(statearr_34073_36091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (5))){
var inst_33994 = (state_34010[(2)]);
var state_34010__$1 = (function (){var statearr_34074 = state_34010;
(statearr_34074[(13)] = inst_33994);

return statearr_34074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34010__$1,(13),dchan);
} else {
if((state_val_34011 === (14))){
var inst_33999 = cljs.core.async.close_BANG_(out);
var state_34010__$1 = state_34010;
var statearr_34077_36092 = state_34010__$1;
(statearr_34077_36092[(2)] = inst_33999);

(statearr_34077_36092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (16))){
var inst_34006 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34080_36093 = state_34010__$1;
(statearr_34080_36093[(2)] = inst_34006);

(statearr_34080_36093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (10))){
var inst_33968 = (state_34010[(8)]);
var inst_33987 = (state_34010[(2)]);
var inst_33988 = (inst_33968 + (1));
var inst_33968__$1 = inst_33988;
var state_34010__$1 = (function (){var statearr_34085 = state_34010;
(statearr_34085[(14)] = inst_33987);

(statearr_34085[(8)] = inst_33968__$1);

return statearr_34085;
})();
var statearr_34086_36094 = state_34010__$1;
(statearr_34086_36094[(2)] = null);

(statearr_34086_36094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (8))){
var inst_33992 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34089_36095 = state_34010__$1;
(statearr_34089_36095[(2)] = inst_33992);

(statearr_34089_36095[(1)] = (5));


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
var statearr_34102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34102[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_34102[(1)] = (1));

return statearr_34102;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_34010){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_34010);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e34111){var ex__21351__auto__ = e34111;
var statearr_34115_36097 = state_34010;
(statearr_34115_36097[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_34010[(4)]))){
var statearr_34116_36100 = state_34010;
(statearr_34116_36100[(1)] = cljs.core.first((state_34010[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36101 = state_34010;
state_34010 = G__36101;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_34010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_34010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_34124 = f__21537__auto__();
(statearr_34124[(6)] = c__21535__auto___36057);

return statearr_34124;
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
var G__34133 = arguments.length;
switch (G__34133) {
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
var c__21535__auto___36107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_34187){
var state_val_34188 = (state_34187[(1)]);
if((state_val_34188 === (7))){
var inst_34160 = (state_34187[(7)]);
var inst_34161 = (state_34187[(8)]);
var inst_34160__$1 = (state_34187[(2)]);
var inst_34161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34160__$1,(0),null);
var inst_34163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34160__$1,(1),null);
var inst_34165 = (inst_34161__$1 == null);
var state_34187__$1 = (function (){var statearr_34193 = state_34187;
(statearr_34193[(7)] = inst_34160__$1);

(statearr_34193[(8)] = inst_34161__$1);

(statearr_34193[(9)] = inst_34163);

return statearr_34193;
})();
if(cljs.core.truth_(inst_34165)){
var statearr_34196_36108 = state_34187__$1;
(statearr_34196_36108[(1)] = (8));

} else {
var statearr_34197_36109 = state_34187__$1;
(statearr_34197_36109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (1))){
var inst_34144 = cljs.core.vec(chs);
var inst_34145 = inst_34144;
var state_34187__$1 = (function (){var statearr_34199 = state_34187;
(statearr_34199[(10)] = inst_34145);

return statearr_34199;
})();
var statearr_34203_36110 = state_34187__$1;
(statearr_34203_36110[(2)] = null);

(statearr_34203_36110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (4))){
var inst_34145 = (state_34187[(10)]);
var state_34187__$1 = state_34187;
return cljs.core.async.ioc_alts_BANG_(state_34187__$1,(7),inst_34145);
} else {
if((state_val_34188 === (6))){
var inst_34182 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34204_36111 = state_34187__$1;
(statearr_34204_36111[(2)] = inst_34182);

(statearr_34204_36111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (3))){
var inst_34185 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34187__$1,inst_34185);
} else {
if((state_val_34188 === (2))){
var inst_34145 = (state_34187[(10)]);
var inst_34147 = cljs.core.count(inst_34145);
var inst_34151 = (inst_34147 > (0));
var state_34187__$1 = state_34187;
if(cljs.core.truth_(inst_34151)){
var statearr_34213_36112 = state_34187__$1;
(statearr_34213_36112[(1)] = (4));

} else {
var statearr_34215_36113 = state_34187__$1;
(statearr_34215_36113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (11))){
var inst_34145 = (state_34187[(10)]);
var inst_34173 = (state_34187[(2)]);
var tmp34208 = inst_34145;
var inst_34145__$1 = tmp34208;
var state_34187__$1 = (function (){var statearr_34216 = state_34187;
(statearr_34216[(10)] = inst_34145__$1);

(statearr_34216[(11)] = inst_34173);

return statearr_34216;
})();
var statearr_34217_36114 = state_34187__$1;
(statearr_34217_36114[(2)] = null);

(statearr_34217_36114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (9))){
var inst_34161 = (state_34187[(8)]);
var state_34187__$1 = state_34187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34187__$1,(11),out,inst_34161);
} else {
if((state_val_34188 === (5))){
var inst_34180 = cljs.core.async.close_BANG_(out);
var state_34187__$1 = state_34187;
var statearr_34219_36119 = state_34187__$1;
(statearr_34219_36119[(2)] = inst_34180);

(statearr_34219_36119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (10))){
var inst_34177 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34221_36124 = state_34187__$1;
(statearr_34221_36124[(2)] = inst_34177);

(statearr_34221_36124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34188 === (8))){
var inst_34145 = (state_34187[(10)]);
var inst_34160 = (state_34187[(7)]);
var inst_34161 = (state_34187[(8)]);
var inst_34163 = (state_34187[(9)]);
var inst_34167 = (function (){var cs = inst_34145;
var vec__34156 = inst_34160;
var v = inst_34161;
var c = inst_34163;
return (function (p1__34125_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34125_SHARP_);
});
})();
var inst_34168 = cljs.core.filterv(inst_34167,inst_34145);
var inst_34145__$1 = inst_34168;
var state_34187__$1 = (function (){var statearr_34227 = state_34187;
(statearr_34227[(10)] = inst_34145__$1);

return statearr_34227;
})();
var statearr_34228_36126 = state_34187__$1;
(statearr_34228_36126[(2)] = null);

(statearr_34228_36126[(1)] = (2));


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
var statearr_34232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_34187){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_34187);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e34233){var ex__21351__auto__ = e34233;
var statearr_34234_36127 = state_34187;
(statearr_34234_36127[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_34187[(4)]))){
var statearr_34239_36128 = state_34187;
(statearr_34239_36128[(1)] = cljs.core.first((state_34187[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36129 = state_34187;
state_34187 = G__36129;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_34187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_34187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_34244 = f__21537__auto__();
(statearr_34244[(6)] = c__21535__auto___36107);

return statearr_34244;
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
var G__34246 = arguments.length;
switch (G__34246) {
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
var c__21535__auto___36133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_34279){
var state_val_34280 = (state_34279[(1)]);
if((state_val_34280 === (7))){
var inst_34261 = (state_34279[(7)]);
var inst_34261__$1 = (state_34279[(2)]);
var inst_34262 = (inst_34261__$1 == null);
var inst_34263 = cljs.core.not(inst_34262);
var state_34279__$1 = (function (){var statearr_34289 = state_34279;
(statearr_34289[(7)] = inst_34261__$1);

return statearr_34289;
})();
if(inst_34263){
var statearr_34290_36135 = state_34279__$1;
(statearr_34290_36135[(1)] = (8));

} else {
var statearr_34291_36136 = state_34279__$1;
(statearr_34291_36136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (1))){
var inst_34256 = (0);
var state_34279__$1 = (function (){var statearr_34293 = state_34279;
(statearr_34293[(8)] = inst_34256);

return statearr_34293;
})();
var statearr_34294_36140 = state_34279__$1;
(statearr_34294_36140[(2)] = null);

(statearr_34294_36140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (4))){
var state_34279__$1 = state_34279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34279__$1,(7),ch);
} else {
if((state_val_34280 === (6))){
var inst_34274 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
var statearr_34297_36141 = state_34279__$1;
(statearr_34297_36141[(2)] = inst_34274);

(statearr_34297_36141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (3))){
var inst_34276 = (state_34279[(2)]);
var inst_34277 = cljs.core.async.close_BANG_(out);
var state_34279__$1 = (function (){var statearr_34302 = state_34279;
(statearr_34302[(9)] = inst_34276);

return statearr_34302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34279__$1,inst_34277);
} else {
if((state_val_34280 === (2))){
var inst_34256 = (state_34279[(8)]);
var inst_34258 = (inst_34256 < n);
var state_34279__$1 = state_34279;
if(cljs.core.truth_(inst_34258)){
var statearr_34304_36142 = state_34279__$1;
(statearr_34304_36142[(1)] = (4));

} else {
var statearr_34305_36143 = state_34279__$1;
(statearr_34305_36143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (11))){
var inst_34256 = (state_34279[(8)]);
var inst_34266 = (state_34279[(2)]);
var inst_34267 = (inst_34256 + (1));
var inst_34256__$1 = inst_34267;
var state_34279__$1 = (function (){var statearr_34306 = state_34279;
(statearr_34306[(10)] = inst_34266);

(statearr_34306[(8)] = inst_34256__$1);

return statearr_34306;
})();
var statearr_34311_36144 = state_34279__$1;
(statearr_34311_36144[(2)] = null);

(statearr_34311_36144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (9))){
var state_34279__$1 = state_34279;
var statearr_34312_36145 = state_34279__$1;
(statearr_34312_36145[(2)] = null);

(statearr_34312_36145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (5))){
var state_34279__$1 = state_34279;
var statearr_34314_36151 = state_34279__$1;
(statearr_34314_36151[(2)] = null);

(statearr_34314_36151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (10))){
var inst_34271 = (state_34279[(2)]);
var state_34279__$1 = state_34279;
var statearr_34316_36152 = state_34279__$1;
(statearr_34316_36152[(2)] = inst_34271);

(statearr_34316_36152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34280 === (8))){
var inst_34261 = (state_34279[(7)]);
var state_34279__$1 = state_34279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34279__$1,(11),out,inst_34261);
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
var statearr_34319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34319[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_34319[(1)] = (1));

return statearr_34319;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_34279){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_34279);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e34320){var ex__21351__auto__ = e34320;
var statearr_34321_36153 = state_34279;
(statearr_34321_36153[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_34279[(4)]))){
var statearr_34322_36154 = state_34279;
(statearr_34322_36154[(1)] = cljs.core.first((state_34279[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36159 = state_34279;
state_34279 = G__36159;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_34279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_34279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_34323 = f__21537__auto__();
(statearr_34323[(6)] = c__21535__auto___36133);

return statearr_34323;
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
cljs.core.async.t_cljs$core$async34343 = (function (f,ch,meta34333,_,fn1,meta34344){
this.f = f;
this.ch = ch;
this.meta34333 = meta34333;
this._ = _;
this.fn1 = fn1;
this.meta34344 = meta34344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34345,meta34344__$1){
var self__ = this;
var _34345__$1 = this;
return (new cljs.core.async.t_cljs$core$async34343(self__.f,self__.ch,self__.meta34333,self__._,self__.fn1,meta34344__$1));
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34345){
var self__ = this;
var _34345__$1 = this;
return self__.meta34344;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34325_SHARP_){
var G__34356 = (((p1__34325_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34325_SHARP_) : self__.f.call(null,p1__34325_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34356) : f1.call(null,G__34356));
});
}));

(cljs.core.async.t_cljs$core$async34343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34333","meta34333",-153325400,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34332","cljs.core.async/t_cljs$core$async34332",2064771566,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34344","meta34344",-506745894,null)], null);
}));

(cljs.core.async.t_cljs$core$async34343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34343");

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34343.
 */
cljs.core.async.__GT_t_cljs$core$async34343 = (function cljs$core$async$__GT_t_cljs$core$async34343(f,ch,meta34333,_,fn1,meta34344){
return (new cljs.core.async.t_cljs$core$async34343(f,ch,meta34333,_,fn1,meta34344));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34332 = (function (f,ch,meta34333){
this.f = f;
this.ch = ch;
this.meta34333 = meta34333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34334,meta34333__$1){
var self__ = this;
var _34334__$1 = this;
return (new cljs.core.async.t_cljs$core$async34332(self__.f,self__.ch,meta34333__$1));
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34334){
var self__ = this;
var _34334__$1 = this;
return self__.meta34333;
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34343(self__.f,self__.ch,self__.meta34333,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34359 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34359) : self__.f.call(null,G__34359));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34333","meta34333",-153325400,null)], null);
}));

(cljs.core.async.t_cljs$core$async34332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34332");

(cljs.core.async.t_cljs$core$async34332.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34332.
 */
cljs.core.async.__GT_t_cljs$core$async34332 = (function cljs$core$async$__GT_t_cljs$core$async34332(f,ch,meta34333){
return (new cljs.core.async.t_cljs$core$async34332(f,ch,meta34333));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34332(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34381 = (function (f,ch,meta34382){
this.f = f;
this.ch = ch;
this.meta34382 = meta34382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34383,meta34382__$1){
var self__ = this;
var _34383__$1 = this;
return (new cljs.core.async.t_cljs$core$async34381(self__.f,self__.ch,meta34382__$1));
}));

(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34383){
var self__ = this;
var _34383__$1 = this;
return self__.meta34382;
}));

(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34382","meta34382",-1668842781,null)], null);
}));

(cljs.core.async.t_cljs$core$async34381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34381");

(cljs.core.async.t_cljs$core$async34381.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34381.
 */
cljs.core.async.__GT_t_cljs$core$async34381 = (function cljs$core$async$__GT_t_cljs$core$async34381(f,ch,meta34382){
return (new cljs.core.async.t_cljs$core$async34381(f,ch,meta34382));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34381(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34417 = (function (p,ch,meta34418){
this.p = p;
this.ch = ch;
this.meta34418 = meta34418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34419,meta34418__$1){
var self__ = this;
var _34419__$1 = this;
return (new cljs.core.async.t_cljs$core$async34417(self__.p,self__.ch,meta34418__$1));
}));

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34419){
var self__ = this;
var _34419__$1 = this;
return self__.meta34418;
}));

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34418","meta34418",-1868282899,null)], null);
}));

(cljs.core.async.t_cljs$core$async34417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34417");

(cljs.core.async.t_cljs$core$async34417.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34417.
 */
cljs.core.async.__GT_t_cljs$core$async34417 = (function cljs$core$async$__GT_t_cljs$core$async34417(p,ch,meta34418){
return (new cljs.core.async.t_cljs$core$async34417(p,ch,meta34418));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34417(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34459 = arguments.length;
switch (G__34459) {
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
var c__21535__auto___36207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_34492){
var state_val_34493 = (state_34492[(1)]);
if((state_val_34493 === (7))){
var inst_34488 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34497_36208 = state_34492__$1;
(statearr_34497_36208[(2)] = inst_34488);

(statearr_34497_36208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (1))){
var state_34492__$1 = state_34492;
var statearr_34498_36209 = state_34492__$1;
(statearr_34498_36209[(2)] = null);

(statearr_34498_36209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (4))){
var inst_34474 = (state_34492[(7)]);
var inst_34474__$1 = (state_34492[(2)]);
var inst_34475 = (inst_34474__$1 == null);
var state_34492__$1 = (function (){var statearr_34499 = state_34492;
(statearr_34499[(7)] = inst_34474__$1);

return statearr_34499;
})();
if(cljs.core.truth_(inst_34475)){
var statearr_34500_36210 = state_34492__$1;
(statearr_34500_36210[(1)] = (5));

} else {
var statearr_34501_36211 = state_34492__$1;
(statearr_34501_36211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (6))){
var inst_34474 = (state_34492[(7)]);
var inst_34479 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34474) : p.call(null,inst_34474));
var state_34492__$1 = state_34492;
if(cljs.core.truth_(inst_34479)){
var statearr_34503_36212 = state_34492__$1;
(statearr_34503_36212[(1)] = (8));

} else {
var statearr_34504_36213 = state_34492__$1;
(statearr_34504_36213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (3))){
var inst_34490 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34492__$1,inst_34490);
} else {
if((state_val_34493 === (2))){
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34492__$1,(4),ch);
} else {
if((state_val_34493 === (11))){
var inst_34482 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34505_36214 = state_34492__$1;
(statearr_34505_36214[(2)] = inst_34482);

(statearr_34505_36214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (9))){
var state_34492__$1 = state_34492;
var statearr_34506_36215 = state_34492__$1;
(statearr_34506_36215[(2)] = null);

(statearr_34506_36215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (5))){
var inst_34477 = cljs.core.async.close_BANG_(out);
var state_34492__$1 = state_34492;
var statearr_34507_36217 = state_34492__$1;
(statearr_34507_36217[(2)] = inst_34477);

(statearr_34507_36217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (10))){
var inst_34485 = (state_34492[(2)]);
var state_34492__$1 = (function (){var statearr_34512 = state_34492;
(statearr_34512[(8)] = inst_34485);

return statearr_34512;
})();
var statearr_34513_36218 = state_34492__$1;
(statearr_34513_36218[(2)] = null);

(statearr_34513_36218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (8))){
var inst_34474 = (state_34492[(7)]);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34492__$1,(11),out,inst_34474);
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
var statearr_34522 = [null,null,null,null,null,null,null,null,null];
(statearr_34522[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_34522[(1)] = (1));

return statearr_34522;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_34492){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_34492);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e34523){var ex__21351__auto__ = e34523;
var statearr_34525_36219 = state_34492;
(statearr_34525_36219[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_34492[(4)]))){
var statearr_34526_36220 = state_34492;
(statearr_34526_36220[(1)] = cljs.core.first((state_34492[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36221 = state_34492;
state_34492 = G__36221;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_34492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_34492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_34530 = f__21537__auto__();
(statearr_34530[(6)] = c__21535__auto___36207);

return statearr_34530;
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
var G__34547 = arguments.length;
switch (G__34547) {
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
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_34631){
var state_val_34632 = (state_34631[(1)]);
if((state_val_34632 === (7))){
var inst_34627 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
var statearr_34651_36226 = state_34631__$1;
(statearr_34651_36226[(2)] = inst_34627);

(statearr_34651_36226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (20))){
var inst_34594 = (state_34631[(7)]);
var inst_34608 = (state_34631[(2)]);
var inst_34609 = cljs.core.next(inst_34594);
var inst_34577 = inst_34609;
var inst_34578 = null;
var inst_34579 = (0);
var inst_34580 = (0);
var state_34631__$1 = (function (){var statearr_34652 = state_34631;
(statearr_34652[(8)] = inst_34579);

(statearr_34652[(9)] = inst_34577);

(statearr_34652[(10)] = inst_34578);

(statearr_34652[(11)] = inst_34580);

(statearr_34652[(12)] = inst_34608);

return statearr_34652;
})();
var statearr_34654_36237 = state_34631__$1;
(statearr_34654_36237[(2)] = null);

(statearr_34654_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (1))){
var state_34631__$1 = state_34631;
var statearr_34658_36238 = state_34631__$1;
(statearr_34658_36238[(2)] = null);

(statearr_34658_36238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (4))){
var inst_34566 = (state_34631[(13)]);
var inst_34566__$1 = (state_34631[(2)]);
var inst_34567 = (inst_34566__$1 == null);
var state_34631__$1 = (function (){var statearr_34659 = state_34631;
(statearr_34659[(13)] = inst_34566__$1);

return statearr_34659;
})();
if(cljs.core.truth_(inst_34567)){
var statearr_34660_36243 = state_34631__$1;
(statearr_34660_36243[(1)] = (5));

} else {
var statearr_34661_36244 = state_34631__$1;
(statearr_34661_36244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (15))){
var state_34631__$1 = state_34631;
var statearr_34665_36249 = state_34631__$1;
(statearr_34665_36249[(2)] = null);

(statearr_34665_36249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (21))){
var state_34631__$1 = state_34631;
var statearr_34670_36250 = state_34631__$1;
(statearr_34670_36250[(2)] = null);

(statearr_34670_36250[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (13))){
var inst_34579 = (state_34631[(8)]);
var inst_34577 = (state_34631[(9)]);
var inst_34578 = (state_34631[(10)]);
var inst_34580 = (state_34631[(11)]);
var inst_34590 = (state_34631[(2)]);
var inst_34591 = (inst_34580 + (1));
var tmp34662 = inst_34579;
var tmp34663 = inst_34577;
var tmp34664 = inst_34578;
var inst_34577__$1 = tmp34663;
var inst_34578__$1 = tmp34664;
var inst_34579__$1 = tmp34662;
var inst_34580__$1 = inst_34591;
var state_34631__$1 = (function (){var statearr_34671 = state_34631;
(statearr_34671[(8)] = inst_34579__$1);

(statearr_34671[(14)] = inst_34590);

(statearr_34671[(9)] = inst_34577__$1);

(statearr_34671[(10)] = inst_34578__$1);

(statearr_34671[(11)] = inst_34580__$1);

return statearr_34671;
})();
var statearr_34672_36253 = state_34631__$1;
(statearr_34672_36253[(2)] = null);

(statearr_34672_36253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (22))){
var state_34631__$1 = state_34631;
var statearr_34673_36254 = state_34631__$1;
(statearr_34673_36254[(2)] = null);

(statearr_34673_36254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (6))){
var inst_34566 = (state_34631[(13)]);
var inst_34575 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34566) : f.call(null,inst_34566));
var inst_34576 = cljs.core.seq(inst_34575);
var inst_34577 = inst_34576;
var inst_34578 = null;
var inst_34579 = (0);
var inst_34580 = (0);
var state_34631__$1 = (function (){var statearr_34674 = state_34631;
(statearr_34674[(8)] = inst_34579);

(statearr_34674[(9)] = inst_34577);

(statearr_34674[(10)] = inst_34578);

(statearr_34674[(11)] = inst_34580);

return statearr_34674;
})();
var statearr_34675_36257 = state_34631__$1;
(statearr_34675_36257[(2)] = null);

(statearr_34675_36257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (17))){
var inst_34594 = (state_34631[(7)]);
var inst_34601 = cljs.core.chunk_first(inst_34594);
var inst_34602 = cljs.core.chunk_rest(inst_34594);
var inst_34603 = cljs.core.count(inst_34601);
var inst_34577 = inst_34602;
var inst_34578 = inst_34601;
var inst_34579 = inst_34603;
var inst_34580 = (0);
var state_34631__$1 = (function (){var statearr_34676 = state_34631;
(statearr_34676[(8)] = inst_34579);

(statearr_34676[(9)] = inst_34577);

(statearr_34676[(10)] = inst_34578);

(statearr_34676[(11)] = inst_34580);

return statearr_34676;
})();
var statearr_34677_36262 = state_34631__$1;
(statearr_34677_36262[(2)] = null);

(statearr_34677_36262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (3))){
var inst_34629 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34631__$1,inst_34629);
} else {
if((state_val_34632 === (12))){
var inst_34617 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
var statearr_34678_36264 = state_34631__$1;
(statearr_34678_36264[(2)] = inst_34617);

(statearr_34678_36264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (2))){
var state_34631__$1 = state_34631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34631__$1,(4),in$);
} else {
if((state_val_34632 === (23))){
var inst_34625 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
var statearr_34683_36268 = state_34631__$1;
(statearr_34683_36268[(2)] = inst_34625);

(statearr_34683_36268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (19))){
var inst_34612 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
var statearr_34689_36270 = state_34631__$1;
(statearr_34689_36270[(2)] = inst_34612);

(statearr_34689_36270[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (11))){
var inst_34594 = (state_34631[(7)]);
var inst_34577 = (state_34631[(9)]);
var inst_34594__$1 = cljs.core.seq(inst_34577);
var state_34631__$1 = (function (){var statearr_34698 = state_34631;
(statearr_34698[(7)] = inst_34594__$1);

return statearr_34698;
})();
if(inst_34594__$1){
var statearr_34705_36271 = state_34631__$1;
(statearr_34705_36271[(1)] = (14));

} else {
var statearr_34706_36272 = state_34631__$1;
(statearr_34706_36272[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (9))){
var inst_34619 = (state_34631[(2)]);
var inst_34620 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34631__$1 = (function (){var statearr_34707 = state_34631;
(statearr_34707[(15)] = inst_34619);

return statearr_34707;
})();
if(cljs.core.truth_(inst_34620)){
var statearr_34714_36273 = state_34631__$1;
(statearr_34714_36273[(1)] = (21));

} else {
var statearr_34715_36274 = state_34631__$1;
(statearr_34715_36274[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (5))){
var inst_34569 = cljs.core.async.close_BANG_(out);
var state_34631__$1 = state_34631;
var statearr_34716_36277 = state_34631__$1;
(statearr_34716_36277[(2)] = inst_34569);

(statearr_34716_36277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (14))){
var inst_34594 = (state_34631[(7)]);
var inst_34596 = cljs.core.chunked_seq_QMARK_(inst_34594);
var state_34631__$1 = state_34631;
if(inst_34596){
var statearr_34717_36279 = state_34631__$1;
(statearr_34717_36279[(1)] = (17));

} else {
var statearr_34718_36280 = state_34631__$1;
(statearr_34718_36280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (16))){
var inst_34615 = (state_34631[(2)]);
var state_34631__$1 = state_34631;
var statearr_34719_36285 = state_34631__$1;
(statearr_34719_36285[(2)] = inst_34615);

(statearr_34719_36285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34632 === (10))){
var inst_34578 = (state_34631[(10)]);
var inst_34580 = (state_34631[(11)]);
var inst_34588 = cljs.core._nth(inst_34578,inst_34580);
var state_34631__$1 = state_34631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34631__$1,(13),out,inst_34588);
} else {
if((state_val_34632 === (18))){
var inst_34594 = (state_34631[(7)]);
var inst_34606 = cljs.core.first(inst_34594);
var state_34631__$1 = state_34631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34631__$1,(20),out,inst_34606);
} else {
if((state_val_34632 === (8))){
var inst_34579 = (state_34631[(8)]);
var inst_34580 = (state_34631[(11)]);
var inst_34584 = (inst_34580 < inst_34579);
var inst_34585 = inst_34584;
var state_34631__$1 = state_34631;
if(cljs.core.truth_(inst_34585)){
var statearr_34738_36295 = state_34631__$1;
(statearr_34738_36295[(1)] = (10));

} else {
var statearr_34739_36296 = state_34631__$1;
(statearr_34739_36296[(1)] = (11));

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
var statearr_34751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34751[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__);

(statearr_34751[(1)] = (1));

return statearr_34751;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____1 = (function (state_34631){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_34631);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e34752){var ex__21351__auto__ = e34752;
var statearr_34753_36308 = state_34631;
(statearr_34753_36308[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_34631[(4)]))){
var statearr_34756_36309 = state_34631;
(statearr_34756_36309[(1)] = cljs.core.first((state_34631[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36311 = state_34631;
state_34631 = G__36311;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__ = function(state_34631){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____1.call(this,state_34631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21348__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_34757 = f__21537__auto__();
(statearr_34757[(6)] = c__21535__auto__);

return statearr_34757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

return c__21535__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34762 = arguments.length;
switch (G__34762) {
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
var G__34769 = arguments.length;
switch (G__34769) {
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
var G__34776 = arguments.length;
switch (G__34776) {
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
var c__21535__auto___36324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_34804){
var state_val_34805 = (state_34804[(1)]);
if((state_val_34805 === (7))){
var inst_34799 = (state_34804[(2)]);
var state_34804__$1 = state_34804;
var statearr_34807_36330 = state_34804__$1;
(statearr_34807_36330[(2)] = inst_34799);

(statearr_34807_36330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (1))){
var inst_34781 = null;
var state_34804__$1 = (function (){var statearr_34811 = state_34804;
(statearr_34811[(7)] = inst_34781);

return statearr_34811;
})();
var statearr_34812_36333 = state_34804__$1;
(statearr_34812_36333[(2)] = null);

(statearr_34812_36333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (4))){
var inst_34784 = (state_34804[(8)]);
var inst_34784__$1 = (state_34804[(2)]);
var inst_34785 = (inst_34784__$1 == null);
var inst_34786 = cljs.core.not(inst_34785);
var state_34804__$1 = (function (){var statearr_34816 = state_34804;
(statearr_34816[(8)] = inst_34784__$1);

return statearr_34816;
})();
if(inst_34786){
var statearr_34817_36337 = state_34804__$1;
(statearr_34817_36337[(1)] = (5));

} else {
var statearr_34818_36338 = state_34804__$1;
(statearr_34818_36338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (6))){
var state_34804__$1 = state_34804;
var statearr_34820_36344 = state_34804__$1;
(statearr_34820_36344[(2)] = null);

(statearr_34820_36344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (3))){
var inst_34801 = (state_34804[(2)]);
var inst_34802 = cljs.core.async.close_BANG_(out);
var state_34804__$1 = (function (){var statearr_34821 = state_34804;
(statearr_34821[(9)] = inst_34801);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34804__$1,inst_34802);
} else {
if((state_val_34805 === (2))){
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34804__$1,(4),ch);
} else {
if((state_val_34805 === (11))){
var inst_34784 = (state_34804[(8)]);
var inst_34793 = (state_34804[(2)]);
var inst_34781 = inst_34784;
var state_34804__$1 = (function (){var statearr_34822 = state_34804;
(statearr_34822[(10)] = inst_34793);

(statearr_34822[(7)] = inst_34781);

return statearr_34822;
})();
var statearr_34823_36358 = state_34804__$1;
(statearr_34823_36358[(2)] = null);

(statearr_34823_36358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (9))){
var inst_34784 = (state_34804[(8)]);
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34804__$1,(11),out,inst_34784);
} else {
if((state_val_34805 === (5))){
var inst_34784 = (state_34804[(8)]);
var inst_34781 = (state_34804[(7)]);
var inst_34788 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34784,inst_34781);
var state_34804__$1 = state_34804;
if(inst_34788){
var statearr_34825_36366 = state_34804__$1;
(statearr_34825_36366[(1)] = (8));

} else {
var statearr_34826_36371 = state_34804__$1;
(statearr_34826_36371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (10))){
var inst_34796 = (state_34804[(2)]);
var state_34804__$1 = state_34804;
var statearr_34827_36372 = state_34804__$1;
(statearr_34827_36372[(2)] = inst_34796);

(statearr_34827_36372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (8))){
var inst_34781 = (state_34804[(7)]);
var tmp34824 = inst_34781;
var inst_34781__$1 = tmp34824;
var state_34804__$1 = (function (){var statearr_34829 = state_34804;
(statearr_34829[(7)] = inst_34781__$1);

return statearr_34829;
})();
var statearr_34830_36373 = state_34804__$1;
(statearr_34830_36373[(2)] = null);

(statearr_34830_36373[(1)] = (2));


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
var statearr_34833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34833[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_34833[(1)] = (1));

return statearr_34833;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_34804){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_34804);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e34834){var ex__21351__auto__ = e34834;
var statearr_34835_36376 = state_34804;
(statearr_34835_36376[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_34804[(4)]))){
var statearr_34837_36378 = state_34804;
(statearr_34837_36378[(1)] = cljs.core.first((state_34804[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36380 = state_34804;
state_34804 = G__36380;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_34804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_34804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_34840 = f__21537__auto__();
(statearr_34840[(6)] = c__21535__auto___36324);

return statearr_34840;
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
var G__34854 = arguments.length;
switch (G__34854) {
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
var c__21535__auto___36389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_34902){
var state_val_34903 = (state_34902[(1)]);
if((state_val_34903 === (7))){
var inst_34898 = (state_34902[(2)]);
var state_34902__$1 = state_34902;
var statearr_34904_36393 = state_34902__$1;
(statearr_34904_36393[(2)] = inst_34898);

(statearr_34904_36393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (1))){
var inst_34860 = (new Array(n));
var inst_34861 = inst_34860;
var inst_34862 = (0);
var state_34902__$1 = (function (){var statearr_34909 = state_34902;
(statearr_34909[(7)] = inst_34862);

(statearr_34909[(8)] = inst_34861);

return statearr_34909;
})();
var statearr_34912_36400 = state_34902__$1;
(statearr_34912_36400[(2)] = null);

(statearr_34912_36400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (4))){
var inst_34866 = (state_34902[(9)]);
var inst_34866__$1 = (state_34902[(2)]);
var inst_34867 = (inst_34866__$1 == null);
var inst_34868 = cljs.core.not(inst_34867);
var state_34902__$1 = (function (){var statearr_34913 = state_34902;
(statearr_34913[(9)] = inst_34866__$1);

return statearr_34913;
})();
if(inst_34868){
var statearr_34916_36402 = state_34902__$1;
(statearr_34916_36402[(1)] = (5));

} else {
var statearr_34918_36403 = state_34902__$1;
(statearr_34918_36403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (15))){
var inst_34892 = (state_34902[(2)]);
var state_34902__$1 = state_34902;
var statearr_34922_36405 = state_34902__$1;
(statearr_34922_36405[(2)] = inst_34892);

(statearr_34922_36405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (13))){
var state_34902__$1 = state_34902;
var statearr_34923_36408 = state_34902__$1;
(statearr_34923_36408[(2)] = null);

(statearr_34923_36408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (6))){
var inst_34862 = (state_34902[(7)]);
var inst_34888 = (inst_34862 > (0));
var state_34902__$1 = state_34902;
if(cljs.core.truth_(inst_34888)){
var statearr_34928_36409 = state_34902__$1;
(statearr_34928_36409[(1)] = (12));

} else {
var statearr_34929_36410 = state_34902__$1;
(statearr_34929_36410[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (3))){
var inst_34900 = (state_34902[(2)]);
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34902__$1,inst_34900);
} else {
if((state_val_34903 === (12))){
var inst_34861 = (state_34902[(8)]);
var inst_34890 = cljs.core.vec(inst_34861);
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34902__$1,(15),out,inst_34890);
} else {
if((state_val_34903 === (2))){
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34902__$1,(4),ch);
} else {
if((state_val_34903 === (11))){
var inst_34881 = (state_34902[(2)]);
var inst_34883 = (new Array(n));
var inst_34861 = inst_34883;
var inst_34862 = (0);
var state_34902__$1 = (function (){var statearr_34937 = state_34902;
(statearr_34937[(7)] = inst_34862);

(statearr_34937[(10)] = inst_34881);

(statearr_34937[(8)] = inst_34861);

return statearr_34937;
})();
var statearr_34939_36417 = state_34902__$1;
(statearr_34939_36417[(2)] = null);

(statearr_34939_36417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (9))){
var inst_34861 = (state_34902[(8)]);
var inst_34879 = cljs.core.vec(inst_34861);
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34902__$1,(11),out,inst_34879);
} else {
if((state_val_34903 === (5))){
var inst_34862 = (state_34902[(7)]);
var inst_34866 = (state_34902[(9)]);
var inst_34871 = (state_34902[(11)]);
var inst_34861 = (state_34902[(8)]);
var inst_34870 = (inst_34861[inst_34862] = inst_34866);
var inst_34871__$1 = (inst_34862 + (1));
var inst_34873 = (inst_34871__$1 < n);
var state_34902__$1 = (function (){var statearr_34948 = state_34902;
(statearr_34948[(12)] = inst_34870);

(statearr_34948[(11)] = inst_34871__$1);

return statearr_34948;
})();
if(cljs.core.truth_(inst_34873)){
var statearr_34949_36419 = state_34902__$1;
(statearr_34949_36419[(1)] = (8));

} else {
var statearr_34953_36420 = state_34902__$1;
(statearr_34953_36420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (14))){
var inst_34895 = (state_34902[(2)]);
var inst_34896 = cljs.core.async.close_BANG_(out);
var state_34902__$1 = (function (){var statearr_34960 = state_34902;
(statearr_34960[(13)] = inst_34895);

return statearr_34960;
})();
var statearr_34964_36422 = state_34902__$1;
(statearr_34964_36422[(2)] = inst_34896);

(statearr_34964_36422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (10))){
var inst_34886 = (state_34902[(2)]);
var state_34902__$1 = state_34902;
var statearr_34972_36425 = state_34902__$1;
(statearr_34972_36425[(2)] = inst_34886);

(statearr_34972_36425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (8))){
var inst_34871 = (state_34902[(11)]);
var inst_34861 = (state_34902[(8)]);
var tmp34954 = inst_34861;
var inst_34861__$1 = tmp34954;
var inst_34862 = inst_34871;
var state_34902__$1 = (function (){var statearr_34985 = state_34902;
(statearr_34985[(7)] = inst_34862);

(statearr_34985[(8)] = inst_34861__$1);

return statearr_34985;
})();
var statearr_34994_36435 = state_34902__$1;
(statearr_34994_36435[(2)] = null);

(statearr_34994_36435[(1)] = (2));


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
var statearr_35010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35010[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_35010[(1)] = (1));

return statearr_35010;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_34902){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_34902);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e35015){var ex__21351__auto__ = e35015;
var statearr_35016_36444 = state_34902;
(statearr_35016_36444[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_34902[(4)]))){
var statearr_35018_36445 = state_34902;
(statearr_35018_36445[(1)] = cljs.core.first((state_34902[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36447 = state_34902;
state_34902 = G__36447;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_34902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_34902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_35020 = f__21537__auto__();
(statearr_35020[(6)] = c__21535__auto___36389);

return statearr_35020;
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
var G__35025 = arguments.length;
switch (G__35025) {
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
var c__21535__auto___36451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_35082){
var state_val_35083 = (state_35082[(1)]);
if((state_val_35083 === (7))){
var inst_35075 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35084_36453 = state_35082__$1;
(statearr_35084_36453[(2)] = inst_35075);

(statearr_35084_36453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (1))){
var inst_35032 = [];
var inst_35033 = inst_35032;
var inst_35034 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35082__$1 = (function (){var statearr_35085 = state_35082;
(statearr_35085[(7)] = inst_35033);

(statearr_35085[(8)] = inst_35034);

return statearr_35085;
})();
var statearr_35086_36456 = state_35082__$1;
(statearr_35086_36456[(2)] = null);

(statearr_35086_36456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (4))){
var inst_35038 = (state_35082[(9)]);
var inst_35038__$1 = (state_35082[(2)]);
var inst_35039 = (inst_35038__$1 == null);
var inst_35040 = cljs.core.not(inst_35039);
var state_35082__$1 = (function (){var statearr_35087 = state_35082;
(statearr_35087[(9)] = inst_35038__$1);

return statearr_35087;
})();
if(inst_35040){
var statearr_35089_36461 = state_35082__$1;
(statearr_35089_36461[(1)] = (5));

} else {
var statearr_35091_36462 = state_35082__$1;
(statearr_35091_36462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (15))){
var inst_35033 = (state_35082[(7)]);
var inst_35067 = cljs.core.vec(inst_35033);
var state_35082__$1 = state_35082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35082__$1,(18),out,inst_35067);
} else {
if((state_val_35083 === (13))){
var inst_35062 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35096_36464 = state_35082__$1;
(statearr_35096_36464[(2)] = inst_35062);

(statearr_35096_36464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (6))){
var inst_35033 = (state_35082[(7)]);
var inst_35064 = inst_35033.length;
var inst_35065 = (inst_35064 > (0));
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_35065)){
var statearr_35106_36468 = state_35082__$1;
(statearr_35106_36468[(1)] = (15));

} else {
var statearr_35107_36469 = state_35082__$1;
(statearr_35107_36469[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (17))){
var inst_35072 = (state_35082[(2)]);
var inst_35073 = cljs.core.async.close_BANG_(out);
var state_35082__$1 = (function (){var statearr_35111 = state_35082;
(statearr_35111[(10)] = inst_35072);

return statearr_35111;
})();
var statearr_35112_36470 = state_35082__$1;
(statearr_35112_36470[(2)] = inst_35073);

(statearr_35112_36470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (3))){
var inst_35077 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35082__$1,inst_35077);
} else {
if((state_val_35083 === (12))){
var inst_35033 = (state_35082[(7)]);
var inst_35054 = cljs.core.vec(inst_35033);
var state_35082__$1 = state_35082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35082__$1,(14),out,inst_35054);
} else {
if((state_val_35083 === (2))){
var state_35082__$1 = state_35082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35082__$1,(4),ch);
} else {
if((state_val_35083 === (11))){
var inst_35033 = (state_35082[(7)]);
var inst_35038 = (state_35082[(9)]);
var inst_35043 = (state_35082[(11)]);
var inst_35051 = inst_35033.push(inst_35038);
var tmp35113 = inst_35033;
var inst_35033__$1 = tmp35113;
var inst_35034 = inst_35043;
var state_35082__$1 = (function (){var statearr_35125 = state_35082;
(statearr_35125[(7)] = inst_35033__$1);

(statearr_35125[(12)] = inst_35051);

(statearr_35125[(8)] = inst_35034);

return statearr_35125;
})();
var statearr_35129_36486 = state_35082__$1;
(statearr_35129_36486[(2)] = null);

(statearr_35129_36486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (9))){
var inst_35034 = (state_35082[(8)]);
var inst_35047 = cljs.core.keyword_identical_QMARK_(inst_35034,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35082__$1 = state_35082;
var statearr_35133_36488 = state_35082__$1;
(statearr_35133_36488[(2)] = inst_35047);

(statearr_35133_36488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (5))){
var inst_35044 = (state_35082[(13)]);
var inst_35038 = (state_35082[(9)]);
var inst_35034 = (state_35082[(8)]);
var inst_35043 = (state_35082[(11)]);
var inst_35043__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35038) : f.call(null,inst_35038));
var inst_35044__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35043__$1,inst_35034);
var state_35082__$1 = (function (){var statearr_35137 = state_35082;
(statearr_35137[(13)] = inst_35044__$1);

(statearr_35137[(11)] = inst_35043__$1);

return statearr_35137;
})();
if(inst_35044__$1){
var statearr_35138_36491 = state_35082__$1;
(statearr_35138_36491[(1)] = (8));

} else {
var statearr_35140_36492 = state_35082__$1;
(statearr_35140_36492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (14))){
var inst_35038 = (state_35082[(9)]);
var inst_35043 = (state_35082[(11)]);
var inst_35056 = (state_35082[(2)]);
var inst_35057 = [];
var inst_35059 = inst_35057.push(inst_35038);
var inst_35033 = inst_35057;
var inst_35034 = inst_35043;
var state_35082__$1 = (function (){var statearr_35148 = state_35082;
(statearr_35148[(7)] = inst_35033);

(statearr_35148[(8)] = inst_35034);

(statearr_35148[(14)] = inst_35056);

(statearr_35148[(15)] = inst_35059);

return statearr_35148;
})();
var statearr_35153_36495 = state_35082__$1;
(statearr_35153_36495[(2)] = null);

(statearr_35153_36495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (16))){
var state_35082__$1 = state_35082;
var statearr_35154_36500 = state_35082__$1;
(statearr_35154_36500[(2)] = null);

(statearr_35154_36500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (10))){
var inst_35049 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
if(cljs.core.truth_(inst_35049)){
var statearr_35162_36503 = state_35082__$1;
(statearr_35162_36503[(1)] = (11));

} else {
var statearr_35163_36504 = state_35082__$1;
(statearr_35163_36504[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (18))){
var inst_35069 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35164_36510 = state_35082__$1;
(statearr_35164_36510[(2)] = inst_35069);

(statearr_35164_36510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (8))){
var inst_35044 = (state_35082[(13)]);
var state_35082__$1 = state_35082;
var statearr_35165_36514 = state_35082__$1;
(statearr_35165_36514[(2)] = inst_35044);

(statearr_35165_36514[(1)] = (10));


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
var statearr_35168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35168[(0)] = cljs$core$async$state_machine__21348__auto__);

(statearr_35168[(1)] = (1));

return statearr_35168;
});
var cljs$core$async$state_machine__21348__auto____1 = (function (state_35082){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_35082);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e35169){var ex__21351__auto__ = e35169;
var statearr_35170_36522 = state_35082;
(statearr_35170_36522[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_35082[(4)]))){
var statearr_35171_36523 = state_35082;
(statearr_35171_36523[(1)] = cljs.core.first((state_35082[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36524 = state_35082;
state_35082 = G__36524;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
cljs$core$async$state_machine__21348__auto__ = function(state_35082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21348__auto____1.call(this,state_35082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21348__auto____0;
cljs$core$async$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21348__auto____1;
return cljs$core$async$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_35173 = f__21537__auto__();
(statearr_35173[(6)] = c__21535__auto___36451);

return statearr_35173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
