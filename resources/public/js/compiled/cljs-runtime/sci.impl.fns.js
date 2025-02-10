goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__63908 = arguments.length;
switch (G__63908) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__63919 = fixed_arity;
switch (G__63919) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__63920){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__63920);

while(true){
var ret__62814__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62814__auto__)){
continue;
} else {
return ret__62814__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__63920 = null;
if (arguments.length > 0) {
var G__64934__i = 0, G__64934__a = new Array(arguments.length -  0);
while (G__64934__i < G__64934__a.length) {G__64934__a[G__64934__i] = arguments[G__64934__i + 0]; ++G__64934__i;}
  G__63920 = new cljs.core.IndexedSeq(G__64934__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__63920);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__64935){
var G__63920 = cljs.core.seq(arglist__64935);
return sci$impl$fns$arity_0__delegate(G__63920);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__63924,G__63925){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63924);

(invoc_array[vararg_idx] = G__63925);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__63924,var_args){
var G__63925 = null;
if (arguments.length > 1) {
var G__64942__i = 0, G__64942__a = new Array(arguments.length -  1);
while (G__64942__i < G__64942__a.length) {G__64942__a[G__64942__i] = arguments[G__64942__i + 1]; ++G__64942__i;}
  G__63925 = new cljs.core.IndexedSeq(G__64942__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__63924,G__63925);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__64943){
var G__63924 = cljs.core.first(arglist__64943);
var G__63925 = cljs.core.rest(arglist__64943);
return sci$impl$fns$arity_1__delegate(G__63924,G__63925);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__63929,G__63930,G__63931){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63929);

(invoc_array[(1)] = G__63930);

(invoc_array[vararg_idx] = G__63931);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__63929,G__63930,var_args){
var G__63931 = null;
if (arguments.length > 2) {
var G__64947__i = 0, G__64947__a = new Array(arguments.length -  2);
while (G__64947__i < G__64947__a.length) {G__64947__a[G__64947__i] = arguments[G__64947__i + 2]; ++G__64947__i;}
  G__63931 = new cljs.core.IndexedSeq(G__64947__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__63929,G__63930,G__63931);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__64948){
var G__63929 = cljs.core.first(arglist__64948);
arglist__64948 = cljs.core.next(arglist__64948);
var G__63930 = cljs.core.first(arglist__64948);
var G__63931 = cljs.core.rest(arglist__64948);
return sci$impl$fns$arity_2__delegate(G__63929,G__63930,G__63931);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__63933,G__63934,G__63935,G__63936){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63933);

(invoc_array[(1)] = G__63934);

(invoc_array[(2)] = G__63935);

(invoc_array[vararg_idx] = G__63936);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__63933,G__63934,G__63935,var_args){
var G__63936 = null;
if (arguments.length > 3) {
var G__64951__i = 0, G__64951__a = new Array(arguments.length -  3);
while (G__64951__i < G__64951__a.length) {G__64951__a[G__64951__i] = arguments[G__64951__i + 3]; ++G__64951__i;}
  G__63936 = new cljs.core.IndexedSeq(G__64951__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__63933,G__63934,G__63935,G__63936);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__64953){
var G__63933 = cljs.core.first(arglist__64953);
arglist__64953 = cljs.core.next(arglist__64953);
var G__63934 = cljs.core.first(arglist__64953);
arglist__64953 = cljs.core.next(arglist__64953);
var G__63935 = cljs.core.first(arglist__64953);
var G__63936 = cljs.core.rest(arglist__64953);
return sci$impl$fns$arity_3__delegate(G__63933,G__63934,G__63935,G__63936);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__63937,G__63938,G__63939,G__63940,G__63941){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63937);

(invoc_array[(1)] = G__63938);

(invoc_array[(2)] = G__63939);

(invoc_array[(3)] = G__63940);

(invoc_array[vararg_idx] = G__63941);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__63937,G__63938,G__63939,G__63940,var_args){
var G__63941 = null;
if (arguments.length > 4) {
var G__64954__i = 0, G__64954__a = new Array(arguments.length -  4);
while (G__64954__i < G__64954__a.length) {G__64954__a[G__64954__i] = arguments[G__64954__i + 4]; ++G__64954__i;}
  G__63941 = new cljs.core.IndexedSeq(G__64954__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__63937,G__63938,G__63939,G__63940,G__63941);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__64955){
var G__63937 = cljs.core.first(arglist__64955);
arglist__64955 = cljs.core.next(arglist__64955);
var G__63938 = cljs.core.first(arglist__64955);
arglist__64955 = cljs.core.next(arglist__64955);
var G__63939 = cljs.core.first(arglist__64955);
arglist__64955 = cljs.core.next(arglist__64955);
var G__63940 = cljs.core.first(arglist__64955);
var G__63941 = cljs.core.rest(arglist__64955);
return sci$impl$fns$arity_4__delegate(G__63937,G__63938,G__63939,G__63940,G__63941);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__63950,G__63951,G__63952,G__63953,G__63954,G__63955){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63950);

(invoc_array[(1)] = G__63951);

(invoc_array[(2)] = G__63952);

(invoc_array[(3)] = G__63953);

(invoc_array[(4)] = G__63954);

(invoc_array[vararg_idx] = G__63955);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__63950,G__63951,G__63952,G__63953,G__63954,var_args){
var G__63955 = null;
if (arguments.length > 5) {
var G__64969__i = 0, G__64969__a = new Array(arguments.length -  5);
while (G__64969__i < G__64969__a.length) {G__64969__a[G__64969__i] = arguments[G__64969__i + 5]; ++G__64969__i;}
  G__63955 = new cljs.core.IndexedSeq(G__64969__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__63950,G__63951,G__63952,G__63953,G__63954,G__63955);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__64970){
var G__63950 = cljs.core.first(arglist__64970);
arglist__64970 = cljs.core.next(arglist__64970);
var G__63951 = cljs.core.first(arglist__64970);
arglist__64970 = cljs.core.next(arglist__64970);
var G__63952 = cljs.core.first(arglist__64970);
arglist__64970 = cljs.core.next(arglist__64970);
var G__63953 = cljs.core.first(arglist__64970);
arglist__64970 = cljs.core.next(arglist__64970);
var G__63954 = cljs.core.first(arglist__64970);
var G__63955 = cljs.core.rest(arglist__64970);
return sci$impl$fns$arity_5__delegate(G__63950,G__63951,G__63952,G__63953,G__63954,G__63955);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__63962,G__63963,G__63964,G__63965,G__63966,G__63967,G__63968){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63962);

(invoc_array[(1)] = G__63963);

(invoc_array[(2)] = G__63964);

(invoc_array[(3)] = G__63965);

(invoc_array[(4)] = G__63966);

(invoc_array[(5)] = G__63967);

(invoc_array[vararg_idx] = G__63968);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__63962,G__63963,G__63964,G__63965,G__63966,G__63967,var_args){
var G__63968 = null;
if (arguments.length > 6) {
var G__64972__i = 0, G__64972__a = new Array(arguments.length -  6);
while (G__64972__i < G__64972__a.length) {G__64972__a[G__64972__i] = arguments[G__64972__i + 6]; ++G__64972__i;}
  G__63968 = new cljs.core.IndexedSeq(G__64972__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__63962,G__63963,G__63964,G__63965,G__63966,G__63967,G__63968);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__64975){
var G__63962 = cljs.core.first(arglist__64975);
arglist__64975 = cljs.core.next(arglist__64975);
var G__63963 = cljs.core.first(arglist__64975);
arglist__64975 = cljs.core.next(arglist__64975);
var G__63964 = cljs.core.first(arglist__64975);
arglist__64975 = cljs.core.next(arglist__64975);
var G__63965 = cljs.core.first(arglist__64975);
arglist__64975 = cljs.core.next(arglist__64975);
var G__63966 = cljs.core.first(arglist__64975);
arglist__64975 = cljs.core.next(arglist__64975);
var G__63967 = cljs.core.first(arglist__64975);
var G__63968 = cljs.core.rest(arglist__64975);
return sci$impl$fns$arity_6__delegate(G__63962,G__63963,G__63964,G__63965,G__63966,G__63967,G__63968);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__63978,G__63979,G__63980,G__63981,G__63982,G__63983,G__63984,G__63985){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63978);

(invoc_array[(1)] = G__63979);

(invoc_array[(2)] = G__63980);

(invoc_array[(3)] = G__63981);

(invoc_array[(4)] = G__63982);

(invoc_array[(5)] = G__63983);

(invoc_array[(6)] = G__63984);

(invoc_array[vararg_idx] = G__63985);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__63978,G__63979,G__63980,G__63981,G__63982,G__63983,G__63984,var_args){
var G__63985 = null;
if (arguments.length > 7) {
var G__64984__i = 0, G__64984__a = new Array(arguments.length -  7);
while (G__64984__i < G__64984__a.length) {G__64984__a[G__64984__i] = arguments[G__64984__i + 7]; ++G__64984__i;}
  G__63985 = new cljs.core.IndexedSeq(G__64984__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__63978,G__63979,G__63980,G__63981,G__63982,G__63983,G__63984,G__63985);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__64988){
var G__63978 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__63979 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__63980 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__63981 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__63982 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__63983 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__63984 = cljs.core.first(arglist__64988);
var G__63985 = cljs.core.rest(arglist__64988);
return sci$impl$fns$arity_7__delegate(G__63978,G__63979,G__63980,G__63981,G__63982,G__63983,G__63984,G__63985);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__63991,G__63992,G__63993,G__63994,G__63995,G__63996,G__63997,G__63998,G__63999){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63991);

(invoc_array[(1)] = G__63992);

(invoc_array[(2)] = G__63993);

(invoc_array[(3)] = G__63994);

(invoc_array[(4)] = G__63995);

(invoc_array[(5)] = G__63996);

(invoc_array[(6)] = G__63997);

(invoc_array[(7)] = G__63998);

(invoc_array[vararg_idx] = G__63999);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__63991,G__63992,G__63993,G__63994,G__63995,G__63996,G__63997,G__63998,var_args){
var G__63999 = null;
if (arguments.length > 8) {
var G__64994__i = 0, G__64994__a = new Array(arguments.length -  8);
while (G__64994__i < G__64994__a.length) {G__64994__a[G__64994__i] = arguments[G__64994__i + 8]; ++G__64994__i;}
  G__63999 = new cljs.core.IndexedSeq(G__64994__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__63991,G__63992,G__63993,G__63994,G__63995,G__63996,G__63997,G__63998,G__63999);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__64996){
var G__63991 = cljs.core.first(arglist__64996);
arglist__64996 = cljs.core.next(arglist__64996);
var G__63992 = cljs.core.first(arglist__64996);
arglist__64996 = cljs.core.next(arglist__64996);
var G__63993 = cljs.core.first(arglist__64996);
arglist__64996 = cljs.core.next(arglist__64996);
var G__63994 = cljs.core.first(arglist__64996);
arglist__64996 = cljs.core.next(arglist__64996);
var G__63995 = cljs.core.first(arglist__64996);
arglist__64996 = cljs.core.next(arglist__64996);
var G__63996 = cljs.core.first(arglist__64996);
arglist__64996 = cljs.core.next(arglist__64996);
var G__63997 = cljs.core.first(arglist__64996);
arglist__64996 = cljs.core.next(arglist__64996);
var G__63998 = cljs.core.first(arglist__64996);
var G__63999 = cljs.core.rest(arglist__64996);
return sci$impl$fns$arity_8__delegate(G__63991,G__63992,G__63993,G__63994,G__63995,G__63996,G__63997,G__63998,G__63999);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__64017,G__64018,G__64019,G__64020,G__64021,G__64022,G__64023,G__64024,G__64025,G__64026){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64017);

(invoc_array[(1)] = G__64018);

(invoc_array[(2)] = G__64019);

(invoc_array[(3)] = G__64020);

(invoc_array[(4)] = G__64021);

(invoc_array[(5)] = G__64022);

(invoc_array[(6)] = G__64023);

(invoc_array[(7)] = G__64024);

(invoc_array[(8)] = G__64025);

(invoc_array[vararg_idx] = G__64026);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__64017,G__64018,G__64019,G__64020,G__64021,G__64022,G__64023,G__64024,G__64025,var_args){
var G__64026 = null;
if (arguments.length > 9) {
var G__65005__i = 0, G__65005__a = new Array(arguments.length -  9);
while (G__65005__i < G__65005__a.length) {G__65005__a[G__65005__i] = arguments[G__65005__i + 9]; ++G__65005__i;}
  G__64026 = new cljs.core.IndexedSeq(G__65005__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__64017,G__64018,G__64019,G__64020,G__64021,G__64022,G__64023,G__64024,G__64025,G__64026);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__65006){
var G__64017 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64018 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64019 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64020 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64021 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64022 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64023 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64024 = cljs.core.first(arglist__65006);
arglist__65006 = cljs.core.next(arglist__65006);
var G__64025 = cljs.core.first(arglist__65006);
var G__64026 = cljs.core.rest(arglist__65006);
return sci$impl$fns$arity_9__delegate(G__64017,G__64018,G__64019,G__64020,G__64021,G__64022,G__64023,G__64024,G__64025,G__64026);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__64067,G__64068,G__64069,G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,G__64077){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64067);

(invoc_array[(1)] = G__64068);

(invoc_array[(2)] = G__64069);

(invoc_array[(3)] = G__64070);

(invoc_array[(4)] = G__64071);

(invoc_array[(5)] = G__64072);

(invoc_array[(6)] = G__64073);

(invoc_array[(7)] = G__64074);

(invoc_array[(8)] = G__64075);

(invoc_array[(9)] = G__64076);

(invoc_array[vararg_idx] = G__64077);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__64067,G__64068,G__64069,G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,var_args){
var G__64077 = null;
if (arguments.length > 10) {
var G__65011__i = 0, G__65011__a = new Array(arguments.length -  10);
while (G__65011__i < G__65011__a.length) {G__65011__a[G__65011__i] = arguments[G__65011__i + 10]; ++G__65011__i;}
  G__64077 = new cljs.core.IndexedSeq(G__65011__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__64067,G__64068,G__64069,G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,G__64077);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__65012){
var G__64067 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64068 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64069 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64070 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64071 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64072 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64073 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64074 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64075 = cljs.core.first(arglist__65012);
arglist__65012 = cljs.core.next(arglist__65012);
var G__64076 = cljs.core.first(arglist__65012);
var G__64077 = cljs.core.rest(arglist__65012);
return sci$impl$fns$arity_10__delegate(G__64067,G__64068,G__64069,G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,G__64077);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__64097,G__64098,G__64099,G__64100,G__64101,G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64097);

(invoc_array[(1)] = G__64098);

(invoc_array[(2)] = G__64099);

(invoc_array[(3)] = G__64100);

(invoc_array[(4)] = G__64101);

(invoc_array[(5)] = G__64102);

(invoc_array[(6)] = G__64103);

(invoc_array[(7)] = G__64104);

(invoc_array[(8)] = G__64105);

(invoc_array[(9)] = G__64106);

(invoc_array[(10)] = G__64107);

(invoc_array[vararg_idx] = G__64108);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__64097,G__64098,G__64099,G__64100,G__64101,G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,var_args){
var G__64108 = null;
if (arguments.length > 11) {
var G__65025__i = 0, G__65025__a = new Array(arguments.length -  11);
while (G__65025__i < G__65025__a.length) {G__65025__a[G__65025__i] = arguments[G__65025__i + 11]; ++G__65025__i;}
  G__64108 = new cljs.core.IndexedSeq(G__65025__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__64097,G__64098,G__64099,G__64100,G__64101,G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__65026){
var G__64097 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64098 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64099 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64100 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64101 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64102 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64103 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64104 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64105 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64106 = cljs.core.first(arglist__65026);
arglist__65026 = cljs.core.next(arglist__65026);
var G__64107 = cljs.core.first(arglist__65026);
var G__64108 = cljs.core.rest(arglist__65026);
return sci$impl$fns$arity_11__delegate(G__64097,G__64098,G__64099,G__64100,G__64101,G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__64127,G__64128,G__64129,G__64130,G__64131,G__64132,G__64133,G__64134,G__64135,G__64136,G__64137,G__64138,G__64139){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64127);

(invoc_array[(1)] = G__64128);

(invoc_array[(2)] = G__64129);

(invoc_array[(3)] = G__64130);

(invoc_array[(4)] = G__64131);

(invoc_array[(5)] = G__64132);

(invoc_array[(6)] = G__64133);

(invoc_array[(7)] = G__64134);

(invoc_array[(8)] = G__64135);

(invoc_array[(9)] = G__64136);

(invoc_array[(10)] = G__64137);

(invoc_array[(11)] = G__64138);

(invoc_array[vararg_idx] = G__64139);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__64127,G__64128,G__64129,G__64130,G__64131,G__64132,G__64133,G__64134,G__64135,G__64136,G__64137,G__64138,var_args){
var G__64139 = null;
if (arguments.length > 12) {
var G__65034__i = 0, G__65034__a = new Array(arguments.length -  12);
while (G__65034__i < G__65034__a.length) {G__65034__a[G__65034__i] = arguments[G__65034__i + 12]; ++G__65034__i;}
  G__64139 = new cljs.core.IndexedSeq(G__65034__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__64127,G__64128,G__64129,G__64130,G__64131,G__64132,G__64133,G__64134,G__64135,G__64136,G__64137,G__64138,G__64139);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__65035){
var G__64127 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64128 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64129 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64130 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64131 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64132 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64133 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64134 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64135 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64136 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64137 = cljs.core.first(arglist__65035);
arglist__65035 = cljs.core.next(arglist__65035);
var G__64138 = cljs.core.first(arglist__65035);
var G__64139 = cljs.core.rest(arglist__65035);
return sci$impl$fns$arity_12__delegate(G__64127,G__64128,G__64129,G__64130,G__64131,G__64132,G__64133,G__64134,G__64135,G__64136,G__64137,G__64138,G__64139);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__64153,G__64154,G__64155,G__64156,G__64157,G__64158,G__64159,G__64160,G__64161,G__64162,G__64163,G__64164,G__64165,G__64166){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64153);

(invoc_array[(1)] = G__64154);

(invoc_array[(2)] = G__64155);

(invoc_array[(3)] = G__64156);

(invoc_array[(4)] = G__64157);

(invoc_array[(5)] = G__64158);

(invoc_array[(6)] = G__64159);

(invoc_array[(7)] = G__64160);

(invoc_array[(8)] = G__64161);

(invoc_array[(9)] = G__64162);

(invoc_array[(10)] = G__64163);

(invoc_array[(11)] = G__64164);

(invoc_array[(12)] = G__64165);

(invoc_array[vararg_idx] = G__64166);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__64153,G__64154,G__64155,G__64156,G__64157,G__64158,G__64159,G__64160,G__64161,G__64162,G__64163,G__64164,G__64165,var_args){
var G__64166 = null;
if (arguments.length > 13) {
var G__65170__i = 0, G__65170__a = new Array(arguments.length -  13);
while (G__65170__i < G__65170__a.length) {G__65170__a[G__65170__i] = arguments[G__65170__i + 13]; ++G__65170__i;}
  G__64166 = new cljs.core.IndexedSeq(G__65170__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__64153,G__64154,G__64155,G__64156,G__64157,G__64158,G__64159,G__64160,G__64161,G__64162,G__64163,G__64164,G__64165,G__64166);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__65174){
var G__64153 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64154 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64155 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64156 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64157 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64158 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64159 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64160 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64161 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64162 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64163 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64164 = cljs.core.first(arglist__65174);
arglist__65174 = cljs.core.next(arglist__65174);
var G__64165 = cljs.core.first(arglist__65174);
var G__64166 = cljs.core.rest(arglist__65174);
return sci$impl$fns$arity_13__delegate(G__64153,G__64154,G__64155,G__64156,G__64157,G__64158,G__64159,G__64160,G__64161,G__64162,G__64163,G__64164,G__64165,G__64166);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,G__64178,G__64179,G__64180,G__64181,G__64182,G__64183,G__64184,G__64185,G__64186){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64172);

(invoc_array[(1)] = G__64173);

(invoc_array[(2)] = G__64174);

(invoc_array[(3)] = G__64175);

(invoc_array[(4)] = G__64176);

(invoc_array[(5)] = G__64177);

(invoc_array[(6)] = G__64178);

(invoc_array[(7)] = G__64179);

(invoc_array[(8)] = G__64180);

(invoc_array[(9)] = G__64181);

(invoc_array[(10)] = G__64182);

(invoc_array[(11)] = G__64183);

(invoc_array[(12)] = G__64184);

(invoc_array[(13)] = G__64185);

(invoc_array[vararg_idx] = G__64186);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,G__64178,G__64179,G__64180,G__64181,G__64182,G__64183,G__64184,G__64185,var_args){
var G__64186 = null;
if (arguments.length > 14) {
var G__65175__i = 0, G__65175__a = new Array(arguments.length -  14);
while (G__65175__i < G__65175__a.length) {G__65175__a[G__65175__i] = arguments[G__65175__i + 14]; ++G__65175__i;}
  G__64186 = new cljs.core.IndexedSeq(G__65175__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,G__64178,G__64179,G__64180,G__64181,G__64182,G__64183,G__64184,G__64185,G__64186);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__65176){
var G__64172 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64173 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64174 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64175 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64176 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64177 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64178 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64179 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64180 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64181 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64182 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64183 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64184 = cljs.core.first(arglist__65176);
arglist__65176 = cljs.core.next(arglist__65176);
var G__64185 = cljs.core.first(arglist__65176);
var G__64186 = cljs.core.rest(arglist__65176);
return sci$impl$fns$arity_14__delegate(G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,G__64178,G__64179,G__64180,G__64181,G__64182,G__64183,G__64184,G__64185,G__64186);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__64195,G__64196,G__64197,G__64198,G__64199,G__64200,G__64201,G__64202,G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,G__64210){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64195);

(invoc_array[(1)] = G__64196);

(invoc_array[(2)] = G__64197);

(invoc_array[(3)] = G__64198);

(invoc_array[(4)] = G__64199);

(invoc_array[(5)] = G__64200);

(invoc_array[(6)] = G__64201);

(invoc_array[(7)] = G__64202);

(invoc_array[(8)] = G__64203);

(invoc_array[(9)] = G__64204);

(invoc_array[(10)] = G__64205);

(invoc_array[(11)] = G__64206);

(invoc_array[(12)] = G__64207);

(invoc_array[(13)] = G__64208);

(invoc_array[(14)] = G__64209);

(invoc_array[vararg_idx] = G__64210);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__64195,G__64196,G__64197,G__64198,G__64199,G__64200,G__64201,G__64202,G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,var_args){
var G__64210 = null;
if (arguments.length > 15) {
var G__65180__i = 0, G__65180__a = new Array(arguments.length -  15);
while (G__65180__i < G__65180__a.length) {G__65180__a[G__65180__i] = arguments[G__65180__i + 15]; ++G__65180__i;}
  G__64210 = new cljs.core.IndexedSeq(G__65180__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__64195,G__64196,G__64197,G__64198,G__64199,G__64200,G__64201,G__64202,G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,G__64210);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__65181){
var G__64195 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64196 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64197 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64198 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64199 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64200 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64201 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64202 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64203 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64204 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64205 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64206 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64207 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64208 = cljs.core.first(arglist__65181);
arglist__65181 = cljs.core.next(arglist__65181);
var G__64209 = cljs.core.first(arglist__65181);
var G__64210 = cljs.core.rest(arglist__65181);
return sci$impl$fns$arity_15__delegate(G__64195,G__64196,G__64197,G__64198,G__64199,G__64200,G__64201,G__64202,G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,G__64210);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__64219,G__64220,G__64221,G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,G__64235){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64219);

(invoc_array[(1)] = G__64220);

(invoc_array[(2)] = G__64221);

(invoc_array[(3)] = G__64222);

(invoc_array[(4)] = G__64223);

(invoc_array[(5)] = G__64224);

(invoc_array[(6)] = G__64225);

(invoc_array[(7)] = G__64226);

(invoc_array[(8)] = G__64227);

(invoc_array[(9)] = G__64228);

(invoc_array[(10)] = G__64229);

(invoc_array[(11)] = G__64230);

(invoc_array[(12)] = G__64231);

(invoc_array[(13)] = G__64232);

(invoc_array[(14)] = G__64233);

(invoc_array[(15)] = G__64234);

(invoc_array[vararg_idx] = G__64235);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__64219,G__64220,G__64221,G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,var_args){
var G__64235 = null;
if (arguments.length > 16) {
var G__65185__i = 0, G__65185__a = new Array(arguments.length -  16);
while (G__65185__i < G__65185__a.length) {G__65185__a[G__65185__i] = arguments[G__65185__i + 16]; ++G__65185__i;}
  G__64235 = new cljs.core.IndexedSeq(G__65185__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__64219,G__64220,G__64221,G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,G__64235);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__65186){
var G__64219 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64220 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64221 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64222 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64223 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64224 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64225 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64226 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64227 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64228 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64229 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64230 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64231 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64232 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64233 = cljs.core.first(arglist__65186);
arglist__65186 = cljs.core.next(arglist__65186);
var G__64234 = cljs.core.first(arglist__65186);
var G__64235 = cljs.core.rest(arglist__65186);
return sci$impl$fns$arity_16__delegate(G__64219,G__64220,G__64221,G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,G__64235);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__64250,G__64251,G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,G__64267){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64250);

(invoc_array[(1)] = G__64251);

(invoc_array[(2)] = G__64252);

(invoc_array[(3)] = G__64253);

(invoc_array[(4)] = G__64254);

(invoc_array[(5)] = G__64255);

(invoc_array[(6)] = G__64256);

(invoc_array[(7)] = G__64257);

(invoc_array[(8)] = G__64258);

(invoc_array[(9)] = G__64259);

(invoc_array[(10)] = G__64260);

(invoc_array[(11)] = G__64261);

(invoc_array[(12)] = G__64262);

(invoc_array[(13)] = G__64263);

(invoc_array[(14)] = G__64264);

(invoc_array[(15)] = G__64265);

(invoc_array[(16)] = G__64266);

(invoc_array[vararg_idx] = G__64267);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__64250,G__64251,G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,var_args){
var G__64267 = null;
if (arguments.length > 17) {
var G__65187__i = 0, G__65187__a = new Array(arguments.length -  17);
while (G__65187__i < G__65187__a.length) {G__65187__a[G__65187__i] = arguments[G__65187__i + 17]; ++G__65187__i;}
  G__64267 = new cljs.core.IndexedSeq(G__65187__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__64250,G__64251,G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,G__64267);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__65188){
var G__64250 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64251 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64252 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64253 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64254 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64255 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64256 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64257 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64258 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64259 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64260 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64261 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64262 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64263 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64264 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64265 = cljs.core.first(arglist__65188);
arglist__65188 = cljs.core.next(arglist__65188);
var G__64266 = cljs.core.first(arglist__65188);
var G__64267 = cljs.core.rest(arglist__65188);
return sci$impl$fns$arity_17__delegate(G__64250,G__64251,G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,G__64267);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__64271,G__64272,G__64273,G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,G__64289){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64271);

(invoc_array[(1)] = G__64272);

(invoc_array[(2)] = G__64273);

(invoc_array[(3)] = G__64274);

(invoc_array[(4)] = G__64275);

(invoc_array[(5)] = G__64276);

(invoc_array[(6)] = G__64277);

(invoc_array[(7)] = G__64278);

(invoc_array[(8)] = G__64279);

(invoc_array[(9)] = G__64280);

(invoc_array[(10)] = G__64281);

(invoc_array[(11)] = G__64282);

(invoc_array[(12)] = G__64283);

(invoc_array[(13)] = G__64284);

(invoc_array[(14)] = G__64285);

(invoc_array[(15)] = G__64286);

(invoc_array[(16)] = G__64287);

(invoc_array[(17)] = G__64288);

(invoc_array[vararg_idx] = G__64289);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__64271,G__64272,G__64273,G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,var_args){
var G__64289 = null;
if (arguments.length > 18) {
var G__65197__i = 0, G__65197__a = new Array(arguments.length -  18);
while (G__65197__i < G__65197__a.length) {G__65197__a[G__65197__i] = arguments[G__65197__i + 18]; ++G__65197__i;}
  G__64289 = new cljs.core.IndexedSeq(G__65197__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__64271,G__64272,G__64273,G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,G__64289);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__65201){
var G__64271 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64272 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64273 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64274 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64275 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64276 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64277 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64278 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64279 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64280 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64281 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64282 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64283 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64284 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64285 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64286 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64287 = cljs.core.first(arglist__65201);
arglist__65201 = cljs.core.next(arglist__65201);
var G__64288 = cljs.core.first(arglist__65201);
var G__64289 = cljs.core.rest(arglist__65201);
return sci$impl$fns$arity_18__delegate(G__64271,G__64272,G__64273,G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,G__64289);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__64298,G__64299,G__64300,G__64301,G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,G__64317){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64298);

(invoc_array[(1)] = G__64299);

(invoc_array[(2)] = G__64300);

(invoc_array[(3)] = G__64301);

(invoc_array[(4)] = G__64302);

(invoc_array[(5)] = G__64303);

(invoc_array[(6)] = G__64304);

(invoc_array[(7)] = G__64305);

(invoc_array[(8)] = G__64306);

(invoc_array[(9)] = G__64307);

(invoc_array[(10)] = G__64308);

(invoc_array[(11)] = G__64309);

(invoc_array[(12)] = G__64310);

(invoc_array[(13)] = G__64311);

(invoc_array[(14)] = G__64312);

(invoc_array[(15)] = G__64313);

(invoc_array[(16)] = G__64314);

(invoc_array[(17)] = G__64315);

(invoc_array[(18)] = G__64316);

(invoc_array[vararg_idx] = G__64317);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__64298,G__64299,G__64300,G__64301,G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,var_args){
var G__64317 = null;
if (arguments.length > 19) {
var G__65204__i = 0, G__65204__a = new Array(arguments.length -  19);
while (G__65204__i < G__65204__a.length) {G__65204__a[G__65204__i] = arguments[G__65204__i + 19]; ++G__65204__i;}
  G__64317 = new cljs.core.IndexedSeq(G__65204__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__64298,G__64299,G__64300,G__64301,G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,G__64317);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__65205){
var G__64298 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64299 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64300 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64301 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64302 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64303 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64304 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64305 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64306 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64307 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64308 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64309 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64310 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64311 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64312 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64313 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64314 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64315 = cljs.core.first(arglist__65205);
arglist__65205 = cljs.core.next(arglist__65205);
var G__64316 = cljs.core.first(arglist__65205);
var G__64317 = cljs.core.rest(arglist__65205);
return sci$impl$fns$arity_19__delegate(G__64298,G__64299,G__64300,G__64301,G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,G__64317);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__64320,G__64321,G__64322,G__64323,G__64324,G__64325,G__64326,G__64327,G__64328,G__64329,G__64330,G__64331,G__64332,G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,G__64340){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64320);

(invoc_array[(1)] = G__64321);

(invoc_array[(2)] = G__64322);

(invoc_array[(3)] = G__64323);

(invoc_array[(4)] = G__64324);

(invoc_array[(5)] = G__64325);

(invoc_array[(6)] = G__64326);

(invoc_array[(7)] = G__64327);

(invoc_array[(8)] = G__64328);

(invoc_array[(9)] = G__64329);

(invoc_array[(10)] = G__64330);

(invoc_array[(11)] = G__64331);

(invoc_array[(12)] = G__64332);

(invoc_array[(13)] = G__64333);

(invoc_array[(14)] = G__64334);

(invoc_array[(15)] = G__64335);

(invoc_array[(16)] = G__64336);

(invoc_array[(17)] = G__64337);

(invoc_array[(18)] = G__64338);

(invoc_array[(19)] = G__64339);

(invoc_array[vararg_idx] = G__64340);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__64320,G__64321,G__64322,G__64323,G__64324,G__64325,G__64326,G__64327,G__64328,G__64329,G__64330,G__64331,G__64332,G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,var_args){
var G__64340 = null;
if (arguments.length > 20) {
var G__65207__i = 0, G__65207__a = new Array(arguments.length -  20);
while (G__65207__i < G__65207__a.length) {G__65207__a[G__65207__i] = arguments[G__65207__i + 20]; ++G__65207__i;}
  G__64340 = new cljs.core.IndexedSeq(G__65207__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__64320,G__64321,G__64322,G__64323,G__64324,G__64325,G__64326,G__64327,G__64328,G__64329,G__64330,G__64331,G__64332,G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,G__64340);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__65208){
var G__64320 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64321 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64322 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64323 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64324 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64325 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64326 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64327 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64328 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64329 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64330 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64331 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64332 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64333 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64334 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64335 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64336 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64337 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64338 = cljs.core.first(arglist__65208);
arglist__65208 = cljs.core.next(arglist__65208);
var G__64339 = cljs.core.first(arglist__65208);
var G__64340 = cljs.core.rest(arglist__65208);
return sci$impl$fns$arity_20__delegate(G__64320,G__64321,G__64322,G__64323,G__64324,G__64325,G__64326,G__64327,G__64328,G__64329,G__64330,G__64331,G__64332,G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,G__64340);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63919)].join('')));

}
})():(function (){var G__64351 = fixed_arity;
switch (G__64351) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__62814__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62814__auto__)){
continue;
} else {
return ret__62814__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__64353){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64353);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__64355,G__64356){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64355);

