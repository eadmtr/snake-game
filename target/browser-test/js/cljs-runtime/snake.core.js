goog.provide('snake.core');
snake.core.dev_setup = (function snake$core$dev_setup(){
if(snake.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
snake.core.mount_root = (function snake$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.main_panel], null),root_el);
});
snake.core.init = (function snake$core$init(){
snake.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.events","initialize-db","snake.events/initialize-db",-1534678235)], null));

snake.core.dev_setup();

return snake.core.mount_root();
});

//# sourceMappingURL=snake.core.js.map
