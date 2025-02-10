goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39403 = arguments.length;
var i__5770__auto___39404 = (0);
while(true){
if((i__5770__auto___39404 < len__5769__auto___39403)){
args__5775__auto__.push((arguments[i__5770__auto___39404]));

var G__39405 = (i__5770__auto___39404 + (1));
i__5770__auto___39404 = G__39405;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38862){
var G__38863 = cljs.core.first(seq38862);
var seq38862__$1 = cljs.core.next(seq38862);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38863,seq38862__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38872 = cljs.core.seq(sources);
var chunk__38873 = null;
var count__38874 = (0);
var i__38875 = (0);
while(true){
if((i__38875 < count__38874)){
var map__38882 = chunk__38873.cljs$core$IIndexed$_nth$arity$2(null,i__38875);
var map__38882__$1 = cljs.core.__destructure_map(map__38882);
var src = map__38882__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38883){var e_39407 = e38883;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39407);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39407.message)].join('')));
}

var G__39408 = seq__38872;
var G__39409 = chunk__38873;
var G__39410 = count__38874;
var G__39411 = (i__38875 + (1));
seq__38872 = G__39408;
chunk__38873 = G__39409;
count__38874 = G__39410;
i__38875 = G__39411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38872);
if(temp__5804__auto__){
var seq__38872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38872__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38872__$1);
var G__39413 = cljs.core.chunk_rest(seq__38872__$1);
var G__39414 = c__5568__auto__;
var G__39415 = cljs.core.count(c__5568__auto__);
var G__39416 = (0);
seq__38872 = G__39413;
chunk__38873 = G__39414;
count__38874 = G__39415;
i__38875 = G__39416;
continue;
} else {
var map__38884 = cljs.core.first(seq__38872__$1);
var map__38884__$1 = cljs.core.__destructure_map(map__38884);
var src = map__38884__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38884__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38884__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38884__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38884__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38885){var e_39417 = e38885;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39417);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39417.message)].join('')));
}

var G__39418 = cljs.core.next(seq__38872__$1);
var G__39419 = null;
var G__39420 = (0);
var G__39421 = (0);
seq__38872 = G__39418;
chunk__38873 = G__39419;
count__38874 = G__39420;
i__38875 = G__39421;
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
var seq__38887 = cljs.core.seq(js_requires);
var chunk__38888 = null;
var count__38889 = (0);
var i__38890 = (0);
while(true){
if((i__38890 < count__38889)){
var js_ns = chunk__38888.cljs$core$IIndexed$_nth$arity$2(null,i__38890);
var require_str_39423 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39423);


var G__39424 = seq__38887;
var G__39425 = chunk__38888;
var G__39426 = count__38889;
var G__39427 = (i__38890 + (1));
seq__38887 = G__39424;
chunk__38888 = G__39425;
count__38889 = G__39426;
i__38890 = G__39427;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38887);
if(temp__5804__auto__){
var seq__38887__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38887__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38887__$1);
var G__39428 = cljs.core.chunk_rest(seq__38887__$1);
var G__39429 = c__5568__auto__;
var G__39430 = cljs.core.count(c__5568__auto__);
var G__39431 = (0);
seq__38887 = G__39428;
chunk__38888 = G__39429;
count__38889 = G__39430;
i__38890 = G__39431;
continue;
} else {
var js_ns = cljs.core.first(seq__38887__$1);
var require_str_39432 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39432);


