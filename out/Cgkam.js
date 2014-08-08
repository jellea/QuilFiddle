goog.provide('repl');
goog.require('cljs.core');
goog.require('cljs.repl');
repl.evaluate = (function evaluate(text){
return cljs.repl.eval_print.call(null,text);
});
goog.exportSymbol('repl.evaluate', repl.evaluate);
repl.init_with_pipes = (function init_with_pipes(output,error,print_fn){
cljs.core._STAR_out_STAR_ = (function (p1__3179_SHARP_){
return print_fn.call(null,p1__3179_SHARP_,"out");
});
cljs.core._STAR_rtn_STAR_ = (function (p1__3180_SHARP_){
return output.call(null,p1__3180_SHARP_);
});
cljs.core._STAR_err_STAR_ = (function (p1__3181_SHARP_){
return error.call(null,p1__3181_SHARP_);
});
cljs.core._STAR_print_fn_STAR_ = (function (p1__3182_SHARP_){
return cljs.core._STAR_out_STAR_.call(null,p1__3182_SHARP_);
});
return cljs.repl.init.call(null);
});
goog.exportSymbol('repl.init_with_pipes', repl.init_with_pipes);
