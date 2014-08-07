(ns quilfiddle.core
  (:require [cljs.reader :as reader]
            [quilfiddle.repl :as repl]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(enable-console-print!)

;(repl/load-file "quil/core.cljs")

(def default-code "(ns test
  (:require [quil.core :as q]))

(defn setup []
  (q/hint :enable-retina-pixels)
  (q/frame-rate 30))

(defn update [state]
  (let [{:keys [color angle]} state]
    {:color (mod (+ color 0.7) 255)
     :angle (mod (+ angle 0.1) q/TWO-PI)}))

(defn draw [state]
  (q/background 255)
  (q/fill (:color state) 255 255)
  (let [angle (:angle state)
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/ellipse x y 100 100))))

(q/defsketch quilfiddle
  :host \"quilfiddle\"
  :size [500 500]
  :setup setup
  :update update
  :draw draw
  :middleware [m/fun-mode])")

(def default2 ";; the basics
(+ 1 1)
(:a {:a :b})
(reduce + [1 2 3 4 5])
(defn sum [coll] (reduce + coll))
(sum [2 2 2 2])

;; load a ClojureScript file and use it
(load-file \"clojure/string.cljs\")
(clojure.string/reverse \"ClojureScript\")

;; browser specific
(js/alert \"I am an evil side-effect\")

(ns test.dom (:require [clojure.browser.dom :as dom]))
(dom/append (dom/get-element \"content\")
            (dom/element \"ClojureScript is all up in your DOM.\"))

;; load and use goog code we haven't used yet
(ns test.crypt (:require [goog.crypt :as c]))
(c/stringToByteArray \"ClojureScript\")

(load-namespace 'goog.date.Date)
(goog.date.Date.)")

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


(defn setup []
  (q/hint :enable-retina-pixels)
  (q/frame-rate 30)
  (q/color-mode :hsb)
  {:color 0
   :angle 0})

(defn update [state]
  (let [{:keys [color angle]} state]
    {:color (mod (+ color 0.7) 255)
     :angle (mod (+ angle 0.1) q/TWO-PI)}))

(defn draw [state]
  (q/background 255)
  (q/fill (:color state) 255 255)
  (let [angle (:angle state)
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/ellipse x y 100 100))))

(q/defsketch quilfiddle
  :host "quilfiddle"
  :size [(.-innerWidth js/window) (.-innerHeight js/window)]
  :setup setup
  :update update
  :draw draw
  :middleware [m/fun-mode])
