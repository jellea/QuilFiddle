// Compiled by ClojureScript 0.0-2280
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.middlewares.deprecated_options');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('quil.util');
goog.require('clojure.browser.dom');
goog.require('clojure.browser.dom');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function current_applet(){return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),"JAVA2D",new cljs.core.Keyword(null,"p2d","p2d",-2106175755),"P2D",new cljs.core.Keyword(null,"p3d","p3d",-850380194),"P3D",new cljs.core.Keyword(null,"opengl","opengl",-614998103),"OPENGL"], null);
quil.sketch.resolve_renderer = (function resolve_renderer(mode){return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function() {
var size = null;
var size__2 = (function (width,height){return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});
var size__3 = (function (width,height,mode){return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});
size = function(width,height,mode){
switch(arguments.length){
case 2:
return size__2.call(this,width,height);
case 3:
return size__3.call(this,width,height,mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
size.cljs$core$IFn$_invoke$arity$2 = size__2;
size.cljs$core$IFn$_invoke$arity$3 = size__3;
return size;
})()
;
quil.sketch.supported_features = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-start","no-start",1381488856),null], null), null);
quil.sketch.make_sketch = (function make_sketch(options){var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__11082_SHARP_){return p1__11082_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));var draw_fn = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var setup_fn = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var sketch_size = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);var key_pressed = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var key_released = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"key-released","key-released",215919828).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var key_typed = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"key-typed","key-typed",-876037597).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_clicked = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_dragged = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_moved = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_pressed = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_released = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_out = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_over = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.util.no_fn;
}
})();var mouse_scrolled = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return ((function (or__3544__auto__,opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over){
return (function (x){return null;
});
;})(or__3544__auto__,opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over))
}
})();return ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (prc){(prc["setup"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11096 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));
return setup_fn.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11096;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["draw"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11097 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return draw_fn.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11097;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["keyPressed"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11098 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return key_pressed.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11098;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["keyReleased"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11099 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return key_released.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11099;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["keyTyped"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11100 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return key_typed.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11100;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseClicked"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11101 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_clicked.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11101;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseDragged"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11102 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_dragged.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11102;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseMoved"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11103 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_moved.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11103;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mousePressed"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11104 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_pressed.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11104;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseReleased"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11105 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_released.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11105;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseOut"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11106 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_out.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11106;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseOver"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11107 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_over.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11107;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseScrolled"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_11108 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return mouse_scrolled.call(null,((-1) * prc.mouseScroll));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_11108;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
prc.quil = cljs.core.atom.call(null,null);
return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});
;})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
});
/**
* @param {...*} var_args
*/
quil.sketch.sketch = (function() { 
var sketch__delegate = function (opts){var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);var host_elem = clojure.browser.dom.get_element.call(null,new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));var processing_fn = quil.sketch.make_sketch.call(null,opts_map);if(cljs.core.truth_(host_elem))
{return (new Processing(host_elem,processing_fn));
} else
{return null;
}
};
var sketch = function (var_args){
var opts = null;if (arguments.length > 0) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sketch__delegate.call(this,opts);};
sketch.cljs$lang$maxFixedArity = 0;
sketch.cljs$lang$applyTo = (function (arglist__11109){
var opts = cljs.core.seq(arglist__11109);
return sketch__delegate(opts);
});
sketch.cljs$core$IFn$_invoke$arity$variadic = sketch__delegate;
return sketch;
})()
;
quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.add_js_event = (function add_js_event(event,fun){if(cljs.core.truth_(window.addEventListener))
{return window.addEventListener(event,fun,false);
} else
{if(cljs.core.truth_(window.attachEvent))
{return window.attachEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)),fun);
} else
{return null;
}
}
});
quil.sketch.empty_body_QMARK_ = (function empty_body_QMARK_(){var child = document.body.childNodes;return cljs.core._EQ_.call(null,(1),child.length);
});
quil.sketch.add_canvas = (function add_canvas(canvas_id){var canvas = document.createElement("canvas");canvas.setAttribute("id",canvas_id);
return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function init_sketches(){var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_.call(null);var seq__11114 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));var chunk__11115 = null;var count__11116 = (0);var i__11117 = (0);while(true){
if((i__11117 < count__11116))
{var sk = cljs.core._nth.call(null,chunk__11115,i__11117);if(add_elem_QMARK_)
{quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else
{}
new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);
{
var G__11118 = seq__11114;
var G__11119 = chunk__11115;
var G__11120 = count__11116;
var G__11121 = (i__11117 + (1));
seq__11114 = G__11118;
chunk__11115 = G__11119;
count__11116 = G__11120;
i__11117 = G__11121;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11114);if(temp__4126__auto__)
{var seq__11114__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11114__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__11114__$1);{
var G__11122 = cljs.core.chunk_rest.call(null,seq__11114__$1);
var G__11123 = c__4300__auto__;
var G__11124 = cljs.core.count.call(null,c__4300__auto__);
var G__11125 = (0);
seq__11114 = G__11122;
chunk__11115 = G__11123;
count__11116 = G__11124;
i__11117 = G__11125;
continue;
}
} else
{var sk = cljs.core.first.call(null,seq__11114__$1);if(add_elem_QMARK_)
{quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else
{}
new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);
{
var G__11126 = cljs.core.next.call(null,seq__11114__$1);
var G__11127 = null;
var G__11128 = (0);
var G__11129 = (0);
seq__11114 = G__11126;
chunk__11115 = G__11127;
count__11116 = G__11128;
i__11117 = G__11129;
continue;
}
}
} else
{return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function add_sketch_to_init_list(sk){return cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
quil.sketch.add_js_event.call(null,"load",quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map