goog.provide('edamame.impl.parser');
edamame.impl.parser.eof = (new Object());
edamame.impl.parser.expected_delimiter = (new Object());
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
edamame.impl.parser.throw_reader = (function edamame$impl$parser$throw_reader(var_args){
var G__60412 = arguments.length;
switch (G__60412) {
case 3:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,msg){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,msg,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,msg,data){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,msg,data,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5 = (function (ctx,reader,msg,data,loc){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var c = ((ir_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number(reader)):null);
var l = ((ir_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number(reader)):null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("edamame","error","edamame/error",882529634)], null),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),l,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),c], 0)),data], 0)));
}));

(edamame.impl.parser.throw_reader.cljs$lang$maxFixedArity = 5);

edamame.impl.parser.dispatch_macro_QMARK_ = (function edamame$impl$parser$dispatch_macro_QMARK_(ch){
var G__60430 = ch;
switch (G__60430) {
case "^":
case "'":
case "(":
case "{":
case "\"":
case "!":
case "_":
case "?":
case ":":
case "#":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.macro_QMARK_ = (function edamame$impl$parser$macro_QMARK_(ch){
var G__60433 = ch;
switch (G__60433) {
case ":":
case ";":
case "'":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
case "%":
case "#":
case "\"":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.macro_terminating_QMARK_ = (function edamame$impl$parser$macro_terminating_QMARK_(ch){
var G__60434 = ch;
switch (G__60434) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.whitespace_QMARK_ = (function edamame$impl$parser$whitespace_QMARK_(c){
var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__5043__auto__;
}
});
/**
 * Read in a single logical token from the reader
 */
edamame.impl.parser.read_token = (function edamame$impl$parser$read_token(rdr,_kind,initch){
var sb = (new goog.string.StringBuffer());
var ch = initch;
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = edamame.impl.parser.whitespace_QMARK_(ch);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = edamame.impl.parser.macro_terminating_QMARK_(ch);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(ch)){
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);
} else {
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__61304 = sb.append(ch);
var G__61305 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__61304;
ch = G__61305;
continue;
}
break;
}
});
edamame.impl.parser.parse_symbol = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","parse-symbol","cljs.tools.reader.impl.commons/parse-symbol",-903976395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"parse-symbol","parse-symbol",1608073451,null),"cljs/tools/reader/impl/commons.cljs",19,1,97,97,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null)], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)])));
edamame.impl.parser.number_literal_QMARK_ = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.number_literal_QMARK_;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","number-literal?","cljs.tools.reader.impl.commons/number-literal?",-1450304800,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"number-literal?","number-literal?",843787662,null),"cljs/tools/reader/impl/commons.cljs",31,1,20,20,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reader","reader",1810192380,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null)),"Checks whether the reader is at the start of a number literal",((cljs.tools.reader.impl.commons.number_literal_QMARK_)?cljs.tools.reader.impl.commons.number_literal_QMARK_.cljs$lang$test:null)])));
edamame.impl.parser.escape_char = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.edn.escape_char;},new cljs.core.Symbol("cljs.tools.reader.edn","escape-char","cljs.tools.reader.edn/escape-char",17562632,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"escape-char","escape-char",-2072670949,null),"cljs/tools/reader/edn.cljs",19,1,217,217,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"rdr","rdr",190007785,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.escape_char)?cljs.tools.reader.edn.escape_char.cljs$lang$test:null)])));
edamame.impl.parser.read_char_STAR_ = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.edn.read_char_STAR_;},new cljs.core.Symbol("cljs.tools.reader.edn","read-char*","cljs.tools.reader.edn/read-char*",-606185164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-char*","read-char*",1494526523,null),"cljs/tools/reader/edn.cljs",18,1,118,118,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"backslash","backslash",-863649243,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_char_STAR_)?cljs.tools.reader.edn.read_char_STAR_.cljs$lang$test:null)])));
edamame.impl.parser.read_symbolic_value = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.edn.read_symbolic_value;},new cljs.core.Symbol("cljs.tools.reader.edn","read-symbolic-value","cljs.tools.reader.edn/read-symbolic-value",111468855,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-symbolic-value","read-symbolic-value",-100790078,null),"cljs/tools/reader/edn.cljs",27,1,324,324,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_symbolic_value)?cljs.tools.reader.edn.read_symbolic_value.cljs$lang$test:null)])));
edamame.impl.parser.read_number = (function edamame$impl$parser$read_number(ctx,rdr,initch){
var sb = (function (){var G__60457 = (new goog.string.StringBuffer());
G__60457.append(initch);

return G__60457;
})();
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = edamame.impl.parser.whitespace_QMARK_(ch);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = edamame.impl.parser.macro_QMARK_(ch);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

var or__5045__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,rdr,["Invalid number: ",s].join(''));
}
} else {
var G__61321 = (function (){var G__60461 = sb;
G__60461.append(ch);

return G__60461;
})();
var G__61322 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__61321;
ch = G__61322;
continue;
}
break;
}
});
edamame.impl.parser.edn_read = (function edamame$impl$parser$edn_read(ctx,reader){
var tools_reader_opts = new cljs.core.Keyword("tools.reader","opts","tools.reader/opts",-2121810901).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(tools_reader_opts,reader);
});
edamame.impl.parser.parse_string_STAR_ = (function edamame$impl$parser$parse_string_STAR_(ctx,reader){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var row = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null):null);
var col = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null):null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
var G__60482 = ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__60482)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__60482)){
var G__61330 = (function (){var G__60484 = sb;
G__60484.append((edamame.impl.parser.escape_char.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.escape_char.cljs$core$IFn$_invoke$arity$2(sb,reader) : edamame.impl.parser.escape_char.call(null,sb,reader)));

return G__60484;
})();
var G__61331 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__61330;
ch = G__61331;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__60482)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__61332 = (function (){var G__60487 = sb;
G__60487.append(ch);

return G__60487;
})();
var G__61333 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__61332;
ch = G__61333;
continue;

}
}
}
break;
}
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
edamame.impl.parser.Loc = (function (row,col,__meta,__extmap,__hash){
this.row = row;
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k60496,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__60518 = k60496;
var G__60518__$1 = (((G__60518 instanceof cljs.core.Keyword))?G__60518.fqn:null);
switch (G__60518__$1) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60496,else__5346__auto__);

}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__60529){
var vec__60530 = p__60529;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60530,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60530,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#edamame.impl.parser.Loc{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60495){
var self__ = this;
var G__60495__$1 = this;
return (new cljs.core.RecordIter((0),G__60495__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1435872067 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60497,other60498){
var self__ = this;
var this60497__$1 = this;
return (((!((other60498 == null)))) && ((((this60497__$1.constructor === other60498.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60497__$1.row,other60498.row)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60497__$1.col,other60498.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60497__$1.__extmap,other60498.__extmap)))))))));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k60496){
var self__ = this;
var this__5350__auto____$1 = this;
var G__60551 = k60496;
var G__60551__$1 = (((G__60551 instanceof cljs.core.Keyword))?G__60551.fqn:null);
switch (G__60551__$1) {
case "row":
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60496);

}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__60495){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__60552 = cljs.core.keyword_identical_QMARK_;
var expr__60553 = k__5352__auto__;
if(cljs.core.truth_((pred__60552.cljs$core$IFn$_invoke$arity$2 ? pred__60552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),expr__60553) : pred__60552.call(null,new cljs.core.Keyword(null,"row","row",-570139521),expr__60553)))){
return (new edamame.impl.parser.Loc(G__60495,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60552.cljs$core$IFn$_invoke$arity$2 ? pred__60552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),expr__60553) : pred__60552.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__60553)))){
return (new edamame.impl.parser.Loc(self__.row,G__60495,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__60495),null));
}
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row","row",-570139521),self__.row,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__60495){
var self__ = this;
var this__5342__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,G__60495,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(edamame.impl.parser.Loc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(edamame.impl.parser.Loc.cljs$lang$type = true);

(edamame.impl.parser.Loc.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Loc",null,(1),null));
}));

