// Compiled by ClojureScript 1.7.35 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__11460){
var vec__11461 = p__11460;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11461,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11461,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__11463 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11463,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11463,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11463,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11463,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11463,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4425__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__11466 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11466,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11466,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11466,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11466,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11466,(4),null);
var vec__11467 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4498__auto__ = source;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4498__auto__ = line;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4498__auto__ = col;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4498__auto__ = name;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 * update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__11470 = segmap;
var map__11470__$1 = ((((!((map__11470 == null)))?((((map__11470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11470):map__11470);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11470,map__11470__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11470,map__11470__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11470,map__11470__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__11470,map__11470__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11470,map__11470__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__11470,map__11470__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args11472 = [];
var len__5537__auto___11476 = arguments.length;
var i__5538__auto___11477 = (0);
while(true){
if((i__5538__auto___11477 < len__5537__auto___11476)){
args11472.push((arguments[i__5538__auto___11477]));

var G__11478 = (i__5538__auto___11477 + (1));
i__5538__auto___11477 = G__11478;
continue;
} else {
}
break;
}

var G__11474 = args11472.length;
switch (G__11474) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11472.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__11475 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__11480 = cljs.core.next(segs__$1);
var G__11481 = nrelseg;
var G__11482 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__11480;
relseg__$1 = G__11481;
result__$1 = G__11482;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11475,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11475,(1),null);
var G__11483 = (gline + (1));
var G__11484 = cljs.core.next(lines__$1);
var G__11485 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__11486 = result__$1;
gline = G__11483;
lines__$1 = G__11484;
relseg = G__11485;
result = G__11486;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 * segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__11490 = segmap;
var map__11490__$1 = ((((!((map__11490 == null)))?((((map__11490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11490):map__11490);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11490__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11490__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11490__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11490__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11490__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11490,map__11490__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11490,map__11490__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11487_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__11487_SHARP_,d__$1);
});})(map__11490,map__11490__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11490,map__11490__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args11492 = [];
var len__5537__auto___11496 = arguments.length;
var i__5538__auto___11497 = (0);
while(true){
if((i__5538__auto___11497 < len__5537__auto___11496)){
args11492.push((arguments[i__5538__auto___11497]));

var G__11498 = (i__5538__auto___11497 + (1));
i__5538__auto___11497 = G__11498;
continue;
} else {
}
break;
}

var G__11494 = args11492.length;
switch (G__11494) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11492.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__11495 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__11500 = cljs.core.next(segs__$1);
var G__11501 = nrelseg;
var G__11502 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__11500;
relseg__$1 = G__11501;
result__$1 = G__11502;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11495,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11495,(1),null);
var G__11503 = (gline + (1));
var G__11504 = cljs.core.next(lines__$1);
var G__11505 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__11506 = result__$1;
gline = G__11503;
lines__$1 = G__11504;
relseg = G__11505;
result = G__11506;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__11514 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11514) : cljs.core.atom.call(null,G__11514));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__11515){
var vec__11516 = p__11515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__11517){
var vec__11518 = p__11517;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(4),null);
var seg = vec__11518;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__11518,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11519){
var vec__11520 = p__11519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11520,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11520,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11520,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11520,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11520,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4498__auto__ = name;
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11518,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__11579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11579) : cljs.core.atom.call(null,G__11579));
})();
var names__GT_idx = (function (){var G__11580 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11580) : cljs.core.atom.call(null,G__11580));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4498__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4498__auto__)){
return or__4498__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__11581 = cljs.core.seq(infos);
var chunk__11582 = null;
var count__11583 = (0);
var i__11584 = (0);
while(true){
if((i__11584 < count__11583)){
var info = chunk__11582.cljs$core$IIndexed$_nth$arity$2(null,i__11584);
var segv_11634 = info__GT_segv(info,source_idx,line,col);
var gline_11635 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_11636 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_11635 > (lc_11636 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11581,chunk__11582,count__11583,i__11584,segv_11634,gline_11635,lc_11636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_11635 - (lc_11636 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11634], null));
});})(seq__11581,chunk__11582,count__11583,i__11584,segv_11634,gline_11635,lc_11636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11581,chunk__11582,count__11583,i__11584,segv_11634,gline_11635,lc_11636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11635], null),cljs.core.conj,segv_11634);
});})(seq__11581,chunk__11582,count__11583,i__11584,segv_11634,gline_11635,lc_11636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11637 = seq__11581;
var G__11638 = chunk__11582;
var G__11639 = count__11583;
var G__11640 = (i__11584 + (1));
seq__11581 = G__11637;
chunk__11582 = G__11638;
count__11583 = G__11639;
i__11584 = G__11640;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11581);
if(temp__4425__auto__){
var seq__11581__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11581__$1)){
var c__5282__auto__ = cljs.core.chunk_first(seq__11581__$1);
var G__11641 = cljs.core.chunk_rest(seq__11581__$1);
var G__11642 = c__5282__auto__;
var G__11643 = cljs.core.count(c__5282__auto__);
var G__11644 = (0);
seq__11581 = G__11641;
chunk__11582 = G__11642;
count__11583 = G__11643;
i__11584 = G__11644;
continue;
} else {
var info = cljs.core.first(seq__11581__$1);
var segv_11645 = info__GT_segv(info,source_idx,line,col);
var gline_11646 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_11647 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_11646 > (lc_11647 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11581,chunk__11582,count__11583,i__11584,segv_11645,gline_11646,lc_11647,info,seq__11581__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_11646 - (lc_11647 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11645], null));
});})(seq__11581,chunk__11582,count__11583,i__11584,segv_11645,gline_11646,lc_11647,info,seq__11581__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11581,chunk__11582,count__11583,i__11584,segv_11645,gline_11646,lc_11647,info,seq__11581__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11646], null),cljs.core.conj,segv_11645);
});})(seq__11581,chunk__11582,count__11583,i__11584,segv_11645,gline_11646,lc_11647,info,seq__11581__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11648 = cljs.core.next(seq__11581__$1);
var G__11649 = null;
var G__11650 = (0);
var G__11651 = (0);
seq__11581 = G__11648;
chunk__11582 = G__11649;
count__11583 = G__11650;
i__11584 = G__11651;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__11585_11652 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11586_11653 = null;
var count__11587_11654 = (0);
var i__11588_11655 = (0);
while(true){
if((i__11588_11655 < count__11587_11654)){
var vec__11589_11656 = chunk__11586_11653.cljs$core$IIndexed$_nth$arity$2(null,i__11588_11655);
var source_idx_11657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11589_11656,(0),null);
var vec__11590_11658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11589_11656,(1),null);
var __11659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11590_11658,(0),null);
var lines_11660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11590_11658,(1),null);
var seq__11591_11661 = cljs.core.seq(lines_11660__$1);
var chunk__11592_11662 = null;
var count__11593_11663 = (0);
var i__11594_11664 = (0);
while(true){
if((i__11594_11664 < count__11593_11663)){
var vec__11595_11665 = chunk__11592_11662.cljs$core$IIndexed$_nth$arity$2(null,i__11594_11664);
var line_11666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11595_11665,(0),null);
var cols_11667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11595_11665,(1),null);
var seq__11596_11668 = cljs.core.seq(cols_11667);
var chunk__11597_11669 = null;
var count__11598_11670 = (0);
var i__11599_11671 = (0);
while(true){
if((i__11599_11671 < count__11598_11670)){
var vec__11600_11672 = chunk__11597_11669.cljs$core$IIndexed$_nth$arity$2(null,i__11599_11671);
var col_11673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11600_11672,(0),null);
var infos_11674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11600_11672,(1),null);
encode_cols(infos_11674,source_idx_11657,line_11666,col_11673);

