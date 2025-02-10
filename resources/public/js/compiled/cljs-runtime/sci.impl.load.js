goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__63902){
var vec__63904 = p__63902;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63904,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (k instanceof cljs.core.Symbol);
if(and__5043__auto__){
var and__5043__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_js_lib = (function sci$impl$load$handle_js_lib(env,opts,lib,cnn,the_lib){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts);
var the_lib__$1 = (cljs.core.truth_(path)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (the_lib__$1,path__$1){
return Reflect.get(the_lib__$1,path__$1);
}),the_lib,path.split(".")):the_lib);
var clazz = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.munge([cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),(cljs.core.truth_(path)?"$":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')));
var env__$1 = cljs.core.assoc_in(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),clazz,new cljs.core.Keyword(null,"class","class",-2030961996)], null),the_lib__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),clazz], null),the_lib__$1);
var env__$2 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var alias = temp__5802__auto__;
return cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),alias], null),clazz);
} else {
return env__$1;
}
})();
var env__$3 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var refers = temp__5802__auto__;
var rename = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$3,refer){
var sub_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"$$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refer)].join(''));
var the_sublib = Reflect.get(the_lib__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(refer));
var refer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(rename,refer,refer);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(env__$3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),refer__$1], null),sub_sym),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),sub_sym,new cljs.core.Keyword(null,"class","class",-2030961996)], null),the_sublib),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),sub_sym], null),the_sublib);
}),env__$2,refers);
} else {
return env__$2;
}
})();
return env__$3;
});
sci.impl.load.lib_PLUS_path = (function sci$impl$load$lib_PLUS_path(lib){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(lib,cljs.core.re_pattern("\\$"),(2));
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__63970){
var map__63977 = p__63970;
var map__63977__$1 = cljs.core.__destructure_map(map__63977);
var opts = map__63977__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var or__5045__auto__ = ((typeof lib_name === 'string')?(function (){var vec__63987 = sci.impl.load.lib_PLUS_path(lib_name);
var lib_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63987,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63987,(1),null);
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-libs","js-libs",-502933721).cljs$core$IFn$_invoke$arity$1(env),lib_name__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var the_lib = temp__5802__auto__;
return sci.impl.load.handle_js_lib(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),path),lib_name__$1,current_ns,the_lib);
} else {
return env;
}
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5045__auto____$1 = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5045__auto____$1 = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__64118 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64118,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___64765 = (function (){var G__64141 = the_loaded_ns;
var G__64141__$1 = (((G__64141 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__64141));
var G__64141__$2 = (((G__64141__$1 == null))?null:cljs.core.meta(G__64141__$1));
if((G__64141__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__64141__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___64765)){
var on_loaded_64766 = temp__5804__auto___64765;
var G__64152_64767 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_64766.cljs$core$IFn$_invoke$arity$1 ? on_loaded_64766.cljs$core$IFn$_invoke$arity$1(G__64152_64767) : on_loaded_64766.call(null,G__64152_64767));
} else {
}

return env__$1;
}
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (env__$1){
var loaded_libs = new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env__$1);
if(cljs.core.contains_QMARK_(loaded_libs,lib)){
return env__$1;
} else {
var loaded_libs_var_64768 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Symbol(null,"*loaded-libs*","*loaded-libs*",1951428860,null)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(loaded_libs_var_64768),cljs.core.conj,lib);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs__$1){
if((loaded_libs__$1 == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs__$1,lib);
}
}));
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.utils.current_ns_name();
var lib__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821).cljs$core$IFn$_invoke$arity$1(env),lib,lib);
var js_lib_QMARK_ = typeof lib__$1 === 'string';
var or__5045__auto__ = ((js_lib_QMARK_)?(function (){var vec__64243 = sci.impl.load.lib_PLUS_path(lib__$1);
var lib__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64243,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64243,(1),null);
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-libs","js-libs",-502933721).cljs$core$IFn$_invoke$arity$1(env),lib__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var the_lib = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
return sci.impl.load.handle_js_lib(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),path),lib__$2,cnn,the_lib);
}));

