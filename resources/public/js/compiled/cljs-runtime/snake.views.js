goog.provide('snake.views');
snake.views.key_rules_move_snake_debug = (function snake$views$key_rules_move_snake_debug(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-point","add-point",-1861575067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(32)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"u","u",-1156634785)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(87)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"d","d",1972142424)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(83)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"l","l",1395893423)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(65)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"r","r",-471384190)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(68)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"u","u",-1156634785)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(38)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"d","d",1972142424)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(40)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"l","l",1395893423)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(37)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.Keyword(null,"r","r",-471384190)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(39)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
});
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"key-press-time","key-press-time",861276685),(function (cofx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"key-press-time","key-press-time",861276685),Date());
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key-press-time","key-press-time",861276685))], null),(function (cofx,p__43423){
var vec__43424 = p__43423;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43424,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43424,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"move-with-key","move-with-key",1596331895),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-press-time","key-press-time",861276685),new cljs.core.Keyword(null,"key-press-time","key-press-time",861276685).cljs$core$IFn$_invoke$arity$1(cofx)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-turn","add-turn",-749240583),value], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (cofx,p__43428){
var vec__43429 = p__43428;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43429,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43429,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),act,(function (v){
return (v + (1));
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-crd","update-crd",1772775171)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake-grow","snake-grow",-1783995614)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eat-food","eat-food",-612347853)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generate-growers","generate-growers",-156867758)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-lose","check-lose",-643351330)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-crd-with-turns","update-crd-with-turns",-288445194)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-vacant-turns","remove-vacant-turns",334741267)], null)], null)], null)], null);
}));
snake.views.dispatch_timer_event = (function snake$views$dispatch_timer_event(){
var now = (new Date());
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),now], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (cofx,p__43433){
var vec__43434 = p__43433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43434,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43434,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"time","time",1385887882),new_time),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null)], null)], null)], null);
}));
snake.views.matom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ticker","ticker",214613162),null,new cljs.core.Keyword(null,"value","value",305978217),(0)], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-tick","start-tick",1709314339),(function (cofx,p__43437){
var vec__43438 = p__43437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43438,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-tick-fx","start-tick-fx",388220949),v], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"start-tick-fx","start-tick-fx",388220949),(function (v){
console.log("start-tick-fx",v);

return cljs.core.reset_BANG_(snake.views.matom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ticker","ticker",214613162),setInterval(snake.views.dispatch_timer_event,v),new cljs.core.Keyword(null,"value","value",305978217),v], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"speed-up-tick","speed-up-tick",876584097),(function (cofx,p__43441){
var vec__43442 = p__43441;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43442,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43442,(1),null);
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.views.matom));
var new_v = (v - (100));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-tick","stop-tick",1625413242)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-tick","start-tick",1709314339),new_v], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-tick","stop-tick",1625413242),(function (cofx,p__43445){
var vec__43446 = p__43445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43446,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43446,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop-tick-fx","stop-tick-fx",1841170287),null], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"stop-tick-fx","stop-tick-fx",1841170287),(function (ticker){
console.log("stop-tick-fx");

clearInterval(new cljs.core.Keyword(null,"ticker","ticker",214613162).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(snake.views.matom)));