var G__11675 = seq__11596_11668;
var G__11676 = chunk__11597_11669;
var G__11677 = count__11598_11670;
var G__11678 = (i__11599_11671 + (1));
seq__11596_11668 = G__11675;
chunk__11597_11669 = G__11676;
count__11598_11670 = G__11677;
i__11599_11671 = G__11678;
continue;
} else {
var temp__4425__auto___11679 = cljs.core.seq(seq__11596_11668);
if(temp__4425__auto___11679){
var seq__11596_11680__$1 = temp__4425__auto___11679;
if(cljs.core.chunked_seq_QMARK_(seq__11596_11680__$1)){
var c__5282__auto___11681 = cljs.core.chunk_first(seq__11596_11680__$1);
var G__11682 = cljs.core.chunk_rest(seq__11596_11680__$1);
var G__11683 = c__5282__auto___11681;
var G__11684 = cljs.core.count(c__5282__auto___11681);
var G__11685 = (0);
seq__11596_11668 = G__11682;
chunk__11597_11669 = G__11683;
count__11598_11670 = G__11684;
i__11599_11671 = G__11685;
continue;
} else {
var vec__11601_11686 = cljs.core.first(seq__11596_11680__$1);
var col_11687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11601_11686,(0),null);
var infos_11688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11601_11686,(1),null);
encode_cols(infos_11688,source_idx_11657,line_11666,col_11687);

var G__11689 = cljs.core.next(seq__11596_11680__$1);
var G__11690 = null;
var G__11691 = (0);
var G__11692 = (0);
seq__11596_11668 = G__11689;
chunk__11597_11669 = G__11690;
count__11598_11670 = G__11691;
i__11599_11671 = G__11692;
continue;
}
} else {
}
}
break;
}

var G__11693 = seq__11591_11661;
var G__11694 = chunk__11592_11662;
var G__11695 = count__11593_11663;
var G__11696 = (i__11594_11664 + (1));
seq__11591_11661 = G__11693;
chunk__11592_11662 = G__11694;
count__11593_11663 = G__11695;
i__11594_11664 = G__11696;
continue;
} else {
var temp__4425__auto___11697 = cljs.core.seq(seq__11591_11661);
if(temp__4425__auto___11697){
var seq__11591_11698__$1 = temp__4425__auto___11697;
if(cljs.core.chunked_seq_QMARK_(seq__11591_11698__$1)){
var c__5282__auto___11699 = cljs.core.chunk_first(seq__11591_11698__$1);
var G__11700 = cljs.core.chunk_rest(seq__11591_11698__$1);
var G__11701 = c__5282__auto___11699;
var G__11702 = cljs.core.count(c__5282__auto___11699);
var G__11703 = (0);
seq__11591_11661 = G__11700;
chunk__11592_11662 = G__11701;
count__11593_11663 = G__11702;
i__11594_11664 = G__11703;
continue;
} else {
var vec__11602_11704 = cljs.core.first(seq__11591_11698__$1);
var line_11705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11602_11704,(0),null);
var cols_11706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11602_11704,(1),null);
var seq__11603_11707 = cljs.core.seq(cols_11706);
var chunk__11604_11708 = null;
var count__11605_11709 = (0);
var i__11606_11710 = (0);
while(true){
if((i__11606_11710 < count__11605_11709)){
var vec__11607_11711 = chunk__11604_11708.cljs$core$IIndexed$_nth$arity$2(null,i__11606_11710);
var col_11712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11607_11711,(0),null);
var infos_11713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11607_11711,(1),null);
encode_cols(infos_11713,source_idx_11657,line_11705,col_11712);

var G__11714 = seq__11603_11707;
var G__11715 = chunk__11604_11708;
var G__11716 = count__11605_11709;
var G__11717 = (i__11606_11710 + (1));
seq__11603_11707 = G__11714;
chunk__11604_11708 = G__11715;
count__11605_11709 = G__11716;
i__11606_11710 = G__11717;
continue;
} else {
var temp__4425__auto___11718__$1 = cljs.core.seq(seq__11603_11707);
if(temp__4425__auto___11718__$1){
var seq__11603_11719__$1 = temp__4425__auto___11718__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11603_11719__$1)){
var c__5282__auto___11720 = cljs.core.chunk_first(seq__11603_11719__$1);
var G__11721 = cljs.core.chunk_rest(seq__11603_11719__$1);
var G__11722 = c__5282__auto___11720;
var G__11723 = cljs.core.count(c__5282__auto___11720);
var G__11724 = (0);
seq__11603_11707 = G__11721;
chunk__11604_11708 = G__11722;
count__11605_11709 = G__11723;
i__11606_11710 = G__11724;
continue;
} else {
var vec__11608_11725 = cljs.core.first(seq__11603_11719__$1);
var col_11726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11608_11725,(0),null);
var infos_11727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11608_11725,(1),null);
encode_cols(infos_11727,source_idx_11657,line_11705,col_11726);

