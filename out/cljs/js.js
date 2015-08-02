// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(){
var args__5544__auto__ = [];
var len__5537__auto___9763 = arguments.length;
var i__5538__auto___9764 = (0);
while(true){
if((i__5538__auto___9764 < len__5537__auto___9763)){
args__5544__auto__.push((arguments[i__5538__auto___9764]));

var G__9765 = (i__5538__auto___9764 + (1));
i__5538__auto___9764 = G__9765;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((0) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((0)),(0))):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5545__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_9762 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9762;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq9761){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9761));
});
/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 * Whatever function *load-fn* is bound to will be passed two arguments - a
 * map and a callback function: The map will have the following keys:
 * 
 * :name   - the name of the library (a symbol)
 * :macros - modifier signaling a macros namespace load
 * :path   - munged relative library path (a string)
 * 
 * It is up to the implementor to correctly resolve the corresponding .cljs,
 * .cljc, or .js resource (the order must be respected). If :macros is true
 * resolution should only consider .clj or .cljc resources (the order must be
 * respected). Upon resolution the callback should be invoked with a map
 * containing the following keys:
 * 
 * :lang       - the language, :clj or :js
 * :source     - the source of the library (a string)
 * :cache      - optional, if a :clj namespace has been precompiled to :js, can
 * give an analysis cache for faster loads.
 * :source-map - optional, if a :clj namespace has been precompiled to :js, can
 * give a V3 source map JSON
 * 
 * If the resource could not be resolved, the callback should be invoked with
 * nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(name,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 * source. Whatever function *eval-fn* is bound to will be passed a map
 * containing the following keys:
 * 
 * :source - the source of the library (string)
 * :name   - used to unique identify the script (symbol)
 * :cache  - if the source was originally ClojureScript, will be given the
 * analysis cache.
 * 
 * The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(js_source){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__9766){
var map__9769 = p__9766;
var map__9769__$1 = ((((!((map__9769 == null)))?((((map__9769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9769):map__9769);
var resource = map__9769__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9769__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(){
var args9771 = [];
var len__5537__auto___9776 = arguments.length;
var i__5538__auto___9777 = (0);
while(true){
if((i__5538__auto___9777 < len__5537__auto___9776)){
args9771.push((arguments[i__5538__auto___9777]));

var G__9778 = (i__5538__auto___9777 + (1));
i__5538__auto___9777 = G__9778;
continue;
} else {
}
break;
}

var G__9773 = args9771.length;
switch (G__9773) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9771.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__9774 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__9774,((function (G__9774){
return (function (state){
});})(G__9774))
);

return G__9774;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__9775 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__9775,init);

return G__9775;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;
cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
var G__9781 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9781) : cljs.core.atom.call(null,G__9781));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str(pre),cljs.core.str(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__9782){
var map__9787 = p__9782;
var map__9787__$1 = ((((!((map__9787 == null)))?((((map__9787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9787):map__9787);
var opts = map__9787__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9787__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9787__$1,cljs.core.cst$kw$asset_DASH_path);
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace(cljs.core.munge([cljs.core.str(name)].join('')),".","/"):[cljs.core.str("cljs-"),cljs.core.str(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__4498__auto__ = output_dir;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__9789 = [cljs.core.str(smn),cljs.core.str(".cljs?rel="),cljs.core.str(ts)].join('');
var G__9789__$1 = (cljs.core.truth_(out)?cljs.js.prefix(G__9789,[cljs.core.str(out),cljs.core.str("/")].join('')):G__9789);
return G__9789__$1;
})();
var file = (function (){var G__9790 = [cljs.core.str(smn),cljs.core.str(".js?rel="),cljs.core.str(ts)].join('');
var G__9790__$1 = (cljs.core.truth_(out)?cljs.js.prefix(G__9790,[cljs.core.str(out),cljs.core.str("/")].join('')):G__9790);
return G__9790__$1;
})();
var json = cljs.source_map.encode(new cljs.core.PersistentArrayMap.fromArray([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)], true, false),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,name], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append([cljs.core.str("\n//# sourceURL="),cljs.core.str(file),cljs.core.str("\n//# sourceMappingURL=data:application/json;base64,"),cljs.core.str(goog.crypt.base64.encodeString(json))].join(''));
});
cljs.js._STAR_loaded_STAR_ = (function (){var G__9791 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9791) : cljs.core.atom.call(null,G__9791));
})();
cljs.js.require = (function cljs$js$require(){
var args9792 = [];
var len__5537__auto___9821 = arguments.length;
var i__5538__auto___9822 = (0);
while(true){
if((i__5538__auto___9822 < len__5537__auto___9821)){
args9792.push((arguments[i__5538__auto___9822]));

var G__9823 = (i__5538__auto___9822 + (1));
i__5538__auto___9822 = G__9823;
continue;
} else {
}
break;
}

var G__9794 = args9792.length;
switch (G__9794) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9792.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var name__$1 = (function (){var G__9795 = name;
var G__9795__$1 = (cljs.core.truth_(cljs.core.cst$kw$macro_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.analyzer.macro_ns_name(G__9795):G__9795);
return G__9795__$1;
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,name__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
var G__9796_9825 = cljs.js._STAR_loaded_STAR_;
var G__9797_9826 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9796_9825,G__9797_9826) : cljs.core.reset_BANG_.call(null,G__9796_9825,G__9797_9826));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading "),cljs.core.str(name__$1),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)),cljs.core.str(" namespace")].join('')], 0));
} else {
}

if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.js._STAR_loaded_STAR_) : cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_)),name__$1))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name__$1,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name__$1)], null),((function (env,bound_vars__$1,name__$1){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$resource),cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$resource))], 0)))].join('')));
}

