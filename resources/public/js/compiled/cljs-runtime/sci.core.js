goog.provide('sci.core');
/**
 * Returns a new sci var.
 */
sci.core.new_var = (function sci$core$new_var(var_args){
var G__70878 = arguments.length;
switch (G__70878) {
case 1:
return sci.core.new_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.new_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.new_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__70879 = sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name,null,null);
sci.impl.vars.unbind(G__70879);

return G__70879;
}));

(sci.core.new_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.core.new_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return (new sci.lang.Var(init_val,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"name","name",1843675177),(sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1 ? sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1(name) : sci.impl.utils.unqualify_symbol.call(null,name))),false,false,null));
}));

(sci.core.new_var.cljs$lang$maxFixedArity = 3);

/**
 * Same as new-var but adds :dynamic true to meta.
 */
sci.core.new_dynamic_var = (function sci$core$new_dynamic_var(var_args){
var G__70881 = arguments.length;
switch (G__70881) {
case 1:
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__70882 = sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name,null,null);
sci.impl.vars.unbind(G__70882);

return G__70882;
}));

(sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return (new sci.lang.Var(init_val,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),(sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1 ? sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1(name) : sci.impl.utils.unqualify_symbol.call(null,name))], 0)),false,false,null));
}));

(sci.core.new_dynamic_var.cljs$lang$maxFixedArity = 3);

/**
 * Establish thread local binding of dynamic var
 */
sci.core.set_BANG_ = (function sci$core$set_BANG_(dynamic_var,v){
return sci.impl.types.setVal(dynamic_var,v);
});
/**
 * Same as new-var but adds :macro true to meta as well
 *   as :sci/macro true to meta of the fn itself.
 */
sci.core.new_macro_var = (function sci$core$new_macro_var(var_args){
var G__70884 = arguments.length;
switch (G__70884) {
case 2:
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return (new sci.lang.Var(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(init_val,cljs.core.assoc,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),true),name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta,new cljs.core.Keyword(null,"macro","macro",-867863404),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),(sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1 ? sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1(name) : sci.impl.utils.unqualify_symbol.call(null,name))], 0)),false,false,null));
}));

(sci.core.new_macro_var.cljs$lang$maxFixedArity = 3);

/**
 * Copies Clojure var to SCI var. Runtime analog of compile time `copy-var`.
 */
sci.core.copy_var_STAR_ = (function sci$core$copy_var_STAR_(clojure_var,sci_ns){
var m = cljs.core.meta(clojure_var);
var nm = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
var doc = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
var dynamic = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m);
var macro = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
var new_m = (function (){var G__70891 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci_ns,new cljs.core.Keyword(null,"name","name",1843675177),nm], null);
var G__70891__$1 = (cljs.core.truth_(macro)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70891,new cljs.core.Keyword(null,"macro","macro",-867863404),true):G__70891);
var G__70891__$2 = (cljs.core.truth_(doc)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__70891__$1);
var G__70891__$3 = (cljs.core.truth_(arglists)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70891__$2,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists):G__70891__$2);
if(cljs.core.truth_(dynamic)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70891__$3,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),dynamic);
} else {
return G__70891__$3;
}
})();
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(nm,cljs.core.deref(clojure_var),new_m);
});
/**
 * SCI var that represents SCI's `clojure.core/*in*`
 */
sci.core.in$ = sci.impl.io.in$;
/**
 * SCI var that represents SCI's `clojure.core/*out*`
 */
sci.core.out = sci.impl.io.out;
/**
 * SCI var that represents SCI's `clojure.core/*err*`
 */
sci.core.err = sci.impl.io.err;
/**
 * SCI var that represents SCI's `clojure.core/*ns*`
 */
sci.core.ns = sci.impl.utils.current_ns;
/**
 * SCI var that represents SCI's `clojure.core/*file*`
 */
sci.core.file = sci.impl.utils.current_file;
/**
 * SCI var that represents SCI's `clojure.core/*read-eval*`
 */
