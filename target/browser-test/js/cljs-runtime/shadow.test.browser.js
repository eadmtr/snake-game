goog.provide('shadow.test.browser');
shadow.test.browser.start = (function shadow$test$browser$start(){
shadow.test.env.reset_test_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"snake.core-test","snake.core-test",1510473362,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return snake.core_test.fake_test;},new cljs.core.Symbol("snake.core-test","fake-test","snake.core-test/fake-test",-1547380552,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"snake.core-test","snake.core-test",1510473362,null),new cljs.core.Symbol(null,"fake-test","fake-test",2147428714,null),"snake/core_test.cljs",19,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(snake.core_test.fake_test)?snake.core_test.fake_test.cljs$lang$test:null)]))], null)], null)], null));

return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$1("test-root"));
});
shadow.test.browser.stop = (function shadow$test$browser$stop(done){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
shadow.test.browser.init = (function shadow$test$browser$init(){
shadow.dom.append.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#test-root","div#test-root",1877652692)], null));

return shadow.test.browser.start();
});
goog.exportSymbol('shadow.test.browser.init', shadow.test.browser.init);

//# sourceMappingURL=shadow.test.browser.js.map