if(cljs.core.truth_(resource)){
var map__9800 = resource;
var map__9800__$1 = ((((!((map__9800 == null)))?((((map__9800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9800):map__9800);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9800__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9800__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9800__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9800__$1,cljs.core.cst$kw$source_DASH_map);
var pred__9802 = cljs.core._EQ_;
var expr__9803 = lang;
if(cljs.core.truth_((pred__9802.cljs$core$IFn$_invoke$arity$2 ? pred__9802.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clj,expr__9803) : pred__9802.call(null,cljs.core.cst$kw$clj,expr__9803)))){
var G__9806 = bound_vars__$1;
var G__9807 = source;
var G__9808 = name__$1;
var G__9809 = opts;
var G__9810 = ((function (G__9806,G__9807,G__9808,G__9809,pred__9802,expr__9803,map__9800,map__9800__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,name__$1);

var G__9811 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9811) : cb.call(null,G__9811));
}
});})(G__9806,G__9807,G__9808,G__9809,pred__9802,expr__9803,map__9800,map__9800__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1))
;
return (cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__9806,G__9807,G__9808,G__9809,G__9810) : cljs.js.eval_str_STAR_.call(null,G__9806,G__9807,G__9808,G__9809,G__9810));
} else {
if(cljs.core.truth_((pred__9802.cljs$core$IFn$_invoke$arity$2 ? pred__9802.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$js,expr__9803) : pred__9802.call(null,cljs.core.cst$kw$js,expr__9803)))){
var res = (function (){try{cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name__$1,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name__$1,source_map);
} else {
return null;
}
}catch (e9812){var cause = e9812;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str("Could not require "),cljs.core.str(name__$1)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,name__$1);

var G__9813 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9813) : cb.call(null,G__9813));
}
} else {
var G__9814 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9814) : cb.call(null,G__9814));
}
}
} else {
var G__9817 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__9818 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__9819 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name__$1,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name__$1)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__9818,G__9819) : cljs.analyzer.error_message.call(null,G__9818,G__9819));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9817) : cb.call(null,G__9817));
}
});})(env,bound_vars__$1,name__$1))
);
}catch (e9798){var cause = e9798;
var G__9799 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str("Could not require "),cljs.core.str(name__$1)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9799) : cb.call(null,G__9799));
}} else {
var G__9820 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9820) : cb.call(null,G__9820));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.load_deps = (function cljs$js$load_deps(){
var args9828 = [];
var len__5537__auto___9833 = arguments.length;
var i__5538__auto___9834 = (0);
while(true){
if((i__5538__auto___9834 < len__5537__auto___9833)){
args9828.push((arguments[i__5538__auto___9834]));

var G__9835 = (i__5538__auto___9834 + (1));
i__5538__auto___9834 = G__9835;
continue;
} else {
}
break;
}

var G__9830 = args9828.length;
switch (G__9830) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9828.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return (cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 ? cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb) : cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb));
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR_9831 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_9831){
return (function (p1__9827_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__9827_SHARP_));
});})(_STAR_cljs_dep_set_STAR_9831))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__9827_SHARP_], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$contains_QMARK_,cljs.core.list(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.core.cst$sym$bound_DASH_vars),cljs.core.cst$sym$p1__9827_SHARP_))),cljs.core.cst$sym$deps)], 0)))].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars,dep,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$ns),((function (dep,_STAR_cljs_dep_set_STAR_9831){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(dep,_STAR_cljs_dep_set_STAR_9831))
);
} else {
var G__9832 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9832) : cb.call(null,G__9832));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_9831;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 6;
cljs.js.analyze_deps = (function cljs$js$analyze_deps(){
var args9838 = [];
var len__5537__auto___9861 = arguments.length;
var i__5538__auto___9862 = (0);
while(true){
if((i__5538__auto___9862 < len__5537__auto___9861)){
args9838.push((arguments[i__5538__auto___9862]));

var G__9863 = (i__5538__auto___9862 + (1));
i__5538__auto___9862 = G__9863;
continue;
} else {
}
break;
}

var G__9840 = args9838.length;
switch (G__9840) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9838.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var compiler = (function (){var G__9841 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9841) : cljs.core.deref.call(null,G__9841));
})();
var _STAR_cljs_dep_set_STAR_9842 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_9842,compiler){
return (function (p1__9837_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__9837_SHARP_));
});})(_STAR_cljs_dep_set_STAR_9842,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__9837_SHARP_], null),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$contains_QMARK_,cljs.core.list(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.core.cst$sym$bound_DASH_vars),cljs.core.cst$sym$p1__9837_SHARP_))),cljs.core.cst$sym$deps)], 0)))].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{return cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars).call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null),((function (dep,_STAR_cljs_dep_set_STAR_9842,compiler){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$resource),cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$resource))], 0)))].join('')));
}

