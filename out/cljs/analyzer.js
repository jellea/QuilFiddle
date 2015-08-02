// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$sym$cljs$user;
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dep_DASH_path,cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$redef,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads],[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 61, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"in",null,"enum",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(){
var args12157 = [];
var len__5537__auto___12160 = arguments.length;
var i__5538__auto___12161 = (0);
while(true){
if((i__5538__auto___12161 < len__5537__auto___12160)){
args12157.push((arguments[i__5538__auto___12161]));

var G__12162 = (i__5538__auto___12161 + (1));
i__5538__auto___12161 = G__12162;
continue;
} else {
}
break;
}

var G__12159 = args12157.length;
switch (G__12159) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12157.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;
cljs.analyzer.CLJ_NIL_SYM = cljs.core.cst$sym$clj_DASH_nil;
cljs.analyzer.NUMBER_SYM = cljs.core.cst$sym$number;
cljs.analyzer.STRING_SYM = cljs.core.cst$sym$string;
cljs.analyzer.BOOLEAN_SYM = cljs.core.cst$sym$boolean;
cljs.analyzer.JS_STAR_SYM = cljs.core.cst$sym$js_STAR_;
cljs.analyzer.DOT_SYM = cljs.core.cst$sym$$;
cljs.analyzer.NEW_SYM = cljs.core.cst$sym$new;
cljs.analyzer.CLJS_CORE_SYM = cljs.core.cst$sym$cljs$core;
cljs.analyzer.CLJS_CORE_MACROS_SYM = cljs.core.cst$sym$cljs$core$macros;
cljs.analyzer.IGNORE_SYM = cljs.core.cst$sym$ignore;
cljs.analyzer.ANY_SYM = cljs.core.cst$sym$any;
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || (x.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || (x.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || (x.cljs$core$IVector$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || (x.cljs$core$ISet$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge([cljs.core.str(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 * provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(){
var args12172 = [];
var len__5537__auto___12175 = arguments.length;
var i__5538__auto___12176 = (0);
while(true){
if((i__5538__auto___12176 < len__5537__auto___12175)){
args12172.push((arguments[i__5538__auto___12176]));

var G__12177 = (i__5538__auto___12176 + (1));
i__5538__auto___12176 = G__12177;
continue;
} else {
}
break;
}

var G__12174 = args12172.length;
switch (G__12174) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12172.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$kw$cljs);
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str(clojure.string.replace(cljs.analyzer.munge_path(ns),".","/")),cljs.core.str("."),cljs.core.str(cljs.core.name(ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;
cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(){
var args12179 = [];
var len__5537__auto___12193 = arguments.length;
var i__5538__auto___12194 = (0);
while(true){
if((i__5538__auto___12194 < len__5537__auto___12193)){
args12179.push((arguments[i__5538__auto___12194]));

var G__12195 = (i__5538__auto___12194 + (1));
i__5538__auto___12194 = G__12195;
continue;
} else {
}
break;
}

var G__12181 = args12179.length;
switch (G__12181) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12179.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(x,(0),(function (){var G__12182 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12182) : cljs.core.atom.call(null,G__12182));
})(),cljs.core.memoize(get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = (memo_get_deps.cljs$core$IFn$_invoke$arity$1 ? memo_get_deps.cljs$core$IFn$_invoke$arity$1(x) : memo_get_deps.call(null,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__12183_12197 = cljs.core.seq(deps);
var chunk__12184_12198 = null;
var count__12185_12199 = (0);
var i__12186_12200 = (0);
while(true){
if((i__12186_12200 < count__12185_12199)){
var dep_12201 = chunk__12184_12198.cljs$core$IIndexed$_nth$arity$2(null,i__12186_12200);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_12201,(depth + (1)),state,memo_get_deps);

var G__12202 = seq__12183_12197;
var G__12203 = chunk__12184_12198;
var G__12204 = count__12185_12199;
var G__12205 = (i__12186_12200 + (1));
seq__12183_12197 = G__12202;
chunk__12184_12198 = G__12203;
count__12185_12199 = G__12204;
i__12186_12200 = G__12205;
continue;
} else {
var temp__4425__auto___12206 = cljs.core.seq(seq__12183_12197);
if(temp__4425__auto___12206){
var seq__12183_12207__$1 = temp__4425__auto___12206;
if(cljs.core.chunked_seq_QMARK_(seq__12183_12207__$1)){
var c__5282__auto___12208 = cljs.core.chunk_first(seq__12183_12207__$1);
var G__12209 = cljs.core.chunk_rest(seq__12183_12207__$1);
var G__12210 = c__5282__auto___12208;
var G__12211 = cljs.core.count(c__5282__auto___12208);
var G__12212 = (0);
seq__12183_12197 = G__12209;
chunk__12184_12198 = G__12210;
count__12185_12199 = G__12211;
i__12186_12200 = G__12212;
continue;
} else {
var dep_12213 = cljs.core.first(seq__12183_12207__$1);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_12213,(depth + (1)),state,memo_get_deps);

var G__12214 = cljs.core.next(seq__12183_12207__$1);
var G__12215 = null;
var G__12216 = (0);
var G__12217 = (0);
seq__12183_12197 = G__12214;
chunk__12184_12198 = G__12215;
count__12185_12199 = G__12216;
i__12186_12200 = G__12217;
continue;
}
} else {
}
}
break;
}

var seq__12187_12218 = cljs.core.seq(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core._LT_,depth));
var chunk__12188_12219 = null;
var count__12189_12220 = (0);
var i__12190_12221 = (0);
while(true){
if((i__12190_12221 < count__12189_12220)){
var vec__12191_12222 = chunk__12188_12219.cljs$core$IIndexed$_nth$arity$2(null,i__12190_12221);
var _LT_depth_12223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12191_12222,(0),null);
var __12224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12191_12222,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_12223], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__12225 = seq__12187_12218;
var G__12226 = chunk__12188_12219;
var G__12227 = count__12189_12220;
var G__12228 = (i__12190_12221 + (1));
seq__12187_12218 = G__12225;
chunk__12188_12219 = G__12226;
count__12189_12220 = G__12227;
i__12190_12221 = G__12228;
continue;
} else {
var temp__4425__auto___12229 = cljs.core.seq(seq__12187_12218);
if(temp__4425__auto___12229){
var seq__12187_12230__$1 = temp__4425__auto___12229;
if(cljs.core.chunked_seq_QMARK_(seq__12187_12230__$1)){
var c__5282__auto___12231 = cljs.core.chunk_first(seq__12187_12230__$1);
var G__12232 = cljs.core.chunk_rest(seq__12187_12230__$1);
var G__12233 = c__5282__auto___12231;
var G__12234 = cljs.core.count(c__5282__auto___12231);
var G__12235 = (0);
seq__12187_12218 = G__12232;
chunk__12188_12219 = G__12233;
count__12189_12220 = G__12234;
i__12190_12221 = G__12235;
continue;
} else {
var vec__12192_12236 = cljs.core.first(seq__12187_12230__$1);
var _LT_depth_12237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12192_12236,(0),null);
var __12238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12192_12236,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_12237], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__12239 = cljs.core.next(seq__12187_12230__$1);
var G__12240 = null;
var G__12241 = (0);
var G__12242 = (0);
seq__12187_12218 = G__12239;
chunk__12188_12219 = G__12240;
count__12189_12220 = G__12241;
i__12190_12221 = G__12242;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;

cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$op));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__5392__auto__ = (function (){var G__12243 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12243) : cljs.core.atom.call(null,G__12243));
})();
var prefer_table__5393__auto__ = (function (){var G__12244 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12244) : cljs.core.atom.call(null,G__12244));
})();
var method_cache__5394__auto__ = (function (){var G__12245 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12245) : cljs.core.atom.call(null,G__12245));
})();
var cached_hierarchy__5395__auto__ = (function (){var G__12246 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12246) : cljs.core.atom.call(null,G__12246));
})();
var hierarchy__5396__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","error-message"),((function (method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__){
return (function() { 
var G__12247__delegate = function (warning_type,_){
return warning_type;
};
var G__12247 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__12248__i = 0, G__12248__a = new Array(arguments.length -  1);
while (G__12248__i < G__12248__a.length) {G__12248__a[G__12248__i] = arguments[G__12248__i + 1]; ++G__12248__i;}
  _ = new cljs.core.IndexedSeq(G__12248__a,0);
} 
return G__12247__delegate.call(this,warning_type,_);};
G__12247.cljs$lang$maxFixedArity = 1;
G__12247.cljs$lang$applyTo = (function (arglist__12249){
var warning_type = cljs.core.first(arglist__12249);
var _ = cljs.core.rest(arglist__12249);
return G__12247__delegate(warning_type,_);
});
G__12247.cljs$core$IFn$_invoke$arity$variadic = G__12247__delegate;
return G__12247;
})()
;})(method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__))
,cljs.core.cst$kw$default,hierarchy__5396__auto__,method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__));
})();
}
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$preamble_DASH_missing,(function (warning_type,info){
return [cljs.core.str("Preamble resource file not found: "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cst$kw$missing.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unprovided,(function (warning_type,info){
return [cljs.core.str("Required namespace not provided for "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cst$kw$unprovided.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_var,(function (warning_type,info){
return [cljs.core.str("Use of undeclared Var "),cljs.core.str(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_ns,(function (warning_type,p__12250){
var map__12251 = p__12250;
var map__12251__$1 = ((((!((map__12251 == null)))?((((map__12251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12251):map__12251);
var info = map__12251__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12251__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12251__$1,cljs.core.cst$kw$js_DASH_provide);
return [cljs.core.str("No such namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljs)),cljs.core.str(", "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljc)),cljs.core.str(", or Closure namespace \""),cljs.core.str(js_provide),cljs.core.str("\"")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dynamic,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" not declared ^:dynamic")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$redef,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" already refers to: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" being replaced by: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$redef_DASH_in_DASH_file,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" at line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is being replaced")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_var,(function (warning_type,info){
return [cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" no longer fn, references are stale")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_arity,(function (warning_type,info){
return [cljs.core.str("Wrong number of args ("),cljs.core.str(cljs.core.cst$kw$argc.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(") passed to "),cljs.core.str((function (){var or__4498__auto__ = cljs.core.cst$kw$ctor.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" is deprecated.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,(function (warning_type,info){
return [cljs.core.str("Referred "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$lib.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not exist")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is deprecated")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str("Can't resolve protocol symbol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str("Symbol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is not a protocol")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,(function (warning_type,info){
if(cljs.core.truth_(cljs.core.cst$kw$no_DASH_such_DASH_method.cljs$core$IFn$_invoke$arity$1(info))){
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare method called "),cljs.core.str(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare arity "),cljs.core.str(cljs.core.cst$kw$invalid_DASH_arity.cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,(function (warning_type,info){
return [cljs.core.str("Duplicated methods in protocol implementation "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" implemented multiple times")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have more than 1 variadic overload")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have fixed arity function with more params than variadic function")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$overload_DASH_arity,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have 2 overloads with same arity")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,(function (warning_type,info){
return [cljs.core.str("Extending an existing JavaScript type - use a different symbol name "),cljs.core.str("instead of "),cljs.core.str(cljs.core.cst$kw$current_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" e.g "),cljs.core.str(cljs.core.cst$kw$suggested_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_arithmetic,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(", all arguments must be numbers, got "),cljs.core.str(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" instead.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke_DASH_ctor,(function (warning_type,info){
return [cljs.core.str("Cannot invoke type constructor "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" as function ")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,(function (warning_type,info){
return [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is a single segment namespace")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$munged_DASH_namespace,(function (warning_type,p__12254){
var map__12255 = p__12254;
var map__12255__$1 = ((((!((map__12255 == null)))?((((map__12255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12255):map__12255);
var info = map__12255__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12255__$1,cljs.core.cst$kw$name);
var munged = cljs.core.munge(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__12255,map__12255__$1,info,name){
return (function (p1__12253_SHARP_){
if(cljs.core.truth_((cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1(p1__12253_SHARP_) : cljs.analyzer.js_reserved.call(null,p1__12253_SHARP_)))){
return [cljs.core.str(p1__12253_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__12253_SHARP_;
}
});})(map__12255,map__12255__$1,info,name))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name),/\./))));
return [cljs.core.str("Namespace "),cljs.core.str(name),cljs.core.str(" contains a reserved JavaScript keyword,"),cljs.core.str(" the corresponding Google Closure namespace will be munged to "),cljs.core.str(munged)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_DASH_var_DASH_clash,(function (warning_type,p__12257){
var map__12258 = p__12257;
var map__12258__$1 = ((((!((map__12258 == null)))?((((map__12258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12258):map__12258);
var info = map__12258__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12258__$1,cljs.core.cst$kw$ns);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12258__$1,cljs.core.cst$kw$var);
return [cljs.core.str("Namespace "),cljs.core.str(ns),cljs.core.str(" clashes with var "),cljs.core.str(var$)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,(function (warning_type,p__12260){
var map__12261 = p__12260;
var map__12261__$1 = ((((!((map__12261 == null)))?((((map__12261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12261):map__12261);
var info = map__12261__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12261__$1,cljs.core.cst$kw$protocol);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12261__$1,cljs.core.cst$kw$method);
return [cljs.core.str("Bad extend-type method shape for protocol "),cljs.core.str(protocol),cljs.core.str(" method "),cljs.core.str(method),cljs.core.str(", method arities must be grouped together")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,(function (warning_type,p__12263){
var map__12264 = p__12263;
var map__12264__$1 = ((((!((map__12264 == null)))?((((map__12264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12264):map__12264);
var info = map__12264__$1;
var module_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12264__$1,cljs.core.cst$kw$module_DASH_type);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12264__$1,cljs.core.cst$kw$file);
return [cljs.core.str("Unsupported JavaScript module type "),cljs.core.str(module_type),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_((warning_type.cljs$core$IFn$_invoke$arity$1 ? warning_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_) : warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_)))){
var temp__4425__auto__ = (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(warning_type,extra) : cljs.analyzer.error_message.call(null,warning_type,extra));
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
var _STAR_print_fn_STAR_12269 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__12270 = env;
var G__12271 = [cljs.core.str("WARNING: "),cljs.core.str(s)].join('');
return (cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2(G__12270,G__12271) : cljs.analyzer.message.call(null,G__12270,G__12271));
})()], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12269;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error([cljs.core.str("constant type "),cljs.core.str(cljs.core.type(value)),cljs.core.str(" not supported")].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(value)].join(''),(1)):[cljs.core.str(value)].join(''));
var name__$1 = clojure.string.replace(cljs.core.munge(clojure.string.replace(name,"-","_DASH_")),".","$");
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix),cljs.core.str(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(){
var args12272 = [];
var len__5537__auto___12280 = arguments.length;
var i__5538__auto___12281 = (0);
while(true){
if((i__5538__auto___12281 < len__5537__auto___12280)){
args12272.push((arguments[i__5538__auto___12281]));

var G__12282 = (i__5538__auto___12281 + (1));
i__5538__auto___12281 = G__12282;
continue;
} else {
}
break;
}

var G__12274 = args12272.length;
switch (G__12274) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12272.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__12275 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table], null),(function (table){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(table,val))){
return table;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,val,cljs.analyzer.gen_constant_id(val));
}
}));
var G__12275__$1 = (cljs.core.truth_(env)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__12275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$cljs$analyzer_SLASH_constants], null),((function (G__12275){
return (function (p__12276){
var map__12277 = p__12276;
var map__12277__$1 = ((((!((map__12277 == null)))?((((map__12277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12277):map__12277);
var constants = map__12277__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12277__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12277__$1,cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY);
var G__12279 = constants;
var G__12279__$1 = ((!(cljs.core.contains_QMARK_(seen,val)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__12279,cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,val),cljs.core.array_seq([cljs.core.cst$kw$order,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,val)], 0)):G__12279);
return G__12279__$1;
});})(G__12275))
):G__12275);
return G__12275__$1;
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;
cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$core], null),cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t12284 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.analyzer.t12284 = (function (meta12285){
this.meta12285 = meta12285;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.analyzer.t12284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12286,meta12285__$1){
var self__ = this;
var _12286__$1 = this;
return (new cljs.analyzer.t12284(meta12285__$1));
});

cljs.analyzer.t12284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12286){
var self__ = this;
var _12286__$1 = this;
return self__.meta12285;
});

cljs.analyzer.t12284.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t12284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12285], null);
});

cljs.analyzer.t12284.cljs$lang$type = true;

cljs.analyzer.t12284.cljs$lang$ctorStr = "cljs.analyzer/t12284";

cljs.analyzer.t12284.cljs$lang$ctorPrWriter = (function (this__5077__auto__,writer__5078__auto__,opt__5079__auto__){
return cljs.core._write(writer__5078__auto__,"cljs.analyzer/t12284");
});

cljs.analyzer.__GT_t12284 = (function cljs$analyzer$__GT_t12284(meta12285){
return (new cljs.analyzer.t12284(meta12285));
});

}

return (new cljs.analyzer.t12284(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(){
var args12287 = [];
var len__5537__auto___12290 = arguments.length;
var i__5538__auto___12291 = (0);
while(true){
if((i__5538__auto___12291 < len__5537__auto___12290)){
args12287.push((arguments[i__5538__auto___12291]));

var G__12292 = (i__5538__auto___12291 + (1));
i__5538__auto___12291 = G__12292;
continue;
} else {
}
break;
}

var G__12289 = args12287.length;
switch (G__12289) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12287.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cenv) : cljs.core.deref.call(null,cenv)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,key], null));
if(!((ns == null))){
return ns;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$user,key)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null);
} else {
return null;
}
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;
cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__4498__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__4498__auto__ = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(){
var args12294 = [];
var len__5537__auto___12301 = arguments.length;
var i__5538__auto___12302 = (0);
while(true){
if((i__5538__auto___12302 < len__5537__auto___12301)){
args12294.push((arguments[i__5538__auto___12302]));

var G__12303 = (i__5538__auto___12302 + (1));
i__5538__auto___12302 = G__12303;
continue;
} else {
}
break;
}

var G__12296 = args12294.length;
switch (G__12296) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12294.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2(ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__4498__auto__ = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)) == null);
if(or__4498__auto__){
return or__4498__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12297){
var vec__12298 = p__12297;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12298,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12298,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta(v);
var vm__$1 = (function (){var ns__$1 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vm,cljs.core.cst$kw$ns,ns__$1,cljs.core.array_seq([cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns__$1)].join(''),[cljs.core.str(k)].join(''))], 0));
})();
return vm__$1;
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12299){
var vec__12300 = p__12299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_(ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;
/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__5919__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$locals,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fn_DASH_scope,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$js_DASH_globals,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val__5919__auto__){
return (function (p1__12305_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12305_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,p1__12305_SHARP_], null)],null));
});})(val__5919__auto__))
,cljs.core.list(cljs.core.cst$sym$alert,cljs.core.cst$sym$window,cljs.core.cst$sym$document,cljs.core.cst$sym$console,cljs.core.cst$sym$escape,cljs.core.cst$sym$unescape,cljs.core.cst$sym$screen,cljs.core.cst$sym$location,cljs.core.cst$sym$navigator,cljs.core.cst$sym$history,cljs.core.cst$sym$location,cljs.core.cst$sym$global,cljs.core.cst$sym$process,cljs.core.cst$sym$require,cljs.core.cst$sym$module,cljs.core.cst$sym$exports)))], null);
}finally {if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(){
var args12306 = [];
var len__5537__auto___12309 = arguments.length;
var i__5538__auto___12310 = (0);
while(true){
if((i__5538__auto___12310 < len__5537__auto___12309)){
args12306.push((arguments[i__5538__auto___12310]));

var G__12311 = (i__5538__auto___12310 + (1));
i__5538__auto___12310 = G__12311;
continue;
} else {
}
break;
}

var G__12308 = args12306.length;
switch (G__12308) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12306.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
var temp__4425__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4425__auto__)){
var line = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$sym$cljs$core))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.cst$kw$line,cljs.analyzer.get_line(cljs.core.name,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(cljs.core.name,env)], null);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$sym$cljs$core))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.cst$kw$line,cljs.analyzer.get_line(name,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(name,env)], null);
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;
cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str(s),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" at line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__12317 = cljs.core.seq(cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__12318 = null;
var count__12319 = (0);
var i__12320 = (0);
while(true){
if((i__12320 < count__12319)){
var handler = chunk__12318.cljs$core$IIndexed$_nth$arity$2(null,i__12320);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__12321 = seq__12317;
var G__12322 = chunk__12318;
var G__12323 = count__12319;
var G__12324 = (i__12320 + (1));
seq__12317 = G__12321;
chunk__12318 = G__12322;
count__12319 = G__12323;
i__12320 = G__12324;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12317);
if(temp__4425__auto__){
var seq__12317__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12317__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__12317__$1);
var G__12325 = cljs.core.chunk_rest(seq__12317__$1);
var G__12326 = c__5282__auto__;
var G__12327 = cljs.core.count(c__5282__auto__);
var G__12328 = (0);
seq__12317 = G__12325;
chunk__12318 = G__12326;
count__12319 = G__12327;
i__12320 = G__12328;
continue;
} else {
var handler = cljs.core.first(seq__12317__$1);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__12329 = cljs.core.next(seq__12317__$1);
var G__12330 = null;
var G__12331 = (0);
var G__12332 = (0);
seq__12317 = G__12329;
chunk__12318 = G__12330;
count__12319 = G__12331;
i__12320 = G__12332;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(){
var args12333 = [];
var len__5537__auto___12336 = arguments.length;
var i__5538__auto___12337 = (0);
while(true){
if((i__5538__auto___12337 < len__5537__auto___12336)){
args12333.push((arguments[i__5538__auto___12337]));

var G__12338 = (i__5538__auto___12337 + (1));
i__5538__auto___12337 = G__12338;
continue;
} else {
}
break;
}

var G__12335 = args12333.length;
switch (G__12335) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12333.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.message(env,msg),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$tag,cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;
cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)));
});
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$sym$goog$string,null,cljs.core.cst$sym$goog,null,cljs.core.cst$sym$goog$object,null,cljs.core.cst$sym$Math,null,cljs.core.cst$sym$goog$array,null], null), null),prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prefix,prefix__$1,cljs.core.cst$kw$suffix,suffix__$1], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 * not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix))){
return null;
} else {
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env);
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
return false;
}
}
}
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(){
var args12341 = [];
var len__5537__auto___12344 = arguments.length;
var i__5538__auto___12345 = (0);
while(true){
if((i__5538__auto___12345 < len__5537__auto___12344)){
args12341.push((arguments[i__5538__auto___12345]));

var G__12346 = (i__5538__auto___12345 + (1));
i__5538__auto___12345 = G__12346;
continue;
} else {
}
break;
}

var G__12343 = args12341.length;
switch (G__12343) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12341.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning(env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str(suffix)].join('');
var suffix_str = (((!((".." === sufstr))) && (/\./.test(sufstr)))?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix_str);
if((!(cljs.analyzer.implicit_import_QMARK_(env,prefix,suffix__$1))) && (!(cljs.analyzer.loaded_js_ns_QMARK_(env,prefix))) && (!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core,prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$unquote,suffix__$1)))) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.cst$kw$defs,suffix__$1) == null))){
return (missing_fn.cljs$core$IFn$_invoke$arity$3 ? missing_fn.cljs$core$IFn$_invoke$arity$3(env,prefix,suffix__$1) : missing_fn.call(null,env,prefix,suffix__$1));
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;
cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,[cljs.core.str("Unable to resolve var: "),cljs.core.str(suffix__$1),cljs.core.str(" in this context")].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if(((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$goog$string,null,cljs.core.cst$sym$cljs$core,null,cljs.core.cst$sym$goog,null,cljs.core.cst$sym$Math,null], null), null),ns_sym) == null)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_sym) == null))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_ns,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns_DASH_sym,ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__4486__auto__ = (function (){var or__4498__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$sym$cljs$core,cljs.core.cst$kw$defs,sym);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
var temp__4425__auto__ = (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(sym,env) : cljs.analyzer.get_expander.call(null,sym,env));
if(cljs.core.truth_(temp__4425__auto__)){
var mac = temp__4425__auto__;
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns.getName(),cljs.core.cst$sym$cljs$core$macros);
} else {
return null;
}
}
})();
if(cljs.core.truth_(and__4486__auto__)){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__4486__auto__;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(){
var args12348 = [];
var len__5537__auto___12354 = arguments.length;
var i__5538__auto___12355 = (0);
while(true){
if((i__5538__auto___12355 < len__5537__auto___12354)){
args12348.push((arguments[i__5538__auto___12355]));

var G__12356 = (i__5538__auto___12355 + (1));
i__5538__auto___12355 = G__12356;
continue;
} else {
}
break;
}

var G__12350 = args12348.length;
switch (G__12350) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12348.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
if(("js" === cljs.core.namespace(sym))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sym,cljs.core.cst$kw$ns,cljs.core.cst$sym$js], null);
} else {
var s = [cljs.core.str(sym)].join('');
var lcls = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var lb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym);
if(!((lb == null))){
return lb;
} else {
if(!((cljs.core.namespace(sym) == null))){
var ns = cljs.core.namespace(sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias(env,ns__$1);
if((confirm == null)){
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),full_ns)){
cljs.analyzer.confirm_ns(env,full_ns);
} else {
}

var G__12351_12358 = env;
var G__12352_12359 = full_ns;
var G__12353_12360 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__12351_12358,G__12352_12359,G__12353_12360) : confirm.call(null,G__12351_12358,G__12352_12359,G__12353_12360));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(cljs.core.name(sym))].join('')),cljs.core.cst$kw$ns,full_ns], null)], 0));
} else {
if((goog.string.contains(s,".")) && (!(goog.string.contains(s,"..")))){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx));
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx + (1)));
var lb__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,prefix);
if(!((lb__$1 == null))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
} else {
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$imports,prefix);
if(!((full_ns == null))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),suffix)], null);
} else {
var info = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$defs,prefix);
if(!((info == null))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cur_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.cst$kw$ns,cur_ns], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",prefix))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix):cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(prefix)].join(''),suffix)),cljs.core.cst$kw$ns,prefix], null)], 0));
}
}
}
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$uses,sym) == null))){
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$uses,sym);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.cst$kw$ns,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env))], null)], 0));
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$imports,sym) == null))){
var G__12361 = env;
var G__12362 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$imports,sym);
var G__12363 = confirm;
env = G__12361;
sym = G__12362;
confirm = G__12363;
continue;
} else {
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var full_ns = ((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$defs,sym) == null)))?cur_ns:((cljs.analyzer.core_name_QMARK_(env,sym))?cljs.core.cst$sym$cljs$core:cur_ns
));
if((confirm == null)){
} else {
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(env,full_ns,sym) : confirm.call(null,env,full_ns,sym));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.cst$kw$ns,full_ns], null)], 0));

}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;
/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not(cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)))){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__12368 = cljs.core.seq(names);
var chunk__12369 = null;
var count__12370 = (0);
var i__12371 = (0);
while(true){
if((i__12371 < count__12370)){
var name = chunk__12369.cljs$core$IIndexed$_nth$arity$2(null,i__12371);
var env_12372__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_12373 = cljs.analyzer.resolve_existing_var(env_12372__$1,name);
if(cljs.core.truth_((function (){var and__4486__auto__ = ev_12373;
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_12373));
} else {
return and__4486__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_12372__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_12373,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_12373)], null));
} else {
}