(invoc_array[(1)] = G__64356);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__64360,G__64361,G__64362){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64360);

(invoc_array[(1)] = G__64361);

(invoc_array[(2)] = G__64362);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__64365,G__64366,G__64367,G__64368){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64365);

(invoc_array[(1)] = G__64366);

(invoc_array[(2)] = G__64367);

(invoc_array[(3)] = G__64368);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__64371,G__64372,G__64373,G__64374,G__64375){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64371);

(invoc_array[(1)] = G__64372);

(invoc_array[(2)] = G__64373);

(invoc_array[(3)] = G__64374);

(invoc_array[(4)] = G__64375);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__64377,G__64378,G__64379,G__64380,G__64381,G__64382){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64377);

(invoc_array[(1)] = G__64378);

(invoc_array[(2)] = G__64379);

(invoc_array[(3)] = G__64380);

(invoc_array[(4)] = G__64381);

(invoc_array[(5)] = G__64382);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__64393,G__64394,G__64395,G__64396,G__64397,G__64398,G__64399){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64393);

(invoc_array[(1)] = G__64394);

(invoc_array[(2)] = G__64395);

(invoc_array[(3)] = G__64396);

(invoc_array[(4)] = G__64397);

(invoc_array[(5)] = G__64398);

(invoc_array[(6)] = G__64399);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__64403,G__64404,G__64405,G__64406,G__64407,G__64408,G__64409,G__64410){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64403);

