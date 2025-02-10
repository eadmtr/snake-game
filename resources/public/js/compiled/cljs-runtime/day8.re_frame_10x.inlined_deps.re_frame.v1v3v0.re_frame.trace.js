goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$start_trace(p__50030){
var map__50033 = p__50030;
var map__50033__$1 = cljs.core.__destructure_map(map__50033);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50033__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50033__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50033__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50033__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$tracing_cb_debounced(){
var seq__50045_50091 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs));
var chunk__50046_50092 = null;
var count__50047_50093 = (0);
var i__50048_50094 = (0);
while(true){
if((i__50048_50094 < count__50047_50093)){
var vec__50068_50095 = chunk__50046_50092.cljs$core$IIndexed$_nth$arity$2(null,i__50048_50094);
var k_50096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068_50095,(0),null);
var cb_50097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068_50095,(1),null);
try{var G__50073_50098 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces);
(cb_50097.cljs$core$IFn$_invoke$arity$1 ? cb_50097.cljs$core$IFn$_invoke$arity$1(G__50073_50098) : cb_50097.call(null,G__50073_50098));
}catch (e50071){var e_50099 = e50071;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50096,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces),e_50099], 0));
}

var G__50100 = seq__50045_50091;
var G__50101 = chunk__50046_50092;
var G__50102 = count__50047_50093;
var G__50103 = (i__50048_50094 + (1));
seq__50045_50091 = G__50100;
chunk__50046_50092 = G__50101;
count__50047_50093 = G__50102;
i__50048_50094 = G__50103;
continue;
} else {
var temp__5804__auto___50104 = cljs.core.seq(seq__50045_50091);
if(temp__5804__auto___50104){
var seq__50045_50105__$1 = temp__5804__auto___50104;
if(cljs.core.chunked_seq_QMARK_(seq__50045_50105__$1)){
var c__5568__auto___50106 = cljs.core.chunk_first(seq__50045_50105__$1);
var G__50107 = cljs.core.chunk_rest(seq__50045_50105__$1);
var G__50108 = c__5568__auto___50106;
var G__50109 = cljs.core.count(c__5568__auto___50106);
var G__50110 = (0);
seq__50045_50091 = G__50107;
chunk__50046_50092 = G__50108;
count__50047_50093 = G__50109;
i__50048_50094 = G__50110;
continue;
} else {
var vec__50076_50111 = cljs.core.first(seq__50045_50105__$1);
var k_50112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50076_50111,(0),null);
var cb_50113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50076_50111,(1),null);
try{var G__50080_50114 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces);
(cb_50113.cljs$core$IFn$_invoke$arity$1 ? cb_50113.cljs$core$IFn$_invoke$arity$1(G__50080_50114) : cb_50113.call(null,G__50080_50114));
}catch (e50079){var e_50115 = e50079;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50112,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces),e_50115], 0));
}

var G__50117 = cljs.core.next(seq__50045_50105__$1);
var G__50118 = null;
var G__50119 = (0);
var G__50120 = (0);
seq__50045_50091 = G__50117;
chunk__50046_50092 = G__50118;
count__50047_50093 = G__50119;
i__50048_50094 = G__50120;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.js.map
