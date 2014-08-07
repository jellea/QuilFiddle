// Compiled by ClojureScript 0.0-2280
replgoog.provide('replclojure.browser.dom');
replgoog.require('cljsrepl.core');
replgoog.require('replgoog.object');
replgoog.require('replgoog.object');
replgoog.require('replgoog.dom');
replgoog.require('replgoog.dom');
/**
* @param {...*} var_args
*/
replclojure.browser.dom.append = (function() { 
var append__delegate = function (parent,children){cljsrepl.core.apply.call(null,replgoog.dom.append,parent,children);
return parent;
};
var append = function (parent,var_args){
var children = null;if (arguments.length > 1) {
  children = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return append__delegate.call(this,parent,children);};
append.cljsrepl$lang$maxFixedArity = 1;
append.cljsrepl$lang$applyTo = (function (arglist__10579){
var parent = cljsrepl.core.first(arglist__10579);
var children = cljsrepl.core.rest(arglist__10579);
return append__delegate(parent,children);
});
append.cljsrepl$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
replclojure.browser.dom.DOMBuilder = (function (){var obj10581 = {};return obj10581;
})();
replclojure.browser.dom._element = (function() {
var _element = null;
var _element__1 = (function (this$){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$1;
} else
{return and__3532__auto__;
}
})())
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$1(this$);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (replclojure.browser.dom._element[replgoog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (replclojure.browser.dom._element["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$);
}
});
var _element__2 = (function (this$,attrs_or_children){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$2;
} else
{return and__3532__auto__;
}
})())
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$2(this$,attrs_or_children);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (replclojure.browser.dom._element[replgoog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (replclojure.browser.dom._element["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$,attrs_or_children);
}
});
var _element__3 = (function (this$,attrs,children){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$3;
} else
{return and__3532__auto__;
}
})())
{return this$.clojure$browser$dom$DOMBuilder$_element$arity$3(this$,attrs,children);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (replclojure.browser.dom._element[replgoog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (replclojure.browser.dom._element["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
})().call(null,this$,attrs,children);
}
});
_element = function(this$,attrs,children){
switch(arguments.length){
case 1:
return _element__1.call(this,this$);
case 2:
return _element__2.call(this,this$,attrs);
case 3:
return _element__3.call(this,this$,attrs,children);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_element.cljsrepl$core$IFn$_invoke$arity$1 = _element__1;
_element.cljsrepl$core$IFn$_invoke$arity$2 = _element__2;
_element.cljsrepl$core$IFn$_invoke$arity$3 = _element__3;
return _element;
})()
;
/**
* @param {...*} var_args
*/
replclojure.browser.dom.log = (function() { 
var log__delegate = function (args){return console.log(cljsrepl.core.apply.call(null,cljsrepl.core.pr_str,args));
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljsrepl$lang$maxFixedArity = 0;
log.cljsrepl$lang$applyTo = (function (arglist__10582){
var args = cljsrepl.core.seq(arglist__10582);
return log__delegate(args);
});
log.cljsrepl$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
replclojure.browser.dom.log_obj = (function log_obj(obj){return console.log(obj);
});
Element.prototype.clojure$browser$dom$DOMBuilder$ = true;
Element.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){var this$__$1 = this;replclojure.browser.dom.log.call(null,"js/Element (-element ",this$__$1,")");
return this$__$1;
});
cljsrepl.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$ = true;
cljsrepl.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){var this$__$1 = this;replclojure.browser.dom.log.call(null,"PersistentVector (-element ",this$__$1,")");
var tag = cljsrepl.core.first.call(null,this$__$1);var attrs = cljsrepl.core.second.call(null,this$__$1);var children = cljsrepl.core.drop.call(null,(2),this$__$1);if(cljsrepl.core.map_QMARK_.call(null,attrs))
{return replclojure.browser.dom._element.call(null,tag,attrs,children);
} else
{return replclojure.browser.dom._element.call(null,tag,null,cljsrepl.core.rest.call(null,this$__$1));
}
});
(replclojure.browser.dom.DOMBuilder["string"] = true);
(replclojure.browser.dom._element["string"] = (function() {
var G__10590 = null;
var G__10590__1 = (function (this$){replclojure.browser.dom.log.call(null,"string (-element ",this$,")");
if((this$ instanceof cljsrepl.core.Keyword))
{return replgoog.dom.createElement(cljsrepl.core.name.call(null,this$));
} else
{if(new cljsrepl.core.Keyword(null,"else","else",-1508377146))
{return replgoog.dom.createTextNode(cljsrepl.core.name.call(null,this$));
} else
{return null;
}
}
});
var G__10590__2 = (function (this$,attrs_or_children){replclojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs_or_children,")");
var attrs = cljsrepl.core.first.call(null,attrs_or_children);if(cljsrepl.core.map_QMARK_.call(null,attrs))
{return replclojure.browser.dom._element.call(null,this$,attrs,cljsrepl.core.rest.call(null,attrs_or_children));
} else
{return replclojure.browser.dom._element.call(null,this$,null,attrs_or_children);
}
});
var G__10590__3 = (function (this$,attrs,children){replclojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs," ",children,")");
var str_attrs = (((cljsrepl.core.map_QMARK_.call(null,attrs)) && (cljsrepl.core.seq.call(null,attrs)))?cljsrepl.core.reduce.call(null,(function (o,p__10583){var vec__10584 = p__10583;var k = cljsrepl.core.nth.call(null,vec__10584,(0),null);var v = cljsrepl.core.nth.call(null,vec__10584,(1),null);var o__$1 = (((o == null))?(function (){var obj10586 = {};return obj10586;
})():o);replclojure.browser.dom.log.call(null,"o = ",o__$1);
replclojure.browser.dom.log.call(null,"k = ",k);
replclojure.browser.dom.log.call(null,"v = ",v);
if(((k instanceof cljsrepl.core.Keyword)) || (typeof k === 'string'))
{var G__10587 = o__$1;(G__10587[cljsrepl.core.name.call(null,k)] = v);
return G__10587;
} else
{return null;
}
}),(function (){var obj10589 = {};return obj10589;
})(),attrs):null);replclojure.browser.dom.log_obj.call(null,str_attrs);
if(cljsrepl.core.seq.call(null,children))
{return cljsrepl.core.apply.call(null,replgoog.dom.createDom,cljsrepl.core.name.call(null,this$),str_attrs,cljsrepl.core.map.call(null,replclojure.browser.dom._element,children));
} else
{return replgoog.dom.createDom(cljsrepl.core.name.call(null,this$),str_attrs);
}
});
G__10590 = function(this$,attrs,children){
switch(arguments.length){
case 1:
return G__10590__1.call(this,this$);
case 2:
return G__10590__2.call(this,this$,attrs);
case 3:
return G__10590__3.call(this,this$,attrs,children);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10590;
})()
);
/**
* @param {...*} var_args
*/
replclojure.browser.dom.element = (function() {
var element = null;
var element__1 = (function (tag_or_text){replclojure.browser.dom.log.call(null,"(element ",tag_or_text,")");
return replclojure.browser.dom._element.call(null,tag_or_text);
});
var element__2 = (function() { 
var G__10591__delegate = function (tag,children){replclojure.browser.dom.log.call(null,"(element ",tag," ",children,")");
var attrs = cljsrepl.core.first.call(null,children);if(cljsrepl.core.map_QMARK_.call(null,attrs))
{return replclojure.browser.dom._element.call(null,tag,attrs,cljsrepl.core.rest.call(null,children));
} else
{return replclojure.browser.dom._element.call(null,tag,null,children);
}
};
var G__10591 = function (tag,var_args){
var children = null;if (arguments.length > 1) {
  children = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__10591__delegate.call(this,tag,children);};
G__10591.cljsrepl$lang$maxFixedArity = 1;
G__10591.cljsrepl$lang$applyTo = (function (arglist__10592){
var tag = cljsrepl.core.first(arglist__10592);
var children = cljsrepl.core.rest(arglist__10592);
return G__10591__delegate(tag,children);
});
G__10591.cljsrepl$core$IFn$_invoke$arity$variadic = G__10591__delegate;
return G__10591;
})()
;
element = function(tag,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return element__1.call(this,tag);
default:
return element__2.cljsrepl$core$IFn$_invoke$arity$variadic(tag, cljsrepl.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
element.cljsrepl$lang$maxFixedArity = 1;
element.cljsrepl$lang$applyTo = element__2.cljsrepl$lang$applyTo;
element.cljsrepl$core$IFn$_invoke$arity$1 = element__1;
element.cljsrepl$core$IFn$_invoke$arity$variadic = element__2.cljsrepl$core$IFn$_invoke$arity$variadic;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
replclojure.browser.dom.remove_children = (function remove_children(id){var parent = replgoog.dom.getElement(cljsrepl.core.name.call(null,id));return replgoog.dom.removeChildren(parent);
});
replclojure.browser.dom.get_element = (function get_element(id){return replgoog.dom.getElement(cljsrepl.core.name.call(null,id));
});
replclojure.browser.dom.html__GT_dom = (function html__GT_dom(s){return replgoog.dom.htmlToDocumentFragment(s);
});
replclojure.browser.dom.insert_at = (function insert_at(parent,child,index){return replgoog.dom.insertChildAt(parent,child,index);
});
/**
* Coerce the argument to a dom element if possible.
*/
replclojure.browser.dom.ensure_element = (function ensure_element(e){if((e instanceof cljsrepl.core.Keyword))
{return replclojure.browser.dom.get_element.call(null,e);
} else
{if(typeof e === 'string')
{return replclojure.browser.dom.html__GT_dom.call(null,e);
} else
{if(new cljsrepl.core.Keyword(null,"else","else",-1508377146))
{return e;
} else
{return null;
}
}
}
});
/**
* Replace old-node with new-node. old-node can be an element or a
* keyword which is the id of the node to replace.  new-node can be an
* element or an html string.
*/
replclojure.browser.dom.replace_node = (function replace_node(old_node,new_node){var old_node__$1 = replclojure.browser.dom.ensure_element.call(null,old_node);var new_node__$1 = replclojure.browser.dom.ensure_element.call(null,new_node);replgoog.dom.replaceNode(new_node__$1,old_node__$1);
return new_node__$1;
});
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
replclojure.browser.dom.set_text = (function set_text(e,s){return replgoog.dom.setTextContent(replclojure.browser.dom.ensure_element.call(null,e),s);
});
/**
* Get the value of an element.
*/
replclojure.browser.dom.get_value = (function get_value(e){return replclojure.browser.dom.ensure_element.call(null,e).value;
});
/**
* Set properties on an element
*/
replclojure.browser.dom.set_properties = (function set_properties(e,m){return replgoog.dom.setProperties(replclojure.browser.dom.ensure_element.call(null,e),cljsrepl.core.apply.call(null,replgoog.object.create,cljsrepl.core.interleave.call(null,cljsrepl.core.keys.call(null,m),cljsrepl.core.vals.call(null,m))));
});
/**
* Set the value property for an element.
*/
replclojure.browser.dom.set_value = (function set_value(e,v){return replclojure.browser.dom.set_properties.call(null,e,new cljsrepl.core.PersistentArrayMap(null, 1, ["value",v], null));
});
replclojure.browser.dom.click_element = (function click_element(e){return replclojure.browser.dom.ensure_element.call(null,e).click(cljsrepl.core.List.EMPTY);
});

//# sourceMappingURL=dom.js.map
