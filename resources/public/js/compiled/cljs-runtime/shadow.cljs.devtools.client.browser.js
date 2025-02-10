goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___80328 = arguments.length;
var i__5770__auto___80329 = (0);
while(true){
if((i__5770__auto___80329 < len__5769__auto___80328)){
args__5775__auto__.push((arguments[i__5770__auto___80329]));

var G__80330 = (i__5770__auto___80329 + (1));
i__5770__auto___80329 = G__80330;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq79290){
var G__79291 = cljs.core.first(seq79290);
var seq79290__$1 = cljs.core.next(seq79290);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79291,seq79290__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__79308 = cljs.core.seq(sources);
var chunk__79309 = null;
var count__79310 = (0);
var i__79311 = (0);
while(true){
if((i__79311 < count__79310)){
var map__79330 = chunk__79309.cljs$core$IIndexed$_nth$arity$2(null,i__79311);
var map__79330__$1 = cljs.core.__destructure_map(map__79330);
var src = map__79330__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79330__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79330__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79330__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79330__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e79333){var e_80342 = e79333;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_80342);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_80342.message)].join('')));
}

var G__80345 = seq__79308;
var G__80346 = chunk__79309;
var G__80347 = count__79310;
var G__80348 = (i__79311 + (1));
seq__79308 = G__80345;
chunk__79309 = G__80346;
count__79310 = G__80347;
i__79311 = G__80348;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__79308);
if(temp__5804__auto__){
var seq__79308__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79308__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__79308__$1);
var G__80353 = cljs.core.chunk_rest(seq__79308__$1);
var G__80354 = c__5568__auto__;
var G__80355 = cljs.core.count(c__5568__auto__);
var G__80356 = (0);
seq__79308 = G__80353;
chunk__79309 = G__80354;
count__79310 = G__80355;
i__79311 = G__80356;
continue;
} else {
var map__79337 = cljs.core.first(seq__79308__$1);
var map__79337__$1 = cljs.core.__destructure_map(map__79337);
var src = map__79337__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79337__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79337__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79337__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79337__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e79345){var e_80366 = e79345;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_80366);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_80366.message)].join('')));
}

var G__80367 = cljs.core.next(seq__79308__$1);
var G__80368 = null;
var G__80369 = (0);
var G__80370 = (0);
seq__79308 = G__80367;
chunk__79309 = G__80368;
count__79310 = G__80369;
i__79311 = G__80370;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__79379 = cljs.core.seq(js_requires);
var chunk__79380 = null;
var count__79381 = (0);
var i__79382 = (0);
while(true){
if((i__79382 < count__79381)){
var js_ns = chunk__79380.cljs$core$IIndexed$_nth$arity$2(null,i__79382);
var require_str_80374 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_80374);


var G__80375 = seq__79379;
var G__80376 = chunk__79380;
var G__80377 = count__79381;
var G__80378 = (i__79382 + (1));
seq__79379 = G__80375;
chunk__79380 = G__80376;
count__79381 = G__80377;
i__79382 = G__80378;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__79379);
if(temp__5804__auto__){
var seq__79379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79379__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__79379__$1);
var G__80380 = cljs.core.chunk_rest(seq__79379__$1);
var G__80381 = c__5568__auto__;
var G__80382 = cljs.core.count(c__5568__auto__);
var G__80383 = (0);
seq__79379 = G__80380;
chunk__79380 = G__80381;
count__79381 = G__80382;
i__79382 = G__80383;
continue;
} else {
var js_ns = cljs.core.first(seq__79379__$1);
var require_str_80385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_80385);


