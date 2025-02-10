goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__76510 = libspec;
var seq__76511 = cljs.core.seq(vec__76510);
var first__76512 = cljs.core.first(seq__76511);
var seq__76511__$1 = cljs.core.next(seq__76511);
var lib = first__76512;
var spec = seq__76511__$1;
var libspec__$1 = vec__76510;
var vec__76513 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76513,(0),null);
var vec__76516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76513,(1),null);
var seq__76517 = cljs.core.seq(vec__76516);
var first__76518 = cljs.core.first(seq__76517);
var seq__76517__$1 = cljs.core.next(seq__76517);
var _ = first__76518;
var first__76518__$1 = cljs.core.first(seq__76517__$1);
var seq__76517__$2 = cljs.core.next(seq__76517__$1);
var alias = first__76518__$1;
var post_spec = seq__76517__$2;
var post = vec__76516;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__76522 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76522,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__76522;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__76532 = cljs.core.seq(new_as_aliases);
var chunk__76533 = null;
var count__76534 = (0);
var i__76535 = (0);
while(true){
if((i__76535 < count__76534)){
var vec__76554 = chunk__76533.cljs$core$IIndexed$_nth$arity$2(null,i__76535);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76554,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76554,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__76601 = seq__76532;
var G__76602 = chunk__76533;
var G__76603 = count__76534;
var G__76604 = (i__76535 + (1));
seq__76532 = G__76601;
chunk__76533 = G__76602;
count__76534 = G__76603;
i__76535 = G__76604;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76532);
if(temp__5804__auto__){
var seq__76532__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76532__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76532__$1);
var G__76605 = cljs.core.chunk_rest(seq__76532__$1);
var G__76606 = c__5568__auto__;
var G__76607 = cljs.core.count(c__5568__auto__);
var G__76608 = (0);
seq__76532 = G__76605;
chunk__76533 = G__76606;
count__76534 = G__76607;
i__76535 = G__76608;
continue;
} else {
var vec__76561 = cljs.core.first(seq__76532__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76561,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76561,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__76609 = cljs.core.next(seq__76532__$1);
var G__76610 = null;
var G__76611 = (0);
var G__76612 = (0);
seq__76532 = G__76609;
chunk__76533 = G__76610;
count__76534 = G__76611;
i__76535 = G__76612;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__76568 = arguments.length;
switch (G__76568) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__76575 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__76575__$1 = cljs.core.__destructure_map(map__76575);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76575__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76575__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__76576 = ret__$1;
var G__76576__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__76576,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__76576);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__76576__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__76576__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__76577,p__76578){
var map__76579 = p__76577;
var map__76579__$1 = cljs.core.__destructure_map(map__76579);
var ret__$1 = map__76579__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76579__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__76580 = p__76578;
var seq__76581 = cljs.core.seq(vec__76580);
var first__76582 = cljs.core.first(seq__76581);
var seq__76581__$1 = cljs.core.next(seq__76581);
var spec_key = first__76582;
var libspecs = seq__76581__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__76583 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__76583__$1 = cljs.core.__destructure_map(map__76583);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76583__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76583__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__76584 = ret__$1;
var G__76584__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__76584,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__76584);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__76584__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__76584__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
