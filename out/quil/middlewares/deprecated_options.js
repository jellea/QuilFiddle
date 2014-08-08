// Compiled by ClojureScript 0.0-2280
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"decor","decor",-1730969431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljs.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function check_features_vector(features){var features__$1 = cljs.core.set.call(null,features);if(cljs.core.truth_(features__$1.call(null,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157))))
{cljs.core.println.call(null,"Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now.");
} else
{}
return cljs.core.disj.call(null,features__$1,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
* Checks if options map contains deprected options and removes them.
* Prints messages how to fix deprecated functions.
*/
quil.middlewares.deprecated_options.deprecated_options = (function deprecated_options(options){var options__$1 = cljs.core.update_in.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336)], null),quil.middlewares.deprecated_options.check_features_vector);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__4269__auto__ = ((function (options__$1){
return (function iter__11142(s__11143){return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){var s__11143__$1 = s__11143;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11143__$1);if(temp__4126__auto__)
{var s__11143__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11143__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__11143__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__11145 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__11144 = (0);while(true){
if((i__11144 < size__4268__auto__))
{var vec__11150 = cljs.core._nth.call(null,c__4267__auto__,i__11144);var name = cljs.core.nth.call(null,vec__11150,(0),null);var value = cljs.core.nth.call(null,vec__11150,(1),null);cljs.core.chunk_append.call(null,b__11145,(function (){var temp__4124__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);if(cljs.core.truth_(temp__4124__auto__))
{var vec__11151 = temp__4124__auto__;var version = cljs.core.nth.call(null,vec__11151,(0),null);var message = cljs.core.nth.call(null,vec__11151,(1),null);cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);
return null;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());
{
var G__11154 = (i__11144 + (1));
i__11144 = G__11154;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11145),iter__11142.call(null,cljs.core.chunk_rest.call(null,s__11143__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11145),null);
}
} else
{var vec__11152 = cljs.core.first.call(null,s__11143__$2);var name = cljs.core.nth.call(null,vec__11152,(0),null);var value = cljs.core.nth.call(null,vec__11152,(1),null);return cljs.core.cons.call(null,(function (){var temp__4124__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);if(cljs.core.truth_(temp__4124__auto__))
{var vec__11153 = temp__4124__auto__;var version = cljs.core.nth.call(null,vec__11153,(0),null);var message = cljs.core.nth.call(null,vec__11153,(1),null);cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);
return null;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),iter__11142.call(null,cljs.core.rest.call(null,s__11143__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;return iter__4269__auto__.call(null,options__$1);
})()));
});

//# sourceMappingURL=deprecated_options.js.map