(edamame.impl.parser.Loc.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"edamame.impl.parser/Loc");
}));

/**
 * Positional factory function for edamame.impl.parser/Loc.
 */
edamame.impl.parser.__GT_Loc = (function edamame$impl$parser$__GT_Loc(row,col){
return (new edamame.impl.parser.Loc(row,col,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Loc, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Loc = (function edamame$impl$parser$map__GT_Loc(G__60507){
var extmap__5385__auto__ = (function (){var G__60574 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60507,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col","col",-1959363084)], 0));
if(cljs.core.record_QMARK_(G__60507)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60574);
} else {
return G__60574;
}
})();
return (new edamame.impl.parser.Loc(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__60507),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__60507),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

edamame.impl.parser.location = (function edamame$impl$parser$location(reader){
return edamame.impl.parser.__GT_Loc(reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null));
});
edamame.impl.parser.parse_comment = (function edamame$impl$parser$parse_comment(reader){
cljs.tools.reader.reader_types.read_line(reader);

return reader;
});
/**
 * Skips whitespace. Returns reader. If end of stream is reached, returns nil.
 */
edamame.impl.parser.skip_whitespace = (function edamame$impl$parser$skip_whitespace(_ctx,reader){
while(true){
var temp__5804__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(c))){
continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return reader;
}
} else {
return null;
}
break;
}
});
edamame.impl.parser.non_match = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("non-match");
edamame.impl.parser.non_match_QMARK_ = (function edamame$impl$parser$non_match_QMARK_(v){
return (v === edamame.impl.parser.non_match);
});
edamame.impl.parser.throw_eof_while_reading = (function edamame$impl$parser$throw_eof_while_reading(ctx,reader){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"EOF while reading");
});
edamame.impl.parser.parse_to_delimiter = (function edamame$impl$parser$parse_to_delimiter(var_args){
var G__60619 = arguments.length;
switch (G__60619) {
case 3:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4(ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var row = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null):null);
var col = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null):null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),delimiter),new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
var vals = cljs.core.transient$(into);
while(true){
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
var cond_splice_QMARK_ = (function (){var G__60686 = next_val;
var G__60686__$1 = (((G__60686 == null))?null:cljs.core.meta(G__60686));
if((G__60686__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765).cljs$core$IFn$_invoke$arity$1(G__60686__$1);
}
})();
if((edamame.impl.parser.eof === next_val)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null));
} else {
if((edamame.impl.parser.expected_delimiter === next_val)){
return cljs.core.persistent_BANG_(vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__60687_61358 = cljs.core.seq(next_val);
var chunk__60688_61359 = null;
var count__60689_61360 = (0);
var i__60690_61361 = (0);
while(true){
if((i__60690_61361 < count__60689_61360)){
var v_61362 = chunk__60688_61359.cljs$core$IIndexed$_nth$arity$2(null,i__60690_61361);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_61362);


var G__61363 = seq__60687_61358;
var G__61364 = chunk__60688_61359;
var G__61365 = count__60689_61360;
var G__61366 = (i__60690_61361 + (1));
seq__60687_61358 = G__61363;
chunk__60688_61359 = G__61364;
count__60689_61360 = G__61365;
i__60690_61361 = G__61366;
continue;
} else {
var temp__5804__auto___61368 = cljs.core.seq(seq__60687_61358);
if(temp__5804__auto___61368){
var seq__60687_61369__$1 = temp__5804__auto___61368;
if(cljs.core.chunked_seq_QMARK_(seq__60687_61369__$1)){
var c__5568__auto___61370 = cljs.core.chunk_first(seq__60687_61369__$1);
var G__61371 = cljs.core.chunk_rest(seq__60687_61369__$1);
var G__61372 = c__5568__auto___61370;
var G__61373 = cljs.core.count(c__5568__auto___61370);
var G__61374 = (0);
seq__60687_61358 = G__61371;
chunk__60688_61359 = G__61372;
count__60689_61360 = G__61373;
i__60690_61361 = G__61374;
continue;
} else {
var v_61375 = cljs.core.first(seq__60687_61369__$1);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_61375);


var G__61376 = cljs.core.next(seq__60687_61369__$1);
var G__61377 = null;
var G__61378 = (0);
var G__61379 = (0);
seq__60687_61358 = G__61376;
chunk__60688_61359 = G__61377;
count__60689_61360 = G__61378;
i__60690_61361 = G__61379;
continue;
}
} else {
}
}
break;
}

var G__61380 = vals;
vals = G__61380;
continue;
} else {
if(edamame.impl.parser.non_match_QMARK_(next_val)){
var G__61382 = vals;
vals = G__61382;
continue;
} else {
var G__61383 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,next_val);
vals = G__61383;
continue;

}
}
}
}
break;
}
}));