var G__39433 = cljs.core.next(seq__38887__$1);
var G__39434 = null;
var G__39435 = (0);
var G__39436 = (0);
seq__38887 = G__39433;
chunk__38888 = G__39434;
count__38889 = G__39435;
i__38890 = G__39436;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38895){
var map__38899 = p__38895;
var map__38899__$1 = cljs.core.__destructure_map(map__38899);
var msg = map__38899__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38899__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38899__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38902(s__38903){
return (new cljs.core.LazySeq(null,(function (){
var s__38903__$1 = s__38903;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38903__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38911 = cljs.core.first(xs__6360__auto__);
var map__38911__$1 = cljs.core.__destructure_map(map__38911);
var src = map__38911__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38903__$1,map__38911,map__38911__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38899,map__38899__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38902_$_iter__38904(s__38905){
return (new cljs.core.LazySeq(null,((function (s__38903__$1,map__38911,map__38911__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38899,map__38899__$1,msg,info,reload_info){
return (function (){
var s__38905__$1 = s__38905;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38905__$1);
if(temp__5804__auto____$1){
var s__38905__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38905__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38905__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38907 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38906 = (0);
while(true){
if((i__38906 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38906);
cljs.core.chunk_append(b__38907,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39437 = (i__38906 + (1));
i__38906 = G__39437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38907),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38902_$_iter__38904(cljs.core.chunk_rest(s__38905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38907),null);
}
} else {
var warning = cljs.core.first(s__38905__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38902_$_iter__38904(cljs.core.rest(s__38905__$2)));
}
} else {
return null;
}
break;
}
});})(s__38903__$1,map__38911,map__38911__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38899,map__38899__$1,msg,info,reload_info))
,null,null));
});})(s__38903__$1,map__38911,map__38911__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38899,map__38899__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38902(cljs.core.rest(s__38903__$1)));
} else {
var G__39441 = cljs.core.rest(s__38903__$1);
s__38903__$1 = G__39441;
continue;
}
} else {
var G__39442 = cljs.core.rest(s__38903__$1);
s__38903__$1 = G__39442;
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
var seq__38919_39443 = cljs.core.seq(warnings);
var chunk__38920_39444 = null;
var count__38921_39445 = (0);
var i__38922_39446 = (0);
while(true){
if((i__38922_39446 < count__38921_39445)){
var map__38929_39447 = chunk__38920_39444.cljs$core$IIndexed$_nth$arity$2(null,i__38922_39446);
var map__38929_39448__$1 = cljs.core.__destructure_map(map__38929_39447);
var w_39449 = map__38929_39448__$1;
var msg_39450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929_39448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929_39448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929_39448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38929_39448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39450__$1)].join(''));


var G__39457 = seq__38919_39443;
var G__39458 = chunk__38920_39444;
var G__39459 = count__38921_39445;
var G__39460 = (i__38922_39446 + (1));
seq__38919_39443 = G__39457;
chunk__38920_39444 = G__39458;
count__38921_39445 = G__39459;
i__38922_39446 = G__39460;
continue;
} else {
var temp__5804__auto___39464 = cljs.core.seq(seq__38919_39443);
if(temp__5804__auto___39464){
var seq__38919_39467__$1 = temp__5804__auto___39464;
if(cljs.core.chunked_seq_QMARK_(seq__38919_39467__$1)){
var c__5568__auto___39468 = cljs.core.chunk_first(seq__38919_39467__$1);
var G__39469 = cljs.core.chunk_rest(seq__38919_39467__$1);
var G__39470 = c__5568__auto___39468;
var G__39471 = cljs.core.count(c__5568__auto___39468);
var G__39472 = (0);
seq__38919_39443 = G__39469;
chunk__38920_39444 = G__39470;
count__38921_39445 = G__39471;
i__38922_39446 = G__39472;
continue;
} else {
var map__38934_39473 = cljs.core.first(seq__38919_39467__$1);
var map__38934_39474__$1 = cljs.core.__destructure_map(map__38934_39473);
var w_39475 = map__38934_39474__$1;
var msg_39476__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934_39474__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934_39474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934_39474__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934_39474__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39479)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39477),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39478),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39476__$1)].join(''));


