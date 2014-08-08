// Compiled by ClojureScript 0.0-2280
goog.provide('quilfiddle.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('quil.core');
goog.require('quil.core');
quilfiddle.repl.output_chan = cljs.core.async.chan.call(null);
quilfiddle.repl.error_chan = cljs.core.async.chan.call(null);
quilfiddle.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__6677__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto__){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto__){
return (function (state_9785){var state_val_9786 = (state_9785[(1)]);if((state_val_9786 === (2)))
{var inst_9783 = (state_9785[(2)]);var state_9785__$1 = state_9785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9785__$1,inst_9783);
} else
{if((state_val_9786 === (1)))
{var state_9785__$1 = state_9785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9785__$1,(2),chan,text);
} else
{return null;
}
}
});})(c__6677__auto__))
;return ((function (switch__6612__auto__,c__6677__auto__){
return (function() {
var state_machine__6613__auto__ = null;
var state_machine__6613__auto____0 = (function (){var statearr_9790 = [null,null,null,null,null,null,null];(statearr_9790[(0)] = state_machine__6613__auto__);
(statearr_9790[(1)] = (1));
return statearr_9790;
});
var state_machine__6613__auto____1 = (function (state_9785){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_9785);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e9791){if((e9791 instanceof Object))
{var ex__6616__auto__ = e9791;var statearr_9792_9794 = state_9785;(statearr_9792_9794[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9795 = state_9785;
state_9785 = G__9795;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_9785){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_9785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_9793 = f__6678__auto__.call(null);(statearr_9793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_9793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto__))
);
return c__6677__auto__;
});
});
quilfiddle.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('quilfiddle.repl.eval', quilfiddle.repl.eval);
quilfiddle.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(quilfiddle.repl.channel_piping_fn.call(null,quilfiddle.repl.output_chan),quilfiddle.repl.channel_piping_fn.call(null,quilfiddle.repl.error_chan),(function (p1__9796_SHARP_){return console.log(p1__9796_SHARP_);
}));
var c__6677__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6677__auto__){
return (function (){var f__6678__auto__ = (function (){var switch__6612__auto__ = ((function (c__6677__auto__){
return (function (state_9847){var state_val_9848 = (state_9847[(1)]);if((state_val_9848 === (7)))
{var inst_9836 = (state_9847[(2)]);var inst_9837 = cljs.core.nth.call(null,inst_9836,(0),null);var inst_9838 = cljs.core.nth.call(null,inst_9836,(1),null);var inst_9839 = handler.call(null,inst_9837);var state_9847__$1 = (function (){var statearr_9849 = state_9847;(statearr_9849[(7)] = inst_9838);
(statearr_9849[(8)] = inst_9839);
return statearr_9849;
})();var statearr_9850_9863 = state_9847__$1;(statearr_9850_9863[(2)] = null);
(statearr_9850_9863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9848 === (6)))
{var inst_9843 = (state_9847[(2)]);var state_9847__$1 = state_9847;var statearr_9851_9864 = state_9847__$1;(statearr_9851_9864[(2)] = inst_9843);
(statearr_9851_9864[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9848 === (5)))
{var state_9847__$1 = state_9847;var statearr_9852_9865 = state_9847__$1;(statearr_9852_9865[(2)] = null);
(statearr_9852_9865[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9848 === (4)))
{var inst_9833 = [quilfiddle.repl.error_chan,quilfiddle.repl.output_chan];var inst_9834 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9833,null));var state_9847__$1 = state_9847;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9847__$1,(7),inst_9834);
} else
{if((state_val_9848 === (3)))
{var inst_9845 = (state_9847[(2)]);var state_9847__$1 = state_9847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9847__$1,inst_9845);
} else
{if((state_val_9848 === (2)))
{var state_9847__$1 = state_9847;if(true)
{var statearr_9853_9866 = state_9847__$1;(statearr_9853_9866[(1)] = (4));
} else
{var statearr_9854_9867 = state_9847__$1;(statearr_9854_9867[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9848 === (1)))
{var state_9847__$1 = state_9847;var statearr_9855_9868 = state_9847__$1;(statearr_9855_9868[(2)] = null);
(statearr_9855_9868[(1)] = (2));
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
var state_machine__6613__auto____0 = (function (){var statearr_9859 = [null,null,null,null,null,null,null,null,null];(statearr_9859[(0)] = state_machine__6613__auto__);
(statearr_9859[(1)] = (1));
return statearr_9859;
});
var state_machine__6613__auto____1 = (function (state_9847){while(true){
var ret_value__6614__auto__ = (function (){try{while(true){
var result__6615__auto__ = switch__6612__auto__.call(null,state_9847);if(cljs.core.keyword_identical_QMARK_.call(null,result__6615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6615__auto__;
}
break;
}
}catch (e9860){if((e9860 instanceof Object))
{var ex__6616__auto__ = e9860;var statearr_9861_9869 = state_9847;(statearr_9861_9869[(5)] = ex__6616__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9847);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9870 = state_9847;
state_9847 = G__9870;
continue;
}
} else
{return ret_value__6614__auto__;
}
break;
}
});
state_machine__6613__auto__ = function(state_9847){
switch(arguments.length){
case 0:
return state_machine__6613__auto____0.call(this);
case 1:
return state_machine__6613__auto____1.call(this,state_9847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6613__auto____0;
state_machine__6613__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6613__auto____1;
return state_machine__6613__auto__;
})()
;})(switch__6612__auto__,c__6677__auto__))
})();var state__6679__auto__ = (function (){var statearr_9862 = f__6678__auto__.call(null);(statearr_9862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6677__auto__);
return statearr_9862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6679__auto__);
});})(c__6677__auto__))
);
return c__6677__auto__;
});
goog.exportSymbol('quilfiddle.repl.listen_for_output', quilfiddle.repl.listen_for_output);

//# sourceMappingURL=repl.js.map