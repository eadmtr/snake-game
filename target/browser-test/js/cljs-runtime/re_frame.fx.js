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
var _STAR_current_trace_STAR__orig_val__40495 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40496 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40496);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___40765 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___40765)){
var new_db_40766 = temp__5804__auto___40765;
var fexpr__40511_40767 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40511_40767.cljs$core$IFn$_invoke$arity$1 ? fexpr__40511_40767.cljs$core$IFn$_invoke$arity$1(new_db_40766) : fexpr__40511_40767.call(null,new_db_40766));
} else {
}

var seq__40513 = cljs.core.seq(effects_without_db);
var chunk__40514 = null;
var count__40515 = (0);
var i__40516 = (0);
while(true){
if((i__40516 < count__40515)){
var vec__40546 = chunk__40514.cljs$core$IIndexed$_nth$arity$2(null,i__40516);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40546,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40546,(1),null);
var temp__5802__auto___40768 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40768)){
var effect_fn_40769 = temp__5802__auto___40768;
(effect_fn_40769.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40769.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40769.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__40770 = seq__40513;
var G__40771 = chunk__40514;
var G__40772 = count__40515;
var G__40773 = (i__40516 + (1));
seq__40513 = G__40770;
chunk__40514 = G__40771;
count__40515 = G__40772;
i__40516 = G__40773;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40513);
if(temp__5804__auto__){
var seq__40513__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40513__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40513__$1);
var G__40775 = cljs.core.chunk_rest(seq__40513__$1);
var G__40776 = c__5568__auto__;
var G__40777 = cljs.core.count(c__5568__auto__);
var G__40778 = (0);
seq__40513 = G__40775;
chunk__40514 = G__40776;
count__40515 = G__40777;
i__40516 = G__40778;
continue;
} else {
var vec__40553 = cljs.core.first(seq__40513__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40553,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40553,(1),null);
var temp__5802__auto___40782 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40782)){
var effect_fn_40783 = temp__5802__auto___40782;
(effect_fn_40783.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40783.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40783.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__40784 = cljs.core.next(seq__40513__$1);
var G__40785 = null;
var G__40786 = (0);
var G__40787 = (0);
seq__40513 = G__40784;
chunk__40514 = G__40785;
count__40515 = G__40786;
i__40516 = G__40787;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14672__auto___40788 = re_frame.interop.now();
var duration__14673__auto___40789 = (end__14672__auto___40788 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14673__auto___40789,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14672__auto___40788);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40495);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___40790 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___40790)){
var new_db_40791 = temp__5804__auto___40790;
var fexpr__40563_40792 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40563_40792.cljs$core$IFn$_invoke$arity$1 ? fexpr__40563_40792.cljs$core$IFn$_invoke$arity$1(new_db_40791) : fexpr__40563_40792.call(null,new_db_40791));
} else {
}

