// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t16156 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16156 = (function (fn_handler,f,meta16157){
this.fn_handler = fn_handler;
this.f = f;
this.meta16157 = meta16157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16158,meta16157__$1){
var self__ = this;
var _16158__$1 = this;
return (new cljs.core.async.t16156(self__.fn_handler,self__.f,meta16157__$1));
});

cljs.core.async.t16156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16158){
var self__ = this;
var _16158__$1 = this;
return self__.meta16157;
});

cljs.core.async.t16156.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta16157","meta16157",-806870170,null)], null);
});

cljs.core.async.t16156.cljs$lang$type = true;

cljs.core.async.t16156.cljs$lang$ctorStr = "cljs.core.async/t16156";

cljs.core.async.t16156.cljs$lang$ctorPrWriter = (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t16156");
});

cljs.core.async.__GT_t16156 = (function cljs$core$async$fn_handler_$___GT_t16156(fn_handler__$1,f__$1,meta16157){
return (new cljs.core.async.t16156(fn_handler__$1,f__$1,meta16157));
});

}

return (new cljs.core.async.t16156(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__16160 = buff;
if(G__16160){
var bit__5171__auto__ = null;
if((function (){var or__4497__auto__ = bit__5171__auto__;
if(or__4497__auto__){
return or__4497__auto__;
} else {
return G__16160.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()){
return true;
} else {
if((!G__16160.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16160);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16160);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__16162 = arguments.length;
switch (G__16162) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(xform){
if(buf_or_n__$1){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__16165 = arguments.length;
switch (G__16165) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(ret){
var val_16167 = cljs.core.deref.call(null,ret);
if(on_caller_QMARK_){
fn1.call(null,val_16167);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16167,ret){
return (function (){
return fn1.call(null,val_16167);
});})(val_16167,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__16169 = arguments.length;
switch (G__16169) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(temp__4423__auto__){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(temp__4423__auto__){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(on_caller_QMARK_){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5382__auto___16171 = n;
var x_16172 = (0);
while(true){
if((x_16172 < n__5382__auto___16171)){
(a[x_16172] = (0));

var G__16173 = (x_16172 + (1));
x_16172 = G__16173;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__16174 = (i + (1));
i = G__16174;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16178 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16178 = (function (alt_flag,flag,meta16179){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16179 = meta16179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16180,meta16179__$1){
var self__ = this;
var _16180__$1 = this;
return (new cljs.core.async.t16178(self__.alt_flag,self__.flag,meta16179__$1));
});})(flag))
;

cljs.core.async.t16178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16180){
var self__ = this;
var _16180__$1 = this;
return self__.meta16179;
});})(flag))
;

cljs.core.async.t16178.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16178.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16179","meta16179",-1726021007,null)], null);
});})(flag))
;

cljs.core.async.t16178.cljs$lang$type = true;

cljs.core.async.t16178.cljs$lang$ctorStr = "cljs.core.async/t16178";

cljs.core.async.t16178.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t16178");
});})(flag))
;

cljs.core.async.__GT_t16178 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t16178(alt_flag__$1,flag__$1,meta16179){
return (new cljs.core.async.t16178(alt_flag__$1,flag__$1,meta16179));
});})(flag))
;

}

return (new cljs.core.async.t16178(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t16184 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16184 = (function (alt_handler,flag,cb,meta16185){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16185 = meta16185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16186,meta16185__$1){
var self__ = this;
var _16186__$1 = this;
return (new cljs.core.async.t16184(self__.alt_handler,self__.flag,self__.cb,meta16185__$1));
});

cljs.core.async.t16184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16186){
var self__ = this;
var _16186__$1 = this;
return self__.meta16185;
});

cljs.core.async.t16184.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16185","meta16185",338437165,null)], null);
});

cljs.core.async.t16184.cljs$lang$type = true;

cljs.core.async.t16184.cljs$lang$ctorStr = "cljs.core.async/t16184";

cljs.core.async.t16184.cljs$lang$ctorPrWriter = (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t16184");
});

cljs.core.async.__GT_t16184 = (function cljs$core$async$alt_handler_$___GT_t16184(alt_handler__$1,flag__$1,cb__$1,meta16185){
return (new cljs.core.async.t16184(alt_handler__$1,flag__$1,cb__$1,meta16185));
});

}

