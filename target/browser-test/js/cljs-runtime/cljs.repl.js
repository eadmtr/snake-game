goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36321){
var map__36323 = p__36321;
var map__36323__$1 = cljs.core.__destructure_map(map__36323);
var m = map__36323__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36360_36919 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36361_36920 = null;
var count__36362_36921 = (0);
var i__36363_36922 = (0);
while(true){
if((i__36363_36922 < count__36362_36921)){
var f_36926 = chunk__36361_36920.cljs$core$IIndexed$_nth$arity$2(null,i__36363_36922);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36926], 0));


var G__36927 = seq__36360_36919;
var G__36928 = chunk__36361_36920;
var G__36929 = count__36362_36921;
var G__36930 = (i__36363_36922 + (1));
seq__36360_36919 = G__36927;
chunk__36361_36920 = G__36928;
count__36362_36921 = G__36929;
i__36363_36922 = G__36930;
continue;
} else {
var temp__5804__auto___36932 = cljs.core.seq(seq__36360_36919);
if(temp__5804__auto___36932){
var seq__36360_36934__$1 = temp__5804__auto___36932;
if(cljs.core.chunked_seq_QMARK_(seq__36360_36934__$1)){
var c__5568__auto___36936 = cljs.core.chunk_first(seq__36360_36934__$1);
var G__36937 = cljs.core.chunk_rest(seq__36360_36934__$1);
var G__36938 = c__5568__auto___36936;
var G__36939 = cljs.core.count(c__5568__auto___36936);
var G__36940 = (0);
seq__36360_36919 = G__36937;
chunk__36361_36920 = G__36938;
count__36362_36921 = G__36939;
i__36363_36922 = G__36940;
continue;
} else {
var f_36942 = cljs.core.first(seq__36360_36934__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36942], 0));


var G__36943 = cljs.core.next(seq__36360_36934__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36360_36919 = G__36943;
chunk__36361_36920 = G__36944;
count__36362_36921 = G__36945;
i__36363_36922 = G__36946;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36947 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36947], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36947)))?cljs.core.second(arglists_36947):arglists_36947)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36426_36961 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36427_36962 = null;
var count__36428_36963 = (0);
var i__36429_36964 = (0);
while(true){
if((i__36429_36964 < count__36428_36963)){
var vec__36474_36966 = chunk__36427_36962.cljs$core$IIndexed$_nth$arity$2(null,i__36429_36964);
var name_36967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36474_36966,(0),null);
var map__36477_36968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36474_36966,(1),null);
var map__36477_36969__$1 = cljs.core.__destructure_map(map__36477_36968);
var doc_36970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36477_36969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36477_36969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36967], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36971], 0));

if(cljs.core.truth_(doc_36970)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36970], 0));
} else {
}


var G__36981 = seq__36426_36961;
var G__36982 = chunk__36427_36962;
var G__36983 = count__36428_36963;
var G__36984 = (i__36429_36964 + (1));
seq__36426_36961 = G__36981;
chunk__36427_36962 = G__36982;
count__36428_36963 = G__36983;
i__36429_36964 = G__36984;
continue;
} else {
var temp__5804__auto___36989 = cljs.core.seq(seq__36426_36961);
if(temp__5804__auto___36989){
var seq__36426_36990__$1 = temp__5804__auto___36989;
if(cljs.core.chunked_seq_QMARK_(seq__36426_36990__$1)){
var c__5568__auto___36993 = cljs.core.chunk_first(seq__36426_36990__$1);
var G__36994 = cljs.core.chunk_rest(seq__36426_36990__$1);
var G__36995 = c__5568__auto___36993;
var G__36996 = cljs.core.count(c__5568__auto___36993);
var G__36997 = (0);
seq__36426_36961 = G__36994;
chunk__36427_36962 = G__36995;
count__36428_36963 = G__36996;
i__36429_36964 = G__36997;
continue;
} else {
var vec__36497_36998 = cljs.core.first(seq__36426_36990__$1);
var name_36999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36497_36998,(0),null);
var map__36501_37002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36497_36998,(1),null);
var map__36501_37003__$1 = cljs.core.__destructure_map(map__36501_37002);
var doc_37004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36501_37003__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36501_37003__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36999], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37005], 0));

if(cljs.core.truth_(doc_37004)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37004], 0));
} else {
}


var G__37017 = cljs.core.next(seq__36426_36990__$1);
var G__37018 = null;
var G__37019 = (0);
var G__37020 = (0);
seq__36426_36961 = G__37017;
chunk__36427_36962 = G__37018;
count__36428_36963 = G__37019;
i__36429_36964 = G__37020;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36527 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36528 = null;
var count__36529 = (0);
var i__36530 = (0);
while(true){
if((i__36530 < count__36529)){
var role = chunk__36528.cljs$core$IIndexed$_nth$arity$2(null,i__36530);
var temp__5804__auto___37027__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37027__$1)){
var spec_37029 = temp__5804__auto___37027__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37029)], 0));
} else {
}


