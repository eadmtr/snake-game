goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18249){
var map__18250 = p__18249;
var map__18250__$1 = cljs.core.__destructure_map(map__18250);
var m = map__18250__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18250__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18250__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18262_18617 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18263_18618 = null;
var count__18264_18619 = (0);
var i__18265_18620 = (0);
while(true){
if((i__18265_18620 < count__18264_18619)){
var f_18621 = chunk__18263_18618.cljs$core$IIndexed$_nth$arity$2(null,i__18265_18620);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18621], 0));


var G__18622 = seq__18262_18617;
var G__18623 = chunk__18263_18618;
var G__18624 = count__18264_18619;
var G__18625 = (i__18265_18620 + (1));
seq__18262_18617 = G__18622;
chunk__18263_18618 = G__18623;
count__18264_18619 = G__18624;
i__18265_18620 = G__18625;
continue;
} else {
var temp__5804__auto___18627 = cljs.core.seq(seq__18262_18617);
if(temp__5804__auto___18627){
var seq__18262_18632__$1 = temp__5804__auto___18627;
if(cljs.core.chunked_seq_QMARK_(seq__18262_18632__$1)){
var c__5568__auto___18634 = cljs.core.chunk_first(seq__18262_18632__$1);
var G__18635 = cljs.core.chunk_rest(seq__18262_18632__$1);
var G__18636 = c__5568__auto___18634;
var G__18637 = cljs.core.count(c__5568__auto___18634);
var G__18638 = (0);
seq__18262_18617 = G__18635;
chunk__18263_18618 = G__18636;
count__18264_18619 = G__18637;
i__18265_18620 = G__18638;
continue;
} else {
var f_18639 = cljs.core.first(seq__18262_18632__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18639], 0));


var G__18640 = cljs.core.next(seq__18262_18632__$1);
var G__18641 = null;
var G__18642 = (0);
var G__18643 = (0);
seq__18262_18617 = G__18640;
chunk__18263_18618 = G__18641;
count__18264_18619 = G__18642;
i__18265_18620 = G__18643;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18644 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18644], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18644)))?cljs.core.second(arglists_18644):arglists_18644)], 0));
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
var seq__18290_18646 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18291_18647 = null;
var count__18292_18648 = (0);
var i__18293_18649 = (0);
while(true){
if((i__18293_18649 < count__18292_18648)){
var vec__18316_18651 = chunk__18291_18647.cljs$core$IIndexed$_nth$arity$2(null,i__18293_18649);
var name_18652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316_18651,(0),null);
var map__18319_18653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316_18651,(1),null);
var map__18319_18654__$1 = cljs.core.__destructure_map(map__18319_18653);
var doc_18655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18319_18654__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18319_18654__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18652], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18656], 0));

if(cljs.core.truth_(doc_18655)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18655], 0));
} else {
}


var G__18658 = seq__18290_18646;
var G__18659 = chunk__18291_18647;
var G__18660 = count__18292_18648;
var G__18661 = (i__18293_18649 + (1));
seq__18290_18646 = G__18658;
chunk__18291_18647 = G__18659;
count__18292_18648 = G__18660;
i__18293_18649 = G__18661;
continue;
} else {
var temp__5804__auto___18662 = cljs.core.seq(seq__18290_18646);
if(temp__5804__auto___18662){
var seq__18290_18663__$1 = temp__5804__auto___18662;
if(cljs.core.chunked_seq_QMARK_(seq__18290_18663__$1)){
var c__5568__auto___18664 = cljs.core.chunk_first(seq__18290_18663__$1);
var G__18665 = cljs.core.chunk_rest(seq__18290_18663__$1);
var G__18666 = c__5568__auto___18664;
var G__18667 = cljs.core.count(c__5568__auto___18664);
var G__18668 = (0);
seq__18290_18646 = G__18665;
chunk__18291_18647 = G__18666;
count__18292_18648 = G__18667;
i__18293_18649 = G__18668;
continue;
} else {
var vec__18346_18669 = cljs.core.first(seq__18290_18663__$1);
var name_18670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18346_18669,(0),null);
var map__18349_18671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18346_18669,(1),null);
var map__18349_18672__$1 = cljs.core.__destructure_map(map__18349_18671);
var doc_18673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18349_18672__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18349_18672__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18670], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18674], 0));

if(cljs.core.truth_(doc_18673)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18673], 0));
} else {
}


var G__18676 = cljs.core.next(seq__18290_18663__$1);
var G__18677 = null;
var G__18678 = (0);
var G__18679 = (0);
seq__18290_18646 = G__18676;
chunk__18291_18647 = G__18677;
count__18292_18648 = G__18678;
i__18293_18649 = G__18679;
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

var seq__18390 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18391 = null;
var count__18392 = (0);
var i__18393 = (0);
while(true){
if((i__18393 < count__18392)){
var role = chunk__18391.cljs$core$IIndexed$_nth$arity$2(null,i__18393);
var temp__5804__auto___18685__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18685__$1)){
var spec_18686 = temp__5804__auto___18685__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18686)], 0));
} else {
}