var G__39481 = cljs.core.next(seq__38919_39467__$1);
var G__39482 = null;
var G__39483 = (0);
var G__39484 = (0);
seq__38919_39443 = G__39481;
chunk__38920_39444 = G__39482;
count__38921_39445 = G__39483;
i__38922_39446 = G__39484;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38894_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38894_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38993){
var map__38994 = p__38993;
var map__38994__$1 = cljs.core.__destructure_map(map__38994);
var msg = map__38994__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38994__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38994__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38995 = cljs.core.seq(updates);
var chunk__38997 = null;
var count__38998 = (0);
var i__38999 = (0);
while(true){
if((i__38999 < count__38998)){
var path = chunk__38997.cljs$core$IIndexed$_nth$arity$2(null,i__38999);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39146_39490 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39150_39491 = null;
var count__39151_39492 = (0);
var i__39152_39493 = (0);
while(true){
if((i__39152_39493 < count__39151_39492)){
var node_39494 = chunk__39150_39491.cljs$core$IIndexed$_nth$arity$2(null,i__39152_39493);
if(cljs.core.not(node_39494.shadow$old)){
var path_match_39495 = shadow.cljs.devtools.client.browser.match_paths(node_39494.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39495)){
var new_link_39497 = (function (){var G__39180 = node_39494.cloneNode(true);
G__39180.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39495),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39180;
})();
(node_39494.shadow$old = true);

(new_link_39497.onload = ((function (seq__39146_39490,chunk__39150_39491,count__39151_39492,i__39152_39493,seq__38995,chunk__38997,count__38998,i__38999,new_link_39497,path_match_39495,node_39494,path,map__38994,map__38994__$1,msg,updates,reload_info){
return (function (e){
var seq__39181_39500 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39183_39501 = null;
var count__39184_39502 = (0);
var i__39185_39503 = (0);
while(true){
if((i__39185_39503 < count__39184_39502)){
var map__39189_39505 = chunk__39183_39501.cljs$core$IIndexed$_nth$arity$2(null,i__39185_39503);
var map__39189_39506__$1 = cljs.core.__destructure_map(map__39189_39505);
var task_39507 = map__39189_39506__$1;
var fn_str_39508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39189_39506__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39189_39506__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39511 = goog.getObjectByName(fn_str_39508,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39509)].join(''));

(fn_obj_39511.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39511.cljs$core$IFn$_invoke$arity$2(path,new_link_39497) : fn_obj_39511.call(null,path,new_link_39497));


var G__39513 = seq__39181_39500;
var G__39514 = chunk__39183_39501;
var G__39515 = count__39184_39502;
var G__39516 = (i__39185_39503 + (1));
seq__39181_39500 = G__39513;
chunk__39183_39501 = G__39514;
count__39184_39502 = G__39515;
i__39185_39503 = G__39516;
continue;
} else {
var temp__5804__auto___39517 = cljs.core.seq(seq__39181_39500);
if(temp__5804__auto___39517){
var seq__39181_39519__$1 = temp__5804__auto___39517;
if(cljs.core.chunked_seq_QMARK_(seq__39181_39519__$1)){
var c__5568__auto___39520 = cljs.core.chunk_first(seq__39181_39519__$1);
var G__39522 = cljs.core.chunk_rest(seq__39181_39519__$1);
var G__39523 = c__5568__auto___39520;
var G__39524 = cljs.core.count(c__5568__auto___39520);
var G__39525 = (0);
seq__39181_39500 = G__39522;
chunk__39183_39501 = G__39523;
count__39184_39502 = G__39524;
i__39185_39503 = G__39525;
continue;
} else {
var map__39190_39527 = cljs.core.first(seq__39181_39519__$1);
var map__39190_39528__$1 = cljs.core.__destructure_map(map__39190_39527);
var task_39529 = map__39190_39528__$1;
var fn_str_39530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39190_39528__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39190_39528__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39533 = goog.getObjectByName(fn_str_39530,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39531)].join(''));

(fn_obj_39533.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39533.cljs$core$IFn$_invoke$arity$2(path,new_link_39497) : fn_obj_39533.call(null,path,new_link_39497));


var G__39534 = cljs.core.next(seq__39181_39519__$1);
var G__39535 = null;
var G__39536 = (0);
var G__39537 = (0);
seq__39181_39500 = G__39534;
chunk__39183_39501 = G__39535;
count__39184_39502 = G__39536;
i__39185_39503 = G__39537;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39494);
});})(seq__39146_39490,chunk__39150_39491,count__39151_39492,i__39152_39493,seq__38995,chunk__38997,count__38998,i__38999,new_link_39497,path_match_39495,node_39494,path,map__38994,map__38994__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39495], 0));

goog.dom.insertSiblingAfter(new_link_39497,node_39494);


var G__39538 = seq__39146_39490;
var G__39539 = chunk__39150_39491;
var G__39540 = count__39151_39492;
var G__39541 = (i__39152_39493 + (1));
seq__39146_39490 = G__39538;
chunk__39150_39491 = G__39539;
count__39151_39492 = G__39540;
i__39152_39493 = G__39541;
continue;
} else {
var G__39542 = seq__39146_39490;
var G__39543 = chunk__39150_39491;
var G__39544 = count__39151_39492;
var G__39545 = (i__39152_39493 + (1));
seq__39146_39490 = G__39542;
chunk__39150_39491 = G__39543;
count__39151_39492 = G__39544;
i__39152_39493 = G__39545;
continue;
}
} else {
var G__39546 = seq__39146_39490;
var G__39547 = chunk__39150_39491;
var G__39548 = count__39151_39492;
var G__39549 = (i__39152_39493 + (1));
seq__39146_39490 = G__39546;
chunk__39150_39491 = G__39547;
count__39151_39492 = G__39548;
i__39152_39493 = G__39549;
continue;
}
} else {
var temp__5804__auto___39550 = cljs.core.seq(seq__39146_39490);
if(temp__5804__auto___39550){
var seq__39146_39551__$1 = temp__5804__auto___39550;
if(cljs.core.chunked_seq_QMARK_(seq__39146_39551__$1)){
var c__5568__auto___39552 = cljs.core.chunk_first(seq__39146_39551__$1);
var G__39553 = cljs.core.chunk_rest(seq__39146_39551__$1);
var G__39554 = c__5568__auto___39552;
var G__39555 = cljs.core.count(c__5568__auto___39552);
var G__39556 = (0);
seq__39146_39490 = G__39553;
chunk__39150_39491 = G__39554;
count__39151_39492 = G__39555;
i__39152_39493 = G__39556;
continue;
} else {
var node_39560 = cljs.core.first(seq__39146_39551__$1);
if(cljs.core.not(node_39560.shadow$old)){
var path_match_39561 = shadow.cljs.devtools.client.browser.match_paths(node_39560.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39561)){
var new_link_39562 = (function (){var G__39191 = node_39560.cloneNode(true);
G__39191.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39561),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39191;
})();
(node_39560.shadow$old = true);

(new_link_39562.onload = ((function (seq__39146_39490,chunk__39150_39491,count__39151_39492,i__39152_39493,seq__38995,chunk__38997,count__38998,i__38999,new_link_39562,path_match_39561,node_39560,seq__39146_39551__$1,temp__5804__auto___39550,path,map__38994,map__38994__$1,msg,updates,reload_info){
return (function (e){
var seq__39192_39567 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39194_39568 = null;
var count__39195_39569 = (0);
var i__39196_39570 = (0);
while(true){
if((i__39196_39570 < count__39195_39569)){
var map__39201_39571 = chunk__39194_39568.cljs$core$IIndexed$_nth$arity$2(null,i__39196_39570);
var map__39201_39572__$1 = cljs.core.__destructure_map(map__39201_39571);
var task_39573 = map__39201_39572__$1;
var fn_str_39574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39201_39572__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39201_39572__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39578 = goog.getObjectByName(fn_str_39574,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39575)].join(''));

(fn_obj_39578.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39578.cljs$core$IFn$_invoke$arity$2(path,new_link_39562) : fn_obj_39578.call(null,path,new_link_39562));


var G__39581 = seq__39192_39567;
var G__39582 = chunk__39194_39568;
var G__39583 = count__39195_39569;
var G__39584 = (i__39196_39570 + (1));
seq__39192_39567 = G__39581;
chunk__39194_39568 = G__39582;
count__39195_39569 = G__39583;
i__39196_39570 = G__39584;
continue;
} else {
var temp__5804__auto___39585__$1 = cljs.core.seq(seq__39192_39567);
if(temp__5804__auto___39585__$1){
var seq__39192_39586__$1 = temp__5804__auto___39585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39192_39586__$1)){
var c__5568__auto___39588 = cljs.core.chunk_first(seq__39192_39586__$1);
var G__39589 = cljs.core.chunk_rest(seq__39192_39586__$1);
var G__39590 = c__5568__auto___39588;
var G__39591 = cljs.core.count(c__5568__auto___39588);
var G__39592 = (0);
seq__39192_39567 = G__39589;
chunk__39194_39568 = G__39590;
count__39195_39569 = G__39591;
i__39196_39570 = G__39592;
continue;
} else {
var map__39202_39594 = cljs.core.first(seq__39192_39586__$1);
var map__39202_39595__$1 = cljs.core.__destructure_map(map__39202_39594);
var task_39596 = map__39202_39595__$1;
var fn_str_39597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39202_39595__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39202_39595__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39599 = goog.getObjectByName(fn_str_39597,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39598)].join(''));

(fn_obj_39599.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39599.cljs$core$IFn$_invoke$arity$2(path,new_link_39562) : fn_obj_39599.call(null,path,new_link_39562));


var G__39600 = cljs.core.next(seq__39192_39586__$1);
var G__39601 = null;
var G__39602 = (0);
var G__39603 = (0);
seq__39192_39567 = G__39600;
chunk__39194_39568 = G__39601;
count__39195_39569 = G__39602;
i__39196_39570 = G__39603;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39560);
});})(seq__39146_39490,chunk__39150_39491,count__39151_39492,i__39152_39493,seq__38995,chunk__38997,count__38998,i__38999,new_link_39562,path_match_39561,node_39560,seq__39146_39551__$1,temp__5804__auto___39550,path,map__38994,map__38994__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39561], 0));

goog.dom.insertSiblingAfter(new_link_39562,node_39560);


var G__39604 = cljs.core.next(seq__39146_39551__$1);
var G__39605 = null;
var G__39606 = (0);
var G__39607 = (0);
seq__39146_39490 = G__39604;
chunk__39150_39491 = G__39605;
count__39151_39492 = G__39606;
i__39152_39493 = G__39607;
continue;
} else {
var G__39608 = cljs.core.next(seq__39146_39551__$1);
var G__39609 = null;
var G__39610 = (0);
var G__39611 = (0);
seq__39146_39490 = G__39608;
chunk__39150_39491 = G__39609;
count__39151_39492 = G__39610;
i__39152_39493 = G__39611;
continue;
}
} else {
var G__39612 = cljs.core.next(seq__39146_39551__$1);
var G__39613 = null;
var G__39614 = (0);
var G__39615 = (0);
seq__39146_39490 = G__39612;
chunk__39150_39491 = G__39613;
count__39151_39492 = G__39614;
i__39152_39493 = G__39615;
continue;
}
}
} else {
}
}
break;
}


