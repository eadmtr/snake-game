goog.provide('bidi.bidi');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__40280 = string;
var G__40280__$1 = (((G__40280 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40280));
var G__40280__$2 = (((G__40280__$1 == null))?null:encodeURIComponent(G__40280__$1));
if((G__40280__$2 == null)){
return null;
} else {
return G__40280__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__40288 = string;
var G__40288__$1 = (((G__40288 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40288));
if((G__40288__$1 == null)){
return null;
} else {
return decodeURIComponent(G__40288__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return cljs.core.uuid(s);
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

var bidi$bidi$ParameterEncoding$encode_parameter$dyn_41234 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (bidi.bidi.encode_parameter["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ParameterEncoding.encode-parameter",_);
}
}
});
bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
return bidi$bidi$ParameterEncoding$encode_parameter$dyn_41234(_);
}
});

(bidi.bidi.ParameterEncoding["string"] = true);

(bidi.bidi.encode_parameter["string"] = (function (s){
return s;
}));

(bidi.bidi.ParameterEncoding["number"] = true);

(bidi.bidi.encode_parameter["number"] = (function (s){
return s;
}));

(cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1);
}));

(cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode([cljs.core.namespace(k__$1),(cljs.core.truth_(cljs.core.namespace(k__$1))?"/":null),cljs.core.name(k__$1)].join(''));
}));

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

var bidi$bidi$PatternSegment$segment_regex_group$dyn_41235 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (bidi.bidi.segment_regex_group["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.segment-regex-group",_);
}
}
});
bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
return bidi$bidi$PatternSegment$segment_regex_group$dyn_41235(_);
}
});

var bidi$bidi$PatternSegment$param_key$dyn_41239 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.param_key[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (bidi.bidi.param_key["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.param-key",_);
}
}
});
bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
return bidi$bidi$PatternSegment$param_key$dyn_41239(_);
}
});

var bidi$bidi$PatternSegment$transform_param$dyn_41242 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (bidi.bidi.transform_param["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.transform-param",_);
}
}
});
bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
return bidi$bidi$PatternSegment$transform_param$dyn_41242(_);
}
});

var bidi$bidi$PatternSegment$unmatch_segment$dyn_41243 = (function (_,params){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,params) : m__5394__auto__.call(null,_,params));
} else {
var m__5392__auto__ = (bidi.bidi.unmatch_segment["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,params) : m__5392__auto__.call(null,_,params));
} else {
throw cljs.core.missing_protocol("PatternSegment.unmatch-segment",_);
}
}
});
bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
return bidi$bidi$PatternSegment$unmatch_segment$dyn_41243(_,params);
}
});

var bidi$bidi$PatternSegment$matches_QMARK_$dyn_41246 = (function (_,s){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5394__auto__.call(null,_,s));
} else {
var m__5392__auto__ = (bidi.bidi.matches_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5392__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PatternSegment.matches?",_);
}
}
});
bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((((!((_ == null)))) && ((!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
return bidi$bidi$PatternSegment$matches_QMARK_$dyn_41246(_,s);
}
});

(bidi.bidi.PatternSegment["string"] = true);

(bidi.bidi.segment_regex_group["string"] = (function (this$){
return this$;
}));

(bidi.bidi.param_key["string"] = (function (_){
return null;
}));

(bidi.bidi.transform_param["string"] = (function (_){
return cljs.core.identity;
}));

(bidi.bidi.unmatch_segment["string"] = (function (this$,_){
return this$;
}));

(RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
}));

(RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
}));

(RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
}));

(RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches(this$__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group(cljs.core.first(this$__$1));
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param(cljs.core.first(this$__$1));
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if((!((k instanceof cljs.core.Keyword)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_(cljs.core.first(this$__$1),v))){
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Parameter value of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," (key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),") ","is not compatible with the route pattern ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No parameter found in params for key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
}));

(cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
}));

(cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__5802__auto__ = this$__$1.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot form URI without a value given for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," parameter"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(bidi.bidi.PatternSegment["function"] = true);

(bidi.bidi.segment_regex_group["function"] = (function (this$){
var pred__40370 = cljs.core._EQ_;
var expr__40371 = this$;
if(cljs.core.truth_((pred__40370.cljs$core$IFn$_invoke$arity$2 ? pred__40370.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__40371) : pred__40370.call(null,cljs.core.keyword,expr__40371)))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_((pred__40370.cljs$core$IFn$_invoke$arity$2 ? pred__40370.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__40371) : pred__40370.call(null,cljs.core.long$,expr__40371)))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_((pred__40370.cljs$core$IFn$_invoke$arity$2 ? pred__40370.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__40371) : pred__40370.call(null,bidi.bidi.uuid,expr__40371)))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_((pred__40370.cljs$core$IFn$_invoke$arity$2 ? pred__40370.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__40371) : pred__40370.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__40371)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unidentified function qualifier to pattern segment: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__40371)].join('')));
}
}
}
}
}));

(bidi.bidi.transform_param["function"] = (function (this$){
var pred__40373 = cljs.core._EQ_;
var expr__40374 = this$;
if(cljs.core.truth_((pred__40373.cljs$core$IFn$_invoke$arity$2 ? pred__40373.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__40374) : pred__40373.call(null,cljs.core.keyword,expr__40374)))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_((pred__40373.cljs$core$IFn$_invoke$arity$2 ? pred__40373.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__40374) : pred__40373.call(null,cljs.core.long$,expr__40374)))){
return (function (p1__40348_SHARP_){
return Number(p1__40348_SHARP_);
});
} else {
if(cljs.core.truth_((pred__40373.cljs$core$IFn$_invoke$arity$2 ? pred__40373.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__40374) : pred__40373.call(null,bidi.bidi.uuid,expr__40374)))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

(bidi.bidi.matches_QMARK_["function"] = (function (this$,s){
var pred__40376 = cljs.core._EQ_;
var expr__40377 = this$;
if(cljs.core.truth_((pred__40376.cljs$core$IFn$_invoke$arity$2 ? pred__40376.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__40377) : pred__40376.call(null,cljs.core.keyword,expr__40377)))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_((pred__40376.cljs$core$IFn$_invoke$arity$2 ? pred__40376.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__40377) : pred__40376.call(null,cljs.core.long$,expr__40377)))){
return cljs.core.not(isNaN(s));
} else {
if(cljs.core.truth_((pred__40376.cljs$core$IFn$_invoke$arity$2 ? pred__40376.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__40377) : pred__40376.call(null,bidi.bidi.uuid,expr__40377)))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__40377)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

var bidi$bidi$Pattern$match_pattern$dyn_41250 = (function (_,env){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,env) : m__5394__auto__.call(null,_,env));
} else {
var m__5392__auto__ = (bidi.bidi.match_pattern["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,env) : m__5392__auto__.call(null,_,env));
} else {
throw cljs.core.missing_protocol("Pattern.match-pattern",_);
}
}
});
/**
 * Return a new state if this pattern matches the given state, or
 *  falsy otherwise. If a new state is returned it will usually have the
 *  rest of the path to match in the :remainder entry.
 */
bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,env){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,env);
} else {
return bidi$bidi$Pattern$match_pattern$dyn_41250(_,env);
}
});

var bidi$bidi$Pattern$unmatch_pattern$dyn_41251 = (function (_,m){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5394__auto__.call(null,_,m));
} else {
var m__5392__auto__ = (bidi.bidi.unmatch_pattern["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5392__auto__.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Pattern.unmatch-pattern",_);
}
}
});
bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
return bidi$bidi$Pattern$unmatch_pattern$dyn_41251(_,m);
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