var G__18687 = seq__18390;
var G__18688 = chunk__18391;
var G__18689 = count__18392;
var G__18690 = (i__18393 + (1));
seq__18390 = G__18687;
chunk__18391 = G__18688;
count__18392 = G__18689;
i__18393 = G__18690;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18390);
if(temp__5804__auto____$1){
var seq__18390__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18390__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18390__$1);
var G__18694 = cljs.core.chunk_rest(seq__18390__$1);
var G__18695 = c__5568__auto__;
var G__18696 = cljs.core.count(c__5568__auto__);
var G__18697 = (0);
seq__18390 = G__18694;
chunk__18391 = G__18695;
count__18392 = G__18696;
i__18393 = G__18697;
continue;
} else {
var role = cljs.core.first(seq__18390__$1);
var temp__5804__auto___18698__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18698__$2)){
var spec_18699 = temp__5804__auto___18698__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18699)], 0));
} else {
}


var G__18701 = cljs.core.next(seq__18390__$1);
var G__18702 = null;
var G__18703 = (0);
var G__18704 = (0);
seq__18390 = G__18701;
chunk__18391 = G__18702;
count__18392 = G__18703;
i__18393 = G__18704;
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
var G__18718 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18719 = cljs.core.ex_cause(t);
via = G__18718;
t = G__18719;
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
var map__18486 = datafied_throwable;
var map__18486__$1 = cljs.core.__destructure_map(map__18486);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18486__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18487 = cljs.core.last(via);
var map__18487__$1 = cljs.core.__destructure_map(map__18487);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18488 = data;
var map__18488__$1 = cljs.core.__destructure_map(map__18488);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18488__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18488__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18488__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18489 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18489__$1 = cljs.core.__destructure_map(map__18489);
var top_data = map__18489__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18489__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18502 = phase;
var G__18502__$1 = (((G__18502 instanceof cljs.core.Keyword))?G__18502.fqn:null);
switch (G__18502__$1) {
case "read-source":
var map__18505 = data;
var map__18505__$1 = cljs.core.__destructure_map(map__18505);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18505__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18505__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18511 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18511__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18511,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18511);
var G__18511__$2 = (cljs.core.truth_((function (){var fexpr__18513 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18513.cljs$core$IFn$_invoke$arity$1 ? fexpr__18513.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18513.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18511__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18511__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18511__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18514 = top_data;
var G__18514__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18514,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18514);
var G__18514__$2 = (cljs.core.truth_((function (){var fexpr__18519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18519.cljs$core$IFn$_invoke$arity$1 ? fexpr__18519.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18519.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18514__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18514__$1);
var G__18514__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18514__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18514__$2);
var G__18514__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18514__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18514__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18514__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18514__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18524 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(3),null);
var G__18528 = top_data;
var G__18528__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18528,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18528);
var G__18528__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18528__$1);
var G__18528__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18528__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18528__$2);
var G__18528__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18528__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18528__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18528__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18528__$4;
}

break;
case "execution":
var vec__18533 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18533,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18533,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18533,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18533,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18479_SHARP_){
var or__5045__auto__ = (p1__18479_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18536 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18536.cljs$core$IFn$_invoke$arity$1 ? fexpr__18536.cljs$core$IFn$_invoke$arity$1(p1__18479_SHARP_) : fexpr__18536.call(null,p1__18479_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18537 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18537__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18537,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18537);
var G__18537__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18537__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18537__$1);
var G__18537__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18537__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18537__$2);
var G__18537__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18537__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18537__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18537__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18537__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18502__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18548){
var map__18550 = p__18548;
var map__18550__$1 = cljs.core.__destructure_map(map__18550);
var triage_data = map__18550__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18556 = phase;
var G__18556__$1 = (((G__18556 instanceof cljs.core.Keyword))?G__18556.fqn:null);
switch (G__18556__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18558 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18559 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18560 = loc;
var G__18561 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18562_18769 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18563_18770 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18564_18771 = true;
var _STAR_print_fn_STAR__temp_val__18565_18772 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18564_18771);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18565_18772);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18543_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18543_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18563_18770);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18562_18769);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18558,G__18559,G__18560,G__18561) : format.call(null,G__18558,G__18559,G__18560,G__18561));

break;
case "macroexpansion":
var G__18572 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18573 = cause_type;
var G__18574 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18575 = loc;
var G__18576 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18572,G__18573,G__18574,G__18575,G__18576) : format.call(null,G__18572,G__18573,G__18574,G__18575,G__18576));

break;
case "compile-syntax-check":
var G__18577 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18578 = cause_type;
var G__18579 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18580 = loc;
var G__18581 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18577,G__18578,G__18579,G__18580,G__18581) : format.call(null,G__18577,G__18578,G__18579,G__18580,G__18581));

break;
case "compilation":
var G__18583 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18584 = cause_type;
var G__18585 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18586 = loc;
var G__18587 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18583,G__18584,G__18585,G__18586,G__18587) : format.call(null,G__18583,G__18584,G__18585,G__18586,G__18587));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18588 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18589 = symbol;
var G__18590 = loc;
var G__18591 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18592_18787 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18593_18788 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18594_18789 = true;
var _STAR_print_fn_STAR__temp_val__18595_18790 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18594_18789);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18595_18790);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18544_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18544_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18593_18788);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18592_18787);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18588,G__18589,G__18590,G__18591) : format.call(null,G__18588,G__18589,G__18590,G__18591));
} else {
var G__18602 = "Execution error%s at %s(%s).\n%s\n";
var G__18603 = cause_type;
var G__18604 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18605 = loc;
var G__18606 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18602,G__18603,G__18604,G__18605,G__18606) : format.call(null,G__18602,G__18603,G__18604,G__18605,G__18606));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18556__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
