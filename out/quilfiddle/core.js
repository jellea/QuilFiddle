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
quilfiddle.core.default_code = "(defn setup []\n  (quil.core/hint :enable-retina-pixels)\n  (quil.core/frame-rate 30)\n  (quil.core/color-mode :hsb)\n  {:color 0\n   :angle 0})\n\n(defn update [state]\n  (let [{:keys [color angle]} state]\n    {:color (mod (+ color 0.7) 255)\n     :angle (mod (+ angle 0.1) quil.core/TWO-PI)}))\n\n(defn draw [state]\n  (quil.core/background 255)\n  (quil.core/fill (:color state) 255 255)\n  (let [angle (:angle state)\n        x (* 150 (quil.core/cos angle))\n        y (* 150 (quil.core/sin angle))]\n    (quil.core/with-translation [(/ (quil.core/width) 2)\n                         (/ (quil.core/height) 2)]\n      (quil.core/ellipse x y 100 100))))\n\n(quil.core/defsketch quilfiddle\n  :host \"quilfiddle\"\n  :size [500 500]\n  :setup setup\n  :update update\n  :draw draw\n  :middleware [quil.middleware/fun-mode])";
quilfiddle.core.eval_code = (function eval_code(cm){var doc = cm.doc;if(cljs.core.truth_(doc.somethingSelected()))
{return quilfiddle.repl.eval.call(null,doc.getSelection());
} else
{return quilfiddle.repl.eval.call(null,doc.getLine(doc.getCursor().line));
}
});
var cm_9289 = CodeMirror(document.getElementById("editor"),{"theme": "paraiso-dark", "matchBrackets": true, "styleActiveLine": true, "autofocus": true, "gutters": ["CodeMirror-linenumbers"], "extraKeys": {"Tab": "autocomplete", "Cmd-Enter": (function (p1__9288_SHARP_){return quilfiddle.core.eval_code.call(null,p1__9288_SHARP_);
})}, "mode": "clojure", "value": quilfiddle.core.default_code});CodeMirror.extendMode("clojure",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hint-pattern","hint-pattern",-1622710880),/[\w\-\>\:\*\$\?\<\!\+\.\\/foo]/], null)));
quilfiddle.repl.listen_for_output.call(null,cljs.core.prn);

//# sourceMappingURL=core.js.map