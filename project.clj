(defproject quilfiddle "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.35"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [quil "2.2.6"]
                 [cljsjs/codemirror "5.1.0-2"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [com.cemerick/austin "0.1.4"]]
  :hooks [leiningen.cljsbuild]

  :source-paths ["src" "target/classes"]

  :cljsbuild
  {:builds [{
             :source-paths ["src/quilfiddle"]
             :compiler
             {:output-to "out/main.js"
              :output-dir "out"
              :optimizations :none
              :source-maps true
              :pretty-print false
              :static-fns true
              :asset-path "/out"
              :optimize-constants true
              :verbose true
              }}]})