var G__11728 = cljs.core.next(seq__11603_11719__$1);
var G__11729 = null;
var G__11730 = (0);
var G__11731 = (0);
seq__11603_11707 = G__11728;
chunk__11604_11708 = G__11729;
count__11605_11709 = G__11730;
i__11606_11710 = G__11731;
continue;
}
} else {
}
}
break;
}

var G__11732 = cljs.core.next(seq__11591_11698__$1);
var G__11733 = null;
var G__11734 = (0);
var G__11735 = (0);
seq__11591_11661 = G__11732;
chunk__11592_11662 = G__11733;
count__11593_11663 = G__11734;
i__11594_11664 = G__11735;
continue;
}
} else {
}
}
break;
}

var G__11736 = seq__11585_11652;
var G__11737 = chunk__11586_11653;
var G__11738 = count__11587_11654;
var G__11739 = (i__11588_11655 + (1));
seq__11585_11652 = G__11736;
chunk__11586_11653 = G__11737;
count__11587_11654 = G__11738;
i__11588_11655 = G__11739;
continue;
} else {
var temp__4425__auto___11740 = cljs.core.seq(seq__11585_11652);
if(temp__4425__auto___11740){
var seq__11585_11741__$1 = temp__4425__auto___11740;
if(cljs.core.chunked_seq_QMARK_(seq__11585_11741__$1)){
var c__5282__auto___11742 = cljs.core.chunk_first(seq__11585_11741__$1);
var G__11743 = cljs.core.chunk_rest(seq__11585_11741__$1);
var G__11744 = c__5282__auto___11742;
var G__11745 = cljs.core.count(c__5282__auto___11742);
var G__11746 = (0);
seq__11585_11652 = G__11743;
chunk__11586_11653 = G__11744;
count__11587_11654 = G__11745;
i__11588_11655 = G__11746;
continue;
} else {
var vec__11609_11747 = cljs.core.first(seq__11585_11741__$1);
var source_idx_11748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11609_11747,(0),null);
var vec__11610_11749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11609_11747,(1),null);
var __11750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11610_11749,(0),null);
var lines_11751__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11610_11749,(1),null);
var seq__11611_11752 = cljs.core.seq(lines_11751__$1);
var chunk__11612_11753 = null;
var count__11613_11754 = (0);
var i__11614_11755 = (0);
while(true){
if((i__11614_11755 < count__11613_11754)){
var vec__11615_11756 = chunk__11612_11753.cljs$core$IIndexed$_nth$arity$2(null,i__11614_11755);
var line_11757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11615_11756,(0),null);
var cols_11758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11615_11756,(1),null);
var seq__11616_11759 = cljs.core.seq(cols_11758);
var chunk__11617_11760 = null;
var count__11618_11761 = (0);
var i__11619_11762 = (0);
while(true){
if((i__11619_11762 < count__11618_11761)){
var vec__11620_11763 = chunk__11617_11760.cljs$core$IIndexed$_nth$arity$2(null,i__11619_11762);
var col_11764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11620_11763,(0),null);
var infos_11765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11620_11763,(1),null);
encode_cols(infos_11765,source_idx_11748,line_11757,col_11764);

var G__11766 = seq__11616_11759;
var G__11767 = chunk__11617_11760;
var G__11768 = count__11618_11761;
var G__11769 = (i__11619_11762 + (1));
seq__11616_11759 = G__11766;
chunk__11617_11760 = G__11767;
count__11618_11761 = G__11768;
i__11619_11762 = G__11769;
continue;
} else {
var temp__4425__auto___11770__$1 = cljs.core.seq(seq__11616_11759);
if(temp__4425__auto___11770__$1){
var seq__11616_11771__$1 = temp__4425__auto___11770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11616_11771__$1)){
var c__5282__auto___11772 = cljs.core.chunk_first(seq__11616_11771__$1);
var G__11773 = cljs.core.chunk_rest(seq__11616_11771__$1);
var G__11774 = c__5282__auto___11772;
var G__11775 = cljs.core.count(c__5282__auto___11772);
var G__11776 = (0);
seq__11616_11759 = G__11773;
chunk__11617_11760 = G__11774;
count__11618_11761 = G__11775;
i__11619_11762 = G__11776;
continue;
} else {
var vec__11621_11777 = cljs.core.first(seq__11616_11771__$1);
var col_11778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11621_11777,(0),null);
var infos_11779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11621_11777,(1),null);
encode_cols(infos_11779,source_idx_11748,line_11757,col_11778);

var G__11780 = cljs.core.next(seq__11616_11771__$1);
var G__11781 = null;
var G__11782 = (0);
var G__11783 = (0);
seq__11616_11759 = G__11780;
chunk__11617_11760 = G__11781;
count__11618_11761 = G__11782;
i__11619_11762 = G__11783;
continue;
}
} else {
}
}
break;
}