if(cljs.core.truth_(resource)){
var map__9845 = resource;
var map__9845__$1 = ((((!((map__9845 == null)))?((((map__9845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9845):map__9845);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$source);
var pred__9847 = cljs.core._EQ_;
var expr__9848 = lang;
if(cljs.core.truth_((pred__9847.cljs$core$IFn$_invoke$arity$2 ? pred__9847.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clj,expr__9848) : pred__9847.call(null,cljs.core.cst$kw$clj,expr__9848)))){
var G__9850 = bound_vars;
var G__9851 = source;
var G__9852 = name;
var G__9853 = opts;
var G__9854 = ((function (G__9850,G__9851,G__9852,G__9853,pred__9847,expr__9848,map__9845,map__9845__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_9842,compiler){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(G__9850,G__9851,G__9852,G__9853,pred__9847,expr__9848,map__9845,map__9845__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_9842,compiler))
;
return (cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__9850,G__9851,G__9852,G__9853,G__9854) : cljs.js.analyze_str_STAR_.call(null,G__9850,G__9851,G__9852,G__9853,G__9854));
} else {
if(cljs.core.truth_((pred__9847.cljs$core$IFn$_invoke$arity$2 ? pred__9847.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$js,expr__9848) : pred__9847.call(null,cljs.core.cst$kw$js,expr__9848)))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
}
}
} else {
var G__9857 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__9858 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__9859 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__9858,G__9859) : cljs.analyzer.error_message.call(null,G__9858,G__9859));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9857) : cb.call(null,G__9857));
}
});})(dep,_STAR_cljs_dep_set_STAR_9842,compiler))
);
}catch (e9843){var cause = e9843;
var G__9844 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not analyze dep "),cljs.core.str(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9844) : cb.call(null,G__9844));
}} else {
var G__9860 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9860) : cb.call(null,G__9860));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_9842;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;
cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__4498__auto__ = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(reload) : k.call(null,reload));
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
var or__4498__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4498__auto____$1)){
return or__4498__auto____$1;
} else {
var and__4486__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__4486__auto__){
var and__4486__auto____$1 = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4486__auto____$1)){
return cljs.core.cst$kw$reload;
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
}
}
})();
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$ns),((function (nsym,k__$1){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs$js$load_macros(bound_vars,k__$1,cljs.core.next(macros),reload,reloads,opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(nsym,k__$1))
);
} else {
var G__9873 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9873) : cb.call(null,G__9873));
}
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(){
var args9874 = [];
var len__5537__auto___9899 = arguments.length;
var i__5538__auto___9900 = (0);
while(true){
if((i__5538__auto___9900 < len__5537__auto___9899)){
args9874.push((arguments[i__5538__auto___9900]));

var G__9901 = (i__5538__auto___9900 + (1));
i__5538__auto___9900 = G__9901;
continue;
} else {
}
break;
}

var G__9876 = args9874.length;
switch (G__9876) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9874.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__9877,opts,cb){
var map__9878 = p__9877;
var map__9878__$1 = ((((!((map__9878 == null)))?((((map__9878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9878):map__9878);
var ast = map__9878__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9878__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,op)){
var map__9880 = ast;
var map__9880__$1 = ((((!((map__9880 == null)))?((((map__9880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9880):map__9880);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$deps);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$uses);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$requires);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$require_DASH_macros);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var check_uses_and_load_macros = ((function (map__9880,map__9880__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__9878,map__9878__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var res__$1 = (function (){try{if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core.seq(uses);
} else {
return and__4486__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses(uses,env);

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
} else {
return null;
}
}catch (e9894){var cause = e9894;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,reload,reloads,opts,((function (res__$1,map__9880,map__9880__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__9878,map__9878__$1,ast,op){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,reloads,reloads,opts,((function (res__$1,map__9880,map__9880__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__9878,map__9878__$1,ast,op){
return (function (res__$3){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$3))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$3) : cb.call(null,res__$3));
} else {
var res__$4 = (function (){try{if(cljs.core.seq(use_macros)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

cljs.analyzer.check_use_macros(use_macros,env);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e9895){var cause = e9895;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$4))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$4) : cb.call(null,res__$4));
} else {
var G__9896 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9896) : cb.call(null,G__9896));
}
}
});})(res__$1,map__9880,map__9880__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__9878,map__9878__$1,ast,op))
);
}
});})(res__$1,map__9880,map__9880__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__9878,map__9878__$1,ast,op))
);
} else {
var G__9897 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9897) : cb.call(null,G__9897));
}
}
}
});})(map__9880,map__9880__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__9878,map__9878__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4486__auto__ = load;
if(cljs.core.truth_(and__4486__auto__)){
return cljs.core.seq(deps);
} else {
return and__4486__auto__;
}
})())){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),check_uses_and_load_macros);
} else {
if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.not(load);
if(and__4486__auto__){
var and__4486__auto____$1 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4486__auto____$1)){
return cljs.core.seq(deps);
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),check_uses_and_load_macros);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));

}
}
} else {
var G__9898 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9898) : cb.call(null,G__9898));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__4498__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__9930 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__9930__$1 = (cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9930,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__9930);
return G__9930__$1;
})();
return ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_9943 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_9944 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_9945 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_9946 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_data_readers_STAR_9947 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_9948 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.analyzer._STAR_passes_STAR_ = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr)], null);
}catch (e9949){var cause = e9949;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__9950 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__9950__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9950,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__9950);
var G__9950__$2 = (cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9950__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true):G__9950__$1);
return G__9950__$2;
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e9951){var cause = e9951;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_9943,_STAR_cljs_ns_STAR_9944,_STAR_ns_STAR_9945,_STAR_passes_STAR_9946,_STAR_data_readers_STAR_9947,_STAR_source_map_data_STAR_9948,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_9943,_STAR_cljs_ns_STAR_9944,_STAR_ns_STAR_9945,_STAR_passes_STAR_9946,_STAR_data_readers_STAR_9947,_STAR_source_map_data_STAR_9948,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__9953 = ast;
var G__9954 = ns;
last_ast = G__9953;
ns = G__9954;
continue;
}
}
} else {
var G__9952 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,last_ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9952) : cb.call(null,G__9952));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_9948;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_9947;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_9946;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_9945;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_9944;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_9943;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
.call(null,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * source (string)
 * the ClojureScript source
 * 
 * name (symbol)
 * optional, the name of the source
 * 
 * opts (map)
 * compilation options.
 * 
 * :eval - the eval function to invoke, see *eval-fn*
 * :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 * callback, will be invoked with a map. If successful the map will contain
 * a key :value, the actual value is not meaningful. If unsuccessful the
 * map will contain a key :error with an ex-info instance describing the cause
 * of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(){
var args9955 = [];
var len__5537__auto___9958 = arguments.length;
var i__5538__auto___9959 = (0);
while(true){
if((i__5538__auto___9959 < len__5537__auto___9958)){
args9955.push((arguments[i__5538__auto___9959]));

var G__9960 = (i__5538__auto___9959 + (1));
i__5538__auto___9959 = G__9960;
continue;
} else {
}
break;
}

var G__9957 = args9955.length;
switch (G__9957) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9955.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$atom_QMARK_,cljs.core.cst$sym$state)], 0)))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$source)], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_name_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_opts_QMARK_,cljs.core.cst$sym$opts)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$cb)], 0)))].join('')));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_passes_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;
cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4498__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__9975 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__9975__$1 = (cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9975,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__9975);
return G__9975__$1;
})();
var _STAR_compiler_STAR_9976 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_9977 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_9978 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_9979 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_9980 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_9981 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__9982 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__9982__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9982,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__9982);
var G__9982__$2 = (cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9982__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true):G__9982__$1);
return G__9982__$2;
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e9983){var cause = e9983;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv,aenv__$1,res,_STAR_compiler_STAR_9976,_STAR_eval_fn_STAR_9977,_STAR_cljs_ns_STAR_9978,_STAR_ns_STAR_9979,_STAR_data_readers_STAR_9980,_STAR_source_map_data_STAR_9981,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var src = [cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\")")].join('');
var G__9984 = (cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9984) : cb.call(null,G__9984));
}
});})(ast,aenv,aenv__$1,res,_STAR_compiler_STAR_9976,_STAR_eval_fn_STAR_9977,_STAR_cljs_ns_STAR_9978,_STAR_ns_STAR_9979,_STAR_data_readers_STAR_9980,_STAR_source_map_data_STAR_9981,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__5453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9985_9988 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9986_9989 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9985_9988,_STAR_print_fn_STAR_9986_9989,sb__5453__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_9976,_STAR_eval_fn_STAR_9977,_STAR_cljs_ns_STAR_9978,_STAR_ns_STAR_9979,_STAR_data_readers_STAR_9980,_STAR_source_map_data_STAR_9981,the_ns,bound_vars__$1){
return (function (x__5454__auto__){
return sb__5453__auto__.append(x__5454__auto__);
});})(_STAR_print_newline_STAR_9985_9988,_STAR_print_fn_STAR_9986_9989,sb__5453__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_9976,_STAR_eval_fn_STAR_9977,_STAR_cljs_ns_STAR_9978,_STAR_ns_STAR_9979,_STAR_data_readers_STAR_9980,_STAR_source_map_data_STAR_9981,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9986_9989;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9985_9988;
}
return [cljs.core.str(sb__5453__auto__)].join('');
})();
var G__9987 = (cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__9987) : cb.call(null,G__9987));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_9981;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_9980;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_9979;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_9978;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_9977;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_9976;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * form (s-expr)
 * the ClojureScript source
 * 
 * opts (map)
 * compilation options.
 * 
 * :eval - the eval function to invoke, see *eval-fn*
 * :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 * callback, will be invoked with a map. If successful the map will contain
 * a :value key with the result of evalution. If unsuccessful the map wil
 * contain a :error key with an ex-info instance describing the cause of
 * failure.
 */