var G__37031 = seq__36527;
var G__37032 = chunk__36528;
var G__37033 = count__36529;
var G__37034 = (i__36530 + (1));
seq__36527 = G__37031;
chunk__36528 = G__37032;
count__36529 = G__37033;
i__36530 = G__37034;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36527);
if(temp__5804__auto____$1){
var seq__36527__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36527__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36527__$1);
var G__37045 = cljs.core.chunk_rest(seq__36527__$1);
var G__37046 = c__5568__auto__;
var G__37047 = cljs.core.count(c__5568__auto__);
var G__37048 = (0);
seq__36527 = G__37045;
chunk__36528 = G__37046;
count__36529 = G__37047;
i__36530 = G__37048;
continue;
} else {
var role = cljs.core.first(seq__36527__$1);
var temp__5804__auto___37050__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37050__$2)){
var spec_37053 = temp__5804__auto___37050__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37053)], 0));
} else {
}


var G__37056 = cljs.core.next(seq__36527__$1);
var G__37058 = null;
var G__37059 = (0);
var G__37061 = (0);
seq__36527 = G__37056;
chunk__36528 = G__37058;
count__36529 = G__37059;
i__36530 = G__37061;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37075 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37076 = cljs.core.ex_cause(t);
via = G__37075;
t = G__37076;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36675 = datafied_throwable;
var map__36675__$1 = cljs.core.__destructure_map(map__36675);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36675__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36675__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36675__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36676 = cljs.core.last(via);
var map__36676__$1 = cljs.core.__destructure_map(map__36676);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36676__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36676__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36676__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36677 = data;
var map__36677__$1 = cljs.core.__destructure_map(map__36677);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36677__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36677__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36677__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36678 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36678__$1 = cljs.core.__destructure_map(map__36678);
var top_data = map__36678__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36678__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36689 = phase;
var G__36689__$1 = (((G__36689 instanceof cljs.core.Keyword))?G__36689.fqn:null);
switch (G__36689__$1) {
case "read-source":
var map__36696 = data;
var map__36696__$1 = cljs.core.__destructure_map(map__36696);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36696__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36696__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36699 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36699__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36699,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36699);
var G__36699__$2 = (cljs.core.truth_((function (){var fexpr__36700 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36700.cljs$core$IFn$_invoke$arity$1 ? fexpr__36700.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36700.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36699__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36699__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36699__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36701 = top_data;
var G__36701__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36701,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36701);
var G__36701__$2 = (cljs.core.truth_((function (){var fexpr__36702 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36702.cljs$core$IFn$_invoke$arity$1 ? fexpr__36702.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36702.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36701__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36701__$1);
var G__36701__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36701__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36701__$2);
var G__36701__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36701__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36701__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36701__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36701__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36711 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(3),null);
var G__36720 = top_data;
var G__36720__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36720,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36720);
var G__36720__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36720__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36720__$1);
var G__36720__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36720__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36720__$2);
var G__36720__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36720__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36720__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36720__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36720__$4;
}

break;
case "execution":
var vec__36728 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36671_SHARP_){
var or__5045__auto__ = (p1__36671_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36731 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36731.cljs$core$IFn$_invoke$arity$1 ? fexpr__36731.cljs$core$IFn$_invoke$arity$1(p1__36671_SHARP_) : fexpr__36731.call(null,p1__36671_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36738 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36738__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36738,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36738);
var G__36738__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36738__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36738__$1);
var G__36738__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36738__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36738__$2);
var G__36738__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36738__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36738__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36738__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36738__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36689__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36778){
var map__36779 = p__36778;
var map__36779__$1 = cljs.core.__destructure_map(map__36779);
var triage_data = map__36779__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36792 = phase;
var G__36792__$1 = (((G__36792 instanceof cljs.core.Keyword))?G__36792.fqn:null);
switch (G__36792__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36795 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36796 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36797 = loc;
var G__36798 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36799_37184 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36800_37185 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36801_37186 = true;
var _STAR_print_fn_STAR__temp_val__36802_37187 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36801_37186);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36802_37187);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36759_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36759_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36800_37185);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36799_37184);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36795,G__36796,G__36797,G__36798) : format.call(null,G__36795,G__36796,G__36797,G__36798));

break;
case "macroexpansion":
var G__36814 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36815 = cause_type;
var G__36816 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36817 = loc;
var G__36818 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36814,G__36815,G__36816,G__36817,G__36818) : format.call(null,G__36814,G__36815,G__36816,G__36817,G__36818));

break;
case "compile-syntax-check":
var G__36827 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36828 = cause_type;
var G__36829 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36830 = loc;
var G__36831 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36827,G__36828,G__36829,G__36830,G__36831) : format.call(null,G__36827,G__36828,G__36829,G__36830,G__36831));

break;
case "compilation":
var G__36836 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36837 = cause_type;
var G__36838 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36839 = loc;
var G__36840 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36836,G__36837,G__36838,G__36839,G__36840) : format.call(null,G__36836,G__36837,G__36838,G__36839,G__36840));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36846 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36847 = symbol;
var G__36848 = loc;
var G__36849 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36853_37239 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36854_37240 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36855_37241 = true;
var _STAR_print_fn_STAR__temp_val__36856_37242 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36855_37241);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36856_37242);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36764_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36764_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36854_37240);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36853_37239);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36846,G__36847,G__36848,G__36849) : format.call(null,G__36846,G__36847,G__36848,G__36849));
} else {
var G__36871 = "Execution error%s at %s(%s).\n%s\n";
var G__36872 = cause_type;
var G__36873 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36874 = loc;
var G__36875 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36871,G__36872,G__36873,G__36874,G__36875) : format.call(null,G__36871,G__36872,G__36873,G__36874,G__36875));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36792__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