return cljs.core.reset_BANG_(snake.views.matom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ticker","ticker",214613162),null,new cljs.core.Keyword(null,"value","value",305978217),(0)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-crd","update-crd",1772775171),(function (db,p__43451){
var vec__43452 = p__43451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),(function (points){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crd","crd",-828746341)], null),new cljs.core.Keyword(null,"nxt","nxt",444826690).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db));
}),points));
}));
}));
snake.views.inc_x = (function snake$views$inc_x(pnt,frm){
var r = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pnt) + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pnt,new cljs.core.Keyword(null,"x","x",2099068185),r);
});
snake.views.dec_x = (function snake$views$dec_x(pnt,frm){
var r = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pnt) - (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pnt,new cljs.core.Keyword(null,"x","x",2099068185),r);
});
snake.views.inc_y = (function snake$views$inc_y(pnt,frm){
var r = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pnt) + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pnt,new cljs.core.Keyword(null,"y","y",-1757859776),r);
});
snake.views.dec_y = (function snake$views$dec_y(pnt,frm){
var r = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pnt) - (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pnt,new cljs.core.Keyword(null,"y","y",-1757859776),r);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-lose","check-lose",-643351330),(function (db,p__43459){
var vec__43460 = p__43459;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43460,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43460,(1),null);
var head = cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db));
var hx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var hy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var fx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db));
var fy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head),new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(v));
}),cljs.core.rest(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((hx <= (0))) || ((((hy <= (0))) || ((((hx > fx)) || ((hy > fy)))))));
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-lose","is-lose",-656697161),(function (___$2){
return true;
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-lose","is-lose",-656697161),(function (___$2){
return false;
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eat-food","eat-food",-612347853),(function (db,p__43464){
var vec__43465 = p__43464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43465,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43465,(1),null);
var head = cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db));
var hx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var hy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var growers = new cljs.core.Keyword(null,"growers","growers",-40444677).cljs$core$IFn$_invoke$arity$1(db);
var head_food = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hx,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(f))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hy,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(f))));
}),growers);
if(cljs.core.truth_(cljs.core.not_empty(head_food))){
var tail = cljs.core.last(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db));
var eated_growers = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"growers","growers",-40444677),(function (fds){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43463_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__43463_SHARP_,cljs.core.first(head_food));
}),fds));
}));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(eated_growers,new cljs.core.Keyword(null,"grow-queue","grow-queue",-877752680),(function (q){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(q,tail);
}));
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake-grow","snake-grow",-1783995614),(function (db,p__43468){
var vec__43469 = p__43468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43469,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43469,(1),null);
var temp__5802__auto__ = cljs.core.first(new cljs.core.Keyword(null,"grow-queue","grow-queue",-877752680).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__5802__auto__)){
var new$ = temp__5802__auto__;
var rst = cljs.core.rest(new cljs.core.Keyword(null,"grow-queue","grow-queue",-877752680).cljs$core$IFn$_invoke$arity$1(db));
var new_grow_queue = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"grow-queue","grow-queue",-877752680),(function (___$2){
return cljs.core.vec(rst);
}));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(new_grow_queue,new cljs.core.Keyword(null,"points","points",-1486596883),(function (points){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(points,new$);
}));
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generate-growers","generate-growers",-156867758),(function (db,p__43472){
var vec__43473 = p__43472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(1),null);
if((cljs.core.rand_int((100)) > (85))){
var x = (cljs.core.rand_int(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db))) + (1));
var y = (cljs.core.rand_int(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db))) + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"growers","growers",-40444677),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"growers","growers",-40444677).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)));
} else {
return db;
}
}));
snake.views.remove_absent = (function snake$views$remove_absent(t,e){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(p)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(p)))));
}),e));
}),t);
});
snake.views.merge_with_match = (function snake$views$merge_with_match(points,turns){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
var r = snake.views.remove_absent(turns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
if(cljs.core.truth_(cljs.core.not_empty(r))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs.core.first(r)], 0));
} else {
return p;
}
}),points));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-crd-with-turns","update-crd-with-turns",-288445194),(function (db,p__43476){
var vec__43477 = p__43476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43477,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43477,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),(function (points){
return snake.views.merge_with_match(points,new cljs.core.Keyword(null,"turns","turns",-1118736892).cljs$core$IFn$_invoke$arity$1(db));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-vacant-turns","remove-vacant-turns",334741267),(function (db,p__43480){
var vec__43481 = p__43480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43481,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43481,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"turns","turns",-1118736892),(function (turns){
return cljs.core.vec(snake.views.remove_absent(turns,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db)));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-turn","add-turn",-749240583),(function (db,p__43484){
var vec__43485 = p__43484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43485,(0),null);
var flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43485,(1),null);
var flow_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1395893423),snake.views.dec_x,new cljs.core.Keyword(null,"r","r",-471384190),snake.views.inc_x,new cljs.core.Keyword(null,"u","u",-1156634785),snake.views.dec_y,new cljs.core.Keyword(null,"d","d",1972142424),snake.views.inc_y], null);
var new_flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(flow_map,flow);
var upd_with_head = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),(function (p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"nxt","nxt",444826690),new_flow);
}));
var head = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(upd_with_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null));
var hx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var hy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var clean_double = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (v){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hx,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(v)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hy,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(v)))));
}),new cljs.core.Keyword(null,"turns","turns",-1118736892).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(upd_with_head,new cljs.core.Keyword(null,"turns","turns",-1118736892),(function (___$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clean_double,head);
}));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"is-lose","is-lose",-656697161),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"is-lose","is-lose",-656697161).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"growers","growers",-40444677),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"growers","growers",-40444677).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"snake","snake",-244377242),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"frame-field-empty","frame-field-empty",1054349749),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
var frame = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (___$1){
return "[]";
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db)))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db)))));
return frame;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"frame-field-content","frame-field-content",324822389),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-field-empty","frame-field-empty",1054349749)], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242)], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"growers","growers",-40444677)], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-lose","is-lose",-656697161)], null))], null);
}),(function (p__43488){
var vec__43489 = p__43488;
var frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43489,(0),null);
var snake__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43489,(1),null);
var growers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43489,(2),null);
var is_lose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43489,(3),null);
snake.views.frame_with_growers = (function (){var i = (0);
var frm = frame;
while(true){
if((i >= cljs.core.count(growers))){
return frm;
} else {
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(growers,i);
var gx = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.Keyword(null,"x","x",2099068185)) - (1));
var gy = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.Keyword(null,"y","y",-1757859776)) - (1));
var G__43520 = (i + (1));
var G__43521 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gy,gx], null),((function (i,frm,g,gx,gy,vec__43489,frame,snake__$1,growers,is_lose){
return (function (_){
return "+";
});})(i,frm,g,gx,gy,vec__43489,frame,snake__$1,growers,is_lose))
);
i = G__43520;
frm = G__43521;
continue;
}
break;
}
})();

