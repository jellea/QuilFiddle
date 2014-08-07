// Compiled by ClojureScript 0.0-2280
goog.provide('quil.core');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.sketch');
goog.require('quil.util');
goog.require('clojure.browser.dom');
goog.require('clojure.browser.dom');
goog.require('quil.sketch');
goog.require('quil.sketch');
goog.require('clojure.string');
quil.core._STAR_graphics_STAR_ = null;
/**
* Graphics currently used for drawing. By default it is sketch graphics,
* but if called inside with-graphics macro - graphics passed to the macro
* is returned. This method should be used if you need to call some methods
* that are not implemented by quil. Example:
* (.beginDraw (current-graphics)).
*/
quil.core.current_graphics = (function current_graphics(){var or__3544__auto__ = quil.core._STAR_graphics_STAR_;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return quil.sketch.current_applet.call(null);
}
});
quil.core.arc_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),"OPEN",new cljs.core.Keyword(null,"chord","chord",-696248342),"CHORD",new cljs.core.Keyword(null,"pie","pie",1530441672),"PIE"], null);
quil.core.shape_modes = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"points","points",-1486596883),"POINTS",new cljs.core.Keyword(null,"lines","lines",-700165781),"LINES",new cljs.core.Keyword(null,"triangles","triangles",-1525417058),"TRIANGLES",new cljs.core.Keyword(null,"triangle-fan","triangle-fan",1743150739),"TRIANGLE_FAN",new cljs.core.Keyword(null,"triangle-strip","triangle-strip",221845500),"TRIANGLE_STRIP",new cljs.core.Keyword(null,"quads","quads",1347497505),"QUADS",new cljs.core.Keyword(null,"quad-strip","quad-strip",-1297270686),"QUAD_STRIP"], null);
quil.core.blend_modes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"burn","burn",-458179293),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"darkest","darkest",68197253),new cljs.core.Keyword(null,"dodge","dodge",-1556666427),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"difference","difference",1916101396),new cljs.core.Keyword(null,"exclusion","exclusion",531897910),new cljs.core.Keyword(null,"hard-light","hard-light",-37591145),new cljs.core.Keyword(null,"multiply","multiply",-1036907048),new cljs.core.Keyword(null,"lightest","lightest",-2043115912),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"soft-light","soft-light",513207899),new cljs.core.Keyword(null,"subtract","subtract",2136988635)],["BURN","SCREEN","DARKEST","DODGE","REPLACE","OVERLAY","DIFFERENCE","EXCLUSION","HARD_LIGHT","MULTIPLY","LIGHTEST","BLEND","ADD","SOFT_LIGHT","SUBTRACT"]);
quil.core.color_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rgb","rgb",1432123467),"RGB",new cljs.core.Keyword(null,"hsb","hsb",-753472031),"HSB"], null);
quil.core.image_formats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rgb","rgb",1432123467),"RGB",new cljs.core.Keyword(null,"argb","argb",633844107),"ARGB",new cljs.core.Keyword(null,"alpha","alpha",-1574982441),"ALPHA"], null);
quil.core.ellipse_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),"CENTER",new cljs.core.Keyword(null,"radius","radius",-2073122258),"RADIUS",new cljs.core.Keyword(null,"corner","corner",1296717125),"CORNER",new cljs.core.Keyword(null,"corners","corners",-137817903),"CORNERS"], null);
quil.core.hint_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable-stroke-perspective","disable-stroke-perspective",479198433),new cljs.core.Keyword(null,"enable-retina-pixels","enable-retina-pixels",1018316034),new cljs.core.Keyword(null,"disable-depth-mask","disable-depth-mask",3298562),new cljs.core.Keyword(null,"enable-depth-test","enable-depth-test",1519326084),new cljs.core.Keyword(null,"enable-depth-sort","enable-depth-sort",-383089627),new cljs.core.Keyword(null,"disable-texture-mipmaps","disable-texture-mipmaps",1697917541),new cljs.core.Keyword(null,"disable-stroke-pure","disable-stroke-pure",735493926),new cljs.core.Keyword(null,"disable-depth-test","disable-depth-test",284606407),new cljs.core.Keyword(null,"enable-stroke-perspective","enable-stroke-perspective",-259923319),new cljs.core.Keyword(null,"enable-native-fonts","enable-native-fonts",-1989072693),new cljs.core.Keyword(null,"disable-optimized-stroke","disable-optimized-stroke",74038544),new cljs.core.Keyword(null,"enable-opengl-errors","enable-opengl-errors",89998962),new cljs.core.Keyword(null,"enable-stroke-pure","enable-stroke-pure",881345587),new cljs.core.Keyword(null,"enable-depth-mask","enable-depth-mask",872785875),new cljs.core.Keyword(null,"enable-optimized-stroke","enable-optimized-stroke",1537575253),new cljs.core.Keyword(null,"disable-opengl-errors","disable-opengl-errors",506822839),new cljs.core.Keyword(null,"disable-retina-pixels","disable-retina-pixels",-2049264713),new cljs.core.Keyword(null,"disable-depth-sort","disable-depth-sort",-1568352839),new cljs.core.Keyword(null,"enable-texture-mipmaps","enable-texture-mipmaps",1241892671),new cljs.core.Keyword(null,"disable-native-fonts","disable-native-fonts",-931436705)],["DISABLE_STROKE_PERSPECTIVE","ENABLE_RETINA_PIXELS","DISABLE_DEPTH_MASK","ENABLE_DEPTH_TEST","ENABLE_DEPTH_SORT","DISABLE_TEXTURE_MIPMAPS","DISABLE_STROKE_PURE","DISABLE_DEPTH_TEST","ENABLE_STROKE_PERSPECTIVE","ENABLE_NATIVE_FONTS","DISABLE_OPTIMIZED_STROKE","ENABLE_OPENGL_ERRORS","ENABLE_STROKE_PURE","ENABLE_DEPTH_MASK","ENABLE_OPTIMIZED_STROKE","DISABLE_OPENGL_ERRORS","DISABLE_RETINA_PIXELS","DISABLE_DEPTH_SORT","ENABLE_TEXTURE_MIPMAPS","DISABLE_NATIVE_FONTS"]);
quil.core.image_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"corner","corner",1296717125),"CORNER",new cljs.core.Keyword(null,"corners","corners",-137817903),"CORNERS",new cljs.core.Keyword(null,"center","center",-748944368),"CENTER"], null);
quil.core.rect_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"corner","corner",1296717125),"CORNER",new cljs.core.Keyword(null,"corners","corners",-137817903),"CORNERS",new cljs.core.Keyword(null,"center","center",-748944368),"CENTER",new cljs.core.Keyword(null,"radius","radius",-2073122258),"RADIUS"], null);
quil.core.p_shape_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"corner","corner",1296717125),"CORNER",new cljs.core.Keyword(null,"corners","corners",-137817903),"CORNERS",new cljs.core.Keyword(null,"center","center",-748944368),"CENTER"], null);
quil.core.stroke_cap_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"square","square",812434677),"SQUARE",new cljs.core.Keyword(null,"round","round",2009433328),"ROUND",new cljs.core.Keyword(null,"project","project",1124394579),"PROJECT",new cljs.core.Keyword(null,"model","model",331153215),"MODEL"], null);
quil.core.stroke_join_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"miter","miter",327727052),"MITER",new cljs.core.Keyword(null,"bevel","bevel",2090515654),"BEVEL",new cljs.core.Keyword(null,"round","round",2009433328),"ROUND"], null);
quil.core.horizontal_alignment_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"LEFT",new cljs.core.Keyword(null,"center","center",-748944368),"CENTER",new cljs.core.Keyword(null,"right","right",-452581833),"RIGHT"], null);
quil.core.vertical_alignment_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"TOP",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"BOTTOM",new cljs.core.Keyword(null,"center","center",-748944368),"CENTER",new cljs.core.Keyword(null,"baseline","baseline",1151033280),"BASELINE"], null);
quil.core.text_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model","model",331153215),"MODEL",new cljs.core.Keyword(null,"shape","shape",1190694006),"SHAPE"], null);
quil.core.texture_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"IMAGE",new cljs.core.Keyword(null,"normal","normal",-1519123858),"NORMAL"], null);
quil.core.texture_wrap_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clamp","clamp",1803814940),"CLAMP",new cljs.core.Keyword(null,"repeat","repeat",832692087),"REPEAT"], null);
quil.core.filter_modes = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"threshold","threshold",204221583),"THRESHOLD",new cljs.core.Keyword(null,"gray","gray",1013268388),"GRAY",new cljs.core.Keyword(null,"invert","invert",1553577503),"INVERT",new cljs.core.Keyword(null,"posterize","posterize",-148251901),"POSTERIZE",new cljs.core.Keyword(null,"blur","blur",-453500461),"BLUR",new cljs.core.Keyword(null,"opaque","opaque",-1243552654),"OPAQUE",new cljs.core.Keyword(null,"erode","erode",1539530618),"ERODE",new cljs.core.Keyword(null,"dilate","dilate",1504745153),"DILATE"], null);
quil.core.cursor_modes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arrow","arrow",1071351425),"ARROW",new cljs.core.Keyword(null,"cross","cross",194557789),"CROSS",new cljs.core.Keyword(null,"hand","hand",791601933),"HAND",new cljs.core.Keyword(null,"move","move",-2110884309),"MOVE",new cljs.core.Keyword(null,"text","text",-1790561697),"TEXT",new cljs.core.Keyword(null,"wait","wait",-260664777),"WAIT"], null);
quil.core.PI = Math.PI;
quil.core.HALF_PI = (quil.core.PI / 2.0);
quil.core.THIRD_PI = (quil.core.PI / 3.0);
quil.core.QUARTER_PI = (quil.core.PI / 4.0);
quil.core.TWO_PI = (quil.core.PI * 2.0);
quil.core.DEG_TO_RAD = (quil.core.PI / 180.0);
quil.core.RAD_TO_DEG = (180.0 / quil.core.PI);
quil.core.KEY_CODES = cljs.core.PersistentHashMap.fromArrays([(121),(39),(157),(119),(116),(113),(40),(117),(118),(122),(17),(115),(112),(123),(16),(120),(38),(18),(114),(37)],[new cljs.core.Keyword(null,"f10","f10",627525541),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.Keyword(null,"f5","f5",1587057387),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"f6","f6",2103080604),new cljs.core.Keyword(null,"f7","f7",356150168),new cljs.core.Keyword(null,"f11","f11",-1417398799),new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"f12","f12",853352790),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"f9","f9",704633338),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"left","left",-399115937)]);
/**
* Writes to the text area of the Processing environment's console.
* This is often helpful for looking at the data a program is producing.
* Each call to this function creates a new line of output.
* Individual elements can be separated with quotes ("") and joined with the string concatenation operator (+).
* Also writes the content of an array to the text area of the Processing environment.
* This is often helpful for looking at the data a program is producing.
* A new line is put between each element of the array. This function can only print 1D arrays,
* but can test to see if the content are null or not null for 2+ dimensional arrays.
*/
quil.core.prc_println = (function prc_println(msg){return quil.sketch.current_applet.call(null).println(msg);
});
/**
* Writes to the console area of the Processing environment.
* This is often helpful for looking at the data a program is producing.
* The companion function println() works like print(), but creates a new line of text for each call to the function.
* Individual elements can be separated with quotes ("") and joined with the addition operator (+).
*/
quil.core.prc_print = (function prc_print(msg){return quil.sketch.current_applet.call(null).print(msg);
});
/**
* Returns sketch object by id of canvas element of sketch.
*/
quil.core.get_sketch_by_id = (function get_sketch_by_id(id){return Processing.getInstanceById(id);
});
/**
* Retrieve sketch-specific state-atom. All changes to the
* atom will be reflected in the state.
* 
* (set-state! :foo 1)
* (state :foo) ;=> 1
* (swap! (state-atom) update-in [:foo] inc)
* (state :foo) ;=> 2
*/
quil.core.state_atom = (function state_atom(){return quil.sketch.current_applet.call(null).quil;
});
/**
* Retrieve sketch-specific state by key. Must initially call
* set-state! to store state. If no parameter passed whole
* state map is returned.
* 
* (set-state! :foo 1)
* (state :foo) ;=> 1
* (state) ;=> {:foo 1}
*/
quil.core.state = (function() {
var state = null;
var state__0 = (function (){return cljs.core.deref.call(null,quil.core.state_atom.call(null));
});
var state__1 = (function (key){var state__$1 = state.call(null);if(cljs.core.contains_QMARK_.call(null,state__$1,key))
{} else
{throw Error(("Unable to find state with key: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)));
}
return cljs.core.get.call(null,state__$1,key);
});
state = function(key){
switch(arguments.length){
case 0:
return state__0.call(this);
case 1:
return state__1.call(this,key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state.cljs$core$IFn$_invoke$arity$0 = state__0;
state.cljs$core$IFn$_invoke$arity$1 = state__1;
return state;
})()
;
/**
* Set sketch-specific state. May only be called once (ideally in the
* setup fn).  Subsequent calls have no effect.
* 
* Example:
* (set-state! :foo 1 :bar (atom true) :baz (/ (width) 2))
* @param {...*} var_args
*/
quil.core.set_state_BANG_ = (function() { 
var set_state_BANG___delegate = function (state_vals){var state_STAR_ = quil.core.state_atom.call(null);if(cljs.core.truth_(cljs.core.deref.call(null,state_STAR_)))
{return null;
} else
{var state_map = cljs.core.apply.call(null,cljs.core.hash_map,state_vals);return cljs.core.reset_BANG_.call(null,state_STAR_,state_map);
}
};
var set_state_BANG_ = function (var_args){
var state_vals = null;if (arguments.length > 0) {
  state_vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state_BANG___delegate.call(this,state_vals);};
set_state_BANG_.cljs$lang$maxFixedArity = 0;
set_state_BANG_.cljs$lang$applyTo = (function (arglist__10524){
var state_vals = cljs.core.seq(arglist__10524);
return set_state_BANG___delegate(state_vals);
});
set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_state_BANG___delegate;
return set_state_BANG_;
})()
;
/**
* Calculates the absolute value (magnitude) of a number. The
* absolute value of a number is always positive. Dynamically casts to
* an int or float appropriately
*/
quil.core.abs = (function abs(n){return quil.sketch.current_applet.call(null).abs(n);
});
/**
* The inverse of cos, returns the arc cosine of a value. This
* function expects the values in the range of -1 to 1 and values are
* returned in the range 0 to Math/PI (3.1415927).
*/
quil.core.acos = (function acos(n){return quil.sketch.current_applet.call(null).acos(n);
});
/**
* Extracts the alpha value from a color.
*/
quil.core.alpha = (function alpha(color){return quil.core.current_graphics.call(null).alpha((color | (0)));
});
/**
* Sets the ambient reflectance for shapes drawn to the screen. This
* is combined with the ambient light component of environment. The
* color components set through the parameters define the
* reflectance. For example in the default color mode, setting x=255,
* y=126, z=0, would cause all the red light to reflect and half of the
* green light to reflect. Used in combination with emissive, specular,
* and shininess in setting the material properties of shapes.
*/
quil.core.ambient_float = (function() {
var ambient_float = null;
var ambient_float__1 = (function (gray){return quil.core.current_graphics.call(null).ambient(gray);
});
var ambient_float__3 = (function (x,y,z){return quil.core.current_graphics.call(null).ambient(x,y,z);
});
ambient_float = function(x,y,z){
switch(arguments.length){
case 1:
return ambient_float__1.call(this,x);
case 3:
return ambient_float__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ambient_float.cljs$core$IFn$_invoke$arity$1 = ambient_float__1;
ambient_float.cljs$core$IFn$_invoke$arity$3 = ambient_float__3;
return ambient_float;
})()
;
/**
* Sets the ambient reflectance for shapes drawn to the screen. This
* is combined with the ambient light component of environment. The rgb
* color components set define the reflectance. Used in combination
* with emissive, specular, and shininess in setting the material
* properties of shapes.
*/
quil.core.ambient_int = (function ambient_int(rgb){return quil.core.current_graphics.call(null).ambient((rgb | (0)));
});
/**
* Sets the ambient reflectance for shapes drawn to the screen. This
* is combined with the ambient light component of environment. The
* color components set through the parameters define the
* reflectance. For example in the default color mode, setting x=255,
* y=126, z=0, would cause all the red light to reflect and half of the
* green light to reflect. Used in combination with emissive, specular,
* and shininess in setting the material properties of shapes.
*/
quil.core.ambient = (function() {
var ambient = null;
var ambient__1 = (function (rgb){return quil.core.ambient_float.call(null,rgb);
});
var ambient__3 = (function (x,y,z){return quil.core.ambient_float.call(null,x,y,z);
});
ambient = function(x,y,z){
switch(arguments.length){
case 1:
return ambient__1.call(this,x);
case 3:
return ambient__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ambient.cljs$core$IFn$_invoke$arity$1 = ambient__1;
ambient.cljs$core$IFn$_invoke$arity$3 = ambient__3;
return ambient;
})()
;
/**
* Adds an ambient light. Ambient light doesn't come from a specific direction,
* the rays have light have bounced around so much that objects are
* evenly lit from all sides. Ambient lights are almost always used in
* combination with other types of lights. Lights need to be included
* in the draw to remain persistent in a looping program. Placing them
* in the setup of a looping program will cause them to only have an
* effect the first time through the loop. The effect of the
* parameters is determined by the current color mode.
*/
quil.core.ambient_light = (function() {
var ambient_light = null;
var ambient_light__3 = (function (red,green,blue){return quil.core.current_graphics.call(null).ambientLight(red,green,blue);
});
var ambient_light__6 = (function (red,green,blue,x,y,z){return quil.core.current_graphics.call(null).ambientLight(red,green,blue,x,y,z);
});
ambient_light = function(red,green,blue,x,y,z){
switch(arguments.length){
case 3:
return ambient_light__3.call(this,red,green,blue);
case 6:
return ambient_light__6.call(this,red,green,blue,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ambient_light.cljs$core$IFn$_invoke$arity$3 = ambient_light__3;
ambient_light.cljs$core$IFn$_invoke$arity$6 = ambient_light__6;
return ambient_light;
})()
;
/**
* Multiplies the current matrix by the one specified through the
* parameters. This is very slow because it will try to calculate the
* inverse of the transform, so avoid it whenever possible. The
* equivalent function in OpenGL is glMultMatrix().
*/
quil.core.apply_matrix = (function apply_matrix(n00,n01,n02,n03,n10,n11,n12,n13,n20,n21,n22,n23,n30,n31,n32,n33){return quil.core.current_graphics.call(null).applyMatrix(n00,n01,n02,n03,n10,n11,n12,n13,n20,n21,n22,n23,n30,n31,n32,n33);
});
/**
* Draws an arc in the display window. Arcs are drawn along the outer
* edge of an ellipse defined by the x, y, width and height
* parameters. The origin or the arc's ellipse may be changed with the
* ellipse-mode function. The start and stop parameters specify the
* angles at which to draw the arc. The mode is either :open, :chord or :pie.
*/
quil.core.arc = (function arc(x,y,width,height,start,stop){return quil.sketch.current_applet.call(null).arc(x,y,width,height,start,stop);
});
/**
* The inverse of sin, returns the arc sine of a value. This function
* expects the values in the range of -1 to 1 and values are returned
* in the range -PI/2 to PI/2.
*/
quil.core.asin = (function asin(n){return quil.sketch.current_applet.call(null).asin(n);
});
/**
* The inverse of tan, returns the arc tangent of a value. This
* function expects the values in the range of -Infinity to
* Infinity (exclusive) and values are returned in the range -PI/2 to
* PI/2 .
*/
quil.core.atan = (function atan(n){return quil.sketch.current_applet.call(null).atan(n);
});
/**
* Calculates the angle (in radians) from a specified point to the
* coordinate origin as measured from the positive x-axis. Values are
* returned as a float in the range from PI to -PI. The atan2 function
* is most often used for orienting geometry to the position of the
* cursor. Note: The y-coordinate of the point is the first parameter
* and the x-coordinate is the second due the the structure of
* calculating the tangent.
*/
quil.core.atan2 = (function atan2(y,x){return quil.sketch.current_applet.call(null).atan2(y,x);
});
/**
* Sets the color used for the background of the Processing
* window. The default background is light gray. In the draw function,
* the background color is used to clear the display window at the
* beginning of each frame.
* 
* It is not possible to use transparency (alpha) in background colors
* with the main drawing surface, however they will work properly with
* create-graphics. Converts args to floats.
*/
quil.core.background_float = (function() {
var background_float = null;
var background_float__1 = (function (gray){return quil.core.current_graphics.call(null).background(gray);
});
var background_float__2 = (function (gray,alpha){return quil.core.current_graphics.call(null).background(gray,alpha);
});
var background_float__3 = (function (r,g,b){return quil.core.current_graphics.call(null).background(r,g,b);
});
var background_float__4 = (function (r,g,b,a){return quil.core.current_graphics.call(null).background(r,g,b,a);
});
background_float = function(r,g,b,a){
switch(arguments.length){
case 1:
return background_float__1.call(this,r);
case 2:
return background_float__2.call(this,r,g);
case 3:
return background_float__3.call(this,r,g,b);
case 4:
return background_float__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
background_float.cljs$core$IFn$_invoke$arity$1 = background_float__1;
background_float.cljs$core$IFn$_invoke$arity$2 = background_float__2;
background_float.cljs$core$IFn$_invoke$arity$3 = background_float__3;
background_float.cljs$core$IFn$_invoke$arity$4 = background_float__4;
return background_float;
})()
;
/**
* Sets the color used for the background of the Processing
* window. The default background is light gray. In the draw function,
* the background color is used to clear the display window at the
* beginning of each frame.
* 
* It is not possible to use transparency (alpha) in background colors
* with the main drawing surface, however they will work properly with
* create-graphics. Converts rgb to an int and alpha to a float.
*/
quil.core.background_int = (function() {
var background_int = null;
var background_int__1 = (function (rgb){return quil.core.current_graphics.call(null).background((rgb | (0)));
});
var background_int__2 = (function (rgb,alpha){return quil.core.current_graphics.call(null).background((rgb | (0)),alpha);
});
background_int = function(rgb,alpha){
switch(arguments.length){
case 1:
return background_int__1.call(this,rgb);
case 2:
return background_int__2.call(this,rgb,alpha);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
background_int.cljs$core$IFn$_invoke$arity$1 = background_int__1;
background_int.cljs$core$IFn$_invoke$arity$2 = background_int__2;
return background_int;
})()
;
/**
* Sets the color used for the background of the Processing
* window. The default background is light gray. In the draw function,
* the background color is used to clear the display window at the
* beginning of each frame.
* 
* It is not possible to use transparency (alpha) in background colors
* with the main drawing surface, however they will work properly with
* create-graphics. Converts args to floats.
*/
quil.core.background = (function() {
var background = null;
var background__1 = (function (rgb){return quil.core.current_graphics.call(null).background(rgb);
});
var background__2 = (function (rgb,alpha){return quil.core.current_graphics.call(null).background(rgb,alpha);
});
var background__3 = (function (r,g,b){return quil.core.background_float.call(null,r,g,b);
});
var background__4 = (function (r,g,b,a){return quil.core.background_float.call(null,r,g,b,a);
});
background = function(r,g,b,a){
switch(arguments.length){
case 1:
return background__1.call(this,r);
case 2:
return background__2.call(this,r,g);
case 3:
return background__3.call(this,r,g,b);
case 4:
return background__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
background.cljs$core$IFn$_invoke$arity$1 = background__1;
background.cljs$core$IFn$_invoke$arity$2 = background__2;
background.cljs$core$IFn$_invoke$arity$3 = background__3;
background.cljs$core$IFn$_invoke$arity$4 = background__4;
return background;
})()
;
/**
* Specify an image to be used as the background for a sketch. Its
* width and height must be the same size as the sketch window. Images
* used as background will ignore the current tint setting.
*/
quil.core.background_image = (function background_image(img){return quil.core.current_graphics.call(null).background(img);
});
/**
* Sets the matrix mode to the camera matrix so calls such as
* translate, rotate, apply-matrix and reset-matrix affect the
* camera. begin-camera should always be used with a following
* end-camera and pairs of begin-camera and end-camera cannot be
* nested.
* 
* For most situations the camera function will be sufficient.
*/
quil.core.begin_camera = (function begin_camera(){return quil.core.current_graphics.call(null).beginCamera();
});
/**
* Use the begin-contour and end-contour function to create negative
* shapes within shapes. These functions can only be within a
* begin-shape/end-shape pair and they only work with the :p2d and :p3d
* renderers.
*/
quil.core.begin_contour = (function begin_contour(){return quil.core.current_graphics.call(null).beginContour();
});
/**
* Enables the creation of complex forms. begin-shape begins recording
* vertices for a shape and end-shape stops recording. Use the mode
* keyword to specify which shape create from the provided
* vertices. With no mode specified, the shape can be any irregular
* polygon.
* 
* The available mode keywords are :points, :lines, :triangles,
* :triangle-fan, :triangle-strip,
* :quads, :quad-strip.
* 
* After calling the begin-shape function, a series of vertex commands
* must follow. To stop drawing the shape, call end-shape. The vertex
* function with two parameters specifies a position in 2D and the
* vertex function with three parameters specifies a position in
* 3D. Each shape will be outlined with the current stroke color and
* filled with the fill color.
* 
* Transformations such as translate, rotate, and scale do not work
* within begin-shape. It is also not possible to use other shapes,
* such as ellipse or rect within begin-shape.
* 
* Doesn't work inside with-graphics macro: shape is not drawn on
* provided graphics.
*/
quil.core.begin_shape = (function() {
var begin_shape = null;
var begin_shape__0 = (function (){return quil.core.current_graphics.call(null).beginShape();
});
var begin_shape__1 = (function (mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.shape_modes);return quil.core.current_graphics.call(null).beginShape((mode__$1 | (0)));
});
begin_shape = function(mode){
switch(arguments.length){
case 0:
return begin_shape__0.call(this);
case 1:
return begin_shape__1.call(this,mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin_shape.cljs$core$IFn$_invoke$arity$0 = begin_shape__0;
begin_shape.cljs$core$IFn$_invoke$arity$1 = begin_shape__1;
return begin_shape;
})()
;
/**
* Draws a Bezier curve on the screen. These curves are defined by a
* series of anchor and control points. The first two parameters
* specify the first anchor point and the last two parameters specify
* the other anchor point. The middle parameters specify the control
* points which define the shape of the curve.
*/
quil.core.bezier = (function() {
var bezier = null;
var bezier__8 = (function (x1,y1,cx1,cy1,cx2,cy2,x2,y2){return quil.core.current_graphics.call(null).bezier(x1,y1,cx1,cy1,cx2,cy2,x2,y2);
});
var bezier__12 = (function (x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2){return quil.core.current_graphics.call(null).bezier(x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2);
});
bezier = function(x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2){
switch(arguments.length){
case 8:
return bezier__8.call(this,x1,y1,z1,cx1,cy1,cz1,cx2,cy2);
case 12:
return bezier__12.call(this,x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bezier.cljs$core$IFn$_invoke$arity$8 = bezier__8;
bezier.cljs$core$IFn$_invoke$arity$12 = bezier__12;
return bezier;
})()
;
/**
* Sets the resolution at which Beziers display. The default value is
* 20. This function is only useful when using the :p3d or :opengl
* renderer as the default (:java2d) renderer does not use this
* information.
*/
quil.core.bezier_detail = (function bezier_detail(detail){return quil.core.current_graphics.call(null).bezierDetail((detail | (0)));
});
/**
* Evaluates the Bezier at point t for points a, b, c, d. The
* parameter t varies between 0 and 1, a and d are points on the curve,
* and b and c are the control points. This can be done once with the x
* coordinates and a second time with the y coordinates to get the
* location of a bezier curve at t.
*/
quil.core.bezier_point = (function bezier_point(a,b,c,d,t){return quil.core.current_graphics.call(null).bezierPoint(a,b,c,d,t);
});
/**
* Calculates the tangent of a point on a Bezier curve.
* (See http://en.wikipedia.org/wiki/Tangent)
*/
quil.core.bezier_tangent = (function bezier_tangent(a,b,c,d,t){return quil.core.current_graphics.call(null).bezierTangent(a,b,c,d,t);
});
/**
* Specifies vertex coordinates for Bezier curves. Each call to
* bezier-vertex defines the position of two control points and one
* anchor point of a Bezier curve, adding a new segment to a line or
* shape. The first time bezier-vertex is used within a begin-shape
* call, it must be prefaced with a call to vertex to set the first
* anchor point. This function must be used between begin-shape and
* end-shape and only when there is no parameter specified to
* begin-shape.
*/
quil.core.bezier_vertex = (function() {
var bezier_vertex = null;
var bezier_vertex__6 = (function (cx1,cy1,cx2,cy2,x,y){return quil.core.current_graphics.call(null).bezierVertex(cx1,cy1,cx2,cy2,x,y);
});
var bezier_vertex__9 = (function (cx1,cy1,cz1,cx2,cy2,cz2,x,y,z){return quil.core.current_graphics.call(null).bezierVertex(cx1,cy1,cz1,cx2,cy2,cz2,x,y,z);
});
bezier_vertex = function(cx1,cy1,cz1,cx2,cy2,cz2,x,y,z){
switch(arguments.length){
case 6:
return bezier_vertex__6.call(this,cx1,cy1,cz1,cx2,cy2,cz2);
case 9:
return bezier_vertex__9.call(this,cx1,cy1,cz1,cx2,cy2,cz2,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bezier_vertex.cljs$core$IFn$_invoke$arity$6 = bezier_vertex__6;
bezier_vertex.cljs$core$IFn$_invoke$arity$9 = bezier_vertex__9;
return bezier_vertex;
})()
;
/**
* Returns a string representing the binary value of an int, char or
* byte. When converting an int to a string, it is possible to specify
* the number of digits used.
*/
quil.core.binary = (function() {
var binary = null;
var binary__1 = (function (val){return quil.sketch.current_applet.call(null).binary(val);
});
var binary__2 = (function (val,num_digits){return quil.sketch.current_applet.call(null).binary(val,num_digits);
});
binary = function(val,num_digits){
switch(arguments.length){
case 1:
return binary__1.call(this,val);
case 2:
return binary__2.call(this,val,num_digits);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
binary.cljs$core$IFn$_invoke$arity$1 = binary__1;
binary.cljs$core$IFn$_invoke$arity$2 = binary__2;
return binary;
})()
;
/**
* Blends a region of pixels from one image into another with full alpha
* channel support. If src is not specified it defaults to current-graphics.
* If dest is not specified it defaults to current-graphics.
* 
* Note: blend-mode function is recommended to use instead of this one.
* 
* Available blend modes are:
* 
* :blend      - linear interpolation of colours: C = A*factor + B
* :add        - additive blending with white clip:
* C = min(A*factor + B, 255)
* :subtract   - subtractive blending with black clip:
* C = max(B - A*factor, 0)
* :darkest    - only the darkest colour succeeds:
* C = min(A*factor, B)
* :lightest   - only the lightest colour succeeds:
* C = max(A*factor, B)
* :difference - subtract colors from underlying image.
* :exclusion  - similar to :difference, but less extreme.
* :multiply   - Multiply the colors, result will always be darker.
* :screen     - Opposite multiply, uses inverse values of the colors.
* :overlay    - A mix of :multiply and :screen. Multiplies dark values
* and screens light values.
* :hard-light - :screen when greater than 50% gray, :multiply when
* lower.
* :soft-light - Mix of :darkest and :lightest. Works like :overlay,
* but not as harsh.
* :dodge      - Lightens light tones and increases contrast, ignores
* darks.
* Called "Color Dodge" in Illustrator and Photoshop.
* :burn       - Darker areas are applied, increasing contrast, ignores
* lights. Called "Color Burn" in Illustrator and
* Photoshop.
*/
quil.core.blend = (function() {
var blend = null;
var blend__9 = (function (x,y,width,height,dx,dy,dwidth,dheight,mode){return blend.call(null,quil.core.current_graphics.call(null),quil.core.current_graphics.call(null),x,y,width,height,dx,dy,dwidth,dheight,mode);
});
var blend__10 = (function (src_img,x,y,width,height,dx,dy,dwidth,dheight,mode){return blend.call(null,src_img,quil.core.current_graphics.call(null),x,y,width,height,dx,dy,dwidth,dheight,mode);
});
var blend__11 = (function (src_img,dest_img,x,y,width,height,dx,dy,dwidth,dheight,mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.blend_modes);return dest_img.blend(src_img,(x | (0)),(y | (0)),(width | (0)),(height | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)),(mode__$1 | (0)));
});
blend = function(src_img,dest_img,x,y,width,height,dx,dy,dwidth,dheight,mode){
switch(arguments.length){
case 9:
return blend__9.call(this,src_img,dest_img,x,y,width,height,dx,dy,dwidth);
case 10:
return blend__10.call(this,src_img,dest_img,x,y,width,height,dx,dy,dwidth,dheight);
case 11:
return blend__11.call(this,src_img,dest_img,x,y,width,height,dx,dy,dwidth,dheight,mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blend.cljs$core$IFn$_invoke$arity$9 = blend__9;
blend.cljs$core$IFn$_invoke$arity$10 = blend__10;
blend.cljs$core$IFn$_invoke$arity$11 = blend__11;
return blend;
})()
;
/**
* Blends two color values together based on the blending mode given specified
* with the mode keyword.
* 
* Available blend modes are:
* 
* :blend      - linear interpolation of colours: C = A*factor + B
* :add        - additive blending with white clip:
* C = min(A*factor + B, 255)
* :subtract   - subtractive blending with black clip:
* C = max(B - A*factor, 0)
* :darkest    - only the darkest colour succeeds:
* C = min(A*factor, B)
* :lightest   - only the lightest colour succeeds:
* C = max(A*factor, B)
* :difference - subtract colors from underlying image.
* :exclusion  - similar to :difference, but less extreme.
* :multiply   - Multiply the colors, result will always be darker.
* :screen     - Opposite multiply, uses inverse values of the colors.
* :overlay    - A mix of :multiply and :screen. Multiplies dark values
* and screens light values.
* :hard-light - :screen when greater than 50% gray, :multiply when
* lower.
* :soft-light - Mix of :darkest and :lightest. Works like :overlay,
* but not as harsh.
* :dodge      - Lightens light tones and increases contrast, ignores
* darks.
* Called "Color Dodge" in Illustrator and Photoshop.
* :burn       - Darker areas are applied, increasing contrast, ignores
* lights. Called "Color Burn" in Illustrator and
* Photoshop.
*/
quil.core.blend_color = (function blend_color(c1,c2,mode){var mode_10525__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.blend_modes);return quil.core.current_graphics.call(null).blendColor(c1,c2,mode);
});
/**
* Extracts the blue value from a color, scaled to match current color-mode.
* Returns a float.
*/
quil.core.blue = (function blue(color){return quil.core.current_graphics.call(null).blue((color | (0)));
});
/**
* Creates an extruded rectangle.
*/
quil.core.box = (function() {
var box = null;
var box__1 = (function (size){return quil.core.current_graphics.call(null).box(size);
});
var box__3 = (function (width,height,depth){return quil.core.current_graphics.call(null).box(width,height,depth);
});
box = function(width,height,depth){
switch(arguments.length){
case 1:
return box__1.call(this,width);
case 3:
return box__3.call(this,width,height,depth);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
box.cljs$core$IFn$_invoke$arity$1 = box__1;
box.cljs$core$IFn$_invoke$arity$3 = box__3;
return box;
})()
;
/**
* Extracts the brightness value from a color. Returns a float.
*/
quil.core.brightness = (function brightness(color){return quil.core.current_graphics.call(null).brightness((color | (0)));
});
/**
* Sets the position of the camera through setting the eye position,
* the center of the scene, and which axis is facing upward. Moving the
* eye position and the direction it is pointing (the center of the
* scene) allows the images to be seen from different angles. The
* version without any parameters sets the camera to the default
* position, pointing to the center of the display window with the Y
* axis as up. The default values are:
* 
* eyeX:     (/ (width) 2.0)
* eyeY:     (/ (height) 2.0)
* eyeZ:     (/ (/ (height) 2.0) (tan (/ (* Math/PI 60.0) 360.0)))
* centerX:  (/ (width) 2.0)
* centerY:  (/ (height) 2.0)
* centerZ:  0
* upX:      0
* upY:      1
* upZ:      0
* 
* Similar imilar to gluLookAt() in OpenGL, but it first clears the
* current camera settings.
*/
quil.core.camera = (function() {
var camera = null;
var camera__0 = (function (){return quil.core.current_graphics.call(null).camera();
});
var camera__9 = (function (eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ){return quil.core.current_graphics.call(null).camera(eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ);
});
camera = function(eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ){
switch(arguments.length){
case 0:
return camera__0.call(this);
case 9:
return camera__9.call(this,eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
camera.cljs$core$IFn$_invoke$arity$0 = camera__0;
camera.cljs$core$IFn$_invoke$arity$9 = camera__9;
return camera;
})()
;
/**
* Calculates the closest int value that is greater than or equal to
* the value of the parameter. For example, (ceil 9.03) returns the
* value 10.
*/
quil.core.ceil = (function ceil(n){return quil.sketch.current_applet.call(null).ceil(n);
});
/**
* Creates an integer representation of a color The parameters are
* interpreted as RGB or HSB values depending on the current
* color-mode. The default mode is RGB values from 0 to 255 and
* therefore, the function call (color 255 204 0) will return a bright
* yellow. Args are cast to floats.
* 
* r - red or hue value
* g - green or saturation value
* b - blue or brightness value
* a - alpha value
*/
quil.core.color = (function() {
var color = null;
var color__1 = (function (gray){return quil.core.current_graphics.call(null).color(gray);
});
var color__2 = (function (gray,alpha){return quil.core.current_graphics.call(null).color(gray,alpha);
});
var color__3 = (function (r,g,b){return quil.core.current_graphics.call(null).color(r,g,b);
});
var color__4 = (function (r,g,b,a){return quil.core.current_graphics.call(null).color(r,g,b,a);
});
color = function(r,g,b,a){
switch(arguments.length){
case 1:
return color__1.call(this,r);
case 2:
return color__2.call(this,r,g);
case 3:
return color__3.call(this,r,g,b);
case 4:
return color__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color.cljs$core$IFn$_invoke$arity$1 = color__1;
color.cljs$core$IFn$_invoke$arity$2 = color__2;
color.cljs$core$IFn$_invoke$arity$3 = color__3;
color.cljs$core$IFn$_invoke$arity$4 = color__4;
return color;
})()
;
/**
* Changes the way Processing interprets color data. Available modes
* are :rgb and :hsb.By default, the parameters for fill, stroke,
* background, and color are defined by values between 0 and 255 using
* the :rgb color model. The color-mode fn is used to change the
* numerical range used for specifying colors and to switch color
* systems. For example, calling
* (color-mode :rgb 1.0) will specify that values are specified between
* 0 and 1. The limits for defining colors are altered by setting the
* parameters range1, range2, range3, and range 4.
*/
quil.core.color_mode = (function() {
var color_mode = null;
var color_mode__1 = (function (mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);return quil.core.current_graphics.call(null).colorMode((mode__$1 | (0)));
});
var color_mode__2 = (function (mode,max){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);return quil.core.current_graphics.call(null).colorMode((mode__$1 | (0)),max);
});
var color_mode__4 = (function (mode,max_x,max_y,max_z){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);return quil.core.current_graphics.call(null).colorMode((mode__$1 | (0)),max_x,max_y,max_z);
});
var color_mode__5 = (function (mode,max_x,max_y,max_z,max_a){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);return quil.core.current_graphics.call(null).colorMode((mode__$1 | (0)),max_x,max_y,max_z,max_a);
});
color_mode = function(mode,max_x,max_y,max_z,max_a){
switch(arguments.length){
case 1:
return color_mode__1.call(this,mode);
case 2:
return color_mode__2.call(this,mode,max_x);
case 4:
return color_mode__4.call(this,mode,max_x,max_y,max_z);
case 5:
return color_mode__5.call(this,mode,max_x,max_y,max_z,max_a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_mode.cljs$core$IFn$_invoke$arity$1 = color_mode__1;
color_mode.cljs$core$IFn$_invoke$arity$2 = color_mode__2;
color_mode.cljs$core$IFn$_invoke$arity$4 = color_mode__4;
color_mode.cljs$core$IFn$_invoke$arity$5 = color_mode__5;
return color_mode;
})()
;
/**
* Constrains a value to not exceed a maximum and minimum value.
*/
quil.core.constrain = (function constrain(amt,low,high){return quil.sketch.current_applet.call(null).constrain(amt,low,high);
});
/**
* Copies a region of pixels from the one image to another. If src-img
* is not specified it defaults to current-graphics. If dest-img is not
* specified - it defaults to current-graphics. If the source
* and destination regions aren't the same size, it will automatically
* resize the source pixels to fit the specified target region. No
* alpha information is used in the process, however if the source
* image has an alpha channel set, it will be copied as well.
*/
quil.core.copy = (function() {
var copy = null;
var copy__2 = (function (p__10526,p__10527){var vec__10538 = p__10526;var sx = cljs.core.nth.call(null,vec__10538,(0),null);var sy = cljs.core.nth.call(null,vec__10538,(1),null);var swidth = cljs.core.nth.call(null,vec__10538,(2),null);var sheight = cljs.core.nth.call(null,vec__10538,(3),null);var vec__10539 = p__10527;var dx = cljs.core.nth.call(null,vec__10539,(0),null);var dy = cljs.core.nth.call(null,vec__10539,(1),null);var dwidth = cljs.core.nth.call(null,vec__10539,(2),null);var dheight = cljs.core.nth.call(null,vec__10539,(3),null);return copy.call(null,quil.core.current_graphics.call(null),quil.core.current_graphics.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy,swidth,sheight], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy,dwidth,dheight], null));
});
var copy__3 = (function (src_img,p__10528,p__10529){var vec__10540 = p__10528;var sx = cljs.core.nth.call(null,vec__10540,(0),null);var sy = cljs.core.nth.call(null,vec__10540,(1),null);var swidth = cljs.core.nth.call(null,vec__10540,(2),null);var sheight = cljs.core.nth.call(null,vec__10540,(3),null);var vec__10541 = p__10529;var dx = cljs.core.nth.call(null,vec__10541,(0),null);var dy = cljs.core.nth.call(null,vec__10541,(1),null);var dwidth = cljs.core.nth.call(null,vec__10541,(2),null);var dheight = cljs.core.nth.call(null,vec__10541,(3),null);return copy.call(null,src_img,quil.core.current_graphics.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy,swidth,sheight], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy,dwidth,dheight], null));
});
var copy__4 = (function (src_img,dest_img,p__10530,p__10531){var vec__10542 = p__10530;var sx = cljs.core.nth.call(null,vec__10542,(0),null);var sy = cljs.core.nth.call(null,vec__10542,(1),null);var swidth = cljs.core.nth.call(null,vec__10542,(2),null);var sheight = cljs.core.nth.call(null,vec__10542,(3),null);var vec__10543 = p__10531;var dx = cljs.core.nth.call(null,vec__10543,(0),null);var dy = cljs.core.nth.call(null,vec__10543,(1),null);var dwidth = cljs.core.nth.call(null,vec__10543,(2),null);var dheight = cljs.core.nth.call(null,vec__10543,(3),null);return dest_img.copy(src_img,(sx | (0)),(sy | (0)),(swidth | (0)),(sheight | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)));
});
copy = function(src_img,dest_img,p__10530,p__10531){
switch(arguments.length){
case 2:
return copy__2.call(this,src_img,dest_img);
case 3:
return copy__3.call(this,src_img,dest_img,p__10530);
case 4:
return copy__4.call(this,src_img,dest_img,p__10530,p__10531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
copy.cljs$core$IFn$_invoke$arity$2 = copy__2;
copy.cljs$core$IFn$_invoke$arity$3 = copy__3;
copy.cljs$core$IFn$_invoke$arity$4 = copy__4;
return copy;
})()
;
/**
* Calculates the cosine of an angle. This function expects the values
* of the angle parameter to be provided in radians (values from 0 to
* Math/PI*2). Values are returned in the range -1 to 1.
*/
quil.core.cos = (function cos(angle){return quil.sketch.current_applet.call(null).cos(angle);
});
/**
* Dynamically converts a font to the format used by Processing (a
* PFont) from either a font name that's installed on the computer, or
* from a .ttf or .otf file inside the sketches 'data' folder. This
* function is an advanced feature for precise control.
* 
* Use available-fonts to obtain the names for the fonts recognized by
* the computer and are compatible with this function.
* 
* The size parameter states the font size you want to generate. The
* smooth parameter specifies if the font should be antialiased or not,
* and the charset parameter is an array of chars that specifies the
* characters to generate.
* 
* This function creates a bitmapped version of a font It loads a font
* by name, and converts it to a series of images based on the size of
* the font. When possible, the text function will use a native font
* rather than the bitmapped version created behind the scenes with
* create-font. For instance, when using the default renderer
* setting (JAVA2D), the actual native version of the font will be
* employed by the sketch, improving drawing quality and
* performance. With the :p2d, :p3d, and :opengl renderer settings, the
* bitmapped version will be used. While this can drastically improve
* speed and appearance, results are poor when exporting if the sketch
* does not include the .otf or .ttf file, and the requested font is
* not available on the machine running the sketch.
*/
quil.core.create_font = (function() {
var create_font = null;
var create_font__2 = (function (name,size){return quil.sketch.current_applet.call(null).createFont((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),size);
});
var create_font__3 = (function (name,size,smooth){return quil.sketch.current_applet.call(null).createFont((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),size,smooth);
});
var create_font__4 = (function (name,size,smooth,charset){return quil.sketch.current_applet.call(null).createFont((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),size,smooth,charset);
});
create_font = function(name,size,smooth,charset){
switch(arguments.length){
case 2:
return create_font__2.call(this,name,size);
case 3:
return create_font__3.call(this,name,size,smooth);
case 4:
return create_font__4.call(this,name,size,smooth,charset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_font.cljs$core$IFn$_invoke$arity$2 = create_font__2;
create_font.cljs$core$IFn$_invoke$arity$3 = create_font__3;
create_font.cljs$core$IFn$_invoke$arity$4 = create_font__4;
return create_font;
})()
;
/**
* Creates and returns a new PGraphics object of the types :p2d, :p3d,
* :java2d, :pdf. By default :java2d is used. Use this class if you
* need to draw into an off-screen graphics buffer. It's not possible
* to use create-graphics with the :opengl renderer, because it doesn't
* allow offscreen use. The :pdf renderer requires the filename parameter.
* 
* It's important to call any drawing commands between (.beginDraw graphics) and
* (.endDraw graphics) statements or use with-graphics macro. This is also true
* for any commands that affect drawing, such as smooth or color-mode.
* 
* If you're using :pdf renderer - don't forget to call (.dispose graphics)
* as last command inside with-graphics macro, otherwise graphics won't be
* saved.
* 
* Unlike the main drawing surface which is completely opaque, surfaces
* created with create-graphics can have transparency. This makes it
* possible to draw into a graphics and maintain the alpha channel. By
* using save to write a PNG or TGA file, the transparency of the
* graphics object will be honored.
*/
quil.core.create_graphics = (function() {
var create_graphics = null;
var create_graphics__2 = (function (w,h){return quil.sketch.current_applet.call(null).createGraphics((w | (0)),(h | (0)),new cljs.core.Keyword(null,"p2d","p2d",-2106175755));
});
var create_graphics__3 = (function (w,h,renderer){return quil.sketch.current_applet.call(null).createGraphics((w | (0)),(h | (0)),quil.sketch.resolve_renderer.call(null,renderer));
});
var create_graphics__4 = (function (w,h,renderer,path){return quil.sketch.current_applet.call(null).createGraphics((w | (0)),(h | (0)),quil.sketch.resolve_renderer.call(null,renderer),path);
});
create_graphics = function(w,h,renderer,path){
switch(arguments.length){
case 2:
return create_graphics__2.call(this,w,h);
case 3:
return create_graphics__3.call(this,w,h,renderer);
case 4:
return create_graphics__4.call(this,w,h,renderer,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_graphics.cljs$core$IFn$_invoke$arity$2 = create_graphics__2;
create_graphics.cljs$core$IFn$_invoke$arity$3 = create_graphics__3;
create_graphics.cljs$core$IFn$_invoke$arity$4 = create_graphics__4;
return create_graphics;
})()
;
/**
* Creates a new PImage (the datatype for storing images). This
* provides a fresh buffer of pixels to play with. Set the size of the
* buffer with the width and height parameters. The format parameter
* defines how the pixels are stored. See the PImage reference for more
* information.
* 
* Possible formats: :rgb, :argb, :alpha (grayscale alpha channel)
* 
* Prefer using create-image over initialising new PImage instances
* directly.
*/
quil.core.create_image = (function create_image(w,h,format){var format__$1 = quil.util.resolve_constant_key.call(null,format,quil.core.image_formats);return quil.sketch.current_applet.call(null).createImage((w | (0)),(h | (0)),(format__$1 | (0)));
});
/**
* Return the current fill color.
*/
quil.core.current_fill = (function current_fill(){return quil.core.current_graphics.call(null).fillColor();
});
/**
* Return the current stroke color.
*/
quil.core.current_stroke = (function current_stroke(){return quil.core.current_graphics.call(null).strokeColor();
});
/**
* Sets the cursor to a predefined symbol or makes it
* visible if already hidden (after no-cursor was called).
* 
* Available modes: :arrow, :cross, :hand, :move, :text, :wait
* 
* See cursor-image for specifying a generic image as the cursor
* symbol.
*/
quil.core.cursor = (function() {
var cursor = null;
var cursor__0 = (function (){return quil.sketch.current_applet.call(null).cursor();
});
var cursor__1 = (function (cursor_mode){return quil.sketch.current_applet.call(null).cursor((quil.util.resolve_constant_key.call(null,cursor_mode,quil.core.cursor_modes) | (0)));
});
cursor = function(cursor_mode){
switch(arguments.length){
case 0:
return cursor__0.call(this);
case 1:
return cursor__1.call(this,cursor_mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$0 = cursor__0;
cursor.cljs$core$IFn$_invoke$arity$1 = cursor__1;
return cursor;
})()
;
/**
* Set the cursor to a predefined image. The horizontal and vertical
* active spots of the cursor may be specified with hx and hy.
* It is recommended to make the size 16x16 or 32x32 pixels.
*/
quil.core.cursor_image = (function() {
var cursor_image = null;
var cursor_image__1 = (function (img){return quil.sketch.current_applet.call(null).cursor(img);
});
var cursor_image__3 = (function (img,hx,hy){return quil.sketch.current_applet.call(null).cursor(img,(hx | (0)),(hy | (0)));
});
cursor_image = function(img,hx,hy){
switch(arguments.length){
case 1:
return cursor_image__1.call(this,img);
case 3:
return cursor_image__3.call(this,img,hx,hy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor_image.cljs$core$IFn$_invoke$arity$1 = cursor_image__1;
cursor_image.cljs$core$IFn$_invoke$arity$3 = cursor_image__3;
return cursor_image;
})()
;
/**
* Draws a curved line on the screen. The first and second parameters
* specify the beginning control point and the last two parameters
* specify the ending control point. The middle parameters specify the
* start and stop of the curve. Longer curves can be created by putting
* a series of curve fns together or using curve-vertex. An additional
* fn called curve-tightness provides control for the visual quality of
* the curve. The curve fn is an implementation of Catmull-Rom
* splines.
*/
quil.core.curve = (function() {
var curve = null;
var curve__8 = (function (x1,y1,x2,y2,x3,y3,x4,y4){return quil.core.current_graphics.call(null).curve(x1,y1,x2,y2,x3,y3,x4,y4);
});
var curve__12 = (function (x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){return quil.core.current_graphics.call(null).curve(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
});
curve = function(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){
switch(arguments.length){
case 8:
return curve__8.call(this,x1,y1,z1,x2,y2,z2,x3,y3);
case 12:
return curve__12.call(this,x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
curve.cljs$core$IFn$_invoke$arity$8 = curve__8;
curve.cljs$core$IFn$_invoke$arity$12 = curve__12;
return curve;
})()
;
/**
* Sets the resolution at which curves display. The default value is
* 20. This function is only useful when using the :p3d or :opengl
* renderer as the default (:java2d) renderer does not use this
* information.
*/
quil.core.curve_detail = (function curve_detail(detail){return quil.core.current_graphics.call(null).curveDetail((detail | (0)));
});
/**
* Evalutes the curve at point t for points a, b, c, d. The parameter
* t varies between 0 and 1, a and d are points on the curve, and b c
* and are the control points. This can be done once with the x
* coordinates and a second time with the y coordinates to get the
* location of a curve at t.
*/
quil.core.curve_point = (function curve_point(a,b,c,d,t){return quil.core.current_graphics.call(null).curvePoint(a,b,c,d,t);
});
/**
* Calculates the tangent of a point on a curve.
* See: http://en.wikipedia.org/wiki/Tangent
*/
quil.core.curve_tangent = (function curve_tangent(a,b,c,d,t){return quil.core.current_graphics.call(null).curveTangent(a,b,c,d,t);
});
/**
* Modifies the quality of forms created with curve and
* curve-vertex. The parameter squishy determines how the curve fits
* to the vertex points. The value 0.0 is the default value for
* squishy (this value defines the curves to be Catmull-Rom splines)
* and the value 1.0 connects all the points with straight
* lines. Values within the range -5.0 and 5.0 will deform the curves
* but will leave them recognizable and as values increase in
* magnitude, they will continue to deform.
*/
quil.core.curve_tightness = (function curve_tightness(ti){return quil.core.current_graphics.call(null).curveTightness(ti);
});
/**
* Specifies vertex coordinates for curves. This function may only be
* used between begin-shape and end-shape and only when there is no
* mode keyword specified to begin-hape. The first and last points in a
* series of curve-vertex lines will be used to guide the beginning and
* end of a the curve. A minimum of four points is required to draw a
* tiny curve between the second and third points. Adding a fifth point
* with curveVertex will draw the curve between the second, third, and
* fourth points. The curveVertex function is an implementation of
* Catmull-Rom splines.
*/
quil.core.curve_vertex = (function() {
var curve_vertex = null;
var curve_vertex__2 = (function (x,y){return quil.core.current_graphics.call(null).curveVertex(x,y);
});
var curve_vertex__3 = (function (x,y,z){return quil.core.current_graphics.call(null).curveVertex(x,y,z);
});
curve_vertex = function(x,y,z){
switch(arguments.length){
case 2:
return curve_vertex__2.call(this,x,y);
case 3:
return curve_vertex__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
curve_vertex.cljs$core$IFn$_invoke$arity$2 = curve_vertex__2;
curve_vertex.cljs$core$IFn$_invoke$arity$3 = curve_vertex__3;
return curve_vertex;
})()
;
/**
* Get the current day of the month (1 through 31).
*/
quil.core.day = (function day(){return quil.sketch.current_applet.call(null).day();
});
/**
* Converts a radian measurement to its corresponding value in
* degrees. Radians and degrees are two ways of measuring the same
* thing. There are 360 degrees in a circle and (* 2 Math/PI) radians
* in a circle. For example, (= 90° (/ Math/PI 2) 1.5707964). All
* trigonometric methods in Processing require their parameters to be
* specified in radians.
*/
quil.core.degrees = (function degrees(radians){return quil.sketch.current_applet.call(null).degrees(radians);
});
/**
* Forces the program to stop running for a specified time. Delay
* times are specified in thousandths of a second, therefore the
* function call (delay 3000) will stop the program for three
* seconds. Because the screen is updated only at the end of draw,
* the program may appear to 'freeze', because the screen will not
* update when the delay fn is used. This function has no affect
* inside setup.
*/
quil.core.delay_frame = (function delay_frame(freeze_ms){return quil.sketch.current_applet.call(null).delay((freeze_ms | (0)));
});
/**
* Adds a directional light. Directional light comes from one
* direction and is stronger when hitting a surface squarely and weaker
* if it hits at a a gentle angle. After hitting a surface, a
* directional lights scatters in all directions. Lights need to be
* included in the draw fn to remain persistent in a looping
* program. Placing them in the setup fn of a looping program will cause
* them to only have an effect the first time through the loop. The
* affect of the r, g, and b parameters is determined by the current
* color mode. The nx, ny, and nz parameters specify the direction the
* light is facing. For example, setting ny to -1 will cause the
* geometry to be lit from below (the light is facing directly upward)
*/
quil.core.directional_light = (function directional_light(r,g,b,nx,ny,nz){return quil.core.current_graphics.call(null).directionalLight(r,g,b,nx,ny,nz);
});
/**
* Calculates the distance between two points
*/
quil.core.dist = (function() {
var dist = null;
var dist__4 = (function (x1,y1,x2,y2){return quil.sketch.current_applet.call(null).dist(x1,y1,x2,y2);
});
var dist__6 = (function (x1,y1,z1,x2,y2,z2){return quil.sketch.current_applet.call(null).dist(x1,y1,z1,x2,y2,z2);
});
dist = function(x1,y1,z1,x2,y2,z2){
switch(arguments.length){
case 4:
return dist__4.call(this,x1,y1,z1,x2);
case 6:
return dist__6.call(this,x1,y1,z1,x2,y2,z2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dist.cljs$core$IFn$_invoke$arity$4 = dist__4;
dist.cljs$core$IFn$_invoke$arity$6 = dist__6;
return dist;
})()
;
/**
* Draws an ellipse (oval) in the display window. An ellipse with an
* equal width and height is a circle.  The origin may be changed with
* the ellipse-mode function
*/
quil.core.ellipse = (function ellipse(x,y,width,height){return quil.core.current_graphics.call(null).ellipse(x,y,width,height);
});
/**
* Modifies the origin of the ellispse according to the specified mode:
* 
* :center  - specifies the location of the ellipse as
* the center of the shape. (Default).
* :radius  - similar to center, but the width and height parameters to
* ellipse specify the radius of the ellipse, rather than the
* diameter.
* :corner  - draws the shape from the upper-left corner of its bounding
* box.
* :corners - uses the four parameters to ellipse to set two opposing
* corners of the ellipse's bounding box.
*/
quil.core.ellipse_mode = (function ellipse_mode(mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.ellipse_modes);return quil.core.current_graphics.call(null).ellipseMode((mode__$1 | (0)));
});
/**
* Sets the emissive color of the material used for drawing shapes
* drawn to the screen. Used in combination with ambient, specular, and
* shininess in setting the material properties of shapes. Converts all
* args to floats
*/
quil.core.emissive_float = (function() {
var emissive_float = null;
var emissive_float__1 = (function (float_val){return quil.core.current_graphics.call(null).emissive(float_val);
});
var emissive_float__3 = (function (r,g,b){return quil.core.current_graphics.call(null).emissive(r,g,b);
});
emissive_float = function(r,g,b){
switch(arguments.length){
case 1:
return emissive_float__1.call(this,r);
case 3:
return emissive_float__3.call(this,r,g,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emissive_float.cljs$core$IFn$_invoke$arity$1 = emissive_float__1;
emissive_float.cljs$core$IFn$_invoke$arity$3 = emissive_float__3;
return emissive_float;
})()
;
/**
* Sets the emissive color of the material used for drawing shapes
* drawn to the screen. Used in combination with ambient, specular, and
* shininess in setting the material properties of shapes. Converts all
* args to ints
*/
quil.core.emissive_int = (function emissive_int(int_val){return quil.core.current_graphics.call(null).emissive((int_val | (0)));
});
/**
* Sets the emissive color of the material used for drawing shapes
* drawn to the screen. Used in combination with ambient, specular, and
* shininess in setting the material properties of shapes.
* 
* If passed one arg - it is assumed to be an int (i.e. a color),
* multiple args are converted to floats.
*/
quil.core.emissive = (function() {
var emissive = null;
var emissive__1 = (function (c){return quil.core.emissive_float.call(null,c);
});
var emissive__3 = (function (r,g,b){return quil.core.emissive_float.call(null,r,g,b);
});
emissive = function(r,g,b){
switch(arguments.length){
case 1:
return emissive__1.call(this,r);
case 3:
return emissive__3.call(this,r,g,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emissive.cljs$core$IFn$_invoke$arity$1 = emissive__1;
emissive.cljs$core$IFn$_invoke$arity$3 = emissive__3;
return emissive;
})()
;
/**
* Unsets the matrix mode from the camera matrix. See begin-camera.
*/
quil.core.end_camera = (function end_camera(){return quil.core.current_graphics.call(null).endCamera();
});
/**
* Use the begin-contour and end-contour function to create negative
* shapes within shapes. These functions can only be within a
* begin-shape/end-shape pair and they only work with the :p2d and :p3d
* renderers.
*/
quil.core.end_contour = (function end_contour(){return quil.core.current_graphics.call(null).endContour();
});
/**
* Complement to begin-raw; they must always be used together. See
* the begin-raw docstring for details.
*/
quil.core.end_raw = (function end_raw(){return quil.core.current_graphics.call(null).endRaw();
});
/**
* May only be called after begin-shape. When end-shape is called,
* all of image data defined since the previous call to begin-shape is
* written into the image buffer. The keyword :close may be passed to
* close the shape (to connect the beginning and the end).
*/
quil.core.end_shape = (function() {
var end_shape = null;
var end_shape__0 = (function (){return quil.sketch.current_applet.call(null).endShape();
});
var end_shape__1 = (function (mode){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),mode))
{} else
{}
return quil.sketch.current_applet.call(null).endShape((2));
});
end_shape = function(mode){
switch(arguments.length){
case 0:
return end_shape__0.call(this);
case 1:
return end_shape__1.call(this,mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
end_shape.cljs$core$IFn$_invoke$arity$0 = end_shape__0;
end_shape.cljs$core$IFn$_invoke$arity$1 = end_shape__1;
return end_shape;
})()
;
/**
* Quits/stops/exits the program.  Rather than terminating
* immediately, exit will cause the sketch to exit after draw has
* completed (or after setup completes if called during the setup
* method).
*/
quil.core.exit = (function exit(){return quil.sketch.current_applet.call(null).exit();
});
/**
* Returns Euler's number e (2.71828...) raised to the power of the
* value parameter.
*/
quil.core.exp = (function exp(val){return quil.sketch.current_applet.call(null).exp(val);
});
/**
* Sets the color used to fill shapes. For example, (fill 204 102 0),
* will specify that all subsequent shapes will be filled with orange.
*/
quil.core.fill_float = (function() {
var fill_float = null;
var fill_float__1 = (function (gray){return quil.core.current_graphics.call(null).fill(gray);
});
var fill_float__2 = (function (gray,alpha){return quil.core.current_graphics.call(null).fill(gray,alpha);
});
var fill_float__3 = (function (r,g,b){return quil.core.current_graphics.call(null).fill(r,g,b);
});
var fill_float__4 = (function (r,g,b,alpha){return quil.core.current_graphics.call(null).fill(r,g,b,alpha);
});
fill_float = function(r,g,b,alpha){
switch(arguments.length){
case 1:
return fill_float__1.call(this,r);
case 2:
return fill_float__2.call(this,r,g);
case 3:
return fill_float__3.call(this,r,g,b);
case 4:
return fill_float__4.call(this,r,g,b,alpha);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fill_float.cljs$core$IFn$_invoke$arity$1 = fill_float__1;
fill_float.cljs$core$IFn$_invoke$arity$2 = fill_float__2;
fill_float.cljs$core$IFn$_invoke$arity$3 = fill_float__3;
fill_float.cljs$core$IFn$_invoke$arity$4 = fill_float__4;
return fill_float;
})()
;
/**
* Sets the color used to fill shapes.
*/
quil.core.fill_int = (function() {
var fill_int = null;
var fill_int__1 = (function (rgb){return quil.core.current_graphics.call(null).fill((rgb | (0)));
});
var fill_int__2 = (function (rgb,alpha){return quil.core.current_graphics.call(null).fill((rgb | (0)),alpha);
});
fill_int = function(rgb,alpha){
switch(arguments.length){
case 1:
return fill_int__1.call(this,rgb);
case 2:
return fill_int__2.call(this,rgb,alpha);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fill_int.cljs$core$IFn$_invoke$arity$1 = fill_int__1;
fill_int.cljs$core$IFn$_invoke$arity$2 = fill_int__2;
return fill_int;
})()
;
/**
* Sets the color used to fill shapes.
*/
quil.core.fill = (function() {
var fill = null;
var fill__1 = (function (rgb){return quil.core.fill_float.call(null,rgb);
});
var fill__2 = (function (rgb,alpha){return quil.core.fill_float.call(null,rgb,alpha);
});
var fill__3 = (function (r,g,b){return quil.core.fill_float.call(null,r,g,b);
});
var fill__4 = (function (r,g,b,a){return quil.core.fill_float.call(null,r,g,b,a);
});
fill = function(r,g,b,a){
switch(arguments.length){
case 1:
return fill__1.call(this,r);
case 2:
return fill__2.call(this,r,g);
case 3:
return fill__3.call(this,r,g,b);
case 4:
return fill__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fill.cljs$core$IFn$_invoke$arity$1 = fill__1;
fill.cljs$core$IFn$_invoke$arity$2 = fill__2;
fill.cljs$core$IFn$_invoke$arity$3 = fill__3;
fill.cljs$core$IFn$_invoke$arity$4 = fill__4;
return fill;
})()
;
/**
* Originally named filter in Processing Language.
* Filters the display window with the specified mode and level.
* Level defines the quality of the filter and mode may be one of the
* following keywords:
* 
* :threshold - converts the image to black and white pixels depending
* if they are above or below the threshold defined by
* the level parameter. The level must be between
* 0.0 (black) and 1.0 (white). If no level is specified,
* 0.5 is used.
* :gray      - converts any colors in the image to grayscale
* equivalents. Doesn't work with level.
* :invert    - sets each pixel to its inverse value. Doesn't work with
* level.
* :posterize - limits each channel of the image to the number of
* colors specified as the level parameter. The parameter can
* be set to values between 2 and 255, but results are most
* noticeable in the lower ranges.
* :blur      - executes a Guassian blur with the level parameter
* specifying the extent of the blurring. If no level
* parameter is used, the blur is equivalent to Guassian
* blur of radius 1.
* :opaque    - sets the alpha channel to entirely opaque. Doesn't work
* with level.
* :erode     - reduces the light areas. Doesn't work with level.
* :dilate    - increases the light areas.  Doesn't work with level.
*/
quil.core.display_filter = (function() {
var display_filter = null;
var display_filter__1 = (function (mode){return quil.core.current_graphics.call(null).filter((quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes) | (0)));
});
var display_filter__2 = (function (mode,level){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes);return quil.core.current_graphics.call(null).filter((mode__$1 | (0)),level);
});
display_filter = function(mode,level){
switch(arguments.length){
case 1:
return display_filter__1.call(this,mode);
case 2:
return display_filter__2.call(this,mode,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
display_filter.cljs$core$IFn$_invoke$arity$1 = display_filter__1;
display_filter.cljs$core$IFn$_invoke$arity$2 = display_filter__2;
return display_filter;
})()
;
/**
* Calculates the closest int value that is less than or equal to the
* value of the parameter. For example, (floor 9.03) returns the value 9.
*/
quil.core.floor = (function floor(n){return quil.sketch.current_applet.call(null).floor(n);
});
/**
* Returns a boolean value representing whether the applet has focus.
*/
quil.core.focused = (function focused(){return quil.sketch.current_applet.call(null).focused;
});
/**
* The system variable frameCount contains the number of frames
* displayed since the program started. Inside setup() the value is 0
* and and after the first iteration of draw it is 1, etc.
*/
quil.core.frame_count = (function frame_count(){return quil.sketch.current_applet.call(null).frameCount;
});
/**
* Returns the current framerate
*/
quil.core.current_frame_rate = (function current_frame_rate(){return quil.sketch.current_applet.call(null).__frameRate;
});
/**
* Specifies a new target framerate (number of frames to be displayed every
* second). If the processor is not fast enough to maintain the
* specified rate, it will not be achieved. For example, the function
* call (frame-rate 30) will attempt to refresh 30 times a second. It
* is recommended to set the frame rate within setup. The default rate
* is 60 frames per second.
*/
quil.core.frame_rate = (function frame_rate(new_rate){cljs.core.reset_BANG_.call(null,quil.sketch.current_applet.call(null).target_frame_rate,new_rate);
return quil.sketch.current_applet.call(null).frameRate(new_rate);
});
/**
* Sets a perspective matrix defined through the parameters. Works
* like glFrustum, except it wipes out the current perspective matrix
* rather than muliplying itself with it.
*/
quil.core.frustum = (function frustum(left,right,bottom,top,near,far){return quil.core.current_graphics.call(null).frustum(left,right,bottom,top,near,far);
});
/**
* Reads the color of any pixel or grabs a section of an image. If no
* parameters are specified, a copy of entire image is returned. Get the
* value of one pixel by specifying an x,y coordinate. Get a section of
* the image by specifying an additional width and height parameter.
* If the pixel requested is outside of the image window, black is returned.
* The numbers returned are scaled according to the current color ranges,
* but only RGB values are returned by this function. For example, even though
* you may have drawn a shape with (color-mode :hsb), the numbers returned
* will be in RGB.
* 
* Getting the color of a single pixel with (get x y) is easy, but not
* as fast as grabbing the data directly using the pixels fn.
* 
* If no img specified - current-graphics is used.
*/
quil.core.get_pixel = (function() {
var get_pixel = null;
var get_pixel__0 = (function (){return get_pixel.call(null,quil.core.current_graphics.call(null));
});
var get_pixel__1 = (function (img){return img.get();
});
var get_pixel__2 = (function (x,y){return get_pixel.call(null,quil.core.current_graphics.call(null),x,y);
});
var get_pixel__3 = (function (img,x,y){return img.get((x | (0)),(y | (0)));
});
var get_pixel__4 = (function (x,y,w,h){return get_pixel.call(null,quil.core.current_graphics.call(null),x,y,w,h);
});
var get_pixel__5 = (function (img,x,y,w,h){return img.get((x | (0)),(y | (0)),(w | (0)),(h | (0)));
});
get_pixel = function(img,x,y,w,h){
switch(arguments.length){
case 0:
return get_pixel__0.call(this);
case 1:
return get_pixel__1.call(this,img);
case 2:
return get_pixel__2.call(this,img,x);
case 3:
return get_pixel__3.call(this,img,x,y);
case 4:
return get_pixel__4.call(this,img,x,y,w);
case 5:
return get_pixel__5.call(this,img,x,y,w,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_pixel.cljs$core$IFn$_invoke$arity$0 = get_pixel__0;
get_pixel.cljs$core$IFn$_invoke$arity$1 = get_pixel__1;
get_pixel.cljs$core$IFn$_invoke$arity$2 = get_pixel__2;
get_pixel.cljs$core$IFn$_invoke$arity$3 = get_pixel__3;
get_pixel.cljs$core$IFn$_invoke$arity$4 = get_pixel__4;
get_pixel.cljs$core$IFn$_invoke$arity$5 = get_pixel__5;
return get_pixel;
})()
;
/**
* Extracts the green value from a color, scaled to match current
* color-mode. This value is always returned as a float so be careful
* not to assign it to an int value.
*/
quil.core.green = (function green(col){return quil.core.current_graphics.call(null).green((col | (0)));
});
/**
* Converts a byte, char, int, or color to a String containing the
* equivalent hexadecimal notation. For example color(0, 102, 153) will
* convert to the String "FF006699". This function can help make your
* geeky debugging sessions much happier.
*/
quil.core.hex = (function() {
var hex = null;
var hex__1 = (function (val){return quil.sketch.current_applet.call(null).hex(val);
});
var hex__2 = (function (val,num_digits){return quil.sketch.current_applet.call(null).hex(val,num_digits);
});
hex = function(val,num_digits){
switch(arguments.length){
case 1:
return hex__1.call(this,val);
case 2:
return hex__2.call(this,val,num_digits);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hex.cljs$core$IFn$_invoke$arity$1 = hex__1;
hex.cljs$core$IFn$_invoke$arity$2 = hex__2;
return hex;
})()
;
/**
* Height of the display window. The value of height is zero until
* size is called.
*/
quil.core.height = (function height(){return quil.sketch.current_applet.call(null).height;
});
/**
* Set various hints and hacks for the renderer. This is used to
* handle obscure rendering features that cannot be implemented in a
* consistent manner across renderers. Many options will often graduate
* to standard features instead of hints over time.
* 
* Options:
* 
* :enable-native-fonts - Use the native version fonts when they are
* installed, rather than the bitmapped version from a .vlw
* file. This is useful with the default (or JAVA2D) renderer
* setting, as it will improve font rendering speed. This is not
* enabled by default, because it can be misleading while testing
* because the type will look great on your machine (because you have
* the font installed) but lousy on others' machines if the identical
* font is unavailable. This option can only be set per-sketch, and
* must be called before any use of text-font.
* 
* :disable-native-fonts - Disables native font support.
* 
* :disable-depth-test - Disable the zbuffer, allowing you to draw on
* top of everything at will. When depth testing is disabled, items
* will be drawn to the screen sequentially, like a painting. This
* hint is most often used to draw in 3D, then draw in 2D on top of
* it (for instance, to draw GUI controls in 2D on top of a 3D
* interface). Starting in release 0149, this will also clear the
* depth buffer. Restore the default with :enable-depth-test
* but note that with the depth buffer cleared, any 3D drawing that
* happens later in draw will ignore existing shapes on the screen.
* 
* :enable-depth-test - Enables the zbuffer.
* 
* :enable-depth-sort - Enable primitive z-sorting of triangles and
* lines in :p3d and :opengl rendering modes. This can slow
* performance considerably, and the algorithm is not yet perfect.
* 
* :disable-depth-sort - Disables hint :enable-depth-sort
* 
* :disable-opengl-errors - Speeds up the OPENGL renderer setting
* by not checking for errors while running.
* 
* :enable-opengl-errors - Turns on OpenGL error checking
* 
* :enable-depth-mask
* :disable-depth-mask
* 
* :enable-optimized-stroke
* :disable-optimized-stroke
* :enable-retina-pixels
* :disable-retina-pixels
* :enable-stroke-perspective
* :disable-stroke-perspective
* :enable-stroke-pure
* :disable-stroke-pure
* :enable-texture-mipmaps
* :disable-texture-mipmaps
*/
quil.core.hint = (function hint(hint_type){var hint_type__$1 = (((hint_type instanceof cljs.core.Keyword))?cljs.core.get.call(null,quil.core.hint_options,hint_type):hint_type);return quil.core.current_graphics.call(null).hint((hint_type__$1 | (0)));
});
/**
* Returns the current hour as a value from 0 - 23.
*/
quil.core.hour = (function hour(){return quil.sketch.current_applet.call(null).hour();
});
/**
* Extracts the hue value from a color.
*/
quil.core.hue = (function hue(col){return quil.core.current_graphics.call(null).hue((col | (0)));
});
/**
* Displays images to the screen. Processing currently works with GIF,
* JPEG, and Targa images. The color of an image may be modified with
* the tint function and if a GIF has transparency, it will maintain
* its transparency. The img parameter specifies the image to display
* and the x and y parameters define the location of the image from its
* upper-left corner. The image is displayed at its original size
* unless the width and height parameters specify a different size. The
* image-mode fn changes the way the parameters work. A call to
* (image-mode :corners) will change the width and height parameters to
* define the x and y values of the opposite corner of the image.
* 
* Starting with release 0124, when using the default (JAVA2D)
* renderer, smooth will also improve image quality of resized
* images.
*/
quil.core.image = (function() {
var image = null;
var image__3 = (function (img,x,y){return quil.core.current_graphics.call(null).image(img,x,y);
});
var image__5 = (function (img,x,y,c,d){return quil.core.current_graphics.call(null).image(img,x,y,c,d);
});
image = function(img,x,y,c,d){
switch(arguments.length){
case 3:
return image__3.call(this,img,x,y);
case 5:
return image__5.call(this,img,x,y,c,d);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image.cljs$core$IFn$_invoke$arity$3 = image__3;
image.cljs$core$IFn$_invoke$arity$5 = image__5;
return image;
})()
;
/**
* Originally named filter in Processing Language.
* Filters given image with the specified mode and level.
* Level defines the quality of the filter and mode may be one of
* the following keywords:
* 
* :threshold - converts the image to black and white pixels depending
* if they are above or below the threshold defined by
* the level parameter. The level must be between
* 0.0 (black) and 1.0 (white). If no level is specified,
* 0.5 is used.
* :gray      - converts any colors in the image to grayscale
* equivalents. Doesn't work with level.
* :invert    - sets each pixel to its inverse value. Doesn't work with
* level.
* :posterize - limits each channel of the image to the number of
* colors specified as the level parameter. The parameter can
* be set to values between 2 and 255, but results are most
* noticeable in the lower ranges.
* :blur      - executes a Guassian blur with the level parameter
* specifying the extent of the blurring. If no level
* parameter is used, the blur is equivalent to Guassian
* blur of radius 1.
* :opaque    - sets the alpha channel to entirely opaque. Doesn't work
* with level.
* :erode     - reduces the light areas. Doesn't work with level.
* :dilate    - increases the light areas.  Doesn't work with level.
*/
quil.core.image_filter = (function() {
var image_filter = null;
var image_filter__2 = (function (img,mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes);return img.filter((mode__$1 | (0)));
});
var image_filter__3 = (function (img,mode,level){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes);return img.filter((mode__$1 | (0)),level);
});
image_filter = function(img,mode,level){
switch(arguments.length){
case 2:
return image_filter__2.call(this,img,mode);
case 3:
return image_filter__3.call(this,img,mode,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image_filter.cljs$core$IFn$_invoke$arity$2 = image_filter__2;
image_filter.cljs$core$IFn$_invoke$arity$3 = image_filter__3;
return image_filter;
})()
;
/**
* Modifies the location from which images draw. The default mode is :corner.
* Available modes are:
* 
* :corner  - specifies the location to be the upper left corner and
* uses the fourth and fifth parameters of image to set the
* image's width and height.
* 
* :corners - uses the second and third parameters of image to set the
* location of one corner of the image and uses the fourth
* and fifth parameters to set the opposite corner.
* 
* :center  - draw images centered at the given x and y position.
*/
quil.core.image_mode = (function image_mode(mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.image_modes);return quil.core.current_graphics.call(null).imageMode((mode__$1 | (0)));
});
/**
* The variable keyCode is used to detect special keys such as the UP,
* DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT. When checking
* for these keys, it's first necessary to check and see if the key is
* coded. This is done with the conditional (= (key) CODED).
* 
* The keys included in the ASCII specification (BACKSPACE, TAB, ENTER,
* RETURN, ESC, and DELETE) do not require checking to see if they key
* is coded, and you should simply use the key variable instead of
* key-code If you're making cross-platform projects, note that the
* ENTER key is commonly used on PCs and Unix and the RETURN key is
* used instead on Macintosh. Check for both ENTER and RETURN to make
* sure your program will work for all platforms.
* 
* For users familiar with Java, the values for UP and DOWN are simply
* shorter versions of Java's KeyEvent.VK_UP and
* KeyEvent.VK_DOWN. Other keyCode values can be found in the Java
* KeyEvent reference.
*/
quil.core.key_code = (function key_code(){return quil.sketch.current_applet.call(null).keyCode;
});
/**
* true if any key is currently pressed, false otherwise.
*/
quil.core.key_pressed_QMARK_ = (function key_pressed_QMARK_(){return quil.sketch.current_applet.call(null).keyPressed;
});
/**
* Sets the falloff rates for point lights, spot lights, and ambient
* lights. The parameters are used to determine the falloff with the
* following equation:
* 
* d = distance from light position to vertex position
* falloff = 1 / (CONSTANT + d * LINEAR + (d*d) * QUADRATIC)
* 
* Like fill, it affects only the elements which are created after it
* in the code. The default value is (light-falloff 1.0 0.0 0.0).
* Thinking about an ambient light with a falloff can be tricky. It is
* used, for example, if you wanted a region of your scene to be lit
* ambiently one color and another region to be lit ambiently by
* another color, you would use an ambient light with location and
* falloff. You can think of it as a point light that doesn't care
* which direction a surface is facing.
*/
quil.core.light_falloff = (function light_falloff(constant,linear,quadratic){return quil.core.current_graphics.call(null).lightFalloff(constant,linear,quadratic);
});
/**
* Calculates a color or colors between two color at a specific
* increment. The amt parameter is the amount to interpolate between
* the two values where 0.0 equal to the first point, 0.1 is very near
* the first point, 0.5 is half-way in between, etc.
*/
quil.core.lerp_color = (function lerp_color(c1,c2,amt){return quil.core.current_graphics.call(null).lerpColor((c1 | (0)),(c2 | (0)),amt);
});
/**
* Calculates a number between two numbers at a specific
* increment. The amt parameter is the amount to interpolate between
* the two values where 0.0 equal to the first point, 0.1 is very near
* the first point, 0.5 is half-way in between, etc. The lerp function
* is convenient for creating motion along a straight path and for
* drawing dotted lines.
*/
quil.core.lerp = (function lerp(start,stop,amt){return quil.sketch.current_applet.call(null).lerp(start,stop,amt);
});
/**
* Sets the default ambient light, directional light, falloff, and
* specular values. The defaults are:
* 
* (ambient-light 128 128 128)
* (directional-light 128 128 128 0 0 -1)
* (light-falloff 1 0 0)
* (light-specular 0 0 0).
* 
* Lights need to be included in the draw to remain persistent in a
* looping program. Placing them in the setup of a looping program
* will cause them to only have an effect the first time through the
* loop.
*/
quil.core.lights = (function lights(){return quil.core.current_graphics.call(null).lights();
});
/**
* Sets the specular color for lights. Like fill, it affects only the
* elements which are created after it in the code. Specular refers to
* light which bounces off a surface in a perferred direction (rather
* than bouncing in all directions like a diffuse light) and is used
* for creating highlights. The specular quality of a light interacts
* with the specular material qualities set through the specular and
* shininess functions.
*/
quil.core.light_specular = (function light_specular(r,g,b){return quil.core.current_graphics.call(null).lightSpecular(r,g,b);
});
/**
* Draws a line (a direct path between two points) to the screen. The
* version of line with four parameters draws the line in 2D. To color
* a line, use the stroke function. A line cannot be filled, therefore
* the fill method will not affect the color of a line. 2D lines are
* drawn with a width of one pixel by default, but this can be changed
* with the stroke-weight function. The version with six parameters
* allows the line to be placed anywhere within XYZ space.
*/
quil.core.line = (function() {
var line = null;
var line__2 = (function (p1,p2){return cljs.core.apply.call(null,line,cljs.core.concat.call(null,p1,p2));
});
var line__4 = (function (x1,y1,x2,y2){return quil.core.current_graphics.call(null).line(x1,y1,x2,y2);
});
var line__6 = (function (x1,y1,z1,x2,y2,z2){return quil.core.current_graphics.call(null).line(x1,y1,z1,x2,y2,z2);
});
line = function(x1,y1,z1,x2,y2,z2){
switch(arguments.length){
case 2:
return line__2.call(this,x1,y1);
case 4:
return line__4.call(this,x1,y1,z1,x2);
case 6:
return line__6.call(this,x1,y1,z1,x2,y2,z2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line.cljs$core$IFn$_invoke$arity$2 = line__2;
line.cljs$core$IFn$_invoke$arity$4 = line__4;
line.cljs$core$IFn$_invoke$arity$6 = line__6;
return line;
})()
;
/**
* Loads a font into a variable of type PFont. To load correctly,
* fonts must be located in the data directory of the current sketch.
* To create a font to use with Processing use the create-font fn.
* 
* Like load-image and other methods that load data, the load-font fn
* should not be used inside draw, because it will slow down the sketch
* considerably, as the font will be re-loaded from the disk (or
* network) on each frame.
* 
* For most renderers, Processing displays fonts using the .vlw font
* format, which uses images for each letter, rather than defining them
* through vector data. When hint :enable-native-fonts is used with the
* JAVA2D renderer, the native version of a font will be used if it is
* installed on the user's machine.
* 
* Using create-font (instead of load-font) enables vector data to be
* used with the JAVA2D (default) renderer setting. This can be helpful
* when many font sizes are needed, or when using any renderer based on
* JAVA2D, such as the PDF library.
*/
quil.core.load_font = (function load_font(filename){return quil.sketch.current_applet.call(null).loadFont((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)));
});
/**
* Loads an image into a variable of type PImage. Four types of
* images ( .gif, .jpg, .tga, .png) images may be loaded. To load
* correctly, images must be located in the data directory of the
* current sketch. In most cases, load all images in setup to preload
* them at the start of the program. Loading images inside draw will
* reduce the speed of a program.
* 
* The filename parameter can also be a URL to a file found online.
* 
* If an image is not loaded successfully, the null value is returned
* and an error message will be printed to the console. The error
* message does not halt the program, however the null value may cause
* a NullPointerException if your code does not check whether the value
* returned from load-image is nil.
* 
* Depending on the type of error, a PImage object may still be
* returned, but the width and height of the image will be set to
* -1. This happens if bad image data is returned or cannot be decoded
* properly. Sometimes this happens with image URLs that produce a 403
* error or that redirect to a password prompt, because load-image
* will attempt to interpret the HTML as image data.
*/
quil.core.load_image = (function load_image(filename){return quil.sketch.current_applet.call(null).loadImage((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)));
});
/**
* Loads a shader into the PShader object. Shaders are compatible with the
* P2D and P3D renderers, but not with the default renderer.
*/
quil.core.load_shader = (function() {
var load_shader = null;
var load_shader__1 = (function (fragment_filename){return quil.core.current_graphics.call(null).loadShader(fragment_filename);
});
var load_shader__2 = (function (fragment_filename,vertex_filename){return quil.core.current_graphics.call(null).loadShader(fragment_filename,vertex_filename);
});
load_shader = function(fragment_filename,vertex_filename){
switch(arguments.length){
case 1:
return load_shader__1.call(this,fragment_filename);
case 2:
return load_shader__2.call(this,fragment_filename,vertex_filename);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
load_shader.cljs$core$IFn$_invoke$arity$1 = load_shader__1;
load_shader.cljs$core$IFn$_invoke$arity$2 = load_shader__2;
return load_shader;
})()
;
/**
* Load a geometry from a file as a PShape.
*/
quil.core.load_shape = (function load_shape(filename){return quil.sketch.current_applet.call(null).loadShape(filename);
});
/**
* Calculates the natural logarithm (the base-e logarithm) of a
* number. This function expects the values greater than 0.0.
*/
quil.core.log = (function log(val){return quil.sketch.current_applet.call(null).log(val);
});
/**
* Calculates the magnitude (or length) of a vector. A vector is a
* direction in space commonly used in computer graphics and linear
* algebra. Because it has no start position, the magnitude of a vector
* can be thought of as the distance from coordinate (0,0) to its (x,y)
* value. Therefore, mag is a shortcut for writing (dist 0 0 x y).
*/
quil.core.mag = (function() {
var mag = null;
var mag__2 = (function (a,b){return quil.sketch.current_applet.call(null).mag(a,b);
});
var mag__3 = (function (a,b,c){return quil.sketch.current_applet.call(null).mag(a,b,c);
});
mag = function(a,b,c){
switch(arguments.length){
case 2:
return mag__2.call(this,a,b);
case 3:
return mag__3.call(this,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mag.cljs$core$IFn$_invoke$arity$2 = mag__2;
mag.cljs$core$IFn$_invoke$arity$3 = mag__3;
return mag;
})()
;
/**
* Re-maps a number from one range to another.
* 
* Numbers outside the range are not clamped to 0 and 1, because
* out-of-range values are often intentional and useful.
*/
quil.core.map_range = (function map_range(val,low1,high1,low2,high2){return quil.sketch.current_applet.call(null).map(val,low1,high1,low2,high2);
});
/**
* Returns the number of milliseconds (thousandths of a second) since
* starting the sketch. This information is often used for timing
* animation sequences.
*/
quil.core.millis = (function millis(){return quil.sketch.current_applet.call(null).millis();
});
/**
* Returns the current minute as a value from 0 - 59
*/
quil.core.minute = (function minute(){return quil.sketch.current_applet.call(null).minute();
});
/**
* Returns the three-dimensional x, y, z position in model space. This
* returns the x value for a given coordinate based on the current set
* of transformations (scale, rotate, translate, etc.) The x value can
* be used to place an object in space relative to the location of the
* original point once the transformations are no longer in use.
*/
quil.core.model_x = (function model_x(x,y,z){return quil.core.current_graphics.call(null).modelX(x,y,z);
});
/**
* Returns the three-dimensional x, y, z position in model space. This
* returns the y value for a given coordinate based on the current set
* of transformations (scale, rotate, translate, etc.) The y value can
* be used to place an object in space relative to the location of the
* original point once the transformations are no longer in use.
*/
quil.core.model_y = (function model_y(x,y,z){return quil.core.current_graphics.call(null).modelY(x,y,z);
});
/**
* Returns the three-dimensional x, y, z position in model space. This
* returns the z value for a given coordinate based on the current set
* of transformations (scale, rotate, translate, etc.) The z value can
* be used to place an object in space relative to the location of the
* original point once the transformations are no longer in use.
*/
quil.core.model_z = (function model_z(x,y,z){return quil.core.current_graphics.call(null).modelZ(x,y,z);
});
/**
* Returns the current month as a value from 1 - 12.
*/
quil.core.month = (function month(){return quil.sketch.current_applet.call(null).month();
});
/**
* The value of the system variable mouseButton is either :left, :right,
* or :center depending on which button is pressed. nil if no button pressed
*/
quil.core.mouse_button = (function mouse_button(){var button_code = quil.sketch.current_applet.call(null).mouseButton;var pred__10547 = cljs.core._EQ_;var expr__10548 = button_code;if(cljs.core.truth_(pred__10547.call(null,(37),expr__10548)))
{return new cljs.core.Keyword(null,"left","left",-399115937);
} else
{if(cljs.core.truth_(pred__10547.call(null,(39),expr__10548)))
{return new cljs.core.Keyword(null,"right","right",-452581833);
} else
{if(cljs.core.truth_(pred__10547.call(null,(3),expr__10548)))
{return new cljs.core.Keyword(null,"center","center",-748944368);
} else
{return null;
}
}
}
});
/**
* Variable storing if a mouse button is pressed. The value of the
* system variable mousePressed is true if a mouse button is pressed
* and false if a button is not pressed.
*/
quil.core.mouse_pressed_QMARK_ = (function mouse_pressed_QMARK_(){return quil.sketch.current_applet.call(null).mousePressed;
});
/**
* Current horizontal coordinate of the mouse.
*/
quil.core.mouse_x = (function mouse_x(){return quil.sketch.current_applet.call(null).mouseX;
});
/**
* Current vertical coordinate of the mouse.
*/
quil.core.mouse_y = (function mouse_y(){return quil.sketch.current_applet.call(null).mouseY;
});
/**
* Hides the cursor from view. Will not work when running the in full
* screen (Present) mode.
*/
quil.core.no_cursor = (function no_cursor(){return quil.sketch.current_applet.call(null).noCursor();
});
/**
* Disables filling geometry. If both no-stroke and no-fill are called,
* nothing will be drawn to the screen.
*/
quil.core.no_fill = (function no_fill(){return quil.core.current_graphics.call(null).noFill();
});
/**
* Returns the Perlin noise value at specified coordinates. Perlin
* noise is a random sequence generator producing a more natural
* ordered, harmonic succession of numbers compared to the standard
* random function. It was invented by Ken Perlin in the 1980s and
* been used since in graphical applications to produce procedural
* textures, natural motion, shapes, terrains etc.
* 
* The main difference to the random function is that Perlin noise is
* defined in an infinite n-dimensional space where each pair of
* coordinates corresponds to a fixed semi-random value (fixed only for
* the lifespan of the program). The resulting value will always be
* between 0.0 and 1.0. Processing can compute 1D, 2D and 3D noise,
* depending on the number of coordinates given. The noise value can be
* animated by moving through the noise space and the 2nd and 3rd
* dimensions can also be interpreted as time.
* 
* The actual noise is structured similar to an audio signal, in
* respect to the function's use of frequencies. Similar to the concept
* of harmonics in physics, perlin noise is computed over several
* octaves which are added together for the final result.
* 
* Another way to adjust the character of the resulting sequence is the
* scale of the input coordinates. As the function works within an
* infinite space the value of the coordinates doesn't matter as such,
* only the distance between successive coordinates does (eg. when
* using noise within a loop). As a general rule the smaller the
* difference between coordinates, the smoother the resulting noise
* sequence will be. Steps of 0.005-0.03 work best for most
* applications, but this will differ depending on use.
*/
quil.core.noise = (function() {
var noise = null;
var noise__1 = (function (x){return quil.sketch.current_applet.call(null).noise(x);
});
var noise__2 = (function (x,y){return quil.sketch.current_applet.call(null).noise(x,y);
});
var noise__3 = (function (x,y,z){return quil.sketch.current_applet.call(null).noise(x,y,z);
});
noise = function(x,y,z){
switch(arguments.length){
case 1:
return noise__1.call(this,x);
case 2:
return noise__2.call(this,x,y);
case 3:
return noise__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noise.cljs$core$IFn$_invoke$arity$1 = noise__1;
noise.cljs$core$IFn$_invoke$arity$2 = noise__2;
noise.cljs$core$IFn$_invoke$arity$3 = noise__3;
return noise;
})()
;
/**
* Adjusts the character and level of detail produced by the Perlin
* noise function. Similar to harmonics in physics, noise is computed
* over several octaves. Lower octaves contribute more to the output
* signal and as such define the overal intensity of the noise, whereas
* higher octaves create finer grained details in the noise
* sequence. By default, noise is computed over 4 octaves with each
* octave contributing exactly half than its predecessor, starting at
* 50% strength for the 1st octave. This falloff amount can be changed
* by adding an additional function parameter. Eg. a falloff factor of
* 0.75 means each octave will now have 75% impact (25% less) of the
* previous lower octave. Any value between 0.0 and 1.0 is valid,
* however note that values greater than 0.5 might result in greater
* than 1.0 values returned by noise.
* 
* By changing these parameters, the signal created by the noise
* function can be adapted to fit very specific needs and
* characteristics.
*/
quil.core.noise_detail = (function() {
var noise_detail = null;
var noise_detail__1 = (function (octaves){return quil.sketch.current_applet.call(null).noiseDetail((octaves | (0)));
});
var noise_detail__2 = (function (octaves,falloff){return quil.sketch.current_applet.call(null).noiseDetail((octaves | (0)),falloff);
});
noise_detail = function(octaves,falloff){
switch(arguments.length){
case 1:
return noise_detail__1.call(this,octaves);
case 2:
return noise_detail__2.call(this,octaves,falloff);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noise_detail.cljs$core$IFn$_invoke$arity$1 = noise_detail__1;
noise_detail.cljs$core$IFn$_invoke$arity$2 = noise_detail__2;
return noise_detail;
})()
;
/**
* Sets the seed value for noise. By default, noise produces different
* results each time the program is run. Set the value parameter to a
* constant to return the same pseudo-random numbers each time the
* software is run.
*/
quil.core.noise_seed = (function noise_seed(val){return quil.sketch.current_applet.call(null).noiseSeed((val | (0)));
});
/**
* Disable all lighting. Lighting is turned off by default and enabled
* with the lights fn. This function can be used to disable lighting so
* that 2D geometry (which does not require lighting) can be drawn
* after a set of lighted 3D geometry.
*/
quil.core.no_lights = (function no_lights(){return quil.core.current_graphics.call(null).noLights();
});
/**
* Stops Processing from continuously executing the code within
* draw. If start-loop is called, the code in draw will begin to run
* continuously again. If using no-loop in setup, it should be the last
* line inside the block.
* 
* When no-loop is used, it's not possible to manipulate or access the
* screen inside event handling functions such as mouse-pressed or
* key-pressed. Instead, use those functions to call redraw or
* loop which will run draw, which can update the screen
* properly. This means that when no-loop has been called, no drawing
* can happen, and functions like save-frame may not be used.
* 
* Note that if the sketch is resized, redraw will be called to
* update the sketch, even after no-oop has been
* specified. Otherwise, the sketch would enter an odd state until
* loop was called.
*/
quil.core.no_loop = (function no_loop(){return quil.sketch.current_applet.call(null).noLoop();
});
/**
* Normalize a value to exist between 0 and 1 (inclusive).
*/
quil.core.norm = (function norm(val,start,stop){return quil.sketch.current_applet.call(null).norm(val,start,stop);
});
/**
* Sets the current normal vector. This is for drawing three
* dimensional shapes and surfaces and specifies a vector perpendicular
* to the surface of the shape which determines how lighting affects
* it. Processing attempts to automatically assign normals to shapes,
* but since that's imperfect, this is a better option when you want
* more control. This function is identical to glNormal3f() in OpenGL.
*/
quil.core.normal = (function normal(nx,ny,nz){return quil.core.current_graphics.call(null).normal(nx,ny,nz);
});
/**
* Draws all geometry with jagged (aliased) edges.
*/
quil.core.no_smooth = (function no_smooth(){return quil.core.current_graphics.call(null).noSmooth();
});
/**
* Disables drawing the stroke (outline). If both no-stroke and
* no-fill are called, nothing will be drawn to the screen.
*/
quil.core.no_stroke = (function no_stroke(){return quil.core.current_graphics.call(null).noStroke();
});
/**
* Removes the current fill value for displaying images and reverts to
* displaying images with their original hues.
*/
quil.core.no_tint = (function no_tint(){return quil.core.current_graphics.call(null).noTint();
});
/**
* Sets an orthographic projection and defines a parallel clipping
* volume. All objects with the same dimension appear the same size,
* regardless of whether they are near or far from the camera. The
* parameters to this function specify the clipping volume where left
* and right are the minimum and maximum x values, top and bottom are
* the minimum and maximum y values, and near and far are the minimum
* and maximum z values. If no parameters are given, the default is
* used: (ortho 0 width 0 height -10 10)
*/
quil.core.ortho = (function() {
var ortho = null;
var ortho__0 = (function (){return quil.core.current_graphics.call(null).ortho();
});
var ortho__4 = (function (left,right,bottom,top){return quil.core.current_graphics.call(null).ortho(left,right,bottom,top);
});
var ortho__6 = (function (left,right,bottom,top,near,far){return quil.core.current_graphics.call(null).ortho(left,right,bottom,top,near,far);
});
ortho = function(left,right,bottom,top,near,far){
switch(arguments.length){
case 0:
return ortho__0.call(this);
case 4:
return ortho__4.call(this,left,right,bottom,top);
case 6:
return ortho__6.call(this,left,right,bottom,top,near,far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ortho.cljs$core$IFn$_invoke$arity$0 = ortho__0;
ortho.cljs$core$IFn$_invoke$arity$4 = ortho__4;
ortho.cljs$core$IFn$_invoke$arity$6 = ortho__6;
return ortho;
})()
;
/**
* Sets a perspective projection applying foreshortening, making
* distant objects appear smaller than closer ones. The parameters
* define a viewing volume with the shape of truncated pyramid. Objects
* near to the front of the volume appear their actual size, while
* farther objects appear smaller. This projection simulates the
* perspective of the world more accurately than orthographic
* projection. The version of perspective without parameters sets the
* default perspective and the version with four parameters allows the
* programmer to set the area precisely. The default values are:
* perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0) where
* cameraZ is ((height/2.0) / tan(PI*60.0/360.0));
*/
quil.core.perspective = (function() {
var perspective = null;
var perspective__0 = (function (){return quil.core.current_graphics.call(null).perspective();
});
var perspective__4 = (function (fovy,aspect,z_near,z_far){return quil.core.current_graphics.call(null).perspective(fovy,aspect,z_near,z_far);
});
perspective = function(fovy,aspect,z_near,z_far){
switch(arguments.length){
case 0:
return perspective__0.call(this);
case 4:
return perspective__4.call(this,fovy,aspect,z_near,z_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
perspective.cljs$core$IFn$_invoke$arity$0 = perspective__0;
perspective.cljs$core$IFn$_invoke$arity$4 = perspective__4;
return perspective;
})()
;
/**
* Array containing the values for all the pixels in the display
* window or image. This array is therefore the size of the display window. If
* this array is modified, the update-pixels fn must be called to update
* the changes. Calls .loadPixels before obtaining the pixel array.
* 
* Only works with P2D and P3D renderer if used without arguments.
*/
quil.core.pixels = (function() {
var pixels = null;
var pixels__0 = (function (){return pixels.call(null,quil.core.current_graphics.call(null));
});
var pixels__1 = (function (img){img.loadPixels();
return img.pixels;
});
pixels = function(img){
switch(arguments.length){
case 0:
return pixels__0.call(this);
case 1:
return pixels__1.call(this,img);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pixels.cljs$core$IFn$_invoke$arity$0 = pixels__0;
pixels.cljs$core$IFn$_invoke$arity$1 = pixels__1;
return pixels;
})()
;
/**
* Horizontal coordinate of the mouse in the previous frame
*/
quil.core.pmouse_x = (function pmouse_x(){return quil.sketch.current_applet.call(null).pmouseX;
});
/**
* Vertical coordinate of the mouse in the previous frame
*/
quil.core.pmouse_y = (function pmouse_y(){return quil.sketch.current_applet.call(null).pmouseY;
});
/**
* Draws a point, a coordinate in space at the dimension of one
* pixel. The first parameter is the horizontal value for the point,
* the second value is the vertical value for the point, and the
* optional third value is the depth value. Drawing this shape in 3D
* using the z parameter requires the :P3D or :opengl renderer to be
* used.
*/
quil.core.point = (function() {
var point = null;
var point__2 = (function (x,y){return quil.core.current_graphics.call(null).point(x,y);
});
var point__3 = (function (x,y,z){return quil.core.current_graphics.call(null).point(x,y,z);
});
point = function(x,y,z){
switch(arguments.length){
case 2:
return point__2.call(this,x,y);
case 3:
return point__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
point.cljs$core$IFn$_invoke$arity$2 = point__2;
point.cljs$core$IFn$_invoke$arity$3 = point__3;
return point;
})()
;
/**
* Adds a point light. Lights need to be included in the draw() to
* remain persistent in a looping program. Placing them in the setup()
* of a looping program will cause them to only have an effect the
* first time through the loop. The affect of the r, g, and b
* parameters is determined by the current color mode. The x, y, and z
* parameters set the position of the light
*/
quil.core.point_light = (function point_light(r,g,b,x,y,z){return quil.core.current_graphics.call(null).pointLight(r,g,b,x,y,z);
});
/**
* Pops the current transformation matrix off the matrix
* stack. Understanding pushing and popping requires understanding the
* concept of a matrix stack. The push-matrix fn saves the current
* coordinate system to the stack and pop-matrix restores the prior
* coordinate system. push-matrix and pop-matrix are used in conjuction
* with the other transformation methods and may be embedded to control
* the scope of the transformations.
*/
quil.core.pop_matrix = (function pop_matrix(){return quil.core.current_graphics.call(null).popMatrix();
});
/**
* Restores the prior settings on the 'style stack'. Used in
* conjunction with push-style. Together they allow you to change the
* style settings and later return to what you had. When a new style is
* started with push-style, it builds on the current style information.
* The push-style and pop-style functions can be nested to provide more
* control
*/
quil.core.pop_style = (function pop_style(){return quil.core.current_graphics.call(null).popStyle();
});
/**
* Facilitates exponential expressions. The pow() function is an
* efficient way of multiplying numbers by themselves (or their
* reciprocal) in large quantities. For example, (pow 3 5) is
* equivalent to the expression (* 3 3 3 3 3) and (pow 3 -5) is
* equivalent to (/ 1 (* 3 3 3 3 3)).
*/
quil.core.pow = (function pow(num,exponent){return quil.sketch.current_applet.call(null).pow(num,exponent);
});
/**
* Prints the current camera matrix to std out. Useful for debugging.
*/
quil.core.print_camera = (function print_camera(){return quil.core.current_graphics.call(null).printCamera();
});
/**
* Prints the current matrix to std out. Useful for debugging.
*/
quil.core.print_matrix = (function print_matrix(){return quil.core.current_graphics.call(null).printMatrix();
});
/**
* Prints the current projection matrix to std out. Useful for
* debugging
*/
quil.core.print_projection = (function print_projection(){return quil.core.current_graphics.call(null).printProjection();
});
/**
* Pushes the current transformation matrix onto the matrix
* stack. Understanding push-matrix and pop-matrix requires
* understanding the concept of a matrix stack. The push-matrix
* function saves the current coordinate system to the stack and
* pop-matrix restores the prior coordinate system. push-matrix and
* pop-matrix are used in conjuction with the other transformation
* methods and may be embedded to control the scope of the
* transformations.
*/
quil.core.push_matrix = (function push_matrix(){return quil.core.current_graphics.call(null).pushMatrix();
});
/**
* Saves the current style settings onto a 'style stack'. Use with
* pop-style which restores the prior settings. Note that these
* functions are always used together. They allow you to change the
* style settings and later return to what you had. When a new style is
* started with push-style, it builds on the current style
* information. The push-style and pop-style fns can be embedded to
* provide more control.
* 
* The style information controlled by the following functions are
* included in the style: fill, stroke, tint, stroke-weight,
* stroke-cap, stroke-join, image-mode, rect-mode, ellipse-mode,
* shape-mode, color-mode, text-align, text-font, text-mode, text-size,
* text-leading, emissive, specular, shininess, and ambient
*/
quil.core.push_style = (function push_style(){return quil.core.current_graphics.call(null).pushStyle();
});
/**
* A quad is a quadrilateral, a four sided polygon. It is similar to a
* rectangle, but the angles between its edges are not constrained to
* be ninety degrees. The first pair of parameters (x1,y1) sets the
* first vertex and the subsequent pairs should proceed clockwise or
* counter-clockwise around the defined shape.
*/
quil.core.quad = (function quad(x1,y1,x2,y2,x3,y3,x4,y4){return quil.core.current_graphics.call(null).quad(x1,y1,x2,y2,x3,y3,x4,y4);
});
/**
* Specifies vertex coordinates for quadratic Bezier curves. Each call to
* quadratic-vertex defines the position of one control points and one
* anchor point of a Bezier curve, adding a new segment to a line or shape.
* The first time quadratic-vertex is used within a begin-shape call, it
* must be prefaced with a call to vertex to set the first anchor point.
* This function must be used between begin-shape and end-shape and only
* when there is no MODE parameter specified to begin-shape. Using the 3D
* version requires rendering with :p3d.
*/
quil.core.quadratic_vertex = (function() {
var quadratic_vertex = null;
var quadratic_vertex__4 = (function (cx,cy,x3,y3){return quil.core.current_graphics.call(null).quadraticVertex(cx,cy,x3,y3);
});
var quadratic_vertex__6 = (function (cx,cy,cz,x3,y3,z3){return quil.core.current_graphics.call(null).quadraticVertex(cx,cy,cz,x3,y3,z3);
});
quadratic_vertex = function(cx,cy,cz,x3,y3,z3){
switch(arguments.length){
case 4:
return quadratic_vertex__4.call(this,cx,cy,cz,x3);
case 6:
return quadratic_vertex__6.call(this,cx,cy,cz,x3,y3,z3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quadratic_vertex.cljs$core$IFn$_invoke$arity$4 = quadratic_vertex__4;
quadratic_vertex.cljs$core$IFn$_invoke$arity$6 = quadratic_vertex__6;
return quadratic_vertex;
})()
;
/**
* Converts a degree measurement to its corresponding value in
* radians. Radians and degrees are two ways of measuring the same
* thing. There are 360 degrees in a circle and 2*PI radians in a
* circle. For example, 90° = PI/2 = 1.5707964. All trigonometric
* methods in Processing require their parameters to be specified in
* radians.
*/
quil.core.radians = (function radians(degrees){return quil.sketch.current_applet.call(null).radians(degrees);
});
/**
* Generates random numbers. Each time the random function is called,
* it returns an unexpected value within the specified range. If one
* parameter is passed to the function it will return a float between
* zero and the value of the high parameter. The function call (random
* 5) returns values between 0 and 5 (starting at zero, up to but not
* including 5). If two parameters are passed, it will return a float
* with a value between the the parameters. The function call
* (random -5 10.2) returns values starting at -5 up to (but not
* including) 10.2.
*/
quil.core.random = (function() {
var random = null;
var random__1 = (function (max){return quil.sketch.current_applet.call(null).random(max);
});
var random__2 = (function (min,max){return quil.sketch.current_applet.call(null).random(min,max);
});
random = function(min,max){
switch(arguments.length){
case 1:
return random__1.call(this,min);
case 2:
return random__2.call(this,min,max);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random.cljs$core$IFn$_invoke$arity$1 = random__1;
random.cljs$core$IFn$_invoke$arity$2 = random__2;
return random;
})()
;
/**
* Returns a float from a random series of numbers having a mean of 0 and
* standard deviation of 1. Each time the randomGaussian() function is called,
* it returns a number fitting a Gaussian, or normal, distribution.
* There is theoretically no minimum or maximum value that randomGaussian()
* might return. Rather, there is just a very low probability that values far
* from the mean will be returned; and a higher probability that numbers near
* the mean will be returned. .
*/
quil.core.random_gaussian = (function random_gaussian(){return quil.sketch.current_applet.call(null).randomGaussian();
});
/**
* Sets the seed value for random. By default, random produces
* different results each time the program is run. Set the value
* parameter to a constant to return the same pseudo-random numbers
* each time the software is run.
*/
quil.core.random_seed = (function random_seed(w){return quil.sketch.current_applet.call(null).randomSeed(w);
});
/**
* Contains the value of the most recent key on the keyboard that was
* used (either pressed or released).
* 
* For non-ASCII keys, use the keyCode variable. The keys included in
* the ASCII specification (BACKSPACE, TAB, ENTER, RETURN, ESC, and
* DELETE) do not require checking to see if they key is coded, and you
* should simply use the key variable instead of keyCode If you're
* making cross-platform projects, note that the ENTER key is commonly
* used on PCs and Unix and the RETURN key is used instead on
* Macintosh. Check for both ENTER and RETURN to make sure your program
* will work for all platforms.
*/
quil.core.raw_key = (function raw_key(){return quil.sketch.current_applet.call(null).key;
});
/**
* Draws a rectangle to the screen. A rectangle is a four-sided shape
* with every angle at ninety degrees. By default, the first two
* parameters set the location of the upper-left corner, the third
* sets the width, and the fourth sets the height. These parameters
* may be changed with rect-mode.
* 
* To draw a rounded rectangle, add a fifth parameter, which is used as
* the radius value for all four corners. To use a different radius value
* for each corner, include eight parameters.
*/
quil.core.rect = (function() {
var rect = null;
var rect__4 = (function (x,y,width,height){return quil.core.current_graphics.call(null).rect(x,y,width,height);
});
var rect__5 = (function (x,y,width,height,r){return quil.core.current_graphics.call(null).rect(x,y,width,height,r);
});
var rect__8 = (function (x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r){return quil.core.current_graphics.call(null).rect(x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r);
});
rect = function(x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r){
switch(arguments.length){
case 4:
return rect__4.call(this,x,y,width,height);
case 5:
return rect__5.call(this,x,y,width,height,top_left_r);
case 8:
return rect__8.call(this,x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rect.cljs$core$IFn$_invoke$arity$4 = rect__4;
rect.cljs$core$IFn$_invoke$arity$5 = rect__5;
rect.cljs$core$IFn$_invoke$arity$8 = rect__8;
return rect;
})()
;
/**
* Modifies the location from which rectangles draw. The default mode
* is :corner. Available modes are:
* 
* 
* :corner  - Specifies the location to be the upper left corner of the
* shape and uses the third and fourth parameters of rect to
* specify the width and height.
* 
* :corners - Uses the first and second parameters of rect to set the
* location of one corner and uses the third and fourth
* parameters to set the opposite corner.
* 
* :center  - Draws the image from its center point and uses the third
* and forth parameters of rect to specify the image's width
* and height.
* 
* :radius  - Draws the image from its center point and uses the third
* and forth parameters of rect() to specify half of the
* image's width and height.
*/
quil.core.rect_mode = (function rect_mode(mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.rect_modes);return quil.core.current_graphics.call(null).rectMode((mode__$1 | (0)));
});
/**
* Extracts the red value from a color, scaled to match current color-mode.
*/
quil.core.red = (function red(c){return quil.core.current_graphics.call(null).red((c | (0)));
});
/**
* Executes the code within the draw fn one time. This functions
* allows the program to update the display window only when necessary,
* for example when an event registered by mouse-pressed or
* key-pressed occurs.
* 
* In structuring a program, it only makes sense to call redraw
* within events such as mouse-pressed. This is because redraw does
* not run draw immediately (it only sets a flag that indicates an
* update is needed).
* 
* Calling redraw within draw has no effect because draw is
* continuously called anyway.
*/
quil.core.redraw = (function redraw(){return quil.sketch.current_applet.call(null).redraw();
});
/**
* This function load images on a separate thread so that your sketch
* does not freeze while images load during setup. While the image is
* loading, its width and height will be 0. If an error occurs while
* loading the image, its width and height will be set to -1. You'll
* know when the image has loaded properly because its width and height
* will be greater than 0. Asynchronous image loading (particularly
* when downloading from a server) can dramatically improve
* performance.
*/
quil.core.request_image = (function request_image(filename){return quil.sketch.current_applet.call(null).requestImage((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)));
});
/**
* Replaces the current matrix with the identity matrix. The
* equivalent function in OpenGL is glLoadIdentity()
*/
quil.core.reset_matrix = (function reset_matrix(){return quil.core.current_graphics.call(null).resetMatrix();
});
/**
* Resize the image to a new width and height.
* To make the image scale proportionally, use 0 as the value for the wide or
* high parameter. For instance, to make the width of an image 150 pixels,
* and change the height using the same proportion, use resize(150, 0).
* 
* Even though a PGraphics is technically a PImage, it is not possible
* to rescale the image data found in a PGraphics.
* (It's simply not possible to do this consistently across renderers:
* technically infeasible with P3D, or what would it even do with PDF?)
* If you want to resize PGraphics content, first get a copy of its image data
* using the get() method, and call resize() on the PImage that is returned.
*/
quil.core.resize = (function resize(img,w,h){return img.resize(w,h);
});
/**
* Rotates a shape the amount specified by the angle parameter. Angles
* should be specified in radians (values from 0 to TWO-PI) or
* converted to radians with the radians function.
* 
* Objects are always rotated around their relative position to the
* origin and positive numbers rotate objects in a clockwise
* direction. Transformations apply to everything that happens after
* and subsequent calls to the function accumulates the effect. For
* example, calling (rotate HALF-PI) and then (rotate HALF-PI) is the
* same as (rotate PI). All tranformations are reset when draw begins
* again.
* 
* Technically, rotate multiplies the current transformation matrix by
* a rotation matrix. This function can be further controlled by the
* push-matrix and pop-matrix.
*/
quil.core.rotate = (function() {
var rotate = null;
var rotate__1 = (function (angle){return quil.core.current_graphics.call(null).rotate(angle);
});
var rotate__4 = (function (angle,vx,vy,vz){return quil.core.current_graphics.call(null).rotate(angle,vx,vy,vz);
});
rotate = function(angle,vx,vy,vz){
switch(arguments.length){
case 1:
return rotate__1.call(this,angle);
case 4:
return rotate__4.call(this,angle,vx,vy,vz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rotate.cljs$core$IFn$_invoke$arity$1 = rotate__1;
rotate.cljs$core$IFn$_invoke$arity$4 = rotate__4;
return rotate;
})()
;
/**
* Rotates a shape around the x-axis the amount specified by the angle
* parameter. Angles should be specified in radians (values from 0 to
* (* PI 2)) or converted to radians with the radians function. Objects
* are always rotated around their relative position to the origin and
* positive numbers rotate objects in a counterclockwise
* direction. Transformations apply to everything that happens after
* and subsequent calls to the function accumulates the effect. For
* example, calling (rotate-x HALF-PI) and then (rotate-x HALF-PI) is
* the same as (rotate-x PI). If rotate-x is called within the draw fn,
* the transformation is reset when the loop begins again. This
* function requires either the :p3d or :opengl renderer.
*/
quil.core.rotate_x = (function rotate_x(angle){return quil.core.current_graphics.call(null).rotateX(angle);
});
/**
* Rotates a shape around the y-axis the amount specified by the angle
* parameter. Angles should be specified in radians (values from 0
* to (* PI 2)) or converted to radians with the radians function.
* Objects are always rotated around their relative position to the
* origin and positive numbers rotate objects in a counterclockwise
* direction. Transformations apply to everything that happens after
* and subsequent calls to the function accumulates the effect. For
* example, calling (rotate-y HALF-PI) and then (rotate-y HALF-PI) is
* the same as (rotate-y PI). If rotate-y is called within the draw fn,
* the transformation is reset when the loop begins again. This
* function requires either the :p3d or :opengl renderer.
*/
quil.core.rotate_y = (function rotate_y(angle){return quil.core.current_graphics.call(null).rotateY(angle);
});
/**
* Rotates a shape around the z-axis the amount specified by the angle
* parameter. Angles should be specified in radians (values from 0
* to (* PI 2)) or converted to radians with the radians function.
* Objects are always rotated around their relative position to the
* origin and positive numbers rotate objects in a counterclockwise
* direction. Transformations apply to everything that happens after
* and subsequent calls to the function accumulates the effect. For
* example, calling (rotate-z HALF-PI) and then (rotate-z HALF-PI) is
* the same as (rotate-z PI). If rotate-y is called within the draw fn,
* the transformation is reset when the loop begins again. This
* function requires either the :p3d or :opengl renderer.
*/
quil.core.rotate_z = (function rotate_z(angle){return quil.core.current_graphics.call(null).rotateZ(angle);
});
/**
* Calculates the integer closest to the value parameter. For example,
* (round 9.2) returns the value 9.
*/
quil.core.round = (function round(val){return quil.sketch.current_applet.call(null).round(val);
});
/**
* Extracts the saturation value from a color.
*/
quil.core.saturation = (function saturation(c){return quil.core.current_graphics.call(null).saturation((c | (0)));
});
/**
* Saves an image from the display window. Images are saved in TIFF,
* TARGA, JPEG, and PNG format depending on the extension within the
* filename parameter. For example, image.tif will have a TIFF image
* and image.png will save a PNG image. If no extension is included in
* the filename, the image will save in TIFF format and .tif will be
* added to the name. All images saved from the main drawing window
* will be opaque. To save images without a background, use
* create-graphics.
*/
quil.core.save = (function save(filename){return quil.core.current_graphics.call(null).save((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)));
});
/**
* Saves an image identical to the current display window as a
* file. May be called multple times - each file saved will have a
* unique name. Name and image formate may be modified by passing a
* string parameter of the form "foo-####.ext" where foo- can be any
* arbitrary string, #### will be replaced with the current frame id
* and .ext is one of .tiff, .targa, .png, .jpeg or .jpg
* 
* Examples:
* (save-frame)
* (save-frame "pretty-pic-####.jpg")
*/
quil.core.save_frame = (function() {
var save_frame = null;
var save_frame__0 = (function (){return quil.sketch.current_applet.call(null).saveFrame();
});
var save_frame__1 = (function (name){return quil.sketch.current_applet.call(null).saveFrame((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
});
save_frame = function(name){
switch(arguments.length){
case 0:
return save_frame__0.call(this);
case 1:
return save_frame__1.call(this,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
save_frame.cljs$core$IFn$_invoke$arity$0 = save_frame__0;
save_frame.cljs$core$IFn$_invoke$arity$1 = save_frame__1;
return save_frame;
})()
;
/**
* Increases or decreases the size of a shape by expanding and
* contracting vertices. Objects always scale from their relative
* origin to the coordinate system. Scale values are specified as
* decimal percentages. For example, the function call (scale 2)
* increases the dimension of a shape by 200%. Transformations apply to
* everything that happens after and subsequent calls to the function
* multiply the effect. For example, calling (scale 2) and then
* (scale 1.5) is the same as (scale 3). If scale is called within
* draw, the transformation is reset when the loop begins again. Using
* this fuction with the z parameter requires specfying :p3d or :opengl
* as the renderer. This function can be further controlled by
* push-matrix and pop-matrix.
*/
quil.core.scale = (function() {
var scale = null;
var scale__1 = (function (s){return quil.core.current_graphics.call(null).scale(s);
});
var scale__2 = (function (sx,sy){return quil.core.current_graphics.call(null).scale(sx,sy);
});
var scale__3 = (function (sx,sy,sz){return quil.core.current_graphics.call(null).scale(sx,sy,sz);
});
scale = function(sx,sy,sz){
switch(arguments.length){
case 1:
return scale__1.call(this,sx);
case 2:
return scale__2.call(this,sx,sy);
case 3:
return scale__3.call(this,sx,sy,sz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scale.cljs$core$IFn$_invoke$arity$1 = scale__1;
scale.cljs$core$IFn$_invoke$arity$2 = scale__2;
scale.cljs$core$IFn$_invoke$arity$3 = scale__3;
return scale;
})()
;
/**
* Takes a three-dimensional x, y, z position and returns the x value
* for where it will appear on a (two-dimensional) screen, once
* affected by translate, scale or any other transformations
*/
quil.core.screen_x = (function() {
var screen_x = null;
var screen_x__2 = (function (x,y){return quil.core.current_graphics.call(null).screenX(x,y);
});
var screen_x__3 = (function (x,y,z){return quil.core.current_graphics.call(null).screenX(x,y,z);
});
screen_x = function(x,y,z){
switch(arguments.length){
case 2:
return screen_x__2.call(this,x,y);
case 3:
return screen_x__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
screen_x.cljs$core$IFn$_invoke$arity$2 = screen_x__2;
screen_x.cljs$core$IFn$_invoke$arity$3 = screen_x__3;
return screen_x;
})()
;
/**
* Takes a three-dimensional x, y, z position and returns the y value
* for where it will appear on a (two-dimensional) screen, once
* affected by translate, scale or any other transformations
*/
quil.core.screen_y = (function() {
var screen_y = null;
var screen_y__2 = (function (x,y){return quil.core.current_graphics.call(null).screenY(x,y);
});
var screen_y__3 = (function (x,y,z){return quil.core.current_graphics.call(null).screenY(x,y,z);
});
screen_y = function(x,y,z){
switch(arguments.length){
case 2:
return screen_y__2.call(this,x,y);
case 3:
return screen_y__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
screen_y.cljs$core$IFn$_invoke$arity$2 = screen_y__2;
screen_y.cljs$core$IFn$_invoke$arity$3 = screen_y__3;
return screen_y;
})()
;
/**
* Given an x, y, z coordinate, returns its z value.
* This value can be used to determine if an x, y, z coordinate is in
* front or in back of another (x, y, z) coordinate. The units are
* based on how the zbuffer is set up, and don't relate to anything
* 'real'. They're only useful for in comparison to another value
* obtained from screen-z, or directly out of the zbuffer
*/
quil.core.screen_z = (function screen_z(x,y,z){return quil.core.current_graphics.call(null).screenZ(x,y,z);
});
/**
* Returns the current second as a value from 0 - 59.
*/
quil.core.seconds = (function seconds(){return quil.sketch.current_applet.call(null).second();
});
/**
* Changes the color of any pixel in the display window. The x and y
* parameters specify the pixel to change and the color parameter
* specifies the color value. The color parameter is affected by the
* current color mode (the default is RGB values from 0 to 255).
* 
* Setting the color of a single pixel with (set x, y) is easy, but not
* as fast as putting the data directly into pixels[].
* 
* This function ignores imageMode().
* 
* Due to what appears to be a bug in Apple's Java implementation, the
* point() and set() methods are extremely slow in some circumstances
* when used with the default renderer. Using :p2d or :p3d will fix the
* problem. Grouping many calls to point or set-pixel together can also
* help. (Bug 1094)
*/
quil.core.set_pixel = (function() {
var set_pixel = null;
var set_pixel__3 = (function (x,y,c){return set_pixel.call(null,quil.core.current_graphics.call(null),x,y,c);
});
var set_pixel__4 = (function (img,x,y,c){return img.set((x | (0)),(y | (0)),(c | (0)));
});
set_pixel = function(img,x,y,c){
switch(arguments.length){
case 3:
return set_pixel__3.call(this,img,x,y);
case 4:
return set_pixel__4.call(this,img,x,y,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_pixel.cljs$core$IFn$_invoke$arity$3 = set_pixel__3;
set_pixel.cljs$core$IFn$_invoke$arity$4 = set_pixel__4;
return set_pixel;
})()
;
/**
* Writes an image directly into the display window. The x and y
* parameters define the coordinates for the upper-left corner of the
* image.
*/
quil.core.set_image = (function set_image(x,y,src){return quil.core.current_graphics.call(null).set((x | (0)),(y | (0)),src);
});
/**
* Displays shapes to the screen. The shapes must have been loaded
* with load-shape. Processing currently works with SVG shapes
* only. The sh parameter specifies the shape to display and the x and
* y parameters define the location of the shape from its upper-left
* corner. The shape is displayed at its original size unless the width
* and height parameters specify a different size. The shape-mode
* fn changes the way the parameters work. A call to
* (shape-mode :corners), for example, will change the width and height
* parameters to define the x and y values of the opposite corner of
* the shape.
* 
* Note complex shapes may draw awkwardly with the renderers :p2d, :p3d, and
* :opengl. Those renderers do not yet support shapes that have holes
* or complicated breaks.
*/
quil.core.shape = (function() {
var shape = null;
var shape__1 = (function (sh){return quil.core.current_graphics.call(null).shape(sh);
});
var shape__3 = (function (sh,x,y){return quil.core.current_graphics.call(null).shape(sh,x,y);
});
var shape__5 = (function (sh,x,y,width,height){return quil.core.current_graphics.call(null).shape(sh,x,y,width,height);
});
shape = function(sh,x,y,width,height){
switch(arguments.length){
case 1:
return shape__1.call(this,sh);
case 3:
return shape__3.call(this,sh,x,y);
case 5:
return shape__5.call(this,sh,x,y,width,height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shape.cljs$core$IFn$_invoke$arity$1 = shape__1;
shape.cljs$core$IFn$_invoke$arity$3 = shape__3;
shape.cljs$core$IFn$_invoke$arity$5 = shape__5;
return shape;
})()
;
/**
* Shears a shape around the x-axis the amount specified by the angle
* parameter. Angles should be specified in radians (values from 0 to
* PI*2) or converted to radians with the radians() function. Objects
* are always sheared around their relative position to the origin and
* positive numbers shear objects in a clockwise direction.
* Transformations apply to everything that happens after and
* subsequent calls to the function accumulates the effect. For
* example, calling (shear-x (/ PI 2)) and then (shear-x (/ PI 2)) is
* the same as (shear-x PI). If shear-x is called within the draw fn,
* the transformation is reset when the loop begins again. This
* function works in P2D or JAVA2D mode.
* 
* Technically, shear-x multiplies the current transformation matrix
* by a rotation matrix. This function can be further controlled by the
* push-matrix and pop-matrix fns.
*/
quil.core.shear_x = (function shear_x(angle){return quil.core.current_graphics.call(null).shearX(angle);
});
/**
* Shears a shape around the y-axis the amount specified by the angle
* parameter. Angles should be specified in radians (values from 0 to
* PI*2) or converted to radians with the radians() function. Objects
* are always sheared around their relative position to the origin and
* positive numbers shear objects in a clockwise direction.
* Transformations apply to everything that happens after and
* subsequent calls to the function accumulates the effect. For
* example, calling (shear-y (/ PI 2)) and then (shear-y (/ PI 2)) is
* the same as (shear-y PI). If shear-y is called within the draw fn,
* the transformation is reset when the loop begins again. This
* function works in P2D or JAVA2D mode.
* 
* Technically, shear-y multiplies the current transformation matrix
* by a rotation matrix. This function can be further controlled by the
* push-matrix and pop-matrix fns.
*/
quil.core.shear_y = (function shear_y(angle){return quil.core.current_graphics.call(null).shearY(angle);
});
/**
* Modifies the location from which shapes draw. Available modes are
* :corner, :corners and :center. Default is :corner.
* 
* :corner  - specifies the location to be the upper left corner of the
* shape and uses the third and fourth parameters of shape
* to specify the width and height.
* 
* :corners - uses the first and second parameters of shape to set
* the location of one corner and uses the third and fourth
* parameters to set the opposite corner.
* 
* :center  - draws the shape from its center point and uses the third
* and forth parameters of shape to specify the width and
* height.
*/
quil.core.shape_mode = (function shape_mode(mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.p_shape_modes);return quil.core.current_graphics.call(null).shapeMode((mode__$1 | (0)));
});
/**
* Sets the amount of gloss in the surface of shapes. Used in
* combination with ambient, specular, and emissive in setting
* the material properties of shapes.
*/
quil.core.shininess = (function shininess(shine){return quil.core.current_graphics.call(null).shininess(shine);
});
/**
* Calculates the sine of an angle. This function expects the values
* of the angle parameter to be provided in radians (values from 0 to
* 6.28). A float within the range -1 to 1 is returned.
*/
quil.core.sin = (function sin(angle){return quil.sketch.current_applet.call(null).sin(angle);
});
/**
* Draws all geometry with smooth (anti-aliased) edges. This will slow
* down the frame rate of the application, but will enhance the visual
* refinement.
* 
* The level parameter (int) increases the level of smoothness with the
* P2D and P3D renderers. This is the level of over sampling applied to
* the graphics buffer. The value '2' will double the rendering size
* before scaling it down to the display size. This is called '2x
* anti-aliasing.' The value 4 is used for 4x anti-aliasing and 8 is
* specified for 8x anti-aliasing. If level is set to 0, it will disable
* all smoothing; it's the equivalent of the function noSmooth().
* The maximum anti-aliasing level is determined by the hardware of the
* machine that is running the software.
* 
* Note that smooth will also improve image quality of resized images.
*/
quil.core.smooth = (function() {
var smooth = null;
var smooth__0 = (function (){return quil.core.current_graphics.call(null).smooth();
});
var smooth__1 = (function (level){return quil.core.current_graphics.call(null).smooth((level | (0)));
});
smooth = function(level){
switch(arguments.length){
case 0:
return smooth__0.call(this);
case 1:
return smooth__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
smooth.cljs$core$IFn$_invoke$arity$0 = smooth__0;
smooth.cljs$core$IFn$_invoke$arity$1 = smooth__1;
return smooth;
})()
;
/**
* Sets the specular color of the materials used for shapes drawn to
* the screen, which sets the color of hightlights. Specular refers to
* light which bounces off a surface in a perferred direction (rather
* than bouncing in all directions like a diffuse light). Used in
* combination with emissive, ambient, and shininess in setting
* the material properties of shapes.
*/
quil.core.specular = (function() {
var specular = null;
var specular__1 = (function (gray){return quil.core.current_graphics.call(null).specular(gray);
});
var specular__3 = (function (x,y,z){return quil.core.current_graphics.call(null).specular(x,y,z);
});
specular = function(x,y,z){
switch(arguments.length){
case 1:
return specular__1.call(this,x);
case 3:
return specular__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
specular.cljs$core$IFn$_invoke$arity$1 = specular__1;
specular.cljs$core$IFn$_invoke$arity$3 = specular__3;
return specular;
})()
;
/**
* Generates a hollow ball made from tessellated triangles.
*/
quil.core.sphere = (function sphere(radius){return quil.core.current_graphics.call(null).sphere(radius);
});
/**
* Controls the detail used to render a sphere by adjusting the number
* of vertices of the sphere mesh. The default resolution is 30, which
* creates a fairly detailed sphere definition with vertices every
* 360/30 = 12 degrees. If you're going to render a great number of
* spheres per frame, it is advised to reduce the level of detail using
* this function. The setting stays active until sphere-detail is
* called again with a new parameter and so should not be called prior
* to every sphere statement, unless you wish to render spheres with
* different settings, e.g. using less detail for smaller spheres or
* ones further away from the camera. To controla the detail of the
* horizontal and vertical resolution independently, use the version of
* the functions with two parameters.
*/
quil.core.sphere_detail = (function() {
var sphere_detail = null;
var sphere_detail__1 = (function (res){return quil.core.current_graphics.call(null).sphereDetail((res | (0)));
});
var sphere_detail__2 = (function (ures,vres){return quil.core.current_graphics.call(null).sphereDetail((ures | (0)),(vres | (0)));
});
sphere_detail = function(ures,vres){
switch(arguments.length){
case 1:
return sphere_detail__1.call(this,ures);
case 2:
return sphere_detail__2.call(this,ures,vres);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sphere_detail.cljs$core$IFn$_invoke$arity$1 = sphere_detail__1;
sphere_detail.cljs$core$IFn$_invoke$arity$2 = sphere_detail__2;
return sphere_detail;
})()
;
/**
* Adds a spot light. Lights need to be included in the draw to
* remain persistent in a looping program. Placing them in the setup
* of a looping program will cause them to only have an effect the
* first time through the loop. The affect of the r, g, and b
* parameters is determined by the current color mode. The x, y, and z
* parameters specify the position of the light and nx, ny, nz specify
* the direction or light. The angle parameter affects angle of the
* spotlight cone.
*/
quil.core.spot_light = (function() {
var spot_light = null;
var spot_light__5 = (function (p__10550,p__10551,p__10552,angle,concentration){var vec__10556 = p__10550;var r = cljs.core.nth.call(null,vec__10556,(0),null);var g = cljs.core.nth.call(null,vec__10556,(1),null);var b = cljs.core.nth.call(null,vec__10556,(2),null);var vec__10557 = p__10551;var x = cljs.core.nth.call(null,vec__10557,(0),null);var y = cljs.core.nth.call(null,vec__10557,(1),null);var z = cljs.core.nth.call(null,vec__10557,(2),null);var vec__10558 = p__10552;var nx = cljs.core.nth.call(null,vec__10558,(0),null);var ny = cljs.core.nth.call(null,vec__10558,(1),null);var nz = cljs.core.nth.call(null,vec__10558,(2),null);return quil.core.current_graphics.call(null).spotLight(r,g,b,x,y,z,nx,ny,nz,angle,concentration);
});
var spot_light__11 = (function (r,g,b,x,y,z,nx,ny,nz,angle,concentration){return quil.core.current_graphics.call(null).spotLight(r,g,b,x,y,z,nx,ny,nz,angle,concentration);
});
spot_light = function(r,g,b,x,y,z,nx,ny,nz,angle,concentration){
switch(arguments.length){
case 5:
return spot_light__5.call(this,r,g,b,x,y);
case 11:
return spot_light__11.call(this,r,g,b,x,y,z,nx,ny,nz,angle,concentration);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spot_light.cljs$core$IFn$_invoke$arity$5 = spot_light__5;
spot_light.cljs$core$IFn$_invoke$arity$11 = spot_light__11;
return spot_light;
})()
;
/**
* Squares a number (multiplies a number by itself). The result is
* always a positive number, as multiplying two negative numbers always
* yields a positive result. For example, -1 * -1 = 1.
*/
quil.core.sq = (function sq(a){return quil.sketch.current_applet.call(null).sq(a);
});
/**
* Calculates the square root of a number. The square root of a number
* is always positive, even though there may be a valid negative
* root. The square root s of number a is such that (= a (* s s)) . It
* is the opposite of squaring.
*/
quil.core.sqrt = (function sqrt(a){return quil.sketch.current_applet.call(null).sqrt(a);
});
/**
* Causes Processing to continuously execute the code within
* draw. If no-loop is called, the code in draw stops executing.
*/
quil.core.start_loop = (function start_loop(){return quil.sketch.current_applet.call(null).loop();
});
/**
* Sets the color used to draw lines and borders around
* shapes. Converts all args to floats
*/
quil.core.stroke_float = (function() {
var stroke_float = null;
var stroke_float__1 = (function (gray){return quil.core.current_graphics.call(null).stroke(gray);
});
var stroke_float__2 = (function (gray,alpha){return quil.core.current_graphics.call(null).stroke(gray,alpha);
});
var stroke_float__3 = (function (x,y,z){return quil.core.current_graphics.call(null).stroke(x,y,z);
});
var stroke_float__4 = (function (x,y,z,a){return quil.core.current_graphics.call(null).stroke(x,y,z,a);
});
stroke_float = function(x,y,z,a){
switch(arguments.length){
case 1:
return stroke_float__1.call(this,x);
case 2:
return stroke_float__2.call(this,x,y);
case 3:
return stroke_float__3.call(this,x,y,z);
case 4:
return stroke_float__4.call(this,x,y,z,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stroke_float.cljs$core$IFn$_invoke$arity$1 = stroke_float__1;
stroke_float.cljs$core$IFn$_invoke$arity$2 = stroke_float__2;
stroke_float.cljs$core$IFn$_invoke$arity$3 = stroke_float__3;
stroke_float.cljs$core$IFn$_invoke$arity$4 = stroke_float__4;
return stroke_float;
})()
;
/**
* Sets the color used to draw lines and borders around
* shapes. Converts rgb to int and alpha to a float.
*/
quil.core.stroke_int = (function() {
var stroke_int = null;
var stroke_int__1 = (function (rgb){return quil.core.current_graphics.call(null).stroke((rgb | (0)));
});
var stroke_int__2 = (function (rgb,alpha){return quil.core.current_graphics.call(null).stroke((rgb | (0)),alpha);
});
stroke_int = function(rgb,alpha){
switch(arguments.length){
case 1:
return stroke_int__1.call(this,rgb);
case 2:
return stroke_int__2.call(this,rgb,alpha);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stroke_int.cljs$core$IFn$_invoke$arity$1 = stroke_int__1;
stroke_int.cljs$core$IFn$_invoke$arity$2 = stroke_int__2;
return stroke_int;
})()
;
/**
* Sets the color used to draw lines and borders around shapes. This
* color is either specified in terms of the RGB or HSB color depending
* on the current color-mode (the default color space is RGB, with
* each value in the range from 0 to 255).
*/
quil.core.stroke = (function() {
var stroke = null;
var stroke__1 = (function (rgb){return quil.core.stroke_float.call(null,rgb);
});
var stroke__2 = (function (rgb,alpha){return quil.core.stroke_float.call(null,rgb,alpha);
});
var stroke__3 = (function (x,y,z){return quil.core.stroke_float.call(null,x,y,z);
});
var stroke__4 = (function (x,y,z,a){return quil.core.stroke_float.call(null,x,y,z,a);
});
stroke = function(x,y,z,a){
switch(arguments.length){
case 1:
return stroke__1.call(this,x);
case 2:
return stroke__2.call(this,x,y);
case 3:
return stroke__3.call(this,x,y,z);
case 4:
return stroke__4.call(this,x,y,z,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stroke.cljs$core$IFn$_invoke$arity$1 = stroke__1;
stroke.cljs$core$IFn$_invoke$arity$2 = stroke__2;
stroke.cljs$core$IFn$_invoke$arity$3 = stroke__3;
stroke.cljs$core$IFn$_invoke$arity$4 = stroke__4;
return stroke;
})()
;
/**
* Sets the style for rendering line endings. These ends are either
* squared, extended, or rounded and specified with the corresponding
* parameters :square, :project, and :round. The default cap is :round.
*/
quil.core.stroke_cap = (function stroke_cap(cap_mode){var cap_mode__$1 = quil.util.resolve_constant_key.call(null,cap_mode,quil.core.stroke_cap_modes);return quil.core.current_graphics.call(null).strokeCap((cap_mode__$1 | (0)));
});
/**
* Sets the style of the joints which connect line
* segments. These joints are either mitered, beveled, or rounded and
* specified with the corresponding parameters :miter, :bevel, and
* :round. The default joint is :miter.
* 
* This function is not available with the :p2d, :p3d, or :opengl
* renderers.
*/
quil.core.stroke_join = (function stroke_join(join_mode){var join_mode__$1 = quil.util.resolve_constant_key.call(null,join_mode,quil.core.stroke_join_modes);return quil.core.current_graphics.call(null).strokeJoin((join_mode__$1 | (0)));
});
/**
* Sets the width of the stroke used for lines, points, and the border
* around shapes. All widths are set in units of pixels.
*/
quil.core.stroke_weight = (function stroke_weight(weight){return quil.core.current_graphics.call(null).strokeWeight(weight);
});
/**
* Calculates the ratio of the sine and cosine of an angle. This
* function expects the values of the angle parameter to be provided in
* radians (values from 0 to PI*2). Values are returned in the range
* infinity to -infinity.
*/
quil.core.tan = (function tan(angle){return quil.sketch.current_applet.call(null).tan(angle);
});
/**
* Returns the target framerate specified with the fn frame-rate
*/
quil.core.target_frame_rate = (function target_frame_rate(){return cljs.core.deref.call(null,quil.sketch.current_applet.call(null).target_frame_rate);
});
/**
* Draws a char to the screen in the specified position. See text fn
* for more details.
*/
quil.core.text_char = (function() {
var text_char = null;
var text_char__3 = (function (c,x,y){return quil.core.current_graphics.call(null).text(cljs.core.char$.call(null,c),x,y);
});
var text_char__4 = (function (c,x,y,z){return quil.core.current_graphics.call(null).text(cljs.core.char$.call(null,c),x,y,z);
});
text_char = function(c,x,y,z){
switch(arguments.length){
case 3:
return text_char__3.call(this,c,x,y);
case 4:
return text_char__4.call(this,c,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_char.cljs$core$IFn$_invoke$arity$3 = text_char__3;
text_char.cljs$core$IFn$_invoke$arity$4 = text_char__4;
return text_char;
})()
;
/**
* Draws a number to the screen in the specified position. See text fn
* for more details.
*/
quil.core.text_num = (function() {
var text_num = null;
var text_num__3 = (function (num,x,y){return quil.core.current_graphics.call(null).text(num,x,y);
});
var text_num__4 = (function (num,x,y,z){return quil.core.current_graphics.call(null).text(num,x,y,z);
});
text_num = function(num,x,y,z){
switch(arguments.length){
case 3:
return text_num__3.call(this,num,x,y);
case 4:
return text_num__4.call(this,num,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_num.cljs$core$IFn$_invoke$arity$3 = text_num__3;
text_num.cljs$core$IFn$_invoke$arity$4 = text_num__4;
return text_num;
})()
;
/**
* Draws text to the screen in the position specified by the x and y
* parameters and the optional z parameter. A default font will be used
* unless a font is set with the text-font fn. Change the color of the
* text with the fill fn. The text displays in relation to the
* text-align fn, which gives the option to draw to the left, right, and
* center of the coordinates.
* 
* The x1, y1, x2 and y2 parameters define a
* rectangular area to display within and may only be used with string
* data. For text drawn inside a rectangle, the coordinates are
* interpreted based on the current rect-mode setting.
*/
quil.core.text = (function() {
var text = null;
var text__3 = (function (s,x,y){return quil.core.current_graphics.call(null).text(s,x,y);
});
var text__4 = (function (s,x,y,z){return quil.core.current_graphics.call(null).text(s,x,y,z);
});
var text__5 = (function (s,x1,y1,x2,y2){return quil.core.current_graphics.call(null).text(s,x1,y1,x2,y2);
});
text = function(s,x1,y1,x2,y2){
switch(arguments.length){
case 3:
return text__3.call(this,s,x1,y1);
case 4:
return text__4.call(this,s,x1,y1,x2);
case 5:
return text__5.call(this,s,x1,y1,x2,y2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$core$IFn$_invoke$arity$3 = text__3;
text.cljs$core$IFn$_invoke$arity$4 = text__4;
text.cljs$core$IFn$_invoke$arity$5 = text__5;
return text;
})()
;
/**
* Sets the current alignment for drawing text. Available modes are:
* 
* horizontal - :left, :center, and :right
* vertical   - :top, :bottom, :center, and :baseline
* 
* An optional second parameter specifies the vertical alignment
* mode. :baseline is the default. The :top and :center parameters are
* straightforward. The :bottom parameter offsets the line based on the
* current text-descent. For multiple lines, the final line will be
* aligned to the bottom, with the previous lines appearing above it.
* 
* When using text with width and height parameters, :baseline is
* ignored, and treated as :top. (Otherwise, text would by default draw
* outside the box, since :baseline is the default setting. :baseline is
* not a useful drawing mode for text drawn in a rectangle.)
* 
* The vertical alignment is based on the value of text-ascent, which
* many fonts do not specify correctly. It may be necessary to use a
* hack and offset by a few pixels by hand so that the offset looks
* correct. To do this as less of a hack, use some percentage of
* text-ascent or text-descent so that the hack works even if you
* change the size of the font.
*/
quil.core.text_align = (function() {
var text_align = null;
var text_align__1 = (function (align){var align__$1 = quil.util.resolve_constant_key.call(null,align,quil.core.horizontal_alignment_modes);return quil.core.current_graphics.call(null).textAlign((align__$1 | (0)));
});
var text_align__2 = (function (align_x,align_y){var align_x__$1 = quil.util.resolve_constant_key.call(null,align_x,quil.core.horizontal_alignment_modes);var align_y__$1 = quil.util.resolve_constant_key.call(null,align_y,quil.core.vertical_alignment_modes);return quil.core.current_graphics.call(null).textAlign((align_x__$1 | (0)),(align_y__$1 | (0)));
});
text_align = function(align_x,align_y){
switch(arguments.length){
case 1:
return text_align__1.call(this,align_x);
case 2:
return text_align__2.call(this,align_x,align_y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_align.cljs$core$IFn$_invoke$arity$1 = text_align__1;
text_align.cljs$core$IFn$_invoke$arity$2 = text_align__2;
return text_align;
})()
;
/**
* Returns the ascent of the current font at its current size. This
* information is useful for determining the height of the font above
* the baseline. For example, adding the text-ascent and text-descent
* values will give you the total height of the line.
*/
quil.core.text_ascent = (function text_ascent(){return quil.core.current_graphics.call(null).textAscent();
});
/**
* Returns descent of the current font at its current size. This
* information is useful for determining the height of the font below
* the baseline. For example, adding the text-ascent and text-descent
* values will give you the total height of the line.
*/
quil.core.text_descent = (function text_descent(){return quil.core.current_graphics.call(null).textDescent();
});
/**
* Sets the current font that will be drawn with the text
* function. Fonts must be loaded with load-font before it can be
* used. This font will be used in all subsequent calls to the text
* function. If no size parameter is input, the font will appear at its
* original size until it is changed with text-size.
* 
* Because fonts are usually bitmaped, you should create fonts at the
* sizes that will be used most commonly. Using textFont without the
* size parameter will result in the cleanest-looking text.
* 
* With the default (JAVA2D) and PDF renderers, it's also possible to
* enable the use of native fonts via the command
* (hint :enable-native-fonts). This will produce vector text in JAVA2D
* sketches and PDF output in cases where the vector data is available:
* when the font is still installed, or the font is created via the
* create-font fn
*/
quil.core.text_font = (function() {
var text_font = null;
var text_font__1 = (function (font){return quil.core.current_graphics.call(null).textFont(font);
});
var text_font__2 = (function (font,size){return quil.core.current_graphics.call(null).textFont(font,(size | (0)));
});
text_font = function(font,size){
switch(arguments.length){
case 1:
return text_font__1.call(this,font);
case 2:
return text_font__2.call(this,font,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_font.cljs$core$IFn$_invoke$arity$1 = text_font__1;
text_font.cljs$core$IFn$_invoke$arity$2 = text_font__2;
return text_font;
})()
;
/**
* Sets the spacing between lines of text in units of pixels. This
* setting will be used in all subsequent calls to the text function.
*/
quil.core.text_leading = (function text_leading(leading){return quil.core.current_graphics.call(null).textLeading(leading);
});
/**
* Sets the way text draws to the screen - available modes
* are :model and :shape
* 
* In the default configuration (the :model mode), it's possible to
* rotate, scale, and place letters in two and three dimensional space.
* 
* The :shape mode draws text using the the glyph outlines of
* individual characters rather than as textures. This mode is only
* only supported with the PDF and OPENGL renderer settings. With the
* PDF renderer, you must specify the :shape text-mode before any other
* drawing occurs. If the outlines are not available, then
* :shape will be ignored and :model will be used instead.
* 
* The :shape option in OPENGL mode can be combined with begin-raw to
* write vector-accurate text to 2D and 3D output files, for instance
* DXF or PDF. :shape is not currently optimized for OPENGL, so if
* recording shape data, use :model until you're ready to capture the
* geometry with begin-raw.
*/
quil.core.text_mode = (function text_mode(mode){var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.text_modes);return quil.core.current_graphics.call(null).textMode((mode__$1 | (0)));
});
/**
* Sets the current font size. This size will be used in all
* subsequent calls to the text fn. Font size is measured in
* units of pixels.
*/
quil.core.text_size = (function text_size(size){return quil.core.current_graphics.call(null).textSize(size);
});
/**
* Sets a texture to be applied to vertex points. The texture fn must
* be called between begin-shape and end-shape and before any calls to
* vertex.
* 
* When textures are in use, the fill color is ignored. Instead, use
* tint to specify the color of the texture as it is applied to the
* shape.
*/
quil.core.texture = (function texture(img){return quil.core.current_graphics.call(null).texture(img);
});
/**
* Calculates and returns the width of any text string.
*/
quil.core.text_width = (function text_width(data){return quil.core.current_graphics.call(null).textWidth(data);
});
/**
* Sets the fill value for displaying images. Images can be tinted to
* specified colors or made transparent by setting the alpha.
* 
* To make an image transparent, but not change it's color, use white
* as the tint color and specify an alpha value. For instance,
* tint(255, 128) will make an image 50% transparent (unless
* colorMode() has been used).
* 
* The value for the parameter gray must be less than or equal to the
* current maximum value as specified by colorMode(). The default
* maximum value is 255.
* 
* Also used to control the coloring of textures in 3D.
*/
quil.core.tint_float = (function() {
var tint_float = null;
var tint_float__1 = (function (gray){return quil.core.current_graphics.call(null).tint(gray);
});
var tint_float__2 = (function (gray,alpha){return quil.core.current_graphics.call(null).tint(gray,alpha);
});
var tint_float__3 = (function (r,g,b){return quil.core.current_graphics.call(null).tint(r,g,b);
});
var tint_float__4 = (function (r,g,b,a){return quil.core.current_graphics.call(null).tint(g,g,b,a);
});
tint_float = function(r,g,b,a){
switch(arguments.length){
case 1:
return tint_float__1.call(this,r);
case 2:
return tint_float__2.call(this,r,g);
case 3:
return tint_float__3.call(this,r,g,b);
case 4:
return tint_float__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tint_float.cljs$core$IFn$_invoke$arity$1 = tint_float__1;
tint_float.cljs$core$IFn$_invoke$arity$2 = tint_float__2;
tint_float.cljs$core$IFn$_invoke$arity$3 = tint_float__3;
tint_float.cljs$core$IFn$_invoke$arity$4 = tint_float__4;
return tint_float;
})()
;
/**
* Sets the fill value for displaying images. Images can be tinted to
* specified colors or made transparent by setting the alpha.
* 
* To make an image transparent, but not change it's color, use white
* as the tint color and specify an alpha value. For instance,
* tint(255, 128) will make an image 50% transparent (unless
* colorMode() has been used).
* 
* The value for the parameter gray must be less than or equal to the
* current maximum value as specified by colorMode(). The default
* maximum value is 255.
* 
* Also used to control the coloring of textures in 3D.
*/
quil.core.tint_int = (function() {
var tint_int = null;
var tint_int__1 = (function (rgb){return quil.core.current_graphics.call(null).tint((rgb | (0)));
});
var tint_int__2 = (function (rgb,alpha){return quil.core.current_graphics.call(null).tint((rgb | (0)),alpha);
});
tint_int = function(rgb,alpha){
switch(arguments.length){
case 1:
return tint_int__1.call(this,rgb);
case 2:
return tint_int__2.call(this,rgb,alpha);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tint_int.cljs$core$IFn$_invoke$arity$1 = tint_int__1;
tint_int.cljs$core$IFn$_invoke$arity$2 = tint_int__2;
return tint_int;
})()
;
/**
* Sets the fill value for displaying images. Images can be tinted to
* specified colors or made transparent by setting the alpha.
* 
* To make an image transparent, but not change it's color, use white
* as the tint color and specify an alpha value. For instance,
* tint(255, 128) will make an image 50% transparent (unless
* colorMode() has been used).
* 
* The value for the parameter gray must be less than or equal to the
* current maximum value as specified by colorMode(). The default
* maximum value is 255.
* 
* Also used to control the coloring of textures in 3D.
*/
quil.core.tint = (function() {
var tint = null;
var tint__1 = (function (rgb){return quil.core.current_graphics.call(null).tint(rgb);
});
var tint__2 = (function (rgb,alpha){return quil.core.current_graphics.call(null).tint(rgb,alpha);
});
var tint__3 = (function (r,g,b){return quil.core.tint_float.call(null,r,g,b);
});
var tint__4 = (function (r,g,b,a){return quil.core.tint_float.call(null,r,g,b,a);
});
tint = function(r,g,b,a){
switch(arguments.length){
case 1:
return tint__1.call(this,r);
case 2:
return tint__2.call(this,r,g);
case 3:
return tint__3.call(this,r,g,b);
case 4:
return tint__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tint.cljs$core$IFn$_invoke$arity$1 = tint__1;
tint.cljs$core$IFn$_invoke$arity$2 = tint__2;
tint.cljs$core$IFn$_invoke$arity$3 = tint__3;
tint.cljs$core$IFn$_invoke$arity$4 = tint__4;
return tint;
})()
;
/**
* Specifies an amount to displace objects within the display
* window. The x parameter specifies left/right translation, the y
* parameter specifies up/down translation, and the z parameter
* specifies translations toward/away from the screen.  Transformations
* apply to everything that happens after and subsequent calls to the
* function accumulates the effect. For example, calling (translate 50
* 0) and then (translate 20, 0) is the same as (translate 70, 0). If
* translate is called within draw, the transformation is reset when
* the loop begins again. This function can be further controlled by
* the push-matrix and pop-matrix.
*/
quil.core.translate = (function() {
var translate = null;
var translate__1 = (function (v){return cljs.core.apply.call(null,translate,v);
});
var translate__2 = (function (tx,ty){return quil.core.current_graphics.call(null).translate(tx,ty);
});
var translate__3 = (function (tx,ty,tz){return quil.core.current_graphics.call(null).translate(tx,ty,tz);
});
translate = function(tx,ty,tz){
switch(arguments.length){
case 1:
return translate__1.call(this,tx);
case 2:
return translate__2.call(this,tx,ty);
case 3:
return translate__3.call(this,tx,ty,tz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translate.cljs$core$IFn$_invoke$arity$1 = translate__1;
translate.cljs$core$IFn$_invoke$arity$2 = translate__2;
translate.cljs$core$IFn$_invoke$arity$3 = translate__3;
return translate;
})()
;
/**
* A triangle is a plane created by connecting three points. The first
* two arguments specify the first point, the middle two arguments
* specify the second point, and the last two arguments specify the
* third point.
*/
quil.core.triangle = (function triangle(x1,y1,x2,y2,x3,y3){return quil.core.current_graphics.call(null).triangle(x1,y1,x2,y2,x3,y3);
});
/**
* Unpack a binary string to an integer. See binary for converting
* integers to strings.
*/
quil.core.unbinary = (function unbinary(str_val){return quil.sketch.current_applet.call(null).unbinary((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_val)));
});
/**
* Converts a String representation of a hexadecimal number to its
* equivalent integer value.
*/
quil.core.unhex = (function unhex(hex_str){return quil.sketch.current_applet.call(null).unhex((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex_str)));
});
/**
* Updates the display window or image with the data in the pixels array.
* Use in conjunction with (pixels). If you're only reading pixels from
* the array, there's no need to call update-pixels unless there are
* changes.
* 
* Certain renderers may or may not seem to require pixels or
* update-pixels. However, the rule is that any time you want to
* manipulate the pixels array, you must first call pixels, and
* after changes have been made, call update-pixels. Even if the
* renderer may not seem to use this function in the current Processing
* release, this will always be subject to change.
*/
quil.core.update_pixels = (function() {
var update_pixels = null;
var update_pixels__0 = (function (){return update_pixels.call(null,quil.core.current_graphics.call(null));
});
var update_pixels__1 = (function (img){return img.updatePixels();
});
update_pixels = function(img){
switch(arguments.length){
case 0:
return update_pixels__0.call(this);
case 1:
return update_pixels__1.call(this,img);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_pixels.cljs$core$IFn$_invoke$arity$0 = update_pixels__0;
update_pixels.cljs$core$IFn$_invoke$arity$1 = update_pixels__1;
return update_pixels;
})()
;
/**
* All shapes are constructed by connecting a series of
* vertices. vertex is used to specify the vertex coordinates for
* points, lines, triangles, quads, and polygons and is used
* exclusively within the begin-shape and end-shape fns.
* 
* Drawing a vertex in 3D using the z parameter requires the :p3d or
* :opengl renderers to be used.
* 
* This function is also used to map a texture onto the geometry. The
* texture fn declares the texture to apply to the geometry and the u
* and v coordinates set define the mapping of this texture to the
* form. By default, the coordinates used for u and v are specified in
* relation to the image's size in pixels, but this relation can be
* changed with texture-mode.
*/
quil.core.vertex = (function() {
var vertex = null;
var vertex__2 = (function (x,y){return quil.core.current_graphics.call(null).vertex(x,y);
});
var vertex__3 = (function (x,y,z){return quil.core.current_graphics.call(null).vertex(x,y,z);
});
var vertex__4 = (function (x,y,u,v){return quil.core.current_graphics.call(null).vertex(x,y,u,v);
});
var vertex__5 = (function (x,y,z,u,v){return quil.core.current_graphics.call(null).vertex(x,y,z,u,v);
});
vertex = function(x,y,z,u,v){
switch(arguments.length){
case 2:
return vertex__2.call(this,x,y);
case 3:
return vertex__3.call(this,x,y,z);
case 4:
return vertex__4.call(this,x,y,z,u);
case 5:
return vertex__5.call(this,x,y,z,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vertex.cljs$core$IFn$_invoke$arity$2 = vertex__2;
vertex.cljs$core$IFn$_invoke$arity$3 = vertex__3;
vertex.cljs$core$IFn$_invoke$arity$4 = vertex__4;
vertex.cljs$core$IFn$_invoke$arity$5 = vertex__5;
return vertex;
})()
;
/**
* Returns the current year as an integer (2003, 2004, 2005, etc).
*/
quil.core.year = (function year(){return quil.sketch.current_applet.call(null).year();
});
/**
* Width of the display window. The value of width is zero until size is
* called.
*/
quil.core.width = (function width(){return quil.sketch.current_applet.call(null).width;
});
/**
* Create and start a new visualisation applet.
* 
* :size           - A vector of width and height for the sketch or :fullscreen.
* Defaults to [500 300]. If you're using :fullscreen you may
* want to enable present mode - :features [:present]
* 
* :renderer       - Specifies the renderer type. One of :p2d, :p3d, :java2d,
* :opengl, :pdf). Defaults to :java2d. :dxf renderer
* can't be used as sketch renderer. Use begin-raw method
* instead. In clojurescript only :p2d and :p3d renderers
* are supported.
* 
* :output-file    - Specifies an output file path. Only used in :pdf mode.
* Not supported in clojurescript.
* 
* :title          - A string which will be displayed at the top of
* the sketch window. Not supported in clojurescript.
* 
* :features       - A vector of keywords customizing sketch behaviour.
* Supported features:
* 
* :keep-on-top - Sketch window will always be above other
* windows. Note: some platforms might not
* support always-on-top windows.
* Not supported in clojurescript.
* 
* :exit-on-close - Shutdown JVM  when sketch is closed.
* Not supported in clojurescript.
* 
* :resizable - Makes sketch resizable.
* Not supported in clojurescript.
* 
* :no-safe-fns - Do not catch and print exceptions thrown
* inside functions provided to sketch (like
* draw, mouse-click, key-pressed and
* other). By default all exceptions thrown
* inside these functions are catched. This
* prevents sketch from breaking when bad
* function was provided and allows user to
* fix it and reload it on fly. You can
* disable this behaviour by enabling
* :no-safe-fns feature.
* Not supported in clojurescript.
* 
* :present - Switch to present mode (fullscreen without
* borders, OS panels). You may want to use
* this feature together with :size :fullscreen.
* Not supported in clojurescript.
* 
* :no-start - Disables autostart if sketch was created using
* defsketch macro. To start sketch you have to
* call function created defsketch.
* Supported only in clojurescript.
* 
* Usage example: :features [:keep-on-top :present]
* 
* :bgcolor        - Sets background color for unused space in present mode.
* Color is specified in hex format: #XXXXXX.
* Example: :bgcolor "#00FFFF" (cyan background)
* Not supported in clojurescript.
* 
* :display        - Sets what display should be used by this sketch.
* Displays are numbered starting from 0. Example: :display 1.
* Not supported in clojurescript.
* 
* :setup          - A function to be called once when setting the sketch up.
* 
* :draw           - A function to be repeatedly called at most n times per
* second where n is the target frame-rate set for
* the visualisation.
* 
* :focus-gained   - Called when the sketch gains focus.
* Not supported in clojurescript.
* 
* :focus-lost     - Called when the sketch loses focus.
* Not supported in clojurescript.
* 
* :mouse-entered  - Called when the mouse enters the sketch window.
* 
* :mouse-exited   - Called when the mouse leaves the sketch window
* 
* :mouse-pressed  - Called every time a mouse button is pressed.
* 
* :mouse-released - Called every time a mouse button is released.
* 
* :mouse-clicked  - called once after a mouse button has been pressed
* and then released.
* 
* :mouse-moved    - Called every time the mouse moves and a button is
* not pressed.
* 
* :mouse-dragged  - Called every time the mouse moves and a button is
* pressed.
* 
* :mouse-wheel    - Called every time mouse wheel is rotated.
* Takes 1 argument - wheel rotation, an int.
* Negative values if the mouse wheel was rotated
* up/away from the user, and positive values
* if the mouse wheel was rotated down/ towards the user
* 
* :key-pressed    - Called every time any key is pressed.
* 
* :key-released   - Called every time any key is released.
* 
* :key-typed      - Called once every time non-modifier keys are
* pressed.
* 
* :on-close       - Called once, when sketch is closed
* Not supported in clojurescript.
* 
* :middleware     - Vector of middleware to be applied to the sketch.
* Middleware will be applied in the same order as in comp
* function: [f g] will be applied as (f (g options)).
* @param {...*} var_args
*/
quil.core.sketch = (function() { 
var sketch__delegate = function (opts){return cljs.core.apply.call(null,quil.sketch.sketch,opts);
};
var sketch = function (var_args){
var opts = null;if (arguments.length > 0) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sketch__delegate.call(this,opts);};
sketch.cljs$lang$maxFixedArity = 0;
sketch.cljs$lang$applyTo = (function (arglist__10559){
var opts = cljs.core.seq(arglist__10559);
return sketch__delegate(opts);
});
sketch.cljs$core$IFn$_invoke$arity$variadic = sketch__delegate;
return sketch;
})()
;
/**
* Returns true if char c is a 'coded' char i.e. it is necessary to
* fetch the key-code as an integer and use that to determine the
* specific key pressed. See key-keyword.
*/
quil.core.key_coded_QMARK_ = (function key_coded_QMARK_(c){return cljs.core._EQ_.call(null,(65535),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)).charCodeAt());
});
/**
* Returns a keyword representing the currently pressed key. Modifier
* keys are represented as: :up, :down, :left, :right, :alt, :control,
* :shift, :command, :f1-24
*/
quil.core.key_as_keyword = (function key_as_keyword(){var key_char = quil.core.raw_key.call(null);var code = quil.core.key_code.call(null);if(quil.core.key_coded_QMARK_.call(null,key_char))
{return cljs.core.get.call(null,quil.core.KEY_CODES,code,new cljs.core.Keyword(null,"unknown-key","unknown-key",255305911));
} else
{return cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_char)));
}
});

//# sourceMappingURL=core.js.map