(edamame.impl.parser.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_list = (function edamame$impl$parser$parse_list(ctx,reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
edamame.impl.parser.read_regex_pattern = (function edamame$impl$parser$read_regex_pattern(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_61387__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_61387__$1 == null)){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
}

sb.append(ch_61387__$1);
} else {
}

var G__61388 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__61388;
continue;
}
}
break;
}
});
edamame.impl.parser.duplicate_keys_error = (function edamame$impl$parser$duplicate_keys_error(msg,coll){
var duplicates = (function edamame$impl$parser$duplicate_keys_error_$_duplicates(seq){
var iter__5523__auto__ = (function edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__60770(s__60771){
return (new cljs.core.LazySeq(null,(function (){
var s__60771__$1 = s__60771;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60771__$1);
if(temp__5804__auto__){
var s__60771__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60771__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60771__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60773 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60772 = (0);
while(true){
if((i__60772 < size__5522__auto__)){
var vec__60783 = cljs.core._nth(c__5521__auto__,i__60772);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60783,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60783,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__60773,id);

var G__61409 = (i__60772 + (1));
i__60772 = G__61409;
continue;
} else {
var G__61410 = (i__60772 + (1));
i__60772 = G__61410;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60773),edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__60770(cljs.core.chunk_rest(s__60771__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60773),null);
}
} else {
var vec__60791 = cljs.core.first(s__60771__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60791,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60791,(1),null);
if((freq > (1))){
return cljs.core.cons(id,edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__60770(cljs.core.rest(s__60771__$2)));
} else {
var G__61412 = cljs.core.rest(s__60771__$2);
s__60771__$1 = G__61412;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
edamame.impl.parser.throw_dup_keys = (function edamame$impl$parser$throw_dup_keys(ctx,reader,loc,kind,ks){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,edamame.impl.parser.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
edamame.impl.parser.parse_set = (function edamame$impl$parser$parse_set(ctx,reader){
var start_loc = ((cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?edamame.impl.parser.location(reader):null);
var coll = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
edamame.impl.parser.parse_first_matching_condition = (function edamame$impl$parser$parse_first_matching_condition(ctx,reader){
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(ctx);
var match = edamame.impl.parser.non_match;
while(true){
var k = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if((edamame.impl.parser.expected_delimiter === k)){
return match;
} else {
var next_is_match_QMARK_ = ((edamame.impl.parser.non_match_QMARK_(match)) && (((cljs.core.contains_QMARK_(features,k)) || (cljs.core.keyword_identical_QMARK_(k,new cljs.core.Keyword(null,"default","default",-1987822328))))));
if(next_is_match_QMARK_){
var match__$1 = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true);
while(true){
var next_val_61439 = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
if((edamame.impl.parser.expected_delimiter === next_val_61439)){
} else {
if((edamame.impl.parser.eof === next_val_61439)){
var delimiter_61443 = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__60846_61444 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__60846_61445__$1 = cljs.core.__destructure_map(map__60846_61444);
var row_61446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60846_61445__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col_61447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60846_61445__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char_61448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60846_61445__$1,new cljs.core.Keyword(null,"char","char",-641587586));
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_61443)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_61448)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_61446),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_61447),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_61443),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_61448)], null));
} else {
continue;
}
}
break;
}

return match__$1;
} else {
var G__60850_61468 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true);
var G__60851_61469 = reader;
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(G__60850_61468,G__60851_61469) : edamame.impl.parser.parse_next.call(null,G__60850_61468,G__60851_61469));

var G__61479 = match;
match = G__61479;
continue;
}
}
break;
}
});
edamame.impl.parser.parse_reader_conditional = (function edamame$impl$parser$parse_reader_conditional(ctx,reader){
edamame.impl.parser.skip_whitespace(ctx,reader);

var opt = new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
if(splice_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
} else {
}

edamame.impl.parser.skip_whitespace(ctx,reader);

if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"preserve","preserve",1276846509),opt)){
return cljs.tools.reader.impl.utils.reader_conditional((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_(opt)){
var G__60862 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.assoc,new cljs.core.Keyword("edamame","read-cond-splicing","edamame/read-cond-splicing",-1992728777),splice_QMARK_);
return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__60862) : opt.call(null,G__60862));
} else {
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var row = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null):null);
var col = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null):null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),")"),new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
var match = edamame.impl.parser.parse_first_matching_condition(ctx__$1,reader);
if(edamame.impl.parser.non_match_QMARK_(match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(match,(function (p1__60855_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60855_SHARP_,new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765),true);
}));
} else {
return match;

}
}

}
}
});
edamame.impl.parser.get_auto_resolve = (function edamame$impl$parser$get_auto_resolve(var_args){
var G__60873 = arguments.length;
switch (G__60873) {
case 3:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,next_val,null);
}));

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5802__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return v;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__5045__auto__ = msg;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
edamame.impl.parser.auto_resolve = (function edamame$impl$parser$auto_resolve(var_args){
var G__60891 = arguments.length;
switch (G__60891) {
case 5:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (ctx,m,kns,reader,next_val){
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,m,kns,reader,next_val,null);
}));

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6 = (function (ctx,m,kns,reader,next_val,msg){
var temp__5802__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(kns) : m.call(null,kns));
if(cljs.core.truth_(temp__5802__auto__)){
var kns__$1 = temp__5802__auto__;
return kns__$1;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__5045__auto__ = msg;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.auto_resolve.cljs$lang$maxFixedArity = 6);

edamame.impl.parser.read_symbol = (function edamame$impl$parser$read_symbol(var_args){
var G__60905 = arguments.length;
switch (G__60905) {
case 2:
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3(ctx,reader,reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null));
}));

(edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,initch){
var temp__5804__auto__ = edamame.impl.parser.read_token(reader,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),initch);
if(cljs.core.truth_(temp__5804__auto__)){
var token = temp__5804__auto__;
var G__60911 = token;
switch (G__60911) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
default:
var or__5045__auto__ = (function (){var temp__5804__auto____$1 = (edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1(token) : edamame.impl.parser.parse_symbol.call(null,token));
if(cljs.core.truth_(temp__5804__auto____$1)){
var p = temp__5804__auto____$1;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0))),(p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1))));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,["Invalid symbol: ",token].join(''),cljs.core.update.cljs$core$IFn$_invoke$arity$4(edamame.impl.parser.location(reader),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.core._,((token).length)));
}

}
} else {
return null;
}
}));

(edamame.impl.parser.read_symbol.cljs$lang$maxFixedArity = 3);

edamame.impl.parser.parse_namespaced_map = (function edamame$impl$parser$parse_namespaced_map(ctx,reader){
var auto_resolved_QMARK_ = (((":" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)))?(function (){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return true;
})()
:null);
var current_ns_QMARK_ = (cljs.core.truth_(auto_resolved_QMARK_)?("{" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)):null);
var prefix = (cljs.core.truth_(auto_resolved_QMARK_)?(cljs.core.truth_(current_ns_QMARK_)?null:edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2(ctx,reader)):edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2(ctx,reader));
var the_map = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.truth_(auto_resolved_QMARK_)){
var ns = (cljs.core.truth_(current_ns_QMARK_)?new cljs.core.Keyword(null,"current","current",-1088038603):cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prefix)));
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,ns);
var resolved_ns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,ns,reader,prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys(the_map)),cljs.core.vals(the_map));
} else {
var resolved_ns = cljs.core.name(prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(resolved_ns,cljs.core.keys(the_map)),cljs.core.vals(the_map));
}
});
edamame.impl.parser.parse_sharp = (function edamame$impl$parser$parse_sharp(ctx,reader){
var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
var G__60930 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__60930)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__60930)){
edamame.impl.parser.parse_comment(reader);

return reader;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__60930)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
var pat = edamame.impl.parser.read_regex_pattern(ctx,reader);
if(v === true){
return cljs.core.re_pattern(pat);
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(pat) : v.call(null,pat));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Regex not allowed. Use the `:regex` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__60930)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return (edamame.impl.parser.read_symbolic_value.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.read_symbolic_value.cljs$core$IFn$_invoke$arity$3(reader,null,null) : edamame.impl.parser.read_symbolic_value.call(null,reader,null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__60930)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if((edamame.impl.parser.eof === next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Var literal not allowed. Use the `:var` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__60930)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("edamame.impl.parser","fn-literal","edamame.impl.parser/fn-literal",-1835933155).cljs$core$IFn$_invoke$arity$1(ctx))){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Nested fn literals not allowed.");
} else {
var fn_expr = (function (){var G__60943 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","fn-literal","edamame.impl.parser/fn-literal",-1835933155),true);
var G__60944 = reader;
return (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(G__60943,G__60944) : edamame.impl.parser.parse_next.call(null,G__60943,G__60944));
})();
if(v === true){
return edamame.impl.read_fn.read_fn(fn_expr);
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(fn_expr) : v.call(null,fn_expr));
}
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Function literal not allowed. Use the `:fn` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__60930)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_namespaced_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__60930)){
return edamame.impl.parser.parse_set(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__60930)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol("edamame.core","read-eval","edamame.core/read-eval",1461005554,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Read-eval not allowed. Use the `:read-eval` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__60930)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Conditional read not allowed.");
}

reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_reader_conditional(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__60930)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return reader;
} else {
if(cljs.core.truth_(edamame.impl.parser.dispatch_macro_QMARK_(c))){
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,"#");

return edamame.impl.parser.edn_read(ctx,reader);
} else {
var suppress_QMARK_ = new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
} else {
var sym = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var data = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var f = (function (){var or__5045__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var readers = temp__5804__auto__;
return (readers.cljs$core$IFn$_invoke$arity$1 ? readers.cljs$core$IFn$_invoke$arity$1(sym) : readers.call(null,sym));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.tagged_literals._STAR_cljs_data_readers_STAR_.call(null,sym);
}
})();
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
} else {
throw (new Error(["No reader function for tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
}
}
}

}
}
}
}
}
}
}
}
}
}
}
});
edamame.impl.parser.throw_odd_map = (function edamame$impl$parser$throw_odd_map(ctx,reader,loc,elements){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
edamame.impl.parser.parse_map = (function edamame$impl$parser$parse_map(ctx,reader){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var start_loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
var elements = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var c = cljs.core.count(elements);
if((c > (0))){
if(cljs.core.odd_QMARK_(c)){
edamame.impl.parser.throw_odd_map(ctx,reader,start_loc,elements);
} else {
}

var ks_61559 = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,ks_61559))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"map","map",1371690461),ks_61559);
}
} else {
}

if((c <= (16))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,elements);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,elements);
}
});
edamame.impl.parser.parse_keyword = (function edamame$impl$parser$parse_keyword(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var init_c = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(init_c))){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Invalid token: :");
} else {
}

var token = edamame.impl.parser.read_token(reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c);
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1)):token);
var vec__60974 = (edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1(token__$1) : edamame.impl.parser.parse_symbol.call(null,token__$1));
var token_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60974,(0),null);
var token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60974,(1),null);
if(cljs.core.truth_(token_ns)){
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,token__$1);
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token_ns),reader,token_ns);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,f,new cljs.core.Keyword(null,"current","current",-1088038603),reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
}
});
/**
 * Resolves syntactical sugar in metadata
 */
edamame.impl.parser.desugar_meta = (function edamame$impl$parser$desugar_meta(var_args){
var G__60985 = arguments.length;
switch (G__60985) {
case 1:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1 = (function (f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2 = (function (f,postprocess){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f)),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(true) : postprocess.call(null,true))]);
} else {
if((f instanceof cljs.core.Symbol)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223)) : postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223))),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
if(typeof f === 'string'){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223)) : postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223))),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$lang$maxFixedArity = 2);