var i = (0);
var frm = snake.views.frame_with_growers;
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = (i >= cljs.core.count(snake__$1));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return is_lose;
}
})())){
return frm;
} else {
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snake__$1,i);
var px = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(p)) - (1));
var py = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(p)) - (1));
var G__43522 = (i + (1));
var G__43523 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [py,px], null),((function (i,frm,p,px,py,vec__43489,frame,snake__$1,growers,is_lose){
return (function (_){
return "*";
});})(i,frm,p,px,py,vec__43489,frame,snake__$1,growers,is_lose))
);
i = G__43522;
frm = G__43523;
continue;
}
break;
}
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-point","add-point",-1861575067),(function (db,p__43492){
var vec__43493 = p__43492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43493,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43493,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),(function (___$2){
return cljs.core.vec(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"crd","crd",-828746341),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),v,new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.Keyword(null,"nxt","nxt",444826690),snake.views.inc_x], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(2)))));
}));
}));
snake.views.table_frame = (function snake$views$table_frame(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function snake$views$table_frame_$_iter__43496(s__43497){
return (new cljs.core.LazySeq(null,(function (){
var s__43497__$1 = s__43497;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43497__$1);
if(temp__5804__auto__){
var s__43497__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43497__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43497__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43499 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43498 = (0);
while(true){
if((i__43498 < size__5522__auto__)){
var frame = cljs.core._nth(c__5521__auto__,i__43498);
cljs.core.chunk_append(b__43499,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),(function (){var iter__5523__auto__ = ((function (i__43498,frame,c__5521__auto__,size__5522__auto__,b__43499,s__43497__$2,temp__5804__auto__){
return (function snake$views$table_frame_$_iter__43496_$_iter__43500(s__43501){
return (new cljs.core.LazySeq(null,((function (i__43498,frame,c__5521__auto__,size__5522__auto__,b__43499,s__43497__$2,temp__5804__auto__){
return (function (){
var s__43501__$1 = s__43501;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43501__$1);
if(temp__5804__auto____$1){
var s__43501__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43501__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__43501__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__43503 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__43502 = (0);
while(true){
if((i__43502 < size__5522__auto____$1)){
var cell = cljs.core._nth(c__5521__auto____$1,i__43502);
cljs.core.chunk_append(b__43503,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),cell], null));

var G__43524 = (i__43502 + (1));
i__43502 = G__43524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43503),snake$views$table_frame_$_iter__43496_$_iter__43500(cljs.core.chunk_rest(s__43501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43503),null);
}
} else {
var cell = cljs.core.first(s__43501__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),cell], null),snake$views$table_frame_$_iter__43496_$_iter__43500(cljs.core.rest(s__43501__$2)));
}
} else {
return null;
}
break;
}
});})(i__43498,frame,c__5521__auto__,size__5522__auto__,b__43499,s__43497__$2,temp__5804__auto__))
,null,null));
});})(i__43498,frame,c__5521__auto__,size__5522__auto__,b__43499,s__43497__$2,temp__5804__auto__))
;
return iter__5523__auto__(frame);
})()], null));