sci.core.read_eval = sci.impl.parser.read_eval;
/**
 * SCI var that represents SCI's `clojure.core/*print-length*`
 */
sci.core.print_length = sci.impl.io.print_length;
/**
 * SCI var that represents SCI's `clojure.core/*print-level*`
 */
sci.core.print_level = sci.impl.io.print_level;
/**
 * SCI var that represents SCI's `clojure.core/*print-meta*`
 */
sci.core.print_meta = sci.impl.io.print_meta;
/**
 * SCI var that represents SCI's `clojure.core/*print-readably*`
 */
sci.core.print_readably = sci.impl.io.print_readably;
/**
 * SCI var that represents SCI's `clojure.core/*print-dup*`
 */
sci.core.print_dup = sci.impl.io.print_dup_var;
/**
 * SCI var that represents SCI's `clojure.core/*print-namespace-maps*`
 */
sci.core.print_namespace_maps = sci.impl.io.print_namespace_maps;
/**
 * SCI var that represents SCI's `cljs.core/*print-fn*`
 */
sci.core.print_fn = sci.impl.io.print_fn;
/**
 * SCI var that represents SCI's `cljs.core/*print-err-fn*`
 */
sci.core.print_err_fn = sci.impl.io.print_err_fn;
/**
 * SCI var that represents SCI's `cljs.core/*print-newline*`
 */
sci.core.print_newline = sci.impl.io.print_newline;
/**
 * SCI var that represents SCI's clojure.core/*assert*
 */
sci.core.assert = sci.impl.namespaces.assert_var;
sci.core._STAR_1 = sci.impl.namespaces._STAR_1;
sci.core._STAR_2 = sci.impl.namespaces._STAR_2;
sci.core._STAR_3 = sci.impl.namespaces._STAR_3;
sci.core._STAR_e = sci.impl.namespaces._STAR_e;
/**
 * Atomically alters the root binding of sci var v by applying f to its
 *   current value plus any args.
 */
sci.core.alter_var_root = (function sci$core$alter_var_root(var_args){
var G__70904 = arguments.length;
switch (G__70904) {
case 2:
return sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___70940 = arguments.length;
var i__5770__auto___70941 = (0);
while(true){
if((i__5770__auto___70941 < len__5769__auto___70940)){
args_arr__5794__auto__.push((arguments[i__5770__auto___70941]));

var G__70942 = (i__5770__auto___70941 + (1));
i__5770__auto___70941 = G__70942;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2 = (function (v,f){
var _STAR_unrestricted_STAR__orig_val__70905 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__70906 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__70906);

try{return sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$2(v,f);
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__70905);
}}));

(sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
var _STAR_unrestricted_STAR__orig_val__70907 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__70908 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__70908);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.vars.alter_var_root,v,f,args);
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__70907);
}}));

/** @this {Function} */
(sci.core.alter_var_root.cljs$lang$applyTo = (function (seq70901){
var G__70902 = cljs.core.first(seq70901);
var seq70901__$1 = cljs.core.next(seq70901);
var G__70903 = cljs.core.first(seq70901__$1);
var seq70901__$2 = cljs.core.next(seq70901__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70902,G__70903,seq70901__$2);
}));

(sci.core.alter_var_root.cljs$lang$maxFixedArity = (2));

/**
 * Finds or creates a sci var named by the symbol name in the namespace
 *   ns (which can be a symbol or a sci namespace), setting its root
 *   binding to val if supplied. The namespace must exist in the ctx. The
 *   sci var will adopt any metadata from the name symbol.  Returns the
 *   sci var.
 */
sci.core.intern = (function sci$core$intern(var_args){
var G__70910 = arguments.length;
switch (G__70910) {
case 3:
return sci.core.intern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.core.intern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.intern.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sci_ns,name){
return sci.impl.namespaces.sci_intern.cljs$core$IFn$_invoke$arity$3(ctx,sci_ns,name);
}));

(sci.core.intern.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sci_ns,name,val){
return sci.impl.namespaces.sci_intern.cljs$core$IFn$_invoke$arity$4(ctx,sci_ns,name,val);
}));

