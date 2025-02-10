goog.provide('re_com.util');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function re_com$util$fmap_$_iter__76769(s__76770){
return (new cljs.core.LazySeq(null,(function (){
var s__76770__$1 = s__76770;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76770__$1);
if(temp__5804__auto__){
var s__76770__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76770__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__76770__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__76772 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__76771 = (0);
while(true){
if((i__76771 < size__5522__auto__)){
var vec__76781 = cljs.core._nth(c__5521__auto__,i__76771);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76781,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76781,(1),null);
cljs.core.chunk_append(b__76772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__76998 = (i__76771 + (1));
i__76771 = G__76998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76772),re_com$util$fmap_$_iter__76769(cljs.core.chunk_rest(s__76770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76772),null);
}
} else {
var vec__76790 = cljs.core.first(s__76770__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76790,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76790,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_com$util$fmap_$_iter__76769(cljs.core.rest(s__76770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___76999 = arguments.length;
var i__5770__auto___77000 = (0);
while(true){
if((i__5770__auto___77000 < len__5769__auto___76999)){
args__5775__auto__.push((arguments[i__5770__auto___77000]));

var G__77001 = (i__5770__auto___77000 + (1));
i__5770__auto___77000 = G__77001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
}));

(re_com.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.deep_merge.cljs$lang$applyTo = (function (seq76798){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76798));
}));

/**
 * Only assoc-in if no value exists at ks
 */
re_com.util.assoc_in_if_empty = (function re_com$util$assoc_in_if_empty(m,ks,v){
return cljs.core.assoc_in(m,ks,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,v));
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count(s) < len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(len,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero(cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77008 = arguments.length;
var i__5770__auto___77009 = (0);
while(true){
if((i__5770__auto___77009 < len__5769__auto___77008)){
args__5775__auto__.push((arguments[i__5770__auto___77009]));

var G__77010 = (i__5770__auto___77009 + (1));
i__5770__auto___77009 = G__77010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
}));

(re_com.util.px.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.util.px.cljs$lang$applyTo = (function (seq76857){
var G__76858 = cljs.core.first(seq76857);
var seq76857__$1 = cljs.core.next(seq76857);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76858,seq76857__$1);
}));

/**
 * takes n numbers (could also be strings) and converts them to a space separated px string
 *   e.g. (px-n 10 2 30 4) => '10px 2px 30px 4px' for use in :padding, :margin etc.
 *   Most useful when the args are calculations
 *   e.g. (px-n top-margin (inc h-width) (- top-margin 5) (dec h-width))
 *   Note: Doesn't support :negative like px above but it will work with negative numbers
 */
re_com.util.px_n = (function re_com$util$px_n(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77012 = arguments.length;
var i__5770__auto___77014 = (0);
while(true){
if((i__5770__auto___77014 < len__5769__auto___77012)){
args__5775__auto__.push((arguments[i__5770__auto___77014]));

var G__77015 = (i__5770__auto___77014 + (1));
i__5770__auto___77014 = G__77015;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76879_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76879_SHARP_),"px"].join('');
}),vals));
}));

(re_com.util.px_n.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.px_n.cljs$lang$applyTo = (function (seq76881){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76881));
}));

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
re_com.util.pluralize = (function re_com$util$pluralize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77017 = arguments.length;
var i__5770__auto___77018 = (0);
while(true){
if((i__5770__auto___77018 < len__5769__auto___77017)){
args__5775__auto__.push((arguments[i__5770__auto___77018]));

var G__77019 = (i__5770__auto___77018 + (1));
i__5770__auto___77018 = G__77019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__76907){
var vec__76908 = p__76907;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76908,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(re_com.util.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.pluralize.cljs$lang$applyTo = (function (seq76901){
var G__76902 = cljs.core.first(seq76901);
var seq76901__$1 = cljs.core.next(seq76901);
var G__76903 = cljs.core.first(seq76901__$1);
var seq76901__$2 = cljs.core.next(seq76901__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76902,G__76903,seq76901__$2);
}));

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(n + (1)),cljs.core.count(v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,(0),index),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77028 = arguments.length;
var i__5770__auto___77029 = (0);
while(true){
if((i__5770__auto___77029 < len__5769__auto___77028)){
args__5775__auto__.push((arguments[i__5770__auto___77029]));

var G__77031 = (i__5770__auto___77029 + (1));
i__5770__auto___77029 = G__77031;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__76933){
var map__76934 = p__76933;
var map__76934__$1 = cljs.core.__destructure_map(map__76934);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76934__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = (function (index,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)),id)){
return index;
} else {
return null;
}
});
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(index_fn,v));
}));

(re_com.util.position_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.position_for_id.cljs$lang$applyTo = (function (seq76924){
var G__76925 = cljs.core.first(seq76924);
var seq76924__$1 = cljs.core.next(seq76924);
var G__76926 = cljs.core.first(seq76924__$1);
var seq76924__$2 = cljs.core.next(seq76924__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76925,G__76926,seq76924__$2);
}));

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77034 = arguments.length;
var i__5770__auto___77035 = (0);
while(true){
if((i__5770__auto___77035 < len__5769__auto___77034)){
args__5775__auto__.push((arguments[i__5770__auto___77035]));

var G__77036 = (i__5770__auto___77035 + (1));
i__5770__auto___77035 = G__77036;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__76949){
var map__76951 = p__76949;
var map__76951__$1 = cljs.core.__destructure_map(map__76951);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76951__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__76942_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__76942_SHARP_) : id_fn.call(null,p1__76942_SHARP_)),id);
}),v));
}));

(re_com.util.item_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.item_for_id.cljs$lang$applyTo = (function (seq76944){
var G__76945 = cljs.core.first(seq76944);
var seq76944__$1 = cljs.core.next(seq76944);
var G__76946 = cljs.core.first(seq76944__$1);
var seq76944__$2 = cljs.core.next(seq76944__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76945,G__76946,seq76944__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77039 = arguments.length;
var i__5770__auto___77040 = (0);
while(true){
if((i__5770__auto___77040 < len__5769__auto___77039)){
args__5775__auto__.push((arguments[i__5770__auto___77040]));

var G__77041 = (i__5770__auto___77040 + (1));
i__5770__auto___77040 = G__77041;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__76971){
var map__76972 = p__76971;
var map__76972__$1 = cljs.core.__destructure_map(map__76972);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76972__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv((function (p1__76964_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__76964_SHARP_) : id_fn.call(null,p1__76964_SHARP_)),id);
}),v);
}));

(re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq76965){
var G__76966 = cljs.core.first(seq76965);
var seq76965__$1 = cljs.core.next(seq76965);
var G__76967 = cljs.core.first(seq76965__$1);
var seq76965__$2 = cljs.core.next(seq76965__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76966,G__76967,seq76965__$2);
}));

/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count(coll) - (1));
var f = (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,index)], null);
});
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__77070 = current_node.parentNode;
var G__77071 = (sum_scroll_left + current_node.scrollLeft);
var G__77072 = (sum_scroll_top + current_node.scrollTop);
current_node = G__77070;
sum_scroll_left = G__77071;
sum_scroll_top = G__77072;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=re_com.util.js.map