var G__12374 = seq__12368;
var G__12375 = chunk__12369;
var G__12376 = count__12370;
var G__12377 = (i__12371 + (1));
seq__12368 = G__12374;
chunk__12369 = G__12375;
count__12370 = G__12376;
i__12371 = G__12377;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12368);
if(temp__4425__auto__){
var seq__12368__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12368__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__12368__$1);
var G__12378 = cljs.core.chunk_rest(seq__12368__$1);
var G__12379 = c__5282__auto__;
var G__12380 = cljs.core.count(c__5282__auto__);
var G__12381 = (0);
seq__12368 = G__12378;
chunk__12369 = G__12379;
count__12370 = G__12380;
i__12371 = G__12381;
continue;
} else {
var name = cljs.core.first(seq__12368__$1);
var env_12382__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_12383 = cljs.analyzer.resolve_existing_var(env_12382__$1,name);
if(cljs.core.truth_((function (){var and__4486__auto__ = ev_12383;
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_12383));
} else {
return and__4486__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_12382__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_12383,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_12383)], null));
} else {
}

var G__12384 = cljs.core.next(seq__12368__$1);
var G__12385 = null;
var G__12386 = (0);
var G__12387 = (0);
seq__12368 = G__12384;
chunk__12369 = G__12385;
count__12370 = G__12386;
i__12371 = G__12387;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces);
if(cljs.core.truth_(cljs.core.namespace(sym))){
var ns__$1 = cljs.core.namespace(sym);
var ns__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias(env,ns__$2);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null)))){
var full_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,sym], null));
} else {
var ns__$1 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$macros,sym], null)))?ns:((cljs.analyzer.core_name_QMARK_(env,sym))?cljs.core.cst$sym$cljs$core:null));
if(cljs.core.truth_(ns__$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,cljs.core.cst$kw$macros,sym], null));
} else {
return null;
}

}
}
});
/**
 * Given a namespace as a symbol and a map from namespace symbol to
 * namespace information return the topologically sorted list of all
 * dependent namespaces. The map values of the optional second argument must
 * be maps with a :requires set of symbols, a :requires map of symbol -> alias
 * (analyzer format) or a :requires vector of munged namespace strings
 * (closure format).
 */