var G__80386 = cljs.core.next(seq__79379__$1);
var G__80387 = null;
var G__80388 = (0);
var G__80389 = (0);
seq__79379 = G__80386;
chunk__79380 = G__80387;
count__79381 = G__80388;
i__79382 = G__80389;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__79410){
var map__79411 = p__79410;
var map__79411__$1 = cljs.core.__destructure_map(map__79411);
var msg = map__79411__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79411__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79411__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79413(s__79414){
return (new cljs.core.LazySeq(null,(function (){
var s__79414__$1 = s__79414;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79414__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__79426 = cljs.core.first(xs__6360__auto__);
var map__79426__$1 = cljs.core.__destructure_map(map__79426);
var src = map__79426__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79426__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79426__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__79414__$1,map__79426,map__79426__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79411,map__79411__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79413_$_iter__79415(s__79416){
return (new cljs.core.LazySeq(null,((function (s__79414__$1,map__79426,map__79426__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79411,map__79411__$1,msg,info,reload_info){
return (function (){
var s__79416__$1 = s__79416;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79416__$1);
if(temp__5804__auto____$1){
var s__79416__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79416__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__79416__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__79418 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__79417 = (0);
while(true){
if((i__79417 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__79417);
cljs.core.chunk_append(b__79418,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__80401 = (i__79417 + (1));
i__79417 = G__80401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79418),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79413_$_iter__79415(cljs.core.chunk_rest(s__79416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79418),null);
}
} else {
var warning = cljs.core.first(s__79416__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79413_$_iter__79415(cljs.core.rest(s__79416__$2)));
}
} else {
return null;
}
break;
}
});})(s__79414__$1,map__79426,map__79426__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79411,map__79411__$1,msg,info,reload_info))
,null,null));
});})(s__79414__$1,map__79426,map__79426__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79411,map__79411__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79413(cljs.core.rest(s__79414__$1)));
} else {
var G__80411 = cljs.core.rest(s__79414__$1);
s__79414__$1 = G__80411;
continue;
}
} else {
var G__80412 = cljs.core.rest(s__79414__$1);
s__79414__$1 = G__80412;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__79443_80414 = cljs.core.seq(warnings);
var chunk__79444_80415 = null;
var count__79445_80416 = (0);
var i__79446_80417 = (0);
while(true){
if((i__79446_80417 < count__79445_80416)){
var map__79455_80418 = chunk__79444_80415.cljs$core$IIndexed$_nth$arity$2(null,i__79446_80417);
var map__79455_80419__$1 = cljs.core.__destructure_map(map__79455_80418);
var w_80420 = map__79455_80419__$1;
var msg_80421__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79455_80419__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_80422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79455_80419__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_80423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79455_80419__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_80424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79455_80419__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_80424)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_80422),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_80423),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_80421__$1)].join(''));


var G__80425 = seq__79443_80414;
var G__80426 = chunk__79444_80415;
var G__80427 = count__79445_80416;
var G__80428 = (i__79446_80417 + (1));
seq__79443_80414 = G__80425;
chunk__79444_80415 = G__80426;
count__79445_80416 = G__80427;
i__79446_80417 = G__80428;
continue;
} else {
var temp__5804__auto___80429 = cljs.core.seq(seq__79443_80414);
if(temp__5804__auto___80429){
var seq__79443_80430__$1 = temp__5804__auto___80429;
if(cljs.core.chunked_seq_QMARK_(seq__79443_80430__$1)){
var c__5568__auto___80431 = cljs.core.chunk_first(seq__79443_80430__$1);
var G__80432 = cljs.core.chunk_rest(seq__79443_80430__$1);
var G__80433 = c__5568__auto___80431;
var G__80434 = cljs.core.count(c__5568__auto___80431);
var G__80435 = (0);
seq__79443_80414 = G__80432;
chunk__79444_80415 = G__80433;
count__79445_80416 = G__80434;
i__79446_80417 = G__80435;
continue;
} else {
var map__79456_80436 = cljs.core.first(seq__79443_80430__$1);
var map__79456_80437__$1 = cljs.core.__destructure_map(map__79456_80436);
var w_80438 = map__79456_80437__$1;
var msg_80439__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79456_80437__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_80440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79456_80437__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_80441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79456_80437__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_80442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79456_80437__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_80442)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_80440),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_80441),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_80439__$1)].join(''));


