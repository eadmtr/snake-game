goog.provide('pushy.core');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__76694 = h;
G__76694.setUseFragment(false);

G__76694.setPathPrefix("");

G__76694.setEnabled(true);

return G__76694;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
(t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join('');
}));

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
(t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
}));

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__76707 = arguments.length;
switch (G__76707) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1(pushy.core.set_create_url_BANG_(pushy.core.set_retrieve_token_BANG_((new goog.history.Html5History.TokenTransformer()))));
}));

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_((new goog.history.Html5History(window,transformer)));
}));

(pushy.core.new_history.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
pushy.core.IHistory = function(){};

var pushy$core$IHistory$set_token_BANG_$dyn_76981 = (function() {
var G__76983 = null;
var G__76983__2 = (function (this$,token){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__5394__auto__.call(null,this$,token));
} else {
var m__5392__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__5392__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
var G__76983__3 = (function (this$,token,title){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__5394__auto__.call(null,this$,token,title));
} else {
var m__5392__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__5392__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
G__76983 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__76983__2.call(this,this$,token);
case 3:
return G__76983__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76983.cljs$core$IFn$_invoke$arity$2 = G__76983__2;
G__76983.cljs$core$IFn$_invoke$arity$3 = G__76983__3;
return G__76983;
})()
;
pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__76734 = arguments.length;
switch (G__76734) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_76981(this$,token);
}
}));

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_76981(this$,token,title);
}
}));

(pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$replace_token_BANG_$dyn_76990 = (function() {
var G__76991 = null;
var G__76991__2 = (function (this$,token){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__5394__auto__.call(null,this$,token));
} else {
var m__5392__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__5392__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
var G__76991__3 = (function (this$,token,title){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__5394__auto__.call(null,this$,token,title));
} else {
var m__5392__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__5392__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
G__76991 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__76991__2.call(this,this$,token);
case 3:
return G__76991__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76991.cljs$core$IFn$_invoke$arity$2 = G__76991__2;
G__76991.cljs$core$IFn$_invoke$arity$3 = G__76991__3;
return G__76991;
})()
;
pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__76752 = arguments.length;
switch (G__76752) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_76990(this$,token);
}
}));

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_76990(this$,token,title);
}
}));

(pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$get_token$dyn_76995 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (pushy.core.get_token[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (pushy.core.get_token["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-token",this$);
}
}
});
pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
return pushy$core$IHistory$get_token$dyn_76995(this$);
}
});

var pushy$core$IHistory$start_BANG_$dyn_76997 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (pushy.core.start_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.start!",this$);
}
}
});
pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$start_BANG_$dyn_76997(this$);
}
});

var pushy$core$IHistory$stop_BANG_$dyn_77002 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (pushy.core.stop_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.stop!",this$);
}
}
});
pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$stop_BANG_$dyn_77002(this$);
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
var fragment = uri.getFragment();
var G__76821 = path;
var G__76821__$1 = ((cljs.core.seq(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76821),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''):G__76821);
if(cljs.core.seq(fragment)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76821__$1),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
} else {
return G__76821__$1;
}
});
pushy.core.valid_link_QMARK_ = (function pushy$core$valid_link_QMARK_(el){
var and__5043__auto__ = (function (){var G__76825 = el.tagName;
var fexpr__76824 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["AREA",null,"A",null], null), null);
return (fexpr__76824.cljs$core$IFn$_invoke$arity$1 ? fexpr__76824.cljs$core$IFn$_invoke$arity$1(G__76825) : fexpr__76824.call(null,G__76825));
})();
if(cljs.core.truth_(and__5043__auto__)){
return el.hasAttribute("href");
} else {
return and__5043__auto__;
}
});

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core76848 = (function (event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__76846,history,processable_url_QMARK_,match_fn,p__76845,meta76849){
this.event_keys = event_keys;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.dispatch_fn = dispatch_fn;
this.map__76846 = map__76846;
this.history = history;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.match_fn = match_fn;
this.p__76845 = p__76845;
this.meta76849 = meta76849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(pushy.core.t_pushy$core76848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76850,meta76849__$1){
var self__ = this;
var _76850__$1 = this;
return (new pushy.core.t_pushy$core76848(self__.event_keys,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.dispatch_fn,self__.map__76846,self__.history,self__.processable_url_QMARK_,self__.match_fn,self__.p__76845,meta76849__$1));
}));

(pushy.core.t_pushy$core76848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76850){
var self__ = this;
var _76850__$1 = this;
return self__.meta76849;
}));

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
}));

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
}));

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
}));

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
}));

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$get_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
}));

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,(function (e){
var temp__5804__auto__ = (function (){var G__76876 = (function (){var G__76878 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__76878) : self__.match_fn.call(null,G__76878));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__76876) : self__.identity_fn.call(null,G__76876));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var match = temp__5804__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
})));

