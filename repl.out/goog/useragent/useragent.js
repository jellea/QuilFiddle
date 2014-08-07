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
 * @fileoverview Rendering engine detection.
 * @see <a href="http://www.useragentstring.com/">User agent strings</a>
 * For information on the browser brand (such as Safari versus Chrome), see
 * replgoog.userAgent.product.
 * @see ../demos/useragent.html
 */

replgoog.provide('replgoog.userAgent');

replgoog.require('replgoog.labs.userAgent.browser');
replgoog.require('replgoog.labs.userAgent.engine');
replgoog.require('replgoog.labs.userAgent.util');
replgoog.require('replgoog.string');


/**
 * @define {boolean} Whether we know at compile-time that the browser is IE.
 */
replgoog.define('replgoog.userAgent.ASSUME_IE', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is GECKO.
 */
replgoog.define('replgoog.userAgent.ASSUME_GECKO', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is WEBKIT.
 */
replgoog.define('replgoog.userAgent.ASSUME_WEBKIT', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is a
 *     mobile device running WebKit e.g. iPhone or Android.
 */
replgoog.define('replgoog.userAgent.ASSUME_MOBILE_WEBKIT', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is OPERA.
 */
replgoog.define('replgoog.userAgent.ASSUME_OPERA', false);


/**
 * @define {boolean} Whether the
 *     {@code replgoog.userAgent.isVersionOrHigher}
 *     function will return true for any version.
 */
replgoog.define('replgoog.userAgent.ASSUME_ANY_VERSION', false);


/**
 * Whether we know the browser engine at compile-time.
 * @type {boolean}
 * @private
 */
replgoog.userAgent.BROWSER_KNOWN_ =
    replgoog.userAgent.ASSUME_IE ||
    replgoog.userAgent.ASSUME_GECKO ||
    replgoog.userAgent.ASSUME_MOBILE_WEBKIT ||
    replgoog.userAgent.ASSUME_WEBKIT ||
    replgoog.userAgent.ASSUME_OPERA;


/**
 * Returns the userAgent string for the current browser.
 *
 * @return {string} The userAgent string.
 */
replgoog.userAgent.getUserAgentString = function() {
  return replgoog.labs.userAgent.util.getUserAgent();
};


/**
 * TODO(nnaze): Change type to "Navigator" and update compilation targets.
 * @return {Object} The native navigator object.
 */
replgoog.userAgent.getNavigator = function() {
  // Need a local navigator reference instead of using the global one,
  // to avoid the rare case where they reference different objects.
  // (in a WorkerPool, for example).
  return replgoog.global['navigator'] || null;
};


/**
 * Whether the user agent is Opera.
 * @type {boolean}
 */
replgoog.userAgent.OPERA = replgoog.userAgent.BROWSER_KNOWN_ ?
    replgoog.userAgent.ASSUME_OPERA :
    replgoog.labs.userAgent.browser.isOpera();


/**
 * Whether the user agent is Internet Explorer.
 * @type {boolean}
 */
replgoog.userAgent.IE = replgoog.userAgent.BROWSER_KNOWN_ ?
    replgoog.userAgent.ASSUME_IE :
    replgoog.labs.userAgent.browser.isIE();


/**
 * Whether the user agent is Gecko. Gecko is the rendering engine used by
 * Mozilla, Firefox, and others.
 * @type {boolean}
 */
replgoog.userAgent.GECKO = replgoog.userAgent.BROWSER_KNOWN_ ?
    replgoog.userAgent.ASSUME_GECKO :
    replgoog.labs.userAgent.engine.isGecko();


/**
 * Whether the user agent is WebKit. WebKit is the rendering engine that
 * Safari, Android and others use.
 * @type {boolean}
 */
replgoog.userAgent.WEBKIT = replgoog.userAgent.BROWSER_KNOWN_ ?
    replgoog.userAgent.ASSUME_WEBKIT || replgoog.userAgent.ASSUME_MOBILE_WEBKIT :
    replgoog.labs.userAgent.engine.isWebKit();


/**
 * Whether the user agent is running on a mobile device.
 *
 * This is a separate function so that the logic can be tested.
 *
 * TODO(nnaze): Investigate swapping in replgoog.labs.userAgent.device.isMobile().
 *
 * @return {boolean} Whether the user agent is running on a mobile device.
 * @private
 */
replgoog.userAgent.isMobile_ = function() {
  return replgoog.userAgent.WEBKIT &&
         replgoog.labs.userAgent.util.matchUserAgent('Mobile');
};


/**
 * Whether the user agent is running on a mobile device.
 *
 * TODO(nnaze): Consider deprecating MOBILE when labs.userAgent
 *   is promoted as the gecko/webkit logic is likely inaccurate.
 *
 * @type {boolean}
 */
replgoog.userAgent.MOBILE = replgoog.userAgent.ASSUME_MOBILE_WEBKIT ||
                        replgoog.userAgent.isMobile_();


/**
 * Used while transitioning code to use WEBKIT instead.
 * @type {boolean}
 * @deprecated Use {@link replgoog.userAgent.product.SAFARI} instead.
 * TODO(nicksantos): Delete this from replgoog.userAgent.
 */
replgoog.userAgent.SAFARI = replgoog.userAgent.WEBKIT;


/**
 * @return {string} the platform (operating system) the user agent is running
 *     on. Default to empty string because navigator.platform may not be defined
 *     (on Rhino, for example).
 * @private
 */
replgoog.userAgent.determinePlatform_ = function() {
  var navigator = replgoog.userAgent.getNavigator();
  return navigator && navigator.platform || '';
};


/**
 * The platform (operating system) the user agent is running on. Default to
 * empty string because navigator.platform may not be defined (on Rhino, for
 * example).
 * @type {string}
 */
replgoog.userAgent.PLATFORM = replgoog.userAgent.determinePlatform_();


/**
 * @define {boolean} Whether the user agent is running on a Macintosh operating
 *     system.
 */
replgoog.define('replgoog.userAgent.ASSUME_MAC', false);


/**
 * @define {boolean} Whether the user agent is running on a Windows operating
 *     system.
 */
replgoog.define('replgoog.userAgent.ASSUME_WINDOWS', false);


/**
 * @define {boolean} Whether the user agent is running on a Linux operating
 *     system.
 */
replgoog.define('replgoog.userAgent.ASSUME_LINUX', false);


/**
 * @define {boolean} Whether the user agent is running on a X11 windowing
 *     system.
 */
replgoog.define('replgoog.userAgent.ASSUME_X11', false);


/**
 * @define {boolean} Whether the user agent is running on Android.
 */
replgoog.define('replgoog.userAgent.ASSUME_ANDROID', false);


/**
 * @define {boolean} Whether the user agent is running on an iPhone.
 */
replgoog.define('replgoog.userAgent.ASSUME_IPHONE', false);


/**
 * @define {boolean} Whether the user agent is running on an iPad.
 */
replgoog.define('replgoog.userAgent.ASSUME_IPAD', false);


/**
 * @type {boolean}
 * @private
 */
replgoog.userAgent.PLATFORM_KNOWN_ =
    replgoog.userAgent.ASSUME_MAC ||
    replgoog.userAgent.ASSUME_WINDOWS ||
    replgoog.userAgent.ASSUME_LINUX ||
    replgoog.userAgent.ASSUME_X11 ||
    replgoog.userAgent.ASSUME_ANDROID ||
    replgoog.userAgent.ASSUME_IPHONE ||
    replgoog.userAgent.ASSUME_IPAD;


/**
 * Initialize the replgoog.userAgent constants that define which platform the user
 * agent is running on.
 * @private
 */
replgoog.userAgent.initPlatform_ = function() {
  /**
   * Whether the user agent is running on a Macintosh operating system.
   * @type {boolean}
   * @private
   */
  replgoog.userAgent.detectedMac_ = replgoog.string.contains(replgoog.userAgent.PLATFORM,
      'Mac');

  /**
   * Whether the user agent is running on a Windows operating system.
   * @type {boolean}
   * @private
   */
  replgoog.userAgent.detectedWindows_ = replgoog.string.contains(
      replgoog.userAgent.PLATFORM, 'Win');

  /**
   * Whether the user agent is running on a Linux operating system.
   * @type {boolean}
   * @private
   */
  replgoog.userAgent.detectedLinux_ = replgoog.string.contains(replgoog.userAgent.PLATFORM,
      'Linux');

  /**
   * Whether the user agent is running on a X11 windowing system.
   * @type {boolean}
   * @private
   */
  replgoog.userAgent.detectedX11_ = !!replgoog.userAgent.getNavigator() &&
      replgoog.string.contains(replgoog.userAgent.getNavigator()['appVersion'] || '',
          'X11');

  // Need user agent string for Android/IOS detection
  var ua = replgoog.userAgent.getUserAgentString();

  /**
   * Whether the user agent is running on Android.
   * @type {boolean}
   * @private
   */
  replgoog.userAgent.detectedAndroid_ = !!ua &&
      replgoog.string.contains(ua, 'Android');

  /**
   * Whether the user agent is running on an iPhone.
   * @type {boolean}
   * @private
   */
  replgoog.userAgent.detectedIPhone_ = !!ua && replgoog.string.contains(ua, 'iPhone');

  /**
   * Whether the user agent is running on an iPad.
   * @type {boolean}
   * @private
   */
  replgoog.userAgent.detectedIPad_ = !!ua && replgoog.string.contains(ua, 'iPad');
};


if (!replgoog.userAgent.PLATFORM_KNOWN_) {
  replgoog.userAgent.initPlatform_();
}


/**
 * Whether the user agent is running on a Macintosh operating system.
 * @type {boolean}
 */
replgoog.userAgent.MAC = replgoog.userAgent.PLATFORM_KNOWN_ ?
    replgoog.userAgent.ASSUME_MAC : replgoog.userAgent.detectedMac_;


/**
 * Whether the user agent is running on a Windows operating system.
 * @type {boolean}
 */
replgoog.userAgent.WINDOWS = replgoog.userAgent.PLATFORM_KNOWN_ ?
    replgoog.userAgent.ASSUME_WINDOWS : replgoog.userAgent.detectedWindows_;


/**
 * Whether the user agent is running on a Linux operating system.
 * @type {boolean}
 */
replgoog.userAgent.LINUX = replgoog.userAgent.PLATFORM_KNOWN_ ?
    replgoog.userAgent.ASSUME_LINUX : replgoog.userAgent.detectedLinux_;


/**
 * Whether the user agent is running on a X11 windowing system.
 * @type {boolean}
 */
replgoog.userAgent.X11 = replgoog.userAgent.PLATFORM_KNOWN_ ?
    replgoog.userAgent.ASSUME_X11 : replgoog.userAgent.detectedX11_;


/**
 * Whether the user agent is running on Android.
 * @type {boolean}
 */
replgoog.userAgent.ANDROID = replgoog.userAgent.PLATFORM_KNOWN_ ?
    replgoog.userAgent.ASSUME_ANDROID : replgoog.userAgent.detectedAndroid_;


/**
 * Whether the user agent is running on an iPhone.
 * @type {boolean}
 */
replgoog.userAgent.IPHONE = replgoog.userAgent.PLATFORM_KNOWN_ ?
    replgoog.userAgent.ASSUME_IPHONE : replgoog.userAgent.detectedIPhone_;


/**
 * Whether the user agent is running on an iPad.
 * @type {boolean}
 */
replgoog.userAgent.IPAD = replgoog.userAgent.PLATFORM_KNOWN_ ?
    replgoog.userAgent.ASSUME_IPAD : replgoog.userAgent.detectedIPad_;


/**
 * @return {string} The string that describes the version number of the user
 *     agent.
 * @private
 */
replgoog.userAgent.determineVersion_ = function() {
  // All browsers have different ways to detect the version and they all have
  // different naming schemes.

  // version is a string rather than a number because it may contain 'b', 'a',
  // and so on.
  var version = '', re;

  if (replgoog.userAgent.OPERA && replgoog.global['opera']) {
    var operaVersion = replgoog.global['opera'].version;
    return replgoog.isFunction(operaVersion) ? operaVersion() : operaVersion;
  }

  if (replgoog.userAgent.GECKO) {
    re = /rv\:([^\);]+)(\)|;)/;
  } else if (replgoog.userAgent.IE) {
    re = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
  } else if (replgoog.userAgent.WEBKIT) {
    // WebKit/125.4
    re = /WebKit\/(\S+)/;
  }

  if (re) {
    var arr = re.exec(replgoog.userAgent.getUserAgentString());
    version = arr ? arr[1] : '';
  }

  if (replgoog.userAgent.IE) {
    // IE9 can be in document mode 9 but be reporting an inconsistent user agent
    // version.  If it is identifying as a version lower than 9 we take the
    // documentMode as the version instead.  IE8 has similar behavior.
    // It is recommended to set the X-UA-Compatible header to ensure that IE9
    // uses documentMode 9.
    var docMode = replgoog.userAgent.getDocumentMode_();
    if (docMode > parseFloat(version)) {
      return String(docMode);
    }
  }

  return version;
};


/**
 * @return {number|undefined} Returns the document mode (for testing).
 * @private
 */
replgoog.userAgent.getDocumentMode_ = function() {
  // NOTE(user): replgoog.userAgent may be used in context where there is no DOM.
  var doc = replgoog.global['document'];
  return doc ? doc['documentMode'] : undefined;
};


/**
 * The version of the user agent. This is a string because it might contain
 * 'b' (as in beta) as well as multiple dots.
 * @type {string}
 */
replgoog.userAgent.VERSION = replgoog.userAgent.determineVersion_();


/**
 * Compares two version numbers.
 *
 * @param {string} v1 Version of first item.
 * @param {string} v2 Version of second item.
 *
 * @return {number}  1 if first argument is higher
 *                   0 if arguments are equal
 *                  -1 if second argument is higher.
 * @deprecated Use replgoog.string.compareVersions.
 */
replgoog.userAgent.compare = function(v1, v2) {
  return replgoog.string.compareVersions(v1, v2);
};


/**
 * Cache for {@link replgoog.userAgent.isVersionOrHigher}.
 * Calls to compareVersions are surprisingly expensive and, as a browser's
 * version number is unlikely to change during a session, we cache the results.
 * @const
 * @private
 */
replgoog.userAgent.isVersionOrHigherCache_ = {};


/**
 * Whether the user agent version is higher or the same as the given version.
 * NOTE: When checking the version numbers for Firefox and Safari, be sure to
 * use the engine's version, not the browser's version number.  For example,
 * Firefox 3.0 corresponds to Gecko 1.9 and Safari 3.0 to Webkit 522.11.
 * Opera and Internet Explorer versions match the product release number.<br>
 * @see <a href="http://en.wikipedia.org/wiki/Safari_version_history">
 *     Webkit</a>
 * @see <a href="http://en.wikipedia.org/wiki/Gecko_engine">Gecko</a>
 *
 * @param {string|number} version The version to check.
 * @return {boolean} Whether the user agent version is higher or the same as
 *     the given version.
 */
replgoog.userAgent.isVersionOrHigher = function(version) {
  return replgoog.userAgent.ASSUME_ANY_VERSION ||
      replgoog.userAgent.isVersionOrHigherCache_[version] ||
      (replgoog.userAgent.isVersionOrHigherCache_[version] =
          replgoog.string.compareVersions(replgoog.userAgent.VERSION, version) >= 0);
};


/**
 * Deprecated alias to {@code replgoog.userAgent.isVersionOrHigher}.
 * @param {string|number} version The version to check.
 * @return {boolean} Whether the user agent version is higher or the same as
 *     the given version.
 * @deprecated Use replgoog.userAgent.isVersionOrHigher().
 */
replgoog.userAgent.isVersion = replgoog.userAgent.isVersionOrHigher;


/**
 * Whether the IE effective document mode is higher or the same as the given
 * document mode version.
 * NOTE: Only for IE, return false for another browser.
 *
 * @param {number} documentMode The document mode version to check.
 * @return {boolean} Whether the IE effective document mode is higher or the
 *     same as the given version.
 */
replgoog.userAgent.isDocumentModeOrHigher = function(documentMode) {
  return replgoog.userAgent.IE && replgoog.userAgent.DOCUMENT_MODE >= documentMode;
};


/**
 * Deprecated alias to {@code replgoog.userAgent.isDocumentModeOrHigher}.
 * @param {number} version The version to check.
 * @return {boolean} Whether the IE effective document mode is higher or the
 *      same as the given version.
 * @deprecated Use replgoog.userAgent.isDocumentModeOrHigher().
 */
replgoog.userAgent.isDocumentMode = replgoog.userAgent.isDocumentModeOrHigher;


/**
 * For IE version < 7, documentMode is undefined, so attempt to use the
 * CSS1Compat property to see if we are in standards mode. If we are in
 * standards mode, treat the browser version as the document mode. Otherwise,
 * IE is emulating version 5.
 * @type {number|undefined}
 * @const
 */
replgoog.userAgent.DOCUMENT_MODE = (function() {
  var doc = replgoog.global['document'];
  if (!doc || !replgoog.userAgent.IE) {
    return undefined;
  }
  var mode = replgoog.userAgent.getDocumentMode_();
  return mode || (doc['compatMode'] == 'CSS1Compat' ?
      parseInt(replgoog.userAgent.VERSION, 10) : 5);
})();