(invoc_array[(1)] = G__64404);

(invoc_array[(2)] = G__64405);

(invoc_array[(3)] = G__64406);

(invoc_array[(4)] = G__64407);

(invoc_array[(5)] = G__64408);

(invoc_array[(6)] = G__64409);

(invoc_array[(7)] = G__64410);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__64415,G__64416,G__64417,G__64418,G__64419,G__64420,G__64421,G__64422,G__64423){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64415);

(invoc_array[(1)] = G__64416);

(invoc_array[(2)] = G__64417);

(invoc_array[(3)] = G__64418);

(invoc_array[(4)] = G__64419);

(invoc_array[(5)] = G__64420);

(invoc_array[(6)] = G__64421);

(invoc_array[(7)] = G__64422);

(invoc_array[(8)] = G__64423);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__64437,G__64438,G__64439,G__64440,G__64441,G__64442,G__64443,G__64444,G__64445,G__64446){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64437);

(invoc_array[(1)] = G__64438);

(invoc_array[(2)] = G__64439);

(invoc_array[(3)] = G__64440);

(invoc_array[(4)] = G__64441);

(invoc_array[(5)] = G__64442);

(invoc_array[(6)] = G__64443);

(invoc_array[(7)] = G__64444);

(invoc_array[(8)] = G__64445);

