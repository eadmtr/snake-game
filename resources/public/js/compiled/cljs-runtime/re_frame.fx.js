goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__55498 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55499 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55499);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___55827 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___55827)){
var new_db_55828 = temp__5804__auto___55827;
var fexpr__55516_55830 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__55516_55830.cljs$core$IFn$_invoke$arity$1 ? fexpr__55516_55830.cljs$core$IFn$_invoke$arity$1(new_db_55828) : fexpr__55516_55830.call(null,new_db_55828));
} else {
}

var seq__55517 = cljs.core.seq(effects_without_db);
var chunk__55518 = null;
var count__55519 = (0);
var i__55520 = (0);
while(true){
if((i__55520 < count__55519)){
var vec__55553 = chunk__55518.cljs$core$IIndexed$_nth$arity$2(null,i__55520);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55553,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55553,(1),null);
var temp__5802__auto___55832 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___55832)){
var effect_fn_55833 = temp__5802__auto___55832;
(effect_fn_55833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__55835 = seq__55517;
var G__55836 = chunk__55518;
var G__55837 = count__55519;
var G__55838 = (i__55520 + (1));
seq__55517 = G__55835;
chunk__55518 = G__55836;
count__55519 = G__55837;
i__55520 = G__55838;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55517);
if(temp__5804__auto__){
var seq__55517__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55517__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55517__$1);
var G__55840 = cljs.core.chunk_rest(seq__55517__$1);
var G__55841 = c__5568__auto__;
var G__55842 = cljs.core.count(c__5568__auto__);
var G__55843 = (0);
seq__55517 = G__55840;
chunk__55518 = G__55841;
count__55519 = G__55842;
i__55520 = G__55843;
continue;
} else {
var vec__55574 = cljs.core.first(seq__55517__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55574,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55574,(1),null);
var temp__5802__auto___55844 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___55844)){
var effect_fn_55845 = temp__5802__auto___55844;
(effect_fn_55845.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55845.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55845.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__55847 = cljs.core.next(seq__55517__$1);
var G__55848 = null;
var G__55849 = (0);
var G__55850 = (0);
seq__55517 = G__55847;
chunk__55518 = G__55848;
count__55519 = G__55849;
i__55520 = G__55850;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14672__auto___55852 = re_frame.interop.now();
var duration__14673__auto___55853 = (end__14672__auto___55852 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14673__auto___55853,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14672__auto___55852);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55498);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___55854 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___55854)){
var new_db_55855 = temp__5804__auto___55854;
var fexpr__55590_55856 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__55590_55856.cljs$core$IFn$_invoke$arity$1 ? fexpr__55590_55856.cljs$core$IFn$_invoke$arity$1(new_db_55855) : fexpr__55590_55856.call(null,new_db_55855));
} else {
}

