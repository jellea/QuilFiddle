// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(){
var args14777 = [];
var len__5537__auto___14780 = arguments.length;
var i__5538__auto___14781 = (0);
while(true){
if((i__5538__auto___14781 < len__5537__auto___14780)){
args14777.push((arguments[i__5538__auto___14781]));

var G__14782 = (i__5538__auto___14781 + (1));
i__5538__auto___14781 = G__14782;
continue;
} else {
}
break;
}

var G__14779 = args14777.length;
switch (G__14779) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14777.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__14792 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__14793 = null;
var count__14794 = (0);
var i__14795 = (0);
while(true){
if((i__14795 < count__14794)){
var vec__14796 = chunk__14793.cljs$core$IIndexed$_nth$arity$2(null,i__14795);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(1),null);
var temp__4425__auto___14800 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___14800)){
var handler_14801 = temp__4425__auto___14800;
(prc[cljs.core.name(processing_name)] = ((function (seq__14792,chunk__14793,count__14794,i__14795,handler_14801,temp__4425__auto___14800,vec__14796,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_14797 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_14801.cljs$core$IFn$_invoke$arity$0 ? handler_14801.cljs$core$IFn$_invoke$arity$0() : handler_14801.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_14797;
}});})(seq__14792,chunk__14793,count__14794,i__14795,handler_14801,temp__4425__auto___14800,vec__14796,processing_name,quil_name))
);
} else {
}

var G__14802 = seq__14792;
var G__14803 = chunk__14793;
var G__14804 = count__14794;
var G__14805 = (i__14795 + (1));
seq__14792 = G__14802;
chunk__14793 = G__14803;
count__14794 = G__14804;
i__14795 = G__14805;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14792);
if(temp__4425__auto__){
var seq__14792__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14792__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__14792__$1);
var G__14806 = cljs.core.chunk_rest(seq__14792__$1);
var G__14807 = c__5282__auto__;
var G__14808 = cljs.core.count(c__5282__auto__);
var G__14809 = (0);
seq__14792 = G__14806;
chunk__14793 = G__14807;
count__14794 = G__14808;
i__14795 = G__14809;
continue;
} else {
var vec__14798 = cljs.core.first(seq__14792__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(1),null);
var temp__4425__auto___14810__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___14810__$1)){
var handler_14811 = temp__4425__auto___14810__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__14792,chunk__14793,count__14794,i__14795,handler_14811,temp__4425__auto___14810__$1,vec__14798,processing_name,quil_name,seq__14792__$1,temp__4425__auto__){
return (function (){
var _STAR_applet_STAR_14799 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_14811.cljs$core$IFn$_invoke$arity$0 ? handler_14811.cljs$core$IFn$_invoke$arity$0() : handler_14811.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_14799;
}});})(seq__14792,chunk__14793,count__14794,i__14795,handler_14811,temp__4425__auto___14810__$1,vec__14798,processing_name,quil_name,seq__14792__$1,temp__4425__auto__))
);
} else {
}

var G__14812 = cljs.core.next(seq__14792__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14792 = G__14812;
chunk__14793 = G__14813;
count__14794 = G__14814;
i__14795 = G__14815;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__14816_SHARP_){
return (p1__14816_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14816_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__14816_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__4498__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$setup], null),((function (opts,sketch_size,renderer,features){
return (function (p1__14817_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__14817_SHARP_)){
return (p1__14817_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__14817_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__14817_SHARP_.call(null));
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_wheel], null),((function (opts,sketch_size,renderer,features){
return (function (p1__14818_SHARP_){
if(cljs.core.truth_(p1__14818_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
var G__14820 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
return (p1__14818_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14818_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14820) : p1__14818_SHARP_.call(null,G__14820));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));

return prc.target_frame_rate = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60)) : cljs.core.atom.call(null,(60)));
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(){
var args__5544__auto__ = [];
var len__5537__auto___14823 = arguments.length;
var i__5538__auto___14824 = (0);
while(true){
if((i__5538__auto___14824 < len__5537__auto___14823)){
args__5544__auto__.push((arguments[i__5538__auto___14824]));

var G__14825 = (i__5538__auto___14824 + (1));
i__5538__auto___14824 = G__14825;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((0) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5545__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__14822 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__14822);
})();
var renderer = (function (){var or__4498__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

return (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq14821){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14821));
});
quil.sketch.sketch_init_list = (function (){var G__14826 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14826) : cljs.core.atom.call(null,G__14826));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_();
var seq__14831 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__14832 = null;
var count__14833 = (0);
var i__14834 = (0);
while(true){
if((i__14834 < count__14833)){
var sk = chunk__14832.cljs$core$IIndexed$_nth$arity$2(null,i__14834);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__14835 = seq__14831;
var G__14836 = chunk__14832;
var G__14837 = count__14833;
var G__14838 = (i__14834 + (1));
seq__14831 = G__14835;
chunk__14832 = G__14836;
count__14833 = G__14837;
i__14834 = G__14838;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14831);
if(temp__4425__auto__){
var seq__14831__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14831__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__14831__$1);
var G__14839 = cljs.core.chunk_rest(seq__14831__$1);
var G__14840 = c__5282__auto__;
var G__14841 = cljs.core.count(c__5282__auto__);
var G__14842 = (0);
seq__14831 = G__14839;
chunk__14832 = G__14840;
count__14833 = G__14841;
i__14834 = G__14842;
continue;
} else {
var sk = cljs.core.first(seq__14831__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__14843 = cljs.core.next(seq__14831__$1);
var G__14844 = null;
var G__14845 = (0);
var G__14846 = (0);
seq__14831 = G__14843;
chunk__14832 = G__14844;
count__14833 = G__14845;
i__14834 = G__14846;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map