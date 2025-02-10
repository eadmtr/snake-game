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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__39941){
var map__39942 = p__39941;
var map__39942__$1 = cljs.core.__destructure_map(map__39942);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__39951_40003 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__39952_40004 = null;
var count__39953_40005 = (0);
var i__39954_40006 = (0);
while(true){
if((i__39954_40006 < count__39953_40005)){
var vec__39972_40007 = chunk__39952_40004.cljs$core$IIndexed$_nth$arity$2(null,i__39954_40006);
var k_40008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39972_40007,(0),null);
var cb_40009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39972_40007,(1),null);
try{var G__39976_40010 = cljs.core.deref(re_frame.trace.traces);
(cb_40009.cljs$core$IFn$_invoke$arity$1 ? cb_40009.cljs$core$IFn$_invoke$arity$1(G__39976_40010) : cb_40009.call(null,G__39976_40010));
}catch (e39975){var e_40011 = e39975;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40008,"while storing",cljs.core.deref(re_frame.trace.traces),e_40011], 0));
}

var G__40012 = seq__39951_40003;
var G__40013 = chunk__39952_40004;
var G__40014 = count__39953_40005;
var G__40015 = (i__39954_40006 + (1));
seq__39951_40003 = G__40012;
chunk__39952_40004 = G__40013;
count__39953_40005 = G__40014;
i__39954_40006 = G__40015;
continue;
} else {
var temp__5804__auto___40016 = cljs.core.seq(seq__39951_40003);
if(temp__5804__auto___40016){
var seq__39951_40017__$1 = temp__5804__auto___40016;
if(cljs.core.chunked_seq_QMARK_(seq__39951_40017__$1)){
var c__5568__auto___40018 = cljs.core.chunk_first(seq__39951_40017__$1);
var G__40019 = cljs.core.chunk_rest(seq__39951_40017__$1);
var G__40020 = c__5568__auto___40018;
var G__40021 = cljs.core.count(c__5568__auto___40018);
var G__40022 = (0);
seq__39951_40003 = G__40019;
chunk__39952_40004 = G__40020;
count__39953_40005 = G__40021;
i__39954_40006 = G__40022;
continue;
} else {
var vec__39980_40023 = cljs.core.first(seq__39951_40017__$1);
var k_40024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980_40023,(0),null);
var cb_40025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980_40023,(1),null);
try{var G__39984_40026 = cljs.core.deref(re_frame.trace.traces);
(cb_40025.cljs$core$IFn$_invoke$arity$1 ? cb_40025.cljs$core$IFn$_invoke$arity$1(G__39984_40026) : cb_40025.call(null,G__39984_40026));
}catch (e39983){var e_40027 = e39983;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40024,"while storing",cljs.core.deref(re_frame.trace.traces),e_40027], 0));
}

var G__40028 = cljs.core.next(seq__39951_40017__$1);
var G__40029 = null;
var G__40030 = (0);
var G__40031 = (0);
seq__39951_40003 = G__40028;
chunk__39952_40004 = G__40029;
count__39953_40005 = G__40030;
i__39954_40006 = G__40031;
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