var G__80447 = cljs.core.next(seq__79443_80430__$1);
var G__80448 = null;
var G__80449 = (0);
var G__80450 = (0);
seq__79443_80414 = G__80447;
chunk__79444_80415 = G__80448;
count__79445_80416 = G__80449;
i__79446_80417 = G__80450;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__79408_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__79408_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__79465){
var map__79466 = p__79465;
var map__79466__$1 = cljs.core.__destructure_map(map__79466);
var msg = map__79466__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79466__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79466__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__79468 = cljs.core.seq(updates);
var chunk__79470 = null;
var count__79471 = (0);
var i__79472 = (0);
while(true){
if((i__79472 < count__79471)){
var path = chunk__79470.cljs$core$IIndexed$_nth$arity$2(null,i__79472);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__79824_80468 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__79828_80469 = null;
var count__79829_80470 = (0);
var i__79830_80471 = (0);
while(true){
if((i__79830_80471 < count__79829_80470)){
var node_80474 = chunk__79828_80469.cljs$core$IIndexed$_nth$arity$2(null,i__79830_80471);
if(cljs.core.not(node_80474.shadow$old)){
var path_match_80475 = shadow.cljs.devtools.client.browser.match_paths(node_80474.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80475)){
var new_link_80476 = (function (){var G__79922 = node_80474.cloneNode(true);
G__79922.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80475),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__79922;
})();
(node_80474.shadow$old = true);

(new_link_80476.onload = ((function (seq__79824_80468,chunk__79828_80469,count__79829_80470,i__79830_80471,seq__79468,chunk__79470,count__79471,i__79472,new_link_80476,path_match_80475,node_80474,path,map__79466,map__79466__$1,msg,updates,reload_info){
return (function (e){
var seq__79927_80478 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__79929_80479 = null;
var count__79930_80480 = (0);
var i__79931_80481 = (0);
while(true){
if((i__79931_80481 < count__79930_80480)){
var map__79947_80485 = chunk__79929_80479.cljs$core$IIndexed$_nth$arity$2(null,i__79931_80481);
var map__79947_80486__$1 = cljs.core.__destructure_map(map__79947_80485);
var task_80487 = map__79947_80486__$1;
var fn_str_80488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79947_80486__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79947_80486__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80491 = goog.getObjectByName(fn_str_80488,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80489)].join(''));

(fn_obj_80491.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80491.cljs$core$IFn$_invoke$arity$2(path,new_link_80476) : fn_obj_80491.call(null,path,new_link_80476));


var G__80494 = seq__79927_80478;
var G__80495 = chunk__79929_80479;
var G__80496 = count__79930_80480;
var G__80497 = (i__79931_80481 + (1));
seq__79927_80478 = G__80494;
chunk__79929_80479 = G__80495;
count__79930_80480 = G__80496;
i__79931_80481 = G__80497;
continue;
} else {
var temp__5804__auto___80499 = cljs.core.seq(seq__79927_80478);
if(temp__5804__auto___80499){
var seq__79927_80504__$1 = temp__5804__auto___80499;
if(cljs.core.chunked_seq_QMARK_(seq__79927_80504__$1)){
var c__5568__auto___80505 = cljs.core.chunk_first(seq__79927_80504__$1);
var G__80507 = cljs.core.chunk_rest(seq__79927_80504__$1);
var G__80508 = c__5568__auto___80505;
var G__80509 = cljs.core.count(c__5568__auto___80505);
var G__80510 = (0);
seq__79927_80478 = G__80507;
chunk__79929_80479 = G__80508;
count__79930_80480 = G__80509;
i__79931_80481 = G__80510;
continue;
} else {
var map__79953_80511 = cljs.core.first(seq__79927_80504__$1);
var map__79953_80512__$1 = cljs.core.__destructure_map(map__79953_80511);
var task_80513 = map__79953_80512__$1;
var fn_str_80514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79953_80512__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79953_80512__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80517 = goog.getObjectByName(fn_str_80514,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80515)].join(''));

(fn_obj_80517.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80517.cljs$core$IFn$_invoke$arity$2(path,new_link_80476) : fn_obj_80517.call(null,path,new_link_80476));


var G__80518 = cljs.core.next(seq__79927_80504__$1);
var G__80519 = null;
var G__80520 = (0);
var G__80521 = (0);
seq__79927_80478 = G__80518;
chunk__79929_80479 = G__80519;
count__79930_80480 = G__80520;
i__79931_80481 = G__80521;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80474);
});})(seq__79824_80468,chunk__79828_80469,count__79829_80470,i__79830_80471,seq__79468,chunk__79470,count__79471,i__79472,new_link_80476,path_match_80475,node_80474,path,map__79466,map__79466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80475], 0));

goog.dom.insertSiblingAfter(new_link_80476,node_80474);


var G__80523 = seq__79824_80468;
var G__80524 = chunk__79828_80469;
var G__80525 = count__79829_80470;
var G__80526 = (i__79830_80471 + (1));
seq__79824_80468 = G__80523;
chunk__79828_80469 = G__80524;
count__79829_80470 = G__80525;
i__79830_80471 = G__80526;
continue;
} else {
var G__80528 = seq__79824_80468;
var G__80529 = chunk__79828_80469;
var G__80530 = count__79829_80470;
var G__80531 = (i__79830_80471 + (1));
seq__79824_80468 = G__80528;
chunk__79828_80469 = G__80529;
count__79829_80470 = G__80530;
i__79830_80471 = G__80531;
continue;
}
} else {
var G__80533 = seq__79824_80468;
var G__80534 = chunk__79828_80469;
var G__80535 = count__79829_80470;
var G__80536 = (i__79830_80471 + (1));
seq__79824_80468 = G__80533;
chunk__79828_80469 = G__80534;
count__79829_80470 = G__80535;
i__79830_80471 = G__80536;
continue;
}
} else {
var temp__5804__auto___80537 = cljs.core.seq(seq__79824_80468);
if(temp__5804__auto___80537){
var seq__79824_80538__$1 = temp__5804__auto___80537;
if(cljs.core.chunked_seq_QMARK_(seq__79824_80538__$1)){
var c__5568__auto___80540 = cljs.core.chunk_first(seq__79824_80538__$1);
var G__80541 = cljs.core.chunk_rest(seq__79824_80538__$1);
var G__80542 = c__5568__auto___80540;
var G__80543 = cljs.core.count(c__5568__auto___80540);
var G__80544 = (0);
seq__79824_80468 = G__80541;
chunk__79828_80469 = G__80542;
count__79829_80470 = G__80543;
i__79830_80471 = G__80544;
continue;
} else {
var node_80545 = cljs.core.first(seq__79824_80538__$1);
if(cljs.core.not(node_80545.shadow$old)){
var path_match_80546 = shadow.cljs.devtools.client.browser.match_paths(node_80545.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80546)){
var new_link_80549 = (function (){var G__79960 = node_80545.cloneNode(true);
G__79960.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80546),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__79960;
})();
(node_80545.shadow$old = true);

(new_link_80549.onload = ((function (seq__79824_80468,chunk__79828_80469,count__79829_80470,i__79830_80471,seq__79468,chunk__79470,count__79471,i__79472,new_link_80549,path_match_80546,node_80545,seq__79824_80538__$1,temp__5804__auto___80537,path,map__79466,map__79466__$1,msg,updates,reload_info){
return (function (e){
var seq__79962_80550 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__79964_80551 = null;
var count__79965_80552 = (0);
var i__79966_80553 = (0);
while(true){
if((i__79966_80553 < count__79965_80552)){
var map__79990_80560 = chunk__79964_80551.cljs$core$IIndexed$_nth$arity$2(null,i__79966_80553);
var map__79990_80561__$1 = cljs.core.__destructure_map(map__79990_80560);
var task_80562 = map__79990_80561__$1;
var fn_str_80563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79990_80561__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79990_80561__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80565 = goog.getObjectByName(fn_str_80563,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80564)].join(''));

(fn_obj_80565.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80565.cljs$core$IFn$_invoke$arity$2(path,new_link_80549) : fn_obj_80565.call(null,path,new_link_80549));


var G__80569 = seq__79962_80550;
var G__80570 = chunk__79964_80551;
var G__80571 = count__79965_80552;
var G__80572 = (i__79966_80553 + (1));
seq__79962_80550 = G__80569;
chunk__79964_80551 = G__80570;
count__79965_80552 = G__80571;
i__79966_80553 = G__80572;
continue;
} else {
var temp__5804__auto___80573__$1 = cljs.core.seq(seq__79962_80550);
if(temp__5804__auto___80573__$1){
var seq__79962_80575__$1 = temp__5804__auto___80573__$1;
if(cljs.core.chunked_seq_QMARK_(seq__79962_80575__$1)){
var c__5568__auto___80577 = cljs.core.chunk_first(seq__79962_80575__$1);
var G__80578 = cljs.core.chunk_rest(seq__79962_80575__$1);
var G__80579 = c__5568__auto___80577;
var G__80580 = cljs.core.count(c__5568__auto___80577);
var G__80581 = (0);
seq__79962_80550 = G__80578;
chunk__79964_80551 = G__80579;
count__79965_80552 = G__80580;
i__79966_80553 = G__80581;
continue;
} else {
var map__79999_80582 = cljs.core.first(seq__79962_80575__$1);
var map__79999_80583__$1 = cljs.core.__destructure_map(map__79999_80582);
var task_80584 = map__79999_80583__$1;
var fn_str_80585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79999_80583__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79999_80583__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80587 = goog.getObjectByName(fn_str_80585,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80586)].join(''));

(fn_obj_80587.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80587.cljs$core$IFn$_invoke$arity$2(path,new_link_80549) : fn_obj_80587.call(null,path,new_link_80549));


var G__80590 = cljs.core.next(seq__79962_80575__$1);
var G__80591 = null;
var G__80592 = (0);
var G__80593 = (0);
seq__79962_80550 = G__80590;
chunk__79964_80551 = G__80591;
count__79965_80552 = G__80592;
i__79966_80553 = G__80593;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80545);
});})(seq__79824_80468,chunk__79828_80469,count__79829_80470,i__79830_80471,seq__79468,chunk__79470,count__79471,i__79472,new_link_80549,path_match_80546,node_80545,seq__79824_80538__$1,temp__5804__auto___80537,path,map__79466,map__79466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80546], 0));

goog.dom.insertSiblingAfter(new_link_80549,node_80545);


var G__80596 = cljs.core.next(seq__79824_80538__$1);
var G__80597 = null;
var G__80598 = (0);
var G__80599 = (0);
seq__79824_80468 = G__80596;
chunk__79828_80469 = G__80597;
count__79829_80470 = G__80598;
i__79830_80471 = G__80599;
continue;
} else {
var G__80600 = cljs.core.next(seq__79824_80538__$1);
var G__80601 = null;
var G__80602 = (0);
var G__80603 = (0);
seq__79824_80468 = G__80600;
chunk__79828_80469 = G__80601;
count__79829_80470 = G__80602;
i__79830_80471 = G__80603;
continue;
}
} else {
var G__80604 = cljs.core.next(seq__79824_80538__$1);
var G__80605 = null;
var G__80606 = (0);
var G__80607 = (0);
seq__79824_80468 = G__80604;
chunk__79828_80469 = G__80605;
count__79829_80470 = G__80606;
i__79830_80471 = G__80607;
continue;
}
}
} else {
}
}
break;
}


