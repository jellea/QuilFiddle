// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_dependents_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__13156 = s;
var map__13156__$1 = ((((!((map__13156 == null)))?((((map__13156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13156):map__13156);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.cst$kw$info);
var d = (0);
var G__13159 = info;
var map__13160 = G__13159;
var map__13160__$1 = ((((!((map__13160 == null)))?((((map__13160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13160):map__13160);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__13159__$1 = G__13159;
while(true){
var d__$2 = d__$1;
var map__13162 = G__13159__$1;
var map__13162__$1 = ((((!((map__13162 == null)))?((((map__13162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13162):map__13162);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13162__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__13164 = (d__$2 + (1));
var G__13165 = shadow__$1;
d__$1 = G__13164;
G__13159__$1 = G__13165;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13166){
var map__13172 = p__13166;
var map__13172__$1 = ((((!((map__13172 == null)))?((((map__13172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13172):map__13172);
var name_var = map__13172__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13172__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13172__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__13174 = info;
var map__13174__$1 = ((((!((map__13174 == null)))?((((map__13174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13174):map__13174);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13174__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13174__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__13176 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__13176) : cljs.compiler.munge.call(null,G__13176));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args13177 = [];
var len__5537__auto___13180 = arguments.length;
var i__5538__auto___13181 = (0);
while(true){
if((i__5538__auto___13181 < len__5537__auto___13180)){
args13177.push((arguments[i__5538__auto___13181]));

var G__13182 = (i__5538__auto___13181 + (1));
i__5538__auto___13181 = G__13182;
continue;
} else {
}
break;
}

var G__13179 = args13177.length;
switch (G__13179) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13177.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.core._hash(name);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__13185 = cp;
switch (G__13185) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__13191_13195 = cljs.core.seq(s);
var chunk__13192_13196 = null;
var count__13193_13197 = (0);
var i__13194_13198 = (0);
while(true){
if((i__13194_13198 < count__13193_13197)){
var c_13199 = chunk__13192_13196.cljs$core$IIndexed$_nth$arity$2(null,i__13194_13198);
sb.append(cljs.compiler.escape_char(c_13199));

var G__13200 = seq__13191_13195;
var G__13201 = chunk__13192_13196;
var G__13202 = count__13193_13197;
var G__13203 = (i__13194_13198 + (1));
seq__13191_13195 = G__13200;
chunk__13192_13196 = G__13201;
count__13193_13197 = G__13202;
i__13194_13198 = G__13203;
continue;
} else {
var temp__4425__auto___13204 = cljs.core.seq(seq__13191_13195);
if(temp__4425__auto___13204){
var seq__13191_13205__$1 = temp__4425__auto___13204;
if(cljs.core.chunked_seq_QMARK_(seq__13191_13205__$1)){
var c__5282__auto___13206 = cljs.core.chunk_first(seq__13191_13205__$1);
var G__13207 = cljs.core.chunk_rest(seq__13191_13205__$1);
var G__13208 = c__5282__auto___13206;
var G__13209 = cljs.core.count(c__5282__auto___13206);
var G__13210 = (0);
seq__13191_13195 = G__13207;
chunk__13192_13196 = G__13208;
count__13193_13197 = G__13209;
i__13194_13198 = G__13210;
continue;
} else {
var c_13211 = cljs.core.first(seq__13191_13205__$1);
sb.append(cljs.compiler.escape_char(c_13211));

var G__13212 = cljs.core.next(seq__13191_13205__$1);
var G__13213 = null;
var G__13214 = (0);
var G__13215 = (0);
seq__13191_13195 = G__13212;
chunk__13192_13196 = G__13213;
count__13193_13197 = G__13214;
i__13194_13198 = G__13215;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5392__auto__ = (function (){var G__13216 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13216) : cljs.core.atom.call(null,G__13216));
})();
var prefer_table__5393__auto__ = (function (){var G__13217 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13217) : cljs.core.atom.call(null,G__13217));
})();
var method_cache__5394__auto__ = (function (){var G__13218 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13218) : cljs.core.atom.call(null,G__13218));
})();
var cached_hierarchy__5395__auto__ = (function (){var G__13219 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13219) : cljs.core.atom.call(null,G__13219));
})();
var hierarchy__5396__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__5396__auto__,method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5919__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13225_13230 = ast;
var map__13225_13231__$1 = ((((!((map__13225_13230 == null)))?((((map__13225_13230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13225_13230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13225_13230):map__13225_13230);
var env_13232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13225_13231__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_13232))){
var map__13227_13233 = env_13232;
var map__13227_13234__$1 = ((((!((map__13227_13233 == null)))?((((map__13227_13233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13227_13233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13227_13233):map__13227_13233);
var line_13235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13227_13234__$1,cljs.core.cst$kw$line);
var column_13236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13227_13234__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__13227_13233,map__13227_13234__$1,line_13235,column_13236,map__13225_13230,map__13225_13231__$1,env_13232,val__5919__auto__){
return (function (m){
var minfo = (function (){var G__13229 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
var G__13229__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13229,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__13229);
return G__13229__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_13235 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__13227_13233,map__13227_13234__$1,line_13235,column_13236,map__13225_13230,map__13225_13231__$1,env_13232,val__5919__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13236)?(column_13236 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__13227_13233,map__13227_13234__$1,line_13235,column_13236,map__13225_13230,map__13225_13231__$1,env_13232,val__5919__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__13227_13233,map__13227_13234__$1,line_13235,column_13236,map__13225_13230,map__13225_13231__$1,env_13232,val__5919__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__13227_13233,map__13227_13234__$1,line_13235,column_13236,map__13225_13230,map__13225_13231__$1,env_13232,val__5919__auto__))
,cljs.core.sorted_map()));
});})(map__13227_13233,map__13227_13234__$1,line_13235,column_13236,map__13225_13230,map__13225_13231__$1,env_13232,val__5919__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5544__auto__ = [];
var len__5537__auto___13243 = arguments.length;
var i__5538__auto___13244 = (0);
while(true){
if((i__5538__auto___13244 < len__5537__auto___13243)){
args__5544__auto__.push((arguments[i__5538__auto___13244]));

var G__13245 = (i__5538__auto___13244 + (1));
i__5538__auto___13244 = G__13245;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((0) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5545__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__13239_13246 = cljs.core.seq(xs);
var chunk__13240_13247 = null;
var count__13241_13248 = (0);
var i__13242_13249 = (0);
while(true){
if((i__13242_13249 < count__13241_13248)){
var x_13250 = chunk__13240_13247.cljs$core$IIndexed$_nth$arity$2(null,i__13242_13249);
if((x_13250 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_13250)){
cljs.compiler.emit(x_13250);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_13250)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_13250);
} else {
if(goog.isFunction(x_13250)){
(x_13250.cljs$core$IFn$_invoke$arity$0 ? x_13250.cljs$core$IFn$_invoke$arity$0() : x_13250.call(null));
} else {
var s_13251 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_13250], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__13239_13246,chunk__13240_13247,count__13241_13248,i__13242_13249,s_13251,x_13250){
return (function (p1__13237_SHARP_){
return (p1__13237_SHARP_ + cljs.core.count(s_13251));
});})(seq__13239_13246,chunk__13240_13247,count__13241_13248,i__13242_13249,s_13251,x_13250))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13251], 0));

}
}
}
}

var G__13252 = seq__13239_13246;
var G__13253 = chunk__13240_13247;
var G__13254 = count__13241_13248;
var G__13255 = (i__13242_13249 + (1));
seq__13239_13246 = G__13252;
chunk__13240_13247 = G__13253;
count__13241_13248 = G__13254;
i__13242_13249 = G__13255;
continue;
} else {
var temp__4425__auto___13256 = cljs.core.seq(seq__13239_13246);
if(temp__4425__auto___13256){
var seq__13239_13257__$1 = temp__4425__auto___13256;
if(cljs.core.chunked_seq_QMARK_(seq__13239_13257__$1)){
var c__5282__auto___13258 = cljs.core.chunk_first(seq__13239_13257__$1);
var G__13259 = cljs.core.chunk_rest(seq__13239_13257__$1);
var G__13260 = c__5282__auto___13258;
var G__13261 = cljs.core.count(c__5282__auto___13258);
var G__13262 = (0);
seq__13239_13246 = G__13259;
chunk__13240_13247 = G__13260;
count__13241_13248 = G__13261;
i__13242_13249 = G__13262;
continue;
} else {
var x_13263 = cljs.core.first(seq__13239_13257__$1);
if((x_13263 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_13263)){
cljs.compiler.emit(x_13263);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_13263)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_13263);
} else {
if(goog.isFunction(x_13263)){
(x_13263.cljs$core$IFn$_invoke$arity$0 ? x_13263.cljs$core$IFn$_invoke$arity$0() : x_13263.call(null));
} else {
var s_13264 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_13263], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__13239_13246,chunk__13240_13247,count__13241_13248,i__13242_13249,s_13264,x_13263,seq__13239_13257__$1,temp__4425__auto___13256){
return (function (p1__13237_SHARP_){
return (p1__13237_SHARP_ + cljs.core.count(s_13264));
});})(seq__13239_13246,chunk__13240_13247,count__13241_13248,i__13242_13249,s_13264,x_13263,seq__13239_13257__$1,temp__4425__auto___13256))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13264], 0));

}
}
}
}

var G__13265 = cljs.core.next(seq__13239_13257__$1);
var G__13266 = null;
var G__13267 = (0);
var G__13268 = (0);
seq__13239_13246 = G__13265;
chunk__13240_13247 = G__13266;
count__13241_13248 = G__13267;
i__13242_13249 = G__13268;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq13238){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13238));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5544__auto__ = [];
var len__5537__auto___13273 = arguments.length;
var i__5538__auto___13274 = (0);
while(true){
if((i__5538__auto___13274 < len__5537__auto___13273)){
args__5544__auto__.push((arguments[i__5538__auto___13274]));

var G__13275 = (i__5538__auto___13274 + (1));
i__5538__auto___13274 = G__13275;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((0) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5545__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__13270){
var map__13271 = p__13270;
var map__13271__$1 = ((((!((map__13271 == null)))?((((map__13271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13271):map__13271);
var m = map__13271__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13271__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.array_seq([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13269){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13269));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13278_13280 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13279_13281 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13278_13280,_STAR_print_fn_STAR_13279_13281,sb__5453__auto__){
return (function (x__5454__auto__){
return sb__5453__auto__.append(x__5454__auto__);
});})(_STAR_print_newline_STAR_13278_13280,_STAR_print_fn_STAR_13279_13281,sb__5453__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13279_13281;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13278_13280;
}
return [cljs.core.str(sb__5453__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__5392__auto__ = (function (){var G__13282 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13282) : cljs.core.atom.call(null,G__13282));
})();
var prefer_table__5393__auto__ = (function (){var G__13283 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13283) : cljs.core.atom.call(null,G__13283));
})();
var method_cache__5394__auto__ = (function (){var G__13284 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13284) : cljs.core.atom.call(null,G__13284));
})();
var cached_hierarchy__5395__auto__ = (function (){var G__13285 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13285) : cljs.core.atom.call(null,G__13285));
})();
var hierarchy__5396__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__5396__auto__,method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__13286 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13286,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13286,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13286,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__13289_13291 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__13289_13291) : cljs.compiler.emit_constant.call(null,G__13289_13291));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__13290_13292 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__13290_13292) : cljs.compiler.emit_constant.call(null,G__13290_13292));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__13294_13295 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__13294_13295) : cljs.compiler.emit_constant.call(null,G__13294_13295));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__13296 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__13296) : x.call(null,G__13296));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__13297 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__13297) : x.call(null,G__13297));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid.toString(),"\")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__13299){
var map__13300 = p__13299;
var map__13300__$1 = ((((!((map__13300 == null)))?((((map__13300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13300):map__13300);
var arg = map__13300__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,cljs.core.cst$kw$form);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name)], null));
var or__4498__auto__ = js_module_name;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__13302 = info__$1;
var G__13302__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__13302):G__13302);
return G__13302__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__13303){
var map__13304 = p__13303;
var map__13304__$1 = ((((!((map__13304 == null)))?((((map__13304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13304):map__13304);
var arg = map__13304__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ana_SLASH_ast_QMARK_,cljs.core.cst$sym$sym)], 0)))].join('')));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ana_SLASH_ast_QMARK_,cljs.core.cst$sym$meta)], 0)))].join('')));
}

