goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v3v0.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__51702 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51703 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51703);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___51891 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___51891)){
var new_db_51892 = temp__5804__auto___51891;
var fexpr__51708_51893 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__51708_51893.cljs$core$IFn$_invoke$arity$1 ? fexpr__51708_51893.cljs$core$IFn$_invoke$arity$1(new_db_51892) : fexpr__51708_51893.call(null,new_db_51892));
} else {
}

var seq__51712 = cljs.core.seq(effects_without_db);
var chunk__51713 = null;
var count__51714 = (0);
var i__51715 = (0);
while(true){
if((i__51715 < count__51714)){
var vec__51733 = chunk__51713.cljs$core$IIndexed$_nth$arity$2(null,i__51715);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51733,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51733,(1),null);
var temp__5802__auto___51897 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___51897)){
var effect_fn_51899 = temp__5802__auto___51897;
(effect_fn_51899.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51899.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51899.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51900 = seq__51712;
var G__51901 = chunk__51713;
var G__51902 = count__51714;
var G__51903 = (i__51715 + (1));
seq__51712 = G__51900;
chunk__51713 = G__51901;
count__51714 = G__51902;
i__51715 = G__51903;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51712);
if(temp__5804__auto__){
var seq__51712__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51712__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51712__$1);
var G__51906 = cljs.core.chunk_rest(seq__51712__$1);
var G__51907 = c__5568__auto__;
var G__51908 = cljs.core.count(c__5568__auto__);
var G__51909 = (0);
seq__51712 = G__51906;
chunk__51713 = G__51907;
count__51714 = G__51908;
i__51715 = G__51909;
continue;
} else {
var vec__51742 = cljs.core.first(seq__51712__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51742,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51742,(1),null);
var temp__5802__auto___51910 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___51910)){
var effect_fn_51911 = temp__5802__auto___51910;
(effect_fn_51911.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51911.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51911.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51912 = cljs.core.next(seq__51712__$1);
var G__51913 = null;
var G__51914 = (0);
var G__51915 = (0);
seq__51712 = G__51912;
chunk__51713 = G__51913;
count__51714 = G__51914;
i__51715 = G__51915;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__49949__auto___51918 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now();
var duration__49950__auto___51919 = (end__49949__auto___51918 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49950__auto___51919,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_(end__49949__auto___51918);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51702);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___51923 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___51923)){
var new_db_51925 = temp__5804__auto___51923;
var fexpr__51747_51926 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__51747_51926.cljs$core$IFn$_invoke$arity$1 ? fexpr__51747_51926.cljs$core$IFn$_invoke$arity$1(new_db_51925) : fexpr__51747_51926.call(null,new_db_51925));
} else {
}

