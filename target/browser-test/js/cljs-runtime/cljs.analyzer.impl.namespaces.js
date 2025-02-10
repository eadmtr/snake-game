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
var vec__39314 = libspec;
var seq__39315 = cljs.core.seq(vec__39314);
var first__39316 = cljs.core.first(seq__39315);
var seq__39315__$1 = cljs.core.next(seq__39315);
var lib = first__39316;
var spec = seq__39315__$1;
var libspec__$1 = vec__39314;
var vec__39317 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39317,(0),null);
var vec__39320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39317,(1),null);
var seq__39321 = cljs.core.seq(vec__39320);
var first__39322 = cljs.core.first(seq__39321);
var seq__39321__$1 = cljs.core.next(seq__39321);
var _ = first__39322;
var first__39322__$1 = cljs.core.first(seq__39321__$1);
var seq__39321__$2 = cljs.core.next(seq__39321__$1);
var alias = first__39322__$1;
var post_spec = seq__39321__$2;
var post = vec__39320;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__39324 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39324,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__39324;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__39326 = cljs.core.seq(new_as_aliases);
var chunk__39327 = null;
var count__39328 = (0);
var i__39329 = (0);
while(true){
if((i__39329 < count__39328)){
var vec__39337 = chunk__39327.cljs$core$IIndexed$_nth$arity$2(null,i__39329);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39337,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39337,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39379 = seq__39326;
var G__39380 = chunk__39327;
var G__39381 = count__39328;
var G__39382 = (i__39329 + (1));
seq__39326 = G__39379;
chunk__39327 = G__39380;
count__39328 = G__39381;
i__39329 = G__39382;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39326);
if(temp__5804__auto__){
var seq__39326__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39326__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39326__$1);
var G__39384 = cljs.core.chunk_rest(seq__39326__$1);
var G__39385 = c__5568__auto__;
var G__39386 = cljs.core.count(c__5568__auto__);
var G__39387 = (0);
seq__39326 = G__39384;
chunk__39327 = G__39385;
count__39328 = G__39386;
i__39329 = G__39387;
continue;
} else {
var vec__39340 = cljs.core.first(seq__39326__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39340,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39340,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39390 = cljs.core.next(seq__39326__$1);
var G__39391 = null;
var G__39392 = (0);
var G__39393 = (0);
seq__39326 = G__39390;
chunk__39327 = G__39391;
count__39328 = G__39392;
i__39329 = G__39393;
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
var G__39353 = arguments.length;
switch (G__39353) {
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
var map__39357 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__39357__$1 = cljs.core.__destructure_map(map__39357);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__39359 = ret__$1;
var G__39359__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39359,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__39359);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39359__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__39359__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39365,p__39366){
var map__39368 = p__39365;
var map__39368__$1 = cljs.core.__destructure_map(map__39368);
var ret__$1 = map__39368__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39368__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__39370 = p__39366;
var seq__39371 = cljs.core.seq(vec__39370);
var first__39372 = cljs.core.first(seq__39371);
var seq__39371__$1 = cljs.core.next(seq__39371);
var spec_key = first__39372;
var libspecs = seq__39371__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__39373 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__39373__$1 = cljs.core.__destructure_map(map__39373);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__39375 = ret__$1;
var G__39375__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39375,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__39375);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39375__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__39375__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