(invoc_array[(9)] = G__64446);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__64459,G__64460,G__64461,G__64462,G__64463,G__64464,G__64465,G__64466,G__64467,G__64468,G__64469){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64459);

(invoc_array[(1)] = G__64460);

(invoc_array[(2)] = G__64461);

(invoc_array[(3)] = G__64462);

(invoc_array[(4)] = G__64463);

(invoc_array[(5)] = G__64464);

(invoc_array[(6)] = G__64465);

(invoc_array[(7)] = G__64466);

(invoc_array[(8)] = G__64467);

(invoc_array[(9)] = G__64468);

(invoc_array[(10)] = G__64469);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__64477,G__64478,G__64479,G__64480,G__64481,G__64482,G__64483,G__64484,G__64485,G__64486,G__64487,G__64488){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64477);

(invoc_array[(1)] = G__64478);

(invoc_array[(2)] = G__64479);

(invoc_array[(3)] = G__64480);

(invoc_array[(4)] = G__64481);

(invoc_array[(5)] = G__64482);

(invoc_array[(6)] = G__64483);

(invoc_array[(7)] = G__64484);

(invoc_array[(8)] = G__64485);

(invoc_array[(9)] = G__64486);

(invoc_array[(10)] = G__64487);

(invoc_array[(11)] = G__64488);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__64515,G__64516,G__64517,G__64518,G__64519,G__64520,G__64521,G__64522,G__64523,G__64524,G__64525,G__64526,G__64527){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64515);