var seq__51750 = cljs.core.seq(effects_without_db);
var chunk__51751 = null;
var count__51752 = (0);
var i__51753 = (0);
while(true){
if((i__51753 < count__51752)){
var vec__51793 = chunk__51751.cljs$core$IIndexed$_nth$arity$2(null,i__51753);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51793,(1),null);
var temp__5802__auto___51927 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___51927)){
var effect_fn_51930 = temp__5802__auto___51927;
(effect_fn_51930.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51930.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51930.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51932 = seq__51750;
var G__51933 = chunk__51751;
var G__51934 = count__51752;
var G__51935 = (i__51753 + (1));
seq__51750 = G__51932;
chunk__51751 = G__51933;
count__51752 = G__51934;
i__51753 = G__51935;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51750);
if(temp__5804__auto__){
var seq__51750__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51750__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51750__$1);
var G__51937 = cljs.core.chunk_rest(seq__51750__$1);
var G__51938 = c__5568__auto__;
var G__51939 = cljs.core.count(c__5568__auto__);
var G__51940 = (0);
seq__51750 = G__51937;
chunk__51751 = G__51938;
count__51752 = G__51939;
i__51753 = G__51940;
continue;
} else {
var vec__51802 = cljs.core.first(seq__51750__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51802,(1),null);
var temp__5802__auto___51941 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___51941)){
var effect_fn_51942 = temp__5802__auto___51941;
(effect_fn_51942.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51942.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51942.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51943 = cljs.core.next(seq__51750__$1);
var G__51944 = null;
var G__51945 = (0);
var G__51946 = (0);
seq__51750 = G__51943;
chunk__51751 = G__51944;
count__51752 = G__51945;
i__51753 = G__51946;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$dispatch_later(p__51813){
var map__51814 = p__51813;
var map__51814__$1 = cljs.core.__destructure_map(map__51814);
var effect = map__51814__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(value);
} else {
var seq__51822 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51823 = null;
var count__51824 = (0);
var i__51825 = (0);
while(true){
if((i__51825 < count__51824)){
var effect = chunk__51823.cljs$core$IIndexed$_nth$arity$2(null,i__51825);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__51950 = seq__51822;
var G__51951 = chunk__51823;
var G__51952 = count__51824;
var G__51953 = (i__51825 + (1));
seq__51822 = G__51950;
chunk__51823 = G__51951;
count__51824 = G__51952;
i__51825 = G__51953;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51822);
if(temp__5804__auto__){
var seq__51822__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51822__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51822__$1);
var G__51954 = cljs.core.chunk_rest(seq__51822__$1);
var G__51955 = c__5568__auto__;
var G__51956 = cljs.core.count(c__5568__auto__);
var G__51957 = (0);
seq__51822 = G__51954;
chunk__51823 = G__51955;
count__51824 = G__51956;
i__51825 = G__51957;
continue;
} else {
var effect = cljs.core.first(seq__51822__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__51959 = cljs.core.next(seq__51822__$1);
var G__51960 = null;
var G__51961 = (0);
var G__51962 = (0);
seq__51822 = G__51959;
chunk__51823 = G__51960;
count__51824 = G__51961;
i__51825 = G__51962;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__51834 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__51835 = null;
var count__51836 = (0);
var i__51837 = (0);
while(true){
if((i__51837 < count__51836)){
var vec__51850 = chunk__51835.cljs$core$IIndexed$_nth$arity$2(null,i__51837);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51850,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51850,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___51966 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___51966)){
var effect_fn_51968 = temp__5802__auto___51966;
(effect_fn_51968.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51968.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51968.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__51971 = seq__51834;
var G__51972 = chunk__51835;
var G__51973 = count__51836;
var G__51974 = (i__51837 + (1));
seq__51834 = G__51971;
chunk__51835 = G__51972;
count__51836 = G__51973;
i__51837 = G__51974;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51834);
if(temp__5804__auto__){
var seq__51834__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51834__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51834__$1);
var G__51978 = cljs.core.chunk_rest(seq__51834__$1);
var G__51979 = c__5568__auto__;
var G__51980 = cljs.core.count(c__5568__auto__);
var G__51981 = (0);
seq__51834 = G__51978;
chunk__51835 = G__51979;
count__51836 = G__51980;
i__51837 = G__51981;
continue;
} else {
var vec__51853 = cljs.core.first(seq__51834__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51853,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51853,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___51987 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___51987)){
var effect_fn_51989 = temp__5802__auto___51987;
(effect_fn_51989.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51989.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51989.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__51990 = cljs.core.next(seq__51834__$1);
var G__51991 = null;
var G__51992 = (0);
var G__51993 = (0);
seq__51834 = G__51990;
chunk__51835 = G__51991;
count__51836 = G__51992;
i__51837 = G__51993;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__51861 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51862 = null;
var count__51863 = (0);
var i__51864 = (0);
while(true){
if((i__51864 < count__51863)){
var event = chunk__51862.cljs$core$IIndexed$_nth$arity$2(null,i__51864);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__51997 = seq__51861;
var G__51998 = chunk__51862;
var G__51999 = count__51863;
var G__52000 = (i__51864 + (1));
seq__51861 = G__51997;
chunk__51862 = G__51998;
count__51863 = G__51999;
i__51864 = G__52000;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51861);
if(temp__5804__auto__){
var seq__51861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51861__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51861__$1);
var G__52001 = cljs.core.chunk_rest(seq__51861__$1);
var G__52002 = c__5568__auto__;
var G__52003 = cljs.core.count(c__5568__auto__);
var G__52004 = (0);
seq__51861 = G__52001;
chunk__51862 = G__52002;
count__51863 = G__52003;
i__51864 = G__52004;
continue;
} else {
var event = cljs.core.first(seq__51861__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__52005 = cljs.core.next(seq__51861__$1);
var G__52006 = null;
var G__52007 = (0);
var G__52008 = (0);
seq__51861 = G__52005;
chunk__51862 = G__52006;
count__51863 = G__52007;
i__51864 = G__52008;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__51877 = cljs.core.seq(value);
var chunk__51878 = null;
var count__51879 = (0);
var i__51880 = (0);
while(true){
if((i__51880 < count__51879)){
var event = chunk__51878.cljs$core$IIndexed$_nth$arity$2(null,i__51880);
clear_event(event);


var G__52011 = seq__51877;
var G__52012 = chunk__51878;
var G__52013 = count__51879;
var G__52014 = (i__51880 + (1));
seq__51877 = G__52011;
chunk__51878 = G__52012;
count__51879 = G__52013;
i__51880 = G__52014;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51877);
if(temp__5804__auto__){
var seq__51877__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51877__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51877__$1);
var G__52016 = cljs.core.chunk_rest(seq__51877__$1);
var G__52017 = c__5568__auto__;
var G__52018 = cljs.core.count(c__5568__auto__);
var G__52019 = (0);
seq__51877 = G__52016;
chunk__51878 = G__52017;
count__51879 = G__52018;
i__51880 = G__52019;
continue;
} else {
var event = cljs.core.first(seq__51877__$1);
clear_event(event);


var G__52020 = cljs.core.next(seq__51877__$1);
var G__52021 = null;
var G__52022 = (0);
var G__52023 = (0);
seq__51877 = G__52020;
chunk__51878 = G__52021;
count__51879 = G__52022;
i__51880 = G__52023;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.js.map