cljs.analyzer.ns_dependents = (function cljs$analyzer$ns_dependents(){
var args12389 = [];
var len__5537__auto___12406 = arguments.length;
var i__5538__auto___12407 = (0);
while(true){
if((i__5538__auto___12407 < len__5537__auto___12406)){
args12389.push((arguments[i__5538__auto___12407]));

var G__12408 = (i__5538__auto___12407 + (1));
i__5538__auto___12407 = G__12408;
continue;
} else {
}
break;
}

var G__12391 = args12389.length;
switch (G__12391) {
case 1:
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12389.length)].join('')));

}
});

cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces));
});

cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2 = (function (ns,ns_map){
var parent_QMARK_ = (function cljs$analyzer$parent_QMARK_(parent,p__12399){
var vec__12403 = p__12399;
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12403,(0),null);
var map__12404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12403,(1),null);
var map__12404__$1 = ((((!((map__12404 == null)))?((((map__12404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12404):map__12404);
var ns_info = map__12404__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12404__$1,cljs.core.cst$kw$requires);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,child)){
return null;
} else {
if((cljs.core.map_QMARK_(requires)) || (cljs.core.set_QMARK_(requires))){
return cljs.core.contains_QMARK_(requires,parent);
} else {
if(cljs.core.vector_QMARK_(requires)){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.munge(cljs.core.name(parent))], true),requires);
} else {
return null;
}
}
}
});
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2(ns,(function (ns_SINGLEQUOTE_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12388_SHARP_){
return parent_QMARK_(ns_SINGLEQUOTE_,p1__12388_SHARP_);
}),ns_map)));
}));
});

cljs.analyzer.ns_dependents.cljs$lang$maxFixedArity = 2;


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [cljs.core.cst$sym$_AMPERSAND_,null,cljs.core.cst$sym$case_STAR_,null,cljs.core.cst$sym$defrecord_STAR_,null,cljs.core.cst$sym$try,null,cljs.core.cst$sym$loop_STAR_,null,cljs.core.cst$sym$do,null,cljs.core.cst$sym$letfn_STAR_,null,cljs.core.cst$sym$if,null,cljs.core.cst$sym$new,null,cljs.core.cst$sym$ns,null,cljs.core.cst$sym$deftype_STAR_,null,cljs.core.cst$sym$let_STAR_,null,cljs.core.cst$sym$js_STAR_,null,cljs.core.cst$sym$fn_STAR_,null,cljs.core.cst$sym$recur,null,cljs.core.cst$sym$set_BANG_,null,cljs.core.cst$sym$$,null,cljs.core.cst$sym$var,null,cljs.core.cst$sym$quote,null,cljs.core.cst$sym$throw,null,cljs.core.cst$sym$def,null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Keyword], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(e);
if(!((tag == null))){
return tag;
} else {
var tag__$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e));
if(!((tag__$1 == null))){
return tag__$1;
} else {
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e)));
}
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__4498__auto__ = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count(params);
return cljs.core.some(((function (methods$,c){
return (function (m){
var and__4486__auto__ = (function (){var or__4498__auto__ = (cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__4498__auto__){
return or__4498__auto__;
} else {
return cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__4486__auto__)){
return m;
} else {
return and__4486__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,t);
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(var$);
if(!((type == null))){
return type;
} else {
var type__$1 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$));
if(!((type__$1 == null))){
return type__$1;
} else {
var proto = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$);
if(!((proto == null))){
return proto;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap,null,cljs.core.cst$sym$cljs$core_SLASH_List,null], null), null),t);
}
}
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$not_DASH_native,null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__12418 = e;
var map__12418__$1 = ((((!((map__12418 == null)))?((((map__12418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12418):map__12418);
var map__12419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12418__$1,cljs.core.cst$kw$test);
var map__12419__$1 = ((((!((map__12419 == null)))?((((map__12419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12419):map__12419);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$form);
var then_tag = (function (){var G__12422 = env;
var G__12423 = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__12422,G__12423) : cljs.analyzer.infer_tag.call(null,G__12422,G__12423));
})();
if((cljs.core.keyword_identical_QMARK_(op,cljs.core.cst$kw$constant)) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = (function (){var G__12424 = env;
var G__12425 = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__12424,G__12425) : cljs.analyzer.infer_tag.call(null,G__12424,G__12425));
})();
if((cljs.core.symbol_identical_QMARK_(then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_(else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_(then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_(env,then_tag))) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_(env,else_tag)))){
return cljs.core.cst$sym$clj;
} else {
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return cljs.core.cst$sym$seq;
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(then_tag))?then_tag:cljs.core.PersistentHashSet.fromArray([then_tag], true));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(else_tag))?else_tag:cljs.core.PersistentHashSet.fromArray([else_tag], true));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__12428 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(e);
var map__12428__$1 = ((((!((map__12428 == null)))?((((map__12428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12428):map__12428);
var f = map__12428__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12428__$1,cljs.core.cst$kw$info);
var ret_tag = (((cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info) == null))?null:cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(info));
if(!((ret_tag == null))){
return ret_tag;
} else {
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.find_matching_method(f,args),cljs.core.cst$kw$op,cljs.core.cst$kw$method);
var ret_tag__$1 = (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,me) : cljs.analyzer.infer_tag.call(null,env,me));
if(!((ret_tag__$1 == null))){
return ret_tag__$1;
} else {
return cljs.analyzer.ANY_SYM;
}
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var tag = cljs.analyzer.get_tag(e);
if(!((tag == null))){
return tag;
} else {
var G__12446 = (((cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__12446) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
return cljs$analyzer$infer_tag(env,cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs$analyzer$infer_tag(env,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(e));

break;
case "if":
return cljs.analyzer.infer_if(env,e);

break;
case "method":
return cljs$analyzer$infer_tag(env,cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "constant":
var G__12447 = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__12447)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__12447)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "loop":
return cljs$analyzer$infer_tag(env,cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
if(!((cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e) == null))){
return cljs$analyzer$infer_tag(env,cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs$analyzer$infer_tag(env,cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e));
}

break;
case "invoke":
return cljs.analyzer.infer_invoke(env,e);

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "def":
return cljs$analyzer$infer_tag(env,cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e));

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__5392__auto__ = (function (){var G__12449 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12449) : cljs.core.atom.call(null,G__12449));
})();
var prefer_table__5393__auto__ = (function (){var G__12450 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12450) : cljs.core.atom.call(null,G__12450));
})();
var method_cache__5394__auto__ = (function (){var G__12451 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12451) : cljs.core.atom.call(null,G__12451));
})();
var cached_hierarchy__5395__auto__ = (function (){var G__12452 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12452) : cljs.core.atom.call(null,G__12452));
})();
var hierarchy__5396__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","parse"),((function (method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__){
return (function() { 
var G__12453__delegate = function (op,rest){
return op;
};
var G__12453 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__12454__i = 0, G__12454__a = new Array(arguments.length -  1);
while (G__12454__i < G__12454__a.length) {G__12454__a[G__12454__i] = arguments[G__12454__i + 1]; ++G__12454__i;}
  rest = new cljs.core.IndexedSeq(G__12454__a,0);
} 
return G__12453__delegate.call(this,op,rest);};
G__12453.cljs$lang$maxFixedArity = 1;
G__12453.cljs$lang$applyTo = (function (arglist__12455){
var op = cljs.core.first(arglist__12455);
var rest = cljs.core.rest(arglist__12455);
return G__12453__delegate(op,rest);
});
G__12453.cljs$core$IFn$_invoke$arity$variadic = G__12453__delegate;
return G__12453;
})()
;})(method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__))
,cljs.core.cst$kw$default,hierarchy__5396__auto__,method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__));
})();
}
cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var temp__4423__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(temp__4423__auto__)){
var var_ns = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym)),cljs.core.cst$kw$sym,(function (){var G__12460 = expr_env;
var G__12461 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_ns),cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$)))))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12460,G__12461) : cljs.analyzer.analyze.call(null,G__12460,G__12461));
})(),cljs.core.cst$kw$meta,(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$doc,cljs.core.cst$kw$file,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null);
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var user_meta = cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys(user_meta);
return cljs.core.zipmap(uks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__12456_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_meta,p1__12456_SHARP_)),cljs.core.cst$sym$quote);
});})(user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env))
,uks));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__12457_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(var$,p1__12457_SHARP_)),cljs.core.cst$sym$quote);
});})(ks,var_ns,temp__4423__auto__,var$,expr_env))
,ks)),cljs.core.cst$kw$name,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$))))))),cljs.core.array_seq([cljs.core.cst$kw$test,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$test),cljs.core._conj(cljs.core.List.EMPTY,sym)))))], 0)))),cljs.core.cst$kw$arglists,(function (){var arglists = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists)))?cljs.core.second(arglists):arglists);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta,arglists_SINGLEQUOTE_,cljs.core.cst$kw$arglists_DASH_meta.cljs$core$IFn$_invoke$arity$1(var$)))),cljs.core.cst$sym$quote);
})()], 0))], 0));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,m) : cljs.analyzer.analyze.call(null,expr_env,m));
})()], null);
} else {
return null;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$var,(function (op,env,p__12462,_,___$1){
var vec__12463 = p__12462;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12463,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12463,(1),null);
var form = vec__12463;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$form,form], null),cljs.analyzer.var_ast(env,sym)], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (op,env,p__12464,name,_){
var vec__12465 = p__12464;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12465,(3),null);
var form = vec__12465;
if((cljs.core.count(form) < (3))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too few arguments to if");
} else {
}

if((cljs.core.count(form) > (4))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_12466 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__12467 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__12468 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12467,G__12468) : cljs.analyzer.analyze.call(null,G__12467,G__12468));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12466;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_12469 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,then) : cljs.analyzer.analyze.call(null,env,then));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_12469;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_12470 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,else$) : cljs.analyzer.analyze.call(null,env,else$));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_12470;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$if,cljs.core.cst$kw$form,form,cljs.core.cst$kw$test,test_expr,cljs.core.cst$kw$then,then_expr,cljs.core.cst$kw$else,else_expr,cljs.core.cst$kw$unchecked,cljs.core._STAR_unchecked_if_STAR_,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$case_STAR_,(function (op,env,p__12473,name,_){
var vec__12474 = p__12473;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(1),null);
var tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(2),null);
var thens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(3),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(4),null);
var form = vec__12474;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* must switch on symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$symbol_QMARK_,cljs.core.cst$sym$sym)], 0)))].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be grouped in vectors"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$tests)], 0)))].join('')));
}