(invoc_array[(1)] = G__64516);

(invoc_array[(2)] = G__64517);

(invoc_array[(3)] = G__64518);

(invoc_array[(4)] = G__64519);

(invoc_array[(5)] = G__64520);

(invoc_array[(6)] = G__64521);

(invoc_array[(7)] = G__64522);

(invoc_array[(8)] = G__64523);

(invoc_array[(9)] = G__64524);

(invoc_array[(10)] = G__64525);

(invoc_array[(11)] = G__64526);

(invoc_array[(12)] = G__64527);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__64545,G__64546,G__64547,G__64548,G__64549,G__64550,G__64551,G__64552,G__64553,G__64554,G__64555,G__64556,G__64557,G__64558){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64545);

(invoc_array[(1)] = G__64546);

(invoc_array[(2)] = G__64547);

(invoc_array[(3)] = G__64548);

(invoc_array[(4)] = G__64549);

(invoc_array[(5)] = G__64550);

(invoc_array[(6)] = G__64551);

(invoc_array[(7)] = G__64552);

(invoc_array[(8)] = G__64553);

(invoc_array[(9)] = G__64554);

(invoc_array[(10)] = G__64555);

(invoc_array[(11)] = G__64556);

(invoc_array[(12)] = G__64557);

(invoc_array[(13)] = G__64558);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__64584,G__64585,G__64586,G__64587,G__64588,G__64589,G__64590,G__64591,G__64592,G__64593,G__64594,G__64595,G__64596,G__64597,G__64598){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64584);