var seq__40565 = cljs.core.seq(effects_without_db);
var chunk__40566 = null;
var count__40567 = (0);
var i__40568 = (0);
while(true){
if((i__40568 < count__40567)){
var vec__40604 = chunk__40566.cljs$core$IIndexed$_nth$arity$2(null,i__40568);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40604,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40604,(1),null);
var temp__5802__auto___40794 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40794)){
var effect_fn_40795 = temp__5802__auto___40794;
(effect_fn_40795.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40795.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40795.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__40796 = seq__40565;
var G__40797 = chunk__40566;
var G__40798 = count__40567;
var G__40799 = (i__40568 + (1));
seq__40565 = G__40796;
chunk__40566 = G__40797;
count__40567 = G__40798;
i__40568 = G__40799;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40565);
if(temp__5804__auto__){
var seq__40565__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40565__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40565__$1);
var G__40800 = cljs.core.chunk_rest(seq__40565__$1);
var G__40801 = c__5568__auto__;
var G__40802 = cljs.core.count(c__5568__auto__);
var G__40803 = (0);
seq__40565 = G__40800;
chunk__40566 = G__40801;
count__40567 = G__40802;
i__40568 = G__40803;
continue;
} else {
var vec__40609 = cljs.core.first(seq__40565__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40609,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40609,(1),null);
var temp__5802__auto___40805 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40805)){
var effect_fn_40806 = temp__5802__auto___40805;
(effect_fn_40806.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40806.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40806.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__40809 = cljs.core.next(seq__40565__$1);
var G__40810 = null;
var G__40811 = (0);
var G__40812 = (0);
seq__40565 = G__40809;
chunk__40566 = G__40810;
count__40567 = G__40811;
i__40568 = G__40812;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__40620){
var map__40621 = p__40620;
var map__40621__$1 = cljs.core.__destructure_map(map__40621);
var effect = map__40621__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40621__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40621__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__40639 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40640 = null;
var count__40641 = (0);
var i__40642 = (0);
while(true){
if((i__40642 < count__40641)){
var effect = chunk__40640.cljs$core$IIndexed$_nth$arity$2(null,i__40642);
re_frame.fx.dispatch_later(effect);


var G__40813 = seq__40639;
var G__40814 = chunk__40640;
var G__40815 = count__40641;
var G__40816 = (i__40642 + (1));
seq__40639 = G__40813;
chunk__40640 = G__40814;
count__40641 = G__40815;
i__40642 = G__40816;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40639);
if(temp__5804__auto__){
var seq__40639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40639__$1);
var G__40817 = cljs.core.chunk_rest(seq__40639__$1);
var G__40818 = c__5568__auto__;
var G__40819 = cljs.core.count(c__5568__auto__);
var G__40820 = (0);
seq__40639 = G__40817;
chunk__40640 = G__40818;
count__40641 = G__40819;
i__40642 = G__40820;
continue;
} else {
var effect = cljs.core.first(seq__40639__$1);
re_frame.fx.dispatch_later(effect);


var G__40821 = cljs.core.next(seq__40639__$1);
var G__40822 = null;
var G__40823 = (0);
var G__40824 = (0);
seq__40639 = G__40821;
chunk__40640 = G__40822;
count__40641 = G__40823;
i__40642 = G__40824;
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
var seq__40657 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40658 = null;
var count__40659 = (0);
var i__40660 = (0);
while(true){
if((i__40660 < count__40659)){
var vec__40680 = chunk__40658.cljs$core$IIndexed$_nth$arity$2(null,i__40660);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40680,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40680,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___40828 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40828)){
var effect_fn_40829 = temp__5802__auto___40828;
(effect_fn_40829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40829.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40831 = seq__40657;
var G__40832 = chunk__40658;
var G__40833 = count__40659;
var G__40834 = (i__40660 + (1));
seq__40657 = G__40831;
chunk__40658 = G__40832;
count__40659 = G__40833;
i__40660 = G__40834;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40657);
if(temp__5804__auto__){
var seq__40657__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40657__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40657__$1);
var G__40838 = cljs.core.chunk_rest(seq__40657__$1);
var G__40839 = c__5568__auto__;
var G__40840 = cljs.core.count(c__5568__auto__);
var G__40841 = (0);
seq__40657 = G__40838;
chunk__40658 = G__40839;
count__40659 = G__40840;
i__40660 = G__40841;
continue;
} else {
var vec__40697 = cljs.core.first(seq__40657__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40697,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40697,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___40846 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___40846)){
var effect_fn_40847 = temp__5802__auto___40846;
(effect_fn_40847.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40847.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40847.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40852 = cljs.core.next(seq__40657__$1);
var G__40853 = null;
var G__40854 = (0);
var G__40855 = (0);
seq__40657 = G__40852;
chunk__40658 = G__40853;
count__40659 = G__40854;
i__40660 = G__40855;
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
var seq__40729 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40730 = null;
var count__40731 = (0);
var i__40732 = (0);
while(true){
if((i__40732 < count__40731)){
var event = chunk__40730.cljs$core$IIndexed$_nth$arity$2(null,i__40732);
re_frame.router.dispatch(event);


var G__40856 = seq__40729;
var G__40857 = chunk__40730;
var G__40858 = count__40731;
var G__40859 = (i__40732 + (1));
seq__40729 = G__40856;
chunk__40730 = G__40857;
count__40731 = G__40858;
i__40732 = G__40859;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40729);
if(temp__5804__auto__){
var seq__40729__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40729__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40729__$1);
var G__40862 = cljs.core.chunk_rest(seq__40729__$1);
var G__40863 = c__5568__auto__;
var G__40864 = cljs.core.count(c__5568__auto__);
var G__40865 = (0);
seq__40729 = G__40862;
chunk__40730 = G__40863;
count__40731 = G__40864;
i__40732 = G__40865;
continue;
} else {
var event = cljs.core.first(seq__40729__$1);
re_frame.router.dispatch(event);


var G__40867 = cljs.core.next(seq__40729__$1);
var G__40868 = null;
var G__40869 = (0);
var G__40870 = (0);
seq__40729 = G__40867;
chunk__40730 = G__40868;
count__40731 = G__40869;
i__40732 = G__40870;
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
var seq__40743 = cljs.core.seq(value);
var chunk__40744 = null;
var count__40745 = (0);
var i__40746 = (0);
while(true){
if((i__40746 < count__40745)){
var event = chunk__40744.cljs$core$IIndexed$_nth$arity$2(null,i__40746);
clear_event(event);


var G__40872 = seq__40743;
var G__40873 = chunk__40744;
var G__40874 = count__40745;
var G__40875 = (i__40746 + (1));
seq__40743 = G__40872;
chunk__40744 = G__40873;
count__40745 = G__40874;
i__40746 = G__40875;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40743);
if(temp__5804__auto__){
var seq__40743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40743__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40743__$1);
var G__40877 = cljs.core.chunk_rest(seq__40743__$1);
var G__40878 = c__5568__auto__;
var G__40879 = cljs.core.count(c__5568__auto__);
var G__40880 = (0);
seq__40743 = G__40877;
chunk__40744 = G__40878;
count__40745 = G__40879;
i__40746 = G__40880;
continue;
} else {
var event = cljs.core.first(seq__40743__$1);
clear_event(event);


var G__40882 = cljs.core.next(seq__40743__$1);
var G__40883 = null;
var G__40884 = (0);
var G__40885 = (0);
seq__40743 = G__40882;
chunk__40744 = G__40883;
count__40745 = G__40884;
i__40746 = G__40885;
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
var _STAR_current_trace_STAR__orig_val__40754 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40755 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40755);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14672__auto___40889 = re_frame.interop.now();
var duration__14673__auto___40890 = (end__14672__auto___40889 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14673__auto___40890,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14672__auto___40889);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40754);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
