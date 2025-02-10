goog.provide('snake.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("snake.events","initialize-db","snake.events/initialize-db",-1534678235),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__25441__auto__ = snake.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__25441__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25441__auto__;
}catch (e162102){var e = e162102;
throw e;
}}):(function (_,___$1){
return snake.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("snake.events","navigate","snake.events/navigate",-19167472),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__162103){
var vec__162104 = p__162103;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162104,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162104,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)));

var result__25441__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__25441__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__25441__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25441__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__25441__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25441__auto__;
}catch (e162107){var e = e162107;
throw e;
}}):(function (_,p__162108){
var vec__162109 = p__162108;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162109,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162109,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("snake.events","set-active-panel","snake.events/set-active-panel",-1624526989),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__162112,p__162113){
var map__162114 = p__162112;
var map__162114__$1 = cljs.core.__destructure_map(map__162114);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162114__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__162115 = p__162113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162115,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162115,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null)));

var result__25441__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__25441__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__25441__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__25441__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25441__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__25441__auto__ = active_panel;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__25441__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25441__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__25441__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25441__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__25441__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25441__auto__;
}catch (e162118){var e = e162118;
throw e;
}}):(function (p__162119,p__162120){
var map__162121 = p__162119;
var map__162121__$1 = cljs.core.__destructure_map(map__162121);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162121__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__162122 = p__162120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162122,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162122,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
})));

//# sourceMappingURL=snake.events.js.map