var G__11784 = seq__11611_11752;
var G__11785 = chunk__11612_11753;
var G__11786 = count__11613_11754;
var G__11787 = (i__11614_11755 + (1));
seq__11611_11752 = G__11784;
chunk__11612_11753 = G__11785;
count__11613_11754 = G__11786;
i__11614_11755 = G__11787;
continue;
} else {
var temp__4425__auto___11788__$1 = cljs.core.seq(seq__11611_11752);
if(temp__4425__auto___11788__$1){
var seq__11611_11789__$1 = temp__4425__auto___11788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11611_11789__$1)){
var c__5282__auto___11790 = cljs.core.chunk_first(seq__11611_11789__$1);
var G__11791 = cljs.core.chunk_rest(seq__11611_11789__$1);
var G__11792 = c__5282__auto___11790;
var G__11793 = cljs.core.count(c__5282__auto___11790);
var G__11794 = (0);
seq__11611_11752 = G__11791;
chunk__11612_11753 = G__11792;
count__11613_11754 = G__11793;
i__11614_11755 = G__11794;
continue;
} else {
var vec__11622_11795 = cljs.core.first(seq__11611_11789__$1);
var line_11796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11622_11795,(0),null);
var cols_11797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11622_11795,(1),null);
var seq__11623_11798 = cljs.core.seq(cols_11797);
var chunk__11624_11799 = null;
var count__11625_11800 = (0);
var i__11626_11801 = (0);
while(true){
if((i__11626_11801 < count__11625_11800)){
var vec__11627_11802 = chunk__11624_11799.cljs$core$IIndexed$_nth$arity$2(null,i__11626_11801);
var col_11803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11627_11802,(0),null);
var infos_11804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11627_11802,(1),null);
encode_cols(infos_11804,source_idx_11748,line_11796,col_11803);

var G__11805 = seq__11623_11798;
var G__11806 = chunk__11624_11799;
var G__11807 = count__11625_11800;
var G__11808 = (i__11626_11801 + (1));
seq__11623_11798 = G__11805;
chunk__11624_11799 = G__11806;
count__11625_11800 = G__11807;
i__11626_11801 = G__11808;
continue;
} else {
var temp__4425__auto___11809__$2 = cljs.core.seq(seq__11623_11798);
if(temp__4425__auto___11809__$2){
var seq__11623_11810__$1 = temp__4425__auto___11809__$2;
if(cljs.core.chunked_seq_QMARK_(seq__11623_11810__$1)){
var c__5282__auto___11811 = cljs.core.chunk_first(seq__11623_11810__$1);
var G__11812 = cljs.core.chunk_rest(seq__11623_11810__$1);
var G__11813 = c__5282__auto___11811;
var G__11814 = cljs.core.count(c__5282__auto___11811);
var G__11815 = (0);
seq__11623_11798 = G__11812;
chunk__11624_11799 = G__11813;
count__11625_11800 = G__11814;
i__11626_11801 = G__11815;
continue;
} else {
var vec__11628_11816 = cljs.core.first(seq__11623_11810__$1);
var col_11817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628_11816,(0),null);
var infos_11818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628_11816,(1),null);
encode_cols(infos_11818,source_idx_11748,line_11796,col_11817);

var G__11819 = cljs.core.next(seq__11623_11810__$1);
var G__11820 = null;
var G__11821 = (0);
var G__11822 = (0);
seq__11623_11798 = G__11819;
chunk__11624_11799 = G__11820;
count__11625_11800 = G__11821;
i__11626_11801 = G__11822;
continue;
}
} else {
}
}
break;
}

var G__11823 = cljs.core.next(seq__11611_11789__$1);
var G__11824 = null;
var G__11825 = (0);
var G__11826 = (0);
seq__11611_11752 = G__11823;
chunk__11612_11753 = G__11824;
count__11613_11754 = G__11825;
i__11614_11755 = G__11826;
continue;
}
} else {
}
}
break;
}