cljs.js.eval = (function cljs$js$eval(){
var args9990 = [];
var len__5537__auto___9993 = arguments.length;
var i__5538__auto___9994 = (0);
while(true){
if((i__5538__auto___9994 < len__5537__auto___9993)){
args9990.push((arguments[i__5538__auto___9994]));

var G__9995 = (i__5538__auto___9994 + (1));
i__5538__auto___9994 = G__9995;
continue;
} else {
}
break;
}

var G__9992 = args9990.length;
switch (G__9992) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9990.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;
cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4498__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__10027 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__10027__$1 = (cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10027,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__10027);
return G__10027__$1;
})();
return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_10041 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_10042 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_10043 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_10044 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_10045 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_10046 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr)], null);
}catch (e10047){var cause = e10047;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__10048 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__10048__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10048,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__10048);
var G__10048__$2 = (cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10048__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true):G__10048__$1);
return G__10048__$2;
})();
var ast = (function (){try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts);
}catch (e10049){var cause = e10049;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
sb.append((function (){var sb__5453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10050_10053 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10051_10054 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_10050_10053,_STAR_print_fn_STAR_10051_10054,sb__5453__auto__,aenv__$1,ast,form,res,_STAR_compiler_STAR_10041,_STAR_eval_fn_STAR_10042,_STAR_cljs_ns_STAR_10043,_STAR_ns_STAR_10044,_STAR_data_readers_STAR_10045,_STAR_source_map_data_STAR_10046,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__5454__auto__){
return sb__5453__auto__.append(x__5454__auto__);
});})(ns,_STAR_print_newline_STAR_10050_10053,_STAR_print_fn_STAR_10051_10054,sb__5453__auto__,aenv__$1,ast,form,res,_STAR_compiler_STAR_10041,_STAR_eval_fn_STAR_10042,_STAR_cljs_ns_STAR_10043,_STAR_ns_STAR_10044,_STAR_data_readers_STAR_10045,_STAR_source_map_data_STAR_10046,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10051_10054;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10050_10053;
}
return [cljs.core.str(sb__5453__auto__)].join('');
})());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (ns,aenv__$1,ast,form,res,_STAR_compiler_STAR_10041,_STAR_eval_fn_STAR_10042,_STAR_cljs_ns_STAR_10043,_STAR_ns_STAR_10044,_STAR_data_readers_STAR_10045,_STAR_source_map_data_STAR_10046,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
return cljs$js$compile_str_STAR__$_compile_loop(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ns,aenv__$1,ast,form,res,_STAR_compiler_STAR_10041,_STAR_eval_fn_STAR_10042,_STAR_cljs_ns_STAR_10043,_STAR_ns_STAR_10044,_STAR_data_readers_STAR_10045,_STAR_source_map_data_STAR_10046,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
var G__10055 = ns;
ns = G__10055;
continue;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var G__10052 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,sb.toString()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__10052) : cb.call(null,G__10052));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_10046;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_10045;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_10044;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_10043;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_10042;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10041;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * source (string)
 * the ClojureScript source
 * 
 * name (symbol)
 * optional, the name of the source
 * 
 * opts (map)
 * compilation options.
 * 
 * :load       - library resolution function, see *load-fn*
 * :source-map - set to true to generate inline source map information
 * 
 * cb (function)
 * callback, will be invoked with a map. If successful the map will contain
 * a key :value with the compilation result (string). If unsuccessful the map
 * will contain a key :error with an ex-info instance describing the cause
 * of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(){
var args10056 = [];
var len__5537__auto___10059 = arguments.length;
var i__5538__auto___10060 = (0);
while(true){
if((i__5538__auto___10060 < len__5537__auto___10059)){
args10056.push((arguments[i__5538__auto___10060]));

var G__10061 = (i__5538__auto___10060 + (1));
i__5538__auto___10060 = G__10061;
continue;
} else {
}
break;
}

var G__10058 = args10056.length;
switch (G__10058) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10056.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$atom_QMARK_,cljs.core.cst$sym$state)], 0)))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$source)], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_name_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_opts_QMARK_,cljs.core.cst$sym$opts)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$cb)], 0)))].join('')));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;
cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4498__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__10092 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__10092__$1 = (cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10092,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__10092);
return G__10092__$1;
})();
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Evaluating",name], 0));
} else {
}

