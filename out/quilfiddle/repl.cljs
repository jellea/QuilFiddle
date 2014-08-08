; Original version: https://github.com/lazerwalker/clojurescript-koans/blob/master/src/koans/repl.cljs

(ns quilfiddle.repl
  (:require [quil.core :as q]
            [cljs.core.async :as async
    :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [quil.core :refer [defsketch sketch]]
                   [cljs.core.async.macros :refer [go alt!]]))

(def output-chan (chan))
(def error-chan (chan))

(defn channel-piping-fn [chan]
  (fn [text] (go (>! chan text))))

(defn ^:export eval [input-string]
  (.evaluate js/repl input-string))

(defn ^:export listen-for-output [handler]
  (.init-with-pipes js/repl (channel-piping-fn output-chan)
                            (channel-piping-fn error-chan)
                            #(.log js/console %))
  (go
    (while true
      (let [[text chan] (alts! [error-chan output-chan])]
        (handler text)))))
