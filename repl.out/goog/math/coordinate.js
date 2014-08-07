// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview A utility class for representing two-dimensional positions.
 */


replgoog.provide('replgoog.math.Coordinate');

replgoog.require('replgoog.math');



/**
 * Class for representing coordinates and positions.
 * @param {number=} opt_x Left, defaults to 0.
 * @param {number=} opt_y Top, defaults to 0.
 * @constructor
 */
replgoog.math.Coordinate = function(opt_x, opt_y) {
  /**
   * X-value
   * @type {number}
   */
  this.x = replgoog.isDef(opt_x) ? opt_x : 0;

  /**
   * Y-value
   * @type {number}
   */
  this.y = replgoog.isDef(opt_y) ? opt_y : 0;
};


/**
 * Returns a new copy of the coordinate.
 * @return {!replgoog.math.Coordinate} A clone of this coordinate.
 */
replgoog.math.Coordinate.prototype.clone = function() {
  return new replgoog.math.Coordinate(this.x, this.y);
};


if (replgoog.DEBUG) {
  /**
   * Returns a nice string representing the coordinate.
   * @return {string} In the form (50, 73).
   * @override
   */
  replgoog.math.Coordinate.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
  };
}


/**
 * Compares coordinates for equality.
 * @param {replgoog.math.Coordinate} a A Coordinate.
 * @param {replgoog.math.Coordinate} b A Coordinate.
 * @return {boolean} True iff the coordinates are equal, or if both are null.
 */
replgoog.math.Coordinate.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.x == b.x && a.y == b.y;
};


/**
 * Returns the distance between two coordinates.
 * @param {!replgoog.math.Coordinate} a A Coordinate.
 * @param {!replgoog.math.Coordinate} b A Coordinate.
 * @return {number} The distance between {@code a} and {@code b}.
 */
replgoog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
};


/**
 * Returns the magnitude of a coordinate.
 * @param {!replgoog.math.Coordinate} a A Coordinate.
 * @return {number} The distance between the origin and {@code a}.
 */
replgoog.math.Coordinate.magnitude = function(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};


/**
 * Returns the angle from the origin to a coordinate.
 * @param {!replgoog.math.Coordinate} a A Coordinate.
 * @return {number} The angle, in degrees, clockwise from the positive X
 *     axis to {@code a}.
 */
replgoog.math.Coordinate.azimuth = function(a) {
  return replgoog.math.angle(0, 0, a.x, a.y);
};


/**
 * Returns the squared distance between two coordinates. Squared distances can
 * be used for comparisons when the actual value is not required.
 *
 * Performance note: eliminating the square root is an optimization often used
 * in lower-level languages, but the speed difference is not nearly as
 * pronounced in JavaScript (only a few percent.)
 *
 * @param {!replgoog.math.Coordinate} a A Coordinate.
 * @param {!replgoog.math.Coordinate} b A Coordinate.
 * @return {number} The squared distance between {@code a} and {@code b}.
 */
replgoog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy;
};


/**
 * Returns the difference between two coordinates as a new
 * replgoog.math.Coordinate.
 * @param {!replgoog.math.Coordinate} a A Coordinate.
 * @param {!replgoog.math.Coordinate} b A Coordinate.
 * @return {!replgoog.math.Coordinate} A Coordinate representing the difference
 *     between {@code a} and {@code b}.
 */
replgoog.math.Coordinate.difference = function(a, b) {
  return new replgoog.math.Coordinate(a.x - b.x, a.y - b.y);
};


/**
 * Returns the sum of two coordinates as a new replgoog.math.Coordinate.
 * @param {!replgoog.math.Coordinate} a A Coordinate.
 * @param {!replgoog.math.Coordinate} b A Coordinate.
 * @return {!replgoog.math.Coordinate} A Coordinate representing the sum of the two
 *     coordinates.
 */
replgoog.math.Coordinate.sum = function(a, b) {
  return new replgoog.math.Coordinate(a.x + b.x, a.y + b.y);
};


/**
 * Rounds the x and y fields to the next larger integer values.
 * @return {!replgoog.math.Coordinate} This coordinate with ceil'd fields.
 */
replgoog.math.Coordinate.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};


/**
 * Rounds the x and y fields to the next smaller integer values.
 * @return {!replgoog.math.Coordinate} This coordinate with floored fields.
 */
replgoog.math.Coordinate.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};


/**
 * Rounds the x and y fields to the nearest integer values.
 * @return {!replgoog.math.Coordinate} This coordinate with rounded fields.
 */
replgoog.math.Coordinate.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};


/**
 * Translates this box by the given offsets. If a {@code replgoog.math.Coordinate}
 * is given, then the x and y values are translated by the coordinate's x and y.
 * Otherwise, x and y are translated by {@code tx} and {@code opt_ty}
 * respectively.
 * @param {number|replgoog.math.Coordinate} tx The value to translate x by or the
 *     the coordinate to translate this coordinate by.
 * @param {number=} opt_ty The value to translate y by.
 * @return {!replgoog.math.Coordinate} This coordinate after translating.
 */
replgoog.math.Coordinate.prototype.translate = function(tx, opt_ty) {
  if (tx instanceof replgoog.math.Coordinate) {
    this.x += tx.x;
    this.y += tx.y;
  } else {
    this.x += tx;
    if (replgoog.isNumber(opt_ty)) {
      this.y += opt_ty;
    }
  }
  return this;
};


/**
 * Scales this coordinate by the given scale factors. The x and y values are
 * scaled by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy}
 * is not given, then {@code sx} is used for both x and y.
 * @param {number} sx The scale factor to use for the x dimension.
 * @param {number=} opt_sy The scale factor to use for the y dimension.
 * @return {!replgoog.math.Coordinate} This coordinate after scaling.
 */
replgoog.math.Coordinate.prototype.scale = function(sx, opt_sy) {
  var sy = replgoog.isNumber(opt_sy) ? opt_sy : sx;
  this.x *= sx;
  this.y *= sy;
  return this;
};


/**
 * Rotates this coordinate clockwise about the origin (or, optionally, the given
 * center) by the given angle, in radians.
 * @param {number} radians The angle by which to rotate this coordinate
 *     clockwise about the given center, in radians.
 * @param {!replgoog.math.Coordinate=} opt_center The center of rotation. Defaults
 *     to (0, 0) if not given.
 */
replgoog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {
  var center = opt_center || new replgoog.math.Coordinate(0, 0);

  var x = this.x;
  var y = this.y;
  var cos = Math.cos(radians);
  var sin = Math.sin(radians);

  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;
  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;
};


/**
 * Rotates this coordinate clockwise about the origin (or, optionally, the given
 * center) by the given angle, in degrees.
 * @param {number} degrees The angle by which to rotate this coordinate
 *     clockwise about the given center, in degrees.
 * @param {!replgoog.math.Coordinate=} opt_center The center of rotation. Defaults
 *     to (0, 0) if not given.
 */
replgoog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {
  this.rotateRadians(replgoog.math.toRadians(degrees), opt_center);
};
