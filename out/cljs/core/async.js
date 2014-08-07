// Compiled by ClojureScript 0.0-2280
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10826 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10826 = (function (f,fn_handler,meta10827){
this.f = f;
this.fn_handler = fn_handler;
this.meta10827 = meta10827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10826.cljs$lang$type = true;
cljs.core.async.t10826.cljs$lang$ctorStr = "cljs.core.async/t10826";
cljs.core.async.t10826.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10826");
});
cljs.core.async.t10826.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10828){var self__ = this;
var _10828__$1 = this;return self__.meta10827;
});
cljs.core.async.t10826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10828,meta10827__$1){var self__ = this;
var _10828__$1 = this;return (new cljs.core.async.t10826(self__.f,self__.fn_handler,meta10827__$1));
});
cljs.core.async.__GT_t10826 = (function __GT_t10826(f__$1,fn_handler__$1,meta10827){return (new cljs.core.async.t10826(f__$1,fn_handler__$1,meta10827));
});
}
return (new cljs.core.async.t10826(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10830 = buff;if(G__10830)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__10830.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10830.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10830);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10830);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10831 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10831);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10831,ret){
return (function (){return fn1.call(null,val_10831);
});})(val_10831,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3532__auto__ = ret;if(cljs.core.truth_(and__3532__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3532__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4400__auto___10832 = n;var x_10833 = (0);while(true){
if((x_10833 < n__4400__auto___10832))
{(a[x_10833] = (0));
{
var G__10834 = (x_10833 + (1));
x_10833 = G__10834;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10835 = (i + (1));
i = G__10835;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10839 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10839 = (function (flag,alt_flag,meta10840){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10840 = meta10840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10839.cljs$lang$type = true;
cljs.core.async.t10839.cljs$lang$ctorStr = "cljs.core.async/t10839";
cljs.core.async.t10839.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10839");
});})(flag))
;
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10841){var self__ = this;
var _10841__$1 = this;return self__.meta10840;
});})(flag))
;
cljs.core.async.t10839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10841,meta10840__$1){var self__ = this;
var _10841__$1 = this;return (new cljs.core.async.t10839(self__.flag,self__.alt_flag,meta10840__$1));
});})(flag))
;
cljs.core.async.__GT_t10839 = ((function (flag){
return (function __GT_t10839(flag__$1,alt_flag__$1,meta10840){return (new cljs.core.async.t10839(flag__$1,alt_flag__$1,meta10840));
});})(flag))
;
}
return (new cljs.core.async.t10839(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10845 = (function (cb,flag,alt_handler,meta10846){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10846 = meta10846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10845.cljs$lang$type = true;
cljs.core.async.t10845.cljs$lang$ctorStr = "cljs.core.async/t10845";
cljs.core.async.t10845.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10845");
});
cljs.core.async.t10845.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10847){var self__ = this;
var _10847__$1 = this;return self__.meta10846;
});
cljs.core.async.t10845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10847,meta10846__$1){var self__ = this;
var _10847__$1 = this;return (new cljs.core.async.t10845(self__.cb,self__.flag,self__.alt_handler,meta10846__$1));
});
cljs.core.async.__GT_t10845 = (function __GT_t10845(cb__$1,flag__$1,alt_handler__$1,meta10846){return (new cljs.core.async.t10845(cb__$1,flag__$1,alt_handler__$1,meta10846));
});
}
return (new cljs.core.async.t10845(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10848_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10848_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3544__auto__ = wport;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10849 = (i + (1));
i = G__10849;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3544__auto__ = ret;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3532__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3532__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3532__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10850){var map__10852 = p__10850;var map__10852__$1 = ((cljs.core.seq_QMARK_.call(null,map__10852))?cljs.core.apply.call(null,cljs.core.hash_map,map__10852):map__10852);var opts = map__10852__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10850 = null;if (arguments.length > 1) {
  p__10850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10850);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10853){
var ports = cljs.core.first(arglist__10853);
var p__10850 = cljs.core.rest(arglist__10853);
return alts_BANG___delegate(ports,p__10850);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10861 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10861 = (function (ch,f,map_LT_,meta10862){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10862 = meta10862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10861.cljs$lang$type = true;
cljs.core.async.t10861.cljs$lang$ctorStr = "cljs.core.async/t10861";
cljs.core.async.t10861.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10861");
});
cljs.core.async.t10861.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10861.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10864 = (function (fn1,_,meta10862,ch,f,map_LT_,meta10865){
this.fn1 = fn1;
this._ = _;
this.meta10862 = meta10862;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10865 = meta10865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10864.cljs$lang$type = true;
cljs.core.async.t10864.cljs$lang$ctorStr = "cljs.core.async/t10864";
cljs.core.async.t10864.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10864");
});})(___$1))
;
cljs.core.async.t10864.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10864.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10854_SHARP_){return f1.call(null,(((p1__10854_SHARP_ == null))?null:self__.f.call(null,p1__10854_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10866){var self__ = this;
var _10866__$1 = this;return self__.meta10865;
});})(___$1))
;
cljs.core.async.t10864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10866,meta10865__$1){var self__ = this;
var _10866__$1 = this;return (new cljs.core.async.t10864(self__.fn1,self__._,self__.meta10862,self__.ch,self__.f,self__.map_LT_,meta10865__$1));
});})(___$1))
;
cljs.core.async.__GT_t10864 = ((function (___$1){
return (function __GT_t10864(fn1__$1,___$2,meta10862__$1,ch__$2,f__$2,map_LT___$2,meta10865){return (new cljs.core.async.t10864(fn1__$1,___$2,meta10862__$1,ch__$2,f__$2,map_LT___$2,meta10865));
});})(___$1))
;
}
return (new cljs.core.async.t10864(fn1,___$1,self__.meta10862,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3532__auto__ = ret;if(cljs.core.truth_(and__3532__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3532__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10861.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10863){var self__ = this;
var _10863__$1 = this;return self__.meta10862;
});
cljs.core.async.t10861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10863,meta10862__$1){var self__ = this;
var _10863__$1 = this;return (new cljs.core.async.t10861(self__.ch,self__.f,self__.map_LT_,meta10862__$1));
});
cljs.core.async.__GT_t10861 = (function __GT_t10861(ch__$1,f__$1,map_LT___$1,meta10862){return (new cljs.core.async.t10861(ch__$1,f__$1,map_LT___$1,meta10862));
});
}
return (new cljs.core.async.t10861(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10870 = (function (ch,f,map_GT_,meta10871){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10871 = meta10871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10870.cljs$lang$type = true;
cljs.core.async.t10870.cljs$lang$ctorStr = "cljs.core.async/t10870";
cljs.core.async.t10870.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10870");
});
cljs.core.async.t10870.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10870.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10870.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10872){var self__ = this;
var _10872__$1 = this;return self__.meta10871;
});
cljs.core.async.t10870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10872,meta10871__$1){var self__ = this;
var _10872__$1 = this;return (new cljs.core.async.t10870(self__.ch,self__.f,self__.map_GT_,meta10871__$1));
});
cljs.core.async.__GT_t10870 = (function __GT_t10870(ch__$1,f__$1,map_GT___$1,meta10871){return (new cljs.core.async.t10870(ch__$1,f__$1,map_GT___$1,meta10871));
});
}
return (new cljs.core.async.t10870(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10876 = (function (ch,p,filter_GT_,meta10877){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10877 = meta10877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10876.cljs$lang$type = true;
cljs.core.async.t10876.cljs$lang$ctorStr = "cljs.core.async/t10876";
cljs.core.async.t10876.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t10876");
});
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10878){var self__ = this;
var _10878__$1 = this;return self__.meta10877;
});
cljs.core.async.t10876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10878,meta10877__$1){var self__ = this;
var _10878__$1 = this;return (new cljs.core.async.t10876(self__.ch,self__.p,self__.filter_GT_,meta10877__$1));
});
cljs.core.async.__GT_t10876 = (function __GT_t10876(ch__$1,p__$1,filter_GT___$1,meta10877){return (new cljs.core.async.t10876(ch__$1,p__$1,filter_GT___$1,meta10877));
});
}
return (new cljs.core.async.t10876(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___10961 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___10961,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___10961,out){
return (function (state_10940){var state_val_10941 = (state_10940[(1)]);if((state_val_10941 === (7)))
{var inst_10936 = (state_10940[(2)]);var state_10940__$1 = state_10940;var statearr_10942_10962 = state_10940__$1;(statearr_10942_10962[(2)] = inst_10936);
(statearr_10942_10962[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (1)))
{var state_10940__$1 = state_10940;var statearr_10943_10963 = state_10940__$1;(statearr_10943_10963[(2)] = null);
(statearr_10943_10963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (4)))
{var inst_10922 = (state_10940[(7)]);var inst_10922__$1 = (state_10940[(2)]);var inst_10923 = (inst_10922__$1 == null);var state_10940__$1 = (function (){var statearr_10944 = state_10940;(statearr_10944[(7)] = inst_10922__$1);
return statearr_10944;
})();if(cljs.core.truth_(inst_10923))
{var statearr_10945_10964 = state_10940__$1;(statearr_10945_10964[(1)] = (5));
} else
{var statearr_10946_10965 = state_10940__$1;(statearr_10946_10965[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (6)))
{var inst_10922 = (state_10940[(7)]);var inst_10927 = p.call(null,inst_10922);var state_10940__$1 = state_10940;if(cljs.core.truth_(inst_10927))
{var statearr_10947_10966 = state_10940__$1;(statearr_10947_10966[(1)] = (8));
} else
{var statearr_10948_10967 = state_10940__$1;(statearr_10948_10967[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (3)))
{var inst_10938 = (state_10940[(2)]);var state_10940__$1 = state_10940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10940__$1,inst_10938);
} else
{if((state_val_10941 === (2)))
{var state_10940__$1 = state_10940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10940__$1,(4),ch);
} else
{if((state_val_10941 === (11)))
{var inst_10930 = (state_10940[(2)]);var state_10940__$1 = state_10940;var statearr_10949_10968 = state_10940__$1;(statearr_10949_10968[(2)] = inst_10930);
(statearr_10949_10968[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (9)))
{var state_10940__$1 = state_10940;var statearr_10950_10969 = state_10940__$1;(statearr_10950_10969[(2)] = null);
(statearr_10950_10969[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (5)))
{var inst_10925 = cljs.core.async.close_BANG_.call(null,out);var state_10940__$1 = state_10940;var statearr_10951_10970 = state_10940__$1;(statearr_10951_10970[(2)] = inst_10925);
(statearr_10951_10970[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (10)))
{var inst_10933 = (state_10940[(2)]);var state_10940__$1 = (function (){var statearr_10952 = state_10940;(statearr_10952[(8)] = inst_10933);
return statearr_10952;
})();var statearr_10953_10971 = state_10940__$1;(statearr_10953_10971[(2)] = null);
(statearr_10953_10971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10941 === (8)))
{var inst_10922 = (state_10940[(7)]);var state_10940__$1 = state_10940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10940__$1,(11),out,inst_10922);
} else
{return null;
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
});})(c__6677__auto___10961,out))
;return ((function (switch__6612__auto__,c__6677__auto___10961,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_10957 = [null,null,null,null,null,null,null,null,null];(statearr_10957[(0)] = state_machine__6613__auto__);
(statearr_10957[(1)] = (1));
return statearr_10957;
});
var state_machine__6613__auto____1 = (function (state_10940){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_10940);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e10958){if((e10958 instanceof Object))
{var ex__6616__auto__ = e10958;var statearr_10959_10972 = state_10940;(statearr_10959_10972[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10940);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10973 = state_10940;
state_10940 = G__10973;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_10940){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_10940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___10961,out))
})();var state__6679__auto__ = (function (){var statearr_10960 = f__6678__auto__.call(null);(statearr_10960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___10961);
return statearr_10960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___10961,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6677__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto__){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto__){
return (function (state_11125){var state_val_11126 = (state_11125[(1)]);if((state_val_11126 === (7)))
{var inst_11121 = (state_11125[(2)]);var state_11125__$1 = state_11125;var statearr_11127_11164 = state_11125__$1;(statearr_11127_11164[(2)] = inst_11121);
(statearr_11127_11164[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (20)))
{var inst_11096 = (state_11125[(7)]);var inst_11107 = (state_11125[(2)]);var inst_11108 = cljs.core.next.call(null,inst_11096);var inst_11082 = inst_11108;var inst_11083 = null;var inst_11084 = (0);var inst_11085 = (0);var state_11125__$1 = (function (){var statearr_11128 = state_11125;(statearr_11128[(8)] = inst_11083);
(statearr_11128[(9)] = inst_11085);
(statearr_11128[(10)] = inst_11084);
(statearr_11128[(11)] = inst_11082);
(statearr_11128[(12)] = inst_11107);
return statearr_11128;
})();var statearr_11129_11165 = state_11125__$1;(statearr_11129_11165[(2)] = null);
(statearr_11129_11165[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (1)))
{var state_11125__$1 = state_11125;var statearr_11130_11166 = state_11125__$1;(statearr_11130_11166[(2)] = null);
(statearr_11130_11166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (4)))
{var inst_11071 = (state_11125[(13)]);var inst_11071__$1 = (state_11125[(2)]);var inst_11072 = (inst_11071__$1 == null);var state_11125__$1 = (function (){var statearr_11134 = state_11125;(statearr_11134[(13)] = inst_11071__$1);
return statearr_11134;
})();if(cljs.core.truth_(inst_11072))
{var statearr_11135_11167 = state_11125__$1;(statearr_11135_11167[(1)] = (5));
} else
{var statearr_11136_11168 = state_11125__$1;(statearr_11136_11168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (15)))
{var state_11125__$1 = state_11125;var statearr_11137_11169 = state_11125__$1;(statearr_11137_11169[(2)] = null);
(statearr_11137_11169[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (13)))
{var inst_11083 = (state_11125[(8)]);var inst_11085 = (state_11125[(9)]);var inst_11084 = (state_11125[(10)]);var inst_11082 = (state_11125[(11)]);var inst_11092 = (state_11125[(2)]);var inst_11093 = (inst_11085 + (1));var tmp11131 = inst_11083;var tmp11132 = inst_11084;var tmp11133 = inst_11082;var inst_11082__$1 = tmp11133;var inst_11083__$1 = tmp11131;var inst_11084__$1 = tmp11132;var inst_11085__$1 = inst_11093;var state_11125__$1 = (function (){var statearr_11138 = state_11125;(statearr_11138[(8)] = inst_11083__$1);
(statearr_11138[(9)] = inst_11085__$1);
(statearr_11138[(10)] = inst_11084__$1);
(statearr_11138[(11)] = inst_11082__$1);
(statearr_11138[(14)] = inst_11092);
return statearr_11138;
})();var statearr_11139_11170 = state_11125__$1;(statearr_11139_11170[(2)] = null);
(statearr_11139_11170[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (6)))
{var inst_11071 = (state_11125[(13)]);var inst_11076 = f.call(null,inst_11071);var inst_11081 = cljs.core.seq.call(null,inst_11076);var inst_11082 = inst_11081;var inst_11083 = null;var inst_11084 = (0);var inst_11085 = (0);var state_11125__$1 = (function (){var statearr_11140 = state_11125;(statearr_11140[(8)] = inst_11083);
(statearr_11140[(9)] = inst_11085);
(statearr_11140[(10)] = inst_11084);
(statearr_11140[(11)] = inst_11082);
return statearr_11140;
})();var statearr_11141_11171 = state_11125__$1;(statearr_11141_11171[(2)] = null);
(statearr_11141_11171[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (17)))
{var inst_11096 = (state_11125[(7)]);var inst_11100 = cljs.core.chunk_first.call(null,inst_11096);var inst_11101 = cljs.core.chunk_rest.call(null,inst_11096);var inst_11102 = cljs.core.count.call(null,inst_11100);var inst_11082 = inst_11101;var inst_11083 = inst_11100;var inst_11084 = inst_11102;var inst_11085 = (0);var state_11125__$1 = (function (){var statearr_11142 = state_11125;(statearr_11142[(8)] = inst_11083);
(statearr_11142[(9)] = inst_11085);
(statearr_11142[(10)] = inst_11084);
(statearr_11142[(11)] = inst_11082);
return statearr_11142;
})();var statearr_11143_11172 = state_11125__$1;(statearr_11143_11172[(2)] = null);
(statearr_11143_11172[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (3)))
{var inst_11123 = (state_11125[(2)]);var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11125__$1,inst_11123);
} else
{if((state_val_11126 === (12)))
{var inst_11116 = (state_11125[(2)]);var state_11125__$1 = state_11125;var statearr_11144_11173 = state_11125__$1;(statearr_11144_11173[(2)] = inst_11116);
(statearr_11144_11173[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (2)))
{var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11125__$1,(4),in$);
} else
{if((state_val_11126 === (19)))
{var inst_11111 = (state_11125[(2)]);var state_11125__$1 = state_11125;var statearr_11145_11174 = state_11125__$1;(statearr_11145_11174[(2)] = inst_11111);
(statearr_11145_11174[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (11)))
{var inst_11096 = (state_11125[(7)]);var inst_11082 = (state_11125[(11)]);var inst_11096__$1 = cljs.core.seq.call(null,inst_11082);var state_11125__$1 = (function (){var statearr_11146 = state_11125;(statearr_11146[(7)] = inst_11096__$1);
return statearr_11146;
})();if(inst_11096__$1)
{var statearr_11147_11175 = state_11125__$1;(statearr_11147_11175[(1)] = (14));
} else
{var statearr_11148_11176 = state_11125__$1;(statearr_11148_11176[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (9)))
{var inst_11118 = (state_11125[(2)]);var state_11125__$1 = (function (){var statearr_11149 = state_11125;(statearr_11149[(15)] = inst_11118);
return statearr_11149;
})();var statearr_11150_11177 = state_11125__$1;(statearr_11150_11177[(2)] = null);
(statearr_11150_11177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (5)))
{var inst_11074 = cljs.core.async.close_BANG_.call(null,out);var state_11125__$1 = state_11125;var statearr_11151_11178 = state_11125__$1;(statearr_11151_11178[(2)] = inst_11074);
(statearr_11151_11178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (14)))
{var inst_11096 = (state_11125[(7)]);var inst_11098 = cljs.core.chunked_seq_QMARK_.call(null,inst_11096);var state_11125__$1 = state_11125;if(inst_11098)
{var statearr_11152_11179 = state_11125__$1;(statearr_11152_11179[(1)] = (17));
} else
{var statearr_11153_11180 = state_11125__$1;(statearr_11153_11180[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (16)))
{var inst_11114 = (state_11125[(2)]);var state_11125__$1 = state_11125;var statearr_11154_11181 = state_11125__$1;(statearr_11154_11181[(2)] = inst_11114);
(statearr_11154_11181[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (10)))
{var inst_11083 = (state_11125[(8)]);var inst_11085 = (state_11125[(9)]);var inst_11090 = cljs.core._nth.call(null,inst_11083,inst_11085);var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11125__$1,(13),out,inst_11090);
} else
{if((state_val_11126 === (18)))
{var inst_11096 = (state_11125[(7)]);var inst_11105 = cljs.core.first.call(null,inst_11096);var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11125__$1,(20),out,inst_11105);
} else
{if((state_val_11126 === (8)))
{var inst_11085 = (state_11125[(9)]);var inst_11084 = (state_11125[(10)]);var inst_11087 = (inst_11085 < inst_11084);var inst_11088 = inst_11087;var state_11125__$1 = state_11125;if(cljs.core.truth_(inst_11088))
{var statearr_11155_11182 = state_11125__$1;(statearr_11155_11182[(1)] = (10));
} else
{var statearr_11156_11183 = state_11125__$1;(statearr_11156_11183[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto__))
;return ((function (switch__6612__auto__,c__6677__auto__){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11160[(0)] = state_machine__6613__auto__);
(statearr_11160[(1)] = (1));
return statearr_11160;
});
var state_machine__6613__auto____1 = (function (state_11125){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11161){if((e11161 instanceof Object))
{var ex__6616__auto__ = e11161;var statearr_11162_11184 = state_11125;(statearr_11162_11184[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11185 = state_11125;
state_11125 = G__11185;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_11163 = f__6678__auto__.call(null);(statearr_11163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_11163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto__))
);
return c__6677__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6677__auto___11266 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___11266){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___11266){
return (function (state_11245){var state_val_11246 = (state_11245[(1)]);if((state_val_11246 === (7)))
{var inst_11241 = (state_11245[(2)]);var state_11245__$1 = state_11245;var statearr_11247_11267 = state_11245__$1;(statearr_11247_11267[(2)] = inst_11241);
(statearr_11247_11267[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11246 === (1)))
{var state_11245__$1 = state_11245;var statearr_11248_11268 = state_11245__$1;(statearr_11248_11268[(2)] = null);
(statearr_11248_11268[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11246 === (4)))
{var inst_11228 = (state_11245[(7)]);var inst_11228__$1 = (state_11245[(2)]);var inst_11229 = (inst_11228__$1 == null);var state_11245__$1 = (function (){var statearr_11249 = state_11245;(statearr_11249[(7)] = inst_11228__$1);
return statearr_11249;
})();if(cljs.core.truth_(inst_11229))
{var statearr_11250_11269 = state_11245__$1;(statearr_11250_11269[(1)] = (5));
} else
{var statearr_11251_11270 = state_11245__$1;(statearr_11251_11270[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11246 === (6)))
{var inst_11228 = (state_11245[(7)]);var state_11245__$1 = state_11245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11245__$1,(11),to,inst_11228);
} else
{if((state_val_11246 === (3)))
{var inst_11243 = (state_11245[(2)]);var state_11245__$1 = state_11245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11245__$1,inst_11243);
} else
{if((state_val_11246 === (2)))
{var state_11245__$1 = state_11245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11245__$1,(4),from);
} else
{if((state_val_11246 === (11)))
{var inst_11238 = (state_11245[(2)]);var state_11245__$1 = (function (){var statearr_11252 = state_11245;(statearr_11252[(8)] = inst_11238);
return statearr_11252;
})();var statearr_11253_11271 = state_11245__$1;(statearr_11253_11271[(2)] = null);
(statearr_11253_11271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11246 === (9)))
{var state_11245__$1 = state_11245;var statearr_11254_11272 = state_11245__$1;(statearr_11254_11272[(2)] = null);
(statearr_11254_11272[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11246 === (5)))
{var state_11245__$1 = state_11245;if(cljs.core.truth_(close_QMARK_))
{var statearr_11255_11273 = state_11245__$1;(statearr_11255_11273[(1)] = (8));
} else
{var statearr_11256_11274 = state_11245__$1;(statearr_11256_11274[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11246 === (10)))
{var inst_11235 = (state_11245[(2)]);var state_11245__$1 = state_11245;var statearr_11257_11275 = state_11245__$1;(statearr_11257_11275[(2)] = inst_11235);
(statearr_11257_11275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11246 === (8)))
{var inst_11232 = cljs.core.async.close_BANG_.call(null,to);var state_11245__$1 = state_11245;var statearr_11258_11276 = state_11245__$1;(statearr_11258_11276[(2)] = inst_11232);
(statearr_11258_11276[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___11266))
;return ((function (switch__6612__auto__,c__6677__auto___11266){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11262 = [null,null,null,null,null,null,null,null,null];(statearr_11262[(0)] = state_machine__6613__auto__);
(statearr_11262[(1)] = (1));
return statearr_11262;
});
var state_machine__6613__auto____1 = (function (state_11245){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11245);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11263){if((e11263 instanceof Object))
{var ex__6616__auto__ = e11263;var statearr_11264_11277 = state_11245;(statearr_11264_11277[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11278 = state_11245;
state_11245 = G__11278;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11245){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___11266))
})();var state__6679__auto__ = (function (){var statearr_11265 = f__6678__auto__.call(null);(statearr_11265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___11266);
return statearr_11265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___11266))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
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
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6677__auto___11365 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___11365,tc,fc){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___11365,tc,fc){
return (function (state_11343){var state_val_11344 = (state_11343[(1)]);if((state_val_11344 === (7)))
{var inst_11339 = (state_11343[(2)]);var state_11343__$1 = state_11343;var statearr_11345_11366 = state_11343__$1;(statearr_11345_11366[(2)] = inst_11339);
(statearr_11345_11366[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11344 === (1)))
{var state_11343__$1 = state_11343;var statearr_11346_11367 = state_11343__$1;(statearr_11346_11367[(2)] = null);
(statearr_11346_11367[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11344 === (4)))
{var inst_11324 = (state_11343[(7)]);var inst_11324__$1 = (state_11343[(2)]);var inst_11325 = (inst_11324__$1 == null);var state_11343__$1 = (function (){var statearr_11347 = state_11343;(statearr_11347[(7)] = inst_11324__$1);
return statearr_11347;
})();if(cljs.core.truth_(inst_11325))
{var statearr_11348_11368 = state_11343__$1;(statearr_11348_11368[(1)] = (5));
} else
{var statearr_11349_11369 = state_11343__$1;(statearr_11349_11369[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11344 === (6)))
{var inst_11324 = (state_11343[(7)]);var inst_11330 = p.call(null,inst_11324);var state_11343__$1 = state_11343;if(cljs.core.truth_(inst_11330))
{var statearr_11350_11370 = state_11343__$1;(statearr_11350_11370[(1)] = (9));
} else
{var statearr_11351_11371 = state_11343__$1;(statearr_11351_11371[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11344 === (3)))
{var inst_11341 = (state_11343[(2)]);var state_11343__$1 = state_11343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11343__$1,inst_11341);
} else
{if((state_val_11344 === (2)))
{var state_11343__$1 = state_11343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11343__$1,(4),ch);
} else
{if((state_val_11344 === (11)))
{var inst_11324 = (state_11343[(7)]);var inst_11334 = (state_11343[(2)]);var state_11343__$1 = state_11343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11343__$1,(8),inst_11334,inst_11324);
} else
{if((state_val_11344 === (9)))
{var state_11343__$1 = state_11343;var statearr_11352_11372 = state_11343__$1;(statearr_11352_11372[(2)] = tc);
(statearr_11352_11372[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11344 === (5)))
{var inst_11327 = cljs.core.async.close_BANG_.call(null,tc);var inst_11328 = cljs.core.async.close_BANG_.call(null,fc);var state_11343__$1 = (function (){var statearr_11353 = state_11343;(statearr_11353[(8)] = inst_11327);
return statearr_11353;
})();var statearr_11354_11373 = state_11343__$1;(statearr_11354_11373[(2)] = inst_11328);
(statearr_11354_11373[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11344 === (10)))
{var state_11343__$1 = state_11343;var statearr_11355_11374 = state_11343__$1;(statearr_11355_11374[(2)] = fc);
(statearr_11355_11374[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11344 === (8)))
{var inst_11336 = (state_11343[(2)]);var state_11343__$1 = (function (){var statearr_11356 = state_11343;(statearr_11356[(9)] = inst_11336);
return statearr_11356;
})();var statearr_11357_11375 = state_11343__$1;(statearr_11357_11375[(2)] = null);
(statearr_11357_11375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___11365,tc,fc))
;return ((function (switch__6612__auto__,c__6677__auto___11365,tc,fc){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11361 = [null,null,null,null,null,null,null,null,null,null];(statearr_11361[(0)] = state_machine__6613__auto__);
(statearr_11361[(1)] = (1));
return statearr_11361;
});
var state_machine__6613__auto____1 = (function (state_11343){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11343);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11362){if((e11362 instanceof Object))
{var ex__6616__auto__ = e11362;var statearr_11363_11376 = state_11343;(statearr_11363_11376[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11377 = state_11343;
state_11343 = G__11377;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11343){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___11365,tc,fc))
})();var state__6679__auto__ = (function (){var statearr_11364 = f__6678__auto__.call(null);(statearr_11364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___11365);
return statearr_11364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___11365,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6677__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto__){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto__){
return (function (state_11424){var state_val_11425 = (state_11424[(1)]);if((state_val_11425 === (7)))
{var inst_11420 = (state_11424[(2)]);var state_11424__$1 = state_11424;var statearr_11426_11442 = state_11424__$1;(statearr_11426_11442[(2)] = inst_11420);
(statearr_11426_11442[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11425 === (6)))
{var inst_11413 = (state_11424[(7)]);var inst_11410 = (state_11424[(8)]);var inst_11417 = f.call(null,inst_11410,inst_11413);var inst_11410__$1 = inst_11417;var state_11424__$1 = (function (){var statearr_11427 = state_11424;(statearr_11427[(8)] = inst_11410__$1);
return statearr_11427;
})();var statearr_11428_11443 = state_11424__$1;(statearr_11428_11443[(2)] = null);
(statearr_11428_11443[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11425 === (5)))
{var inst_11410 = (state_11424[(8)]);var state_11424__$1 = state_11424;var statearr_11429_11444 = state_11424__$1;(statearr_11429_11444[(2)] = inst_11410);
(statearr_11429_11444[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11425 === (4)))
{var inst_11413 = (state_11424[(7)]);var inst_11413__$1 = (state_11424[(2)]);var inst_11414 = (inst_11413__$1 == null);var state_11424__$1 = (function (){var statearr_11430 = state_11424;(statearr_11430[(7)] = inst_11413__$1);
return statearr_11430;
})();if(cljs.core.truth_(inst_11414))
{var statearr_11431_11445 = state_11424__$1;(statearr_11431_11445[(1)] = (5));
} else
{var statearr_11432_11446 = state_11424__$1;(statearr_11432_11446[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11425 === (3)))
{var inst_11422 = (state_11424[(2)]);var state_11424__$1 = state_11424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11424__$1,inst_11422);
} else
{if((state_val_11425 === (2)))
{var state_11424__$1 = state_11424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11424__$1,(4),ch);
} else
{if((state_val_11425 === (1)))
{var inst_11410 = init;var state_11424__$1 = (function (){var statearr_11433 = state_11424;(statearr_11433[(8)] = inst_11410);
return statearr_11433;
})();var statearr_11434_11447 = state_11424__$1;(statearr_11434_11447[(2)] = null);
(statearr_11434_11447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6677__auto__))
;return ((function (switch__6612__auto__,c__6677__auto__){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11438 = [null,null,null,null,null,null,null,null,null];(statearr_11438[(0)] = state_machine__6613__auto__);
(statearr_11438[(1)] = (1));
return statearr_11438;
});
var state_machine__6613__auto____1 = (function (state_11424){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11439){if((e11439 instanceof Object))
{var ex__6616__auto__ = e11439;var statearr_11440_11448 = state_11424;(statearr_11440_11448[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11449 = state_11424;
state_11424 = G__11449;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11424){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_11441 = f__6678__auto__.call(null);(statearr_11441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_11441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto__))
);
return c__6677__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6677__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto__){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto__){
return (function (state_11511){var state_val_11512 = (state_11511[(1)]);if((state_val_11512 === (7)))
{var inst_11492 = (state_11511[(7)]);var inst_11497 = (state_11511[(2)]);var inst_11498 = cljs.core.next.call(null,inst_11492);var inst_11492__$1 = inst_11498;var state_11511__$1 = (function (){var statearr_11513 = state_11511;(statearr_11513[(7)] = inst_11492__$1);
(statearr_11513[(8)] = inst_11497);
return statearr_11513;
})();var statearr_11514_11532 = state_11511__$1;(statearr_11514_11532[(2)] = null);
(statearr_11514_11532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11512 === (1)))
{var inst_11491 = cljs.core.seq.call(null,coll);var inst_11492 = inst_11491;var state_11511__$1 = (function (){var statearr_11515 = state_11511;(statearr_11515[(7)] = inst_11492);
return statearr_11515;
})();var statearr_11516_11533 = state_11511__$1;(statearr_11516_11533[(2)] = null);
(statearr_11516_11533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11512 === (4)))
{var inst_11492 = (state_11511[(7)]);var inst_11495 = cljs.core.first.call(null,inst_11492);var state_11511__$1 = state_11511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11511__$1,(7),ch,inst_11495);
} else
{if((state_val_11512 === (6)))
{var inst_11507 = (state_11511[(2)]);var state_11511__$1 = state_11511;var statearr_11517_11534 = state_11511__$1;(statearr_11517_11534[(2)] = inst_11507);
(statearr_11517_11534[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11512 === (3)))
{var inst_11509 = (state_11511[(2)]);var state_11511__$1 = state_11511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11511__$1,inst_11509);
} else
{if((state_val_11512 === (2)))
{var inst_11492 = (state_11511[(7)]);var state_11511__$1 = state_11511;if(cljs.core.truth_(inst_11492))
{var statearr_11518_11535 = state_11511__$1;(statearr_11518_11535[(1)] = (4));
} else
{var statearr_11519_11536 = state_11511__$1;(statearr_11519_11536[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11512 === (9)))
{var state_11511__$1 = state_11511;var statearr_11520_11537 = state_11511__$1;(statearr_11520_11537[(2)] = null);
(statearr_11520_11537[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11512 === (5)))
{var state_11511__$1 = state_11511;if(cljs.core.truth_(close_QMARK_))
{var statearr_11521_11538 = state_11511__$1;(statearr_11521_11538[(1)] = (8));
} else
{var statearr_11522_11539 = state_11511__$1;(statearr_11522_11539[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11512 === (10)))
{var inst_11505 = (state_11511[(2)]);var state_11511__$1 = state_11511;var statearr_11523_11540 = state_11511__$1;(statearr_11523_11540[(2)] = inst_11505);
(statearr_11523_11540[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11512 === (8)))
{var inst_11502 = cljs.core.async.close_BANG_.call(null,ch);var state_11511__$1 = state_11511;var statearr_11524_11541 = state_11511__$1;(statearr_11524_11541[(2)] = inst_11502);
(statearr_11524_11541[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto__))
;return ((function (switch__6612__auto__,c__6677__auto__){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11528 = [null,null,null,null,null,null,null,null,null];(statearr_11528[(0)] = state_machine__6613__auto__);
(statearr_11528[(1)] = (1));
return statearr_11528;
});
var state_machine__6613__auto____1 = (function (state_11511){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11529){if((e11529 instanceof Object))
{var ex__6616__auto__ = e11529;var statearr_11530_11542 = state_11511;(statearr_11530_11542[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11543 = state_11511;
state_11511 = G__11543;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11511){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_11531 = f__6678__auto__.call(null);(statearr_11531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_11531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto__))
);
return c__6677__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11545 = {};return obj11545;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3532__auto__ = _;if(and__3532__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4171__auto__ = (((_ == null))?null:_);return (function (){var or__3544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11547 = {};return obj11547;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11771 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11771 = (function (cs,ch,mult,meta11772){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11772 = meta11772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11771.cljs$lang$type = true;
cljs.core.async.t11771.cljs$lang$ctorStr = "cljs.core.async/t11771";
cljs.core.async.t11771.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11771");
});})(cs))
;
cljs.core.async.t11771.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11771.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11771.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11771.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11771.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11773){var self__ = this;
var _11773__$1 = this;return self__.meta11772;
});})(cs))
;
cljs.core.async.t11771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11773,meta11772__$1){var self__ = this;
var _11773__$1 = this;return (new cljs.core.async.t11771(self__.cs,self__.ch,self__.mult,meta11772__$1));
});})(cs))
;
cljs.core.async.__GT_t11771 = ((function (cs){
return (function __GT_t11771(cs__$1,ch__$1,mult__$1,meta11772){return (new cljs.core.async.t11771(cs__$1,ch__$1,mult__$1,meta11772));
});})(cs))
;
}
return (new cljs.core.async.t11771(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6677__auto___11994 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___11994,cs,m,dchan,dctr,done){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___11994,cs,m,dchan,dctr,done){
return (function (state_11908){var state_val_11909 = (state_11908[(1)]);if((state_val_11909 === (7)))
{var inst_11904 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11910_11995 = state_11908__$1;(statearr_11910_11995[(2)] = inst_11904);
(statearr_11910_11995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (20)))
{var inst_11805 = (state_11908[(7)]);var inst_11815 = cljs.core.first.call(null,inst_11805);var inst_11816 = cljs.core.nth.call(null,inst_11815,(0),null);var inst_11817 = cljs.core.nth.call(null,inst_11815,(1),null);var state_11908__$1 = (function (){var statearr_11911 = state_11908;(statearr_11911[(8)] = inst_11816);
return statearr_11911;
})();if(cljs.core.truth_(inst_11817))
{var statearr_11912_11996 = state_11908__$1;(statearr_11912_11996[(1)] = (22));
} else
{var statearr_11913_11997 = state_11908__$1;(statearr_11913_11997[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (27)))
{var inst_11845 = (state_11908[(9)]);var inst_11847 = (state_11908[(10)]);var inst_11852 = cljs.core._nth.call(null,inst_11845,inst_11847);var state_11908__$1 = (function (){var statearr_11914 = state_11908;(statearr_11914[(11)] = inst_11852);
return statearr_11914;
})();var statearr_11915_11998 = state_11908__$1;(statearr_11915_11998[(2)] = null);
(statearr_11915_11998[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (1)))
{var state_11908__$1 = state_11908;var statearr_11916_11999 = state_11908__$1;(statearr_11916_11999[(2)] = null);
(statearr_11916_11999[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (24)))
{var inst_11805 = (state_11908[(7)]);var inst_11822 = (state_11908[(2)]);var inst_11823 = cljs.core.next.call(null,inst_11805);var inst_11785 = inst_11823;var inst_11786 = null;var inst_11787 = (0);var inst_11788 = (0);var state_11908__$1 = (function (){var statearr_11917 = state_11908;(statearr_11917[(12)] = inst_11788);
(statearr_11917[(13)] = inst_11785);
(statearr_11917[(14)] = inst_11822);
(statearr_11917[(15)] = inst_11787);
(statearr_11917[(16)] = inst_11786);
return statearr_11917;
})();var statearr_11918_12000 = state_11908__$1;(statearr_11918_12000[(2)] = null);
(statearr_11918_12000[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (39)))
{var inst_11865 = (state_11908[(17)]);var inst_11883 = (state_11908[(2)]);var inst_11884 = cljs.core.next.call(null,inst_11865);var inst_11844 = inst_11884;var inst_11845 = null;var inst_11846 = (0);var inst_11847 = (0);var state_11908__$1 = (function (){var statearr_11922 = state_11908;(statearr_11922[(9)] = inst_11845);
(statearr_11922[(18)] = inst_11844);
(statearr_11922[(10)] = inst_11847);
(statearr_11922[(19)] = inst_11846);
(statearr_11922[(20)] = inst_11883);
return statearr_11922;
})();var statearr_11923_12001 = state_11908__$1;(statearr_11923_12001[(2)] = null);
(statearr_11923_12001[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (4)))
{var inst_11776 = (state_11908[(21)]);var inst_11776__$1 = (state_11908[(2)]);var inst_11777 = (inst_11776__$1 == null);var state_11908__$1 = (function (){var statearr_11924 = state_11908;(statearr_11924[(21)] = inst_11776__$1);
return statearr_11924;
})();if(cljs.core.truth_(inst_11777))
{var statearr_11925_12002 = state_11908__$1;(statearr_11925_12002[(1)] = (5));
} else
{var statearr_11926_12003 = state_11908__$1;(statearr_11926_12003[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (15)))
{var inst_11788 = (state_11908[(12)]);var inst_11785 = (state_11908[(13)]);var inst_11787 = (state_11908[(15)]);var inst_11786 = (state_11908[(16)]);var inst_11801 = (state_11908[(2)]);var inst_11802 = (inst_11788 + (1));var tmp11919 = inst_11785;var tmp11920 = inst_11787;var tmp11921 = inst_11786;var inst_11785__$1 = tmp11919;var inst_11786__$1 = tmp11921;var inst_11787__$1 = tmp11920;var inst_11788__$1 = inst_11802;var state_11908__$1 = (function (){var statearr_11927 = state_11908;(statearr_11927[(12)] = inst_11788__$1);
(statearr_11927[(13)] = inst_11785__$1);
(statearr_11927[(22)] = inst_11801);
(statearr_11927[(15)] = inst_11787__$1);
(statearr_11927[(16)] = inst_11786__$1);
return statearr_11927;
})();var statearr_11928_12004 = state_11908__$1;(statearr_11928_12004[(2)] = null);
(statearr_11928_12004[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (21)))
{var inst_11826 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11929_12005 = state_11908__$1;(statearr_11929_12005[(2)] = inst_11826);
(statearr_11929_12005[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (31)))
{var inst_11852 = (state_11908[(11)]);var inst_11853 = (state_11908[(2)]);var inst_11854 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11855 = cljs.core.async.untap_STAR_.call(null,m,inst_11852);var state_11908__$1 = (function (){var statearr_11930 = state_11908;(statearr_11930[(23)] = inst_11853);
(statearr_11930[(24)] = inst_11854);
return statearr_11930;
})();var statearr_11931_12006 = state_11908__$1;(statearr_11931_12006[(2)] = inst_11855);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (32)))
{var inst_11852 = (state_11908[(11)]);var inst_11776 = (state_11908[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11908,(31),Object,null,(30));var inst_11859 = cljs.core.async.put_BANG_.call(null,inst_11852,inst_11776,done);var state_11908__$1 = state_11908;var statearr_11932_12007 = state_11908__$1;(statearr_11932_12007[(2)] = inst_11859);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (40)))
{var inst_11874 = (state_11908[(25)]);var inst_11875 = (state_11908[(2)]);var inst_11876 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11877 = cljs.core.async.untap_STAR_.call(null,m,inst_11874);var state_11908__$1 = (function (){var statearr_11933 = state_11908;(statearr_11933[(26)] = inst_11875);
(statearr_11933[(27)] = inst_11876);
return statearr_11933;
})();var statearr_11934_12008 = state_11908__$1;(statearr_11934_12008[(2)] = inst_11877);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (33)))
{var inst_11865 = (state_11908[(17)]);var inst_11867 = cljs.core.chunked_seq_QMARK_.call(null,inst_11865);var state_11908__$1 = state_11908;if(inst_11867)
{var statearr_11935_12009 = state_11908__$1;(statearr_11935_12009[(1)] = (36));
} else
{var statearr_11936_12010 = state_11908__$1;(statearr_11936_12010[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (13)))
{var inst_11795 = (state_11908[(28)]);var inst_11798 = cljs.core.async.close_BANG_.call(null,inst_11795);var state_11908__$1 = state_11908;var statearr_11937_12011 = state_11908__$1;(statearr_11937_12011[(2)] = inst_11798);
(statearr_11937_12011[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (22)))
{var inst_11816 = (state_11908[(8)]);var inst_11819 = cljs.core.async.close_BANG_.call(null,inst_11816);var state_11908__$1 = state_11908;var statearr_11938_12012 = state_11908__$1;(statearr_11938_12012[(2)] = inst_11819);
(statearr_11938_12012[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (36)))
{var inst_11865 = (state_11908[(17)]);var inst_11869 = cljs.core.chunk_first.call(null,inst_11865);var inst_11870 = cljs.core.chunk_rest.call(null,inst_11865);var inst_11871 = cljs.core.count.call(null,inst_11869);var inst_11844 = inst_11870;var inst_11845 = inst_11869;var inst_11846 = inst_11871;var inst_11847 = (0);var state_11908__$1 = (function (){var statearr_11939 = state_11908;(statearr_11939[(9)] = inst_11845);
(statearr_11939[(18)] = inst_11844);
(statearr_11939[(10)] = inst_11847);
(statearr_11939[(19)] = inst_11846);
return statearr_11939;
})();var statearr_11940_12013 = state_11908__$1;(statearr_11940_12013[(2)] = null);
(statearr_11940_12013[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (41)))
{var inst_11874 = (state_11908[(25)]);var inst_11776 = (state_11908[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11908,(40),Object,null,(39));var inst_11881 = cljs.core.async.put_BANG_.call(null,inst_11874,inst_11776,done);var state_11908__$1 = state_11908;var statearr_11941_12014 = state_11908__$1;(statearr_11941_12014[(2)] = inst_11881);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (43)))
{var state_11908__$1 = state_11908;var statearr_11942_12015 = state_11908__$1;(statearr_11942_12015[(2)] = null);
(statearr_11942_12015[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (29)))
{var inst_11892 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11943_12016 = state_11908__$1;(statearr_11943_12016[(2)] = inst_11892);
(statearr_11943_12016[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (44)))
{var inst_11901 = (state_11908[(2)]);var state_11908__$1 = (function (){var statearr_11944 = state_11908;(statearr_11944[(29)] = inst_11901);
return statearr_11944;
})();var statearr_11945_12017 = state_11908__$1;(statearr_11945_12017[(2)] = null);
(statearr_11945_12017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (6)))
{var inst_11836 = (state_11908[(30)]);var inst_11835 = cljs.core.deref.call(null,cs);var inst_11836__$1 = cljs.core.keys.call(null,inst_11835);var inst_11837 = cljs.core.count.call(null,inst_11836__$1);var inst_11838 = cljs.core.reset_BANG_.call(null,dctr,inst_11837);var inst_11843 = cljs.core.seq.call(null,inst_11836__$1);var inst_11844 = inst_11843;var inst_11845 = null;var inst_11846 = (0);var inst_11847 = (0);var state_11908__$1 = (function (){var statearr_11946 = state_11908;(statearr_11946[(9)] = inst_11845);
(statearr_11946[(18)] = inst_11844);
(statearr_11946[(10)] = inst_11847);
(statearr_11946[(19)] = inst_11846);
(statearr_11946[(30)] = inst_11836__$1);
(statearr_11946[(31)] = inst_11838);
return statearr_11946;
})();var statearr_11947_12018 = state_11908__$1;(statearr_11947_12018[(2)] = null);
(statearr_11947_12018[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (28)))
{var inst_11844 = (state_11908[(18)]);var inst_11865 = (state_11908[(17)]);var inst_11865__$1 = cljs.core.seq.call(null,inst_11844);var state_11908__$1 = (function (){var statearr_11948 = state_11908;(statearr_11948[(17)] = inst_11865__$1);
return statearr_11948;
})();if(inst_11865__$1)
{var statearr_11949_12019 = state_11908__$1;(statearr_11949_12019[(1)] = (33));
} else
{var statearr_11950_12020 = state_11908__$1;(statearr_11950_12020[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (25)))
{var inst_11847 = (state_11908[(10)]);var inst_11846 = (state_11908[(19)]);var inst_11849 = (inst_11847 < inst_11846);var inst_11850 = inst_11849;var state_11908__$1 = state_11908;if(cljs.core.truth_(inst_11850))
{var statearr_11951_12021 = state_11908__$1;(statearr_11951_12021[(1)] = (27));
} else
{var statearr_11952_12022 = state_11908__$1;(statearr_11952_12022[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (34)))
{var state_11908__$1 = state_11908;var statearr_11953_12023 = state_11908__$1;(statearr_11953_12023[(2)] = null);
(statearr_11953_12023[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (17)))
{var state_11908__$1 = state_11908;var statearr_11954_12024 = state_11908__$1;(statearr_11954_12024[(2)] = null);
(statearr_11954_12024[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (3)))
{var inst_11906 = (state_11908[(2)]);var state_11908__$1 = state_11908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11908__$1,inst_11906);
} else
{if((state_val_11909 === (12)))
{var inst_11831 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11955_12025 = state_11908__$1;(statearr_11955_12025[(2)] = inst_11831);
(statearr_11955_12025[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (2)))
{var state_11908__$1 = state_11908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11908__$1,(4),ch);
} else
{if((state_val_11909 === (23)))
{var state_11908__$1 = state_11908;var statearr_11956_12026 = state_11908__$1;(statearr_11956_12026[(2)] = null);
(statearr_11956_12026[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (35)))
{var inst_11890 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11957_12027 = state_11908__$1;(statearr_11957_12027[(2)] = inst_11890);
(statearr_11957_12027[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (19)))
{var inst_11805 = (state_11908[(7)]);var inst_11809 = cljs.core.chunk_first.call(null,inst_11805);var inst_11810 = cljs.core.chunk_rest.call(null,inst_11805);var inst_11811 = cljs.core.count.call(null,inst_11809);var inst_11785 = inst_11810;var inst_11786 = inst_11809;var inst_11787 = inst_11811;var inst_11788 = (0);var state_11908__$1 = (function (){var statearr_11958 = state_11908;(statearr_11958[(12)] = inst_11788);
(statearr_11958[(13)] = inst_11785);
(statearr_11958[(15)] = inst_11787);
(statearr_11958[(16)] = inst_11786);
return statearr_11958;
})();var statearr_11959_12028 = state_11908__$1;(statearr_11959_12028[(2)] = null);
(statearr_11959_12028[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (11)))
{var inst_11785 = (state_11908[(13)]);var inst_11805 = (state_11908[(7)]);var inst_11805__$1 = cljs.core.seq.call(null,inst_11785);var state_11908__$1 = (function (){var statearr_11960 = state_11908;(statearr_11960[(7)] = inst_11805__$1);
return statearr_11960;
})();if(inst_11805__$1)
{var statearr_11961_12029 = state_11908__$1;(statearr_11961_12029[(1)] = (16));
} else
{var statearr_11962_12030 = state_11908__$1;(statearr_11962_12030[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (9)))
{var inst_11833 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11963_12031 = state_11908__$1;(statearr_11963_12031[(2)] = inst_11833);
(statearr_11963_12031[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (5)))
{var inst_11783 = cljs.core.deref.call(null,cs);var inst_11784 = cljs.core.seq.call(null,inst_11783);var inst_11785 = inst_11784;var inst_11786 = null;var inst_11787 = (0);var inst_11788 = (0);var state_11908__$1 = (function (){var statearr_11964 = state_11908;(statearr_11964[(12)] = inst_11788);
(statearr_11964[(13)] = inst_11785);
(statearr_11964[(15)] = inst_11787);
(statearr_11964[(16)] = inst_11786);
return statearr_11964;
})();var statearr_11965_12032 = state_11908__$1;(statearr_11965_12032[(2)] = null);
(statearr_11965_12032[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (14)))
{var state_11908__$1 = state_11908;var statearr_11966_12033 = state_11908__$1;(statearr_11966_12033[(2)] = null);
(statearr_11966_12033[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (45)))
{var inst_11898 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11967_12034 = state_11908__$1;(statearr_11967_12034[(2)] = inst_11898);
(statearr_11967_12034[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (26)))
{var inst_11836 = (state_11908[(30)]);var inst_11894 = (state_11908[(2)]);var inst_11895 = cljs.core.seq.call(null,inst_11836);var state_11908__$1 = (function (){var statearr_11968 = state_11908;(statearr_11968[(32)] = inst_11894);
return statearr_11968;
})();if(inst_11895)
{var statearr_11969_12035 = state_11908__$1;(statearr_11969_12035[(1)] = (42));
} else
{var statearr_11970_12036 = state_11908__$1;(statearr_11970_12036[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (16)))
{var inst_11805 = (state_11908[(7)]);var inst_11807 = cljs.core.chunked_seq_QMARK_.call(null,inst_11805);var state_11908__$1 = state_11908;if(inst_11807)
{var statearr_11974_12037 = state_11908__$1;(statearr_11974_12037[(1)] = (19));
} else
{var statearr_11975_12038 = state_11908__$1;(statearr_11975_12038[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (38)))
{var inst_11887 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11976_12039 = state_11908__$1;(statearr_11976_12039[(2)] = inst_11887);
(statearr_11976_12039[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (30)))
{var inst_11845 = (state_11908[(9)]);var inst_11844 = (state_11908[(18)]);var inst_11847 = (state_11908[(10)]);var inst_11846 = (state_11908[(19)]);var inst_11861 = (state_11908[(2)]);var inst_11862 = (inst_11847 + (1));var tmp11971 = inst_11845;var tmp11972 = inst_11844;var tmp11973 = inst_11846;var inst_11844__$1 = tmp11972;var inst_11845__$1 = tmp11971;var inst_11846__$1 = tmp11973;var inst_11847__$1 = inst_11862;var state_11908__$1 = (function (){var statearr_11977 = state_11908;(statearr_11977[(9)] = inst_11845__$1);
(statearr_11977[(18)] = inst_11844__$1);
(statearr_11977[(33)] = inst_11861);
(statearr_11977[(10)] = inst_11847__$1);
(statearr_11977[(19)] = inst_11846__$1);
return statearr_11977;
})();var statearr_11978_12040 = state_11908__$1;(statearr_11978_12040[(2)] = null);
(statearr_11978_12040[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (10)))
{var inst_11788 = (state_11908[(12)]);var inst_11786 = (state_11908[(16)]);var inst_11794 = cljs.core._nth.call(null,inst_11786,inst_11788);var inst_11795 = cljs.core.nth.call(null,inst_11794,(0),null);var inst_11796 = cljs.core.nth.call(null,inst_11794,(1),null);var state_11908__$1 = (function (){var statearr_11979 = state_11908;(statearr_11979[(28)] = inst_11795);
return statearr_11979;
})();if(cljs.core.truth_(inst_11796))
{var statearr_11980_12041 = state_11908__$1;(statearr_11980_12041[(1)] = (13));
} else
{var statearr_11981_12042 = state_11908__$1;(statearr_11981_12042[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (18)))
{var inst_11829 = (state_11908[(2)]);var state_11908__$1 = state_11908;var statearr_11982_12043 = state_11908__$1;(statearr_11982_12043[(2)] = inst_11829);
(statearr_11982_12043[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (42)))
{var state_11908__$1 = state_11908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11908__$1,(45),dchan);
} else
{if((state_val_11909 === (37)))
{var inst_11865 = (state_11908[(17)]);var inst_11874 = cljs.core.first.call(null,inst_11865);var state_11908__$1 = (function (){var statearr_11983 = state_11908;(statearr_11983[(25)] = inst_11874);
return statearr_11983;
})();var statearr_11984_12044 = state_11908__$1;(statearr_11984_12044[(2)] = null);
(statearr_11984_12044[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11909 === (8)))
{var inst_11788 = (state_11908[(12)]);var inst_11787 = (state_11908[(15)]);var inst_11790 = (inst_11788 < inst_11787);var inst_11791 = inst_11790;var state_11908__$1 = state_11908;if(cljs.core.truth_(inst_11791))
{var statearr_11985_12045 = state_11908__$1;(statearr_11985_12045[(1)] = (10));
} else
{var statearr_11986_12046 = state_11908__$1;(statearr_11986_12046[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___11994,cs,m,dchan,dctr,done))
;return ((function (switch__6612__auto__,c__6677__auto___11994,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11990[(0)] = state_machine__6613__auto__);
(statearr_11990[(1)] = (1));
return statearr_11990;
});
var state_machine__6613__auto____1 = (function (state_11908){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11908);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11991){if((e11991 instanceof Object))
{var ex__6616__auto__ = e11991;var statearr_11992_12047 = state_11908;(statearr_11992_12047[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12048 = state_11908;
state_11908 = G__12048;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11908){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___11994,cs,m,dchan,dctr,done))
})();var state__6679__auto__ = (function (){var statearr_11993 = f__6678__auto__.call(null);(statearr_11993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___11994);
return statearr_11993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___11994,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12050 = {};return obj12050;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12160 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12161){
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
this.meta12161 = meta12161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12160.cljs$lang$type = true;
cljs.core.async.t12160.cljs$lang$ctorStr = "cljs.core.async/t12160";
cljs.core.async.t12160.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12160");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12160.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12162){var self__ = this;
var _12162__$1 = this;return self__.meta12161;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12162,meta12161__$1){var self__ = this;
var _12162__$1 = this;return (new cljs.core.async.t12160(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12161__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12160 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12160(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12161){return (new cljs.core.async.t12160(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12161));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12160(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6677__auto___12269 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___12269,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___12269,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12227){var state_val_12228 = (state_12227[(1)]);if((state_val_12228 === (7)))
{var inst_12176 = (state_12227[(7)]);var inst_12181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12176);var state_12227__$1 = state_12227;var statearr_12229_12270 = state_12227__$1;(statearr_12229_12270[(2)] = inst_12181);
(statearr_12229_12270[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (20)))
{var inst_12191 = (state_12227[(8)]);var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12227__$1,(23),out,inst_12191);
} else
{if((state_val_12228 === (1)))
{var inst_12166 = (state_12227[(9)]);var inst_12166__$1 = calc_state.call(null);var inst_12167 = cljs.core.seq_QMARK_.call(null,inst_12166__$1);var state_12227__$1 = (function (){var statearr_12230 = state_12227;(statearr_12230[(9)] = inst_12166__$1);
return statearr_12230;
})();if(inst_12167)
{var statearr_12231_12271 = state_12227__$1;(statearr_12231_12271[(1)] = (2));
} else
{var statearr_12232_12272 = state_12227__$1;(statearr_12232_12272[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (4)))
{var inst_12166 = (state_12227[(9)]);var inst_12172 = (state_12227[(2)]);var inst_12173 = cljs.core.get.call(null,inst_12172,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12174 = cljs.core.get.call(null,inst_12172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12175 = cljs.core.get.call(null,inst_12172,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12176 = inst_12166;var state_12227__$1 = (function (){var statearr_12233 = state_12227;(statearr_12233[(10)] = inst_12173);
(statearr_12233[(11)] = inst_12174);
(statearr_12233[(12)] = inst_12175);
(statearr_12233[(7)] = inst_12176);
return statearr_12233;
})();var statearr_12234_12273 = state_12227__$1;(statearr_12234_12273[(2)] = null);
(statearr_12234_12273[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (15)))
{var state_12227__$1 = state_12227;var statearr_12235_12274 = state_12227__$1;(statearr_12235_12274[(2)] = null);
(statearr_12235_12274[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (21)))
{var state_12227__$1 = state_12227;var statearr_12236_12275 = state_12227__$1;(statearr_12236_12275[(2)] = null);
(statearr_12236_12275[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (13)))
{var inst_12223 = (state_12227[(2)]);var state_12227__$1 = state_12227;var statearr_12237_12276 = state_12227__$1;(statearr_12237_12276[(2)] = inst_12223);
(statearr_12237_12276[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (22)))
{var inst_12184 = (state_12227[(13)]);var inst_12220 = (state_12227[(2)]);var inst_12176 = inst_12184;var state_12227__$1 = (function (){var statearr_12238 = state_12227;(statearr_12238[(14)] = inst_12220);
(statearr_12238[(7)] = inst_12176);
return statearr_12238;
})();var statearr_12239_12277 = state_12227__$1;(statearr_12239_12277[(2)] = null);
(statearr_12239_12277[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (6)))
{var inst_12225 = (state_12227[(2)]);var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12227__$1,inst_12225);
} else
{if((state_val_12228 === (17)))
{var inst_12206 = (state_12227[(15)]);var state_12227__$1 = state_12227;var statearr_12240_12278 = state_12227__$1;(statearr_12240_12278[(2)] = inst_12206);
(statearr_12240_12278[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (3)))
{var inst_12166 = (state_12227[(9)]);var state_12227__$1 = state_12227;var statearr_12241_12279 = state_12227__$1;(statearr_12241_12279[(2)] = inst_12166);
(statearr_12241_12279[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (12)))
{var inst_12192 = (state_12227[(16)]);var inst_12187 = (state_12227[(17)]);var inst_12206 = (state_12227[(15)]);var inst_12206__$1 = inst_12187.call(null,inst_12192);var state_12227__$1 = (function (){var statearr_12242 = state_12227;(statearr_12242[(15)] = inst_12206__$1);
return statearr_12242;
})();if(cljs.core.truth_(inst_12206__$1))
{var statearr_12243_12280 = state_12227__$1;(statearr_12243_12280[(1)] = (17));
} else
{var statearr_12244_12281 = state_12227__$1;(statearr_12244_12281[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (2)))
{var inst_12166 = (state_12227[(9)]);var inst_12169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12166);var state_12227__$1 = state_12227;var statearr_12245_12282 = state_12227__$1;(statearr_12245_12282[(2)] = inst_12169);
(statearr_12245_12282[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (23)))
{var inst_12217 = (state_12227[(2)]);var state_12227__$1 = state_12227;var statearr_12246_12283 = state_12227__$1;(statearr_12246_12283[(2)] = inst_12217);
(statearr_12246_12283[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (19)))
{var inst_12214 = (state_12227[(2)]);var state_12227__$1 = state_12227;if(cljs.core.truth_(inst_12214))
{var statearr_12247_12284 = state_12227__$1;(statearr_12247_12284[(1)] = (20));
} else
{var statearr_12248_12285 = state_12227__$1;(statearr_12248_12285[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (11)))
{var inst_12191 = (state_12227[(8)]);var inst_12197 = (inst_12191 == null);var state_12227__$1 = state_12227;if(cljs.core.truth_(inst_12197))
{var statearr_12249_12286 = state_12227__$1;(statearr_12249_12286[(1)] = (14));
} else
{var statearr_12250_12287 = state_12227__$1;(statearr_12250_12287[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (9)))
{var inst_12184 = (state_12227[(13)]);var inst_12184__$1 = (state_12227[(2)]);var inst_12185 = cljs.core.get.call(null,inst_12184__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12186 = cljs.core.get.call(null,inst_12184__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12187 = cljs.core.get.call(null,inst_12184__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12227__$1 = (function (){var statearr_12251 = state_12227;(statearr_12251[(18)] = inst_12186);
(statearr_12251[(17)] = inst_12187);
(statearr_12251[(13)] = inst_12184__$1);
return statearr_12251;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12227__$1,(10),inst_12185);
} else
{if((state_val_12228 === (5)))
{var inst_12176 = (state_12227[(7)]);var inst_12179 = cljs.core.seq_QMARK_.call(null,inst_12176);var state_12227__$1 = state_12227;if(inst_12179)
{var statearr_12252_12288 = state_12227__$1;(statearr_12252_12288[(1)] = (7));
} else
{var statearr_12253_12289 = state_12227__$1;(statearr_12253_12289[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (14)))
{var inst_12192 = (state_12227[(16)]);var inst_12199 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12192);var state_12227__$1 = state_12227;var statearr_12254_12290 = state_12227__$1;(statearr_12254_12290[(2)] = inst_12199);
(statearr_12254_12290[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (16)))
{var inst_12202 = (state_12227[(2)]);var inst_12203 = calc_state.call(null);var inst_12176 = inst_12203;var state_12227__$1 = (function (){var statearr_12255 = state_12227;(statearr_12255[(19)] = inst_12202);
(statearr_12255[(7)] = inst_12176);
return statearr_12255;
})();var statearr_12256_12291 = state_12227__$1;(statearr_12256_12291[(2)] = null);
(statearr_12256_12291[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (10)))
{var inst_12192 = (state_12227[(16)]);var inst_12191 = (state_12227[(8)]);var inst_12190 = (state_12227[(2)]);var inst_12191__$1 = cljs.core.nth.call(null,inst_12190,(0),null);var inst_12192__$1 = cljs.core.nth.call(null,inst_12190,(1),null);var inst_12193 = (inst_12191__$1 == null);var inst_12194 = cljs.core._EQ_.call(null,inst_12192__$1,change);var inst_12195 = (inst_12193) || (inst_12194);var state_12227__$1 = (function (){var statearr_12257 = state_12227;(statearr_12257[(16)] = inst_12192__$1);
(statearr_12257[(8)] = inst_12191__$1);
return statearr_12257;
})();if(cljs.core.truth_(inst_12195))
{var statearr_12258_12292 = state_12227__$1;(statearr_12258_12292[(1)] = (11));
} else
{var statearr_12259_12293 = state_12227__$1;(statearr_12259_12293[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (18)))
{var inst_12186 = (state_12227[(18)]);var inst_12192 = (state_12227[(16)]);var inst_12187 = (state_12227[(17)]);var inst_12209 = cljs.core.empty_QMARK_.call(null,inst_12187);var inst_12210 = inst_12186.call(null,inst_12192);var inst_12211 = cljs.core.not.call(null,inst_12210);var inst_12212 = (inst_12209) && (inst_12211);var state_12227__$1 = state_12227;var statearr_12260_12294 = state_12227__$1;(statearr_12260_12294[(2)] = inst_12212);
(statearr_12260_12294[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (8)))
{var inst_12176 = (state_12227[(7)]);var state_12227__$1 = state_12227;var statearr_12261_12295 = state_12227__$1;(statearr_12261_12295[(2)] = inst_12176);
(statearr_12261_12295[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___12269,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6612__auto__,c__6677__auto___12269,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_12265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12265[(0)] = state_machine__6613__auto__);
(statearr_12265[(1)] = (1));
return statearr_12265;
});
var state_machine__6613__auto____1 = (function (state_12227){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12227);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12266){if((e12266 instanceof Object))
{var ex__6616__auto__ = e12266;var statearr_12267_12296 = state_12227;(statearr_12267_12296[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12227);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12297 = state_12227;
state_12227 = G__12297;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12227){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___12269,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6679__auto__ = (function (){var statearr_12268 = f__6678__auto__.call(null);(statearr_12268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___12269);
return statearr_12268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___12269,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12299 = {};return obj12299;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
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
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3544__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3544__auto__,mults){
return (function (p1__12300_SHARP_){if(cljs.core.truth_(p1__12300_SHARP_.call(null,topic)))
{return p1__12300_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12300_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3544__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12425 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12426){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12426 = meta12426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12425.cljs$lang$type = true;
cljs.core.async.t12425.cljs$lang$ctorStr = "cljs.core.async/t12425";
cljs.core.async.t12425.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12425");
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12427){var self__ = this;
var _12427__$1 = this;return self__.meta12426;
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12427,meta12426__$1){var self__ = this;
var _12427__$1 = this;return (new cljs.core.async.t12425(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12426__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12425 = ((function (mults,ensure_mult){
return (function __GT_t12425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12426){return (new cljs.core.async.t12425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12426));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12425(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6677__auto___12549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___12549,mults,ensure_mult,p){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___12549,mults,ensure_mult,p){
return (function (state_12501){var state_val_12502 = (state_12501[(1)]);if((state_val_12502 === (7)))
{var inst_12497 = (state_12501[(2)]);var state_12501__$1 = state_12501;var statearr_12503_12550 = state_12501__$1;(statearr_12503_12550[(2)] = inst_12497);
(statearr_12503_12550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (20)))
{var state_12501__$1 = state_12501;var statearr_12504_12551 = state_12501__$1;(statearr_12504_12551[(2)] = null);
(statearr_12504_12551[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (1)))
{var state_12501__$1 = state_12501;var statearr_12505_12552 = state_12501__$1;(statearr_12505_12552[(2)] = null);
(statearr_12505_12552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (24)))
{var inst_12430 = (state_12501[(7)]);var inst_12480 = (state_12501[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12501,(23),Object,null,(22));var inst_12487 = cljs.core.async.muxch_STAR_.call(null,inst_12480);var state_12501__$1 = state_12501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12501__$1,(25),inst_12487,inst_12430);
} else
{if((state_val_12502 === (4)))
{var inst_12430 = (state_12501[(7)]);var inst_12430__$1 = (state_12501[(2)]);var inst_12431 = (inst_12430__$1 == null);var state_12501__$1 = (function (){var statearr_12506 = state_12501;(statearr_12506[(7)] = inst_12430__$1);
return statearr_12506;
})();if(cljs.core.truth_(inst_12431))
{var statearr_12507_12553 = state_12501__$1;(statearr_12507_12553[(1)] = (5));
} else
{var statearr_12508_12554 = state_12501__$1;(statearr_12508_12554[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (15)))
{var inst_12472 = (state_12501[(2)]);var state_12501__$1 = state_12501;var statearr_12509_12555 = state_12501__$1;(statearr_12509_12555[(2)] = inst_12472);
(statearr_12509_12555[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (21)))
{var inst_12494 = (state_12501[(2)]);var state_12501__$1 = (function (){var statearr_12510 = state_12501;(statearr_12510[(9)] = inst_12494);
return statearr_12510;
})();var statearr_12511_12556 = state_12501__$1;(statearr_12511_12556[(2)] = null);
(statearr_12511_12556[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (13)))
{var inst_12454 = (state_12501[(10)]);var inst_12456 = cljs.core.chunked_seq_QMARK_.call(null,inst_12454);var state_12501__$1 = state_12501;if(inst_12456)
{var statearr_12512_12557 = state_12501__$1;(statearr_12512_12557[(1)] = (16));
} else
{var statearr_12513_12558 = state_12501__$1;(statearr_12513_12558[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (22)))
{var inst_12491 = (state_12501[(2)]);var state_12501__$1 = state_12501;var statearr_12514_12559 = state_12501__$1;(statearr_12514_12559[(2)] = inst_12491);
(statearr_12514_12559[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (6)))
{var inst_12430 = (state_12501[(7)]);var inst_12478 = (state_12501[(11)]);var inst_12480 = (state_12501[(8)]);var inst_12478__$1 = topic_fn.call(null,inst_12430);var inst_12479 = cljs.core.deref.call(null,mults);var inst_12480__$1 = cljs.core.get.call(null,inst_12479,inst_12478__$1);var state_12501__$1 = (function (){var statearr_12515 = state_12501;(statearr_12515[(11)] = inst_12478__$1);
(statearr_12515[(8)] = inst_12480__$1);
return statearr_12515;
})();if(cljs.core.truth_(inst_12480__$1))
{var statearr_12516_12560 = state_12501__$1;(statearr_12516_12560[(1)] = (19));
} else
{var statearr_12517_12561 = state_12501__$1;(statearr_12517_12561[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (25)))
{var inst_12489 = (state_12501[(2)]);var state_12501__$1 = state_12501;var statearr_12518_12562 = state_12501__$1;(statearr_12518_12562[(2)] = inst_12489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12501__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (17)))
{var inst_12454 = (state_12501[(10)]);var inst_12463 = cljs.core.first.call(null,inst_12454);var inst_12464 = cljs.core.async.muxch_STAR_.call(null,inst_12463);var inst_12465 = cljs.core.async.close_BANG_.call(null,inst_12464);var inst_12466 = cljs.core.next.call(null,inst_12454);var inst_12440 = inst_12466;var inst_12441 = null;var inst_12442 = (0);var inst_12443 = (0);var state_12501__$1 = (function (){var statearr_12519 = state_12501;(statearr_12519[(12)] = inst_12442);
(statearr_12519[(13)] = inst_12443);
(statearr_12519[(14)] = inst_12441);
(statearr_12519[(15)] = inst_12440);
(statearr_12519[(16)] = inst_12465);
return statearr_12519;
})();var statearr_12520_12563 = state_12501__$1;(statearr_12520_12563[(2)] = null);
(statearr_12520_12563[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (3)))
{var inst_12499 = (state_12501[(2)]);var state_12501__$1 = state_12501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12501__$1,inst_12499);
} else
{if((state_val_12502 === (12)))
{var inst_12474 = (state_12501[(2)]);var state_12501__$1 = state_12501;var statearr_12521_12564 = state_12501__$1;(statearr_12521_12564[(2)] = inst_12474);
(statearr_12521_12564[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (2)))
{var state_12501__$1 = state_12501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12501__$1,(4),ch);
} else
{if((state_val_12502 === (23)))
{var inst_12478 = (state_12501[(11)]);var inst_12482 = (state_12501[(2)]);var inst_12483 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12478);var state_12501__$1 = (function (){var statearr_12522 = state_12501;(statearr_12522[(17)] = inst_12482);
return statearr_12522;
})();var statearr_12523_12565 = state_12501__$1;(statearr_12523_12565[(2)] = inst_12483);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12501__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (19)))
{var state_12501__$1 = state_12501;var statearr_12524_12566 = state_12501__$1;(statearr_12524_12566[(2)] = null);
(statearr_12524_12566[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (11)))
{var inst_12454 = (state_12501[(10)]);var inst_12440 = (state_12501[(15)]);var inst_12454__$1 = cljs.core.seq.call(null,inst_12440);var state_12501__$1 = (function (){var statearr_12525 = state_12501;(statearr_12525[(10)] = inst_12454__$1);
return statearr_12525;
})();if(inst_12454__$1)
{var statearr_12526_12567 = state_12501__$1;(statearr_12526_12567[(1)] = (13));
} else
{var statearr_12527_12568 = state_12501__$1;(statearr_12527_12568[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (9)))
{var inst_12476 = (state_12501[(2)]);var state_12501__$1 = state_12501;var statearr_12528_12569 = state_12501__$1;(statearr_12528_12569[(2)] = inst_12476);
(statearr_12528_12569[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (5)))
{var inst_12437 = cljs.core.deref.call(null,mults);var inst_12438 = cljs.core.vals.call(null,inst_12437);var inst_12439 = cljs.core.seq.call(null,inst_12438);var inst_12440 = inst_12439;var inst_12441 = null;var inst_12442 = (0);var inst_12443 = (0);var state_12501__$1 = (function (){var statearr_12529 = state_12501;(statearr_12529[(12)] = inst_12442);
(statearr_12529[(13)] = inst_12443);
(statearr_12529[(14)] = inst_12441);
(statearr_12529[(15)] = inst_12440);
return statearr_12529;
})();var statearr_12530_12570 = state_12501__$1;(statearr_12530_12570[(2)] = null);
(statearr_12530_12570[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (14)))
{var state_12501__$1 = state_12501;var statearr_12534_12571 = state_12501__$1;(statearr_12534_12571[(2)] = null);
(statearr_12534_12571[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (16)))
{var inst_12454 = (state_12501[(10)]);var inst_12458 = cljs.core.chunk_first.call(null,inst_12454);var inst_12459 = cljs.core.chunk_rest.call(null,inst_12454);var inst_12460 = cljs.core.count.call(null,inst_12458);var inst_12440 = inst_12459;var inst_12441 = inst_12458;var inst_12442 = inst_12460;var inst_12443 = (0);var state_12501__$1 = (function (){var statearr_12535 = state_12501;(statearr_12535[(12)] = inst_12442);
(statearr_12535[(13)] = inst_12443);
(statearr_12535[(14)] = inst_12441);
(statearr_12535[(15)] = inst_12440);
return statearr_12535;
})();var statearr_12536_12572 = state_12501__$1;(statearr_12536_12572[(2)] = null);
(statearr_12536_12572[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (10)))
{var inst_12442 = (state_12501[(12)]);var inst_12443 = (state_12501[(13)]);var inst_12441 = (state_12501[(14)]);var inst_12440 = (state_12501[(15)]);var inst_12448 = cljs.core._nth.call(null,inst_12441,inst_12443);var inst_12449 = cljs.core.async.muxch_STAR_.call(null,inst_12448);var inst_12450 = cljs.core.async.close_BANG_.call(null,inst_12449);var inst_12451 = (inst_12443 + (1));var tmp12531 = inst_12442;var tmp12532 = inst_12441;var tmp12533 = inst_12440;var inst_12440__$1 = tmp12533;var inst_12441__$1 = tmp12532;var inst_12442__$1 = tmp12531;var inst_12443__$1 = inst_12451;var state_12501__$1 = (function (){var statearr_12537 = state_12501;(statearr_12537[(18)] = inst_12450);
(statearr_12537[(12)] = inst_12442__$1);
(statearr_12537[(13)] = inst_12443__$1);
(statearr_12537[(14)] = inst_12441__$1);
(statearr_12537[(15)] = inst_12440__$1);
return statearr_12537;
})();var statearr_12538_12573 = state_12501__$1;(statearr_12538_12573[(2)] = null);
(statearr_12538_12573[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (18)))
{var inst_12469 = (state_12501[(2)]);var state_12501__$1 = state_12501;var statearr_12539_12574 = state_12501__$1;(statearr_12539_12574[(2)] = inst_12469);
(statearr_12539_12574[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12502 === (8)))
{var inst_12442 = (state_12501[(12)]);var inst_12443 = (state_12501[(13)]);var inst_12445 = (inst_12443 < inst_12442);var inst_12446 = inst_12445;var state_12501__$1 = state_12501;if(cljs.core.truth_(inst_12446))
{var statearr_12540_12575 = state_12501__$1;(statearr_12540_12575[(1)] = (10));
} else
{var statearr_12541_12576 = state_12501__$1;(statearr_12541_12576[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___12549,mults,ensure_mult,p))
;return ((function (switch__6612__auto__,c__6677__auto___12549,mults,ensure_mult,p){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_12545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12545[(0)] = state_machine__6613__auto__);
(statearr_12545[(1)] = (1));
return statearr_12545;
});
var state_machine__6613__auto____1 = (function (state_12501){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12501);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12546){if((e12546 instanceof Object))
{var ex__6616__auto__ = e12546;var statearr_12547_12577 = state_12501;(statearr_12547_12577[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12501);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12578 = state_12501;
state_12501 = G__12578;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12501){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___12549,mults,ensure_mult,p))
})();var state__6679__auto__ = (function (){var statearr_12548 = f__6678__auto__.call(null);(statearr_12548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___12549);
return statearr_12548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___12549,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6677__auto___12715 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___12715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___12715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12685){var state_val_12686 = (state_12685[(1)]);if((state_val_12686 === (7)))
{var state_12685__$1 = state_12685;var statearr_12687_12716 = state_12685__$1;(statearr_12687_12716[(2)] = null);
(statearr_12687_12716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (1)))
{var state_12685__$1 = state_12685;var statearr_12688_12717 = state_12685__$1;(statearr_12688_12717[(2)] = null);
(statearr_12688_12717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (4)))
{var inst_12649 = (state_12685[(7)]);var inst_12651 = (inst_12649 < cnt);var state_12685__$1 = state_12685;if(cljs.core.truth_(inst_12651))
{var statearr_12689_12718 = state_12685__$1;(statearr_12689_12718[(1)] = (6));
} else
{var statearr_12690_12719 = state_12685__$1;(statearr_12690_12719[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (15)))
{var inst_12681 = (state_12685[(2)]);var state_12685__$1 = state_12685;var statearr_12691_12720 = state_12685__$1;(statearr_12691_12720[(2)] = inst_12681);
(statearr_12691_12720[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (13)))
{var inst_12674 = cljs.core.async.close_BANG_.call(null,out);var state_12685__$1 = state_12685;var statearr_12692_12721 = state_12685__$1;(statearr_12692_12721[(2)] = inst_12674);
(statearr_12692_12721[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (6)))
{var state_12685__$1 = state_12685;var statearr_12693_12722 = state_12685__$1;(statearr_12693_12722[(2)] = null);
(statearr_12693_12722[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (3)))
{var inst_12683 = (state_12685[(2)]);var state_12685__$1 = state_12685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12685__$1,inst_12683);
} else
{if((state_val_12686 === (12)))
{var inst_12671 = (state_12685[(8)]);var inst_12671__$1 = (state_12685[(2)]);var inst_12672 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12671__$1);var state_12685__$1 = (function (){var statearr_12694 = state_12685;(statearr_12694[(8)] = inst_12671__$1);
return statearr_12694;
})();if(cljs.core.truth_(inst_12672))
{var statearr_12695_12723 = state_12685__$1;(statearr_12695_12723[(1)] = (13));
} else
{var statearr_12696_12724 = state_12685__$1;(statearr_12696_12724[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (2)))
{var inst_12648 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12649 = (0);var state_12685__$1 = (function (){var statearr_12697 = state_12685;(statearr_12697[(9)] = inst_12648);
(statearr_12697[(7)] = inst_12649);
return statearr_12697;
})();var statearr_12698_12725 = state_12685__$1;(statearr_12698_12725[(2)] = null);
(statearr_12698_12725[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (11)))
{var inst_12649 = (state_12685[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12685,(10),Object,null,(9));var inst_12658 = chs__$1.call(null,inst_12649);var inst_12659 = done.call(null,inst_12649);var inst_12660 = cljs.core.async.take_BANG_.call(null,inst_12658,inst_12659);var state_12685__$1 = state_12685;var statearr_12699_12726 = state_12685__$1;(statearr_12699_12726[(2)] = inst_12660);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12685__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (9)))
{var inst_12649 = (state_12685[(7)]);var inst_12662 = (state_12685[(2)]);var inst_12663 = (inst_12649 + (1));var inst_12649__$1 = inst_12663;var state_12685__$1 = (function (){var statearr_12700 = state_12685;(statearr_12700[(7)] = inst_12649__$1);
(statearr_12700[(10)] = inst_12662);
return statearr_12700;
})();var statearr_12701_12727 = state_12685__$1;(statearr_12701_12727[(2)] = null);
(statearr_12701_12727[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (5)))
{var inst_12669 = (state_12685[(2)]);var state_12685__$1 = (function (){var statearr_12702 = state_12685;(statearr_12702[(11)] = inst_12669);
return statearr_12702;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12685__$1,(12),dchan);
} else
{if((state_val_12686 === (14)))
{var inst_12671 = (state_12685[(8)]);var inst_12676 = cljs.core.apply.call(null,f,inst_12671);var state_12685__$1 = state_12685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12685__$1,(16),out,inst_12676);
} else
{if((state_val_12686 === (16)))
{var inst_12678 = (state_12685[(2)]);var state_12685__$1 = (function (){var statearr_12703 = state_12685;(statearr_12703[(12)] = inst_12678);
return statearr_12703;
})();var statearr_12704_12728 = state_12685__$1;(statearr_12704_12728[(2)] = null);
(statearr_12704_12728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (10)))
{var inst_12653 = (state_12685[(2)]);var inst_12654 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12685__$1 = (function (){var statearr_12705 = state_12685;(statearr_12705[(13)] = inst_12653);
return statearr_12705;
})();var statearr_12706_12729 = state_12685__$1;(statearr_12706_12729[(2)] = inst_12654);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12685__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12686 === (8)))
{var inst_12667 = (state_12685[(2)]);var state_12685__$1 = state_12685;var statearr_12707_12730 = state_12685__$1;(statearr_12707_12730[(2)] = inst_12667);
(statearr_12707_12730[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___12715,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6612__auto__,c__6677__auto___12715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_12711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12711[(0)] = state_machine__6613__auto__);
(statearr_12711[(1)] = (1));
return statearr_12711;
});
var state_machine__6613__auto____1 = (function (state_12685){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12685);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12712){if((e12712 instanceof Object))
{var ex__6616__auto__ = e12712;var statearr_12713_12731 = state_12685;(statearr_12713_12731[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12732 = state_12685;
state_12685 = G__12732;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12685){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___12715,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6679__auto__ = (function (){var statearr_12714 = f__6678__auto__.call(null);(statearr_12714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___12715);
return statearr_12714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___12715,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___12840 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___12840,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___12840,out){
return (function (state_12816){var state_val_12817 = (state_12816[(1)]);if((state_val_12817 === (7)))
{var inst_12795 = (state_12816[(7)]);var inst_12796 = (state_12816[(8)]);var inst_12795__$1 = (state_12816[(2)]);var inst_12796__$1 = cljs.core.nth.call(null,inst_12795__$1,(0),null);var inst_12797 = cljs.core.nth.call(null,inst_12795__$1,(1),null);var inst_12798 = (inst_12796__$1 == null);var state_12816__$1 = (function (){var statearr_12818 = state_12816;(statearr_12818[(7)] = inst_12795__$1);
(statearr_12818[(8)] = inst_12796__$1);
(statearr_12818[(9)] = inst_12797);
return statearr_12818;
})();if(cljs.core.truth_(inst_12798))
{var statearr_12819_12841 = state_12816__$1;(statearr_12819_12841[(1)] = (8));
} else
{var statearr_12820_12842 = state_12816__$1;(statearr_12820_12842[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12817 === (1)))
{var inst_12787 = cljs.core.vec.call(null,chs);var inst_12788 = inst_12787;var state_12816__$1 = (function (){var statearr_12821 = state_12816;(statearr_12821[(10)] = inst_12788);
return statearr_12821;
})();var statearr_12822_12843 = state_12816__$1;(statearr_12822_12843[(2)] = null);
(statearr_12822_12843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12817 === (4)))
{var inst_12788 = (state_12816[(10)]);var state_12816__$1 = state_12816;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12816__$1,(7),inst_12788);
} else
{if((state_val_12817 === (6)))
{var inst_12812 = (state_12816[(2)]);var state_12816__$1 = state_12816;var statearr_12823_12844 = state_12816__$1;(statearr_12823_12844[(2)] = inst_12812);
(statearr_12823_12844[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12817 === (3)))
{var inst_12814 = (state_12816[(2)]);var state_12816__$1 = state_12816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12816__$1,inst_12814);
} else
{if((state_val_12817 === (2)))
{var inst_12788 = (state_12816[(10)]);var inst_12790 = cljs.core.count.call(null,inst_12788);var inst_12791 = (inst_12790 > (0));var state_12816__$1 = state_12816;if(cljs.core.truth_(inst_12791))
{var statearr_12825_12845 = state_12816__$1;(statearr_12825_12845[(1)] = (4));
} else
{var statearr_12826_12846 = state_12816__$1;(statearr_12826_12846[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12817 === (11)))
{var inst_12788 = (state_12816[(10)]);var inst_12805 = (state_12816[(2)]);var tmp12824 = inst_12788;var inst_12788__$1 = tmp12824;var state_12816__$1 = (function (){var statearr_12827 = state_12816;(statearr_12827[(11)] = inst_12805);
(statearr_12827[(10)] = inst_12788__$1);
return statearr_12827;
})();var statearr_12828_12847 = state_12816__$1;(statearr_12828_12847[(2)] = null);
(statearr_12828_12847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12817 === (9)))
{var inst_12796 = (state_12816[(8)]);var state_12816__$1 = state_12816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12816__$1,(11),out,inst_12796);
} else
{if((state_val_12817 === (5)))
{var inst_12810 = cljs.core.async.close_BANG_.call(null,out);var state_12816__$1 = state_12816;var statearr_12829_12848 = state_12816__$1;(statearr_12829_12848[(2)] = inst_12810);
(statearr_12829_12848[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12817 === (10)))
{var inst_12808 = (state_12816[(2)]);var state_12816__$1 = state_12816;var statearr_12830_12849 = state_12816__$1;(statearr_12830_12849[(2)] = inst_12808);
(statearr_12830_12849[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12817 === (8)))
{var inst_12795 = (state_12816[(7)]);var inst_12796 = (state_12816[(8)]);var inst_12797 = (state_12816[(9)]);var inst_12788 = (state_12816[(10)]);var inst_12800 = (function (){var c = inst_12797;var v = inst_12796;var vec__12793 = inst_12795;var cs = inst_12788;return ((function (c,v,vec__12793,cs,inst_12795,inst_12796,inst_12797,inst_12788,state_val_12817,c__6677__auto___12840,out){
return (function (p1__12733_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12733_SHARP_);
});
;})(c,v,vec__12793,cs,inst_12795,inst_12796,inst_12797,inst_12788,state_val_12817,c__6677__auto___12840,out))
})();var inst_12801 = cljs.core.filterv.call(null,inst_12800,inst_12788);var inst_12788__$1 = inst_12801;var state_12816__$1 = (function (){var statearr_12831 = state_12816;(statearr_12831[(10)] = inst_12788__$1);
return statearr_12831;
})();var statearr_12832_12850 = state_12816__$1;(statearr_12832_12850[(2)] = null);
(statearr_12832_12850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___12840,out))
;return ((function (switch__6612__auto__,c__6677__auto___12840,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_12836 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12836[(0)] = state_machine__6613__auto__);
(statearr_12836[(1)] = (1));
return statearr_12836;
});
var state_machine__6613__auto____1 = (function (state_12816){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12816);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12837){if((e12837 instanceof Object))
{var ex__6616__auto__ = e12837;var statearr_12838_12851 = state_12816;(statearr_12838_12851[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12852 = state_12816;
state_12816 = G__12852;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12816){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___12840,out))
})();var state__6679__auto__ = (function (){var statearr_12839 = f__6678__auto__.call(null);(statearr_12839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___12840);
return statearr_12839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___12840,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___12945 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___12945,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___12945,out){
return (function (state_12922){var state_val_12923 = (state_12922[(1)]);if((state_val_12923 === (7)))
{var inst_12904 = (state_12922[(7)]);var inst_12904__$1 = (state_12922[(2)]);var inst_12905 = (inst_12904__$1 == null);var inst_12906 = cljs.core.not.call(null,inst_12905);var state_12922__$1 = (function (){var statearr_12924 = state_12922;(statearr_12924[(7)] = inst_12904__$1);
return statearr_12924;
})();if(inst_12906)
{var statearr_12925_12946 = state_12922__$1;(statearr_12925_12946[(1)] = (8));
} else
{var statearr_12926_12947 = state_12922__$1;(statearr_12926_12947[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (1)))
{var inst_12899 = (0);var state_12922__$1 = (function (){var statearr_12927 = state_12922;(statearr_12927[(8)] = inst_12899);
return statearr_12927;
})();var statearr_12928_12948 = state_12922__$1;(statearr_12928_12948[(2)] = null);
(statearr_12928_12948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (4)))
{var state_12922__$1 = state_12922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12922__$1,(7),ch);
} else
{if((state_val_12923 === (6)))
{var inst_12917 = (state_12922[(2)]);var state_12922__$1 = state_12922;var statearr_12929_12949 = state_12922__$1;(statearr_12929_12949[(2)] = inst_12917);
(statearr_12929_12949[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (3)))
{var inst_12919 = (state_12922[(2)]);var inst_12920 = cljs.core.async.close_BANG_.call(null,out);var state_12922__$1 = (function (){var statearr_12930 = state_12922;(statearr_12930[(9)] = inst_12919);
return statearr_12930;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12922__$1,inst_12920);
} else
{if((state_val_12923 === (2)))
{var inst_12899 = (state_12922[(8)]);var inst_12901 = (inst_12899 < n);var state_12922__$1 = state_12922;if(cljs.core.truth_(inst_12901))
{var statearr_12931_12950 = state_12922__$1;(statearr_12931_12950[(1)] = (4));
} else
{var statearr_12932_12951 = state_12922__$1;(statearr_12932_12951[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (11)))
{var inst_12899 = (state_12922[(8)]);var inst_12909 = (state_12922[(2)]);var inst_12910 = (inst_12899 + (1));var inst_12899__$1 = inst_12910;var state_12922__$1 = (function (){var statearr_12933 = state_12922;(statearr_12933[(8)] = inst_12899__$1);
(statearr_12933[(10)] = inst_12909);
return statearr_12933;
})();var statearr_12934_12952 = state_12922__$1;(statearr_12934_12952[(2)] = null);
(statearr_12934_12952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (9)))
{var state_12922__$1 = state_12922;var statearr_12935_12953 = state_12922__$1;(statearr_12935_12953[(2)] = null);
(statearr_12935_12953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (5)))
{var state_12922__$1 = state_12922;var statearr_12936_12954 = state_12922__$1;(statearr_12936_12954[(2)] = null);
(statearr_12936_12954[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (10)))
{var inst_12914 = (state_12922[(2)]);var state_12922__$1 = state_12922;var statearr_12937_12955 = state_12922__$1;(statearr_12937_12955[(2)] = inst_12914);
(statearr_12937_12955[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (8)))
{var inst_12904 = (state_12922[(7)]);var state_12922__$1 = state_12922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12922__$1,(11),out,inst_12904);
} else
{return null;
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
});})(c__6677__auto___12945,out))
;return ((function (switch__6612__auto__,c__6677__auto___12945,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_12941 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12941[(0)] = state_machine__6613__auto__);
(statearr_12941[(1)] = (1));
return statearr_12941;
});
var state_machine__6613__auto____1 = (function (state_12922){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12922);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12942){if((e12942 instanceof Object))
{var ex__6616__auto__ = e12942;var statearr_12943_12956 = state_12922;(statearr_12943_12956[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12957 = state_12922;
state_12922 = G__12957;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12922){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___12945,out))
})();var state__6679__auto__ = (function (){var statearr_12944 = f__6678__auto__.call(null);(statearr_12944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___12945);
return statearr_12944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___12945,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13054 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13054,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13054,out){
return (function (state_13029){var state_val_13030 = (state_13029[(1)]);if((state_val_13030 === (7)))
{var inst_13024 = (state_13029[(2)]);var state_13029__$1 = state_13029;var statearr_13031_13055 = state_13029__$1;(statearr_13031_13055[(2)] = inst_13024);
(statearr_13031_13055[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13030 === (1)))
{var inst_13006 = null;var state_13029__$1 = (function (){var statearr_13032 = state_13029;(statearr_13032[(7)] = inst_13006);
return statearr_13032;
})();var statearr_13033_13056 = state_13029__$1;(statearr_13033_13056[(2)] = null);
(statearr_13033_13056[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13030 === (4)))
{var inst_13009 = (state_13029[(8)]);var inst_13009__$1 = (state_13029[(2)]);var inst_13010 = (inst_13009__$1 == null);var inst_13011 = cljs.core.not.call(null,inst_13010);var state_13029__$1 = (function (){var statearr_13034 = state_13029;(statearr_13034[(8)] = inst_13009__$1);
return statearr_13034;
})();if(inst_13011)
{var statearr_13035_13057 = state_13029__$1;(statearr_13035_13057[(1)] = (5));
} else
{var statearr_13036_13058 = state_13029__$1;(statearr_13036_13058[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13030 === (6)))
{var state_13029__$1 = state_13029;var statearr_13037_13059 = state_13029__$1;(statearr_13037_13059[(2)] = null);
(statearr_13037_13059[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13030 === (3)))
{var inst_13026 = (state_13029[(2)]);var inst_13027 = cljs.core.async.close_BANG_.call(null,out);var state_13029__$1 = (function (){var statearr_13038 = state_13029;(statearr_13038[(9)] = inst_13026);
return statearr_13038;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13029__$1,inst_13027);
} else
{if((state_val_13030 === (2)))
{var state_13029__$1 = state_13029;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13029__$1,(4),ch);
} else
{if((state_val_13030 === (11)))
{var inst_13009 = (state_13029[(8)]);var inst_13018 = (state_13029[(2)]);var inst_13006 = inst_13009;var state_13029__$1 = (function (){var statearr_13039 = state_13029;(statearr_13039[(10)] = inst_13018);
(statearr_13039[(7)] = inst_13006);
return statearr_13039;
})();var statearr_13040_13060 = state_13029__$1;(statearr_13040_13060[(2)] = null);
(statearr_13040_13060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13030 === (9)))
{var inst_13009 = (state_13029[(8)]);var state_13029__$1 = state_13029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13029__$1,(11),out,inst_13009);
} else
{if((state_val_13030 === (5)))
{var inst_13009 = (state_13029[(8)]);var inst_13006 = (state_13029[(7)]);var inst_13013 = cljs.core._EQ_.call(null,inst_13009,inst_13006);var state_13029__$1 = state_13029;if(inst_13013)
{var statearr_13042_13061 = state_13029__$1;(statearr_13042_13061[(1)] = (8));
} else
{var statearr_13043_13062 = state_13029__$1;(statearr_13043_13062[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13030 === (10)))
{var inst_13021 = (state_13029[(2)]);var state_13029__$1 = state_13029;var statearr_13044_13063 = state_13029__$1;(statearr_13044_13063[(2)] = inst_13021);
(statearr_13044_13063[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13030 === (8)))
{var inst_13006 = (state_13029[(7)]);var tmp13041 = inst_13006;var inst_13006__$1 = tmp13041;var state_13029__$1 = (function (){var statearr_13045 = state_13029;(statearr_13045[(7)] = inst_13006__$1);
return statearr_13045;
})();var statearr_13046_13064 = state_13029__$1;(statearr_13046_13064[(2)] = null);
(statearr_13046_13064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___13054,out))
;return ((function (switch__6612__auto__,c__6677__auto___13054,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13050 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13050[(0)] = state_machine__6613__auto__);
(statearr_13050[(1)] = (1));
return statearr_13050;
});
var state_machine__6613__auto____1 = (function (state_13029){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13029);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13051){if((e13051 instanceof Object))
{var ex__6616__auto__ = e13051;var statearr_13052_13065 = state_13029;(statearr_13052_13065[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13029);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13066 = state_13029;
state_13029 = G__13066;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13029){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13054,out))
})();var state__6679__auto__ = (function (){var statearr_13053 = f__6678__auto__.call(null);(statearr_13053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13054);
return statearr_13053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13054,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13201,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13201,out){
return (function (state_13171){var state_val_13172 = (state_13171[(1)]);if((state_val_13172 === (7)))
{var inst_13167 = (state_13171[(2)]);var state_13171__$1 = state_13171;var statearr_13173_13202 = state_13171__$1;(statearr_13173_13202[(2)] = inst_13167);
(statearr_13173_13202[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (1)))
{var inst_13134 = (new Array(n));var inst_13135 = inst_13134;var inst_13136 = (0);var state_13171__$1 = (function (){var statearr_13174 = state_13171;(statearr_13174[(7)] = inst_13136);
(statearr_13174[(8)] = inst_13135);
return statearr_13174;
})();var statearr_13175_13203 = state_13171__$1;(statearr_13175_13203[(2)] = null);
(statearr_13175_13203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (4)))
{var inst_13139 = (state_13171[(9)]);var inst_13139__$1 = (state_13171[(2)]);var inst_13140 = (inst_13139__$1 == null);var inst_13141 = cljs.core.not.call(null,inst_13140);var state_13171__$1 = (function (){var statearr_13176 = state_13171;(statearr_13176[(9)] = inst_13139__$1);
return statearr_13176;
})();if(inst_13141)
{var statearr_13177_13204 = state_13171__$1;(statearr_13177_13204[(1)] = (5));
} else
{var statearr_13178_13205 = state_13171__$1;(statearr_13178_13205[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (15)))
{var inst_13161 = (state_13171[(2)]);var state_13171__$1 = state_13171;var statearr_13179_13206 = state_13171__$1;(statearr_13179_13206[(2)] = inst_13161);
(statearr_13179_13206[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (13)))
{var state_13171__$1 = state_13171;var statearr_13180_13207 = state_13171__$1;(statearr_13180_13207[(2)] = null);
(statearr_13180_13207[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (6)))
{var inst_13136 = (state_13171[(7)]);var inst_13157 = (inst_13136 > (0));var state_13171__$1 = state_13171;if(cljs.core.truth_(inst_13157))
{var statearr_13181_13208 = state_13171__$1;(statearr_13181_13208[(1)] = (12));
} else
{var statearr_13182_13209 = state_13171__$1;(statearr_13182_13209[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (3)))
{var inst_13169 = (state_13171[(2)]);var state_13171__$1 = state_13171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13171__$1,inst_13169);
} else
{if((state_val_13172 === (12)))
{var inst_13135 = (state_13171[(8)]);var inst_13159 = cljs.core.vec.call(null,inst_13135);var state_13171__$1 = state_13171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13171__$1,(15),out,inst_13159);
} else
{if((state_val_13172 === (2)))
{var state_13171__$1 = state_13171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13171__$1,(4),ch);
} else
{if((state_val_13172 === (11)))
{var inst_13151 = (state_13171[(2)]);var inst_13152 = (new Array(n));var inst_13135 = inst_13152;var inst_13136 = (0);var state_13171__$1 = (function (){var statearr_13183 = state_13171;(statearr_13183[(7)] = inst_13136);
(statearr_13183[(10)] = inst_13151);
(statearr_13183[(8)] = inst_13135);
return statearr_13183;
})();var statearr_13184_13210 = state_13171__$1;(statearr_13184_13210[(2)] = null);
(statearr_13184_13210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (9)))
{var inst_13135 = (state_13171[(8)]);var inst_13149 = cljs.core.vec.call(null,inst_13135);var state_13171__$1 = state_13171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13171__$1,(11),out,inst_13149);
} else
{if((state_val_13172 === (5)))
{var inst_13136 = (state_13171[(7)]);var inst_13135 = (state_13171[(8)]);var inst_13139 = (state_13171[(9)]);var inst_13144 = (state_13171[(11)]);var inst_13143 = (inst_13135[inst_13136] = inst_13139);var inst_13144__$1 = (inst_13136 + (1));var inst_13145 = (inst_13144__$1 < n);var state_13171__$1 = (function (){var statearr_13185 = state_13171;(statearr_13185[(11)] = inst_13144__$1);
(statearr_13185[(12)] = inst_13143);
return statearr_13185;
})();if(cljs.core.truth_(inst_13145))
{var statearr_13186_13211 = state_13171__$1;(statearr_13186_13211[(1)] = (8));
} else
{var statearr_13187_13212 = state_13171__$1;(statearr_13187_13212[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (14)))
{var inst_13164 = (state_13171[(2)]);var inst_13165 = cljs.core.async.close_BANG_.call(null,out);var state_13171__$1 = (function (){var statearr_13189 = state_13171;(statearr_13189[(13)] = inst_13164);
return statearr_13189;
})();var statearr_13190_13213 = state_13171__$1;(statearr_13190_13213[(2)] = inst_13165);
(statearr_13190_13213[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (10)))
{var inst_13155 = (state_13171[(2)]);var state_13171__$1 = state_13171;var statearr_13191_13214 = state_13171__$1;(statearr_13191_13214[(2)] = inst_13155);
(statearr_13191_13214[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13172 === (8)))
{var inst_13135 = (state_13171[(8)]);var inst_13144 = (state_13171[(11)]);var tmp13188 = inst_13135;var inst_13135__$1 = tmp13188;var inst_13136 = inst_13144;var state_13171__$1 = (function (){var statearr_13192 = state_13171;(statearr_13192[(7)] = inst_13136);
(statearr_13192[(8)] = inst_13135__$1);
return statearr_13192;
})();var statearr_13193_13215 = state_13171__$1;(statearr_13193_13215[(2)] = null);
(statearr_13193_13215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___13201,out))
;return ((function (switch__6612__auto__,c__6677__auto___13201,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13197[(0)] = state_machine__6613__auto__);
(statearr_13197[(1)] = (1));
return statearr_13197;
});
var state_machine__6613__auto____1 = (function (state_13171){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13171);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13198){if((e13198 instanceof Object))
{var ex__6616__auto__ = e13198;var statearr_13199_13216 = state_13171;(statearr_13199_13216[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13217 = state_13171;
state_13171 = G__13217;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13171){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13201,out))
})();var state__6679__auto__ = (function (){var statearr_13200 = f__6678__auto__.call(null);(statearr_13200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13201);
return statearr_13200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13201,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13360 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13360,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13360,out){
return (function (state_13330){var state_val_13331 = (state_13330[(1)]);if((state_val_13331 === (7)))
{var inst_13326 = (state_13330[(2)]);var state_13330__$1 = state_13330;var statearr_13332_13361 = state_13330__$1;(statearr_13332_13361[(2)] = inst_13326);
(statearr_13332_13361[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (1)))
{var inst_13289 = [];var inst_13290 = inst_13289;var inst_13291 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13330__$1 = (function (){var statearr_13333 = state_13330;(statearr_13333[(7)] = inst_13291);
(statearr_13333[(8)] = inst_13290);
return statearr_13333;
})();var statearr_13334_13362 = state_13330__$1;(statearr_13334_13362[(2)] = null);
(statearr_13334_13362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (4)))
{var inst_13294 = (state_13330[(9)]);var inst_13294__$1 = (state_13330[(2)]);var inst_13295 = (inst_13294__$1 == null);var inst_13296 = cljs.core.not.call(null,inst_13295);var state_13330__$1 = (function (){var statearr_13335 = state_13330;(statearr_13335[(9)] = inst_13294__$1);
return statearr_13335;
})();if(inst_13296)
{var statearr_13336_13363 = state_13330__$1;(statearr_13336_13363[(1)] = (5));
} else
{var statearr_13337_13364 = state_13330__$1;(statearr_13337_13364[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (15)))
{var inst_13320 = (state_13330[(2)]);var state_13330__$1 = state_13330;var statearr_13338_13365 = state_13330__$1;(statearr_13338_13365[(2)] = inst_13320);
(statearr_13338_13365[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (13)))
{var state_13330__$1 = state_13330;var statearr_13339_13366 = state_13330__$1;(statearr_13339_13366[(2)] = null);
(statearr_13339_13366[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (6)))
{var inst_13290 = (state_13330[(8)]);var inst_13315 = inst_13290.length;var inst_13316 = (inst_13315 > (0));var state_13330__$1 = state_13330;if(cljs.core.truth_(inst_13316))
{var statearr_13340_13367 = state_13330__$1;(statearr_13340_13367[(1)] = (12));
} else
{var statearr_13341_13368 = state_13330__$1;(statearr_13341_13368[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (3)))
{var inst_13328 = (state_13330[(2)]);var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13330__$1,inst_13328);
} else
{if((state_val_13331 === (12)))
{var inst_13290 = (state_13330[(8)]);var inst_13318 = cljs.core.vec.call(null,inst_13290);var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13330__$1,(15),out,inst_13318);
} else
{if((state_val_13331 === (2)))
{var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13330__$1,(4),ch);
} else
{if((state_val_13331 === (11)))
{var inst_13294 = (state_13330[(9)]);var inst_13298 = (state_13330[(10)]);var inst_13308 = (state_13330[(2)]);var inst_13309 = [];var inst_13310 = inst_13309.push(inst_13294);var inst_13290 = inst_13309;var inst_13291 = inst_13298;var state_13330__$1 = (function (){var statearr_13342 = state_13330;(statearr_13342[(7)] = inst_13291);
(statearr_13342[(8)] = inst_13290);
(statearr_13342[(11)] = inst_13308);
(statearr_13342[(12)] = inst_13310);
return statearr_13342;
})();var statearr_13343_13369 = state_13330__$1;(statearr_13343_13369[(2)] = null);
(statearr_13343_13369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (9)))
{var inst_13290 = (state_13330[(8)]);var inst_13306 = cljs.core.vec.call(null,inst_13290);var state_13330__$1 = state_13330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13330__$1,(11),out,inst_13306);
} else
{if((state_val_13331 === (5)))
{var inst_13291 = (state_13330[(7)]);var inst_13294 = (state_13330[(9)]);var inst_13298 = (state_13330[(10)]);var inst_13298__$1 = f.call(null,inst_13294);var inst_13299 = cljs.core._EQ_.call(null,inst_13298__$1,inst_13291);var inst_13300 = cljs.core.keyword_identical_QMARK_.call(null,inst_13291,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13301 = (inst_13299) || (inst_13300);var state_13330__$1 = (function (){var statearr_13344 = state_13330;(statearr_13344[(10)] = inst_13298__$1);
return statearr_13344;
})();if(cljs.core.truth_(inst_13301))
{var statearr_13345_13370 = state_13330__$1;(statearr_13345_13370[(1)] = (8));
} else
{var statearr_13346_13371 = state_13330__$1;(statearr_13346_13371[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (14)))
{var inst_13323 = (state_13330[(2)]);var inst_13324 = cljs.core.async.close_BANG_.call(null,out);var state_13330__$1 = (function (){var statearr_13348 = state_13330;(statearr_13348[(13)] = inst_13323);
return statearr_13348;
})();var statearr_13349_13372 = state_13330__$1;(statearr_13349_13372[(2)] = inst_13324);
(statearr_13349_13372[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (10)))
{var inst_13313 = (state_13330[(2)]);var state_13330__$1 = state_13330;var statearr_13350_13373 = state_13330__$1;(statearr_13350_13373[(2)] = inst_13313);
(statearr_13350_13373[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13331 === (8)))
{var inst_13290 = (state_13330[(8)]);var inst_13294 = (state_13330[(9)]);var inst_13298 = (state_13330[(10)]);var inst_13303 = inst_13290.push(inst_13294);var tmp13347 = inst_13290;var inst_13290__$1 = tmp13347;var inst_13291 = inst_13298;var state_13330__$1 = (function (){var statearr_13351 = state_13330;(statearr_13351[(7)] = inst_13291);
(statearr_13351[(8)] = inst_13290__$1);
(statearr_13351[(14)] = inst_13303);
return statearr_13351;
})();var statearr_13352_13374 = state_13330__$1;(statearr_13352_13374[(2)] = null);
(statearr_13352_13374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6677__auto___13360,out))
;return ((function (switch__6612__auto__,c__6677__auto___13360,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13356[(0)] = state_machine__6613__auto__);
(statearr_13356[(1)] = (1));
return statearr_13356;
});
var state_machine__6613__auto____1 = (function (state_13330){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13357){if((e13357 instanceof Object))
{var ex__6616__auto__ = e13357;var statearr_13358_13375 = state_13330;(statearr_13358_13375[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13376 = state_13330;
state_13330 = G__13376;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13330){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13360,out))
})();var state__6679__auto__ = (function (){var statearr_13359 = f__6678__auto__.call(null);(statearr_13359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13360);
return statearr_13359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13360,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map