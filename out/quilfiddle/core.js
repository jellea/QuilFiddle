// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('quilfiddle.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_();
quilfiddle.core.default_code = "; QuilFiddle\n; Live code Processing/Quil in the browser\n\n; cmd+enter: eval current line/selection\n; tab: autocomplete\n\n; WIP: Eval works (see console), Quil almost...\n\n(def min-r 10)\n\n(defn setup []\n  ; initial state\n  {:x 0 :y 0 :r min-r})\n\n(defn update! [state]\n  ; increase radius of the circle by 1 on each frame\n  (update-in state [:r] inc))\n\n(defn draw [state]\n  (q/background 255)\n  (q/ellipse (:x state) (:y state) (:r state) (:r state)))\n\n; decrease radius by 1 but keeping it not less than min-r\n(defn shrink [r]\n  (max min-r (dec r)))\n\n(defn mouse-moved [state event]\n  (-> state\n      ; set circle position to mouse position\n      (assoc :x (:x event) :y (:y event))\n      ; decrease radius\n      (update-in [:r] shrink)))\n\n(defn my-sketch []\n  (q/sketch\n    :host \"canvas\"\n    :size [window.innerWidth window.innerHeight]\n    :setup setup\n    :draw #(draw %)\n    :update #(update! %)\n    :mouse-moved #(mouse-moved %1 %2)\n    :middleware [m/fun-mode]))\n\n(my-sketch)";
window.cljs.user = {};
quilfiddle.core.st = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
quilfiddle.core.eval = (function quilfiddle$core$eval(in_str){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(quilfiddle.core.st,in_str,cljs.core.cst$sym$fiddle$runtime,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$source_DASH_map,true,cljs.core.cst$kw$ns,cljs.core.cst$sym$fiddle$runtime], null),(function (p__6402){
var map__6403 = p__6402;
var map__6403__$1 = ((((!((map__6403 == null)))?((((map__6403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6403):map__6403);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,cljs.core.cst$kw$value);
if(cljs.core.not(error)){
return console.log(value);
} else {
return console.error(error);
}
}));
});
quilfiddle.core.eval_code = (function quilfiddle$core$eval_code(cm){
var doc = cm.doc;
if(cljs.core.truth_(doc.somethingSelected())){
return quilfiddle.core.eval(doc.getSelection());
} else {
return quilfiddle.core.eval(doc.getLine(doc.getCursor().line));
}
});
var cm_6410 = (function (){var G__6406 = document.getElementById("editor");
var G__6407 = {"value": quilfiddle.core.default_code, "mode": "clojure", "extraKeys": {"Cmd-Enter": ((function (G__6406){
return (function (p1__6405_SHARP_){
return quilfiddle.core.eval_code(p1__6405_SHARP_);
});})(G__6406))
, "Tab": "autocomplete"}, "gutters": ["CodeMirror-linenumbers"], "autofocus": true, "styleActiveLine": true, "matchBrackets": true, "theme": "paraiso-dark"};
return CodeMirror(G__6406,G__6407);
})();
var G__6408_6411 = "clojure";
var G__6409_6412 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hint_DASH_pattern,/[\w\-\>\:\*\$\?\<\!\+\.\\/foo]/], null));
CodeMirror.extendMode(G__6408_6411,G__6409_6412);
quilfiddle.core.load = (function quilfiddle$core$load(lib,cb){
var G__6414 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,[cljs.core.str(cljs.core.cst$sym$quil$core),cljs.core.str(cljs.core.cst$sym$quil$middleware)].join('')], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__6414) : cb.call(null,G__6414));
});
cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(quilfiddle.core.st,[cljs.core.str("(ns fiddle.runtime (:require [quil.core :as q] [quil.middleware :as m])) "),cljs.core.str(quilfiddle.core.default_code)].join(''),cljs.core.cst$sym$fiddle$runtime,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$load,quilfiddle.core.load,cljs.core.cst$kw$ns,cljs.core.cst$sym$fiddle$runtime,cljs.core.cst$kw$source_DASH_map,true], null),(function (p__6415){
var map__6416 = p__6415;
var map__6416__$1 = ((((!((map__6416 == null)))?((((map__6416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6416):map__6416);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6416__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6416__$1,cljs.core.cst$kw$value);
if(cljs.core.not(error)){
return console.log(value);
} else {
return console.error(error);
}
}));

//# sourceMappingURL=core.js.map