var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var v = (function (){var _STAR_recur_frames_STAR_12475 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12475;
}})();
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__12474,___$1,sym,tests,thens,default$,form){
return (function (p1__12471_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__12474,___$1,sym,tests,thens,default$,form){
return (function (t){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,t) : cljs.analyzer.analyze.call(null,expr_env,t));
});})(expr_env,v,vec__12474,___$1,sym,tests,thens,default$,form))
,p1__12471_SHARP_);
});})(expr_env,v,vec__12474,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,tests__$1,vec__12474,___$1,sym,tests,thens,default$,form){
return (function (p1__12472_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,p1__12472_SHARP_) : cljs.analyzer.analyze.call(null,env,p1__12472_SHARP_));
});})(expr_env,v,tests__$1,vec__12474,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,default$) : cljs.analyzer.analyze.call(null,env,default$));
if(cljs.core.every_QMARK_(((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__12474,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__4498__auto__ = cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
var and__4486__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(t));
if(and__4486__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__4486__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__12474,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be numbers, strings, or constants"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$t], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$t,cljs.core.cst$kw$info,cljs.core.cst$kw$const),cljs.core.list(cljs.core.cst$sym$and,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$constant,cljs.core.list(cljs.core.cst$kw$op,cljs.core.cst$sym$t)),cljs.core.list(cljs.core.list(cljs.core.cst$sym$some_DASH_fn,cljs.core.cst$sym$number_QMARK_,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$char_QMARK_),cljs.core.list(cljs.core.cst$kw$form,cljs.core.cst$sym$t))))),cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$concat,cljs.core.cst$sym$tests))], 0)))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$case_STAR_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$v,v,cljs.core.cst$kw$tests,tests__$1,cljs.core.cst$kw$thens,thens__$1,cljs.core.cst$kw$default,default$__$1,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,cljs.core.array_seq([thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)], 0)))], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$throw,(function (op,env,p__12476,name,_){
var vec__12477 = p__12476;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12477,(0),null);
var throw$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12477,(1),null);
var form = vec__12477;
var throw_expr = (function (){var _STAR_recur_frames_STAR_12478 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__12479 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__12480 = throw$;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12479,G__12480) : cljs.analyzer.analyze.call(null,G__12479,G__12480));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12478;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$throw,cljs.core.cst$kw$form,form,cljs.core.cst$kw$throw,throw_expr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$try,(function (op,env,p__12485,name,_){
var vec__12486 = p__12485;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486,(0),null);
var body = cljs.core.nthnext(vec__12486,(1));
var form = vec__12486;
var catchenv = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null),((function (vec__12486,___$1,body,form){
return (function (p1__12481_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,p1__12481_SHARP_)){
return cljs.core.cst$kw$return;
} else {
return p1__12481_SHARP_;
}
});})(vec__12486,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,vec__12486,___$1,body,form){
return (function (p1__12482_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__12482_SHARP_),cljs.core.cst$sym$catch);
});})(catchenv,vec__12486,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(catch_QMARK_,((function (catchenv,catch_QMARK_,vec__12486,___$1,body,form){
return (function (p1__12483_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__12483_SHARP_),cljs.core.cst$kw$default);
});})(catchenv,catch_QMARK_,vec__12486,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__12486,___$1,body,form){
return (function (p1__12484_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__12484_SHARP_),cljs.core.cst$sym$finally);
});})(catchenv,catch_QMARK_,default_QMARK_,vec__12486,___$1,body,form))
);
var map__12487 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$start,cljs.core.cst$kw$forms,body,cljs.core.cst$kw$body,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$cblocks,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$dblock,null,cljs.core.cst$kw$fblock,null], null);
while(true){
if(cljs.core.seq_QMARK_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser))){
var vec__12488 = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12488,(0),null);
var forms_STAR_ = cljs.core.nthnext(vec__12488,(1));
var parser_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$forms,forms_STAR_);
var G__12489 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__12489) {
case "start":
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__12501 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$catches);
parser = G__12501;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__12502 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__12502;
continue;
} else {
var G__12503 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),cljs.core.conj,form__$1);
parser = G__12503;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_((default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? default_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : default_QMARK_.call(null,form__$1)))){
var G__12504 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$dblock,form__$1,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$finally], 0));
parser = G__12504;
continue;
} else {
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__12505 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cblocks], null),cljs.core.conj,form__$1);
parser = G__12505;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__12506 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__12506;
continue;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid try form");

}
}
}

break;
case "finally":
var G__12507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$fblock,form__$1,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$done], 0));
parser = G__12507;
continue;

break;
case "done":
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Unexpected form after finally");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__12487__$1 = ((((!((map__12487 == null)))?((((map__12487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12487):map__12487);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12487__$1,cljs.core.cst$kw$body);
var cblocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12487__$1,cljs.core.cst$kw$cblocks);
var dblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12487__$1,cljs.core.cst$kw$dblock);
var fblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12487__$1,cljs.core.cst$kw$fblock);
var finally$ = ((cljs.core.seq(fblock))?(function (){var G__12491 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__12492 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.rest(fblock))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12491,G__12492) : cljs.analyzer.analyze.call(null,G__12491,G__12492));
})():null);
var e = (cljs.core.truth_((function (){var or__4498__auto__ = cljs.core.seq(cblocks);
if(or__4498__auto__){
return or__4498__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("e"):null);
var default$ = (function (){var temp__4423__auto__ = dblock;
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12493 = temp__4423__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12493,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12493,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12493,(2),null);
var cb = cljs.core.nthnext(vec__12493,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,e))));
}
})();
var cblock = ((cljs.core.seq(cblocks))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__12487,map__12487__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__12486,___$1,body,form){
return (function (p__12494){
var vec__12495 = p__12494;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(2),null);
var cb = cljs.core.nthnext(vec__12495,(3));
if(cljs.core.truth_(name__$1)){
if(cljs.core.not(cljs.core.namespace(name__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't qualify symbol in catch"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$namespace,cljs.core.cst$sym$name))], 0)))].join('')));
}
} else {
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,e)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0)))))))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__12487,map__12487__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__12486,___$1,body,form))
,cljs.core.array_seq([cblocks], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))):default$);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,e,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,e,cljs.core.cst$kw$line,cljs.analyzer.get_line(e,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var G__12496 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(catchenv,cljs.core.cst$kw$locals,locals__$1);
var G__12497 = cblock;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12496,G__12497) : cljs.analyzer.analyze.call(null,G__12496,G__12497));
})():null);
var try$ = (function (){var G__12498 = (cljs.core.truth_((function (){var or__4498__auto__ = e;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return finally$;
}
})())?catchenv:env);
var G__12499 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12498,G__12499) : cljs.analyzer.analyze.call(null,G__12498,G__12499));
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$try,cljs.core.cst$kw$form,form,cljs.core.cst$kw$try,try$,cljs.core.cst$kw$finally,finally$,cljs.core.cst$kw$name,e,cljs.core.cst$kw$catch,catch$,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$def,(function (op,env,form,name,_){
var pfn = (function() {
var G__12518 = null;
var G__12518__2 = (function (___$1,sym){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,sym], null);
});
var G__12518__3 = (function (___$1,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$init,init], null);
});
var G__12518__4 = (function (___$1,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$init,init], null);
});
G__12518 = function(___$1,sym,doc,init){
switch(arguments.length){
case 2:
return G__12518__2.call(this,___$1,sym);
case 3:
return G__12518__3.call(this,___$1,sym,doc);
case 4:
return G__12518__4.call(this,___$1,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12518.cljs$core$IFn$_invoke$arity$2 = G__12518__2;
G__12518.cljs$core$IFn$_invoke$arity$3 = G__12518__3;
G__12518.cljs$core$IFn$_invoke$arity$4 = G__12518__4;
return G__12518;
})()
;
var args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pfn,form);
var sym = cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(args);
var sym_meta = cljs.core.meta(sym);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var dynamic = cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join(''));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns], null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join('')),cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns_name)].join(''),[cljs.core.str(sym)].join(''))], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(sym))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't def ns-qualified name");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't redefine a constant");
} else {
}

var temp__4425__auto___12519 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__4425__auto___12519)){
var doc_12520 = temp__4425__auto___12519;
if(typeof doc_12520 === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
}
} else {
}

var temp__4425__auto___12521 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym], null));
if(cljs.core.truth_(temp__4425__auto___12521)){
var v_12522 = temp__4425__auto___12521;
if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.not(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__4486__auto__){
var and__4486__auto____$1 = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(v_12522));
if(and__4486__auto____$1){
var and__4486__auto____$2 = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__4486__auto____$2){
var and__4486__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__4486__auto____$3)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_file_defs_STAR_) : cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_)),sym);
} else {
return and__4486__auto____$3;
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
})())){
cljs.analyzer.warning(cljs.core.cst$kw$redef_DASH_in_DASH_file,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(v_12522)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym);
} else {
}

var env__$1 = (cljs.core.truth_((function (){var or__4498__auto__ = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.cst$sym$cljs$core)) && (cljs.analyzer.core_name_QMARK_(env,sym));
if(or__4498__auto__){
return or__4498__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$uses,sym], null));
}
})())?(function (){var ev = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym);
cljs.analyzer.warning(cljs.core.cst$kw$redef,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$ns,cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(ev),cljs.core.cst$kw$ns_DASH_name,ns_name], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$excludes], null),cljs.core.conj,cljs.core.array_seq([sym], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes], null),cljs.core.conj,sym);
})():env);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$locals),sym));
var init_expr = ((cljs.core.contains_QMARK_(args,cljs.core.cst$kw$init))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),sym_meta,(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1)], 0)));

