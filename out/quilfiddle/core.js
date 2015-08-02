// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('quilfiddle.core');
goog.require('cljs.core');
goog.require('cljsjs.codemirror.addons.showhint');
goog.require('cljsjs.codemirror.addons.matchbrackets');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('cljs.pprint');
goog.require('cljsjs.codemirror.addons.closebrackets');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.addons.anywordhint');
cljs.core.enable_console_print_BANG_();
quilfiddle.core.default_code = "; QuilFiddle\n; Live code Processing/Quil in the browser!\n\n; cmd+enter: evaluates current line/selection\n; tab: autocomplete\n\n; WIP: Eval works (see console), Quil almost...\n\n(def min-r 10)\n\n(defn setup []\n  ; initial state\n  {:x 0 :y 0 :r min-r})\n\n(defn update! [state]\n  ; increase radius of the circle by 1 on each frame\n  (update-in state [:r] inc))\n\n(defn draw [state]\n  (q/background 255)\n  (q/ellipse (:x state) (:y state) (:r state) (:r state)))\n\n; decrease radius by 1 but keeping it not less than min-r\n(defn shrink [r]\n  (max min-r (dec r)))\n\n(defn mouse-moved [state event]\n  (-> state\n      ; set circle position to mouse position\n      (assoc :x (:x event) :y (:y event))\n      ; decrease radius\n      (update-in [:r] shrink)))\n\n(defn my-sketch []\n  (q/sketch\n    :host \"canvas\"\n    :size [window.innerWidth window.innerHeight]\n    :setup setup\n    :draw #(draw %)\n    :update #(update! %)\n    :mouse-moved #(mouse-moved %1 %2)\n    :middleware [m/fun-mode]))\n\n(my-sketch)";
window.cljs.user = {};
quilfiddle.core.st = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
quilfiddle.core.eval = (function quilfiddle$core$eval(in_str){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["eval: ",in_str], 0));

return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(quilfiddle.core.st,in_str,cljs.core.cst$sym$fiddle$runtime,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$source_DASH_map,true,cljs.core.cst$kw$ns,cljs.core.cst$sym$fiddle$runtime], null),(function (p__6553){
var map__6554 = p__6553;
var map__6554__$1 = ((((!((map__6554 == null)))?((((map__6554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6554):map__6554);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,cljs.core.cst$kw$value);
if(cljs.core.not(error)){
return console.log(value);
} else {
return console.error(error);
}
}));
});
quilfiddle.core.eval_sexp = (function quilfiddle$core$eval_sexp(cm){
if(cljs.core.not(cm.getTokenAt(cm.getCursor()).state.indentStack)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["not in from"], 0));
} else {
while(true){
if(cljs.core.truth_(cm.getTokenAt(cm.getCursor()).state.indentStack)){
cm.moveH((-1),"char");

continue;
} else {
}
break;
}

var start = cm.getCursor();
cm.moveH((1),"char");

while(true){
if(cljs.core.truth_(cm.getTokenAt(cm.getCursor()).state.indentStack)){
cm.moveH((1),"char");

continue;
} else {
}
break;
}

var end = cm.getCursor();
cm.setSelection(start,end);

return quilfiddle.core.eval(cm.getSelection());
}
});
var cm_6561 = (function (){var G__6557 = document.getElementById("editor");
var G__6558 = {"gutters": ["CodeMirror-linenumbers"], "matchBrackets": true, "value": quilfiddle.core.default_code, "mode": "clojure", "extraKeys": {"Cmd-Enter": ((function (G__6557){
return (function (p1__6556_SHARP_){
return quilfiddle.core.eval_sexp(p1__6556_SHARP_);
});})(G__6557))
, "Tab": "autocomplete"}, "theme": "paraiso-dark", "autofocus": true, "styleActiveLine": true, "autoCloseBrackets": true};
return CodeMirror(G__6557,G__6558);
})();
var G__6559_6562 = "clojure";
var G__6560_6563 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hint_DASH_pattern,/[\w\-\>\:\*\$\?\<\!\+\.\\/foo]/], null));
CodeMirror.extendMode(G__6559_6562,G__6560_6563);
quilfiddle.core.load = (function quilfiddle$core$load(lib,cb){
var G__6565 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,[cljs.core.str(cljs.core.cst$sym$quil$core),cljs.core.str(cljs.core.cst$sym$quil$middleware)].join('')], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__6565) : cb.call(null,G__6565));
});
cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(quilfiddle.core.st,[cljs.core.str("(ns fiddle.runtime (:require [quil.core :as q] [quil.middleware :as m])) "),cljs.core.str(quilfiddle.core.default_code)].join(''),cljs.core.cst$sym$fiddle$runtime,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$load,quilfiddle.core.load,cljs.core.cst$kw$ns,cljs.core.cst$sym$fiddle$runtime,cljs.core.cst$kw$source_DASH_map,true], null),(function (p__6566){
var map__6567 = p__6566;
var map__6567__$1 = ((((!((map__6567 == null)))?((((map__6567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6567):map__6567);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6567__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6567__$1,cljs.core.cst$kw$value);
if(cljs.core.not(error)){
return console.log(value);
} else {
return console.error(error);
}
}));

//# sourceMappingURL=core.js.map