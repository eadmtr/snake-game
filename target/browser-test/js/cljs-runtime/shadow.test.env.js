goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__5523__auto__ = (function shadow$test$env$get_test_vars_$_iter__37864(s__37865){
return (new cljs.core.LazySeq(null,(function (){
var s__37865__$1 = s__37865;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37865__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__37871 = cljs.core.first(xs__6360__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(1),null);
var iterys__5519__auto__ = ((function (s__37865__$1,vec__37871,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function shadow$test$env$get_test_vars_$_iter__37864_$_iter__37866(s__37867){
return (new cljs.core.LazySeq(null,((function (s__37865__$1,vec__37871,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__37867__$1 = s__37867;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37867__$1);
if(temp__5804__auto____$1){
var s__37867__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37867__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37867__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37869 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37868 = (0);
while(true){
if((i__37868 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__37868);
cljs.core.chunk_append(b__37869,var$);

var G__37918 = (i__37868 + (1));
i__37868 = G__37918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37869),shadow$test$env$get_test_vars_$_iter__37864_$_iter__37866(cljs.core.chunk_rest(s__37867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37869),null);
}
} else {
var var$ = cljs.core.first(s__37867__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__37864_$_iter__37866(cljs.core.rest(s__37867__$2)));
}
} else {
return null;
}
break;
}
});})(s__37865__$1,vec__37871,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__37865__$1,vec__37871,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$test$env$get_test_vars_$_iter__37864(cljs.core.rest(s__37865__$1)));
} else {
var G__37919 = cljs.core.rest(s__37865__$1);
s__37865__$1 = G__37919;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5523__auto__ = (function shadow$test$env$get_test_count_$_iter__37899(s__37900){
return (new cljs.core.LazySeq(null,(function (){
var s__37900__$1 = s__37900;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37900__$1);
if(temp__5804__auto__){
var s__37900__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37900__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37900__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37902 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37901 = (0);
while(true){
if((i__37901 < size__5522__auto__)){
var map__37911 = cljs.core._nth(c__5521__auto__,i__37901);
var map__37911__$1 = cljs.core.__destructure_map(map__37911);
var test_ns = map__37911__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__37902,cljs.core.count(vars));

var G__37928 = (i__37901 + (1));
i__37901 = G__37928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37902),shadow$test$env$get_test_count_$_iter__37899(cljs.core.chunk_rest(s__37900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37902),null);
}
} else {
var map__37913 = cljs.core.first(s__37900__$2);
var map__37913__$1 = cljs.core.__destructure_map(map__37913);
var test_ns = map__37913__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__37899(cljs.core.rest(s__37900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
