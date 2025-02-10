goog.provide('bidi.bidi');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__76663 = string;
var G__76663__$1 = (((G__76663 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76663));
var G__76663__$2 = (((G__76663__$1 == null))?null:encodeURIComponent(G__76663__$1));
if((G__76663__$2 == null)){
return null;
} else {
return G__76663__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__76668 = string;
var G__76668__$1 = (((G__76668 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76668));
if((G__76668__$1 == null)){
return null;
} else {
return decodeURIComponent(G__76668__$1);
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

var bidi$bidi$ParameterEncoding$encode_parameter$dyn_77861 = (function (_){
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
return bidi$bidi$ParameterEncoding$encode_parameter$dyn_77861(_);
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

var bidi$bidi$PatternSegment$segment_regex_group$dyn_77862 = (function (_){
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
return bidi$bidi$PatternSegment$segment_regex_group$dyn_77862(_);
}
});

var bidi$bidi$PatternSegment$param_key$dyn_77863 = (function (_){
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
return bidi$bidi$PatternSegment$param_key$dyn_77863(_);
}
});

var bidi$bidi$PatternSegment$transform_param$dyn_77864 = (function (_){
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
return bidi$bidi$PatternSegment$transform_param$dyn_77864(_);
}
});

var bidi$bidi$PatternSegment$unmatch_segment$dyn_77865 = (function (_,params){
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
return bidi$bidi$PatternSegment$unmatch_segment$dyn_77865(_,params);
}
});

var bidi$bidi$PatternSegment$matches_QMARK_$dyn_77869 = (function (_,s){
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
return bidi$bidi$PatternSegment$matches_QMARK_$dyn_77869(_,s);
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
var pred__76841 = cljs.core._EQ_;
var expr__76842 = this$;
if(cljs.core.truth_((pred__76841.cljs$core$IFn$_invoke$arity$2 ? pred__76841.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__76842) : pred__76841.call(null,cljs.core.keyword,expr__76842)))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_((pred__76841.cljs$core$IFn$_invoke$arity$2 ? pred__76841.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__76842) : pred__76841.call(null,cljs.core.long$,expr__76842)))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_((pred__76841.cljs$core$IFn$_invoke$arity$2 ? pred__76841.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__76842) : pred__76841.call(null,bidi.bidi.uuid,expr__76842)))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_((pred__76841.cljs$core$IFn$_invoke$arity$2 ? pred__76841.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__76842) : pred__76841.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__76842)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unidentified function qualifier to pattern segment: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__76842)].join('')));
}
}
}
}
}));

