goog.provide('snake.tetris');
snake.tetris.empty_matrix_nm = (function snake$tetris$empty_matrix_nm(n,m){
var line = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(line)));
});
snake.tetris.rotate_matrix = (function snake$tetris$rotate_matrix(m){
var transpose = (function (v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ind){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43356_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__43356_SHARP_,ind);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43357_SHARP_){
return cljs.core.contains_QMARK_(p1__43357_SHARP_,ind);
}),v));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,v))));
});
var transposed = transpose(m);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.vec(cljs.core.reverse(v));
}),transposed));
});
snake.tetris.clear_matrix = (function snake$tetris$clear_matrix(m){
var pure_m = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43358_SHARP_){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),p1__43358_SHARP_);
}),m);
var zero_row = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(m)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
var zero_m = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(m) - cljs.core.count(pure_m)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zero_row));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(zero_m,pure_m));
});
snake.tetris.merge_matrices = (function snake$tetris$merge_matrices(dst,src,origin){
var y = (cljs.core.last(origin) - (1));
var src__$1 = src;
var dst__$1 = dst;
while(true){
if(cljs.core.empty_QMARK_(src__$1)){
return dst__$1;
} else {
var G__43417 = (y + (1));
var G__43418 = cljs.core.rest(src__$1);
var G__43419 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(dst__$1,y,((function (y,src__$1,dst__$1){
return (function (v){
var f = cljs.core.first(src__$1);
var pre = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.first(origin) - (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
var post = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(v) - (cljs.core.count(pre) + cljs.core.count(f))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
var f2 = cljs.core.vec(cljs.core.flatten(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,f,post], null)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (y,src__$1,dst__$1,f,pre,post,f2){
return (function (v__$1,f__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),f__$1)){
return f__$1;
} else {
return v__$1;
}
});})(y,src__$1,dst__$1,f,pre,post,f2))
,v,f2);
});})(y,src__$1,dst__$1))
);
y = G__43417;
src__$1 = G__43418;
dst__$1 = G__43419;
continue;
}
break;
}
});
snake.tetris.relative_coordinates = (function snake$tetris$relative_coordinates(p__43359,matrix){
var vec__43360 = p__43359;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(1),null);
var r = cljs.core.PersistentVector.EMPTY;
var row = cljs.core.first(matrix);
var rest_rows = cljs.core.next(matrix);
while(true){
if((row == null)){
return r;
} else {
var coordinates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (r,row,rest_rows,vec__43360,x,y){
return (function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + a),(y + (cljs.core.count(matrix) - (cljs.core.count(rest_rows) + (1))))], null);
});})(r,row,rest_rows,vec__43360,x,y))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
var G__43420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,coordinates));
var G__43421 = cljs.core.first(rest_rows);
var G__43422 = cljs.core.next(rest_rows);
r = G__43420;
row = G__43421;
rest_rows = G__43422;
continue;
}
break;
}
});
snake.tetris.can_merge_matrices_without_loses = (function snake$tetris$can_merge_matrices_without_loses(dst,src,origin){
var src_crds = snake.tetris.relative_coordinates(origin,src);
var offset_x = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(src_crds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var offset_y = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(src_crds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43363){
var vec__43364 = p__43363;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43364,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43364,(1),null);
var src_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(src,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y - offset_y),(x - offset_x)], null));
var dst_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dst,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y - (1)),(x - (1))], null));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),src_value)) && ((dst_value == null)))){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((1),dst_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src_value], 0))){
return false;
} else {
return true;

}
}
}),src_crds));
});
snake.tetris.tetrominoes = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null)], null);
snake.tetris.create_stone = (function snake$tetris$create_stone(var_args){
var G__43368 = arguments.length;
switch (G__43368) {
case 0:
return snake.tetris.create_stone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return snake.tetris.create_stone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(snake.tetris.create_stone.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"crd","crd",-828746341),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.get.cljs$core$IFn$_invoke$arity$2(snake.tetris.tetrominoes,cljs.core.rand_int(cljs.core.count(snake.tetris.tetrominoes)))], null);
}));

