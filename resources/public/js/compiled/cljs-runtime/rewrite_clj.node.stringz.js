goog.provide('rewrite_clj.node.stringz');
rewrite_clj.node.stringz.wrap_string = (function rewrite_clj$node$stringz$wrap_string(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
rewrite_clj.node.stringz.join_lines = (function rewrite_clj$node$stringz$join_lines(lines){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.stringz.StringNode = (function (lines,__meta,__extmap,__hash){
this.lines = lines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.stringz.StringNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k57043,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__57091 = k57043;
var G__57091__$1 = (((G__57091 instanceof cljs.core.Keyword))?G__57091.fqn:null);
switch (G__57091__$1) {
case "lines":
return self__.lines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57043,else__5346__auto__);

}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__57105){
var vec__57107 = p__57105;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57107,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57107,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.stringz.StringNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null))], null),self__.__extmap));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57042){
var self__ = this;
var G__57042__$1 = this;
return (new cljs.core.RecordIter((0),G__57042__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1538615006 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57044,other57045){
var self__ = this;
var this57044__$1 = this;
return (((!((other57045 == null)))) && ((((this57044__$1.constructor === other57045.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57044__$1.lines,other57045.lines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57044__$1.__extmap,other57045.__extmap)))))));
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
if(cljs.core.next(self__.lines)){
return new cljs.core.Keyword(null,"multi-line","multi-line",240640676);
} else {
return new cljs.core.Keyword(null,"token","token",-1211463215);
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"string","string",-1989541586);
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.stringz.join_lines(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.edn.read_string,rewrite_clj.node.stringz.wrap_string),self__.lines));
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((2) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.lines)));
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.stringz.wrap_string(rewrite_clj.node.stringz.join_lines(self__.lines));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k57043){
var self__ = this;
var this__5350__auto____$1 = this;
var G__57148 = k57043;
var G__57148__$1 = (((G__57148 instanceof cljs.core.Keyword))?G__57148.fqn:null);
switch (G__57148__$1) {
case "lines":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57043);

}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__57042){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__57154 = cljs.core.keyword_identical_QMARK_;
var expr__57155 = k__5352__auto__;
if(cljs.core.truth_((pred__57154.cljs$core$IFn$_invoke$arity$2 ? pred__57154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lines","lines",-700165781),expr__57155) : pred__57154.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781),expr__57155)))){
return (new rewrite_clj.node.stringz.StringNode(G__57042,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__57042),null));
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines,null))], null),self__.__extmap));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__57042){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,G__57042,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.stringz.StringNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lines","lines",940365746,null)], null);
}));

(rewrite_clj.node.stringz.StringNode.cljs$lang$type = true);

(rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.stringz/StringNode",null,(1),null));
}));

(rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.stringz/StringNode");
}));

/**
 * Positional factory function for rewrite-clj.node.stringz/StringNode.
 */
rewrite_clj.node.stringz.__GT_StringNode = (function rewrite_clj$node$stringz$__GT_StringNode(lines){
return (new rewrite_clj.node.stringz.StringNode(lines,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.stringz/StringNode, taking a map of keywords to field values.
 */
rewrite_clj.node.stringz.map__GT_StringNode = (function rewrite_clj$node$stringz$map__GT_StringNode(G__57050){
var extmap__5385__auto__ = (function (){var G__57192 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57050,new cljs.core.Keyword(null,"lines","lines",-700165781));
if(cljs.core.record_QMARK_(G__57050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57192);
} else {
return G__57192;
}
})();
return (new rewrite_clj.node.stringz.StringNode(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(G__57050),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.stringz.StringNode);
/**
 * Create node representing a string value where `lines` can be a sequence of strings or a single string.
 * 
 *   When `lines` is a sequence, the resulting node `tag` will be `:multi-line`, otherwise `:token`.
 * 
 *   `:multi-line` refers to a single string in your source that appears over multiple lines, for example:
 * 
 *   ```Clojure
 *   (def s "foo
 *          bar
 *            baz")
 *   ```
 * 
 *   It does not apply to a string that appears on a single line that includes escaped newlines, for example:
 * 
 *   ```Clojure
 *   (def s "foo\nbar\n\baz")
 *   ```
 * 
 *   Naive examples (see example on escaping below):
 * 
 *   ```Clojure
 *   (require '[rewrite-clj.node :as n])
 * 
 *   (-> (n/string-node "hello")
 *    n/string)
 *   ;; => "\"hello\""
 * 
 *   (-> (n/string-node ["line1" "" "line3"])
 *     n/string)
 *   ;; => "\"line1\n\nline3\""
 *   ```
 * 
 *   This function was originally written to serve the rewrite-clj parser.
 *   Escaping and wrapping expectations are non-obvious.
 *   - characters within strings are assumed to be escaped
 *   - but the string should not wrapped with `\"`
 * 
 *   Here's an example of conforming to these expectations for a string that has escape sequences.
 *   (Best to view this on cljdoc, docstring string escaping is confusing).
 * 
 *   ```Clojure
 *   (require '[clojure.string :as string])
 * 
 *   (defn pr-str-unwrapped [s]
 *  (apply str (-> s pr-str next butlast)))
 * 
 *   (-> "hey \" man"
 *    pr-str-unwrapped
 *    n/string-node
 *    n/string)
 *   ;; => "\"hey \\\" man\""
 *   ```
 * 
 *   To construct strings appearing on a single line, consider [[token-node]].
 *   It will handle escaping for you.
 */
rewrite_clj.node.stringz.string_node = (function rewrite_clj$node$stringz$string_node(lines){
if(typeof lines === 'string'){
return rewrite_clj.node.stringz.__GT_StringNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines], null));
} else {
return rewrite_clj.node.stringz.__GT_StringNode(lines);
}
});

//# sourceMappingURL=rewrite_clj.node.stringz.js.map