var _STAR_recur_frames_STAR_12509 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__12510 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__12511 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(args);
var G__12512 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(G__12510,G__12511,G__12512) : cljs.analyzer.analyze.call(null,G__12510,G__12511,G__12512));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12509;
}})()
:null);
var fn_var_QMARK_ = (function (){var and__4486__auto__ = init_expr;
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$fn);
} else {
return and__4486__auto__;
}
})();
var tag__$1 = (cljs.core.truth_(fn_var_QMARK_)?(function (){var or__4498__auto__ = cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return tag;
}
})():tag);
var export_as = (function (){var temp__4425__auto__ = cljs.core.cst$kw$export.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var export_val = temp__4425__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__4498__auto__ = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
}
})();
var temp__4425__auto___12523 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym], null));
if(cljs.core.truth_(temp__4425__auto___12523)){
var v_12524 = temp__4425__auto___12523;
if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)));
if(and__4486__auto__){
var and__4486__auto____$1 = cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(v_12524);
if(cljs.core.truth_(and__4486__auto____$1)){
return cljs.core.not(fn_var_QMARK_);
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_name,ns_name,cljs.core.cst$kw$sym,sym], null));
} else {
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),(function (){var G__12513 = sym_meta;
var G__12513__$1 = (cljs.core.truth_(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12513,cljs.core.cst$kw$test,true):G__12513);
return G__12513__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$meta,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sym_meta,cljs.core.cst$kw$test),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env__$1)),cljs.core.cst$sym$cljs$core)){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,doc], null):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,protocol], null):null),(function (){var temp__4425__auto__ = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var protocol_symbol = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol_DASH_symbol,protocol_symbol,cljs.core.cst$kw$info,cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol_symbol)),cljs.core.cst$kw$impls,cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),(cljs.core.truth_(fn_var_QMARK_)?(function (){var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (p1__12508_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(p1__12508_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__4423__auto__ = cljs.core.cst$kw$top_DASH_fn.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4423__auto__)){
var top_fn_meta = temp__4423__auto__;
return top_fn_meta;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,params,cljs.core.cst$kw$arglists,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
}
})()], 0));
})():null),(cljs.core.truth_((function (){var and__4486__auto__ = fn_var_QMARK_;
if(cljs.core.truth_(and__4486__auto__)){
return tag__$1;
} else {
return and__4486__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):null)], 0)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env__$1,cljs.core.cst$kw$op,cljs.core.cst$kw$def,cljs.core.cst$kw$form,form,cljs.core.cst$kw$name,var_name,cljs.core.cst$kw$var,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__12514 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$locals),cljs.core.cst$kw$context,cljs.core.cst$kw$expr),cljs.core.cst$kw$def_DASH_var,true);
var G__12515 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12514,G__12515) : cljs.analyzer.analyze.call(null,G__12514,G__12515));
})(),cljs.core.cst$kw$op,cljs.core.cst$kw$var),cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$init,init_expr], null),(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$1))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var_DASH_ast,cljs.analyzer.var_ast(env__$1,sym)], null):null),(function (){var temp__4425__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4425__auto__)){
var test = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,(function (){var G__12516 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__12517 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12516,G__12517) : cljs.analyzer.analyze.call(null,G__12516,G__12517));
})()], null);
} else {
return null;
}
})(),(cljs.core.truth_(tag__$1)?(cljs.core.truth_(fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag__$1], null)):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),(cljs.core.truth_(export_as)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$export,export_as], null):null),(cljs.core.truth_(init_expr)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null)], 0));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__12527,name){
var vec__12528 = p__12527;
var locals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(1),null);
var line = cljs.analyzer.get_line(name,env);
var column = cljs.analyzer.get_col(name,env);
var nmeta = cljs.core.meta(name);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((locals == null))?null:(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(name) : locals.call(null,name)));
var env__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null)], 0));
var param = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow],[name,true,cljs.core.cst$kw$var,env__$1,column,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,shadow], null),tag,shadow]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name,param),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR_12530 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze.call(null,env,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12530;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first(form);
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var param_names__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var body = cljs.core.next(form);
var step = cljs.analyzer.analyze_fn_method_param(env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__12533 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast(params):params);
var fixed_arity = cljs.core.count(params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$flag,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null);
var recur_frames = cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return,cljs.core.array_seq([cljs.core.cst$kw$locals,locals__$1], 0));
var body_form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
var expr = cljs.analyzer.analyze_fn_method_body(body_env,body_form,recur_frames);
var recurs = (function (){var G__12534 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(recur_frame);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12534) : cljs.core.deref.call(null,G__12534));
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$params,params,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,fixed_arity,cljs.core.cst$kw$type,type,cljs.core.cst$kw$form,form,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$recurs,recurs], null);
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((name == null)){
return null;
} else {
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,name);
var shadow__$1 = (((shadow == null))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_globals,name], null)):null);
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_self_DASH_name,true,cljs.core.cst$kw$fn_DASH_scope,fn_scope,cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$shadow,shadow__$1], null)], null);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
var ret_tag = (((tag == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name_var,ret_tag], 0));
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12535_SHARP_){
return cljs.analyzer.analyze_fn_method(menv,locals,p1__12535_SHARP_,type);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
var _STAR_cljs_warnings_STAR_12537 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{return cljs.analyzer.analyze_fn_methods_pass2_STAR_(menv,locals,type,meths);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_12537;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fn_STAR_,(function (op,env,p__12539,name,_){
var vec__12540 = p__12539;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(0),null);
var args = cljs.core.nthnext(vec__12540,(1));
var form = vec__12540;
var vec__12541 = (((cljs.core.first(args) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq(args)], null));
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12541,(0),null);
var meths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12541,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?cljs.core._conj(cljs.core.List.EMPTY,meths):meths);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var(env,locals,name__$1);
var env__$1 = ((!((name__$1 == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_scope], null),cljs.core.conj,name_var):env);
var locals__$1 = (((!((locals == null))) && (!((name__$1 == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta(form);
var type = cljs.core.cst$kw$cljs$analyzer_SLASH_type.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count(meths__$1) > (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr):env__$1);
var menv__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([menv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol_DASH_impl,proto_impl,cljs.core.cst$kw$protocol_DASH_inline,proto_inline], null)], 0));
var methods$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12541,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__12540,___$1,args,form){
return (function (p1__12538_SHARP_){
return cljs.analyzer.analyze_fn_method(menv__$1,locals__$1,p1__12538_SHARP_,type);
});})(vec__12541,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__12540,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$max_DASH_fixed_DASH_arity,methods$));
var variadic = cljs.core.boolean$(cljs.core.some(cljs.core.cst$kw$variadic,methods$));
var locals__$2 = ((!((name__$1 == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,cljs.core.array_seq([variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa,cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$)], 0)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?cljs.analyzer.analyze_fn_methods_pass2(menv__$1,locals__$2,type,meths__$1):methods$);
var form__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(form,cljs.core.dissoc,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,cljs.core.cst$kw$cljs$analyzer_SLASH_type);
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$children,cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$loop_DASH_lets,cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$methods,cljs.core.cst$kw$recur_DASH_frames,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$form,cljs.core.cst$kw$tag,cljs.core.cst$kw$jsdoc],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,cljs.core.cst$kw$fn,env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,cljs.core.cst$sym$function,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_12542 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variadic,methods$__$1);
var variadic_params_12543 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(variadic_methods_12542)));
var param_counts_12544 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$params),methods$__$1);
if(((1) < cljs.core.count(variadic_methods_12542))){
cljs.analyzer.warning(cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(!(((variadic_params_12543 === (0))) || ((variadic_params_12543 === ((1) + mfa))))){
cljs.analyzer.warning(cljs.core.cst$kw$variadic_DASH_max_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts_12544),param_counts_12544)){
cljs.analyzer.warning(cljs.core.cst$kw$overload_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(ast) : cljs.analyzer.analyze_wrap_meta.call(null,ast));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$letfn_STAR_,(function (op,env,p__12545,name,_){
var vec__12546 = p__12545;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546,(1),null);
var exprs = cljs.core.nthnext(vec__12546,(2));
var form = vec__12546;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
var names = cljs.core.keys(n__GT_fexpr);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var vec__12547 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__12546,___$1,bindings,exprs,form){
return (function (p__12549,n){
var vec__12550 = p__12549;
var map__12551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550,(0),null);
var map__12551__$1 = ((((!((map__12551 == null)))?((((map__12551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12551):map__12551);
var env__$1 = map__12551__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12551__$1,cljs.core.cst$kw$locals);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550,(1),null);
var ret_tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_12553 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{var G__12554 = env__$1;
var G__12555 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(n) : n__GT_fexpr.call(null,n));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12554,G__12555) : cljs.analyzer.analyze.call(null,G__12554,G__12555));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_12553;
}})();
var be = (function (){var G__12556 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$method_DASH_params,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[n,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col(n,env__$1),cljs.analyzer.get_line(n,env__$1),cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),true,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(n) : locals.call(null,n)),true]);
var G__12556__$1 = (cljs.core.truth_(ret_tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12556,cljs.core.cst$kw$ret_DASH_tag,ret_tag):G__12556);
return G__12556__$1;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,n], null),be),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be)], null);
});})(n__GT_fexpr,names,context,vec__12546,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(0),null);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(1),null);
var meth_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var vec__12548 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__12547,meth_env,bes,meth_env__$1,vec__12546,___$1,bindings,exprs,form){
return (function (p__12557,p__12558){
var vec__12559 = p__12557;
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559,(1),null);
var map__12560 = p__12558;
var map__12560__$1 = ((((!((map__12560 == null)))?((((map__12560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12560):map__12560);
var be = map__12560__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12560__$1,cljs.core.cst$kw$name);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12560__$1,cljs.core.cst$kw$shadow);
var env__$1 = cljs.core.assoc_in(meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),shadow);
var fexpr = (function (){var G__12562 = env__$1;
var G__12563 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(name__$1) : n__GT_fexpr.call(null,name__$1));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12562,G__12563) : cljs.analyzer.analyze.call(null,G__12562,G__12563));
})();
var be_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(be,cljs.core.cst$kw$init,fexpr,cljs.core.array_seq([cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__12547,meth_env,bes,meth_env__$1,vec__12546,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548,(1),null);
var expr = (function (){var G__12564 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env__$2,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__12565 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12564,G__12565) : cljs.analyzer.analyze.call(null,G__12564,G__12565));
})();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$letfn,cljs.core.cst$kw$bindings,bes__$1,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12566_SHARP_){
var G__12569 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__12570 = p1__12566_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12569,G__12570) : cljs.analyzer.analyze.call(null,G__12569,G__12570));
}),cljs.core.butlast(exprs)));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_12572 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_(env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12572;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$do,(function (op,env,p__12573,_,___$1){
var vec__12574 = p__12573;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(0),null);
var exprs = cljs.core.nthnext(vec__12574,(1));
var form = vec__12574;
var statements = cljs.analyzer.analyze_do_statements(env,exprs);
if((cljs.core.count(exprs) <= (1))){
var ret = (function (){var G__12575 = env;
var G__12576 = cljs.core.first(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12575,G__12576) : cljs.analyzer.analyze.call(null,G__12575,G__12576));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
} else {
var ret_env = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return));
var ret = (function (){var G__12577 = ret_env;
var G__12578 = cljs.core.last(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12577,G__12578) : cljs.analyzer.analyze.call(null,G__12577,G__12578));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_12580 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.analyze.call(null,env,init));
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_12580;
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
if(!((tag == null))){
return tag;
} else {
var tag__$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(!((tag__$1 == null))){
return tag__$1;
} else {
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(init_expr));
}
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encl_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
while(true){
var binding = cljs.core.first(bindings__$1);
if(!((binding == null))){
var vec__12588 = binding;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12588,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12588,(1),null);
if(cljs.core.truth_((function (){var or__4498__auto__ = !((cljs.core.namespace(name) == null));
if(or__4498__auto__){
return or__4498__auto__;
} else {
var G__12591 = [cljs.core.str(name)].join('');
var G__12592 = ".";
return goog.string.contains(G__12591,G__12592);
}
})())){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,[cljs.core.str("Invalid local name: "),cljs.core.str(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init(env,init,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line(name,env);
var col = cljs.analyzer.get_col(name,env);
var be = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$init,cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[init_expr,name,true,cljs.core.cst$kw$var,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,(function (){var G__12593 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__12593) : name.call(null,G__12593));
})()], null),cljs.analyzer.get_let_tag(name,init_expr),(function (){var G__12594 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__12594) : name.call(null,G__12594));
})(),true]);
var be__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([be,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr))], null)], 0)):be);
var G__12595 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be__$1);
var G__12596 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name], null),be__$1);
var G__12597 = cljs.core.next(bindings__$1);
bes = G__12595;
env = G__12596;
bindings__$1 = G__12597;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_12599 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_(encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12599;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
var G__12602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__12603 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12602,G__12603) : cljs.analyzer.analyze.call(null,G__12602,G__12603));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_12606 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_12607 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_(env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_12607;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12606;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__12608,is_loop){
var vec__12611 = p__12608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12611,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12611,(1),null);
var exprs = cljs.core.nthnext(vec__12611,(2));
var form = vec__12611;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,"bindings must be vector of even number of elements");
}

var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__12612 = cljs.analyzer.analyze_let_bindings(encl_env,bindings);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,bes,cljs.core.cst$kw$flag,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:((!((cljs.analyzer._STAR_loop_lets_STAR_ == null)))?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var expr = cljs.analyzer.analyze_let_body(env,context,exprs,recur_frames,loop_lets);
var op = ((is_loop === true)?cljs.core.cst$kw$loop:cljs.core.cst$kw$let);
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,bes)),expr);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,encl_env,cljs.core.cst$kw$bindings,bes,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,children], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,false);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$loop_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,true);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$recur,(function (op,env,p__12614,_,___$1){
var vec__12615 = p__12614;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12615,(0),null);
var exprs = cljs.core.nthnext(vec__12615,(1));
var form = vec__12615;
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first(cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_12616 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12616,context,frame,vec__12615,___$2,exprs,form){
return (function (p1__12613_SHARP_){
var G__12617 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__12618 = p1__12613_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12617,G__12618) : cljs.analyzer.analyze.call(null,G__12617,G__12618));
});})(_STAR_recur_frames_STAR_12616,context,frame,vec__12615,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12616;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't recur here");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs__$1),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"recur argument count mismatch");
}

var G__12619_12621 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(frame);
var G__12620_12622 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12619_12621,G__12620_12622) : cljs.core.reset_BANG_.call(null,G__12619_12621,G__12620_12622));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$recur,cljs.core.cst$kw$form,form], null),cljs.core.cst$kw$frame,frame,cljs.core.array_seq([cljs.core.cst$kw$exprs,exprs__$1,cljs.core.cst$kw$children,exprs__$1], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$quote,(function (_,env,p__12623,___$1,___$2){
var vec__12624 = p__12623;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12624,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12624,(1),null);
var G__12625 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$quoted_QMARK_,true);
var G__12626 = x;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12625,G__12626) : cljs.analyzer.analyze.call(null,G__12625,G__12626));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$new,(function (_,env,p__12628,___$1,___$2){
var vec__12629 = p__12628;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(0),null);
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(1),null);
var args = cljs.core.nthnext(vec__12629,(2));
var form = vec__12629;
if((ctor instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"First arg to new must be a symbol");
}

var _STAR_recur_frames_STAR_12630 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ctorexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,ctor) : cljs.analyzer.analyze.call(null,enve,ctor));
var ctor_var = cljs.analyzer.resolve_existing_var(env,ctor);
var record_args = (cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.cst$kw$record.cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core.not(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
} else {
return and__4486__auto__;
}
})())?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,null) : cljs.analyzer.analyze.call(null,enve,null))):null);
var argexprs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_12630,vec__12629,___$3,ctor,args,form){
return (function (p1__12627_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__12627_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__12627_SHARP_));
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_12630,vec__12629,___$3,ctor,args,form))
,args)),record_args);
var known_num_fields = cljs.core.cst$kw$num_DASH_fields.cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count(args);
if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.not(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
if(and__4486__auto__){
var and__4486__auto____$1 = known_num_fields;
if(cljs.core.truth_(and__4486__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(known_num_fields,argc);
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$argc,argc,cljs.core.cst$kw$ctor,ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$new,cljs.core.cst$kw$form,form,cljs.core.cst$kw$ctor,ctorexpr,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),cljs.core.cst$kw$tag,(function (){var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__4498__auto__ = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Object,cljs.core.cst$sym$object,cljs.core.cst$sym$js_SLASH_String,cljs.core.cst$sym$string,cljs.core.cst$sym$js_SLASH_Array,cljs.core.cst$sym$array,cljs.core.cst$sym$js_SLASH_Number,cljs.core.cst$sym$number,cljs.core.cst$sym$js_SLASH_Function,cljs.core.cst$sym$function,cljs.core.cst$sym$js_SLASH_Boolean,cljs.core.cst$sym$boolean], null).call(null,name);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12630;
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$set_BANG_,(function (_,env,p__12631,___$1,___$2){
var vec__12632 = p__12631;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632,(3),null);
var form = vec__12632;
var vec__12633 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,target),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,val)], 0)))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633,(0),null);
var val__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633,(1),null);
var _STAR_recur_frames_STAR_12634 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var targetexpr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_))?(function (){

return cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if;
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),target__$1))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! a constant");
} else {
}

var local_12636 = (function (){var G__12635 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (target__$1.cljs$core$IFn$_invoke$arity$1 ? target__$1.cljs$core$IFn$_invoke$arity$1(G__12635) : target__$1.call(null,G__12635));
})();
if((function (){var or__4498__auto__ = (local_12636 == null);
if(or__4498__auto__){
return or__4498__auto__;
} else {
var and__4486__auto__ = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(local_12636);
if(and__4486__auto__){
var or__4498__auto____$1 = cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(local_12636);
if(or__4498__auto____$1){
return or__4498__auto____$1;
} else {
var or__4498__auto____$2 = cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_12636);
if(or__4498__auto____$2){
return or__4498__auto____$2;
} else {
return cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_12636);
}
}
} else {
return and__4486__auto__;
}
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! local var or non-mutable field");
}

return (cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze_symbol.call(null,enve,target__$1));
})()
:((cljs.core.seq_QMARK_(target__$1))?(function (){var targetexpr = (cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3(enve,target__$1,null) : cljs.analyzer.analyze_seq.call(null,enve,target__$1,null));
if(cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(targetexpr)){
return targetexpr;
} else {
return null;
}
})():null)
));
var valexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,val__$1) : cljs.analyzer.analyze.call(null,enve,val__$1));
if(targetexpr){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"set! target must be a field or a symbol naming a var");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(targetexpr,cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$no_DASH_op], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$set_BANG_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$val,valexpr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12634;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$symbol_QMARK_,cljs.core.cst$sym$dep)], 0)))].join('')));
}

var js_index = cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
var temp__4423__auto__ = cljs.core.find(js_index,cljs.core.name(dep));
if(temp__4423__auto__){
var vec__12640 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12640,(0),null);
var map__12641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12640,(1),null);
var map__12641__$1 = ((((!((map__12641 == null)))?((((map__12641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12641):map__12641);
var foreign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12641__$1,cljs.core.cst$kw$foreign);
return foreign;
} else {
return false;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(){
var args12644 = [];
var len__5537__auto___12656 = arguments.length;
var i__5538__auto___12657 = (0);
while(true){
if((i__5538__auto___12657 < len__5537__auto___12656)){
args12644.push((arguments[i__5538__auto___12657]));

var G__12658 = (i__5538__auto___12657 + (1));
i__5538__auto___12657 = G__12658;
continue;
} else {
}
break;
}

var G__12646 = args12644.length;
switch (G__12646) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12644.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4(lib,deps,env,null);
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var _STAR_cljs_dep_set_STAR_12647 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_12647,compiler){
return (function (p1__12643_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__12643_SHARP_));
});})(_STAR_cljs_dep_set_STAR_12647,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__12643_SHARP_], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$contains_QMARK_,cljs.core.cst$sym$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.core.cst$sym$p1__12643_SHARP_))),cljs.core.cst$sym$deps)], 0)))].join('')));
}