var G__11827 = cljs.core.next(seq__11585_11741__$1);
var G__11828 = null;
var G__11829 = (0);
var G__11830 = (0);
seq__11585_11652 = G__11827;
chunk__11586_11653 = G__11828;
count__11587_11654 = G__11829;
i__11588_11655 = G__11830;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11629 = {"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11521_SHARP_){
return [cljs.core.str(p1__11521_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11522_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11522_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11523_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__11523_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
var G__11629__$1 = (cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__11630 = G__11629;
var G__11631_11831 = G__11630;
var G__11632_11832 = "sourcesContent";
var G__11633_11833 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__11631_11831,G__11632_11832,G__11633_11833);

return G__11630;
})():G__11629);
return G__11629__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__11839 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11839,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11839,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__11840 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840,(1),null);
var G__11844 = cljs.core.next(col_map_seq);
var G__11845 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11840,col,infos,vec__11839,line,col_map){
return (function (v,p__11841){
var map__11842 = p__11841;
var map__11842__$1 = ((((!((map__11842 == null)))?((((map__11842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11842):map__11842);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11842__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11842__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11840,col,infos,vec__11839,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11844;
new_cols = G__11845;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__11846 = cljs.core.next(line_map_seq);
var G__11847 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__11846;
new_lines = G__11847;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__11899 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11899) : cljs.core.atom.call(null,G__11899));
})();
var seq__11900_11950 = cljs.core.seq(reverse_map);
var chunk__11901_11951 = null;
var count__11902_11952 = (0);
var i__11903_11953 = (0);
while(true){
if((i__11903_11953 < count__11902_11952)){
var vec__11904_11954 = chunk__11901_11951.cljs$core$IIndexed$_nth$arity$2(null,i__11903_11953);
var line_11955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11904_11954,(0),null);
var columns_11956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11904_11954,(1),null);
var seq__11905_11957 = cljs.core.seq(columns_11956);
var chunk__11906_11958 = null;
var count__11907_11959 = (0);
var i__11908_11960 = (0);
while(true){
if((i__11908_11960 < count__11907_11959)){
var vec__11909_11961 = chunk__11906_11958.cljs$core$IIndexed$_nth$arity$2(null,i__11908_11960);
var column_11962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11909_11961,(0),null);
var column_info_11963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11909_11961,(1),null);
var seq__11910_11964 = cljs.core.seq(column_info_11963);
var chunk__11911_11965 = null;
var count__11912_11966 = (0);
var i__11913_11967 = (0);
while(true){
if((i__11913_11967 < count__11912_11966)){
var map__11914_11968 = chunk__11911_11965.cljs$core$IIndexed$_nth$arity$2(null,i__11913_11967);
var map__11914_11969__$1 = ((((!((map__11914_11968 == null)))?((((map__11914_11968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11914_11968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11914_11968):map__11914_11968);
var gline_11970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11914_11969__$1,cljs.core.cst$kw$gline);
var gcol_11971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11914_11969__$1,cljs.core.cst$kw$gcol);
var name_11972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11914_11969__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11970], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11910_11964,chunk__11911_11965,count__11912_11966,i__11913_11967,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11914_11968,map__11914_11969__$1,gline_11970,gcol_11971,name_11972,vec__11909_11961,column_11962,column_info_11963,vec__11904_11954,line_11955,columns_11956,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_11962], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_11955,cljs.core.cst$kw$col,column_11962,cljs.core.cst$kw$name,name_11972], null));
});})(seq__11910_11964,chunk__11911_11965,count__11912_11966,i__11913_11967,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11914_11968,map__11914_11969__$1,gline_11970,gcol_11971,name_11972,vec__11909_11961,column_11962,column_info_11963,vec__11904_11954,line_11955,columns_11956,inverted))
,cljs.core.sorted_map()));

var G__11973 = seq__11910_11964;
var G__11974 = chunk__11911_11965;
var G__11975 = count__11912_11966;
var G__11976 = (i__11913_11967 + (1));
seq__11910_11964 = G__11973;
chunk__11911_11965 = G__11974;
count__11912_11966 = G__11975;
i__11913_11967 = G__11976;
continue;
} else {
var temp__4425__auto___11977 = cljs.core.seq(seq__11910_11964);
if(temp__4425__auto___11977){
var seq__11910_11978__$1 = temp__4425__auto___11977;
if(cljs.core.chunked_seq_QMARK_(seq__11910_11978__$1)){
var c__5282__auto___11979 = cljs.core.chunk_first(seq__11910_11978__$1);
var G__11980 = cljs.core.chunk_rest(seq__11910_11978__$1);
var G__11981 = c__5282__auto___11979;
var G__11982 = cljs.core.count(c__5282__auto___11979);
var G__11983 = (0);
seq__11910_11964 = G__11980;
chunk__11911_11965 = G__11981;
count__11912_11966 = G__11982;
i__11913_11967 = G__11983;
continue;
} else {
var map__11916_11984 = cljs.core.first(seq__11910_11978__$1);
var map__11916_11985__$1 = ((((!((map__11916_11984 == null)))?((((map__11916_11984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11916_11984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11916_11984):map__11916_11984);
var gline_11986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11916_11985__$1,cljs.core.cst$kw$gline);
var gcol_11987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11916_11985__$1,cljs.core.cst$kw$gcol);
var name_11988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11916_11985__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11986], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11910_11964,chunk__11911_11965,count__11912_11966,i__11913_11967,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11916_11984,map__11916_11985__$1,gline_11986,gcol_11987,name_11988,seq__11910_11978__$1,temp__4425__auto___11977,vec__11909_11961,column_11962,column_info_11963,vec__11904_11954,line_11955,columns_11956,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_11962], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_11955,cljs.core.cst$kw$col,column_11962,cljs.core.cst$kw$name,name_11988], null));
});})(seq__11910_11964,chunk__11911_11965,count__11912_11966,i__11913_11967,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11916_11984,map__11916_11985__$1,gline_11986,gcol_11987,name_11988,seq__11910_11978__$1,temp__4425__auto___11977,vec__11909_11961,column_11962,column_info_11963,vec__11904_11954,line_11955,columns_11956,inverted))
,cljs.core.sorted_map()));

var G__11989 = cljs.core.next(seq__11910_11978__$1);
var G__11990 = null;
var G__11991 = (0);
var G__11992 = (0);
seq__11910_11964 = G__11989;
chunk__11911_11965 = G__11990;
count__11912_11966 = G__11991;
i__11913_11967 = G__11992;
continue;
}
} else {
}
}
break;
}