return (new cljs.core.async.t16184(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = ((priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = ((wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16187_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16187_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16188_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16188_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(vbox){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4497__auto__ = wport;
if(or__4497__auto__){
return or__4497__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16189 = (i + (1));
i = G__16189;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4497__auto__ = ret;
if(or__4497__auto__){
return or__4497__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4485__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(and__4485__auto__){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4485__auto__;
}
})();
if(temp__4425__auto__){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5537__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16192){
var map__16193 = p__16192;
var map__16193__$1 = ((cljs.core.seq_QMARK_.call(null,map__16193))?cljs.core.apply.call(null,cljs.core.hash_map,map__16193):map__16193);
var opts = map__16193__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16190){
var G__16191 = cljs.core.first.call(null,seq16190);
var seq16190__$1 = cljs.core.next.call(null,seq16190);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16191,seq16190__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__16195 = arguments.length;
switch (G__16195) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9849__auto___16244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___16244){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___16244){
return (function (state_16219){
var state_val_16220 = (state_16219[(1)]);
if((state_val_16220 === (7))){
var inst_16215 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
var statearr_16221_16245 = state_16219__$1;
(statearr_16221_16245[(2)] = inst_16215);

(statearr_16221_16245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (1))){
var state_16219__$1 = state_16219;
var statearr_16222_16246 = state_16219__$1;
(statearr_16222_16246[(2)] = null);

(statearr_16222_16246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (4))){
var inst_16198 = (state_16219[(7)]);
var inst_16198__$1 = (state_16219[(2)]);
var inst_16199 = (inst_16198__$1 == null);
var state_16219__$1 = (function (){var statearr_16223 = state_16219;
(statearr_16223[(7)] = inst_16198__$1);

return statearr_16223;
})();
if(inst_16199){
var statearr_16224_16247 = state_16219__$1;
(statearr_16224_16247[(1)] = (5));

} else {
var statearr_16225_16248 = state_16219__$1;
(statearr_16225_16248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (13))){
var state_16219__$1 = state_16219;
var statearr_16226_16249 = state_16219__$1;
(statearr_16226_16249[(2)] = null);

(statearr_16226_16249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (6))){
var inst_16198 = (state_16219[(7)]);
var state_16219__$1 = state_16219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16219__$1,(11),to,inst_16198);
} else {
if((state_val_16220 === (3))){
var inst_16217 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16219__$1,inst_16217);
} else {
if((state_val_16220 === (12))){
var state_16219__$1 = state_16219;
var statearr_16227_16250 = state_16219__$1;
(statearr_16227_16250[(2)] = null);

(statearr_16227_16250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (2))){
var state_16219__$1 = state_16219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16219__$1,(4),from);
} else {
if((state_val_16220 === (11))){
var inst_16208 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
if(inst_16208){
var statearr_16228_16251 = state_16219__$1;
(statearr_16228_16251[(1)] = (12));

} else {
var statearr_16229_16252 = state_16219__$1;
(statearr_16229_16252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (9))){
var state_16219__$1 = state_16219;
var statearr_16230_16253 = state_16219__$1;
(statearr_16230_16253[(2)] = null);

(statearr_16230_16253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (5))){
var state_16219__$1 = state_16219;
if(close_QMARK_){
var statearr_16231_16254 = state_16219__$1;
(statearr_16231_16254[(1)] = (8));

} else {
var statearr_16232_16255 = state_16219__$1;
(statearr_16232_16255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (14))){
var inst_16213 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
var statearr_16233_16256 = state_16219__$1;
(statearr_16233_16256[(2)] = inst_16213);

(statearr_16233_16256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (10))){
var inst_16205 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
var statearr_16234_16257 = state_16219__$1;
(statearr_16234_16257[(2)] = inst_16205);

(statearr_16234_16257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (8))){
var inst_16202 = cljs.core.async.close_BANG_.call(null,to);
var state_16219__$1 = state_16219;
var statearr_16235_16258 = state_16219__$1;
(statearr_16235_16258[(2)] = inst_16202);

(statearr_16235_16258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___16244))
;
return ((function (switch__9787__auto__,c__9849__auto___16244){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_16239 = [null,null,null,null,null,null,null,null];
(statearr_16239[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_16239[(1)] = (1));

return statearr_16239;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_16219){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16240){if((e16240 instanceof Object)){
var ex__9791__auto__ = e16240;
var statearr_16241_16259 = state_16219;
(statearr_16241_16259[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16260 = state_16219;
state_16219 = G__16260;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_16219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_16219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___16244))
})();
var state__9851__auto__ = (function (){var statearr_16242 = f__9850__auto__.call(null);
(statearr_16242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___16244);

return statearr_16242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___16244))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16444){
var vec__16445 = p__16444;
var v = cljs.core.nth.call(null,vec__16445,(0),null);
var p = cljs.core.nth.call(null,vec__16445,(1),null);
var job = vec__16445;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9849__auto___16627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___16627,res,vec__16445,v,p,job,jobs,results){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___16627,res,vec__16445,v,p,job,jobs,results){
return (function (state_16450){
var state_val_16451 = (state_16450[(1)]);
if((state_val_16451 === (1))){
var state_16450__$1 = state_16450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16450__$1,(2),res,v);
} else {
if((state_val_16451 === (2))){
var inst_16447 = (state_16450[(2)]);
var inst_16448 = cljs.core.async.close_BANG_.call(null,res);
var state_16450__$1 = (function (){var statearr_16452 = state_16450;
(statearr_16452[(7)] = inst_16447);

return statearr_16452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16450__$1,inst_16448);
} else {
return null;
}
}
});})(c__9849__auto___16627,res,vec__16445,v,p,job,jobs,results))
;
return ((function (switch__9787__auto__,c__9849__auto___16627,res,vec__16445,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0 = (function (){
var statearr_16456 = [null,null,null,null,null,null,null,null];
(statearr_16456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__);

(statearr_16456[(1)] = (1));

return statearr_16456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1 = (function (state_16450){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16457){if((e16457 instanceof Object)){
var ex__9791__auto__ = e16457;
var statearr_16458_16628 = state_16450;
(statearr_16458_16628[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16629 = state_16450;
state_16450 = G__16629;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = function(state_16450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1.call(this,state_16450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___16627,res,vec__16445,v,p,job,jobs,results))
})();
var state__9851__auto__ = (function (){var statearr_16459 = f__9850__auto__.call(null);
(statearr_16459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___16627);

return statearr_16459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___16627,res,vec__16445,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16460){
var vec__16461 = p__16460;
var v = cljs.core.nth.call(null,vec__16461,(0),null);
var p = cljs.core.nth.call(null,vec__16461,(1),null);
var job = vec__16461;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5382__auto___16630 = n;
var __16631 = (0);
while(true){
if((__16631 < n__5382__auto___16630)){
var G__16462_16632 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16462_16632) {
case "compute":
var c__9849__auto___16634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16631,c__9849__auto___16634,G__16462_16632,n__5382__auto___16630,jobs,results,process,async){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (__16631,c__9849__auto___16634,G__16462_16632,n__5382__auto___16630,jobs,results,process,async){
return (function (state_16475){
var state_val_16476 = (state_16475[(1)]);
if((state_val_16476 === (1))){
var state_16475__$1 = state_16475;
var statearr_16477_16635 = state_16475__$1;
(statearr_16477_16635[(2)] = null);

(statearr_16477_16635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (2))){
var state_16475__$1 = state_16475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16475__$1,(4),jobs);
} else {
if((state_val_16476 === (3))){
var inst_16473 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16475__$1,inst_16473);
} else {
if((state_val_16476 === (4))){
var inst_16465 = (state_16475[(2)]);
var inst_16466 = process.call(null,inst_16465);
var state_16475__$1 = state_16475;
if(inst_16466){
var statearr_16478_16636 = state_16475__$1;
(statearr_16478_16636[(1)] = (5));

} else {
var statearr_16479_16637 = state_16475__$1;
(statearr_16479_16637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (5))){
var state_16475__$1 = state_16475;
var statearr_16480_16638 = state_16475__$1;
(statearr_16480_16638[(2)] = null);

(statearr_16480_16638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (6))){
var state_16475__$1 = state_16475;
var statearr_16481_16639 = state_16475__$1;
(statearr_16481_16639[(2)] = null);

(statearr_16481_16639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (7))){
var inst_16471 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
var statearr_16482_16640 = state_16475__$1;
(statearr_16482_16640[(2)] = inst_16471);

(statearr_16482_16640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16631,c__9849__auto___16634,G__16462_16632,n__5382__auto___16630,jobs,results,process,async))
;
return ((function (__16631,switch__9787__auto__,c__9849__auto___16634,G__16462_16632,n__5382__auto___16630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0 = (function (){
var statearr_16486 = [null,null,null,null,null,null,null];
(statearr_16486[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__);

(statearr_16486[(1)] = (1));

return statearr_16486;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1 = (function (state_16475){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16487){if((e16487 instanceof Object)){
var ex__9791__auto__ = e16487;
var statearr_16488_16641 = state_16475;
(statearr_16488_16641[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16642 = state_16475;
state_16475 = G__16642;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = function(state_16475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1.call(this,state_16475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__;
})()
;})(__16631,switch__9787__auto__,c__9849__auto___16634,G__16462_16632,n__5382__auto___16630,jobs,results,process,async))
})();
var state__9851__auto__ = (function (){var statearr_16489 = f__9850__auto__.call(null);
(statearr_16489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___16634);

return statearr_16489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(__16631,c__9849__auto___16634,G__16462_16632,n__5382__auto___16630,jobs,results,process,async))
);


break;
case "async":
var c__9849__auto___16643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16631,c__9849__auto___16643,G__16462_16632,n__5382__auto___16630,jobs,results,process,async){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (__16631,c__9849__auto___16643,G__16462_16632,n__5382__auto___16630,jobs,results,process,async){
return (function (state_16502){
var state_val_16503 = (state_16502[(1)]);
if((state_val_16503 === (1))){
var state_16502__$1 = state_16502;
var statearr_16504_16644 = state_16502__$1;
(statearr_16504_16644[(2)] = null);

(statearr_16504_16644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16503 === (2))){
var state_16502__$1 = state_16502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16502__$1,(4),jobs);
} else {
if((state_val_16503 === (3))){
var inst_16500 = (state_16502[(2)]);
var state_16502__$1 = state_16502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16502__$1,inst_16500);
} else {
if((state_val_16503 === (4))){
var inst_16492 = (state_16502[(2)]);
var inst_16493 = async.call(null,inst_16492);
var state_16502__$1 = state_16502;
if(inst_16493){
var statearr_16505_16645 = state_16502__$1;
(statearr_16505_16645[(1)] = (5));

} else {
var statearr_16506_16646 = state_16502__$1;
(statearr_16506_16646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16503 === (5))){
var state_16502__$1 = state_16502;
var statearr_16507_16647 = state_16502__$1;
(statearr_16507_16647[(2)] = null);

(statearr_16507_16647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16503 === (6))){
var state_16502__$1 = state_16502;
var statearr_16508_16648 = state_16502__$1;
(statearr_16508_16648[(2)] = null);

(statearr_16508_16648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16503 === (7))){
var inst_16498 = (state_16502[(2)]);
var state_16502__$1 = state_16502;
var statearr_16509_16649 = state_16502__$1;
(statearr_16509_16649[(2)] = inst_16498);

(statearr_16509_16649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16631,c__9849__auto___16643,G__16462_16632,n__5382__auto___16630,jobs,results,process,async))
;
return ((function (__16631,switch__9787__auto__,c__9849__auto___16643,G__16462_16632,n__5382__auto___16630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0 = (function (){
var statearr_16513 = [null,null,null,null,null,null,null];
(statearr_16513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__);

(statearr_16513[(1)] = (1));

return statearr_16513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1 = (function (state_16502){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16514){if((e16514 instanceof Object)){
var ex__9791__auto__ = e16514;
var statearr_16515_16650 = state_16502;
(statearr_16515_16650[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16651 = state_16502;
state_16502 = G__16651;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = function(state_16502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1.call(this,state_16502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__;
})()
;})(__16631,switch__9787__auto__,c__9849__auto___16643,G__16462_16632,n__5382__auto___16630,jobs,results,process,async))
})();
var state__9851__auto__ = (function (){var statearr_16516 = f__9850__auto__.call(null);
(statearr_16516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___16643);

return statearr_16516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(__16631,c__9849__auto___16643,G__16462_16632,n__5382__auto___16630,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16652 = (__16631 + (1));
__16631 = G__16652;
continue;
} else {
}
break;
}

var c__9849__auto___16653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___16653,jobs,results,process,async){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___16653,jobs,results,process,async){
return (function (state_16538){
var state_val_16539 = (state_16538[(1)]);
if((state_val_16539 === (1))){
var state_16538__$1 = state_16538;
var statearr_16540_16654 = state_16538__$1;
(statearr_16540_16654[(2)] = null);

(statearr_16540_16654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (2))){
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16538__$1,(4),from);
} else {
if((state_val_16539 === (3))){
var inst_16536 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16538__$1,inst_16536);
} else {
if((state_val_16539 === (4))){
var inst_16519 = (state_16538[(7)]);
var inst_16519__$1 = (state_16538[(2)]);
var inst_16520 = (inst_16519__$1 == null);
var state_16538__$1 = (function (){var statearr_16541 = state_16538;
(statearr_16541[(7)] = inst_16519__$1);

return statearr_16541;
})();
if(inst_16520){
var statearr_16542_16655 = state_16538__$1;
(statearr_16542_16655[(1)] = (5));

} else {
var statearr_16543_16656 = state_16538__$1;
(statearr_16543_16656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (5))){
var inst_16522 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16538__$1 = state_16538;
var statearr_16544_16657 = state_16538__$1;
(statearr_16544_16657[(2)] = inst_16522);

(statearr_16544_16657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (6))){
var inst_16519 = (state_16538[(7)]);
var inst_16524 = (state_16538[(8)]);
var inst_16524__$1 = cljs.core.async.chan.call(null,(1));
var inst_16525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16526 = [inst_16519,inst_16524__$1];
var inst_16527 = (new cljs.core.PersistentVector(null,2,(5),inst_16525,inst_16526,null));
var state_16538__$1 = (function (){var statearr_16545 = state_16538;
(statearr_16545[(8)] = inst_16524__$1);

return statearr_16545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16538__$1,(8),jobs,inst_16527);
} else {
if((state_val_16539 === (7))){
var inst_16534 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16546_16658 = state_16538__$1;
(statearr_16546_16658[(2)] = inst_16534);

(statearr_16546_16658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (8))){
var inst_16524 = (state_16538[(8)]);
var inst_16529 = (state_16538[(2)]);
var state_16538__$1 = (function (){var statearr_16547 = state_16538;
(statearr_16547[(9)] = inst_16529);

return statearr_16547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16538__$1,(9),results,inst_16524);
} else {
if((state_val_16539 === (9))){
var inst_16531 = (state_16538[(2)]);
var state_16538__$1 = (function (){var statearr_16548 = state_16538;
(statearr_16548[(10)] = inst_16531);

return statearr_16548;
})();
var statearr_16549_16659 = state_16538__$1;
(statearr_16549_16659[(2)] = null);

(statearr_16549_16659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___16653,jobs,results,process,async))
;
return ((function (switch__9787__auto__,c__9849__auto___16653,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0 = (function (){
var statearr_16553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__);

(statearr_16553[(1)] = (1));

return statearr_16553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1 = (function (state_16538){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16554){if((e16554 instanceof Object)){
var ex__9791__auto__ = e16554;
var statearr_16555_16660 = state_16538;
(statearr_16555_16660[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16661 = state_16538;
state_16538 = G__16661;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = function(state_16538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1.call(this,state_16538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___16653,jobs,results,process,async))
})();
var state__9851__auto__ = (function (){var statearr_16556 = f__9850__auto__.call(null);
(statearr_16556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___16653);

return statearr_16556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___16653,jobs,results,process,async))
);


var c__9849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto__,jobs,results,process,async){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto__,jobs,results,process,async){
return (function (state_16594){
var state_val_16595 = (state_16594[(1)]);
if((state_val_16595 === (7))){
var inst_16590 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
var statearr_16596_16662 = state_16594__$1;
(statearr_16596_16662[(2)] = inst_16590);

(statearr_16596_16662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (20))){
var state_16594__$1 = state_16594;
var statearr_16597_16663 = state_16594__$1;
(statearr_16597_16663[(2)] = null);

(statearr_16597_16663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (1))){
var state_16594__$1 = state_16594;
var statearr_16598_16664 = state_16594__$1;
(statearr_16598_16664[(2)] = null);

(statearr_16598_16664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (4))){
var inst_16559 = (state_16594[(7)]);
var inst_16559__$1 = (state_16594[(2)]);
var inst_16560 = (inst_16559__$1 == null);
var state_16594__$1 = (function (){var statearr_16599 = state_16594;
(statearr_16599[(7)] = inst_16559__$1);

return statearr_16599;
})();
if(inst_16560){
var statearr_16600_16665 = state_16594__$1;
(statearr_16600_16665[(1)] = (5));

} else {
var statearr_16601_16666 = state_16594__$1;
(statearr_16601_16666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (15))){
var inst_16572 = (state_16594[(8)]);
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16594__$1,(18),to,inst_16572);
} else {
if((state_val_16595 === (21))){
var inst_16585 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
var statearr_16602_16667 = state_16594__$1;
(statearr_16602_16667[(2)] = inst_16585);

(statearr_16602_16667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (13))){
var inst_16587 = (state_16594[(2)]);
var state_16594__$1 = (function (){var statearr_16603 = state_16594;
(statearr_16603[(9)] = inst_16587);

return statearr_16603;
})();
var statearr_16604_16668 = state_16594__$1;
(statearr_16604_16668[(2)] = null);

(statearr_16604_16668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (6))){
var inst_16559 = (state_16594[(7)]);
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16594__$1,(11),inst_16559);
} else {
if((state_val_16595 === (17))){
var inst_16580 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
if(inst_16580){
var statearr_16605_16669 = state_16594__$1;
(statearr_16605_16669[(1)] = (19));

} else {
var statearr_16606_16670 = state_16594__$1;
(statearr_16606_16670[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (3))){
var inst_16592 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16594__$1,inst_16592);
} else {
if((state_val_16595 === (12))){
var inst_16569 = (state_16594[(10)]);
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16594__$1,(14),inst_16569);
} else {
if((state_val_16595 === (2))){
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16594__$1,(4),results);
} else {
if((state_val_16595 === (19))){
var state_16594__$1 = state_16594;
var statearr_16607_16671 = state_16594__$1;
(statearr_16607_16671[(2)] = null);

(statearr_16607_16671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (11))){
var inst_16569 = (state_16594[(2)]);
var state_16594__$1 = (function (){var statearr_16608 = state_16594;
(statearr_16608[(10)] = inst_16569);

return statearr_16608;
})();
var statearr_16609_16672 = state_16594__$1;
(statearr_16609_16672[(2)] = null);

(statearr_16609_16672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (9))){
var state_16594__$1 = state_16594;
var statearr_16610_16673 = state_16594__$1;
(statearr_16610_16673[(2)] = null);

(statearr_16610_16673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (5))){
var state_16594__$1 = state_16594;
if(close_QMARK_){
var statearr_16611_16674 = state_16594__$1;
(statearr_16611_16674[(1)] = (8));

} else {
var statearr_16612_16675 = state_16594__$1;
(statearr_16612_16675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (14))){
var inst_16574 = (state_16594[(11)]);
var inst_16572 = (state_16594[(8)]);
var inst_16572__$1 = (state_16594[(2)]);
var inst_16573 = (inst_16572__$1 == null);
var inst_16574__$1 = cljs.core.not.call(null,inst_16573);
var state_16594__$1 = (function (){var statearr_16613 = state_16594;
(statearr_16613[(11)] = inst_16574__$1);

(statearr_16613[(8)] = inst_16572__$1);

return statearr_16613;
})();
if(inst_16574__$1){
var statearr_16614_16676 = state_16594__$1;
(statearr_16614_16676[(1)] = (15));

} else {
var statearr_16615_16677 = state_16594__$1;
(statearr_16615_16677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (16))){
var inst_16574 = (state_16594[(11)]);
var state_16594__$1 = state_16594;
var statearr_16616_16678 = state_16594__$1;
(statearr_16616_16678[(2)] = inst_16574);

(statearr_16616_16678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (10))){
var inst_16566 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
var statearr_16617_16679 = state_16594__$1;
(statearr_16617_16679[(2)] = inst_16566);

(statearr_16617_16679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (18))){
var inst_16577 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
var statearr_16618_16680 = state_16594__$1;
(statearr_16618_16680[(2)] = inst_16577);

(statearr_16618_16680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (8))){
var inst_16563 = cljs.core.async.close_BANG_.call(null,to);
var state_16594__$1 = state_16594;
var statearr_16619_16681 = state_16594__$1;
(statearr_16619_16681[(2)] = inst_16563);

(statearr_16619_16681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto__,jobs,results,process,async))
;
return ((function (switch__9787__auto__,c__9849__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0 = (function (){
var statearr_16623 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__);

(statearr_16623[(1)] = (1));

return statearr_16623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1 = (function (state_16594){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16624){if((e16624 instanceof Object)){
var ex__9791__auto__ = e16624;
var statearr_16625_16682 = state_16594;
(statearr_16625_16682[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16683 = state_16594;
state_16594 = G__16683;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__ = function(state_16594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1.call(this,state_16594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9788__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto__,jobs,results,process,async))
})();
var state__9851__auto__ = (function (){var statearr_16626 = f__9850__auto__.call(null);
(statearr_16626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto__);

return statearr_16626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto__,jobs,results,process,async))
);

return c__9849__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__16685 = arguments.length;
switch (G__16685) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__16688 = arguments.length;
switch (G__16688) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__16691 = arguments.length;
switch (G__16691) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9849__auto___16743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___16743,tc,fc){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___16743,tc,fc){
return (function (state_16717){
var state_val_16718 = (state_16717[(1)]);
if((state_val_16718 === (7))){
var inst_16713 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
var statearr_16719_16744 = state_16717__$1;
(statearr_16719_16744[(2)] = inst_16713);

(statearr_16719_16744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (1))){
var state_16717__$1 = state_16717;
var statearr_16720_16745 = state_16717__$1;
(statearr_16720_16745[(2)] = null);

(statearr_16720_16745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (4))){
var inst_16694 = (state_16717[(7)]);
var inst_16694__$1 = (state_16717[(2)]);
var inst_16695 = (inst_16694__$1 == null);
var state_16717__$1 = (function (){var statearr_16721 = state_16717;
(statearr_16721[(7)] = inst_16694__$1);

return statearr_16721;
})();
if(inst_16695){
var statearr_16722_16746 = state_16717__$1;
(statearr_16722_16746[(1)] = (5));

} else {
var statearr_16723_16747 = state_16717__$1;
(statearr_16723_16747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (13))){
var state_16717__$1 = state_16717;
var statearr_16724_16748 = state_16717__$1;
(statearr_16724_16748[(2)] = null);

(statearr_16724_16748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (6))){
var inst_16694 = (state_16717[(7)]);
var inst_16700 = p.call(null,inst_16694);
var state_16717__$1 = state_16717;
if(inst_16700){
var statearr_16725_16749 = state_16717__$1;
(statearr_16725_16749[(1)] = (9));

} else {
var statearr_16726_16750 = state_16717__$1;
(statearr_16726_16750[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (3))){
var inst_16715 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16717__$1,inst_16715);
} else {
if((state_val_16718 === (12))){
var state_16717__$1 = state_16717;
var statearr_16727_16751 = state_16717__$1;
(statearr_16727_16751[(2)] = null);

(statearr_16727_16751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (2))){
var state_16717__$1 = state_16717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16717__$1,(4),ch);
} else {
if((state_val_16718 === (11))){
var inst_16694 = (state_16717[(7)]);
var inst_16704 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16717__$1,(8),inst_16704,inst_16694);
} else {
if((state_val_16718 === (9))){
var state_16717__$1 = state_16717;
var statearr_16728_16752 = state_16717__$1;
(statearr_16728_16752[(2)] = tc);

(statearr_16728_16752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (5))){
var inst_16697 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16698 = cljs.core.async.close_BANG_.call(null,fc);
var state_16717__$1 = (function (){var statearr_16729 = state_16717;
(statearr_16729[(8)] = inst_16697);

return statearr_16729;
})();
var statearr_16730_16753 = state_16717__$1;
(statearr_16730_16753[(2)] = inst_16698);

(statearr_16730_16753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (14))){
var inst_16711 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
var statearr_16731_16754 = state_16717__$1;
(statearr_16731_16754[(2)] = inst_16711);

(statearr_16731_16754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (10))){
var state_16717__$1 = state_16717;
var statearr_16732_16755 = state_16717__$1;
(statearr_16732_16755[(2)] = fc);

(statearr_16732_16755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (8))){
var inst_16706 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
if(inst_16706){
var statearr_16733_16756 = state_16717__$1;
(statearr_16733_16756[(1)] = (12));

} else {
var statearr_16734_16757 = state_16717__$1;
(statearr_16734_16757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___16743,tc,fc))
;
return ((function (switch__9787__auto__,c__9849__auto___16743,tc,fc){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_16738 = [null,null,null,null,null,null,null,null,null];
(statearr_16738[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_16738[(1)] = (1));

return statearr_16738;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_16717){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16739){if((e16739 instanceof Object)){
var ex__9791__auto__ = e16739;
var statearr_16740_16758 = state_16717;
(statearr_16740_16758[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16759 = state_16717;
state_16717 = G__16759;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_16717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_16717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___16743,tc,fc))
})();
var state__9851__auto__ = (function (){var statearr_16741 = f__9850__auto__.call(null);
(statearr_16741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___16743);

return statearr_16741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___16743,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto__){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto__){
return (function (state_16806){
var state_val_16807 = (state_16806[(1)]);
if((state_val_16807 === (1))){
var inst_16792 = init;
var state_16806__$1 = (function (){var statearr_16808 = state_16806;
(statearr_16808[(7)] = inst_16792);

return statearr_16808;
})();
var statearr_16809_16824 = state_16806__$1;
(statearr_16809_16824[(2)] = null);

(statearr_16809_16824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (2))){
var state_16806__$1 = state_16806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16806__$1,(4),ch);
} else {
if((state_val_16807 === (3))){
var inst_16804 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16806__$1,inst_16804);
} else {
if((state_val_16807 === (4))){
var inst_16795 = (state_16806[(8)]);
var inst_16795__$1 = (state_16806[(2)]);
var inst_16796 = (inst_16795__$1 == null);
var state_16806__$1 = (function (){var statearr_16810 = state_16806;
(statearr_16810[(8)] = inst_16795__$1);

return statearr_16810;
})();
if(inst_16796){
var statearr_16811_16825 = state_16806__$1;
(statearr_16811_16825[(1)] = (5));

} else {
var statearr_16812_16826 = state_16806__$1;
(statearr_16812_16826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (5))){
var inst_16792 = (state_16806[(7)]);
var state_16806__$1 = state_16806;
var statearr_16813_16827 = state_16806__$1;
(statearr_16813_16827[(2)] = inst_16792);

(statearr_16813_16827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (6))){
var inst_16792 = (state_16806[(7)]);
var inst_16795 = (state_16806[(8)]);
var inst_16799 = f.call(null,inst_16792,inst_16795);
var inst_16792__$1 = inst_16799;
var state_16806__$1 = (function (){var statearr_16814 = state_16806;
(statearr_16814[(7)] = inst_16792__$1);

return statearr_16814;
})();
var statearr_16815_16828 = state_16806__$1;
(statearr_16815_16828[(2)] = null);

(statearr_16815_16828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (7))){
var inst_16802 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
var statearr_16816_16829 = state_16806__$1;
(statearr_16816_16829[(2)] = inst_16802);

(statearr_16816_16829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__9849__auto__))
;
return ((function (switch__9787__auto__,c__9849__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9788__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9788__auto____0 = (function (){
var statearr_16820 = [null,null,null,null,null,null,null,null,null];
(statearr_16820[(0)] = cljs$core$async$reduce_$_state_machine__9788__auto__);

(statearr_16820[(1)] = (1));

return statearr_16820;
});
var cljs$core$async$reduce_$_state_machine__9788__auto____1 = (function (state_16806){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16821){if((e16821 instanceof Object)){
var ex__9791__auto__ = e16821;
var statearr_16822_16830 = state_16806;
(statearr_16822_16830[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16831 = state_16806;
state_16806 = G__16831;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9788__auto__ = function(state_16806){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9788__auto____1.call(this,state_16806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9788__auto____0;
cljs$core$async$reduce_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9788__auto____1;
return cljs$core$async$reduce_$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto__))
})();
var state__9851__auto__ = (function (){var statearr_16823 = f__9850__auto__.call(null);
(statearr_16823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto__);

return statearr_16823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto__))
);

return c__9849__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__16833 = arguments.length;
switch (G__16833) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto__){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto__){
return (function (state_16858){
var state_val_16859 = (state_16858[(1)]);
if((state_val_16859 === (7))){
var inst_16840 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
var statearr_16860_16884 = state_16858__$1;
(statearr_16860_16884[(2)] = inst_16840);

(statearr_16860_16884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (1))){
var inst_16834 = cljs.core.seq.call(null,coll);
var inst_16835 = inst_16834;
var state_16858__$1 = (function (){var statearr_16861 = state_16858;
(statearr_16861[(7)] = inst_16835);

return statearr_16861;
})();
var statearr_16862_16885 = state_16858__$1;
(statearr_16862_16885[(2)] = null);

(statearr_16862_16885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (4))){
var inst_16835 = (state_16858[(7)]);
var inst_16838 = cljs.core.first.call(null,inst_16835);
var state_16858__$1 = state_16858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16858__$1,(7),ch,inst_16838);
} else {
if((state_val_16859 === (13))){
var inst_16852 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
var statearr_16863_16886 = state_16858__$1;
(statearr_16863_16886[(2)] = inst_16852);

(statearr_16863_16886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (6))){
var inst_16843 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
if(inst_16843){
var statearr_16864_16887 = state_16858__$1;
(statearr_16864_16887[(1)] = (8));

} else {
var statearr_16865_16888 = state_16858__$1;
(statearr_16865_16888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (3))){
var inst_16856 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16858__$1,inst_16856);
} else {
if((state_val_16859 === (12))){
var state_16858__$1 = state_16858;
var statearr_16866_16889 = state_16858__$1;
(statearr_16866_16889[(2)] = null);

(statearr_16866_16889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (2))){
var inst_16835 = (state_16858[(7)]);
var state_16858__$1 = state_16858;
if(inst_16835){
var statearr_16867_16890 = state_16858__$1;
(statearr_16867_16890[(1)] = (4));

} else {
var statearr_16868_16891 = state_16858__$1;
(statearr_16868_16891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (11))){
var inst_16849 = cljs.core.async.close_BANG_.call(null,ch);
var state_16858__$1 = state_16858;
var statearr_16869_16892 = state_16858__$1;
(statearr_16869_16892[(2)] = inst_16849);

(statearr_16869_16892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (9))){
var state_16858__$1 = state_16858;
if(close_QMARK_){
var statearr_16870_16893 = state_16858__$1;
(statearr_16870_16893[(1)] = (11));

} else {
var statearr_16871_16894 = state_16858__$1;
(statearr_16871_16894[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (5))){
var inst_16835 = (state_16858[(7)]);
var state_16858__$1 = state_16858;
var statearr_16872_16895 = state_16858__$1;
(statearr_16872_16895[(2)] = inst_16835);

(statearr_16872_16895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (10))){
var inst_16854 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
var statearr_16873_16896 = state_16858__$1;
(statearr_16873_16896[(2)] = inst_16854);

(statearr_16873_16896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (8))){
var inst_16835 = (state_16858[(7)]);
var inst_16845 = cljs.core.next.call(null,inst_16835);
var inst_16835__$1 = inst_16845;
var state_16858__$1 = (function (){var statearr_16874 = state_16858;
(statearr_16874[(7)] = inst_16835__$1);

return statearr_16874;
})();
var statearr_16875_16897 = state_16858__$1;
(statearr_16875_16897[(2)] = null);

(statearr_16875_16897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto__))
;
return ((function (switch__9787__auto__,c__9849__auto__){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_16879 = [null,null,null,null,null,null,null,null];
(statearr_16879[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_16879[(1)] = (1));

return statearr_16879;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_16858){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_16858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e16880){if((e16880 instanceof Object)){
var ex__9791__auto__ = e16880;
var statearr_16881_16898 = state_16858;
(statearr_16881_16898[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16899 = state_16858;
state_16858 = G__16899;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_16858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_16858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto__))
})();
var state__9851__auto__ = (function (){var statearr_16882 = f__9850__auto__.call(null);
(statearr_16882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto__);

return statearr_16882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto__))
);

return c__9849__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj16901 = {};
return obj16901;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4485__auto__ = _;
if(and__4485__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4485__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5133__auto__ = (((_ == null))?null:_);
return (function (){var or__4497__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj16903 = {};
return obj16903;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t17125 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17125 = (function (mult,ch,cs,meta17126){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17126 = meta17126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17127,meta17126__$1){
var self__ = this;
var _17127__$1 = this;
return (new cljs.core.async.t17125(self__.mult,self__.ch,self__.cs,meta17126__$1));
});})(cs))
;

cljs.core.async.t17125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17127){
var self__ = this;
var _17127__$1 = this;
return self__.meta17126;
});})(cs))
;

cljs.core.async.t17125.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17125.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17125.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17125.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17125.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17125.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17125.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17126","meta17126",-1875007294,null)], null);
});})(cs))
;

cljs.core.async.t17125.cljs$lang$type = true;

cljs.core.async.t17125.cljs$lang$ctorStr = "cljs.core.async/t17125";

cljs.core.async.t17125.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t17125");
});})(cs))
;

cljs.core.async.__GT_t17125 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t17125(mult__$1,ch__$1,cs__$1,meta17126){
return (new cljs.core.async.t17125(mult__$1,ch__$1,cs__$1,meta17126));
});})(cs))
;

}

return (new cljs.core.async.t17125(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9849__auto___17346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___17346,cs,m,dchan,dctr,done){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___17346,cs,m,dchan,dctr,done){
return (function (state_17258){
var state_val_17259 = (state_17258[(1)]);
if((state_val_17259 === (7))){
var inst_17254 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17260_17347 = state_17258__$1;
(statearr_17260_17347[(2)] = inst_17254);

(statearr_17260_17347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (20))){
var inst_17159 = (state_17258[(7)]);
var inst_17169 = cljs.core.first.call(null,inst_17159);
var inst_17170 = cljs.core.nth.call(null,inst_17169,(0),null);
var inst_17171 = cljs.core.nth.call(null,inst_17169,(1),null);
var state_17258__$1 = (function (){var statearr_17261 = state_17258;
(statearr_17261[(8)] = inst_17170);

return statearr_17261;
})();
if(cljs.core.truth_(inst_17171)){
var statearr_17262_17348 = state_17258__$1;
(statearr_17262_17348[(1)] = (22));

} else {
var statearr_17263_17349 = state_17258__$1;
(statearr_17263_17349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (27))){
var inst_17201 = (state_17258[(9)]);
var inst_17130 = (state_17258[(10)]);
var inst_17206 = (state_17258[(11)]);
var inst_17199 = (state_17258[(12)]);
var inst_17206__$1 = cljs.core._nth.call(null,inst_17199,inst_17201);
var inst_17207 = cljs.core.async.put_BANG_.call(null,inst_17206__$1,inst_17130,done);
var state_17258__$1 = (function (){var statearr_17264 = state_17258;
(statearr_17264[(11)] = inst_17206__$1);

return statearr_17264;
})();
if(cljs.core.truth_(inst_17207)){
var statearr_17265_17350 = state_17258__$1;
(statearr_17265_17350[(1)] = (30));

} else {
var statearr_17266_17351 = state_17258__$1;
(statearr_17266_17351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (1))){
var state_17258__$1 = state_17258;
var statearr_17267_17352 = state_17258__$1;
(statearr_17267_17352[(2)] = null);

(statearr_17267_17352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (24))){
var inst_17159 = (state_17258[(7)]);
var inst_17176 = (state_17258[(2)]);
var inst_17177 = cljs.core.next.call(null,inst_17159);
var inst_17139 = inst_17177;
var inst_17140 = null;
var inst_17141 = (0);
var inst_17142 = (0);
var state_17258__$1 = (function (){var statearr_17268 = state_17258;
(statearr_17268[(13)] = inst_17140);

(statearr_17268[(14)] = inst_17176);

(statearr_17268[(15)] = inst_17139);

(statearr_17268[(16)] = inst_17142);

(statearr_17268[(17)] = inst_17141);

return statearr_17268;
})();
var statearr_17269_17353 = state_17258__$1;
(statearr_17269_17353[(2)] = null);

(statearr_17269_17353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (39))){
var state_17258__$1 = state_17258;
var statearr_17273_17354 = state_17258__$1;
(statearr_17273_17354[(2)] = null);

(statearr_17273_17354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (4))){
var inst_17130 = (state_17258[(10)]);
var inst_17130__$1 = (state_17258[(2)]);
var inst_17131 = (inst_17130__$1 == null);
var state_17258__$1 = (function (){var statearr_17274 = state_17258;
(statearr_17274[(10)] = inst_17130__$1);

return statearr_17274;
})();
if(cljs.core.truth_(inst_17131)){
var statearr_17275_17355 = state_17258__$1;
(statearr_17275_17355[(1)] = (5));

} else {
var statearr_17276_17356 = state_17258__$1;
(statearr_17276_17356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (15))){
var inst_17140 = (state_17258[(13)]);
var inst_17139 = (state_17258[(15)]);
var inst_17142 = (state_17258[(16)]);
var inst_17141 = (state_17258[(17)]);
var inst_17155 = (state_17258[(2)]);
var inst_17156 = (inst_17142 + (1));
var tmp17270 = inst_17140;
var tmp17271 = inst_17139;
var tmp17272 = inst_17141;
var inst_17139__$1 = tmp17271;
var inst_17140__$1 = tmp17270;
var inst_17141__$1 = tmp17272;
var inst_17142__$1 = inst_17156;
var state_17258__$1 = (function (){var statearr_17277 = state_17258;
(statearr_17277[(13)] = inst_17140__$1);

(statearr_17277[(15)] = inst_17139__$1);

(statearr_17277[(16)] = inst_17142__$1);

(statearr_17277[(18)] = inst_17155);

(statearr_17277[(17)] = inst_17141__$1);

return statearr_17277;
})();
var statearr_17278_17357 = state_17258__$1;
(statearr_17278_17357[(2)] = null);

(statearr_17278_17357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (21))){
var inst_17180 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17282_17358 = state_17258__$1;
(statearr_17282_17358[(2)] = inst_17180);

(statearr_17282_17358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (31))){
var inst_17206 = (state_17258[(11)]);
var inst_17210 = done.call(null,null);
var inst_17211 = cljs.core.async.untap_STAR_.call(null,m,inst_17206);
var state_17258__$1 = (function (){var statearr_17283 = state_17258;
(statearr_17283[(19)] = inst_17210);

return statearr_17283;
})();
var statearr_17284_17359 = state_17258__$1;
(statearr_17284_17359[(2)] = inst_17211);

(statearr_17284_17359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (32))){
var inst_17198 = (state_17258[(20)]);
var inst_17201 = (state_17258[(9)]);
var inst_17200 = (state_17258[(21)]);
var inst_17199 = (state_17258[(12)]);
var inst_17213 = (state_17258[(2)]);
var inst_17214 = (inst_17201 + (1));
var tmp17279 = inst_17198;
var tmp17280 = inst_17200;
var tmp17281 = inst_17199;
var inst_17198__$1 = tmp17279;
var inst_17199__$1 = tmp17281;
var inst_17200__$1 = tmp17280;
var inst_17201__$1 = inst_17214;
var state_17258__$1 = (function (){var statearr_17285 = state_17258;
(statearr_17285[(20)] = inst_17198__$1);

(statearr_17285[(9)] = inst_17201__$1);

(statearr_17285[(21)] = inst_17200__$1);

(statearr_17285[(22)] = inst_17213);

(statearr_17285[(12)] = inst_17199__$1);

return statearr_17285;
})();
var statearr_17286_17360 = state_17258__$1;
(statearr_17286_17360[(2)] = null);

(statearr_17286_17360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (40))){
var inst_17226 = (state_17258[(23)]);
var inst_17230 = done.call(null,null);
var inst_17231 = cljs.core.async.untap_STAR_.call(null,m,inst_17226);
var state_17258__$1 = (function (){var statearr_17287 = state_17258;
(statearr_17287[(24)] = inst_17230);

return statearr_17287;
})();
var statearr_17288_17361 = state_17258__$1;
(statearr_17288_17361[(2)] = inst_17231);

(statearr_17288_17361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (33))){
var inst_17217 = (state_17258[(25)]);
var inst_17219 = cljs.core.chunked_seq_QMARK_.call(null,inst_17217);
var state_17258__$1 = state_17258;
if(inst_17219){
var statearr_17289_17362 = state_17258__$1;
(statearr_17289_17362[(1)] = (36));

} else {
var statearr_17290_17363 = state_17258__$1;
(statearr_17290_17363[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (13))){
var inst_17149 = (state_17258[(26)]);
var inst_17152 = cljs.core.async.close_BANG_.call(null,inst_17149);
var state_17258__$1 = state_17258;
var statearr_17291_17364 = state_17258__$1;
(statearr_17291_17364[(2)] = inst_17152);

(statearr_17291_17364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (22))){
var inst_17170 = (state_17258[(8)]);
var inst_17173 = cljs.core.async.close_BANG_.call(null,inst_17170);
var state_17258__$1 = state_17258;
var statearr_17292_17365 = state_17258__$1;
(statearr_17292_17365[(2)] = inst_17173);

(statearr_17292_17365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (36))){
var inst_17217 = (state_17258[(25)]);
var inst_17221 = cljs.core.chunk_first.call(null,inst_17217);
var inst_17222 = cljs.core.chunk_rest.call(null,inst_17217);
var inst_17223 = cljs.core.count.call(null,inst_17221);
var inst_17198 = inst_17222;
var inst_17199 = inst_17221;
var inst_17200 = inst_17223;
var inst_17201 = (0);
var state_17258__$1 = (function (){var statearr_17293 = state_17258;
(statearr_17293[(20)] = inst_17198);

(statearr_17293[(9)] = inst_17201);

(statearr_17293[(21)] = inst_17200);

(statearr_17293[(12)] = inst_17199);

return statearr_17293;
})();
var statearr_17294_17366 = state_17258__$1;
(statearr_17294_17366[(2)] = null);

(statearr_17294_17366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (41))){
var inst_17217 = (state_17258[(25)]);
var inst_17233 = (state_17258[(2)]);
var inst_17234 = cljs.core.next.call(null,inst_17217);
var inst_17198 = inst_17234;
var inst_17199 = null;
var inst_17200 = (0);
var inst_17201 = (0);
var state_17258__$1 = (function (){var statearr_17295 = state_17258;
(statearr_17295[(20)] = inst_17198);

(statearr_17295[(9)] = inst_17201);

(statearr_17295[(21)] = inst_17200);

(statearr_17295[(27)] = inst_17233);

(statearr_17295[(12)] = inst_17199);

return statearr_17295;
})();
var statearr_17296_17367 = state_17258__$1;
(statearr_17296_17367[(2)] = null);

(statearr_17296_17367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (43))){
var state_17258__$1 = state_17258;
var statearr_17297_17368 = state_17258__$1;
(statearr_17297_17368[(2)] = null);

(statearr_17297_17368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (29))){
var inst_17242 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17298_17369 = state_17258__$1;
(statearr_17298_17369[(2)] = inst_17242);

(statearr_17298_17369[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (44))){
var inst_17251 = (state_17258[(2)]);
var state_17258__$1 = (function (){var statearr_17299 = state_17258;
(statearr_17299[(28)] = inst_17251);

return statearr_17299;
})();
var statearr_17300_17370 = state_17258__$1;
(statearr_17300_17370[(2)] = null);

(statearr_17300_17370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (6))){
var inst_17190 = (state_17258[(29)]);
var inst_17189 = cljs.core.deref.call(null,cs);
var inst_17190__$1 = cljs.core.keys.call(null,inst_17189);
var inst_17191 = cljs.core.count.call(null,inst_17190__$1);
var inst_17192 = cljs.core.reset_BANG_.call(null,dctr,inst_17191);
var inst_17197 = cljs.core.seq.call(null,inst_17190__$1);
var inst_17198 = inst_17197;
var inst_17199 = null;
var inst_17200 = (0);
var inst_17201 = (0);
var state_17258__$1 = (function (){var statearr_17301 = state_17258;
(statearr_17301[(20)] = inst_17198);

(statearr_17301[(9)] = inst_17201);

(statearr_17301[(21)] = inst_17200);

(statearr_17301[(12)] = inst_17199);

(statearr_17301[(30)] = inst_17192);

(statearr_17301[(29)] = inst_17190__$1);

return statearr_17301;
})();
var statearr_17302_17371 = state_17258__$1;
(statearr_17302_17371[(2)] = null);

(statearr_17302_17371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (28))){
var inst_17198 = (state_17258[(20)]);
var inst_17217 = (state_17258[(25)]);
var inst_17217__$1 = cljs.core.seq.call(null,inst_17198);
var state_17258__$1 = (function (){var statearr_17303 = state_17258;
(statearr_17303[(25)] = inst_17217__$1);

return statearr_17303;
})();
if(inst_17217__$1){
var statearr_17304_17372 = state_17258__$1;
(statearr_17304_17372[(1)] = (33));

} else {
var statearr_17305_17373 = state_17258__$1;
(statearr_17305_17373[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (25))){
var inst_17201 = (state_17258[(9)]);
var inst_17200 = (state_17258[(21)]);
var inst_17203 = (inst_17201 < inst_17200);
var inst_17204 = inst_17203;
var state_17258__$1 = state_17258;
if(cljs.core.truth_(inst_17204)){
var statearr_17306_17374 = state_17258__$1;
(statearr_17306_17374[(1)] = (27));

} else {
var statearr_17307_17375 = state_17258__$1;
(statearr_17307_17375[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (34))){
var state_17258__$1 = state_17258;
var statearr_17308_17376 = state_17258__$1;
(statearr_17308_17376[(2)] = null);

(statearr_17308_17376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (17))){
var state_17258__$1 = state_17258;
var statearr_17309_17377 = state_17258__$1;
(statearr_17309_17377[(2)] = null);

(statearr_17309_17377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (3))){
var inst_17256 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17258__$1,inst_17256);
} else {
if((state_val_17259 === (12))){
var inst_17185 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17310_17378 = state_17258__$1;
(statearr_17310_17378[(2)] = inst_17185);

(statearr_17310_17378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (2))){
var state_17258__$1 = state_17258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17258__$1,(4),ch);
} else {
if((state_val_17259 === (23))){
var state_17258__$1 = state_17258;
var statearr_17311_17379 = state_17258__$1;
(statearr_17311_17379[(2)] = null);

(statearr_17311_17379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (35))){
var inst_17240 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17312_17380 = state_17258__$1;
(statearr_17312_17380[(2)] = inst_17240);

(statearr_17312_17380[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (19))){
var inst_17159 = (state_17258[(7)]);
var inst_17163 = cljs.core.chunk_first.call(null,inst_17159);
var inst_17164 = cljs.core.chunk_rest.call(null,inst_17159);
var inst_17165 = cljs.core.count.call(null,inst_17163);
var inst_17139 = inst_17164;
var inst_17140 = inst_17163;
var inst_17141 = inst_17165;
var inst_17142 = (0);
var state_17258__$1 = (function (){var statearr_17313 = state_17258;
(statearr_17313[(13)] = inst_17140);

(statearr_17313[(15)] = inst_17139);

(statearr_17313[(16)] = inst_17142);

(statearr_17313[(17)] = inst_17141);

return statearr_17313;
})();
var statearr_17314_17381 = state_17258__$1;
(statearr_17314_17381[(2)] = null);

(statearr_17314_17381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (11))){
var inst_17139 = (state_17258[(15)]);
var inst_17159 = (state_17258[(7)]);
var inst_17159__$1 = cljs.core.seq.call(null,inst_17139);
var state_17258__$1 = (function (){var statearr_17315 = state_17258;
(statearr_17315[(7)] = inst_17159__$1);

return statearr_17315;
})();
if(inst_17159__$1){
var statearr_17316_17382 = state_17258__$1;
(statearr_17316_17382[(1)] = (16));

} else {
var statearr_17317_17383 = state_17258__$1;
(statearr_17317_17383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (9))){
var inst_17187 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17318_17384 = state_17258__$1;
(statearr_17318_17384[(2)] = inst_17187);

(statearr_17318_17384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (5))){
var inst_17137 = cljs.core.deref.call(null,cs);
var inst_17138 = cljs.core.seq.call(null,inst_17137);
var inst_17139 = inst_17138;
var inst_17140 = null;
var inst_17141 = (0);
var inst_17142 = (0);
var state_17258__$1 = (function (){var statearr_17319 = state_17258;
(statearr_17319[(13)] = inst_17140);

(statearr_17319[(15)] = inst_17139);

(statearr_17319[(16)] = inst_17142);

(statearr_17319[(17)] = inst_17141);

return statearr_17319;
})();
var statearr_17320_17385 = state_17258__$1;
(statearr_17320_17385[(2)] = null);

(statearr_17320_17385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (14))){
var state_17258__$1 = state_17258;
var statearr_17321_17386 = state_17258__$1;
(statearr_17321_17386[(2)] = null);

(statearr_17321_17386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (45))){
var inst_17248 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17322_17387 = state_17258__$1;
(statearr_17322_17387[(2)] = inst_17248);

(statearr_17322_17387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (26))){
var inst_17190 = (state_17258[(29)]);
var inst_17244 = (state_17258[(2)]);
var inst_17245 = cljs.core.seq.call(null,inst_17190);
var state_17258__$1 = (function (){var statearr_17323 = state_17258;
(statearr_17323[(31)] = inst_17244);

return statearr_17323;
})();
if(inst_17245){
var statearr_17324_17388 = state_17258__$1;
(statearr_17324_17388[(1)] = (42));

} else {
var statearr_17325_17389 = state_17258__$1;
(statearr_17325_17389[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (16))){
var inst_17159 = (state_17258[(7)]);
var inst_17161 = cljs.core.chunked_seq_QMARK_.call(null,inst_17159);
var state_17258__$1 = state_17258;
if(inst_17161){
var statearr_17326_17390 = state_17258__$1;
(statearr_17326_17390[(1)] = (19));

} else {
var statearr_17327_17391 = state_17258__$1;
(statearr_17327_17391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (38))){
var inst_17237 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17328_17392 = state_17258__$1;
(statearr_17328_17392[(2)] = inst_17237);

(statearr_17328_17392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (30))){
var state_17258__$1 = state_17258;
var statearr_17329_17393 = state_17258__$1;
(statearr_17329_17393[(2)] = null);

(statearr_17329_17393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (10))){
var inst_17140 = (state_17258[(13)]);
var inst_17142 = (state_17258[(16)]);
var inst_17148 = cljs.core._nth.call(null,inst_17140,inst_17142);
var inst_17149 = cljs.core.nth.call(null,inst_17148,(0),null);
var inst_17150 = cljs.core.nth.call(null,inst_17148,(1),null);
var state_17258__$1 = (function (){var statearr_17330 = state_17258;
(statearr_17330[(26)] = inst_17149);

return statearr_17330;
})();
if(cljs.core.truth_(inst_17150)){
var statearr_17331_17394 = state_17258__$1;
(statearr_17331_17394[(1)] = (13));

} else {
var statearr_17332_17395 = state_17258__$1;
(statearr_17332_17395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (18))){
var inst_17183 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17333_17396 = state_17258__$1;
(statearr_17333_17396[(2)] = inst_17183);

(statearr_17333_17396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (42))){
var state_17258__$1 = state_17258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17258__$1,(45),dchan);
} else {
if((state_val_17259 === (37))){
var inst_17130 = (state_17258[(10)]);
var inst_17217 = (state_17258[(25)]);
var inst_17226 = (state_17258[(23)]);
var inst_17226__$1 = cljs.core.first.call(null,inst_17217);
var inst_17227 = cljs.core.async.put_BANG_.call(null,inst_17226__$1,inst_17130,done);
var state_17258__$1 = (function (){var statearr_17334 = state_17258;
(statearr_17334[(23)] = inst_17226__$1);

return statearr_17334;
})();
if(cljs.core.truth_(inst_17227)){
var statearr_17335_17397 = state_17258__$1;
(statearr_17335_17397[(1)] = (39));

} else {
var statearr_17336_17398 = state_17258__$1;
(statearr_17336_17398[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (8))){
var inst_17142 = (state_17258[(16)]);
var inst_17141 = (state_17258[(17)]);
var inst_17144 = (inst_17142 < inst_17141);
var inst_17145 = inst_17144;
var state_17258__$1 = state_17258;
if(cljs.core.truth_(inst_17145)){
var statearr_17337_17399 = state_17258__$1;
(statearr_17337_17399[(1)] = (10));

} else {
var statearr_17338_17400 = state_17258__$1;
(statearr_17338_17400[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___17346,cs,m,dchan,dctr,done))
;
return ((function (switch__9787__auto__,c__9849__auto___17346,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9788__auto__ = null;
var cljs$core$async$mult_$_state_machine__9788__auto____0 = (function (){
var statearr_17342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17342[(0)] = cljs$core$async$mult_$_state_machine__9788__auto__);

(statearr_17342[(1)] = (1));

return statearr_17342;
});
var cljs$core$async$mult_$_state_machine__9788__auto____1 = (function (state_17258){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_17258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e17343){if((e17343 instanceof Object)){
var ex__9791__auto__ = e17343;
var statearr_17344_17401 = state_17258;
(statearr_17344_17401[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17402 = state_17258;
state_17258 = G__17402;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9788__auto__ = function(state_17258){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9788__auto____1.call(this,state_17258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9788__auto____0;
cljs$core$async$mult_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9788__auto____1;
return cljs$core$async$mult_$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___17346,cs,m,dchan,dctr,done))
})();
var state__9851__auto__ = (function (){var statearr_17345 = f__9850__auto__.call(null);
(statearr_17345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___17346);

return statearr_17345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___17346,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__17404 = arguments.length;
switch (G__17404) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj17407 = {};
return obj17407;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4485__auto__ = m;
if(and__4485__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4485__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5133__auto__ = (((m == null))?null:m);
return (function (){var or__4497__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5537__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17412){
var map__17413 = p__17412;
var map__17413__$1 = ((cljs.core.seq_QMARK_.call(null,map__17413))?cljs.core.apply.call(null,cljs.core.hash_map,map__17413):map__17413);
var opts = map__17413__$1;
var statearr_17414_17417 = state;
(statearr_17414_17417[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__17413,map__17413__$1,opts){
return (function (val){
var statearr_17415_17418 = state;
(statearr_17415_17418[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17413,map__17413__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_17416_17419 = state;
(statearr_17416_17419[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17408){
var G__17409 = cljs.core.first.call(null,seq17408);
var seq17408__$1 = cljs.core.next.call(null,seq17408);
var G__17410 = cljs.core.first.call(null,seq17408__$1);
var seq17408__$2 = cljs.core.next.call(null,seq17408__$1);
var G__17411 = cljs.core.first.call(null,seq17408__$2);
var seq17408__$3 = cljs.core.next.call(null,seq17408__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17409,G__17410,G__17411,seq17408__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t17539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17539 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17540){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17540 = meta17540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17541,meta17540__$1){
var self__ = this;
var _17541__$1 = this;
return (new cljs.core.async.t17539(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17540__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17541){
var self__ = this;
var _17541__$1 = this;
return self__.meta17540;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17539.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17540","meta17540",-476106816,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17539.cljs$lang$type = true;

cljs.core.async.t17539.cljs$lang$ctorStr = "cljs.core.async/t17539";

cljs.core.async.t17539.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t17539");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17539 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t17539(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17540){
return (new cljs.core.async.t17539(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17540));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17539(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9849__auto___17658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___17658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___17658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17611){
var state_val_17612 = (state_17611[(1)]);
if((state_val_17612 === (7))){
var inst_17555 = (state_17611[(7)]);
var inst_17560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17555);
var state_17611__$1 = state_17611;
var statearr_17613_17659 = state_17611__$1;
(statearr_17613_17659[(2)] = inst_17560);

(statearr_17613_17659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (20))){
var inst_17570 = (state_17611[(8)]);
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17611__$1,(23),out,inst_17570);
} else {
if((state_val_17612 === (1))){
var inst_17545 = (state_17611[(9)]);
var inst_17545__$1 = calc_state.call(null);
var inst_17546 = cljs.core.seq_QMARK_.call(null,inst_17545__$1);
var state_17611__$1 = (function (){var statearr_17614 = state_17611;
(statearr_17614[(9)] = inst_17545__$1);

return statearr_17614;
})();
if(inst_17546){
var statearr_17615_17660 = state_17611__$1;
(statearr_17615_17660[(1)] = (2));

} else {
var statearr_17616_17661 = state_17611__$1;
(statearr_17616_17661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (24))){
var inst_17563 = (state_17611[(10)]);
var inst_17555 = inst_17563;
var state_17611__$1 = (function (){var statearr_17617 = state_17611;
(statearr_17617[(7)] = inst_17555);

return statearr_17617;
})();
var statearr_17618_17662 = state_17611__$1;
(statearr_17618_17662[(2)] = null);

(statearr_17618_17662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (4))){
var inst_17545 = (state_17611[(9)]);
var inst_17551 = (state_17611[(2)]);
var inst_17552 = cljs.core.get.call(null,inst_17551,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17553 = cljs.core.get.call(null,inst_17551,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17554 = cljs.core.get.call(null,inst_17551,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17555 = inst_17545;
var state_17611__$1 = (function (){var statearr_17619 = state_17611;
(statearr_17619[(11)] = inst_17554);

(statearr_17619[(12)] = inst_17552);

(statearr_17619[(7)] = inst_17555);

(statearr_17619[(13)] = inst_17553);

return statearr_17619;
})();
var statearr_17620_17663 = state_17611__$1;
(statearr_17620_17663[(2)] = null);

(statearr_17620_17663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (15))){
var state_17611__$1 = state_17611;
var statearr_17621_17664 = state_17611__$1;
(statearr_17621_17664[(2)] = null);

(statearr_17621_17664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (21))){
var inst_17563 = (state_17611[(10)]);
var inst_17555 = inst_17563;
var state_17611__$1 = (function (){var statearr_17622 = state_17611;
(statearr_17622[(7)] = inst_17555);

return statearr_17622;
})();
var statearr_17623_17665 = state_17611__$1;
(statearr_17623_17665[(2)] = null);

(statearr_17623_17665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (13))){
var inst_17607 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17624_17666 = state_17611__$1;
(statearr_17624_17666[(2)] = inst_17607);

(statearr_17624_17666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (22))){
var inst_17605 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17625_17667 = state_17611__$1;
(statearr_17625_17667[(2)] = inst_17605);

(statearr_17625_17667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (6))){
var inst_17609 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17611__$1,inst_17609);
} else {
if((state_val_17612 === (25))){
var state_17611__$1 = state_17611;
var statearr_17626_17668 = state_17611__$1;
(statearr_17626_17668[(2)] = null);

(statearr_17626_17668[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (17))){
var inst_17585 = (state_17611[(14)]);
var state_17611__$1 = state_17611;
var statearr_17627_17669 = state_17611__$1;
(statearr_17627_17669[(2)] = inst_17585);

(statearr_17627_17669[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (3))){
var inst_17545 = (state_17611[(9)]);
var state_17611__$1 = state_17611;
var statearr_17628_17670 = state_17611__$1;
(statearr_17628_17670[(2)] = inst_17545);

(statearr_17628_17670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (12))){
var inst_17571 = (state_17611[(15)]);
var inst_17564 = (state_17611[(16)]);
var inst_17585 = (state_17611[(14)]);
var inst_17585__$1 = inst_17564.call(null,inst_17571);
var state_17611__$1 = (function (){var statearr_17629 = state_17611;
(statearr_17629[(14)] = inst_17585__$1);

return statearr_17629;
})();
if(cljs.core.truth_(inst_17585__$1)){
var statearr_17630_17671 = state_17611__$1;
(statearr_17630_17671[(1)] = (17));

} else {
var statearr_17631_17672 = state_17611__$1;
(statearr_17631_17672[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (2))){
var inst_17545 = (state_17611[(9)]);
var inst_17548 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17545);
var state_17611__$1 = state_17611;
var statearr_17632_17673 = state_17611__$1;
(statearr_17632_17673[(2)] = inst_17548);

(statearr_17632_17673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (23))){
var inst_17596 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
if(cljs.core.truth_(inst_17596)){
var statearr_17633_17674 = state_17611__$1;
(statearr_17633_17674[(1)] = (24));

} else {
var statearr_17634_17675 = state_17611__$1;
(statearr_17634_17675[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (19))){
var inst_17593 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
if(cljs.core.truth_(inst_17593)){
var statearr_17635_17676 = state_17611__$1;
(statearr_17635_17676[(1)] = (20));

} else {
var statearr_17636_17677 = state_17611__$1;
(statearr_17636_17677[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (11))){
var inst_17570 = (state_17611[(8)]);
var inst_17576 = (inst_17570 == null);
var state_17611__$1 = state_17611;
if(cljs.core.truth_(inst_17576)){
var statearr_17637_17678 = state_17611__$1;
(statearr_17637_17678[(1)] = (14));

} else {
var statearr_17638_17679 = state_17611__$1;
(statearr_17638_17679[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (9))){
var inst_17563 = (state_17611[(10)]);
var inst_17563__$1 = (state_17611[(2)]);
var inst_17564 = cljs.core.get.call(null,inst_17563__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17565 = cljs.core.get.call(null,inst_17563__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17566 = cljs.core.get.call(null,inst_17563__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17611__$1 = (function (){var statearr_17639 = state_17611;
(statearr_17639[(10)] = inst_17563__$1);

(statearr_17639[(16)] = inst_17564);

(statearr_17639[(17)] = inst_17565);

return statearr_17639;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17611__$1,(10),inst_17566);
} else {
if((state_val_17612 === (5))){
var inst_17555 = (state_17611[(7)]);
var inst_17558 = cljs.core.seq_QMARK_.call(null,inst_17555);
var state_17611__$1 = state_17611;
if(inst_17558){
var statearr_17640_17680 = state_17611__$1;
(statearr_17640_17680[(1)] = (7));

} else {
var statearr_17641_17681 = state_17611__$1;
(statearr_17641_17681[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (14))){
var inst_17571 = (state_17611[(15)]);
var inst_17578 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17571);
var state_17611__$1 = state_17611;
var statearr_17642_17682 = state_17611__$1;
(statearr_17642_17682[(2)] = inst_17578);

(statearr_17642_17682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (26))){
var inst_17601 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17643_17683 = state_17611__$1;
(statearr_17643_17683[(2)] = inst_17601);

(statearr_17643_17683[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (16))){
var inst_17581 = (state_17611[(2)]);
var inst_17582 = calc_state.call(null);
var inst_17555 = inst_17582;
var state_17611__$1 = (function (){var statearr_17644 = state_17611;
(statearr_17644[(7)] = inst_17555);

(statearr_17644[(18)] = inst_17581);

return statearr_17644;
})();
var statearr_17645_17684 = state_17611__$1;
(statearr_17645_17684[(2)] = null);

(statearr_17645_17684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (10))){
var inst_17571 = (state_17611[(15)]);
var inst_17570 = (state_17611[(8)]);
var inst_17569 = (state_17611[(2)]);
var inst_17570__$1 = cljs.core.nth.call(null,inst_17569,(0),null);
var inst_17571__$1 = cljs.core.nth.call(null,inst_17569,(1),null);
var inst_17572 = (inst_17570__$1 == null);
var inst_17573 = cljs.core._EQ_.call(null,inst_17571__$1,change);
var inst_17574 = (inst_17572) || (inst_17573);
var state_17611__$1 = (function (){var statearr_17646 = state_17611;
(statearr_17646[(15)] = inst_17571__$1);

(statearr_17646[(8)] = inst_17570__$1);

return statearr_17646;
})();
if(cljs.core.truth_(inst_17574)){
var statearr_17647_17685 = state_17611__$1;
(statearr_17647_17685[(1)] = (11));

} else {
var statearr_17648_17686 = state_17611__$1;
(statearr_17648_17686[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (18))){
var inst_17571 = (state_17611[(15)]);
var inst_17564 = (state_17611[(16)]);
var inst_17565 = (state_17611[(17)]);
var inst_17588 = cljs.core.empty_QMARK_.call(null,inst_17564);
var inst_17589 = inst_17565.call(null,inst_17571);
var inst_17590 = cljs.core.not.call(null,inst_17589);
var inst_17591 = (inst_17588) && (inst_17590);
var state_17611__$1 = state_17611;
var statearr_17649_17687 = state_17611__$1;
(statearr_17649_17687[(2)] = inst_17591);

(statearr_17649_17687[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (8))){
var inst_17555 = (state_17611[(7)]);
var state_17611__$1 = state_17611;
var statearr_17650_17688 = state_17611__$1;
(statearr_17650_17688[(2)] = inst_17555);

(statearr_17650_17688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___17658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9787__auto__,c__9849__auto___17658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9788__auto__ = null;
var cljs$core$async$mix_$_state_machine__9788__auto____0 = (function (){
var statearr_17654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17654[(0)] = cljs$core$async$mix_$_state_machine__9788__auto__);

(statearr_17654[(1)] = (1));

return statearr_17654;
});
var cljs$core$async$mix_$_state_machine__9788__auto____1 = (function (state_17611){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_17611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e17655){if((e17655 instanceof Object)){
var ex__9791__auto__ = e17655;
var statearr_17656_17689 = state_17611;
(statearr_17656_17689[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17690 = state_17611;
state_17611 = G__17690;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9788__auto__ = function(state_17611){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9788__auto____1.call(this,state_17611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9788__auto____0;
cljs$core$async$mix_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9788__auto____1;
return cljs$core$async$mix_$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___17658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9851__auto__ = (function (){var statearr_17657 = f__9850__auto__.call(null);
(statearr_17657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___17658);

return statearr_17657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___17658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj17692 = {};
return obj17692;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4485__auto__ = p;
if(and__4485__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4485__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5133__auto__ = (((p == null))?null:p);
return (function (){var or__4497__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4485__auto__ = p;
if(and__4485__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4485__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5133__auto__ = (((p == null))?null:p);
return (function (){var or__4497__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__17694 = arguments.length;
switch (G__17694) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4485__auto__ = p;
if(and__4485__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4485__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5133__auto__ = (((p == null))?null:p);
return (function (){var or__4497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4485__auto__ = p;
if(and__4485__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4485__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5133__auto__ = (((p == null))?null:p);
return (function (){var or__4497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5133__auto__)]);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__17698 = arguments.length;
switch (G__17698) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4497__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4497__auto__,mults){
return (function (p1__17696_SHARP_){
if(cljs.core.truth_(p1__17696_SHARP_.call(null,topic))){
return p1__17696_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17696_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4497__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17699 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17699 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17700){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17700 = meta17700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17701,meta17700__$1){
var self__ = this;
var _17701__$1 = this;
return (new cljs.core.async.t17699(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17700__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17701){
var self__ = this;
var _17701__$1 = this;
return self__.meta17700;
});})(mults,ensure_mult))
;

cljs.core.async.t17699.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17699.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17699.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17699.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t17699.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17699.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17699.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17700","meta17700",1718129863,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t17699.cljs$lang$type = true;

cljs.core.async.t17699.cljs$lang$ctorStr = "cljs.core.async/t17699";

cljs.core.async.t17699.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t17699");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17699 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t17699(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17700){
return (new cljs.core.async.t17699(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17700));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17699(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9849__auto___17822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___17822,mults,ensure_mult,p){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___17822,mults,ensure_mult,p){
return (function (state_17773){
var state_val_17774 = (state_17773[(1)]);
if((state_val_17774 === (7))){
var inst_17769 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17775_17823 = state_17773__$1;
(statearr_17775_17823[(2)] = inst_17769);

(statearr_17775_17823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (20))){
var state_17773__$1 = state_17773;
var statearr_17776_17824 = state_17773__$1;
(statearr_17776_17824[(2)] = null);

(statearr_17776_17824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (1))){
var state_17773__$1 = state_17773;
var statearr_17777_17825 = state_17773__$1;
(statearr_17777_17825[(2)] = null);

(statearr_17777_17825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (24))){
var inst_17752 = (state_17773[(7)]);
var inst_17761 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17752);
var state_17773__$1 = state_17773;
var statearr_17778_17826 = state_17773__$1;
(statearr_17778_17826[(2)] = inst_17761);

(statearr_17778_17826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (4))){
var inst_17704 = (state_17773[(8)]);
var inst_17704__$1 = (state_17773[(2)]);
var inst_17705 = (inst_17704__$1 == null);
var state_17773__$1 = (function (){var statearr_17779 = state_17773;
(statearr_17779[(8)] = inst_17704__$1);

return statearr_17779;
})();
if(cljs.core.truth_(inst_17705)){
var statearr_17780_17827 = state_17773__$1;
(statearr_17780_17827[(1)] = (5));

} else {
var statearr_17781_17828 = state_17773__$1;
(statearr_17781_17828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (15))){
var inst_17746 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17782_17829 = state_17773__$1;
(statearr_17782_17829[(2)] = inst_17746);

(statearr_17782_17829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (21))){
var inst_17766 = (state_17773[(2)]);
var state_17773__$1 = (function (){var statearr_17783 = state_17773;
(statearr_17783[(9)] = inst_17766);

return statearr_17783;
})();
var statearr_17784_17830 = state_17773__$1;
(statearr_17784_17830[(2)] = null);

(statearr_17784_17830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (13))){
var inst_17728 = (state_17773[(10)]);
var inst_17730 = cljs.core.chunked_seq_QMARK_.call(null,inst_17728);
var state_17773__$1 = state_17773;
if(inst_17730){
var statearr_17785_17831 = state_17773__$1;
(statearr_17785_17831[(1)] = (16));

} else {
var statearr_17786_17832 = state_17773__$1;
(statearr_17786_17832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (22))){
var inst_17758 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17758)){
var statearr_17787_17833 = state_17773__$1;
(statearr_17787_17833[(1)] = (23));

} else {
var statearr_17788_17834 = state_17773__$1;
(statearr_17788_17834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (6))){
var inst_17752 = (state_17773[(7)]);
var inst_17704 = (state_17773[(8)]);
var inst_17754 = (state_17773[(11)]);
var inst_17752__$1 = topic_fn.call(null,inst_17704);
var inst_17753 = cljs.core.deref.call(null,mults);
var inst_17754__$1 = cljs.core.get.call(null,inst_17753,inst_17752__$1);
var state_17773__$1 = (function (){var statearr_17789 = state_17773;
(statearr_17789[(7)] = inst_17752__$1);

(statearr_17789[(11)] = inst_17754__$1);

return statearr_17789;
})();
if(cljs.core.truth_(inst_17754__$1)){
var statearr_17790_17835 = state_17773__$1;
(statearr_17790_17835[(1)] = (19));

} else {
var statearr_17791_17836 = state_17773__$1;
(statearr_17791_17836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (25))){
var inst_17763 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17792_17837 = state_17773__$1;
(statearr_17792_17837[(2)] = inst_17763);

(statearr_17792_17837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (17))){
var inst_17728 = (state_17773[(10)]);
var inst_17737 = cljs.core.first.call(null,inst_17728);
var inst_17738 = cljs.core.async.muxch_STAR_.call(null,inst_17737);
var inst_17739 = cljs.core.async.close_BANG_.call(null,inst_17738);
var inst_17740 = cljs.core.next.call(null,inst_17728);
var inst_17714 = inst_17740;
var inst_17715 = null;
var inst_17716 = (0);
var inst_17717 = (0);
var state_17773__$1 = (function (){var statearr_17793 = state_17773;
(statearr_17793[(12)] = inst_17739);

(statearr_17793[(13)] = inst_17717);

(statearr_17793[(14)] = inst_17716);

(statearr_17793[(15)] = inst_17714);

(statearr_17793[(16)] = inst_17715);

return statearr_17793;
})();
var statearr_17794_17838 = state_17773__$1;
(statearr_17794_17838[(2)] = null);

(statearr_17794_17838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (3))){
var inst_17771 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17773__$1,inst_17771);
} else {
if((state_val_17774 === (12))){
var inst_17748 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17795_17839 = state_17773__$1;
(statearr_17795_17839[(2)] = inst_17748);

(statearr_17795_17839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (2))){
var state_17773__$1 = state_17773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17773__$1,(4),ch);
} else {
if((state_val_17774 === (23))){
var state_17773__$1 = state_17773;
var statearr_17796_17840 = state_17773__$1;
(statearr_17796_17840[(2)] = null);

(statearr_17796_17840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (19))){
var inst_17704 = (state_17773[(8)]);
var inst_17754 = (state_17773[(11)]);
var inst_17756 = cljs.core.async.muxch_STAR_.call(null,inst_17754);
var state_17773__$1 = state_17773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17773__$1,(22),inst_17756,inst_17704);
} else {
if((state_val_17774 === (11))){
var inst_17728 = (state_17773[(10)]);
var inst_17714 = (state_17773[(15)]);
var inst_17728__$1 = cljs.core.seq.call(null,inst_17714);
var state_17773__$1 = (function (){var statearr_17797 = state_17773;
(statearr_17797[(10)] = inst_17728__$1);

return statearr_17797;
})();
if(inst_17728__$1){
var statearr_17798_17841 = state_17773__$1;
(statearr_17798_17841[(1)] = (13));

} else {
var statearr_17799_17842 = state_17773__$1;
(statearr_17799_17842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (9))){
var inst_17750 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17800_17843 = state_17773__$1;
(statearr_17800_17843[(2)] = inst_17750);

(statearr_17800_17843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (5))){
var inst_17711 = cljs.core.deref.call(null,mults);
var inst_17712 = cljs.core.vals.call(null,inst_17711);
var inst_17713 = cljs.core.seq.call(null,inst_17712);
var inst_17714 = inst_17713;
var inst_17715 = null;
var inst_17716 = (0);
var inst_17717 = (0);
var state_17773__$1 = (function (){var statearr_17801 = state_17773;
(statearr_17801[(13)] = inst_17717);

(statearr_17801[(14)] = inst_17716);

(statearr_17801[(15)] = inst_17714);

(statearr_17801[(16)] = inst_17715);

return statearr_17801;
})();
var statearr_17802_17844 = state_17773__$1;
(statearr_17802_17844[(2)] = null);

(statearr_17802_17844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (14))){
var state_17773__$1 = state_17773;
var statearr_17806_17845 = state_17773__$1;
(statearr_17806_17845[(2)] = null);

(statearr_17806_17845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (16))){
var inst_17728 = (state_17773[(10)]);
var inst_17732 = cljs.core.chunk_first.call(null,inst_17728);
var inst_17733 = cljs.core.chunk_rest.call(null,inst_17728);
var inst_17734 = cljs.core.count.call(null,inst_17732);
var inst_17714 = inst_17733;
var inst_17715 = inst_17732;
var inst_17716 = inst_17734;
var inst_17717 = (0);
var state_17773__$1 = (function (){var statearr_17807 = state_17773;
(statearr_17807[(13)] = inst_17717);

(statearr_17807[(14)] = inst_17716);

(statearr_17807[(15)] = inst_17714);

(statearr_17807[(16)] = inst_17715);

return statearr_17807;
})();
var statearr_17808_17846 = state_17773__$1;
(statearr_17808_17846[(2)] = null);

(statearr_17808_17846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (10))){
var inst_17717 = (state_17773[(13)]);
var inst_17716 = (state_17773[(14)]);
var inst_17714 = (state_17773[(15)]);
var inst_17715 = (state_17773[(16)]);
var inst_17722 = cljs.core._nth.call(null,inst_17715,inst_17717);
var inst_17723 = cljs.core.async.muxch_STAR_.call(null,inst_17722);
var inst_17724 = cljs.core.async.close_BANG_.call(null,inst_17723);
var inst_17725 = (inst_17717 + (1));
var tmp17803 = inst_17716;
var tmp17804 = inst_17714;
var tmp17805 = inst_17715;
var inst_17714__$1 = tmp17804;
var inst_17715__$1 = tmp17805;
var inst_17716__$1 = tmp17803;
var inst_17717__$1 = inst_17725;
var state_17773__$1 = (function (){var statearr_17809 = state_17773;
(statearr_17809[(13)] = inst_17717__$1);

(statearr_17809[(14)] = inst_17716__$1);

(statearr_17809[(15)] = inst_17714__$1);

(statearr_17809[(17)] = inst_17724);

(statearr_17809[(16)] = inst_17715__$1);

return statearr_17809;
})();
var statearr_17810_17847 = state_17773__$1;
(statearr_17810_17847[(2)] = null);

(statearr_17810_17847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (18))){
var inst_17743 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17811_17848 = state_17773__$1;
(statearr_17811_17848[(2)] = inst_17743);

(statearr_17811_17848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (8))){
var inst_17717 = (state_17773[(13)]);
var inst_17716 = (state_17773[(14)]);
var inst_17719 = (inst_17717 < inst_17716);
var inst_17720 = inst_17719;
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17720)){
var statearr_17812_17849 = state_17773__$1;
(statearr_17812_17849[(1)] = (10));

} else {
var statearr_17813_17850 = state_17773__$1;
(statearr_17813_17850[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___17822,mults,ensure_mult,p))
;
return ((function (switch__9787__auto__,c__9849__auto___17822,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_17817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17817[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_17817[(1)] = (1));

return statearr_17817;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_17773){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_17773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e17818){if((e17818 instanceof Object)){
var ex__9791__auto__ = e17818;
var statearr_17819_17851 = state_17773;
(statearr_17819_17851[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17852 = state_17773;
state_17773 = G__17852;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_17773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_17773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___17822,mults,ensure_mult,p))
})();
var state__9851__auto__ = (function (){var statearr_17820 = f__9850__auto__.call(null);
(statearr_17820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___17822);

return statearr_17820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___17822,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__17854 = arguments.length;
switch (G__17854) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__17857 = arguments.length;
switch (G__17857) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__17860 = arguments.length;
switch (G__17860) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9849__auto___17930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17899){
var state_val_17900 = (state_17899[(1)]);
if((state_val_17900 === (7))){
var state_17899__$1 = state_17899;
var statearr_17901_17931 = state_17899__$1;
(statearr_17901_17931[(2)] = null);

(statearr_17901_17931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (1))){
var state_17899__$1 = state_17899;
var statearr_17902_17932 = state_17899__$1;
(statearr_17902_17932[(2)] = null);

(statearr_17902_17932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (4))){
var inst_17863 = (state_17899[(7)]);
var inst_17865 = (inst_17863 < cnt);
var state_17899__$1 = state_17899;
if(cljs.core.truth_(inst_17865)){
var statearr_17903_17933 = state_17899__$1;
(statearr_17903_17933[(1)] = (6));

} else {
var statearr_17904_17934 = state_17899__$1;
(statearr_17904_17934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (15))){
var inst_17895 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17905_17935 = state_17899__$1;
(statearr_17905_17935[(2)] = inst_17895);

(statearr_17905_17935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (13))){
var inst_17888 = cljs.core.async.close_BANG_.call(null,out);
var state_17899__$1 = state_17899;
var statearr_17906_17936 = state_17899__$1;
(statearr_17906_17936[(2)] = inst_17888);

(statearr_17906_17936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (6))){
var state_17899__$1 = state_17899;
var statearr_17907_17937 = state_17899__$1;
(statearr_17907_17937[(2)] = null);

(statearr_17907_17937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (3))){
var inst_17897 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17899__$1,inst_17897);
} else {
if((state_val_17900 === (12))){
var inst_17885 = (state_17899[(8)]);
var inst_17885__$1 = (state_17899[(2)]);
var inst_17886 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17885__$1);
var state_17899__$1 = (function (){var statearr_17908 = state_17899;
(statearr_17908[(8)] = inst_17885__$1);

return statearr_17908;
})();
if(cljs.core.truth_(inst_17886)){
var statearr_17909_17938 = state_17899__$1;
(statearr_17909_17938[(1)] = (13));

} else {
var statearr_17910_17939 = state_17899__$1;
(statearr_17910_17939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (2))){
var inst_17862 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17863 = (0);
var state_17899__$1 = (function (){var statearr_17911 = state_17899;
(statearr_17911[(9)] = inst_17862);

(statearr_17911[(7)] = inst_17863);

return statearr_17911;
})();
var statearr_17912_17940 = state_17899__$1;
(statearr_17912_17940[(2)] = null);

(statearr_17912_17940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (11))){
var inst_17863 = (state_17899[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17899,(10),Object,null,(9));
var inst_17872 = chs__$1.call(null,inst_17863);
var inst_17873 = done.call(null,inst_17863);
var inst_17874 = cljs.core.async.take_BANG_.call(null,inst_17872,inst_17873);
var state_17899__$1 = state_17899;
var statearr_17913_17941 = state_17899__$1;
(statearr_17913_17941[(2)] = inst_17874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (9))){
var inst_17863 = (state_17899[(7)]);
var inst_17876 = (state_17899[(2)]);
var inst_17877 = (inst_17863 + (1));
var inst_17863__$1 = inst_17877;
var state_17899__$1 = (function (){var statearr_17914 = state_17899;
(statearr_17914[(10)] = inst_17876);

(statearr_17914[(7)] = inst_17863__$1);

return statearr_17914;
})();
var statearr_17915_17942 = state_17899__$1;
(statearr_17915_17942[(2)] = null);

(statearr_17915_17942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (5))){
var inst_17883 = (state_17899[(2)]);
var state_17899__$1 = (function (){var statearr_17916 = state_17899;
(statearr_17916[(11)] = inst_17883);

return statearr_17916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17899__$1,(12),dchan);
} else {
if((state_val_17900 === (14))){
var inst_17885 = (state_17899[(8)]);
var inst_17890 = cljs.core.apply.call(null,f,inst_17885);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17899__$1,(16),out,inst_17890);
} else {
if((state_val_17900 === (16))){
var inst_17892 = (state_17899[(2)]);
var state_17899__$1 = (function (){var statearr_17917 = state_17899;
(statearr_17917[(12)] = inst_17892);

return statearr_17917;
})();
var statearr_17918_17943 = state_17899__$1;
(statearr_17918_17943[(2)] = null);

(statearr_17918_17943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (10))){
var inst_17867 = (state_17899[(2)]);
var inst_17868 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17899__$1 = (function (){var statearr_17919 = state_17899;
(statearr_17919[(13)] = inst_17867);

return statearr_17919;
})();
var statearr_17920_17944 = state_17899__$1;
(statearr_17920_17944[(2)] = inst_17868);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (8))){
var inst_17881 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17921_17945 = state_17899__$1;
(statearr_17921_17945[(2)] = inst_17881);

(statearr_17921_17945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9787__auto__,c__9849__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17925[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_17899){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_17899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e17926){if((e17926 instanceof Object)){
var ex__9791__auto__ = e17926;
var statearr_17927_17946 = state_17899;
(statearr_17927_17946[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17947 = state_17899;
state_17899 = G__17947;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_17899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_17899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9851__auto__ = (function (){var statearr_17928 = f__9850__auto__.call(null);
(statearr_17928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___17930);

return statearr_17928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__17950 = arguments.length;
switch (G__17950) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9849__auto___18005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___18005,out){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___18005,out){
return (function (state_17980){
var state_val_17981 = (state_17980[(1)]);
if((state_val_17981 === (7))){
var inst_17959 = (state_17980[(7)]);
var inst_17960 = (state_17980[(8)]);
var inst_17959__$1 = (state_17980[(2)]);
var inst_17960__$1 = cljs.core.nth.call(null,inst_17959__$1,(0),null);
var inst_17961 = cljs.core.nth.call(null,inst_17959__$1,(1),null);
var inst_17962 = (inst_17960__$1 == null);
var state_17980__$1 = (function (){var statearr_17982 = state_17980;
(statearr_17982[(7)] = inst_17959__$1);

(statearr_17982[(9)] = inst_17961);

(statearr_17982[(8)] = inst_17960__$1);

return statearr_17982;
})();
if(cljs.core.truth_(inst_17962)){
var statearr_17983_18006 = state_17980__$1;
(statearr_17983_18006[(1)] = (8));

} else {
var statearr_17984_18007 = state_17980__$1;
(statearr_17984_18007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (1))){
var inst_17951 = cljs.core.vec.call(null,chs);
var inst_17952 = inst_17951;
var state_17980__$1 = (function (){var statearr_17985 = state_17980;
(statearr_17985[(10)] = inst_17952);

return statearr_17985;
})();
var statearr_17986_18008 = state_17980__$1;
(statearr_17986_18008[(2)] = null);

(statearr_17986_18008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (4))){
var inst_17952 = (state_17980[(10)]);
var state_17980__$1 = state_17980;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17980__$1,(7),inst_17952);
} else {
if((state_val_17981 === (6))){
var inst_17976 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
var statearr_17987_18009 = state_17980__$1;
(statearr_17987_18009[(2)] = inst_17976);

(statearr_17987_18009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (3))){
var inst_17978 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17980__$1,inst_17978);
} else {
if((state_val_17981 === (2))){
var inst_17952 = (state_17980[(10)]);
var inst_17954 = cljs.core.count.call(null,inst_17952);
var inst_17955 = (inst_17954 > (0));
var state_17980__$1 = state_17980;
if(cljs.core.truth_(inst_17955)){
var statearr_17989_18010 = state_17980__$1;
(statearr_17989_18010[(1)] = (4));

} else {
var statearr_17990_18011 = state_17980__$1;
(statearr_17990_18011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (11))){
var inst_17952 = (state_17980[(10)]);
var inst_17969 = (state_17980[(2)]);
var tmp17988 = inst_17952;
var inst_17952__$1 = tmp17988;
var state_17980__$1 = (function (){var statearr_17991 = state_17980;
(statearr_17991[(11)] = inst_17969);

(statearr_17991[(10)] = inst_17952__$1);

return statearr_17991;
})();
var statearr_17992_18012 = state_17980__$1;
(statearr_17992_18012[(2)] = null);

(statearr_17992_18012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (9))){
var inst_17960 = (state_17980[(8)]);
var state_17980__$1 = state_17980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17980__$1,(11),out,inst_17960);
} else {
if((state_val_17981 === (5))){
var inst_17974 = cljs.core.async.close_BANG_.call(null,out);
var state_17980__$1 = state_17980;
var statearr_17993_18013 = state_17980__$1;
(statearr_17993_18013[(2)] = inst_17974);

(statearr_17993_18013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (10))){
var inst_17972 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
var statearr_17994_18014 = state_17980__$1;
(statearr_17994_18014[(2)] = inst_17972);

(statearr_17994_18014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (8))){
var inst_17959 = (state_17980[(7)]);
var inst_17961 = (state_17980[(9)]);
var inst_17960 = (state_17980[(8)]);
var inst_17952 = (state_17980[(10)]);
var inst_17964 = (function (){var cs = inst_17952;
var vec__17957 = inst_17959;
var v = inst_17960;
var c = inst_17961;
return ((function (cs,vec__17957,v,c,inst_17959,inst_17961,inst_17960,inst_17952,state_val_17981,c__9849__auto___18005,out){
return (function (p1__17948_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17948_SHARP_);
});
;})(cs,vec__17957,v,c,inst_17959,inst_17961,inst_17960,inst_17952,state_val_17981,c__9849__auto___18005,out))
})();
var inst_17965 = cljs.core.filterv.call(null,inst_17964,inst_17952);
var inst_17952__$1 = inst_17965;
var state_17980__$1 = (function (){var statearr_17995 = state_17980;
(statearr_17995[(10)] = inst_17952__$1);

return statearr_17995;
})();
var statearr_17996_18015 = state_17980__$1;
(statearr_17996_18015[(2)] = null);

(statearr_17996_18015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___18005,out))
;
return ((function (switch__9787__auto__,c__9849__auto___18005,out){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_18000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18000[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_18000[(1)] = (1));

return statearr_18000;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_17980){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_17980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e18001){if((e18001 instanceof Object)){
var ex__9791__auto__ = e18001;
var statearr_18002_18016 = state_17980;
(statearr_18002_18016[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18017 = state_17980;
state_17980 = G__18017;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_17980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_17980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___18005,out))
})();
var state__9851__auto__ = (function (){var statearr_18003 = f__9850__auto__.call(null);
(statearr_18003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___18005);

return statearr_18003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___18005,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__18019 = arguments.length;
switch (G__18019) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9849__auto___18067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___18067,out){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___18067,out){
return (function (state_18043){
var state_val_18044 = (state_18043[(1)]);
if((state_val_18044 === (7))){
var inst_18025 = (state_18043[(7)]);
var inst_18025__$1 = (state_18043[(2)]);
var inst_18026 = (inst_18025__$1 == null);
var inst_18027 = cljs.core.not.call(null,inst_18026);
var state_18043__$1 = (function (){var statearr_18045 = state_18043;
(statearr_18045[(7)] = inst_18025__$1);

return statearr_18045;
})();
if(inst_18027){
var statearr_18046_18068 = state_18043__$1;
(statearr_18046_18068[(1)] = (8));

} else {
var statearr_18047_18069 = state_18043__$1;
(statearr_18047_18069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (1))){
var inst_18020 = (0);
var state_18043__$1 = (function (){var statearr_18048 = state_18043;
(statearr_18048[(8)] = inst_18020);

return statearr_18048;
})();
var statearr_18049_18070 = state_18043__$1;
(statearr_18049_18070[(2)] = null);

(statearr_18049_18070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (4))){
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18043__$1,(7),ch);
} else {
if((state_val_18044 === (6))){
var inst_18038 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18050_18071 = state_18043__$1;
(statearr_18050_18071[(2)] = inst_18038);

(statearr_18050_18071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (3))){
var inst_18040 = (state_18043[(2)]);
var inst_18041 = cljs.core.async.close_BANG_.call(null,out);
var state_18043__$1 = (function (){var statearr_18051 = state_18043;
(statearr_18051[(9)] = inst_18040);

return statearr_18051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18043__$1,inst_18041);
} else {
if((state_val_18044 === (2))){
var inst_18020 = (state_18043[(8)]);
var inst_18022 = (inst_18020 < n);
var state_18043__$1 = state_18043;
if(cljs.core.truth_(inst_18022)){
var statearr_18052_18072 = state_18043__$1;
(statearr_18052_18072[(1)] = (4));

} else {
var statearr_18053_18073 = state_18043__$1;
(statearr_18053_18073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (11))){
var inst_18020 = (state_18043[(8)]);
var inst_18030 = (state_18043[(2)]);
var inst_18031 = (inst_18020 + (1));
var inst_18020__$1 = inst_18031;
var state_18043__$1 = (function (){var statearr_18054 = state_18043;
(statearr_18054[(10)] = inst_18030);

(statearr_18054[(8)] = inst_18020__$1);

return statearr_18054;
})();
var statearr_18055_18074 = state_18043__$1;
(statearr_18055_18074[(2)] = null);

(statearr_18055_18074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (9))){
var state_18043__$1 = state_18043;
var statearr_18056_18075 = state_18043__$1;
(statearr_18056_18075[(2)] = null);

(statearr_18056_18075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (5))){
var state_18043__$1 = state_18043;
var statearr_18057_18076 = state_18043__$1;
(statearr_18057_18076[(2)] = null);

(statearr_18057_18076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (10))){
var inst_18035 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18058_18077 = state_18043__$1;
(statearr_18058_18077[(2)] = inst_18035);

(statearr_18058_18077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (8))){
var inst_18025 = (state_18043[(7)]);
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18043__$1,(11),out,inst_18025);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___18067,out))
;
return ((function (switch__9787__auto__,c__9849__auto___18067,out){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_18062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18062[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_18062[(1)] = (1));

return statearr_18062;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_18043){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_18043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e18063){if((e18063 instanceof Object)){
var ex__9791__auto__ = e18063;
var statearr_18064_18078 = state_18043;
(statearr_18064_18078[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18079 = state_18043;
state_18043 = G__18079;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_18043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_18043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___18067,out))
})();
var state__9851__auto__ = (function (){var statearr_18065 = f__9850__auto__.call(null);
(statearr_18065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___18067);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___18067,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t18087 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18087 = (function (map_LT_,f,ch,meta18088){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18088 = meta18088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18089,meta18088__$1){
var self__ = this;
var _18089__$1 = this;
return (new cljs.core.async.t18087(self__.map_LT_,self__.f,self__.ch,meta18088__$1));
});

cljs.core.async.t18087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18089){
var self__ = this;
var _18089__$1 = this;
return self__.meta18088;
});

cljs.core.async.t18087.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18087.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18090 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18090 = (function (map_LT_,f,ch,meta18088,_,fn1,meta18091){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18088 = meta18088;
this._ = _;
this.fn1 = fn1;
this.meta18091 = meta18091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18092,meta18091__$1){
var self__ = this;
var _18092__$1 = this;
return (new cljs.core.async.t18090(self__.map_LT_,self__.f,self__.ch,self__.meta18088,self__._,self__.fn1,meta18091__$1));
});})(___$1))
;

cljs.core.async.t18090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18092){
var self__ = this;
var _18092__$1 = this;
return self__.meta18091;
});})(___$1))
;

cljs.core.async.t18090.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18080_SHARP_){
return f1.call(null,(((p1__18080_SHARP_ == null))?null:self__.f.call(null,p1__18080_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18090.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18088","meta18088",1331982287,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t18087","cljs.core.async/t18087",75811994,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18091","meta18091",-544439464,null)], null);
});})(___$1))
;

cljs.core.async.t18090.cljs$lang$type = true;

cljs.core.async.t18090.cljs$lang$ctorStr = "cljs.core.async/t18090";

cljs.core.async.t18090.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t18090");
});})(___$1))
;

cljs.core.async.__GT_t18090 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t18090(map_LT___$1,f__$1,ch__$1,meta18088__$1,___$2,fn1__$1,meta18091){
return (new cljs.core.async.t18090(map_LT___$1,f__$1,ch__$1,meta18088__$1,___$2,fn1__$1,meta18091));
});})(___$1))
;

}

return (new cljs.core.async.t18090(self__.map_LT_,self__.f,self__.ch,self__.meta18088,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4485__auto__ = ret;
if(cljs.core.truth_(and__4485__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4485__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18088","meta18088",1331982287,null)], null);
});

cljs.core.async.t18087.cljs$lang$type = true;

cljs.core.async.t18087.cljs$lang$ctorStr = "cljs.core.async/t18087";

cljs.core.async.t18087.cljs$lang$ctorPrWriter = (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t18087");
});

cljs.core.async.__GT_t18087 = (function cljs$core$async$map_LT__$___GT_t18087(map_LT___$1,f__$1,ch__$1,meta18088){
return (new cljs.core.async.t18087(map_LT___$1,f__$1,ch__$1,meta18088));
});

}

return (new cljs.core.async.t18087(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t18096 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18096 = (function (map_GT_,f,ch,meta18097){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18097 = meta18097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18098,meta18097__$1){
var self__ = this;
var _18098__$1 = this;
return (new cljs.core.async.t18096(self__.map_GT_,self__.f,self__.ch,meta18097__$1));
});

cljs.core.async.t18096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18098){
var self__ = this;
var _18098__$1 = this;
return self__.meta18097;
});

cljs.core.async.t18096.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18097","meta18097",989950676,null)], null);
});

cljs.core.async.t18096.cljs$lang$type = true;

cljs.core.async.t18096.cljs$lang$ctorStr = "cljs.core.async/t18096";

cljs.core.async.t18096.cljs$lang$ctorPrWriter = (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t18096");
});

cljs.core.async.__GT_t18096 = (function cljs$core$async$map_GT__$___GT_t18096(map_GT___$1,f__$1,ch__$1,meta18097){
return (new cljs.core.async.t18096(map_GT___$1,f__$1,ch__$1,meta18097));
});

}

return (new cljs.core.async.t18096(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t18102 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18102 = (function (filter_GT_,p,ch,meta18103){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18103 = meta18103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18104,meta18103__$1){
var self__ = this;
var _18104__$1 = this;
return (new cljs.core.async.t18102(self__.filter_GT_,self__.p,self__.ch,meta18103__$1));
});

cljs.core.async.t18102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18104){
var self__ = this;
var _18104__$1 = this;
return self__.meta18103;
});

cljs.core.async.t18102.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18102.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18103","meta18103",-1289960301,null)], null);
});

cljs.core.async.t18102.cljs$lang$type = true;

cljs.core.async.t18102.cljs$lang$ctorStr = "cljs.core.async/t18102";

cljs.core.async.t18102.cljs$lang$ctorPrWriter = (function (this__5076__auto__,writer__5077__auto__,opt__5078__auto__){
return cljs.core._write.call(null,writer__5077__auto__,"cljs.core.async/t18102");
});

cljs.core.async.__GT_t18102 = (function cljs$core$async$filter_GT__$___GT_t18102(filter_GT___$1,p__$1,ch__$1,meta18103){
return (new cljs.core.async.t18102(filter_GT___$1,p__$1,ch__$1,meta18103));
});

}

return (new cljs.core.async.t18102(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__18106 = arguments.length;
switch (G__18106) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9849__auto___18149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___18149,out){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___18149,out){
return (function (state_18127){
var state_val_18128 = (state_18127[(1)]);
if((state_val_18128 === (7))){
var inst_18123 = (state_18127[(2)]);
var state_18127__$1 = state_18127;
var statearr_18129_18150 = state_18127__$1;
(statearr_18129_18150[(2)] = inst_18123);

(statearr_18129_18150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (1))){
var state_18127__$1 = state_18127;
var statearr_18130_18151 = state_18127__$1;
(statearr_18130_18151[(2)] = null);

(statearr_18130_18151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (4))){
var inst_18109 = (state_18127[(7)]);
var inst_18109__$1 = (state_18127[(2)]);
var inst_18110 = (inst_18109__$1 == null);
var state_18127__$1 = (function (){var statearr_18131 = state_18127;
(statearr_18131[(7)] = inst_18109__$1);

return statearr_18131;
})();
if(cljs.core.truth_(inst_18110)){
var statearr_18132_18152 = state_18127__$1;
(statearr_18132_18152[(1)] = (5));

} else {
var statearr_18133_18153 = state_18127__$1;
(statearr_18133_18153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (6))){
var inst_18109 = (state_18127[(7)]);
var inst_18114 = p.call(null,inst_18109);
var state_18127__$1 = state_18127;
if(cljs.core.truth_(inst_18114)){
var statearr_18134_18154 = state_18127__$1;
(statearr_18134_18154[(1)] = (8));

} else {
var statearr_18135_18155 = state_18127__$1;
(statearr_18135_18155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (3))){
var inst_18125 = (state_18127[(2)]);
var state_18127__$1 = state_18127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18127__$1,inst_18125);
} else {
if((state_val_18128 === (2))){
var state_18127__$1 = state_18127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18127__$1,(4),ch);
} else {
if((state_val_18128 === (11))){
var inst_18117 = (state_18127[(2)]);
var state_18127__$1 = state_18127;
var statearr_18136_18156 = state_18127__$1;
(statearr_18136_18156[(2)] = inst_18117);

(statearr_18136_18156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (9))){
var state_18127__$1 = state_18127;
var statearr_18137_18157 = state_18127__$1;
(statearr_18137_18157[(2)] = null);

(statearr_18137_18157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (5))){
var inst_18112 = cljs.core.async.close_BANG_.call(null,out);
var state_18127__$1 = state_18127;
var statearr_18138_18158 = state_18127__$1;
(statearr_18138_18158[(2)] = inst_18112);

(statearr_18138_18158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (10))){
var inst_18120 = (state_18127[(2)]);
var state_18127__$1 = (function (){var statearr_18139 = state_18127;
(statearr_18139[(8)] = inst_18120);

return statearr_18139;
})();
var statearr_18140_18159 = state_18127__$1;
(statearr_18140_18159[(2)] = null);

(statearr_18140_18159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (8))){
var inst_18109 = (state_18127[(7)]);
var state_18127__$1 = state_18127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18127__$1,(11),out,inst_18109);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___18149,out))
;
return ((function (switch__9787__auto__,c__9849__auto___18149,out){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_18144 = [null,null,null,null,null,null,null,null,null];
(statearr_18144[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_18144[(1)] = (1));

return statearr_18144;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_18127){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_18127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e18145){if((e18145 instanceof Object)){
var ex__9791__auto__ = e18145;
var statearr_18146_18160 = state_18127;
(statearr_18146_18160[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18161 = state_18127;
state_18127 = G__18161;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_18127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_18127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___18149,out))
})();
var state__9851__auto__ = (function (){var statearr_18147 = f__9850__auto__.call(null);
(statearr_18147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___18149);

return statearr_18147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___18149,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__18163 = arguments.length;
switch (G__18163) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto__){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto__){
return (function (state_18330){
var state_val_18331 = (state_18330[(1)]);
if((state_val_18331 === (7))){
var inst_18326 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18332_18373 = state_18330__$1;
(statearr_18332_18373[(2)] = inst_18326);

(statearr_18332_18373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (20))){
var inst_18296 = (state_18330[(7)]);
var inst_18307 = (state_18330[(2)]);
var inst_18308 = cljs.core.next.call(null,inst_18296);
var inst_18282 = inst_18308;
var inst_18283 = null;
var inst_18284 = (0);
var inst_18285 = (0);
var state_18330__$1 = (function (){var statearr_18333 = state_18330;
(statearr_18333[(8)] = inst_18283);

(statearr_18333[(9)] = inst_18285);

(statearr_18333[(10)] = inst_18284);

(statearr_18333[(11)] = inst_18282);

(statearr_18333[(12)] = inst_18307);

return statearr_18333;
})();
var statearr_18334_18374 = state_18330__$1;
(statearr_18334_18374[(2)] = null);

(statearr_18334_18374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (1))){
var state_18330__$1 = state_18330;
var statearr_18335_18375 = state_18330__$1;
(statearr_18335_18375[(2)] = null);

(statearr_18335_18375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (4))){
var inst_18271 = (state_18330[(13)]);
var inst_18271__$1 = (state_18330[(2)]);
var inst_18272 = (inst_18271__$1 == null);
var state_18330__$1 = (function (){var statearr_18336 = state_18330;
(statearr_18336[(13)] = inst_18271__$1);

return statearr_18336;
})();
if(cljs.core.truth_(inst_18272)){
var statearr_18337_18376 = state_18330__$1;
(statearr_18337_18376[(1)] = (5));

} else {
var statearr_18338_18377 = state_18330__$1;
(statearr_18338_18377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (15))){
var state_18330__$1 = state_18330;
var statearr_18342_18378 = state_18330__$1;
(statearr_18342_18378[(2)] = null);

(statearr_18342_18378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (21))){
var state_18330__$1 = state_18330;
var statearr_18343_18379 = state_18330__$1;
(statearr_18343_18379[(2)] = null);

(statearr_18343_18379[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (13))){
var inst_18283 = (state_18330[(8)]);
var inst_18285 = (state_18330[(9)]);
var inst_18284 = (state_18330[(10)]);
var inst_18282 = (state_18330[(11)]);
var inst_18292 = (state_18330[(2)]);
var inst_18293 = (inst_18285 + (1));
var tmp18339 = inst_18283;
var tmp18340 = inst_18284;
var tmp18341 = inst_18282;
var inst_18282__$1 = tmp18341;
var inst_18283__$1 = tmp18339;
var inst_18284__$1 = tmp18340;
var inst_18285__$1 = inst_18293;
var state_18330__$1 = (function (){var statearr_18344 = state_18330;
(statearr_18344[(8)] = inst_18283__$1);

(statearr_18344[(14)] = inst_18292);

(statearr_18344[(9)] = inst_18285__$1);

(statearr_18344[(10)] = inst_18284__$1);

(statearr_18344[(11)] = inst_18282__$1);

return statearr_18344;
})();
var statearr_18345_18380 = state_18330__$1;
(statearr_18345_18380[(2)] = null);

(statearr_18345_18380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (22))){
var state_18330__$1 = state_18330;
var statearr_18346_18381 = state_18330__$1;
(statearr_18346_18381[(2)] = null);

(statearr_18346_18381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (6))){
var inst_18271 = (state_18330[(13)]);
var inst_18280 = f.call(null,inst_18271);
var inst_18281 = cljs.core.seq.call(null,inst_18280);
var inst_18282 = inst_18281;
var inst_18283 = null;
var inst_18284 = (0);
var inst_18285 = (0);
var state_18330__$1 = (function (){var statearr_18347 = state_18330;
(statearr_18347[(8)] = inst_18283);

(statearr_18347[(9)] = inst_18285);

(statearr_18347[(10)] = inst_18284);

(statearr_18347[(11)] = inst_18282);

return statearr_18347;
})();
var statearr_18348_18382 = state_18330__$1;
(statearr_18348_18382[(2)] = null);

(statearr_18348_18382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (17))){
var inst_18296 = (state_18330[(7)]);
var inst_18300 = cljs.core.chunk_first.call(null,inst_18296);
var inst_18301 = cljs.core.chunk_rest.call(null,inst_18296);
var inst_18302 = cljs.core.count.call(null,inst_18300);
var inst_18282 = inst_18301;
var inst_18283 = inst_18300;
var inst_18284 = inst_18302;
var inst_18285 = (0);
var state_18330__$1 = (function (){var statearr_18349 = state_18330;
(statearr_18349[(8)] = inst_18283);

(statearr_18349[(9)] = inst_18285);

(statearr_18349[(10)] = inst_18284);

(statearr_18349[(11)] = inst_18282);

return statearr_18349;
})();
var statearr_18350_18383 = state_18330__$1;
(statearr_18350_18383[(2)] = null);

(statearr_18350_18383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (3))){
var inst_18328 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18330__$1,inst_18328);
} else {
if((state_val_18331 === (12))){
var inst_18316 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18351_18384 = state_18330__$1;
(statearr_18351_18384[(2)] = inst_18316);

(statearr_18351_18384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (2))){
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18330__$1,(4),in$);
} else {
if((state_val_18331 === (23))){
var inst_18324 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18352_18385 = state_18330__$1;
(statearr_18352_18385[(2)] = inst_18324);

(statearr_18352_18385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (19))){
var inst_18311 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18353_18386 = state_18330__$1;
(statearr_18353_18386[(2)] = inst_18311);

(statearr_18353_18386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (11))){
var inst_18296 = (state_18330[(7)]);
var inst_18282 = (state_18330[(11)]);
var inst_18296__$1 = cljs.core.seq.call(null,inst_18282);
var state_18330__$1 = (function (){var statearr_18354 = state_18330;
(statearr_18354[(7)] = inst_18296__$1);

return statearr_18354;
})();
if(inst_18296__$1){
var statearr_18355_18387 = state_18330__$1;
(statearr_18355_18387[(1)] = (14));

} else {
var statearr_18356_18388 = state_18330__$1;
(statearr_18356_18388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (9))){
var inst_18318 = (state_18330[(2)]);
var inst_18319 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18330__$1 = (function (){var statearr_18357 = state_18330;
(statearr_18357[(15)] = inst_18318);

return statearr_18357;
})();
if(cljs.core.truth_(inst_18319)){
var statearr_18358_18389 = state_18330__$1;
(statearr_18358_18389[(1)] = (21));

} else {
var statearr_18359_18390 = state_18330__$1;
(statearr_18359_18390[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (5))){
var inst_18274 = cljs.core.async.close_BANG_.call(null,out);
var state_18330__$1 = state_18330;
var statearr_18360_18391 = state_18330__$1;
(statearr_18360_18391[(2)] = inst_18274);

(statearr_18360_18391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (14))){
var inst_18296 = (state_18330[(7)]);
var inst_18298 = cljs.core.chunked_seq_QMARK_.call(null,inst_18296);
var state_18330__$1 = state_18330;
if(inst_18298){
var statearr_18361_18392 = state_18330__$1;
(statearr_18361_18392[(1)] = (17));

} else {
var statearr_18362_18393 = state_18330__$1;
(statearr_18362_18393[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (16))){
var inst_18314 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18363_18394 = state_18330__$1;
(statearr_18363_18394[(2)] = inst_18314);

(statearr_18363_18394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (10))){
var inst_18283 = (state_18330[(8)]);
var inst_18285 = (state_18330[(9)]);
var inst_18290 = cljs.core._nth.call(null,inst_18283,inst_18285);
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18330__$1,(13),out,inst_18290);
} else {
if((state_val_18331 === (18))){
var inst_18296 = (state_18330[(7)]);
var inst_18305 = cljs.core.first.call(null,inst_18296);
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18330__$1,(20),out,inst_18305);
} else {
if((state_val_18331 === (8))){
var inst_18285 = (state_18330[(9)]);
var inst_18284 = (state_18330[(10)]);
var inst_18287 = (inst_18285 < inst_18284);
var inst_18288 = inst_18287;
var state_18330__$1 = state_18330;
if(cljs.core.truth_(inst_18288)){
var statearr_18364_18395 = state_18330__$1;
(statearr_18364_18395[(1)] = (10));

} else {
var statearr_18365_18396 = state_18330__$1;
(statearr_18365_18396[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto__))
;
return ((function (switch__9787__auto__,c__9849__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9788__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9788__auto____0 = (function (){
var statearr_18369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18369[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9788__auto__);

(statearr_18369[(1)] = (1));

return statearr_18369;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9788__auto____1 = (function (state_18330){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_18330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e18370){if((e18370 instanceof Object)){
var ex__9791__auto__ = e18370;
var statearr_18371_18397 = state_18330;
(statearr_18371_18397[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18398 = state_18330;
state_18330 = G__18398;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9788__auto__ = function(state_18330){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9788__auto____1.call(this,state_18330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9788__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9788__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto__))
})();
var state__9851__auto__ = (function (){var statearr_18372 = f__9850__auto__.call(null);
(statearr_18372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto__);

return statearr_18372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto__))
);

return c__9849__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__18400 = arguments.length;
switch (G__18400) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__18403 = arguments.length;
switch (G__18403) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__18406 = arguments.length;
switch (G__18406) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9849__auto___18456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___18456,out){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___18456,out){
return (function (state_18430){
var state_val_18431 = (state_18430[(1)]);
if((state_val_18431 === (7))){
var inst_18425 = (state_18430[(2)]);
var state_18430__$1 = state_18430;
var statearr_18432_18457 = state_18430__$1;
(statearr_18432_18457[(2)] = inst_18425);

(statearr_18432_18457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18431 === (1))){
var inst_18407 = null;
var state_18430__$1 = (function (){var statearr_18433 = state_18430;
(statearr_18433[(7)] = inst_18407);

return statearr_18433;
})();
var statearr_18434_18458 = state_18430__$1;
(statearr_18434_18458[(2)] = null);

(statearr_18434_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18431 === (4))){
var inst_18410 = (state_18430[(8)]);
var inst_18410__$1 = (state_18430[(2)]);
var inst_18411 = (inst_18410__$1 == null);
var inst_18412 = cljs.core.not.call(null,inst_18411);
var state_18430__$1 = (function (){var statearr_18435 = state_18430;
(statearr_18435[(8)] = inst_18410__$1);

return statearr_18435;
})();
if(inst_18412){
var statearr_18436_18459 = state_18430__$1;
(statearr_18436_18459[(1)] = (5));

} else {
var statearr_18437_18460 = state_18430__$1;
(statearr_18437_18460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18431 === (6))){
var state_18430__$1 = state_18430;
var statearr_18438_18461 = state_18430__$1;
(statearr_18438_18461[(2)] = null);

(statearr_18438_18461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18431 === (3))){
var inst_18427 = (state_18430[(2)]);
var inst_18428 = cljs.core.async.close_BANG_.call(null,out);
var state_18430__$1 = (function (){var statearr_18439 = state_18430;
(statearr_18439[(9)] = inst_18427);

return statearr_18439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18430__$1,inst_18428);
} else {
if((state_val_18431 === (2))){
var state_18430__$1 = state_18430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18430__$1,(4),ch);
} else {
if((state_val_18431 === (11))){
var inst_18410 = (state_18430[(8)]);
var inst_18419 = (state_18430[(2)]);
var inst_18407 = inst_18410;
var state_18430__$1 = (function (){var statearr_18440 = state_18430;
(statearr_18440[(10)] = inst_18419);

(statearr_18440[(7)] = inst_18407);

return statearr_18440;
})();
var statearr_18441_18462 = state_18430__$1;
(statearr_18441_18462[(2)] = null);

(statearr_18441_18462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18431 === (9))){
var inst_18410 = (state_18430[(8)]);
var state_18430__$1 = state_18430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18430__$1,(11),out,inst_18410);
} else {
if((state_val_18431 === (5))){
var inst_18410 = (state_18430[(8)]);
var inst_18407 = (state_18430[(7)]);
var inst_18414 = cljs.core._EQ_.call(null,inst_18410,inst_18407);
var state_18430__$1 = state_18430;
if(inst_18414){
var statearr_18443_18463 = state_18430__$1;
(statearr_18443_18463[(1)] = (8));

} else {
var statearr_18444_18464 = state_18430__$1;
(statearr_18444_18464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18431 === (10))){
var inst_18422 = (state_18430[(2)]);
var state_18430__$1 = state_18430;
var statearr_18445_18465 = state_18430__$1;
(statearr_18445_18465[(2)] = inst_18422);

(statearr_18445_18465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18431 === (8))){
var inst_18407 = (state_18430[(7)]);
var tmp18442 = inst_18407;
var inst_18407__$1 = tmp18442;
var state_18430__$1 = (function (){var statearr_18446 = state_18430;
(statearr_18446[(7)] = inst_18407__$1);

return statearr_18446;
})();
var statearr_18447_18466 = state_18430__$1;
(statearr_18447_18466[(2)] = null);

(statearr_18447_18466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___18456,out))
;
return ((function (switch__9787__auto__,c__9849__auto___18456,out){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_18451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18451[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_18451[(1)] = (1));

return statearr_18451;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_18430){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_18430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e18452){if((e18452 instanceof Object)){
var ex__9791__auto__ = e18452;
var statearr_18453_18467 = state_18430;
(statearr_18453_18467[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18468 = state_18430;
state_18430 = G__18468;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_18430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_18430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___18456,out))
})();
var state__9851__auto__ = (function (){var statearr_18454 = f__9850__auto__.call(null);
(statearr_18454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___18456);

return statearr_18454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___18456,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__18470 = arguments.length;
switch (G__18470) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9849__auto___18539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___18539,out){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___18539,out){
return (function (state_18508){
var state_val_18509 = (state_18508[(1)]);
if((state_val_18509 === (7))){
var inst_18504 = (state_18508[(2)]);
var state_18508__$1 = state_18508;
var statearr_18510_18540 = state_18508__$1;
(statearr_18510_18540[(2)] = inst_18504);

(statearr_18510_18540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (1))){
var inst_18471 = (new Array(n));
var inst_18472 = inst_18471;
var inst_18473 = (0);
var state_18508__$1 = (function (){var statearr_18511 = state_18508;
(statearr_18511[(7)] = inst_18473);

(statearr_18511[(8)] = inst_18472);

return statearr_18511;
})();
var statearr_18512_18541 = state_18508__$1;
(statearr_18512_18541[(2)] = null);

(statearr_18512_18541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (4))){
var inst_18476 = (state_18508[(9)]);
var inst_18476__$1 = (state_18508[(2)]);
var inst_18477 = (inst_18476__$1 == null);
var inst_18478 = cljs.core.not.call(null,inst_18477);
var state_18508__$1 = (function (){var statearr_18513 = state_18508;
(statearr_18513[(9)] = inst_18476__$1);

return statearr_18513;
})();
if(inst_18478){
var statearr_18514_18542 = state_18508__$1;
(statearr_18514_18542[(1)] = (5));

} else {
var statearr_18515_18543 = state_18508__$1;
(statearr_18515_18543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (15))){
var inst_18498 = (state_18508[(2)]);
var state_18508__$1 = state_18508;
var statearr_18516_18544 = state_18508__$1;
(statearr_18516_18544[(2)] = inst_18498);

(statearr_18516_18544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (13))){
var state_18508__$1 = state_18508;
var statearr_18517_18545 = state_18508__$1;
(statearr_18517_18545[(2)] = null);

(statearr_18517_18545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (6))){
var inst_18473 = (state_18508[(7)]);
var inst_18494 = (inst_18473 > (0));
var state_18508__$1 = state_18508;
if(cljs.core.truth_(inst_18494)){
var statearr_18518_18546 = state_18508__$1;
(statearr_18518_18546[(1)] = (12));

} else {
var statearr_18519_18547 = state_18508__$1;
(statearr_18519_18547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (3))){
var inst_18506 = (state_18508[(2)]);
var state_18508__$1 = state_18508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18508__$1,inst_18506);
} else {
if((state_val_18509 === (12))){
var inst_18472 = (state_18508[(8)]);
var inst_18496 = cljs.core.vec.call(null,inst_18472);
var state_18508__$1 = state_18508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18508__$1,(15),out,inst_18496);
} else {
if((state_val_18509 === (2))){
var state_18508__$1 = state_18508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18508__$1,(4),ch);
} else {
if((state_val_18509 === (11))){
var inst_18488 = (state_18508[(2)]);
var inst_18489 = (new Array(n));
var inst_18472 = inst_18489;
var inst_18473 = (0);
var state_18508__$1 = (function (){var statearr_18520 = state_18508;
(statearr_18520[(7)] = inst_18473);

(statearr_18520[(8)] = inst_18472);

(statearr_18520[(10)] = inst_18488);

return statearr_18520;
})();
var statearr_18521_18548 = state_18508__$1;
(statearr_18521_18548[(2)] = null);

(statearr_18521_18548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (9))){
var inst_18472 = (state_18508[(8)]);
var inst_18486 = cljs.core.vec.call(null,inst_18472);
var state_18508__$1 = state_18508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18508__$1,(11),out,inst_18486);
} else {
if((state_val_18509 === (5))){
var inst_18481 = (state_18508[(11)]);
var inst_18473 = (state_18508[(7)]);
var inst_18472 = (state_18508[(8)]);
var inst_18476 = (state_18508[(9)]);
var inst_18480 = (inst_18472[inst_18473] = inst_18476);
var inst_18481__$1 = (inst_18473 + (1));
var inst_18482 = (inst_18481__$1 < n);
var state_18508__$1 = (function (){var statearr_18522 = state_18508;
(statearr_18522[(11)] = inst_18481__$1);

(statearr_18522[(12)] = inst_18480);

return statearr_18522;
})();
if(cljs.core.truth_(inst_18482)){
var statearr_18523_18549 = state_18508__$1;
(statearr_18523_18549[(1)] = (8));

} else {
var statearr_18524_18550 = state_18508__$1;
(statearr_18524_18550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (14))){
var inst_18501 = (state_18508[(2)]);
var inst_18502 = cljs.core.async.close_BANG_.call(null,out);
var state_18508__$1 = (function (){var statearr_18526 = state_18508;
(statearr_18526[(13)] = inst_18501);

return statearr_18526;
})();
var statearr_18527_18551 = state_18508__$1;
(statearr_18527_18551[(2)] = inst_18502);

(statearr_18527_18551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (10))){
var inst_18492 = (state_18508[(2)]);
var state_18508__$1 = state_18508;
var statearr_18528_18552 = state_18508__$1;
(statearr_18528_18552[(2)] = inst_18492);

(statearr_18528_18552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18509 === (8))){
var inst_18481 = (state_18508[(11)]);
var inst_18472 = (state_18508[(8)]);
var tmp18525 = inst_18472;
var inst_18472__$1 = tmp18525;
var inst_18473 = inst_18481;
var state_18508__$1 = (function (){var statearr_18529 = state_18508;
(statearr_18529[(7)] = inst_18473);

(statearr_18529[(8)] = inst_18472__$1);

return statearr_18529;
})();
var statearr_18530_18553 = state_18508__$1;
(statearr_18530_18553[(2)] = null);

(statearr_18530_18553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___18539,out))
;
return ((function (switch__9787__auto__,c__9849__auto___18539,out){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_18534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18534[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_18534[(1)] = (1));

return statearr_18534;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_18508){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_18508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e18535){if((e18535 instanceof Object)){
var ex__9791__auto__ = e18535;
var statearr_18536_18554 = state_18508;
(statearr_18536_18554[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18555 = state_18508;
state_18508 = G__18555;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_18508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_18508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___18539,out))
})();
var state__9851__auto__ = (function (){var statearr_18537 = f__9850__auto__.call(null);
(statearr_18537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___18539);

return statearr_18537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___18539,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__18557 = arguments.length;
switch (G__18557) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9849__auto___18630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto___18630,out){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto___18630,out){
return (function (state_18599){
var state_val_18600 = (state_18599[(1)]);
if((state_val_18600 === (7))){
var inst_18595 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18601_18631 = state_18599__$1;
(statearr_18601_18631[(2)] = inst_18595);

(statearr_18601_18631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (1))){
var inst_18558 = [];
var inst_18559 = inst_18558;
var inst_18560 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18599__$1 = (function (){var statearr_18602 = state_18599;
(statearr_18602[(7)] = inst_18559);

(statearr_18602[(8)] = inst_18560);

return statearr_18602;
})();
var statearr_18603_18632 = state_18599__$1;
(statearr_18603_18632[(2)] = null);

(statearr_18603_18632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (4))){
var inst_18563 = (state_18599[(9)]);
var inst_18563__$1 = (state_18599[(2)]);
var inst_18564 = (inst_18563__$1 == null);
var inst_18565 = cljs.core.not.call(null,inst_18564);
var state_18599__$1 = (function (){var statearr_18604 = state_18599;
(statearr_18604[(9)] = inst_18563__$1);

return statearr_18604;
})();
if(inst_18565){
var statearr_18605_18633 = state_18599__$1;
(statearr_18605_18633[(1)] = (5));

} else {
var statearr_18606_18634 = state_18599__$1;
(statearr_18606_18634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (15))){
var inst_18589 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18607_18635 = state_18599__$1;
(statearr_18607_18635[(2)] = inst_18589);

(statearr_18607_18635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (13))){
var state_18599__$1 = state_18599;
var statearr_18608_18636 = state_18599__$1;
(statearr_18608_18636[(2)] = null);

(statearr_18608_18636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (6))){
var inst_18559 = (state_18599[(7)]);
var inst_18584 = inst_18559.length;
var inst_18585 = (inst_18584 > (0));
var state_18599__$1 = state_18599;
if(cljs.core.truth_(inst_18585)){
var statearr_18609_18637 = state_18599__$1;
(statearr_18609_18637[(1)] = (12));

} else {
var statearr_18610_18638 = state_18599__$1;
(statearr_18610_18638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (3))){
var inst_18597 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18599__$1,inst_18597);
} else {
if((state_val_18600 === (12))){
var inst_18559 = (state_18599[(7)]);
var inst_18587 = cljs.core.vec.call(null,inst_18559);
var state_18599__$1 = state_18599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18599__$1,(15),out,inst_18587);
} else {
if((state_val_18600 === (2))){
var state_18599__$1 = state_18599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18599__$1,(4),ch);
} else {
if((state_val_18600 === (11))){
var inst_18567 = (state_18599[(10)]);
var inst_18563 = (state_18599[(9)]);
var inst_18577 = (state_18599[(2)]);
var inst_18578 = [];
var inst_18579 = inst_18578.push(inst_18563);
var inst_18559 = inst_18578;
var inst_18560 = inst_18567;
var state_18599__$1 = (function (){var statearr_18611 = state_18599;
(statearr_18611[(7)] = inst_18559);

(statearr_18611[(11)] = inst_18577);

(statearr_18611[(12)] = inst_18579);

(statearr_18611[(8)] = inst_18560);

return statearr_18611;
})();
var statearr_18612_18639 = state_18599__$1;
(statearr_18612_18639[(2)] = null);

(statearr_18612_18639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (9))){
var inst_18559 = (state_18599[(7)]);
var inst_18575 = cljs.core.vec.call(null,inst_18559);
var state_18599__$1 = state_18599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18599__$1,(11),out,inst_18575);
} else {
if((state_val_18600 === (5))){
var inst_18567 = (state_18599[(10)]);
var inst_18563 = (state_18599[(9)]);
var inst_18560 = (state_18599[(8)]);
var inst_18567__$1 = f.call(null,inst_18563);
var inst_18568 = cljs.core._EQ_.call(null,inst_18567__$1,inst_18560);
var inst_18569 = cljs.core.keyword_identical_QMARK_.call(null,inst_18560,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18570 = (inst_18568) || (inst_18569);
var state_18599__$1 = (function (){var statearr_18613 = state_18599;
(statearr_18613[(10)] = inst_18567__$1);

return statearr_18613;
})();
if(cljs.core.truth_(inst_18570)){
var statearr_18614_18640 = state_18599__$1;
(statearr_18614_18640[(1)] = (8));

} else {
var statearr_18615_18641 = state_18599__$1;
(statearr_18615_18641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (14))){
var inst_18592 = (state_18599[(2)]);
var inst_18593 = cljs.core.async.close_BANG_.call(null,out);
var state_18599__$1 = (function (){var statearr_18617 = state_18599;
(statearr_18617[(13)] = inst_18592);

return statearr_18617;
})();
var statearr_18618_18642 = state_18599__$1;
(statearr_18618_18642[(2)] = inst_18593);

(statearr_18618_18642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (10))){
var inst_18582 = (state_18599[(2)]);
var state_18599__$1 = state_18599;
var statearr_18619_18643 = state_18599__$1;
(statearr_18619_18643[(2)] = inst_18582);

(statearr_18619_18643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18600 === (8))){
var inst_18567 = (state_18599[(10)]);
var inst_18559 = (state_18599[(7)]);
var inst_18563 = (state_18599[(9)]);
var inst_18572 = inst_18559.push(inst_18563);
var tmp18616 = inst_18559;
var inst_18559__$1 = tmp18616;
var inst_18560 = inst_18567;
var state_18599__$1 = (function (){var statearr_18620 = state_18599;
(statearr_18620[(7)] = inst_18559__$1);

(statearr_18620[(14)] = inst_18572);

(statearr_18620[(8)] = inst_18560);

return statearr_18620;
})();
var statearr_18621_18644 = state_18599__$1;
(statearr_18621_18644[(2)] = null);

(statearr_18621_18644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9849__auto___18630,out))
;
return ((function (switch__9787__auto__,c__9849__auto___18630,out){
return (function() {
var cljs$core$async$state_machine__9788__auto__ = null;
var cljs$core$async$state_machine__9788__auto____0 = (function (){
var statearr_18625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18625[(0)] = cljs$core$async$state_machine__9788__auto__);

(statearr_18625[(1)] = (1));

return statearr_18625;
});
var cljs$core$async$state_machine__9788__auto____1 = (function (state_18599){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_18599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e18626){if((e18626 instanceof Object)){
var ex__9791__auto__ = e18626;
var statearr_18627_18645 = state_18599;
(statearr_18627_18645[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18646 = state_18599;
state_18599 = G__18646;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
cljs$core$async$state_machine__9788__auto__ = function(state_18599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9788__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9788__auto____1.call(this,state_18599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9788__auto____0;
cljs$core$async$state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9788__auto____1;
return cljs$core$async$state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto___18630,out))
})();
var state__9851__auto__ = (function (){var statearr_18628 = f__9850__auto__.call(null);
(statearr_18628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto___18630);

return statearr_18628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto___18630,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map