var bidi$bidi$Matched$resolve_handler$dyn_41252 = (function (_,m){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5394__auto__.call(null,_,m));
} else {
var m__5392__auto__ = (bidi.bidi.resolve_handler["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5392__auto__.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.resolve-handler",_);
}
}
});
bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
return bidi$bidi$Matched$resolve_handler$dyn_41252(_,m);
}
});

var bidi$bidi$Matched$unresolve_handler$dyn_41253 = (function (_,m){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5394__auto__.call(null,_,m));
} else {
var m__5392__auto__ = (bidi.bidi.unresolve_handler["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5392__auto__.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.unresolve-handler",_);
}
}
});
bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
return bidi$bidi$Matched$unresolve_handler$dyn_41253(_,m);
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = ["http://bidi.bidi/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__40431,orig_env){
var vec__40433 = p__40431;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40433,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40433,(1),null);
var env = cljs.core.update.cljs$core$IFn$_invoke$arity$3(orig_env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),bidi.bidi.just_path);
var temp__5804__auto__ = bidi.bidi.match_pattern(pattern,env);
if(cljs.core.truth_(temp__5804__auto__)){
var match_result = temp__5804__auto__;
return bidi.bidi.resolve_handler(matched,match_result);
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__5804__auto__ = cljs.core.last(cljs.core.re_matches(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern),"(.*)"].join('')),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__5804__auto__)){
var path = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null)], 0));
} else {
return null;
}
});
(cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__5804__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
}),_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3),"(.*)"].join('');
var _PERCENT___$5 = cljs.core.re_pattern(_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches(_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next(_PERCENT___$6);
})();
if(temp__5804__auto__){
var groups = temp__5804__auto__;
var params = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.param_key,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.transform_param,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.butlast(groups))))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last(groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else {
return null;
}
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40451_SHARP_){
return bidi.bidi.unmatch_segment(p1__40451_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
}),this$__$1));
}));

(RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$__$1)),")"].join(''),env);
}));

(RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern(clojure.string.replace(p,/\\\\/,""),m);
}));

(bidi.bidi.Pattern["boolean"] = true);

(bidi.bidi.match_pattern["boolean"] = (function (this$,env){
if(this$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else {
return null;
}
}));

(bidi.bidi.unmatch_pattern["boolean"] = (function (this$,_){
if(this$){
return "";
} else {
return null;
}
}));

(cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some((function (p1__40454_SHARP_){
return bidi.bidi.match_pattern(p1__40454_SHARP_,s);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
}));

(cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
}));

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some((function (p1__40455_SHARP_){
return bidi.bidi.match_pattern(p1__40455_SHARP_,s);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
}));

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_((function (p__40499){
var vec__40500 = p__40499;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40500,(1),null);
if(((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
var G__40506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__40506) : v.call(null,G__40506));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
}),cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
}));

(bidi.bidi.Pattern["string"] = true);

(bidi.bidi.match_pattern["string"] = (function (this$,env){
return bidi.bidi.match_beginning(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$)),")"].join(''),env);
}));

(bidi.bidi.unmatch_pattern["string"] = (function (this$,_){
return this$;
}));

(cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_((function (p__40533){
var vec__40534 = p__40533;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534,(1),null);
if(((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
var G__40541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__40541) : v.call(null,G__40541));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
}),cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
}));

(cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
}));

(cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
}));

(cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
}));
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__5804__auto__ = bidi.bidi.unresolve_handler(cljs.core.second(v),m);
if(cljs.core.truth_(temp__5804__auto__)){
var r = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern(cljs.core.first(v),m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
});
(bidi.bidi.Matched["null"] = true);

(bidi.bidi.resolve_handler["null"] = (function (this$,m){
return null;
}));

(bidi.bidi.unresolve_handler["null"] = (function (this$,m){
return null;
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40564_SHARP_){
return bidi.bidi.match_pair(p1__40564_SHARP_,m);
}),this$__$1);
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40569_SHARP_){
return bidi.bidi.unmatch_pair(p1__40569_SHARP_,m);
}),this$__$1);
}));

(cljs.core.Var.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
}));