var G__11993 = seq__11905_11957;
var G__11994 = chunk__11906_11958;
var G__11995 = count__11907_11959;
var G__11996 = (i__11908_11960 + (1));
seq__11905_11957 = G__11993;
chunk__11906_11958 = G__11994;
count__11907_11959 = G__11995;
i__11908_11960 = G__11996;
continue;
} else {
var temp__4425__auto___11997 = cljs.core.seq(seq__11905_11957);
if(temp__4425__auto___11997){
var seq__11905_11998__$1 = temp__4425__auto___11997;
if(cljs.core.chunked_seq_QMARK_(seq__11905_11998__$1)){
var c__5282__auto___11999 = cljs.core.chunk_first(seq__11905_11998__$1);
var G__12000 = cljs.core.chunk_rest(seq__11905_11998__$1);
var G__12001 = c__5282__auto___11999;
var G__12002 = cljs.core.count(c__5282__auto___11999);
var G__12003 = (0);
seq__11905_11957 = G__12000;
chunk__11906_11958 = G__12001;
count__11907_11959 = G__12002;
i__11908_11960 = G__12003;
continue;
} else {
var vec__11918_12004 = cljs.core.first(seq__11905_11998__$1);
var column_12005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11918_12004,(0),null);
var column_info_12006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11918_12004,(1),null);
var seq__11919_12007 = cljs.core.seq(column_info_12006);
var chunk__11920_12008 = null;
var count__11921_12009 = (0);
var i__11922_12010 = (0);
while(true){
if((i__11922_12010 < count__11921_12009)){
var map__11923_12011 = chunk__11920_12008.cljs$core$IIndexed$_nth$arity$2(null,i__11922_12010);
var map__11923_12012__$1 = ((((!((map__11923_12011 == null)))?((((map__11923_12011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11923_12011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11923_12011):map__11923_12011);
var gline_12013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923_12012__$1,cljs.core.cst$kw$gline);
var gcol_12014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923_12012__$1,cljs.core.cst$kw$gcol);
var name_12015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923_12012__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12013], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11919_12007,chunk__11920_12008,count__11921_12009,i__11922_12010,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11923_12011,map__11923_12012__$1,gline_12013,gcol_12014,name_12015,vec__11918_12004,column_12005,column_info_12006,seq__11905_11998__$1,temp__4425__auto___11997,vec__11904_11954,line_11955,columns_11956,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12005], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_11955,cljs.core.cst$kw$col,column_12005,cljs.core.cst$kw$name,name_12015], null));
});})(seq__11919_12007,chunk__11920_12008,count__11921_12009,i__11922_12010,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11923_12011,map__11923_12012__$1,gline_12013,gcol_12014,name_12015,vec__11918_12004,column_12005,column_info_12006,seq__11905_11998__$1,temp__4425__auto___11997,vec__11904_11954,line_11955,columns_11956,inverted))
,cljs.core.sorted_map()));

var G__12016 = seq__11919_12007;
var G__12017 = chunk__11920_12008;
var G__12018 = count__11921_12009;
var G__12019 = (i__11922_12010 + (1));
seq__11919_12007 = G__12016;
chunk__11920_12008 = G__12017;
count__11921_12009 = G__12018;
i__11922_12010 = G__12019;
continue;
} else {
var temp__4425__auto___12020__$1 = cljs.core.seq(seq__11919_12007);
if(temp__4425__auto___12020__$1){
var seq__11919_12021__$1 = temp__4425__auto___12020__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11919_12021__$1)){
var c__5282__auto___12022 = cljs.core.chunk_first(seq__11919_12021__$1);
var G__12023 = cljs.core.chunk_rest(seq__11919_12021__$1);
var G__12024 = c__5282__auto___12022;
var G__12025 = cljs.core.count(c__5282__auto___12022);
var G__12026 = (0);
seq__11919_12007 = G__12023;
chunk__11920_12008 = G__12024;
count__11921_12009 = G__12025;
i__11922_12010 = G__12026;
continue;
} else {
var map__11925_12027 = cljs.core.first(seq__11919_12021__$1);
var map__11925_12028__$1 = ((((!((map__11925_12027 == null)))?((((map__11925_12027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11925_12027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11925_12027):map__11925_12027);
var gline_12029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11925_12028__$1,cljs.core.cst$kw$gline);
var gcol_12030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11925_12028__$1,cljs.core.cst$kw$gcol);
var name_12031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11925_12028__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12029], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11919_12007,chunk__11920_12008,count__11921_12009,i__11922_12010,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11925_12027,map__11925_12028__$1,gline_12029,gcol_12030,name_12031,seq__11919_12021__$1,temp__4425__auto___12020__$1,vec__11918_12004,column_12005,column_info_12006,seq__11905_11998__$1,temp__4425__auto___11997,vec__11904_11954,line_11955,columns_11956,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12005], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_11955,cljs.core.cst$kw$col,column_12005,cljs.core.cst$kw$name,name_12031], null));
});})(seq__11919_12007,chunk__11920_12008,count__11921_12009,i__11922_12010,seq__11905_11957,chunk__11906_11958,count__11907_11959,i__11908_11960,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11925_12027,map__11925_12028__$1,gline_12029,gcol_12030,name_12031,seq__11919_12021__$1,temp__4425__auto___12020__$1,vec__11918_12004,column_12005,column_info_12006,seq__11905_11998__$1,temp__4425__auto___11997,vec__11904_11954,line_11955,columns_11956,inverted))
,cljs.core.sorted_map()));

var G__12032 = cljs.core.next(seq__11919_12021__$1);
var G__12033 = null;
var G__12034 = (0);
var G__12035 = (0);
seq__11919_12007 = G__12032;
chunk__11920_12008 = G__12033;
count__11921_12009 = G__12034;
i__11922_12010 = G__12035;
continue;
}
} else {
}
}
break;
}

var G__12036 = cljs.core.next(seq__11905_11998__$1);
var G__12037 = null;
var G__12038 = (0);
var G__12039 = (0);
seq__11905_11957 = G__12036;
chunk__11906_11958 = G__12037;
count__11907_11959 = G__12038;
i__11908_11960 = G__12039;
continue;
}
} else {
}
}
break;
}

