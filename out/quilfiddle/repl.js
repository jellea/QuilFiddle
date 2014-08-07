// Compiled by ClojureScript 0.0-2280
goog.provide('quilfiddle.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
quilfiddle.repl.output_chan = cljs.core.async.chan.call(null);
quilfiddle.repl.error_chan = cljs.core.async.chan.call(null);
quilfiddle.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__6677__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto__){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto__){
return (function (state_9296){var state_val_9297 = (state_9296[(1)]);if((state_val_9297 === (2)))
{var inst_9294 = (state_9296[(2)]);var state_9296__$1 = state_9296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9296__$1,inst_9294);
} else
{if((state_val_9297 === (1)))
{var state_9296__$1 = state_9296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9296__$1,(2),chan,text);
} else
{return null;
}
}
});})(c__6677__auto__))
;return ((function (switch__6612__auto__,c__6677__auto__){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_9301 = [null,null,null,null,null,null,null];(statearr_9301[(0)] = state_machine__6613__auto__);
(statearr_9301[(1)] = (1));
return statearr_9301;
});
var state_machine__6613__auto____1 = (function (state_9296){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_9296);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e9302){if((e9302 instanceof Object))
{var ex__6616__auto__ = e9302;var statearr_9303_9305 = state_9296;(statearr_9303_9305[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9296);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9306 = state_9296;
state_9296 = G__9306;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_9296){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_9296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_9304 = f__6678__auto__.call(null);(statearr_9304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_9304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto__))
);
return c__6677__auto__;
});
});
quilfiddle.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('quilfiddle.repl.eval', quilfiddle.repl.eval);
quilfiddle.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(quilfiddle.repl.channel_piping_fn.call(null,quilfiddle.repl.output_chan),quilfiddle.repl.channel_piping_fn.call(null,quilfiddle.repl.error_chan),(function (p1__9307_SHARP_){return console.log(p1__9307_SHARP_);
}));
var c__6677__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto__){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto__){
return (function (state_9358){var state_val_9359 = (state_9358[(1)]);if((state_val_9359 === (7)))
{var inst_9347 = (state_9358[(2)]);var inst_9348 = cljs.core.nth.call(null,inst_9347,(0),null);var inst_9349 = cljs.core.nth.call(null,inst_9347,(1),null);var inst_9350 = handler.call(null,inst_9348);var state_9358__$1 = (function (){var statearr_9360 = state_9358;(statearr_9360[(7)] = inst_9350);
(statearr_9360[(8)] = inst_9349);
return statearr_9360;
})();var statearr_9361_9374 = state_9358__$1;(statearr_9361_9374[(2)] = null);
(statearr_9361_9374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9359 === (6)))
{var inst_9354 = (state_9358[(2)]);var state_9358__$1 = state_9358;var statearr_9362_9375 = state_9358__$1;(statearr_9362_9375[(2)] = inst_9354);
(statearr_9362_9375[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9359 === (5)))
{var state_9358__$1 = state_9358;var statearr_9363_9376 = state_9358__$1;(statearr_9363_9376[(2)] = null);
(statearr_9363_9376[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9359 === (4)))
{var inst_9344 = [quilfiddle.repl.error_chan,quilfiddle.repl.output_chan];var inst_9345 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9344,null));var state_9358__$1 = state_9358;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9358__$1,(7),inst_9345);
} else
{if((state_val_9359 === (3)))
{var inst_9356 = (state_9358[(2)]);var state_9358__$1 = state_9358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9358__$1,inst_9356);
} else
{if((state_val_9359 === (2)))
{var state_9358__$1 = state_9358;if(true)
{var statearr_9364_9377 = state_9358__$1;(statearr_9364_9377[(1)] = (4));
} else
{var statearr_9365_9378 = state_9358__$1;(statearr_9365_9378[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9359 === (1)))
{var state_9358__$1 = state_9358;var statearr_9366_9379 = state_9358__$1;(statearr_9366_9379[(2)] = null);
(statearr_9366_9379[(1)] = (2));
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
var state_machine__6613__auto____0 = (function (){var statearr_9370 = [null,null,null,null,null,null,null,null,null];(statearr_9370[(0)] = state_machine__6613__auto__);
(statearr_9370[(1)] = (1));
return statearr_9370;
});
var state_machine__6613__auto____1 = (function (state_9358){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_9358);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e9371){if((e9371 instanceof Object))
{var ex__6616__auto__ = e9371;var statearr_9372_9380 = state_9358;(statearr_9372_9380[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9358);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9381 = state_9358;
state_9358 = G__9381;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_9358){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_9358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_9373 = f__6678__auto__.call(null);(statearr_9373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_9373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto__))
);
return c__6677__auto__;
});
goog.exportSymbol('quilfiddle.repl.listen_for_output', quilfiddle.repl.listen_for_output);

//# sourceMappingURL=repl.js.map