var G__39616 = seq__38995;
var G__39617 = chunk__38997;
var G__39618 = count__38998;
var G__39619 = (i__38999 + (1));
seq__38995 = G__39616;
chunk__38997 = G__39617;
count__38998 = G__39618;
i__38999 = G__39619;
continue;
} else {
var G__39620 = seq__38995;
var G__39621 = chunk__38997;
var G__39622 = count__38998;
var G__39623 = (i__38999 + (1));
seq__38995 = G__39620;
chunk__38997 = G__39621;
count__38998 = G__39622;
i__38999 = G__39623;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38995);
if(temp__5804__auto__){
var seq__38995__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38995__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38995__$1);
var G__39624 = cljs.core.chunk_rest(seq__38995__$1);
var G__39625 = c__5568__auto__;
var G__39626 = cljs.core.count(c__5568__auto__);
var G__39627 = (0);
seq__38995 = G__39624;
chunk__38997 = G__39625;
count__38998 = G__39626;
i__38999 = G__39627;
continue;
} else {
var path = cljs.core.first(seq__38995__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39203_39628 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39207_39629 = null;
var count__39208_39630 = (0);
var i__39209_39631 = (0);
while(true){
if((i__39209_39631 < count__39208_39630)){
var node_39636 = chunk__39207_39629.cljs$core$IIndexed$_nth$arity$2(null,i__39209_39631);
if(cljs.core.not(node_39636.shadow$old)){
var path_match_39638 = shadow.cljs.devtools.client.browser.match_paths(node_39636.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39638)){
var new_link_39639 = (function (){var G__39272 = node_39636.cloneNode(true);
G__39272.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39638),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39272;
})();
(node_39636.shadow$old = true);

(new_link_39639.onload = ((function (seq__39203_39628,chunk__39207_39629,count__39208_39630,i__39209_39631,seq__38995,chunk__38997,count__38998,i__38999,new_link_39639,path_match_39638,node_39636,path,seq__38995__$1,temp__5804__auto__,map__38994,map__38994__$1,msg,updates,reload_info){
return (function (e){
var seq__39273_39646 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39275_39647 = null;
var count__39276_39648 = (0);
var i__39277_39649 = (0);
while(true){
if((i__39277_39649 < count__39276_39648)){
var map__39289_39651 = chunk__39275_39647.cljs$core$IIndexed$_nth$arity$2(null,i__39277_39649);
var map__39289_39652__$1 = cljs.core.__destructure_map(map__39289_39651);
var task_39653 = map__39289_39652__$1;
var fn_str_39654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39289_39652__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39289_39652__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39657 = goog.getObjectByName(fn_str_39654,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39655)].join(''));

(fn_obj_39657.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39657.cljs$core$IFn$_invoke$arity$2(path,new_link_39639) : fn_obj_39657.call(null,path,new_link_39639));


var G__39659 = seq__39273_39646;
var G__39660 = chunk__39275_39647;
var G__39661 = count__39276_39648;
var G__39662 = (i__39277_39649 + (1));
seq__39273_39646 = G__39659;
chunk__39275_39647 = G__39660;
count__39276_39648 = G__39661;
i__39277_39649 = G__39662;
continue;
} else {
var temp__5804__auto___39666__$1 = cljs.core.seq(seq__39273_39646);
if(temp__5804__auto___39666__$1){
var seq__39273_39667__$1 = temp__5804__auto___39666__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39273_39667__$1)){
var c__5568__auto___39668 = cljs.core.chunk_first(seq__39273_39667__$1);
var G__39669 = cljs.core.chunk_rest(seq__39273_39667__$1);
var G__39670 = c__5568__auto___39668;
var G__39671 = cljs.core.count(c__5568__auto___39668);
var G__39672 = (0);
seq__39273_39646 = G__39669;
chunk__39275_39647 = G__39670;
count__39276_39648 = G__39671;
i__39277_39649 = G__39672;
continue;
} else {
var map__39294_39674 = cljs.core.first(seq__39273_39667__$1);
var map__39294_39675__$1 = cljs.core.__destructure_map(map__39294_39674);
var task_39676 = map__39294_39675__$1;
var fn_str_39677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294_39675__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294_39675__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39680 = goog.getObjectByName(fn_str_39677,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39678)].join(''));

(fn_obj_39680.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39680.cljs$core$IFn$_invoke$arity$2(path,new_link_39639) : fn_obj_39680.call(null,path,new_link_39639));


var G__39681 = cljs.core.next(seq__39273_39667__$1);
var G__39682 = null;
var G__39683 = (0);
var G__39684 = (0);
seq__39273_39646 = G__39681;
chunk__39275_39647 = G__39682;
count__39276_39648 = G__39683;
i__39277_39649 = G__39684;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39636);
});})(seq__39203_39628,chunk__39207_39629,count__39208_39630,i__39209_39631,seq__38995,chunk__38997,count__38998,i__38999,new_link_39639,path_match_39638,node_39636,path,seq__38995__$1,temp__5804__auto__,map__38994,map__38994__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39638], 0));

goog.dom.insertSiblingAfter(new_link_39639,node_39636);


var G__39688 = seq__39203_39628;
var G__39689 = chunk__39207_39629;
var G__39690 = count__39208_39630;
var G__39691 = (i__39209_39631 + (1));
seq__39203_39628 = G__39688;
chunk__39207_39629 = G__39689;
count__39208_39630 = G__39690;
i__39209_39631 = G__39691;
continue;
} else {
var G__39692 = seq__39203_39628;
var G__39693 = chunk__39207_39629;
var G__39694 = count__39208_39630;
var G__39695 = (i__39209_39631 + (1));
seq__39203_39628 = G__39692;
chunk__39207_39629 = G__39693;
count__39208_39630 = G__39694;
i__39209_39631 = G__39695;
continue;
}
} else {
var G__39696 = seq__39203_39628;
var G__39697 = chunk__39207_39629;
var G__39698 = count__39208_39630;
var G__39699 = (i__39209_39631 + (1));
seq__39203_39628 = G__39696;
chunk__39207_39629 = G__39697;
count__39208_39630 = G__39698;
i__39209_39631 = G__39699;
continue;
}
} else {
var temp__5804__auto___39700__$1 = cljs.core.seq(seq__39203_39628);
if(temp__5804__auto___39700__$1){
var seq__39203_39701__$1 = temp__5804__auto___39700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39203_39701__$1)){
var c__5568__auto___39702 = cljs.core.chunk_first(seq__39203_39701__$1);
var G__39703 = cljs.core.chunk_rest(seq__39203_39701__$1);
var G__39704 = c__5568__auto___39702;
var G__39705 = cljs.core.count(c__5568__auto___39702);
var G__39706 = (0);
seq__39203_39628 = G__39703;
chunk__39207_39629 = G__39704;
count__39208_39630 = G__39705;
i__39209_39631 = G__39706;
continue;
} else {
var node_39707 = cljs.core.first(seq__39203_39701__$1);
if(cljs.core.not(node_39707.shadow$old)){
var path_match_39708 = shadow.cljs.devtools.client.browser.match_paths(node_39707.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39708)){
var new_link_39712 = (function (){var G__39299 = node_39707.cloneNode(true);
G__39299.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39708),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39299;
})();
(node_39707.shadow$old = true);

(new_link_39712.onload = ((function (seq__39203_39628,chunk__39207_39629,count__39208_39630,i__39209_39631,seq__38995,chunk__38997,count__38998,i__38999,new_link_39712,path_match_39708,node_39707,seq__39203_39701__$1,temp__5804__auto___39700__$1,path,seq__38995__$1,temp__5804__auto__,map__38994,map__38994__$1,msg,updates,reload_info){
return (function (e){
var seq__39303_39713 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39305_39714 = null;
var count__39306_39715 = (0);
var i__39307_39716 = (0);
while(true){
if((i__39307_39716 < count__39306_39715)){
var map__39323_39717 = chunk__39305_39714.cljs$core$IIndexed$_nth$arity$2(null,i__39307_39716);
var map__39323_39718__$1 = cljs.core.__destructure_map(map__39323_39717);
var task_39719 = map__39323_39718__$1;
var fn_str_39720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39323_39718__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39323_39718__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39722 = goog.getObjectByName(fn_str_39720,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39721)].join(''));

(fn_obj_39722.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39722.cljs$core$IFn$_invoke$arity$2(path,new_link_39712) : fn_obj_39722.call(null,path,new_link_39712));


var G__39723 = seq__39303_39713;
var G__39724 = chunk__39305_39714;
var G__39725 = count__39306_39715;
var G__39726 = (i__39307_39716 + (1));
seq__39303_39713 = G__39723;
chunk__39305_39714 = G__39724;
count__39306_39715 = G__39725;
i__39307_39716 = G__39726;
continue;
} else {
var temp__5804__auto___39727__$2 = cljs.core.seq(seq__39303_39713);
if(temp__5804__auto___39727__$2){
var seq__39303_39728__$1 = temp__5804__auto___39727__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39303_39728__$1)){
var c__5568__auto___39729 = cljs.core.chunk_first(seq__39303_39728__$1);
var G__39730 = cljs.core.chunk_rest(seq__39303_39728__$1);
var G__39731 = c__5568__auto___39729;
var G__39732 = cljs.core.count(c__5568__auto___39729);
var G__39733 = (0);
seq__39303_39713 = G__39730;
chunk__39305_39714 = G__39731;
count__39306_39715 = G__39732;
i__39307_39716 = G__39733;
continue;
} else {
var map__39325_39734 = cljs.core.first(seq__39303_39728__$1);
var map__39325_39735__$1 = cljs.core.__destructure_map(map__39325_39734);
var task_39736 = map__39325_39735__$1;
var fn_str_39737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39325_39735__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39325_39735__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39739 = goog.getObjectByName(fn_str_39737,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39738)].join(''));

(fn_obj_39739.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39739.cljs$core$IFn$_invoke$arity$2(path,new_link_39712) : fn_obj_39739.call(null,path,new_link_39712));


var G__39740 = cljs.core.next(seq__39303_39728__$1);
var G__39741 = null;
var G__39742 = (0);
var G__39743 = (0);
seq__39303_39713 = G__39740;
chunk__39305_39714 = G__39741;
count__39306_39715 = G__39742;
i__39307_39716 = G__39743;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39707);
});})(seq__39203_39628,chunk__39207_39629,count__39208_39630,i__39209_39631,seq__38995,chunk__38997,count__38998,i__38999,new_link_39712,path_match_39708,node_39707,seq__39203_39701__$1,temp__5804__auto___39700__$1,path,seq__38995__$1,temp__5804__auto__,map__38994,map__38994__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39708], 0));