var G__12040 = seq__11900_11950;
var G__12041 = chunk__11901_11951;
var G__12042 = count__11902_11952;
var G__12043 = (i__11903_11953 + (1));
seq__11900_11950 = G__12040;
chunk__11901_11951 = G__12041;
count__11902_11952 = G__12042;
i__11903_11953 = G__12043;
continue;
} else {
var temp__4425__auto___12044 = cljs.core.seq(seq__11900_11950);
if(temp__4425__auto___12044){
var seq__11900_12045__$1 = temp__4425__auto___12044;
if(cljs.core.chunked_seq_QMARK_(seq__11900_12045__$1)){
var c__5282__auto___12046 = cljs.core.chunk_first(seq__11900_12045__$1);
var G__12047 = cljs.core.chunk_rest(seq__11900_12045__$1);
var G__12048 = c__5282__auto___12046;
var G__12049 = cljs.core.count(c__5282__auto___12046);
var G__12050 = (0);
seq__11900_11950 = G__12047;
chunk__11901_11951 = G__12048;
count__11902_11952 = G__12049;
i__11903_11953 = G__12050;
continue;
} else {
var vec__11927_12051 = cljs.core.first(seq__11900_12045__$1);
var line_12052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11927_12051,(0),null);
var columns_12053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11927_12051,(1),null);
var seq__11928_12054 = cljs.core.seq(columns_12053);
var chunk__11929_12055 = null;
var count__11930_12056 = (0);
var i__11931_12057 = (0);
while(true){
if((i__11931_12057 < count__11930_12056)){
var vec__11932_12058 = chunk__11929_12055.cljs$core$IIndexed$_nth$arity$2(null,i__11931_12057);
var column_12059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932_12058,(0),null);
var column_info_12060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932_12058,(1),null);
var seq__11933_12061 = cljs.core.seq(column_info_12060);
var chunk__11934_12062 = null;
var count__11935_12063 = (0);
var i__11936_12064 = (0);
while(true){
if((i__11936_12064 < count__11935_12063)){
var map__11937_12065 = chunk__11934_12062.cljs$core$IIndexed$_nth$arity$2(null,i__11936_12064);
var map__11937_12066__$1 = ((((!((map__11937_12065 == null)))?((((map__11937_12065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11937_12065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11937_12065):map__11937_12065);
var gline_12067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11937_12066__$1,cljs.core.cst$kw$gline);
var gcol_12068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11937_12066__$1,cljs.core.cst$kw$gcol);
var name_12069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11937_12066__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12067], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11933_12061,chunk__11934_12062,count__11935_12063,i__11936_12064,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11937_12065,map__11937_12066__$1,gline_12067,gcol_12068,name_12069,vec__11932_12058,column_12059,column_info_12060,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12059], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12052,cljs.core.cst$kw$col,column_12059,cljs.core.cst$kw$name,name_12069], null));
});})(seq__11933_12061,chunk__11934_12062,count__11935_12063,i__11936_12064,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11937_12065,map__11937_12066__$1,gline_12067,gcol_12068,name_12069,vec__11932_12058,column_12059,column_info_12060,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted))
,cljs.core.sorted_map()));

var G__12070 = seq__11933_12061;
var G__12071 = chunk__11934_12062;
var G__12072 = count__11935_12063;
var G__12073 = (i__11936_12064 + (1));
seq__11933_12061 = G__12070;
chunk__11934_12062 = G__12071;
count__11935_12063 = G__12072;
i__11936_12064 = G__12073;
continue;
} else {
var temp__4425__auto___12074__$1 = cljs.core.seq(seq__11933_12061);
if(temp__4425__auto___12074__$1){
var seq__11933_12075__$1 = temp__4425__auto___12074__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11933_12075__$1)){
var c__5282__auto___12076 = cljs.core.chunk_first(seq__11933_12075__$1);
var G__12077 = cljs.core.chunk_rest(seq__11933_12075__$1);
var G__12078 = c__5282__auto___12076;
var G__12079 = cljs.core.count(c__5282__auto___12076);
var G__12080 = (0);
seq__11933_12061 = G__12077;
chunk__11934_12062 = G__12078;
count__11935_12063 = G__12079;
i__11936_12064 = G__12080;
continue;
} else {
var map__11939_12081 = cljs.core.first(seq__11933_12075__$1);
var map__11939_12082__$1 = ((((!((map__11939_12081 == null)))?((((map__11939_12081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11939_12081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11939_12081):map__11939_12081);
var gline_12083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11939_12082__$1,cljs.core.cst$kw$gline);
var gcol_12084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11939_12082__$1,cljs.core.cst$kw$gcol);
var name_12085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11939_12082__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12083], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11933_12061,chunk__11934_12062,count__11935_12063,i__11936_12064,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11939_12081,map__11939_12082__$1,gline_12083,gcol_12084,name_12085,seq__11933_12075__$1,temp__4425__auto___12074__$1,vec__11932_12058,column_12059,column_info_12060,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12059], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12052,cljs.core.cst$kw$col,column_12059,cljs.core.cst$kw$name,name_12085], null));
});})(seq__11933_12061,chunk__11934_12062,count__11935_12063,i__11936_12064,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11939_12081,map__11939_12082__$1,gline_12083,gcol_12084,name_12085,seq__11933_12075__$1,temp__4425__auto___12074__$1,vec__11932_12058,column_12059,column_info_12060,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted))
,cljs.core.sorted_map()));

var G__12086 = cljs.core.next(seq__11933_12075__$1);
var G__12087 = null;
var G__12088 = (0);
var G__12089 = (0);
seq__11933_12061 = G__12086;
chunk__11934_12062 = G__12087;
count__11935_12063 = G__12088;
i__11936_12064 = G__12089;
continue;
}
} else {
}
}
break;
}

