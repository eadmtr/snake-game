goog.provide('garden.util');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43971 = arguments.length;
var i__5770__auto___43972 = (0);
while(true){
if((i__5770__auto___43972 < len__5769__auto___43971)){
args__5775__auto__.push((arguments[i__5770__auto___43972]));

var G__43973 = (i__5770__auto___43972 + (1));
i__5770__auto___43972 = G__43973;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.format.cljs$lang$applyTo = (function (seq43819){
var G__43820 = cljs.core.first(seq43819);
var seq43819__$1 = cljs.core.next(seq43819);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43820,seq43819__$1);
}));


/**
 * @interface
 */
garden.util.ToString = function(){};

var garden$util$ToString$to_str$dyn_43974 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (garden.util.to_str[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (garden.util.to_str["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.garden$util$ToString$to_str$arity$1 == null)))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
return garden$util$ToString$to_str$dyn_43974(this$);
}
});

(cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43975 = arguments.length;
var i__5770__auto___43976 = (0);
while(true){
if((i__5770__auto___43976 < len__5769__auto___43975)){
args__5775__auto__.push((arguments[i__5770__auto___43976]));

var G__43977 = (i__5770__auto___43976 + (1));
i__5770__auto___43976 = G__43977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
}));

(garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.as_str.cljs$lang$applyTo = (function (seq43839){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43839));
}));

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43978 = arguments.length;
var i__5770__auto___43979 = (0);
while(true){
if((i__5770__auto___43979 < len__5769__auto___43978)){
args__5775__auto__.push((arguments[i__5770__auto___43979]));

var G__43980 = (i__5770__auto___43979 + (1));
i__5770__auto___43979 = G__43980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__43865){
var vec__43866 = p__43865;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43866,(0),null);
var radix__$1 = (function (){var or__5045__auto__ = radix;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.string__GT_int.cljs$lang$applyTo = (function (seq43856){
var G__43857 = cljs.core.first(seq43856);
var seq43856__$1 = cljs.core.next(seq43856);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43857,seq43856__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43982 = arguments.length;
var i__5770__auto___43983 = (0);
while(true){
if((i__5770__auto___43983 < len__5769__auto___43982)){
args__5775__auto__.push((arguments[i__5770__auto___43983]));

var G__43984 = (i__5770__auto___43983 + (1));
i__5770__auto___43983 = G__43984;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__43875){
var vec__43876 = p__43875;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43876,(0),null);
var radix__$1 = (function (){var or__5045__auto__ = radix;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.int__GT_string.cljs$lang$applyTo = (function (seq43871){
var G__43872 = cljs.core.first(seq43871);
var seq43871__$1 = cljs.core.next(seq43871);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43872,seq43871__$1);
}));

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__5523__auto__ = (function garden$util$comma_join_$_iter__43890(s__43891){
return (new cljs.core.LazySeq(null,(function (){
var s__43891__$1 = s__43891;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43891__$1);
if(temp__5804__auto__){
var s__43891__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43891__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43891__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43893 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43892 = (0);
while(true){
if((i__43892 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__43892);
cljs.core.chunk_append(b__43893,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__43985 = (i__43892 + (1));
i__43892 = G__43985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43893),garden$util$comma_join_$_iter__43890(cljs.core.chunk_rest(s__43891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43893),null);
}
} else {
var x = cljs.core.first(s__43891__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__43890(cljs.core.rest(s__43891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
garden.util.at_supports_QMARK_ = (function garden$util$at_supports_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__5133__auto__ = a;
var y__5134__auto__ = b;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var top = (function (){var x__5130__auto__ = a;
var y__5131__auto__ = b;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__43937 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43937,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43937,(1),null);
var x__5130__auto__ = a__$1;
var y__5131__auto__ = (function (){var x__5133__auto__ = b__$1;
var y__5134__auto__ = n;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43995 = arguments.length;
var i__5770__auto___43996 = (0);
while(true){
if((i__5770__auto___43996 < len__5769__auto___43995)){
args__5775__auto__.push((arguments[i__5770__auto___43996]));

var G__43997 = (i__5770__auto___43996 + (1));
i__5770__auto___43996 = G__43997;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(garden.util.average.cljs$lang$applyTo = (function (seq43941){
var G__43942 = cljs.core.first(seq43941);
var seq43941__$1 = cljs.core.next(seq43941);
var G__43943 = cljs.core.first(seq43941__$1);
var seq43941__$2 = cljs.core.next(seq43941__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43942,G__43943,seq43941__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44000 = arguments.length;
var i__5770__auto___44001 = (0);
while(true){
if((i__5770__auto___44001 < len__5769__auto___44000)){
args__5775__auto__.push((arguments[i__5770__auto___44001]));

var G__44002 = (i__5770__auto___44001 + (1));
i__5770__auto___44001 = G__44002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__44003 = (i - (1));
var G__44004 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__44003;
v_seqs__$2 = G__44004;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.cartesian_product.cljs$lang$applyTo = (function (seq43957){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43957));
}));


//# sourceMappingURL=garden.util.js.map
