goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__41435){
var map__41440 = p__41435;
var map__41440__$1 = cljs.core.__destructure_map(map__41440);
var args = map__41440__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41440__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41440__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__41457 = src;
var map__41457__$1 = cljs.core.__destructure_map(map__41457);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41457__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__41467 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41467,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__41467;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__41473 = arguments.length;
switch (G__41473) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__41487_41694 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__41486_SHARP_,p2__41485_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__41485_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__41486_SHARP_ + (1)));
}),stack));
var chunk__41488_41695 = null;
var count__41489_41696 = (0);
var i__41490_41697 = (0);
while(true){
if((i__41490_41697 < count__41489_41696)){
var map__41511_41698 = chunk__41488_41695.cljs$core$IIndexed$_nth$arity$2(null,i__41490_41697);
var map__41511_41699__$1 = cljs.core.__destructure_map(map__41511_41698);
var i_41700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511_41699__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_41701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511_41699__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_41702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511_41699__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_41703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511_41699__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_41704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511_41699__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_41702)){
if(cljs.core.truth_(src_41703)){
var vec__41514_41705 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_41703,/:/);
var file_41706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41514_41705,(0),null);
var line_41707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41514_41705,(1),null);
if(cljs.core.truth_(args_41704)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41700),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41702)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41706),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41707),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_41704,el_41701);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41700),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41702)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41706),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41707),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_41701);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41700),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41702)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_41704,el_41701);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41700),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_41701);
}


var G__41709 = seq__41487_41694;
var G__41710 = chunk__41488_41695;
var G__41711 = count__41489_41696;
var G__41712 = (i__41490_41697 + (1));
seq__41487_41694 = G__41709;
chunk__41488_41695 = G__41710;
count__41489_41696 = G__41711;
i__41490_41697 = G__41712;
continue;
} else {
var temp__5804__auto___41713 = cljs.core.seq(seq__41487_41694);
if(temp__5804__auto___41713){
var seq__41487_41714__$1 = temp__5804__auto___41713;
if(cljs.core.chunked_seq_QMARK_(seq__41487_41714__$1)){
var c__5568__auto___41715 = cljs.core.chunk_first(seq__41487_41714__$1);
var G__41716 = cljs.core.chunk_rest(seq__41487_41714__$1);
var G__41717 = c__5568__auto___41715;
var G__41718 = cljs.core.count(c__5568__auto___41715);
var G__41719 = (0);
seq__41487_41694 = G__41716;
chunk__41488_41695 = G__41717;
count__41489_41696 = G__41718;
i__41490_41697 = G__41719;
continue;
} else {
var map__41522_41720 = cljs.core.first(seq__41487_41714__$1);
var map__41522_41721__$1 = cljs.core.__destructure_map(map__41522_41720);
var i_41722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41522_41721__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_41723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41522_41721__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_41724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41522_41721__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_41725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41522_41721__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_41726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41522_41721__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_41724)){
if(cljs.core.truth_(src_41725)){
var vec__41525_41728 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_41725,/:/);
var file_41729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41525_41728,(0),null);
var line_41730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41525_41728,(1),null);
if(cljs.core.truth_(args_41726)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41722),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41724)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41729),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41730),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_41726,el_41723);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41722),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41724)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41729),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41730),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_41723);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41722),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41724)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_41726,el_41723);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41722),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_41723);
}