(bidi.bidi.transform_param["function"] = (function (this$){
var pred__76853 = cljs.core._EQ_;
var expr__76854 = this$;
if(cljs.core.truth_((pred__76853.cljs$core$IFn$_invoke$arity$2 ? pred__76853.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__76854) : pred__76853.call(null,cljs.core.keyword,expr__76854)))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_((pred__76853.cljs$core$IFn$_invoke$arity$2 ? pred__76853.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__76854) : pred__76853.call(null,cljs.core.long$,expr__76854)))){
return (function (p1__76749_SHARP_){
return Number(p1__76749_SHARP_);
});
} else {
if(cljs.core.truth_((pred__76853.cljs$core$IFn$_invoke$arity$2 ? pred__76853.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__76854) : pred__76853.call(null,bidi.bidi.uuid,expr__76854)))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

(bidi.bidi.matches_QMARK_["function"] = (function (this$,s){
var pred__76865 = cljs.core._EQ_;
var expr__76866 = this$;
if(cljs.core.truth_((pred__76865.cljs$core$IFn$_invoke$arity$2 ? pred__76865.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__76866) : pred__76865.call(null,cljs.core.keyword,expr__76866)))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_((pred__76865.cljs$core$IFn$_invoke$arity$2 ? pred__76865.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__76866) : pred__76865.call(null,cljs.core.long$,expr__76866)))){
return cljs.core.not(isNaN(s));
} else {
if(cljs.core.truth_((pred__76865.cljs$core$IFn$_invoke$arity$2 ? pred__76865.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__76866) : pred__76865.call(null,bidi.bidi.uuid,expr__76866)))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__76866)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

var bidi$bidi$Pattern$match_pattern$dyn_77879 = (function (_,env){
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
return bidi$bidi$Pattern$match_pattern$dyn_77879(_,env);
}
});

var bidi$bidi$Pattern$unmatch_pattern$dyn_77880 = (function (_,m){
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
return bidi$bidi$Pattern$unmatch_pattern$dyn_77880(_,m);
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

var bidi$bidi$Matched$resolve_handler$dyn_77884 = (function (_,m){
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
return bidi$bidi$Matched$resolve_handler$dyn_77884(_,m);
}
});

var bidi$bidi$Matched$unresolve_handler$dyn_77886 = (function (_,m){
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
return bidi$bidi$Matched$unresolve_handler$dyn_77886(_,m);
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
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__76959,orig_env){
var vec__76961 = p__76959;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76961,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76961,(1),null);
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76982_SHARP_){
return bidi.bidi.unmatch_segment(p1__76982_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
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
return cljs.core.some((function (p1__76984_SHARP_){
return bidi.bidi.match_pattern(p1__76984_SHARP_,s);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
}));

(cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
}));

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some((function (p1__76985_SHARP_){
return bidi.bidi.match_pattern(p1__76985_SHARP_,s);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
}));

(cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_((function (p__77022){
var vec__77024 = p__77022;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77024,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77024,(1),null);
if(((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
var G__77030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__77030) : v.call(null,G__77030));
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
if(cljs.core.every_QMARK_((function (p__77053){
var vec__77055 = p__77053;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77055,(1),null);
if(((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
var G__77065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__77065) : v.call(null,G__77065));
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
return cljs.core.some((function (p1__77084_SHARP_){
return bidi.bidi.match_pair(p1__77084_SHARP_,m);
}),this$__$1);
}));

(cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__77085_SHARP_){
return bidi.bidi.unmatch_pair(p1__77085_SHARP_,m);
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
return cljs.core.some((function (p1__77088_SHARP_){
return bidi.bidi.match_pair(p1__77088_SHARP_,m);
}),this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__77089_SHARP_){
return bidi.bidi.unmatch_pair(p1__77089_SHARP_,m);
}),this$__$1);
}));

(cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__77086_SHARP_){
return bidi.bidi.match_pair(p1__77086_SHARP_,m);
}),this$__$1);
}));

(cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__77087_SHARP_){
return bidi.bidi.unmatch_pair(p1__77087_SHARP_,m);
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
return cljs.core.some((function (p1__77090_SHARP_){
return bidi.bidi.match_pair(p1__77090_SHARP_,m);
}),this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__77091_SHARP_){
return bidi.bidi.unmatch_pair(p1__77091_SHARP_,m);
}),this$__$1);
}));

(cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__77092_SHARP_){
return bidi.bidi.match_pair(p1__77092_SHARP_,m);
}),this$__$1);
}));

(cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some((function (p1__77093_SHARP_){
return bidi.bidi.unmatch_pair(p1__77093_SHARP_,m);
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
var len__5769__auto___77915 = arguments.length;
var i__5770__auto___77916 = (0);
while(true){
if((i__5770__auto___77916 < len__5769__auto___77915)){
args__5775__auto__.push((arguments[i__5770__auto___77916]));

var G__77918 = (i__5770__auto___77916 + (1));
i__5770__auto___77916 = G__77918;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__77234){
var map__77235 = p__77234;
var map__77235__$1 = cljs.core.__destructure_map(map__77235);
var options = map__77235__$1;
return bidi.bidi.match_route_STAR_(route,path,options);
}));

(bidi.bidi.match_route.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bidi.bidi.match_route.cljs$lang$applyTo = (function (seq77229){
var G__77231 = cljs.core.first(seq77229);
var seq77229__$1 = cljs.core.next(seq77229);
var G__77232 = cljs.core.first(seq77229__$1);
var seq77229__$2 = cljs.core.next(seq77229__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77231,G__77232,seq77229__$2);
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
var len__5769__auto___77922 = arguments.length;
var i__5770__auto___77923 = (0);
while(true){
if((i__5770__auto___77923 < len__5769__auto___77922)){
args__5775__auto__.push((arguments[i__5770__auto___77923]));

var G__77924 = (i__5770__auto___77923 + (1));
i__5770__auto___77923 = G__77924;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__77242){
var map__77243 = p__77242;
var map__77243__$1 = cljs.core.__destructure_map(map__77243);
var params = map__77243__$1;
return bidi.bidi.path_for_STAR_(route,handler,params);
}));

(bidi.bidi.path_for.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bidi.bidi.path_for.cljs$lang$applyTo = (function (seq77237){
var G__77238 = cljs.core.first(seq77237);
var seq77237__$1 = cljs.core.next(seq77237);
var G__77239 = cljs.core.first(seq77237__$1);
var seq77237__$2 = cljs.core.next(seq77237__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77238,G__77239,seq77237__$2);
}));


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

var bidi$bidi$Matches$matches$dyn_77926 = (function (_){
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
return bidi$bidi$Matches$matches$dyn_77926(_);
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

(bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k77290,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__77330 = k77290;
var G__77330__$1 = (((G__77330 instanceof cljs.core.Keyword))?G__77330.fqn:null);
switch (G__77330__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77290,else__5346__auto__);

}
}));

(bidi.bidi.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__77343){
var vec__77344 = p__77343;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77344,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77344,(1),null);
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

(bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77289){
var self__ = this;
var G__77289__$1 = this;
return (new cljs.core.RecordIter((0),G__77289__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77291,other77292){
var self__ = this;
var this77291__$1 = this;
return (((!((other77292 == null)))) && ((((this77291__$1.constructor === other77292.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77291__$1.handler,other77292.handler)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77291__$1.path,other77292.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77291__$1.__extmap,other77292.__extmap)))))))));
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

(bidi.bidi.Route.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k77290){
var self__ = this;
var this__5350__auto____$1 = this;
var G__77369 = k77290;
var G__77369__$1 = (((G__77369 instanceof cljs.core.Keyword))?G__77369.fqn:null);
switch (G__77369__$1) {
case "handler":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77290);

}
}));

(bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__77289){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__77370 = cljs.core.keyword_identical_QMARK_;
var expr__77371 = k__5352__auto__;
if(cljs.core.truth_((pred__77370.cljs$core$IFn$_invoke$arity$2 ? pred__77370.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__77371) : pred__77370.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__77371)))){
return (new bidi.bidi.Route(G__77289,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77370.cljs$core$IFn$_invoke$arity$2 ? pred__77370.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__77371) : pred__77370.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__77371)))){
return (new bidi.bidi.Route(self__.handler,G__77289,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__77289),null));
}
}
}));

(bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__77289){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__77289,self__.__extmap,self__.__hash));
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
bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__77301){
var extmap__5385__auto__ = (function (){var G__77421 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77301,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__77301)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77421);
} else {
return G__77421;
}
})();
return (new bidi.bidi.Route(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__77301),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__77301),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