(sci.core.intern.cljs$lang$maxFixedArity = 4);

/**
 * Evaluates string `s` as one or multiple Clojure expressions using the Small Clojure Interpreter.
 * 
 *   The map `opts` may contain the following:
 * 
 *   - `:namespaces`: a map of symbols to namespaces, where a namespace
 *   is a map with symbols to values, e.g.: `{'foo.bar {'x 1}}`. These
 *   namespaces can be used with `require`.
 * 
 *   - `:bindings`: `:bindings x` is the same as `:namespaces {'user x}`.
 * 
 *   - `:allow`: a seqable of allowed symbols. All symbols, even those
 *   brought in via `:bindings` or `:namespaces` have to be explicitly
 *   enumerated.
 * 
 *   - `:deny`: a seqable of disallowed symbols, e.g.: `[loop quote
 *   recur]`.
 * 
 *   - `:features`: when provided a non-empty set of keywords, sci will process reader conditionals using these features (e.g. #{:bb}).
 * 
 *   - `:ns-aliases`: a map of aliases to namespaces that are globally valid, e.g. `{'clojure.test 'cljs.test}`
 */
sci.core.eval_string = (function sci$core$eval_string(var_args){
var G__70912 = arguments.length;
switch (G__70912) {
case 1:
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,opts);
}));

(sci.core.eval_string.cljs$lang$maxFixedArity = 2);

/**
 * Creates an initial sci context from given options `opts`. The context
 *   can be used with `eval-string*`. See `eval-string` for available
 *   options. The internal organization of the context is implementation
 *   detail and may change in the future.
 */
sci.core.init = (function sci$core$init(opts){
return sci.impl.opts.init(opts);
});
/**
 * Updates a context with opts merged in and returns it.
 */
sci.core.merge_opts = (function sci$core$merge_opts(ctx,opts){
return sci.impl.opts.merge_opts(ctx,opts);
});
/**
 * Forks a context (as produced with `init`) into a new context. Any new
 *   vars created in the new context won't be visible in the original
 *   context.
 */
sci.core.fork = (function sci$core$fork(ctx){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"env","env",-1815813235),(function (env){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(env));
}));
});
/**
 * Evaluates string `s` in the context of `ctx` (as produced with
 *   `init`).
 */
sci.core.eval_string_STAR_ = (function sci$core$eval_string_STAR_(ctx,s){
return sci.impl.interpreter.eval_string_STAR_(ctx,s);
});
/**
 * Creates namespace object. Can be used in var metadata.
 */
sci.core.create_ns = (function sci$core$create_ns(var_args){
var G__70914 = arguments.length;
switch (G__70914) {
case 1:
return sci.core.create_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.create_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.create_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(sym,null);
}));

(sci.core.create_ns.cljs$core$IFn$_invoke$arity$2 = (function (sym,meta){
return sci.lang.__GT_Namespace(sym,meta);
}));

(sci.core.create_ns.cljs$lang$maxFixedArity = 2);

/**
 * Parses string `s` in the context of `ctx` (as produced with
 *   `init`).
 */
sci.core.parse_string = (function sci$core$parse_string(ctx,s){
return sci.impl.parser.parse_string(ctx,s);
});
/**
 * Coerces x into indexing pushback-reader to be used with
 *   parse-next. Accepts: string or java.io.Reader.
 */
sci.core.reader = (function sci$core$reader(x){
return sci.impl.parser.reader(x);
});
sci.core.source_reader = (function sci$core$source_reader(x){
return edamame.core.source_reader(x);
});
sci.core.get_line_number = (function sci$core$get_line_number(reader){
return sci.impl.parser.get_line_number(reader);
});
sci.core.get_column_number = (function sci$core$get_column_number(reader){
return sci.impl.parser.get_column_number(reader);
});
/**
 * Parses next form from reader
 */
sci.core.parse_next = (function sci$core$parse_next(var_args){
var G__70916 = arguments.length;
switch (G__70916) {
case 2:
return sci.core.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.core.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return sci.core.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.core.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,opts){
var v = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,opts);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),v)){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"eof","eof",-489063237));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci.core","eof","sci.core/eof",-808584945);
}
} else {
return v;
}
}));