(invoc_array[(1)] = G__64585);

(invoc_array[(2)] = G__64586);

(invoc_array[(3)] = G__64587);

(invoc_array[(4)] = G__64588);

(invoc_array[(5)] = G__64589);

(invoc_array[(6)] = G__64590);

(invoc_array[(7)] = G__64591);

(invoc_array[(8)] = G__64592);

(invoc_array[(9)] = G__64593);

(invoc_array[(10)] = G__64594);

(invoc_array[(11)] = G__64595);

(invoc_array[(12)] = G__64596);

(invoc_array[(13)] = G__64597);

(invoc_array[(14)] = G__64598);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__64617,G__64618,G__64619,G__64620,G__64621,G__64622,G__64623,G__64624,G__64625,G__64626,G__64627,G__64628,G__64629,G__64630,G__64631,G__64632){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64617);

(invoc_array[(1)] = G__64618);

(invoc_array[(2)] = G__64619);

(invoc_array[(3)] = G__64620);

(invoc_array[(4)] = G__64621);

(invoc_array[(5)] = G__64622);

(invoc_array[(6)] = G__64623);

(invoc_array[(7)] = G__64624);

(invoc_array[(8)] = G__64625);

(invoc_array[(9)] = G__64626);

(invoc_array[(10)] = G__64627);

