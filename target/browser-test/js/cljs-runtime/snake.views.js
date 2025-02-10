goog.provide('snake.views');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(function (cofx,p__176119){
var vec__176121 = p__176119;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176121,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176121,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),act,(function (v){
return (v + (1));
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-crd","update-crd",1772775171)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake-grow","snake-grow",-1783995614)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eat-food","eat-food",-612347853)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-lose","check-lose",-643351330)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-crd-with-turns","update-crd-with-turns",-288445194)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-vacant-turns","remove-vacant-turns",334741267)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-crd","update-crd",1772775171),(function (db,p__176127){
var vec__176131 = p__176127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176131,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176131,(1),null);
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
snake.views.turns_map = cljs.core.PersistentArrayMap.createAsIfByAssoc([snake.views.inc_x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"l","l",1395893423),snake.views.dec_y,new cljs.core.Keyword(null,"r","r",-471384190),snake.views.inc_y], null),snake.views.dec_x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"l","l",1395893423),snake.views.inc_y,new cljs.core.Keyword(null,"r","r",-471384190),snake.views.dec_y], null),snake.views.inc_y,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"l","l",1395893423),snake.views.dec_x,new cljs.core.Keyword(null,"r","r",-471384190),snake.views.inc_x], null),snake.views.dec_y,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"l","l",1395893423),snake.views.inc_x,new cljs.core.Keyword(null,"r","r",-471384190),snake.views.dec_x], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-lose","check-lose",-643351330),(function (db,p__176150){
var vec__176151 = p__176150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176151,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176151,(1),null);
var head = cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db));
var hx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var hy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var fx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db));
var fy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__176149_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,p1__176149_SHARP_);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eat-food","eat-food",-612347853),(function (db,p__176160){
var vec__176161 = p__176160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176161,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176161,(1),null);
var head = cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db));
var hx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var hy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(head));
var foods_db = new cljs.core.Keyword(null,"foods","foods",1627982980).cljs$core$IFn$_invoke$arity$1(db);
var head_food = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hx,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(f))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hy,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(f))));
}),foods_db);
if(cljs.core.truth_(cljs.core.not_empty(head_food))){
var tail = cljs.core.last(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db));
var eated_food_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"foods","foods",1627982980),(function (fds){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__176159_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__176159_SHARP_,cljs.core.first(head_food));
}),fds));
}));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(eated_food_db,new cljs.core.Keyword(null,"grow-queue","grow-queue",-877752680),(function (q){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(q,tail);
}));
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snake-grow","snake-grow",-1783995614),(function (db,p__176168){
var vec__176169 = p__176168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176169,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176169,(1),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-crd-with-turns","update-crd-with-turns",-288445194),(function (db,p__176172){
var vec__176173 = p__176172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176173,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176173,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),(function (points){
return snake.views.merge_with_match(points,new cljs.core.Keyword(null,"turns","turns",-1118736892).cljs$core$IFn$_invoke$arity$1(db));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-vacant-turns","remove-vacant-turns",334741267),(function (db,p__176176){
var vec__176178 = p__176176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176178,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176178,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"turns","turns",-1118736892),(function (turns){
return cljs.core.vec(snake.views.remove_absent(turns,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db)));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-turn","add-turn",-749240583),(function (cofx,p__176184){
var vec__176186 = p__176184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176186,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176186,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"turns","turns",-1118736892),(function (___$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"crd","crd",-828746341),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.Keyword(null,"nxt","nxt",444826690),snake.views.inc_y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"crd","crd",-828746341),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null),new cljs.core.Keyword(null,"nxt","nxt",444826690),snake.views.dec_x], null)], null);
}))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-turn-l","add-turn-l",2147393902),(function (db,p__176192){
var vec__176194 = p__176192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176194,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176194,(1),null);
return null;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-turn-r","add-turn-r",146687702),(function (db,p__176200){
var vec__176201 = p__176200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176201,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176201,(1),null);
var cur = (db.cljs$core$IFn$_invoke$arity$2 ? db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.first) : db.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.first));
var new$ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cur,new cljs.core.Keyword(null,"crd","crd",-828746341),(function (___$2){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null);
}));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"turns","turns",-1118736892),(function (___$2){
return cur;
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-point","add-point",-1861575067),(function (db,p__176216){
var vec__176217 = p__176216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176217,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176217,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),(function (___$2){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"crd","crd",-828746341),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.Keyword(null,"nxt","nxt",444826690),snake.views.inc_x], null)], null);
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chain","chain",15631029),(function (cofx,p__176224){
var vec__176226 = p__176224;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176226,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176226,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),act,(function (___$1){
return (3);
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain-2","chain-2",1675205838)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain-3","chain-3",-451798288)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chain-2","chain-2",1675205838),(function (cofx,p__176232){
var vec__176234 = p__176232;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176234,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176234,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"chain","chain",15631029),(function (v){
return (v + v);
}))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chain-3","chain-3",-451798288),(function (cofx,p__176240){
var vec__176241 = p__176240;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176241,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176241,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"chain","chain",15631029),(function (v){
return (v * v);
}))], null);
}));
snake.views.snake_app = (function snake$views$snake_app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Snake game"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null));
})], null),"Move"], null)], null),"-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-crd","update-crd",1772775171)], null));
})], null),"Update coordinate"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-lose","check-lose",-643351330)], null));
})], null),"Check lose"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eat-food","eat-food",-612347853)], null));
})], null),"Eat foot"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake-grow","snake-grow",-1783995614)], null));
})], null),"Snake grow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-crd-with-turns","update-crd-with-turns",-288445194)], null));
})], null),"Update with turns"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-vacant-turns","remove-vacant-turns",334741267)], null));
})], null),"Remove turns"], null)], null),"- Helpers",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-point","add-point",-1861575067)], null));
})], null),"Add Point"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-turn-l","add-turn-l",2147393902)], null));
})], null),"Add Turn L"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-turn-r","add-turn-r",146687702)], null));
})], null),"Add Turn R"], null)], null)], null)], null);
});
snake.views.home_title = (function snake$views$home_title(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.subs","name","snake.subs/name",1407078992)], null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),267], null)),new cljs.core.Keyword(null,"label","label",1718410804),["Hello from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(name)),". This is the Home Page."].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"class","class",-2030961996),snake.styles.level1()], null);
});
snake.views.link_to_about_page = (function snake$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),274], null)),new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.events","navigate","snake.events/navigate",-19167472),new cljs.core.Keyword(null,"about","about",1423892543)], null));
})], null);
});
snake.views.home_panel = (function snake$views$home_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),280], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.snake_app], null)], null)], null);
});
snake.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.home_panel], null);
}));
snake.views.about_title = (function snake$views$about_title(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),292], null)),new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
snake.views.link_to_home_page = (function snake$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),298], null)),new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.events","navigate","snake.events/navigate",-19167472),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null);
});
snake.views.about_panel = (function snake$views$about_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),304], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.about_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.link_to_home_page], null)], null)], null)], null);
});
snake.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.views.about_panel], null);
}));
snake.views.main_panel = (function snake$views$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake.subs","active-panel","snake.subs/active-panel",-1231989291)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"snake/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),316], null)),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.routes.panels.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(active_panel))], null)], null);
});

//# sourceMappingURL=snake.views.js.map