(sci.core.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Parses next form from reader
 */
sci.core.parse_next_PLUS_string = (function sci$core$parse_next_PLUS_string(var_args){
var G__70918 = arguments.length;
switch (G__70918) {
case 2:
return sci.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return sci.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$3(ctx,reader,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,opts){
if(cljs.tools.reader.reader_types.source_logging_reader_QMARK_(reader)){
var v = sci.core.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,opts);
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edamame.impl.parser.buf(reader)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,s], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("parse-next+string must be called with source-reader",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(sci.core.parse_next_PLUS_string.cljs$lang$maxFixedArity = 3);

/**
 * Evaluates form (as produced by `parse-string` or `parse-next`) in the
 *   context of `ctx` (as produced with `init`). To allow namespace
 *   switches, establish root binding of `sci/ns` with `sci/binding` or
 *   `sci/with-bindings.`
 */
sci.core.eval_form = (function sci$core$eval_form(ctx,form){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})());
return sci.impl.interpreter.eval_form(ctx__$1,form);
});
/**
 * Returns list of stacktrace element maps from exception, if available.
 */
sci.core.stacktrace = (function sci$core$stacktrace(ex){
var G__70919 = ex;
var G__70919__$1 = (((G__70919 == null))?null:cljs.core.ex_data(G__70919));
var G__70919__$2 = (((G__70919__$1 == null))?null:new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557).cljs$core$IFn$_invoke$arity$1(G__70919__$1));
if((G__70919__$2 == null)){
return null;
} else {
return sci.impl.callstack.stacktrace(G__70919__$2);
}
});
/**
 * Returns a list of formatted stack trace elements as strings from stacktrace.
 */
sci.core.format_stacktrace = (function sci$core$format_stacktrace(stacktrace){
return sci.impl.callstack.format_stacktrace(stacktrace);
});
/**
 * Returns name of SCI ns as symbol.
 */
sci.core.ns_name = (function sci$core$ns_name(sci_ns){
return sci.impl.namespaces.sci_ns_name(sci_ns);
});
sci.core._copy_ns = (function sci$core$_copy_ns(ns_publics_map,sci_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns_map,p__70920){
var vec__70921 = p__70920;
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70921,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70921,(1),null);
var m = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns_map,var_name,sci.core.new_var.cljs$core$IFn$_invoke$arity$3(var_name,(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(temp__5802__auto__)){
var var$__$1 = temp__5802__auto__;
return cljs.core.deref(var$__$1);
} else {
return new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(var$);
}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),sci_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),var_name], 0))));
}),cljs.core.PersistentArrayMap.EMPTY,ns_publics_map);
});
sci.core.process_publics = (function sci$core$process_publics(publics,p__70924){
var map__70925 = p__70924;
var map__70925__$1 = cljs.core.__destructure_map(map__70925);
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70925__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var publics__$1 = (cljs.core.truth_(exclude)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,publics,exclude):publics);
return publics__$1;
});
sci.core.exclude_when_meta = (function sci$core$exclude_when_meta(publics_map,meta_fn,key_fn,val_fn,skip_keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns_map,p__70926){
var vec__70927 = p__70926;
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70927,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70927,(1),null);
var temp__5802__auto__ = (meta_fn.cljs$core$IFn$_invoke$arity$1 ? meta_fn.cljs$core$IFn$_invoke$arity$1(var$) : meta_fn.call(null,var$));
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_(cljs.core.some(m,skip_keys))){
return ns_map;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns_map,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(var_name) : key_fn.call(null,var_name)),(val_fn.cljs$core$IFn$_invoke$arity$2 ? val_fn.cljs$core$IFn$_invoke$arity$2(var$,m) : val_fn.call(null,var$,m)));
}
} else {
return ns_map;
}
}),cljs.core.PersistentArrayMap.EMPTY,publics_map);
});
sci.core.normalize_meta = (function sci$core$normalize_meta(m){
var temp__5802__auto__ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto__)){
var sci_macro = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"macro","macro",-867863404),sci_macro);
} else {
return m;
}
});
sci.core.meta_fn = (function sci$core$meta_fn(opts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),opts)){
return sci.core.normalize_meta;
} else {
if(cljs.core.truth_(opts)){
return (function (p1__70930_SHARP_){
return sci.core.normalize_meta(cljs.core.select_keys(p1__70930_SHARP_,opts));
});
} else {
return (function (p1__70931_SHARP_){
return sci.core.normalize_meta(cljs.core.select_keys(p1__70931_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword("sci","macro","sci/macro",-868536151),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"dynamic","dynamic",704819571)], null)));
});

}
}
});
/**
 * Adds import of class named by `class-name` (a symbol) to namespace named by `ns-name` (a symbol) under alias `alias` (a symbol). Returns mutated context.
 */
