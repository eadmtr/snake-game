goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__44221){
var vec__44222 = p__44221;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44222,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44222,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__44227 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__44227__$1 = (((G__44227 instanceof cljs.core.Keyword))?G__44227.fqn:null);
switch (G__44227__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__44235 = (function (){
var seq__44236 = cljs.core.seq(vars__$1);
var chunk__44237 = null;
var count__44238 = (0);
var i__44239 = (0);
while(true){
if((i__44239 < count__44238)){
var v = chunk__44237.cljs$core$IIndexed$_nth$arity$2(null,i__44239);
var temp__5804__auto___44354 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___44354)){
var t_44355 = temp__5804__auto___44354;
var G__44256_44356 = ((function (seq__44236,chunk__44237,count__44238,i__44239,t_44355,temp__5804__auto___44354,v,each_fixture_fn,G__44227,G__44227__$1,env,once_fixtures,each_fixtures,vec__44222,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_44355)));
});})(seq__44236,chunk__44237,count__44238,i__44239,t_44355,temp__5804__auto___44354,v,each_fixture_fn,G__44227,G__44227__$1,env,once_fixtures,each_fixtures,vec__44222,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__44256_44356) : each_fixture_fn.call(null,G__44256_44356));
} else {
}


var G__44358 = seq__44236;
var G__44359 = chunk__44237;
var G__44360 = count__44238;
var G__44361 = (i__44239 + (1));
seq__44236 = G__44358;
chunk__44237 = G__44359;
count__44238 = G__44360;
i__44239 = G__44361;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44236);
if(temp__5804__auto__){
var seq__44236__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44236__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44236__$1);
var G__44363 = cljs.core.chunk_rest(seq__44236__$1);
var G__44364 = c__5568__auto__;
var G__44365 = cljs.core.count(c__5568__auto__);
var G__44366 = (0);
seq__44236 = G__44363;
chunk__44237 = G__44364;
count__44238 = G__44365;
i__44239 = G__44366;
continue;
} else {
var v = cljs.core.first(seq__44236__$1);
var temp__5804__auto___44367__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___44367__$1)){
var t_44368 = temp__5804__auto___44367__$1;
var G__44261_44369 = ((function (seq__44236,chunk__44237,count__44238,i__44239,t_44368,temp__5804__auto___44367__$1,v,seq__44236__$1,temp__5804__auto__,each_fixture_fn,G__44227,G__44227__$1,env,once_fixtures,each_fixtures,vec__44222,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_44368)));
});})(seq__44236,chunk__44237,count__44238,i__44239,t_44368,temp__5804__auto___44367__$1,v,seq__44236__$1,temp__5804__auto__,each_fixture_fn,G__44227,G__44227__$1,env,once_fixtures,each_fixtures,vec__44222,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__44261_44369) : each_fixture_fn.call(null,G__44261_44369));
} else {
}


var G__44370 = cljs.core.next(seq__44236__$1);
var G__44371 = null;
var G__44372 = (0);
var G__44373 = (0);
seq__44236 = G__44370;
chunk__44237 = G__44371;
count__44238 = G__44372;
i__44239 = G__44373;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__44234 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__44234.cljs$core$IFn$_invoke$arity$1 ? fexpr__44234.cljs$core$IFn$_invoke$arity$1(G__44235) : fexpr__44234.call(null,G__44235));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44227__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__44211_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__44211_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__44272 = shadow.test.env.get_test_ns_info(ns);
var map__44272__$1 = cljs.core.__destructure_map(map__44272);
var test_ns = map__44272__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44272__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__44284,vars){
var map__44285 = p__44284;
var map__44285__$1 = cljs.core.__destructure_map(map__44285);
var env = map__44285__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44285__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__44286_44376 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__44288_44377 = null;
var count__44289_44378 = (0);
var i__44290_44379 = (0);
while(true){
if((i__44290_44379 < count__44289_44378)){
var vec__44305_44380 = chunk__44288_44377.cljs$core$IIndexed$_nth$arity$2(null,i__44290_44379);
var test_ns_44381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44305_44380,(0),null);
var ns_info_44382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44305_44380,(1),null);
var map__44308_44383 = ns_info_44382;
var map__44308_44384__$1 = cljs.core.__destructure_map(map__44308_44383);
var fixtures_44385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44308_44384__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___44386 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_44385);
if(cljs.core.truth_(temp__5804__auto___44386)){
var fix_44387 = temp__5804__auto___44386;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_44381,fix_44387], 0));
} else {
}

var temp__5804__auto___44390 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_44385);
if(cljs.core.truth_(temp__5804__auto___44390)){
var fix_44392 = temp__5804__auto___44390;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_44381,fix_44392], 0));
} else {
}


var G__44394 = seq__44286_44376;
var G__44395 = chunk__44288_44377;
var G__44396 = count__44289_44378;
var G__44397 = (i__44290_44379 + (1));
seq__44286_44376 = G__44394;
chunk__44288_44377 = G__44395;
count__44289_44378 = G__44396;
i__44290_44379 = G__44397;
continue;
} else {
var temp__5804__auto___44398 = cljs.core.seq(seq__44286_44376);
if(temp__5804__auto___44398){
var seq__44286_44399__$1 = temp__5804__auto___44398;
if(cljs.core.chunked_seq_QMARK_(seq__44286_44399__$1)){
var c__5568__auto___44400 = cljs.core.chunk_first(seq__44286_44399__$1);
var G__44401 = cljs.core.chunk_rest(seq__44286_44399__$1);
var G__44402 = c__5568__auto___44400;
var G__44403 = cljs.core.count(c__5568__auto___44400);
var G__44404 = (0);
seq__44286_44376 = G__44401;
chunk__44288_44377 = G__44402;
count__44289_44378 = G__44403;
i__44290_44379 = G__44404;
continue;
} else {
var vec__44312_44405 = cljs.core.first(seq__44286_44399__$1);
var test_ns_44406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44312_44405,(0),null);
var ns_info_44407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44312_44405,(1),null);
var map__44315_44408 = ns_info_44407;
var map__44315_44409__$1 = cljs.core.__destructure_map(map__44315_44408);
var fixtures_44410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44315_44409__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___44412__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_44410);
if(cljs.core.truth_(temp__5804__auto___44412__$1)){
var fix_44413 = temp__5804__auto___44412__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_44406,fix_44413], 0));
} else {
}

var temp__5804__auto___44422__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_44410);
if(cljs.core.truth_(temp__5804__auto___44422__$1)){
var fix_44424 = temp__5804__auto___44422__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_44406,fix_44424], 0));
} else {
}


var G__44425 = cljs.core.next(seq__44286_44399__$1);
var G__44426 = null;
var G__44427 = (0);
var G__44428 = (0);
seq__44286_44376 = G__44425;
chunk__44288_44377 = G__44426;
count__44289_44378 = G__44427;
i__44290_44379 = G__44428;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44279_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__44279_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__44321 = cljs.test.get_current_env();
var map__44321__$1 = cljs.core.__destructure_map(map__44321);
var env = map__44321__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44321__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44321__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__44326 = arguments.length;
switch (G__44326) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__44334 = arguments.length;
switch (G__44334) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__44335 = shadow.test.env.get_test_ns_info(ns);
var map__44335__$1 = cljs.core.__destructure_map(map__44335);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44335__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__44340 = arguments.length;
switch (G__44340) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44336_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__44336_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__44347 = arguments.length;
switch (G__44347) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44345_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44345_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
