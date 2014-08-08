// Compiled by ClojureScript 0.0-2280
goog.provide('quilfiddle.core');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('quil.middleware');
goog.require('quil.core');
goog.require('quil.core');
goog.require('quilfiddle.repl');
goog.require('quilfiddle.repl');
goog.require('cljs.reader');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
quilfiddle.core.default_code = "(def min-r 10)\n\n(defn setup []\n  ; initial state\n  {:x 0 :y 0 :r min-r})\n\n(defn update [state]\n  ; increase radius of the circle by 1 on each frame\n  (update-in state [:r] inc))\n\n(defn draw [state]\n  (quil.core/background 255)\n  (quil.core/ellipse (:x state) (:y state) (:r state) (:r state)))\n\n; decrease radius by 1 but keeping it not less than min-r\n(defn shrink [r]\n  (max min-r (dec r)))\n\n(defn mouse-moved [state event]\n  (-> state\n      ; set circle position to mouse position\n      (assoc :x (:x event) :y (:y event))\n      ; decrease radius\n      (update-in [:r] shrink)))\n\n(defn my-sketch []\n  (quil.core/sketch\n    :host \"canvas\"\n    :size [1000 1000]\n    :setup setup\n    :draw draw\n    :update update\n    :mouse-moved mouse-moved\n    :middleware [quil.middleware/fun-mode]))\n\n(my-sketch)";
quilfiddle.core.eval_code = (function eval_code(cm){var doc = cm.doc;if(cljs.core.truth_(doc.somethingSelected()))
{return quilfiddle.repl.eval.call(null,doc.getSelection());
} else
{return quilfiddle.repl.eval.call(null,doc.getLine(doc.getCursor().line));
}
});
var cm_13976 = CodeMirror(document.getElementById("editor"),{"theme": "paraiso-dark", "matchBrackets": true, "styleActiveLine": true, "autofocus": true, "gutters": ["CodeMirror-linenumbers"], "extraKeys": {"Tab": "autocomplete", "Cmd-Enter": (function (p1__13975_SHARP_){return quilfiddle.core.eval_code.call(null,p1__13975_SHARP_);
})}, "mode": "clojure", "value": quilfiddle.core.default_code});CodeMirror.extendMode("clojure",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hint-pattern","hint-pattern",-1622710880),/[\w\-\>\:\*\$\?\<\!\+\.\\/foo]/], null)));
quilfiddle.repl.listen_for_output.call(null,cljs.core.prn);
quilfiddle.core.min_r = (10);
quilfiddle.core.setup = (function setup(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),quilfiddle.core.min_r], null);
});
quilfiddle.core.update = (function update(state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.inc);
});
quilfiddle.core.draw = (function draw(state){quil.core.background.call(null,(255));
return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(state));
});
quilfiddle.core.shrink = (function shrink(r){var x__3851__auto__ = quilfiddle.core.min_r;var y__3852__auto__ = (r - (1));return ((x__3851__auto__ > y__3852__auto__) ? x__3851__auto__ : y__3852__auto__);
});
quilfiddle.core.mouse_moved = (function mouse_moved(state,event){return cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),quilfiddle.core.shrink);
});
quilfiddle.core.my_sketch = (function my_sketch(){return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"canvas",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),quilfiddle.core.setup,new cljs.core.Keyword(null,"draw","draw",1358331674),quilfiddle.core.draw,new cljs.core.Keyword(null,"update","update",1045576396),quilfiddle.core.update,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),quilfiddle.core.mouse_moved,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null));
});
quilfiddle.core.my_sketch.call(null);

//# sourceMappingURL=core.js.map