var seq__12648 = cljs.core.seq(deps);
var chunk__12649 = null;
var count__12650 = (0);
var i__12651 = (0);
while(true){
if((i__12651 < count__12650)){
var dep = chunk__12649.cljs$core$IIndexed$_nth$arity$2(null,i__12651);
if((function (){var or__4498__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(or__4498__auto__){
return or__4498__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__12652 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__12653 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__12652,G__12653) : cljs.analyzer.error_message.call(null,G__12652,G__12653));
})());
}

var G__12660 = seq__12648;
var G__12661 = chunk__12649;
var G__12662 = count__12650;
var G__12663 = (i__12651 + (1));
seq__12648 = G__12660;
chunk__12649 = G__12661;
count__12650 = G__12662;
i__12651 = G__12663;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12648);
if(temp__4425__auto__){
var seq__12648__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12648__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__12648__$1);
var G__12664 = cljs.core.chunk_rest(seq__12648__$1);
var G__12665 = c__5282__auto__;
var G__12666 = cljs.core.count(c__5282__auto__);
var G__12667 = (0);
seq__12648 = G__12664;
chunk__12649 = G__12665;
count__12650 = G__12666;
i__12651 = G__12667;
continue;
} else {
var dep = cljs.core.first(seq__12648__$1);
if((function (){var or__4498__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(or__4498__auto__){
return or__4498__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__12654 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__12655 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__12654,G__12655) : cljs.analyzer.error_message.call(null,G__12654,G__12655));
})());
}

var G__12668 = cljs.core.next(seq__12648__$1);
var G__12669 = null;
var G__12670 = (0);
var G__12671 = (0);
seq__12648 = G__12668;
chunk__12649 = G__12669;
count__12650 = G__12670;
i__12651 = G__12671;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_12647;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var seq__12682 = cljs.core.seq(uses);
var chunk__12683 = null;
var count__12684 = (0);
var i__12685 = (0);
while(true){
if((i__12685 < count__12684)){
var vec__12686 = chunk__12683.cljs$core$IIndexed$_nth$arity$2(null,i__12685);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(1),null);
var js_lib_12692 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_dependency_DASH_index,cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,lib,cljs.core.cst$kw$defs,sym], null),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found)) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_12692,cljs.core.cst$kw$group),cljs.core.cst$kw$goog))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_12692,cljs.core.cst$kw$closure_DASH_lib)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__12687 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__12688 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__12687,G__12688) : cljs.analyzer.error_message.call(null,G__12687,G__12688));
})());
} else {
}

var G__12693 = seq__12682;
var G__12694 = chunk__12683;
var G__12695 = count__12684;
var G__12696 = (i__12685 + (1));
seq__12682 = G__12693;
chunk__12683 = G__12694;
count__12684 = G__12695;
i__12685 = G__12696;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12682);
if(temp__4425__auto__){
var seq__12682__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12682__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__12682__$1);
var G__12697 = cljs.core.chunk_rest(seq__12682__$1);
var G__12698 = c__5282__auto__;
var G__12699 = cljs.core.count(c__5282__auto__);
var G__12700 = (0);
seq__12682 = G__12697;
chunk__12683 = G__12698;
count__12684 = G__12699;
i__12685 = G__12700;
continue;
} else {
var vec__12689 = cljs.core.first(seq__12682__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12689,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12689,(1),null);
var js_lib_12701 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_dependency_DASH_index,cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,lib,cljs.core.cst$kw$defs,sym], null),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found)) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_12701,cljs.core.cst$kw$group),cljs.core.cst$kw$goog))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_12701,cljs.core.cst$kw$closure_DASH_lib)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__12690 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__12691 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__12690,G__12691) : cljs.analyzer.error_message.call(null,G__12690,G__12691));
})());
} else {
}

var G__12702 = cljs.core.next(seq__12682__$1);
var G__12703 = null;
var G__12704 = (0);
var G__12705 = (0);
seq__12682 = G__12702;
chunk__12683 = G__12703;
count__12684 = G__12704;
i__12685 = G__12705;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(use_macros,env){
var seq__12716 = cljs.core.seq(use_macros);
var chunk__12717 = null;
var count__12718 = (0);
var i__12719 = (0);
while(true){
if((i__12719 < count__12718)){
var vec__12720 = chunk__12717.cljs$core$IIndexed$_nth$arity$2(null,i__12719);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12720,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12720,(1),null);
var the_ns_12726 = cljs.core.find_macros_ns(lib);
if(((the_ns_12726 == null)) || ((the_ns_12726.findInternedVar(sym) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__12721 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__12722 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__12721,G__12722) : cljs.analyzer.error_message.call(null,G__12721,G__12722));
})());
} else {
}

var G__12727 = seq__12716;
var G__12728 = chunk__12717;
var G__12729 = count__12718;
var G__12730 = (i__12719 + (1));
seq__12716 = G__12727;
chunk__12717 = G__12728;
count__12718 = G__12729;
i__12719 = G__12730;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12716);
if(temp__4425__auto__){
var seq__12716__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12716__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__12716__$1);
var G__12731 = cljs.core.chunk_rest(seq__12716__$1);
var G__12732 = c__5282__auto__;
var G__12733 = cljs.core.count(c__5282__auto__);
var G__12734 = (0);
seq__12716 = G__12731;
chunk__12717 = G__12732;
count__12718 = G__12733;
i__12719 = G__12734;
continue;
} else {
var vec__12723 = cljs.core.first(seq__12716__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723,(1),null);
var the_ns_12735 = cljs.core.find_macros_ns(lib);
if(((the_ns_12735 == null)) || ((the_ns_12735.findInternedVar(sym) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__12724 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__12725 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__12724,G__12725) : cljs.analyzer.error_message.call(null,G__12724,G__12725));
})());
} else {
}

var G__12736 = cljs.core.next(seq__12716__$1);
var G__12737 = null;
var G__12738 = (0);
var G__12739 = (0);
seq__12716 = G__12736;
chunk__12717 = G__12737;
count__12718 = G__12738;
i__12719 = G__12739;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str(msg),cljs.core.str("; offending spec: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([spec], 0)))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (cljs.core.sequential_QMARK_(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_(spec)){
if((cljs.core.first(spec) instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_(cljs.core.count(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as alias and :refer (names) options supported in :require"));
}

if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$as,null,cljs.core.cst$kw$refer,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(spec))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as and :refer options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies(cljs.core.next(spec));
return (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,(0)) : fs.call(null,cljs.core.cst$kw$as,(0))) <= (1))) && (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$refer,(0)) : fs.call(null,cljs.core.cst$kw$refer,(0))) <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__12742){
var vec__12743 = p__12742;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12743,(0),null);
var exclude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12743,(1),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12743,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$refer_DASH_clojure)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exclude,cljs.core.cst$kw$exclude)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only [:refer-clojure :exclude (names)] form supported");
}

if(cljs.core.seq(s)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,xs);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__12744){
var vec__12746 = p__12744;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12746,(0),null);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12746,(1),null);
var referred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12746,(2),null);
var spec = vec__12746;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$only,kw)) && (cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] specs supported in :use / :use-macros"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,cljs.core.cst$kw$refer,referred], null);
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((spec instanceof cljs.core.Symbol)){
var G__12757 = env;
var G__12758 = macros_QMARK_;
var G__12759 = deps;
var G__12760 = aliases;
var G__12761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__12757;
macros_QMARK_ = G__12758;
deps = G__12759;
aliases = G__12760;
spec = G__12761;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec(env,macros_QMARK_,spec);

var vec__12752 = spec;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12752,(0),null);
var opts = cljs.core.nthnext(vec__12752,(1));
var lib__$1 = (function (){var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(lib)], null));
if(temp__4423__auto__){
var js_module_name = temp__4423__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(js_module_name);
} else {
return lib;
}
})();
var map__12753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__12753__$1 = ((((!((map__12753 == null)))?((((map__12753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12753):map__12753);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12753__$1,cljs.core.cst$kw$as,lib__$1);
var referred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12753__$1,cljs.core.cst$kw$refer);
var vec__12754 = ((macros_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$use_DASH_macros], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require,cljs.core.cst$kw$use], null));
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12754,(0),null);
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12754,(1),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(alias){
var alias_type_12762 = ((macros_QMARK_)?cljs.core.cst$kw$macros:cljs.core.cst$kw$fns);
var lib_SINGLEQUOTE__12763 = (function (){var G__12756 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aliases) : cljs.core.deref.call(null,aliases));
return (alias_type_12762.cljs$core$IFn$_invoke$arity$1 ? alias_type_12762.cljs$core$IFn$_invoke$arity$1(G__12756) : alias_type_12762.call(null,G__12756));
})().call(null,alias);
if((!((lib_SINGLEQUOTE__12763 == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,lib_SINGLEQUOTE__12763))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_12762], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null)], 0));
} else {
}

if(((cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(macros_QMARK_){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((alias)?new cljs.core.PersistentArrayMap.fromArray([rk,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([alias,lib__$1], true, false),new cljs.core.PersistentArrayMap.fromArray([lib__$1,lib__$1], true, false)], 0))], true, false):null),((referred)?new cljs.core.PersistentArrayMap.fromArray([uk,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(referred,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(lib__$1)))], true, false):null)], 0));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_(spec)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace(spec) == null)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_(spec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12764_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12764_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.first(spec)),cljs.core.str("."),cljs.core.str(p1__12764_SHARP_)].join(''))],null));
}),cljs.core.rest(spec))):new cljs.core.PersistentArrayMap.fromArray([cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(spec)].join(''),/\./))),spec], true, false));
var seq__12771_12777 = cljs.core.seq(import_map);
var chunk__12772_12778 = null;
var count__12773_12779 = (0);
var i__12774_12780 = (0);
while(true){
if((i__12774_12780 < count__12773_12779)){
var vec__12775_12781 = chunk__12772_12778.cljs$core$IIndexed$_nth$arity$2(null,i__12774_12780);
var __12782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12775_12781,(0),null);
var spec_12783__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12775_12781,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_12783__$1);