var G__41733 = cljs.core.next(seq__41487_41714__$1);
var G__41734 = null;
var G__41735 = (0);
var G__41736 = (0);
seq__41487_41694 = G__41733;
chunk__41488_41695 = G__41734;
count__41489_41696 = G__41735;
i__41490_41697 = G__41736;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__41535 = cljs.core.seq(problems);
var chunk__41536 = null;
var count__41537 = (0);
var i__41538 = (0);
while(true){
if((i__41538 < count__41537)){
var map__41563 = chunk__41536.cljs$core$IIndexed$_nth$arity$2(null,i__41538);
var map__41563__$1 = cljs.core.__destructure_map(map__41563);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__41565_41739 = problem;
var G__41565_41740__$1 = (((G__41565_41739 instanceof cljs.core.Keyword))?G__41565_41739.fqn:null);
switch (G__41565_41740__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__41742 = seq__41535;
var G__41743 = chunk__41536;
var G__41744 = count__41537;
var G__41745 = (i__41538 + (1));
seq__41535 = G__41742;
chunk__41536 = G__41743;
count__41537 = G__41744;
i__41538 = G__41745;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41535);
if(temp__5804__auto__){
var seq__41535__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41535__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41535__$1);
var G__41746 = cljs.core.chunk_rest(seq__41535__$1);
var G__41747 = c__5568__auto__;
var G__41748 = cljs.core.count(c__5568__auto__);
var G__41749 = (0);
seq__41535 = G__41746;
chunk__41536 = G__41747;
count__41537 = G__41748;
i__41538 = G__41749;
continue;
} else {
var map__41576 = cljs.core.first(seq__41535__$1);
var map__41576__$1 = cljs.core.__destructure_map(map__41576);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41576__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41576__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41576__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41576__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41576__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__41581_41750 = problem;
var G__41581_41751__$1 = (((G__41581_41750 instanceof cljs.core.Keyword))?G__41581_41750.fqn:null);
switch (G__41581_41751__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__41755 = cljs.core.next(seq__41535__$1);
var G__41756 = null;
var G__41757 = (0);
var G__41758 = (0);
seq__41535 = G__41755;
chunk__41536 = G__41756;
count__41537 = G__41757;
i__41538 = G__41758;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__41603){
var map__41609 = p__41603;
var map__41609__$1 = cljs.core.__destructure_map(map__41609);
var src = map__41609__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41609__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41760 = arguments.length;
var i__5770__auto___41761 = (0);
while(true){
if((i__5770__auto___41761 < len__5769__auto___41760)){
args__5775__auto__.push((arguments[i__5770__auto___41761]));

var G__41762 = (i__5770__auto___41761 + (1));
i__5770__auto___41761 = G__41762;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__41633){
var map__41638 = p__41633;
var map__41638__$1 = cljs.core.__destructure_map(map__41638);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__41769__delegate = function (p__41641){
var map__41642 = p__41641;
var map__41642__$1 = cljs.core.__destructure_map(map__41642);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41642__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41642__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41642__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__41769 = function (var_args){
var p__41641 = null;
if (arguments.length > 0) {
var G__41770__i = 0, G__41770__a = new Array(arguments.length -  0);
while (G__41770__i < G__41770__a.length) {G__41770__a[G__41770__i] = arguments[G__41770__i + 0]; ++G__41770__i;}
  p__41641 = new cljs.core.IndexedSeq(G__41770__a,0,null);
} 
return G__41769__delegate.call(this,p__41641);};
G__41769.cljs$lang$maxFixedArity = 0;
G__41769.cljs$lang$applyTo = (function (arglist__41771){
var p__41641 = cljs.core.seq(arglist__41771);
return G__41769__delegate(p__41641);
});
G__41769.cljs$core$IFn$_invoke$arity$variadic = G__41769__delegate;
return G__41769;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq41628){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41628));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41774 = arguments.length;
var i__5770__auto___41775 = (0);
while(true){
if((i__5770__auto___41775 < len__5769__auto___41774)){
args__5775__auto__.push((arguments[i__5770__auto___41775]));

var G__41776 = (i__5770__auto___41775 + (1));
i__5770__auto___41775 = G__41776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__41656){
var map__41657 = p__41656;
var map__41657__$1 = cljs.core.__destructure_map(map__41657);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41657__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41657__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__41784__delegate = function (p__41674){
var map__41675 = p__41674;
var map__41675__$1 = cljs.core.__destructure_map(map__41675);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41675__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41675__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__41784 = function (var_args){
var p__41674 = null;
if (arguments.length > 0) {
var G__41787__i = 0, G__41787__a = new Array(arguments.length -  0);
while (G__41787__i < G__41787__a.length) {G__41787__a[G__41787__i] = arguments[G__41787__i + 0]; ++G__41787__i;}
  p__41674 = new cljs.core.IndexedSeq(G__41787__a,0,null);
} 
return G__41784__delegate.call(this,p__41674);};
G__41784.cljs$lang$maxFixedArity = 0;
G__41784.cljs$lang$applyTo = (function (arglist__41790){
var p__41674 = cljs.core.seq(arglist__41790);
return G__41784__delegate(p__41674);
});
G__41784.cljs$core$IFn$_invoke$arity$variadic = G__41784__delegate;
return G__41784;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq41653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41653));
}));


//# sourceMappingURL=re_com.debug.js.map