return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_10105 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_10106 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_10107 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_10108 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_10109 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_10110 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr)], null);
}catch (e10111){var cause = e10111;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__10112 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__10112__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10112,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__10112);
var G__10112__$2 = (cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10112__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true):G__10112__$1);
return G__10112__$2;
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e10113){var cause = e10113;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
sb.append([cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\");\n")].join(''));

return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10105,_STAR_eval_fn_STAR_10106,_STAR_cljs_ns_STAR_10107,_STAR_ns_STAR_10108,_STAR_data_readers_STAR_10109,_STAR_source_map_data_STAR_10110,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10105,_STAR_eval_fn_STAR_10106,_STAR_cljs_ns_STAR_10107,_STAR_ns_STAR_10108,_STAR_data_readers_STAR_10109,_STAR_source_map_data_STAR_10110,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__5453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10114_10117 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10115_10118 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_10114_10117,_STAR_print_fn_STAR_10115_10118,sb__5453__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10105,_STAR_eval_fn_STAR_10106,_STAR_cljs_ns_STAR_10107,_STAR_ns_STAR_10108,_STAR_data_readers_STAR_10109,_STAR_source_map_data_STAR_10110,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__5454__auto__){
return sb__5453__auto__.append(x__5454__auto__);
});})(ns,_STAR_print_newline_STAR_10114_10117,_STAR_print_fn_STAR_10115_10118,sb__5453__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10105,_STAR_eval_fn_STAR_10106,_STAR_cljs_ns_STAR_10107,_STAR_ns_STAR_10108,_STAR_data_readers_STAR_10109,_STAR_source_map_data_STAR_10110,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10115_10118;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10114_10117;
}
return [cljs.core.str(sb__5453__auto__)].join('');
})());

