goog.provide('rewrite_clj.zip.editz');
/**
 * Return `zloc` with the current node replaced by `item`.
 *   If `item` is not already a node, an attempt will be made to coerce it to one.
 * 
 *   Use [[replace*]] for non-coercing version of replace.
 */
rewrite_clj.zip.editz.replace = (function rewrite_clj$zip$editz$replace(zloc,item){
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.node.protocols.coerce(item));
});
/**
 * Create s-expression from node, apply the function and create
 * node from the result.
 */
rewrite_clj.zip.editz.node_editor = (function rewrite_clj$zip$editz$node_editor(opts){
return (function (node,f){
return rewrite_clj.node.protocols.coerce((function (){var G__60415 = rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$2(node,opts);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60415) : f.call(null,G__60415));
})());
});
});
/**
 * Return `zloc` with the current node replaced with the result of:
 * 
 * `(apply f (s-expr current-node) args)`
 * 
 *   The result of `f`, if not already a node, will be coerced to a node if possible.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 * 
 *   Use [[edit*]] for non-coercing version of edit.
 */
rewrite_clj.zip.editz.edit = (function rewrite_clj$zip$editz$edit(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60533 = arguments.length;
var i__5770__auto___60534 = (0);
while(true){
if((i__5770__auto___60534 < len__5769__auto___60533)){
args__5775__auto__.push((arguments[i__5770__auto___60534]));

var G__60535 = (i__5770__auto___60534 + (1));
i__5770__auto___60534 = G__60535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic(zloc,rewrite_clj.zip.editz.node_editor(rewrite_clj.zip.options.get_opts(zloc)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__60418_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__60418_SHARP_,args);
})], 0));
}));

(rewrite_clj.zip.editz.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.zip.editz.edit.cljs$lang$applyTo = (function (seq60421){
var G__60423 = cljs.core.first(seq60421);
var seq60421__$1 = cljs.core.next(seq60421);
var G__60424 = cljs.core.first(seq60421__$1);
var seq60421__$2 = cljs.core.next(seq60421__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60423,G__60424,seq60421__$2);
}));

/**
 * Return zipper with the children of the current node in `zloc` merged into itself.
 * (akin to Clojure's `unquote-splicing` macro: `~@...`).
 * - if the node is not one that can have children, no modification will
 *   be performed.
 * - if the node has no or only whitespace children, it will be removed.
 * - otherwise, splicing will be performed, moving the zipper to the first
 *   non-whitespace spliced child node.
 * 
 *   For example, given `[[1 2 3] 4 5 6]`, if zloc is located at vector `[1 2 3]`, a splice will result in raising the vector's children up `[1 2 3 4 5 6]` and locating the zipper at node `1`.
 */
rewrite_clj.zip.editz.splice = (function rewrite_clj$zip$editz$splice(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
var temp__5802__auto__ = cljs.core.seq(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.whitespace.whitespace_QMARK_,cljs.core.reverse(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.whitespace.whitespace_QMARK_,rewrite_clj.custom_zipper.core.children(zloc)))));
if(temp__5802__auto__){
var children = temp__5802__auto__;
var loc = rewrite_clj.custom_zipper.utils.remove_and_move_right(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_clj.custom_zipper.core.insert_right,zloc,children));
var or__5045__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(loc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return loc;
}
} else {
return rewrite_clj.zip.removez.remove(zloc);
}
} else {
return zloc;
}
});
rewrite_clj.zip.editz.edit_token = (function rewrite_clj$zip$editz$edit_token(zloc,str_fn){
var e = rewrite_clj.zip.base.sexpr(zloc);
var e_SINGLEQUOTE_ = ((typeof e === 'string')?(str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(e) : str_fn.call(null,e)):(((e instanceof cljs.core.Keyword))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__60448 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__60448) : str_fn.call(null,G__60448));
})()):(((e instanceof cljs.core.Symbol))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__60450 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__60450) : str_fn.call(null,G__60450));
})()):null)));
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1(e_SINGLEQUOTE_));
});
rewrite_clj.zip.editz.edit_multi_line = (function rewrite_clj$zip$editz$edit_multi_line(zloc,line_fn){
var n = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(rewrite_clj.custom_zipper.core.node(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(line_fn,cljs.core.vec));
return rewrite_clj.custom_zipper.core.replace(zloc,n);
});
/**
 * Return zipper with the current node in `zloc` prefixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, first line is prefixed.
 */
rewrite_clj.zip.editz.prefix = (function rewrite_clj$zip$editz$prefix(zloc,s){
var G__60467 = rewrite_clj.zip.base.tag(zloc);
var G__60467__$1 = (((G__60467 instanceof cljs.core.Keyword))?G__60467.fqn:null);
switch (G__60467__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token(zloc,(function (p1__60462_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60462_SHARP_)].join('');
}));

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(function (p1__60463_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60463_SHARP_)].join('');
}));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60467__$1)].join('')));

}
});
/**
 * Return zipper with the current node in `zloc` suffixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, last line is suffixed.
 */
rewrite_clj.zip.editz.suffix = (function rewrite_clj$zip$editz$suffix(zloc,s){
var G__60494 = rewrite_clj.zip.base.tag(zloc);
var G__60494__$1 = (((G__60494 instanceof cljs.core.Keyword))?G__60494.fqn:null);
switch (G__60494__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token(zloc,(function (p1__60483_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60483_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(lines),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60494__$1)].join('')));

}
});

//# sourceMappingURL=rewrite_clj.zip.editz.js.map