var map__13306 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__13306__$1 = ((((!((map__13306 == null)))?((((map__13306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13306):map__13306);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13306__$1,cljs.core.cst$kw$name);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__13308){
var map__13309 = p__13308;
var map__13309__$1 = ((((!((map__13309 == null)))?((((map__13309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13309):map__13309);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__13311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__13311_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__13312){
var map__13313 = p__13312;
var map__13313__$1 = ((((!((map__13313 == null)))?((((map__13313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13313):map__13313);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13313__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13313__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13313__$1,cljs.core.cst$kw$vals);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__13315){
var map__13316 = p__13315;
var map__13316__$1 = ((((!((map__13316 == null)))?((((map__13316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13316):map__13316);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13316__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13316__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__13318){
var map__13319 = p__13318;
var map__13319__$1 = ((((!((map__13319 == null)))?((((map__13319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13319):map__13319);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13319__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13319__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_13321 = cljs.core.count(items);
if((cnt_13321 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_13321,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__13322_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__13322_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__13323){
var map__13324 = p__13323;
var map__13324__$1 = ((((!((map__13324 == null)))?((((map__13324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13324):map__13324);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13324__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13324__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__13326){
var map__13327 = p__13326;
var map__13327__$1 = ((((!((map__13327 == null)))?((((map__13327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13327):map__13327);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13327__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13327__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13327__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___13337 = cljs.core.seq(items);
if(temp__4425__auto___13337){
var items_13338__$1 = temp__4425__auto___13337;
var vec__13329_13339 = items_13338__$1;
var vec__13330_13340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13329_13339,(0),null);
var k_13341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13330_13340,(0),null);
var v_13342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13330_13340,(1),null);
var r_13343 = cljs.core.nthnext(vec__13329_13339,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_13341),"\": ",v_13342], 0));

var seq__13331_13344 = cljs.core.seq(r_13343);
var chunk__13332_13345 = null;
var count__13333_13346 = (0);
var i__13334_13347 = (0);
while(true){
if((i__13334_13347 < count__13333_13346)){
var vec__13335_13348 = chunk__13332_13345.cljs$core$IIndexed$_nth$arity$2(null,i__13334_13347);
var k_13349__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13335_13348,(0),null);
var v_13350__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13335_13348,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_13349__$1),"\": ",v_13350__$1], 0));

var G__13351 = seq__13331_13344;
var G__13352 = chunk__13332_13345;
var G__13353 = count__13333_13346;
var G__13354 = (i__13334_13347 + (1));
seq__13331_13344 = G__13351;
chunk__13332_13345 = G__13352;
count__13333_13346 = G__13353;
i__13334_13347 = G__13354;
continue;
} else {
var temp__4425__auto___13355__$1 = cljs.core.seq(seq__13331_13344);
if(temp__4425__auto___13355__$1){
var seq__13331_13356__$1 = temp__4425__auto___13355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13331_13356__$1)){
var c__5282__auto___13357 = cljs.core.chunk_first(seq__13331_13356__$1);
var G__13358 = cljs.core.chunk_rest(seq__13331_13356__$1);
var G__13359 = c__5282__auto___13357;
var G__13360 = cljs.core.count(c__5282__auto___13357);
var G__13361 = (0);
seq__13331_13344 = G__13358;
chunk__13332_13345 = G__13359;
count__13333_13346 = G__13360;
i__13334_13347 = G__13361;
continue;
} else {
var vec__13336_13362 = cljs.core.first(seq__13331_13356__$1);
var k_13363__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13336_13362,(0),null);
var v_13364__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13336_13362,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_13363__$1),"\": ",v_13364__$1], 0));

var G__13365 = cljs.core.next(seq__13331_13356__$1);
var G__13366 = null;
var G__13367 = (0);
var G__13368 = (0);
seq__13331_13344 = G__13365;
chunk__13332_13345 = G__13366;
count__13333_13346 = G__13367;
i__13334_13347 = G__13368;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__13369){
var map__13370 = p__13369;
var map__13370__$1 = ((((!((map__13370 == null)))?((((map__13370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13370):map__13370);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13370__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13370__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__13372){
var map__13375 = p__13372;
var map__13375__$1 = ((((!((map__13375 == null)))?((((map__13375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13375):map__13375);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13375__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13375__$1,cljs.core.cst$kw$form);
var and__4486__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__4486__auto__){
var and__4486__auto____$1 = form;
if(cljs.core.truth_(and__4486__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__13377){
var map__13380 = p__13377;
var map__13380__$1 = ((((!((map__13380 == null)))?((((map__13380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13380):map__13380);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13380__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13380__$1,cljs.core.cst$kw$form);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4498__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,tag);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__13382){
var map__13383 = p__13382;
var map__13383__$1 = ((((!((map__13383 == null)))?((((map__13383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13383):map__13383);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13383__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13383__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13383__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13383__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13383__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4498__auto__ = unchecked;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__13385){
var map__13386 = p__13385;
var map__13386__$1 = ((((!((map__13386 == null)))?((((map__13386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13386):map__13386);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13386__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13386__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13386__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13386__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13386__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__13388_13402 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__13389_13403 = null;
var count__13390_13404 = (0);
var i__13391_13405 = (0);
while(true){
if((i__13391_13405 < count__13390_13404)){
var vec__13392_13406 = chunk__13389_13403.cljs$core$IIndexed$_nth$arity$2(null,i__13391_13405);
var ts_13407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13392_13406,(0),null);
var then_13408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13392_13406,(1),null);
var seq__13393_13409 = cljs.core.seq(ts_13407);
var chunk__13394_13410 = null;
var count__13395_13411 = (0);
var i__13396_13412 = (0);
while(true){
if((i__13396_13412 < count__13395_13411)){
var test_13413 = chunk__13394_13410.cljs$core$IIndexed$_nth$arity$2(null,i__13396_13412);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13413,":"], 0));

var G__13414 = seq__13393_13409;
var G__13415 = chunk__13394_13410;
var G__13416 = count__13395_13411;
var G__13417 = (i__13396_13412 + (1));
seq__13393_13409 = G__13414;
chunk__13394_13410 = G__13415;
count__13395_13411 = G__13416;
i__13396_13412 = G__13417;
continue;
} else {
var temp__4425__auto___13418 = cljs.core.seq(seq__13393_13409);
if(temp__4425__auto___13418){
var seq__13393_13419__$1 = temp__4425__auto___13418;
if(cljs.core.chunked_seq_QMARK_(seq__13393_13419__$1)){
var c__5282__auto___13420 = cljs.core.chunk_first(seq__13393_13419__$1);
var G__13421 = cljs.core.chunk_rest(seq__13393_13419__$1);
var G__13422 = c__5282__auto___13420;
var G__13423 = cljs.core.count(c__5282__auto___13420);
var G__13424 = (0);
seq__13393_13409 = G__13421;
chunk__13394_13410 = G__13422;
count__13395_13411 = G__13423;
i__13396_13412 = G__13424;
continue;
} else {
var test_13425 = cljs.core.first(seq__13393_13419__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13425,":"], 0));

var G__13426 = cljs.core.next(seq__13393_13419__$1);
var G__13427 = null;
var G__13428 = (0);
var G__13429 = (0);
seq__13393_13409 = G__13426;
chunk__13394_13410 = G__13427;
count__13395_13411 = G__13428;
i__13396_13412 = G__13429;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_13408], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_13408], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__13430 = seq__13388_13402;
var G__13431 = chunk__13389_13403;
var G__13432 = count__13390_13404;
var G__13433 = (i__13391_13405 + (1));
seq__13388_13402 = G__13430;
chunk__13389_13403 = G__13431;
count__13390_13404 = G__13432;
i__13391_13405 = G__13433;
continue;
} else {
var temp__4425__auto___13434 = cljs.core.seq(seq__13388_13402);
if(temp__4425__auto___13434){
var seq__13388_13435__$1 = temp__4425__auto___13434;
if(cljs.core.chunked_seq_QMARK_(seq__13388_13435__$1)){
var c__5282__auto___13436 = cljs.core.chunk_first(seq__13388_13435__$1);
var G__13437 = cljs.core.chunk_rest(seq__13388_13435__$1);
var G__13438 = c__5282__auto___13436;
var G__13439 = cljs.core.count(c__5282__auto___13436);
var G__13440 = (0);
seq__13388_13402 = G__13437;
chunk__13389_13403 = G__13438;
count__13390_13404 = G__13439;
i__13391_13405 = G__13440;
continue;
} else {
var vec__13397_13441 = cljs.core.first(seq__13388_13435__$1);
var ts_13442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13397_13441,(0),null);
var then_13443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13397_13441,(1),null);
var seq__13398_13444 = cljs.core.seq(ts_13442);
var chunk__13399_13445 = null;
var count__13400_13446 = (0);
var i__13401_13447 = (0);
while(true){
if((i__13401_13447 < count__13400_13446)){
var test_13448 = chunk__13399_13445.cljs$core$IIndexed$_nth$arity$2(null,i__13401_13447);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13448,":"], 0));

var G__13449 = seq__13398_13444;
var G__13450 = chunk__13399_13445;
var G__13451 = count__13400_13446;
var G__13452 = (i__13401_13447 + (1));
seq__13398_13444 = G__13449;
chunk__13399_13445 = G__13450;
count__13400_13446 = G__13451;
i__13401_13447 = G__13452;
continue;
} else {
var temp__4425__auto___13453__$1 = cljs.core.seq(seq__13398_13444);
if(temp__4425__auto___13453__$1){
var seq__13398_13454__$1 = temp__4425__auto___13453__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13398_13454__$1)){
var c__5282__auto___13455 = cljs.core.chunk_first(seq__13398_13454__$1);
var G__13456 = cljs.core.chunk_rest(seq__13398_13454__$1);
var G__13457 = c__5282__auto___13455;
var G__13458 = cljs.core.count(c__5282__auto___13455);
var G__13459 = (0);
seq__13398_13444 = G__13456;
chunk__13399_13445 = G__13457;
count__13400_13446 = G__13458;
i__13401_13447 = G__13459;
continue;
} else {
var test_13460 = cljs.core.first(seq__13398_13454__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13460,":"], 0));

var G__13461 = cljs.core.next(seq__13398_13454__$1);
var G__13462 = null;
var G__13463 = (0);
var G__13464 = (0);
seq__13398_13444 = G__13461;
chunk__13399_13445 = G__13462;
count__13400_13446 = G__13463;
i__13401_13447 = G__13464;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_13443], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_13443], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__13465 = cljs.core.next(seq__13388_13435__$1);
var G__13466 = null;
var G__13467 = (0);
var G__13468 = (0);
seq__13388_13402 = G__13465;
chunk__13389_13403 = G__13466;
count__13390_13404 = G__13467;
i__13391_13405 = G__13468;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__13469){
var map__13470 = p__13469;
var map__13470__$1 = ((((!((map__13470 == null)))?((((map__13470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13470):map__13470);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13470__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13470__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$emit_comment_$_print_comment_lines(e){
var seq__13504 = cljs.core.seq(clojure.string.split_lines(e));
var chunk__13505 = null;
var count__13506 = (0);
var i__13507 = (0);
while(true){
if((i__13507 < count__13506)){
var next_line = chunk__13505.cljs$core$IIndexed$_nth$arity$2(null,i__13507);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.trim(next_line),"*/","* /")], 0));

var G__13512 = seq__13504;
var G__13513 = chunk__13505;
var G__13514 = count__13506;
var G__13515 = (i__13507 + (1));
seq__13504 = G__13512;
chunk__13505 = G__13513;
count__13506 = G__13514;
i__13507 = G__13515;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13504);
if(temp__4425__auto__){
var seq__13504__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13504__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__13504__$1);
var G__13516 = cljs.core.chunk_rest(seq__13504__$1);
var G__13517 = c__5282__auto__;
var G__13518 = cljs.core.count(c__5282__auto__);
var G__13519 = (0);
seq__13504 = G__13516;
chunk__13505 = G__13517;
count__13506 = G__13518;
i__13507 = G__13519;
continue;
} else {
var next_line = cljs.core.first(seq__13504__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.trim(next_line),"*/","* /")], 0));

var G__13520 = cljs.core.next(seq__13504__$1);
var G__13521 = null;
var G__13522 = (0);
var G__13523 = (0);
seq__13504 = G__13520;
chunk__13505 = G__13521;
count__13506 = G__13522;
i__13507 = G__13523;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__13508_13524 = cljs.core.seq(docs__$2);
var chunk__13509_13525 = null;
var count__13510_13526 = (0);
var i__13511_13527 = (0);
while(true){
if((i__13511_13527 < count__13510_13526)){
var e_13528 = chunk__13509_13525.cljs$core$IIndexed$_nth$arity$2(null,i__13511_13527);
if(cljs.core.truth_(e_13528)){
print_comment_lines(e_13528);
} else {
}

var G__13529 = seq__13508_13524;
var G__13530 = chunk__13509_13525;
var G__13531 = count__13510_13526;
var G__13532 = (i__13511_13527 + (1));
seq__13508_13524 = G__13529;
chunk__13509_13525 = G__13530;
count__13510_13526 = G__13531;
i__13511_13527 = G__13532;
continue;
} else {
var temp__4425__auto___13533 = cljs.core.seq(seq__13508_13524);
if(temp__4425__auto___13533){
var seq__13508_13534__$1 = temp__4425__auto___13533;
if(cljs.core.chunked_seq_QMARK_(seq__13508_13534__$1)){
var c__5282__auto___13535 = cljs.core.chunk_first(seq__13508_13534__$1);
var G__13536 = cljs.core.chunk_rest(seq__13508_13534__$1);
var G__13537 = c__5282__auto___13535;
var G__13538 = cljs.core.count(c__5282__auto___13535);
var G__13539 = (0);
seq__13508_13524 = G__13536;
chunk__13509_13525 = G__13537;
count__13510_13526 = G__13538;
i__13511_13527 = G__13539;
continue;
} else {
var e_13540 = cljs.core.first(seq__13508_13534__$1);
if(cljs.core.truth_(e_13540)){
print_comment_lines(e_13540);
} else {
}

var G__13541 = cljs.core.next(seq__13508_13534__$1);
var G__13542 = null;
var G__13543 = (0);
var G__13544 = (0);
seq__13508_13524 = G__13541;
chunk__13509_13525 = G__13542;
count__13510_13526 = G__13543;
i__13511_13527 = G__13544;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$options);
var and__4486__auto__ = cljs.core.some(((function (opts){
return (function (p1__13546_SHARP_){
return goog.string.startsWith(p1__13546_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4486__auto__)){
var and__4486__auto____$1 = opts;
if(cljs.core.truth_(and__4486__auto____$1)){
var and__4486__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__4486__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__4486__auto____$2;
}
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__13547){
var map__13548 = p__13547;
var map__13548__$1 = ((((!((map__13548 == null)))?((((map__13548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13548):map__13548);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13548__$1,cljs.core.cst$kw$var_DASH_ast);
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(init)){
cljs.compiler.emit_comment(doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4486__auto__)){
return test;
} else {
return and__4486__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__13550){
var map__13567 = p__13550;
var map__13567__$1 = ((((!((map__13567 == null)))?((((map__13567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13567):map__13567);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13567__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13567__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13567__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__13569_13583 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__13570_13584 = null;
var count__13571_13585 = (0);
var i__13572_13586 = (0);
while(true){
if((i__13572_13586 < count__13571_13585)){
var vec__13573_13587 = chunk__13570_13584.cljs$core$IIndexed$_nth$arity$2(null,i__13572_13586);
var i_13588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13573_13587,(0),null);
var param_13589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13573_13587,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_13589);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__13590 = seq__13569_13583;
var G__13591 = chunk__13570_13584;
var G__13592 = count__13571_13585;
var G__13593 = (i__13572_13586 + (1));
seq__13569_13583 = G__13590;
chunk__13570_13584 = G__13591;
count__13571_13585 = G__13592;
i__13572_13586 = G__13593;
continue;
} else {
var temp__4425__auto___13594 = cljs.core.seq(seq__13569_13583);
if(temp__4425__auto___13594){
var seq__13569_13595__$1 = temp__4425__auto___13594;
if(cljs.core.chunked_seq_QMARK_(seq__13569_13595__$1)){
var c__5282__auto___13596 = cljs.core.chunk_first(seq__13569_13595__$1);
var G__13597 = cljs.core.chunk_rest(seq__13569_13595__$1);
var G__13598 = c__5282__auto___13596;
var G__13599 = cljs.core.count(c__5282__auto___13596);
var G__13600 = (0);
seq__13569_13583 = G__13597;
chunk__13570_13584 = G__13598;
count__13571_13585 = G__13599;
i__13572_13586 = G__13600;
continue;
} else {
var vec__13574_13601 = cljs.core.first(seq__13569_13595__$1);
var i_13602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574_13601,(0),null);
var param_13603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574_13601,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_13603);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__13604 = cljs.core.next(seq__13569_13595__$1);
var G__13605 = null;
var G__13606 = (0);
var G__13607 = (0);
seq__13569_13583 = G__13604;
chunk__13570_13584 = G__13605;
count__13571_13585 = G__13606;
i__13572_13586 = G__13607;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__13575_13608 = cljs.core.seq(params);
var chunk__13576_13609 = null;
var count__13577_13610 = (0);
var i__13578_13611 = (0);
while(true){
if((i__13578_13611 < count__13577_13610)){
var param_13612 = chunk__13576_13609.cljs$core$IIndexed$_nth$arity$2(null,i__13578_13611);
cljs.compiler.emit(param_13612);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13612,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13613 = seq__13575_13608;
var G__13614 = chunk__13576_13609;
var G__13615 = count__13577_13610;
var G__13616 = (i__13578_13611 + (1));
seq__13575_13608 = G__13613;
chunk__13576_13609 = G__13614;
count__13577_13610 = G__13615;
i__13578_13611 = G__13616;
continue;
} else {
var temp__4425__auto___13617 = cljs.core.seq(seq__13575_13608);
if(temp__4425__auto___13617){
var seq__13575_13618__$1 = temp__4425__auto___13617;
if(cljs.core.chunked_seq_QMARK_(seq__13575_13618__$1)){
var c__5282__auto___13619 = cljs.core.chunk_first(seq__13575_13618__$1);
var G__13620 = cljs.core.chunk_rest(seq__13575_13618__$1);
var G__13621 = c__5282__auto___13619;
var G__13622 = cljs.core.count(c__5282__auto___13619);
var G__13623 = (0);
seq__13575_13608 = G__13620;
chunk__13576_13609 = G__13621;
count__13577_13610 = G__13622;
i__13578_13611 = G__13623;
continue;
} else {
var param_13624 = cljs.core.first(seq__13575_13618__$1);
cljs.compiler.emit(param_13624);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13624,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13625 = cljs.core.next(seq__13575_13618__$1);
var G__13626 = null;
var G__13627 = (0);
var G__13628 = (0);
seq__13575_13608 = G__13625;
chunk__13576_13609 = G__13626;
count__13577_13610 = G__13627;
i__13578_13611 = G__13628;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__13579_13629 = cljs.core.seq(params);
var chunk__13580_13630 = null;
var count__13581_13631 = (0);
var i__13582_13632 = (0);
while(true){
if((i__13582_13632 < count__13581_13631)){
var param_13633 = chunk__13580_13630.cljs$core$IIndexed$_nth$arity$2(null,i__13582_13632);
cljs.compiler.emit(param_13633);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13633,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13634 = seq__13579_13629;
var G__13635 = chunk__13580_13630;
var G__13636 = count__13581_13631;
var G__13637 = (i__13582_13632 + (1));
seq__13579_13629 = G__13634;
chunk__13580_13630 = G__13635;
count__13581_13631 = G__13636;
i__13582_13632 = G__13637;
continue;
} else {
var temp__4425__auto___13638 = cljs.core.seq(seq__13579_13629);
if(temp__4425__auto___13638){
var seq__13579_13639__$1 = temp__4425__auto___13638;
if(cljs.core.chunked_seq_QMARK_(seq__13579_13639__$1)){
var c__5282__auto___13640 = cljs.core.chunk_first(seq__13579_13639__$1);
var G__13641 = cljs.core.chunk_rest(seq__13579_13639__$1);
var G__13642 = c__5282__auto___13640;
var G__13643 = cljs.core.count(c__5282__auto___13640);
var G__13644 = (0);
seq__13579_13629 = G__13641;
chunk__13580_13630 = G__13642;
count__13581_13631 = G__13643;
i__13582_13632 = G__13644;
continue;
} else {
var param_13645 = cljs.core.first(seq__13579_13639__$1);
cljs.compiler.emit(param_13645);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13645,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13646 = cljs.core.next(seq__13579_13639__$1);
var G__13647 = null;
var G__13648 = (0);
var G__13649 = (0);
seq__13579_13629 = G__13646;
chunk__13580_13630 = G__13647;
count__13581_13631 = G__13648;
i__13582_13632 = G__13649;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__13654 = cljs.core.seq(params);
var chunk__13655 = null;
var count__13656 = (0);
var i__13657 = (0);
while(true){
if((i__13657 < count__13656)){
var param = chunk__13655.cljs$core$IIndexed$_nth$arity$2(null,i__13657);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13658 = seq__13654;
var G__13659 = chunk__13655;
var G__13660 = count__13656;
var G__13661 = (i__13657 + (1));
seq__13654 = G__13658;
chunk__13655 = G__13659;
count__13656 = G__13660;
i__13657 = G__13661;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13654);
if(temp__4425__auto__){
var seq__13654__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13654__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__13654__$1);
var G__13662 = cljs.core.chunk_rest(seq__13654__$1);
var G__13663 = c__5282__auto__;
var G__13664 = cljs.core.count(c__5282__auto__);
var G__13665 = (0);
seq__13654 = G__13662;
chunk__13655 = G__13663;
count__13656 = G__13664;
i__13657 = G__13665;
continue;
} else {
var param = cljs.core.first(seq__13654__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13666 = cljs.core.next(seq__13654__$1);
var G__13667 = null;
var G__13668 = (0);
var G__13669 = (0);
seq__13654 = G__13666;
chunk__13655 = G__13667;
count__13656 = G__13668;
i__13657 = G__13669;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13670){
var map__13673 = p__13670;
var map__13673__$1 = ((((!((map__13673 == null)))?((((map__13673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13673):map__13673);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 * Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$and,cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$startslice,(0)),cljs.core.list(cljs.core.cst$sym$integer_QMARK_,cljs.core.cst$sym$startslice))], 0)))].join('')));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13675){
var map__13686 = p__13675;
var map__13686__$1 = ((((!((map__13686 == null)))?((((map__13686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13686):map__13686);
var f = map__13686__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_13696__$1 = (function (){var or__4498__auto__ = name;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13697 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13696__$1);
var delegate_name_13698 = [cljs.core.str(mname_13697),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_13698," = function ("], 0));

var seq__13688_13699 = cljs.core.seq(params);
var chunk__13689_13700 = null;
var count__13690_13701 = (0);
var i__13691_13702 = (0);
while(true){
if((i__13691_13702 < count__13690_13701)){
var param_13703 = chunk__13689_13700.cljs$core$IIndexed$_nth$arity$2(null,i__13691_13702);
cljs.compiler.emit(param_13703);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13703,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13704 = seq__13688_13699;
var G__13705 = chunk__13689_13700;
var G__13706 = count__13690_13701;
var G__13707 = (i__13691_13702 + (1));
seq__13688_13699 = G__13704;
chunk__13689_13700 = G__13705;
count__13690_13701 = G__13706;
i__13691_13702 = G__13707;
continue;
} else {
var temp__4425__auto___13708 = cljs.core.seq(seq__13688_13699);
if(temp__4425__auto___13708){
var seq__13688_13709__$1 = temp__4425__auto___13708;
if(cljs.core.chunked_seq_QMARK_(seq__13688_13709__$1)){
var c__5282__auto___13710 = cljs.core.chunk_first(seq__13688_13709__$1);
var G__13711 = cljs.core.chunk_rest(seq__13688_13709__$1);
var G__13712 = c__5282__auto___13710;
var G__13713 = cljs.core.count(c__5282__auto___13710);
var G__13714 = (0);
seq__13688_13699 = G__13711;
chunk__13689_13700 = G__13712;
count__13690_13701 = G__13713;
i__13691_13702 = G__13714;
continue;
} else {
var param_13715 = cljs.core.first(seq__13688_13709__$1);
cljs.compiler.emit(param_13715);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13715,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13716 = cljs.core.next(seq__13688_13709__$1);
var G__13717 = null;
var G__13718 = (0);
var G__13719 = (0);
seq__13688_13699 = G__13716;
chunk__13689_13700 = G__13717;
count__13690_13701 = G__13718;
i__13691_13702 = G__13719;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_13697," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_13720 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_13720,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_13698,".call(this,"], 0));

var seq__13692_13721 = cljs.core.seq(params);
var chunk__13693_13722 = null;
var count__13694_13723 = (0);
var i__13695_13724 = (0);
while(true){
if((i__13695_13724 < count__13694_13723)){
var param_13725 = chunk__13693_13722.cljs$core$IIndexed$_nth$arity$2(null,i__13695_13724);
cljs.compiler.emit(param_13725);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13725,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13726 = seq__13692_13721;
var G__13727 = chunk__13693_13722;
var G__13728 = count__13694_13723;
var G__13729 = (i__13695_13724 + (1));
seq__13692_13721 = G__13726;
chunk__13693_13722 = G__13727;
count__13694_13723 = G__13728;
i__13695_13724 = G__13729;
continue;
} else {
var temp__4425__auto___13730 = cljs.core.seq(seq__13692_13721);
if(temp__4425__auto___13730){
var seq__13692_13731__$1 = temp__4425__auto___13730;
if(cljs.core.chunked_seq_QMARK_(seq__13692_13731__$1)){
var c__5282__auto___13732 = cljs.core.chunk_first(seq__13692_13731__$1);
var G__13733 = cljs.core.chunk_rest(seq__13692_13731__$1);
var G__13734 = c__5282__auto___13732;
var G__13735 = cljs.core.count(c__5282__auto___13732);
var G__13736 = (0);
seq__13692_13721 = G__13733;
chunk__13693_13722 = G__13734;
count__13694_13723 = G__13735;
i__13695_13724 = G__13736;
continue;
} else {
var param_13737 = cljs.core.first(seq__13692_13731__$1);
cljs.compiler.emit(param_13737);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13737,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13738 = cljs.core.next(seq__13692_13731__$1);
var G__13739 = null;
var G__13740 = (0);
var G__13741 = (0);
seq__13692_13721 = G__13738;
chunk__13693_13722 = G__13739;
count__13694_13723 = G__13740;
i__13695_13724 = G__13741;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13697,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13697,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_13696__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13697,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13698,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_13697,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__13745){
var map__13746 = p__13745;
var map__13746__$1 = ((((!((map__13746 == null)))?((((map__13746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13746):map__13746);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13746__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13746__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13746__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13746__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13746__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13746__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13746__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13742_SHARP_){
var and__4486__auto__ = p1__13742_SHARP_;
if(cljs.core.truth_(and__4486__auto__)){
var G__13748 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__13742_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13748) : cljs.core.deref.call(null,G__13748));
} else {
return and__4486__auto__;
}
});})(map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_13768__$1 = (function (){var or__4498__auto__ = name;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13769 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13768__$1);
var maxparams_13770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_13771 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_13768__$1,mname_13769,maxparams_13770,loop_locals,map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_13769),cljs.core.str("__"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13768__$1,mname_13769,maxparams_13770,loop_locals,map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13772 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_13768__$1,mname_13769,maxparams_13770,mmap_13771,loop_locals,map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13743_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__13743_SHARP_)));
});})(name_13768__$1,mname_13769,maxparams_13770,mmap_13771,loop_locals,map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_13771));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_13769," = null;"], 0));

var seq__13749_13773 = cljs.core.seq(ms_13772);
var chunk__13750_13774 = null;
var count__13751_13775 = (0);
var i__13752_13776 = (0);
while(true){
if((i__13752_13776 < count__13751_13775)){
var vec__13753_13777 = chunk__13750_13774.cljs$core$IIndexed$_nth$arity$2(null,i__13752_13776);
var n_13778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13753_13777,(0),null);
var meth_13779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13753_13777,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_13778," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13779))){
cljs.compiler.emit_variadic_fn_method(meth_13779);
} else {
cljs.compiler.emit_fn_method(meth_13779);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__13780 = seq__13749_13773;
var G__13781 = chunk__13750_13774;
var G__13782 = count__13751_13775;
var G__13783 = (i__13752_13776 + (1));
seq__13749_13773 = G__13780;
chunk__13750_13774 = G__13781;
count__13751_13775 = G__13782;
i__13752_13776 = G__13783;
continue;
} else {
var temp__4425__auto___13784 = cljs.core.seq(seq__13749_13773);
if(temp__4425__auto___13784){
var seq__13749_13785__$1 = temp__4425__auto___13784;
if(cljs.core.chunked_seq_QMARK_(seq__13749_13785__$1)){
var c__5282__auto___13786 = cljs.core.chunk_first(seq__13749_13785__$1);
var G__13787 = cljs.core.chunk_rest(seq__13749_13785__$1);
var G__13788 = c__5282__auto___13786;
var G__13789 = cljs.core.count(c__5282__auto___13786);
var G__13790 = (0);
seq__13749_13773 = G__13787;
chunk__13750_13774 = G__13788;
count__13751_13775 = G__13789;
i__13752_13776 = G__13790;
continue;
} else {
var vec__13754_13791 = cljs.core.first(seq__13749_13785__$1);
var n_13792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13754_13791,(0),null);
var meth_13793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13754_13791,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_13792," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13793))){
cljs.compiler.emit_variadic_fn_method(meth_13793);
} else {
cljs.compiler.emit_fn_method(meth_13793);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__13794 = cljs.core.next(seq__13749_13785__$1);
var G__13795 = null;
var G__13796 = (0);
var G__13797 = (0);
seq__13749_13773 = G__13794;
chunk__13750_13774 = G__13795;
count__13751_13775 = G__13796;
i__13752_13776 = G__13797;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13769," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_13770),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_13770)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_13770));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__13755_13798 = cljs.core.seq(ms_13772);
var chunk__13756_13799 = null;
var count__13757_13800 = (0);
var i__13758_13801 = (0);
while(true){
if((i__13758_13801 < count__13757_13800)){
var vec__13759_13802 = chunk__13756_13799.cljs$core$IIndexed$_nth$arity$2(null,i__13758_13801);
var n_13803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13759_13802,(0),null);
var meth_13804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13759_13802,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13804))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_13805 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_13805," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_13806 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_13805," = new cljs.core.IndexedSeq(",a_13806,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13803,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13770)),(((cljs.core.count(maxparams_13770) > (1)))?", ":null),restarg_13805,");"], 0));
} else {
var pcnt_13807 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13804));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_13807,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13803,".call(this",(((pcnt_13807 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13807,maxparams_13770))),",")),");"], 0));
}

var G__13808 = seq__13755_13798;
var G__13809 = chunk__13756_13799;
var G__13810 = count__13757_13800;
var G__13811 = (i__13758_13801 + (1));
seq__13755_13798 = G__13808;
chunk__13756_13799 = G__13809;
count__13757_13800 = G__13810;
i__13758_13801 = G__13811;
continue;
} else {
var temp__4425__auto___13812 = cljs.core.seq(seq__13755_13798);
if(temp__4425__auto___13812){
var seq__13755_13813__$1 = temp__4425__auto___13812;
if(cljs.core.chunked_seq_QMARK_(seq__13755_13813__$1)){
var c__5282__auto___13814 = cljs.core.chunk_first(seq__13755_13813__$1);
var G__13815 = cljs.core.chunk_rest(seq__13755_13813__$1);
var G__13816 = c__5282__auto___13814;
var G__13817 = cljs.core.count(c__5282__auto___13814);
var G__13818 = (0);
seq__13755_13798 = G__13815;
chunk__13756_13799 = G__13816;
count__13757_13800 = G__13817;
i__13758_13801 = G__13818;
continue;
} else {
var vec__13760_13819 = cljs.core.first(seq__13755_13813__$1);
var n_13820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760_13819,(0),null);
var meth_13821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760_13819,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13821))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_13822 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_13822," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_13823 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_13822," = new cljs.core.IndexedSeq(",a_13823,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13820,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13770)),(((cljs.core.count(maxparams_13770) > (1)))?", ":null),restarg_13822,");"], 0));
} else {
var pcnt_13824 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13821));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_13824,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13820,".call(this",(((pcnt_13824 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13824,maxparams_13770))),",")),");"], 0));
}

var G__13825 = cljs.core.next(seq__13755_13813__$1);
var G__13826 = null;
var G__13827 = (0);
var G__13828 = (0);
seq__13755_13798 = G__13825;
chunk__13756_13799 = G__13826;
count__13757_13800 = G__13827;
i__13758_13801 = G__13828;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13769,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13769,".cljs$lang$applyTo = ",cljs.core.some(((function (name_13768__$1,mname_13769,maxparams_13770,mmap_13771,ms_13772,loop_locals,map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13744_SHARP_){
var vec__13761 = p1__13744_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13768__$1,mname_13769,maxparams_13770,mmap_13771,ms_13772,loop_locals,map__13746,map__13746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13772),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__13762_13829 = cljs.core.seq(ms_13772);
var chunk__13763_13830 = null;
var count__13764_13831 = (0);
var i__13765_13832 = (0);
while(true){
if((i__13765_13832 < count__13764_13831)){
var vec__13766_13833 = chunk__13763_13830.cljs$core$IIndexed$_nth$arity$2(null,i__13765_13832);
var n_13834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766_13833,(0),null);
var meth_13835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766_13833,(1),null);
var c_13836 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13835));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13835))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13769,".cljs$core$IFn$_invoke$arity$variadic = ",n_13834,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13769,".cljs$core$IFn$_invoke$arity$",c_13836," = ",n_13834,";"], 0));
}

var G__13837 = seq__13762_13829;
var G__13838 = chunk__13763_13830;
var G__13839 = count__13764_13831;
var G__13840 = (i__13765_13832 + (1));
seq__13762_13829 = G__13837;
chunk__13763_13830 = G__13838;
count__13764_13831 = G__13839;
i__13765_13832 = G__13840;
continue;
} else {
var temp__4425__auto___13841 = cljs.core.seq(seq__13762_13829);
if(temp__4425__auto___13841){
var seq__13762_13842__$1 = temp__4425__auto___13841;
if(cljs.core.chunked_seq_QMARK_(seq__13762_13842__$1)){
var c__5282__auto___13843 = cljs.core.chunk_first(seq__13762_13842__$1);
var G__13844 = cljs.core.chunk_rest(seq__13762_13842__$1);
var G__13845 = c__5282__auto___13843;
var G__13846 = cljs.core.count(c__5282__auto___13843);
var G__13847 = (0);
seq__13762_13829 = G__13844;
chunk__13763_13830 = G__13845;
count__13764_13831 = G__13846;
i__13765_13832 = G__13847;
continue;
} else {
var vec__13767_13848 = cljs.core.first(seq__13762_13842__$1);
var n_13849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13767_13848,(0),null);
var meth_13850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13767_13848,(1),null);
var c_13851 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13850));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13850))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13769,".cljs$core$IFn$_invoke$arity$variadic = ",n_13849,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13769,".cljs$core$IFn$_invoke$arity$",c_13851," = ",n_13849,";"], 0));
}

var G__13852 = cljs.core.next(seq__13762_13842__$1);
var G__13853 = null;
var G__13854 = (0);
var G__13855 = (0);
seq__13762_13829 = G__13852;
chunk__13763_13830 = G__13853;
count__13764_13831 = G__13854;
i__13765_13832 = G__13855;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_13769,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__13856){
var map__13857 = p__13856;
var map__13857__$1 = ((((!((map__13857 == null)))?((((map__13857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13857):map__13857);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4486__auto__ = statements;
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__4486__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__13859_13863 = cljs.core.seq(statements);
var chunk__13860_13864 = null;
var count__13861_13865 = (0);
var i__13862_13866 = (0);
while(true){
if((i__13862_13866 < count__13861_13865)){
var s_13867 = chunk__13860_13864.cljs$core$IIndexed$_nth$arity$2(null,i__13862_13866);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13867], 0));

var G__13868 = seq__13859_13863;
var G__13869 = chunk__13860_13864;
var G__13870 = count__13861_13865;
var G__13871 = (i__13862_13866 + (1));
seq__13859_13863 = G__13868;
chunk__13860_13864 = G__13869;
count__13861_13865 = G__13870;
i__13862_13866 = G__13871;
continue;
} else {
var temp__4425__auto___13872 = cljs.core.seq(seq__13859_13863);
if(temp__4425__auto___13872){
var seq__13859_13873__$1 = temp__4425__auto___13872;
if(cljs.core.chunked_seq_QMARK_(seq__13859_13873__$1)){
var c__5282__auto___13874 = cljs.core.chunk_first(seq__13859_13873__$1);
var G__13875 = cljs.core.chunk_rest(seq__13859_13873__$1);
var G__13876 = c__5282__auto___13874;
var G__13877 = cljs.core.count(c__5282__auto___13874);
var G__13878 = (0);
seq__13859_13863 = G__13875;
chunk__13860_13864 = G__13876;
count__13861_13865 = G__13877;
i__13862_13866 = G__13878;
continue;
} else {
var s_13879 = cljs.core.first(seq__13859_13873__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13879], 0));

var G__13880 = cljs.core.next(seq__13859_13873__$1);
var G__13881 = null;
var G__13882 = (0);
var G__13883 = (0);
seq__13859_13863 = G__13880;
chunk__13860_13864 = G__13881;
count__13861_13865 = G__13882;
i__13862_13866 = G__13883;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__4486__auto__ = statements;
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__4486__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__13884){
var map__13885 = p__13884;
var map__13885__$1 = ((((!((map__13885 == null)))?((((map__13885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13885):map__13885);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4498__auto__ = name;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not_EQ_,cljs.core.cst$kw$constant,cljs.core.list(cljs.core.cst$kw$op,cljs.core.cst$sym$finally))], 0)))].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13887,is_loop){
var map__13899 = p__13887;
var map__13899__$1 = ((((!((map__13899 == null)))?((((map__13899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13899):map__13899);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_13901_13910 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_13901_13910,context,map__13899,map__13899__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash(name),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_13901_13910,context,map__13899,map__13899__$1,bindings,expr,env))
,bindings):null));

try{var seq__13902_13911 = cljs.core.seq(bindings);
var chunk__13903_13912 = null;
var count__13904_13913 = (0);
var i__13905_13914 = (0);
while(true){
if((i__13905_13914 < count__13904_13913)){
var map__13906_13915 = chunk__13903_13912.cljs$core$IIndexed$_nth$arity$2(null,i__13905_13914);
var map__13906_13916__$1 = ((((!((map__13906_13915 == null)))?((((map__13906_13915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13906_13915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13906_13915):map__13906_13915);
var binding_13917 = map__13906_13916__$1;
var init_13918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13906_13916__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_13917);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_13918,";"], 0));

var G__13919 = seq__13902_13911;
var G__13920 = chunk__13903_13912;
var G__13921 = count__13904_13913;
var G__13922 = (i__13905_13914 + (1));
seq__13902_13911 = G__13919;
chunk__13903_13912 = G__13920;
count__13904_13913 = G__13921;
i__13905_13914 = G__13922;
continue;
} else {
var temp__4425__auto___13923 = cljs.core.seq(seq__13902_13911);
if(temp__4425__auto___13923){
var seq__13902_13924__$1 = temp__4425__auto___13923;
if(cljs.core.chunked_seq_QMARK_(seq__13902_13924__$1)){
var c__5282__auto___13925 = cljs.core.chunk_first(seq__13902_13924__$1);
var G__13926 = cljs.core.chunk_rest(seq__13902_13924__$1);
var G__13927 = c__5282__auto___13925;
var G__13928 = cljs.core.count(c__5282__auto___13925);
var G__13929 = (0);
seq__13902_13911 = G__13926;
chunk__13903_13912 = G__13927;
count__13904_13913 = G__13928;
i__13905_13914 = G__13929;
continue;
} else {
var map__13908_13930 = cljs.core.first(seq__13902_13924__$1);
var map__13908_13931__$1 = ((((!((map__13908_13930 == null)))?((((map__13908_13930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13908_13930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13908_13930):map__13908_13930);
var binding_13932 = map__13908_13931__$1;
var init_13933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13908_13931__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_13932);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_13933,";"], 0));

var G__13934 = cljs.core.next(seq__13902_13924__$1);
var G__13935 = null;
var G__13936 = (0);
var G__13937 = (0);
seq__13902_13911 = G__13934;
chunk__13903_13912 = G__13935;
count__13904_13913 = G__13936;
i__13905_13914 = G__13937;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13901_13910;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__13938){
var map__13939 = p__13938;
var map__13939__$1 = ((((!((map__13939 == null)))?((((map__13939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13939):map__13939);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__5382__auto___13941 = cljs.core.count(exprs);
var i_13942 = (0);
while(true){
if((i_13942 < n__5382__auto___13941)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_13942) : temps.call(null,i_13942))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_13942) : exprs.call(null,i_13942)),";"], 0));

var G__13943 = (i_13942 + (1));
i_13942 = G__13943;
continue;
} else {
}
break;
}

var n__5382__auto___13944 = cljs.core.count(exprs);
var i_13945 = (0);
while(true){
if((i_13945 < n__5382__auto___13944)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_13945) : params.call(null,i_13945)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_13945) : temps.call(null,i_13945)),";"], 0));

var G__13946 = (i_13945 + (1));
i_13945 = G__13946;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__13947){
var map__13948 = p__13947;
var map__13948__$1 = ((((!((map__13948 == null)))?((((map__13948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13948):map__13948);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__13950_13958 = cljs.core.seq(bindings);
var chunk__13951_13959 = null;
var count__13952_13960 = (0);
var i__13953_13961 = (0);
while(true){
if((i__13953_13961 < count__13952_13960)){
var map__13954_13962 = chunk__13951_13959.cljs$core$IIndexed$_nth$arity$2(null,i__13953_13961);
var map__13954_13963__$1 = ((((!((map__13954_13962 == null)))?((((map__13954_13962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13954_13962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13954_13962):map__13954_13962);
var binding_13964 = map__13954_13963__$1;
var init_13965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13954_13963__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_13964)," = ",init_13965,";"], 0));

var G__13966 = seq__13950_13958;
var G__13967 = chunk__13951_13959;
var G__13968 = count__13952_13960;
var G__13969 = (i__13953_13961 + (1));
seq__13950_13958 = G__13966;
chunk__13951_13959 = G__13967;
count__13952_13960 = G__13968;
i__13953_13961 = G__13969;
continue;
} else {
var temp__4425__auto___13970 = cljs.core.seq(seq__13950_13958);
if(temp__4425__auto___13970){
var seq__13950_13971__$1 = temp__4425__auto___13970;
if(cljs.core.chunked_seq_QMARK_(seq__13950_13971__$1)){
var c__5282__auto___13972 = cljs.core.chunk_first(seq__13950_13971__$1);
var G__13973 = cljs.core.chunk_rest(seq__13950_13971__$1);
var G__13974 = c__5282__auto___13972;
var G__13975 = cljs.core.count(c__5282__auto___13972);
var G__13976 = (0);
seq__13950_13958 = G__13973;
chunk__13951_13959 = G__13974;
count__13952_13960 = G__13975;
i__13953_13961 = G__13976;
continue;
} else {
var map__13956_13977 = cljs.core.first(seq__13950_13971__$1);
var map__13956_13978__$1 = ((((!((map__13956_13977 == null)))?((((map__13956_13977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13956_13977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13956_13977):map__13956_13977);
var binding_13979 = map__13956_13978__$1;
var init_13980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13956_13978__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_13979)," = ",init_13980,";"], 0));

var G__13981 = cljs.core.next(seq__13950_13971__$1);
var G__13982 = null;
var G__13983 = (0);
var G__13984 = (0);
seq__13950_13958 = G__13981;
chunk__13951_13959 = G__13982;
count__13952_13960 = G__13983;
i__13953_13961 = G__13984;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__13987){
var map__13988 = p__13987;
var map__13988__$1 = ((((!((map__13988 == null)))?((((map__13988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13988):map__13988);
var expr = map__13988__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13988__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13988__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13988__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4486__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4486__auto__)){
var and__4486__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__4486__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4486__auto__ = protocol;
if(cljs.core.truth_(and__4486__auto__)){
var and__4486__auto____$1 = tag;
if(cljs.core.truth_(and__4486__auto____$1)){
var or__4498__auto__ = (function (){var and__4486__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4486__auto____$2)){
var and__4486__auto____$3 = protocol;
if(cljs.core.truth_(and__4486__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__4486__auto____$3;
}
} else {
return and__4486__auto____$2;
}
})();
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
var and__4486__auto____$2 = (function (){var or__4498__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4498__auto____$1)){
return or__4498__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4486__auto____$2)){
var or__4498__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4498__auto____$1){
return or__4498__auto____$1;
} else {
var and__4486__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__4486__auto____$3){
var and__4486__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null], null), null).call(null,tag));
if(and__4486__auto____$4){
var temp__4425__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4486__auto____$4;
}
} else {
return and__4486__auto____$3;
}
}
} else {
return and__4486__auto____$2;
}
}
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4498__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__4498__auto__){
return or__4498__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__13990 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4486__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4486__auto__)){
return (arity > mfa);
} else {
return and__4486__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env){
return (function (p1__13985_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13985_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env){
return (function (p1__13986_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13986_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13988,map__13988__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(1),null);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_13991 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_13991,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13992 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_13992,args)),(((mfa_13992 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_13992,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4498__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
var or__4498__auto____$1 = js_QMARK_;
if(or__4498__auto____$1){
return or__4498__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var);
} else {
return and__4486__auto__;
}
})())){
var fprop_13993 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_13993," ? ",f__$1,fprop_13993,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__13994){
var map__13995 = p__13994;
var map__13995__$1 = ((((!((map__13995 == null)))?((((map__13995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13995):map__13995);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13995__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13995__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13995__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__13997){
var map__13998 = p__13997;
var map__13998__$1 = ((((!((map__13998 == null)))?((((map__13998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13998):map__13998);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__14004_14008 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__14005_14009 = null;
var count__14006_14010 = (0);
var i__14007_14011 = (0);
while(true){
if((i__14007_14011 < count__14006_14010)){
var lib_14012 = chunk__14005_14009.cljs$core$IIndexed$_nth$arity$2(null,i__14007_14011);
if(cljs.core.truth_((function (){var or__4498__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14012),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14012),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4498__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14012),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14012),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14012),"');"], 0));

}
}

var G__14013 = seq__14004_14008;
var G__14014 = chunk__14005_14009;
var G__14015 = count__14006_14010;
var G__14016 = (i__14007_14011 + (1));
seq__14004_14008 = G__14013;
chunk__14005_14009 = G__14014;
count__14006_14010 = G__14015;
i__14007_14011 = G__14016;
continue;
} else {
var temp__4425__auto___14017 = cljs.core.seq(seq__14004_14008);
if(temp__4425__auto___14017){
var seq__14004_14018__$1 = temp__4425__auto___14017;
if(cljs.core.chunked_seq_QMARK_(seq__14004_14018__$1)){
var c__5282__auto___14019 = cljs.core.chunk_first(seq__14004_14018__$1);
var G__14020 = cljs.core.chunk_rest(seq__14004_14018__$1);
var G__14021 = c__5282__auto___14019;
var G__14022 = cljs.core.count(c__5282__auto___14019);
var G__14023 = (0);
seq__14004_14008 = G__14020;
chunk__14005_14009 = G__14021;
count__14006_14010 = G__14022;
i__14007_14011 = G__14023;
continue;
} else {
var lib_14024 = cljs.core.first(seq__14004_14018__$1);
if(cljs.core.truth_((function (){var or__4498__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14024),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14024),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4498__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14024),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14024),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14024),"');"], 0));

}
}

var G__14025 = cljs.core.next(seq__14004_14018__$1);
var G__14026 = null;
var G__14027 = (0);
var G__14028 = (0);
seq__14004_14008 = G__14025;
chunk__14005_14009 = G__14026;
count__14006_14010 = G__14027;
i__14007_14011 = G__14028;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__14029){
var map__14030 = p__14029;
var map__14030__$1 = ((((!((map__14030 == null)))?((((map__14030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14030):map__14030);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__14032){
var map__14033 = p__14032;
var map__14033__$1 = ((((!((map__14033 == null)))?((((map__14033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14033):map__14033);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$body);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__14035_14045 = cljs.core.seq(fields__$1);
var chunk__14036_14046 = null;
var count__14037_14047 = (0);
var i__14038_14048 = (0);
while(true){
if((i__14038_14048 < count__14037_14047)){
var fld_14049 = chunk__14036_14046.cljs$core$IIndexed$_nth$arity$2(null,i__14038_14048);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14049," = ",fld_14049,";"], 0));

var G__14050 = seq__14035_14045;
var G__14051 = chunk__14036_14046;
var G__14052 = count__14037_14047;
var G__14053 = (i__14038_14048 + (1));
seq__14035_14045 = G__14050;
chunk__14036_14046 = G__14051;
count__14037_14047 = G__14052;
i__14038_14048 = G__14053;
continue;
} else {
var temp__4425__auto___14054 = cljs.core.seq(seq__14035_14045);
if(temp__4425__auto___14054){
var seq__14035_14055__$1 = temp__4425__auto___14054;
if(cljs.core.chunked_seq_QMARK_(seq__14035_14055__$1)){
var c__5282__auto___14056 = cljs.core.chunk_first(seq__14035_14055__$1);
var G__14057 = cljs.core.chunk_rest(seq__14035_14055__$1);
var G__14058 = c__5282__auto___14056;
var G__14059 = cljs.core.count(c__5282__auto___14056);
var G__14060 = (0);
seq__14035_14045 = G__14057;
chunk__14036_14046 = G__14058;
count__14037_14047 = G__14059;
i__14038_14048 = G__14060;
continue;
} else {
var fld_14061 = cljs.core.first(seq__14035_14055__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14061," = ",fld_14061,";"], 0));

var G__14062 = cljs.core.next(seq__14035_14055__$1);
var G__14063 = null;
var G__14064 = (0);
var G__14065 = (0);
seq__14035_14045 = G__14062;
chunk__14036_14046 = G__14063;
count__14037_14047 = G__14064;
i__14038_14048 = G__14065;
continue;
}
} else {
}
}
break;
}

var seq__14039_14066 = cljs.core.seq(pmasks);
var chunk__14040_14067 = null;
var count__14041_14068 = (0);
var i__14042_14069 = (0);
while(true){
if((i__14042_14069 < count__14041_14068)){
var vec__14043_14070 = chunk__14040_14067.cljs$core$IIndexed$_nth$arity$2(null,i__14042_14069);
var pno_14071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14043_14070,(0),null);
var pmask_14072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14043_14070,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14071,"$ = ",pmask_14072,";"], 0));

var G__14073 = seq__14039_14066;
var G__14074 = chunk__14040_14067;
var G__14075 = count__14041_14068;
var G__14076 = (i__14042_14069 + (1));
seq__14039_14066 = G__14073;
chunk__14040_14067 = G__14074;
count__14041_14068 = G__14075;
i__14042_14069 = G__14076;
continue;
} else {
var temp__4425__auto___14077 = cljs.core.seq(seq__14039_14066);
if(temp__4425__auto___14077){
var seq__14039_14078__$1 = temp__4425__auto___14077;
if(cljs.core.chunked_seq_QMARK_(seq__14039_14078__$1)){
var c__5282__auto___14079 = cljs.core.chunk_first(seq__14039_14078__$1);
var G__14080 = cljs.core.chunk_rest(seq__14039_14078__$1);
var G__14081 = c__5282__auto___14079;
var G__14082 = cljs.core.count(c__5282__auto___14079);
var G__14083 = (0);
seq__14039_14066 = G__14080;
chunk__14040_14067 = G__14081;
count__14041_14068 = G__14082;
i__14042_14069 = G__14083;
continue;
} else {
var vec__14044_14084 = cljs.core.first(seq__14039_14078__$1);
var pno_14085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14044_14084,(0),null);
var pmask_14086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14044_14084,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14085,"$ = ",pmask_14086,";"], 0));

var G__14087 = cljs.core.next(seq__14039_14078__$1);
var G__14088 = null;
var G__14089 = (0);
var G__14090 = (0);
seq__14039_14066 = G__14087;
chunk__14040_14067 = G__14088;
count__14041_14068 = G__14089;
i__14042_14069 = G__14090;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__14091){
var map__14092 = p__14091;
var map__14092__$1 = ((((!((map__14092 == null)))?((((map__14092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14092):map__14092);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,cljs.core.cst$kw$body);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__14094_14108 = cljs.core.seq(fields__$1);
var chunk__14095_14109 = null;
var count__14096_14110 = (0);
var i__14097_14111 = (0);
while(true){
if((i__14097_14111 < count__14096_14110)){
var fld_14112 = chunk__14095_14109.cljs$core$IIndexed$_nth$arity$2(null,i__14097_14111);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_14112], 0));

var G__14113 = seq__14094_14108;
var G__14114 = chunk__14095_14109;
var G__14115 = count__14096_14110;
var G__14116 = (i__14097_14111 + (1));
seq__14094_14108 = G__14113;
chunk__14095_14109 = G__14114;
count__14096_14110 = G__14115;
i__14097_14111 = G__14116;
continue;
} else {
var temp__4425__auto___14117 = cljs.core.seq(seq__14094_14108);
if(temp__4425__auto___14117){
var seq__14094_14118__$1 = temp__4425__auto___14117;
if(cljs.core.chunked_seq_QMARK_(seq__14094_14118__$1)){
var c__5282__auto___14119 = cljs.core.chunk_first(seq__14094_14118__$1);
var G__14120 = cljs.core.chunk_rest(seq__14094_14118__$1);
var G__14121 = c__5282__auto___14119;
var G__14122 = cljs.core.count(c__5282__auto___14119);
var G__14123 = (0);
seq__14094_14108 = G__14120;
chunk__14095_14109 = G__14121;
count__14096_14110 = G__14122;
i__14097_14111 = G__14123;
continue;
} else {
var fld_14124 = cljs.core.first(seq__14094_14118__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_14124], 0));

var G__14125 = cljs.core.next(seq__14094_14118__$1);
var G__14126 = null;
var G__14127 = (0);
var G__14128 = (0);
seq__14094_14108 = G__14125;
chunk__14095_14109 = G__14126;
count__14096_14110 = G__14127;
i__14097_14111 = G__14128;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __meta "], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __extmap"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {number|null} __hash"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__14098_14129 = cljs.core.seq(fields__$1);
var chunk__14099_14130 = null;
var count__14100_14131 = (0);
var i__14101_14132 = (0);
while(true){
if((i__14101_14132 < count__14100_14131)){
var fld_14133 = chunk__14099_14130.cljs$core$IIndexed$_nth$arity$2(null,i__14101_14132);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14133," = ",fld_14133,";"], 0));

var G__14134 = seq__14098_14129;
var G__14135 = chunk__14099_14130;
var G__14136 = count__14100_14131;
var G__14137 = (i__14101_14132 + (1));
seq__14098_14129 = G__14134;
chunk__14099_14130 = G__14135;
count__14100_14131 = G__14136;
i__14101_14132 = G__14137;
continue;
} else {
var temp__4425__auto___14138 = cljs.core.seq(seq__14098_14129);
if(temp__4425__auto___14138){
var seq__14098_14139__$1 = temp__4425__auto___14138;
if(cljs.core.chunked_seq_QMARK_(seq__14098_14139__$1)){
var c__5282__auto___14140 = cljs.core.chunk_first(seq__14098_14139__$1);
var G__14141 = cljs.core.chunk_rest(seq__14098_14139__$1);
var G__14142 = c__5282__auto___14140;
var G__14143 = cljs.core.count(c__5282__auto___14140);
var G__14144 = (0);
seq__14098_14129 = G__14141;
chunk__14099_14130 = G__14142;
count__14100_14131 = G__14143;
i__14101_14132 = G__14144;
continue;
} else {
var fld_14145 = cljs.core.first(seq__14098_14139__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14145," = ",fld_14145,";"], 0));

var G__14146 = cljs.core.next(seq__14098_14139__$1);
var G__14147 = null;
var G__14148 = (0);
var G__14149 = (0);
seq__14098_14129 = G__14146;
chunk__14099_14130 = G__14147;
count__14100_14131 = G__14148;
i__14101_14132 = G__14149;
continue;
}
} else {
}
}
break;
}

var seq__14102_14150 = cljs.core.seq(pmasks);
var chunk__14103_14151 = null;
var count__14104_14152 = (0);
var i__14105_14153 = (0);
while(true){
if((i__14105_14153 < count__14104_14152)){
var vec__14106_14154 = chunk__14103_14151.cljs$core$IIndexed$_nth$arity$2(null,i__14105_14153);
var pno_14155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106_14154,(0),null);
var pmask_14156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106_14154,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14155,"$ = ",pmask_14156,";"], 0));

var G__14157 = seq__14102_14150;
var G__14158 = chunk__14103_14151;
var G__14159 = count__14104_14152;
var G__14160 = (i__14105_14153 + (1));
seq__14102_14150 = G__14157;
chunk__14103_14151 = G__14158;
count__14104_14152 = G__14159;
i__14105_14153 = G__14160;
continue;
} else {
var temp__4425__auto___14161 = cljs.core.seq(seq__14102_14150);
if(temp__4425__auto___14161){
var seq__14102_14162__$1 = temp__4425__auto___14161;
if(cljs.core.chunked_seq_QMARK_(seq__14102_14162__$1)){
var c__5282__auto___14163 = cljs.core.chunk_first(seq__14102_14162__$1);
var G__14164 = cljs.core.chunk_rest(seq__14102_14162__$1);
var G__14165 = c__5282__auto___14163;
var G__14166 = cljs.core.count(c__5282__auto___14163);
var G__14167 = (0);
seq__14102_14150 = G__14164;
chunk__14103_14151 = G__14165;
count__14104_14152 = G__14166;
i__14105_14153 = G__14167;
continue;
} else {
var vec__14107_14168 = cljs.core.first(seq__14102_14162__$1);
var pno_14169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14107_14168,(0),null);
var pmask_14170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14107_14168,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14169,"$ = ",pmask_14170,";"], 0));

var G__14171 = cljs.core.next(seq__14102_14162__$1);
var G__14172 = null;
var G__14173 = (0);
var G__14174 = (0);
seq__14102_14150 = G__14171;
chunk__14103_14151 = G__14172;
count__14104_14152 = G__14173;
i__14105_14153 = G__14174;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__14175){
var map__14176 = p__14175;
var map__14176__$1 = ((((!((map__14176 == null)))?((((map__14176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14176):map__14176);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,cljs.core.cst$kw$env);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__14178){
var map__14179 = p__14178;
var map__14179__$1 = ((((!((map__14179 == null)))?((((map__14179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14179):map__14179);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,cljs.core.cst$kw$args);
var env__6822__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6822__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__14189 = cljs.core.seq(table);
var chunk__14190 = null;
var count__14191 = (0);
var i__14192 = (0);
while(true){
if((i__14192 < count__14191)){
var vec__14193 = chunk__14190.cljs$core$IIndexed$_nth$arity$2(null,i__14192);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14193,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14193,(1),null);
var ns_14195 = cljs.core.namespace(sym);
var name_14196 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__14197 = seq__14189;
var G__14198 = chunk__14190;
var G__14199 = count__14191;
var G__14200 = (i__14192 + (1));
seq__14189 = G__14197;
chunk__14190 = G__14198;
count__14191 = G__14199;
i__14192 = G__14200;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14189);
if(temp__4425__auto__){
var seq__14189__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14189__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__14189__$1);
var G__14201 = cljs.core.chunk_rest(seq__14189__$1);
var G__14202 = c__5282__auto__;
var G__14203 = cljs.core.count(c__5282__auto__);
var G__14204 = (0);
seq__14189 = G__14201;
chunk__14190 = G__14202;
count__14191 = G__14203;
i__14192 = G__14204;
continue;
} else {
var vec__14194 = cljs.core.first(seq__14189__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14194,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14194,(1),null);
var ns_14205 = cljs.core.namespace(sym);
var name_14206 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__14207 = cljs.core.next(seq__14189__$1);
var G__14208 = null;
var G__14209 = (0);
var G__14210 = (0);
seq__14189 = G__14207;
chunk__14190 = G__14208;
count__14191 = G__14209;
i__14192 = G__14210;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map