(snake.tetris.create_stone.cljs$core$IFn$_invoke$arity$1 = (function (n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"crd","crd",-828746341),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.get.cljs$core$IFn$_invoke$arity$3(snake.tetris.tetrominoes,n,cljs.core.get.cljs$core$IFn$_invoke$arity$2(snake.tetris.tetrominoes,(0)))], null);
}));

(snake.tetris.create_stone.cljs$lang$maxFixedArity = 1);

snake.tetris.move_stone = (function snake$tetris$move_stone(stone,direction){
var l = (function (stone__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(stone__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crd","crd",-828746341),(0)], null),(function (p1__43369_SHARP_){
return (p1__43369_SHARP_ - (1));
}));
});
var r = (function (stone__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(stone__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crd","crd",-828746341),(0)], null),(function (p1__43370_SHARP_){
return (p1__43370_SHARP_ + (1));
}));
});
var d = (function (stone__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(stone__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crd","crd",-828746341),(1)], null),(function (p1__43371_SHARP_){
return (p1__43371_SHARP_ + (1));
}));
});
var t = (function (stone__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(stone__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (m){
return snake.tetris.rotate_matrix(m);
}));
});
var mover = (function (){var G__43372 = direction;
var G__43372__$1 = (((G__43372 instanceof cljs.core.Keyword))?G__43372.fqn:null);
switch (G__43372__$1) {
case "left":
return l;

break;
case "right":
return r;

break;
case "down":
return d;

break;
case "rotate":
return t;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43372__$1)].join('')));

}
})();
return (mover.cljs$core$IFn$_invoke$arity$1 ? mover.cljs$core$IFn$_invoke$arity$1(stone) : mover.call(null,stone));
});
snake.tetris.can_move_stone_within_rock_to_direction = (function snake$tetris$can_move_stone_within_rock_to_direction(rock,stone,dir){
var new_stone = snake.tetris.move_stone(stone,dir);
var shape = new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(new_stone);
var origin = new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(new_stone);
if(snake.tetris.can_merge_matrices_without_loses(rock,shape,origin)){
return new_stone;
} else {
return null;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-stone","move-stone",-1553190268),(function (db,p__43373){
var vec__43374 = p__43373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43374,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43374,(1),null);
var rock = new cljs.core.Keyword(null,"rock","rock",946709275).cljs$core$IFn$_invoke$arity$1(db);
var stone = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stones","stones",2138534597),(0)], null));
var temp__5804__auto__ = snake.tetris.can_move_stone_within_rock_to_direction(rock,stone,dir);
if(cljs.core.truth_(temp__5804__auto__)){
var stone__$1 = temp__5804__auto__;
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stones","stones",2138534597),(0)], null),stone__$1);
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rock","init-rock",488264568),(function (db){
var db__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"rock","rock",946709275),snake.tetris.empty_matrix_nm(cljs.core.first(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.last(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(db))));
var db__$2 = cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rock","rock",946709275),(5),(5)], null),(1));
var db__$3 = cljs.core.assoc_in(db__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rock","rock",946709275),(5),(7)], null),(1));
return db__$3;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-stones","init-stones",-1508066845),(function (db){
var stones = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.tetris.create_stone.cljs$core$IFn$_invoke$arity$1((4)),snake.tetris.create_stone.cljs$core$IFn$_invoke$arity$1((5))], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"stones","stones",2138534597),stones);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-game","init-game",1203428819),(function (cofx,p__43377){
var vec__43378 = p__43377;
var act = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43378,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43378,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),act,(function (v){
return (v + (1));
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-rock","init-rock",488264568)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-stones","init-stones",-1508066845)], null)], null)], null)], null);
}));
snake.tetris.key_rules_move_tetris = (function snake$tetris$key_rules_move_tetris(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-stone","move-stone",-1553190268),new cljs.core.Keyword(null,"rotate","rotate",152705015)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(87)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-stone","move-stone",-1553190268),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(83)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-stone","move-stone",-1553190268),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(65)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-stone","move-stone",-1553190268),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(68)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(27)], null)], null)], null)], null)], null));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rock","rock",946709275),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"rock","rock",946709275).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stones","stones",2138534597),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"stones","stones",2138534597).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stone","stone",-59276120),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stones","stones",2138534597)], null))], null);
}),(function (p__43381){
var vec__43382 = p__43381;
var stones = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43382,(0),null);
return cljs.core.first(stones);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"next-stone","next-stone",-522015412),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stones","stones",2138534597)], null))], null);
}),(function (p__43385){
var vec__43386 = p__43385;
var stones = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43386,(0),null);
var stone = cljs.core.second(stones);
return snake.tetris.merge_matrices(snake.tetris.empty_matrix_nm((4),(4)),new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(stone),new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(stone));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"game-field","game-field",413855610),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rock","rock",946709275)], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stone","stone",-59276120)], null))], null);
}),(function (p__43389){
var vec__43390 = p__43389;
var rock = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43390,(0),null);
var stone = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43390,(1),null);
var stone_on_field = snake.tetris.merge_matrices(rock,new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(stone),new cljs.core.Keyword(null,"crd","crd",-828746341).cljs$core$IFn$_invoke$arity$1(stone));
return stone_on_field;
})], 0));
snake.tetris.next_stone = (function snake$tetris$next_stone(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function snake$tetris$next_stone_$_iter__43393(s__43394){
return (new cljs.core.LazySeq(null,(function (){
var s__43394__$1 = s__43394;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43394__$1);
if(temp__5804__auto__){
var s__43394__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43394__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43394__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43396 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43395 = (0);
while(true){
if((i__43395 < size__5522__auto__)){
var frame = cljs.core._nth(c__5521__auto__,i__43395);
cljs.core.chunk_append(b__43396,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),(function (){var iter__5523__auto__ = ((function (i__43395,frame,c__5521__auto__,size__5522__auto__,b__43396,s__43394__$2,temp__5804__auto__){
return (function snake$tetris$next_stone_$_iter__43393_$_iter__43397(s__43398){
return (new cljs.core.LazySeq(null,((function (i__43395,frame,c__5521__auto__,size__5522__auto__,b__43396,s__43394__$2,temp__5804__auto__){
return (function (){
var s__43398__$1 = s__43398;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43398__$1);
if(temp__5804__auto____$1){
var s__43398__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43398__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__43398__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__43400 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__43399 = (0);
while(true){
if((i__43399 < size__5522__auto____$1)){
var cell = cljs.core._nth(c__5521__auto____$1,i__43399);
cljs.core.chunk_append(b__43400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null));

var G__43449 = (i__43399 + (1));
i__43399 = G__43449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43400),snake$tetris$next_stone_$_iter__43393_$_iter__43397(cljs.core.chunk_rest(s__43398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43400),null);
}
} else {
var cell = cljs.core.first(s__43398__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null),snake$tetris$next_stone_$_iter__43393_$_iter__43397(cljs.core.rest(s__43398__$2)));
}
} else {
return null;
}
break;
}
});})(i__43395,frame,c__5521__auto__,size__5522__auto__,b__43396,s__43394__$2,temp__5804__auto__))
,null,null));
});})(i__43395,frame,c__5521__auto__,size__5522__auto__,b__43396,s__43394__$2,temp__5804__auto__))
;
return iter__5523__auto__(frame);
})()], null));

var G__43450 = (i__43395 + (1));
i__43395 = G__43450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43396),snake$tetris$next_stone_$_iter__43393(cljs.core.chunk_rest(s__43394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43396),null);
}
} else {
var frame = cljs.core.first(s__43394__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),(function (){var iter__5523__auto__ = ((function (frame,s__43394__$2,temp__5804__auto__){
return (function snake$tetris$next_stone_$_iter__43393_$_iter__43401(s__43402){
return (new cljs.core.LazySeq(null,(function (){
var s__43402__$1 = s__43402;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43402__$1);
if(temp__5804__auto____$1){
var s__43402__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43402__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43402__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43404 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43403 = (0);
while(true){
if((i__43403 < size__5522__auto__)){
var cell = cljs.core._nth(c__5521__auto__,i__43403);
cljs.core.chunk_append(b__43404,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null));

var G__43455 = (i__43403 + (1));
i__43403 = G__43455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43404),snake$tetris$next_stone_$_iter__43393_$_iter__43401(cljs.core.chunk_rest(s__43402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43404),null);
}
} else {
var cell = cljs.core.first(s__43402__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null),snake$tetris$next_stone_$_iter__43393_$_iter__43401(cljs.core.rest(s__43402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(frame,s__43394__$2,temp__5804__auto__))
;
return iter__5523__auto__(frame);
})()], null),snake$tetris$next_stone_$_iter__43393(cljs.core.rest(s__43394__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-stone","next-stone",-522015412)], null))));
})()], null)], null);
});
snake.tetris.game_field = (function snake$tetris$game_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function snake$tetris$game_field_$_iter__43405(s__43406){
return (new cljs.core.LazySeq(null,(function (){
var s__43406__$1 = s__43406;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43406__$1);
if(temp__5804__auto__){
var s__43406__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43406__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43406__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43408 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43407 = (0);
while(true){
if((i__43407 < size__5522__auto__)){
var frame = cljs.core._nth(c__5521__auto__,i__43407);
cljs.core.chunk_append(b__43408,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),(function (){var iter__5523__auto__ = ((function (i__43407,frame,c__5521__auto__,size__5522__auto__,b__43408,s__43406__$2,temp__5804__auto__){
return (function snake$tetris$game_field_$_iter__43405_$_iter__43409(s__43410){
return (new cljs.core.LazySeq(null,((function (i__43407,frame,c__5521__auto__,size__5522__auto__,b__43408,s__43406__$2,temp__5804__auto__){
return (function (){
var s__43410__$1 = s__43410;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43410__$1);
if(temp__5804__auto____$1){
var s__43410__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43410__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__43410__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__43412 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__43411 = (0);
while(true){
if((i__43411 < size__5522__auto____$1)){
var cell = cljs.core._nth(c__5521__auto____$1,i__43411);
cljs.core.chunk_append(b__43412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null));

var G__43456 = (i__43411 + (1));
i__43411 = G__43456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43412),snake$tetris$game_field_$_iter__43405_$_iter__43409(cljs.core.chunk_rest(s__43410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43412),null);
}
} else {
var cell = cljs.core.first(s__43410__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null),snake$tetris$game_field_$_iter__43405_$_iter__43409(cljs.core.rest(s__43410__$2)));
}
} else {
return null;
}
break;
}
});})(i__43407,frame,c__5521__auto__,size__5522__auto__,b__43408,s__43406__$2,temp__5804__auto__))
,null,null));
});})(i__43407,frame,c__5521__auto__,size__5522__auto__,b__43408,s__43406__$2,temp__5804__auto__))
;
return iter__5523__auto__(frame);
})()], null));

var G__43457 = (i__43407 + (1));
i__43407 = G__43457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43408),snake$tetris$game_field_$_iter__43405(cljs.core.chunk_rest(s__43406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43408),null);
}
} else {
var frame = cljs.core.first(s__43406__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),(function (){var iter__5523__auto__ = ((function (frame,s__43406__$2,temp__5804__auto__){
return (function snake$tetris$game_field_$_iter__43405_$_iter__43413(s__43414){
return (new cljs.core.LazySeq(null,(function (){
var s__43414__$1 = s__43414;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43414__$1);
if(temp__5804__auto____$1){
var s__43414__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43414__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43414__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43416 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43415 = (0);
while(true){
if((i__43415 < size__5522__auto__)){
var cell = cljs.core._nth(c__5521__auto__,i__43415);
cljs.core.chunk_append(b__43416,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null));

var G__43458 = (i__43415 + (1));
i__43415 = G__43458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43416),snake$tetris$game_field_$_iter__43405_$_iter__43413(cljs.core.chunk_rest(s__43414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43416),null);
}
} else {
var cell = cljs.core.first(s__43414__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int((100000))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cell))?"+":cell)], null),snake$tetris$game_field_$_iter__43405_$_iter__43413(cljs.core.rest(s__43414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(frame,s__43406__$2,temp__5804__auto__))
;
return iter__5523__auto__(frame);
})()], null),snake$tetris$game_field_$_iter__43405(cljs.core.rest(s__43406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-field","game-field",413855610)], null))));
})()], null)], null);
});
snake.tetris.tetris_app = (function snake$tetris$tetris_app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tetris game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Next",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.tetris.next_stone], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Field",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.tetris.game_field], null)], null)], null)], null);
});
snake.tetris.key_rules_move_tetris();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-game","init-game",1203428819)], null));

//# sourceMappingURL=snake.tetris.js.map
