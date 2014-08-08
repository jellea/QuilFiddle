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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11315 = (function (f,fn_handler,meta11316){
this.f = f;
this.fn_handler = fn_handler;
this.meta11316 = meta11316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11315.cljs$lang$type = true;
cljs.core.async.t11315.cljs$lang$ctorStr = "cljs.core.async/t11315";
cljs.core.async.t11315.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11315");
});
cljs.core.async.t11315.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11317){var self__ = this;
var _11317__$1 = this;return self__.meta11316;
});
cljs.core.async.t11315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11317,meta11316__$1){var self__ = this;
var _11317__$1 = this;return (new cljs.core.async.t11315(self__.f,self__.fn_handler,meta11316__$1));
});
cljs.core.async.__GT_t11315 = (function __GT_t11315(f__$1,fn_handler__$1,meta11316){return (new cljs.core.async.t11315(f__$1,fn_handler__$1,meta11316));
});
}
return (new cljs.core.async.t11315(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11319 = buff;if(G__11319)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__11319.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11319.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11319);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11319);
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
{var val_11320 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11320);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11320,ret){
return (function (){return fn1.call(null,val_11320);
});})(val_11320,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4400__auto___11321 = n;var x_11322 = (0);while(true){
if((x_11322 < n__4400__auto___11321))
{(a[x_11322] = (0));
{
var G__11323 = (x_11322 + (1));
x_11322 = G__11323;
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
var G__11324 = (i + (1));
i = G__11324;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11328 = (function (flag,alt_flag,meta11329){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11329 = meta11329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11328.cljs$lang$type = true;
cljs.core.async.t11328.cljs$lang$ctorStr = "cljs.core.async/t11328";
cljs.core.async.t11328.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11328");
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11330){var self__ = this;
var _11330__$1 = this;return self__.meta11329;
});})(flag))
;
cljs.core.async.t11328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11330,meta11329__$1){var self__ = this;
var _11330__$1 = this;return (new cljs.core.async.t11328(self__.flag,self__.alt_flag,meta11329__$1));
});})(flag))
;
cljs.core.async.__GT_t11328 = ((function (flag){
return (function __GT_t11328(flag__$1,alt_flag__$1,meta11329){return (new cljs.core.async.t11328(flag__$1,alt_flag__$1,meta11329));
});})(flag))
;
}
return (new cljs.core.async.t11328(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11334 = (function (cb,flag,alt_handler,meta11335){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11335 = meta11335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11334.cljs$lang$type = true;
cljs.core.async.t11334.cljs$lang$ctorStr = "cljs.core.async/t11334";
cljs.core.async.t11334.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11334");
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11336){var self__ = this;
var _11336__$1 = this;return self__.meta11335;
});
cljs.core.async.t11334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11336,meta11335__$1){var self__ = this;
var _11336__$1 = this;return (new cljs.core.async.t11334(self__.cb,self__.flag,self__.alt_handler,meta11335__$1));
});
cljs.core.async.__GT_t11334 = (function __GT_t11334(cb__$1,flag__$1,alt_handler__$1,meta11335){return (new cljs.core.async.t11334(cb__$1,flag__$1,alt_handler__$1,meta11335));
});
}
return (new cljs.core.async.t11334(cb,flag,alt_handler,null));
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
return (function (p1__11337_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11337_SHARP_,port], null));
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
var G__11338 = (i + (1));
i = G__11338;
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
var alts_BANG___delegate = function (ports,p__11339){var map__11341 = p__11339;var map__11341__$1 = ((cljs.core.seq_QMARK_.call(null,map__11341))?cljs.core.apply.call(null,cljs.core.hash_map,map__11341):map__11341);var opts = map__11341__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11339 = null;if (arguments.length > 1) {
  p__11339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11339);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11342){
var ports = cljs.core.first(arglist__11342);
var p__11339 = cljs.core.rest(arglist__11342);
return alts_BANG___delegate(ports,p__11339);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11350 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11350 = (function (ch,f,map_LT_,meta11351){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11351 = meta11351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11350.cljs$lang$type = true;
cljs.core.async.t11350.cljs$lang$ctorStr = "cljs.core.async/t11350";
cljs.core.async.t11350.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11350");
});
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11353 = (function (fn1,_,meta11351,ch,f,map_LT_,meta11354){
this.fn1 = fn1;
this._ = _;
this.meta11351 = meta11351;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11354 = meta11354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11353.cljs$lang$type = true;
cljs.core.async.t11353.cljs$lang$ctorStr = "cljs.core.async/t11353";
cljs.core.async.t11353.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11353");
});})(___$1))
;
cljs.core.async.t11353.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11353.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11343_SHARP_){return f1.call(null,(((p1__11343_SHARP_ == null))?null:self__.f.call(null,p1__11343_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11355){var self__ = this;
var _11355__$1 = this;return self__.meta11354;
});})(___$1))
;
cljs.core.async.t11353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11355,meta11354__$1){var self__ = this;
var _11355__$1 = this;return (new cljs.core.async.t11353(self__.fn1,self__._,self__.meta11351,self__.ch,self__.f,self__.map_LT_,meta11354__$1));
});})(___$1))
;
cljs.core.async.__GT_t11353 = ((function (___$1){
return (function __GT_t11353(fn1__$1,___$2,meta11351__$1,ch__$2,f__$2,map_LT___$2,meta11354){return (new cljs.core.async.t11353(fn1__$1,___$2,meta11351__$1,ch__$2,f__$2,map_LT___$2,meta11354));
});})(___$1))
;
}
return (new cljs.core.async.t11353(fn1,___$1,self__.meta11351,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11352){var self__ = this;
var _11352__$1 = this;return self__.meta11351;
});
cljs.core.async.t11350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11352,meta11351__$1){var self__ = this;
var _11352__$1 = this;return (new cljs.core.async.t11350(self__.ch,self__.f,self__.map_LT_,meta11351__$1));
});
cljs.core.async.__GT_t11350 = (function __GT_t11350(ch__$1,f__$1,map_LT___$1,meta11351){return (new cljs.core.async.t11350(ch__$1,f__$1,map_LT___$1,meta11351));
});
}
return (new cljs.core.async.t11350(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11359 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11359 = (function (ch,f,map_GT_,meta11360){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11360 = meta11360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11359.cljs$lang$type = true;
cljs.core.async.t11359.cljs$lang$ctorStr = "cljs.core.async/t11359";
cljs.core.async.t11359.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11359");
});
cljs.core.async.t11359.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11359.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11359.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11361){var self__ = this;
var _11361__$1 = this;return self__.meta11360;
});
cljs.core.async.t11359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11361,meta11360__$1){var self__ = this;
var _11361__$1 = this;return (new cljs.core.async.t11359(self__.ch,self__.f,self__.map_GT_,meta11360__$1));
});
cljs.core.async.__GT_t11359 = (function __GT_t11359(ch__$1,f__$1,map_GT___$1,meta11360){return (new cljs.core.async.t11359(ch__$1,f__$1,map_GT___$1,meta11360));
});
}
return (new cljs.core.async.t11359(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11365 = (function (ch,p,filter_GT_,meta11366){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11366 = meta11366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11365.cljs$lang$type = true;
cljs.core.async.t11365.cljs$lang$ctorStr = "cljs.core.async/t11365";
cljs.core.async.t11365.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11365");
});
cljs.core.async.t11365.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11365.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11365.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11367){var self__ = this;
var _11367__$1 = this;return self__.meta11366;
});
cljs.core.async.t11365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11367,meta11366__$1){var self__ = this;
var _11367__$1 = this;return (new cljs.core.async.t11365(self__.ch,self__.p,self__.filter_GT_,meta11366__$1));
});
cljs.core.async.__GT_t11365 = (function __GT_t11365(ch__$1,p__$1,filter_GT___$1,meta11366){return (new cljs.core.async.t11365(ch__$1,p__$1,filter_GT___$1,meta11366));
});
}
return (new cljs.core.async.t11365(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___11450 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___11450,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___11450,out){
return (function (state_11429){var state_val_11430 = (state_11429[(1)]);if((state_val_11430 === (7)))
{var inst_11425 = (state_11429[(2)]);var state_11429__$1 = state_11429;var statearr_11431_11451 = state_11429__$1;(statearr_11431_11451[(2)] = inst_11425);
(statearr_11431_11451[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (1)))
{var state_11429__$1 = state_11429;var statearr_11432_11452 = state_11429__$1;(statearr_11432_11452[(2)] = null);
(statearr_11432_11452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (4)))
{var inst_11411 = (state_11429[(7)]);var inst_11411__$1 = (state_11429[(2)]);var inst_11412 = (inst_11411__$1 == null);var state_11429__$1 = (function (){var statearr_11433 = state_11429;(statearr_11433[(7)] = inst_11411__$1);
return statearr_11433;
})();if(cljs.core.truth_(inst_11412))
{var statearr_11434_11453 = state_11429__$1;(statearr_11434_11453[(1)] = (5));
} else
{var statearr_11435_11454 = state_11429__$1;(statearr_11435_11454[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (6)))
{var inst_11411 = (state_11429[(7)]);var inst_11416 = p.call(null,inst_11411);var state_11429__$1 = state_11429;if(cljs.core.truth_(inst_11416))
{var statearr_11436_11455 = state_11429__$1;(statearr_11436_11455[(1)] = (8));
} else
{var statearr_11437_11456 = state_11429__$1;(statearr_11437_11456[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (3)))
{var inst_11427 = (state_11429[(2)]);var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11429__$1,inst_11427);
} else
{if((state_val_11430 === (2)))
{var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11429__$1,(4),ch);
} else
{if((state_val_11430 === (11)))
{var inst_11419 = (state_11429[(2)]);var state_11429__$1 = state_11429;var statearr_11438_11457 = state_11429__$1;(statearr_11438_11457[(2)] = inst_11419);
(statearr_11438_11457[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (9)))
{var state_11429__$1 = state_11429;var statearr_11439_11458 = state_11429__$1;(statearr_11439_11458[(2)] = null);
(statearr_11439_11458[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (5)))
{var inst_11414 = cljs.core.async.close_BANG_.call(null,out);var state_11429__$1 = state_11429;var statearr_11440_11459 = state_11429__$1;(statearr_11440_11459[(2)] = inst_11414);
(statearr_11440_11459[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (10)))
{var inst_11422 = (state_11429[(2)]);var state_11429__$1 = (function (){var statearr_11441 = state_11429;(statearr_11441[(8)] = inst_11422);
return statearr_11441;
})();var statearr_11442_11460 = state_11429__$1;(statearr_11442_11460[(2)] = null);
(statearr_11442_11460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11430 === (8)))
{var inst_11411 = (state_11429[(7)]);var state_11429__$1 = state_11429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11429__$1,(11),out,inst_11411);
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
});})(c__6677__auto___11450,out))
;return ((function (switch__6612__auto__,c__6677__auto___11450,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11446 = [null,null,null,null,null,null,null,null,null];(statearr_11446[(0)] = state_machine__6613__auto__);
(statearr_11446[(1)] = (1));
return statearr_11446;
});
var state_machine__6613__auto____1 = (function (state_11429){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11429);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11447){if((e11447 instanceof Object))
{var ex__6616__auto__ = e11447;var statearr_11448_11461 = state_11429;(statearr_11448_11461[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11462 = state_11429;
state_11429 = G__11462;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11429){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___11450,out))
})();var state__6679__auto__ = (function (){var statearr_11449 = f__6678__auto__.call(null);(statearr_11449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___11450);
return statearr_11449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___11450,out))
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
return (function (state_11614){var state_val_11615 = (state_11614[(1)]);if((state_val_11615 === (7)))
{var inst_11610 = (state_11614[(2)]);var state_11614__$1 = state_11614;var statearr_11616_11653 = state_11614__$1;(statearr_11616_11653[(2)] = inst_11610);
(statearr_11616_11653[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (20)))
{var inst_11585 = (state_11614[(7)]);var inst_11596 = (state_11614[(2)]);var inst_11597 = cljs.core.next.call(null,inst_11585);var inst_11571 = inst_11597;var inst_11572 = null;var inst_11573 = (0);var inst_11574 = (0);var state_11614__$1 = (function (){var statearr_11617 = state_11614;(statearr_11617[(8)] = inst_11572);
(statearr_11617[(9)] = inst_11571);
(statearr_11617[(10)] = inst_11574);
(statearr_11617[(11)] = inst_11573);
(statearr_11617[(12)] = inst_11596);
return statearr_11617;
})();var statearr_11618_11654 = state_11614__$1;(statearr_11618_11654[(2)] = null);
(statearr_11618_11654[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (1)))
{var state_11614__$1 = state_11614;var statearr_11619_11655 = state_11614__$1;(statearr_11619_11655[(2)] = null);
(statearr_11619_11655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (4)))
{var inst_11560 = (state_11614[(13)]);var inst_11560__$1 = (state_11614[(2)]);var inst_11561 = (inst_11560__$1 == null);var state_11614__$1 = (function (){var statearr_11623 = state_11614;(statearr_11623[(13)] = inst_11560__$1);
return statearr_11623;
})();if(cljs.core.truth_(inst_11561))
{var statearr_11624_11656 = state_11614__$1;(statearr_11624_11656[(1)] = (5));
} else
{var statearr_11625_11657 = state_11614__$1;(statearr_11625_11657[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (15)))
{var state_11614__$1 = state_11614;var statearr_11626_11658 = state_11614__$1;(statearr_11626_11658[(2)] = null);
(statearr_11626_11658[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (13)))
{var inst_11572 = (state_11614[(8)]);var inst_11571 = (state_11614[(9)]);var inst_11574 = (state_11614[(10)]);var inst_11573 = (state_11614[(11)]);var inst_11581 = (state_11614[(2)]);var inst_11582 = (inst_11574 + (1));var tmp11620 = inst_11572;var tmp11621 = inst_11571;var tmp11622 = inst_11573;var inst_11571__$1 = tmp11621;var inst_11572__$1 = tmp11620;var inst_11573__$1 = tmp11622;var inst_11574__$1 = inst_11582;var state_11614__$1 = (function (){var statearr_11627 = state_11614;(statearr_11627[(8)] = inst_11572__$1);
(statearr_11627[(9)] = inst_11571__$1);
(statearr_11627[(14)] = inst_11581);
(statearr_11627[(10)] = inst_11574__$1);
(statearr_11627[(11)] = inst_11573__$1);
return statearr_11627;
})();var statearr_11628_11659 = state_11614__$1;(statearr_11628_11659[(2)] = null);
(statearr_11628_11659[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (6)))
{var inst_11560 = (state_11614[(13)]);var inst_11565 = f.call(null,inst_11560);var inst_11570 = cljs.core.seq.call(null,inst_11565);var inst_11571 = inst_11570;var inst_11572 = null;var inst_11573 = (0);var inst_11574 = (0);var state_11614__$1 = (function (){var statearr_11629 = state_11614;(statearr_11629[(8)] = inst_11572);
(statearr_11629[(9)] = inst_11571);
(statearr_11629[(10)] = inst_11574);
(statearr_11629[(11)] = inst_11573);
return statearr_11629;
})();var statearr_11630_11660 = state_11614__$1;(statearr_11630_11660[(2)] = null);
(statearr_11630_11660[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (17)))
{var inst_11585 = (state_11614[(7)]);var inst_11589 = cljs.core.chunk_first.call(null,inst_11585);var inst_11590 = cljs.core.chunk_rest.call(null,inst_11585);var inst_11591 = cljs.core.count.call(null,inst_11589);var inst_11571 = inst_11590;var inst_11572 = inst_11589;var inst_11573 = inst_11591;var inst_11574 = (0);var state_11614__$1 = (function (){var statearr_11631 = state_11614;(statearr_11631[(8)] = inst_11572);
(statearr_11631[(9)] = inst_11571);
(statearr_11631[(10)] = inst_11574);
(statearr_11631[(11)] = inst_11573);
return statearr_11631;
})();var statearr_11632_11661 = state_11614__$1;(statearr_11632_11661[(2)] = null);
(statearr_11632_11661[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (3)))
{var inst_11612 = (state_11614[(2)]);var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11614__$1,inst_11612);
} else
{if((state_val_11615 === (12)))
{var inst_11605 = (state_11614[(2)]);var state_11614__$1 = state_11614;var statearr_11633_11662 = state_11614__$1;(statearr_11633_11662[(2)] = inst_11605);
(statearr_11633_11662[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (2)))
{var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11614__$1,(4),in$);
} else
{if((state_val_11615 === (19)))
{var inst_11600 = (state_11614[(2)]);var state_11614__$1 = state_11614;var statearr_11634_11663 = state_11614__$1;(statearr_11634_11663[(2)] = inst_11600);
(statearr_11634_11663[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (11)))
{var inst_11585 = (state_11614[(7)]);var inst_11571 = (state_11614[(9)]);var inst_11585__$1 = cljs.core.seq.call(null,inst_11571);var state_11614__$1 = (function (){var statearr_11635 = state_11614;(statearr_11635[(7)] = inst_11585__$1);
return statearr_11635;
})();if(inst_11585__$1)
{var statearr_11636_11664 = state_11614__$1;(statearr_11636_11664[(1)] = (14));
} else
{var statearr_11637_11665 = state_11614__$1;(statearr_11637_11665[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (9)))
{var inst_11607 = (state_11614[(2)]);var state_11614__$1 = (function (){var statearr_11638 = state_11614;(statearr_11638[(15)] = inst_11607);
return statearr_11638;
})();var statearr_11639_11666 = state_11614__$1;(statearr_11639_11666[(2)] = null);
(statearr_11639_11666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (5)))
{var inst_11563 = cljs.core.async.close_BANG_.call(null,out);var state_11614__$1 = state_11614;var statearr_11640_11667 = state_11614__$1;(statearr_11640_11667[(2)] = inst_11563);
(statearr_11640_11667[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (14)))
{var inst_11585 = (state_11614[(7)]);var inst_11587 = cljs.core.chunked_seq_QMARK_.call(null,inst_11585);var state_11614__$1 = state_11614;if(inst_11587)
{var statearr_11641_11668 = state_11614__$1;(statearr_11641_11668[(1)] = (17));
} else
{var statearr_11642_11669 = state_11614__$1;(statearr_11642_11669[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (16)))
{var inst_11603 = (state_11614[(2)]);var state_11614__$1 = state_11614;var statearr_11643_11670 = state_11614__$1;(statearr_11643_11670[(2)] = inst_11603);
(statearr_11643_11670[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11615 === (10)))
{var inst_11572 = (state_11614[(8)]);var inst_11574 = (state_11614[(10)]);var inst_11579 = cljs.core._nth.call(null,inst_11572,inst_11574);var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11614__$1,(13),out,inst_11579);
} else
{if((state_val_11615 === (18)))
{var inst_11585 = (state_11614[(7)]);var inst_11594 = cljs.core.first.call(null,inst_11585);var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11614__$1,(20),out,inst_11594);
} else
{if((state_val_11615 === (8)))
{var inst_11574 = (state_11614[(10)]);var inst_11573 = (state_11614[(11)]);var inst_11576 = (inst_11574 < inst_11573);var inst_11577 = inst_11576;var state_11614__$1 = state_11614;if(cljs.core.truth_(inst_11577))
{var statearr_11644_11671 = state_11614__$1;(statearr_11644_11671[(1)] = (10));
} else
{var statearr_11645_11672 = state_11614__$1;(statearr_11645_11672[(1)] = (11));
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
var state_machine__6613__auto____0 = (function (){var statearr_11649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11649[(0)] = state_machine__6613__auto__);
(statearr_11649[(1)] = (1));
return statearr_11649;
});
var state_machine__6613__auto____1 = (function (state_11614){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11614);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11650){if((e11650 instanceof Object))
{var ex__6616__auto__ = e11650;var statearr_11651_11673 = state_11614;(statearr_11651_11673[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11614);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11674 = state_11614;
state_11614 = G__11674;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11614){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_11652 = f__6678__auto__.call(null);(statearr_11652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_11652;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6677__auto___11755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___11755){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___11755){
return (function (state_11734){var state_val_11735 = (state_11734[(1)]);if((state_val_11735 === (7)))
{var inst_11730 = (state_11734[(2)]);var state_11734__$1 = state_11734;var statearr_11736_11756 = state_11734__$1;(statearr_11736_11756[(2)] = inst_11730);
(statearr_11736_11756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11735 === (1)))
{var state_11734__$1 = state_11734;var statearr_11737_11757 = state_11734__$1;(statearr_11737_11757[(2)] = null);
(statearr_11737_11757[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11735 === (4)))
{var inst_11717 = (state_11734[(7)]);var inst_11717__$1 = (state_11734[(2)]);var inst_11718 = (inst_11717__$1 == null);var state_11734__$1 = (function (){var statearr_11738 = state_11734;(statearr_11738[(7)] = inst_11717__$1);
return statearr_11738;
})();if(cljs.core.truth_(inst_11718))
{var statearr_11739_11758 = state_11734__$1;(statearr_11739_11758[(1)] = (5));
} else
{var statearr_11740_11759 = state_11734__$1;(statearr_11740_11759[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11735 === (6)))
{var inst_11717 = (state_11734[(7)]);var state_11734__$1 = state_11734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11734__$1,(11),to,inst_11717);
} else
{if((state_val_11735 === (3)))
{var inst_11732 = (state_11734[(2)]);var state_11734__$1 = state_11734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11734__$1,inst_11732);
} else
{if((state_val_11735 === (2)))
{var state_11734__$1 = state_11734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11734__$1,(4),from);
} else
{if((state_val_11735 === (11)))
{var inst_11727 = (state_11734[(2)]);var state_11734__$1 = (function (){var statearr_11741 = state_11734;(statearr_11741[(8)] = inst_11727);
return statearr_11741;
})();var statearr_11742_11760 = state_11734__$1;(statearr_11742_11760[(2)] = null);
(statearr_11742_11760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11735 === (9)))
{var state_11734__$1 = state_11734;var statearr_11743_11761 = state_11734__$1;(statearr_11743_11761[(2)] = null);
(statearr_11743_11761[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11735 === (5)))
{var state_11734__$1 = state_11734;if(cljs.core.truth_(close_QMARK_))
{var statearr_11744_11762 = state_11734__$1;(statearr_11744_11762[(1)] = (8));
} else
{var statearr_11745_11763 = state_11734__$1;(statearr_11745_11763[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11735 === (10)))
{var inst_11724 = (state_11734[(2)]);var state_11734__$1 = state_11734;var statearr_11746_11764 = state_11734__$1;(statearr_11746_11764[(2)] = inst_11724);
(statearr_11746_11764[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11735 === (8)))
{var inst_11721 = cljs.core.async.close_BANG_.call(null,to);var state_11734__$1 = state_11734;var statearr_11747_11765 = state_11734__$1;(statearr_11747_11765[(2)] = inst_11721);
(statearr_11747_11765[(1)] = (10));
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
});})(c__6677__auto___11755))
;return ((function (switch__6612__auto__,c__6677__auto___11755){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11751 = [null,null,null,null,null,null,null,null,null];(statearr_11751[(0)] = state_machine__6613__auto__);
(statearr_11751[(1)] = (1));
return statearr_11751;
});
var state_machine__6613__auto____1 = (function (state_11734){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11734);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11752){if((e11752 instanceof Object))
{var ex__6616__auto__ = e11752;var statearr_11753_11766 = state_11734;(statearr_11753_11766[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11767 = state_11734;
state_11734 = G__11767;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11734){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___11755))
})();var state__6679__auto__ = (function (){var statearr_11754 = f__6678__auto__.call(null);(statearr_11754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___11755);
return statearr_11754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___11755))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6677__auto___11854 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___11854,tc,fc){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___11854,tc,fc){
return (function (state_11832){var state_val_11833 = (state_11832[(1)]);if((state_val_11833 === (7)))
{var inst_11828 = (state_11832[(2)]);var state_11832__$1 = state_11832;var statearr_11834_11855 = state_11832__$1;(statearr_11834_11855[(2)] = inst_11828);
(statearr_11834_11855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11833 === (1)))
{var state_11832__$1 = state_11832;var statearr_11835_11856 = state_11832__$1;(statearr_11835_11856[(2)] = null);
(statearr_11835_11856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11833 === (4)))
{var inst_11813 = (state_11832[(7)]);var inst_11813__$1 = (state_11832[(2)]);var inst_11814 = (inst_11813__$1 == null);var state_11832__$1 = (function (){var statearr_11836 = state_11832;(statearr_11836[(7)] = inst_11813__$1);
return statearr_11836;
})();if(cljs.core.truth_(inst_11814))
{var statearr_11837_11857 = state_11832__$1;(statearr_11837_11857[(1)] = (5));
} else
{var statearr_11838_11858 = state_11832__$1;(statearr_11838_11858[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11833 === (6)))
{var inst_11813 = (state_11832[(7)]);var inst_11819 = p.call(null,inst_11813);var state_11832__$1 = state_11832;if(cljs.core.truth_(inst_11819))
{var statearr_11839_11859 = state_11832__$1;(statearr_11839_11859[(1)] = (9));
} else
{var statearr_11840_11860 = state_11832__$1;(statearr_11840_11860[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11833 === (3)))
{var inst_11830 = (state_11832[(2)]);var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11832__$1,inst_11830);
} else
{if((state_val_11833 === (2)))
{var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11832__$1,(4),ch);
} else
{if((state_val_11833 === (11)))
{var inst_11813 = (state_11832[(7)]);var inst_11823 = (state_11832[(2)]);var state_11832__$1 = state_11832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11832__$1,(8),inst_11823,inst_11813);
} else
{if((state_val_11833 === (9)))
{var state_11832__$1 = state_11832;var statearr_11841_11861 = state_11832__$1;(statearr_11841_11861[(2)] = tc);
(statearr_11841_11861[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11833 === (5)))
{var inst_11816 = cljs.core.async.close_BANG_.call(null,tc);var inst_11817 = cljs.core.async.close_BANG_.call(null,fc);var state_11832__$1 = (function (){var statearr_11842 = state_11832;(statearr_11842[(8)] = inst_11816);
return statearr_11842;
})();var statearr_11843_11862 = state_11832__$1;(statearr_11843_11862[(2)] = inst_11817);
(statearr_11843_11862[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11833 === (10)))
{var state_11832__$1 = state_11832;var statearr_11844_11863 = state_11832__$1;(statearr_11844_11863[(2)] = fc);
(statearr_11844_11863[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11833 === (8)))
{var inst_11825 = (state_11832[(2)]);var state_11832__$1 = (function (){var statearr_11845 = state_11832;(statearr_11845[(9)] = inst_11825);
return statearr_11845;
})();var statearr_11846_11864 = state_11832__$1;(statearr_11846_11864[(2)] = null);
(statearr_11846_11864[(1)] = (2));
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
});})(c__6677__auto___11854,tc,fc))
;return ((function (switch__6612__auto__,c__6677__auto___11854,tc,fc){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_11850 = [null,null,null,null,null,null,null,null,null,null];(statearr_11850[(0)] = state_machine__6613__auto__);
(statearr_11850[(1)] = (1));
return statearr_11850;
});
var state_machine__6613__auto____1 = (function (state_11832){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11832);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11851){if((e11851 instanceof Object))
{var ex__6616__auto__ = e11851;var statearr_11852_11865 = state_11832;(statearr_11852_11865[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11866 = state_11832;
state_11832 = G__11866;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11832){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___11854,tc,fc))
})();var state__6679__auto__ = (function (){var statearr_11853 = f__6678__auto__.call(null);(statearr_11853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___11854);
return statearr_11853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___11854,tc,fc))
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
return (function (state_11913){var state_val_11914 = (state_11913[(1)]);if((state_val_11914 === (7)))
{var inst_11909 = (state_11913[(2)]);var state_11913__$1 = state_11913;var statearr_11915_11931 = state_11913__$1;(statearr_11915_11931[(2)] = inst_11909);
(statearr_11915_11931[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (6)))
{var inst_11899 = (state_11913[(7)]);var inst_11902 = (state_11913[(8)]);var inst_11906 = f.call(null,inst_11899,inst_11902);var inst_11899__$1 = inst_11906;var state_11913__$1 = (function (){var statearr_11916 = state_11913;(statearr_11916[(7)] = inst_11899__$1);
return statearr_11916;
})();var statearr_11917_11932 = state_11913__$1;(statearr_11917_11932[(2)] = null);
(statearr_11917_11932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (5)))
{var inst_11899 = (state_11913[(7)]);var state_11913__$1 = state_11913;var statearr_11918_11933 = state_11913__$1;(statearr_11918_11933[(2)] = inst_11899);
(statearr_11918_11933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (4)))
{var inst_11902 = (state_11913[(8)]);var inst_11902__$1 = (state_11913[(2)]);var inst_11903 = (inst_11902__$1 == null);var state_11913__$1 = (function (){var statearr_11919 = state_11913;(statearr_11919[(8)] = inst_11902__$1);
return statearr_11919;
})();if(cljs.core.truth_(inst_11903))
{var statearr_11920_11934 = state_11913__$1;(statearr_11920_11934[(1)] = (5));
} else
{var statearr_11921_11935 = state_11913__$1;(statearr_11921_11935[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (3)))
{var inst_11911 = (state_11913[(2)]);var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11913__$1,inst_11911);
} else
{if((state_val_11914 === (2)))
{var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11913__$1,(4),ch);
} else
{if((state_val_11914 === (1)))
{var inst_11899 = init;var state_11913__$1 = (function (){var statearr_11922 = state_11913;(statearr_11922[(7)] = inst_11899);
return statearr_11922;
})();var statearr_11923_11936 = state_11913__$1;(statearr_11923_11936[(2)] = null);
(statearr_11923_11936[(1)] = (2));
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
var state_machine__6613__auto____0 = (function (){var statearr_11927 = [null,null,null,null,null,null,null,null,null];(statearr_11927[(0)] = state_machine__6613__auto__);
(statearr_11927[(1)] = (1));
return statearr_11927;
});
var state_machine__6613__auto____1 = (function (state_11913){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_11913);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e11928){if((e11928 instanceof Object))
{var ex__6616__auto__ = e11928;var statearr_11929_11937 = state_11913;(statearr_11929_11937[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11938 = state_11913;
state_11913 = G__11938;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_11913){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_11913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_11930 = f__6678__auto__.call(null);(statearr_11930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_11930;
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
return (function (state_12000){var state_val_12001 = (state_12000[(1)]);if((state_val_12001 === (7)))
{var inst_11981 = (state_12000[(7)]);var inst_11986 = (state_12000[(2)]);var inst_11987 = cljs.core.next.call(null,inst_11981);var inst_11981__$1 = inst_11987;var state_12000__$1 = (function (){var statearr_12002 = state_12000;(statearr_12002[(7)] = inst_11981__$1);
(statearr_12002[(8)] = inst_11986);
return statearr_12002;
})();var statearr_12003_12021 = state_12000__$1;(statearr_12003_12021[(2)] = null);
(statearr_12003_12021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (1)))
{var inst_11980 = cljs.core.seq.call(null,coll);var inst_11981 = inst_11980;var state_12000__$1 = (function (){var statearr_12004 = state_12000;(statearr_12004[(7)] = inst_11981);
return statearr_12004;
})();var statearr_12005_12022 = state_12000__$1;(statearr_12005_12022[(2)] = null);
(statearr_12005_12022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (4)))
{var inst_11981 = (state_12000[(7)]);var inst_11984 = cljs.core.first.call(null,inst_11981);var state_12000__$1 = state_12000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12000__$1,(7),ch,inst_11984);
} else
{if((state_val_12001 === (6)))
{var inst_11996 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12006_12023 = state_12000__$1;(statearr_12006_12023[(2)] = inst_11996);
(statearr_12006_12023[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (3)))
{var inst_11998 = (state_12000[(2)]);var state_12000__$1 = state_12000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12000__$1,inst_11998);
} else
{if((state_val_12001 === (2)))
{var inst_11981 = (state_12000[(7)]);var state_12000__$1 = state_12000;if(cljs.core.truth_(inst_11981))
{var statearr_12007_12024 = state_12000__$1;(statearr_12007_12024[(1)] = (4));
} else
{var statearr_12008_12025 = state_12000__$1;(statearr_12008_12025[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (9)))
{var state_12000__$1 = state_12000;var statearr_12009_12026 = state_12000__$1;(statearr_12009_12026[(2)] = null);
(statearr_12009_12026[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (5)))
{var state_12000__$1 = state_12000;if(cljs.core.truth_(close_QMARK_))
{var statearr_12010_12027 = state_12000__$1;(statearr_12010_12027[(1)] = (8));
} else
{var statearr_12011_12028 = state_12000__$1;(statearr_12011_12028[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (10)))
{var inst_11994 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12012_12029 = state_12000__$1;(statearr_12012_12029[(2)] = inst_11994);
(statearr_12012_12029[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (8)))
{var inst_11991 = cljs.core.async.close_BANG_.call(null,ch);var state_12000__$1 = state_12000;var statearr_12013_12030 = state_12000__$1;(statearr_12013_12030[(2)] = inst_11991);
(statearr_12013_12030[(1)] = (10));
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
var state_machine__6613__auto____0 = (function (){var statearr_12017 = [null,null,null,null,null,null,null,null,null];(statearr_12017[(0)] = state_machine__6613__auto__);
(statearr_12017[(1)] = (1));
return statearr_12017;
});
var state_machine__6613__auto____1 = (function (state_12000){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12000);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12018){if((e12018 instanceof Object))
{var ex__6616__auto__ = e12018;var statearr_12019_12031 = state_12000;(statearr_12019_12031[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12032 = state_12000;
state_12000 = G__12032;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12000){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_12020 = f__6678__auto__.call(null);(statearr_12020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_12020;
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
cljs.core.async.Mux = (function (){var obj12034 = {};return obj12034;
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
cljs.core.async.Mult = (function (){var obj12036 = {};return obj12036;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12260 = (function (cs,ch,mult,meta12261){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12261 = meta12261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12260.cljs$lang$type = true;
cljs.core.async.t12260.cljs$lang$ctorStr = "cljs.core.async/t12260";
cljs.core.async.t12260.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12260");
});})(cs))
;
cljs.core.async.t12260.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12260.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12260.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12260.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12260.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12262){var self__ = this;
var _12262__$1 = this;return self__.meta12261;
});})(cs))
;
cljs.core.async.t12260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12262,meta12261__$1){var self__ = this;
var _12262__$1 = this;return (new cljs.core.async.t12260(self__.cs,self__.ch,self__.mult,meta12261__$1));
});})(cs))
;
cljs.core.async.__GT_t12260 = ((function (cs){
return (function __GT_t12260(cs__$1,ch__$1,mult__$1,meta12261){return (new cljs.core.async.t12260(cs__$1,ch__$1,mult__$1,meta12261));
});})(cs))
;
}
return (new cljs.core.async.t12260(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6677__auto___12483 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___12483,cs,m,dchan,dctr,done){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___12483,cs,m,dchan,dctr,done){
return (function (state_12397){var state_val_12398 = (state_12397[(1)]);if((state_val_12398 === (7)))
{var inst_12393 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12399_12484 = state_12397__$1;(statearr_12399_12484[(2)] = inst_12393);
(statearr_12399_12484[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (20)))
{var inst_12294 = (state_12397[(7)]);var inst_12304 = cljs.core.first.call(null,inst_12294);var inst_12305 = cljs.core.nth.call(null,inst_12304,(0),null);var inst_12306 = cljs.core.nth.call(null,inst_12304,(1),null);var state_12397__$1 = (function (){var statearr_12400 = state_12397;(statearr_12400[(8)] = inst_12305);
return statearr_12400;
})();if(cljs.core.truth_(inst_12306))
{var statearr_12401_12485 = state_12397__$1;(statearr_12401_12485[(1)] = (22));
} else
{var statearr_12402_12486 = state_12397__$1;(statearr_12402_12486[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (27)))
{var inst_12334 = (state_12397[(9)]);var inst_12336 = (state_12397[(10)]);var inst_12341 = cljs.core._nth.call(null,inst_12334,inst_12336);var state_12397__$1 = (function (){var statearr_12403 = state_12397;(statearr_12403[(11)] = inst_12341);
return statearr_12403;
})();var statearr_12404_12487 = state_12397__$1;(statearr_12404_12487[(2)] = null);
(statearr_12404_12487[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (1)))
{var state_12397__$1 = state_12397;var statearr_12405_12488 = state_12397__$1;(statearr_12405_12488[(2)] = null);
(statearr_12405_12488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (24)))
{var inst_12294 = (state_12397[(7)]);var inst_12311 = (state_12397[(2)]);var inst_12312 = cljs.core.next.call(null,inst_12294);var inst_12274 = inst_12312;var inst_12275 = null;var inst_12276 = (0);var inst_12277 = (0);var state_12397__$1 = (function (){var statearr_12406 = state_12397;(statearr_12406[(12)] = inst_12276);
(statearr_12406[(13)] = inst_12274);
(statearr_12406[(14)] = inst_12311);
(statearr_12406[(15)] = inst_12275);
(statearr_12406[(16)] = inst_12277);
return statearr_12406;
})();var statearr_12407_12489 = state_12397__$1;(statearr_12407_12489[(2)] = null);
(statearr_12407_12489[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (39)))
{var inst_12354 = (state_12397[(17)]);var inst_12372 = (state_12397[(2)]);var inst_12373 = cljs.core.next.call(null,inst_12354);var inst_12333 = inst_12373;var inst_12334 = null;var inst_12335 = (0);var inst_12336 = (0);var state_12397__$1 = (function (){var statearr_12411 = state_12397;(statearr_12411[(18)] = inst_12372);
(statearr_12411[(19)] = inst_12333);
(statearr_12411[(20)] = inst_12335);
(statearr_12411[(9)] = inst_12334);
(statearr_12411[(10)] = inst_12336);
return statearr_12411;
})();var statearr_12412_12490 = state_12397__$1;(statearr_12412_12490[(2)] = null);
(statearr_12412_12490[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (4)))
{var inst_12265 = (state_12397[(21)]);var inst_12265__$1 = (state_12397[(2)]);var inst_12266 = (inst_12265__$1 == null);var state_12397__$1 = (function (){var statearr_12413 = state_12397;(statearr_12413[(21)] = inst_12265__$1);
return statearr_12413;
})();if(cljs.core.truth_(inst_12266))
{var statearr_12414_12491 = state_12397__$1;(statearr_12414_12491[(1)] = (5));
} else
{var statearr_12415_12492 = state_12397__$1;(statearr_12415_12492[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (15)))
{var inst_12276 = (state_12397[(12)]);var inst_12274 = (state_12397[(13)]);var inst_12275 = (state_12397[(15)]);var inst_12277 = (state_12397[(16)]);var inst_12290 = (state_12397[(2)]);var inst_12291 = (inst_12277 + (1));var tmp12408 = inst_12276;var tmp12409 = inst_12274;var tmp12410 = inst_12275;var inst_12274__$1 = tmp12409;var inst_12275__$1 = tmp12410;var inst_12276__$1 = tmp12408;var inst_12277__$1 = inst_12291;var state_12397__$1 = (function (){var statearr_12416 = state_12397;(statearr_12416[(12)] = inst_12276__$1);
(statearr_12416[(13)] = inst_12274__$1);
(statearr_12416[(22)] = inst_12290);
(statearr_12416[(15)] = inst_12275__$1);
(statearr_12416[(16)] = inst_12277__$1);
return statearr_12416;
})();var statearr_12417_12493 = state_12397__$1;(statearr_12417_12493[(2)] = null);
(statearr_12417_12493[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (21)))
{var inst_12315 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12418_12494 = state_12397__$1;(statearr_12418_12494[(2)] = inst_12315);
(statearr_12418_12494[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (31)))
{var inst_12341 = (state_12397[(11)]);var inst_12342 = (state_12397[(2)]);var inst_12343 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12344 = cljs.core.async.untap_STAR_.call(null,m,inst_12341);var state_12397__$1 = (function (){var statearr_12419 = state_12397;(statearr_12419[(23)] = inst_12343);
(statearr_12419[(24)] = inst_12342);
return statearr_12419;
})();var statearr_12420_12495 = state_12397__$1;(statearr_12420_12495[(2)] = inst_12344);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12397__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (32)))
{var inst_12265 = (state_12397[(21)]);var inst_12341 = (state_12397[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12397,(31),Object,null,(30));var inst_12348 = cljs.core.async.put_BANG_.call(null,inst_12341,inst_12265,done);var state_12397__$1 = state_12397;var statearr_12421_12496 = state_12397__$1;(statearr_12421_12496[(2)] = inst_12348);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12397__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (40)))
{var inst_12363 = (state_12397[(25)]);var inst_12364 = (state_12397[(2)]);var inst_12365 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12366 = cljs.core.async.untap_STAR_.call(null,m,inst_12363);var state_12397__$1 = (function (){var statearr_12422 = state_12397;(statearr_12422[(26)] = inst_12364);
(statearr_12422[(27)] = inst_12365);
return statearr_12422;
})();var statearr_12423_12497 = state_12397__$1;(statearr_12423_12497[(2)] = inst_12366);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12397__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (33)))
{var inst_12354 = (state_12397[(17)]);var inst_12356 = cljs.core.chunked_seq_QMARK_.call(null,inst_12354);var state_12397__$1 = state_12397;if(inst_12356)
{var statearr_12424_12498 = state_12397__$1;(statearr_12424_12498[(1)] = (36));
} else
{var statearr_12425_12499 = state_12397__$1;(statearr_12425_12499[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (13)))
{var inst_12284 = (state_12397[(28)]);var inst_12287 = cljs.core.async.close_BANG_.call(null,inst_12284);var state_12397__$1 = state_12397;var statearr_12426_12500 = state_12397__$1;(statearr_12426_12500[(2)] = inst_12287);
(statearr_12426_12500[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (22)))
{var inst_12305 = (state_12397[(8)]);var inst_12308 = cljs.core.async.close_BANG_.call(null,inst_12305);var state_12397__$1 = state_12397;var statearr_12427_12501 = state_12397__$1;(statearr_12427_12501[(2)] = inst_12308);
(statearr_12427_12501[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (36)))
{var inst_12354 = (state_12397[(17)]);var inst_12358 = cljs.core.chunk_first.call(null,inst_12354);var inst_12359 = cljs.core.chunk_rest.call(null,inst_12354);var inst_12360 = cljs.core.count.call(null,inst_12358);var inst_12333 = inst_12359;var inst_12334 = inst_12358;var inst_12335 = inst_12360;var inst_12336 = (0);var state_12397__$1 = (function (){var statearr_12428 = state_12397;(statearr_12428[(19)] = inst_12333);
(statearr_12428[(20)] = inst_12335);
(statearr_12428[(9)] = inst_12334);
(statearr_12428[(10)] = inst_12336);
return statearr_12428;
})();var statearr_12429_12502 = state_12397__$1;(statearr_12429_12502[(2)] = null);
(statearr_12429_12502[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (41)))
{var inst_12363 = (state_12397[(25)]);var inst_12265 = (state_12397[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12397,(40),Object,null,(39));var inst_12370 = cljs.core.async.put_BANG_.call(null,inst_12363,inst_12265,done);var state_12397__$1 = state_12397;var statearr_12430_12503 = state_12397__$1;(statearr_12430_12503[(2)] = inst_12370);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12397__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (43)))
{var state_12397__$1 = state_12397;var statearr_12431_12504 = state_12397__$1;(statearr_12431_12504[(2)] = null);
(statearr_12431_12504[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (29)))
{var inst_12381 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12432_12505 = state_12397__$1;(statearr_12432_12505[(2)] = inst_12381);
(statearr_12432_12505[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (44)))
{var inst_12390 = (state_12397[(2)]);var state_12397__$1 = (function (){var statearr_12433 = state_12397;(statearr_12433[(29)] = inst_12390);
return statearr_12433;
})();var statearr_12434_12506 = state_12397__$1;(statearr_12434_12506[(2)] = null);
(statearr_12434_12506[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (6)))
{var inst_12325 = (state_12397[(30)]);var inst_12324 = cljs.core.deref.call(null,cs);var inst_12325__$1 = cljs.core.keys.call(null,inst_12324);var inst_12326 = cljs.core.count.call(null,inst_12325__$1);var inst_12327 = cljs.core.reset_BANG_.call(null,dctr,inst_12326);var inst_12332 = cljs.core.seq.call(null,inst_12325__$1);var inst_12333 = inst_12332;var inst_12334 = null;var inst_12335 = (0);var inst_12336 = (0);var state_12397__$1 = (function (){var statearr_12435 = state_12397;(statearr_12435[(19)] = inst_12333);
(statearr_12435[(20)] = inst_12335);
(statearr_12435[(30)] = inst_12325__$1);
(statearr_12435[(31)] = inst_12327);
(statearr_12435[(9)] = inst_12334);
(statearr_12435[(10)] = inst_12336);
return statearr_12435;
})();var statearr_12436_12507 = state_12397__$1;(statearr_12436_12507[(2)] = null);
(statearr_12436_12507[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (28)))
{var inst_12354 = (state_12397[(17)]);var inst_12333 = (state_12397[(19)]);var inst_12354__$1 = cljs.core.seq.call(null,inst_12333);var state_12397__$1 = (function (){var statearr_12437 = state_12397;(statearr_12437[(17)] = inst_12354__$1);
return statearr_12437;
})();if(inst_12354__$1)
{var statearr_12438_12508 = state_12397__$1;(statearr_12438_12508[(1)] = (33));
} else
{var statearr_12439_12509 = state_12397__$1;(statearr_12439_12509[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (25)))
{var inst_12335 = (state_12397[(20)]);var inst_12336 = (state_12397[(10)]);var inst_12338 = (inst_12336 < inst_12335);var inst_12339 = inst_12338;var state_12397__$1 = state_12397;if(cljs.core.truth_(inst_12339))
{var statearr_12440_12510 = state_12397__$1;(statearr_12440_12510[(1)] = (27));
} else
{var statearr_12441_12511 = state_12397__$1;(statearr_12441_12511[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (34)))
{var state_12397__$1 = state_12397;var statearr_12442_12512 = state_12397__$1;(statearr_12442_12512[(2)] = null);
(statearr_12442_12512[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (17)))
{var state_12397__$1 = state_12397;var statearr_12443_12513 = state_12397__$1;(statearr_12443_12513[(2)] = null);
(statearr_12443_12513[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (3)))
{var inst_12395 = (state_12397[(2)]);var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12397__$1,inst_12395);
} else
{if((state_val_12398 === (12)))
{var inst_12320 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12444_12514 = state_12397__$1;(statearr_12444_12514[(2)] = inst_12320);
(statearr_12444_12514[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (2)))
{var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12397__$1,(4),ch);
} else
{if((state_val_12398 === (23)))
{var state_12397__$1 = state_12397;var statearr_12445_12515 = state_12397__$1;(statearr_12445_12515[(2)] = null);
(statearr_12445_12515[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (35)))
{var inst_12379 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12446_12516 = state_12397__$1;(statearr_12446_12516[(2)] = inst_12379);
(statearr_12446_12516[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (19)))
{var inst_12294 = (state_12397[(7)]);var inst_12298 = cljs.core.chunk_first.call(null,inst_12294);var inst_12299 = cljs.core.chunk_rest.call(null,inst_12294);var inst_12300 = cljs.core.count.call(null,inst_12298);var inst_12274 = inst_12299;var inst_12275 = inst_12298;var inst_12276 = inst_12300;var inst_12277 = (0);var state_12397__$1 = (function (){var statearr_12447 = state_12397;(statearr_12447[(12)] = inst_12276);
(statearr_12447[(13)] = inst_12274);
(statearr_12447[(15)] = inst_12275);
(statearr_12447[(16)] = inst_12277);
return statearr_12447;
})();var statearr_12448_12517 = state_12397__$1;(statearr_12448_12517[(2)] = null);
(statearr_12448_12517[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (11)))
{var inst_12274 = (state_12397[(13)]);var inst_12294 = (state_12397[(7)]);var inst_12294__$1 = cljs.core.seq.call(null,inst_12274);var state_12397__$1 = (function (){var statearr_12449 = state_12397;(statearr_12449[(7)] = inst_12294__$1);
return statearr_12449;
})();if(inst_12294__$1)
{var statearr_12450_12518 = state_12397__$1;(statearr_12450_12518[(1)] = (16));
} else
{var statearr_12451_12519 = state_12397__$1;(statearr_12451_12519[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (9)))
{var inst_12322 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12452_12520 = state_12397__$1;(statearr_12452_12520[(2)] = inst_12322);
(statearr_12452_12520[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (5)))
{var inst_12272 = cljs.core.deref.call(null,cs);var inst_12273 = cljs.core.seq.call(null,inst_12272);var inst_12274 = inst_12273;var inst_12275 = null;var inst_12276 = (0);var inst_12277 = (0);var state_12397__$1 = (function (){var statearr_12453 = state_12397;(statearr_12453[(12)] = inst_12276);
(statearr_12453[(13)] = inst_12274);
(statearr_12453[(15)] = inst_12275);
(statearr_12453[(16)] = inst_12277);
return statearr_12453;
})();var statearr_12454_12521 = state_12397__$1;(statearr_12454_12521[(2)] = null);
(statearr_12454_12521[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (14)))
{var state_12397__$1 = state_12397;var statearr_12455_12522 = state_12397__$1;(statearr_12455_12522[(2)] = null);
(statearr_12455_12522[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (45)))
{var inst_12387 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12456_12523 = state_12397__$1;(statearr_12456_12523[(2)] = inst_12387);
(statearr_12456_12523[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (26)))
{var inst_12325 = (state_12397[(30)]);var inst_12383 = (state_12397[(2)]);var inst_12384 = cljs.core.seq.call(null,inst_12325);var state_12397__$1 = (function (){var statearr_12457 = state_12397;(statearr_12457[(32)] = inst_12383);
return statearr_12457;
})();if(inst_12384)
{var statearr_12458_12524 = state_12397__$1;(statearr_12458_12524[(1)] = (42));
} else
{var statearr_12459_12525 = state_12397__$1;(statearr_12459_12525[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (16)))
{var inst_12294 = (state_12397[(7)]);var inst_12296 = cljs.core.chunked_seq_QMARK_.call(null,inst_12294);var state_12397__$1 = state_12397;if(inst_12296)
{var statearr_12463_12526 = state_12397__$1;(statearr_12463_12526[(1)] = (19));
} else
{var statearr_12464_12527 = state_12397__$1;(statearr_12464_12527[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (38)))
{var inst_12376 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12465_12528 = state_12397__$1;(statearr_12465_12528[(2)] = inst_12376);
(statearr_12465_12528[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (30)))
{var inst_12333 = (state_12397[(19)]);var inst_12335 = (state_12397[(20)]);var inst_12334 = (state_12397[(9)]);var inst_12336 = (state_12397[(10)]);var inst_12350 = (state_12397[(2)]);var inst_12351 = (inst_12336 + (1));var tmp12460 = inst_12333;var tmp12461 = inst_12335;var tmp12462 = inst_12334;var inst_12333__$1 = tmp12460;var inst_12334__$1 = tmp12462;var inst_12335__$1 = tmp12461;var inst_12336__$1 = inst_12351;var state_12397__$1 = (function (){var statearr_12466 = state_12397;(statearr_12466[(19)] = inst_12333__$1);
(statearr_12466[(20)] = inst_12335__$1);
(statearr_12466[(33)] = inst_12350);
(statearr_12466[(9)] = inst_12334__$1);
(statearr_12466[(10)] = inst_12336__$1);
return statearr_12466;
})();var statearr_12467_12529 = state_12397__$1;(statearr_12467_12529[(2)] = null);
(statearr_12467_12529[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (10)))
{var inst_12275 = (state_12397[(15)]);var inst_12277 = (state_12397[(16)]);var inst_12283 = cljs.core._nth.call(null,inst_12275,inst_12277);var inst_12284 = cljs.core.nth.call(null,inst_12283,(0),null);var inst_12285 = cljs.core.nth.call(null,inst_12283,(1),null);var state_12397__$1 = (function (){var statearr_12468 = state_12397;(statearr_12468[(28)] = inst_12284);
return statearr_12468;
})();if(cljs.core.truth_(inst_12285))
{var statearr_12469_12530 = state_12397__$1;(statearr_12469_12530[(1)] = (13));
} else
{var statearr_12470_12531 = state_12397__$1;(statearr_12470_12531[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (18)))
{var inst_12318 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12471_12532 = state_12397__$1;(statearr_12471_12532[(2)] = inst_12318);
(statearr_12471_12532[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (42)))
{var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12397__$1,(45),dchan);
} else
{if((state_val_12398 === (37)))
{var inst_12354 = (state_12397[(17)]);var inst_12363 = cljs.core.first.call(null,inst_12354);var state_12397__$1 = (function (){var statearr_12472 = state_12397;(statearr_12472[(25)] = inst_12363);
return statearr_12472;
})();var statearr_12473_12533 = state_12397__$1;(statearr_12473_12533[(2)] = null);
(statearr_12473_12533[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (8)))
{var inst_12276 = (state_12397[(12)]);var inst_12277 = (state_12397[(16)]);var inst_12279 = (inst_12277 < inst_12276);var inst_12280 = inst_12279;var state_12397__$1 = state_12397;if(cljs.core.truth_(inst_12280))
{var statearr_12474_12534 = state_12397__$1;(statearr_12474_12534[(1)] = (10));
} else
{var statearr_12475_12535 = state_12397__$1;(statearr_12475_12535[(1)] = (11));
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
});})(c__6677__auto___12483,cs,m,dchan,dctr,done))
;return ((function (switch__6612__auto__,c__6677__auto___12483,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_12479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12479[(0)] = state_machine__6613__auto__);
(statearr_12479[(1)] = (1));
return statearr_12479;
});
var state_machine__6613__auto____1 = (function (state_12397){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12397);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12480){if((e12480 instanceof Object))
{var ex__6616__auto__ = e12480;var statearr_12481_12536 = state_12397;(statearr_12481_12536[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12397);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12537 = state_12397;
state_12397 = G__12537;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12397){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___12483,cs,m,dchan,dctr,done))
})();var state__6679__auto__ = (function (){var statearr_12482 = f__6678__auto__.call(null);(statearr_12482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___12483);
return statearr_12482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___12483,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12539 = {};return obj12539;
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
;var m = (function (){if(typeof cljs.core.async.t12649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12649 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12650){
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
this.meta12650 = meta12650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12649.cljs$lang$type = true;
cljs.core.async.t12649.cljs$lang$ctorStr = "cljs.core.async/t12649";
cljs.core.async.t12649.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12649");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12649.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12651){var self__ = this;
var _12651__$1 = this;return self__.meta12650;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12651,meta12650__$1){var self__ = this;
var _12651__$1 = this;return (new cljs.core.async.t12649(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12650__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12649 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12650){return (new cljs.core.async.t12649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12650));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12649(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6677__auto___12758 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___12758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___12758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12716){var state_val_12717 = (state_12716[(1)]);if((state_val_12717 === (7)))
{var inst_12665 = (state_12716[(7)]);var inst_12670 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12665);var state_12716__$1 = state_12716;var statearr_12718_12759 = state_12716__$1;(statearr_12718_12759[(2)] = inst_12670);
(statearr_12718_12759[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (20)))
{var inst_12680 = (state_12716[(8)]);var state_12716__$1 = state_12716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12716__$1,(23),out,inst_12680);
} else
{if((state_val_12717 === (1)))
{var inst_12655 = (state_12716[(9)]);var inst_12655__$1 = calc_state.call(null);var inst_12656 = cljs.core.seq_QMARK_.call(null,inst_12655__$1);var state_12716__$1 = (function (){var statearr_12719 = state_12716;(statearr_12719[(9)] = inst_12655__$1);
return statearr_12719;
})();if(inst_12656)
{var statearr_12720_12760 = state_12716__$1;(statearr_12720_12760[(1)] = (2));
} else
{var statearr_12721_12761 = state_12716__$1;(statearr_12721_12761[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (4)))
{var inst_12655 = (state_12716[(9)]);var inst_12661 = (state_12716[(2)]);var inst_12662 = cljs.core.get.call(null,inst_12661,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12663 = cljs.core.get.call(null,inst_12661,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12664 = cljs.core.get.call(null,inst_12661,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12665 = inst_12655;var state_12716__$1 = (function (){var statearr_12722 = state_12716;(statearr_12722[(10)] = inst_12663);
(statearr_12722[(7)] = inst_12665);
(statearr_12722[(11)] = inst_12664);
(statearr_12722[(12)] = inst_12662);
return statearr_12722;
})();var statearr_12723_12762 = state_12716__$1;(statearr_12723_12762[(2)] = null);
(statearr_12723_12762[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (15)))
{var state_12716__$1 = state_12716;var statearr_12724_12763 = state_12716__$1;(statearr_12724_12763[(2)] = null);
(statearr_12724_12763[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (21)))
{var state_12716__$1 = state_12716;var statearr_12725_12764 = state_12716__$1;(statearr_12725_12764[(2)] = null);
(statearr_12725_12764[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (13)))
{var inst_12712 = (state_12716[(2)]);var state_12716__$1 = state_12716;var statearr_12726_12765 = state_12716__$1;(statearr_12726_12765[(2)] = inst_12712);
(statearr_12726_12765[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (22)))
{var inst_12673 = (state_12716[(13)]);var inst_12709 = (state_12716[(2)]);var inst_12665 = inst_12673;var state_12716__$1 = (function (){var statearr_12727 = state_12716;(statearr_12727[(14)] = inst_12709);
(statearr_12727[(7)] = inst_12665);
return statearr_12727;
})();var statearr_12728_12766 = state_12716__$1;(statearr_12728_12766[(2)] = null);
(statearr_12728_12766[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (6)))
{var inst_12714 = (state_12716[(2)]);var state_12716__$1 = state_12716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12716__$1,inst_12714);
} else
{if((state_val_12717 === (17)))
{var inst_12695 = (state_12716[(15)]);var state_12716__$1 = state_12716;var statearr_12729_12767 = state_12716__$1;(statearr_12729_12767[(2)] = inst_12695);
(statearr_12729_12767[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (3)))
{var inst_12655 = (state_12716[(9)]);var state_12716__$1 = state_12716;var statearr_12730_12768 = state_12716__$1;(statearr_12730_12768[(2)] = inst_12655);
(statearr_12730_12768[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (12)))
{var inst_12695 = (state_12716[(15)]);var inst_12676 = (state_12716[(16)]);var inst_12681 = (state_12716[(17)]);var inst_12695__$1 = inst_12676.call(null,inst_12681);var state_12716__$1 = (function (){var statearr_12731 = state_12716;(statearr_12731[(15)] = inst_12695__$1);
return statearr_12731;
})();if(cljs.core.truth_(inst_12695__$1))
{var statearr_12732_12769 = state_12716__$1;(statearr_12732_12769[(1)] = (17));
} else
{var statearr_12733_12770 = state_12716__$1;(statearr_12733_12770[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (2)))
{var inst_12655 = (state_12716[(9)]);var inst_12658 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12655);var state_12716__$1 = state_12716;var statearr_12734_12771 = state_12716__$1;(statearr_12734_12771[(2)] = inst_12658);
(statearr_12734_12771[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (23)))
{var inst_12706 = (state_12716[(2)]);var state_12716__$1 = state_12716;var statearr_12735_12772 = state_12716__$1;(statearr_12735_12772[(2)] = inst_12706);
(statearr_12735_12772[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (19)))
{var inst_12703 = (state_12716[(2)]);var state_12716__$1 = state_12716;if(cljs.core.truth_(inst_12703))
{var statearr_12736_12773 = state_12716__$1;(statearr_12736_12773[(1)] = (20));
} else
{var statearr_12737_12774 = state_12716__$1;(statearr_12737_12774[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (11)))
{var inst_12680 = (state_12716[(8)]);var inst_12686 = (inst_12680 == null);var state_12716__$1 = state_12716;if(cljs.core.truth_(inst_12686))
{var statearr_12738_12775 = state_12716__$1;(statearr_12738_12775[(1)] = (14));
} else
{var statearr_12739_12776 = state_12716__$1;(statearr_12739_12776[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (9)))
{var inst_12673 = (state_12716[(13)]);var inst_12673__$1 = (state_12716[(2)]);var inst_12674 = cljs.core.get.call(null,inst_12673__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12675 = cljs.core.get.call(null,inst_12673__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12676 = cljs.core.get.call(null,inst_12673__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12716__$1 = (function (){var statearr_12740 = state_12716;(statearr_12740[(16)] = inst_12676);
(statearr_12740[(13)] = inst_12673__$1);
(statearr_12740[(18)] = inst_12675);
return statearr_12740;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12716__$1,(10),inst_12674);
} else
{if((state_val_12717 === (5)))
{var inst_12665 = (state_12716[(7)]);var inst_12668 = cljs.core.seq_QMARK_.call(null,inst_12665);var state_12716__$1 = state_12716;if(inst_12668)
{var statearr_12741_12777 = state_12716__$1;(statearr_12741_12777[(1)] = (7));
} else
{var statearr_12742_12778 = state_12716__$1;(statearr_12742_12778[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (14)))
{var inst_12681 = (state_12716[(17)]);var inst_12688 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12681);var state_12716__$1 = state_12716;var statearr_12743_12779 = state_12716__$1;(statearr_12743_12779[(2)] = inst_12688);
(statearr_12743_12779[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (16)))
{var inst_12691 = (state_12716[(2)]);var inst_12692 = calc_state.call(null);var inst_12665 = inst_12692;var state_12716__$1 = (function (){var statearr_12744 = state_12716;(statearr_12744[(7)] = inst_12665);
(statearr_12744[(19)] = inst_12691);
return statearr_12744;
})();var statearr_12745_12780 = state_12716__$1;(statearr_12745_12780[(2)] = null);
(statearr_12745_12780[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (10)))
{var inst_12681 = (state_12716[(17)]);var inst_12680 = (state_12716[(8)]);var inst_12679 = (state_12716[(2)]);var inst_12680__$1 = cljs.core.nth.call(null,inst_12679,(0),null);var inst_12681__$1 = cljs.core.nth.call(null,inst_12679,(1),null);var inst_12682 = (inst_12680__$1 == null);var inst_12683 = cljs.core._EQ_.call(null,inst_12681__$1,change);var inst_12684 = (inst_12682) || (inst_12683);var state_12716__$1 = (function (){var statearr_12746 = state_12716;(statearr_12746[(17)] = inst_12681__$1);
(statearr_12746[(8)] = inst_12680__$1);
return statearr_12746;
})();if(cljs.core.truth_(inst_12684))
{var statearr_12747_12781 = state_12716__$1;(statearr_12747_12781[(1)] = (11));
} else
{var statearr_12748_12782 = state_12716__$1;(statearr_12748_12782[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (18)))
{var inst_12676 = (state_12716[(16)]);var inst_12681 = (state_12716[(17)]);var inst_12675 = (state_12716[(18)]);var inst_12698 = cljs.core.empty_QMARK_.call(null,inst_12676);var inst_12699 = inst_12675.call(null,inst_12681);var inst_12700 = cljs.core.not.call(null,inst_12699);var inst_12701 = (inst_12698) && (inst_12700);var state_12716__$1 = state_12716;var statearr_12749_12783 = state_12716__$1;(statearr_12749_12783[(2)] = inst_12701);
(statearr_12749_12783[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12717 === (8)))
{var inst_12665 = (state_12716[(7)]);var state_12716__$1 = state_12716;var statearr_12750_12784 = state_12716__$1;(statearr_12750_12784[(2)] = inst_12665);
(statearr_12750_12784[(1)] = (9));
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
});})(c__6677__auto___12758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6612__auto__,c__6677__auto___12758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_12754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12754[(0)] = state_machine__6613__auto__);
(statearr_12754[(1)] = (1));
return statearr_12754;
});
var state_machine__6613__auto____1 = (function (state_12716){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12716);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e12755){if((e12755 instanceof Object))
{var ex__6616__auto__ = e12755;var statearr_12756_12785 = state_12716;(statearr_12756_12785[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12716);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12786 = state_12716;
state_12716 = G__12786;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___12758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6679__auto__ = (function (){var statearr_12757 = f__6678__auto__.call(null);(statearr_12757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___12758);
return statearr_12757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___12758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12788 = {};return obj12788;
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
return (function (p1__12789_SHARP_){if(cljs.core.truth_(p1__12789_SHARP_.call(null,topic)))
{return p1__12789_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12789_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3544__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12914 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12915){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12915 = meta12915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12914.cljs$lang$type = true;
cljs.core.async.t12914.cljs$lang$ctorStr = "cljs.core.async/t12914";
cljs.core.async.t12914.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12914");
});})(mults,ensure_mult))
;
cljs.core.async.t12914.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12914.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12914.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12914.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12916){var self__ = this;
var _12916__$1 = this;return self__.meta12915;
});})(mults,ensure_mult))
;
cljs.core.async.t12914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12916,meta12915__$1){var self__ = this;
var _12916__$1 = this;return (new cljs.core.async.t12914(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12915__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12914 = ((function (mults,ensure_mult){
return (function __GT_t12914(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12915){return (new cljs.core.async.t12914(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12915));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12914(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6677__auto___13038 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13038,mults,ensure_mult,p){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13038,mults,ensure_mult,p){
return (function (state_12990){var state_val_12991 = (state_12990[(1)]);if((state_val_12991 === (7)))
{var inst_12986 = (state_12990[(2)]);var state_12990__$1 = state_12990;var statearr_12992_13039 = state_12990__$1;(statearr_12992_13039[(2)] = inst_12986);
(statearr_12992_13039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (20)))
{var state_12990__$1 = state_12990;var statearr_12993_13040 = state_12990__$1;(statearr_12993_13040[(2)] = null);
(statearr_12993_13040[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (1)))
{var state_12990__$1 = state_12990;var statearr_12994_13041 = state_12990__$1;(statearr_12994_13041[(2)] = null);
(statearr_12994_13041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (24)))
{var inst_12969 = (state_12990[(7)]);var inst_12919 = (state_12990[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12990,(23),Object,null,(22));var inst_12976 = cljs.core.async.muxch_STAR_.call(null,inst_12969);var state_12990__$1 = state_12990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12990__$1,(25),inst_12976,inst_12919);
} else
{if((state_val_12991 === (4)))
{var inst_12919 = (state_12990[(8)]);var inst_12919__$1 = (state_12990[(2)]);var inst_12920 = (inst_12919__$1 == null);var state_12990__$1 = (function (){var statearr_12995 = state_12990;(statearr_12995[(8)] = inst_12919__$1);
return statearr_12995;
})();if(cljs.core.truth_(inst_12920))
{var statearr_12996_13042 = state_12990__$1;(statearr_12996_13042[(1)] = (5));
} else
{var statearr_12997_13043 = state_12990__$1;(statearr_12997_13043[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (15)))
{var inst_12961 = (state_12990[(2)]);var state_12990__$1 = state_12990;var statearr_12998_13044 = state_12990__$1;(statearr_12998_13044[(2)] = inst_12961);
(statearr_12998_13044[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (21)))
{var inst_12983 = (state_12990[(2)]);var state_12990__$1 = (function (){var statearr_12999 = state_12990;(statearr_12999[(9)] = inst_12983);
return statearr_12999;
})();var statearr_13000_13045 = state_12990__$1;(statearr_13000_13045[(2)] = null);
(statearr_13000_13045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (13)))
{var inst_12943 = (state_12990[(10)]);var inst_12945 = cljs.core.chunked_seq_QMARK_.call(null,inst_12943);var state_12990__$1 = state_12990;if(inst_12945)
{var statearr_13001_13046 = state_12990__$1;(statearr_13001_13046[(1)] = (16));
} else
{var statearr_13002_13047 = state_12990__$1;(statearr_13002_13047[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (22)))
{var inst_12980 = (state_12990[(2)]);var state_12990__$1 = state_12990;var statearr_13003_13048 = state_12990__$1;(statearr_13003_13048[(2)] = inst_12980);
(statearr_13003_13048[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (6)))
{var inst_12969 = (state_12990[(7)]);var inst_12967 = (state_12990[(11)]);var inst_12919 = (state_12990[(8)]);var inst_12967__$1 = topic_fn.call(null,inst_12919);var inst_12968 = cljs.core.deref.call(null,mults);var inst_12969__$1 = cljs.core.get.call(null,inst_12968,inst_12967__$1);var state_12990__$1 = (function (){var statearr_13004 = state_12990;(statearr_13004[(7)] = inst_12969__$1);
(statearr_13004[(11)] = inst_12967__$1);
return statearr_13004;
})();if(cljs.core.truth_(inst_12969__$1))
{var statearr_13005_13049 = state_12990__$1;(statearr_13005_13049[(1)] = (19));
} else
{var statearr_13006_13050 = state_12990__$1;(statearr_13006_13050[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (25)))
{var inst_12978 = (state_12990[(2)]);var state_12990__$1 = state_12990;var statearr_13007_13051 = state_12990__$1;(statearr_13007_13051[(2)] = inst_12978);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12990__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (17)))
{var inst_12943 = (state_12990[(10)]);var inst_12952 = cljs.core.first.call(null,inst_12943);var inst_12953 = cljs.core.async.muxch_STAR_.call(null,inst_12952);var inst_12954 = cljs.core.async.close_BANG_.call(null,inst_12953);var inst_12955 = cljs.core.next.call(null,inst_12943);var inst_12929 = inst_12955;var inst_12930 = null;var inst_12931 = (0);var inst_12932 = (0);var state_12990__$1 = (function (){var statearr_13008 = state_12990;(statearr_13008[(12)] = inst_12929);
(statearr_13008[(13)] = inst_12931);
(statearr_13008[(14)] = inst_12954);
(statearr_13008[(15)] = inst_12930);
(statearr_13008[(16)] = inst_12932);
return statearr_13008;
})();var statearr_13009_13052 = state_12990__$1;(statearr_13009_13052[(2)] = null);
(statearr_13009_13052[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (3)))
{var inst_12988 = (state_12990[(2)]);var state_12990__$1 = state_12990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12990__$1,inst_12988);
} else
{if((state_val_12991 === (12)))
{var inst_12963 = (state_12990[(2)]);var state_12990__$1 = state_12990;var statearr_13010_13053 = state_12990__$1;(statearr_13010_13053[(2)] = inst_12963);
(statearr_13010_13053[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (2)))
{var state_12990__$1 = state_12990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12990__$1,(4),ch);
} else
{if((state_val_12991 === (23)))
{var inst_12967 = (state_12990[(11)]);var inst_12971 = (state_12990[(2)]);var inst_12972 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12967);var state_12990__$1 = (function (){var statearr_13011 = state_12990;(statearr_13011[(17)] = inst_12971);
return statearr_13011;
})();var statearr_13012_13054 = state_12990__$1;(statearr_13012_13054[(2)] = inst_12972);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12990__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (19)))
{var state_12990__$1 = state_12990;var statearr_13013_13055 = state_12990__$1;(statearr_13013_13055[(2)] = null);
(statearr_13013_13055[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (11)))
{var inst_12929 = (state_12990[(12)]);var inst_12943 = (state_12990[(10)]);var inst_12943__$1 = cljs.core.seq.call(null,inst_12929);var state_12990__$1 = (function (){var statearr_13014 = state_12990;(statearr_13014[(10)] = inst_12943__$1);
return statearr_13014;
})();if(inst_12943__$1)
{var statearr_13015_13056 = state_12990__$1;(statearr_13015_13056[(1)] = (13));
} else
{var statearr_13016_13057 = state_12990__$1;(statearr_13016_13057[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (9)))
{var inst_12965 = (state_12990[(2)]);var state_12990__$1 = state_12990;var statearr_13017_13058 = state_12990__$1;(statearr_13017_13058[(2)] = inst_12965);
(statearr_13017_13058[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (5)))
{var inst_12926 = cljs.core.deref.call(null,mults);var inst_12927 = cljs.core.vals.call(null,inst_12926);var inst_12928 = cljs.core.seq.call(null,inst_12927);var inst_12929 = inst_12928;var inst_12930 = null;var inst_12931 = (0);var inst_12932 = (0);var state_12990__$1 = (function (){var statearr_13018 = state_12990;(statearr_13018[(12)] = inst_12929);
(statearr_13018[(13)] = inst_12931);
(statearr_13018[(15)] = inst_12930);
(statearr_13018[(16)] = inst_12932);
return statearr_13018;
})();var statearr_13019_13059 = state_12990__$1;(statearr_13019_13059[(2)] = null);
(statearr_13019_13059[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (14)))
{var state_12990__$1 = state_12990;var statearr_13023_13060 = state_12990__$1;(statearr_13023_13060[(2)] = null);
(statearr_13023_13060[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (16)))
{var inst_12943 = (state_12990[(10)]);var inst_12947 = cljs.core.chunk_first.call(null,inst_12943);var inst_12948 = cljs.core.chunk_rest.call(null,inst_12943);var inst_12949 = cljs.core.count.call(null,inst_12947);var inst_12929 = inst_12948;var inst_12930 = inst_12947;var inst_12931 = inst_12949;var inst_12932 = (0);var state_12990__$1 = (function (){var statearr_13024 = state_12990;(statearr_13024[(12)] = inst_12929);
(statearr_13024[(13)] = inst_12931);
(statearr_13024[(15)] = inst_12930);
(statearr_13024[(16)] = inst_12932);
return statearr_13024;
})();var statearr_13025_13061 = state_12990__$1;(statearr_13025_13061[(2)] = null);
(statearr_13025_13061[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (10)))
{var inst_12929 = (state_12990[(12)]);var inst_12931 = (state_12990[(13)]);var inst_12930 = (state_12990[(15)]);var inst_12932 = (state_12990[(16)]);var inst_12937 = cljs.core._nth.call(null,inst_12930,inst_12932);var inst_12938 = cljs.core.async.muxch_STAR_.call(null,inst_12937);var inst_12939 = cljs.core.async.close_BANG_.call(null,inst_12938);var inst_12940 = (inst_12932 + (1));var tmp13020 = inst_12929;var tmp13021 = inst_12931;var tmp13022 = inst_12930;var inst_12929__$1 = tmp13020;var inst_12930__$1 = tmp13022;var inst_12931__$1 = tmp13021;var inst_12932__$1 = inst_12940;var state_12990__$1 = (function (){var statearr_13026 = state_12990;(statearr_13026[(12)] = inst_12929__$1);
(statearr_13026[(18)] = inst_12939);
(statearr_13026[(13)] = inst_12931__$1);
(statearr_13026[(15)] = inst_12930__$1);
(statearr_13026[(16)] = inst_12932__$1);
return statearr_13026;
})();var statearr_13027_13062 = state_12990__$1;(statearr_13027_13062[(2)] = null);
(statearr_13027_13062[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (18)))
{var inst_12958 = (state_12990[(2)]);var state_12990__$1 = state_12990;var statearr_13028_13063 = state_12990__$1;(statearr_13028_13063[(2)] = inst_12958);
(statearr_13028_13063[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12991 === (8)))
{var inst_12931 = (state_12990[(13)]);var inst_12932 = (state_12990[(16)]);var inst_12934 = (inst_12932 < inst_12931);var inst_12935 = inst_12934;var state_12990__$1 = state_12990;if(cljs.core.truth_(inst_12935))
{var statearr_13029_13064 = state_12990__$1;(statearr_13029_13064[(1)] = (10));
} else
{var statearr_13030_13065 = state_12990__$1;(statearr_13030_13065[(1)] = (11));
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
});})(c__6677__auto___13038,mults,ensure_mult,p))
;return ((function (switch__6612__auto__,c__6677__auto___13038,mults,ensure_mult,p){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13034[(0)] = state_machine__6613__auto__);
(statearr_13034[(1)] = (1));
return statearr_13034;
});
var state_machine__6613__auto____1 = (function (state_12990){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_12990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13035){if((e13035 instanceof Object))
{var ex__6616__auto__ = e13035;var statearr_13036_13066 = state_12990;(statearr_13036_13066[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13067 = state_12990;
state_12990 = G__13067;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_12990){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_12990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13038,mults,ensure_mult,p))
})();var state__6679__auto__ = (function (){var statearr_13037 = f__6678__auto__.call(null);(statearr_13037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13038);
return statearr_13037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13038,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6677__auto___13204 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13204,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13204,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13174){var state_val_13175 = (state_13174[(1)]);if((state_val_13175 === (7)))
{var state_13174__$1 = state_13174;var statearr_13176_13205 = state_13174__$1;(statearr_13176_13205[(2)] = null);
(statearr_13176_13205[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (1)))
{var state_13174__$1 = state_13174;var statearr_13177_13206 = state_13174__$1;(statearr_13177_13206[(2)] = null);
(statearr_13177_13206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (4)))
{var inst_13138 = (state_13174[(7)]);var inst_13140 = (inst_13138 < cnt);var state_13174__$1 = state_13174;if(cljs.core.truth_(inst_13140))
{var statearr_13178_13207 = state_13174__$1;(statearr_13178_13207[(1)] = (6));
} else
{var statearr_13179_13208 = state_13174__$1;(statearr_13179_13208[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (15)))
{var inst_13170 = (state_13174[(2)]);var state_13174__$1 = state_13174;var statearr_13180_13209 = state_13174__$1;(statearr_13180_13209[(2)] = inst_13170);
(statearr_13180_13209[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (13)))
{var inst_13163 = cljs.core.async.close_BANG_.call(null,out);var state_13174__$1 = state_13174;var statearr_13181_13210 = state_13174__$1;(statearr_13181_13210[(2)] = inst_13163);
(statearr_13181_13210[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (6)))
{var state_13174__$1 = state_13174;var statearr_13182_13211 = state_13174__$1;(statearr_13182_13211[(2)] = null);
(statearr_13182_13211[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (3)))
{var inst_13172 = (state_13174[(2)]);var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13174__$1,inst_13172);
} else
{if((state_val_13175 === (12)))
{var inst_13160 = (state_13174[(8)]);var inst_13160__$1 = (state_13174[(2)]);var inst_13161 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13160__$1);var state_13174__$1 = (function (){var statearr_13183 = state_13174;(statearr_13183[(8)] = inst_13160__$1);
return statearr_13183;
})();if(cljs.core.truth_(inst_13161))
{var statearr_13184_13212 = state_13174__$1;(statearr_13184_13212[(1)] = (13));
} else
{var statearr_13185_13213 = state_13174__$1;(statearr_13185_13213[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (2)))
{var inst_13137 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13138 = (0);var state_13174__$1 = (function (){var statearr_13186 = state_13174;(statearr_13186[(7)] = inst_13138);
(statearr_13186[(9)] = inst_13137);
return statearr_13186;
})();var statearr_13187_13214 = state_13174__$1;(statearr_13187_13214[(2)] = null);
(statearr_13187_13214[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (11)))
{var inst_13138 = (state_13174[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13174,(10),Object,null,(9));var inst_13147 = chs__$1.call(null,inst_13138);var inst_13148 = done.call(null,inst_13138);var inst_13149 = cljs.core.async.take_BANG_.call(null,inst_13147,inst_13148);var state_13174__$1 = state_13174;var statearr_13188_13215 = state_13174__$1;(statearr_13188_13215[(2)] = inst_13149);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13174__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (9)))
{var inst_13138 = (state_13174[(7)]);var inst_13151 = (state_13174[(2)]);var inst_13152 = (inst_13138 + (1));var inst_13138__$1 = inst_13152;var state_13174__$1 = (function (){var statearr_13189 = state_13174;(statearr_13189[(10)] = inst_13151);
(statearr_13189[(7)] = inst_13138__$1);
return statearr_13189;
})();var statearr_13190_13216 = state_13174__$1;(statearr_13190_13216[(2)] = null);
(statearr_13190_13216[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (5)))
{var inst_13158 = (state_13174[(2)]);var state_13174__$1 = (function (){var statearr_13191 = state_13174;(statearr_13191[(11)] = inst_13158);
return statearr_13191;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13174__$1,(12),dchan);
} else
{if((state_val_13175 === (14)))
{var inst_13160 = (state_13174[(8)]);var inst_13165 = cljs.core.apply.call(null,f,inst_13160);var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13174__$1,(16),out,inst_13165);
} else
{if((state_val_13175 === (16)))
{var inst_13167 = (state_13174[(2)]);var state_13174__$1 = (function (){var statearr_13192 = state_13174;(statearr_13192[(12)] = inst_13167);
return statearr_13192;
})();var statearr_13193_13217 = state_13174__$1;(statearr_13193_13217[(2)] = null);
(statearr_13193_13217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (10)))
{var inst_13142 = (state_13174[(2)]);var inst_13143 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13174__$1 = (function (){var statearr_13194 = state_13174;(statearr_13194[(13)] = inst_13142);
return statearr_13194;
})();var statearr_13195_13218 = state_13174__$1;(statearr_13195_13218[(2)] = inst_13143);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13174__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (8)))
{var inst_13156 = (state_13174[(2)]);var state_13174__$1 = state_13174;var statearr_13196_13219 = state_13174__$1;(statearr_13196_13219[(2)] = inst_13156);
(statearr_13196_13219[(1)] = (5));
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
});})(c__6677__auto___13204,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6612__auto__,c__6677__auto___13204,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13200[(0)] = state_machine__6613__auto__);
(statearr_13200[(1)] = (1));
return statearr_13200;
});
var state_machine__6613__auto____1 = (function (state_13174){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13201){if((e13201 instanceof Object))
{var ex__6616__auto__ = e13201;var statearr_13202_13220 = state_13174;(statearr_13202_13220[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13221 = state_13174;
state_13174 = G__13221;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13174){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13204,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6679__auto__ = (function (){var statearr_13203 = f__6678__auto__.call(null);(statearr_13203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13204);
return statearr_13203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13204,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13329 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13329,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13329,out){
return (function (state_13305){var state_val_13306 = (state_13305[(1)]);if((state_val_13306 === (7)))
{var inst_13284 = (state_13305[(7)]);var inst_13285 = (state_13305[(8)]);var inst_13284__$1 = (state_13305[(2)]);var inst_13285__$1 = cljs.core.nth.call(null,inst_13284__$1,(0),null);var inst_13286 = cljs.core.nth.call(null,inst_13284__$1,(1),null);var inst_13287 = (inst_13285__$1 == null);var state_13305__$1 = (function (){var statearr_13307 = state_13305;(statearr_13307[(9)] = inst_13286);
(statearr_13307[(7)] = inst_13284__$1);
(statearr_13307[(8)] = inst_13285__$1);
return statearr_13307;
})();if(cljs.core.truth_(inst_13287))
{var statearr_13308_13330 = state_13305__$1;(statearr_13308_13330[(1)] = (8));
} else
{var statearr_13309_13331 = state_13305__$1;(statearr_13309_13331[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13306 === (1)))
{var inst_13276 = cljs.core.vec.call(null,chs);var inst_13277 = inst_13276;var state_13305__$1 = (function (){var statearr_13310 = state_13305;(statearr_13310[(10)] = inst_13277);
return statearr_13310;
})();var statearr_13311_13332 = state_13305__$1;(statearr_13311_13332[(2)] = null);
(statearr_13311_13332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13306 === (4)))
{var inst_13277 = (state_13305[(10)]);var state_13305__$1 = state_13305;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13305__$1,(7),inst_13277);
} else
{if((state_val_13306 === (6)))
{var inst_13301 = (state_13305[(2)]);var state_13305__$1 = state_13305;var statearr_13312_13333 = state_13305__$1;(statearr_13312_13333[(2)] = inst_13301);
(statearr_13312_13333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13306 === (3)))
{var inst_13303 = (state_13305[(2)]);var state_13305__$1 = state_13305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13305__$1,inst_13303);
} else
{if((state_val_13306 === (2)))
{var inst_13277 = (state_13305[(10)]);var inst_13279 = cljs.core.count.call(null,inst_13277);var inst_13280 = (inst_13279 > (0));var state_13305__$1 = state_13305;if(cljs.core.truth_(inst_13280))
{var statearr_13314_13334 = state_13305__$1;(statearr_13314_13334[(1)] = (4));
} else
{var statearr_13315_13335 = state_13305__$1;(statearr_13315_13335[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13306 === (11)))
{var inst_13277 = (state_13305[(10)]);var inst_13294 = (state_13305[(2)]);var tmp13313 = inst_13277;var inst_13277__$1 = tmp13313;var state_13305__$1 = (function (){var statearr_13316 = state_13305;(statearr_13316[(10)] = inst_13277__$1);
(statearr_13316[(11)] = inst_13294);
return statearr_13316;
})();var statearr_13317_13336 = state_13305__$1;(statearr_13317_13336[(2)] = null);
(statearr_13317_13336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13306 === (9)))
{var inst_13285 = (state_13305[(8)]);var state_13305__$1 = state_13305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13305__$1,(11),out,inst_13285);
} else
{if((state_val_13306 === (5)))
{var inst_13299 = cljs.core.async.close_BANG_.call(null,out);var state_13305__$1 = state_13305;var statearr_13318_13337 = state_13305__$1;(statearr_13318_13337[(2)] = inst_13299);
(statearr_13318_13337[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13306 === (10)))
{var inst_13297 = (state_13305[(2)]);var state_13305__$1 = state_13305;var statearr_13319_13338 = state_13305__$1;(statearr_13319_13338[(2)] = inst_13297);
(statearr_13319_13338[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13306 === (8)))
{var inst_13286 = (state_13305[(9)]);var inst_13284 = (state_13305[(7)]);var inst_13285 = (state_13305[(8)]);var inst_13277 = (state_13305[(10)]);var inst_13289 = (function (){var c = inst_13286;var v = inst_13285;var vec__13282 = inst_13284;var cs = inst_13277;return ((function (c,v,vec__13282,cs,inst_13286,inst_13284,inst_13285,inst_13277,state_val_13306,c__6677__auto___13329,out){
return (function (p1__13222_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13222_SHARP_);
});
;})(c,v,vec__13282,cs,inst_13286,inst_13284,inst_13285,inst_13277,state_val_13306,c__6677__auto___13329,out))
})();var inst_13290 = cljs.core.filterv.call(null,inst_13289,inst_13277);var inst_13277__$1 = inst_13290;var state_13305__$1 = (function (){var statearr_13320 = state_13305;(statearr_13320[(10)] = inst_13277__$1);
return statearr_13320;
})();var statearr_13321_13339 = state_13305__$1;(statearr_13321_13339[(2)] = null);
(statearr_13321_13339[(1)] = (2));
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
});})(c__6677__auto___13329,out))
;return ((function (switch__6612__auto__,c__6677__auto___13329,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13325 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13325[(0)] = state_machine__6613__auto__);
(statearr_13325[(1)] = (1));
return statearr_13325;
});
var state_machine__6613__auto____1 = (function (state_13305){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13305);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13326){if((e13326 instanceof Object))
{var ex__6616__auto__ = e13326;var statearr_13327_13340 = state_13305;(statearr_13327_13340[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13305);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13326;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13341 = state_13305;
state_13305 = G__13341;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13305){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13329,out))
})();var state__6679__auto__ = (function (){var statearr_13328 = f__6678__auto__.call(null);(statearr_13328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13329);
return statearr_13328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13329,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13434 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13434,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13434,out){
return (function (state_13411){var state_val_13412 = (state_13411[(1)]);if((state_val_13412 === (7)))
{var inst_13393 = (state_13411[(7)]);var inst_13393__$1 = (state_13411[(2)]);var inst_13394 = (inst_13393__$1 == null);var inst_13395 = cljs.core.not.call(null,inst_13394);var state_13411__$1 = (function (){var statearr_13413 = state_13411;(statearr_13413[(7)] = inst_13393__$1);
return statearr_13413;
})();if(inst_13395)
{var statearr_13414_13435 = state_13411__$1;(statearr_13414_13435[(1)] = (8));
} else
{var statearr_13415_13436 = state_13411__$1;(statearr_13415_13436[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (1)))
{var inst_13388 = (0);var state_13411__$1 = (function (){var statearr_13416 = state_13411;(statearr_13416[(8)] = inst_13388);
return statearr_13416;
})();var statearr_13417_13437 = state_13411__$1;(statearr_13417_13437[(2)] = null);
(statearr_13417_13437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (4)))
{var state_13411__$1 = state_13411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13411__$1,(7),ch);
} else
{if((state_val_13412 === (6)))
{var inst_13406 = (state_13411[(2)]);var state_13411__$1 = state_13411;var statearr_13418_13438 = state_13411__$1;(statearr_13418_13438[(2)] = inst_13406);
(statearr_13418_13438[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (3)))
{var inst_13408 = (state_13411[(2)]);var inst_13409 = cljs.core.async.close_BANG_.call(null,out);var state_13411__$1 = (function (){var statearr_13419 = state_13411;(statearr_13419[(9)] = inst_13408);
return statearr_13419;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13411__$1,inst_13409);
} else
{if((state_val_13412 === (2)))
{var inst_13388 = (state_13411[(8)]);var inst_13390 = (inst_13388 < n);var state_13411__$1 = state_13411;if(cljs.core.truth_(inst_13390))
{var statearr_13420_13439 = state_13411__$1;(statearr_13420_13439[(1)] = (4));
} else
{var statearr_13421_13440 = state_13411__$1;(statearr_13421_13440[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (11)))
{var inst_13388 = (state_13411[(8)]);var inst_13398 = (state_13411[(2)]);var inst_13399 = (inst_13388 + (1));var inst_13388__$1 = inst_13399;var state_13411__$1 = (function (){var statearr_13422 = state_13411;(statearr_13422[(10)] = inst_13398);
(statearr_13422[(8)] = inst_13388__$1);
return statearr_13422;
})();var statearr_13423_13441 = state_13411__$1;(statearr_13423_13441[(2)] = null);
(statearr_13423_13441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (9)))
{var state_13411__$1 = state_13411;var statearr_13424_13442 = state_13411__$1;(statearr_13424_13442[(2)] = null);
(statearr_13424_13442[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (5)))
{var state_13411__$1 = state_13411;var statearr_13425_13443 = state_13411__$1;(statearr_13425_13443[(2)] = null);
(statearr_13425_13443[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (10)))
{var inst_13403 = (state_13411[(2)]);var state_13411__$1 = state_13411;var statearr_13426_13444 = state_13411__$1;(statearr_13426_13444[(2)] = inst_13403);
(statearr_13426_13444[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13412 === (8)))
{var inst_13393 = (state_13411[(7)]);var state_13411__$1 = state_13411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13411__$1,(11),out,inst_13393);
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
});})(c__6677__auto___13434,out))
;return ((function (switch__6612__auto__,c__6677__auto___13434,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13430 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13430[(0)] = state_machine__6613__auto__);
(statearr_13430[(1)] = (1));
return statearr_13430;
});
var state_machine__6613__auto____1 = (function (state_13411){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13411);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13431){if((e13431 instanceof Object))
{var ex__6616__auto__ = e13431;var statearr_13432_13445 = state_13411;(statearr_13432_13445[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13411);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13446 = state_13411;
state_13411 = G__13446;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13411){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13434,out))
})();var state__6679__auto__ = (function (){var statearr_13433 = f__6678__auto__.call(null);(statearr_13433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13434);
return statearr_13433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13434,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13543 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13543,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13543,out){
return (function (state_13518){var state_val_13519 = (state_13518[(1)]);if((state_val_13519 === (7)))
{var inst_13513 = (state_13518[(2)]);var state_13518__$1 = state_13518;var statearr_13520_13544 = state_13518__$1;(statearr_13520_13544[(2)] = inst_13513);
(statearr_13520_13544[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13519 === (1)))
{var inst_13495 = null;var state_13518__$1 = (function (){var statearr_13521 = state_13518;(statearr_13521[(7)] = inst_13495);
return statearr_13521;
})();var statearr_13522_13545 = state_13518__$1;(statearr_13522_13545[(2)] = null);
(statearr_13522_13545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13519 === (4)))
{var inst_13498 = (state_13518[(8)]);var inst_13498__$1 = (state_13518[(2)]);var inst_13499 = (inst_13498__$1 == null);var inst_13500 = cljs.core.not.call(null,inst_13499);var state_13518__$1 = (function (){var statearr_13523 = state_13518;(statearr_13523[(8)] = inst_13498__$1);
return statearr_13523;
})();if(inst_13500)
{var statearr_13524_13546 = state_13518__$1;(statearr_13524_13546[(1)] = (5));
} else
{var statearr_13525_13547 = state_13518__$1;(statearr_13525_13547[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13519 === (6)))
{var state_13518__$1 = state_13518;var statearr_13526_13548 = state_13518__$1;(statearr_13526_13548[(2)] = null);
(statearr_13526_13548[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13519 === (3)))
{var inst_13515 = (state_13518[(2)]);var inst_13516 = cljs.core.async.close_BANG_.call(null,out);var state_13518__$1 = (function (){var statearr_13527 = state_13518;(statearr_13527[(9)] = inst_13515);
return statearr_13527;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13518__$1,inst_13516);
} else
{if((state_val_13519 === (2)))
{var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13518__$1,(4),ch);
} else
{if((state_val_13519 === (11)))
{var inst_13498 = (state_13518[(8)]);var inst_13507 = (state_13518[(2)]);var inst_13495 = inst_13498;var state_13518__$1 = (function (){var statearr_13528 = state_13518;(statearr_13528[(10)] = inst_13507);
(statearr_13528[(7)] = inst_13495);
return statearr_13528;
})();var statearr_13529_13549 = state_13518__$1;(statearr_13529_13549[(2)] = null);
(statearr_13529_13549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13519 === (9)))
{var inst_13498 = (state_13518[(8)]);var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13518__$1,(11),out,inst_13498);
} else
{if((state_val_13519 === (5)))
{var inst_13498 = (state_13518[(8)]);var inst_13495 = (state_13518[(7)]);var inst_13502 = cljs.core._EQ_.call(null,inst_13498,inst_13495);var state_13518__$1 = state_13518;if(inst_13502)
{var statearr_13531_13550 = state_13518__$1;(statearr_13531_13550[(1)] = (8));
} else
{var statearr_13532_13551 = state_13518__$1;(statearr_13532_13551[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13519 === (10)))
{var inst_13510 = (state_13518[(2)]);var state_13518__$1 = state_13518;var statearr_13533_13552 = state_13518__$1;(statearr_13533_13552[(2)] = inst_13510);
(statearr_13533_13552[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13519 === (8)))
{var inst_13495 = (state_13518[(7)]);var tmp13530 = inst_13495;var inst_13495__$1 = tmp13530;var state_13518__$1 = (function (){var statearr_13534 = state_13518;(statearr_13534[(7)] = inst_13495__$1);
return statearr_13534;
})();var statearr_13535_13553 = state_13518__$1;(statearr_13535_13553[(2)] = null);
(statearr_13535_13553[(1)] = (2));
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
});})(c__6677__auto___13543,out))
;return ((function (switch__6612__auto__,c__6677__auto___13543,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13539 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13539[(0)] = state_machine__6613__auto__);
(statearr_13539[(1)] = (1));
return statearr_13539;
});
var state_machine__6613__auto____1 = (function (state_13518){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13518);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13540){if((e13540 instanceof Object))
{var ex__6616__auto__ = e13540;var statearr_13541_13554 = state_13518;(statearr_13541_13554[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13518);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13555 = state_13518;
state_13518 = G__13555;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13518){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13543,out))
})();var state__6679__auto__ = (function (){var statearr_13542 = f__6678__auto__.call(null);(statearr_13542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13543);
return statearr_13542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13543,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13690 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13690,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13690,out){
return (function (state_13660){var state_val_13661 = (state_13660[(1)]);if((state_val_13661 === (7)))
{var inst_13656 = (state_13660[(2)]);var state_13660__$1 = state_13660;var statearr_13662_13691 = state_13660__$1;(statearr_13662_13691[(2)] = inst_13656);
(statearr_13662_13691[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (1)))
{var inst_13623 = (new Array(n));var inst_13624 = inst_13623;var inst_13625 = (0);var state_13660__$1 = (function (){var statearr_13663 = state_13660;(statearr_13663[(7)] = inst_13625);
(statearr_13663[(8)] = inst_13624);
return statearr_13663;
})();var statearr_13664_13692 = state_13660__$1;(statearr_13664_13692[(2)] = null);
(statearr_13664_13692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (4)))
{var inst_13628 = (state_13660[(9)]);var inst_13628__$1 = (state_13660[(2)]);var inst_13629 = (inst_13628__$1 == null);var inst_13630 = cljs.core.not.call(null,inst_13629);var state_13660__$1 = (function (){var statearr_13665 = state_13660;(statearr_13665[(9)] = inst_13628__$1);
return statearr_13665;
})();if(inst_13630)
{var statearr_13666_13693 = state_13660__$1;(statearr_13666_13693[(1)] = (5));
} else
{var statearr_13667_13694 = state_13660__$1;(statearr_13667_13694[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (15)))
{var inst_13650 = (state_13660[(2)]);var state_13660__$1 = state_13660;var statearr_13668_13695 = state_13660__$1;(statearr_13668_13695[(2)] = inst_13650);
(statearr_13668_13695[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (13)))
{var state_13660__$1 = state_13660;var statearr_13669_13696 = state_13660__$1;(statearr_13669_13696[(2)] = null);
(statearr_13669_13696[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (6)))
{var inst_13625 = (state_13660[(7)]);var inst_13646 = (inst_13625 > (0));var state_13660__$1 = state_13660;if(cljs.core.truth_(inst_13646))
{var statearr_13670_13697 = state_13660__$1;(statearr_13670_13697[(1)] = (12));
} else
{var statearr_13671_13698 = state_13660__$1;(statearr_13671_13698[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (3)))
{var inst_13658 = (state_13660[(2)]);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13660__$1,inst_13658);
} else
{if((state_val_13661 === (12)))
{var inst_13624 = (state_13660[(8)]);var inst_13648 = cljs.core.vec.call(null,inst_13624);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13660__$1,(15),out,inst_13648);
} else
{if((state_val_13661 === (2)))
{var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13660__$1,(4),ch);
} else
{if((state_val_13661 === (11)))
{var inst_13640 = (state_13660[(2)]);var inst_13641 = (new Array(n));var inst_13624 = inst_13641;var inst_13625 = (0);var state_13660__$1 = (function (){var statearr_13672 = state_13660;(statearr_13672[(7)] = inst_13625);
(statearr_13672[(10)] = inst_13640);
(statearr_13672[(8)] = inst_13624);
return statearr_13672;
})();var statearr_13673_13699 = state_13660__$1;(statearr_13673_13699[(2)] = null);
(statearr_13673_13699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (9)))
{var inst_13624 = (state_13660[(8)]);var inst_13638 = cljs.core.vec.call(null,inst_13624);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13660__$1,(11),out,inst_13638);
} else
{if((state_val_13661 === (5)))
{var inst_13628 = (state_13660[(9)]);var inst_13625 = (state_13660[(7)]);var inst_13633 = (state_13660[(11)]);var inst_13624 = (state_13660[(8)]);var inst_13632 = (inst_13624[inst_13625] = inst_13628);var inst_13633__$1 = (inst_13625 + (1));var inst_13634 = (inst_13633__$1 < n);var state_13660__$1 = (function (){var statearr_13674 = state_13660;(statearr_13674[(12)] = inst_13632);
(statearr_13674[(11)] = inst_13633__$1);
return statearr_13674;
})();if(cljs.core.truth_(inst_13634))
{var statearr_13675_13700 = state_13660__$1;(statearr_13675_13700[(1)] = (8));
} else
{var statearr_13676_13701 = state_13660__$1;(statearr_13676_13701[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (14)))
{var inst_13653 = (state_13660[(2)]);var inst_13654 = cljs.core.async.close_BANG_.call(null,out);var state_13660__$1 = (function (){var statearr_13678 = state_13660;(statearr_13678[(13)] = inst_13653);
return statearr_13678;
})();var statearr_13679_13702 = state_13660__$1;(statearr_13679_13702[(2)] = inst_13654);
(statearr_13679_13702[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (10)))
{var inst_13644 = (state_13660[(2)]);var state_13660__$1 = state_13660;var statearr_13680_13703 = state_13660__$1;(statearr_13680_13703[(2)] = inst_13644);
(statearr_13680_13703[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (8)))
{var inst_13633 = (state_13660[(11)]);var inst_13624 = (state_13660[(8)]);var tmp13677 = inst_13624;var inst_13624__$1 = tmp13677;var inst_13625 = inst_13633;var state_13660__$1 = (function (){var statearr_13681 = state_13660;(statearr_13681[(7)] = inst_13625);
(statearr_13681[(8)] = inst_13624__$1);
return statearr_13681;
})();var statearr_13682_13704 = state_13660__$1;(statearr_13682_13704[(2)] = null);
(statearr_13682_13704[(1)] = (2));
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
});})(c__6677__auto___13690,out))
;return ((function (switch__6612__auto__,c__6677__auto___13690,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13686[(0)] = state_machine__6613__auto__);
(statearr_13686[(1)] = (1));
return statearr_13686;
});
var state_machine__6613__auto____1 = (function (state_13660){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13687){if((e13687 instanceof Object))
{var ex__6616__auto__ = e13687;var statearr_13688_13705 = state_13660;(statearr_13688_13705[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13706 = state_13660;
state_13660 = G__13706;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13660){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13690,out))
})();var state__6679__auto__ = (function (){var statearr_13689 = f__6678__auto__.call(null);(statearr_13689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13690);
return statearr_13689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13690,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6677__auto___13849 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto___13849,out){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto___13849,out){
return (function (state_13819){var state_val_13820 = (state_13819[(1)]);if((state_val_13820 === (7)))
{var inst_13815 = (state_13819[(2)]);var state_13819__$1 = state_13819;var statearr_13821_13850 = state_13819__$1;(statearr_13821_13850[(2)] = inst_13815);
(statearr_13821_13850[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (1)))
{var inst_13778 = [];var inst_13779 = inst_13778;var inst_13780 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13819__$1 = (function (){var statearr_13822 = state_13819;(statearr_13822[(7)] = inst_13779);
(statearr_13822[(8)] = inst_13780);
return statearr_13822;
})();var statearr_13823_13851 = state_13819__$1;(statearr_13823_13851[(2)] = null);
(statearr_13823_13851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (4)))
{var inst_13783 = (state_13819[(9)]);var inst_13783__$1 = (state_13819[(2)]);var inst_13784 = (inst_13783__$1 == null);var inst_13785 = cljs.core.not.call(null,inst_13784);var state_13819__$1 = (function (){var statearr_13824 = state_13819;(statearr_13824[(9)] = inst_13783__$1);
return statearr_13824;
})();if(inst_13785)
{var statearr_13825_13852 = state_13819__$1;(statearr_13825_13852[(1)] = (5));
} else
{var statearr_13826_13853 = state_13819__$1;(statearr_13826_13853[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (15)))
{var inst_13809 = (state_13819[(2)]);var state_13819__$1 = state_13819;var statearr_13827_13854 = state_13819__$1;(statearr_13827_13854[(2)] = inst_13809);
(statearr_13827_13854[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (13)))
{var state_13819__$1 = state_13819;var statearr_13828_13855 = state_13819__$1;(statearr_13828_13855[(2)] = null);
(statearr_13828_13855[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (6)))
{var inst_13779 = (state_13819[(7)]);var inst_13804 = inst_13779.length;var inst_13805 = (inst_13804 > (0));var state_13819__$1 = state_13819;if(cljs.core.truth_(inst_13805))
{var statearr_13829_13856 = state_13819__$1;(statearr_13829_13856[(1)] = (12));
} else
{var statearr_13830_13857 = state_13819__$1;(statearr_13830_13857[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (3)))
{var inst_13817 = (state_13819[(2)]);var state_13819__$1 = state_13819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13819__$1,inst_13817);
} else
{if((state_val_13820 === (12)))
{var inst_13779 = (state_13819[(7)]);var inst_13807 = cljs.core.vec.call(null,inst_13779);var state_13819__$1 = state_13819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13819__$1,(15),out,inst_13807);
} else
{if((state_val_13820 === (2)))
{var state_13819__$1 = state_13819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13819__$1,(4),ch);
} else
{if((state_val_13820 === (11)))
{var inst_13783 = (state_13819[(9)]);var inst_13787 = (state_13819[(10)]);var inst_13797 = (state_13819[(2)]);var inst_13798 = [];var inst_13799 = inst_13798.push(inst_13783);var inst_13779 = inst_13798;var inst_13780 = inst_13787;var state_13819__$1 = (function (){var statearr_13831 = state_13819;(statearr_13831[(11)] = inst_13797);
(statearr_13831[(12)] = inst_13799);
(statearr_13831[(7)] = inst_13779);
(statearr_13831[(8)] = inst_13780);
return statearr_13831;
})();var statearr_13832_13858 = state_13819__$1;(statearr_13832_13858[(2)] = null);
(statearr_13832_13858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (9)))
{var inst_13779 = (state_13819[(7)]);var inst_13795 = cljs.core.vec.call(null,inst_13779);var state_13819__$1 = state_13819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13819__$1,(11),out,inst_13795);
} else
{if((state_val_13820 === (5)))
{var inst_13783 = (state_13819[(9)]);var inst_13780 = (state_13819[(8)]);var inst_13787 = (state_13819[(10)]);var inst_13787__$1 = f.call(null,inst_13783);var inst_13788 = cljs.core._EQ_.call(null,inst_13787__$1,inst_13780);var inst_13789 = cljs.core.keyword_identical_QMARK_.call(null,inst_13780,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13790 = (inst_13788) || (inst_13789);var state_13819__$1 = (function (){var statearr_13833 = state_13819;(statearr_13833[(10)] = inst_13787__$1);
return statearr_13833;
})();if(cljs.core.truth_(inst_13790))
{var statearr_13834_13859 = state_13819__$1;(statearr_13834_13859[(1)] = (8));
} else
{var statearr_13835_13860 = state_13819__$1;(statearr_13835_13860[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (14)))
{var inst_13812 = (state_13819[(2)]);var inst_13813 = cljs.core.async.close_BANG_.call(null,out);var state_13819__$1 = (function (){var statearr_13837 = state_13819;(statearr_13837[(13)] = inst_13812);
return statearr_13837;
})();var statearr_13838_13861 = state_13819__$1;(statearr_13838_13861[(2)] = inst_13813);
(statearr_13838_13861[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (10)))
{var inst_13802 = (state_13819[(2)]);var state_13819__$1 = state_13819;var statearr_13839_13862 = state_13819__$1;(statearr_13839_13862[(2)] = inst_13802);
(statearr_13839_13862[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13820 === (8)))
{var inst_13779 = (state_13819[(7)]);var inst_13783 = (state_13819[(9)]);var inst_13787 = (state_13819[(10)]);var inst_13792 = inst_13779.push(inst_13783);var tmp13836 = inst_13779;var inst_13779__$1 = tmp13836;var inst_13780 = inst_13787;var state_13819__$1 = (function (){var statearr_13840 = state_13819;(statearr_13840[(7)] = inst_13779__$1);
(statearr_13840[(8)] = inst_13780);
(statearr_13840[(14)] = inst_13792);
return statearr_13840;
})();var statearr_13841_13863 = state_13819__$1;(statearr_13841_13863[(2)] = null);
(statearr_13841_13863[(1)] = (2));
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
});})(c__6677__auto___13849,out))
;return ((function (switch__6612__auto__,c__6677__auto___13849,out){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_13845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13845[(0)] = state_machine__6613__auto__);
(statearr_13845[(1)] = (1));
return statearr_13845;
});
var state_machine__6613__auto____1 = (function (state_13819){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_13819);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e13846){if((e13846 instanceof Object))
{var ex__6616__auto__ = e13846;var statearr_13847_13864 = state_13819;(statearr_13847_13864[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13865 = state_13819;
state_13819 = G__13865;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_13819){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_13819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto___13849,out))
})();var state__6679__auto__ = (function (){var statearr_13848 = f__6678__auto__.call(null);(statearr_13848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto___13849);
return statearr_13848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto___13849,out))
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