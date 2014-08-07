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
return (function iter__10653(s__10654){return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){var s__10654__$1 = s__10654;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10654__$1);if(temp__4126__auto__)
{var s__10654__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10654__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__10654__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__10656 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__10655 = (0);while(true){
if((i__10655 < size__4268__auto__))
{var vec__10661 = cljs.core._nth.call(null,c__4267__auto__,i__10655);var name = cljs.core.nth.call(null,vec__10661,(0),null);var value = cljs.core.nth.call(null,vec__10661,(1),null);cljs.core.chunk_append.call(null,b__10656,(function (){var temp__4124__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10662 = temp__4124__auto__;var version = cljs.core.nth.call(null,vec__10662,(0),null);var message = cljs.core.nth.call(null,vec__10662,(1),null);cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);
return null;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());
{
var G__10665 = (i__10655 + (1));
i__10655 = G__10665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10656),iter__10653.call(null,cljs.core.chunk_rest.call(null,s__10654__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10656),null);
}
} else
{var vec__10663 = cljs.core.first.call(null,s__10654__$2);var name = cljs.core.nth.call(null,vec__10663,(0),null);var value = cljs.core.nth.call(null,vec__10663,(1),null);return cljs.core.cons.call(null,(function (){var temp__4124__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10664 = temp__4124__auto__;var version = cljs.core.nth.call(null,vec__10664,(0),null);var message = cljs.core.nth.call(null,vec__10664,(1),null);cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);
return null;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),iter__10653.call(null,cljs.core.rest.call(null,s__10654__$2)));
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