edamame.impl.parser.dispatch = (function edamame$impl$parser$dispatch(ctx,reader,c){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var sharp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",c);
if(sharp_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_sharp(ctx,reader);
} else {
var G__61000 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__61000)){
return edamame.impl.parser.eof;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",G__61000)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Deref not allowed. Use the `:deref` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__61000)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(((v === true) || (cljs.core.map_QMARK_(v)))){
var gensyms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"gensyms","gensyms",248713782),gensyms);
var ret = edamame.impl.syntax_quote.syntax_quote(ctx__$1,reader,next_val);
return ret;
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax quote not allowed. Use the `:syntax-quote` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__61000)){
return edamame.impl.parser.parse_string_STAR_(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__61000)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if((edamame.impl.parser.eof === next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
}
} else {
return edamame.impl.parser.edn_read(ctx,reader);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__61000)){
return edamame.impl.parser.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__61000)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5804__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var map__61021 = temp__5804__auto__;
var map__61021__$1 = cljs.core.__destructure_map(map__61021);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__61027 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__61027__$1 = cljs.core.__destructure_map(map__61027);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__61000)){
return edamame.impl.parser.parse_keyword(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__61000)){
return edamame.impl.parser.parse_comment(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__61000)){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"]");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__61000)){
return edamame.impl.parser.parse_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__61000)){
var G__61044 = reader;
var G__61045 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var G__61046 = null;
return (edamame.impl.parser.read_char_STAR_.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.read_char_STAR_.cljs$core$IFn$_invoke$arity$3(G__61044,G__61045,G__61046) : edamame.impl.parser.read_char_STAR_.call(null,G__61044,G__61045,G__61046));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__61000)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5804__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var map__61058 = temp__5804__auto__;
var map__61058__$1 = cljs.core.__destructure_map(map__61058);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61058__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61058__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61058__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__61062 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__61062__$1 = cljs.core.__destructure_map(map__61062);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__61000)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5804__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var map__61067 = temp__5804__auto__;
var map__61067__$1 = cljs.core.__destructure_map(map__61067);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__61068 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__61068__$1 = cljs.core.__destructure_map(map__61068);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__61000)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var meta_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,true) : edamame.impl.parser.parse_next.call(null,ctx,reader,true));
var val_val = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.merge,meta_val);
return val_val;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",G__61000)){
var temp__5802__auto__ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return true;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var nc = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((nc === "@")){
var temp__5802__auto____$1 = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return true;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var v__$1 = temp__5802__auto____$1;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(v__$1 === true){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(next_val) : v__$1.call(null,next_val));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote splice not allowed. Use the `:syntax-quote` option");
}
} else {
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
}
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote not allowed. Use the `:syntax-unquote` option");
}
} else {
var c__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_((edamame.impl.parser.number_literal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.number_literal_QMARK_.cljs$core$IFn$_invoke$arity$2(reader,c__$1) : edamame.impl.parser.number_literal_QMARK_.call(null,reader,c__$1)))){
return edamame.impl.parser.read_number(ctx,reader,c__$1);
} else {
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3(ctx,reader,c__$1);

}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
edamame.impl.parser.iobj_QMARK_ = (function edamame$impl$parser$iobj_QMARK_(obj){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
}
});
edamame.impl.parser.buf = (function edamame$impl$parser$buf(reader){
return new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reader.frames));
});
edamame.impl.parser.parse_next = (function edamame$impl$parser$parse_next(var_args){
var G__61086 = arguments.length;
switch (G__61086) {
case 2:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,null);
}));

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,desugar){
while(true){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var temp__5802__auto__ = (function (){var and__5043__auto__ = edamame.impl.parser.skip_whitespace(ctx,reader);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.tools.reader.reader_types.peek_char(reader);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
var log_QMARK_ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(ctx);
var buf = (cljs.core.truth_(log_QMARK_)?edamame.impl.parser.buf(reader):null);
var offset = (cljs.core.truth_(log_QMARK_)?buf.getLength():null);
var obj = (cljs.core.truth_(log_QMARK_)?cljs.tools.reader.reader_types.log_source_STAR_(reader,((function (ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5802__auto__,ir_QMARK_){
return (function (){
return edamame.impl.parser.dispatch(ctx,reader,c);
});})(ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5802__auto__,ir_QMARK_))
):edamame.impl.parser.dispatch(ctx,reader,c));
if((reader === obj)){
var G__61595 = ctx;
var G__61596 = reader;
var G__61597 = desugar;
ctx = G__61595;
reader = G__61596;
desugar = G__61597;
continue;
} else {
if((edamame.impl.parser.expected_delimiter === obj)){
return obj;
} else {
var postprocess = new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881).cljs$core$IFn$_invoke$arity$1(ctx);
var location_QMARK_ = new cljs.core.Keyword(null,"location?","location?",425878086).cljs$core$IFn$_invoke$arity$1(ctx);
var end_loc_QMARK_ = new cljs.core.Keyword(null,"end-location","end-location",-1199449467).cljs$core$IFn$_invoke$arity$1(ctx);
var iobj_QMARK__QMARK_ = edamame.impl.parser.iobj_QMARK_(obj);
var src = (cljs.core.truth_(log_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(buf),offset).trim():null);
var loc_QMARK_ = (function (){var and__5043__auto__ = ir_QMARK_;
if(and__5043__auto__){
var or__5045__auto__ = (function (){var and__5043__auto____$1 = iobj_QMARK__QMARK_;
if(and__5043__auto____$1){
var or__5045__auto__ = cljs.core.not(location_QMARK_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return (location_QMARK_.cljs$core$IFn$_invoke$arity$1 ? location_QMARK_.cljs$core$IFn$_invoke$arity$1(obj) : location_QMARK_.call(null,obj));
}
} else {
return and__5043__auto____$1;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return postprocess;
}
} else {
return and__5043__auto__;
}
})();
var end_loc = (cljs.core.truth_((function (){var and__5043__auto__ = ir_QMARK_;
if(and__5043__auto__){
var and__5043__auto____$1 = loc_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return end_loc_QMARK_;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?edamame.impl.parser.location(reader):null);
var row = (cljs.core.truth_(loc_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(loc):null);
var end_row = (cljs.core.truth_(end_loc_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_loc):null);
var col = (cljs.core.truth_(loc_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(loc):null);
var end_col = (cljs.core.truth_(end_loc_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end_loc):null);
var postprocess_fn = (cljs.core.truth_(postprocess)?((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5802__auto__,ir_QMARK_){
return (function (p1__61078_SHARP_){
var G__61092 = (function (){var G__61093 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),p1__61078_SHARP_], null);
var G__61093__$1 = (cljs.core.truth_(loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61093,new cljs.core.Keyword(null,"loc","loc",-584284901),(function (){var G__61094 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),row,new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),col]);
if(cljs.core.truth_(end_loc_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__61094,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),end_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),end_col], 0));
} else {
return G__61094;
}
})()):G__61093);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61093__$1,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"source","source",-433931539);
}
})(),src);
} else {
return G__61093__$1;
}
})();
return (postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(G__61092) : postprocess.call(null,G__61092));
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5802__auto__,ir_QMARK_))
:null);
var obj__$1 = (cljs.core.truth_(desugar)?(cljs.core.truth_(postprocess_fn)?edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2(obj,postprocess_fn):edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1(obj)):obj);
var obj__$2 = (cljs.core.truth_(postprocess)?(postprocess_fn.cljs$core$IFn$_invoke$arity$1 ? postprocess_fn.cljs$core$IFn$_invoke$arity$1(obj__$1) : postprocess_fn.call(null,obj__$1)):(cljs.core.truth_(loc_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(obj__$1,((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5802__auto__,ir_QMARK_){
return (function (p1__61082_SHARP_){
var G__61095 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__61082_SHARP_,new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),row),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),col);
var G__61095__$1 = (cljs.core.truth_(end_loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61095,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),end_row),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),end_col):G__61095);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61095__$1,new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(ctx),src);
} else {
return G__61095__$1;
}
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5802__auto__,ir_QMARK_))
):obj__$1
));
return obj__$2;
}
}
} else {
return edamame.impl.parser.eof;
}
break;
}
}));

