goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__65471 = arguments.length;
switch (G__65471) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__65474 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65475 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65475);

try{var G__65476 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__65476);

return G__65476;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65474);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__65477 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65478 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65478);

try{var G__65480 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__65480);

return G__65480;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65477);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__65482 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65483 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65483);

try{var G__65484 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__65484);

return G__65484;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65482);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__65486 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65487 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65487);

try{var G__65489 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__65489);

return G__65489;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65486);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__65492 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65493 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65493);

try{var G__65496 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__65496);

return G__65496;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65492);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__65498 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__65499 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65499);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65498);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65742 = arguments.length;
var i__5770__auto___65743 = (0);
while(true){
if((i__5770__auto___65743 < len__5769__auto___65742)){
args__5775__auto__.push((arguments[i__5770__auto___65743]));

var G__65744 = (i__5770__auto___65743 + (1));
i__5770__auto___65743 = G__65744;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65508 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65509 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65510 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65511 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65512 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65513 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65514 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65515 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65516 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65517 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65518 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65519 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65520 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65521 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65522 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65523 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65516);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65517);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65518);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65519);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65520);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65521);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65522);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65523);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65515);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65514);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65513);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65512);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65511);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65510);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65509);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65508);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq65502){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65502));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__65531 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__65532 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65532);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65531);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65748 = arguments.length;
var i__5770__auto___65749 = (0);
while(true){
if((i__5770__auto___65749 < len__5769__auto___65748)){
args__5775__auto__.push((arguments[i__5770__auto___65749]));

var G__65750 = (i__5770__auto___65749 + (1));
i__5770__auto___65749 = G__65750;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65542 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65543 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65544 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65545 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65546 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65547 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65548 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__65549 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65550 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65551 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65552 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65553 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65554 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65555 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65549);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65550);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65551);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65552);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65553);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65554);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65555);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65548);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65547);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65546);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65545);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65544);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65543);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65542);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq65535){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65535));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65753 = arguments.length;
var i__5770__auto___65754 = (0);
while(true){
if((i__5770__auto___65754 < len__5769__auto___65753)){
args__5775__auto__.push((arguments[i__5770__auto___65754]));

var G__65756 = (i__5770__auto___65754 + (1));
i__5770__auto___65754 = G__65756;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65571 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65572 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65573 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65574 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65575 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65576 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65577 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65578 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65579 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65580 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65581 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65582 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65583 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65584 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65585 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65586 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65579);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65580);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65581);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65582);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65583);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65584);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65585);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65586);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65578);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65577);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65576);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65575);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65574);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65573);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65572);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65571);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq65563){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65563));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65762 = arguments.length;
var i__5770__auto___65763 = (0);
while(true){
if((i__5770__auto___65763 < len__5769__auto___65762)){
args__5775__auto__.push((arguments[i__5770__auto___65763]));

var G__65764 = (i__5770__auto___65763 + (1));
i__5770__auto___65763 = G__65764;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65606 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65607 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65608 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65609 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65610 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65612 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__65613 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65614 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65615 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65616 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65617 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65618 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65619 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65613);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65614);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65615);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65616);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65617);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65618);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65619);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65612);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65611);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65610);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65609);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65608);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65607);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65606);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq65595){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65595));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65767 = arguments.length;
var i__5770__auto___65768 = (0);
while(true){
if((i__5770__auto___65768 < len__5769__auto___65767)){
args__5775__auto__.push((arguments[i__5770__auto___65768]));

var G__65769 = (i__5770__auto___65768 + (1));
i__5770__auto___65768 = G__65769;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65633 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65634 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65635 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65636 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65637 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65638 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65639 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65640 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65641 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65642 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__65643 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65644 = null;
var _STAR_print_newline_STAR__temp_val__65645 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65646 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65640);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65641);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65642);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65643);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65644);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65645);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65646);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65639);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65638);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65637);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65636);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65635);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65634);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65633);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq65631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65631));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65775 = arguments.length;
var i__5770__auto___65776 = (0);
while(true){
if((i__5770__auto___65776 < len__5769__auto___65775)){
args__5775__auto__.push((arguments[i__5770__auto___65776]));

var G__65777 = (i__5770__auto___65776 + (1));
i__5770__auto___65776 = G__65777;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65657 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65658 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65659 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65660 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65661 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65662 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65663 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__65664 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65665 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65666 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65667 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65668 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65669 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65670 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65664);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65665);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65666);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65667);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65668);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65669);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65670);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65663);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65662);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65661);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65660);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65659);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65658);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65657);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq65653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65653));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65781 = arguments.length;
var i__5770__auto___65782 = (0);
while(true){
if((i__5770__auto___65782 < len__5769__auto___65781)){
args__5775__auto__.push((arguments[i__5770__auto___65782]));

var G__65783 = (i__5770__auto___65782 + (1));
i__5770__auto___65782 = G__65783;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65685 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65686 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65687 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65688 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65689 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65690 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65691 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65692 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65693 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65694 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65695 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65696 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65697 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65698 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65699 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65700 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65693);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65694);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65695);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65696);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65697);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65698);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65699);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65700);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65692);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65691);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65690);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65689);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65688);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65687);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65686);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65685);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq65676){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65676));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65791 = arguments.length;
var i__5770__auto___65792 = (0);
while(true){
if((i__5770__auto___65792 < len__5769__auto___65791)){
args__5775__auto__.push((arguments[i__5770__auto___65792]));

var G__65793 = (i__5770__auto___65792 + (1));
i__5770__auto___65792 = G__65793;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__65711__auto__","s__65711__auto__",-1007149613,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__65712__auto__","x__65712__auto__",548233525,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65711__auto__","s__65711__auto__",-1007149613,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65712__auto__","x__65712__auto__",548233525,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65711__auto__","s__65711__auto__",-1007149613,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq65713){
var G__65714 = cljs.core.first(seq65713);
var seq65713__$1 = cljs.core.next(seq65713);
var G__65715 = cljs.core.first(seq65713__$1);
var seq65713__$2 = cljs.core.next(seq65713__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65714,G__65715,seq65713__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
