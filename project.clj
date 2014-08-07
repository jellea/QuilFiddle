(defproject quilfiddle "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [quil "2.2.1"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/clojurescript "0.0-2280"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [com.cemerick/austin "0.1.4"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [{
             :source-paths ["src/quilfiddle"]
             :compiler
             {
              :output-to "main.js"
              :output-dir "out"
              :optimizations :none
              :source-map true
              }
             :notify-command ["make" "build-repl"]}]})
