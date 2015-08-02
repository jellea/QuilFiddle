(ns quilfiddle.core
  (:require [cljs.pprint :refer [pprint]]
            [cljs.js :as cljs]
            [cljs.tools.reader :as r]
            [cljsjs.codemirror.mode.clojure]
            ;[cljsjs.codemirror.addons.matchbrackets]
            [quil.core]
            [quil.middleware]))

(enable-console-print!)

; TODO: alt+cmd+enter: eval all

(def default-code "; QuilFiddle
; Live code Processing/Quil in the browser

; cmd+enter: eval current line/selection
; tab: autocomplete

; WIP: Eval works (see console), Quil almost...

(def min-r 10)

(defn setup []
  ; initial state
  {:x 0 :y 0 :r min-r})

(defn update! [state]
  ; increase radius of the circle by 1 on each frame
  (update-in state [:r] inc))

(defn draw [state]
  (q/background 255)
  (q/ellipse (:x state) (:y state) (:r state) (:r state)))

; decrease radius by 1 but keeping it not less than min-r
(defn shrink [r]
  (max min-r (dec r)))

(defn mouse-moved [state event]
  (-> state
      ; set circle position to mouse position
      (assoc :x (:x event) :y (:y event))
      ; decrease radius
      (update-in [:r] shrink)))

(defn my-sketch []
  (q/sketch
    :host \"canvas\"
    :size [window.innerWidth window.innerHeight]
    :setup setup
    :draw draw
    :update update!
    :mouse-moved mouse-moved
    :middleware [m/fun-mode]))

(my-sketch)")

(set! (.. js/window -cljs -user) #js {})

(def st (cljs/empty-state))

(defn eval [in-str]
  (cljs/eval-str st in-str 'fiddle.runtime
                 {:eval cljs/js-eval :source-map true :ns 'fiddle.runtime}
                 (fn [{:keys [error value]}]
                   (if-not error
                     (js/console.log value)
                     (do
                       (.error js/console error))))))

(defn eval-code [cm]
  (let [doc (.-doc cm)]
    (if (.somethingSelected doc)
      (eval (.getSelection doc))
      (eval (.getLine doc (-> doc .getCursor .-line))))))

(let [cm (js/CodeMirror (.getElementById js/document "editor")
               #js {:value default-code
                    :mode "clojure"
                    :extraKeys #js {                        ;:Cmd-Alt-Enter #(eval-code (.getValue %))
                                    :Cmd-Enter #(eval-code %)
                                    :Tab "autocomplete"}
                    ;:lineNumbers true
                    :gutters #js ["CodeMirror-linenumbers"]
                    :autofocus true
                    :styleActiveLine true
                    :matchBrackets true
                    :theme "paraiso-dark"})]
  (js/CodeMirror.extendMode "clojure" (clj->js {:hint-pattern #"[\w\-\>\:\*\$\?\<\!\+\.\/foo]"})))

(defn load [lib cb]
  (cb {:lang :clj :source (str 'quil.core 'quil.middleware)}))

(cljs/eval-str st (str "(ns fiddle.runtime (:require [quil.core :as q] [quil.middleware :as m])) " default-code) 'fiddle.runtime
              {:eval cljs/js-eval
               :load load
               :ns 'fiddle.runtime
               :source-map true}
              (fn [{:keys [error value]}]
                (if-not error
                  (js/console.log value)
                  (do
                    (.error js/console error)))))