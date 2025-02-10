goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_77016 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_77016(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_77020 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_77020(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__75182 = coll;
var G__75183 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__75182,G__75183) : shadow.dom.lazy_native_coll_seq.call(null,G__75182,G__75183));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__75308 = arguments.length;
switch (G__75308) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__75322 = arguments.length;
switch (G__75322) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__75343 = arguments.length;
switch (G__75343) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__75385 = arguments.length;
switch (G__75385) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__75418 = arguments.length;
switch (G__75418) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__75457 = arguments.length;
switch (G__75457) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e75501){if((e75501 instanceof Object)){
var e = e75501;
return console.log("didnt support attachEvent",el,e);
} else {
throw e75501;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__75529 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__75530 = null;
var count__75531 = (0);
var i__75532 = (0);
while(true){
if((i__75532 < count__75531)){
var el = chunk__75530.cljs$core$IIndexed$_nth$arity$2(null,i__75532);
var handler_77139__$1 = ((function (seq__75529,chunk__75530,count__75531,i__75532,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__75529,chunk__75530,count__75531,i__75532,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_77139__$1);


var G__77142 = seq__75529;
var G__77143 = chunk__75530;
var G__77144 = count__75531;
var G__77145 = (i__75532 + (1));
seq__75529 = G__77142;
chunk__75530 = G__77143;
count__75531 = G__77144;
i__75532 = G__77145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__75529);
if(temp__5804__auto__){
var seq__75529__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75529__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__75529__$1);
var G__77150 = cljs.core.chunk_rest(seq__75529__$1);
var G__77151 = c__5568__auto__;
var G__77152 = cljs.core.count(c__5568__auto__);
var G__77153 = (0);
seq__75529 = G__77150;
chunk__75530 = G__77151;
count__75531 = G__77152;
i__75532 = G__77153;
continue;
} else {
var el = cljs.core.first(seq__75529__$1);
var handler_77154__$1 = ((function (seq__75529,chunk__75530,count__75531,i__75532,el,seq__75529__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__75529,chunk__75530,count__75531,i__75532,el,seq__75529__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_77154__$1);


var G__77159 = cljs.core.next(seq__75529__$1);
var G__77160 = null;
var G__77161 = (0);
var G__77162 = (0);
seq__75529 = G__77159;
chunk__75530 = G__77160;
count__75531 = G__77161;
i__75532 = G__77162;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__75559 = arguments.length;
switch (G__75559) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__75585 = cljs.core.seq(events);
var chunk__75586 = null;
var count__75587 = (0);
var i__75588 = (0);
while(true){
if((i__75588 < count__75587)){
var vec__75603 = chunk__75586.cljs$core$IIndexed$_nth$arity$2(null,i__75588);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75603,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__77184 = seq__75585;
var G__77185 = chunk__75586;
var G__77186 = count__75587;
var G__77187 = (i__75588 + (1));
seq__75585 = G__77184;
chunk__75586 = G__77185;
count__75587 = G__77186;
i__75588 = G__77187;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__75585);
if(temp__5804__auto__){
var seq__75585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75585__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__75585__$1);
var G__77189 = cljs.core.chunk_rest(seq__75585__$1);
var G__77190 = c__5568__auto__;
var G__77191 = cljs.core.count(c__5568__auto__);
var G__77192 = (0);
seq__75585 = G__77189;
chunk__75586 = G__77190;
count__75587 = G__77191;
i__75588 = G__77192;
continue;
} else {
var vec__75615 = cljs.core.first(seq__75585__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75615,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__77196 = cljs.core.next(seq__75585__$1);
var G__77197 = null;
var G__77198 = (0);
var G__77199 = (0);
seq__75585 = G__77196;
chunk__75586 = G__77197;
count__75587 = G__77198;
i__75588 = G__77199;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__75634 = cljs.core.seq(styles);
var chunk__75635 = null;
var count__75636 = (0);
var i__75637 = (0);
while(true){
if((i__75637 < count__75636)){
var vec__75661 = chunk__75635.cljs$core$IIndexed$_nth$arity$2(null,i__75637);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75661,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__77200 = seq__75634;
var G__77201 = chunk__75635;
var G__77202 = count__75636;
var G__77203 = (i__75637 + (1));
seq__75634 = G__77200;
chunk__75635 = G__77201;
count__75636 = G__77202;
i__75637 = G__77203;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__75634);
if(temp__5804__auto__){
var seq__75634__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75634__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__75634__$1);
var G__77206 = cljs.core.chunk_rest(seq__75634__$1);
var G__77207 = c__5568__auto__;
var G__77208 = cljs.core.count(c__5568__auto__);
var G__77209 = (0);
seq__75634 = G__77206;
chunk__75635 = G__77207;
count__75636 = G__77208;
i__75637 = G__77209;
continue;
} else {
var vec__75672 = cljs.core.first(seq__75634__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75672,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75672,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__77211 = cljs.core.next(seq__75634__$1);
var G__77212 = null;
var G__77213 = (0);
var G__77214 = (0);
seq__75634 = G__77211;
chunk__75635 = G__77212;
count__75636 = G__77213;
i__75637 = G__77214;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__75693_77219 = key;
var G__75693_77220__$1 = (((G__75693_77219 instanceof cljs.core.Keyword))?G__75693_77219.fqn:null);
switch (G__75693_77220__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_77228 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_77228,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_77228,"aria-");
}
})())){
el.setAttribute(ks_77228,value);
} else {
(el[ks_77228] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__75783){
var map__75785 = p__75783;
var map__75785__$1 = cljs.core.__destructure_map(map__75785);
var props = map__75785__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75785__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__75786 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75786,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75786,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75786,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__75792 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__75792,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__75792;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__75803 = arguments.length;
switch (G__75803) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__75867){
var vec__75875 = p__75867;
var seq__75876 = cljs.core.seq(vec__75875);
var first__75877 = cljs.core.first(seq__75876);
var seq__75876__$1 = cljs.core.next(seq__75876);
var nn = first__75877;
var first__75877__$1 = cljs.core.first(seq__75876__$1);
var seq__75876__$2 = cljs.core.next(seq__75876__$1);
var np = first__75877__$1;
var nc = seq__75876__$2;
var node = vec__75875;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75892 = nn;
var G__75893 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__75892,G__75893) : create_fn.call(null,G__75892,G__75893));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75904 = nn;
var G__75905 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__75904,G__75905) : create_fn.call(null,G__75904,G__75905));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__75925 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75925,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75925,(1),null);
var seq__75929_77247 = cljs.core.seq(node_children);
var chunk__75930_77248 = null;
var count__75931_77249 = (0);
var i__75932_77250 = (0);
while(true){
if((i__75932_77250 < count__75931_77249)){
var child_struct_77252 = chunk__75930_77248.cljs$core$IIndexed$_nth$arity$2(null,i__75932_77250);
var children_77253 = shadow.dom.dom_node(child_struct_77252);
if(cljs.core.seq_QMARK_(children_77253)){
var seq__76011_77254 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_77253));
var chunk__76013_77255 = null;
var count__76014_77256 = (0);
var i__76015_77257 = (0);
while(true){
if((i__76015_77257 < count__76014_77256)){
var child_77258 = chunk__76013_77255.cljs$core$IIndexed$_nth$arity$2(null,i__76015_77257);
if(cljs.core.truth_(child_77258)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_77258);


var G__77259 = seq__76011_77254;
var G__77260 = chunk__76013_77255;
var G__77261 = count__76014_77256;
var G__77262 = (i__76015_77257 + (1));
seq__76011_77254 = G__77259;
chunk__76013_77255 = G__77260;
count__76014_77256 = G__77261;
i__76015_77257 = G__77262;
continue;
} else {
var G__77263 = seq__76011_77254;
var G__77264 = chunk__76013_77255;
var G__77265 = count__76014_77256;
var G__77266 = (i__76015_77257 + (1));
seq__76011_77254 = G__77263;
chunk__76013_77255 = G__77264;
count__76014_77256 = G__77265;
i__76015_77257 = G__77266;
continue;
}
} else {
var temp__5804__auto___77267 = cljs.core.seq(seq__76011_77254);
if(temp__5804__auto___77267){
var seq__76011_77268__$1 = temp__5804__auto___77267;
if(cljs.core.chunked_seq_QMARK_(seq__76011_77268__$1)){
var c__5568__auto___77269 = cljs.core.chunk_first(seq__76011_77268__$1);
var G__77270 = cljs.core.chunk_rest(seq__76011_77268__$1);
var G__77271 = c__5568__auto___77269;
var G__77272 = cljs.core.count(c__5568__auto___77269);
var G__77273 = (0);
seq__76011_77254 = G__77270;
chunk__76013_77255 = G__77271;
count__76014_77256 = G__77272;
i__76015_77257 = G__77273;
continue;
} else {
var child_77274 = cljs.core.first(seq__76011_77268__$1);
if(cljs.core.truth_(child_77274)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_77274);


var G__77276 = cljs.core.next(seq__76011_77268__$1);
var G__77277 = null;
var G__77278 = (0);
var G__77279 = (0);
seq__76011_77254 = G__77276;
chunk__76013_77255 = G__77277;
count__76014_77256 = G__77278;
i__76015_77257 = G__77279;
continue;
} else {
var G__77280 = cljs.core.next(seq__76011_77268__$1);
var G__77281 = null;
var G__77282 = (0);
var G__77283 = (0);
seq__76011_77254 = G__77280;
chunk__76013_77255 = G__77281;
count__76014_77256 = G__77282;
i__76015_77257 = G__77283;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_77253);
}


var G__77284 = seq__75929_77247;
var G__77285 = chunk__75930_77248;
var G__77286 = count__75931_77249;
var G__77287 = (i__75932_77250 + (1));
seq__75929_77247 = G__77284;
chunk__75930_77248 = G__77285;
count__75931_77249 = G__77286;
i__75932_77250 = G__77287;
continue;
} else {
var temp__5804__auto___77288 = cljs.core.seq(seq__75929_77247);
if(temp__5804__auto___77288){
var seq__75929_77293__$1 = temp__5804__auto___77288;
if(cljs.core.chunked_seq_QMARK_(seq__75929_77293__$1)){
var c__5568__auto___77294 = cljs.core.chunk_first(seq__75929_77293__$1);
var G__77295 = cljs.core.chunk_rest(seq__75929_77293__$1);
var G__77296 = c__5568__auto___77294;
var G__77297 = cljs.core.count(c__5568__auto___77294);
var G__77298 = (0);
seq__75929_77247 = G__77295;
chunk__75930_77248 = G__77296;
count__75931_77249 = G__77297;
i__75932_77250 = G__77298;
continue;
} else {
var child_struct_77299 = cljs.core.first(seq__75929_77293__$1);
var children_77300 = shadow.dom.dom_node(child_struct_77299);
if(cljs.core.seq_QMARK_(children_77300)){
var seq__76045_77302 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_77300));
var chunk__76047_77303 = null;
var count__76048_77304 = (0);
var i__76049_77305 = (0);
while(true){
if((i__76049_77305 < count__76048_77304)){
var child_77307 = chunk__76047_77303.cljs$core$IIndexed$_nth$arity$2(null,i__76049_77305);
if(cljs.core.truth_(child_77307)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_77307);


var G__77309 = seq__76045_77302;
var G__77310 = chunk__76047_77303;
var G__77311 = count__76048_77304;
var G__77312 = (i__76049_77305 + (1));
seq__76045_77302 = G__77309;
chunk__76047_77303 = G__77310;
count__76048_77304 = G__77311;
i__76049_77305 = G__77312;
continue;
} else {
var G__77313 = seq__76045_77302;
var G__77314 = chunk__76047_77303;
var G__77315 = count__76048_77304;
var G__77316 = (i__76049_77305 + (1));
seq__76045_77302 = G__77313;
chunk__76047_77303 = G__77314;
count__76048_77304 = G__77315;
i__76049_77305 = G__77316;
continue;
}
} else {
var temp__5804__auto___77317__$1 = cljs.core.seq(seq__76045_77302);
if(temp__5804__auto___77317__$1){
var seq__76045_77319__$1 = temp__5804__auto___77317__$1;
if(cljs.core.chunked_seq_QMARK_(seq__76045_77319__$1)){
var c__5568__auto___77320 = cljs.core.chunk_first(seq__76045_77319__$1);
var G__77321 = cljs.core.chunk_rest(seq__76045_77319__$1);
var G__77322 = c__5568__auto___77320;
var G__77323 = cljs.core.count(c__5568__auto___77320);
var G__77324 = (0);
seq__76045_77302 = G__77321;
chunk__76047_77303 = G__77322;
count__76048_77304 = G__77323;
i__76049_77305 = G__77324;
continue;
} else {
var child_77325 = cljs.core.first(seq__76045_77319__$1);
if(cljs.core.truth_(child_77325)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_77325);


var G__77326 = cljs.core.next(seq__76045_77319__$1);
var G__77327 = null;
var G__77328 = (0);
var G__77329 = (0);
seq__76045_77302 = G__77326;
chunk__76047_77303 = G__77327;
count__76048_77304 = G__77328;
i__76049_77305 = G__77329;
continue;
} else {
var G__77331 = cljs.core.next(seq__76045_77319__$1);
var G__77332 = null;
var G__77333 = (0);
var G__77334 = (0);
seq__76045_77302 = G__77331;
chunk__76047_77303 = G__77332;
count__76048_77304 = G__77333;
i__76049_77305 = G__77334;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_77300);
}


var G__77335 = cljs.core.next(seq__75929_77293__$1);
var G__77336 = null;
var G__77337 = (0);
var G__77338 = (0);
seq__75929_77247 = G__77335;
chunk__75930_77248 = G__77336;
count__75931_77249 = G__77337;
i__75932_77250 = G__77338;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__76121 = cljs.core.seq(node);
var chunk__76122 = null;
var count__76123 = (0);
var i__76125 = (0);
while(true){
if((i__76125 < count__76123)){
var n = chunk__76122.cljs$core$IIndexed$_nth$arity$2(null,i__76125);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__77348 = seq__76121;
var G__77349 = chunk__76122;
var G__77350 = count__76123;
var G__77351 = (i__76125 + (1));
seq__76121 = G__77348;
chunk__76122 = G__77349;
count__76123 = G__77350;
i__76125 = G__77351;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76121);
if(temp__5804__auto__){
var seq__76121__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76121__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76121__$1);
var G__77353 = cljs.core.chunk_rest(seq__76121__$1);
var G__77354 = c__5568__auto__;
var G__77355 = cljs.core.count(c__5568__auto__);
var G__77356 = (0);
seq__76121 = G__77353;
chunk__76122 = G__77354;
count__76123 = G__77355;
i__76125 = G__77356;
continue;
} else {
var n = cljs.core.first(seq__76121__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__77357 = cljs.core.next(seq__76121__$1);
var G__77358 = null;
var G__77359 = (0);
var G__77360 = (0);
seq__76121 = G__77357;
chunk__76122 = G__77358;
count__76123 = G__77359;
i__76125 = G__77360;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__76160 = arguments.length;
switch (G__76160) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__76171 = arguments.length;
switch (G__76171) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__76205 = arguments.length;
switch (G__76205) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77374 = arguments.length;
var i__5770__auto___77375 = (0);
while(true){
if((i__5770__auto___77375 < len__5769__auto___77374)){
args__5775__auto__.push((arguments[i__5770__auto___77375]));

var G__77376 = (i__5770__auto___77375 + (1));
i__5770__auto___77375 = G__77376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__76269_77378 = cljs.core.seq(nodes);
var chunk__76270_77379 = null;
var count__76271_77380 = (0);
var i__76272_77381 = (0);
while(true){
if((i__76272_77381 < count__76271_77380)){
var node_77383 = chunk__76270_77379.cljs$core$IIndexed$_nth$arity$2(null,i__76272_77381);
fragment.appendChild(shadow.dom._to_dom(node_77383));


var G__77384 = seq__76269_77378;
var G__77385 = chunk__76270_77379;
var G__77386 = count__76271_77380;
var G__77387 = (i__76272_77381 + (1));
seq__76269_77378 = G__77384;
chunk__76270_77379 = G__77385;
count__76271_77380 = G__77386;
i__76272_77381 = G__77387;
continue;
} else {
var temp__5804__auto___77388 = cljs.core.seq(seq__76269_77378);
if(temp__5804__auto___77388){
var seq__76269_77389__$1 = temp__5804__auto___77388;
if(cljs.core.chunked_seq_QMARK_(seq__76269_77389__$1)){
var c__5568__auto___77390 = cljs.core.chunk_first(seq__76269_77389__$1);
var G__77391 = cljs.core.chunk_rest(seq__76269_77389__$1);
var G__77392 = c__5568__auto___77390;
var G__77393 = cljs.core.count(c__5568__auto___77390);
var G__77394 = (0);
seq__76269_77378 = G__77391;
chunk__76270_77379 = G__77392;
count__76271_77380 = G__77393;
i__76272_77381 = G__77394;
continue;
} else {
var node_77395 = cljs.core.first(seq__76269_77389__$1);
fragment.appendChild(shadow.dom._to_dom(node_77395));


var G__77396 = cljs.core.next(seq__76269_77389__$1);
var G__77397 = null;
var G__77398 = (0);
var G__77399 = (0);
seq__76269_77378 = G__77396;
chunk__76270_77379 = G__77397;
count__76271_77380 = G__77398;
i__76272_77381 = G__77399;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq76259){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76259));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__76308_77400 = cljs.core.seq(scripts);
var chunk__76309_77401 = null;
var count__76310_77402 = (0);
var i__76311_77403 = (0);
while(true){
if((i__76311_77403 < count__76310_77402)){
var vec__76354_77404 = chunk__76309_77401.cljs$core$IIndexed$_nth$arity$2(null,i__76311_77403);
var script_tag_77405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76354_77404,(0),null);
var script_body_77406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76354_77404,(1),null);
eval(script_body_77406);


var G__77407 = seq__76308_77400;
var G__77408 = chunk__76309_77401;
var G__77409 = count__76310_77402;
var G__77410 = (i__76311_77403 + (1));
seq__76308_77400 = G__77407;
chunk__76309_77401 = G__77408;
count__76310_77402 = G__77409;
i__76311_77403 = G__77410;
continue;
} else {
var temp__5804__auto___77411 = cljs.core.seq(seq__76308_77400);
if(temp__5804__auto___77411){
var seq__76308_77412__$1 = temp__5804__auto___77411;
if(cljs.core.chunked_seq_QMARK_(seq__76308_77412__$1)){
var c__5568__auto___77413 = cljs.core.chunk_first(seq__76308_77412__$1);
var G__77414 = cljs.core.chunk_rest(seq__76308_77412__$1);
var G__77415 = c__5568__auto___77413;
var G__77416 = cljs.core.count(c__5568__auto___77413);
var G__77417 = (0);
seq__76308_77400 = G__77414;
chunk__76309_77401 = G__77415;
count__76310_77402 = G__77416;
i__76311_77403 = G__77417;
continue;
} else {
var vec__76366_77418 = cljs.core.first(seq__76308_77412__$1);
var script_tag_77419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76366_77418,(0),null);
var script_body_77420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76366_77418,(1),null);
eval(script_body_77420);


var G__77422 = cljs.core.next(seq__76308_77412__$1);
var G__77423 = null;
var G__77424 = (0);
var G__77425 = (0);
seq__76308_77400 = G__77422;
chunk__76309_77401 = G__77423;
count__76310_77402 = G__77424;
i__76311_77403 = G__77425;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__76380){
var vec__76383 = p__76380;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76383,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76383,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__76399 = arguments.length;
switch (G__76399) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__76435 = cljs.core.seq(style_keys);
var chunk__76436 = null;
var count__76437 = (0);
var i__76438 = (0);
while(true){
if((i__76438 < count__76437)){
var it = chunk__76436.cljs$core$IIndexed$_nth$arity$2(null,i__76438);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__77442 = seq__76435;
var G__77443 = chunk__76436;
var G__77444 = count__76437;
var G__77445 = (i__76438 + (1));
seq__76435 = G__77442;
chunk__76436 = G__77443;
count__76437 = G__77444;
i__76438 = G__77445;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76435);
if(temp__5804__auto__){
var seq__76435__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76435__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76435__$1);
var G__77450 = cljs.core.chunk_rest(seq__76435__$1);
var G__77451 = c__5568__auto__;
var G__77452 = cljs.core.count(c__5568__auto__);
var G__77453 = (0);
seq__76435 = G__77450;
chunk__76436 = G__77451;
count__76437 = G__77452;
i__76438 = G__77453;
continue;
} else {
var it = cljs.core.first(seq__76435__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__77459 = cljs.core.next(seq__76435__$1);
var G__77460 = null;
var G__77461 = (0);
var G__77462 = (0);
seq__76435 = G__77459;
chunk__76436 = G__77460;
count__76437 = G__77461;
i__76438 = G__77462;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k76461,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__76475 = k76461;
var G__76475__$1 = (((G__76475 instanceof cljs.core.Keyword))?G__76475.fqn:null);
switch (G__76475__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k76461,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__76483){
var vec__76484 = p__76483;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76484,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76484,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__76460){
var self__ = this;
var G__76460__$1 = this;
return (new cljs.core.RecordIter((0),G__76460__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this76462,other76463){
var self__ = this;
var this76462__$1 = this;
return (((!((other76463 == null)))) && ((((this76462__$1.constructor === other76463.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76462__$1.x,other76463.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76462__$1.y,other76463.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76462__$1.__extmap,other76463.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k76461){
var self__ = this;
var this__5350__auto____$1 = this;
var G__76509 = k76461;
var G__76509__$1 = (((G__76509 instanceof cljs.core.Keyword))?G__76509.fqn:null);
switch (G__76509__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k76461);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__76460){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__76519 = cljs.core.keyword_identical_QMARK_;
var expr__76520 = k__5352__auto__;
if(cljs.core.truth_((pred__76519.cljs$core$IFn$_invoke$arity$2 ? pred__76519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__76520) : pred__76519.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__76520)))){
return (new shadow.dom.Coordinate(G__76460,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76519.cljs$core$IFn$_invoke$arity$2 ? pred__76519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__76520) : pred__76519.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__76520)))){
return (new shadow.dom.Coordinate(self__.x,G__76460,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__76460),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__76460){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__76460,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__76464){
var extmap__5385__auto__ = (function (){var G__76547 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__76464,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__76464)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__76547);
} else {
return G__76547;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__76464),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__76464),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k76558,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__76570 = k76558;
var G__76570__$1 = (((G__76570 instanceof cljs.core.Keyword))?G__76570.fqn:null);
switch (G__76570__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k76558,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__76571){
var vec__76572 = p__76571;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76572,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76572,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__76557){
var self__ = this;
var G__76557__$1 = this;
return (new cljs.core.RecordIter((0),G__76557__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this76559,other76560){
var self__ = this;
var this76559__$1 = this;
return (((!((other76560 == null)))) && ((((this76559__$1.constructor === other76560.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76559__$1.w,other76560.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76559__$1.h,other76560.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this76559__$1.__extmap,other76560.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k76558){
var self__ = this;
var this__5350__auto____$1 = this;
var G__76600 = k76558;
var G__76600__$1 = (((G__76600 instanceof cljs.core.Keyword))?G__76600.fqn:null);
switch (G__76600__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k76558);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__76557){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__76613 = cljs.core.keyword_identical_QMARK_;
var expr__76614 = k__5352__auto__;
if(cljs.core.truth_((pred__76613.cljs$core$IFn$_invoke$arity$2 ? pred__76613.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__76614) : pred__76613.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__76614)))){
return (new shadow.dom.Size(G__76557,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__76613.cljs$core$IFn$_invoke$arity$2 ? pred__76613.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__76614) : pred__76613.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__76614)))){
return (new shadow.dom.Size(self__.w,G__76557,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__76557),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__76557){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__76557,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__76565){
var extmap__5385__auto__ = (function (){var G__76619 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__76565,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__76565)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__76619);
} else {
return G__76619;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__76565),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__76565),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__77527 = (i + (1));
var G__77528 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__77527;
ret = G__77528;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__76647){
var vec__76648 = p__76647;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76648,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__76654 = arguments.length;
switch (G__76654) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__77540 = ps;
var G__77541 = (i + (1));
el__$1 = G__77540;
i = G__77541;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__76671 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76671,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76671,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76671,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__76678_77551 = cljs.core.seq(props);
var chunk__76679_77552 = null;
var count__76680_77553 = (0);
var i__76681_77554 = (0);
while(true){
if((i__76681_77554 < count__76680_77553)){
var vec__76695_77560 = chunk__76679_77552.cljs$core$IIndexed$_nth$arity$2(null,i__76681_77554);
var k_77561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76695_77560,(0),null);
var v_77562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76695_77560,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_77561);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_77561),v_77562);


var G__77566 = seq__76678_77551;
var G__77567 = chunk__76679_77552;
var G__77568 = count__76680_77553;
var G__77569 = (i__76681_77554 + (1));
seq__76678_77551 = G__77566;
chunk__76679_77552 = G__77567;
count__76680_77553 = G__77568;
i__76681_77554 = G__77569;
continue;
} else {
var temp__5804__auto___77570 = cljs.core.seq(seq__76678_77551);
if(temp__5804__auto___77570){
var seq__76678_77571__$1 = temp__5804__auto___77570;
if(cljs.core.chunked_seq_QMARK_(seq__76678_77571__$1)){
var c__5568__auto___77572 = cljs.core.chunk_first(seq__76678_77571__$1);
var G__77573 = cljs.core.chunk_rest(seq__76678_77571__$1);
var G__77574 = c__5568__auto___77572;
var G__77575 = cljs.core.count(c__5568__auto___77572);
var G__77576 = (0);
seq__76678_77551 = G__77573;
chunk__76679_77552 = G__77574;
count__76680_77553 = G__77575;
i__76681_77554 = G__77576;
continue;
} else {
var vec__76702_77577 = cljs.core.first(seq__76678_77571__$1);
var k_77578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76702_77577,(0),null);
var v_77579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76702_77577,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_77578);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_77578),v_77579);


var G__77581 = cljs.core.next(seq__76678_77571__$1);
var G__77582 = null;
var G__77583 = (0);
var G__77584 = (0);
seq__76678_77551 = G__77581;
chunk__76679_77552 = G__77582;
count__76680_77553 = G__77583;
i__76681_77554 = G__77584;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__76711 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76711,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76711,(1),null);
var seq__76714_77593 = cljs.core.seq(node_children);
var chunk__76716_77594 = null;
var count__76717_77595 = (0);
var i__76718_77596 = (0);
while(true){
if((i__76718_77596 < count__76717_77595)){
var child_struct_77597 = chunk__76716_77594.cljs$core$IIndexed$_nth$arity$2(null,i__76718_77596);
if((!((child_struct_77597 == null)))){
if(typeof child_struct_77597 === 'string'){
var text_77598 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_77598),child_struct_77597].join(''));
} else {
var children_77599 = shadow.dom.svg_node(child_struct_77597);
if(cljs.core.seq_QMARK_(children_77599)){
var seq__76802_77602 = cljs.core.seq(children_77599);
var chunk__76804_77603 = null;
var count__76805_77604 = (0);
var i__76806_77605 = (0);
while(true){
if((i__76806_77605 < count__76805_77604)){
var child_77612 = chunk__76804_77603.cljs$core$IIndexed$_nth$arity$2(null,i__76806_77605);
if(cljs.core.truth_(child_77612)){
node.appendChild(child_77612);


var G__77613 = seq__76802_77602;
var G__77614 = chunk__76804_77603;
var G__77615 = count__76805_77604;
var G__77616 = (i__76806_77605 + (1));
seq__76802_77602 = G__77613;
chunk__76804_77603 = G__77614;
count__76805_77604 = G__77615;
i__76806_77605 = G__77616;
continue;
} else {
var G__77617 = seq__76802_77602;
var G__77618 = chunk__76804_77603;
var G__77619 = count__76805_77604;
var G__77620 = (i__76806_77605 + (1));
seq__76802_77602 = G__77617;
chunk__76804_77603 = G__77618;
count__76805_77604 = G__77619;
i__76806_77605 = G__77620;
continue;
}
} else {
var temp__5804__auto___77621 = cljs.core.seq(seq__76802_77602);
if(temp__5804__auto___77621){
var seq__76802_77623__$1 = temp__5804__auto___77621;
if(cljs.core.chunked_seq_QMARK_(seq__76802_77623__$1)){
var c__5568__auto___77624 = cljs.core.chunk_first(seq__76802_77623__$1);
var G__77625 = cljs.core.chunk_rest(seq__76802_77623__$1);
var G__77626 = c__5568__auto___77624;
var G__77627 = cljs.core.count(c__5568__auto___77624);
var G__77628 = (0);
seq__76802_77602 = G__77625;
chunk__76804_77603 = G__77626;
count__76805_77604 = G__77627;
i__76806_77605 = G__77628;
continue;
} else {
var child_77629 = cljs.core.first(seq__76802_77623__$1);
if(cljs.core.truth_(child_77629)){
node.appendChild(child_77629);


var G__77633 = cljs.core.next(seq__76802_77623__$1);
var G__77634 = null;
var G__77635 = (0);
var G__77636 = (0);
seq__76802_77602 = G__77633;
chunk__76804_77603 = G__77634;
count__76805_77604 = G__77635;
i__76806_77605 = G__77636;
continue;
} else {
var G__77637 = cljs.core.next(seq__76802_77623__$1);
var G__77638 = null;
var G__77639 = (0);
var G__77640 = (0);
seq__76802_77602 = G__77637;
chunk__76804_77603 = G__77638;
count__76805_77604 = G__77639;
i__76806_77605 = G__77640;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_77599);
}
}


var G__77641 = seq__76714_77593;
var G__77642 = chunk__76716_77594;
var G__77643 = count__76717_77595;
var G__77644 = (i__76718_77596 + (1));
seq__76714_77593 = G__77641;
chunk__76716_77594 = G__77642;
count__76717_77595 = G__77643;
i__76718_77596 = G__77644;
continue;
} else {
var G__77645 = seq__76714_77593;
var G__77646 = chunk__76716_77594;
var G__77647 = count__76717_77595;
var G__77648 = (i__76718_77596 + (1));
seq__76714_77593 = G__77645;
chunk__76716_77594 = G__77646;
count__76717_77595 = G__77647;
i__76718_77596 = G__77648;
continue;
}
} else {
var temp__5804__auto___77651 = cljs.core.seq(seq__76714_77593);
if(temp__5804__auto___77651){
var seq__76714_77655__$1 = temp__5804__auto___77651;
if(cljs.core.chunked_seq_QMARK_(seq__76714_77655__$1)){
var c__5568__auto___77656 = cljs.core.chunk_first(seq__76714_77655__$1);
var G__77657 = cljs.core.chunk_rest(seq__76714_77655__$1);
var G__77658 = c__5568__auto___77656;
var G__77659 = cljs.core.count(c__5568__auto___77656);
var G__77660 = (0);
seq__76714_77593 = G__77657;
chunk__76716_77594 = G__77658;
count__76717_77595 = G__77659;
i__76718_77596 = G__77660;
continue;
} else {
var child_struct_77661 = cljs.core.first(seq__76714_77655__$1);
if((!((child_struct_77661 == null)))){
if(typeof child_struct_77661 === 'string'){
var text_77662 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_77662),child_struct_77661].join(''));
} else {
var children_77663 = shadow.dom.svg_node(child_struct_77661);
if(cljs.core.seq_QMARK_(children_77663)){
var seq__76835_77664 = cljs.core.seq(children_77663);
var chunk__76837_77665 = null;
var count__76838_77666 = (0);
var i__76839_77667 = (0);
while(true){
if((i__76839_77667 < count__76838_77666)){
var child_77668 = chunk__76837_77665.cljs$core$IIndexed$_nth$arity$2(null,i__76839_77667);
if(cljs.core.truth_(child_77668)){
node.appendChild(child_77668);


var G__77669 = seq__76835_77664;
var G__77670 = chunk__76837_77665;
var G__77671 = count__76838_77666;
var G__77672 = (i__76839_77667 + (1));
seq__76835_77664 = G__77669;
chunk__76837_77665 = G__77670;
count__76838_77666 = G__77671;
i__76839_77667 = G__77672;
continue;
} else {
var G__77676 = seq__76835_77664;
var G__77677 = chunk__76837_77665;
var G__77678 = count__76838_77666;
var G__77679 = (i__76839_77667 + (1));
seq__76835_77664 = G__77676;
chunk__76837_77665 = G__77677;
count__76838_77666 = G__77678;
i__76839_77667 = G__77679;
continue;
}
} else {
var temp__5804__auto___77683__$1 = cljs.core.seq(seq__76835_77664);
if(temp__5804__auto___77683__$1){
var seq__76835_77684__$1 = temp__5804__auto___77683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__76835_77684__$1)){
var c__5568__auto___77685 = cljs.core.chunk_first(seq__76835_77684__$1);
var G__77686 = cljs.core.chunk_rest(seq__76835_77684__$1);
var G__77687 = c__5568__auto___77685;
var G__77688 = cljs.core.count(c__5568__auto___77685);
var G__77689 = (0);
seq__76835_77664 = G__77686;
chunk__76837_77665 = G__77687;
count__76838_77666 = G__77688;
i__76839_77667 = G__77689;
continue;
} else {
var child_77690 = cljs.core.first(seq__76835_77684__$1);
if(cljs.core.truth_(child_77690)){
node.appendChild(child_77690);


var G__77691 = cljs.core.next(seq__76835_77684__$1);
var G__77692 = null;
var G__77693 = (0);
var G__77694 = (0);
seq__76835_77664 = G__77691;
chunk__76837_77665 = G__77692;
count__76838_77666 = G__77693;
i__76839_77667 = G__77694;
continue;
} else {
var G__77695 = cljs.core.next(seq__76835_77684__$1);
var G__77696 = null;
var G__77697 = (0);
var G__77698 = (0);
seq__76835_77664 = G__77695;
chunk__76837_77665 = G__77696;
count__76838_77666 = G__77697;
i__76839_77667 = G__77698;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_77663);
}
}


var G__77699 = cljs.core.next(seq__76714_77655__$1);
var G__77700 = null;
var G__77701 = (0);
var G__77702 = (0);
seq__76714_77593 = G__77699;
chunk__76716_77594 = G__77700;
count__76717_77595 = G__77701;
i__76718_77596 = G__77702;
continue;
} else {
var G__77703 = cljs.core.next(seq__76714_77655__$1);
var G__77704 = null;
var G__77705 = (0);
var G__77706 = (0);
seq__76714_77593 = G__77703;
chunk__76716_77594 = G__77704;
count__76717_77595 = G__77705;
i__76718_77596 = G__77706;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77711 = arguments.length;
var i__5770__auto___77713 = (0);
while(true){
if((i__5770__auto___77713 < len__5769__auto___77711)){
args__5775__auto__.push((arguments[i__5770__auto___77713]));

var G__77718 = (i__5770__auto___77713 + (1));
i__5770__auto___77713 = G__77718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq76904){
var G__76905 = cljs.core.first(seq76904);
var seq76904__$1 = cljs.core.next(seq76904);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76905,seq76904__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__76929 = arguments.length;
switch (G__76929) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__21535__auto___77721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_76956){
var state_val_76958 = (state_76956[(1)]);
if((state_val_76958 === (1))){
var state_76956__$1 = state_76956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76956__$1,(2),once_or_cleanup);
} else {
if((state_val_76958 === (2))){
var inst_76953 = (state_76956[(2)]);
var inst_76954 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_76956__$1 = (function (){var statearr_76969 = state_76956;
(statearr_76969[(7)] = inst_76953);

return statearr_76969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76956__$1,inst_76954);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__21348__auto__ = null;
var shadow$dom$state_machine__21348__auto____0 = (function (){
var statearr_76973 = [null,null,null,null,null,null,null,null];
(statearr_76973[(0)] = shadow$dom$state_machine__21348__auto__);

(statearr_76973[(1)] = (1));

return statearr_76973;
});
var shadow$dom$state_machine__21348__auto____1 = (function (state_76956){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_76956);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e76975){var ex__21351__auto__ = e76975;
var statearr_76976_77726 = state_76956;
(statearr_76976_77726[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_76956[(4)]))){
var statearr_76979_77727 = state_76956;
(statearr_76979_77727[(1)] = cljs.core.first((state_76956[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77728 = state_76956;
state_76956 = G__77728;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
shadow$dom$state_machine__21348__auto__ = function(state_76956){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__21348__auto____0.call(this);
case 1:
return shadow$dom$state_machine__21348__auto____1.call(this,state_76956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__21348__auto____0;
shadow$dom$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__21348__auto____1;
return shadow$dom$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_76986 = f__21537__auto__();
(statearr_76986[(6)] = c__21535__auto___77721);

return statearr_76986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
