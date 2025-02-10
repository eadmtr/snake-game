goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39486 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39487 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39487);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__39488 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39489 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39489);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39488);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39486);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
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
reagent.dom.render = (function reagent$dom$render(var_args){
var G__39532 = arguments.length;
switch (G__39532) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__39563 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
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
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__39632_39767 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__39633_39768 = null;
var count__39634_39769 = (0);
var i__39635_39770 = (0);
while(true){
if((i__39635_39770 < count__39634_39769)){
var vec__39685_39771 = chunk__39633_39768.cljs$core$IIndexed$_nth$arity$2(null,i__39635_39770);
var container_39772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39685_39771,(0),null);
var comp_39773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39685_39771,(1),null);
reagent.dom.re_render_component(comp_39773,container_39772);


var G__39774 = seq__39632_39767;
var G__39775 = chunk__39633_39768;
var G__39776 = count__39634_39769;
var G__39777 = (i__39635_39770 + (1));
seq__39632_39767 = G__39774;
chunk__39633_39768 = G__39775;
count__39634_39769 = G__39776;
i__39635_39770 = G__39777;
continue;
} else {
var temp__5804__auto___39778 = cljs.core.seq(seq__39632_39767);
if(temp__5804__auto___39778){
var seq__39632_39779__$1 = temp__5804__auto___39778;
if(cljs.core.chunked_seq_QMARK_(seq__39632_39779__$1)){
var c__5568__auto___39780 = cljs.core.chunk_first(seq__39632_39779__$1);
var G__39781 = cljs.core.chunk_rest(seq__39632_39779__$1);
var G__39782 = c__5568__auto___39780;
var G__39783 = cljs.core.count(c__5568__auto___39780);
var G__39784 = (0);
seq__39632_39767 = G__39781;
chunk__39633_39768 = G__39782;
count__39634_39769 = G__39783;
i__39635_39770 = G__39784;
continue;
} else {
var vec__39709_39785 = cljs.core.first(seq__39632_39779__$1);
var container_39786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39709_39785,(0),null);
var comp_39787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39709_39785,(1),null);
reagent.dom.re_render_component(comp_39787,container_39786);


var G__39788 = cljs.core.next(seq__39632_39779__$1);
var G__39789 = null;
var G__39790 = (0);
var G__39791 = (0);
seq__39632_39767 = G__39788;
chunk__39633_39768 = G__39789;
count__39634_39769 = G__39790;
i__39635_39770 = G__39791;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