(cljs.core.Var.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.unresolve_handler(cljs.core.deref(this$__$1),m);
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40573_SHARP_){
return bidi.bidi.match_pair(p1__40573_SHARP_,m);
}),this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40574_SHARP_){
return bidi.bidi.unmatch_pair(p1__40574_SHARP_,m);
}),this$__$1);
}));

(cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40571_SHARP_){
return bidi.bidi.match_pair(p1__40571_SHARP_,m);
}),this$__$1);
}));

(cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40572_SHARP_){
return bidi.bidi.unmatch_pair(p1__40572_SHARP_,m);
}),this$__$1);
}));

(bidi.bidi.Matched["string"] = true);

(bidi.bidi.unresolve_handler["string"] = (function (_,___$1){
return null;
}));

(cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
}));

(cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));

(bidi.bidi.Matched["function"] = true);

(bidi.bidi.resolve_handler["function"] = (function (this$,m){
return bidi.bidi.succeed(this$,m);
}));

(bidi.bidi.unresolve_handler["function"] = (function (this$,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));

(cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40575_SHARP_){
return bidi.bidi.match_pair(p1__40575_SHARP_,m);
}),this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40576_SHARP_){
return bidi.bidi.unmatch_pair(p1__40576_SHARP_,m);
}),this$__$1);
}));

(cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40577_SHARP_){
return bidi.bidi.match_pair(p1__40577_SHARP_,m);
}),this$__$1);
}));

(cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__40578_SHARP_){
return bidi.bidi.unmatch_pair(p1__40578_SHARP_,m);
}),this$__$1);
}));

(cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
}));

(cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_pair(route,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route","route",329891309),route], 0))),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41267 = arguments.length;
var i__5770__auto___41268 = (0);
while(true){
if((i__5770__auto___41268 < len__5769__auto___41267)){
args__5775__auto__.push((arguments[i__5770__auto___41268]));

var G__41269 = (i__5770__auto___41268 + (1));
i__5770__auto___41268 = G__41269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__40678){
var map__40679 = p__40678;
var map__40679__$1 = cljs.core.__destructure_map(map__40679);
var options = map__40679__$1;
return bidi.bidi.match_route_STAR_(route,path,options);
}));

(bidi.bidi.match_route.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bidi.bidi.match_route.cljs$lang$applyTo = (function (seq40670){
var G__40672 = cljs.core.first(seq40670);
var seq40670__$1 = cljs.core.next(seq40670);
var G__40673 = cljs.core.first(seq40670__$1);
var seq40670__$2 = cljs.core.next(seq40670__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40672,G__40673,seq40670__$2);
}));

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for_STAR_ = (function bidi$bidi$path_for_STAR_(route,handler,params){
if((handler == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair(route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});
/**
 * Given a route definition data structure, a handler and an unrolled option map,
 *   return a path that would route to the handler. The map must contain the values
 *   to any parameters required to create the path, and extra values are silently
 *   ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41275 = arguments.length;
var i__5770__auto___41276 = (0);
while(true){
if((i__5770__auto___41276 < len__5769__auto___41275)){
args__5775__auto__.push((arguments[i__5770__auto___41276]));

var G__41277 = (i__5770__auto___41276 + (1));
i__5770__auto___41276 = G__41277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__40703){
var map__40704 = p__40703;
var map__40704__$1 = cljs.core.__destructure_map(map__40704);
var params = map__40704__$1;
return bidi.bidi.path_for_STAR_(route,handler,params);
}));

(bidi.bidi.path_for.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bidi.bidi.path_for.cljs$lang$applyTo = (function (seq40688){
var G__40692 = cljs.core.first(seq40688);
var seq40688__$1 = cljs.core.next(seq40688);
var G__40695 = cljs.core.first(seq40688__$1);
var seq40688__$2 = cljs.core.next(seq40688__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40692,G__40695,seq40688__$2);
}));


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

var bidi$bidi$Matches$matches$dyn_41278 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.matches[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (bidi.bidi.matches["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Matches.matches",_);
}
}
});
/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$Matches$matches$arity$1 == null)))))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
return bidi$bidi$Matches$matches$dyn_41278(_);
}
});

(bidi.bidi.Matches["_"] = true);

(bidi.bidi.matches["_"] = (function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
}));

(cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

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
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40736,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40747 = k40736;
var G__40747__$1 = (((G__40747 instanceof cljs.core.Keyword))?G__40747.fqn:null);
switch (G__40747__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40736,else__5346__auto__);

}
}));

(bidi.bidi.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40748){
var vec__40749 = p__40748;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40749,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40749,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#bidi.bidi.Route{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40735){
var self__ = this;
var G__40735__$1 = this;
return (new cljs.core.RecordIter((0),G__40735__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-350230779 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40737,other40738){
var self__ = this;
var this40737__$1 = this;
return (((!((other40738 == null)))) && ((((this40737__$1.constructor === other40738.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40737__$1.handler,other40738.handler)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40737__$1.path,other40738.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40737__$1.__extmap,other40738.__extmap)))))))));
}));

(bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(bidi.bidi.Route.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40736){
var self__ = this;
var this__5350__auto____$1 = this;
var G__40758 = k40736;
var G__40758__$1 = (((G__40758 instanceof cljs.core.Keyword))?G__40758.fqn:null);
switch (G__40758__$1) {
case "handler":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40736);

}
}));

(bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40735){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__40762 = cljs.core.keyword_identical_QMARK_;
var expr__40763 = k__5352__auto__;
if(cljs.core.truth_((pred__40762.cljs$core$IFn$_invoke$arity$2 ? pred__40762.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__40763) : pred__40762.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__40763)))){
return (new bidi.bidi.Route(G__40735,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40762.cljs$core$IFn$_invoke$arity$2 ? pred__40762.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__40763) : pred__40762.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__40763)))){
return (new bidi.bidi.Route(self__.handler,G__40735,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40735),null));
}
}
}));

(bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40735){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__40735,self__.__extmap,self__.__hash));
}));

(bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(bidi.bidi.Route.cljs$lang$type = true);

(bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"bidi.bidi/Route",null,(1),null));
}));

(bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"bidi.bidi/Route");
}));

/**
 * Positional factory function for bidi.bidi/Route.
 */
bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

/**
 * Factory function for bidi.bidi/Route, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__40739){
var extmap__5385__auto__ = (function (){var G__40793 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40739,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__40739)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40793);
} else {
return G__40793;
}
})();
return (new bidi.bidi.Route(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__40739),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__40739),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

var bidi$bidi$RouteSeq$gather$dyn_41291 = (function (_,context){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.gather[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,context) : m__5394__auto__.call(null,_,context));
} else {
var m__5392__auto__ = (bidi.bidi.gather["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,context) : m__5392__auto__.call(null,_,context));
} else {
throw cljs.core.missing_protocol("RouteSeq.gather",_);
}
}
});
/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((((!((_ == null)))) && ((!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
return bidi$bidi$RouteSeq$gather$dyn_41291(_,context);
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__40826 = arguments.length;
switch (G__40826) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__40842,ctx){
var vec__40843 = p__40842;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40843,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40843,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function bidi$bidi$iter__40848(s__40849){
return (new cljs.core.LazySeq(null,(function (){
var s__40849__$1 = s__40849;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40849__$1);
if(temp__5804__auto__){
var s__40849__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40849__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40849__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40851 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40850 = (0);
while(true){
if((i__40850 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__40850);
cljs.core.chunk_append(b__40851,bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__41295 = (i__40850 + (1));
i__40850 = G__41295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40851),bidi$bidi$iter__40848(cljs.core.chunk_rest(s__40849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40851),null);
}
} else {
var p = cljs.core.first(s__40849__$2);
return cljs.core.cons(bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__40848(cljs.core.rest(s__40849__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(bidi.bidi.matches(pattern));
})()], 0));
}));

(bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
}));

(bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2);

(cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40891_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__40891_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40892_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__40892_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40893_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__40893_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40894_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__40894_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40895_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__40895_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(bidi.bidi.RouteSeq["_"] = true);

(bidi.bidi.gather["_"] = (function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"handler","handler",-195596612),this$))], null);
}));

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

var bidi$bidi$RouteProvider$routes$dyn_41304 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (bidi.bidi.routes[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (bidi.bidi.routes["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("RouteProvider.routes",_);
}
}
});
/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((((!((_ == null)))) && ((!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
return bidi$bidi$RouteProvider$routes$dyn_41304(_);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
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
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40919,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40930 = k40919;
var G__40930__$1 = (((G__40930 instanceof cljs.core.Keyword))?G__40930.fqn:null);
switch (G__40930__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40919,else__5346__auto__);

}
}));

(bidi.bidi.Alternates.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40934){
var vec__40936 = p__40934;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40936,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40936,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#bidi.bidi.Alternates{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
}));

(bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40918){
var self__ = this;
var G__40918__$1 = this;
return (new cljs.core.RecordIter((0),G__40918__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alts","alts",647552416)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
}));

(bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1584309265 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40920,other40921){
var self__ = this;
var this40920__$1 = this;
return (((!((other40921 == null)))) && ((((this40920__$1.constructor === other40921.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40920__$1.alts,other40921.alts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40920__$1.__extmap,other40921.__extmap)))))));
}));

(bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alts","alts",647552416),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40919){
var self__ = this;
var this__5350__auto____$1 = this;
var G__40946 = k40919;
var G__40946__$1 = (((G__40946 instanceof cljs.core.Keyword))?G__40946.fqn:null);
switch (G__40946__$1) {
case "alts":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40919);

}
}));

(bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40918){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__40948 = cljs.core.keyword_identical_QMARK_;
var expr__40949 = k__5352__auto__;
if(cljs.core.truth_((pred__40948.cljs$core$IFn$_invoke$arity$2 ? pred__40948.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alts","alts",647552416),expr__40949) : pred__40948.call(null,new cljs.core.Keyword(null,"alts","alts",647552416),expr__40949)))){
return (new bidi.bidi.Alternates(G__40918,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40918),null));
}
}));

(bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts,null))], null),self__.__extmap));
}));

(bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40918){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__40918,self__.__extmap,self__.__hash));
}));

(bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
}));

(bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some((function (p1__40916_SHARP_){
return bidi.bidi.match_pattern(p1__40916_SHARP_,m);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,self__.alts));
}));

(bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(self__.alts),m);
}));

(bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alts","alts",-2006883353,null)], null);
}));

(bidi.bidi.Alternates.cljs$lang$type = true);

(bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"bidi.bidi/Alternates",null,(1),null));
}));

(bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"bidi.bidi/Alternates");
}));

/**
 * Positional factory function for bidi.bidi/Alternates.
 */
bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

/**
 * Factory function for bidi.bidi/Alternates, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__40926){
var extmap__5385__auto__ = (function (){var G__40970 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40926,new cljs.core.Keyword(null,"alts","alts",647552416));
if(cljs.core.record_QMARK_(G__40926)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40970);
} else {
return G__40970;
}
})();
return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(G__40926),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41327 = arguments.length;
var i__5770__auto___41328 = (0);
while(true){
if((i__5770__auto___41328 < len__5769__auto___41327)){
args__5775__auto__.push((arguments[i__5770__auto___41328]));

var G__41329 = (i__5770__auto___41328 + (1));
i__5770__auto___41328 = G__41329;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates(alts);
}));

(bidi.bidi.alts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bidi.bidi.alts.cljs$lang$applyTo = (function (seq40971){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40971));
}));


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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40981,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40991 = k40981;
var G__40991__$1 = (((G__40991 instanceof cljs.core.Keyword))?G__40991.fqn:null);
switch (G__40991__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40981,else__5346__auto__);

}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40995){
var vec__40996 = p__40995;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40996,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40996,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"handler","handler",-195596612),self__.matched,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag], 0)))], null);
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40980){
var self__ = this;
var G__40980__$1 = this;
return (new cljs.core.RecordIter((0),G__40980__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.matched,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag));
}));

(bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if((((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tag,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.matched,m);
}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1322093519 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40982,other40983){
var self__ = this;
var this40982__$1 = this;
return (((!((other40983 == null)))) && ((((this40982__$1.constructor === other40983.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40982__$1.matched,other40983.matched)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40982__$1.tag,other40983.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40982__$1.__extmap,other40983.__extmap)))))))));
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matched","matched",-975207164),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40981){
var self__ = this;
var this__5350__auto____$1 = this;
var G__41030 = k40981;
var G__41030__$1 = (((G__41030 instanceof cljs.core.Keyword))?G__41030.fqn:null);
switch (G__41030__$1) {
case "matched":
case "tag":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40981);

}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40980){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__41031 = cljs.core.keyword_identical_QMARK_;
var expr__41032 = k__5352__auto__;
if(cljs.core.truth_((pred__41031.cljs$core$IFn$_invoke$arity$2 ? pred__41031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matched","matched",-975207164),expr__41032) : pred__41031.call(null,new cljs.core.Keyword(null,"matched","matched",-975207164),expr__41032)))){
return (new bidi.bidi.TaggedMatch(G__40980,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41031.cljs$core$IFn$_invoke$arity$2 ? pred__41031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__41032) : pred__41031.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__41032)))){
return (new bidi.bidi.TaggedMatch(self__.matched,G__40980,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40980),null));
}
}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null))], null),self__.__extmap));
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40980){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__40980,self__.__extmap,self__.__hash));
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matched","matched",665324363,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null);
}));

(bidi.bidi.TaggedMatch.cljs$lang$type = true);

(bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"bidi.bidi/TaggedMatch",null,(1),null));
}));

(bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"bidi.bidi/TaggedMatch");
}));

/**
 * Positional factory function for bidi.bidi/TaggedMatch.
 */
bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

/**
 * Factory function for bidi.bidi/TaggedMatch, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__40984){
var extmap__5385__auto__ = (function (){var G__41045 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40984,new cljs.core.Keyword(null,"matched","matched",-975207164),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223)], 0));
if(cljs.core.record_QMARK_(G__40984)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41045);
} else {
return G__41045;
}
})();
return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(G__40984),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__40984),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag){
return bidi.bidi.__GT_TaggedMatch(matched,tag);
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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k41048,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__41061 = k41048;
var G__41061__$1 = (((G__41061 instanceof cljs.core.Keyword))?G__41061.fqn:null);
switch (G__41061__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41048,else__5346__auto__);

}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__41074){
var vec__41075 = p__41074;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41075,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41075,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41047){
var self__ = this;
var G__41047__$1 = this;
return (new cljs.core.RecordIter((0),G__41047__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.handler,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id));
}));

(bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.handler,m);
}
} else {
return null;
}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1607629977 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41049,other41050){
var self__ = this;
var this41049__$1 = this;
return (((!((other41050 == null)))) && ((((this41049__$1.constructor === other41050.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41049__$1.id,other41050.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41049__$1.handler,other41050.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41049__$1.__extmap,other41050.__extmap)))))))));
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k41048){
var self__ = this;
var this__5350__auto____$1 = this;
var G__41088 = k41048;
var G__41088__$1 = (((G__41088 instanceof cljs.core.Keyword))?G__41088.fqn:null);
switch (G__41088__$1) {
case "id":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41048);

}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__41047){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__41090 = cljs.core.keyword_identical_QMARK_;
var expr__41091 = k__5352__auto__;
if(cljs.core.truth_((pred__41090.cljs$core$IFn$_invoke$arity$2 ? pred__41090.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__41091) : pred__41090.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__41091)))){
return (new bidi.bidi.IdentifiableHandler(G__41047,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41090.cljs$core$IFn$_invoke$arity$2 ? pred__41090.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__41091) : pred__41090.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__41091)))){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__41047,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__41047),null));
}
}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__41047){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__41047,self__.__extmap,self__.__hash));
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(bidi.bidi.IdentifiableHandler.cljs$lang$type = true);

(bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"bidi.bidi/IdentifiableHandler",null,(1),null));
}));

(bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"bidi.bidi/IdentifiableHandler");
}));

/**
 * Positional factory function for bidi.bidi/IdentifiableHandler.
 */
bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

/**
 * Factory function for bidi.bidi/IdentifiableHandler, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__41056){
var extmap__5385__auto__ = (function (){var G__41112 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41056,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__41056)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41112);
} else {
return G__41112;
}
})();
return (new bidi.bidi.IdentifiableHandler(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__41056),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__41056),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__41116 = arguments.length;
switch (G__41116) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler(k,handler);
}));

(bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler(null,handler);
}));

(bidi.bidi.handler.cljs$lang$maxFixedArity = 2);


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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k41123,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__41138 = k41123;
var G__41138__$1 = (((G__41138 instanceof cljs.core.Keyword))?G__41138.fqn:null);
switch (G__41138__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41123,else__5346__auto__);

}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__41145){
var vec__41147 = p__41145;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41147,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41147,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather(self__.routes,context__$1);
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41122){
var self__ = this;
var G__41122__$1 = this;
return (new cljs.core.RecordIter((0),G__41122__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__5804__auto__ = bidi.bidi.resolve_handler(self__.routes,m);
if(cljs.core.truth_(temp__5804__auto__)){
var m__$1 = temp__5804__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.context,m__$1], 0));
} else {
return null;
}
}));

(bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler(self__.routes,m);
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-736389484 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41124,other41125){
var self__ = this;
var this41124__$1 = this;
return (((!((other41125 == null)))) && ((((this41124__$1.constructor === other41125.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41124__$1.routes,other41125.routes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41124__$1.context,other41125.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41124__$1.__extmap,other41125.__extmap)))))))));
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k41123){
var self__ = this;
var this__5350__auto____$1 = this;
var G__41193 = k41123;
var G__41193__$1 = (((G__41193 instanceof cljs.core.Keyword))?G__41193.fqn:null);
switch (G__41193__$1) {
case "routes":
case "context":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41123);

}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__41122){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__41195 = cljs.core.keyword_identical_QMARK_;
var expr__41196 = k__5352__auto__;
if(cljs.core.truth_((pred__41195.cljs$core$IFn$_invoke$arity$2 ? pred__41195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"routes","routes",457900162),expr__41196) : pred__41195.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__41196)))){
return (new bidi.bidi.RoutesContext(G__41122,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41195.cljs$core$IFn$_invoke$arity$2 ? pred__41195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__41196) : pred__41195.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__41196)))){
return (new bidi.bidi.RoutesContext(self__.routes,G__41122,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__41122),null));
}
}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__41122){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__41122,self__.__extmap,self__.__hash));
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(bidi.bidi.RoutesContext.cljs$lang$type = true);

(bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"bidi.bidi/RoutesContext",null,(1),null));
}));

(bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"bidi.bidi/RoutesContext");
}));

/**
 * Positional factory function for bidi.bidi/RoutesContext.
 */
bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

/**
 * Factory function for bidi.bidi/RoutesContext, taking a map of keywords to field values.
 */
bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__41132){
var extmap__5385__auto__ = (function (){var G__41206 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41132,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__41132)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41206);
} else {
return G__41206;
}
})();
return (new bidi.bidi.RoutesContext(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__41132),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__41132),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext(routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});

//# sourceMappingURL=bidi.bidi.js.map
