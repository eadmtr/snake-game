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
var len__5769__auto___82007 = arguments.length;
var i__5770__auto___82008 = (0);
while(true){
if((i__5770__auto___82008 < len__5769__auto___82007)){
args__5775__auto__.push((arguments[i__5770__auto___82008]));

var G__82011 = (i__5770__auto___82008 + (1));
i__5770__auto___82008 = G__82011;
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
var G__82018__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__82018 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__82019__i = 0, G__82019__a = new Array(arguments.length -  0);
while (G__82019__i < G__82019__a.length) {G__82019__a[G__82019__i] = arguments[G__82019__i + 0]; ++G__82019__i;}
  children = new cljs.core.IndexedSeq(G__82019__a,0,null);
} 
return G__82018__delegate.call(this,children);};
G__82018.cljs$lang$maxFixedArity = 0;
G__82018.cljs$lang$applyTo = (function (arglist__82020){
var children = cljs.core.seq(arglist__82020);
return G__82018__delegate(children);
});
G__82018.cljs$core$IFn$_invoke$arity$variadic = G__82018__delegate;
return G__82018;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq81937){
var G__81938 = cljs.core.first(seq81937);
var seq81937__$1 = cljs.core.next(seq81937);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81938,seq81937__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__82025__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__82025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82026__i = 0, G__82026__a = new Array(arguments.length -  0);
while (G__82026__i < G__82026__a.length) {G__82026__a[G__82026__i] = arguments[G__82026__i + 0]; ++G__82026__i;}
  args = new cljs.core.IndexedSeq(G__82026__a,0,null);
} 
return G__82025__delegate.call(this,args);};
G__82025.cljs$lang$maxFixedArity = 0;
G__82025.cljs$lang$applyTo = (function (arglist__82028){
var args = cljs.core.seq(arglist__82028);
return G__82025__delegate(args);
});
G__82025.cljs$core$IFn$_invoke$arity$variadic = G__82025__delegate;
return G__82025;
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
var len__5769__auto___82030 = arguments.length;
var i__5770__auto___82031 = (0);
while(true){
if((i__5770__auto___82031 < len__5769__auto___82030)){
args__5775__auto__.push((arguments[i__5770__auto___82031]));

var G__82032 = (i__5770__auto___82031 + (1));
i__5770__auto___82031 = G__82032;
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
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq81947){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81947));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__81962 = arguments.length;
switch (G__81962) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___82034 = arguments.length;
var i__5770__auto___82035 = (0);
while(true){
if((i__5770__auto___82035 < len__5769__auto___82034)){
args_arr__5794__auto__.push((arguments[i__5770__auto___82035]));

var G__82036 = (i__5770__auto___82035 + (1));
i__5770__auto___82035 = G__82036;
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
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq81954){
var G__81955 = cljs.core.first(seq81954);
var seq81954__$1 = cljs.core.next(seq81954);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81955,seq81954__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__5775__auto__ = [];
var len__5769__auto___82043 = arguments.length;
var i__5770__auto___82044 = (0);
while(true){
if((i__5770__auto___82044 < len__5769__auto___82043)){
args__5775__auto__.push((arguments[i__5770__auto___82044]));

var G__82047 = (i__5770__auto___82044 + (1));
i__5770__auto___82044 = G__82047;
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
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq81976){
var G__81977 = cljs.core.first(seq81976);
var seq81976__$1 = cljs.core.next(seq81976);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81977,seq81976__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__5775__auto__ = [];
var len__5769__auto___82049 = arguments.length;
var i__5770__auto___82050 = (0);
while(true){
if((i__5770__auto___82050 < len__5769__auto___82049)){
args__5775__auto__.push((arguments[i__5770__auto___82050]));

var G__82051 = (i__5770__auto___82050 + (1));
i__5770__auto___82050 = G__82051;
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
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq81981){
var G__81982 = cljs.core.first(seq81981);
var seq81981__$1 = cljs.core.next(seq81981);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81982,seq81981__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___82052 = arguments.length;
var i__5770__auto___82053 = (0);
while(true){
if((i__5770__auto___82053 < len__5769__auto___82052)){
args__5775__auto__.push((arguments[i__5770__auto___82053]));

var G__82054 = (i__5770__auto___82053 + (1));
i__5770__auto___82053 = G__82054;
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
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq81993){
var G__81995 = cljs.core.first(seq81993);
var seq81993__$1 = cljs.core.next(seq81993);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81995,seq81993__$1);
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
