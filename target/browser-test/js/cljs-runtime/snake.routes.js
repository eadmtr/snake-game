goog.provide('snake.routes');
if((typeof snake !== 'undefined') && (typeof snake.routes !== 'undefined') && (typeof snake.routes.panels !== 'undefined')){
} else {
snake.routes.panels = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__45044 = cljs.core.get_global_hierarchy;
return (fexpr__45044.cljs$core$IFn$_invoke$arity$0 ? fexpr__45044.cljs$core$IFn$_invoke$arity$0() : fexpr__45044.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("snake.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
snake.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
snake.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
snake.routes.parse = (function snake$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(snake.routes.routes),url);
});
snake.routes.url_for = (function snake$routes$url_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45063 = arguments.length;
var i__5770__auto___45064 = (0);
while(true){
if((i__5770__auto___45064 < len__5769__auto___45063)){
args__5775__auto__.push((arguments[i__5770__auto___45064]));

var G__45065 = (i__5770__auto___45064 + (1));
i__5770__auto___45064 = G__45065;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return snake.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(snake.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(snake.routes.routes)], null),args));
}));

(snake.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(snake.routes.url_for.cljs$lang$applyTo = (function (seq45047){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45047));
}));

snake.routes.dispatch = (function snake$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.events","set-active-panel","snake.events/set-active-panel",-1624526989),panel], null));
});
if((typeof snake !== 'undefined') && (typeof snake.routes !== 'undefined') && (typeof snake.routes.history !== 'undefined')){
} else {
snake.routes.history = pushy.core.pushy(snake.routes.dispatch,snake.routes.parse);
}
snake.routes.navigate_BANG_ = (function snake$routes$navigate_BANG_(handler){
return snake.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,snake.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
snake.routes.start_BANG_ = (function snake$routes$start_BANG_(){
return snake.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return snake.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=snake.routes.js.map
