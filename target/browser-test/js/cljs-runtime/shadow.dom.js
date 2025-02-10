goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37049 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_37049(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37063 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_37063(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35221 = coll;
var G__35222 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35221,G__35222) : shadow.dom.lazy_native_coll_seq.call(null,G__35221,G__35222));
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
var G__35241 = arguments.length;
switch (G__35241) {
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
var G__35248 = arguments.length;
switch (G__35248) {
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
var G__35253 = arguments.length;
switch (G__35253) {
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
var G__35271 = arguments.length;
switch (G__35271) {
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
var G__35290 = arguments.length;
switch (G__35290) {
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
var G__35305 = arguments.length;
switch (G__35305) {
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
}catch (e35325){if((e35325 instanceof Object)){
var e = e35325;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35325;

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
var seq__35338 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35339 = null;
var count__35340 = (0);
var i__35341 = (0);
while(true){
if((i__35341 < count__35340)){
var el = chunk__35339.cljs$core$IIndexed$_nth$arity$2(null,i__35341);
var handler_37109__$1 = ((function (seq__35338,chunk__35339,count__35340,i__35341,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35338,chunk__35339,count__35340,i__35341,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37109__$1);


var G__37110 = seq__35338;
var G__37111 = chunk__35339;
var G__37112 = count__35340;
var G__37113 = (i__35341 + (1));
seq__35338 = G__37110;
chunk__35339 = G__37111;
count__35340 = G__37112;
i__35341 = G__37113;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35338);
if(temp__5804__auto__){
var seq__35338__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35338__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35338__$1);
var G__37114 = cljs.core.chunk_rest(seq__35338__$1);
var G__37115 = c__5568__auto__;
var G__37116 = cljs.core.count(c__5568__auto__);
var G__37117 = (0);
seq__35338 = G__37114;
chunk__35339 = G__37115;
count__35340 = G__37116;
i__35341 = G__37117;
continue;
} else {
var el = cljs.core.first(seq__35338__$1);
var handler_37118__$1 = ((function (seq__35338,chunk__35339,count__35340,i__35341,el,seq__35338__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35338,chunk__35339,count__35340,i__35341,el,seq__35338__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37118__$1);


var G__37119 = cljs.core.next(seq__35338__$1);
var G__37120 = null;
var G__37121 = (0);
var G__37122 = (0);
seq__35338 = G__37119;
chunk__35339 = G__37120;
count__35340 = G__37121;
i__35341 = G__37122;
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
var G__35396 = arguments.length;
switch (G__35396) {
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
var seq__35423 = cljs.core.seq(events);
var chunk__35424 = null;
var count__35425 = (0);
var i__35426 = (0);
while(true){
if((i__35426 < count__35425)){
var vec__35450 = chunk__35424.cljs$core$IIndexed$_nth$arity$2(null,i__35426);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37128 = seq__35423;
var G__37129 = chunk__35424;
var G__37130 = count__35425;
var G__37131 = (i__35426 + (1));
seq__35423 = G__37128;
chunk__35424 = G__37129;
count__35425 = G__37130;
i__35426 = G__37131;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35423);
if(temp__5804__auto__){
var seq__35423__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35423__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35423__$1);
var G__37132 = cljs.core.chunk_rest(seq__35423__$1);
var G__37133 = c__5568__auto__;
var G__37134 = cljs.core.count(c__5568__auto__);
var G__37135 = (0);
seq__35423 = G__37132;
chunk__35424 = G__37133;
count__35425 = G__37134;
i__35426 = G__37135;
continue;
} else {
var vec__35456 = cljs.core.first(seq__35423__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37136 = cljs.core.next(seq__35423__$1);
var G__37137 = null;
var G__37138 = (0);
var G__37139 = (0);
seq__35423 = G__37136;
chunk__35424 = G__37137;
count__35425 = G__37138;
i__35426 = G__37139;
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
var seq__35471 = cljs.core.seq(styles);
var chunk__35472 = null;
var count__35473 = (0);
var i__35474 = (0);
while(true){
if((i__35474 < count__35473)){
var vec__35509 = chunk__35472.cljs$core$IIndexed$_nth$arity$2(null,i__35474);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35509,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37143 = seq__35471;
var G__37144 = chunk__35472;
var G__37145 = count__35473;
var G__37146 = (i__35474 + (1));
seq__35471 = G__37143;
chunk__35472 = G__37144;
count__35473 = G__37145;
i__35474 = G__37146;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35471);
if(temp__5804__auto__){
var seq__35471__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35471__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35471__$1);
var G__37147 = cljs.core.chunk_rest(seq__35471__$1);
var G__37148 = c__5568__auto__;
var G__37149 = cljs.core.count(c__5568__auto__);
var G__37150 = (0);
seq__35471 = G__37147;
chunk__35472 = G__37148;
count__35473 = G__37149;
i__35474 = G__37150;
continue;
} else {
var vec__35516 = cljs.core.first(seq__35471__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37151 = cljs.core.next(seq__35471__$1);
var G__37152 = null;
var G__37153 = (0);
var G__37154 = (0);
seq__35471 = G__37151;
chunk__35472 = G__37152;
count__35473 = G__37153;
i__35474 = G__37154;
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
var G__35532_37158 = key;
var G__35532_37159__$1 = (((G__35532_37158 instanceof cljs.core.Keyword))?G__35532_37158.fqn:null);
switch (G__35532_37159__$1) {
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
var ks_37161 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37161,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37161,"aria-");
}
})())){
el.setAttribute(ks_37161,value);
} else {
(el[ks_37161] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35585){
var map__35586 = p__35585;
var map__35586__$1 = cljs.core.__destructure_map(map__35586);
var props = map__35586__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35597 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35609 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35609,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35609;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35620 = arguments.length;
switch (G__35620) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35658){
var vec__35663 = p__35658;
var seq__35664 = cljs.core.seq(vec__35663);
var first__35665 = cljs.core.first(seq__35664);
var seq__35664__$1 = cljs.core.next(seq__35664);
var nn = first__35665;
var first__35665__$1 = cljs.core.first(seq__35664__$1);
var seq__35664__$2 = cljs.core.next(seq__35664__$1);
var np = first__35665__$1;
var nc = seq__35664__$2;
var node = vec__35663;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35679 = nn;
var G__35680 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35679,G__35680) : create_fn.call(null,G__35679,G__35680));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35683 = nn;
var G__35684 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35683,G__35684) : create_fn.call(null,G__35683,G__35684));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35693 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693,(1),null);
var seq__35696_37193 = cljs.core.seq(node_children);
var chunk__35697_37194 = null;
var count__35698_37195 = (0);
var i__35699_37196 = (0);
while(true){
if((i__35699_37196 < count__35698_37195)){
var child_struct_37197 = chunk__35697_37194.cljs$core$IIndexed$_nth$arity$2(null,i__35699_37196);
var children_37198 = shadow.dom.dom_node(child_struct_37197);
if(cljs.core.seq_QMARK_(children_37198)){
var seq__35802_37199 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37198));
var chunk__35804_37200 = null;
var count__35805_37201 = (0);
var i__35806_37202 = (0);
while(true){
if((i__35806_37202 < count__35805_37201)){
var child_37203 = chunk__35804_37200.cljs$core$IIndexed$_nth$arity$2(null,i__35806_37202);
if(cljs.core.truth_(child_37203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37203);


var G__37204 = seq__35802_37199;
var G__37205 = chunk__35804_37200;
var G__37206 = count__35805_37201;
var G__37207 = (i__35806_37202 + (1));
seq__35802_37199 = G__37204;
chunk__35804_37200 = G__37205;
count__35805_37201 = G__37206;
i__35806_37202 = G__37207;
continue;
} else {
var G__37208 = seq__35802_37199;
var G__37209 = chunk__35804_37200;
var G__37210 = count__35805_37201;
var G__37211 = (i__35806_37202 + (1));
seq__35802_37199 = G__37208;
chunk__35804_37200 = G__37209;
count__35805_37201 = G__37210;
i__35806_37202 = G__37211;
continue;
}
} else {
var temp__5804__auto___37212 = cljs.core.seq(seq__35802_37199);
if(temp__5804__auto___37212){
var seq__35802_37213__$1 = temp__5804__auto___37212;
if(cljs.core.chunked_seq_QMARK_(seq__35802_37213__$1)){
var c__5568__auto___37214 = cljs.core.chunk_first(seq__35802_37213__$1);
var G__37215 = cljs.core.chunk_rest(seq__35802_37213__$1);
var G__37216 = c__5568__auto___37214;
var G__37217 = cljs.core.count(c__5568__auto___37214);
var G__37218 = (0);
seq__35802_37199 = G__37215;
chunk__35804_37200 = G__37216;
count__35805_37201 = G__37217;
i__35806_37202 = G__37218;
continue;
} else {
var child_37219 = cljs.core.first(seq__35802_37213__$1);
if(cljs.core.truth_(child_37219)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37219);


var G__37220 = cljs.core.next(seq__35802_37213__$1);
var G__37221 = null;
var G__37222 = (0);
var G__37223 = (0);
seq__35802_37199 = G__37220;
chunk__35804_37200 = G__37221;
count__35805_37201 = G__37222;
i__35806_37202 = G__37223;
continue;
} else {
var G__37224 = cljs.core.next(seq__35802_37213__$1);
var G__37225 = null;
var G__37226 = (0);
var G__37227 = (0);
seq__35802_37199 = G__37224;
chunk__35804_37200 = G__37225;
count__35805_37201 = G__37226;
i__35806_37202 = G__37227;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37198);
}


var G__37228 = seq__35696_37193;
var G__37229 = chunk__35697_37194;
var G__37230 = count__35698_37195;
var G__37231 = (i__35699_37196 + (1));
seq__35696_37193 = G__37228;
chunk__35697_37194 = G__37229;
count__35698_37195 = G__37230;
i__35699_37196 = G__37231;
continue;
} else {
var temp__5804__auto___37232 = cljs.core.seq(seq__35696_37193);
if(temp__5804__auto___37232){
var seq__35696_37233__$1 = temp__5804__auto___37232;
if(cljs.core.chunked_seq_QMARK_(seq__35696_37233__$1)){
var c__5568__auto___37234 = cljs.core.chunk_first(seq__35696_37233__$1);
var G__37235 = cljs.core.chunk_rest(seq__35696_37233__$1);
var G__37236 = c__5568__auto___37234;
var G__37237 = cljs.core.count(c__5568__auto___37234);
var G__37238 = (0);
seq__35696_37193 = G__37235;
chunk__35697_37194 = G__37236;
count__35698_37195 = G__37237;
i__35699_37196 = G__37238;
continue;
} else {
var child_struct_37243 = cljs.core.first(seq__35696_37233__$1);
var children_37244 = shadow.dom.dom_node(child_struct_37243);
if(cljs.core.seq_QMARK_(children_37244)){
var seq__35837_37245 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37244));
var chunk__35839_37246 = null;
var count__35840_37247 = (0);
var i__35842_37248 = (0);
while(true){
if((i__35842_37248 < count__35840_37247)){
var child_37249 = chunk__35839_37246.cljs$core$IIndexed$_nth$arity$2(null,i__35842_37248);
if(cljs.core.truth_(child_37249)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37249);


var G__37250 = seq__35837_37245;
var G__37251 = chunk__35839_37246;
var G__37252 = count__35840_37247;
var G__37253 = (i__35842_37248 + (1));
seq__35837_37245 = G__37250;
chunk__35839_37246 = G__37251;
count__35840_37247 = G__37252;
i__35842_37248 = G__37253;
continue;
} else {
var G__37255 = seq__35837_37245;
var G__37256 = chunk__35839_37246;
var G__37257 = count__35840_37247;
var G__37258 = (i__35842_37248 + (1));
seq__35837_37245 = G__37255;
chunk__35839_37246 = G__37256;
count__35840_37247 = G__37257;
i__35842_37248 = G__37258;
continue;
}
} else {
var temp__5804__auto___37259__$1 = cljs.core.seq(seq__35837_37245);
if(temp__5804__auto___37259__$1){
var seq__35837_37260__$1 = temp__5804__auto___37259__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35837_37260__$1)){
var c__5568__auto___37261 = cljs.core.chunk_first(seq__35837_37260__$1);
var G__37262 = cljs.core.chunk_rest(seq__35837_37260__$1);
var G__37263 = c__5568__auto___37261;
var G__37264 = cljs.core.count(c__5568__auto___37261);
var G__37265 = (0);
seq__35837_37245 = G__37262;
chunk__35839_37246 = G__37263;
count__35840_37247 = G__37264;
i__35842_37248 = G__37265;
continue;
} else {
var child_37266 = cljs.core.first(seq__35837_37260__$1);
if(cljs.core.truth_(child_37266)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37266);


var G__37267 = cljs.core.next(seq__35837_37260__$1);
var G__37268 = null;
var G__37269 = (0);
var G__37270 = (0);
seq__35837_37245 = G__37267;
chunk__35839_37246 = G__37268;
count__35840_37247 = G__37269;
i__35842_37248 = G__37270;
continue;
} else {
var G__37271 = cljs.core.next(seq__35837_37260__$1);
var G__37272 = null;
var G__37273 = (0);
var G__37274 = (0);
seq__35837_37245 = G__37271;
chunk__35839_37246 = G__37272;
count__35840_37247 = G__37273;
i__35842_37248 = G__37274;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37244);
}


var G__37275 = cljs.core.next(seq__35696_37233__$1);
var G__37276 = null;
var G__37277 = (0);
var G__37278 = (0);
seq__35696_37193 = G__37275;
chunk__35697_37194 = G__37276;
count__35698_37195 = G__37277;
i__35699_37196 = G__37278;
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
var seq__35884 = cljs.core.seq(node);
var chunk__35885 = null;
var count__35886 = (0);
var i__35887 = (0);
while(true){
if((i__35887 < count__35886)){
var n = chunk__35885.cljs$core$IIndexed$_nth$arity$2(null,i__35887);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37283 = seq__35884;
var G__37284 = chunk__35885;
var G__37285 = count__35886;
var G__37286 = (i__35887 + (1));
seq__35884 = G__37283;
chunk__35885 = G__37284;
count__35886 = G__37285;
i__35887 = G__37286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35884);
if(temp__5804__auto__){
var seq__35884__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35884__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35884__$1);
var G__37288 = cljs.core.chunk_rest(seq__35884__$1);
var G__37289 = c__5568__auto__;
var G__37290 = cljs.core.count(c__5568__auto__);
var G__37291 = (0);
seq__35884 = G__37288;
chunk__35885 = G__37289;
count__35886 = G__37290;
i__35887 = G__37291;
continue;
} else {
var n = cljs.core.first(seq__35884__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37292 = cljs.core.next(seq__35884__$1);
var G__37293 = null;
var G__37294 = (0);
var G__37295 = (0);
seq__35884 = G__37292;
chunk__35885 = G__37293;
count__35886 = G__37294;
i__35887 = G__37295;
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
var G__35902 = arguments.length;
switch (G__35902) {
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
var G__35914 = arguments.length;
switch (G__35914) {
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
var G__35945 = arguments.length;
switch (G__35945) {
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
var len__5769__auto___37301 = arguments.length;
var i__5770__auto___37302 = (0);
while(true){
if((i__5770__auto___37302 < len__5769__auto___37301)){
args__5775__auto__.push((arguments[i__5770__auto___37302]));

var G__37303 = (i__5770__auto___37302 + (1));
i__5770__auto___37302 = G__37303;
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
var seq__35961_37304 = cljs.core.seq(nodes);
var chunk__35962_37305 = null;
var count__35963_37306 = (0);
var i__35964_37307 = (0);
while(true){
if((i__35964_37307 < count__35963_37306)){
var node_37308 = chunk__35962_37305.cljs$core$IIndexed$_nth$arity$2(null,i__35964_37307);
fragment.appendChild(shadow.dom._to_dom(node_37308));


var G__37309 = seq__35961_37304;
var G__37310 = chunk__35962_37305;
var G__37311 = count__35963_37306;
var G__37312 = (i__35964_37307 + (1));
seq__35961_37304 = G__37309;
chunk__35962_37305 = G__37310;
count__35963_37306 = G__37311;
i__35964_37307 = G__37312;
continue;
} else {
var temp__5804__auto___37313 = cljs.core.seq(seq__35961_37304);
if(temp__5804__auto___37313){
var seq__35961_37314__$1 = temp__5804__auto___37313;
if(cljs.core.chunked_seq_QMARK_(seq__35961_37314__$1)){
var c__5568__auto___37315 = cljs.core.chunk_first(seq__35961_37314__$1);
var G__37316 = cljs.core.chunk_rest(seq__35961_37314__$1);
var G__37317 = c__5568__auto___37315;
var G__37318 = cljs.core.count(c__5568__auto___37315);
var G__37319 = (0);
seq__35961_37304 = G__37316;
chunk__35962_37305 = G__37317;
count__35963_37306 = G__37318;
i__35964_37307 = G__37319;
continue;
} else {
var node_37320 = cljs.core.first(seq__35961_37314__$1);
fragment.appendChild(shadow.dom._to_dom(node_37320));


var G__37321 = cljs.core.next(seq__35961_37314__$1);
var G__37322 = null;
var G__37323 = (0);
var G__37324 = (0);
seq__35961_37304 = G__37321;
chunk__35962_37305 = G__37322;
count__35963_37306 = G__37323;
i__35964_37307 = G__37324;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35957){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35957));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35990_37328 = cljs.core.seq(scripts);
var chunk__35991_37329 = null;
var count__35992_37330 = (0);
var i__35993_37331 = (0);
while(true){
if((i__35993_37331 < count__35992_37330)){
var vec__36017_37332 = chunk__35991_37329.cljs$core$IIndexed$_nth$arity$2(null,i__35993_37331);
var script_tag_37333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017_37332,(0),null);
var script_body_37334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017_37332,(1),null);
eval(script_body_37334);


var G__37335 = seq__35990_37328;
var G__37336 = chunk__35991_37329;
var G__37337 = count__35992_37330;
var G__37338 = (i__35993_37331 + (1));
seq__35990_37328 = G__37335;
chunk__35991_37329 = G__37336;
count__35992_37330 = G__37337;
i__35993_37331 = G__37338;
continue;
} else {
var temp__5804__auto___37339 = cljs.core.seq(seq__35990_37328);
if(temp__5804__auto___37339){
var seq__35990_37340__$1 = temp__5804__auto___37339;
if(cljs.core.chunked_seq_QMARK_(seq__35990_37340__$1)){
var c__5568__auto___37341 = cljs.core.chunk_first(seq__35990_37340__$1);
var G__37342 = cljs.core.chunk_rest(seq__35990_37340__$1);
var G__37343 = c__5568__auto___37341;
var G__37344 = cljs.core.count(c__5568__auto___37341);
var G__37345 = (0);
seq__35990_37328 = G__37342;
chunk__35991_37329 = G__37343;
count__35992_37330 = G__37344;
i__35993_37331 = G__37345;
continue;
} else {
var vec__36021_37346 = cljs.core.first(seq__35990_37340__$1);
var script_tag_37347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36021_37346,(0),null);
var script_body_37348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36021_37346,(1),null);
eval(script_body_37348);


var G__37349 = cljs.core.next(seq__35990_37340__$1);
var G__37350 = null;
var G__37351 = (0);
var G__37352 = (0);
seq__35990_37328 = G__37349;
chunk__35991_37329 = G__37350;
count__35992_37330 = G__37351;
i__35993_37331 = G__37352;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36028){
var vec__36033 = p__36028;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36033,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36033,(1),null);
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
var G__36056 = arguments.length;
switch (G__36056) {
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
var seq__36102 = cljs.core.seq(style_keys);
var chunk__36103 = null;
var count__36104 = (0);
var i__36105 = (0);
while(true){
if((i__36105 < count__36104)){
var it = chunk__36103.cljs$core$IIndexed$_nth$arity$2(null,i__36105);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37358 = seq__36102;
var G__37360 = chunk__36103;
var G__37361 = count__36104;
var G__37362 = (i__36105 + (1));
seq__36102 = G__37358;
chunk__36103 = G__37360;
count__36104 = G__37361;
i__36105 = G__37362;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36102);
if(temp__5804__auto__){
var seq__36102__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36102__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36102__$1);
var G__37363 = cljs.core.chunk_rest(seq__36102__$1);
var G__37364 = c__5568__auto__;
var G__37365 = cljs.core.count(c__5568__auto__);
var G__37366 = (0);
seq__36102 = G__37363;
chunk__36103 = G__37364;
count__36104 = G__37365;
i__36105 = G__37366;
continue;
} else {
var it = cljs.core.first(seq__36102__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37367 = cljs.core.next(seq__36102__$1);
var G__37368 = null;
var G__37369 = (0);
var G__37370 = (0);
seq__36102 = G__37367;
chunk__36103 = G__37368;
count__36104 = G__37369;
i__36105 = G__37370;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36116,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36130 = k36116;
var G__36130__$1 = (((G__36130 instanceof cljs.core.Keyword))?G__36130.fqn:null);
switch (G__36130__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36116,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36134){
var vec__36137 = p__36134;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36115){
var self__ = this;
var G__36115__$1 = this;
return (new cljs.core.RecordIter((0),G__36115__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36117,other36118){
var self__ = this;
var this36117__$1 = this;
return (((!((other36118 == null)))) && ((((this36117__$1.constructor === other36118.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36117__$1.x,other36118.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36117__$1.y,other36118.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36117__$1.__extmap,other36118.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36116){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36198 = k36116;
var G__36198__$1 = (((G__36198 instanceof cljs.core.Keyword))?G__36198.fqn:null);
switch (G__36198__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36116);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36115){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36199 = cljs.core.keyword_identical_QMARK_;
var expr__36200 = k__5352__auto__;
if(cljs.core.truth_((pred__36199.cljs$core$IFn$_invoke$arity$2 ? pred__36199.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36200) : pred__36199.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36200)))){
return (new shadow.dom.Coordinate(G__36115,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36199.cljs$core$IFn$_invoke$arity$2 ? pred__36199.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36200) : pred__36199.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36200)))){
return (new shadow.dom.Coordinate(self__.x,G__36115,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36115),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36115){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36115,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36125){
var extmap__5385__auto__ = (function (){var G__36216 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36125,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36125)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36216);
} else {
return G__36216;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36125),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36125),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36234,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36255 = k36234;
var G__36255__$1 = (((G__36255 instanceof cljs.core.Keyword))?G__36255.fqn:null);
switch (G__36255__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36234,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36263){
var vec__36265 = p__36263;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36233){
var self__ = this;
var G__36233__$1 = this;
return (new cljs.core.RecordIter((0),G__36233__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36235,other36236){
var self__ = this;
var this36235__$1 = this;
return (((!((other36236 == null)))) && ((((this36235__$1.constructor === other36236.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36235__$1.w,other36236.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36235__$1.h,other36236.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36235__$1.__extmap,other36236.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36234){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36335 = k36234;
var G__36335__$1 = (((G__36335 instanceof cljs.core.Keyword))?G__36335.fqn:null);
switch (G__36335__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36234);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36233){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36354 = cljs.core.keyword_identical_QMARK_;
var expr__36355 = k__5352__auto__;
if(cljs.core.truth_((pred__36354.cljs$core$IFn$_invoke$arity$2 ? pred__36354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36355) : pred__36354.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36355)))){
return (new shadow.dom.Size(G__36233,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36354.cljs$core$IFn$_invoke$arity$2 ? pred__36354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36355) : pred__36354.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36355)))){
return (new shadow.dom.Size(self__.w,G__36233,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36233),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36233){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36233,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36239){
var extmap__5385__auto__ = (function (){var G__36404 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36239,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36239)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36404);
} else {
return G__36404;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36239),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36239),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__37412 = (i + (1));
var G__37413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37412;
ret = G__37413;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36473){
var vec__36480 = p__36473;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36480,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36490 = arguments.length;
switch (G__36490) {
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
var G__37423 = ps;
var G__37424 = (i + (1));
el__$1 = G__37423;
i = G__37424;
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
var vec__36616 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36616,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36616,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36616,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36633_37429 = cljs.core.seq(props);
var chunk__36634_37430 = null;
var count__36635_37431 = (0);
var i__36636_37432 = (0);
while(true){
if((i__36636_37432 < count__36635_37431)){
var vec__36661_37436 = chunk__36634_37430.cljs$core$IIndexed$_nth$arity$2(null,i__36636_37432);
var k_37437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661_37436,(0),null);
var v_37438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661_37436,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37437);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37437),v_37438);


var G__37441 = seq__36633_37429;
var G__37442 = chunk__36634_37430;
var G__37443 = count__36635_37431;
var G__37444 = (i__36636_37432 + (1));
seq__36633_37429 = G__37441;
chunk__36634_37430 = G__37442;
count__36635_37431 = G__37443;
i__36636_37432 = G__37444;
continue;
} else {
var temp__5804__auto___37445 = cljs.core.seq(seq__36633_37429);
if(temp__5804__auto___37445){
var seq__36633_37446__$1 = temp__5804__auto___37445;
if(cljs.core.chunked_seq_QMARK_(seq__36633_37446__$1)){
var c__5568__auto___37447 = cljs.core.chunk_first(seq__36633_37446__$1);
var G__37448 = cljs.core.chunk_rest(seq__36633_37446__$1);
var G__37449 = c__5568__auto___37447;
var G__37450 = cljs.core.count(c__5568__auto___37447);
var G__37451 = (0);
seq__36633_37429 = G__37448;
chunk__36634_37430 = G__37449;
count__36635_37431 = G__37450;
i__36636_37432 = G__37451;
continue;
} else {
var vec__36665_37452 = cljs.core.first(seq__36633_37446__$1);
var k_37453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36665_37452,(0),null);
var v_37454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36665_37452,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37453);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37453),v_37454);


var G__37455 = cljs.core.next(seq__36633_37446__$1);
var G__37456 = null;
var G__37457 = (0);
var G__37458 = (0);
seq__36633_37429 = G__37455;
chunk__36634_37430 = G__37456;
count__36635_37431 = G__37457;
i__36636_37432 = G__37458;
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
var vec__36680 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36680,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36680,(1),null);
var seq__36683_37461 = cljs.core.seq(node_children);
var chunk__36685_37462 = null;
var count__36686_37463 = (0);
var i__36687_37464 = (0);
while(true){
if((i__36687_37464 < count__36686_37463)){
var child_struct_37465 = chunk__36685_37462.cljs$core$IIndexed$_nth$arity$2(null,i__36687_37464);
if((!((child_struct_37465 == null)))){
if(typeof child_struct_37465 === 'string'){
var text_37466 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37466),child_struct_37465].join(''));
} else {
var children_37467 = shadow.dom.svg_node(child_struct_37465);
if(cljs.core.seq_QMARK_(children_37467)){
var seq__36732_37469 = cljs.core.seq(children_37467);
var chunk__36734_37470 = null;
var count__36735_37471 = (0);
var i__36736_37472 = (0);
while(true){
if((i__36736_37472 < count__36735_37471)){
var child_37474 = chunk__36734_37470.cljs$core$IIndexed$_nth$arity$2(null,i__36736_37472);
if(cljs.core.truth_(child_37474)){
node.appendChild(child_37474);


var G__37475 = seq__36732_37469;
var G__37476 = chunk__36734_37470;
var G__37477 = count__36735_37471;
var G__37478 = (i__36736_37472 + (1));
seq__36732_37469 = G__37475;
chunk__36734_37470 = G__37476;
count__36735_37471 = G__37477;
i__36736_37472 = G__37478;
continue;
} else {
var G__37479 = seq__36732_37469;
var G__37480 = chunk__36734_37470;
var G__37481 = count__36735_37471;
var G__37482 = (i__36736_37472 + (1));
seq__36732_37469 = G__37479;
chunk__36734_37470 = G__37480;
count__36735_37471 = G__37481;
i__36736_37472 = G__37482;
continue;
}
} else {
var temp__5804__auto___37483 = cljs.core.seq(seq__36732_37469);
if(temp__5804__auto___37483){
var seq__36732_37484__$1 = temp__5804__auto___37483;
if(cljs.core.chunked_seq_QMARK_(seq__36732_37484__$1)){
var c__5568__auto___37485 = cljs.core.chunk_first(seq__36732_37484__$1);
var G__37486 = cljs.core.chunk_rest(seq__36732_37484__$1);
var G__37487 = c__5568__auto___37485;
var G__37488 = cljs.core.count(c__5568__auto___37485);
var G__37489 = (0);
seq__36732_37469 = G__37486;
chunk__36734_37470 = G__37487;
count__36735_37471 = G__37488;
i__36736_37472 = G__37489;
continue;
} else {
var child_37490 = cljs.core.first(seq__36732_37484__$1);
if(cljs.core.truth_(child_37490)){
node.appendChild(child_37490);


var G__37492 = cljs.core.next(seq__36732_37484__$1);
var G__37493 = null;
var G__37494 = (0);
var G__37495 = (0);
seq__36732_37469 = G__37492;
chunk__36734_37470 = G__37493;
count__36735_37471 = G__37494;
i__36736_37472 = G__37495;
continue;
} else {
var G__37497 = cljs.core.next(seq__36732_37484__$1);
var G__37498 = null;
var G__37499 = (0);
var G__37500 = (0);
seq__36732_37469 = G__37497;
chunk__36734_37470 = G__37498;
count__36735_37471 = G__37499;
i__36736_37472 = G__37500;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37467);
}
}


var G__37501 = seq__36683_37461;
var G__37502 = chunk__36685_37462;
var G__37503 = count__36686_37463;
var G__37504 = (i__36687_37464 + (1));
seq__36683_37461 = G__37501;
chunk__36685_37462 = G__37502;
count__36686_37463 = G__37503;
i__36687_37464 = G__37504;
continue;
} else {
var G__37505 = seq__36683_37461;
var G__37506 = chunk__36685_37462;
var G__37507 = count__36686_37463;
var G__37508 = (i__36687_37464 + (1));
seq__36683_37461 = G__37505;
chunk__36685_37462 = G__37506;
count__36686_37463 = G__37507;
i__36687_37464 = G__37508;
continue;
}
} else {
var temp__5804__auto___37509 = cljs.core.seq(seq__36683_37461);
if(temp__5804__auto___37509){
var seq__36683_37510__$1 = temp__5804__auto___37509;
if(cljs.core.chunked_seq_QMARK_(seq__36683_37510__$1)){
var c__5568__auto___37512 = cljs.core.chunk_first(seq__36683_37510__$1);
var G__37514 = cljs.core.chunk_rest(seq__36683_37510__$1);
var G__37515 = c__5568__auto___37512;
var G__37516 = cljs.core.count(c__5568__auto___37512);
var G__37517 = (0);
seq__36683_37461 = G__37514;
chunk__36685_37462 = G__37515;
count__36686_37463 = G__37516;
i__36687_37464 = G__37517;
continue;
} else {
var child_struct_37518 = cljs.core.first(seq__36683_37510__$1);
if((!((child_struct_37518 == null)))){
if(typeof child_struct_37518 === 'string'){
var text_37519 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37519),child_struct_37518].join(''));
} else {
var children_37520 = shadow.dom.svg_node(child_struct_37518);
if(cljs.core.seq_QMARK_(children_37520)){
var seq__36767_37521 = cljs.core.seq(children_37520);
var chunk__36769_37522 = null;
var count__36770_37523 = (0);
var i__36771_37524 = (0);
while(true){
if((i__36771_37524 < count__36770_37523)){
var child_37525 = chunk__36769_37522.cljs$core$IIndexed$_nth$arity$2(null,i__36771_37524);
if(cljs.core.truth_(child_37525)){
node.appendChild(child_37525);


var G__37526 = seq__36767_37521;
var G__37527 = chunk__36769_37522;
var G__37528 = count__36770_37523;
var G__37529 = (i__36771_37524 + (1));
seq__36767_37521 = G__37526;
chunk__36769_37522 = G__37527;
count__36770_37523 = G__37528;
i__36771_37524 = G__37529;
continue;
} else {
var G__37533 = seq__36767_37521;
var G__37534 = chunk__36769_37522;
var G__37535 = count__36770_37523;
var G__37536 = (i__36771_37524 + (1));
seq__36767_37521 = G__37533;
chunk__36769_37522 = G__37534;
count__36770_37523 = G__37535;
i__36771_37524 = G__37536;
continue;
}
} else {
var temp__5804__auto___37539__$1 = cljs.core.seq(seq__36767_37521);
if(temp__5804__auto___37539__$1){
var seq__36767_37540__$1 = temp__5804__auto___37539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36767_37540__$1)){
var c__5568__auto___37541 = cljs.core.chunk_first(seq__36767_37540__$1);
var G__37542 = cljs.core.chunk_rest(seq__36767_37540__$1);
var G__37543 = c__5568__auto___37541;
var G__37544 = cljs.core.count(c__5568__auto___37541);
var G__37545 = (0);
seq__36767_37521 = G__37542;
chunk__36769_37522 = G__37543;
count__36770_37523 = G__37544;
i__36771_37524 = G__37545;
continue;
} else {
var child_37546 = cljs.core.first(seq__36767_37540__$1);
if(cljs.core.truth_(child_37546)){
node.appendChild(child_37546);


var G__37547 = cljs.core.next(seq__36767_37540__$1);
var G__37548 = null;
var G__37549 = (0);
var G__37550 = (0);
seq__36767_37521 = G__37547;
chunk__36769_37522 = G__37548;
count__36770_37523 = G__37549;
i__36771_37524 = G__37550;
continue;
} else {
var G__37551 = cljs.core.next(seq__36767_37540__$1);
var G__37552 = null;
var G__37553 = (0);
var G__37554 = (0);
seq__36767_37521 = G__37551;
chunk__36769_37522 = G__37552;
count__36770_37523 = G__37553;
i__36771_37524 = G__37554;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37520);
}
}


var G__37555 = cljs.core.next(seq__36683_37510__$1);
var G__37556 = null;
var G__37557 = (0);
var G__37558 = (0);
seq__36683_37461 = G__37555;
chunk__36685_37462 = G__37556;
count__36686_37463 = G__37557;
i__36687_37464 = G__37558;
continue;
} else {
var G__37559 = cljs.core.next(seq__36683_37510__$1);
var G__37560 = null;
var G__37561 = (0);
var G__37562 = (0);
seq__36683_37461 = G__37559;
chunk__36685_37462 = G__37560;
count__36686_37463 = G__37561;
i__36687_37464 = G__37562;
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
var len__5769__auto___37570 = arguments.length;
var i__5770__auto___37571 = (0);
while(true){
if((i__5770__auto___37571 < len__5769__auto___37570)){
args__5775__auto__.push((arguments[i__5770__auto___37571]));

var G__37572 = (i__5770__auto___37571 + (1));
i__5770__auto___37571 = G__37572;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36804){
var G__36805 = cljs.core.first(seq36804);
var seq36804__$1 = cljs.core.next(seq36804);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36805,seq36804__$1);
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
var G__36858 = arguments.length;
switch (G__36858) {
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
var c__21535__auto___37578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21537__auto__ = (function (){var switch__21347__auto__ = (function (state_36884){
var state_val_36885 = (state_36884[(1)]);
if((state_val_36885 === (1))){
var state_36884__$1 = state_36884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36884__$1,(2),once_or_cleanup);
} else {
if((state_val_36885 === (2))){
var inst_36881 = (state_36884[(2)]);
var inst_36882 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36884__$1 = (function (){var statearr_36897 = state_36884;
(statearr_36897[(7)] = inst_36881);

return statearr_36897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36884__$1,inst_36882);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__21348__auto__ = null;
var shadow$dom$state_machine__21348__auto____0 = (function (){
var statearr_36903 = [null,null,null,null,null,null,null,null];
(statearr_36903[(0)] = shadow$dom$state_machine__21348__auto__);

(statearr_36903[(1)] = (1));

return statearr_36903;
});
var shadow$dom$state_machine__21348__auto____1 = (function (state_36884){
while(true){
var ret_value__21349__auto__ = (function (){try{while(true){
var result__21350__auto__ = switch__21347__auto__(state_36884);
if(cljs.core.keyword_identical_QMARK_(result__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21350__auto__;
}
break;
}
}catch (e36906){var ex__21351__auto__ = e36906;
var statearr_36908_37580 = state_36884;
(statearr_36908_37580[(2)] = ex__21351__auto__);


if(cljs.core.seq((state_36884[(4)]))){
var statearr_36911_37581 = state_36884;
(statearr_36911_37581[(1)] = cljs.core.first((state_36884[(4)])));

} else {
throw ex__21351__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37582 = state_36884;
state_36884 = G__37582;
continue;
} else {
return ret_value__21349__auto__;
}
break;
}
});
shadow$dom$state_machine__21348__auto__ = function(state_36884){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__21348__auto____0.call(this);
case 1:
return shadow$dom$state_machine__21348__auto____1.call(this,state_36884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__21348__auto____0;
shadow$dom$state_machine__21348__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__21348__auto____1;
return shadow$dom$state_machine__21348__auto__;
})()
})();
var state__21538__auto__ = (function (){var statearr_36916 = f__21537__auto__();
(statearr_36916[(6)] = c__21535__auto___37578);

return statearr_36916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21538__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
