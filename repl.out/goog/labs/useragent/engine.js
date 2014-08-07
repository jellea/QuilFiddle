// Copyright 2013 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Closure user agent detection.
 * @see http://en.wikipedia.org/wiki/User_agent
 * For more information on browser brand, platform, or device see the other
 * sub-namespaces in replgoog.labs.userAgent (browser, platform, and device).
 *
 */

replgoog.provide('replgoog.labs.userAgent.engine');

replgoog.require('replgoog.array');
replgoog.require('replgoog.labs.userAgent.util');
replgoog.require('replgoog.string');


/**
 * @return {boolean} Whether the rendering engine is Presto.
 */
replgoog.labs.userAgent.engine.isPresto = function() {
  return replgoog.labs.userAgent.util.matchUserAgent('Presto');
};


/**
 * @return {boolean} Whether the rendering engine is Trident.
 */
replgoog.labs.userAgent.engine.isTrident = function() {
  // IE only started including the Trident token in IE8.
  return replgoog.labs.userAgent.util.matchUserAgent('Trident') ||
      replgoog.labs.userAgent.util.matchUserAgent('MSIE');
};


/**
 * @return {boolean} Whether the rendering engine is WebKit.
 */
replgoog.labs.userAgent.engine.isWebKit = function() {
  return replgoog.labs.userAgent.util.matchUserAgentIgnoreCase('WebKit');
};


/**
 * @return {boolean} Whether the rendering engine is Gecko.
 */
replgoog.labs.userAgent.engine.isGecko = function() {
  return replgoog.labs.userAgent.util.matchUserAgent('Gecko') &&
      !replgoog.labs.userAgent.engine.isWebKit() &&
      !replgoog.labs.userAgent.engine.isTrident();
};


/**
 * @return {string} The rendering engine's version or empty string if version
 *     can't be determined.
 */
replgoog.labs.userAgent.engine.getVersion = function() {
  var userAgentString = replgoog.labs.userAgent.util.getUserAgent();
  if (userAgentString) {
    var tuples = replgoog.labs.userAgent.util.extractVersionTuples(
        userAgentString);

    var engineTuple = tuples[1];
    if (engineTuple) {
      // In Gecko, the version string is either in the browser info or the
      // Firefox version.  See Gecko user agent string reference:
      // http://goo.gl/mULqa
      if (engineTuple[0] == 'Gecko') {
        return replgoog.labs.userAgent.engine.getVersionForKey_(
            tuples, 'Firefox');
      }

      return engineTuple[1];
    }

    // IE has only one version identifier, and the Trident version is
    // specified in the parenthetical.
    var browserTuple = tuples[0];
    var info;
    if (browserTuple && (info = browserTuple[2])) {
      var match = /Trident\/([^\s;]+)/.exec(info);
      if (match) {
        return match[1];
      }
    }
  }
  return '';
};


/**
 * @param {string|number} version The version to check.
 * @return {boolean} Whether the rendering engine version is higher or the same
 *     as the given version.
 */
replgoog.labs.userAgent.engine.isVersionOrHigher = function(version) {
  return replgoog.string.compareVersions(replgoog.labs.userAgent.engine.getVersion(),
                                     version) >= 0;
};


/**
 * @param {!Array.<!Array.<string>>} tuples Version tuples.
 * @param {string} key The key to look for.
 * @return {string} The version string of the given key, if present.
 *     Otherwise, the empty string.
 * @private
 */
replgoog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {
  // TODO(nnaze): Move to util if useful elsewhere.

  var pair = replgoog.array.find(tuples, function(pair) {
    return key == pair[0];
  });

  return pair && pair[1] || '';
};
