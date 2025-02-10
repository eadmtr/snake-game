goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__76442,p__76443){
var map__76445 = p__76442;
var map__76445__$1 = cljs.core.__destructure_map(map__76445);
var svc = map__76445__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76445__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76445__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76445__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__76446 = p__76443;
var map__76446__$1 = cljs.core.__destructure_map(map__76446);
var msg = map__76446__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76446__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76446__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76446__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76446__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__76455,p__76456){
var map__76457 = p__76455;
var map__76457__$1 = cljs.core.__destructure_map(map__76457);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76457__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__76458 = p__76456;
var map__76458__$1 = cljs.core.__destructure_map(map__76458);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76458__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__76465,p__76466){
var map__76467 = p__76465;
var map__76467__$1 = cljs.core.__destructure_map(map__76467);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76467__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76467__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__76468 = p__76466;
var map__76468__$1 = cljs.core.__destructure_map(map__76468);
var msg = map__76468__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76468__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__76474,tid){
var map__76476 = p__76474;
var map__76476__$1 = cljs.core.__destructure_map(map__76476);
var svc = map__76476__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76476__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__76487 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__76488 = null;
var count__76489 = (0);
var i__76490 = (0);
while(true){
if((i__76490 < count__76489)){
var vec__76500 = chunk__76488.cljs$core$IIndexed$_nth$arity$2(null,i__76490);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76500,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76500,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__76523 = seq__76487;
var G__76524 = chunk__76488;
var G__76525 = count__76489;
var G__76526 = (i__76490 + (1));
seq__76487 = G__76523;
chunk__76488 = G__76524;
count__76489 = G__76525;
i__76490 = G__76526;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76487);
if(temp__5804__auto__){
var seq__76487__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76487__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76487__$1);
var G__76527 = cljs.core.chunk_rest(seq__76487__$1);
var G__76528 = c__5568__auto__;
var G__76529 = cljs.core.count(c__5568__auto__);
var G__76530 = (0);
seq__76487 = G__76527;
chunk__76488 = G__76528;
count__76489 = G__76529;
i__76490 = G__76530;
continue;
} else {
var vec__76503 = cljs.core.first(seq__76487__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76503,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76503,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__76536 = cljs.core.next(seq__76487__$1);
var G__76537 = null;
var G__76538 = (0);
var G__76539 = (0);
seq__76487 = G__76536;
chunk__76488 = G__76537;
count__76489 = G__76538;
i__76490 = G__76539;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__76479_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__76479_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__76480_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__76480_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__76481_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__76481_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__76482_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__76482_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__76507){
var map__76508 = p__76507;
var map__76508__$1 = cljs.core.__destructure_map(map__76508);
var svc = map__76508__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76508__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76508__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
