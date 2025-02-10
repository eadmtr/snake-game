goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31654){
var map__31655 = p__31654;
var map__31655__$1 = cljs.core.__destructure_map(map__31655);
var runtime = map__31655__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31655__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31903 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31903)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__31666 = runtime;
var G__31667 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31903);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__31666,G__31667) : shadow.remote.runtime.shared.process.call(null,G__31666,G__31667));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31673,res){
var map__31674 = p__31673;
var map__31674__$1 = cljs.core.__destructure_map(map__31674);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31674__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31674__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31678 = res;
var G__31678__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31678,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31678);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31678__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31678__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31694 = arguments.length;
switch (G__31694) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31708,msg,handlers,timeout_after_ms){
var map__31710 = p__31708;
var map__31710__$1 = cljs.core.__destructure_map(map__31710);
var runtime = map__31710__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31710__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31924 = arguments.length;
var i__5770__auto___31925 = (0);
while(true){
if((i__5770__auto___31925 < len__5769__auto___31924)){
args__5775__auto__.push((arguments[i__5770__auto___31925]));

var G__31926 = (i__5770__auto___31925 + (1));
i__5770__auto___31925 = G__31926;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31727,ev,args){
var map__31728 = p__31727;
var map__31728__$1 = cljs.core.__destructure_map(map__31728);
var runtime = map__31728__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31728__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31730 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31733 = null;
var count__31734 = (0);
var i__31735 = (0);
while(true){
if((i__31735 < count__31734)){
var ext = chunk__31733.cljs$core$IIndexed$_nth$arity$2(null,i__31735);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31928 = seq__31730;
var G__31929 = chunk__31733;
var G__31930 = count__31734;
var G__31931 = (i__31735 + (1));
seq__31730 = G__31928;
chunk__31733 = G__31929;
count__31734 = G__31930;
i__31735 = G__31931;
continue;
} else {
var G__31932 = seq__31730;
var G__31933 = chunk__31733;
var G__31934 = count__31734;
var G__31935 = (i__31735 + (1));
seq__31730 = G__31932;
chunk__31733 = G__31933;
count__31734 = G__31934;
i__31735 = G__31935;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31730);
if(temp__5804__auto__){
var seq__31730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31730__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31730__$1);
var G__31938 = cljs.core.chunk_rest(seq__31730__$1);
var G__31939 = c__5568__auto__;
var G__31940 = cljs.core.count(c__5568__auto__);
var G__31941 = (0);
seq__31730 = G__31938;
chunk__31733 = G__31939;
count__31734 = G__31940;
i__31735 = G__31941;
continue;
} else {
var ext = cljs.core.first(seq__31730__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31944 = cljs.core.next(seq__31730__$1);
var G__31945 = null;
var G__31946 = (0);
var G__31947 = (0);
seq__31730 = G__31944;
chunk__31733 = G__31945;
count__31734 = G__31946;
i__31735 = G__31947;
continue;
} else {
var G__31948 = cljs.core.next(seq__31730__$1);
var G__31949 = null;
var G__31950 = (0);
var G__31951 = (0);
seq__31730 = G__31948;
chunk__31733 = G__31949;
count__31734 = G__31950;
i__31735 = G__31951;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31715){
var G__31716 = cljs.core.first(seq31715);
var seq31715__$1 = cljs.core.next(seq31715);
var G__31717 = cljs.core.first(seq31715__$1);
var seq31715__$2 = cljs.core.next(seq31715__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31716,G__31717,seq31715__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31764,p__31765){
var map__31766 = p__31764;
var map__31766__$1 = cljs.core.__destructure_map(map__31766);
var runtime = map__31766__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31766__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31767 = p__31765;
var map__31767__$1 = cljs.core.__destructure_map(map__31767);
var msg = map__31767__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31768 = cljs.core.deref(state_ref);
var map__31768__$1 = cljs.core.__destructure_map(map__31768);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31768__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31768__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31783,msg){
var map__31784 = p__31783;
var map__31784__$1 = cljs.core.__destructure_map(map__31784);
var runtime = map__31784__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31784__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31791,key,p__31792){
var map__31793 = p__31791;
var map__31793__$1 = cljs.core.__destructure_map(map__31793);
var state = map__31793__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31793__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31794 = p__31792;
var map__31794__$1 = cljs.core.__destructure_map(map__31794);
var spec = map__31794__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31794__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31800,key,spec){
var map__31801 = p__31800;
var map__31801__$1 = cljs.core.__destructure_map(map__31801);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31801__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31803_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31803_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31804_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31804_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31805_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31805_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31806_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31806_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31807_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31807_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31820,key){
var map__31821 = p__31820;
var map__31821__$1 = cljs.core.__destructure_map(map__31821);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31821__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31829,msg){
var map__31830 = p__31829;
var map__31830__$1 = cljs.core.__destructure_map(map__31830);
var runtime = map__31830__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31830__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31846,p__31847){
var map__31850 = p__31846;
var map__31850__$1 = cljs.core.__destructure_map(map__31850);
var runtime = map__31850__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31850__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31851 = p__31847;
var map__31851__$1 = cljs.core.__destructure_map(map__31851);
var msg = map__31851__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31851__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31851__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31869 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31871 = null;
var count__31872 = (0);
var i__31873 = (0);
while(true){
if((i__31873 < count__31872)){
var map__31889 = chunk__31871.cljs$core$IIndexed$_nth$arity$2(null,i__31873);
var map__31889__$1 = cljs.core.__destructure_map(map__31889);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31992 = seq__31869;
var G__31993 = chunk__31871;
var G__31994 = count__31872;
var G__31995 = (i__31873 + (1));
seq__31869 = G__31992;
chunk__31871 = G__31993;
count__31872 = G__31994;
i__31873 = G__31995;
continue;
} else {
var G__31996 = seq__31869;
var G__31997 = chunk__31871;
var G__31998 = count__31872;
var G__31999 = (i__31873 + (1));
seq__31869 = G__31996;
chunk__31871 = G__31997;
count__31872 = G__31998;
i__31873 = G__31999;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31869);
if(temp__5804__auto__){
var seq__31869__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31869__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31869__$1);
var G__32000 = cljs.core.chunk_rest(seq__31869__$1);
var G__32001 = c__5568__auto__;
var G__32002 = cljs.core.count(c__5568__auto__);
var G__32003 = (0);
seq__31869 = G__32000;
chunk__31871 = G__32001;
count__31872 = G__32002;
i__31873 = G__32003;
continue;
} else {
var map__31890 = cljs.core.first(seq__31869__$1);
var map__31890__$1 = cljs.core.__destructure_map(map__31890);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31890__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32004 = cljs.core.next(seq__31869__$1);
var G__32006 = null;
var G__32007 = (0);
var G__32008 = (0);
seq__31869 = G__32004;
chunk__31871 = G__32006;
count__31872 = G__32007;
i__31873 = G__32008;
continue;
} else {
var G__32011 = cljs.core.next(seq__31869__$1);
var G__32012 = null;
var G__32013 = (0);
var G__32014 = (0);
seq__31869 = G__32011;
chunk__31871 = G__32012;
count__31872 = G__32013;
i__31873 = G__32014;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
