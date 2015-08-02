// Compiled by ClojureScript 1.7.28 {}
goog.provide('quilfiddle.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
quilfiddle.repl.output_chan = cljs.core.async.chan.call(null);
quilfiddle.repl.error_chan = cljs.core.async.chan.call(null);
quilfiddle.repl.channel_piping_fn = (function quilfiddle$repl$channel_piping_fn(chan){
return (function (text){
var c__9849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto__){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto__){
return (function (state_12005){
var state_val_12006 = (state_12005[(1)]);
if((state_val_12006 === (1))){
var state_12005__$1 = state_12005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12005__$1,(2),chan,text);
} else {
if((state_val_12006 === (2))){
var inst_12003 = (state_12005[(2)]);
var state_12005__$1 = state_12005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12005__$1,inst_12003);
} else {
return null;
}
}
});})(c__9849__auto__))
;
return ((function (switch__9787__auto__,c__9849__auto__){
return (function() {
var quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto__ = null;
var quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto____0 = (function (){
var statearr_12010 = [null,null,null,null,null,null,null];
(statearr_12010[(0)] = quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto__);

(statearr_12010[(1)] = (1));

return statearr_12010;
});
var quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto____1 = (function (state_12005){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_12005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e12011){if((e12011 instanceof Object)){
var ex__9791__auto__ = e12011;
var statearr_12012_12014 = state_12005;
(statearr_12012_12014[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12015 = state_12005;
state_12005 = G__12015;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto__ = function(state_12005){
switch(arguments.length){
case 0:
return quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto____0.call(this);
case 1:
return quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto____1.call(this,state_12005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto____0;
quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto____1;
return quilfiddle$repl$channel_piping_fn_$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto__))
})();
var state__9851__auto__ = (function (){var statearr_12013 = f__9850__auto__.call(null);
(statearr_12013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto__);

return statearr_12013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto__))
);

return c__9849__auto__;
});
});
quilfiddle.repl.eval = (function quilfiddle$repl$eval(input_string){
return repl.evaluate(input_string);
});
goog.exportSymbol('quilfiddle.repl.eval', quilfiddle.repl.eval);
quilfiddle.repl.listen_for_output = (function quilfiddle$repl$listen_for_output(handler){
repl.init_with_pipes(quilfiddle.repl.channel_piping_fn.call(null,quilfiddle.repl.output_chan),quilfiddle.repl.channel_piping_fn.call(null,quilfiddle.repl.error_chan),(function (p1__12016_SHARP_){
return console.log(p1__12016_SHARP_);
}));

var c__9849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9849__auto__){
return (function (){
var f__9850__auto__ = (function (){var switch__9787__auto__ = ((function (c__9849__auto__){
return (function (state_12069){
var state_val_12070 = (state_12069[(1)]);
if((state_val_12070 === (1))){
var state_12069__$1 = state_12069;
var statearr_12071_12085 = state_12069__$1;
(statearr_12071_12085[(2)] = null);

(statearr_12071_12085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12070 === (2))){
var state_12069__$1 = state_12069;
var statearr_12072_12086 = state_12069__$1;
(statearr_12072_12086[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12070 === (3))){
var inst_12067 = (state_12069[(2)]);
var state_12069__$1 = state_12069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12069__$1,inst_12067);
} else {
if((state_val_12070 === (4))){
var inst_12054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12055 = [quilfiddle.repl.error_chan,quilfiddle.repl.output_chan];
var inst_12056 = (new cljs.core.PersistentVector(null,2,(5),inst_12054,inst_12055,null));
var state_12069__$1 = state_12069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12069__$1,(7),inst_12056);
} else {
if((state_val_12070 === (5))){
var state_12069__$1 = state_12069;
var statearr_12074_12087 = state_12069__$1;
(statearr_12074_12087[(2)] = null);

(statearr_12074_12087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12070 === (6))){
var inst_12065 = (state_12069[(2)]);
var state_12069__$1 = state_12069;
var statearr_12075_12088 = state_12069__$1;
(statearr_12075_12088[(2)] = inst_12065);

(statearr_12075_12088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12070 === (7))){
var inst_12058 = (state_12069[(2)]);
var inst_12059 = cljs.core.nth.call(null,inst_12058,(0),null);
var inst_12060 = cljs.core.nth.call(null,inst_12058,(1),null);
var inst_12061 = handler.call(null,inst_12059);
var state_12069__$1 = (function (){var statearr_12076 = state_12069;
(statearr_12076[(7)] = inst_12061);

(statearr_12076[(8)] = inst_12060);

return statearr_12076;
})();
var statearr_12077_12089 = state_12069__$1;
(statearr_12077_12089[(2)] = null);

(statearr_12077_12089[(1)] = (2));


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
var quilfiddle$repl$listen_for_output_$_state_machine__9788__auto__ = null;
var quilfiddle$repl$listen_for_output_$_state_machine__9788__auto____0 = (function (){
var statearr_12081 = [null,null,null,null,null,null,null,null,null];
(statearr_12081[(0)] = quilfiddle$repl$listen_for_output_$_state_machine__9788__auto__);

(statearr_12081[(1)] = (1));

return statearr_12081;
});
var quilfiddle$repl$listen_for_output_$_state_machine__9788__auto____1 = (function (state_12069){
while(true){
var ret_value__9789__auto__ = (function (){try{while(true){
var result__9790__auto__ = switch__9787__auto__.call(null,state_12069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9790__auto__;
}
break;
}
}catch (e12082){if((e12082 instanceof Object)){
var ex__9791__auto__ = e12082;
var statearr_12083_12090 = state_12069;
(statearr_12083_12090[(5)] = ex__9791__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12091 = state_12069;
state_12069 = G__12091;
continue;
} else {
return ret_value__9789__auto__;
}
break;
}
});
quilfiddle$repl$listen_for_output_$_state_machine__9788__auto__ = function(state_12069){
switch(arguments.length){
case 0:
return quilfiddle$repl$listen_for_output_$_state_machine__9788__auto____0.call(this);
case 1:
return quilfiddle$repl$listen_for_output_$_state_machine__9788__auto____1.call(this,state_12069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quilfiddle$repl$listen_for_output_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$0 = quilfiddle$repl$listen_for_output_$_state_machine__9788__auto____0;
quilfiddle$repl$listen_for_output_$_state_machine__9788__auto__.cljs$core$IFn$_invoke$arity$1 = quilfiddle$repl$listen_for_output_$_state_machine__9788__auto____1;
return quilfiddle$repl$listen_for_output_$_state_machine__9788__auto__;
})()
;})(switch__9787__auto__,c__9849__auto__))
})();
var state__9851__auto__ = (function (){var statearr_12084 = f__9850__auto__.call(null);
(statearr_12084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9849__auto__);

return statearr_12084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9851__auto__);
});})(c__9849__auto__))
);

return c__9849__auto__;
});
goog.exportSymbol('quilfiddle.repl.listen_for_output', quilfiddle.repl.listen_for_output);

//# sourceMappingURL=repl.js.map