(ns quilfiddle.core
  (:require [cljs.reader :as reader]
            [quilfiddle.repl :as repl]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(enable-console-print!)

(def default-code "; QuilFiddle
; Live code Processing/Quil in the browser

; cmd+enter: eval current line/selection
; alt+cmd+enter: eval all
; tab: autocomplete

; WIP: Eval works (see console), Quil almost...

(def min-r 10)

(defn setup []
  ; initial state
  {:x 0 :y 0 :r min-r})

(defn update [state]
  ; increase radius of the circle by 1 on each frame
  (update-in state [:r] inc))

(defn draw [state]
  (quil.core/background 255)
  (quil.core/ellipse (:x state) (:y state) (:r state) (:r state)))

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
  (quil.core/sketch
    :host \"canvas\"
    :size [1000 1000]
    :setup setup
    :draw draw
    :update update
    :mouse-moved mouse-moved
    :middleware [quil.middleware/fun-mode]))

(my-sketch)")

(defn eval-code [cm]
  (let [doc (.-doc cm)]
    (if (.somethingSelected doc)
      (repl/eval (.getSelection doc))
      (repl/eval (.getLine doc (-> doc .getCursor .-line))))))

(let [cm (js/CodeMirror (.getElementById js/document "editor")
               #js {:value default-code
                    :mode "clojure"
                    :extraKeys #js {:Cmd-Alt-Enter #(repl/eval (.getValue %))
                                    :Cmd-Enter #(eval-code %)
                                    :Tab "autocomplete"}
                    ;:lineNumbers true
                    :gutters #js ["CodeMirror-linenumbers"]
                    :autofocus true
                    :styleActiveLine true
                    :matchBrackets true
                    :theme "paraiso-dark"})]
  (js/CodeMirror.extendMode "clojure" (clj->js {:hint-pattern #"[\w\-\>\:\*\$\?\<\!\+\.\/foo]"})))

(repl/listen-for-output prn)

;(repl/eval default-code)

; Cheating... ;)

(def min-r 10)

(defn setup []
  ; initial state
  {:x 0 :y 0 :r min-r})

(defn update [state]
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
    :host "canvas"
    :size [(.-innerWidth js/window) (.-innerHeight js/window)]
    :setup setup
    :draw draw
    :update update
    :mouse-moved mouse-moved
    :middleware [quil.middleware/fun-mode]))

(my-sketch)
