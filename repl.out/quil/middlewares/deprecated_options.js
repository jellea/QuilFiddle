// Compiled by ClojureScript 0.0-2280
replgoog.provide('quilrepl.middlewares.deprecated_options');
replgoog.require('cljsrepl.core');
quilrepl.middlewares.deprecated_options.deprecated = new cljsrepl.core.PersistentArrayMap(null, 3, [new cljsrepl.core.Keyword(null,"decor","decor",-1730969431),new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljsrepl.core.Keyword(null,"target","target",253001721),new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljsrepl.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quilrepl.middlewares.deprecated_options.check_features_vector = (function check_features_vector(features){var features__$1 = cljsrepl.core.set.call(null,features);if(cljsrepl.core.truth_(features__$1.call(null,new cljsrepl.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157))))
{cljsrepl.core.println.call(null,"Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now.");
} else
{}
return cljsrepl.core.disj.call(null,features__$1,new cljsrepl.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
* Checks if options map contains deprected options and removes them.
* Prints messages how to fix deprecated functions.
*/
quilrepl.middlewares.deprecated_options.deprecated_options = (function deprecated_options(options){var options__$1 = cljsrepl.core.update_in.call(null,options,new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"features","features",-1146962336)], null),quilrepl.middlewares.deprecated_options.check_features_vector);return cljsrepl.core.into.call(null,cljsrepl.core.PersistentArrayMap.EMPTY,cljsrepl.core.remove.call(null,cljsrepl.core.nil_QMARK_,(function (){var iter__4269__auto__ = ((function (options__$1){
return (function iter__10653(s__10654){return (new cljsrepl.core.LazySeq(null,((function (options__$1){
return (function (){var s__10654__$1 = s__10654;while(true){
var temp__4126__auto__ = cljsrepl.core.seq.call(null,s__10654__$1);if(temp__4126__auto__)
{var s__10654__$2 = temp__4126__auto__;if(cljsrepl.core.chunked_seq_QMARK_.call(null,s__10654__$2))
{var c__4267__auto__ = cljsrepl.core.chunk_first.call(null,s__10654__$2);var size__4268__auto__ = cljsrepl.core.count.call(null,c__4267__auto__);var b__10656 = cljsrepl.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__10655 = (0);while(true){
if((i__10655 < size__4268__auto__))
{var vec__10661 = cljsrepl.core._nth.call(null,c__4267__auto__,i__10655);var name = cljsrepl.core.nth.call(null,vec__10661,(0),null);var value = cljsrepl.core.nth.call(null,vec__10661,(1),null);cljsrepl.core.chunk_append.call(null,b__10656,(function (){var temp__4124__auto__ = quilrepl.middlewares.deprecated_options.deprecated.call(null,name);if(cljsrepl.core.truth_(temp__4124__auto__))
{var vec__10662 = temp__4124__auto__;var version = cljsrepl.core.nth.call(null,vec__10662,(0),null);var message = cljsrepl.core.nth.call(null,vec__10662,(1),null);cljsrepl.core.println.call(null,name,"option was removed in Quil",version,".",message);
return null;
} else
{return new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [name,value], null);
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
{return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk.call(null,b__10656),iter__10653.call(null,cljsrepl.core.chunk_rest.call(null,s__10654__$2)));
} else
{return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk.call(null,b__10656),null);
}
} else
{var vec__10663 = cljsrepl.core.first.call(null,s__10654__$2);var name = cljsrepl.core.nth.call(null,vec__10663,(0),null);var value = cljsrepl.core.nth.call(null,vec__10663,(1),null);return cljsrepl.core.cons.call(null,(function (){var temp__4124__auto__ = quilrepl.middlewares.deprecated_options.deprecated.call(null,name);if(cljsrepl.core.truth_(temp__4124__auto__))
{var vec__10664 = temp__4124__auto__;var version = cljsrepl.core.nth.call(null,vec__10664,(0),null);var message = cljsrepl.core.nth.call(null,vec__10664,(1),null);cljsrepl.core.println.call(null,name,"option was removed in Quil",version,".",message);
return null;
} else
{return new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),iter__10653.call(null,cljsrepl.core.rest.call(null,s__10654__$2)));
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
