goog.provide('day8.re_frame_10x');
/**
 * @define {boolean}
 */
day8.re_frame_10x.debug_QMARK_ = goog.define("day8.re_frame_10x.debug_QMARK_",false);
day8.re_frame_10x.resizer_style = (function day8$re_frame_10x$resizer_style(draggable_area){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (draggable_area / (2)))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null);
});
day8.re_frame_10x.ease_transition = "left 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out";
day8.re_frame_10x.devtools_outer = (function day8$re_frame_10x$devtools_outer(opts){
var handle_keys_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","handle-keys?","day8.re-frame-10x.panels.settings.subs/handle-keys?",980361219)], null));
var panel_width_PERCENT_ = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","panel-width%","day8.re-frame-10x.panels.settings.subs/panel-width%",1546996863)], null));
var showing_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","show-panel?","day8.re-frame-10x.panels.settings.subs/show-panel?",-1305358312)], null));
var dragging_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var window_width = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.innerWidth);
var panel_key = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","key-bindings","day8.re-frame-10x.panels.settings.subs/key-bindings",1115746214),new cljs.core.Keyword(null,"show-panel","show-panel",1804906140)], null));
var ready_to_bind_key = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ready-to-bind-key","day8.re-frame-10x.panels.settings.subs/ready-to-bind-key",-1320760670)], null));
var handle_window_resize = (function (){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","window-width","day8.re-frame-10x.panels.settings.events/window-width",-1771897871),window.innerWidth], null));

return (function (_){
var window_width_val = window.innerWidth;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","window-width","day8.re-frame-10x.panels.settings.events/window-width",-1771897871),window_width_val], null));

return cljs.core.reset_BANG_(window_width,window_width_val);
});
})()
;
var handle_keys = (function (e){
var tag_name = e.target.tagName;
var modifier_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Alt",null,"Control",null,"Shift",null], null), null),e.key);
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(entering_input_QMARK_){
return null;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(ready_to_bind_key);
if(cljs.core.truth_(and__5043__auto__)){
return (!(modifier_QMARK_));
} else {
return and__5043__auto__;
}
})())){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","bind-key","day8.re-frame-10x.panels.settings.events/bind-key",1967914547),cljs.core.deref(ready_to_bind_key),day8.re_frame_10x.tools.datafy.keyboard_event(e)], null));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","ready-to-bind-key","day8.re-frame-10x.panels.settings.events/ready-to-bind-key",861370876),null], null));

return e.preventDefault();
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(handle_keys_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(panel_key),day8.re_frame_10x.tools.datafy.keyboard_event(e));
} else {
return and__5043__auto__;
}
})())){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","user-toggle-panel","day8.re-frame-10x.panels.settings.events/user-toggle-panel",719619220)], null));

return e.preventDefault();
} else {
return null;
}
}
}
});
var handle_mousemove = (function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var x = e.clientX;
var new_window_width = window.innerWidth;
e.preventDefault();

var width_PERCENT__76276 = ((new_window_width - x) / new_window_width);
if((width_PERCENT__76276 <= 0.9)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","panel-width%","day8.re-frame-10x.panels.settings.events/panel-width%",-569115915),width_PERCENT__76276], null));
} else {
}

return cljs.core.reset_BANG_(window_width,new_window_width);
} else {
return null;
}
});
var handle_mouse_up = (function (_){
return cljs.core.reset_BANG_(dragging_QMARK_,false);
});
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
window.addEventListener("keydown",handle_keys);

window.addEventListener("mousemove",handle_mousemove);

window.addEventListener("mouseup",handle_mouse_up);

return window.addEventListener("resize",handle_window_resize);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
window.removeEventListener("keydown",handle_keys);

window.removeEventListener("mousemove",handle_mousemove);

window.removeEventListener("mouseup",handle_mouse_up);

return window.removeEventListener("resize",handle_window_resize);
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var draggable_area = (10);
var left = (cljs.core.truth_(cljs.core.deref(showing_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((1) - cljs.core.deref(panel_width_PERCENT_)))),"%"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(window_width)),"px"].join(''));
var transition = (cljs.core.truth_(cljs.core.deref(dragging_QMARK_))?"":day8.re_frame_10x.ease_transition);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99999999)], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * cljs.core.deref(panel_width_PERCENT_))),"%"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgba(0, 0, 0, 0.3) 0px 0px 4px",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"transition","transition",765692007),transition], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-resizer","div.panel-resizer",1762174164),(cljs.core.truth_(cljs.core.deref(showing_QMARK_))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.resizer_style(draggable_area),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
return cljs.core.reset_BANG_(dragging_QMARK_,true);
})], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.navigation.views.devtools_inner,opts], null)], null)], null)], null);
})], null));
});
day8.re_frame_10x.traced_sub = (function day8$re_frame_10x$traced_sub(epoch_id,reaction_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),epoch_id,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039),reaction_id,new cljs.core.Keyword(null,"value","value",305978217)], null));
});
day8.re_frame_10x.traced_result = (function day8$re_frame_10x$traced_result(trace_id,fragment_id){
var trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__76176_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trace_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__76176_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all","all",892129742)], null))));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142),fragment_id,new cljs.core.Keyword(null,"result","result",1415092211)], null));
});
day8.re_frame_10x.factory_reset_BANG_ = (function day8$re_frame_10x$factory_reset_BANG_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","factory-reset","day8.re-frame-10x.panels.settings.events/factory-reset",880771998)], null));
});
goog.exportSymbol('day8.re_frame_10x.factory_reset_BANG_', day8.re_frame_10x.factory_reset_BANG_);
day8.re_frame_10x.show_panel_BANG_ = (function day8$re_frame_10x$show_panel_BANG_(show_panel_QMARK_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-panel?","day8.re-frame-10x.panels.settings.events/show-panel?",1007877818),show_panel_QMARK_], null));
});
goog.exportSymbol('day8.re_frame_10x.show_panel_BANG_', day8.re_frame_10x.show_panel_BANG_);
day8.re_frame_10x.handle_keys_BANG_ = (function day8$re_frame_10x$handle_keys_BANG_(handle_keys_QMARK_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","handle-keys?","day8.re-frame-10x.panels.settings.events/handle-keys?",-1135701923),handle_keys_QMARK_], null));
});
goog.exportSymbol('day8.re_frame_10x.handle_keys_BANG_', day8.re_frame_10x.handle_keys_BANG_);
day8.re_frame_10x.create_shadow_root = (function day8$re_frame_10x$create_shadow_root(){
return day8.re_frame_10x.tools.shadow_dom.shadow_root(document,"--re-frame-10x--");
});
day8.re_frame_10x.create_style_container = (function day8$re_frame_10x$create_style_container(shadow_root){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.react.with_style_container,day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$1(shadow_root),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.devtools_outer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),day8.re_frame_10x.debug_QMARK_], null)], null)], null);
});
/**
 * Sets up any initial state that needs to be there for tracing. Does not enable tracing.
 */
