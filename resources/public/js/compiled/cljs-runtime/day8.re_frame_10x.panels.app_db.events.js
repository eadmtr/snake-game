goog.provide('day8.re_frame_10x.panels.app_db.events');
day8.re_frame_10x.panels.app_db.events.paths_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-paths")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path","day8.re-frame-10x.panels.app-db.events/create-path",-383624398),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73264){
var vec__73265 = p__73264;
var open_new_inspectors_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73265,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),open_new_inspectors_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path-and-skip-to","day8.re-frame-10x.panels.app-db.events/create-path-and-skip-to",-195622997),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (p__73273,p__73274){
var map__73275 = p__73273;
var map__73275__$1 = cljs.core.__destructure_map(map__73275);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73275__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__73276 = p__73274;
var skip_to_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73276,(0),null);
var open_new_inspectors_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73276,(1),null);
var path_id = Date.now();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path_id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),open_new_inspectors_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316),skip_to_path], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73282){
var vec__73283 = p__73282;
var map__73286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73283,(0),null);
var map__73286__$1 = cljs.core.__destructure_map(map__73286);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73286__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73286__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));
var path = day8.re_frame_10x.tools.reader.edn.read_string_maybe(path_str);
var valid_QMARK_ = (((((!((path == null)))) && (cljs.core.sequential_QMARK_(path)))) || (clojure.string.blank_QMARK_(path_str)));
var G__73294 = cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),valid_QMARK_);
if(valid_QMARK_){
return cljs.core.assoc_in(G__73294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path);
} else {
return G__73294;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path-blur","day8.re-frame-10x.panels.app-db.events/update-path-blur",1529838565),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73297){
var vec__73299 = p__73297;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73299,(0),null);
var map__73303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path_id);
var map__73303__$1 = cljs.core.__destructure_map(map__73303);
var valid_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73303__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73303__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-path-visibility","day8.re-frame-10x.panels.app-db.events/set-path-visibility",1839643949),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73315){
var vec__73316 = p__73315;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73316,(0),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73316,(1),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-diff-visibility","day8.re-frame-10x.panels.app-db.events/set-diff-visibility",-1750368278),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73324){
var vec__73325 = p__73324;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73325,(0),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73325,(1),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","remove-path","day8.re-frame-10x.panels.app-db.events/remove-path",-333596006),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73333){
var vec__73336 = p__73333;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73336,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(paths,path_id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","paths","day8.re-frame-10x.panels.app-db.events/paths",-421005801),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (_,p__73341){
var vec__73343 = p__73341;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73343,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-search-string","day8.re-frame-10x.panels.app-db.events/set-search-string",25437329),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__73349){
var vec__73350 = p__73349;
var search_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73350,(0),null);
return search_string;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-json-ml-paths","day8.re-frame-10x.panels.app-db.events/set-json-ml-paths",389660155),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (_,p__73355){
var vec__73356 = p__73355;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73356,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (paths,p__73360){
var vec__73363 = p__73360;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73363,(0),null);
if(cljs.core.contains_QMARK_(paths,path)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(paths,path);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","reagent-id","day8.re-frame-10x.panels.app-db.events/reagent-id",-337600458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)], 0))], null),(function (_,___$1){
return re_frame.interop.reagent_id(re_frame.db.app_db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-sort-form?","day8.re-frame-10x.panels.app-db.events/set-sort-form?",-483190972),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73368){
var vec__73369 = p__73368;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73369,(0),null);
var sort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73369,(1),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"sort?","sort?",-567661924)], null),sort);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-data-path-annotations?","day8.re-frame-10x.panels.app-db.events/set-data-path-annotations?",881696237),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("data-path-annotations?")], null),(function (_,p__73376){
var vec__73377 = p__73376;
var data_path_annotations_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73377,(0),null);
return data_path_annotations_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","expand","day8.re-frame-10x.panels.app-db.events/expand",-1429129798),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73380){
var vec__73381 = p__73380;
var map__73384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73381,(0),null);
var map__73384__$1 = cljs.core.__destructure_map(map__73384);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73384__$1,new cljs.core.Keyword(null,"expand?","expand?",-1744295862));
var map__73386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,id);
var map__73386__$1 = cljs.core.__destructure_map(map__73386);
var was_expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73386__$1,new cljs.core.Keyword(null,"expand?","expand?",-1744295862));
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"expand?","expand?",-1744295862)], null),(((!((expand_QMARK_ == null))))?expand_QMARK_:cljs.core.not(was_expanded_QMARK_)));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","start-edit","day8.re-frame-10x.panels.app-db.events/start-edit",-203766997),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73389){
var vec__73390 = p__73389;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73390,(0),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","finish-edit","day8.re-frame-10x.panels.app-db.events/finish-edit",-51425324),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73396){
var vec__73397 = p__73396;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73397,(0),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),false);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-edit-str","day8.re-frame-10x.panels.app-db.events/set-edit-str",-270062781),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__73400){
var vec__73401 = p__73400;
var map__73404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73401,(0),null);
var map__73404__$1 = cljs.core.__destructure_map(map__73404);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73404__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73404__$1,new cljs.core.Keyword(null,"value","value",305978217));
var refresh_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73404__$1,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570));
var G__73411 = paths;
var G__73411__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__73411,id,cljs.core.assoc,new cljs.core.Keyword(null,"edit-str","edit-str",-777097574),zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),true], null)], 0)))
;
if(cljs.core.truth_(refresh_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__73411__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"editor-key","editor-key",55415621)], null),cljs.core.inc);
} else {
return G__73411__$1;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","editor-key","day8.re-frame-10x.panels.app-db.events/editor-key",-1669330724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__73413){
var vec__73414 = p__73413;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73414,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73414,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588),id,new cljs.core.Keyword(null,"editor-key","editor-key",55415621)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","edit","day8.re-frame-10x.panels.app-db.events/edit",348849711),(function (db,p__73421){
var vec__73422 = p__73421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73422,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73422,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73422,(2),null);
var new_data = day8.re_frame_10x.tools.reader.edn.read_string_maybe(s);
if(cljs.core.not(cljs.core.seq(path))){
return new_data;
} else {
return cljs.core.assoc_in(db,path,new_data);
}
}));
day8.re_frame_10x.panels.app_db.events.read_file = (function day8$re_frame_10x$panels$app_db$events$read_file(file,callback){
var file_reader = (new FileReader());
(file_reader.onload = (function (p1__73426_SHARP_){
var G__73430 = p1__73426_SHARP_.target.result;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__73430) : callback.call(null,G__73430));
}));