var G__80608 = seq__79468;
var G__80609 = chunk__79470;
var G__80610 = count__79471;
var G__80611 = (i__79472 + (1));
seq__79468 = G__80608;
chunk__79470 = G__80609;
count__79471 = G__80610;
i__79472 = G__80611;
continue;
} else {
var G__80613 = seq__79468;
var G__80614 = chunk__79470;
var G__80615 = count__79471;
var G__80616 = (i__79472 + (1));
seq__79468 = G__80613;
chunk__79470 = G__80614;
count__79471 = G__80615;
i__79472 = G__80616;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__79468);
if(temp__5804__auto__){
var seq__79468__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79468__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__79468__$1);
var G__80619 = cljs.core.chunk_rest(seq__79468__$1);
var G__80620 = c__5568__auto__;
var G__80621 = cljs.core.count(c__5568__auto__);
var G__80622 = (0);
seq__79468 = G__80619;
chunk__79470 = G__80620;
count__79471 = G__80621;
i__79472 = G__80622;
continue;
} else {
var path = cljs.core.first(seq__79468__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__80014_80623 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__80018_80624 = null;
var count__80019_80625 = (0);
var i__80020_80626 = (0);
while(true){
if((i__80020_80626 < count__80019_80625)){
var node_80627 = chunk__80018_80624.cljs$core$IIndexed$_nth$arity$2(null,i__80020_80626);
if(cljs.core.not(node_80627.shadow$old)){
var path_match_80628 = shadow.cljs.devtools.client.browser.match_paths(node_80627.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80628)){
var new_link_80629 = (function (){var G__80117 = node_80627.cloneNode(true);
G__80117.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80628),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80117;
})();
(node_80627.shadow$old = true);

(new_link_80629.onload = ((function (seq__80014_80623,chunk__80018_80624,count__80019_80625,i__80020_80626,seq__79468,chunk__79470,count__79471,i__79472,new_link_80629,path_match_80628,node_80627,path,seq__79468__$1,temp__5804__auto__,map__79466,map__79466__$1,msg,updates,reload_info){
return (function (e){
var seq__80120_80634 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80122_80635 = null;
var count__80123_80636 = (0);
var i__80124_80637 = (0);
while(true){
if((i__80124_80637 < count__80123_80636)){
var map__80146_80641 = chunk__80122_80635.cljs$core$IIndexed$_nth$arity$2(null,i__80124_80637);
var map__80146_80642__$1 = cljs.core.__destructure_map(map__80146_80641);
var task_80643 = map__80146_80642__$1;
var fn_str_80644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80146_80642__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80146_80642__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80650 = goog.getObjectByName(fn_str_80644,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80645)].join(''));

(fn_obj_80650.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80650.cljs$core$IFn$_invoke$arity$2(path,new_link_80629) : fn_obj_80650.call(null,path,new_link_80629));


var G__80652 = seq__80120_80634;
var G__80653 = chunk__80122_80635;
var G__80654 = count__80123_80636;
var G__80655 = (i__80124_80637 + (1));
seq__80120_80634 = G__80652;
chunk__80122_80635 = G__80653;
count__80123_80636 = G__80654;
i__80124_80637 = G__80655;
continue;
} else {
var temp__5804__auto___80656__$1 = cljs.core.seq(seq__80120_80634);
if(temp__5804__auto___80656__$1){
var seq__80120_80661__$1 = temp__5804__auto___80656__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80120_80661__$1)){
var c__5568__auto___80663 = cljs.core.chunk_first(seq__80120_80661__$1);
var G__80665 = cljs.core.chunk_rest(seq__80120_80661__$1);
var G__80666 = c__5568__auto___80663;
var G__80667 = cljs.core.count(c__5568__auto___80663);
var G__80668 = (0);
seq__80120_80634 = G__80665;
chunk__80122_80635 = G__80666;
count__80123_80636 = G__80667;
i__80124_80637 = G__80668;
continue;
} else {
var map__80148_80669 = cljs.core.first(seq__80120_80661__$1);
var map__80148_80670__$1 = cljs.core.__destructure_map(map__80148_80669);
var task_80671 = map__80148_80670__$1;
var fn_str_80672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80148_80670__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80148_80670__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80677 = goog.getObjectByName(fn_str_80672,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80673)].join(''));

(fn_obj_80677.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80677.cljs$core$IFn$_invoke$arity$2(path,new_link_80629) : fn_obj_80677.call(null,path,new_link_80629));


var G__80679 = cljs.core.next(seq__80120_80661__$1);
var G__80680 = null;
var G__80681 = (0);
var G__80682 = (0);
seq__80120_80634 = G__80679;
chunk__80122_80635 = G__80680;
count__80123_80636 = G__80681;
i__80124_80637 = G__80682;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80627);
});})(seq__80014_80623,chunk__80018_80624,count__80019_80625,i__80020_80626,seq__79468,chunk__79470,count__79471,i__79472,new_link_80629,path_match_80628,node_80627,path,seq__79468__$1,temp__5804__auto__,map__79466,map__79466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80628], 0));

goog.dom.insertSiblingAfter(new_link_80629,node_80627);


var G__80686 = seq__80014_80623;
var G__80687 = chunk__80018_80624;
var G__80688 = count__80019_80625;
var G__80689 = (i__80020_80626 + (1));
seq__80014_80623 = G__80686;
chunk__80018_80624 = G__80687;
count__80019_80625 = G__80688;
i__80020_80626 = G__80689;
continue;
} else {
var G__80690 = seq__80014_80623;
var G__80691 = chunk__80018_80624;
var G__80692 = count__80019_80625;
var G__80693 = (i__80020_80626 + (1));
seq__80014_80623 = G__80690;
chunk__80018_80624 = G__80691;
count__80019_80625 = G__80692;
i__80020_80626 = G__80693;
continue;
}
} else {
var G__80694 = seq__80014_80623;
var G__80695 = chunk__80018_80624;
var G__80696 = count__80019_80625;
var G__80697 = (i__80020_80626 + (1));
seq__80014_80623 = G__80694;
chunk__80018_80624 = G__80695;
count__80019_80625 = G__80696;
i__80020_80626 = G__80697;
continue;
}
} else {
var temp__5804__auto___80703__$1 = cljs.core.seq(seq__80014_80623);
if(temp__5804__auto___80703__$1){
var seq__80014_80706__$1 = temp__5804__auto___80703__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80014_80706__$1)){
var c__5568__auto___80707 = cljs.core.chunk_first(seq__80014_80706__$1);
var G__80709 = cljs.core.chunk_rest(seq__80014_80706__$1);
var G__80710 = c__5568__auto___80707;
var G__80711 = cljs.core.count(c__5568__auto___80707);
var G__80712 = (0);
seq__80014_80623 = G__80709;
chunk__80018_80624 = G__80710;
count__80019_80625 = G__80711;
i__80020_80626 = G__80712;
continue;
} else {
var node_80715 = cljs.core.first(seq__80014_80706__$1);
if(cljs.core.not(node_80715.shadow$old)){
var path_match_80718 = shadow.cljs.devtools.client.browser.match_paths(node_80715.getAttribute("href"),path);
if(cljs.core.truth_(path_match_80718)){
var new_link_80719 = (function (){var G__80155 = node_80715.cloneNode(true);
G__80155.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_80718),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80155;
})();
(node_80715.shadow$old = true);

(new_link_80719.onload = ((function (seq__80014_80623,chunk__80018_80624,count__80019_80625,i__80020_80626,seq__79468,chunk__79470,count__79471,i__79472,new_link_80719,path_match_80718,node_80715,seq__80014_80706__$1,temp__5804__auto___80703__$1,path,seq__79468__$1,temp__5804__auto__,map__79466,map__79466__$1,msg,updates,reload_info){
return (function (e){
var seq__80159_80727 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80161_80728 = null;
var count__80162_80729 = (0);
var i__80163_80730 = (0);
while(true){
if((i__80163_80730 < count__80162_80729)){
var map__80177_80732 = chunk__80161_80728.cljs$core$IIndexed$_nth$arity$2(null,i__80163_80730);
var map__80177_80733__$1 = cljs.core.__destructure_map(map__80177_80732);
var task_80734 = map__80177_80733__$1;
var fn_str_80735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80177_80733__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80177_80733__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80738 = goog.getObjectByName(fn_str_80735,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80736)].join(''));

(fn_obj_80738.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80738.cljs$core$IFn$_invoke$arity$2(path,new_link_80719) : fn_obj_80738.call(null,path,new_link_80719));


var G__80742 = seq__80159_80727;
var G__80743 = chunk__80161_80728;
var G__80744 = count__80162_80729;
var G__80745 = (i__80163_80730 + (1));
seq__80159_80727 = G__80742;
chunk__80161_80728 = G__80743;
count__80162_80729 = G__80744;
i__80163_80730 = G__80745;
continue;
} else {
var temp__5804__auto___80746__$2 = cljs.core.seq(seq__80159_80727);
if(temp__5804__auto___80746__$2){
var seq__80159_80749__$1 = temp__5804__auto___80746__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80159_80749__$1)){
var c__5568__auto___80751 = cljs.core.chunk_first(seq__80159_80749__$1);
var G__80752 = cljs.core.chunk_rest(seq__80159_80749__$1);
var G__80753 = c__5568__auto___80751;
var G__80754 = cljs.core.count(c__5568__auto___80751);
var G__80755 = (0);
seq__80159_80727 = G__80752;
chunk__80161_80728 = G__80753;
count__80162_80729 = G__80754;
i__80163_80730 = G__80755;
continue;
} else {
var map__80180_80758 = cljs.core.first(seq__80159_80749__$1);
var map__80180_80759__$1 = cljs.core.__destructure_map(map__80180_80758);
var task_80760 = map__80180_80759__$1;
var fn_str_80761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80180_80759__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_80762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80180_80759__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_80766 = goog.getObjectByName(fn_str_80761,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_80762)].join(''));

(fn_obj_80766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_80766.cljs$core$IFn$_invoke$arity$2(path,new_link_80719) : fn_obj_80766.call(null,path,new_link_80719));


var G__80776 = cljs.core.next(seq__80159_80749__$1);
var G__80777 = null;
var G__80778 = (0);
var G__80779 = (0);
seq__80159_80727 = G__80776;
chunk__80161_80728 = G__80777;
count__80162_80729 = G__80778;
i__80163_80730 = G__80779;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_80715);
});})(seq__80014_80623,chunk__80018_80624,count__80019_80625,i__80020_80626,seq__79468,chunk__79470,count__79471,i__79472,new_link_80719,path_match_80718,node_80715,seq__80014_80706__$1,temp__5804__auto___80703__$1,path,seq__79468__$1,temp__5804__auto__,map__79466,map__79466__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_80718], 0));