goog.dom.insertSiblingAfter(new_link_39712,node_39707);


var G__39745 = cljs.core.next(seq__39203_39701__$1);
var G__39746 = null;
var G__39747 = (0);
var G__39748 = (0);
seq__39203_39628 = G__39745;
chunk__39207_39629 = G__39746;
count__39208_39630 = G__39747;
i__39209_39631 = G__39748;
continue;
} else {
var G__39749 = cljs.core.next(seq__39203_39701__$1);
var G__39750 = null;
var G__39751 = (0);
var G__39752 = (0);
seq__39203_39628 = G__39749;
chunk__39207_39629 = G__39750;
count__39208_39630 = G__39751;
i__39209_39631 = G__39752;
continue;
}
} else {
var G__39753 = cljs.core.next(seq__39203_39701__$1);
var G__39754 = null;
var G__39755 = (0);
var G__39756 = (0);
seq__39203_39628 = G__39753;
chunk__39207_39629 = G__39754;
count__39208_39630 = G__39755;
i__39209_39631 = G__39756;
continue;
}
}
} else {
}
}
break;
}


var G__39757 = cljs.core.next(seq__38995__$1);
var G__39758 = null;
var G__39760 = (0);
var G__39761 = (0);
seq__38995 = G__39757;
chunk__38997 = G__39758;
count__38998 = G__39760;
i__38999 = G__39761;
continue;
} else {
var G__39763 = cljs.core.next(seq__38995__$1);
var G__39764 = null;
var G__39765 = (0);
var G__39766 = (0);
seq__38995 = G__39763;
chunk__38997 = G__39764;
count__38998 = G__39765;
i__38999 = G__39766;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__39346){
var map__39352 = p__39346;
var map__39352__$1 = cljs.core.__destructure_map(map__39352);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39354,done,error){
var map__39355 = p__39354;
var map__39355__$1 = cljs.core.__destructure_map(map__39355);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39355__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39356,done,error){
var map__39358 = p__39356;
var map__39358__$1 = cljs.core.__destructure_map(map__39358);
var msg = map__39358__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39361){
var map__39362 = p__39361;
var map__39362__$1 = cljs.core.__destructure_map(map__39362);
var src = map__39362__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39362__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39363 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39363) : done.call(null,G__39363));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39364){
var map__39367 = p__39364;
var map__39367__$1 = cljs.core.__destructure_map(map__39367);
var msg__$1 = map__39367__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39367__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39369){var ex = e39369;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39374){
var map__39376 = p__39374;
var map__39376__$1 = cljs.core.__destructure_map(map__39376);
var env = map__39376__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39376__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39383){
var map__39388 = p__39383;
var map__39388__$1 = cljs.core.__destructure_map(map__39388);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39388__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39388__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39398){
var map__39399 = p__39398;
var map__39399__$1 = cljs.core.__destructure_map(map__39399);
var svc = map__39399__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
