// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
/**
 * Threads the expr through the forms. Inserts x as the
 * second item in the first form, making a list of it if it is not a
 * list already. If there are more forms, inserts the first form as the
 * second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(){
var args__5544__auto__ = [];
var len__5537__auto___10156 = arguments.length;
var i__5538__auto___10157 = (0);
while(true){
if((i__5538__auto___10157 < len__5537__auto___10156)){
args__5544__auto__.push((arguments[i__5538__auto___10157]));

var G__10158 = (i__5538__auto___10157 + (1));
i__5538__auto___10157 = G__10158;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(form)),cljs.core._conj(cljs.core.List.EMPTY,x__$1),cljs.core.array_seq([cljs.core.next(form)], 0)))),cljs.core.meta(form)):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x__$1),form));
var G__10159 = threaded;
var G__10160 = cljs.core.next(forms__$1);
x__$1 = G__10159;
forms__$1 = G__10160;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq10152){
var G__10153 = cljs.core.first(seq10152);
var seq10152__$1 = cljs.core.next(seq10152);
var G__10154 = cljs.core.first(seq10152__$1);
var seq10152__$2 = cljs.core.next(seq10152__$1);
var G__10155 = cljs.core.first(seq10152__$2);
var seq10152__$3 = cljs.core.next(seq10152__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10153,G__10154,G__10155,seq10152__$3);
});

cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 * last item in the first form, making a list of it if it is not a
 * list already. If there are more forms, inserts the first form as the
 * last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(){
var args__5544__auto__ = [];
var len__5537__auto___10165 = arguments.length;
var i__5538__auto___10166 = (0);
while(true){
if((i__5538__auto___10166 < len__5537__auto___10165)){
args__5544__auto__.push((arguments[i__5538__auto___10166]));

var G__10167 = (i__5538__auto___10166 + (1));
i__5538__auto___10166 = G__10167;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(form)),cljs.core.next(form),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x__$1)], 0)))),cljs.core.meta(form)):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x__$1),form));
var G__10168 = threaded;
var G__10169 = cljs.core.next(forms__$1);
x__$1 = G__10168;
forms__$1 = G__10169;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq10161){
var G__10162 = cljs.core.first(seq10161);
var seq10161__$1 = cljs.core.next(seq10161);
var G__10163 = cljs.core.first(seq10161__$1);
var seq10161__$2 = cljs.core.next(seq10161__$1);
var G__10164 = cljs.core.first(seq10161__$2);
var seq10161__$3 = cljs.core.next(seq10161__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10162,G__10163,G__10164,seq10161__$3);
});

cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 * Expands into a member access (.) of the first member on the first
 * argument, followed by the next member on the result, etc. For
 * instance:
 * 
 * (.. System (getProperties) (get "os.name"))
 * 
 * expands to:
 * 
 * (. (. System (getProperties)) (get "os.name"))
 * 
 * but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(){
var args10170 = [];
var len__5537__auto___10178 = arguments.length;
var i__5538__auto___10179 = (0);
while(true){
if((i__5538__auto___10179 < len__5537__auto___10178)){
args10170.push((arguments[i__5538__auto___10179]));

var G__10180 = (i__5538__auto___10179 + (1));
i__5538__auto___10179 = G__10180;
continue;
} else {
}
break;
}

var G__10177 = args10170.length;
switch (G__10177) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10170.slice((4)),(0)));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,form)], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,form)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq10171){
var G__10172 = cljs.core.first(seq10171);
var seq10171__$1 = cljs.core.next(seq10171);
var G__10173 = cljs.core.first(seq10171__$1);
var seq10171__$2 = cljs.core.next(seq10171__$1);
var G__10174 = cljs.core.first(seq10171__$2);
var seq10171__$3 = cljs.core.next(seq10171__$2);
var G__10175 = cljs.core.first(seq10171__$3);
var seq10171__$4 = cljs.core.next(seq10171__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__10172,G__10173,G__10174,G__10175,seq10171__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(){
var args__5544__auto__ = [];
var len__5537__auto___10185 = arguments.length;
var i__5538__auto___10186 = (0);
while(true){
if((i__5538__auto___10186 < len__5537__auto___10185)){
args__5544__auto__.push((arguments[i__5538__auto___10186]));

var G__10187 = (i__5538__auto___10186 + (1));
i__5538__auto___10186 = G__10187;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq10182){
var G__10183 = cljs.core.first(seq10182);
var seq10182__$1 = cljs.core.next(seq10182);
var G__10184 = cljs.core.first(seq10182__$1);
var seq10182__$2 = cljs.core.next(seq10182__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__10183,G__10184,seq10182__$2);
});

cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 * time.  If a test returns logical true, cond evaluates and returns
 * the value of the corresponding expr and doesn't evaluate any of the
 * other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(){
var args__5544__auto__ = [];
var len__5537__auto___10191 = arguments.length;
var i__5538__auto___10192 = (0);
while(true){
if((i__5538__auto___10192 < len__5537__auto___10191)){
args__5544__auto__.push((arguments[i__5538__auto___10192]));

var G__10193 = (i__5538__auto___10192 + (1));
i__5538__auto___10192 = G__10193;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_cond,cljs.core.next(cljs.core.next(clauses)))),((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})())),cljs.core.first(clauses)),cljs.core.cst$sym$if);
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq10188){
var G__10189 = cljs.core.first(seq10188);
var seq10188__$1 = cljs.core.next(seq10188);
var G__10190 = cljs.core.first(seq10188__$1);
var seq10188__$2 = cljs.core.next(seq10188__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__10189,G__10190,seq10188__$2);
});

cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(){
var args__5544__auto__ = [];
var len__5537__auto___10198 = arguments.length;
var i__5538__auto___10199 = (0);
while(true){
if((i__5538__auto___10199 < len__5537__auto___10198)){
args__5544__auto__.push((arguments[i__5538__auto___10199]));

var G__10200 = (i__5538__auto___10199 + (1));
i__5538__auto___10199 = G__10200;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10194_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__10194_SHARP_,cljs.core.assoc,cljs.core.cst$kw$declared,true)),cljs.core.cst$sym$def);
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq10195){
var G__10196 = cljs.core.first(seq10195);
var seq10195__$1 = cljs.core.next(seq10195);
var G__10197 = cljs.core.first(seq10195__$1);
var seq10195__$2 = cljs.core.next(seq10195__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__10196,G__10197,seq10195__$2);
});

cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 * value of x supplied at the front of the given arguments.  The forms
 * are evaluated in order.  Returns x.
 * 
 * (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(){
var args__5544__auto__ = [];
var len__5537__auto___10205 = arguments.length;
var i__5538__auto___10206 = (0);
while(true){
if((i__5538__auto___10206 < len__5537__auto___10205)){
args__5544__auto__.push((arguments[i__5538__auto___10206]));

var G__10207 = (i__5538__auto___10206 + (1));
i__5538__auto___10206 = G__10207;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gx),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(f)),cljs.core._conj(cljs.core.List.EMPTY,gx),cljs.core.array_seq([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,f),cljs.core._conj(cljs.core.List.EMPTY,gx))));
}
});})(gx))
,forms),cljs.core._conj(cljs.core.List.EMPTY,gx)], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq10201){
var G__10202 = cljs.core.first(seq10201);
var seq10201__$1 = cljs.core.next(seq10201);
var G__10203 = cljs.core.first(seq10201__$1);
var seq10201__$2 = cljs.core.next(seq10201__$1);
var G__10204 = cljs.core.first(seq10201__$2);
var seq10201__$3 = cljs.core.next(seq10201__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__10202,G__10203,G__10204,seq10201__$3);
});

cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__10208 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__10209 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__10208;
s = G__10209;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__10212){
var vec__10213 = p__10212;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10213,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10213,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,p),fs], 0))));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 * protocol all at once. Takes a single protocol and the implementation
 * of that protocol for one or more types. Expands into calls to
 * extend-type:
 * 
 * (extend-protocol Protocol
 * AType
 * (foo [x] ...)
 * (bar [x y] ...)
 * BType
 * (foo [x] ...)
 * (bar [x y] ...)
 * AClass
 * (foo [x] ...)
 * (bar [x y] ...)
 * nil
 * (foo [x] ...)
 * (bar [x y] ...))
 * 
 * expands into:
 * 
 * (do
 * (clojure.core/extend-type AType Protocol
 * (foo [x] ...)
 * (bar [x y] ...))
 * (clojure.core/extend-type BType Protocol
 * (foo [x] ...)
 * (bar [x y] ...))
 * (clojure.core/extend-type AClass Protocol
 * (foo [x] ...)
 * (bar [x y] ...))
 * (clojure.core/extend-type nil Protocol
 * (foo [x] ...)
 * (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(){
var args__5544__auto__ = [];
var len__5537__auto___10218 = arguments.length;
var i__5538__auto___10219 = (0);
while(true){
if((i__5538__auto___10219 < len__5537__auto___10218)){
args__5544__auto__.push((arguments[i__5538__auto___10219]));

var G__10220 = (i__5538__auto___10219 + (1));
i__5538__auto___10219 = G__10220;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq10214){
var G__10215 = cljs.core.first(seq10214);
var seq10214__$1 = cljs.core.next(seq10214);
var G__10216 = cljs.core.first(seq10214__$1);
var seq10214__$2 = cljs.core.next(seq10214__$1);
var G__10217 = cljs.core.first(seq10214__$2);
var seq10214__$3 = cljs.core.next(seq10214__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__10215,G__10216,G__10217,seq10214__$3);
});

cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__10221 = cljs.core.next(params__$1);
var G__10222 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__10223 = lets;
params__$1 = G__10221;
new_params = G__10222;
lets = G__10223;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__10224 = cljs.core.next(params__$1);
var G__10225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__10226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__10224;
new_params = G__10225;
lets = G__10226;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new_params),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,lets),cljs.core.array_seq([body], 0))))))));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 * positional-param => binding-form
 * next-param => binding-form
 * name => symbol
 * 
 * Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(){
var args__5544__auto__ = [];
var len__5537__auto___10231 = arguments.length;
var i__5538__auto___10232 = (0);
while(true){
if((i__5538__auto___10232 < len__5537__auto___10231)){
args__5544__auto__.push((arguments[i__5538__auto___10232]));

var G__10233 = (i__5538__auto___10232 + (1));
i__5538__auto___10232 = G__10233;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?cljs.core._conj(cljs.core.List.EMPTY,sigs__$1):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first(sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__10230 = sig;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10230,(0),null);
var body = cljs.core.nthnext(vec__10230,(1));
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__4498__auto__ = conds;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_),cljs.core._conj(cljs.core.List.EMPTY,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))):cljs.core.first(body__$1)))))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10230,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),cljs.core._conj(cljs.core.List.EMPTY,c))));
});})(vec__10230,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_)], 0)))))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10230,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),cljs.core._conj(cljs.core.List.EMPTY,c))));
});})(vec__10230,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$fn_STAR_,name,new_sigs):cljs.core.cons(cljs.core.cst$sym$fn_STAR_,new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq10227){
var G__10228 = cljs.core.first(seq10227);
var seq10227__$1 = cljs.core.next(seq10227);
var G__10229 = cljs.core.first(seq10227__$1);
var seq10227__$2 = cljs.core.next(seq10227__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__10228,G__10229,seq10227__$2);
});

cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(){
var args__5544__auto__ = [];
var len__5537__auto___10238 = arguments.length;
var i__5538__auto___10239 = (0);
while(true){
if((i__5538__auto___10239 < len__5537__auto___10238)){
args__5544__auto__.push((arguments[i__5538__auto___10239]));

var G__10240 = (i__5538__auto___10239 + (1));
i__5538__auto___10239 = G__10240;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),cljs.core.cst$kw$private,true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq10234){
var G__10235 = cljs.core.first(seq10234);
var seq10234__$1 = cljs.core.next(seq10234);
var G__10236 = cljs.core.first(seq10234__$1);
var seq10234__$2 = cljs.core.next(seq10234__$1);
var G__10237 = cljs.core.first(seq10234__$2);
var seq10234__$3 = cljs.core.next(seq10234__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__10235,G__10236,G__10237,seq10234__$3);
});

cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * If test is true, evaluates then with binding-form bound to the value of
 * test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(){
var args10242 = [];
var len__5537__auto___10251 = arguments.length;
var i__5538__auto___10252 = (0);
while(true){
if((i__5538__auto___10252 < len__5537__auto___10251)){
args10242.push((arguments[i__5538__auto___10252]));

var G__10253 = (i__5538__auto___10252 + (1));
i__5538__auto___10252 = G__10253;
continue;
} else {
}
break;
}

var G__10250 = args10242.length;
switch (G__10250) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10242.slice((5)),(0)));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5556__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){







var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10241__auto__),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10241__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10241__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,else$)], 0)))))], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq10243){
var G__10244 = cljs.core.first(seq10243);
var seq10243__$1 = cljs.core.next(seq10243);
var G__10245 = cljs.core.first(seq10243__$1);
var seq10243__$2 = cljs.core.next(seq10243__$1);
var G__10246 = cljs.core.first(seq10243__$2);
var seq10243__$3 = cljs.core.next(seq10243__$2);
var G__10247 = cljs.core.first(seq10243__$3);
var seq10243__$4 = cljs.core.next(seq10243__$3);
var G__10248 = cljs.core.first(seq10243__$4);
var seq10243__$5 = cljs.core.next(seq10243__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__10244,G__10245,G__10246,G__10247,G__10248,seq10243__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 * otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(){
var args10255 = [];
var len__5537__auto___10258 = arguments.length;
var i__5538__auto___10259 = (0);
while(true){
if((i__5538__auto___10259 < len__5537__auto___10258)){
args10255.push((arguments[i__5538__auto___10259]));

var G__10260 = (i__5538__auto___10259 + (1));
i__5538__auto___10259 = G__10260;
continue;
} else {
}
break;
}

var G__10257 = args10255.length;
switch (G__10257) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10255.length)].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),cljs.core._conj(cljs.core.List.EMPTY,test))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,else$)], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 * Takes a vector of function specs and a body, and generates a set of
 * bindings of functions to their names. All of the names are available
 * in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(){
var args__5544__auto__ = [];
var len__5537__auto___10267 = arguments.length;
var i__5538__auto___10268 = (0);
while(true){
if((i__5538__auto___10268 < len__5537__auto___10267)){
args__5544__auto__.push((arguments[i__5538__auto___10268]));

var G__10269 = (i__5538__auto___10268 + (1));
i__5538__auto___10268 = G__10269;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$letfn_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10262_SHARP_){
return cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,p1__10262_SHARP_);
}),fnspecs)))),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq10263){
var G__10264 = cljs.core.first(seq10263);
var seq10263__$1 = cljs.core.next(seq10263);
var G__10265 = cljs.core.first(seq10263__$1);
var seq10263__$2 = cljs.core.next(seq10263__$1);
var G__10266 = cljs.core.first(seq10263__$2);
var seq10263__$3 = cljs.core.next(seq10263__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__10264,G__10265,G__10266,seq10263__$3);
});

cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 * object and any args and calls the named instance method on the
 * object passing the args. Use when you want to treat a Java method as
 * a first-class fn. name may be type-hinted with the method receiver's
 * type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(){
var args__5544__auto__ = [];
var len__5537__auto___10274 = arguments.length;
var i__5538__auto___10275 = (0);
while(true){
if((i__5538__auto___10275 < len__5537__auto___10274)){
args__5544__auto__.push((arguments[i__5538__auto___10275]));

var G__10276 = (i__5538__auto___10275 + (1));
i__5538__auto___10275 = G__10276;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,t),args))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name),args))))], 0)))))], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq10270){
var G__10271 = cljs.core.first(seq10270);
var seq10270__$1 = cljs.core.next(seq10270);
var G__10272 = cljs.core.first(seq10270__$1);
var seq10270__$2 = cljs.core.next(seq10270__$1);
var G__10273 = cljs.core.first(seq10270__$2);
var seq10270__$3 = cljs.core.next(seq10270__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__10271,G__10272,G__10273,seq10270__$3);
});

cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(){
var args__5544__auto__ = [];
var len__5537__auto___10281 = arguments.length;
var i__5538__auto___10282 = (0);
while(true){
if((i__5538__auto___10282 < len__5537__auto___10281)){
args__5544__auto__.push((arguments[i__5538__auto___10282]));

var G__10283 = (i__5538__auto___10282 + (1));
i__5538__auto___10282 = G__10283;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(cljs.core.cst$sym$do,body)),test),cljs.core.cst$sym$if);
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq10277){
var G__10278 = cljs.core.first(seq10277);
var seq10277__$1 = cljs.core.next(seq10277);
var G__10279 = cljs.core.first(seq10277__$1);
var seq10277__$2 = cljs.core.next(seq10277__$1);
var G__10280 = cljs.core.first(seq10277__$2);
var seq10277__$3 = cljs.core.next(seq10277__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__10278,G__10279,G__10280,seq10277__$3);
});

cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 * Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(){
var args__5544__auto__ = [];
var len__5537__auto___10290 = arguments.length;
var i__5538__auto___10291 = (0);
while(true){
if((i__5538__auto___10291 < len__5537__auto___10290)){
args__5544__auto__.push((arguments[i__5538__auto___10291]));

var G__10292 = (i__5538__auto___10291 + (1));
i__5538__auto___10291 = G__10292;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){





var vec__10289 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10289,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10289,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__10284__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,xs)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__10284__auto__)))))))))),cljs.core.array_seq([body], 0)))))], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq10285){
var G__10286 = cljs.core.first(seq10285);
var seq10285__$1 = cljs.core.next(seq10285);
var G__10287 = cljs.core.first(seq10285__$1);
var seq10285__$2 = cljs.core.next(seq10285__$1);
var G__10288 = cljs.core.first(seq10285__$2);
var seq10285__$3 = cljs.core.next(seq10285__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__10286,G__10287,G__10288,seq10285__$3);
});

cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(){
var args__5544__auto__ = [];
var len__5537__auto___10298 = arguments.length;
var i__5538__auto___10299 = (0);
while(true){
if((i__5538__auto___10299 < len__5537__auto___10298)){
args__5544__auto__.push((arguments[i__5538__auto___10299]));

var G__10300 = (i__5538__auto___10299 + (1));
i__5538__auto___10299 = G__10300;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){





var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10293__auto__),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10293__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10293__auto__)))))),cljs.core.array_seq([body], 0)))))], 0)))))], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq10294){
var G__10295 = cljs.core.first(seq10294);
var seq10294__$1 = cljs.core.next(seq10294);
var G__10296 = cljs.core.first(seq10294__$1);
var seq10294__$2 = cljs.core.next(seq10294__$1);
var G__10297 = cljs.core.first(seq10294__$2);
var seq10294__$3 = cljs.core.next(seq10294__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__10295,G__10296,G__10297,seq10294__$3);
});

cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(){
var args__5544__auto__ = [];
var len__5537__auto___10305 = arguments.length;
var i__5538__auto___10306 = (0);
while(true){
if((i__5538__auto___10306 < len__5537__auto___10305)){
args__5544__auto__.push((arguments[i__5538__auto___10306]));

var G__10307 = (i__5538__auto___10306 + (1));
i__5538__auto___10306 = G__10307;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(cljs.core.cst$sym$do,body)),null),test),cljs.core.cst$sym$if);
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq10301){
var G__10302 = cljs.core.first(seq10301);
var seq10301__$1 = cljs.core.next(seq10301);
var G__10303 = cljs.core.first(seq10301__$1);
var seq10301__$2 = cljs.core.next(seq10301__$1);
var G__10304 = cljs.core.first(seq10301__$2);
var seq10301__$3 = cljs.core.next(seq10301__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__10302,G__10303,G__10304,seq10301__$3);
});

cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 * some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(){
var args__5544__auto__ = [];
var len__5537__auto___10312 = arguments.length;
var i__5538__auto___10313 = (0);
while(true){
if((i__5538__auto___10313 < len__5537__auto___10312)){
args__5544__auto__.push((arguments[i__5538__auto___10313]));

var G__10314 = (i__5538__auto___10313 + (1));
i__5538__auto___10313 = G__10314;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([body,cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur)))))], 0)))))], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq10308){
var G__10309 = cljs.core.first(seq10308);
var seq10308__$1 = cljs.core.next(seq10308);
var G__10310 = cljs.core.first(seq10308__$1);
var seq10308__$2 = cljs.core.next(seq10308__$1);
var G__10311 = cljs.core.first(seq10308__$2);
var seq10308__$3 = cljs.core.next(seq10308__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__10309,G__10310,G__10311,seq10308__$3);
});

cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 * through each form for which the corresponding test
 * expression is true. Note that, unlike cond branching, cond-> threading does
 * not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(){
var args__5544__auto__ = [];
var len__5537__auto___10321 = arguments.length;
var i__5538__auto___10322 = (0);
while(true){
if((i__5538__auto___10322 < len__5537__auto___10321)){
args__5544__auto__.push((arguments[i__5538__auto___10322]));

var G__10323 = (i__5538__auto___10322 + (1));
i__5538__auto___10322 = G__10323;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$clauses))], 0)))].join('')));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__10319){
var vec__10320 = p__10319;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10320,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10320,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq10315){
var G__10316 = cljs.core.first(seq10315);
var seq10315__$1 = cljs.core.next(seq10315);
var G__10317 = cljs.core.first(seq10315__$1);
var seq10315__$2 = cljs.core.next(seq10315__$1);
var G__10318 = cljs.core.first(seq10315__$2);
var seq10315__$3 = cljs.core.next(seq10315__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10316,G__10317,G__10318,seq10315__$3);
});

cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 * through each form for which the corresponding test expression
 * is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 * after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(){
var args__5544__auto__ = [];
var len__5537__auto___10330 = arguments.length;
var i__5538__auto___10331 = (0);
while(true){
if((i__5538__auto___10331 < len__5537__auto___10330)){
args__5544__auto__.push((arguments[i__5538__auto___10331]));

var G__10332 = (i__5538__auto___10331 + (1));
i__5538__auto___10331 = G__10332;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$clauses))], 0)))].join('')));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__10328){
var vec__10329 = p__10328;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq10324){
var G__10325 = cljs.core.first(seq10324);
var seq10324__$1 = cljs.core.next(seq10324);
var G__10326 = cljs.core.first(seq10324__$1);
var seq10324__$2 = cljs.core.next(seq10324__$1);
var G__10327 = cljs.core.first(seq10324__$2);
var seq10324__$3 = cljs.core.next(seq10324__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10325,G__10326,G__10327,seq10324__$3);
});

cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 * of that binding, then binds name to that result, repeating for each
 * successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(){
var args__5544__auto__ = [];
var len__5537__auto___10338 = arguments.length;
var i__5538__auto___10339 = (0);
while(true){
if((i__5538__auto___10339 < len__5537__auto___10338)){
args__5544__auto__.push((arguments[i__5538__auto___10339]));

var G__10340 = (i__5538__auto___10339 + (1));
i__5538__auto___10339 = G__10340;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((4) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((4)),(0))):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5545__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,name)], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq10333){
var G__10334 = cljs.core.first(seq10333);
var seq10333__$1 = cljs.core.next(seq10333);
var G__10335 = cljs.core.first(seq10333__$1);
var seq10333__$2 = cljs.core.next(seq10333__$1);
var G__10336 = cljs.core.first(seq10333__$2);
var seq10333__$3 = cljs.core.next(seq10333__$2);
var G__10337 = cljs.core.first(seq10333__$3);
var seq10333__$4 = cljs.core.next(seq10333__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10334,G__10335,G__10336,G__10337,seq10333__$4);
});

cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 * and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(){
var args__5544__auto__ = [];
var len__5537__auto___10345 = arguments.length;
var i__5538__auto___10346 = (0);
while(true){
if((i__5538__auto___10346 < len__5537__auto___10345)){
args__5544__auto__.push((arguments[i__5538__auto___10346]));

var G__10347 = (i__5538__auto___10346 + (1));
i__5538__auto___10346 = G__10347;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,g))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0)))))], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq10341){
var G__10342 = cljs.core.first(seq10341);
var seq10341__$1 = cljs.core.next(seq10341);
var G__10343 = cljs.core.first(seq10341__$1);
var seq10341__$2 = cljs.core.next(seq10341__$1);
var G__10344 = cljs.core.first(seq10341__$2);
var seq10341__$3 = cljs.core.next(seq10341__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10342,G__10343,G__10344,seq10341__$3);
});

cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 * and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(){
var args__5544__auto__ = [];
var len__5537__auto___10352 = arguments.length;
var i__5538__auto___10353 = (0);
while(true){
if((i__5538__auto___10353 < len__5537__auto___10352)){
args__5544__auto__.push((arguments[i__5538__auto___10353]));

var G__10354 = (i__5538__auto___10353 + (1));
i__5538__auto___10353 = G__10354;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,g))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0)))))], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq10348){
var G__10349 = cljs.core.first(seq10348);
var seq10348__$1 = cljs.core.next(seq10348);
var G__10350 = cljs.core.first(seq10348__$1);
var seq10348__$2 = cljs.core.next(seq10348__$1);
var G__10351 = cljs.core.first(seq10348__$2);
var seq10348__$3 = cljs.core.next(seq10348__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__10349,G__10350,G__10351,seq10348__$3);
});

cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * If test is not nil, evaluates then with binding-form bound to the
 * value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(){
var args10356 = [];
var len__5537__auto___10365 = arguments.length;
var i__5538__auto___10366 = (0);
while(true){
if((i__5538__auto___10366 < len__5537__auto___10365)){
args10356.push((arguments[i__5538__auto___10366]));

var G__10367 = (i__5538__auto___10366 + (1));
i__5538__auto___10366 = G__10367;
continue;
} else {
}
break;
}

var G__10364 = args10356.length;
switch (G__10364) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10356.slice((5)),(0)));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5556__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_some),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){







var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10355__auto__),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10355__auto__))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,else$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10355__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq10357){
var G__10358 = cljs.core.first(seq10357);
var seq10357__$1 = cljs.core.next(seq10357);
var G__10359 = cljs.core.first(seq10357__$1);
var seq10357__$2 = cljs.core.next(seq10357__$1);
var G__10360 = cljs.core.first(seq10357__$2);
var seq10357__$3 = cljs.core.next(seq10357__$2);
var G__10361 = cljs.core.first(seq10357__$3);
var seq10357__$4 = cljs.core.next(seq10357__$3);
var G__10362 = cljs.core.first(seq10357__$4);
var seq10357__$5 = cljs.core.next(seq10357__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__10358,G__10359,G__10360,G__10361,G__10362,seq10357__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * When test is not nil, evaluates body with binding-form bound to the
 * value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(){
var args__5544__auto__ = [];
var len__5537__auto___10374 = arguments.length;
var i__5538__auto___10375 = (0);
while(true){
if((i__5538__auto___10375 < len__5537__auto___10374)){
args__5544__auto__.push((arguments[i__5538__auto___10375]));

var G__10376 = (i__5538__auto___10375 + (1));
i__5538__auto___10375 = G__10376;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){





var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10369__auto__),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10369__auto__))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__10369__auto__)))))),cljs.core.array_seq([body], 0)))))], 0)))))], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq10370){
var G__10371 = cljs.core.first(seq10370);
var seq10370__$1 = cljs.core.next(seq10370);
var G__10372 = cljs.core.first(seq10370__$1);
var seq10370__$2 = cljs.core.next(seq10370__$1);
var G__10373 = cljs.core.first(seq10370__$2);
var seq10370__$3 = cljs.core.next(seq10370__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__10371,G__10372,G__10373,seq10370__$3);
});

cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10377_SHARP_){
if(cljs.core.seq_QMARK_(p1__10377_SHARP_)){
return cljs.core.first(p1__10377_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__10377_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__10377_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__10378_SHARP_){
return cljs.core.vector_QMARK_(p1__10378_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first(bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__10379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__10380 = cljs.core.next(fdecls);
ret = G__10379;
fdecls = G__10380;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return cljs.core._conj(cljs.core.List.EMPTY,asig(fdecl));
}
});
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,x))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,init)], 0)))))], 0))));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.assert_args = (function cljs$core$macros$assert_args(){
var args__5544__auto__ = [];
var len__5537__auto___10385 = arguments.length;
var i__5538__auto___10386 = (0);
while(true){
if((i__5538__auto___10386 < len__5537__auto___10385)){
args__5544__auto__.push((arguments[i__5538__auto___10386]));

var G__10387 = (i__5538__auto___10386 + (1));
i__5538__auto___10386 = G__10387;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnname,pairs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(pairs)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(fnname),cljs.core.str(" requires "),cljs.core.str(cljs.core.second(pairs))].join(''))))))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(function (){var more = cljs.core.nnext(pairs);
if(cljs.core.truth_(more)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$macros_SLASH_assert_DASH_args,fnname,more);
} else {
return null;
}
})())], 0))));
});

cljs.core$macros.assert_args.cljs$lang$maxFixedArity = (3);

cljs.core$macros.assert_args.cljs$lang$applyTo = (function (seq10381){
var G__10382 = cljs.core.first(seq10381);
var seq10381__$1 = cljs.core.next(seq10381);
var G__10383 = cljs.core.first(seq10381__$1);
var seq10381__$2 = cljs.core.next(seq10381__$1);
var G__10384 = cljs.core.first(seq10381__$2);
var seq10381__$3 = cljs.core.next(seq10381__$2);
return cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(G__10382,G__10383,G__10384,seq10381__$3);
});

cljs.core$macros.assert_args.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gvec),val);
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__10417 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),gvec),cljs.core.cst$sym$cljs$core_SLASH_nthnext));
var G__10418 = n;
var G__10419 = cljs.core.nnext(bs);
var G__10420 = true;
ret = G__10417;
n = G__10418;
bs = G__10419;
seen_rest_QMARK_ = G__10420;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$kw$as)){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__10421 = cljs$core$macros$destructure_$_pb(ret,firstb,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),n),gvec),cljs.core.cst$sym$cljs$core_SLASH_nth));
var G__10422 = (n + (1));
var G__10423 = cljs.core.next(bs);
var G__10424 = seen_rest_QMARK_;
ret = G__10421;
n = G__10422;
bs = G__10423;
seen_rest_QMARK_ = G__10424;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.array_seq([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ISeq),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gmap)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gmap)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,gmap)], 0))))));
var bes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (p1__10388_SHARP_,p2__10389_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10388_SHARP_,p2__10389_SHARP_,cljs.core.val(entry).call(null,p2__10389_SHARP_));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),cljs.core.key(entry).call(null,bes));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,cljs.core.cst$kw$as,cljs.core.array_seq([cljs.core.cst$kw$or], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,((function (ret,gmap,defaults,pvec,bents){
return (function (p1__10390_SHARP_){
if((p1__10390_SHARP_ instanceof cljs.core.Keyword)){
return p1__10390_SHARP_;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(p1__10390_SHARP_)].join(''));
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.cst$kw$strs,cljs.core.str,cljs.core.cst$kw$syms,((function (ret,gmap,defaults,pvec,bents){
return (function (p1__10391_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__10391_SHARP_),cljs.core.cst$sym$quote);
});})(ret,gmap,defaults,pvec,bents))
], null));
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var has_default = cljs.core.contains_QMARK_(defaults,bb);
var G__10425 = cljs$core$macros$destructure_$_pb(ret,bb,((has_default)?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(bb) : defaults.call(null,bb))),bk),gmap),cljs.core.cst$sym$cljs$core_SLASH_get):cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,bk),gmap),cljs.core.cst$sym$cljs$core_SLASH_get)));
var G__10426 = cljs.core.next(bes);
ret = G__10425;
bes = G__10426;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__4423__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__10392_SHARP_){
return (cljs.core.first(p1__10392_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4423__auto__){
var kwbs = temp__4423__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * binding => binding-form init-expr
 * 
 * Evaluates the exprs in a lexical context in which the symbols in
 * the binding-forms are bound to their respective init-exprs or parts
 * therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(){
var args__5544__auto__ = [];
var len__5537__auto___10431 = arguments.length;
var i__5538__auto___10432 = (0);
while(true){
if((i__5538__auto___10432 < len__5537__auto___10431)){
args__5544__auto__.push((arguments[i__5538__auto___10432]));

var G__10433 = (i__5538__auto___10432 + (1));
i__5538__auto___10432 = G__10433;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core$macros.let$,cljs.core.vector_QMARK_(bindings),"a vector for its binding",cljs.core.array_seq([cljs.core.even_QMARK_(cljs.core.count(bindings)),"an even number of forms in binding vector"], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$let_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.destructure(bindings)),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq10427){
var G__10428 = cljs.core.first(seq10427);
var seq10427__$1 = cljs.core.next(seq10427);
var G__10429 = cljs.core.first(seq10427__$1);
var seq10427__$2 = cljs.core.next(seq10427__$1);
var G__10430 = cljs.core.first(seq10427__$2);
var seq10427__$3 = cljs.core.next(seq10427__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__10428,G__10429,G__10430,seq10427__$3);
});

cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 * the binding-forms are bound to their respective init-exprs or parts
 * therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(){
var args__5544__auto__ = [];
var len__5537__auto___10440 = arguments.length;
var i__5538__auto___10441 = (0);
while(true){
if((i__5538__auto___10441 < len__5537__auto___10440)){
args__5544__auto__.push((arguments[i__5538__auto___10441]));

var G__10442 = (i__5538__auto___10441 + (1));
i__5538__auto___10441 = G__10442;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core$macros.loop,cljs.core.vector_QMARK_(bindings),"a vector for its binding",cljs.core.array_seq([cljs.core.even_QMARK_(cljs.core.count(bindings)),"an even number of forms in binding vector"], 0));

var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__10438){
var vec__10439 = p__10438;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10439,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10439,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,bfs),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs))),cljs.core.array_seq([body], 0)))))], 0)))))], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq10434){
var G__10435 = cljs.core.first(seq10434);
var seq10434__$1 = cljs.core.next(seq10434);
var G__10436 = cljs.core.first(seq10434__$1);
var seq10434__$2 = cljs.core.next(seq10434__$1);
var G__10437 = cljs.core.first(seq10434__$2);
var seq10434__$3 = cljs.core.next(seq10434__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__10435,G__10436,G__10437,seq10434__$3);
});

cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10443_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str(p1__10443_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$IFn,cljs.core.cst$sym$ICounted,cljs.core.cst$sym$IEmptyableCollection,cljs.core.cst$sym$ICollection,cljs.core.cst$sym$IIndexed,cljs.core.cst$sym$ASeq,cljs.core.cst$sym$ISeq,cljs.core.cst$sym$INext,cljs.core.cst$sym$ILookup,cljs.core.cst$sym$IAssociative,cljs.core.cst$sym$IMap,cljs.core.cst$sym$IMapEntry,cljs.core.cst$sym$ISet,cljs.core.cst$sym$IStack,cljs.core.cst$sym$IVector,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$IDerefWithTimeout,cljs.core.cst$sym$IMeta,cljs.core.cst$sym$IWithMeta,cljs.core.cst$sym$IReduce,cljs.core.cst$sym$IKVReduce,cljs.core.cst$sym$IEquiv,cljs.core.cst$sym$IHash,cljs.core.cst$sym$ISeqable,cljs.core.cst$sym$ISequential,cljs.core.cst$sym$IList,cljs.core.cst$sym$IRecord,cljs.core.cst$sym$IReversible,cljs.core.cst$sym$ISorted,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IWriter,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IPending,cljs.core.cst$sym$IWatchable,cljs.core.cst$sym$IEditableCollection,cljs.core.cst$sym$ITransientCollection,cljs.core.cst$sym$ITransientAssociative,cljs.core.cst$sym$ITransientMap,cljs.core.cst$sym$ITransientVector,cljs.core.cst$sym$ITransientSet,cljs.core.cst$sym$IMultiFn,cljs.core.cst$sym$IChunkedSeq,cljs.core.cst$sym$IChunkedNext,cljs.core.cst$sym$IComparable,cljs.core.cst$sym$INamed,cljs.core.cst$sym$ICloneable,cljs.core.cst$sym$IAtom,cljs.core.cst$sym$IReset,cljs.core.cst$sym$ISwap], true)),cljs.core.iterate((function (p__10444){
var vec__10445 = p__10444;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10445,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10445,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(b << (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(){
var args__5544__auto__ = [];
var len__5537__auto___10449 = arguments.length;
var i__5538__auto___10450 = (0);
while(true){
if((i__5538__auto___10450 < len__5537__auto___10449)){
args__5544__auto__.push((arguments[i__5538__auto___10450]));

var G__10451 = (i__5538__auto___10450 + (1));
i__5538__auto___10450 = G__10451;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq10446){
var G__10447 = cljs.core.first(seq10446);
var seq10446__$1 = cljs.core.next(seq10446);
var G__10448 = cljs.core.first(seq10446__$1);
var seq10446__$2 = cljs.core.next(seq10446__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__10447,G__10448,seq10446__$2);
});

cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean);
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__4486__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$dot,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__4486__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,cljs.analyzer.infer_tag(env,ast));
} else {
return and__4486__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 * returns logical false (nil or false), and returns that value and
 * doesn't evaluate any of the other expressions, otherwise it returns
 * the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(){
var args10455 = [];
var len__5537__auto___10462 = arguments.length;
var i__5538__auto___10463 = (0);
while(true){
if((i__5538__auto___10463 < len__5537__auto___10462)){
args10455.push((arguments[i__5538__auto___10463]));

var G__10464 = (i__5538__auto___10463 + (1));
i__5538__auto___10463 = G__10464;
continue;
} else {
}
break;
}

var G__10461 = args10455.length;
switch (G__10461) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10455.slice((3)),(0)));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5556__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__10452_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__10452_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__10453_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__10453_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,and_str),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__10454__auto__),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__10454__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),next)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__10454__auto__)], 0)))))], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq10456){
var G__10457 = cljs.core.first(seq10456);
var seq10456__$1 = cljs.core.next(seq10456);
var G__10458 = cljs.core.first(seq10456__$1);
var seq10456__$2 = cljs.core.next(seq10456__$1);
var G__10459 = cljs.core.first(seq10456__$2);
var seq10456__$3 = cljs.core.next(seq10456__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__10457,G__10458,G__10459,seq10456__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 * returns a logical true value, or returns that value and doesn't
 * evaluate any of the other expressions, otherwise it returns the
 * value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(){
var args10469 = [];
var len__5537__auto___10476 = arguments.length;
var i__5538__auto___10477 = (0);
while(true){
if((i__5538__auto___10477 < len__5537__auto___10476)){
args10469.push((arguments[i__5538__auto___10477]));

var G__10478 = (i__5538__auto___10477 + (1));
i__5538__auto___10477 = G__10478;
continue;
} else {
}
break;
}

var G__10475 = args10469.length;
switch (G__10475) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10469.slice((3)),(0)));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5556__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__10466_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__10466_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__10467_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__10467_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,or_str),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__10468__auto__),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__10468__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__10468__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),next))))], 0)))))], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq10470){
var G__10471 = cljs.core.first(seq10470);
var seq10470__$1 = cljs.core.next(seq10470);
var G__10472 = cljs.core.first(seq10470__$1);
var seq10470__$2 = cljs.core.next(seq10470__$1);
var G__10473 = cljs.core.first(seq10470__$2);
var seq10470__$3 = cljs.core.next(seq10470__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__10471,G__10472,G__10473,seq10470__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH__EQ_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(!~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} != ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} == ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"~{}"),cljs.core.cst$sym$js_STAR_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),x),"(~{} != null && ~{} !== false)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),obj),"delete ~{}[~{}]"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,obj),key),"~{} in ~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement.
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger;"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"~{} === true"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"~{} === false"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"typeof ~{} === 'string'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true)),"typeof ~{} !== 'undefined'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(void 0 === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,b),a),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,t,o){
return cljs.core$macros.bool_expr((((t instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,t),o),"(~{} instanceof ~{})"),cljs.core.cst$sym$js_STAR_):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$t__10480__auto__),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$o__10481__auto__),cljs.core._conj(cljs.core.List.EMPTY,o)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$o__10481__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$t__10480__auto__)], 0)))))], 0))))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"typeof ~{} === 'number'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Symbol),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0)))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Keyword),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0)))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(){
var args10482 = [];
var len__5537__auto___10490 = arguments.length;
var i__5538__auto___10491 = (0);
while(true){
if((i__5538__auto___10491 < len__5537__auto___10490)){
args10482.push((arguments[i__5538__auto___10491]));

var G__10492 = (i__5538__auto___10491 + (1));
i__5538__auto___10491 = G__10492;
continue;
} else {
}
break;
}

var G__10489 = args10482.length;
switch (G__10489) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10482.slice((4)),(0)));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,i),a),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('')),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core._conj(cljs.core.List.EMPTY,i),idxs], 0))));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq10483){
var G__10484 = cljs.core.first(seq10483);
var seq10483__$1 = cljs.core.next(seq10483);
var G__10485 = cljs.core.first(seq10483__$1);
var seq10483__$2 = cljs.core.next(seq10483__$1);
var G__10486 = cljs.core.first(seq10483__$2);
var seq10483__$3 = cljs.core.next(seq10483__$2);
var G__10487 = cljs.core.first(seq10483__$3);
var seq10483__$4 = cljs.core.next(seq10483__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__10484,G__10485,G__10486,G__10487,seq10483__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(){
var args10494 = [];
var len__5537__auto___10503 = arguments.length;
var i__5538__auto___10504 = (0);
while(true){
if((i__5538__auto___10504 < len__5537__auto___10503)){
args10494.push((arguments[i__5538__auto___10504]));

var G__10505 = (i__5538__auto___10504 + (1));
i__5538__auto___10504 = G__10505;
continue;
} else {
}
break;
}

var G__10502 = args10494.length;
switch (G__10502) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10494.slice((5)),(0)));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5556__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),i),a),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('')),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,idx2),idxv], 0))));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq10495){
var G__10496 = cljs.core.first(seq10495);
var seq10495__$1 = cljs.core.next(seq10495);
var G__10497 = cljs.core.first(seq10495__$1);
var seq10495__$2 = cljs.core.next(seq10495__$1);
var G__10498 = cljs.core.first(seq10495__$2);
var seq10495__$3 = cljs.core.next(seq10495__$2);
var G__10499 = cljs.core.first(seq10495__$3);
var seq10495__$4 = cljs.core.next(seq10495__$3);
var G__10500 = cljs.core.first(seq10495__$4);
var seq10495__$5 = cljs.core.next(seq10495__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__10496,G__10497,G__10498,G__10499,G__10500,seq10495__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(){
var args10507 = [];
var len__5537__auto___10515 = arguments.length;
var i__5538__auto___10516 = (0);
while(true){
if((i__5538__auto___10516 < len__5537__auto___10515)){
args10507.push((arguments[i__5538__auto___10516]));

var G__10517 = (i__5538__auto___10516 + (1));
i__5538__auto___10516 = G__10517;
continue;
} else {
}
break;
}

var G__10514 = args10507.length;
switch (G__10514) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10507.slice((4)),(0)));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} + ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__PLUS_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__PLUS_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq10508){
var G__10509 = cljs.core.first(seq10508);
var seq10508__$1 = cljs.core.next(seq10508);
var G__10510 = cljs.core.first(seq10508__$1);
var seq10508__$2 = cljs.core.next(seq10508__$1);
var G__10511 = cljs.core.first(seq10508__$2);
var seq10508__$3 = cljs.core.next(seq10508__$2);
var G__10512 = cljs.core.first(seq10508__$3);
var seq10508__$4 = cljs.core.next(seq10508__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__10509,G__10510,G__10511,G__10512,seq10508__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(){
var args__5544__auto__ = [];
var len__5537__auto___10522 = arguments.length;
var i__5538__auto___10523 = (0);
while(true){
if((i__5538__auto___10523 < len__5537__auto___10522)){
args__5544__auto__.push((arguments[i__5538__auto___10523]));

var G__10524 = (i__5538__auto___10523 + (1));
i__5538__auto___10523 = G__10524;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq10519){
var G__10520 = cljs.core.first(seq10519);
var seq10519__$1 = cljs.core.next(seq10519);
var G__10521 = cljs.core.first(seq10519__$1);
var seq10519__$2 = cljs.core.next(seq10519__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__10520,G__10521,seq10519__$2);
});

cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(){
var args__5544__auto__ = [];
var len__5537__auto___10528 = arguments.length;
var i__5538__auto___10529 = (0);
while(true){
if((i__5538__auto___10529 < len__5537__auto___10528)){
args__5544__auto__.push((arguments[i__5538__auto___10529]));

var G__10530 = (i__5538__auto___10529 + (1));
i__5538__auto___10529 = G__10530;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq10525){
var G__10526 = cljs.core.first(seq10525);
var seq10525__$1 = cljs.core.next(seq10525);
var G__10527 = cljs.core.first(seq10525__$1);
var seq10525__$2 = cljs.core.next(seq10525__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__10526,G__10527,seq10525__$2);
});

cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dec),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dec),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(){
var args__5544__auto__ = [];
var len__5537__auto___10534 = arguments.length;
var i__5538__auto___10535 = (0);
while(true){
if((i__5538__auto___10535 < len__5537__auto___10534)){
args__5544__auto__.push((arguments[i__5538__auto___10535]));

var G__10536 = (i__5538__auto___10535 + (1));
i__5538__auto___10535 = G__10536;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__SLASH_),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq10531){
var G__10532 = cljs.core.first(seq10531);
var seq10531__$1 = cljs.core.next(seq10531);
var G__10533 = cljs.core.first(seq10531__$1);
var seq10531__$2 = cljs.core.next(seq10531__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__10532,G__10533,seq10531__$2);
});

cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(){
var args__5544__auto__ = [];
var len__5537__auto___10540 = arguments.length;
var i__5538__auto___10541 = (0);
while(true){
if((i__5538__auto___10541 < len__5537__auto___10540)){
args__5544__auto__.push((arguments[i__5538__auto___10541]));

var G__10542 = (i__5538__auto___10541 + (1));
i__5538__auto___10541 = G__10542;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq10537){
var G__10538 = cljs.core.first(seq10537);
var seq10537__$1 = cljs.core.next(seq10537);
var G__10539 = cljs.core.first(seq10537__$1);
var seq10537__$2 = cljs.core.next(seq10537__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__10538,G__10539,seq10537__$2);
});

cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(){
var args__5544__auto__ = [];
var len__5537__auto___10546 = arguments.length;
var i__5538__auto___10547 = (0);
while(true){
if((i__5538__auto___10547 < len__5537__auto___10546)){
args__5544__auto__.push((arguments[i__5538__auto___10547]));

var G__10548 = (i__5538__auto___10547 + (1));
i__5538__auto___10547 = G__10548;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq10543){
var G__10544 = cljs.core.first(seq10543);
var seq10543__$1 = cljs.core.next(seq10543);
var G__10545 = cljs.core.first(seq10543__$1);
var seq10543__$2 = cljs.core.next(seq10543__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__10544,G__10545,seq10543__$2);
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_mod),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(){
var args__5544__auto__ = [];
var len__5537__auto___10552 = arguments.length;
var i__5538__auto___10553 = (0);
while(true){
if((i__5538__auto___10553 < len__5537__auto___10552)){
args__5544__auto__.push((arguments[i__5538__auto___10553]));

var G__10554 = (i__5538__auto___10553 + (1));
i__5538__auto___10553 = G__10554;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq10549){
var G__10550 = cljs.core.first(seq10549);
var seq10549__$1 = cljs.core.next(seq10549);
var G__10551 = cljs.core.first(seq10549__$1);
var seq10549__$2 = cljs.core.next(seq10549__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__10550,G__10551,seq10549__$2);
});

cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(){
var args__5544__auto__ = [];
var len__5537__auto___10558 = arguments.length;
var i__5538__auto___10559 = (0);
while(true){
if((i__5538__auto___10559 < len__5537__auto___10558)){
args__5544__auto__.push((arguments[i__5538__auto___10559]));

var G__10560 = (i__5538__auto___10559 + (1));
i__5538__auto___10559 = G__10560;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq10555){
var G__10556 = cljs.core.first(seq10555);
var seq10555__$1 = cljs.core.next(seq10555);
var G__10557 = cljs.core.first(seq10555__$1);
var seq10555__$2 = cljs.core.next(seq10555__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__10556,G__10557,seq10555__$2);
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(){
var args10561 = [];
var len__5537__auto___10569 = arguments.length;
var i__5538__auto___10570 = (0);
while(true){
if((i__5538__auto___10570 < len__5537__auto___10569)){
args10561.push((arguments[i__5538__auto___10570]));

var G__10571 = (i__5538__auto___10570 + (1));
i__5538__auto___10570 = G__10571;
continue;
} else {
}
break;
}

var G__10568 = args10561.length;
switch (G__10568) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10561.slice((4)),(0)));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(- ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} - ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq10562){
var G__10563 = cljs.core.first(seq10562);
var seq10562__$1 = cljs.core.next(seq10562);
var G__10564 = cljs.core.first(seq10562__$1);
var seq10562__$2 = cljs.core.next(seq10562__$1);
var G__10565 = cljs.core.first(seq10562__$2);
var seq10562__$3 = cljs.core.next(seq10562__$2);
var G__10566 = cljs.core.first(seq10562__$3);
var seq10562__$4 = cljs.core.next(seq10562__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__10563,G__10564,G__10565,G__10566,seq10562__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(){
var args10573 = [];
var len__5537__auto___10581 = arguments.length;
var i__5538__auto___10582 = (0);
while(true){
if((i__5538__auto___10582 < len__5537__auto___10581)){
args10573.push((arguments[i__5538__auto___10582]));

var G__10583 = (i__5538__auto___10582 + (1));
i__5538__auto___10582 = G__10583;
continue;
} else {
}
break;
}

var G__10580 = args10573.length;
switch (G__10580) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10573.slice((4)),(0)));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} * ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq10574){
var G__10575 = cljs.core.first(seq10574);
var seq10574__$1 = cljs.core.next(seq10574);
var G__10576 = cljs.core.first(seq10574__$1);
var seq10574__$2 = cljs.core.next(seq10574__$1);
var G__10577 = cljs.core.first(seq10574__$2);
var seq10574__$3 = cljs.core.next(seq10574__$2);
var G__10578 = cljs.core.first(seq10574__$3);
var seq10574__$4 = cljs.core.next(seq10574__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__10575,G__10576,G__10577,G__10578,seq10574__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(){
var args10585 = [];
var len__5537__auto___10593 = arguments.length;
var i__5538__auto___10594 = (0);
while(true){
if((i__5538__auto___10594 < len__5537__auto___10593)){
args10585.push((arguments[i__5538__auto___10594]));

var G__10595 = (i__5538__auto___10594 + (1));
i__5538__auto___10594 = G__10595;
continue;
} else {
}
break;
}

var G__10592 = args10585.length;
switch (G__10592) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10585.slice((4)),(0)));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq10586){
var G__10587 = cljs.core.first(seq10586);
var seq10586__$1 = cljs.core.next(seq10586);
var G__10588 = cljs.core.first(seq10586__$1);
var seq10586__$2 = cljs.core.next(seq10586__$1);
var G__10589 = cljs.core.first(seq10586__$2);
var seq10586__$3 = cljs.core.next(seq10586__$2);
var G__10590 = cljs.core.first(seq10586__$3);
var seq10586__$4 = cljs.core.next(seq10586__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__10587,G__10588,G__10589,G__10590,seq10586__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(){
var args10597 = [];
var len__5537__auto___10605 = arguments.length;
var i__5538__auto___10606 = (0);
while(true){
if((i__5538__auto___10606 < len__5537__auto___10605)){
args10597.push((arguments[i__5538__auto___10606]));

var G__10607 = (i__5538__auto___10606 + (1));
i__5538__auto___10606 = G__10607;
continue;
} else {
}
break;
}

var G__10604 = args10597.length;
switch (G__10604) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10597.slice((4)),(0)));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq10598){
var G__10599 = cljs.core.first(seq10598);
var seq10598__$1 = cljs.core.next(seq10598);
var G__10600 = cljs.core.first(seq10598__$1);
var seq10598__$2 = cljs.core.next(seq10598__$1);
var G__10601 = cljs.core.first(seq10598__$2);
var seq10598__$3 = cljs.core.next(seq10598__$2);
var G__10602 = cljs.core.first(seq10598__$3);
var seq10598__$4 = cljs.core.next(seq10598__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__10599,G__10600,G__10601,G__10602,seq10598__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(){
var args10609 = [];
var len__5537__auto___10617 = arguments.length;
var i__5538__auto___10618 = (0);
while(true){
if((i__5538__auto___10618 < len__5537__auto___10617)){
args10609.push((arguments[i__5538__auto___10618]));

var G__10619 = (i__5538__auto___10618 + (1));
i__5538__auto___10618 = G__10619;
continue;
} else {
}
break;
}

var G__10616 = args10609.length;
switch (G__10616) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10609.slice((4)),(0)));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} < ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq10610){
var G__10611 = cljs.core.first(seq10610);
var seq10610__$1 = cljs.core.next(seq10610);
var G__10612 = cljs.core.first(seq10610__$1);
var seq10610__$2 = cljs.core.next(seq10610__$1);
var G__10613 = cljs.core.first(seq10610__$2);
var seq10610__$3 = cljs.core.next(seq10610__$2);
var G__10614 = cljs.core.first(seq10610__$3);
var seq10610__$4 = cljs.core.next(seq10610__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__10611,G__10612,G__10613,G__10614,seq10610__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(){
var args10621 = [];
var len__5537__auto___10629 = arguments.length;
var i__5538__auto___10630 = (0);
while(true){
if((i__5538__auto___10630 < len__5537__auto___10629)){
args10621.push((arguments[i__5538__auto___10630]));

var G__10631 = (i__5538__auto___10630 + (1));
i__5538__auto___10630 = G__10631;
continue;
} else {
}
break;
}

var G__10628 = args10621.length;
switch (G__10628) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10621.slice((4)),(0)));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} <= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq10622){
var G__10623 = cljs.core.first(seq10622);
var seq10622__$1 = cljs.core.next(seq10622);
var G__10624 = cljs.core.first(seq10622__$1);
var seq10622__$2 = cljs.core.next(seq10622__$1);
var G__10625 = cljs.core.first(seq10622__$2);
var seq10622__$3 = cljs.core.next(seq10622__$2);
var G__10626 = cljs.core.first(seq10622__$3);
var seq10622__$4 = cljs.core.next(seq10622__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__10623,G__10624,G__10625,G__10626,seq10622__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(){
var args10633 = [];
var len__5537__auto___10641 = arguments.length;
var i__5538__auto___10642 = (0);
while(true){
if((i__5538__auto___10642 < len__5537__auto___10641)){
args10633.push((arguments[i__5538__auto___10642]));

var G__10643 = (i__5538__auto___10642 + (1));
i__5538__auto___10642 = G__10643;
continue;
} else {
}
break;
}

var G__10640 = args10633.length;
switch (G__10640) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10633.slice((4)),(0)));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} > ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq10634){
var G__10635 = cljs.core.first(seq10634);
var seq10634__$1 = cljs.core.next(seq10634);
var G__10636 = cljs.core.first(seq10634__$1);
var seq10634__$2 = cljs.core.next(seq10634__$1);
var G__10637 = cljs.core.first(seq10634__$2);
var seq10634__$3 = cljs.core.next(seq10634__$2);
var G__10638 = cljs.core.first(seq10634__$3);
var seq10634__$4 = cljs.core.next(seq10634__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__10635,G__10636,G__10637,G__10638,seq10634__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(){
var args10645 = [];
var len__5537__auto___10653 = arguments.length;
var i__5538__auto___10654 = (0);
while(true){
if((i__5538__auto___10654 < len__5537__auto___10653)){
args10645.push((arguments[i__5538__auto___10654]));

var G__10655 = (i__5538__auto___10654 + (1));
i__5538__auto___10654 = G__10655;
continue;
} else {
}
break;
}

var G__10652 = args10645.length;
switch (G__10652) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10645.slice((4)),(0)));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} >= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq10646){
var G__10647 = cljs.core.first(seq10646);
var seq10646__$1 = cljs.core.next(seq10646);
var G__10648 = cljs.core.first(seq10646__$1);
var seq10646__$2 = cljs.core.next(seq10646__$1);
var G__10649 = cljs.core.first(seq10646__$2);
var seq10646__$3 = cljs.core.next(seq10646__$2);
var G__10650 = cljs.core.first(seq10646__$3);
var seq10646__$4 = cljs.core.next(seq10646__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__10647,G__10648,G__10649,G__10650,seq10646__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(){
var args10657 = [];
var len__5537__auto___10665 = arguments.length;
var i__5538__auto___10666 = (0);
while(true){
if((i__5538__auto___10666 < len__5537__auto___10665)){
args10657.push((arguments[i__5538__auto___10666]));

var G__10667 = (i__5538__auto___10666 + (1));
i__5538__auto___10666 = G__10667;
continue;
} else {
}
break;
}

var G__10664 = args10657.length;
switch (G__10664) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10657.slice((4)),(0)));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq10658){
var G__10659 = cljs.core.first(seq10658);
var seq10658__$1 = cljs.core.next(seq10658);
var G__10660 = cljs.core.first(seq10658__$1);
var seq10658__$2 = cljs.core.next(seq10658__$1);
var G__10661 = cljs.core.first(seq10658__$2);
var seq10658__$3 = cljs.core.next(seq10658__$2);
var G__10662 = cljs.core.first(seq10658__$3);
var seq10658__$4 = cljs.core.next(seq10658__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__10659,G__10660,G__10661,G__10662,seq10658__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(){
var args10671 = [];
var len__5537__auto___10679 = arguments.length;
var i__5538__auto___10680 = (0);
while(true){
if((i__5538__auto___10680 < len__5537__auto___10679)){
args10671.push((arguments[i__5538__auto___10680]));

var G__10681 = (i__5538__auto___10680 + (1));
i__5538__auto___10680 = G__10681;
continue;
} else {
}
break;
}

var G__10678 = args10671.length;
switch (G__10678) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10671.slice((4)),(0)));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10669__auto__),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__10670__auto__),cljs.core._conj(cljs.core.List.EMPTY,y)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10669__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__10670__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10669__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__10670__auto__)], 0)))))], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_max),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_max),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq10672){
var G__10673 = cljs.core.first(seq10672);
var seq10672__$1 = cljs.core.next(seq10672);
var G__10674 = cljs.core.first(seq10672__$1);
var seq10672__$2 = cljs.core.next(seq10672__$1);
var G__10675 = cljs.core.first(seq10672__$2);
var seq10672__$3 = cljs.core.next(seq10672__$2);
var G__10676 = cljs.core.first(seq10672__$3);
var seq10672__$4 = cljs.core.next(seq10672__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__10673,G__10674,G__10675,G__10676,seq10672__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(){
var args10685 = [];
var len__5537__auto___10693 = arguments.length;
var i__5538__auto___10694 = (0);
while(true){
if((i__5538__auto___10694 < len__5537__auto___10693)){
args10685.push((arguments[i__5538__auto___10694]));

var G__10695 = (i__5538__auto___10694 + (1));
i__5538__auto___10694 = G__10695;
continue;
} else {
}
break;
}

var G__10692 = args10685.length;
switch (G__10692) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10685.slice((4)),(0)));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10683__auto__),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__10684__auto__),cljs.core._conj(cljs.core.List.EMPTY,y)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10683__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__10684__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10683__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__10684__auto__)], 0)))))], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_min),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_min),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq10686){
var G__10687 = cljs.core.first(seq10686);
var seq10686__$1 = cljs.core.next(seq10686);
var G__10688 = cljs.core.first(seq10686__$1);
var seq10686__$2 = cljs.core.next(seq10686__$1);
var G__10689 = cljs.core.first(seq10686__$2);
var seq10686__$3 = cljs.core.next(seq10686__$2);
var G__10690 = cljs.core.first(seq10686__$3);
var seq10686__$4 = cljs.core.next(seq10686__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__10687,G__10688,G__10689,G__10690,seq10686__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,div),num),"(~{} % ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(~ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(){
var args10697 = [];
var len__5537__auto___10705 = arguments.length;
var i__5538__auto___10706 = (0);
while(true){
if((i__5538__auto___10706 < len__5537__auto___10705)){
args10697.push((arguments[i__5538__auto___10706]));

var G__10707 = (i__5538__auto___10706 + (1));
i__5538__auto___10706 = G__10707;
continue;
} else {
}
break;
}

var G__10704 = args10697.length;
switch (G__10704) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10697.slice((4)),(0)));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq10698){
var G__10699 = cljs.core.first(seq10698);
var seq10698__$1 = cljs.core.next(seq10698);
var G__10700 = cljs.core.first(seq10698__$1);
var seq10698__$2 = cljs.core.next(seq10698__$1);
var G__10701 = cljs.core.first(seq10698__$2);
var seq10698__$3 = cljs.core.next(seq10698__$2);
var G__10702 = cljs.core.first(seq10698__$3);
var seq10698__$4 = cljs.core.next(seq10698__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__10699,G__10700,G__10701,G__10702,seq10698__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(){
var args10709 = [];
var len__5537__auto___10717 = arguments.length;
var i__5538__auto___10718 = (0);
while(true){
if((i__5538__auto___10718 < len__5537__auto___10717)){
args10709.push((arguments[i__5538__auto___10718]));

var G__10719 = (i__5538__auto___10718 + (1));
i__5538__auto___10718 = G__10719;
continue;
} else {
}
break;
}

var G__10716 = args10709.length;
switch (G__10716) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10709.slice((4)),(0)));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq10710){
var G__10711 = cljs.core.first(seq10710);
var seq10710__$1 = cljs.core.next(seq10710);
var G__10712 = cljs.core.first(seq10710__$1);
var seq10710__$2 = cljs.core.next(seq10710__$1);
var G__10713 = cljs.core.first(seq10710__$2);
var seq10710__$3 = cljs.core.next(seq10710__$2);
var G__10714 = cljs.core.first(seq10710__$3);
var seq10710__$4 = cljs.core.next(seq10710__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__10711,G__10712,G__10713,G__10714,seq10710__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(){
var args10721 = [];
var len__5537__auto___10729 = arguments.length;
var i__5538__auto___10730 = (0);
while(true){
if((i__5538__auto___10730 < len__5537__auto___10729)){
args10721.push((arguments[i__5538__auto___10730]));

var G__10731 = (i__5538__auto___10730 + (1));
i__5538__auto___10730 = G__10731;
continue;
} else {
}
break;
}

var G__10728 = args10721.length;
switch (G__10728) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10721.slice((4)),(0)));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} | ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_or),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_or),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq10722){
var G__10723 = cljs.core.first(seq10722);
var seq10722__$1 = cljs.core.next(seq10722);
var G__10724 = cljs.core.first(seq10722__$1);
var seq10722__$2 = cljs.core.next(seq10722__$1);
var G__10725 = cljs.core.first(seq10722__$2);
var seq10722__$3 = cljs.core.next(seq10722__$2);
var G__10726 = cljs.core.first(seq10722__$3);
var seq10722__$4 = cljs.core.next(seq10722__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__10723,G__10724,G__10725,G__10726,seq10722__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(){
var args10733 = [];
var len__5537__auto___10741 = arguments.length;
var i__5538__auto___10742 = (0);
while(true){
if((i__5538__auto___10742 < len__5537__auto___10741)){
args10733.push((arguments[i__5538__auto___10742]));

var G__10743 = (i__5538__auto___10742 + (1));
i__5538__auto___10742 = G__10743;
continue;
} else {
}
break;
}

var G__10740 = args10733.length;
switch (G__10740) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10733.slice((4)),(0)));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} ^ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_xor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_xor),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq10734){
var G__10735 = cljs.core.first(seq10734);
var seq10734__$1 = cljs.core.next(seq10734);
var G__10736 = cljs.core.first(seq10734__$1);
var seq10734__$2 = cljs.core.next(seq10734__$1);
var G__10737 = cljs.core.first(seq10734__$2);
var seq10734__$3 = cljs.core.next(seq10734__$2);
var G__10738 = cljs.core.first(seq10734__$3);
var seq10734__$4 = cljs.core.next(seq10734__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__10735,G__10736,G__10737,G__10738,seq10734__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(){
var args10745 = [];
var len__5537__auto___10753 = arguments.length;
var i__5538__auto___10754 = (0);
while(true){
if((i__5538__auto___10754 < len__5537__auto___10753)){
args10745.push((arguments[i__5538__auto___10754]));

var G__10755 = (i__5538__auto___10754 + (1));
i__5538__auto___10754 = G__10755;
continue;
} else {
}
break;
}

var G__10752 = args10745.length;
switch (G__10752) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args10745.slice((4)),(0)));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5556__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} & ~~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_and_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_bit_DASH_and_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq10746){
var G__10747 = cljs.core.first(seq10746);
var seq10746__$1 = cljs.core.next(seq10746);
var G__10748 = cljs.core.first(seq10746__$1);
var seq10746__$2 = cljs.core.next(seq10746__$1);
var G__10749 = cljs.core.first(seq10746__$2);
var seq10746__$3 = cljs.core.next(seq10746__$2);
var G__10750 = cljs.core.first(seq10746__$3);
var seq10746__$4 = cljs.core.next(seq10746__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__10747,G__10748,G__10749,G__10750,seq10746__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} & ~(1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} ^ (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"((~{} & (1 << ~{})) != 0)"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} >> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} | (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,shift),hash),"((~{} >>> ~{}) & 0x01f)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mask),cljs.core._conj(cljs.core.List.EMPTY,hash),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,shift)], 0))))),"(1 << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$hash_DASH_key)], 0)))].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__10757__auto__),cljs.core._conj(cljs.core.List.EMPTY,hash_key)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__10757__auto__))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__10757__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__10757__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,hash_fn),cljs.core._conj(cljs.core.List.EMPTY,coll)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,hash_key),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__10757__auto__)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__10757__auto__)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,doc),cljs.core._conj(cljs.core.List.EMPTY,meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cargs),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10758__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,name),cargs,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10758__auto__)], 0)))))], 0))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,args),body))))], 0))));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 * param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(){
var args__5544__auto__ = [];
var len__5537__auto___10766 = arguments.length;
var i__5538__auto___10767 = (0);
while(true){
if((i__5538__auto___10767 < len__5537__auto___10766)){
args__5544__auto__.push((arguments[i__5538__auto___10767]));

var G__10768 = (i__5538__auto___10767 + (1));
i__5538__auto___10767 = G__10768;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((6) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((6)),(0))):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5545__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq10759){
var G__10760 = cljs.core.first(seq10759);
var seq10759__$1 = cljs.core.next(seq10759);
var G__10761 = cljs.core.first(seq10759__$1);
var seq10759__$2 = cljs.core.next(seq10759__$1);
var G__10762 = cljs.core.first(seq10759__$2);
var seq10759__$3 = cljs.core.next(seq10759__$2);
var G__10763 = cljs.core.first(seq10759__$3);
var seq10759__$4 = cljs.core.next(seq10759__$3);
var G__10764 = cljs.core.first(seq10759__$4);
var seq10759__$5 = cljs.core.next(seq10759__$4);
var G__10765 = cljs.core.first(seq10759__$5);
var seq10759__$6 = cljs.core.next(seq10759__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__10760,G__10761,G__10762,G__10763,G__10764,G__10765,seq10759__$6);
});

cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,f1))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,clojure.walk.postwalk((function (p1__10769_SHARP_){
if(cljs.core.sequential_QMARK_(p1__10769_SHARP_)){
return ((cljs.core.vector_QMARK_(p1__10769_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([k], true),p1__10769_SHARP_));
} else {
return p1__10769_SHARP_;
}
}),fkv)),cljs.core._conj(cljs.core.List.EMPTY,fkv)], 0))));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__10770,fkv){
var vec__10772 = p__10770;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10772,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10772,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",cljs.core.cst$sym$object,"object",cljs.core.cst$sym$string,"string",cljs.core.cst$sym$number,"number",cljs.core.cst$sym$array,"array",cljs.core.cst$sym$function,"function",cljs.core.cst$sym$boolean,"boolean",cljs.core.cst$sym$default,"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Boolean,"boolean",cljs.core.cst$sym$js_SLASH_String,"string",cljs.core.cst$sym$js_SLASH_Array,"array",cljs.core.cst$sym$js_SLASH_Object,"object",cljs.core.cst$sym$js_SLASH_Number,"number",cljs.core.cst$sym$js_SLASH_Function,"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 * (reify options* specs*)
 * 
 * Currently there are no options.
 * 
 * Each spec consists of the protocol name followed by zero
 * or more method bodies:
 * 
 * protocol
 * (methodName [args+] body)*
 * 
 * Methods should be supplied for all methods of the desired
 * protocol(s). You can also define overrides for Object methods. Note that
 * the first parameter must be supplied to correspond to the target object
 * ('this' in JavaScript parlance). Note also that recur calls
 * to the method head should *not* pass the target object, it will be supplied
 * automatically and can not be substituted.
 * 
 * recur works to method heads The method bodies of reify are lexical
 * closures, and can refer to the surrounding local scope:
 * 
 * (str (let [f "foo"]
 * (reify Object
 * (toString [this] f))))
 * == "foo"
 * 
 * (seq (let [f "foo"]
 * (reify ISeqable
 * (-seq [this] (-seq f)))))
 * == (\f \o \o))
 * 
 * reify always implements IMeta and IWithMeta and transfers meta
 * data of the form to the created object.
 * 
 * (meta ^{:k :v} (reify Object (toString [this] "foo")))
 * == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(){
var args__5544__auto__ = [];
var len__5537__auto___10776 = arguments.length;
var i__5538__auto___10777 = (0);
while(true){
if((i__5538__auto___10777 < len__5537__auto___10776)){
args__5544__auto__.push((arguments[i__5538__auto___10777]));

var G__10778 = (i__5538__auto___10777 + (1));
i__5538__auto___10777 = G__10778;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("t"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_deftype),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,cljs.core._conj(cljs.core.List.EMPTY,meta_sym)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IWithMeta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,this_sym),cljs.core._conj(cljs.core.List.EMPTY,meta_sym)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([locals,cljs.core._conj(cljs.core.List.EMPTY,meta_sym)], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IMeta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,this_sym)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,meta_sym)], 0))))),impls], 0)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([locals,cljs.core._conj(cljs.core.List.EMPTY,cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form)))], 0)))))], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq10773){
var G__10774 = cljs.core.first(seq10773);
var seq10773__$1 = cljs.core.next(seq10773);
var G__10775 = cljs.core.first(seq10773__$1);
var seq10773__$2 = cljs.core.next(seq10773__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__10774,G__10775,seq10773__$2);
});

cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(){
var args__5544__auto__ = [];
var len__5537__auto___10783 = arguments.length;
var i__5538__auto___10784 = (0);
while(true){
if((i__5538__auto___10784 < len__5537__auto___10783)){
args__5544__auto__.push((arguments[i__5538__auto___10784]));

var G__10785 = (i__5538__auto___10784 + (1));
i__5538__auto___10784 = G__10785;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,cljs.core.cst$kw$instance], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core._conj(cljs.core.List.EMPTY,expr)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([impls], 0))))),cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq10779){
var G__10780 = cljs.core.first(seq10779);
var seq10779__$1 = cljs.core.next(seq10779);
var G__10781 = cljs.core.first(seq10779__$1);
var seq10779__$2 = cljs.core.next(seq10779__$1);
var G__10782 = cljs.core.first(seq10779__$2);
var seq10779__$3 = cljs.core.next(seq10779__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10780,G__10781,G__10782,seq10779__$3);
});

cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify but does not mutate its first argument. The first
 * argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(){
var args__5544__auto__ = [];
var len__5537__auto___10790 = arguments.length;
var i__5538__auto___10791 = (0);
while(true){
if((i__5538__auto___10791 < len__5537__auto___10790)){
args__5544__auto__.push((arguments[i__5538__auto___10791]));

var G__10792 = (i__5538__auto___10791 + (1));
i__5538__auto___10791 = G__10792;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_clone),cljs.core._conj(cljs.core.List.EMPTY,expr))))),cljs.core.array_seq([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq10786){
var G__10787 = cljs.core.first(seq10786);
var seq10786__$1 = cljs.core.next(seq10786);
var G__10788 = cljs.core.first(seq10786__$1);
var seq10786__$2 = cljs.core.next(seq10786__$1);
var G__10789 = cljs.core.first(seq10786__$2);
var seq10786__$3 = cljs.core.next(seq10786__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__10787,G__10788,G__10789,seq10786__$3);
});

cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(){
var args__5544__auto__ = [];
var len__5537__auto___10797 = arguments.length;
var i__5538__auto___10798 = (0);
while(true){
if((i__5538__auto___10798 < len__5537__auto___10797)){
args__5544__auto__.push((arguments[i__5538__auto___10798]));

var G__10799 = (i__5538__auto___10798 + (1));
i__5538__auto___10798 = G__10799;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_this)))))))))),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq10793){
var G__10794 = cljs.core.first(seq10793);
var seq10793__$1 = cljs.core.next(seq10793);
var G__10795 = cljs.core.first(seq10793__$1);
var seq10793__$2 = cljs.core.next(seq10793__$1);
var G__10796 = cljs.core.first(seq10793__$2);
var seq10793__$3 = cljs.core.next(seq10793__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__10794,G__10795,G__10796,seq10793__$3);
});

cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,p)){
return null;
} else {
var temp__4423__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
}

if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.cst$kw$protocol_DASH_deprecated.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4486__auto__)){
var and__4486__auto____$1 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__4486__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__4486__auto____$1;
}
} else {
return and__4486__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),((function (var$,temp__4423__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),cljs.core.cst$kw$impls], null),cljs.core.conj,type);
});})(var$,temp__4423__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$undeclared.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$ret], 0)))].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__10800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__10801 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__10800;
s = G__10801;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__10802){
var vec__10806 = p__10802;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10806,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10806,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__10806,p,sigs){
return (function (p__10807){
var vec__10808 = p__10807;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10808,(0),null);
var meths = cljs.core.nthnext(vec__10808,(1));
var form = vec__10808;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths))),cljs.core.meta(form)))], 0))));
});})(psym,pfn_prefix,vec__10806,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__5392__auto__ = (function (){var G__10809 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10809) : cljs.core.atom.call(null,G__10809));
})();
var prefer_table__5393__auto__ = (function (){var G__10810 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10810) : cljs.core.atom.call(null,G__10810));
})();
var method_cache__5394__auto__ = (function (){var G__10811 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10811) : cljs.core.atom.call(null,G__10811));
})();
var cached_hierarchy__5395__auto__ = (function (){var G__10812 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10812) : cljs.core.atom.call(null,G__10812));
})();
var hierarchy__5396__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__){
return (function (tsym,sym){
return cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__,hierarchy__5396__auto__))
,cljs.core.cst$kw$default,hierarchy__5396__auto__,method_table__5392__auto__,prefer_table__5393__auto__,method_cache__5394__auto__,cached_hierarchy__5395__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$instance,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,tsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.to_property(sym))], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,tsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.to_property(sym))], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__10813){
var vec__10816 = p__10813;
var vec__10817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10816,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10817,(0),null);
var args = cljs.core.nthnext(vec__10817,(1));
var sig = vec__10817;
var body = cljs.core.nthnext(vec__10816,(1));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$this_DASH_as,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),body)),cljs.core.vec(args));
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__10818){
var vec__10821 = p__10818;
var vec__10822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10821,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10822,(0),null);
var args = cljs.core.nthnext(vec__10822,(1));
var sig = vec__10822;
var body = cljs.core.nthnext(vec__10821,(1));
var self_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.cons(self_sym,args))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,self_sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,this$),cljs.core._conj(cljs.core.List.EMPTY,self_sym)))))),cljs.core.array_seq([body], 0)))))], 0))))))));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__10823){
var vec__10826 = p__10823;
var vec__10827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10826,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10827,(0),null);
var args = cljs.core.nthnext(vec__10827,(1));
var sig = vec__10827;
var body = cljs.core.nthnext(vec__10826,(1));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(args)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type)),cljs.core.array_seq([body], 0))))))));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__10828){
var vec__10831 = p__10828;
var vec__10832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10831,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10832,(0),null);
var args = cljs.core.nthnext(vec__10832,(1));
var sig = vec__10832;
var body = cljs.core.nthnext(vec__10831,(1));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.cons(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),args))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,this$),cljs.core.array_seq([body], 0))))))));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10837){
var vec__10838 = p__10837;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10838,(0),null);
var meths = cljs.core.nthnext(vec__10838,(1));
var form = vec__10838;
var vec__10839 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10839,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10839,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10839,f__$1,meths__$1,vec__10838,f,meths,form){
return (function (p1__10833_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__10833_SHARP_);
});})(vec__10839,f__$1,meths__$1,vec__10838,f,meths,form))
,meths__$1)))),cljs.core.meta(form)))], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__10841){
var vec__10845 = p__10841;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10845,(0),null);
var meths = cljs.core.nthnext(vec__10845,(1));
var form = vec__10845;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10845,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__10846 = type_sym;
var G__10847 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__10846,G__10847) : cljs.core$macros.extend_prefix.call(null,G__10846,G__10847));
})()),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,meth)))),cljs.core.meta(form)))], 0))));
});})(vec__10845,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10845,f,meths,form){
return (function (p1__10840_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__10840_SHARP_);
});})(vec__10845,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__10849){
var vec__10851 = p__10849;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10851,(0),null);
var meths = cljs.core.nthnext(vec__10851,(1));
var form = vec__10851;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10851,f,meths,form){
return (function (p1__10848_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__10848_SHARP_);
});})(vec__10851,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,cljs.core.cst$sym$call) : cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.cst$sym$call))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths__$1))),cljs.core.meta(form)))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,cljs.core.cst$sym$apply) : cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.cst$sym$apply))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,this_sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_call),cljs.core._conj(cljs.core.List.EMPTY,this_sym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,this_sym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_array),cljs.core._conj(cljs.core.List.EMPTY,this_sym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj(cljs.core.List.EMPTY,argsym)))))], 0)))))], 0)))))], 0)))))], 0)))),cljs.core.meta(form)))], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__10852){
var vec__10860 = p__10852;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10860,(0),null);
var meths = cljs.core.nthnext(vec__10860,(1));
var form = vec__10860;
var pf = [cljs.core.str(pprefix),cljs.core.str(f)].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__10861 = type_sym;
var G__10862 = [cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__10861,G__10862) : cljs.core$macros.extend_prefix.call(null,G__10861,G__10862));
})()),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form)))], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__10860,f,meths,form){
return (function (p__10863){
var vec__10864 = p__10863;
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10864,(0),null);
var body = cljs.core.nthnext(vec__10864,(1));
var meth = vec__10864;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__10865 = type_sym;
var G__10866 = [cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__10865,G__10866) : cljs.core$macros.extend_prefix.call(null,G__10865,G__10866));
})()),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.adapt_proto_params(type,meth))))),cljs.core.meta(form)))], 0))));
});})(pf,vec__10860,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__10867){
var vec__10869 = p__10867;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10869,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10869,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(cljs.core.cst$kw$skip_DASH_protocol_DASH_flag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__10869,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,cljs.core.cst$sym$cljs$core_SLASH_IFn)){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__10869,p,sigs))
,cljs.core.array_seq([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
var minfo = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(var$));
var vec__10871 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(method),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(method),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10871,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10871,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_duped_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$invalid_DASH_arity,c], null));
} else {
}

var G__10872 = cljs.core.next(sigs__$1);
var G__10873 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__10872;
seen = G__10873;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,proto], null));
} else {
}

var seen_10876 = cljs.core.PersistentHashSet.EMPTY;
var methods_10877__$1 = methods$;
while(true){
if(cljs.core.seq(methods_10877__$1)){
var vec__10875_10878 = cljs.core.first(methods_10877__$1);
var fname_10879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10875_10878,(0),null);
var method_10880 = vec__10875_10878;
if(cljs.core.contains_QMARK_(seen_10876,fname_10879)){
cljs.analyzer.warning(cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,proto,cljs.core.cst$kw$method,fname_10879], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_10880);

var G__10881 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_10876,fname_10879);
var G__10882 = cljs.core.next(methods_10877__$1);
seen_10876 = G__10881;
methods_10877__$1 = G__10882;
continue;
} else {
}
break;
}

var G__10883 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__10884 = impls__$2;
protos = G__10883;
impls__$1 = G__10884;
continue;
} else {
return null;
}
break;
}
});
/**
 * Extend a type to a series of protocols. Useful when you are
 * supplying the definitions explicitly inline. Propagates the
 * type as a type hint on the first argument of all fns.
 * 
 * (extend-type MyType
 * ICounted
 * (-count [c] ...)
 * Foo
 * (bar [x y] ...)
 * (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(){
var args__5544__auto__ = [];
var len__5537__auto___10891 = arguments.length;
var i__5538__auto___10892 = (0);
while(true){
if((i__5538__auto___10892 < len__5537__auto___10891)){
args__5544__auto__.push((arguments[i__5538__auto___10892]));

var G__10893 = (i__5538__auto___10892 + (1));
i__5538__auto___10892 = G__10893;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var vec__10890 = (function (){var temp__4423__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__4423__auto__)){
var type = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10890,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10890,(1),null);
if(cljs.core.truth_((function (){var and__4486__auto__ = cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4486__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__4486__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_symbol,type_sym,cljs.core.cst$kw$suggested_DASH_symbol,(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,vec__10890,type,assign_impls){
return (function (p1__10885_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__10885_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__10885_SHARP_));
});})(env,_,resolve,impl_map,vec__10890,type,assign_impls))
,cljs.core.array_seq([impl_map], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq10886){
var G__10887 = cljs.core.first(seq10886);
var seq10886__$1 = cljs.core.next(seq10886);
var G__10888 = cljs.core.first(seq10886__$1);
var seq10886__$2 = cljs.core.next(seq10886__$1);
var G__10889 = cljs.core.first(seq10886__$2);
var seq10886__$3 = cljs.core.next(seq10886__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__10887,G__10888,G__10889,seq10886__$3);
});

cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
var parts__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
return parts__$2;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__10895){
var vec__10897 = p__10895;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10897,f,sigs){
return (function (p1__10894_SHARP_){
return cljs.core.cons(cljs.core.second(p1__10894_SHARP_),cljs.core.nnext(p1__10894_SHARP_));
});})(vec__10897,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(){
var args10898 = [];
var len__5537__auto___10901 = arguments.length;
var i__5538__auto___10902 = (0);
while(true){
if((i__5538__auto___10902 < len__5537__auto___10901)){
args10898.push((arguments[i__5538__auto___10902]));

var G__10903 = (i__5538__auto___10902 + (1));
i__5538__auto___10902 = G__10903;
continue;
} else {
}
break;
}

var G__10900 = args10898.length;
switch (G__10900) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10898.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_type,type,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,true,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__10905 = ret__$1;
var G__10906 = specs__$2;
ret = G__10905;
specs__$1 = G__10906;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;
cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10907_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p1__10907_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.cst$sym$_DASH__GT_),cljs.core.str(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$positional));
var field_values = (cljs.core.truth_(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.array_seq([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,fn_name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([field_values], 0)))))], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 * Currently there are no options.
 * 
 * Each spec consists of a protocol or interface name followed by zero
 * or more method bodies:
 * 
 * protocol-or-Object
 * (methodName [args*] body)*
 * 
 * The type will have the (by default, immutable) fields named by
 * fields, which can have type hints. Protocols and methods
 * are optional. The only methods that can be supplied are those
 * declared in the protocols/interfaces.  Note that method bodies are
 * not closures, the local environment includes only the named fields,
 * and those fields can be accessed directly. Fields can be qualified
 * with the metadata :mutable true at which point (set! afield aval) will be
 * supported in method bodies. Note well that mutable fields are extremely
 * difficult to use correctly, and are present only to facilitate the building
 * of higherlevel constructs, such as ClojureScript's reference types, in
 * ClojureScript itself. They are for experts only - if the semantics and
 * implications of :mutable are not immediately apparent to you, you should not
 * be using them.
 * 
 * Method definitions take the form:
 * 
 * (methodname [args*] body)
 * 
 * The argument and return types can be hinted on the arg and
 * methodname symbols. If not supplied, they will be inferred, so type
 * hints should be reserved for disambiguation.
 * 
 * Methods should be supplied for all methods of the desired
 * protocol(s). You can also define overrides for methods of Object. Note that
 * a parameter must be supplied to correspond to the target object
 * ('this' in JavaScript parlance). Note also that recur calls to the method
 * head should *not* pass the target object, it will be supplied
 * automatically and can not be substituted.
 * 
 * In the method bodies, the (unqualified) name can be used to name the
 * class (for calls to new, instance? etc).
 * 
 * One constructor will be defined, taking the designated fields.  Note
 * that the field names __meta and __extmap are currently reserved and
 * should not be used when defining your own types.
 * 
 * Given (deftype TypeName ...), a factory function called ->TypeName
 * will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(){
var args__5544__auto__ = [];
var len__5537__auto___10917 = arguments.length;
var i__5538__auto___10918 = (0);
while(true){
if((i__5538__auto___10918 < len__5537__auto___10917)){
args__5544__auto__.push((arguments[i__5538__auto___10918]));

var G__10919 = (i__5538__auto___10918 + (1));
i__5538__auto___10918 = G__10919;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((4) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((4)),(0))):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5545__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),t));
var vec__10916 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10916,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10916,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$deftype_STAR_),cljs.core._conj(cljs.core.List.EMPTY,t__$1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,fields),cljs.core._conj(cljs.core.List.EMPTY,pmasks),cljs.core._conj(cljs.core.List.EMPTY,((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),cljs.core._conj(cljs.core.List.EMPTY,t__$1),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))))))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10908__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__10909__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__10910__auto__)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__10909__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.build_positional_factory(t__$1,r,fields)),cljs.core._conj(cljs.core.List.EMPTY,t__$1)], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq10911){
var G__10912 = cljs.core.first(seq10911);
var seq10911__$1 = cljs.core.next(seq10911);
var G__10913 = cljs.core.first(seq10911__$1);
var seq10911__$2 = cljs.core.next(seq10911__$1);
var G__10914 = cljs.core.first(seq10911__$2);
var seq10911__$3 = cljs.core.next(seq10911__$2);
var G__10915 = cljs.core.first(seq10911__$3);
var seq10911__$4 = cljs.core.next(seq10911__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__10912,G__10913,G__10914,G__10915,seq10911__$4);
});

cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__10920_SHARP_){
return cljs.core.with_meta(p1__10920_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace(rname)),cljs.core.str("."),cljs.core.str(cljs.core.name(rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,cljs.core.cst$sym$__meta,cljs.core.array_seq([cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$IRecord,cljs.core.cst$sym$ICloneable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_clone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10921__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([fields__$2], 0)))))], 0)))),cljs.core.cst$sym$IHash,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_hash),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10922__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_caching_DASH_hash),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10922__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hash_DASH_imap),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__hash)], 0)))))], 0)))),cljs.core.cst$sym$IEquiv,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_equiv),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10923__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__10924__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__10924__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10923__auto__))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__10924__auto__)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_equiv_DASH_map),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10923__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__10924__auto__)], 0)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0)))),cljs.core.cst$sym$IMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10925__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0)))),cljs.core.cst$sym$IWithMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10926__auto__),cljs.core._conj(cljs.core.List.EMPTY,gs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$__meta,gs], null),fields__$2)], 0)))))], 0)))),cljs.core.cst$sym$ILookup,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10927__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10928__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10927__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10928__auto__),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10929__auto__),cljs.core._conj(cljs.core.List.EMPTY,ksym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__10930__auto__)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),cljs.core._conj(cljs.core.List.EMPTY,ksym),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,ksym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__10930__auto__)], 0)))))], 0)))))], 0)))),cljs.core.cst$sym$ICounted,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10931__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(base_fields)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)))))], 0)))))], 0)))),cljs.core.cst$sym$ICollection,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_conj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10932__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__10933__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__10933__auto__))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10932__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__10933__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__10933__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reduce),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10932__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__10933__auto__)], 0)))))], 0)))))], 0)))),cljs.core.cst$sym$IAssociative,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10934__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10935__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gs)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_condp),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keyword_DASH_identical_QMARK_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10935__auto__),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap.fromArray([fld,gs,cljs.core.cst$sym$__hash,null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10935__auto__),cljs.core._conj(cljs.core.List.EMPTY,gs)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))))], 0)))),cljs.core.cst$sym$IMap,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10936__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10937__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10937__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10936__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10937__auto__)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__10937__auto__)], 0))))))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))))], 0)))),cljs.core.cst$sym$ISeqable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10939__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__10938_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__10938_SHARP_),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__10938_SHARP_)),cljs.core.cst$sym$cljs$core_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0)))))))))], 0)))),cljs.core.cst$sym$IIterable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,gs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$RecordIter$),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gs),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(base_fields)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)))))], 0)))))], 0)))),cljs.core.cst$sym$IPrintWithWriter,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_pr_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10941__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__10942__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__10943__auto__)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__10944__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__10945__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__10942__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__10943__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__10945__auto__)], 0)))))], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__10942__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__10944__auto__),cljs.core._conj(cljs.core.List.EMPTY,pr_open),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__10943__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__10940_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__10940_SHARP_),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__10940_SHARP_)),cljs.core.cst$sym$cljs$core_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0)))))], 0)))))], 0)))))], 0))))], null));
var vec__10947 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10947,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10947,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defrecord_STAR_),cljs.core._conj(cljs.core.List.EMPTY,tagname__$1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,hinted_fields),cljs.core._conj(cljs.core.List.EMPTY,pmasks),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),cljs.core._conj(cljs.core.List.EMPTY,tagname__$1),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0)))))], 0))))))));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.cst$sym$map_DASH__GT_),cljs.core.str(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$map));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,ms))));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,fn_name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,ms)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([getters,cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,ms),cljs.core.array_seq([ks], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0))));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 * Currently there are no options.
 * 
 * Each spec consists of a protocol or interface name followed by zero
 * or more method bodies:
 * 
 * protocol-or-Object
 * (methodName [args*] body)*
 * 
 * The record will have the (immutable) fields named by
 * fields, which can have type hints. Protocols and methods
 * are optional. The only methods that can be supplied are those
 * declared in the protocols.  Note that method bodies are
 * not closures, the local environment includes only the named fields,
 * and those fields can be accessed directly.
 * 
 * Method definitions take the form:
 * 
 * (methodname [args*] body)
 * 
 * The argument and return types can be hinted on the arg and
 * methodname symbols. If not supplied, they will be inferred, so type
 * hints should be reserved for disambiguation.
 * 
 * Methods should be supplied for all methods of the desired
 * protocol(s). You can also define overrides for
 * methods of Object. Note that a parameter must be supplied to
 * correspond to the target object ('this' in JavaScript parlance). Note also
 * that recur calls to the method head should *not* pass the target object, it
 * will be supplied automatically and can not be substituted.
 * 
 * In the method bodies, the (unqualified) name can be used to name the
 * class (for calls to new, instance? etc).
 * 
 * The type will have implementations of several ClojureScript
 * protocol generated automatically: IMeta/IWithMeta (metadata support) and
 * IMap, etc.
 * 
 * In addition, defrecord will define type-and-value-based =,
 * and will define ClojureScript IHash and IEquiv.
 * 
 * Two constructors will be defined, one taking the designated fields
 * followed by a metadata map (nil for none) and an extension field
 * map (nil for none), and one taking only the fields (using nil for
 * meta and extension fields). Note that the field names __meta
 * and __extmap are currently reserved and should not be used when
 * defining your own records.
 * 
 * Given (defrecord TypeName ...), two factory functions will be
 * defined: ->TypeName, taking positional parameters for the fields,
 * and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(){
var args__5544__auto__ = [];
var len__5537__auto___10955 = arguments.length;
var i__5538__auto___10956 = (0);
while(true){
if((i__5538__auto___10956 < len__5537__auto___10955)){
args__5544__auto__.push((arguments[i__5538__auto___10956]));

var G__10957 = (i__5538__auto___10956 + (1));
i__5538__auto___10956 = G__10957;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((4) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((4)),(0))):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5545__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),rsym__$1)),cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))))))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrSeq),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10948__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__10948__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__10949__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__10949__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.build_positional_factory(rsym__$1,r,fields)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.build_map_factory(rsym__$1,r,fields)),cljs.core._conj(cljs.core.List.EMPTY,r)], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq10950){
var G__10951 = cljs.core.first(seq10950);
var seq10950__$1 = cljs.core.next(seq10950);
var G__10952 = cljs.core.first(seq10950__$1);
var seq10950__$2 = cljs.core.next(seq10950__$1);
var G__10953 = cljs.core.first(seq10950__$2);
var seq10950__$3 = cljs.core.next(seq10950__$2);
var G__10954 = cljs.core.first(seq10950__$3);
var seq10950__$4 = cljs.core.next(seq10950__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__10951,G__10952,G__10953,G__10954,seq10950__$4);
});

cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 * (defprotocol AProtocolName
 * ;optional doc string
 * "A doc string for AProtocol abstraction"
 * 
 * ;method signatures
 * (bar [this a b] "bar docs")
 * (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 * No implementations are provided. Docs can be specified for the
 * protocol overall and for each method. The above yields a set of
 * polymorphic functions and a protocol object. All are
 * namespace-qualified by the ns enclosing the definition The resulting
 * functions dispatch on the type of their first argument, which is
 * required and corresponds to the implicit target object ('this' in
 * JavaScript parlance). defprotocol is dynamic, has no special compile-time
 * effect, and defines no new types.
 * 
 * (defprotocol P
 * (foo [this])
 * (bar-me [this] [this y]))
 * 
 * (deftype Foo [a b c]
 * P
 * (foo [this] a)
 * (bar-me [this] b)
 * (bar-me [this y] (+ c y)))
 * 
 * (bar-me (Foo. 1 2 3) 42)
 * => 45
 * 
 * (foo
 * (let [x 42]
 * (reify P
 * (foo [this] 17)
 * (bar-me [this] x)
 * (bar-me [this y] x))))
 * => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(){
var args__5544__auto__ = [];
var len__5537__auto___10975 = arguments.length;
var i__5538__auto___10976 = (0);
while(true){
if((i__5538__auto___10976 < len__5537__auto___10975)){
args__5544__auto__.push((arguments[i__5538__auto___10976]));

var G__10977 = (i__5538__auto___10976 + (1));
i__5538__auto___10976 = G__10977;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var vec__10964 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10964,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10964,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$protocol_DASH_symbol,true);
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__10964,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__10964,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__10965 = cljs.core.seq(methods$);
var chunk__10966 = null;
var count__10967 = (0);
var i__10968 = (0);
while(true){
if((i__10968 < count__10967)){
var vec__10969 = chunk__10966.cljs$core$IIndexed$_nth$arity$2(null,i__10968);
var mname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10969,(0),null);
var arities = cljs.core.nthnext(vec__10969,(1));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__10978 = seq__10965;
var G__10979 = chunk__10966;
var G__10980 = count__10967;
var G__10981 = (i__10968 + (1));
seq__10965 = G__10978;
chunk__10966 = G__10979;
count__10967 = G__10980;
i__10968 = G__10981;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10965);
if(temp__4425__auto__){
var seq__10965__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10965__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__10965__$1);
var G__10982 = cljs.core.chunk_rest(seq__10965__$1);
var G__10983 = c__5282__auto__;
var G__10984 = cljs.core.count(c__5282__auto__);
var G__10985 = (0);
seq__10965 = G__10982;
chunk__10966 = G__10983;
count__10967 = G__10984;
i__10968 = G__10985;
continue;
} else {
var vec__10970 = cljs.core.first(seq__10965__$1);
var mname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10970,(0),null);
var arities = cljs.core.nthnext(vec__10970,(1));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__10986 = cljs.core.next(seq__10965__$1);
var G__10987 = null;
var G__10988 = (0);
var G__10989 = (0);
seq__10965 = G__10986;
chunk__10966 = G__10987;
count__10967 = G__10988;
i__10968 = G__10989;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,sig),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(slot)].join('')))], 0)))))))))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,slot),sig], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10958__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__10959__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),cljs.core._conj(cljs.core.List.EMPTY,fqn(fname)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_typeOf),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__10958__auto__)))))], 0)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__10959__auto__))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__10959__auto__),sig)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__10959__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),cljs.core._conj(cljs.core.List.EMPTY,fqn(fname)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__10959__auto__))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__10959__auto__),sig)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_missing_DASH_protocol),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('')),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig))], 0)))))))))], 0)))))], 0)))))], 0)))))], 0)))))], 0))))))));
});})(p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(psym__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_info,cljs.core.cst$kw$methods], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__10971){
var vec__10972 = p__10971;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10972,(0),null);
var sigs = cljs.core.nthnext(vec__10972,(1));
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
var doc__$2 = ((typeof doc__$1 === 'string')?doc__$1:null);
return doc__$2;
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,cljs.core.cst$kw$doc,doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__10973){
var vec__10974 = p__10973;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10974,(0),null);
var sigs = cljs.core.nthnext(vec__10974,(1));
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
var doc__$2 = ((typeof doc__$1 === 'string')?doc__$1:null);
return doc__$2;
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix),cljs.core.str(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$doc,doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,fname__$1),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,slot,fname__$1,vec__10974,fname,sigs,p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,slot,fname__$1,vec__10974,fname,sigs,p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__10964,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),cljs.core._conj(cljs.core.List.EMPTY,psym__$2),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj)))))], 0))))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq10960){
var G__10961 = cljs.core.first(seq10960);
var seq10960__$1 = cljs.core.next(seq10960);
var G__10962 = cljs.core.first(seq10960__$1);
var seq10960__$2 = cljs.core.next(seq10960__$1);
var G__10963 = cljs.core.first(seq10960__$2);
var seq10960__$3 = cljs.core.next(seq10960__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__10961,G__10962,G__10963,seq10960__$3);
});

cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__10991 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10991,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10991,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,x))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__10993 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10993,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10993,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,xsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,xsym)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,xsym)], 0)))))], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,x))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0)))))], 0))));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 * a ISeqable object that will invoke the body only the first time seq
 * is called, and will cache the result and return it on all subsequent
 * seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(){
var args__5544__auto__ = [];
var len__5537__auto___10997 = arguments.length;
var i__5538__auto___10998 = (0);
while(true){
if((i__5538__auto___10998 < len__5537__auto___10997)){
args__5544__auto__.push((arguments[i__5538__auto___10998]));

var G__10999 = (i__5538__auto___10998 + (1));
i__5538__auto___10998 = G__10999;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_LazySeq),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([body], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq10994){
var G__10995 = cljs.core.first(seq10994);
var seq10994__$1 = cljs.core.next(seq10994);
var G__10996 = cljs.core.first(seq10994__$1);
var seq10994__$2 = cljs.core.next(seq10994__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__10995,G__10996,seq10994__$2);
});

cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 * invoke the body only the first time it is forced (with force or deref/@), and
 * will cache the result and return it on all subsequent force
 * calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(){
var args__5544__auto__ = [];
var len__5537__auto___11003 = arguments.length;
var i__5538__auto___11004 = (0);
while(true){
if((i__5538__auto___11004 < len__5537__auto___11003)){
args__5544__auto__.push((arguments[i__5538__auto___11004]));

var G__11005 = (i__5538__auto___11004 + (1));
i__5538__auto___11004 = G__11005;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Delay),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([body], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq11000){
var G__11001 = cljs.core.first(seq11000);
var seq11000__$1 = cljs.core.next(seq11000);
var G__11002 = cljs.core.first(seq11000__$1);
var seq11000__$2 = cljs.core.next(seq11000__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__11001,G__11002,seq11000__$2);
});

cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 * Temporarily redefines vars while executing the body.  The
 * temp-value-exprs will be evaluated and each resulting value will
 * replace in parallel the root value of its var.  After the body is
 * executed, the root values of all the vars will be set back to their
 * old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(){
var args__5544__auto__ = [];
var len__5537__auto___11012 = arguments.length;
var i__5538__auto___11013 = (0);
while(true){
if((i__5538__auto___11013 < len__5537__auto___11012)){
args__5544__auto__.push((arguments[i__5538__auto___11013]));

var G__11014 = (i__5538__auto___11013 + (1));
i__5538__auto___11013 = G__11014;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__11010){
var vec__11011 = p__11010;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11011,(1),null);
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),k),cljs.core.cst$sym$set_BANG_);
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$try),body,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$finally),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets)))))], 0)))))], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq11006){
var G__11007 = cljs.core.first(seq11006);
var seq11006__$1 = cljs.core.next(seq11006);
var G__11008 = cljs.core.first(seq11006__$1);
var seq11006__$2 = cljs.core.next(seq11006__$1);
var G__11009 = cljs.core.first(seq11006__$2);
var seq11006__$3 = cljs.core.next(seq11006__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__11007,G__11008,G__11009,seq11006__$3);
});

cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 * Creates new bindings for the (already-existing) vars, with the
 * supplied initial values, executes the exprs in an implicit do, then
 * re-establishes the bindings that existed before.  The new bindings
 * are made in parallel (unlike let); all init-exprs are evaluated
 * before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(){
var args__5544__auto__ = [];
var len__5537__auto___11019 = arguments.length;
var i__5538__auto___11020 = (0);
while(true){
if((i__5538__auto___11020 < len__5537__auto___11019)){
args__5544__auto__.push((arguments[i__5538__auto___11020]));

var G__11021 = (i__5538__auto___11020 + (1));
i__5538__auto___11020 = G__11021;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_with_DASH_redefs),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq11015){
var G__11016 = cljs.core.first(seq11015);
var seq11015__$1 = cljs.core.next(seq11015);
var G__11017 = cljs.core.first(seq11015__$1);
var seq11015__$2 = cljs.core.next(seq11015__$1);
var G__11018 = cljs.core.first(seq11015__$2);
var seq11015__$3 = cljs.core.next(seq11015__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__11016,G__11017,G__11018,seq11015__$3);
});

cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 * Each clause can take the form of either:
 * 
 * test-expr result-expr
 * 
 * test-expr :>> result-fn
 * 
 * Note :>> is an ordinary keyword.
 * 
 * For each clause, (pred test-expr expr) is evaluated. If it returns
 * logical true, the clause is a match. If a binary clause matches, the
 * result-expr is returned, if a ternary clause matches, its result-fn,
 * which must be a unary function, is called with the result of the
 * predicate as its argument, the result of that call being the return
 * value of condp. A single default expression can follow the clauses,
 * and its value will be returned if no clause matches. If no default
 * expression is provided and no clause matches, an
 * IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(){
var args__5544__auto__ = [];
var len__5537__auto___11032 = arguments.length;
var i__5538__auto___11033 = (0);
while(true){
if((i__5538__auto___11033 < len__5537__auto___11032)){
args__5544__auto__.push((arguments[i__5538__auto___11033]));

var G__11034 = (i__5538__auto___11033 + (1));
i__5538__auto___11033 = G__11034;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((4) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((4)),(0))):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5545__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__11030 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_GT__GT_,cljs.core.second(args)))?(3):(2)),args);
var vec__11031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11030,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11031,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11031,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11031,(2),null);
var clause = vec__11031;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11030,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr__$1)], 0))))))))))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,pred__$1),cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr__$1)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,b),cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$emit(pred__$1,expr__$1,more))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__11022__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,pred__$1),cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr__$1)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,c),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__11022__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$emit(pred__$1,expr__$1,more))], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,gpred),cljs.core._conj(cljs.core.List.EMPTY,pred),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gexpr),cljs.core._conj(cljs.core.List.EMPTY,expr)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,emit(gpred,gexpr,clauses))], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq11023){
var G__11024 = cljs.core.first(seq11023);
var seq11023__$1 = cljs.core.next(seq11023);
var G__11025 = cljs.core.first(seq11023__$1);
var seq11023__$2 = cljs.core.next(seq11023__$1);
var G__11026 = cljs.core.first(seq11023__$2);
var seq11023__$3 = cljs.core.next(seq11023__$2);
var G__11027 = cljs.core.first(seq11023__$3);
var seq11023__$4 = cljs.core.next(seq11023__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__11024,G__11025,G__11026,G__11027,seq11023__$4);
});

cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__4486__auto__ = cljs.core.list_QMARK_(x);
if(and__4486__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__4486__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$const);
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 * Each clause can take the form of either:
 * 
 * test-constant result-expr
 * 
 * (test-constant1 ... test-constantN)  result-expr
 * 
 * The test-constants are not evaluated. They must be compile-time
 * literals, and need not be quoted.  If the expression is equal to a
 * test-constant, the corresponding result-expr is returned. A single
 * default expression can follow the clauses, and its value will be
 * returned if no clause matches. If no default expression is provided
 * and no clause matches, an Error is thrown.
 * 
 * Unlike cond and condp, case does a constant-time dispatch, the
 * clauses are not considered sequentially.  All manner of constant
 * expressions are acceptable in case, including numbers, strings,
 * symbols, keywords, and (ClojureScript) composites thereof. Note that since
 * lists are used to group multiple constants that map to the same
 * expression, a vector can be used to match a list if needed. The
 * test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(){
var args__5544__auto__ = [];
var len__5537__auto___11047 = arguments.length;
var i__5538__auto___11048 = (0);
while(true){
if((i__5538__auto___11048 < len__5537__auto___11047)){
args__5544__auto__.push((arguments[i__5538__auto___11048]));

var G__11049 = (i__5538__auto___11048 + (1));
i__5538__auto___11048 = G__11049;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,e)], 0)))))))))))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (default$,env){
return (function (m,p__11043){
var vec__11044 = p__11043;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__11044,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,test__$1),cljs.core.cst$sym$quote):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__11044,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.cst$sym$quote),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_,cljs.core.array_seq([((function (default$,env,pairs,esym,tests){
return (function (p1__11035_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__11035_SHARP_);
});})(default$,env,pairs,esym,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__11036_SHARP_){
if(cljs.core.seq_QMARK_(p1__11036_SHARP_)){
return cljs.core.vec(p1__11036_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11036_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,tests__$1),cljs.core._conj(cljs.core.List.EMPTY,thens),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))))], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__11038_SHARP_){
if(cljs.core.seq_QMARK_(p1__11038_SHARP_)){
return cljs.core.vec(p1__11038_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11038_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__11037_SHARP_){
return [cljs.core.str(p1__11037_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec(cljs.core.vals(pairs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_keyword_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,e))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_fqn),cljs.core._conj(cljs.core.List.EMPTY,e))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,tests__$1),cljs.core._conj(cljs.core.List.EMPTY,thens),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (default$,env,pairs,esym,tests){
return (function (p__11045){
var vec__11046 = p__11045;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),cljs.core._conj(cljs.core.List.EMPTY,m),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,esym)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,c))));
});})(default$,env,pairs,esym,tests))
,cljs.core.array_seq([pairs], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))))], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq11039){
var G__11040 = cljs.core.first(seq11039);
var seq11039__$1 = cljs.core.next(seq11039);
var G__11041 = cljs.core.first(seq11039__$1);
var seq11039__$2 = cljs.core.next(seq11039__$1);
var G__11042 = cljs.core.first(seq11039__$2);
var seq11039__$3 = cljs.core.next(seq11039__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__11040,G__11041,G__11042,seq11039__$3);
});

cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 * logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(){
var args11050 = [];
var len__5537__auto___11053 = arguments.length;
var i__5538__auto___11054 = (0);
while(true){
if((i__5538__auto___11054 < len__5537__auto___11053)){
args11050.push((arguments[i__5538__auto___11054]));

var G__11055 = (i__5538__auto___11054 + (1));
i__5538__auto___11054 = G__11055;
continue;
} else {
}
break;
}

var G__11052 = args11050.length;
switch (G__11052) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11050.length)].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,x)))))))))], 0)))))))))))))], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,message),cljs.core._conj(cljs.core.List.EMPTY,"\n"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,x)))))))))], 0)))))))))))))], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 * (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs$core$macros$for,cljs.core.vector_QMARK_(seq_exprs),"a vector for its binding",cljs.core.array_seq([cljs.core.even_QMARK_(cljs.core.count(seq_exprs)),"an even number of forms in binding vector"], 0));

var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__11093){
var vec__11094 = p__11093;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11094,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__11124__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__11124 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__11125__i = 0, G__11125__a = new Array(arguments.length -  0);
while (G__11125__i < G__11125__a.length) {G__11125__a[G__11125__i] = arguments[G__11125__i + 0]; ++G__11125__i;}
  msg = new cljs.core.IndexedSeq(G__11125__a,0);
} 
return G__11124__delegate.call(this,msg);};
G__11124.cljs$lang$maxFixedArity = 0;
G__11124.cljs$lang$applyTo = (function (arglist__11126){
var msg = cljs.core.seq(arglist__11126);
return G__11124__delegate(msg);
});
G__11124.cljs$core$IFn$_invoke$arity$variadic = G__11124__delegate;
return G__11124;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__11095){
var vec__11110 = p__11095;
var vec__11111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,(0),null);
var bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11111,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11111,(1),null);
var mod_pairs = cljs.core.nthnext(vec__11111,(2));
var vec__11112 = cljs.core.nthnext(vec__11110,(1));
var vec__11113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11113,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11113,(1),null);
var next_groups = vec__11112;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__11110,vec__11111,bind,expr,mod_pairs,vec__11112,vec__11113,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__11114){
var vec__11117 = p__11114;
var vec__11118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11118,(1),null);
var pair = vec__11118;
var etc = cljs.core.nthnext(vec__11117,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_mod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_mod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_mod(etc)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
if(cljs.core.truth_(next_groups)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__11057__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind(next_groups)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__11058__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__11057__auto__),cljs.core._conj(cljs.core.List.EMPTY,next_expr)))))))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__11058__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__11058__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cons),cljs.core._conj(cljs.core.List.EMPTY,body_expr),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))));

}
}
}
}
}
});})(giter,gxs,vec__11110,vec__11111,bind,expr,mod_pairs,vec__11112,vec__11113,_,next_expr,next_groups,to_groups,err))
;
if(cljs.core.truth_(next_groups)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gxs),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,bind),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,do_mod(mod_pairs))], 0)))))], 0)))))))))], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__11110,vec__11111,bind,expr,mod_pairs,vec__11112,vec__11113,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__11119){
var vec__11122 = p__11119;
var vec__11123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123,(1),null);
var pair = vec__11123;
var etc = cljs.core.nthnext(vec__11122,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),cljs.core._conj(cljs.core.List.EMPTY,gi)))))))))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_append),cljs.core._conj(cljs.core.List.EMPTY,gb),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,body_expr)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),cljs.core._conj(cljs.core.List.EMPTY,gi)))))))))], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__11110,vec__11111,bind,expr,mod_pairs,vec__11112,vec__11113,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gxs),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gxs),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,gxs))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__11059__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),cljs.core._conj(cljs.core.List.EMPTY,gxs)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/jelleakkerman/Dev/archive/quilfiddle/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2165),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2165),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_native)], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__11060__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__11059__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,gb),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_buffer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__11060__auto__)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gi),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,gi),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__11060__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,bind),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__11059__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gi)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,do_cmod(mod_pairs))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))))], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),cljs.core._conj(cljs.core.List.EMPTY,gb))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),cljs.core._conj(cljs.core.List.EMPTY,gb))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,bind),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,do_mod(mod_pairs))], 0)))))], 0)))))], 0)))))], 0)))))))))], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__11061__auto__),cljs.core._conj(cljs.core.List.EMPTY,emit_bind(to_groups(seq_exprs)))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__11061__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(seq_exprs))))))], 0))));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 * bindings and filtering as provided by "for".  Does not retain
 * the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(){
var args__5544__auto__ = [];
var len__5537__auto___11136 = arguments.length;
var i__5538__auto___11137 = (0);
while(true){
if((i__5538__auto___11137 < len__5537__auto___11136)){
args__5544__auto__.push((arguments[i__5538__auto___11137]));

var G__11138 = (i__5538__auto___11137 + (1));
i__5538__auto___11137 = G__11138;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core$macros.doseq,cljs.core.vector_QMARK_(seq_exprs),"a vector for its binding",cljs.core.array_seq([cljs.core.even_QMARK_(cljs.core.count(seq_exprs)),"an even number of forms in binding vector"], 0));

var err = (function() { 
var G__11139__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__11139 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__11140__i = 0, G__11140__a = new Array(arguments.length -  0);
while (G__11140__i < G__11140__a.length) {G__11140__a[G__11140__i] = arguments[G__11140__i + 0]; ++G__11140__i;}
  msg = new cljs.core.IndexedSeq(G__11140__a,0);
} 
return G__11139__delegate.call(this,msg);};
G__11139.cljs$lang$maxFixedArity = 0;
G__11139.cljs$lang$applyTo = (function (arglist__11141){
var msg = cljs.core.seq(arglist__11141);
return G__11139__delegate(msg);
});
G__11139.cljs$core$IFn$_invoke$arity$variadic = G__11139__delegate;
return G__11139;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),cljs.core._conj(cljs.core.List.EMPTY,seqsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,subform),cljs.core.array_seq([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,recform__$1)], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,seqsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,chunksym),cljs.core._conj(cljs.core.List.EMPTY,countsym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),cljs.core._conj(cljs.core.List.EMPTY,isym)))))], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,seqsym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,v))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,chunksym),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,countsym),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,isym),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,isym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,countsym)], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,chunksym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,isym)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform_chunk),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,seqsym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,seqsym)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,seqsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__11127__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),cljs.core._conj(cljs.core.List.EMPTY,seqsym)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,seqsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__11127__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__11127__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,seqsym)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0)))))], 0)))))], 0)))))], 0)))))], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq11128){
var G__11129 = cljs.core.first(seq11128);
var seq11128__$1 = cljs.core.next(seq11128);
var G__11130 = cljs.core.first(seq11128__$1);
var seq11128__$2 = cljs.core.next(seq11128__$1);
var G__11131 = cljs.core.first(seq11128__$2);
var seq11128__$3 = cljs.core.next(seq11128__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__11129,G__11130,G__11131,seq11128__$3);
});

cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(){
var args__5544__auto__ = [];
var len__5537__auto___11145 = arguments.length;
var i__5538__auto___11146 = (0);
while(true){
if((i__5538__auto___11146 < len__5537__auto___11145)){
args__5544__auto__.push((arguments[i__5538__auto___11146]));

var G__11147 = (i__5538__auto___11146 + (1));
i__5538__auto___11146 = G__11147;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq11142){
var G__11143 = cljs.core.first(seq11142);
var seq11142__$1 = cljs.core.next(seq11142);
var G__11144 = cljs.core.first(seq11142__$1);
var seq11142__$2 = cljs.core.next(seq11142__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__11143,G__11144,seq11142__$2);
});

cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Array$),cljs.core._conj(cljs.core.List.EMPTY,size))))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(){
var args11148 = [];
var len__5537__auto___11155 = arguments.length;
var i__5538__auto___11156 = (0);
while(true){
if((i__5538__auto___11156 < len__5537__auto___11155)){
args11148.push((arguments[i__5538__auto___11156]));

var G__11157 = (i__5538__auto___11156 + (1));
i__5538__auto___11156 = G__11157;
continue;
} else {
}
break;
}

var G__11154 = args11148.length;
switch (G__11154) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args11148.slice((3)),(0)));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5556__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_List);
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),xs)))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq11149){
var G__11150 = cljs.core.first(seq11149);
var seq11149__$1 = cljs.core.next(seq11149);
var G__11151 = cljs.core.first(seq11149__$1);
var seq11149__$2 = cljs.core.next(seq11149__$1);
var G__11152 = cljs.core.first(seq11149__$2);
var seq11149__$3 = cljs.core.next(seq11149__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__11150,G__11151,G__11152,seq11149__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(){
var args11159 = [];
var len__5537__auto___11165 = arguments.length;
var i__5538__auto___11166 = (0);
while(true){
if((i__5538__auto___11166 < len__5537__auto___11165)){
args11159.push((arguments[i__5538__auto___11166]));

var G__11167 = (i__5538__auto___11166 + (1));
i__5538__auto___11166 = G__11167;
continue;
} else {
}
break;
}

var G__11164 = args11159.length;
switch (G__11164) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args11159.slice((2)),(0)));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5556__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cnt),cljs.core._conj(cljs.core.List.EMPTY,(5)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY_DASH_NODE),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)))),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq11160){
var G__11161 = cljs.core.first(seq11160);
var seq11160__$1 = cljs.core.next(seq11160);
var G__11162 = cljs.core.first(seq11160__$1);
var seq11160__$2 = cljs.core.next(seq11160__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__11161,G__11162,seq11160__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(){
var args11171 = [];
var len__5537__auto___11177 = arguments.length;
var i__5538__auto___11178 = (0);
while(true){
if((i__5538__auto___11178 < len__5537__auto___11177)){
args11171.push((arguments[i__5538__auto___11178]));

var G__11179 = (i__5538__auto___11178 + (1));
i__5538__auto___11178 = G__11179;
continue;
} else {
}
break;
}

var G__11176 = args11171.length;
switch (G__11176) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args11171.slice((2)),(0)));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5556__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap);
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__11169_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__11169_SHARP_),cljs.core.cst$kw$constant);
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__11170_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__11170_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.count(kvs) / (2))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)))),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq11172){
var G__11173 = cljs.core.first(seq11172);
var seq11172__$1 = cljs.core.next(seq11172);
var G__11174 = cljs.core.first(seq11172__$1);
var seq11172__$2 = cljs.core.next(seq11172__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__11173,G__11174,seq11172__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(){
var args11181 = [];
var len__5537__auto___11187 = arguments.length;
var i__5538__auto___11188 = (0);
while(true){
if((i__5538__auto___11188 < len__5537__auto___11187)){
args11181.push((arguments[i__5538__auto___11188]));

var G__11189 = (i__5538__auto___11188 + (1));
i__5538__auto___11188 = G__11189;
continue;
} else {
}
break;
}

var G__11186 = args11181.length;
switch (G__11186) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args11181.slice((2)),(0)));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5556__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArrays),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),ks)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),vs))))], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap);
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq11182){
var G__11183 = cljs.core.first(seq11182);
var seq11182__$1 = cljs.core.next(seq11182);
var G__11184 = cljs.core.first(seq11182__$1);
var seq11182__$2 = cljs.core.next(seq11182__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__11183,G__11184,seq11182__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(){
var args11193 = [];
var len__5537__auto___11199 = arguments.length;
var i__5538__auto___11200 = (0);
while(true){
if((i__5538__auto___11200 < len__5537__auto___11199)){
args11193.push((arguments[i__5538__auto___11200]));

var G__11201 = (i__5538__auto___11200 + (1));
i__5538__auto___11200 = G__11201;
continue;
} else {
}
break;
}

var G__11198 = args11193.length;
switch (G__11198) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5556__auto__ = (new cljs.core.IndexedSeq(args11193.slice((2)),(0)));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5556__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__11191_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__11191_SHARP_),cljs.core.cst$kw$constant);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11192_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__11192_SHARP_);
}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(xs)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)))),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet);
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq11194){
var G__11195 = cljs.core.first(seq11194);
var seq11194__$1 = cljs.core.next(seq11194);
var G__11196 = cljs.core.first(seq11194__$1);
var seq11194__$2 = cljs.core.next(seq11194__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__11195,G__11196,seq11194__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$object);
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(){
var args__5544__auto__ = [];
var len__5537__auto___11212 = arguments.length;
var i__5538__auto___11213 = (0);
while(true){
if((i__5538__auto___11213 < len__5537__auto___11212)){
args__5544__auto__.push((arguments[i__5538__auto___11213]));

var G__11214 = (i__5538__auto___11213 + (1));
i__5538__auto___11213 = G__11214;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__11206){
var vec__11207 = p__11206;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11207,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11207,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),cljs.core._conj(cljs.core.List.EMPTY,obj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs)))], 0)))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__11208){
var vec__11209 = p__11208;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11209,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,obj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,v)], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__11210){
var vec__11211 = p__11210;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11211,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,obj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k))], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),cljs.core._conj(cljs.core.List.EMPTY,obj)], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq11203){
var G__11204 = cljs.core.first(seq11203);
var seq11203__$1 = cljs.core.next(seq11203);
var G__11205 = cljs.core.first(seq11203__$1);
var seq11203__$2 = cljs.core.next(seq11203__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__11204,G__11205,seq11203__$2);
});

cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,a),"~{}.length"),cljs.core.cst$sym$js_STAR_),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$number);
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 * return value named ret, initialized to a clone of a, then setting
 * each element of ret to the evaluation of expr, returning the new
 * array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__11215__auto__),cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,ret),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__11215__auto__)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__11215__auto__)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,ret),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,expr)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,idx)))))))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,ret)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 * and return value named ret, initialized to init, setting ret to the
 * evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__11216__auto__),cljs.core._conj(cljs.core.List.EMPTY,a)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,ret),cljs.core._conj(cljs.core.List.EMPTY,init)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__11216__auto__)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,idx))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,ret)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 * Repeatedly executes body (presumably for side-effects) with name
 * bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(){
var args__5544__auto__ = [];
var len__5537__auto___11222 = arguments.length;
var i__5538__auto___11223 = (0);
while(true){
if((i__5538__auto___11223 < len__5537__auto___11222)){
args__5544__auto__.push((arguments[i__5538__auto___11223]));

var G__11224 = (i__5538__auto___11223 + (1));
i__5538__auto___11223 = G__11224;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__11217__auto__),cljs.core._conj(cljs.core.List.EMPTY,n)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,i),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,i),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__11217__auto__)], 0))))),cljs.core.array_seq([body,cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,i)))))))))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq11218){
var G__11219 = cljs.core.first(seq11218);
var seq11218__$1 = cljs.core.next(seq11218);
var G__11220 = cljs.core.first(seq11218__$1);
var seq11218__$2 = cljs.core.next(seq11218__$1);
var G__11221 = cljs.core.first(seq11218__$2);
var seq11218__$3 = cljs.core.next(seq11218__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__11219,G__11220,G__11221,seq11218__$3);
});

cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 * as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(){
var args__5544__auto__ = [];
var len__5537__auto___11228 = arguments.length;
var i__5538__auto___11229 = (0);
while(true){
if((i__5538__auto___11229 < len__5537__auto___11228)){
args__5544__auto__.push((arguments[i__5538__auto___11229]));

var G__11230 = (i__5538__auto___11229 + (1));
i__5538__auto___11229 = G__11230;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((1) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((1)),(0))):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5545__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11225_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__11225_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq11226){
var G__11227 = cljs.core.first(seq11226);
var seq11226__$1 = cljs.core.next(seq11226);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__11227,seq11226__$1);
});
/**
 * Creates a new multimethod with the associated dispatch function.
 * The docstring and attribute-map are optional.
 * 
 * Options are key-value pairs and may be one of:
 * :default    the default dispatch value, defaults to :default
 * :hierarchy  the isa? hierarchy to use for dispatching
 * defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(){
var args__5544__auto__ = [];
var len__5537__auto___11240 = arguments.length;
var i__5538__auto___11241 = (0);
while(true){
if((i__5538__auto___11241 < len__5537__auto___11240)){
args__5544__auto__.push((arguments[i__5538__auto___11241]));

var G__11242 = (i__5538__auto___11241 + (1));
i__5538__auto___11241 = G__11242;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$doc,docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$default);
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.array_seq([cljs.core.cst$kw$default,cljs.core.cst$kw$hierarchy], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defonce),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(mm_name,m__$2)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__11231__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__11232__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__11233__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__11234__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__11235__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,options__$4),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$hierarchy),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_global_DASH_hierarchy)))))], 0)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_MultiFn$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),cljs.core._conj(cljs.core.List.EMPTY,mm_ns),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.name(mm_name))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,dispatch_fn),cljs.core._conj(cljs.core.List.EMPTY,default$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__11235__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__11231__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__11232__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__11233__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__11234__auto__)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq11236){
var G__11237 = cljs.core.first(seq11236);
var seq11236__$1 = cljs.core.next(seq11236);
var G__11238 = cljs.core.first(seq11236__$1);
var seq11236__$2 = cljs.core.next(seq11236__$1);
var G__11239 = cljs.core.first(seq11236__$2);
var seq11236__$3 = cljs.core.next(seq11236__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__11237,G__11238,G__11239,seq11236__$3);
});

cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value.
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(){
var args__5544__auto__ = [];
var len__5537__auto___11248 = arguments.length;
var i__5538__auto___11249 = (0);
while(true){
if((i__5538__auto___11249 < len__5537__auto___11248)){
args__5544__auto__.push((arguments[i__5538__auto___11249]));

var G__11250 = (i__5538__auto___11249 + (1));
i__5538__auto___11249 = G__11250;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((4) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((4)),(0))):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5545__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_add_DASH_method),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_MultiFn], null))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,dispatch_val),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),fn_tail))))], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq11243){
var G__11244 = cljs.core.first(seq11243);
var seq11243__$1 = cljs.core.next(seq11243);
var G__11245 = cljs.core.first(seq11243__$1);
var seq11243__$2 = cljs.core.next(seq11243__$1);
var G__11246 = cljs.core.first(seq11243__$2);
var seq11243__$3 = cljs.core.next(seq11243__$2);
var G__11247 = cljs.core.first(seq11243__$3);
var seq11243__$4 = cljs.core.next(seq11243__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__11244,G__11245,G__11246,G__11247,seq11243__$4);
});

cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__11251__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__11252__auto__),cljs.core._conj(cljs.core.List.EMPTY,expr)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_prn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__11251__auto__)], 0))))),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__11252__auto__)], 0))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 * the given bindings, then prints out the bindings and the expr
 * followed by number of iterations and total time. The optional
 * argument print-fn, defaulting to println, sets function used to
 * print the result. expr's string representation will be produced
 * using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(){
var args__5544__auto__ = [];
var len__5537__auto___11267 = arguments.length;
var i__5538__auto___11268 = (0);
while(true){
if((i__5538__auto___11268 < len__5537__auto___11267)){
args__5544__auto__.push((arguments[i__5538__auto___11268]));

var G__11269 = (i__5538__auto___11268 + (1));
i__5538__auto___11268 = G__11269;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((5) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((5)),(0))):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5545__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__11264){
var map__11265 = p__11264;
var map__11265__$1 = ((((!((map__11265 == null)))?((((map__11265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11265):map__11265);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11265__$1,cljs.core.cst$kw$print_DASH_fn,cljs.core.cst$sym$println);
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__11253__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__11254__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$___11255__auto__),cljs.core._conj(cljs.core.List.EMPTY,iterations)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__11256__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__11257__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__11256__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__11253__auto__)], 0)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,print_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,bs_str),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,expr_str),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,iterations),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__11257__auto__),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0)))))))))], 0)))))], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq11258){
var G__11259 = cljs.core.first(seq11258);
var seq11258__$1 = cljs.core.next(seq11258);
var G__11260 = cljs.core.first(seq11258__$1);
var seq11258__$2 = cljs.core.next(seq11258__$1);
var G__11261 = cljs.core.first(seq11258__$2);
var seq11258__$3 = cljs.core.next(seq11258__$2);
var G__11262 = cljs.core.first(seq11258__$3);
var seq11258__$4 = cljs.core.next(seq11258__$3);
var G__11263 = cljs.core.first(seq11258__$4);
var seq11258__$5 = cljs.core.next(seq11258__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__11259,G__11260,G__11261,G__11262,G__11263,seq11258__$5);
});

cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(){
var args11270 = [];
var len__5537__auto___11274 = arguments.length;
var i__5538__auto___11275 = (0);
while(true){
if((i__5538__auto___11275 < len__5537__auto___11274)){
args11270.push((arguments[i__5538__auto___11275]));

var G__11276 = (i__5538__auto___11275 + (1));
i__5538__auto___11275 = G__11276;
continue;
} else {
}
break;
}

var G__11272 = args11270.length;
switch (G__11272) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11270.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__11273 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__11273) : cljs.core$macros.cs.call(null,G__11273));
})()),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,prop)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1))))], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))))))));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;
cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$apply_DASH_to),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_zero_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0())], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 * on a fresh StringBuffer.  Returns the string created by any nested
 * printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(){
var args__5544__auto__ = [];
var len__5537__auto___11283 = arguments.length;
var i__5538__auto___11284 = (0);
while(true){
if((i__5538__auto___11284 < len__5537__auto___11283)){
args__5544__auto__.push((arguments[i__5538__auto___11284]));

var G__11285 = (i__5538__auto___11284 + (1));
i__5538__auto___11284 = G__11285;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__11278__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$string$StringBuffer$)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_binding),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_newline_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_fn_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__11279__auto__)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$append),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__11278__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__11279__auto__)], 0)))))], 0)))))], 0)))))),cljs.core.array_seq([body], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__11278__auto__)))))], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq11280){
var G__11281 = cljs.core.first(seq11280);
var seq11280__$1 = cljs.core.next(seq11280);
var G__11282 = cljs.core.first(seq11280__$1);
var seq11280__$2 = cljs.core.next(seq11280__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__11281,G__11282,seq11280__$2);
});

cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 * of the supplied colls.  Each coll expr is not evaluated until it is
 * needed.
 * 
 * (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(){
var args__5544__auto__ = [];
var len__5537__auto___11290 = arguments.length;
var i__5538__auto___11291 = (0);
while(true){
if((i__5538__auto___11291 < len__5537__auto___11290)){
args__5544__auto__.push((arguments[i__5538__auto___11291]));

var G__11292 = (i__5538__auto___11291 + (1));
i__5538__auto___11291 = G__11292;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((2) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((2)),(0))):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5545__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11286_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__11286_SHARP_),cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq);
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq11287){
var G__11288 = cljs.core.first(seq11287);
var seq11287__$1 = cljs.core.next(seq11287);
var G__11289 = cljs.core.first(seq11287__$1);
var seq11287__$2 = cljs.core.next(seq11287__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__11288,G__11289,seq11287__$2);
});

cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s),"''+~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,ty))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ITER_SYMBOL),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__11293__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_es6_DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__11293__auto__)))))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__11294){
var vec__11298 = p__11294;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11298,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11298,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$quote)),cljs.core.list(cljs.core.cst$sym$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$ns))], 0)))].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__11298,quote,ns){
return (function (p__11299){
var vec__11300 = p__11299;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11300,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11300,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.name(sym)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym)))))))))));
});})(vec__11298,quote,ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))))))))], 0))));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__11301,p__11302){
var vec__11305 = p__11301;
var quote0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11305,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11305,(1),null);
var vec__11306 = p__11302;
var quote1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11306,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11306,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote0,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote1,cljs.core.cst$sym$quote)) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$quote0,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$quote)),cljs.core.list(cljs.core.cst$sym$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$ns),cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$quote1,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$quote)),cljs.core.list(cljs.core.cst$sym$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$sym))], 0)))].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),cljs.core.dissoc,cljs.core.array_seq([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_delete),cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sym)].join('')))], 0))));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(){
var args__5544__auto__ = [];
var len__5537__auto___11312 = arguments.length;
var i__5538__auto___11313 = (0);
while(true){
if((i__5538__auto___11313 < len__5537__auto___11312)){
args__5544__auto__.push((arguments[i__5538__auto___11313]));

var G__11314 = (i__5538__auto___11313 + (1));
i__5538__auto___11313 = G__11314;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((4) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((4)),(0))):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5545__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_vreset_BANG_),cljs.core._conj(cljs.core.List.EMPTY,vol),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_deref),cljs.core._conj(cljs.core.List.EMPTY,vol))))),cljs.core.array_seq([args], 0)))))], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq11307){
var G__11308 = cljs.core.first(seq11307);
var seq11307__$1 = cljs.core.next(seq11307);
var G__11309 = cljs.core.first(seq11307__$1);
var seq11307__$2 = cljs.core.next(seq11307__$1);
var G__11310 = cljs.core.first(seq11307__$2);
var seq11307__$3 = cljs.core.next(seq11307__$2);
var G__11311 = cljs.core.first(seq11307__$3);
var seq11307__$4 = cljs.core.next(seq11307__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11308,G__11309,G__11310,G__11311,seq11307__$4);
});

cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$nodeGlobalRequire),cljs.core._conj(cljs.core.List.EMPTY,f)))))], 0))));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 * else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$core_SLASH_first,cljs.core.cst$sym$quoted),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$quote))], 0)))].join('')));
}

var form = cljs.core.second(quoted);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.analyzer.macroexpand_1(_AMPERSAND_env,form)))));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 * represents a macro form, then returns it.  Note neither
 * macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$core_SLASH_first,cljs.core.cst$sym$quoted),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$quote))], 0)))].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__11315 = form_SINGLEQUOTE_;
var G__11316 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__11315;
form_SINGLEQUOTE_ = G__11316;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,form_SINGLEQUOTE_))));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__4486__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__4486__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__4486__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(){
var args11317 = [];
var len__5537__auto___11322 = arguments.length;
var i__5538__auto___11323 = (0);
while(true){
if((i__5538__auto___11323 < len__5537__auto___11322)){
args11317.push((arguments[i__5538__auto___11323]));

var G__11324 = (i__5538__auto___11323 + (1));
i__5538__auto___11323 = G__11324;
continue;
} else {
}
break;
}

var G__11319 = args11317.length;
switch (G__11319) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11317.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__11320,solo){
var vec__11321 = p__11320;
var arglist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11321,(0),null);
var body = cljs.core.nthnext(vec__11321,(1));
var method = vec__11321;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__11321,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic;
});})(sig,restarg,vec__11321,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__11321,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(get_delegate())].join(''));
});})(sig,restarg,vec__11321,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__11321,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,param),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_first,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/jelleakkerman/Dev/archive/quilfiddle/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2595),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2595),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core._conj(cljs.core.List.EMPTY,restarg))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,restarg),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_next,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/jelleakkerman/Dev/archive/quilfiddle/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2596),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2596),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core._conj(cljs.core.List.EMPTY,restarg)))))], 0)))));
});})(sig,restarg,vec__11321,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__11321,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,restarg)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.array_seq([params], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,get_delegate()),params,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,restarg)], 0)))))], 0)))))], 0))))))))))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,restarg)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,get_delegate()),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,restarg)))))))))], 0))))))))))));
}
});})(sig,restarg,vec__11321,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,get_delegate_prop())], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(sig)),body))))))))], 0))))),cljs.core.array_seq([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.count(sig) - (1)))], 0))))))))):null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$applyTo)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,apply_to())], 0)))))], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;
cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__11326__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments)))))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__11327__auto__),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__11327__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__11326__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),cljs.core._conj(cljs.core.List.EMPTY,dest),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__11327__auto__)], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__11327__auto__)))))))))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__11330){
var vec__11333 = p__11330;
var vec__11334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11333,(0),null);
var arglist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11334,(0),null);
var body = cljs.core.nthnext(vec__11334,(1));
var method = vec__11334;
var fdecl = vec__11333;
var dest_args = ((function (vec__11333,vec__11334,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__11333,vec__11334,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))));
});})(vec__11333,vec__11334,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__11333,vec__11334,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,true,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,c_1,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.cst$kw$arglists,cljs.core._conj(cljs.core.List.EMPTY,arglist),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(name,meta__$1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__11328__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__11328__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__11329__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__11328__auto__)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/jelleakkerman/Dev/archive/quilfiddle/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2643),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2643),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__11328__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,c_1)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__11329__auto__)], 0)))))], 0)))))], 0)))))], 0)))))], 0)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method))], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''))),dest_args(c)))))], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__11347){
var vec__11349 = p__11347;
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11349,(0),null);
var body = cljs.core.nthnext(vec__11349,(1));
var method = vec__11349;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(sig))].join('')))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,method)))))], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__11335_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),p1__11335_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,maxfa,cljs.core.cst$kw$method_DASH_params,sigs,cljs.core.cst$kw$arglists,arglists,cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(name,meta__$1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,args_sym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,args_sym))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,args_sym))))),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__11336_SHARP_){
return fixed_arity(rname,p1__11336_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,cljs.core.array_seq([sigs], 0)),cljs.core._conj(cljs.core.List.EMPTY,((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__11337__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/jelleakkerman/Dev/archive/quilfiddle/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2700),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,58),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2700),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,78),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,args_sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,maxfa)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(maxfa),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__11337__auto__)], 0)))))], 0)))))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,args_sym)))))], 0))))))))))))))], 0)))))], 0)))))], 0)))))], 0))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,maxfa)], 0)))))], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 * name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 * to the var metadata. prepost-map defines a map with optional keys
 * :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?cljs.core._conj(cljs.core.List.EMPTY,fdecl__$2):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.sigs(fdecl__$4)),cljs.core.cst$sym$quote)], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,m__$4,fdecl__$4);
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,m__$4,fdecl__$4);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,fdecl__$4)),cljs.core.with_meta(name,m__$4)),cljs.core.cst$sym$def);

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__11350__i = 0, G__11350__a = new Array(arguments.length -  3);
while (G__11350__i < G__11350__a.length) {G__11350__a[G__11350__i] = arguments[G__11350__i + 3]; ++G__11350__i;}
  fdecl = new cljs.core.IndexedSeq(G__11350__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__11351){
var _AMPERSAND_form = cljs.core.first(arglist__11351);
arglist__11351 = cljs.core.next(arglist__11351);
var _AMPERSAND_env = cljs.core.first(arglist__11351);
arglist__11351 = cljs.core.next(arglist__11351);
var name = cljs.core.first(arglist__11351);
var fdecl = cljs.core.rest(arglist__11351);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 * macro and will be used as a macro by the compiler when it is
 * called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(){
var args__5544__auto__ = [];
var len__5537__auto___11356 = arguments.length;
var i__5538__auto___11357 = (0);
while(true){
if((i__5538__auto___11357 < len__5537__auto___11356)){
args__5544__auto__.push((arguments[i__5538__auto___11357]));

var G__11358 = (i__5538__auto___11357 + (1));
i__5538__auto___11357 = G__11358;
continue;
} else {
}
break;
}

var argseq__5545__auto__ = ((((3) < args__5544__auto__.length))?(new cljs.core.IndexedSeq(args__5544__auto__.slice((3)),(0))):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5545__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,cljs.core.cst$kw$macro,true));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__11359 = cljs.core.cons(f,p);
var G__11360 = cljs.core.next(args__$1);
p = G__11359;
args__$1 = G__11360;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__11361 = cljs.core.cons(f,p);
var G__11362 = cljs.core.next(args__$1);
p = G__11361;
args__$1 = G__11362;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__11363 = cljs.core.next(fd);
fd = G__11363;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__11364 = cljs.core.next(fd);
fd = G__11364;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?cljs.core._conj(cljs.core.List.EMPTY,fdecl):fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_env,args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__11365 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__11366 = cljs.core.next(ds);
acc = G__11365;
ds = G__11366;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__11367 = cljs.core.next(p);
var G__11368 = cljs.core.cons(cljs.core.first(p),d);
p = G__11367;
d = G__11368;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$macro)], 0))))),cljs.core.cst$sym$set_BANG_)),cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,decl)),cljs.core.cst$sym$do);
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq11352){
var G__11353 = cljs.core.first(seq11352);
var seq11352__$1 = cljs.core.next(seq11352);
var G__11354 = cljs.core.first(seq11352__$1);
var seq11352__$2 = cljs.core.next(seq11352__$1);
var G__11355 = cljs.core.first(seq11352__$2);
var seq11352__$3 = cljs.core.next(seq11352__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__11353,G__11354,G__11355,seq11352__$3);
});
cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map