var G__10119 = ns_SINGLEQUOTE_;
ns = G__10119;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$name,name,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_10105,_STAR_eval_fn_STAR_10106,_STAR_cljs_ns_STAR_10107,_STAR_ns_STAR_10108,_STAR_data_readers_STAR_10109,_STAR_source_map_data_STAR_10110,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e10116){var cause = e10116;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_10105,_STAR_eval_fn_STAR_10106,_STAR_cljs_ns_STAR_10107,_STAR_ns_STAR_10108,_STAR_data_readers_STAR_10109,_STAR_source_map_data_STAR_10110,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;
var temp__4423__auto__ = cljs.core.cst$kw$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(evalm,complete) : f.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));
}
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_10110;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_10109;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_10108;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_10107;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_10106;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10105;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * source (string)
 * the ClojureScript source
 * 
 * name (symbol)
 * optional, the name of the source
 * 
 * opts (map)
 * compilation options.
 * 
 * :eval         - eval function to invoke, see *eval-fn*
 * :load         - library resolution function, see *load-fn*
 * :source-map   - set to true to generate inline source map information
 * :cache-source - optional, a function to run side-effects with the
 * compilation result prior to actual evalution. This function
 * takes two arguments, the first is the eval map, the source
 * will be under :source. The second argument is a callback of
 * one argument. If an error occurs an :error key should be
 * supplied.
 * 
 * cb (function)
 * callback, will be invoked with a map. If succesful the map will contain
 * a :value key with the result of evaluation and :ns the current namespace.
 * If unsuccessful will contain a :error key with an ex-info instance describing
 * the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(){
var args10120 = [];
var len__5537__auto___10123 = arguments.length;
var i__5538__auto___10124 = (0);
while(true){
if((i__5538__auto___10124 < len__5537__auto___10123)){
args10120.push((arguments[i__5538__auto___10124]));

var G__10125 = (i__5538__auto___10124 + (1));
i__5538__auto___10124 = G__10125;
continue;
} else {
}
break;
}

var G__10122 = args10120.length;
switch (G__10122) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10120.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$atom_QMARK_,cljs.core.cst$sym$state)], 0)))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$source)], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_name_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_opts_QMARK_,cljs.core.cst$sym$opts)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$cb)], 0)))].join('')));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return true;
}
})(),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4498__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=js.js.map