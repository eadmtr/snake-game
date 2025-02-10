goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__54370){
var map__54371 = p__54370;
var map__54371__$1 = cljs.core.__destructure_map(map__54371);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__54376_54428 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__54377_54429 = null;
var count__54378_54430 = (0);
var i__54379_54431 = (0);
while(true){
if((i__54379_54431 < count__54378_54430)){
var vec__54397_54433 = chunk__54377_54429.cljs$core$IIndexed$_nth$arity$2(null,i__54379_54431);
var k_54434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54397_54433,(0),null);
var cb_54435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54397_54433,(1),null);
try{var G__54406_54436 = cljs.core.deref(re_frame.trace.traces);
(cb_54435.cljs$core$IFn$_invoke$arity$1 ? cb_54435.cljs$core$IFn$_invoke$arity$1(G__54406_54436) : cb_54435.call(null,G__54406_54436));
}catch (e54404){var e_54438 = e54404;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_54434,"while storing",cljs.core.deref(re_frame.trace.traces),e_54438], 0));
}

var G__54439 = seq__54376_54428;
var G__54440 = chunk__54377_54429;
var G__54441 = count__54378_54430;
var G__54442 = (i__54379_54431 + (1));
seq__54376_54428 = G__54439;
chunk__54377_54429 = G__54440;
count__54378_54430 = G__54441;
i__54379_54431 = G__54442;
continue;
} else {
var temp__5804__auto___54445 = cljs.core.seq(seq__54376_54428);
if(temp__5804__auto___54445){
var seq__54376_54447__$1 = temp__5804__auto___54445;
if(cljs.core.chunked_seq_QMARK_(seq__54376_54447__$1)){
var c__5568__auto___54449 = cljs.core.chunk_first(seq__54376_54447__$1);
var G__54450 = cljs.core.chunk_rest(seq__54376_54447__$1);
var G__54451 = c__5568__auto___54449;
var G__54452 = cljs.core.count(c__5568__auto___54449);
var G__54453 = (0);
seq__54376_54428 = G__54450;
chunk__54377_54429 = G__54451;
count__54378_54430 = G__54452;
i__54379_54431 = G__54453;
continue;
} else {
var vec__54408_54456 = cljs.core.first(seq__54376_54447__$1);
var k_54457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54408_54456,(0),null);
var cb_54458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54408_54456,(1),null);
try{var G__54412_54462 = cljs.core.deref(re_frame.trace.traces);
(cb_54458.cljs$core$IFn$_invoke$arity$1 ? cb_54458.cljs$core$IFn$_invoke$arity$1(G__54412_54462) : cb_54458.call(null,G__54412_54462));
}catch (e54411){var e_54463 = e54411;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_54457,"while storing",cljs.core.deref(re_frame.trace.traces),e_54463], 0));
}

var G__54464 = cljs.core.next(seq__54376_54447__$1);
var G__54465 = null;
var G__54466 = (0);
var G__54467 = (0);
seq__54376_54428 = G__54464;
chunk__54377_54429 = G__54465;
count__54378_54430 = G__54466;
i__54379_54431 = G__54467;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