goog.dom.insertSiblingAfter(new_link_80719,node_80715);


var G__80790 = cljs.core.next(seq__80014_80706__$1);
var G__80791 = null;
var G__80792 = (0);
var G__80793 = (0);
seq__80014_80623 = G__80790;
chunk__80018_80624 = G__80791;
count__80019_80625 = G__80792;
i__80020_80626 = G__80793;
continue;
} else {
var G__80796 = cljs.core.next(seq__80014_80706__$1);
var G__80797 = null;
var G__80798 = (0);
var G__80799 = (0);
seq__80014_80623 = G__80796;
chunk__80018_80624 = G__80797;
count__80019_80625 = G__80798;
i__80020_80626 = G__80799;
continue;
}
} else {
var G__80804 = cljs.core.next(seq__80014_80706__$1);
var G__80805 = null;
var G__80806 = (0);
var G__80807 = (0);
seq__80014_80623 = G__80804;
chunk__80018_80624 = G__80805;
count__80019_80625 = G__80806;
i__80020_80626 = G__80807;
continue;
}
}
} else {
}
}
break;
}


var G__80808 = cljs.core.next(seq__79468__$1);
var G__80809 = null;
var G__80810 = (0);
var G__80811 = (0);
seq__79468 = G__80808;
chunk__79470 = G__80809;
count__79471 = G__80810;
i__79472 = G__80811;
continue;
} else {
var G__80813 = cljs.core.next(seq__79468__$1);
var G__80814 = null;
var G__80815 = (0);
var G__80816 = (0);
seq__79468 = G__80813;
chunk__79470 = G__80814;
count__79471 = G__80815;
i__79472 = G__80816;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__80217){
var map__80218 = p__80217;
var map__80218__$1 = cljs.core.__destructure_map(map__80218);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80218__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__80219,done,error){
var map__80220 = p__80219;
var map__80220__$1 = cljs.core.__destructure_map(map__80220);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80220__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__80224,done,error){
var map__80234 = p__80224;
var map__80234__$1 = cljs.core.__destructure_map(map__80234);
var msg = map__80234__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80234__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80234__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80234__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__80236){
var map__80238 = p__80236;
var map__80238__$1 = cljs.core.__destructure_map(map__80238);
var src = map__80238__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80238__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__80240 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__80240) : done.call(null,G__80240));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__80243){
var map__80244 = p__80243;
var map__80244__$1 = cljs.core.__destructure_map(map__80244);
var msg__$1 = map__80244__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80244__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e80246){var ex = e80246;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__80249){
var map__80250 = p__80249;
var map__80250__$1 = cljs.core.__destructure_map(map__80250);
var env = map__80250__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80250__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__80279){
var map__80282 = p__80279;
var map__80282__$1 = cljs.core.__destructure_map(map__80282);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80282__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80282__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__80294){
var map__80298 = p__80294;
var map__80298__$1 = cljs.core.__destructure_map(map__80298);
var svc = map__80298__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80298__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