return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5802__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var as_alias = temp__5802__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__64268 = opts;
var map__64268__$1 = cljs.core.__destructure_map(map__64268);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64268__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64268__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5045__auto____$1 = reload;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = reload_all;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5802__auto___64770__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5802__auto___64770__$1)){
var the_loaded_ns_64772 = temp__5802__auto___64770__$1;
var loading_64773 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5043__auto__ = loading_64773;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_64773.indexOf(lib__$1))));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_64773,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_64772,lib__$1,opts));
}
} else {
var temp__5802__auto___64774__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___64774__$2)){
var load_fn_64775 = temp__5802__auto___64774__$2;
var curr_ns_64776 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5802__auto___64777__$3 = (function (){var G__64318 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_64776),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5045__auto____$1 = reload;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return reload_all;
}
})()], null);
return (load_fn_64775.cljs$core$IFn$_invoke$arity$1 ? load_fn_64775.cljs$core$IFn$_invoke$arity$1(G__64318) : load_fn_64775.call(null,G__64318));
})();
if(cljs.core.truth_(temp__5802__auto___64777__$3)){
var map__64319_64781 = temp__5802__auto___64777__$3;
var map__64319_64782__$1 = cljs.core.__destructure_map(map__64319_64781);
var file_64783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64319_64782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_64784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64319_64782__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_64785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64319_64782__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_64786__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_64784)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_64776,sci.impl.utils.current_file,file_64783]));

try{var fexpr__64352_64787 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__64352_64787.cljs$core$IFn$_invoke$arity$2 ? fexpr__64352_64787.cljs$core$IFn$_invoke$arity$2(ctx_64786__$1,source_64784) : fexpr__64352_64787.call(null,ctx_64786__$1,source_64784));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e64347){if((e64347 instanceof Error)){
var e_64788 = e64347;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_64788;
} else {
throw e64347;

}
}} else {
}

if(cljs.core.truth_(handled_64785)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__5045__auto___64789__$1 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5045__auto___64789__$1)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}

if(js_lib_QMARK_){
} else {
sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);
}

