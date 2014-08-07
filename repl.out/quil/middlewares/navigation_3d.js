// Compiled by ClojureScript 0.0-2280
replgoog.provide('quilrepl.middlewares.navigation_3d');
replgoog.require('cljsrepl.core');
replgoog.require('quilrepl.core');
replgoog.require('quilrepl.core');
/**
* Default position configuration. Check default configuration in
* 'camera' function.
*/
quilrepl.middlewares.navigation_3d.default_position = (function default_position(){return new cljsrepl.core.PersistentArrayMap(null, 3, [new cljsrepl.core.Keyword(null,"position","position",-2011731912),new cljsrepl.core.PersistentVector(null, 3, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [(quilrepl.core.width.call(null) / 2.0),(quilrepl.core.height.call(null) / 2.0),((quilrepl.core.height.call(null) / 2.0) / quilrepl.core.tan.call(null,((quilrepl.core.PI * 60.0) / 360.0)))], null),new cljsrepl.core.Keyword(null,"straight","straight",-1252567854),new cljsrepl.core.PersistentVector(null, 3, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljsrepl.core.Keyword(null,"up","up",-269712113),new cljsrepl.core.PersistentVector(null, 3, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null);
});
/**
* Rotates vector v by angle with axis.
* Formula is taken from wiki:
* http://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle
*/
quilrepl.middlewares.navigation_3d.rotate_by_axis_and_angle = (function rotate_by_axis_and_angle(v,axis,angle){var vec__10669 = axis;var a_x = cljsrepl.core.nth.call(null,vec__10669,(0),null);var a_y = cljsrepl.core.nth.call(null,vec__10669,(1),null);var a_z = cljsrepl.core.nth.call(null,vec__10669,(2),null);var vec__10670 = v;var x = cljsrepl.core.nth.call(null,vec__10670,(0),null);var y = cljsrepl.core.nth.call(null,vec__10670,(1),null);var z = cljsrepl.core.nth.call(null,vec__10670,(2),null);var cs = quilrepl.core.cos.call(null,angle);var _cs = ((1) - cs);var sn = quilrepl.core.sin.call(null,angle);var a = (cs + ((a_x * a_x) * _cs));var b = (((a_x * a_y) * _cs) - (a_z * sn));var c = (((a_x * a_z) * _cs) + (a_y * sn));var d = (((a_x * a_y) * _cs) + (a_z * sn));var e = (cs + ((a_y * a_y) * _cs));var f = (((a_y * a_z) * _cs) - (a_x * sn));var g = (((a_x * a_z) * _cs) - (a_y * sn));var h = (((a_y * a_z) * _cs) + (a_x * sn));var i = (cs + ((a_z * a_z) * _cs));return new cljsrepl.core.PersistentVector(null, 3, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [(((a * x) + (b * y)) + (c * z)),(((d * x) + (e * y)) + (f * z)),(((g * x) + (h * y)) + (i * z))], null);
});
/**
* Rotates nav-3d configuration left-right. angle positive - rotate right,
* negative - left.
*/
quilrepl.middlewares.navigation_3d.rotate_lr = (function rotate_lr(nav_3d,angle){return cljsrepl.core.update_in.call(null,nav_3d,new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"straight","straight",-1252567854)], null),quilrepl.middlewares.navigation_3d.rotate_by_axis_and_angle,new cljsrepl.core.Keyword(null,"up","up",-269712113).cljsrepl$core$IFn$_invoke$arity$1(nav_3d),angle);
});
/**
* Vector cross-product: http://en.wikipedia.org/wiki/Cross_product
*/
quilrepl.middlewares.navigation_3d.cross_product = (function cross_product(p__10671,p__10672){var vec__10675 = p__10671;var u1 = cljsrepl.core.nth.call(null,vec__10675,(0),null);var u2 = cljsrepl.core.nth.call(null,vec__10675,(1),null);var u3 = cljsrepl.core.nth.call(null,vec__10675,(2),null);var vec__10676 = p__10672;var v1 = cljsrepl.core.nth.call(null,vec__10676,(0),null);var v2 = cljsrepl.core.nth.call(null,vec__10676,(1),null);var v3 = cljsrepl.core.nth.call(null,vec__10676,(2),null);return new cljsrepl.core.PersistentVector(null, 3, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [((u2 * v3) - (u3 * v2)),((u3 * v1) - (u1 * v3)),((u1 * v2) - (u2 * v1))], null);
});
/**
* Multiply vector v by scalar mult.
*/
quilrepl.middlewares.navigation_3d.v_mult = (function v_mult(v,mult){return cljsrepl.core.mapv.call(null,(function (p1__10677_SHARP_){return (p1__10677_SHARP_ * mult);
}),v);
});
/**
* Sum of 2 vectors.
*/
quilrepl.middlewares.navigation_3d.v_plus = (function v_plus(v1,v2){return cljsrepl.core.mapv.call(null,cljsrepl.core._PLUS_,v1,v2);
});
/**
* Returns vector opposite to vector v.
*/
quilrepl.middlewares.navigation_3d.v_opposite = (function v_opposite(v){return quilrepl.middlewares.navigation_3d.v_mult.call(null,v,(-1));
});
/**
* Normalize vector, returning vector
* which has same direction but with norm equals to 1.
*/
quilrepl.middlewares.navigation_3d.v_normalize = (function v_normalize(v){var norm = quilrepl.core.sqrt.call(null,cljsrepl.core.apply.call(null,cljsrepl.core._PLUS_,cljsrepl.core.map.call(null,quilrepl.core.sq,v)));return quilrepl.middlewares.navigation_3d.v_mult.call(null,v,((1) / norm));
});
/**
* Rotates nav-3d configuration up-down.
*/
quilrepl.middlewares.navigation_3d.rotate_ud = (function rotate_ud(nav_3d,angle){var axis = quilrepl.middlewares.navigation_3d.cross_product.call(null,new cljsrepl.core.Keyword(null,"straight","straight",-1252567854).cljsrepl$core$IFn$_invoke$arity$1(nav_3d),new cljsrepl.core.Keyword(null,"up","up",-269712113).cljsrepl$core$IFn$_invoke$arity$1(nav_3d));var rotate = ((function (axis){
return (function (p1__10678_SHARP_){return quilrepl.middlewares.navigation_3d.rotate_by_axis_and_angle.call(null,p1__10678_SHARP_,axis,angle);
});})(axis))
;return cljsrepl.core.update_in.call(null,cljsrepl.core.update_in.call(null,nav_3d,new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"straight","straight",-1252567854)], null),rotate),new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"up","up",-269712113)], null),rotate);
});
/**
* Mouse handler function which rotates nav-3d configuration.
* It uses mouse from event object and pixels-in-360 to calculate
* angles to rotate.
*/
quilrepl.middlewares.navigation_3d.rotate = (function rotate(state,event,pixels_in_360){if(cljsrepl.core._EQ_.call(null,(0),new cljsrepl.core.Keyword(null,"p-x","p-x",-1721211211).cljsrepl$core$IFn$_invoke$arity$1(event),new cljsrepl.core.Keyword(null,"p-y","p-y",-530704830).cljsrepl$core$IFn$_invoke$arity$1(event)))
{return state;
} else
{var dx = (new cljsrepl.core.Keyword(null,"p-x","p-x",-1721211211).cljsrepl$core$IFn$_invoke$arity$1(event) - new cljsrepl.core.Keyword(null,"x","x",2099068185).cljsrepl$core$IFn$_invoke$arity$1(event));var dy = (new cljsrepl.core.Keyword(null,"y","y",-1757859776).cljsrepl$core$IFn$_invoke$arity$1(event) - new cljsrepl.core.Keyword(null,"p-y","p-y",-530704830).cljsrepl$core$IFn$_invoke$arity$1(event));var angle_lr = quilrepl.core.map_range.call(null,dx,(0),pixels_in_360,(0),quilrepl.core.TWO_PI);var angle_ud = quilrepl.core.map_range.call(null,dy,(0),pixels_in_360,(0),quilrepl.core.TWO_PI);return cljsrepl.core.update_in.call(null,state,new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"navigation-3d","navigation-3d",682305301)], null),((function (dx,dy,angle_lr,angle_ud){
return (function (p1__10679_SHARP_){return quilrepl.middlewares.navigation_3d.rotate_ud.call(null,quilrepl.middlewares.navigation_3d.rotate_lr.call(null,p1__10679_SHARP_,angle_lr),angle_ud);
});})(dx,dy,angle_lr,angle_ud))
);
}
});
quilrepl.middlewares.navigation_3d.space = cljsrepl.core.keyword.call(null," ");
/**
* Keyboard handler function which moves nav-3d configuration.
* It uses keyboard key from event object to determing in which
* direction to move.
*/
quilrepl.middlewares.navigation_3d.move = (function move(state,event,step_size){var map__10685 = new cljsrepl.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljsrepl$core$IFn$_invoke$arity$1(state);var map__10685__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__10685))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__10685):map__10685);var straight = cljsrepl.core.get.call(null,map__10685__$1,new cljsrepl.core.Keyword(null,"straight","straight",-1252567854));var up = cljsrepl.core.get.call(null,map__10685__$1,new cljsrepl.core.Keyword(null,"up","up",-269712113));var temp__4124__auto__ = (function (){var pred__10686 = cljsrepl.core._EQ_;var expr__10687 = new cljsrepl.core.Keyword(null,"key","key",-1516042587).cljsrepl$core$IFn$_invoke$arity$1(event);if(cljsrepl.core.truth_(pred__10686.call(null,new cljsrepl.core.Keyword(null,"w","w",354169001),expr__10687)))
{return straight;
} else
{if(cljsrepl.core.truth_(pred__10686.call(null,new cljsrepl.core.Keyword(null,"s","s",1705939918),expr__10687)))
{return quilrepl.middlewares.navigation_3d.v_opposite.call(null,straight);
} else
{if(cljsrepl.core.truth_(pred__10686.call(null,quilrepl.middlewares.navigation_3d.space,expr__10687)))
{return quilrepl.middlewares.navigation_3d.v_opposite.call(null,up);
} else
{if(cljsrepl.core.truth_(pred__10686.call(null,new cljsrepl.core.Keyword(null,"z","z",-789527183),expr__10687)))
{return up;
} else
{if(cljsrepl.core.truth_(pred__10686.call(null,new cljsrepl.core.Keyword(null,"d","d",1972142424),expr__10687)))
{return quilrepl.middlewares.navigation_3d.cross_product.call(null,straight,up);
} else
{if(cljsrepl.core.truth_(pred__10686.call(null,new cljsrepl.core.Keyword(null,"a","a",-2123407586),expr__10687)))
{return quilrepl.middlewares.navigation_3d.cross_product.call(null,up,straight);
} else
{return null;
}
}
}
}
}
}
})();if(cljsrepl.core.truth_(temp__4124__auto__))
{var dir = temp__4124__auto__;return cljsrepl.core.update_in.call(null,state,new cljsrepl.core.PersistentVector(null, 2, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"navigation-3d","navigation-3d",682305301),new cljsrepl.core.Keyword(null,"position","position",-2011731912)], null),((function (dir,temp__4124__auto__,map__10685,map__10685__$1,straight,up){
return (function (p1__10680_SHARP_){return quilrepl.middlewares.navigation_3d.v_plus.call(null,p1__10680_SHARP_,quilrepl.middlewares.navigation_3d.v_mult.call(null,dir,step_size));
});})(dir,temp__4124__auto__,map__10685,map__10685__$1,straight,up))
);
} else
{return state;
}
});
/**
* Custom 'setup' function which creates initial position
* configuration and puts it to the state map.
*/
quilrepl.middlewares.navigation_3d.setup_3d_nav = (function setup_3d_nav(user_setup,user_settings){var initial_state = cljsrepl.core.update_in.call(null,cljsrepl.core.update_in.call(null,cljsrepl.core.merge.call(null,quilrepl.middlewares.navigation_3d.default_position.call(null),cljsrepl.core.select_keys.call(null,user_settings,new cljsrepl.core.PersistentVector(null, 3, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"straight","straight",-1252567854),new cljsrepl.core.Keyword(null,"up","up",-269712113),new cljsrepl.core.Keyword(null,"position","position",-2011731912)], null))),new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"straight","straight",-1252567854)], null),quilrepl.middlewares.navigation_3d.v_normalize),new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"up","up",-269712113)], null),quilrepl.middlewares.navigation_3d.v_normalize);return cljsrepl.core.update_in.call(null,user_setup.call(null),new cljsrepl.core.PersistentVector(null, 1, 5, cljsrepl.core.PersistentVector.EMPTY_NODE, [new cljsrepl.core.Keyword(null,"navigation-3d","navigation-3d",682305301)], null),((function (initial_state){
return (function (p1__10689_SHARP_){return cljsrepl.core.merge.call(null,initial_state,p1__10689_SHARP_);
});})(initial_state))
);
});
/**
* Enables navigation in 3D space. Similar to how it is done in
* shooters: WASD navigation, space is go up, z is go down,
* drag mouse to look around.
*/
quilrepl.middlewares.navigation_3d.navigation_3d = (function navigation_3d(options){var user_settings = new cljsrepl.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljsrepl$core$IFn$_invoke$arity$1(options);var pixels_in_360 = new cljsrepl.core.Keyword(null,"pixels-in-360","pixels-in-360",1789567298).cljsrepl$core$IFn$_invoke$arity$2(user_settings,(1000));var step_size = new cljsrepl.core.Keyword(null,"step-size","step-size",1545609922).cljsrepl$core$IFn$_invoke$arity$2(user_settings,(20));var rotate_on = new cljsrepl.core.Keyword(null,"rotate-on","rotate-on",-1282225937).cljsrepl$core$IFn$_invoke$arity$2(user_settings,new cljsrepl.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441));var draw = new cljsrepl.core.Keyword(null,"draw","draw",1358331674).cljsrepl$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on){
return (function (state){return null;
});})(user_settings,pixels_in_360,step_size,rotate_on))
);var key_pressed = new cljsrepl.core.Keyword(null,"key-pressed","key-pressed",-757100364).cljsrepl$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw){
return (function (state,_){return state;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw))
);var rotate_on_fn = rotate_on.call(null,options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed){
return (function (state,_){return state;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed))
);var setup = new cljsrepl.core.Keyword(null,"setup","setup",1987730512).cljsrepl$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn){
return (function (){return cljsrepl.core.PersistentArrayMap.EMPTY;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn))
);return cljsrepl.core.assoc.call(null,options,new cljsrepl.core.Keyword(null,"setup","setup",1987730512),cljsrepl.core.partial.call(null,quilrepl.middlewares.navigation_3d.setup_3d_nav,setup,user_settings),new cljsrepl.core.Keyword(null,"draw","draw",1358331674),((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state){var map__10694_10698 = new cljsrepl.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljsrepl$core$IFn$_invoke$arity$1(state);var map__10694_10699__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__10694_10698))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__10694_10698):map__10694_10698);var vec__10695_10700 = cljsrepl.core.get.call(null,map__10694_10699__$1,new cljsrepl.core.Keyword(null,"straight","straight",-1252567854));var c_x_10701 = cljsrepl.core.nth.call(null,vec__10695_10700,(0),null);var c_y_10702 = cljsrepl.core.nth.call(null,vec__10695_10700,(1),null);var c_z_10703 = cljsrepl.core.nth.call(null,vec__10695_10700,(2),null);var vec__10696_10704 = cljsrepl.core.get.call(null,map__10694_10699__$1,new cljsrepl.core.Keyword(null,"up","up",-269712113));var u_x_10705 = cljsrepl.core.nth.call(null,vec__10696_10704,(0),null);var u_y_10706 = cljsrepl.core.nth.call(null,vec__10696_10704,(1),null);var u_z_10707 = cljsrepl.core.nth.call(null,vec__10696_10704,(2),null);var vec__10697_10708 = cljsrepl.core.get.call(null,map__10694_10699__$1,new cljsrepl.core.Keyword(null,"position","position",-2011731912));var p_x_10709 = cljsrepl.core.nth.call(null,vec__10697_10708,(0),null);var p_y_10710 = cljsrepl.core.nth.call(null,vec__10697_10708,(1),null);var p_z_10711 = cljsrepl.core.nth.call(null,vec__10697_10708,(2),null);quilrepl.core.camera.call(null,p_x_10709,p_y_10710,p_z_10711,(p_x_10709 + c_x_10701),(p_y_10710 + c_y_10702),(p_z_10711 + c_z_10703),u_x_10705,u_y_10706,u_z_10707);
return draw.call(null,state);
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,new cljsrepl.core.Keyword(null,"key-pressed","key-pressed",-757100364),((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){return key_pressed.call(null,quilrepl.middlewares.navigation_3d.move.call(null,state,event,step_size),event);
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,rotate_on,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){return rotate_on_fn.call(null,quilrepl.middlewares.navigation_3d.rotate.call(null,state,event,pixels_in_360),event);
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
);
});

//# sourceMappingURL=navigation_3d.js.map