var temp__5804__auto___77021 = (function (){var G__76882 = (function (){var G__76883 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__76883) : self__.match_fn.call(null,G__76883));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__76882) : self__.identity_fn.call(null,G__76882));
})();
if(cljs.core.truth_(temp__5804__auto___77021)){
var match_77027 = temp__5804__auto___77021;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_77027) : self__.dispatch_fn.call(null,match_77027));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click((function (e){
var temp__5804__auto__ = (function (){var G__76889 = e;
var G__76889__$1 = (((G__76889 == null))?null:G__76889.target);
if((G__76889__$1 == null)){
return null;
} else {
return goog.dom.getAncestor(G__76889__$1,pushy.core.valid_link_QMARK_,true);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__5043__auto__ = (self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1(uri) : self__.processable_url_QMARK_.call(null,uri));
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not(e.altKey)) && (((cljs.core.not(e.ctrlKey)) && (((cljs.core.not(e.metaKey)) && (((cljs.core.not(e.shiftKey)) && (((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (((((cljs.core.not(el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.getAttribute("data-pushy-ignore"),"false")))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)))))))))))));
} else {
return and__5043__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri(uri);
if(cljs.core.truth_((function (){var G__76906 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__76906) : self__.identity_fn.call(null,G__76906));
})())){
var temp__5802__auto___77037 = el.title;
if(cljs.core.truth_(temp__5802__auto___77037)){
var title_77038 = temp__5802__auto___77037;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_77038);
} else {
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$2(null,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_((self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1(next_token) : self__.prevent_default_when_no_match_QMARK_.call(null,next_token)))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
})));

return null;
}));

(pushy.core.t_pushy$core76848.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__76912_77042 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__76913_77043 = null;
var count__76914_77044 = (0);
var i__76915_77045 = (0);
while(true){
if((i__76915_77045 < count__76914_77044)){
var key_77048 = chunk__76913_77043.cljs$core$IIndexed$_nth$arity$2(null,i__76915_77045);
goog.events.unlistenByKey(key_77048);


var G__77049 = seq__76912_77042;
var G__77050 = chunk__76913_77043;
var G__77051 = count__76914_77044;
var G__77052 = (i__76915_77045 + (1));
seq__76912_77042 = G__77049;
chunk__76913_77043 = G__77050;
count__76914_77044 = G__77051;
i__76915_77045 = G__77052;
continue;
} else {
var temp__5804__auto___77054 = cljs.core.seq(seq__76912_77042);
if(temp__5804__auto___77054){
var seq__76912_77058__$1 = temp__5804__auto___77054;
if(cljs.core.chunked_seq_QMARK_(seq__76912_77058__$1)){
var c__5568__auto___77059 = cljs.core.chunk_first(seq__76912_77058__$1);
var G__77060 = cljs.core.chunk_rest(seq__76912_77058__$1);
var G__77061 = c__5568__auto___77059;
var G__77062 = cljs.core.count(c__5568__auto___77059);
var G__77063 = (0);
seq__76912_77042 = G__77060;
chunk__76913_77043 = G__77061;
count__76914_77044 = G__77062;
i__76915_77045 = G__77063;
continue;
} else {
var key_77064 = cljs.core.first(seq__76912_77058__$1);
goog.events.unlistenByKey(key_77064);


var G__77066 = cljs.core.next(seq__76912_77058__$1);
var G__77067 = null;
var G__77068 = (0);
var G__77069 = (0);
seq__76912_77042 = G__77066;
chunk__76913_77043 = G__77067;
count__76914_77044 = G__77068;
i__76915_77045 = G__77069;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
}));

(pushy.core.t_pushy$core76848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"map__76846","map__76846",2119661576,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__76845","p__76845",-382512803,null),new cljs.core.Symbol(null,"meta76849","meta76849",930180324,null)], null);
}));

(pushy.core.t_pushy$core76848.cljs$lang$type = true);

(pushy.core.t_pushy$core76848.cljs$lang$ctorStr = "pushy.core/t_pushy$core76848");

(pushy.core.t_pushy$core76848.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"pushy.core/t_pushy$core76848");
}));

/**
 * Positional factory function for pushy.core/t_pushy$core76848.
 */
pushy.core.__GT_t_pushy$core76848 = (function pushy$core$__GT_t_pushy$core76848(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__76846,history,processable_url_QMARK_,match_fn,p__76845,meta76849){
return (new pushy.core.t_pushy$core76848(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__76846,history,processable_url_QMARK_,match_fn,p__76845,meta76849));
});


/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77075 = arguments.length;
var i__5770__auto___77076 = (0);
while(true){
if((i__5770__auto___77076 < len__5769__auto___77075)){
args__5775__auto__.push((arguments[i__5770__auto___77076]));

var G__77077 = (i__5770__auto___77076 + (1));
i__5770__auto___77076 = G__77077;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__76845){
var map__76846 = p__76845;
var map__76846__$1 = cljs.core.__destructure_map(map__76846);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76846__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76846__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76846__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly(false));
var history__$1 = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (new pushy.core.t_pushy$core76848(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__76846__$1,history__$1,processable_url_QMARK_,match_fn,p__76845,cljs.core.PersistentArrayMap.EMPTY));
}));

(pushy.core.pushy.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(pushy.core.pushy.cljs$lang$applyTo = (function (seq76830){
var G__76831 = cljs.core.first(seq76830);
var seq76830__$1 = cljs.core.next(seq76830);
var G__76832 = cljs.core.first(seq76830__$1);
var seq76830__$2 = cljs.core.next(seq76830__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76831,G__76832,seq76830__$2);
}));

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__76941 = arguments.length;
switch (G__76941) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1(window);
}));

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
}));

(pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1);

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__76950 = arguments.length;
switch (G__76950) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3(dispatch_fn,match_fn,cljs.core.identity);
}));

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(dispatch_fn,match_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn], 0));
h.pushy$core$IHistory$start_BANG_$arity$1(null);

return h;
}));

(pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=pushy.core.js.map