var seq__55596 = cljs.core.seq(effects_without_db);
var chunk__55597 = null;
var count__55598 = (0);
var i__55599 = (0);
while(true){
if((i__55599 < count__55598)){
var vec__55634 = chunk__55597.cljs$core$IIndexed$_nth$arity$2(null,i__55599);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55634,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55634,(1),null);
var temp__5802__auto___55859 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___55859)){
var effect_fn_55860 = temp__5802__auto___55859;
(effect_fn_55860.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55860.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55860.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__55861 = seq__55596;
var G__55862 = chunk__55597;
var G__55863 = count__55598;
var G__55864 = (i__55599 + (1));
seq__55596 = G__55861;
chunk__55597 = G__55862;
count__55598 = G__55863;
i__55599 = G__55864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55596);
if(temp__5804__auto__){
var seq__55596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55596__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55596__$1);
var G__55865 = cljs.core.chunk_rest(seq__55596__$1);
var G__55866 = c__5568__auto__;
var G__55867 = cljs.core.count(c__5568__auto__);
var G__55868 = (0);
seq__55596 = G__55865;
chunk__55597 = G__55866;
count__55598 = G__55867;
i__55599 = G__55868;
continue;
} else {
var vec__55646 = cljs.core.first(seq__55596__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55646,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55646,(1),null);
var temp__5802__auto___55872 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___55872)){
var effect_fn_55873 = temp__5802__auto___55872;
(effect_fn_55873.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55873.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55873.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__55874 = cljs.core.next(seq__55596__$1);
var G__55875 = null;
var G__55876 = (0);
var G__55877 = (0);
seq__55596 = G__55874;
chunk__55597 = G__55875;
count__55598 = G__55876;
i__55599 = G__55877;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__55674){
var map__55675 = p__55674;
var map__55675__$1 = cljs.core.__destructure_map(map__55675);
var effect = map__55675__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55675__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55675__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__55693 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55694 = null;
var count__55695 = (0);
var i__55696 = (0);
while(true){
if((i__55696 < count__55695)){
var effect = chunk__55694.cljs$core$IIndexed$_nth$arity$2(null,i__55696);
re_frame.fx.dispatch_later(effect);


var G__55881 = seq__55693;
var G__55882 = chunk__55694;
var G__55883 = count__55695;
var G__55884 = (i__55696 + (1));
seq__55693 = G__55881;
chunk__55694 = G__55882;
count__55695 = G__55883;
i__55696 = G__55884;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55693);
if(temp__5804__auto__){
var seq__55693__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55693__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55693__$1);
var G__55885 = cljs.core.chunk_rest(seq__55693__$1);
var G__55886 = c__5568__auto__;
var G__55887 = cljs.core.count(c__5568__auto__);
var G__55888 = (0);
seq__55693 = G__55885;
chunk__55694 = G__55886;
count__55695 = G__55887;
i__55696 = G__55888;
continue;
} else {
var effect = cljs.core.first(seq__55693__$1);
re_frame.fx.dispatch_later(effect);


var G__55894 = cljs.core.next(seq__55693__$1);
var G__55895 = null;
var G__55896 = (0);
var G__55897 = (0);
seq__55693 = G__55894;
chunk__55694 = G__55895;
count__55695 = G__55896;
i__55696 = G__55897;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__55711 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__55712 = null;
var count__55713 = (0);
var i__55714 = (0);
while(true){
if((i__55714 < count__55713)){
var vec__55740 = chunk__55712.cljs$core$IIndexed$_nth$arity$2(null,i__55714);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55740,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55740,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___55899 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___55899)){
var effect_fn_55900 = temp__5802__auto___55899;
(effect_fn_55900.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55900.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55900.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__55902 = seq__55711;
var G__55903 = chunk__55712;
var G__55904 = count__55713;
var G__55905 = (i__55714 + (1));
seq__55711 = G__55902;
chunk__55712 = G__55903;
count__55713 = G__55904;
i__55714 = G__55905;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55711);
if(temp__5804__auto__){
var seq__55711__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55711__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55711__$1);
var G__55908 = cljs.core.chunk_rest(seq__55711__$1);
var G__55909 = c__5568__auto__;
var G__55910 = cljs.core.count(c__5568__auto__);
var G__55911 = (0);
seq__55711 = G__55908;
chunk__55712 = G__55909;
count__55713 = G__55910;
i__55714 = G__55911;
continue;
} else {
var vec__55755 = cljs.core.first(seq__55711__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55755,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55755,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___55913 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___55913)){
var effect_fn_55917 = temp__5802__auto___55913;
(effect_fn_55917.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55917.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55917.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__55920 = cljs.core.next(seq__55711__$1);
var G__55921 = null;
var G__55922 = (0);
var G__55923 = (0);
seq__55711 = G__55920;
chunk__55712 = G__55921;
count__55713 = G__55922;
i__55714 = G__55923;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__55774 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55775 = null;
var count__55776 = (0);
var i__55777 = (0);
while(true){
if((i__55777 < count__55776)){
var event = chunk__55775.cljs$core$IIndexed$_nth$arity$2(null,i__55777);
re_frame.router.dispatch(event);


var G__55927 = seq__55774;
var G__55928 = chunk__55775;
var G__55929 = count__55776;
var G__55930 = (i__55777 + (1));
seq__55774 = G__55927;
chunk__55775 = G__55928;
count__55776 = G__55929;
i__55777 = G__55930;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55774);
if(temp__5804__auto__){
var seq__55774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55774__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55774__$1);
var G__55933 = cljs.core.chunk_rest(seq__55774__$1);
var G__55934 = c__5568__auto__;
var G__55935 = cljs.core.count(c__5568__auto__);
var G__55936 = (0);
seq__55774 = G__55933;
chunk__55775 = G__55934;
count__55776 = G__55935;
i__55777 = G__55936;
continue;
} else {
var event = cljs.core.first(seq__55774__$1);
re_frame.router.dispatch(event);


var G__55939 = cljs.core.next(seq__55774__$1);
var G__55940 = null;
var G__55941 = (0);
var G__55942 = (0);
seq__55774 = G__55939;
chunk__55775 = G__55940;
count__55776 = G__55941;
i__55777 = G__55942;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__55792 = cljs.core.seq(value);
var chunk__55793 = null;
var count__55794 = (0);
var i__55795 = (0);
while(true){
if((i__55795 < count__55794)){
var event = chunk__55793.cljs$core$IIndexed$_nth$arity$2(null,i__55795);
clear_event(event);


var G__55945 = seq__55792;
var G__55946 = chunk__55793;
var G__55947 = count__55794;
var G__55948 = (i__55795 + (1));
seq__55792 = G__55945;
chunk__55793 = G__55946;
count__55794 = G__55947;
i__55795 = G__55948;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55792);
if(temp__5804__auto__){
var seq__55792__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55792__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55792__$1);
var G__55951 = cljs.core.chunk_rest(seq__55792__$1);
var G__55952 = c__5568__auto__;
var G__55953 = cljs.core.count(c__5568__auto__);
var G__55954 = (0);
seq__55792 = G__55951;
chunk__55793 = G__55952;
count__55794 = G__55953;
i__55795 = G__55954;
continue;
} else {
var event = cljs.core.first(seq__55792__$1);
clear_event(event);


var G__55955 = cljs.core.next(seq__55792__$1);
var G__55956 = null;
var G__55957 = (0);
var G__55958 = (0);
seq__55792 = G__55955;
chunk__55793 = G__55956;
count__55794 = G__55957;
i__55795 = G__55958;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__55811 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55812 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55812);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14672__auto___55966 = re_frame.interop.now();
var duration__14673__auto___55967 = (end__14672__auto___55966 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14673__auto___55967,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14672__auto___55966);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55811);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
