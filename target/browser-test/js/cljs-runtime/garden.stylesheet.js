goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44588 = arguments.length;
var i__5770__auto___44589 = (0);
while(true){
if((i__5770__auto___44589 < len__5769__auto___44588)){
args__5775__auto__.push((arguments[i__5770__auto___44589]));

var G__44590 = (i__5770__auto___44589 + (1));
i__5770__auto___44589 = G__44590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__44594__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__44594 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__44596__i = 0, G__44596__a = new Array(arguments.length -  0);
while (G__44596__i < G__44596__a.length) {G__44596__a[G__44596__i] = arguments[G__44596__i + 0]; ++G__44596__i;}
  children = new cljs.core.IndexedSeq(G__44596__a,0,null);
} 
return G__44594__delegate.call(this,children);};
G__44594.cljs$lang$maxFixedArity = 0;
G__44594.cljs$lang$applyTo = (function (arglist__44597){
var children = cljs.core.seq(arglist__44597);
return G__44594__delegate(children);
});
G__44594.cljs$core$IFn$_invoke$arity$variadic = G__44594__delegate;
return G__44594;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq44453){
var G__44454 = cljs.core.first(seq44453);
var seq44453__$1 = cljs.core.next(seq44453);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44454,seq44453__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__44598__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__44598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44599__i = 0, G__44599__a = new Array(arguments.length -  0);
while (G__44599__i < G__44599__a.length) {G__44599__a[G__44599__i] = arguments[G__44599__i + 0]; ++G__44599__i;}
  args = new cljs.core.IndexedSeq(G__44599__a,0,null);
} 
return G__44598__delegate.call(this,args);};
G__44598.cljs$lang$maxFixedArity = 0;
G__44598.cljs$lang$applyTo = (function (arglist__44600){
var args = cljs.core.seq(arglist__44600);
return G__44598__delegate(args);
});
G__44598.cljs$core$IFn$_invoke$arity$variadic = G__44598__delegate;
return G__44598;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44602 = arguments.length;
var i__5770__auto___44603 = (0);
while(true){
if((i__5770__auto___44603 < len__5769__auto___44602)){
args__5775__auto__.push((arguments[i__5770__auto___44603]));

var G__44604 = (i__5770__auto___44603 + (1));
i__5770__auto___44603 = G__44604;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq44460){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44460));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__44474 = arguments.length;
switch (G__44474) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___44608 = arguments.length;
var i__5770__auto___44610 = (0);
while(true){
if((i__5770__auto___44610 < len__5769__auto___44608)){
args_arr__5794__auto__.push((arguments[i__5770__auto___44610]));

var G__44611 = (i__5770__auto___44610 + (1));
i__5770__auto___44610 = G__44611;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq44472){
var G__44473 = cljs.core.first(seq44472);
var seq44472__$1 = cljs.core.next(seq44472);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44473,seq44472__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44619 = arguments.length;
var i__5770__auto___44620 = (0);
while(true){
if((i__5770__auto___44620 < len__5769__auto___44619)){
args__5775__auto__.push((arguments[i__5770__auto___44620]));

var G__44621 = (i__5770__auto___44620 + (1));
i__5770__auto___44620 = G__44621;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq44493){
var G__44494 = cljs.core.first(seq44493);
var seq44493__$1 = cljs.core.next(seq44493);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44494,seq44493__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44624 = arguments.length;
var i__5770__auto___44625 = (0);
while(true){
if((i__5770__auto___44625 < len__5769__auto___44624)){
args__5775__auto__.push((arguments[i__5770__auto___44625]));

var G__44626 = (i__5770__auto___44625 + (1));
i__5770__auto___44625 = G__44626;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq44499){
var G__44500 = cljs.core.first(seq44499);
var seq44499__$1 = cljs.core.next(seq44499);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44500,seq44499__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44629 = arguments.length;
var i__5770__auto___44630 = (0);
while(true){
if((i__5770__auto___44630 < len__5769__auto___44629)){
args__5775__auto__.push((arguments[i__5770__auto___44630]));

var G__44635 = (i__5770__auto___44630 + (1));
i__5770__auto___44630 = G__44635;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq44523){
var G__44524 = cljs.core.first(seq44523);
var seq44523__$1 = cljs.core.next(seq44523);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44524,seq44523__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
