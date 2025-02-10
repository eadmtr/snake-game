goog.provide('day8.re_frame_10x.fx.local_storage');
goog.scope(function(){
  day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism = goog.module.get('goog.testing.storage.FakeMechanism');
});
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e54125){if((e54125 instanceof Error)){
var _ = e54125;
return (new day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism());
} else {
throw e54125;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
/**
 * Adds a unique prefix to local storage keys to ensure they don't collide with the host application
 */
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){
return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(key){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});
day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e54132){if((e54132 instanceof Error)){
var _ = e54132;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e54132;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__54133 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__54134 = null;
var count__54135 = (0);
var i__54136 = (0);
while(true){
if((i__54136 < count__54135)){
var k = chunk__54134.cljs$core$IIndexed$_nth$arity$2(null,i__54136);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__54156 = seq__54133;
var G__54157 = chunk__54134;
var G__54158 = count__54135;
var G__54159 = (i__54136 + (1));
seq__54133 = G__54156;
chunk__54134 = G__54157;
count__54135 = G__54158;
i__54136 = G__54159;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54133);
if(temp__5804__auto__){
var seq__54133__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54133__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54133__$1);
var G__54160 = cljs.core.chunk_rest(seq__54133__$1);
var G__54161 = c__5568__auto__;
var G__54162 = cljs.core.count(c__5568__auto__);
var G__54163 = (0);
seq__54133 = G__54160;
chunk__54134 = G__54161;
count__54135 = G__54162;
i__54136 = G__54163;
continue;
} else {
var k = cljs.core.first(seq__54133__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__54164 = cljs.core.next(seq__54133__$1);
var G__54165 = null;
var G__54166 = (0);
var G__54167 = (0);
seq__54133 = G__54164;
chunk__54134 = G__54165;
count__54135 = G__54166;
i__54136 = G__54167;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__54140 = arguments.length;
switch (G__54140) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___54170 = arguments.length;
var i__5770__auto___54171 = (0);
while(true){
if((i__5770__auto___54171 < len__5769__auto___54170)){
args_arr__5794__auto__.push((arguments[i__5770__auto___54171]));

var G__54172 = (i__5770__auto___54171 + (1));
i__5770__auto___54171 = G__54172;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(db));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(v));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq54138){
var G__54139 = cljs.core.first(seq54138);
var seq54138__$1 = cljs.core.next(seq54138);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54139,seq54138__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__54149){
var map__54153 = p__54149;
var map__54153__$1 = cljs.core.__destructure_map(map__54153);
var storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54153__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54153__$1,new cljs.core.Keyword(null,"or","or",235744169));
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(storage_key);
var v = day8.re_frame_10x.fx.local_storage.load(storage_key);
var G__54155 = coeffects;
var G__54155__$1 = (((!((fallback == null))))?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54155,k,fallback),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","fallback","day8.re-frame-10x.fx.local-storage/fallback",-294997201),k], null),fallback):G__54155);
if((!((v == null)))){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54155__$1,k,v),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","stored","day8.re-frame-10x.fx.local-storage/stored",1674400390),k], null),v);
} else {
return G__54155__$1;
}
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