(invoc_array[(11)] = G__64628);

(invoc_array[(12)] = G__64629);

(invoc_array[(13)] = G__64630);

(invoc_array[(14)] = G__64631);

(invoc_array[(15)] = G__64632);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__64643,G__64644,G__64645,G__64646,G__64647,G__64648,G__64649,G__64650,G__64651,G__64652,G__64653,G__64654,G__64655,G__64656,G__64657,G__64658,G__64659){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64643);

(invoc_array[(1)] = G__64644);

(invoc_array[(2)] = G__64645);

(invoc_array[(3)] = G__64646);

(invoc_array[(4)] = G__64647);

(invoc_array[(5)] = G__64648);

(invoc_array[(6)] = G__64649);

(invoc_array[(7)] = G__64650);

(invoc_array[(8)] = G__64651);

(invoc_array[(9)] = G__64652);

(invoc_array[(10)] = G__64653);

(invoc_array[(11)] = G__64654);

(invoc_array[(12)] = G__64655);

(invoc_array[(13)] = G__64656);

(invoc_array[(14)] = G__64657);

(invoc_array[(15)] = G__64658);

(invoc_array[(16)] = G__64659);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__64670,G__64671,G__64672,G__64673,G__64674,G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683,G__64684,G__64685,G__64686,G__64687){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64670);

(invoc_array[(1)] = G__64671);

(invoc_array[(2)] = G__64672);

(invoc_array[(3)] = G__64673);

(invoc_array[(4)] = G__64674);

(invoc_array[(5)] = G__64675);

(invoc_array[(6)] = G__64676);

(invoc_array[(7)] = G__64677);

(invoc_array[(8)] = G__64678);