var G__12784 = seq__12771_12777;
var G__12785 = chunk__12772_12778;
var G__12786 = count__12773_12779;
var G__12787 = (i__12774_12780 + (1));
seq__12771_12777 = G__12784;
chunk__12772_12778 = G__12785;
count__12773_12779 = G__12786;
i__12774_12780 = G__12787;
continue;
} else {
var temp__4425__auto___12788 = cljs.core.seq(seq__12771_12777);
if(temp__4425__auto___12788){
var seq__12771_12789__$1 = temp__4425__auto___12788;
if(cljs.core.chunked_seq_QMARK_(seq__12771_12789__$1)){
var c__5282__auto___12790 = cljs.core.chunk_first(seq__12771_12789__$1);
var G__12791 = cljs.core.chunk_rest(seq__12771_12789__$1);
var G__12792 = c__5282__auto___12790;
var G__12793 = cljs.core.count(c__5282__auto___12790);
var G__12794 = (0);
seq__12771_12777 = G__12791;
chunk__12772_12778 = G__12792;
count__12773_12779 = G__12793;
i__12774_12780 = G__12794;
continue;
} else {
var vec__12776_12795 = cljs.core.first(seq__12771_12789__$1);
var __12796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12776_12795,(0),null);
var spec_12797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12776_12795,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_12797__$1);

var G__12798 = cljs.core.next(seq__12771_12789__$1);
var G__12799 = null;
var G__12800 = (0);
var G__12801 = (0);
seq__12771_12777 = G__12798;
chunk__12772_12778 = G__12799;
count__12773_12779 = G__12800;
i__12774_12780 = G__12801;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$import,import_map,cljs.core.cst$kw$require,import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.analyzer._STAR_macro_infer_STAR_){
var ns = ((cljs.core.sequential_QMARK_(form))?cljs.core.first(form):form);
var map__12804 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null));
var map__12804__$1 = ((((!((map__12804 == null)))?((((map__12804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12804):map__12804);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,cljs.core.cst$kw$require_DASH_macros);
var or__4498__auto__ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(use_macros));
if(or__4498__auto__){
return or__4498__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(require_macros));
}
} else {
return null;
}
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__12813 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12814){
var vec__12815 = p__12814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12815,(0),null);
var specs = cljs.core.nthnext(vec__12815,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__12813__$1 = ((((!((map__12813 == null)))?((((map__12813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12813):map__12813);
var indexed = map__12813__$1;
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12813__$1,cljs.core.cst$kw$require);
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$include_DASH_macros,null,cljs.core.cst$kw$refer_DASH_macros,null], null), null);
var remove_from_spec = ((function (map__12813,map__12813__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not((function (){var and__4486__auto__ = cljs.core.sequential_QMARK_(spec);
if(and__4486__auto__){
return cljs.core.some(pred,spec);
} else {
return and__4486__auto__;
}
})())){
return spec;
} else {
var vec__12817 = cljs.core.split_with(cljs.core.complement(pred),spec);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12817,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12817,(1),null);
var G__12819 = pred;
var G__12820 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),r));
pred = G__12819;
spec = G__12820;
continue;
}
break;
}
});})(map__12813,map__12813__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_(spec))){
return spec;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$refer_DASH_macros)){
return cljs.core.cst$kw$refer;
} else {
return x;
}
});})(map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__12806_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null).call(null,p1__12806_SHARP_);
});})(map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
return replace_refer_macros(remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$include_DASH_macros,null], null), null),x)));
} else {
return x;
}
});})(map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__4498__auto__ = (function (){var and__4486__auto__ = cljs.core.sequential_QMARK_(x);
if(and__4486__auto__){
return cljs.core.some(sugar_keys,x);
} else {
return and__4486__auto__;
}
})();
if(or__4498__auto__){
return or__4498__auto__;
} else {
var or__4498__auto____$1 = reload_spec_QMARK_(x);
if(or__4498__auto____$1){
return or__4498__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_(x);
}
}
});})(map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_spec,sugar_keys);
var temp__4423__auto__ = cljs.core.seq(to_macro_specs(require));
if(temp__4423__auto__){
var require_specs = temp__4423__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (require_specs,temp__4423__auto__,map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
var vec__12818 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818,(1),null);
return cljs.core.cons(k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__4423__auto__,map__12813,map__12813__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
} else {
return args;
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(xs))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(xs))], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__12827 = cljs.core.seq(to_check);
var chunk__12828 = null;
var count__12829 = (0);
var i__12830 = (0);
while(true){
if((i__12830 < count__12829)){
var vec__12831 = chunk__12828.cljs$core$IIndexed$_nth$arity$2(null,i__12830);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12831,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12831,(1),null);
if(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__12833 = seq__12827;
var G__12834 = chunk__12828;
var G__12835 = count__12829;
var G__12836 = (i__12830 + (1));
seq__12827 = G__12833;
chunk__12828 = G__12834;
count__12829 = G__12835;
i__12830 = G__12836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12827);
if(temp__4425__auto__){
var seq__12827__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12827__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__12827__$1);
var G__12837 = cljs.core.chunk_rest(seq__12827__$1);
var G__12838 = c__5282__auto__;
var G__12839 = cljs.core.count(c__5282__auto__);
var G__12840 = (0);
seq__12827 = G__12837;
chunk__12828 = G__12838;
count__12829 = G__12839;
i__12830 = G__12840;
continue;
} else {
var vec__12832 = cljs.core.first(seq__12827__$1);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12832,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12832,(1),null);
if(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__12841 = cljs.core.next(seq__12827__$1);
var G__12842 = null;
var G__12843 = (0);
var G__12844 = (0);
seq__12827 = G__12841;
chunk__12828 = G__12842;
count__12829 = G__12843;
i__12830 = G__12844;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = [cljs.core.str(name)].join('');
if(cljs.core.not(goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name_str),cljs.core.str("$macros")].join(''));
} else {
return name;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ns,(function (_,env,p__12847,___$1,opts){
var vec__12848 = p__12847;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12848,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12848,(1),null);
var args = cljs.core.nthnext(vec__12848,(2));
var form = vec__12848;
if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__12849 = name;
var G__12849__$1 = ((cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.analyzer.macro_ns_name(G__12849):G__12849);
return G__12849__$1;
})();
var segments_12862 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name__$1),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(segments_12862))){
cljs.analyzer.warning(cljs.core.cst$kw$single_DASH_segment_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

if(cljs.core.some(cljs.analyzer.js_reserved,segments_12862)){
cljs.analyzer.warning(cljs.core.cst$kw$munged_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

cljs.analyzer.find_def_clash(env,name__$1,segments_12862);

var docstring = ((typeof cljs.core.first(args) === 'string')?cljs.core.first(args):null);
var mdocstr = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
var args__$1 = ((docstring)?cljs.core.next(args):args);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?cljs.core.first(args__$1):null);
var form_meta = cljs.core.meta(form);
var args__$2 = cljs.analyzer.desugar_ns_specs(((metadata)?cljs.core.next(args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(name__$1,cljs.core.merge,metadata);
var excludes = cljs.analyzer.parse_ns_excludes(env,args__$2);
var deps = (function (){var G__12851 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12851) : cljs.core.atom.call(null,G__12851));
})();
var aliases = (function (){var G__12852 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12852) : cljs.core.atom.call(null,G__12852));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = (function (){var G__12853 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12853) : cljs.core.atom.call(null,G__12853));
})();
var reload = (function (){var G__12854 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12854) : cljs.core.atom.call(null,G__12854));
})();
var reloads = (function (){var G__12855 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12855) : cljs.core.atom.call(null,G__12855));
})();
var map__12850 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form){
return (function (m,p__12856){
var vec__12857 = p__12856;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12857,(0),null);
var libs = cljs.core.nthnext(vec__12857,(1));
if(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null).call(null,k)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported");
}

if((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(valid_forms) : cljs.core.deref.call(null,valid_forms)).call(null,k)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str("Only one "),cljs.core.str(k),cljs.core.str(" form is allowed per namespace definition")].join(''));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,k)){
} else {
if(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload,null], null), null),libs)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload);
} else {
}

if(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload_DASH_all);
} else {
}
}

var temp__4425__auto___12863 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__12857,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form){
return (function (p1__12845_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__12845_SHARP_));
});})(vec__12857,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form))
,libs));
if(temp__4425__auto___12863){
var xs_12864 = temp__4425__auto___12863;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_12864),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_12864,temp__4425__auto___12863,vec__12857,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form){
return (function (p1__12846_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__12846_SHARP_));
});})(xs_12864,temp__4425__auto___12863,vec__12857,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form))
,xs_12864)));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form){
return (function (p__12858){
var vec__12859 = p__12858;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12859,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.cst$kw$refer_DASH_clojure);
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__12848,___$2,name,args,form))
,args__$2));
var map__12850__$1 = ((((!((map__12850 == null)))?((((map__12850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12850):map__12850);
var params = map__12850__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12850__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12850__$1,cljs.core.cst$kw$require);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12850__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12850__$1,cljs.core.cst$kw$require_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12850__$1,cljs.core.cst$kw$import);
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$name,name__$2,cljs.core.cst$kw$doc,(function (){var or__4498__auto__ = docstring;
if(or__4498__auto__){
return or__4498__auto__;
} else {
return mdocstr;
}
})(),cljs.core.cst$kw$excludes,excludes,cljs.core.cst$kw$use_DASH_macros,use_macros,cljs.core.cst$kw$require_DASH_macros,require_macros,cljs.core.cst$kw$uses,uses,cljs.core.cst$kw$requires,requires,cljs.core.cst$kw$imports,imports], null);
var ns_info__$1 = ((cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(form_meta))?(function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name__$2], null));
if((cljs.core.count(ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$imports], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ns_info_SINGLEQUOTE_,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([cljs.core.select_keys(ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys(ns_info,merge_keys)], 0))], 0));
} else {
return ns_info;
}
})():ns_info);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name__$2], null),cljs.core.merge,cljs.core.array_seq([ns_info__$1], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)),cljs.core.cst$kw$reload,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)),cljs.core.cst$kw$reloads,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__12861 = ns_info__$1;
var G__12861__$1 = (((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__12861,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),((function (G__12861,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__12850,map__12850__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__12848,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use),true], true, false));
});})(G__12861,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__12850,map__12850__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__12848,___$2,name,args,form))
):G__12861);
var G__12861__$2 = (((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__12861__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),((function (G__12861,G__12861__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__12850,map__12850__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__12848,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require),true], true, false));
});})(G__12861,G__12861__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__12850,map__12850__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__12848,___$2,name,args,form))
):G__12861__$1);
return G__12861__$2;
})()], 0));
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__12865){
var vec__12869 = p__12865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869,(0),null);
var tsym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869,(2),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869,(3),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869,(4),null);
var form = vec__12869;
var t = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tsym));
var locals = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (t,vec__12869,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,fld,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$field,cljs.core.cst$kw$column,cljs.core.cst$kw$unsynchronized_DASH_mutable,cljs.core.cst$kw$line,cljs.core.cst$kw$tag,cljs.core.cst$kw$mutable,cljs.core.cst$kw$volatile_DASH_mutable,cljs.core.cst$kw$shadow],[fld,true,cljs.analyzer.get_col(fld,env),cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.analyzer.get_line(fld,env),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(fld) : m.call(null,fld))]));
});})(t,vec__12869,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord_STAR_,op))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null)):fields));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$defs,tsym], null),((function (t,locals,vec__12869,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4498__auto__ = m;
if(or__4498__auto__){
return or__4498__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$name,t,cljs.core.array_seq([cljs.core.cst$kw$type,true,cljs.core.cst$kw$num_DASH_fields,cljs.core.count(fields),cljs.core.cst$kw$record,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord_STAR_,op)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tsym),cljs.core.cst$kw$protocols),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocols,cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym))], null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(tsym,env)], 0));
});})(t,locals,vec__12869,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$t,t,cljs.core.cst$kw$fields,fields,cljs.core.cst$kw$pmasks,pmasks,cljs.core.cst$kw$body,(function (){var G__12870 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$locals,locals);
var G__12871 = body;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12870,G__12871) : cljs.analyzer.analyze.call(null,G__12870,G__12871));
})()], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$deftype_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$deftype_STAR_,env,form);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$defrecord_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$defrecord_STAR_,env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__12872_SHARP_){
return cljs.core.boolean$((function (){var and__4486__auto__ = (p1__12872_SHARP_ instanceof cljs.core.Symbol);
if(and__4486__auto__){
return cljs.core.re_matches(/^-.*/,cljs.core.name(p1__12872_SHARP_));
} else {
return and__4486__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__12873){
var vec__12875 = p__12873;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?cljs.core.cst$kw$cljs$analyzer_SLASH_error:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
),((cljs.analyzer.property_symbol_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_property:(((member instanceof cljs.core.Symbol))?cljs.core.cst$kw$cljs$analyzer_SLASH_symbol:((cljs.core.seq_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_list:cljs.core.cst$kw$cljs$analyzer_SLASH_error
))),(((args == null))?cljs.core.List.EMPTY:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__5392__auto__ = (function (){var G__12877 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12877) : cljs.core.atom.call(null,G__12877));
})();
var prefer_table__5393__auto__ = (function (){var G__12878 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12878) : cljs.core.atom.call(null,G__12878));
})();
var method_cache__5394__auto__ = (function (){var G__12879 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12879) : cljs.core.atom.call(null,G__12879));
})();
var cached_hierarchy__5395__auto__ = (function (){var G__12880 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12880) : cljs.core.atom.call(null,G__12880));
})();
var hierarchy__5396__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","build-dot-form"),((function (method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__){
return (function (p1__12876_SHARP_){
return cljs.analyzer.classify_dot_form(p1__12876_SHARP_);
});})(method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__))
,cljs.core.cst$kw$default,hierarchy__5396__auto__,method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__));
})();
}
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.List.EMPTY], null),(function (p__12881){
var vec__12882 = p__12881;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12882,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12882,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12882,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_access,cljs.core.cst$kw$target,target,cljs.core.cst$kw$field,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop).substring((1)))], null);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.cst$kw$cljs$analyzer_SLASH_list], null),(function (p__12883){
var vec__12884 = p__12883;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12884,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12884,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12884,(2),null);
throw (new Error([cljs.core.str("Cannot provide arguments "),cljs.core.str(args),cljs.core.str(" on property access "),cljs.core.str(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 * compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,meth,cljs.core.cst$kw$args,args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,cljs.core.first(meth),cljs.core.cst$kw$args,args], null);
}
});
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.cst$kw$cljs$analyzer_SLASH_expr], null),(function (p__12885){
var vec__12886 = p__12885;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12886,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12886,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12886,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.List.EMPTY], null),(function (p__12887){
var vec__12888 = p__12887;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12888,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12888,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12888,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_list,cljs.core.List.EMPTY], null),(function (p__12889){
var vec__12890 = p__12889;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(0),null);
var meth_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(2),null);
return cljs.analyzer.build_method_call(target,cljs.core.first(meth_expr),cljs.core.rest(meth_expr));
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (dot_form){
throw (new Error([cljs.core.str("Unknown dot form of "),cljs.core.str(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$,dot_form)),cljs.core.str(" with classification "),cljs.core.str(cljs.analyzer.classify_dot_form(dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__12895 = (cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1(v) : cljs.analyzer.build_dot_form.call(null,v));
var map__12895__$1 = ((((!((map__12895 == null)))?((((map__12895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12895):map__12895);
var dot_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12895__$1,cljs.core.cst$kw$dot_DASH_action);
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12895__$1,cljs.core.cst$kw$target);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12895__$1,cljs.core.cst$kw$method);
var field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12895__$1,cljs.core.cst$kw$field);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12895__$1,cljs.core.cst$kw$args);
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var targetexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze.call(null,enve,target__$1));
var form_meta = cljs.core.meta(form);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
var G__12897 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__12897) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$dot,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$field,field__$1,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,tag], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12897,v,map__12895,map__12895__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag){
return (function (p1__12891_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__12891_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__12891_SHARP_));
});})(G__12897,v,map__12895,map__12895__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag))
,args);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs);
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$op,cljs.core.cst$kw$dot,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$method,method,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,tag], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dot_action)].join('')));

}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$$,(function (_,env,p__12899,___$1,___$2){
var vec__12900 = p__12899;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(1),null);
var vec__12901 = cljs.core.nthnext(vec__12900,(2));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12901,(0),null);
var member_PLUS_ = cljs.core.nthnext(vec__12901,(1));
var form = vec__12900;
var _STAR_recur_frames_STAR_12902 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot(env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12902;
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta(form);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
if(!((tag == null))){
return tag;
} else {
if(cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return cljs.core.cst$sym$number;
} else {
return null;
}
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
var inner = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs.core.cons(inner,cljs$analyzer$js_star_interp(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1))))));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs$analyzer$js_star_seg(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)))));
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$any,null,cljs.core.cst$sym$long,null,cljs.core.cst$sym$double,null,cljs.core.cst$sym$number,null], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(((t instanceof cljs.core.Symbol)) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NUMERIC_SET,t) == null)))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_(t)){
return (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$number)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$long)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$double)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$any));
} else {
return null;
}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var argexprs = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve){
return (function (p1__12906_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__12906_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__12906_SHARP_));
});})(enve))
,args));
var form_meta = cljs.core.meta(form);
var segs = cljs.analyzer.js_star_seg(jsform);
var tag = cljs.analyzer.get_js_tag(form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
if(numeric === true){
var types_12908 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__12907_SHARP_){
return cljs.analyzer.infer_tag(env,p1__12907_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,types_12908)){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_arithmetic,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$types,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types_12908)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$args,cljs.core.cst$kw$children,cljs.core.cst$kw$numeric,cljs.core.cst$kw$segs,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$js_DASH_op,cljs.core.cst$kw$form,cljs.core.cst$kw$tag],[argexprs,argexprs,numeric,segs,cljs.core.cst$kw$js,env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_12910 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_(env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12910;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$js_STAR_,(function (op,env,p__12911,_,___$1){
var vec__12912 = p__12911;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12912,(0),null);
var jsform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12912,(1),null);
var args = cljs.core.nthnext(vec__12912,(2));
var form = vec__12912;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid js* form");
}

if(!((args == null))){
return cljs.analyzer.analyze_js_star(env,jsform,args,form);
} else {
var code = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.analyzer.js_star_interp(env,jsform));
var tag = cljs.analyzer.get_js_tag(form);
var form_meta = cljs.core.meta(form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$code,code,cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$numeric,numeric], null);
}
}));
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(f){
return cljs.core.contains_QMARK_(cljs.core.meta(f),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed);
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op,exprs));
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([argc], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__12914){
var vec__12920 = p__12914;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12920,(0),null);
var args = cljs.core.nthnext(vec__12920,(1));
var form = vec__12920;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var fexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,f) : cljs.analyzer.analyze.call(null,enve,f));
var argc = cljs.core.count(args);
var fn_var_QMARK_ = cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(fexpr));
if(fn_var_QMARK_){
var map__12921_12925 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr);
var map__12921_12926__$1 = ((((!((map__12921_12925 == null)))?((((map__12921_12925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12921_12925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12921_12925):map__12921_12925);
var variadic_12927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921_12926__$1,cljs.core.cst$kw$variadic);
var max_fixed_arity_12928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921_12926__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var method_params_12929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921_12926__$1,cljs.core.cst$kw$method_DASH_params);
var name_12930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921_12926__$1,cljs.core.cst$kw$name);
if((!(cljs.analyzer.valid_arity_QMARK_(argc,method_params_12929))) && ((!(variadic_12927)) || ((variadic_12927) && ((argc < max_fixed_arity_12928))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name_12930,cljs.core.cst$kw$argc,argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.first(form),cljs.core.cst$kw$argc,argc], null));
} else {
}

var deprecated_QMARK__12931 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__12932 = cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if((cljs.core.boolean$(deprecated_QMARK__12931)) && (!(cljs.core.boolean$(no_warn_QMARK__12932)))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
} else {
}

if((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr)) == null)){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invoke_DASH_ctor,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
}