(edamame.impl.parser.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Create reader for strings.
 */
edamame.impl.parser.string_reader = (function edamame$impl$parser$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
edamame.impl.parser.Options = (function (dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,__meta,__extmap,__hash){
this.dispatch = dispatch;
this.deref = deref;
this.syntax_quote = syntax_quote;
this.unquote = unquote;
this.unquote_splicing = unquote_splicing;
this.quote = quote;
this.fn = fn;
this.var$ = var$;
this.read_eval = read_eval;
this.regex = regex;
this.row_key = row_key;
this.col_key = col_key;
this.end_row_key = end_row_key;
this.end_col_key = end_col_key;
this.source = source;
this.source_key = source_key;
this.postprocess = postprocess;
this.location_QMARK_ = location_QMARK_;
this.end_location = end_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k61105,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__61115 = k61105;
var G__61115__$1 = (((G__61115 instanceof cljs.core.Keyword))?G__61115.fqn:null);
switch (G__61115__$1) {
case "dispatch":
return self__.dispatch;

break;
case "deref":
return self__.deref;

break;
case "syntax-quote":
return self__.syntax_quote;

break;
case "unquote":
return self__.unquote;

break;
case "unquote-splicing":
return self__.unquote_splicing;

break;
case "quote":
return self__.quote;

break;
case "fn":
return self__.fn;

break;
case "var":
return self__.var$;

break;
case "read-eval":
return self__.read_eval;

break;
case "regex":
return self__.regex;

break;
case "row-key":
return self__.row_key;

break;
case "col-key":
return self__.col_key;

break;
case "end-row-key":
return self__.end_row_key;

break;
case "end-col-key":
return self__.end_col_key;

break;
case "source":
return self__.source;

break;
case "source-key":
return self__.source_key;

break;
case "postprocess":
return self__.postprocess;

break;
case "location?":
return self__.location_QMARK_;

break;
case "end-location":
return self__.end_location;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61105,else__5346__auto__);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__61118){
var vec__61119 = p__61118;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(edamame.impl.parser.Options.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#edamame.impl.parser.Options{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-key","source-key",-1325875542),self__.source_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),self__.postprocess],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location?","location?",425878086),self__.location_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-location","end-location",-1199449467),self__.end_location],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61104){
var self__ = this;
var G__61104__$1 = this;
return (new cljs.core.RecordIter((0),G__61104__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),new cljs.core.Keyword(null,"location?","location?",425878086),new cljs.core.Keyword(null,"end-location","end-location",-1199449467)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1037796634 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61106,other61107){
var self__ = this;
var this61106__$1 = this;
return (((!((other61107 == null)))) && ((((this61106__$1.constructor === other61107.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.dispatch,other61107.dispatch)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.deref,other61107.deref)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.syntax_quote,other61107.syntax_quote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.unquote,other61107.unquote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.unquote_splicing,other61107.unquote_splicing)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.quote,other61107.quote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.fn,other61107.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.var,other61107.var)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.read_eval,other61107.read_eval)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.regex,other61107.regex)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.row_key,other61107.row_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.col_key,other61107.col_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.end_row_key,other61107.end_row_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.end_col_key,other61107.end_col_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.source,other61107.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.source_key,other61107.source_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.postprocess,other61107.postprocess)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.location_QMARK_,other61107.location_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.end_location,other61107.end_location)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61106__$1.__extmap,other61107.__extmap)))))))))))))))))))))))))))))))))))))))))));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),null,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),null,new cljs.core.Keyword(null,"location?","location?",425878086),null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),null,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"deref","deref",-145586795),null,new cljs.core.Keyword(null,"regex","regex",939488856),null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),null,new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k61105){
var self__ = this;
var this__5350__auto____$1 = this;
var G__61164 = k61105;
var G__61164__$1 = (((G__61164 instanceof cljs.core.Keyword))?G__61164.fqn:null);
switch (G__61164__$1) {
case "dispatch":
case "deref":
case "syntax-quote":
case "unquote":
case "unquote-splicing":
case "quote":
case "fn":
case "var":
case "read-eval":
case "regex":
case "row-key":
case "col-key":
case "end-row-key":
case "end-col-key":
case "source":
case "source-key":
case "postprocess":
case "location?":
case "end-location":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61105);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__61104){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__61165 = cljs.core.keyword_identical_QMARK_;
var expr__61166 = k__5352__auto__;
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__61166)))){
return (new edamame.impl.parser.Options(G__61104,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref","deref",-145586795),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"deref","deref",-145586795),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,G__61104,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,G__61104,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,G__61104,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,G__61104,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quote","quote",-262615245),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"quote","quote",-262615245),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,G__61104,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,G__61104,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var","var",-769682797),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,G__61104,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,G__61104,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regex","regex",939488856),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,G__61104,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,G__61104,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,G__61104,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,G__61104,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,G__61104,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,G__61104,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-key","source-key",-1325875542),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,G__61104,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,G__61104,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location?","location?",425878086),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"location?","location?",425878086),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,G__61104,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61165.cljs$core$IFn$_invoke$arity$2 ? pred__61165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-location","end-location",-1199449467),expr__61166) : pred__61165.call(null,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),expr__61166)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,G__61104,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__61104),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var","var",-769682797),self__.var$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source-key","source-key",-1325875542),self__.source_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),self__.postprocess,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"location?","location?",425878086),self__.location_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-location","end-location",-1199449467),self__.end_location,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__61104){
var self__ = this;
var this__5342__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,G__61104,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(edamame.impl.parser.Options.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null),new cljs.core.Symbol(null,"row-key","row-key",451520815,null),new cljs.core.Symbol(null,"col-key","col-key",-369144239,null),new cljs.core.Symbol(null,"end-row-key","end-row-key",513868847,null),new cljs.core.Symbol(null,"end-col-key","end-col-key",1722344831,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-key","source-key",314655985,null),new cljs.core.Symbol(null,"postprocess","postprocess",-223231354,null),new cljs.core.Symbol(null,"location?","location?",2066409613,null),new cljs.core.Symbol(null,"end-location","end-location",441082060,null)], null);
}));