sci.core.add_import_BANG_ = (function sci$core$add_import_BANG_(ctx,ns_name,class_name,alias){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_name,new cljs.core.Keyword(null,"imports","imports",-1249933394),alias], null),class_name);

return ctx;
});
/**
 * Adds class (JVM class or JS object) to `ctx` as `class-name` (a
 *   symbol). Returns mutated context.
 */
sci.core.add_class_BANG_ = (function sci$core$add_class_BANG_(ctx,class_name,class$){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (env__$1){
return cljs.core.assoc_in(cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),class_name,new cljs.core.Keyword(null,"class","class",-2030961996)], null),class$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),class_name], null),class$);
}));

return ctx;
});
/**
 * Adds namespace map `ns-map` named by the symbol `ns-name` to
 *   `ctx`. Returns mutated context.
 */
sci.core.add_namespace_BANG_ = (function sci$core$add_namespace_BANG_(ctx,ns_name,ns_map){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_name], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_map], 0));

return ctx;
});
/**
 * Returns SCI ns object as created with `sci/create-ns` from `ctx` found by `ns-sym`.
 */
sci.core.find_ns = (function sci$core$find_ns(ctx,ns_sym){
return sci.impl.namespaces.sci_find_ns(ctx,ns_sym);
});
/**
 * Returns all SCI ns objects in the `ctx`
 */
sci.core.all_ns = (function sci$core$all_ns(ctx){
return sci.impl.namespaces.sci_all_ns(ctx);
});
/**
 * Calling this will enable
 *   - Altering core vars using `alter-var-root`
 *   - In CLJS: `set!` is able to set the value of any var.
 *   - In CLJS: instance method calls are not restricted to only `:classes`
 * 
 *   In the future, more unrestricted access may be added, so only use this when you're not using SCI as a sandbox.
 */
sci.core.enable_unrestricted_access_BANG_ = (function sci$core$enable_unrestricted_access_BANG_(){
return (sci.impl.unrestrict._STAR_unrestricted_STAR_ = true);
});
/**
 * Returns a fully qualified symbol from a `sci.lang.Var`
 */
sci.core.var__GT_symbol = (function sci$core$var__GT_symbol(sci_var){
var m = cljs.core.meta(sci_var);
var sci_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
var n = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
});
sci.core.resolve = (function sci$core$resolve(ctx,sym){
var G__70933 = ctx;
var G__70934 = cljs.core.PersistentArrayMap.EMPTY;
var G__70935 = sym;
var fexpr__70932 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__70932.cljs$core$IFn$_invoke$arity$3 ? fexpr__70932.cljs$core$IFn$_invoke$arity$3(G__70933,G__70934,G__70935) : fexpr__70932.call(null,G__70933,G__70934,G__70935));
});
/**
 * Add js library to context, so it can be used with `require`.
 */
sci.core.add_js_lib_BANG_ = (function sci$core$add_js_lib_BANG_(ctx,name_str,js_lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-libs","js-libs",-502933721),name_str], null),js_lib);

return ctx;
});

//# sourceMappingURL=sci.core.js.map