var G__43525 = (i__43498 + (1));
i__43498 = G__43525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43499),snake$views$table_frame_$_iter__43496(cljs.core.chunk_rest(s__43497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43499),null);
}
} else {
var frame = cljs.core.first(s__43497__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),(function (){var iter__5523__auto__ = ((function (frame,s__43497__$2,temp__5804__auto__){
return (function snake$views$table_frame_$_iter__43496_$_iter__43504(s__43505){
return (new cljs.core.LazySeq(null,(function (){
var s__43505__$1 = s__43505;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43505__$1);
if(temp__5804__auto____$1){
var s__43505__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43505__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43505__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43507 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43506 = (0);
while(true){
if((i__43506 < size__5522__auto__)){
var cell = cljs.core._nth(c__5521__auto__,i__43506);
cljs.core.chunk_append(b__43507,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),cell], null));

var G__43526 = (i__43506 + (1));
i__43506 = G__43526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43507),snake$views$table_frame_$_iter__43496_$_iter__43504(cljs.core.chunk_rest(s__43505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43507),null);
}
} else {
var cell = cljs.core.first(s__43505__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),cell], null),snake$views$table_frame_$_iter__43496_$_iter__43504(cljs.core.rest(s__43505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(frame,s__43497__$2,temp__5804__auto__))
;
return iter__5523__auto__(frame);
})()], null),snake$views$table_frame_$_iter__43496(cljs.core.rest(s__43497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-field-content","frame-field-content",324822389)], null))));
})()], null)], null);
});
snake.views.snake_app = (function snake$views$snake_app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Snake game"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-tick","start-tick",1709314339),(300)], null));
})], null),"Start Game"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-point","add-point",-1861575067)], null));
})], null),"Create Snake"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.table_frame], null)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chain","chain",15631029),(function (cofx,p__43508){
var vec__43509 = p__43508;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43509,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43509,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),act,(function (___$1){
return (3);
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain-2","chain-2",1675205838)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain-3","chain-3",-451798288)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chain-2","chain-2",1675205838),(function (cofx,p__43512){
var vec__43513 = p__43512;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43513,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43513,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"chain","chain",15631029),(function (v){
return (v + v);
}))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chain-3","chain-3",-451798288),(function (cofx,p__43516){
var vec__43517 = p__43516;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43517,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43517,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"chain","chain",15631029),(function (v){
return (v * v);
}))], null);
}));
snake.views.home_title = (function snake$views$home_title(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.subs","name","snake.subs/name",1407078992)], null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),465], null)),new cljs.core.Keyword(null,"label","label",1718410804),["Hello from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(name)),". This is the Home Page."].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"class","class",-2030961996),snake.styles.level1()], null);
});
snake.views.link_to_about_page = (function snake$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),472], null)),new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.events","navigate","snake.events/navigate",-19167472),new cljs.core.Keyword(null,"about","about",1423892543)], null));
})], null);
});
snake.views.home_panel = (function snake$views$home_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),478], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.tetris.tetris_app], null)], null)], null);
});
snake.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.home_panel], null);
}));
snake.views.about_title = (function snake$views$about_title(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),494], null)),new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
snake.views.link_to_home_page = (function snake$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),500], null)),new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.events","navigate","snake.events/navigate",-19167472),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null);
});
snake.views.about_panel = (function snake$views$about_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),506], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.about_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.link_to_home_page], null)], null)], null)], null);
});
snake.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.about_panel], null);
}));
snake.views.main_panel = (function snake$views$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.subs","active-panel","snake.subs/active-panel",-1231989291)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),518], null)),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.routes.panels.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(active_panel))], null)], null);
});

//# sourceMappingURL=snake.views.js.map
