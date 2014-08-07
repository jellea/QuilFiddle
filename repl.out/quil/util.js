// Compiled by ClojureScript 0.0-2280
replgoog.provide('quilrepl.util');
replgoog.require('cljs.core');
/**
* Function that does nothing.
*/
quilrepl.util.no_fn = (function no_fn(){return null;
});
/**
* 
*/
quilrepl.util.resolve_constant_key = (function resolve_constant_key(key,mappings){return (quilrepl.sketch.current_applet.call(null)[cljs.core.get.call(null,mappings,key)]);
});
/**
* Returns the length of the longest key of map m. Assumes m's keys are strings
* and returns 0 if map is empty:
* (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
* (length-of-longest-key {}) ;=> 0
*/
quilrepl.util.length_of_longest_key = (function length_of_longest_key(m){var or__3544__auto__ = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__10560_SHARP_){return p1__10560_SHARP_.length();
}),cljs.core.keys.call(null,m))));if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return (0);
}
});
/**
* Generates a padding string starting concatting s with len times pad:
* (gen-padding "" 5 "b") ;=> "bbbbb"
* May be called without starting string s in which case it defaults to the
* empty string and also without pad in which case it defaults to a single space
*/
quilrepl.util.gen_padding = (function() {
var gen_padding = null;
var gen_padding__1 = (function (len){return gen_padding.call(null,"",len," ");
});
var gen_padding__2 = (function (len,pad){return gen_padding.call(null,"",len,pad);
});
var gen_padding__3 = (function (s,len,pad){if((len > (0)))
{return gen_padding.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad)),(len - (1)),pad);
} else
{return s;
}
});
gen_padding = function(s,len,pad){
switch(arguments.length){
case 1:
return gen_padding__1.call(this,s);
case 2:
return gen_padding__2.call(this,s,len);
case 3:
return gen_padding__3.call(this,s,len,pad);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gen_padding.cljs$core$IFn$_invoke$arity$1 = gen_padding__1;
gen_padding.cljs$core$IFn$_invoke$arity$2 = gen_padding__2;
gen_padding.cljs$core$IFn$_invoke$arity$3 = gen_padding__3;
return gen_padding;
})()
;
quilrepl.util.print_definition_list = (function print_definition_list(definitions){var longest_key = quilrepl.util.length_of_longest_key.call(null,definitions);return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (longest_key){
return (function (p__10563){var vec__10564 = p__10563;var k = cljs.core.nth.call(null,vec__10564,(0),null);var v = cljs.core.nth.call(null,vec__10564,(1),null);var len = k.length();var diff = (longest_key - len);var pad = quilrepl.util.gen_padding.call(null,diff);return cljs.core.println.call(null,k,pad,"- ",v);
});})(longest_key))
,definitions));
});
quilrepl.util.prepare_quil_name = (function prepare_quil_name(const_keyword){return replclojure.string.replace.call(null,replclojure.string.upper_case.call(null,cljs.core.name.call(null,const_keyword)),/-/,"_");
});

//# sourceMappingURL=util.js.map