return file_reader.readAsText(file);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword(null,"read-file","read-file",-1584858601),(function (p__73434){
var map__73435 = p__73434;
var map__73435__$1 = cljs.core.__destructure_map(map__73435);
var vec__73436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73435__$1,new cljs.core.Keyword(null,"on-read","on-read",-549512009));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73436,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73436,(1),null);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return day8.re_frame_10x.panels.app_db.events.read_file(file,(function (p1__73431_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"value","value",305978217),p1__73431_SHARP_)], null));
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","open-file","day8.re-frame-10x.panels.app-db.events/open-file",-201624661),(function (_,p__73457){
var vec__73460 = p__73457;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73460,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73460,(1),null);
var on_read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73460,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-file","read-file",-1584858601),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"on-read","on-read",-549512009),on_read], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","save-to-file","day8.re-frame-10x.panels.app-db.events/save-to-file",-1643109376),(function (filename,contents){
var blob = (new Blob([contents],({"type": "text/plain"})));
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(URL.createObjectURL(blob));
var link = document.createElement("a");
(link.href = url);

(link.download = filename);

document.body.appendChild(link);

link.click();

return link.remove();
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","save-to-file","day8.re-frame-10x.panels.app-db.events/save-to-file",-1643109376),(function (_,p__73473){
var vec__73474 = p__73473;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73474,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73474,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","save-to-file","day8.re-frame-10x.panels.app-db.events/save-to-file",-1643109376),s], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093),(function (cofx){
var rect = (function (){var or__5045__auto__ = (function (){var G__73481 = cljs.core.deref(day8.re_frame_10x.fx.window.popout_window);
if((G__73481 == null)){
return null;
} else {
return G__73481.document;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document;
}
})().getElementById("--re-frame-10x--").shadowRoot.getElementById("re-frame-10x__ui-container").getBoundingClientRect();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.x,rect.y], null)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","open-popup-menu","day8.re-frame-10x.panels.app-db.events/open-popup-menu",-559965598),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093))], null),(function (p__73492,p__73493){
var map__73494 = p__73492;
var map__73494__$1 = cljs.core.__destructure_map(map__73494);
var vec__73495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73494__$1,new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093));
var wx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73495,(0),null);
var wy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73495,(1),null);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73494__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__73498 = p__73493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73498,(0),null);
var map__73501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73498,(1),null);
var map__73501__$1 = cljs.core.__destructure_map(map__73501);
var vec__73502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73501__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73502,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73502,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73501__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73501__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73501__$1,new cljs.core.Keyword(null,"data-path","data-path",674802181));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"showing?","showing?",2094921488),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - wx),(my - wy)], null),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"data-path","data-path",674802181),data_path], null))], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","close-popup-menu","day8.re-frame-10x.panels.app-db.events/close-popup-menu",-479964858),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing?","showing?",2094921488),false], null));
}));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.events.js.map
