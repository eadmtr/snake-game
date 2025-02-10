goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__75346){
var map__75349 = p__75346;
var map__75349__$1 = cljs.core.__destructure_map(map__75349);
var m = map__75349__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75349__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__75373_75799 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75374_75800 = null;
var count__75375_75801 = (0);
var i__75376_75802 = (0);
while(true){
if((i__75376_75802 < count__75375_75801)){
var f_75804 = chunk__75374_75800.cljs$core$IIndexed$_nth$arity$2(null,i__75376_75802);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_75804], 0));


var G__75806 = seq__75373_75799;
var G__75807 = chunk__75374_75800;
var G__75808 = count__75375_75801;
var G__75809 = (i__75376_75802 + (1));
seq__75373_75799 = G__75806;
chunk__75374_75800 = G__75807;
count__75375_75801 = G__75808;
i__75376_75802 = G__75809;
continue;
} else {
var temp__5804__auto___75810 = cljs.core.seq(seq__75373_75799);
if(temp__5804__auto___75810){
var seq__75373_75812__$1 = temp__5804__auto___75810;
if(cljs.core.chunked_seq_QMARK_(seq__75373_75812__$1)){
var c__5568__auto___75814 = cljs.core.chunk_first(seq__75373_75812__$1);
var G__75815 = cljs.core.chunk_rest(seq__75373_75812__$1);
var G__75816 = c__5568__auto___75814;
var G__75817 = cljs.core.count(c__5568__auto___75814);
var G__75818 = (0);
seq__75373_75799 = G__75815;
chunk__75374_75800 = G__75816;
count__75375_75801 = G__75817;
i__75376_75802 = G__75818;
continue;
} else {
var f_75819 = cljs.core.first(seq__75373_75812__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_75819], 0));


var G__75820 = cljs.core.next(seq__75373_75812__$1);
var G__75821 = null;
var G__75822 = (0);
var G__75823 = (0);
seq__75373_75799 = G__75820;
chunk__75374_75800 = G__75821;
count__75375_75801 = G__75822;
i__75376_75802 = G__75823;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_75825 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_75825], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_75825)))?cljs.core.second(arglists_75825):arglists_75825)], 0));
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
var seq__75429_75838 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75431_75839 = null;
var count__75432_75841 = (0);
var i__75433_75842 = (0);
while(true){
if((i__75433_75842 < count__75432_75841)){
var vec__75467_75843 = chunk__75431_75839.cljs$core$IIndexed$_nth$arity$2(null,i__75433_75842);
var name_75844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75467_75843,(0),null);
var map__75470_75845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75467_75843,(1),null);
var map__75470_75846__$1 = cljs.core.__destructure_map(map__75470_75845);
var doc_75847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75470_75846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75470_75846__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_75844], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_75848], 0));

if(cljs.core.truth_(doc_75847)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_75847], 0));
} else {
}


var G__75854 = seq__75429_75838;
var G__75855 = chunk__75431_75839;
var G__75856 = count__75432_75841;
var G__75857 = (i__75433_75842 + (1));
seq__75429_75838 = G__75854;
chunk__75431_75839 = G__75855;
count__75432_75841 = G__75856;
i__75433_75842 = G__75857;
continue;
} else {
var temp__5804__auto___75858 = cljs.core.seq(seq__75429_75838);
if(temp__5804__auto___75858){
var seq__75429_75860__$1 = temp__5804__auto___75858;
if(cljs.core.chunked_seq_QMARK_(seq__75429_75860__$1)){
var c__5568__auto___75862 = cljs.core.chunk_first(seq__75429_75860__$1);
var G__75863 = cljs.core.chunk_rest(seq__75429_75860__$1);
var G__75864 = c__5568__auto___75862;
var G__75865 = cljs.core.count(c__5568__auto___75862);
var G__75866 = (0);
seq__75429_75838 = G__75863;
chunk__75431_75839 = G__75864;
count__75432_75841 = G__75865;
i__75433_75842 = G__75866;
continue;
} else {
var vec__75496_75869 = cljs.core.first(seq__75429_75860__$1);
var name_75870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75496_75869,(0),null);
var map__75499_75871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75496_75869,(1),null);
var map__75499_75872__$1 = cljs.core.__destructure_map(map__75499_75871);
var doc_75873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75499_75872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75499_75872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_75870], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_75874], 0));

if(cljs.core.truth_(doc_75873)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_75873], 0));
} else {
}


var G__75884 = cljs.core.next(seq__75429_75860__$1);
var G__75885 = null;
var G__75886 = (0);
var G__75887 = (0);
seq__75429_75838 = G__75884;
chunk__75431_75839 = G__75885;
count__75432_75841 = G__75886;
i__75433_75842 = G__75887;
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

var seq__75509 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__75510 = null;
var count__75511 = (0);
var i__75512 = (0);
while(true){
if((i__75512 < count__75511)){
var role = chunk__75510.cljs$core$IIndexed$_nth$arity$2(null,i__75512);
var temp__5804__auto___75895__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___75895__$1)){
var spec_75897 = temp__5804__auto___75895__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_75897)], 0));
} else {
}


var G__75900 = seq__75509;
var G__75901 = chunk__75510;
var G__75902 = count__75511;
var G__75903 = (i__75512 + (1));
seq__75509 = G__75900;
chunk__75510 = G__75901;
count__75511 = G__75902;
i__75512 = G__75903;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__75509);
if(temp__5804__auto____$1){
var seq__75509__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__75509__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__75509__$1);
var G__75908 = cljs.core.chunk_rest(seq__75509__$1);
var G__75909 = c__5568__auto__;
var G__75910 = cljs.core.count(c__5568__auto__);
var G__75911 = (0);
seq__75509 = G__75908;
chunk__75510 = G__75909;
count__75511 = G__75910;
i__75512 = G__75911;
continue;
} else {
var role = cljs.core.first(seq__75509__$1);
var temp__5804__auto___75915__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___75915__$2)){
var spec_75917 = temp__5804__auto___75915__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_75917)], 0));
} else {
}


