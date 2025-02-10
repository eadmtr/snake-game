goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___68561 = arguments.length;
var i__5770__auto___68562 = (0);
while(true){
if((i__5770__auto___68562 < len__5769__auto___68561)){
args__5775__auto__.push((arguments[i__5770__auto___68562]));

var G__68563 = (i__5770__auto___68562 + (1));
i__5770__auto___68562 = G__68563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__68542){
var vec__68543 = p__68542;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68543,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq68529){
var G__68530 = cljs.core.first(seq68529);
var seq68529__$1 = cljs.core.next(seq68529);
var G__68531 = cljs.core.first(seq68529__$1);
var seq68529__$2 = cljs.core.next(seq68529__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68530,G__68531,seq68529__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___68565 = arguments.length;
var i__5770__auto___68566 = (0);
while(true){
if((i__5770__auto___68566 < len__5769__auto___68565)){
args__5775__auto__.push((arguments[i__5770__auto___68566]));

var G__68567 = (i__5770__auto___68566 + (1));
i__5770__auto___68566 = G__68567;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__68557){
var vec__68558 = p__68557;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68558,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq68554){
var G__68555 = cljs.core.first(seq68554);
var seq68554__$1 = cljs.core.next(seq68554);
var G__68556 = cljs.core.first(seq68554__$1);
var seq68554__$2 = cljs.core.next(seq68554__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68555,G__68556,seq68554__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
