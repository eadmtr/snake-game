goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__53401 = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__53402 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__53402);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__53403 = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__53404 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__53404);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots,cljs.core.assoc,container,comp);

day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__53403);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__53401);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$render(var_args){
var G__53411 = arguments.length;
switch (G__53411) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.flush_BANG_();

var vec__53413 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53413,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53413,(1),null);
var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.flush_BANG_();

var seq__53416_53435 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots));
var chunk__53417_53436 = null;
var count__53418_53437 = (0);
var i__53419_53438 = (0);
while(true){
if((i__53419_53438 < count__53418_53437)){
var vec__53427_53439 = chunk__53417_53436.cljs$core$IIndexed$_nth$arity$2(null,i__53419_53438);
var container_53440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53427_53439,(0),null);
var comp_53441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53427_53439,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.re_render_component(comp_53441,container_53440);


var G__53442 = seq__53416_53435;
var G__53443 = chunk__53417_53436;
var G__53444 = count__53418_53437;
var G__53445 = (i__53419_53438 + (1));
seq__53416_53435 = G__53442;
chunk__53417_53436 = G__53443;
count__53418_53437 = G__53444;
i__53419_53438 = G__53445;
continue;
} else {
var temp__5804__auto___53447 = cljs.core.seq(seq__53416_53435);
if(temp__5804__auto___53447){
var seq__53416_53449__$1 = temp__5804__auto___53447;
if(cljs.core.chunked_seq_QMARK_(seq__53416_53449__$1)){
var c__5568__auto___53450 = cljs.core.chunk_first(seq__53416_53449__$1);
var G__53451 = cljs.core.chunk_rest(seq__53416_53449__$1);
var G__53452 = c__5568__auto___53450;
var G__53453 = cljs.core.count(c__5568__auto___53450);
var G__53454 = (0);
seq__53416_53435 = G__53451;
chunk__53417_53436 = G__53452;
count__53418_53437 = G__53453;
i__53419_53438 = G__53454;
continue;
} else {
var vec__53430_53455 = cljs.core.first(seq__53416_53449__$1);
var container_53456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53430_53455,(0),null);
var comp_53457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53430_53455,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.re_render_component(comp_53457,container_53456);


var G__53458 = cljs.core.next(seq__53416_53449__$1);
var G__53459 = null;
var G__53460 = (0);
var G__53461 = (0);
seq__53416_53435 = G__53458;
chunk__53417_53436 = G__53459;
count__53418_53437 = G__53460;
i__53419_53438 = G__53461;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.js.map