day8.re_frame_10x.patch_BANG_ = (function day8$re_frame_10x$patch_BANG_(){
day8.reagent.impl.component.patch_custom_wrapper();

day8.reagent.impl.component.patch_wrap_funs();

return day8.reagent.impl.batching.patch_next_tick();
});
/**
 * @define {number}
 */
day8.re_frame_10x.history_size = goog.define("day8.re_frame_10x.history_size",(25));
/**
 * @define {string}
 */
day8.re_frame_10x.ignored_events = goog.define("day8.re_frame_10x.ignored_events","{}");
/**
 * @define {string}
 */
day8.re_frame_10x.hidden_namespaces = goog.define("day8.re_frame_10x.hidden_namespaces","[re-com.box re-com.input-text]");
/**
 * @define {boolean}
 */
day8.re_frame_10x.time_travel_QMARK_ = goog.define("day8.re_frame_10x.time_travel_QMARK_",true);
/**
 * @define {string}
 */
day8.re_frame_10x.ignored_libs = goog.define("day8.re_frame_10x.ignored_libs","[:reagent :re-frame]");
/**
 * @define {string}
 */
day8.re_frame_10x.ns_aliases = goog.define("day8.re_frame_10x.ns_aliases","{long-namespace ln}");
/**
 * @define {string}
 */
day8.re_frame_10x.trace_when = goog.define("day8.re_frame_10x.trace_when",":panel");
day8.re_frame_10x.project_config = (function (){var read = day8.re_frame_10x.tools.reader.edn.read_string_maybe;
var keep_vals = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second));
var view = (function (p1__76225_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),p1__76225_SHARP_,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76225_SHARP_)], null);
});
var alias = (function (p__76232){
var vec__76233 = p__76232;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76233,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-full","ns-full",225339386),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"ns-alias","ns-alias",1705921737),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,keep_vals,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"debug?","debug?",-1831756173),day8.re_frame_10x.debug_QMARK_,new cljs.core.Keyword(null,"retained-epochs","retained-epochs",1350238734),day8.re_frame_10x.history_size,new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589),(function (){var G__76239 = day8.re_frame_10x.ignored_events;
var G__76239__$1 = (((G__76239 == null))?null:(read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__76239) : read.call(null,G__76239)));
if((G__76239__$1 == null)){
return null;
} else {
return day8.re_frame_10x.tools.coll.sortable_uuid_map(G__76239__$1);
}
})(),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599),(function (){var G__76243 = day8.re_frame_10x.hidden_namespaces;
var G__76243__$1 = (((G__76243 == null))?null:(read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__76243) : read.call(null,G__76243)));
var G__76243__$2 = (((G__76243__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(view,G__76243__$1));
if((G__76243__$2 == null)){
return null;
} else {
return day8.re_frame_10x.tools.coll.sortable_uuid_map(G__76243__$2);
}
})(),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462),day8.re_frame_10x.time_travel_QMARK_,new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092),(function (){var G__76244 = day8.re_frame_10x.ignored_libs;
var G__76244__$1 = (((G__76244 == null))?null:(read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__76244) : read.call(null,G__76244)));
if((G__76244__$1 == null)){
return null;
} else {
return day8.re_frame_10x.tools.coll.pred_map(G__76244__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),null,new cljs.core.Keyword(null,"reagent","reagent",2131627322),null], null), null));
}
})(),new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821),(function (){var G__76246 = day8.re_frame_10x.ns_aliases;
var G__76246__$1 = (((G__76246 == null))?null:(read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__76246) : read.call(null,G__76246)));
var G__76246__$2 = (((G__76246__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(alias,G__76246__$1));
if((G__76246__$2 == null)){
return null;
} else {
return day8.re_frame_10x.tools.coll.sortable_uuid_map(G__76246__$2);
}
})(),new cljs.core.Keyword(null,"trace-when","trace-when",-1902271347),(function (){var G__76248 = day8.re_frame_10x.trace_when;
var G__76248__$1 = (((G__76248 == null))?null:(read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__76248) : read.call(null,G__76248)));
if((G__76248__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__76248__$1);
}
})()], null));
})();

//# sourceMappingURL=day8.re_frame_10x.js.map