return null;
}
}
});
sci.impl.load.load_lib_STAR_ = (function sci$impl$load$load_lib_STAR_(ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5043__auto__ = prefix;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64799 = arguments.length;
var i__5770__auto___64800 = (0);
while(true){
if((i__5770__auto___64800 < len__5769__auto___64799)){
args__5775__auto__.push((arguments[i__5770__auto___64800]));

var G__64801 = (i__5770__auto___64800 + (1));
i__5770__auto___64800 = G__64801;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
return sci.impl.load.load_lib_STAR_(ctx,prefix,lib,options);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq64383){
var G__64384 = cljs.core.first(seq64383);
var seq64383__$1 = cljs.core.next(seq64383);
var G__64385 = cljs.core.first(seq64383__$1);
var seq64383__$2 = cljs.core.next(seq64383__$1);
var G__64386 = cljs.core.first(seq64383__$2);
var seq64383__$3 = cljs.core.next(seq64383__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64384,G__64385,G__64386,seq64383__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_64809 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_64810 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_64809,flags));
if(unsupported_64810){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_64810)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__64490 = cljs.core.seq(args_STAR___$1);
var chunk__64491 = null;
var count__64492 = (0);
var i__64493 = (0);
while(true){
if((i__64493 < count__64492)){
var arg = chunk__64491.cljs$core$IIndexed$_nth$arity$2(null,i__64493);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__64603_64811 = arg;
var seq__64604_64812 = cljs.core.seq(vec__64603_64811);
var first__64605_64814 = cljs.core.first(seq__64604_64812);
var seq__64604_64815__$1 = cljs.core.next(seq__64604_64812);
var prefix_64816 = first__64605_64814;
var args_STAR__64817__$2 = seq__64604_64815__$1;
if((prefix_64816 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__64607_64822 = cljs.core.seq(args_STAR__64817__$2);
var chunk__64608_64823 = null;
var count__64609_64824 = (0);
var i__64610_64825 = (0);
while(true){
if((i__64610_64825 < count__64609_64824)){
var arg_64826__$1 = chunk__64608_64823.cljs$core$IIndexed$_nth$arity$2(null,i__64610_64825);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_64816,sci.impl.load.prependss(arg_64826__$1,opts));


var G__64827 = seq__64607_64822;
var G__64828 = chunk__64608_64823;
var G__64829 = count__64609_64824;
var G__64830 = (i__64610_64825 + (1));
seq__64607_64822 = G__64827;
chunk__64608_64823 = G__64828;
count__64609_64824 = G__64829;
i__64610_64825 = G__64830;
continue;
} else {
var temp__5804__auto___64831 = cljs.core.seq(seq__64607_64822);
if(temp__5804__auto___64831){
var seq__64607_64832__$1 = temp__5804__auto___64831;
if(cljs.core.chunked_seq_QMARK_(seq__64607_64832__$1)){
var c__5568__auto___64833 = cljs.core.chunk_first(seq__64607_64832__$1);
var G__64834 = cljs.core.chunk_rest(seq__64607_64832__$1);
var G__64835 = c__5568__auto___64833;
var G__64836 = cljs.core.count(c__5568__auto___64833);
var G__64837 = (0);
seq__64607_64822 = G__64834;
chunk__64608_64823 = G__64835;
count__64609_64824 = G__64836;
i__64610_64825 = G__64837;
continue;
} else {
var arg_64838__$1 = cljs.core.first(seq__64607_64832__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_64816,sci.impl.load.prependss(arg_64838__$1,opts));


var G__64839 = cljs.core.next(seq__64607_64832__$1);
var G__64840 = null;
var G__64841 = (0);
var G__64842 = (0);
seq__64607_64822 = G__64839;
chunk__64608_64823 = G__64840;
count__64609_64824 = G__64841;
i__64610_64825 = G__64842;
continue;
}
} else {
}
}
break;
}
}


var G__64843 = seq__64490;
var G__64844 = chunk__64491;
var G__64845 = count__64492;
var G__64846 = (i__64493 + (1));
seq__64490 = G__64843;
chunk__64491 = G__64844;
count__64492 = G__64845;
i__64493 = G__64846;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64490);
if(temp__5804__auto__){
var seq__64490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64490__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64490__$1);
var G__64847 = cljs.core.chunk_rest(seq__64490__$1);
var G__64848 = c__5568__auto__;
var G__64849 = cljs.core.count(c__5568__auto__);
var G__64850 = (0);
seq__64490 = G__64847;
chunk__64491 = G__64848;
count__64492 = G__64849;
i__64493 = G__64850;
continue;
} else {
var arg = cljs.core.first(seq__64490__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__64636_64851 = arg;
var seq__64637_64852 = cljs.core.seq(vec__64636_64851);
var first__64638_64853 = cljs.core.first(seq__64637_64852);
var seq__64637_64854__$1 = cljs.core.next(seq__64637_64852);
var prefix_64855 = first__64638_64853;
var args_STAR__64856__$2 = seq__64637_64854__$1;
if((prefix_64855 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__64639_64857 = cljs.core.seq(args_STAR__64856__$2);
var chunk__64640_64858 = null;
var count__64641_64859 = (0);
var i__64642_64860 = (0);
while(true){
if((i__64642_64860 < count__64641_64859)){
var arg_64864__$1 = chunk__64640_64858.cljs$core$IIndexed$_nth$arity$2(null,i__64642_64860);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_64855,sci.impl.load.prependss(arg_64864__$1,opts));


var G__64865 = seq__64639_64857;
var G__64866 = chunk__64640_64858;
var G__64867 = count__64641_64859;
var G__64868 = (i__64642_64860 + (1));
seq__64639_64857 = G__64865;
chunk__64640_64858 = G__64866;
count__64641_64859 = G__64867;
i__64642_64860 = G__64868;
continue;
} else {
var temp__5804__auto___64869__$1 = cljs.core.seq(seq__64639_64857);
if(temp__5804__auto___64869__$1){
var seq__64639_64870__$1 = temp__5804__auto___64869__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64639_64870__$1)){
var c__5568__auto___64871 = cljs.core.chunk_first(seq__64639_64870__$1);
var G__64872 = cljs.core.chunk_rest(seq__64639_64870__$1);
var G__64873 = c__5568__auto___64871;
var G__64874 = cljs.core.count(c__5568__auto___64871);
var G__64875 = (0);
seq__64639_64857 = G__64872;
chunk__64640_64858 = G__64873;
count__64641_64859 = G__64874;
i__64642_64860 = G__64875;
continue;
} else {
var arg_64876__$1 = cljs.core.first(seq__64639_64870__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_64855,sci.impl.load.prependss(arg_64876__$1,opts));


var G__64877 = cljs.core.next(seq__64639_64870__$1);
var G__64878 = null;
var G__64879 = (0);
var G__64880 = (0);
seq__64639_64857 = G__64877;
chunk__64640_64858 = G__64878;
count__64641_64859 = G__64879;
i__64642_64860 = G__64880;
continue;
}
} else {
}
}
break;
}
}


var G__64881 = cljs.core.next(seq__64490__$1);
var G__64882 = null;
var G__64883 = (0);
var G__64884 = (0);
seq__64490 = G__64881;
chunk__64491 = G__64882;
count__64492 = G__64883;
i__64493 = G__64884;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64885 = arguments.length;
var i__5770__auto___64886 = (0);
while(true){
if((i__5770__auto___64886 < len__5769__auto___64885)){
args__5775__auto__.push((arguments[i__5770__auto___64886]));

var G__64887 = (i__5770__auto___64886 + (1));
i__5770__auto___64886 = G__64887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq64690){
var G__64691 = cljs.core.first(seq64690);
var seq64690__$1 = cljs.core.next(seq64690);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64691,seq64690__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64888 = arguments.length;
var i__5770__auto___64889 = (0);
while(true){
if((i__5770__auto___64889 < len__5769__auto___64888)){
args__5775__auto__.push((arguments[i__5770__auto___64889]));

var G__64890 = (i__5770__auto___64889 + (1));
i__5770__auto___64889 = G__64890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq64701){
var G__64702 = cljs.core.first(seq64701);
var seq64701__$1 = cljs.core.next(seq64701);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64702,seq64701__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__64748 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64748,(1),null);
var G__64751_64891 = k;
var G__64751_64892__$1 = (((G__64751_64891 instanceof cljs.core.Keyword))?G__64751_64891.fqn:null);
switch (G__64751_64892__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym){
return (function (acc,p__64752){
var vec__64753 = p__64752;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64753,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64753,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__64751_64891,G__64751_64892__$1,vec__64748,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64751_64892__$1)].join('')));

}

var G__64897 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__64897;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = to_do;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5043__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___64905 = arguments.length;
var i__5770__auto___64906 = (0);
while(true){
if((i__5770__auto___64906 < len__5769__auto___64905)){
args__5775__auto__.push((arguments[i__5770__auto___64906]));

var G__64907 = (i__5770__auto___64906 + (1));
i__5770__auto___64906 = G__64907;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq64756){
var G__64757 = cljs.core.first(seq64756);
var seq64756__$1 = cljs.core.next(seq64756);
var G__64758 = cljs.core.first(seq64756__$1);
var seq64756__$2 = cljs.core.next(seq64756__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64757,G__64758,seq64756__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