var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__12920,f,args,form){
return (function (p1__12913_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__12913_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__12913_SHARP_));
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__12920,f,args,form))
;
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ana_expr,args);
if((function (){var or__4498__auto__ = !(cljs.core.boolean$(cljs.analyzer._STAR_cljs_static_fns_STAR_));
if(or__4498__auto__){
return or__4498__auto__;
} else {
var or__4498__auto____$1 = !((f instanceof cljs.core.Symbol));
if(or__4498__auto____$1){
return or__4498__auto____$1;
} else {
var or__4498__auto____$2 = fn_var_QMARK_;
if(or__4498__auto____$2){
return or__4498__auto____$2;
} else {
return (cljs.analyzer.analyzed_QMARK_(f)) || (cljs.analyzer.all_values_QMARK_(argexprs));
}
}
}
})()){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$invoke,cljs.core.cst$kw$form,form,cljs.core.cst$kw$f,fexpr,cljs.core.cst$kw$args,cljs.core.vec(argexprs),cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.cljs$core$IFn$_invoke$arity$2(argc,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var G__12923 = env;
var G__12924 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arg_syms,args))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true)),arg_syms))))], 0))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__12923,G__12924) : cljs.analyzer.analyze.call(null,G__12923,G__12924));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_12934 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_(env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12934;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

var G__12938 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Symbol], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__12938) : cljs.analyzer.analyze_wrap_meta.call(null,G__12938));
} else {
var map__12939 = cljs.core.meta(sym);
var map__12939__$1 = ((((!((map__12939 == null)))?((((map__12939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12939):map__12939);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12939__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12939__$1,cljs.core.cst$kw$column);
var env__$1 = ((!((line == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$line,line):env);
var env__$2 = ((!((column == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$column,column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env__$2,cljs.core.cst$kw$form,sym], null);
var lcls = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env__$2);
var lb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym);
if(!((lb == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.array_seq([cljs.core.cst$kw$info,lb], 0));
} else {
if(!(cljs.core.cst$kw$def_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$2) === true)){
var sym_meta = cljs.core.meta(sym);
var info = ((!(cljs.core.contains_QMARK_(sym_meta,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed)))?cljs.analyzer.resolve_existing_var(env__$2,sym):cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.array_seq([cljs.core.cst$kw$info,info], 0));
} else {
var info = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.array_seq([cljs.core.cst$kw$info,info], 0));
}
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes,sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$excludes,sym) == null));
}
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$use_DASH_macros,sym) == null));
}
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
if(("clojure.core" === nstr)){
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr)){
return cljs.core.find_macros_ns(cljs.core.cst$sym$cljs$repl);
} else {
if(goog.string.contains(nstr,".")){
return cljs.core.find_macros_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr));
} else {
var G__12942 = env;
var G__12942__$1 = (((G__12942 == null))?null:cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(G__12942));
var G__12942__$2 = (((G__12942__$1 == null))?null:cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(G__12942__$1));
var G__12942__$3 = (((G__12942__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__12942__$2,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr)));
var G__12942__$4 = (((G__12942__$3 == null))?null:cljs.core.find_ns(G__12942__$3));
return G__12942__$4;

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$locals,sym) == null))) || ((cljs.analyzer.excluded_QMARK_(env,sym)) && (!(cljs.analyzer.used_QMARK_(env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace(sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns(env,nstr);
if((ns == null)){
return null;
} else {
return ns.findInternedVar(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
}
} else {
var nsym = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym);
if(!((nsym == null))){
return cljs.core.find_macros_ns(nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_(sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first(form);
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return form;
} else {
var mac_var = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander(op,env):null);
if(!((mac_var == null))){
var form_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mac_var) : cljs.core.deref.call(null,mac_var)),form,env,cljs.core.rest(form));
if(cljs.analyzer.cljs_seq_QMARK_(form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first(form_SINGLEQUOTE_);
var sym = cljs.core.first(form);
if(cljs.core.symbol_identical_QMARK_(sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = ((cljs.core.namespace(sym))?sym:cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str(sym)].join('')));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$js_DASH_op,sym__$1], null);
var js_op__$1 = ((cljs.core.cst$kw$cljs$analyzer_SLASH_numeric.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac_var)) === true)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(js_op,cljs.core.cst$kw$numeric,true):js_op);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
} else {
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str(op)].join('');
if(("." === opname.charAt((0)))){
var vec__12944 = cljs.core.next(form);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12944,(0),null);
var args = cljs.core.nthnext(vec__12944,(1));
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.analyzer.DOT_SYM,target,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(opname,(1))),args),cljs.core.meta(form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.NEW_SYM,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(opname,(0),(cljs.core.count(opname) - (1)))),cljs.core.next(form)),cljs.core.meta(form));
} else {
return form;

}
}
} else {
return form;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__5919__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_(env,form);
}catch (e12946){var err__5955__auto__ = e12946;
if(cljs.analyzer.analysis_error_QMARK_(err__5955__auto__)){
throw err__5955__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__5955__auto__.message,err__5955__auto__);
}
}}finally {if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return (cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5 ? cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5(op,env,form,name,opts) : cljs.analyzer.parse.call(null,op,env,form,name,opts));
} else {
return cljs.analyzer.parse_invoke(env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_(op,env,form,name,opts);
}catch (e12948){var err__5955__auto__ = e12948;
if(cljs.analyzer.analysis_error_QMARK_(err__5955__auto__)){
throw err__5955__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__5955__auto__.message,err__5955__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(){
var args12949 = [];
var len__5537__auto___12952 = arguments.length;
var i__5538__auto___12953 = (0);
while(true){
if((i__5538__auto___12953 < len__5537__auto___12952)){
args12949.push((arguments[i__5538__auto___12953]));

var G__12954 = (i__5538__auto___12953 + (1));
i__5538__auto___12953 = G__12954;
continue;
} else {
}
break;
}

var G__12951 = args12949.length;
switch (G__12951) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12949.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
return (cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze_list.call(null,env,form));
} else {
var line = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var line__$1 = (((line == null))?cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env):null);
var col = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var col__$1 = (((col == null))?cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env):null);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$line,line__$1,cljs.core.array_seq([cljs.core.cst$kw$column,col__$1], 0));
var op = cljs.core.first(form);
if((op == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1(env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap(op,env__$1,form,name,opts);
} else {
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,mform,name,opts) : cljs.analyzer.analyze.call(null,env__$1,mform,name,opts));
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;
cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ks = (function (){var _STAR_recur_frames_STAR_12961 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12961,expr_env){
return (function (p1__12956_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__12956_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__12956_SHARP_));
});})(_STAR_recur_frames_STAR_12961,expr_env))
,cljs.core.keys(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12961;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_12962 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12962,expr_env,ks){
return (function (p1__12957_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__12957_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__12957_SHARP_));
});})(_STAR_recur_frames_STAR_12962,expr_env,ks))
,cljs.core.vals(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12962;
}})();
var G__12963 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$map,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$keys,ks,cljs.core.cst$kw$vals,vs,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks,vs)),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IMap], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__12963) : cljs.analyzer.analyze_wrap_meta.call(null,G__12963));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_12967 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12967,expr_env){
return (function (p1__12964_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__12964_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__12964_SHARP_));
});})(_STAR_recur_frames_STAR_12967,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12967;
}})();
var G__12968 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$list,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IList], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__12968) : cljs.analyzer.analyze_wrap_meta.call(null,G__12968));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_12972 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12972,expr_env){
return (function (p1__12969_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__12969_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__12969_SHARP_));
});})(_STAR_recur_frames_STAR_12972,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12972;
}})();
var G__12973 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$vector,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IVector], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__12973) : cljs.analyzer.analyze_wrap_meta.call(null,G__12973));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_12977 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12977,expr_env){
return (function (p1__12974_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__12974_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__12974_SHARP_));
});})(_STAR_recur_frames_STAR_12977,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12977;
}})();
var G__12978 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$set,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_ISet], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__12978) : cljs.analyzer.analyze_wrap_meta.call(null,G__12978));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = ((cljs.core.map_QMARK_(val))?cljs.core.zipmap(cljs.core.keys(val),(function (){var _STAR_recur_frames_STAR_12983 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12983,val,expr_env){
return (function (p1__12979_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__12979_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__12979_SHARP_));
});})(_STAR_recur_frames_STAR_12983,val,expr_env))
,cljs.core.vals(val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12983;
}})()):(function (){var _STAR_recur_frames_STAR_12984 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_12984,val,expr_env){
return (function (p1__12980_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__12980_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__12980_SHARP_));
});})(_STAR_recur_frames_STAR_12984,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_12984;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_value,cljs.core.cst$kw$js_DASH_type,((cljs.core.map_QMARK_(val))?cljs.core.cst$kw$object:cljs.core.cst$kw$array),cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,((cljs.core.map_QMARK_(val))?cljs.core.cst$sym$object:cljs.core.cst$sym$array)], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$file,cljs.core.array_seq([cljs.core.cst$kw$line,cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$source], 0));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_reader_meta(cljs.core.meta(form));
if(cljs.core.seq(m)){
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in(expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$context], null),cljs.core.cst$kw$expr);
var meta_expr = cljs.analyzer.analyze_map(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$meta,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$meta,meta_expr,cljs.core.cst$kw$expr,expr__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast,_){
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(ast);
if((tag == null)){
var tag__$1 = cljs.analyzer.infer_tag(env,ast);
if(!((tag__$1 == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$tag,tag__$1);
} else {
return ast;
}
} else {
return ast;
}
});
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol(env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_(form)) && (cljs.core.seq(form))){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,opts);
} else {
if(cljs.analyzer.cljs_map_QMARK_(form)){
return cljs.analyzer.analyze_map(env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_(form)){
return cljs.analyzer.analyze_vector(env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_(form)){
return cljs.analyzer.analyze_set(env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword(env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value(env,form);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list(env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__12986 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form], null);
var G__12986__$1 = ((tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12986,cljs.core.cst$kw$tag,tag):G__12986);
return G__12986__$1;

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq(form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form(env,form__$1,name,opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return (pass.cljs$core$IFn$_invoke$arity$3 ? pass.cljs$core$IFn$_invoke$arity$3(env,ast__$1,opts) : pass.call(null,env,ast__$1,opts));
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 * (one of :statement, :expr, :return), :ns (a symbol naming the
 * compilation ns)}, and form, returns an expression object (a map
 * containing at least :form, :op and :env keys). If expr has any (immediately)
 * nested exprs, must have :children [exprs...] entry. This will
 * facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(){
var args12987 = [];
var len__5537__auto___12992 = arguments.length;
var i__5538__auto___12993 = (0);
while(true){
if((i__5538__auto___12993 < len__5537__auto___12992)){
args12987.push((arguments[i__5538__auto___12993]));

var G__12994 = (i__5538__auto___12993 + (1));
i__5538__auto___12993 = G__12994;
continue;
} else {
}
break;
}

var G__12989 = args12987.length;
switch (G__12989) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12987.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__5919__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{var _STAR_alias_map_STAR_12991 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__4498__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(or__4498__auto__){
return or__4498__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_12991;
}}catch (e12990){var err__5955__auto__ = e12990;
if(cljs.analyzer.analysis_error_QMARK_(err__5955__auto__)){
throw err__5955__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__5955__auto__.message,err__5955__auto__);
}
}}finally {if((val__5919__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.analyzer._STAR_cljs_ns_STAR_], null)], null),s));
});

//# sourceMappingURL=analyzer.js.map