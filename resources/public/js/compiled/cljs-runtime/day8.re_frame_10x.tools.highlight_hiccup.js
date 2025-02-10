goog.provide('day8.re_frame_10x.tools.highlight_hiccup');
day8.re_frame_10x.tools.highlight_hiccup.clj_core_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 49, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"import","import",241030818,null),null,new cljs.core.Symbol(null,"case","case",-1510733573,null),null,new cljs.core.Symbol(null,"when-first","when-first",821699168,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"condp","condp",1054325175,null),null,new cljs.core.Symbol(null,"sync","sync",1016382581,null),null,new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),null,new cljs.core.Symbol(null,"defprotocol","defprotocol",1388695348,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol(null,"comment","comment",-2122229700,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"loop","loop",1244978678,null),null,new cljs.core.Symbol(null,"doseq","doseq",221164135,null),null,new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),null,new cljs.core.Symbol(null,"dosync","dosync",336328035,null),null,new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null,new cljs.core.Symbol(null,"when","when",1064114221,null),null,new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),null,new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),null,new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),null,new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),null,new cljs.core.Symbol(null,"future","future",-776593045,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),null,new cljs.core.Symbol(null,"for","for",316745208,null),null,new cljs.core.Symbol(null,"proxy","proxy",1523077913,null),null,new cljs.core.Symbol(null,"cond","cond",1606708055,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"letfn","letfn",-480490827,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"cond->","cond->",561741875,null),null,new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),null,new cljs.core.Symbol(null,"locking","locking",1542862874,null),null,new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null,new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,new cljs.core.Symbol(null,"while","while",-1691317983,null),null], null), null);
day8.re_frame_10x.tools.highlight_hiccup.selected_style = (function day8$re_frame_10x$tools$highlight_hiccup$selected_style(p__73605){
var map__73606 = p__73605;
var map__73606__$1 = cljs.core.__destructure_map(map__73606);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73606__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted?","day8.re-frame-10x.panels.event.subs/highlighted?",-173027178),position], null))))){
return day8.re_frame_10x.styles.clj_highlighted();
} else {
return null;
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.tools !== 'undefined') && (typeof day8.re_frame_10x.tools.highlight_hiccup !== 'undefined') && (typeof day8.re_frame_10x.tools.highlight_hiccup.form !== 'undefined')){
} else {
day8.re_frame_10x.tools.highlight_hiccup.form = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__73619 = cljs.core.get_global_hierarchy;
return (fexpr__73619.cljs$core$IFn$_invoke$arity$0 ? fexpr__73619.cljs$core$IFn$_invoke$arity$0() : fexpr__73619.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("day8.re-frame-10x.tools.highlight-hiccup","form"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__73625){
var map__73626 = p__73625;
var map__73626__$1 = cljs.core.__destructure_map(map__73626);
var node = map__73626__$1;
var string_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73626__$1,new cljs.core.Keyword(null,"string-value","string-value",1109600561));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.clj-unknown","span.clj-unknown",-743161249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-clj-node","data-clj-node",1763736610),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(node))], null),string_value], null);
}));
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.tools !== 'undefined') && (typeof day8.re_frame_10x.tools.highlight_hiccup !== 'undefined') && (typeof day8.re_frame_10x.tools.highlight_hiccup.token_form !== 'undefined')){
} else {
day8.re_frame_10x.tools.highlight_hiccup.token_form = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__73638 = cljs.core.get_global_hierarchy;
return (fexpr__73638.cljs$core$IFn$_invoke$arity$0 ? fexpr__73638.cljs$core$IFn$_invoke$arity$0() : fexpr__73638.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("day8.re-frame-10x.tools.highlight-hiccup","token-form"),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.type,new cljs.core.Keyword(null,"value","value",305978217)),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
day8.re_frame_10x.tools.highlight_hiccup.token_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.type(true),(function (p__73645){
var map__73647 = p__73645;
var map__73647__$1 = cljs.core.__destructure_map(map__73647);
var string_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73647__$1,new cljs.core.Keyword(null,"string-value","string-value",1109600561));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__boolean","code.clj__boolean",-1577755684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.clj_boolean()], null),string_value], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.token_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.type((0)),(function (p__73652){
var map__73653 = p__73652;
var map__73653__$1 = cljs.core.__destructure_map(map__73653);
var string_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73653__$1,new cljs.core.Keyword(null,"string-value","string-value",1109600561));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__number","code.clj__number",-894249176),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.clj_number()], null),string_value], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.token_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.type(null),(function (p__73660){
var map__73661 = p__73660;
var map__73661__$1 = cljs.core.__destructure_map(map__73661);
var string_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73661__$1,new cljs.core.Keyword(null,"string-value","string-value",1109600561));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__nil","code.clj__nil",-1898858100),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.clj_nil()], null),string_value], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.token_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__73665){
var map__73669 = p__73665;
var map__73669__$1 = cljs.core.__destructure_map(map__73669);
var string_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73669__$1,new cljs.core.Keyword(null,"string-value","string-value",1109600561));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.clj__token","span.clj__token",2110023139),string_value], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.token.TokenNode,(function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.tools.highlight_hiccup.token_form,node], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.whitespace.CommaNode,(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.clj__comma","span.clj__comma",-1768743275),","], null);
}));
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.tools !== 'undefined') && (typeof day8.re_frame_10x.tools.highlight_hiccup !== 'undefined') && (typeof day8.re_frame_10x.tools.highlight_hiccup.seq_form !== 'undefined')){
} else {
day8.re_frame_10x.tools.highlight_hiccup.seq_form = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__73679 = cljs.core.get_global_hierarchy;
return (fexpr__73679.cljs$core$IFn$_invoke$arity$0 ? fexpr__73679.cljs$core$IFn$_invoke$arity$0() : fexpr__73679.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("day8.re-frame-10x.tools.highlight-hiccup","seq-form"),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
day8.re_frame_10x.tools.highlight_hiccup.seq_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__unknown","code.clj__unknown",631426260)], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.seq_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__73683){
var map__73687 = p__73683;
var map__73687__$1 = cljs.core.__destructure_map(map__73687);
var node = map__73687__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.seq","code.seq",2104544782),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.styles.clj_seq(),day8.re_frame_10x.tools.highlight_hiccup.selected_style(node)], null)], null)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null)], 0)));
}));
day8.re_frame_10x.tools.highlight_hiccup.seq_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__73691){
var map__73692 = p__73691;
var map__73692__$1 = cljs.core.__destructure_map(map__73692);
var node = map__73692__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__seq","code.clj__seq",411121272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.tools.highlight_hiccup.selected_style(node)], null)], null)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null)], 0)));
}));
day8.re_frame_10x.tools.highlight_hiccup.seq_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__73698){
var map__73703 = p__73698;
var map__73703__$1 = cljs.core.__destructure_map(map__73703);
var node = map__73703__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__map","code.clj__map",609142260),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.tools.highlight_hiccup.selected_style(node)], null)], null)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{"], null),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}"], null)], 0)));
}));
day8.re_frame_10x.tools.highlight_hiccup.seq_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__73705){
var map__73706 = p__73705;
var map__73706__$1 = cljs.core.__destructure_map(map__73706);
var node = map__73706__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.seq","code.seq",2104544782),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.styles.clj_seq(),day8.re_frame_10x.tools.highlight_hiccup.selected_style(node)], null)], null)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{"], null),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}"], null)], 0)));
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.seq.SeqNode,(function (node){
return day8.re_frame_10x.tools.highlight_hiccup.seq_form.cljs$core$IFn$_invoke$arity$1(node);
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.token.SymbolNode,(function (p__73709){
var map__73710 = p__73709;
var map__73710__$1 = cljs.core.__destructure_map(map__73710);
var node = map__73710__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73710__$1,new cljs.core.Keyword(null,"value","value",305978217));
var string_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73710__$1,new cljs.core.Keyword(null,"string-value","string-value",1109600561));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__symbol","code.clj__symbol",59601663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((day8.re_frame_10x.tools.highlight_hiccup.clj_core_macros.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.tools.highlight_hiccup.clj_core_macros.cljs$core$IFn$_invoke$arity$1(value) : day8.re_frame_10x.tools.highlight_hiccup.clj_core_macros.call(null,value)))?day8.re_frame_10x.styles.clj_core_macro():day8.re_frame_10x.styles.clj_symbol()),day8.re_frame_10x.tools.highlight_hiccup.selected_style(node)], null)], null),string_value], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.whitespace.WhitespaceNode,(function (p__73711){
var map__73712 = p__73711;
var map__73712__$1 = cljs.core.__destructure_map(map__73712);
var whitespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73712__$1,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__whitespace","code.clj__whitespace",987799498),whitespace], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.whitespace.NewlineNode,(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.keyword.KeywordNode,(function (p__73718){
var map__73719 = p__73718;
var map__73719__$1 = cljs.core.__destructure_map(map__73719);
var node = map__73719__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73719__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var ns__GT_alias = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns->alias","day8.re-frame-10x.panels.settings.subs/ns->alias",925252888)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__keyword","code.clj__keyword",1509635636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.styles.clj_keyword(),day8.re_frame_10x.tools.highlight_hiccup.selected_style(node)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.tools.datafy.alias(k,cljs.core.deref(ns__GT_alias)))], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IMultiFn$_add_method$arity$3(null,rewrite_clj.node.stringz.StringNode,(function (p__73722){
var map__73723 = p__73722;
var map__73723__$1 = cljs.core.__destructure_map(map__73723);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73723__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.clj__string","code.clj__string",1930600723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.styles.clj_string()], null),"\"",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines),"\""], null);
}));
day8.re_frame_10x.tools.highlight_hiccup.str__GT_hiccup = (function day8$re_frame_10x$tools$highlight_hiccup$str__GT_hiccup(s){
var positional_ast = rewrite_clj.zip.node(rewrite_clj.zip.postwalk.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.of_string.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"track-position?","track-position?",1860535489),true], null)),(function (p1__73729_SHARP_){
return rewrite_clj.zip.edit_STAR_.cljs$core$IFn$_invoke$arity$variadic(p1__73729_SHARP_,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.zip.position(p1__73729_SHARP_)], 0));
})));
return clojure.walk.postwalk((function (p1__73730_SHARP_){
var G__73731 = p1__73730_SHARP_;
if(cljs.core.record_QMARK_(p1__73730_SHARP_)){
return day8.re_frame_10x.tools.highlight_hiccup.form.cljs$core$IFn$_invoke$arity$1(G__73731);
} else {
return G__73731;
}
}),positional_ast);
});

//# sourceMappingURL=day8.re_frame_10x.tools.highlight_hiccup.js.map