var G__75919 = cljs.core.next(seq__75509__$1);
var G__75920 = null;
var G__75921 = (0);
var G__75922 = (0);
seq__75509 = G__75919;
chunk__75510 = G__75920;
count__75511 = G__75921;
i__75512 = G__75922;
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
var G__75937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__75938 = cljs.core.ex_cause(t);
via = G__75937;
t = G__75938;
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
var map__75579 = datafied_throwable;
var map__75579__$1 = cljs.core.__destructure_map(map__75579);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75579__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75579__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75579__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__75580 = cljs.core.last(via);
var map__75580__$1 = cljs.core.__destructure_map(map__75580);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75580__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75580__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75580__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__75581 = data;
var map__75581__$1 = cljs.core.__destructure_map(map__75581);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75581__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75581__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75581__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__75582 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__75582__$1 = cljs.core.__destructure_map(map__75582);
var top_data = map__75582__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__75593 = phase;
var G__75593__$1 = (((G__75593 instanceof cljs.core.Keyword))?G__75593.fqn:null);
switch (G__75593__$1) {
case "read-source":
var map__75594 = data;
var map__75594__$1 = cljs.core.__destructure_map(map__75594);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75594__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75594__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__75598 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__75598__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75598,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__75598);
var G__75598__$2 = (cljs.core.truth_((function (){var fexpr__75600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75600.cljs$core$IFn$_invoke$arity$1 ? fexpr__75600.cljs$core$IFn$_invoke$arity$1(source) : fexpr__75600.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75598__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__75598__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75598__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__75598__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__75608 = top_data;
var G__75608__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75608,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__75608);
var G__75608__$2 = (cljs.core.truth_((function (){var fexpr__75611 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75611.cljs$core$IFn$_invoke$arity$1 ? fexpr__75611.cljs$core$IFn$_invoke$arity$1(source) : fexpr__75611.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__75608__$1);
var G__75608__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75608__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__75608__$2);
var G__75608__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75608__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__75608__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75608__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__75608__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__75621 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75621,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75621,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75621,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75621,(3),null);
var G__75628 = top_data;
var G__75628__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75628,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__75628);
var G__75628__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75628__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__75628__$1);
var G__75628__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75628__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__75628__$2);
var G__75628__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75628__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__75628__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75628__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__75628__$4;
}

break;
case "execution":
var vec__75645 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75645,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75645,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75645,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75645,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__75577_SHARP_){
var or__5045__auto__ = (p1__75577_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__75650 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75650.cljs$core$IFn$_invoke$arity$1 ? fexpr__75650.cljs$core$IFn$_invoke$arity$1(p1__75577_SHARP_) : fexpr__75650.call(null,p1__75577_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__75657 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__75657__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75657,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__75657);
var G__75657__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75657__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__75657__$1);
var G__75657__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75657__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__75657__$2);
var G__75657__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75657__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__75657__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75657__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__75657__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75593__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__75685){
var map__75691 = p__75685;
var map__75691__$1 = cljs.core.__destructure_map(map__75691);
var triage_data = map__75691__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75691__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__75707 = phase;
var G__75707__$1 = (((G__75707 instanceof cljs.core.Keyword))?G__75707.fqn:null);
switch (G__75707__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__75710 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__75711 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75712 = loc;
var G__75713 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__75717_76020 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__75718_76021 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__75719_76022 = true;
var _STAR_print_fn_STAR__temp_val__75720_76023 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75719_76022);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75720_76023);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75678_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__75678_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75718_76021);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75717_76020);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__75710,G__75711,G__75712,G__75713) : format.call(null,G__75710,G__75711,G__75712,G__75713));

break;
case "macroexpansion":
var G__75734 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__75735 = cause_type;
var G__75736 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75737 = loc;
var G__75738 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75734,G__75735,G__75736,G__75737,G__75738) : format.call(null,G__75734,G__75735,G__75736,G__75737,G__75738));

break;
case "compile-syntax-check":
var G__75740 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__75741 = cause_type;
var G__75742 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75743 = loc;
var G__75744 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75740,G__75741,G__75742,G__75743,G__75744) : format.call(null,G__75740,G__75741,G__75742,G__75743,G__75744));

break;
case "compilation":
var G__75746 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__75747 = cause_type;
var G__75748 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75749 = loc;
var G__75750 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75746,G__75747,G__75748,G__75749,G__75750) : format.call(null,G__75746,G__75747,G__75748,G__75749,G__75750));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__75752 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__75753 = symbol;
var G__75754 = loc;
var G__75755 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__75757_76035 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__75758_76036 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__75759_76037 = true;
var _STAR_print_fn_STAR__temp_val__75760_76038 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75759_76037);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75760_76038);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75680_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__75680_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75758_76036);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75757_76035);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__75752,G__75753,G__75754,G__75755) : format.call(null,G__75752,G__75753,G__75754,G__75755));
} else {
var G__75775 = "Execution error%s at %s(%s).\n%s\n";
var G__75777 = cause_type;
var G__75778 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75779 = loc;
var G__75780 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75775,G__75777,G__75778,G__75779,G__75780) : format.call(null,G__75775,G__75777,G__75778,G__75779,G__75780));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75707__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
