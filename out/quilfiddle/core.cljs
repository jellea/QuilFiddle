(ns quilfiddle.core
  (:require [cljs.reader :as reader]
            [quilfiddle.repl :as repl]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(enable-console-print!)

;(repl/load-file "quil/core.cljs")

(def default-code "(defn setup []
  (quil.core/hint :enable-retina-pixels)
  (quil.core/frame-rate 30)
  (quil.core/color-mode :hsb)
  {:color 0
   :angle 0})

(defn update [state]
  (let [{:keys [color angle]} state]
    {:color (mod (+ color 0.7) 255)
     :angle (mod (+ angle 0.1) quil.core/TWO-PI)}))

(defn draw [state]
  (quil.core/background 255)
  (quil.core/fill (:color state) 255 255)
  (let [angle (:angle state)
        x (* 150 (quil.core/cos angle))
        y (* 150 (quil.core/sin angle))]
    (quil.core/with-translation [(/ (quil.core/width) 2)
                         (/ (quil.core/height) 2)]
      (quil.core/ellipse x y 100 100))))

(quil.core/defsketch quilfiddle
  :host \"quilfiddle\"
  :size [500 500]
  :setup setup
  :update update
  :draw draw
  :middleware [quil.middleware/fun-mode])")

(defn eval-code [cm]
  (let [doc (.-doc cm)]
    (if (.somethingSelected doc)
      (repl/eval (.getSelection doc))
      (repl/eval (.getLine doc (-> doc .getCursor .-line))))))

(let [cm (js/CodeMirror (.getElementById js/document "editor")
               #js {:value default-code
                    :mode "clojure"
                    :extraKeys #js {:Cmd-Enter #(eval-code %)
                                    :Tab "autocomplete"}
                    ;:lineNumbers true
                    :gutters #js ["CodeMirror-linenumbers"]
                    :autofocus true
                    :styleActiveLine true
                    :matchBrackets true
                    :theme "paraiso-dark"})]
  (js/CodeMirror.extendMode "clojure" (clj->js {:hint-pattern #"[\w\-\>\:\*\$\?\<\!\+\.\/foo]"})))

(repl/listen-for-output prn)

;(repl/eval "default-code")

;(defn setup []
  ;(q/hint :enable-retina-pixels)
  ;(q/frame-rate 30)
  ;(q/color-mode :hsb)
  ;{:color 0
   ;:angle 0})

;(defn update [state]
  ;(let [{:keys [color angle]} state]
    ;{:color (mod (+ color 0.7) 255)
     ;:angle (mod (+ angle 0.1) q/TWO-PI)}))

;(defn draw [state]
  ;(q/background 255)
  ;(q/fill (:color state) 255 255)
  ;(let [angle (:angle state)
        ;x (* 150 (q/cos angle))
        ;y (* 150 (q/sin angle))]
    ;(q/with-translation [(/ (q/width) 2)
                         ;(/ (q/height) 2)]
      ;(q/ellipse x y 100 100))))

;(q/defsketch quilfiddle
  ;:host "quilfiddle"
  ;:size [(.-innerWidth js/window) (.-innerHeight js/window)]
  ;:setup setup
  ;:update update
  ;:draw draw
  ;:middleware [m/fun-mode])
