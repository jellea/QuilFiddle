replgoog.provide('repl');
replgoog.require('cljsrepl.core');
replgoog.require('quilrepl.core');
replgoog.require('cljsrepl.repl');
repl.evaluate = (function evaluate(text){
return cljsrepl.repl.eval_print.call(null,text);
});
replgoog.exportSymbol('repl.evaluate', repl.evaluate);
repl.init_with_pipes = (function init_with_pipes(output,error,print_fn){
cljsrepl.core._STAR_out_STAR_ = (function (p1__3179_SHARP_){
return print_fn.call(null,p1__3179_SHARP_,"out");
});
cljsrepl.core._STAR_rtn_STAR_ = (function (p1__3180_SHARP_){
return output.call(null,p1__3180_SHARP_);
});
cljsrepl.core._STAR_err_STAR_ = (function (p1__3181_SHARP_){
return error.call(null,p1__3181_SHARP_);
});
cljsrepl.core._STAR_print_fn_STAR_ = (function (p1__3182_SHARP_){
return cljsrepl.core._STAR_out_STAR_.call(null,p1__3182_SHARP_);
});
return cljsrepl.repl.init.call(null);
});
replgoog.exportSymbol('repl.init_with_pipes', repl.init_with_pipes);