var bidi$bidi$RouteSeq$gather$dyn_77963 = (function (_,context){
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
return bidi$bidi$RouteSeq$gather$dyn_77963(_,context);
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__77433 = arguments.length;
switch (G__77433) {
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

(bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__77446,ctx){
var vec__77447 = p__77446;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77447,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77447,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5523__auto__ = (function bidi$bidi$iter__77454(s__77455){
return (new cljs.core.LazySeq(null,(function (){
var s__77455__$1 = s__77455;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77455__$1);
if(temp__5804__auto__){
var s__77455__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77455__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__77455__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__77457 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__77456 = (0);
while(true){
if((i__77456 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__77456);
cljs.core.chunk_append(b__77457,bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__77976 = (i__77456 + (1));
i__77456 = G__77976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77457),bidi$bidi$iter__77454(cljs.core.chunk_rest(s__77455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77457),null);
}
} else {
var p = cljs.core.first(s__77455__$2);
return cljs.core.cons(bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__77454(cljs.core.rest(s__77455__$2)));
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77473_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__77473_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77474_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__77474_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77475_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__77475_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77476_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__77476_SHARP_,context);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
}));

(cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77477_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__77477_SHARP_,context);
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

var bidi$bidi$RouteProvider$routes$dyn_77981 = (function (_){
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
return bidi$bidi$RouteProvider$routes$dyn_77981(_);
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

(bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k77495,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__77507 = k77495;
var G__77507__$1 = (((G__77507 instanceof cljs.core.Keyword))?G__77507.fqn:null);
switch (G__77507__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77495,else__5346__auto__);

}
}));

(bidi.bidi.Alternates.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__77511){
var vec__77512 = p__77511;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77512,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77512,(1),null);
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

(bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77494){
var self__ = this;
var G__77494__$1 = this;
return (new cljs.core.RecordIter((0),G__77494__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alts","alts",647552416)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77496,other77497){
var self__ = this;
var this77496__$1 = this;
return (((!((other77497 == null)))) && ((((this77496__$1.constructor === other77497.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77496__$1.alts,other77497.alts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77496__$1.__extmap,other77497.__extmap)))))));
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

(bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k77495){
var self__ = this;
var this__5350__auto____$1 = this;
var G__77526 = k77495;
var G__77526__$1 = (((G__77526 instanceof cljs.core.Keyword))?G__77526.fqn:null);
switch (G__77526__$1) {
case "alts":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77495);

}
}));

(bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__77494){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__77530 = cljs.core.keyword_identical_QMARK_;
var expr__77531 = k__5352__auto__;
if(cljs.core.truth_((pred__77530.cljs$core$IFn$_invoke$arity$2 ? pred__77530.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alts","alts",647552416),expr__77531) : pred__77530.call(null,new cljs.core.Keyword(null,"alts","alts",647552416),expr__77531)))){
return (new bidi.bidi.Alternates(G__77494,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__77494),null));
}
}));

(bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts,null))], null),self__.__extmap));
}));

(bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__77494){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__77494,self__.__extmap,self__.__hash));
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
return cljs.core.some((function (p1__77493_SHARP_){
return bidi.bidi.match_pattern(p1__77493_SHARP_,m);
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
bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__77501){
var extmap__5385__auto__ = (function (){var G__77548 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__77501,new cljs.core.Keyword(null,"alts","alts",647552416));
if(cljs.core.record_QMARK_(G__77501)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77548);
} else {
return G__77548;
}
})();
return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(G__77501),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78011 = arguments.length;
var i__5770__auto___78012 = (0);
while(true){
if((i__5770__auto___78012 < len__5769__auto___78011)){
args__5775__auto__.push((arguments[i__5770__auto___78012]));

var G__78013 = (i__5770__auto___78012 + (1));
i__5770__auto___78012 = G__78013;
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
(bidi.bidi.alts.cljs$lang$applyTo = (function (seq77559){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77559));
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

(bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k77586,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__77622 = k77586;
var G__77622__$1 = (((G__77622 instanceof cljs.core.Keyword))?G__77622.fqn:null);
switch (G__77622__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77586,else__5346__auto__);

}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__77650){
var vec__77652 = p__77650;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77652,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77652,(1),null);
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

(bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77585){
var self__ = this;
var G__77585__$1 = this;
return (new cljs.core.RecordIter((0),G__77585__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77587,other77588){
var self__ = this;
var this77587__$1 = this;
return (((!((other77588 == null)))) && ((((this77587__$1.constructor === other77588.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77587__$1.matched,other77588.matched)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77587__$1.tag,other77588.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77587__$1.__extmap,other77588.__extmap)))))))));
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

(bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k77586){
var self__ = this;
var this__5350__auto____$1 = this;
var G__77722 = k77586;
var G__77722__$1 = (((G__77722 instanceof cljs.core.Keyword))?G__77722.fqn:null);
switch (G__77722__$1) {
case "matched":
case "tag":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77586);

}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__77585){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__77723 = cljs.core.keyword_identical_QMARK_;
var expr__77724 = k__5352__auto__;
if(cljs.core.truth_((pred__77723.cljs$core$IFn$_invoke$arity$2 ? pred__77723.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matched","matched",-975207164),expr__77724) : pred__77723.call(null,new cljs.core.Keyword(null,"matched","matched",-975207164),expr__77724)))){
return (new bidi.bidi.TaggedMatch(G__77585,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77723.cljs$core$IFn$_invoke$arity$2 ? pred__77723.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__77724) : pred__77723.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__77724)))){
return (new bidi.bidi.TaggedMatch(self__.matched,G__77585,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__77585),null));
}
}
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null))], null),self__.__extmap));
}));

(bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__77585){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__77585,self__.__extmap,self__.__hash));
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
bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__77589){
var extmap__5385__auto__ = (function (){var G__77737 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77589,new cljs.core.Keyword(null,"matched","matched",-975207164),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223)], 0));
if(cljs.core.record_QMARK_(G__77589)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77737);
} else {
return G__77737;
}
})();
return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(G__77589),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__77589),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k77742,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__77748 = k77742;
var G__77748__$1 = (((G__77748 instanceof cljs.core.Keyword))?G__77748.fqn:null);
switch (G__77748__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77742,else__5346__auto__);

}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__77749){
var vec__77751 = p__77749;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77751,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77751,(1),null);
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

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77741){
var self__ = this;
var G__77741__$1 = this;
return (new cljs.core.RecordIter((0),G__77741__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77743,other77744){
var self__ = this;
var this77743__$1 = this;
return (((!((other77744 == null)))) && ((((this77743__$1.constructor === other77744.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77743__$1.id,other77744.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77743__$1.handler,other77744.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77743__$1.__extmap,other77744.__extmap)))))))));
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

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k77742){
var self__ = this;
var this__5350__auto____$1 = this;
var G__77774 = k77742;
var G__77774__$1 = (((G__77774 instanceof cljs.core.Keyword))?G__77774.fqn:null);
switch (G__77774__$1) {
case "id":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77742);

}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__77741){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__77776 = cljs.core.keyword_identical_QMARK_;
var expr__77777 = k__5352__auto__;
if(cljs.core.truth_((pred__77776.cljs$core$IFn$_invoke$arity$2 ? pred__77776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__77777) : pred__77776.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__77777)))){
return (new bidi.bidi.IdentifiableHandler(G__77741,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77776.cljs$core$IFn$_invoke$arity$2 ? pred__77776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__77777) : pred__77776.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__77777)))){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__77741,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__77741),null));
}
}
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__77741){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__77741,self__.__extmap,self__.__hash));
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
bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__77745){
var extmap__5385__auto__ = (function (){var G__77788 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77745,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__77745)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77788);
} else {
return G__77788;
}
})();
return (new bidi.bidi.IdentifiableHandler(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__77745),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__77745),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__77793 = arguments.length;
switch (G__77793) {
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

(bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k77795,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__77813 = k77795;
var G__77813__$1 = (((G__77813 instanceof cljs.core.Keyword))?G__77813.fqn:null);
switch (G__77813__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77795,else__5346__auto__);

}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__77814){
var vec__77815 = p__77814;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77815,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77815,(1),null);
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

(bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77794){
var self__ = this;
var G__77794__$1 = this;
return (new cljs.core.RecordIter((0),G__77794__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77796,other77797){
var self__ = this;
var this77796__$1 = this;
return (((!((other77797 == null)))) && ((((this77796__$1.constructor === other77797.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77796__$1.routes,other77797.routes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77796__$1.context,other77797.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77796__$1.__extmap,other77797.__extmap)))))))));
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

(bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k77795){
var self__ = this;
var this__5350__auto____$1 = this;
var G__77838 = k77795;
var G__77838__$1 = (((G__77838 instanceof cljs.core.Keyword))?G__77838.fqn:null);
switch (G__77838__$1) {
case "routes":
case "context":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77795);

}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__77794){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__77842 = cljs.core.keyword_identical_QMARK_;
var expr__77843 = k__5352__auto__;
if(cljs.core.truth_((pred__77842.cljs$core$IFn$_invoke$arity$2 ? pred__77842.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"routes","routes",457900162),expr__77843) : pred__77842.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__77843)))){
return (new bidi.bidi.RoutesContext(G__77794,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77842.cljs$core$IFn$_invoke$arity$2 ? pred__77842.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__77843) : pred__77842.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__77843)))){
return (new bidi.bidi.RoutesContext(self__.routes,G__77794,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__77794),null));
}
}
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__77794){
var self__ = this;
var this__5342__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__77794,self__.__extmap,self__.__hash));
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
bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__77802){
var extmap__5385__auto__ = (function (){var G__77852 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77802,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__77802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77852);
} else {
return G__77852;
}
})();
return (new bidi.bidi.RoutesContext(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__77802),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__77802),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
