// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$decor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),cljs.core.cst$kw$safe_DASH_draw_DASH_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$no_DASH_safe_DASH_draw) : features__$1.call(null,cljs.core.cst$kw$no_DASH_safe_DASH_draw)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,cljs.core.cst$kw$no_DASH_safe_DASH_draw);
});
/**
 * Checks if options map contains deprected options and removes them.
 * Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$features], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5251__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__14863(s__14864){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__14864__$1 = s__14864;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14864__$1);
if(temp__4425__auto__){
var s__14864__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14864__$2)){
var c__5249__auto__ = cljs.core.chunk_first(s__14864__$2);
var size__5250__auto__ = cljs.core.count(c__5249__auto__);
var b__14866 = cljs.core.chunk_buffer(size__5250__auto__);
if((function (){var i__14865 = (0);
while(true){
if((i__14865 < size__5250__auto__)){
var vec__14873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5249__auto__,i__14865);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14873,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14873,(1),null);
cljs.core.chunk_append(b__14866,(function (){var temp__4423__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__14874 = temp__4423__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__14877 = (i__14865 + (1));
i__14865 = G__14877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14866),quil$middlewares$deprecated_options$deprecated_options_$_iter__14863(cljs.core.chunk_rest(s__14864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14866),null);
}
} else {
var vec__14875 = cljs.core.first(s__14864__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14875,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14875,(1),null);
return cljs.core.cons((function (){var temp__4423__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__14876 = temp__4423__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14876,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14876,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__14863(cljs.core.rest(s__14864__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__5251__auto__(options__$1);
})()));
});

//# sourceMappingURL=deprecated_options.js.map