(invoc_array[(9)] = G__64679);

(invoc_array[(10)] = G__64680);

(invoc_array[(11)] = G__64681);

(invoc_array[(12)] = G__64682);

(invoc_array[(13)] = G__64683);

(invoc_array[(14)] = G__64684);

(invoc_array[(15)] = G__64685);

(invoc_array[(16)] = G__64686);

(invoc_array[(17)] = G__64687);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__64703,G__64704,G__64705,G__64706,G__64707,G__64708,G__64709,G__64710,G__64711,G__64712,G__64713,G__64714,G__64715,G__64716,G__64717,G__64718,G__64719,G__64720,G__64721){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64703);

(invoc_array[(1)] = G__64704);

(invoc_array[(2)] = G__64705);

(invoc_array[(3)] = G__64706);

(invoc_array[(4)] = G__64707);

(invoc_array[(5)] = G__64708);

(invoc_array[(6)] = G__64709);

(invoc_array[(7)] = G__64710);

(invoc_array[(8)] = G__64711);

(invoc_array[(9)] = G__64712);

(invoc_array[(10)] = G__64713);

(invoc_array[(11)] = G__64714);

(invoc_array[(12)] = G__64715);

(invoc_array[(13)] = G__64716);

(invoc_array[(14)] = G__64717);

(invoc_array[(15)] = G__64718);

(invoc_array[(16)] = G__64719);

(invoc_array[(17)] = G__64720);

(invoc_array[(18)] = G__64721);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__64728,G__64729,G__64730,G__64731,G__64732,G__64733,G__64734,G__64735,G__64736,G__64737,G__64738,G__64739,G__64740,G__64741,G__64742,G__64743,G__64744,G__64745,G__64746,G__64747){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64728);

(invoc_array[(1)] = G__64729);

(invoc_array[(2)] = G__64730);

(invoc_array[(3)] = G__64731);

(invoc_array[(4)] = G__64732);

(invoc_array[(5)] = G__64733);

(invoc_array[(6)] = G__64734);

(invoc_array[(7)] = G__64735);

(invoc_array[(8)] = G__64736);

(invoc_array[(9)] = G__64737);

(invoc_array[(10)] = G__64738);

(invoc_array[(11)] = G__64739);

(invoc_array[(12)] = G__64740);

(invoc_array[(13)] = G__64741);

(invoc_array[(14)] = G__64742);

(invoc_array[(15)] = G__64743);

(invoc_array[(16)] = G__64744);

(invoc_array[(17)] = G__64745);

(invoc_array[(18)] = G__64746);

(invoc_array[(19)] = G__64747);

while(true){
var ret__62815__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__62815__auto__)){
continue;
} else {
return ret__62815__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64351)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__65246 = cljs.core.next(params__$1);
var G__65247 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__65248 = lets;
params__$1 = G__65246;
new_params = G__65247;
lets = G__65248;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__65249 = cljs.core.next(params__$1);
var G__65250 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__65251 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__65249;
new_params = G__65250;
lets = G__65251;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65252 = arguments.length;
var i__5770__auto___65253 = (0);
while(true){
if((i__5770__auto___65253 < len__5769__auto___65252)){
args__5775__auto__.push((arguments[i__5770__auto___65253]));

var G__65254 = (i__5770__auto___65253 + (1));
i__5770__auto___65253 = G__65254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__64762 = sig;
var seq__64763 = cljs.core.seq(vec__64762);
var first__64764 = cljs.core.first(seq__64763);
var seq__64763__$1 = cljs.core.next(seq__64763);
var params = first__64764;
var body = seq__64763__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq64759){
var G__64760 = cljs.core.first(seq64759);
var seq64759__$1 = cljs.core.next(seq64759);
var G__64761 = cljs.core.first(seq64759__$1);
var seq64759__$2 = cljs.core.next(seq64759__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64760,G__64761,seq64759__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__65261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__65262 = cljs.core.next(fdecls);
ret = G__65261;
fdecls = G__65262;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65267 = arguments.length;
var i__5770__auto___65268 = (0);
while(true){
if((i__5770__auto___65268 < len__5769__auto___65267)){
args__5775__auto__.push((arguments[i__5770__auto___65268]));

var G__65269 = (i__5770__auto___65268 + (1));
i__5770__auto___65268 = G__65269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5045__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq64818){
var G__64819 = cljs.core.first(seq64818);
var seq64818__$1 = cljs.core.next(seq64818);
var G__64820 = cljs.core.first(seq64818__$1);
var seq64818__$2 = cljs.core.next(seq64818__$1);
var G__64821 = cljs.core.first(seq64818__$2);
var seq64818__$3 = cljs.core.next(seq64818__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64819,G__64820,G__64821,seq64818__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65275 = arguments.length;
var i__5770__auto___65276 = (0);
while(true){
if((i__5770__auto___65276 < len__5769__auto___65275)){
args__5775__auto__.push((arguments[i__5770__auto___65276]));

var G__65277 = (i__5770__auto___65276 + (1));
i__5770__auto___65276 = G__65277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__65278 = cljs.core.cons(f,p);
var G__65279 = cljs.core.next(args__$1);
p = G__65278;
args__$1 = G__65279;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__65280 = cljs.core.cons(f,p);
var G__65281 = cljs.core.next(args__$1);
p = G__65280;
args__$1 = G__65281;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__65282 = cljs.core.next(fd);
fd = G__65282;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__65283 = cljs.core.next(fd);
fd = G__65283;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__65284 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__65285 = cljs.core.next(ds);
acc = G__65284;
ds = G__65285;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__65286 = cljs.core.next(p);
var G__65287 = cljs.core.cons(cljs.core.first(p),d);
p = G__65286;
d = G__65287;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq64901){
var G__64902 = cljs.core.first(seq64901);
var seq64901__$1 = cljs.core.next(seq64901);
var G__64903 = cljs.core.first(seq64901__$1);
var seq64901__$2 = cljs.core.next(seq64901__$1);
var G__64904 = cljs.core.first(seq64901__$2);
var seq64901__$3 = cljs.core.next(seq64901__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64902,G__64903,G__64904,seq64901__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
