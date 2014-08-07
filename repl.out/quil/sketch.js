// Compiled by ClojureScript 0.0-2280
replgoog.provide('quilrepl.sketch');
replgoog.require('cljsrepl.core');
replgoog.require('quilrepl.middlewares.deprecated_options');
replgoog.require('quilrepl.util');
replgoog.require('quilrepl.middlewares.deprecated_options');
replgoog.require('quilrepl.util');
replgoog.require('replclojure.browser.dom');
replgoog.require('replclojure.browser.dom');
quilrepl.sketch._STAR_applet_STAR_ = null;
quilrepl.sketch.current_applet = (function current_applet(){return quilrepl.sketch._STAR_applet_STAR_;
});
quilrepl.sketch.rendering_modes = new cljsrepl.core.PersistentArrayMap(null, 4, [new cljsrepl.core.Keyword(null,"java2d","java2d",166099237),"JAVA2D",new cljsrepl.core.Keyword(null,"p2d","p2d",-2106175755),"P2D",new cljsrepl.core.Keyword(null,"p3d","p3d",-850380194),"P3D",new cljsrepl.core.Keyword(null,"opengl","opengl",-614998103),"OPENGL"], null);
quilrepl.sketch.resolve_renderer = (function resolve_renderer(mode){return quilrepl.util.resolve_constant_key.call(null,mode,quilrepl.sketch.rendering_modes);
});
quilrepl.sketch.size = (function() {
var size = null;
var size__2 = (function (width,height){return quilrepl.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});
var size__3 = (function (width,height,mode){return quilrepl.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quilrepl.util.resolve_constant_key.call(null,mode,quilrepl.sketch.rendering_modes));
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
size.cljsrepl$core$IFn$_invoke$arity$2 = size__2;
size.cljsrepl$core$IFn$_invoke$arity$3 = size__3;
return size;
})()
;
quilrepl.sketch.supported_features = new cljsrepl.core.PersistentHashSet(null, new cljsrepl.core.PersistentArrayMap(null, 1, [new cljsrepl.core.Keyword(null,"no-start","no-start",1381488856),null], null), null);
quilrepl.sketch.make_sketch = (function make_sketch(options){var opts = cljsrepl.core.merge.call(null,new cljsrepl.core.PersistentArrayMap(null, 1, [new cljsrepl.core.Keyword(null,"size","size",1098693007),new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__10593_SHARP_){return p1__10593_SHARP_.call(null,options);
}).call(null,cljsrepl.core.apply.call(null,cljsrepl.core.comp,cljsrepl.core.cons.call(null,quilrepl.middlewares.deprecated_options.deprecated_options,new cljsrepl.core.Keyword(null,"middleware","middleware",1462115504).cljsrepl$core$IFn$_invoke$arity$2(options,cljsrepl.core.PersistentVector.EMPTY)))));var draw_fn = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"draw","draw",1358331674).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var setup_fn = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"setup","setup",1987730512).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var sketch_size = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"size","size",1098693007).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();var renderer = new cljsrepl.core.Keyword(null,"renderer","renderer",336841071).cljsrepl$core$IFn$_invoke$arity$1(opts);var key_pressed = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"key-pressed","key-pressed",-757100364).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var key_released = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"key-released","key-released",215919828).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var key_typed = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"key-typed","key-typed",-876037597).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_clicked = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_dragged = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_moved = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_pressed = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_released = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-released","mouse-released",-664480061).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_out = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-exited","mouse-exited",-483205244).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_over = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-entered","mouse-entered",811350322).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quilrepl.util.no_fn;
}
})();var mouse_scrolled = (function (){var or__3544__auto__ = new cljsrepl.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljsrepl$core$IFn$_invoke$arity$1(opts);if(cljsrepl.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return ((function (or__3544__auto__,opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over){
return (function (x){return null;
});
;})(or__3544__auto__,opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over))
}
})();return ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (prc){(prc["setup"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10607 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
cljsrepl.core.apply.call(null,quilrepl.sketch.size,cljsrepl.core.concat.call(null,sketch_size,(cljsrepl.core.truth_(renderer)?new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [renderer], null):cljsrepl.core.PersistentVector.EMPTY)));
return setup_fn.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10607;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["draw"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10608 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return draw_fn.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10608;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["keyPressed"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10609 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return key_pressed.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10609;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["keyReleased"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10610 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return key_released.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10610;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["keyTyped"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10611 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return key_typed.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10611;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseClicked"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10612 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_clicked.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10612;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseDragged"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10613 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_dragged.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10613;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseMoved"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10614 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_moved.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10614;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mousePressed"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10615 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_pressed.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10615;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseReleased"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10616 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_released.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10616;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseOut"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10617 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_out.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10617;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseOver"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10618 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_over.call(null);
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10618;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
(prc["mouseScrolled"] = ((function (opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled){
return (function (){var _STAR_applet_STAR_10619 = quilrepl.sketch._STAR_applet_STAR_;try{quilrepl.sketch._STAR_applet_STAR_ = prc;
return mouse_scrolled.call(null,((-1) * prc.mouseScroll));
}finally {quilrepl.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10619;
}});})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
);
prc.quil = cljsrepl.core.atom.call(null,null);
return prc.target_frame_rate = cljsrepl.core.atom.call(null,(60));
});
;})(opts,draw_fn,setup_fn,sketch_size,renderer,key_pressed,key_released,key_typed,mouse_clicked,mouse_dragged,mouse_moved,mouse_pressed,mouse_released,mouse_out,mouse_over,mouse_scrolled))
});
/**
* @param {...*} var_args
*/
quilrepl.sketch.sketch = (function() { 
var sketch__delegate = function (opts){var opts_map = cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,opts);var host_elem = replclojure.browser.dom.get_element.call(null,new cljsrepl.core.Keyword(null,"host","host",-1558485167).cljsrepl$core$IFn$_invoke$arity$1(opts_map));var processing_fn = quilrepl.sketch.make_sketch.call(null,opts_map);if(cljsrepl.core.truth_(host_elem))
{return (new Processing(host_elem,processing_fn));
} else
{return null;
}
};
var sketch = function (var_args){
var opts = null;if (arguments.length > 0) {
  opts = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sketch__delegate.call(this,opts);};
sketch.cljsrepl$lang$maxFixedArity = 0;
sketch.cljsrepl$lang$applyTo = (function (arglist__10620){
var opts = cljsrepl.core.seq(arglist__10620);
return sketch__delegate(opts);
});
sketch.cljsrepl$core$IFn$_invoke$arity$variadic = sketch__delegate;
return sketch;
})()
;
quilrepl.sketch.sketch_init_list = cljsrepl.core.atom.call(null,cljsrepl.core.List.EMPTY);
quilrepl.sketch.add_js_event = (function add_js_event(event,fun){if(cljsrepl.core.truth_(window.addEventListener))
{return window.addEventListener(event,fun,false);
} else
{if(cljsrepl.core.truth_(window.attachEvent))
{return window.attachEvent(("on"+cljsrepl.core.str.cljsrepl$core$IFn$_invoke$arity$1(event)),fun);
} else
{return null;
}
}
});
quilrepl.sketch.empty_body_QMARK_ = (function empty_body_QMARK_(){var child = document.body.childNodes;return cljsrepl.core._EQ_.call(null,(1),child.length);
});
quilrepl.sketch.add_canvas = (function add_canvas(canvas_id){var canvas = document.createElement("canvas");canvas.setAttribute("id",canvas_id);
return document.body.appendChild(canvas);
});
quilrepl.sketch.init_sketches = (function init_sketches(){var add_elem_QMARK_ = quilrepl.sketch.empty_body_QMARK_.call(null);var seq__10625 = cljsrepl.core.seq.call(null,cljsrepl.core.deref.call(null,quilrepl.sketch.sketch_init_list));var chunk__10626 = null;var count__10627 = (0);var i__10628 = (0);while(true){
if((i__10628 < count__10627))
{var sk = cljsrepl.core._nth.call(null,chunk__10626,i__10628);if(add_elem_QMARK_)
{quilrepl.sketch.add_canvas.call(null,new cljsrepl.core.Keyword(null,"host-id","host-id",742376279).cljsrepl$core$IFn$_invoke$arity$1(sk));
} else
{}
new cljsrepl.core.Keyword(null,"fn","fn",-1175266204).cljsrepl$core$IFn$_invoke$arity$1(sk).call(null);
{
var G__10629 = seq__10625;
var G__10630 = chunk__10626;
var G__10631 = count__10627;
var G__10632 = (i__10628 + (1));
seq__10625 = G__10629;
chunk__10626 = G__10630;
count__10627 = G__10631;
i__10628 = G__10632;
continue;
}
} else
{var temp__4126__auto__ = cljsrepl.core.seq.call(null,seq__10625);if(temp__4126__auto__)
{var seq__10625__$1 = temp__4126__auto__;if(cljsrepl.core.chunked_seq_QMARK_.call(null,seq__10625__$1))
{var c__4300__auto__ = cljsrepl.core.chunk_first.call(null,seq__10625__$1);{
var G__10633 = cljsrepl.core.chunk_rest.call(null,seq__10625__$1);
var G__10634 = c__4300__auto__;
var G__10635 = cljsrepl.core.count.call(null,c__4300__auto__);
var G__10636 = (0);
seq__10625 = G__10633;
chunk__10626 = G__10634;
count__10627 = G__10635;
i__10628 = G__10636;
continue;
}
} else
{var sk = cljsrepl.core.first.call(null,seq__10625__$1);if(add_elem_QMARK_)
{quilrepl.sketch.add_canvas.call(null,new cljsrepl.core.Keyword(null,"host-id","host-id",742376279).cljsrepl$core$IFn$_invoke$arity$1(sk));
} else
{}
new cljsrepl.core.Keyword(null,"fn","fn",-1175266204).cljsrepl$core$IFn$_invoke$arity$1(sk).call(null);
{
var G__10637 = cljsrepl.core.next.call(null,seq__10625__$1);
var G__10638 = null;
var G__10639 = (0);
var G__10640 = (0);
seq__10625 = G__10637;
chunk__10626 = G__10638;
count__10627 = G__10639;
i__10628 = G__10640;
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
quilrepl.sketch.add_sketch_to_init_list = (function add_sketch_to_init_list(sk){return cljsrepl.core.swap_BANG_.call(null,quilrepl.sketch.sketch_init_list,cljsrepl.core.conj,sk);
});
quilrepl.sketch.add_js_event.call(null,"load",quilrepl.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map