var G__12090 = seq__11928_12054;
var G__12091 = chunk__11929_12055;
var G__12092 = count__11930_12056;
var G__12093 = (i__11931_12057 + (1));
seq__11928_12054 = G__12090;
chunk__11929_12055 = G__12091;
count__11930_12056 = G__12092;
i__11931_12057 = G__12093;
continue;
} else {
var temp__4425__auto___12094__$1 = cljs.core.seq(seq__11928_12054);
if(temp__4425__auto___12094__$1){
var seq__11928_12095__$1 = temp__4425__auto___12094__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11928_12095__$1)){
var c__5282__auto___12096 = cljs.core.chunk_first(seq__11928_12095__$1);
var G__12097 = cljs.core.chunk_rest(seq__11928_12095__$1);
var G__12098 = c__5282__auto___12096;
var G__12099 = cljs.core.count(c__5282__auto___12096);
var G__12100 = (0);
seq__11928_12054 = G__12097;
chunk__11929_12055 = G__12098;
count__11930_12056 = G__12099;
i__11931_12057 = G__12100;
continue;
} else {
var vec__11941_12101 = cljs.core.first(seq__11928_12095__$1);
var column_12102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941_12101,(0),null);
var column_info_12103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941_12101,(1),null);
var seq__11942_12104 = cljs.core.seq(column_info_12103);
var chunk__11943_12105 = null;
var count__11944_12106 = (0);
var i__11945_12107 = (0);
while(true){
if((i__11945_12107 < count__11944_12106)){
var map__11946_12108 = chunk__11943_12105.cljs$core$IIndexed$_nth$arity$2(null,i__11945_12107);
var map__11946_12109__$1 = ((((!((map__11946_12108 == null)))?((((map__11946_12108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11946_12108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11946_12108):map__11946_12108);
var gline_12110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11946_12109__$1,cljs.core.cst$kw$gline);
var gcol_12111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11946_12109__$1,cljs.core.cst$kw$gcol);
var name_12112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11946_12109__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12110], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11942_12104,chunk__11943_12105,count__11944_12106,i__11945_12107,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11946_12108,map__11946_12109__$1,gline_12110,gcol_12111,name_12112,vec__11941_12101,column_12102,column_info_12103,seq__11928_12095__$1,temp__4425__auto___12094__$1,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12102], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12052,cljs.core.cst$kw$col,column_12102,cljs.core.cst$kw$name,name_12112], null));
});})(seq__11942_12104,chunk__11943_12105,count__11944_12106,i__11945_12107,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11946_12108,map__11946_12109__$1,gline_12110,gcol_12111,name_12112,vec__11941_12101,column_12102,column_info_12103,seq__11928_12095__$1,temp__4425__auto___12094__$1,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted))
,cljs.core.sorted_map()));

var G__12113 = seq__11942_12104;
var G__12114 = chunk__11943_12105;
var G__12115 = count__11944_12106;
var G__12116 = (i__11945_12107 + (1));
seq__11942_12104 = G__12113;
chunk__11943_12105 = G__12114;
count__11944_12106 = G__12115;
i__11945_12107 = G__12116;
continue;
} else {
var temp__4425__auto___12117__$2 = cljs.core.seq(seq__11942_12104);
if(temp__4425__auto___12117__$2){
var seq__11942_12118__$1 = temp__4425__auto___12117__$2;
if(cljs.core.chunked_seq_QMARK_(seq__11942_12118__$1)){
var c__5282__auto___12119 = cljs.core.chunk_first(seq__11942_12118__$1);
var G__12120 = cljs.core.chunk_rest(seq__11942_12118__$1);
var G__12121 = c__5282__auto___12119;
var G__12122 = cljs.core.count(c__5282__auto___12119);
var G__12123 = (0);
seq__11942_12104 = G__12120;
chunk__11943_12105 = G__12121;
count__11944_12106 = G__12122;
i__11945_12107 = G__12123;
continue;
} else {
var map__11948_12124 = cljs.core.first(seq__11942_12118__$1);
var map__11948_12125__$1 = ((((!((map__11948_12124 == null)))?((((map__11948_12124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11948_12124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11948_12124):map__11948_12124);
var gline_12126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11948_12125__$1,cljs.core.cst$kw$gline);
var gcol_12127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11948_12125__$1,cljs.core.cst$kw$gcol);
var name_12128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11948_12125__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12126], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11942_12104,chunk__11943_12105,count__11944_12106,i__11945_12107,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11948_12124,map__11948_12125__$1,gline_12126,gcol_12127,name_12128,seq__11942_12118__$1,temp__4425__auto___12117__$2,vec__11941_12101,column_12102,column_info_12103,seq__11928_12095__$1,temp__4425__auto___12094__$1,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12102], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12052,cljs.core.cst$kw$col,column_12102,cljs.core.cst$kw$name,name_12128], null));
});})(seq__11942_12104,chunk__11943_12105,count__11944_12106,i__11945_12107,seq__11928_12054,chunk__11929_12055,count__11930_12056,i__11931_12057,seq__11900_11950,chunk__11901_11951,count__11902_11952,i__11903_11953,map__11948_12124,map__11948_12125__$1,gline_12126,gcol_12127,name_12128,seq__11942_12118__$1,temp__4425__auto___12117__$2,vec__11941_12101,column_12102,column_info_12103,seq__11928_12095__$1,temp__4425__auto___12094__$1,vec__11927_12051,line_12052,columns_12053,seq__11900_12045__$1,temp__4425__auto___12044,inverted))
,cljs.core.sorted_map()));

var G__12129 = cljs.core.next(seq__11942_12118__$1);
var G__12130 = null;
var G__12131 = (0);
var G__12132 = (0);
seq__11942_12104 = G__12129;
chunk__11943_12105 = G__12130;
count__11944_12106 = G__12131;
i__11945_12107 = G__12132;
continue;
}
} else {
}
}
break;
}

var G__12133 = cljs.core.next(seq__11928_12095__$1);
var G__12134 = null;
var G__12135 = (0);
var G__12136 = (0);
seq__11928_12054 = G__12133;
chunk__11929_12055 = G__12134;
count__11930_12056 = G__12135;
i__11931_12057 = G__12136;
continue;
}
} else {
}
}
break;
}

var G__12137 = cljs.core.next(seq__11900_12045__$1);
var G__12138 = null;
var G__12139 = (0);
var G__12140 = (0);
seq__11900_11950 = G__12137;
chunk__11901_11951 = G__12138;
count__11902_11952 = G__12139;
i__11903_11953 = G__12140;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});

//# sourceMappingURL=source_map.js.map