(edamame.impl.parser.Options.cljs$lang$type = true);

(edamame.impl.parser.Options.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Options",null,(1),null));
}));

(edamame.impl.parser.Options.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"edamame.impl.parser/Options");
}));

/**
 * Positional factory function for edamame.impl.parser/Options.
 */
edamame.impl.parser.__GT_Options = (function edamame$impl$parser$__GT_Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location){
return (new edamame.impl.parser.Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Options, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Options = (function edamame$impl$parser$map__GT_Options(G__61110){
var extmap__5385__auto__ = (function (){var G__61201 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61110,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),new cljs.core.Keyword(null,"location?","location?",425878086),new cljs.core.Keyword(null,"end-location","end-location",-1199449467)], 0));
if(cljs.core.record_QMARK_(G__61110)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61201);
} else {
return G__61201;
}
})();
return (new edamame.impl.parser.Options(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"location?","location?",425878086).cljs$core$IFn$_invoke$arity$1(G__61110),new cljs.core.Keyword(null,"end-location","end-location",-1199449467).cljs$core$IFn$_invoke$arity$1(G__61110),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

edamame.impl.parser.normalize_opts = (function edamame$impl$parser$normalize_opts(opts){
var opts__$1 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var dispatch = temp__5802__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@"], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deref","deref",-145586795),v], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),v], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
if(cljs.core.fn_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v], null);
} else {
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5804__auto____$1)){
var v__$1 = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v__$1], null);
} else {
return null;
}
}
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","@"], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),v], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'"], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quote","quote",-262615245),v], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","("], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),v], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","'"], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),v], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","="], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),v], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","\""], null));
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex","regex",939488856),v], null);
} else {
return null;
}
})()], null));
} else {
return opts;
}
})();
var opts__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"deref","deref",-145586795),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),true,new cljs.core.Keyword(null,"quote","quote",-262615245),true,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),true,new cljs.core.Keyword(null,"regex","regex",939488856),true,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),true,new cljs.core.Keyword(null,"var","var",-769682797),true], null),opts__$1], 0)):opts__$1);
var opts__$3 = (function (){var G__61223 = opts__$2;
var G__61223__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61223,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"row","row",-570139521)):G__61223);
var G__61223__$2 = ((cljs.core.not(new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61223__$1,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"col","col",-1959363084)):G__61223__$1);
var G__61223__$3 = ((cljs.core.not(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61223__$2,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-row","end-row",-545103581)):G__61223__$2);
var G__61223__$4 = ((cljs.core.not(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61223__$3,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"end-col","end-col",-724155879)):G__61223__$3);
var G__61223__$5 = ((cljs.core.not(new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61223__$4,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"source","source",-433931539)):G__61223__$4);
if((!(cljs.core.contains_QMARK_(opts__$2,new cljs.core.Keyword(null,"end-location","end-location",-1199449467))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61223__$5,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),true);
} else {
return G__61223__$5;
}
})();
return edamame.impl.parser.map__GT_Options(opts__$3);
});
edamame.impl.parser.parse_string = (function edamame$impl$parser$parse_string(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var src_QMARK_ = opts__$1.source;
var r = (cljs.core.truth_(src_QMARK_)?cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(s):edamame.impl.parser.string_reader(s));
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var v = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if((edamame.impl.parser.eof === v)){
return null;
} else {
return v;
}
});
edamame.impl.parser.parse_string_all = (function edamame$impl$parser$parse_string_all(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var r = edamame.impl.parser.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if((edamame.impl.parser.eof === next_val)){
return cljs.core.persistent_BANG_(ret);
} else {
var G__61686 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,next_val);
ret = G__61686;
continue;
}
break;
}
});
edamame.impl.parser.reader = (function edamame$impl$parser$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
edamame.impl.parser.get_line_number = (function edamame$impl$parser$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number(reader);
});
edamame.impl.parser.get_column_number = (function edamame$impl$parser$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number(reader);
});
edamame.impl.parser.source_logging_reader = (function edamame$impl$parser$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});

//# sourceMappingURL=edamame.impl.parser.js.map
