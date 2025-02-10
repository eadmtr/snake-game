goog.provide('snake.styles');
/**
 * @param {...*} var_args
 */
snake.styles.linear_gradient = (function() { 
var snake$styles$linear_gradient__delegate = function (args__27970__auto__){
return (new garden.types.CSSFunction("linear-gradient",cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() {
var G__82355 = null;
var G__82355__4 = (function (c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
var G__82355__5 = (function (dir,c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
G__82355 = function(dir,c1,p1,c2,p2){
switch(arguments.length){
case 4:
return G__82355__4.call(this,dir,c1,p1,c2);
case 5:
return G__82355__5.call(this,dir,c1,p1,c2,p2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82355.cljs$core$IFn$_invoke$arity$4 = G__82355__4;
G__82355.cljs$core$IFn$_invoke$arity$5 = G__82355__5;
return G__82355;
})()
,args__27970__auto__),null,null,null));
};
var snake$styles$linear_gradient = function (var_args){
var args__27970__auto__ = null;
if (arguments.length > 0) {
var G__82356__i = 0, G__82356__a = new Array(arguments.length -  0);
while (G__82356__i < G__82356__a.length) {G__82356__a[G__82356__i] = arguments[G__82356__i + 0]; ++G__82356__i;}
  args__27970__auto__ = new cljs.core.IndexedSeq(G__82356__a,0,null);
} 
return snake$styles$linear_gradient__delegate.call(this,args__27970__auto__);};
snake$styles$linear_gradient.cljs$lang$maxFixedArity = 0;
snake$styles$linear_gradient.cljs$lang$applyTo = (function (arglist__82357){
var args__27970__auto__ = cljs.core.seq(arglist__82357);
return snake$styles$linear_gradient__delegate(args__27970__auto__);
});
snake$styles$linear_gradient.cljs$core$IFn$_invoke$arity$variadic = snake$styles$linear_gradient__delegate;
return snake$styles$linear_gradient;
})()
;
snake.styles.defaults_factory$ = (function snake$styles$defaults_factory$(style_name82346,params82347){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),style_name82346,new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"#ddd","#ddd",-1886570548),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),snake.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),snake.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0)),snake.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0))], null),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null)], null),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null)], null)], null)], null)], null))], null);
});

var factory_name82348_82358 = spade.util.factory__GT_name(snake.styles.defaults_factory$);
snake.styles.defaults = spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"global","global",93595047),factory_name82348_82358,snake.styles.defaults_factory$,null);
snake.styles.level1_factory$ = (function snake$styles$level1_factory$(style_name82350,params82351){
var style82353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name82350)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(style82353),new cljs.core.Keyword(null,"name","name",1843675177),style_name82350], null);
});

var factory_name82352_82360 = spade.util.factory__GT_name(snake.styles.level1_factory$);
snake.styles.level1 = (function snake$styles$level1(){
return spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name82352_82360,snake.styles.level1_factory$,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=snake.styles.js.map
