"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function getDefaultExportFromCjs(x) {
  return x &&
    x.__esModule &&
    Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}

var react = { exports: {} };

var react_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined",
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(
        function (n) {
          return test2[n];
        },
      );
      if (order2.join("") !== "0123456789") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function (letter) {
        test3[letter] = letter;
      });
      if (
        Object.keys(Object.assign({}, test3)).join("") !==
        "abcdefghijklmnopqrst"
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
  return objectAssign;
}

/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = requireObjectAssign(),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;
  function C(a) {
    for (
      var b =
          "https://reactjs.org/docs/error-decoder.html?invariant=" +
          a,
        c = 1;
      c < arguments.length;
      c++
    )
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return (
      "Minified React error #" +
      a +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = {};
  function F(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = E;
    this.updater = c || D;
  }
  F.prototype.isReactComponent = {};
  F.prototype.setState = function (a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a)
      throw Error(C(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  F.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function G() {}
  G.prototype = F.prototype;
  function H(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = E;
    this.updater = c || D;
  }
  var I = (H.prototype = new G());
  I.constructor = H;
  l(I, F.prototype);
  I.isPureReactComponent = !0;
  var J = { current: null },
    K = Object.prototype.hasOwnProperty,
    L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(a, b, c) {
    var e,
      d = {},
      g = null,
      k = null;
    if (null != b)
      for (e in (void 0 !== b.ref && (k = b.ref),
      void 0 !== b.key && (g = "" + b.key),
      b))
        K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
    var f = arguments.length - 2;
    if (1 === f) d.children = c;
    else if (1 < f) {
      for (var h = Array(f), m = 0; m < f; m++)
        h[m] = arguments[m + 2];
      d.children = h;
    }
    if (a && a.defaultProps)
      for (e in ((f = a.defaultProps), f))
        void 0 === d[e] && (d[e] = f[e]);
    return {
      $$typeof: p,
      type: a,
      key: g,
      ref: k,
      props: d,
      _owner: J.current,
    };
  }
  function N(a, b) {
    return {
      $$typeof: p,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner,
    };
  }
  function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === p;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return (
      "$" +
      ("" + a).replace(/[=:]/g, function (a) {
        return b[a];
      })
    );
  }
  var P = /\/+/g,
    Q = [];
  function R(a, b, c, e) {
    if (Q.length) {
      var d = Q.pop();
      d.result = a;
      d.keyPrefix = b;
      d.func = c;
      d.context = e;
      d.count = 0;
      return d;
    }
    return { result: a, keyPrefix: b, func: c, context: e, count: 0 };
  }
  function S(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > Q.length && Q.push(a);
  }
  function T(a, b, c, e) {
    var d = typeof a;
    if ("undefined" === d || "boolean" === d) a = null;
    var g = !1;
    if (null === a) g = !0;
    else
      switch (d) {
        case "string":
        case "number":
          g = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case p:
            case q:
              g = !0;
          }
      }
    if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
    g = 0;
    b = "" === b ? "." : b + ":";
    if (Array.isArray(a))
      for (var k = 0; k < a.length; k++) {
        d = a[k];
        var f = b + U(d, k);
        g += T(d, f, c, e);
      }
    else if (
      (null === a || "object" !== typeof a
        ? (f = null)
        : ((f = (B && a[B]) || a["@@iterator"]),
          (f = "function" === typeof f ? f : null)),
      "function" === typeof f)
    )
      for (a = f.call(a), k = 0; !(d = a.next()).done; )
        (d = d.value), (f = b + U(d, k++)), (g += T(d, f, c, e));
    else if ("object" === d)
      throw (
        ((c = "" + a),
        Error(
          C(
            31,
            "[object Object]" === c
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : c,
            "",
          ),
        ))
      );
    return g;
  }
  function V(a, b, c) {
    return null == a ? 0 : T(a, "", b, c);
  }
  function U(a, b) {
    return "object" === typeof a && null !== a && null != a.key
      ? escape(a.key)
      : b.toString(36);
  }
  function W(a, b) {
    a.func.call(a.context, b, a.count++);
  }
  function aa(a, b, c) {
    var e = a.result,
      d = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a)
      ? X(a, e, c, function (a) {
          return a;
        })
      : null != a &&
        (O(a) &&
          (a = N(
            a,
            d +
              (!a.key || (b && b.key === a.key)
                ? ""
                : ("" + a.key).replace(P, "$&/") + "/") +
              c,
          )),
        e.push(a));
  }
  function X(a, b, c, e, d) {
    var g = "";
    null != c && (g = ("" + c).replace(P, "$&/") + "/");
    b = R(b, g, e, d);
    V(a, aa, b);
    S(b);
  }
  var Y = { current: null };
  function Z() {
    var a = Y.current;
    if (null === a) throw Error(C(321));
    return a;
  }
  var ba = {
    ReactCurrentDispatcher: Y,
    ReactCurrentBatchConfig: { suspense: null },
    ReactCurrentOwner: J,
    IsSomeRendererActing: { current: !1 },
    assign: l,
  };
  react_production_min.Children = {
    map: function (a, b, c) {
      if (null == a) return a;
      var e = [];
      X(a, e, null, b, c);
      return e;
    },
    forEach: function (a, b, c) {
      if (null == a) return a;
      b = R(null, null, b, c);
      V(a, W, b);
      S(b);
    },
    count: function (a) {
      return V(
        a,
        function () {
          return null;
        },
        null,
      );
    },
    toArray: function (a) {
      var b = [];
      X(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      if (!O(a)) throw Error(C(143));
      return a;
    },
  };
  react_production_min.Component = F;
  react_production_min.Fragment = r;
  react_production_min.Profiler = u;
  react_production_min.PureComponent = H;
  react_production_min.StrictMode = t;
  react_production_min.Suspense = y;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
    ba;
  react_production_min.cloneElement = function (a, b, c) {
    if (null === a || void 0 === a) throw Error(C(267, a));
    var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;
    if (null != b) {
      void 0 !== b.ref && ((g = b.ref), (k = J.current));
      void 0 !== b.key && (d = "" + b.key);
      if (a.type && a.type.defaultProps) var f = a.type.defaultProps;
      for (h in b)
        K.call(b, h) &&
          !L.hasOwnProperty(h) &&
          (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
    }
    var h = arguments.length - 2;
    if (1 === h) e.children = c;
    else if (1 < h) {
      f = Array(h);
      for (var m = 0; m < h; m++) f[m] = arguments[m + 2];
      e.children = f;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: d,
      ref: g,
      props: e,
      _owner: k,
    };
  };
  react_production_min.createContext = function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    };
    a.Provider = { $$typeof: v, _context: a };
    return (a.Consumer = a);
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function () {
    return { current: null };
  };
  react_production_min.forwardRef = function (a) {
    return { $$typeof: x, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function (a) {
    return { $$typeof: A, _ctor: a, _status: -1, _result: null };
  };
  react_production_min.memo = function (a, b) {
    return { $$typeof: z, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.useCallback = function (a, b) {
    return Z().useCallback(a, b);
  };
  react_production_min.useContext = function (a, b) {
    return Z().useContext(a, b);
  };
  react_production_min.useDebugValue = function () {};
  react_production_min.useEffect = function (a, b) {
    return Z().useEffect(a, b);
  };
  react_production_min.useImperativeHandle = function (a, b, c) {
    return Z().useImperativeHandle(a, b, c);
  };
  react_production_min.useLayoutEffect = function (a, b) {
    return Z().useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function (a, b) {
    return Z().useMemo(a, b);
  };
  react_production_min.useReducer = function (a, b, c) {
    return Z().useReducer(a, b, c);
  };
  react_production_min.useRef = function (a) {
    return Z().useRef(a);
  };
  react_production_min.useState = function (a) {
    return Z().useState(a);
  };
  react_production_min.version = "16.14.0";
  return react_production_min;
}

var react_development = {};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;

  var ReactPropTypesSecret =
    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();

    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {
        /**/
      }
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack,
  ) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; " +
                  "it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`." +
                  "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret,
            );
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") +
                ": type specification of " +
                location +
                " `" +
                typeSpecName +
                "` is invalid; the type checker " +
                "function must return `null` or an `Error` but returned a " +
                typeof error +
                ". " +
                "You may have forgotten to pass an argument to the type checker " +
                "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                "shape all require an argument).",
            );
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : "";

            printWarning(
              "Failed " +
                location +
                " type: " +
                error.message +
                (stack != null ? stack : ""),
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {};
    }
  };

  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development() {
  if (hasRequiredReact_development) return react_development;
  hasRequiredReact_development = 1;

  if (process.env.NODE_ENV !== "production") {
    (function () {
      var _assign = requireObjectAssign();
      var checkPropTypes = requireCheckPropTypes();

      var ReactVersion = "16.14.0";

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol
        ? Symbol.for("react.element")
        : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol
        ? Symbol.for("react.portal")
        : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol
        ? Symbol.for("react.context")
        : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol
        ? Symbol.for("react.memo")
        : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol
        ? Symbol.for("react.lazy")
        : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol
        ? Symbol.for("react.block")
        : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol
        ? Symbol.for("react.scope")
        : 0xead7;
      var MAYBE_ITERATOR_SYMBOL =
        typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (
          maybeIterable === null ||
          typeof maybeIterable !== "object"
        ) {
          return null;
        }

        var maybeIterator =
          (MAYBE_ITERATOR_SYMBOL &&
            maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }

        return null;
      }

      /**
       * Keeps track of the current dispatcher.
       */
      var ReactCurrentDispatcher = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      };

      /**
       * Keeps track of the current batch's configuration such as how long an update
       * should suspend for if it needs to.
       */
      var ReactCurrentBatchConfig = {
        suspense: null,
      };

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      };

      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      function describeComponentFrame(name, source, ownerName) {
        var sourceInfo = "";

        if (source) {
          var path = source.fileName;
          var fileName = path.replace(BEFORE_SLASH_RE, "");

          {
            // In DEV, include code for a common special case:
            // prefer "folder/index.js" instead of just "index.js".
            if (/^index\./.test(fileName)) {
              var match = path.match(BEFORE_SLASH_RE);

              if (match) {
                var pathBeforeSlash = match[1];

                if (pathBeforeSlash) {
                  var folderName = pathBeforeSlash.replace(
                    BEFORE_SLASH_RE,
                    "",
                  );
                  fileName = folderName + "/" + fileName;
                }
              }
            }
          }

          sourceInfo =
            " (at " + fileName + ":" + source.lineNumber + ")";
        } else if (ownerName) {
          sourceInfo = " (created by " + ownerName + ")";
        }

        return "\n    in " + (name || "Unknown") + sourceInfo;
      }

      var Resolved = 1;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved
          ? lazyComponent._result
          : null;
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName =
          innerType.displayName || innerType.name || "";
        return (
          outerType.displayName ||
          (functionName !== ""
            ? wrapperName + "(" + functionName + ")"
            : wrapperName)
        );
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === "number") {
            error(
              "Received an unexpected object in getComponentName(). " +
                "This is likely a bug in React. Please file an issue.",
            );
          }
        }

        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }

        if (typeof type === "string") {
          return type;
        }

        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";

          case REACT_PORTAL_TYPE:
            return "Portal";

          case REACT_PROFILER_TYPE:
            return "Profiler";

          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";

          case REACT_SUSPENSE_TYPE:
            return "Suspense";

          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }

        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return "Context.Consumer";

            case REACT_PROVIDER_TYPE:
              return "Context.Provider";

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);

            case REACT_LAZY_TYPE: {
              var thenable = type;
              var resolvedThenable =
                refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }

              break;
            }
          }
        }

        return null;
      }

      var ReactDebugCurrentFrame = {};
      var currentlyValidatingElement = null;
      function setCurrentlyValidatingElement(element) {
        {
          currentlyValidatingElement = element;
        }
      }

      {
        // Stack implementation injected by the current renderer.
        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var stack = ""; // Add an extra top frame while an element is being validated

          if (currentlyValidatingElement) {
            var name = getComponentName(
              currentlyValidatingElement.type,
            );
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(
              name,
              currentlyValidatingElement._source,
              owner && getComponentName(owner.type),
            );
          } // Delegate to the injected renderer-specific implementation

          var impl = ReactDebugCurrentFrame.getCurrentStack;

          if (impl) {
            stack += impl() || "";
          }

          return stack;
        };
      }

      /**
       * Used by act() to track whether you're inside an act() scope.
       */
      var IsSomeRendererActing = {
        current: false,
      };

      var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign,
      };

      {
        _assign(ReactSharedInternals, {
          // These should not be included in production.
          ReactDebugCurrentFrame: ReactDebugCurrentFrame,
          // Shim for React DOM 16.0.0 which still destructured (but not used) this.
          // TODO: remove in React 17.0.
          ReactComponentTreeHook: {},
        });
      }

      // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key];
          }

          printWarning("warn", format, args);
        }
      }
      function error(format) {
        {
          for (
            var _len2 = arguments.length,
              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning("error", format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var hasExistingStack =
            args.length > 0 &&
            typeof args[args.length - 1] === "string" &&
            args[args.length - 1].indexOf("\n    in") === 0;

          if (!hasExistingStack) {
            var ReactDebugCurrentFrame =
              ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();

            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
          }

          var argsWithFormat = args.map(function (item) {
            return "" + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(
            console[level],
            console,
            argsWithFormat,
          );

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            var argIndex = 0;
            var message =
              "Warning: " +
              format.replace(/%s/g, function () {
                return args[argIndex++];
              });
            throw new Error(message);
          } catch (x) {}
        }
      }

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName =
            (_constructor &&
              (_constructor.displayName || _constructor.name)) ||
            "ReactClass";
          var warningKey = componentName + "." + callerName;

          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }

          error(
            "Can't call %s on a component that is not yet mounted. " +
              "This is a no-op, but it might indicate a bug in your application. " +
              "Instead, assign to `this.state` directly or define a `state = {};` " +
              "class property with the desired state in the %s component.",
            callerName,
            componentName,
          );

          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      /**
       * This is the abstract API for an update queue.
       */

      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function (publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function (
          publicInstance,
          callback,
          callerName,
        ) {
          warnNoop(publicInstance, "forceUpdate");
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function (
          publicInstance,
          completeState,
          callback,
          callerName,
        ) {
          warnNoop(publicInstance, "replaceState");
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function (
          publicInstance,
          partialState,
          callback,
          callerName,
        ) {
          warnNoop(publicInstance, "setState");
        },
      };

      var emptyObject = {};

      {
        Object.freeze(emptyObject);
      }
      /**
       * Base class helpers for the updating state of a component.
       */

      function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.

        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};
      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */

      Component.prototype.setState = function (
        partialState,
        callback,
      ) {
        if (
          !(
            typeof partialState === "object" ||
            typeof partialState === "function" ||
            partialState == null
          )
        ) {
          {
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          }
        }

        this.updater.enqueueSetState(
          this,
          partialState,
          callback,
          "setState",
        );
      };
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */

      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(
          this,
          callback,
          "forceUpdate",
        );
      };
      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */

      {
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in " +
              "componentWillUnmount to prevent memory leaks.",
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see " +
              "https://github.com/facebook/react/issues/3236).",
          ],
        };

        var defineDeprecationWarning = function (methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function () {
              warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info[0],
                info[1],
              );

              return undefined;
            },
          });
        };

        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      function ComponentDummy() {}

      ComponentDummy.prototype = Component.prototype;
      /**
       * Convenience component with default shallow equality check for sCU.
       */

      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var pureComponentPrototype = (PureComponent.prototype =
        new ComponentDummy());
      pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

      _assign(pureComponentPrototype, Component.prototype);

      pureComponentPrototype.isPureReactComponent = true;

      // an immutable object with a single mutable value
      function createRef() {
        var refObject = {
          current: null,
        };

        {
          Object.seal(refObject);
        }

        return refObject;
      }

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true,
      };
      var specialPropKeyWarningShown,
        specialPropRefWarningShown,
        didWarnAboutStringRefs;

      {
        didWarnAboutStringRefs = {};
      }

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(
              config,
              "ref",
            ).get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }

        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(
              config,
              "key",
            ).get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }

        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function () {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;

              error(
                "%s: `key` is not a prop. Trying to access it will result " +
                  "in `undefined` being returned. If you need to access the same " +
                  "value within the child component, you should pass it as a different " +
                  "prop. (https://fb.me/react-special-props)",
                displayName,
              );
            }
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true,
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function () {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;

              error(
                "%s: `ref` is not a prop. Trying to access it will result " +
                  "in `undefined` being returned. If you need to access the same " +
                  "value within the child component, you should pass it as a different " +
                  "prop. (https://fb.me/react-special-props)",
                displayName,
              );
            }
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
          get: warnAboutAccessingRef,
          configurable: true,
        });
      }

      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (
            typeof config.ref === "string" &&
            ReactCurrentOwner.current &&
            config.__self &&
            ReactCurrentOwner.current.stateNode !== config.__self
          ) {
            var componentName = getComponentName(
              ReactCurrentOwner.current.type,
            );

            if (!didWarnAboutStringRefs[componentName]) {
              error(
                'Component "%s" contains the string ref "%s". ' +
                  "Support for string refs will be removed in a future major release. " +
                  "This case cannot be automatically converted to an arrow function. " +
                  "We ask you to manually fix this case by using useRef() or createRef() instead. " +
                  "Learn more about using refs safely here: " +
                  "https://fb.me/react-strict-mode-string-ref",
                getComponentName(ReactCurrentOwner.current.type),
                config.ref,
              );

              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */

      var ReactElement = function (
        type,
        key,
        ref,
        self,
        source,
        owner,
        props,
      ) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner,
        };

        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false,
          }); // self and source are DEV only properties.

          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self,
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source,
          });

          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }

        return element;
      };
      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */

      function createElement(type, config, children) {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;

            {
              warnIfStringRefCannotBeAutoConverted(config);
            }
          }

          if (hasValidKey(config)) {
            key = "" + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source =
            config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

          for (propName in config) {
            if (
              hasOwnProperty.call(config, propName) &&
              !RESERVED_PROPS.hasOwnProperty(propName)
            ) {
              props[propName] = config[propName];
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }

          props.children = childArray;
        } // Resolve default props

        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        {
          if (key || ref) {
            var displayName =
              typeof type === "function"
                ? type.displayName || type.name || "Unknown"
                : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }

        return ReactElement(
          type,
          key,
          ref,
          self,
          source,
          ReactCurrentOwner.current,
          props,
        );
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(
          oldElement.type,
          newKey,
          oldElement.ref,
          oldElement._self,
          oldElement._source,
          oldElement._owner,
          oldElement.props,
        );
        return newElement;
      }
      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */

      function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) {
          {
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                element +
                ".",
            );
          }
        }

        var propName; // Original props are copied

        var props = _assign({}, element.props); // Reserved names are extracted

        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.

        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.

        var source = element._source; // Owner will be preserved, unless ref is overridden

        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }

          if (hasValidKey(config)) {
            key = "" + config.key;
          } // Remaining properties override existing props

          var defaultProps;

          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }

          for (propName in config) {
            if (
              hasOwnProperty.call(config, propName) &&
              !RESERVED_PROPS.hasOwnProperty(propName)
            ) {
              if (
                config[propName] === undefined &&
                defaultProps !== undefined
              ) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          props.children = childArray;
        }

        return ReactElement(
          element.type,
          key,
          ref,
          self,
          source,
          owner,
          props,
        );
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }

      var SEPARATOR = ".";
      var SUBSEPARATOR = ":";
      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          "=": "=0",
          ":": "=2",
        };
        var escapedString = ("" + key).replace(
          escapeRegex,
          function (match) {
            return escaperLookup[match];
          },
        );
        return "$" + escapedString;
      }
      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;

      function escapeUserProvidedKey(text) {
        return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
      }

      var POOL_SIZE = 10;
      var traverseContextPool = [];

      function getPooledTraverseContext(
        mapResult,
        keyPrefix,
        mapFunction,
        mapContext,
      ) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0,
          };
        }
      }

      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;

        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }
      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */

      function traverseAllChildrenImpl(
        children,
        nameSoFar,
        callback,
        traverseContext,
      ) {
        var type = typeof children;

        if (type === "undefined" || type === "boolean") {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case "string":
            case "number":
              invokeCallback = true;
              break;

            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }

        if (invokeCallback) {
          callback(
            traverseContext,
            children, // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows.
            nameSoFar === ""
              ? SEPARATOR + getComponentKey(children, 0)
              : nameSoFar,
          );
          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.

        var nextNamePrefix =
          nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(
              child,
              nextName,
              callback,
              traverseContext,
            );
          }
        } else {
          var iteratorFn = getIteratorFn(children);

          if (typeof iteratorFn === "function") {
            {
              // Warn about using Maps as children
              if (iteratorFn === children.entries) {
                if (!didWarnAboutMaps) {
                  warn(
                    "Using Maps as children is deprecated and will be removed in " +
                      "a future major release. Consider converting children to " +
                      "an array of keyed ReactElements instead.",
                  );
                }

                didWarnAboutMaps = true;
              }
            }

            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;

            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName =
                nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(
                child,
                nextName,
                callback,
                traverseContext,
              );
            }
          } else if (type === "object") {
            var addendum = "";

            {
              addendum =
                " If you meant to render a collection of children, use an array " +
                "instead." +
                ReactDebugCurrentFrame.getStackAddendum();
            }

            var childrenString = "" + children;

            {
              {
                throw Error(
                  "Objects are not valid as a React child (found: " +
                    (childrenString === "[object Object]"
                      ? "object with keys {" +
                        Object.keys(children).join(", ") +
                        "}"
                      : childrenString) +
                    ")." +
                    addendum,
                );
              }
            }
          }
        }

        return subtreeCount;
      }
      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */

      function traverseAllChildren(
        children,
        callback,
        traverseContext,
      ) {
        if (children == null) {
          return 0;
        }

        return traverseAllChildrenImpl(
          children,
          "",
          callback,
          traverseContext,
        );
      }
      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */

      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (
          typeof component === "object" &&
          component !== null &&
          component.key != null
        ) {
          // Explicit key
          return escape(component.key);
        } // Implicit key determined by the index in the set

        return index.toString(36);
      }

      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
          context = bookKeeping.context;
        func.call(context, child, bookKeeping.count++);
      }
      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */

      function forEachChildren(
        children,
        forEachFunc,
        forEachContext,
      ) {
        if (children == null) {
          return children;
        }

        var traverseContext = getPooledTraverseContext(
          null,
          null,
          forEachFunc,
          forEachContext,
        );
        traverseAllChildren(
          children,
          forEachSingleChild,
          traverseContext,
        );
        releaseTraverseContext(traverseContext);
      }

      function mapSingleChildIntoContext(
        bookKeeping,
        child,
        childKey,
      ) {
        var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;
        var mappedChild = func.call(
          context,
          child,
          bookKeeping.count++,
        );

        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(
            mappedChild,
            result,
            childKey,
            function (c) {
              return c;
            },
          );
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(
              mappedChild, // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              keyPrefix +
                (mappedChild.key &&
                (!child || child.key !== mappedChild.key)
                  ? escapeUserProvidedKey(mappedChild.key) + "/"
                  : "") +
                childKey,
            );
          }

          result.push(mappedChild);
        }
      }

      function mapIntoWithKeyPrefixInternal(
        children,
        array,
        prefix,
        func,
        context,
      ) {
        var escapedPrefix = "";

        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + "/";
        }

        var traverseContext = getPooledTraverseContext(
          array,
          escapedPrefix,
          func,
          context,
        );
        traverseAllChildren(
          children,
          mapSingleChildIntoContext,
          traverseContext,
        );
        releaseTraverseContext(traverseContext);
      }
      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenmap
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */

      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }

        var result = [];
        mapIntoWithKeyPrefixInternal(
          children,
          result,
          null,
          func,
          context,
        );
        return result;
      }
      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrencount
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */

      function countChildren(children) {
        return traverseAllChildren(
          children,
          function () {
            return null;
          },
          null,
        );
      }
      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
       */

      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(
          children,
          result,
          null,
          function (child) {
            return child;
          },
        );
        return result;
      }
      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenonly
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */

      function onlyChild(children) {
        if (!isValidElement(children)) {
          {
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          }
        }

        return children;
      }

      function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) {
          calculateChangedBits = null;
        } else {
          {
            if (
              calculateChangedBits !== null &&
              typeof calculateChangedBits !== "function"
            ) {
              error(
                "createContext: Expected the optional second argument to be a " +
                  "function. Instead received: %s",
                calculateChangedBits,
              );
            }
          }
        }

        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context,
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;

        {
          // A separate object, but proxies back to the original context object for
          // backwards compatibility. It has a different $$typeof, so we can properly
          // warn for the incorrect usage of Context as a Consumer.
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits,
          }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

          Object.defineProperties(Consumer, {
            Provider: {
              get: function () {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;

                  error(
                    "Rendering <Context.Consumer.Provider> is not supported and will be removed in " +
                      "a future major release. Did you mean to render <Context.Provider> instead?",
                  );
                }

                return context.Provider;
              },
              set: function (_Provider) {
                context.Provider = _Provider;
              },
            },
            _currentValue: {
              get: function () {
                return context._currentValue;
              },
              set: function (_currentValue) {
                context._currentValue = _currentValue;
              },
            },
            _currentValue2: {
              get: function () {
                return context._currentValue2;
              },
              set: function (_currentValue2) {
                context._currentValue2 = _currentValue2;
              },
            },
            _threadCount: {
              get: function () {
                return context._threadCount;
              },
              set: function (_threadCount) {
                context._threadCount = _threadCount;
              },
            },
            Consumer: {
              get: function () {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;

                  error(
                    "Rendering <Context.Consumer.Consumer> is not supported and will be removed in " +
                      "a future major release. Did you mean to render <Context.Consumer> instead?",
                  );
                }

                return context.Consumer;
              },
            },
          }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

          context.Consumer = Consumer;
        }

        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }

        return context;
      }

      function lazy(ctor) {
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _ctor: ctor,
          // React uses these fields to store the result.
          _status: -1,
          _result: null,
        };

        {
          // In production, this would just set it on the object.
          var defaultProps;
          var propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function () {
                return defaultProps;
              },
              set: function (newDefaultProps) {
                error(
                  "React.lazy(...): It is not supported to assign `defaultProps` to " +
                    "a lazy component import. Either specify them where the component " +
                    "is defined, or create a wrapping component around it.",
                );

                defaultProps = newDefaultProps; // Match production behavior more closely:

                Object.defineProperty(lazyType, "defaultProps", {
                  enumerable: true,
                });
              },
            },
            propTypes: {
              configurable: true,
              get: function () {
                return propTypes;
              },
              set: function (newPropTypes) {
                error(
                  "React.lazy(...): It is not supported to assign `propTypes` to " +
                    "a lazy component import. Either specify them where the component " +
                    "is defined, or create a wrapping component around it.",
                );

                propTypes = newPropTypes; // Match production behavior more closely:

                Object.defineProperty(lazyType, "propTypes", {
                  enumerable: true,
                });
              },
            },
          });
        }

        return lazyType;
      }

      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error(
              "forwardRef requires a render function but received a `memo` " +
                "component. Instead of forwardRef(memo(...)), use " +
                "memo(forwardRef(...)).",
            );
          } else if (typeof render !== "function") {
            error(
              "forwardRef requires a render function but was given %s.",
              render === null ? "null" : typeof render,
            );
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error(
                "forwardRef render functions accept exactly two parameters: props and ref. %s",
                render.length === 1
                  ? "Did you forget to use the ref parameter?"
                  : "Any additional parameter will be undefined.",
              );
            }
          }

          if (render != null) {
            if (
              render.defaultProps != null ||
              render.propTypes != null
            ) {
              error(
                "forwardRef render functions do not support propTypes or defaultProps. " +
                  "Did you accidentally pass a React component?",
              );
            }
          }
        }

        return {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render: render,
        };
      }

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error(
              "memo: The first argument must be a component. Instead " +
                "received: %s",
              type === null ? "null" : typeof type,
            );
          }
        }

        return {
          $$typeof: REACT_MEMO_TYPE,
          type: type,
          compare: compare === undefined ? null : compare,
        };
      }

      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;

        if (!(dispatcher !== null)) {
          {
            throw Error(
              "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.",
            );
          }
        }

        return dispatcher;
      }

      function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();

        {
          if (unstable_observedBits !== undefined) {
            error(
              "useContext() second argument is reserved for future " +
                "use in React. Passing it is not supported. " +
                "You passed: %s.%s",
              unstable_observedBits,
              typeof unstable_observedBits === "number" &&
                Array.isArray(arguments[2])
                ? "\n\nDid you call array.map(useContext)? " +
                    "Calling Hooks inside a loop is not supported. " +
                    "Learn more at https://fb.me/rules-of-hooks"
                : "",
            );
          } // TODO: add a more generic warning for invalid values.

          if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.

            if (realContext.Consumer === Context) {
              error(
                "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " +
                  "removed in a future major release. Did you mean to call useContext(Context) instead?",
              );
            } else if (realContext.Provider === Context) {
              error(
                "Calling useContext(Context.Provider) is not supported. " +
                  "Did you mean to call useContext(Context) instead?",
              );
            }
          }
        }

        return dispatcher.useContext(Context, unstable_observedBits);
      }
      function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }

      var propTypesMisspellWarningShown;

      {
        propTypesMisspellWarningShown = false;
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);

          if (name) {
            return "\n\nCheck the render method of `" + name + "`.";
          }
        }

        return "";
      }

      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, "");
          var lineNumber = source.lineNumber;
          return (
            "\n\nCheck your code at " +
            fileName +
            ":" +
            lineNumber +
            "."
          );
        }

        return "";
      }

      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }

        return "";
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */

      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName =
            typeof parentType === "string"
              ? parentType
              : parentType.displayName || parentType.name;

          if (parentName) {
            info =
              "\n\nCheck the top-level render call using <" +
              parentName +
              ">.";
          }
        }

        return info;
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */

      function validateExplicitKey(element, parentType) {
        if (
          !element._store ||
          element._store.validated ||
          element.key != null
        ) {
          return;
        }

        element._store.validated = true;
        var currentComponentErrorInfo =
          getCurrentComponentErrorInfo(parentType);

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = "";

        if (
          element &&
          element._owner &&
          element._owner !== ReactCurrentOwner.current
        ) {
          // Give the component that originally created this child.
          childOwner =
            " It was passed a child from " +
            getComponentName(element._owner.type) +
            ".";
        }

        setCurrentlyValidatingElement(element);

        {
          error(
            'Each child in a list should have a unique "key" prop.' +
              "%s%s See https://fb.me/react-warning-keys for more information.",
            currentComponentErrorInfo,
            childOwner,
          );
        }

        setCurrentlyValidatingElement(null);
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */

      function validateChildKeys(node, parentType) {
        if (typeof node !== "object") {
          return;
        }

        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];

            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);

          if (typeof iteratorFn === "function") {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;

              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */

      function validatePropTypes(element) {
        {
          var type = element.type;

          if (
            type === null ||
            type === undefined ||
            typeof type === "string"
          ) {
            return;
          }

          var name = getComponentName(type);
          var propTypes;

          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (
            typeof type === "object" &&
            (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)
          ) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            setCurrentlyValidatingElement(element);
            checkPropTypes(
              propTypes,
              element.props,
              "prop",
              name,
              ReactDebugCurrentFrame.getStackAddendum,
            );
            setCurrentlyValidatingElement(null);
          } else if (
            type.PropTypes !== undefined &&
            !propTypesMisspellWarningShown
          ) {
            propTypesMisspellWarningShown = true;

            error(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              name || "Unknown",
            );
          }

          if (
            typeof type.getDefaultProps === "function" &&
            !type.getDefaultProps.isReactClassApproved
          ) {
            error(
              "getDefaultProps is only used on classic React.createClass " +
                "definitions. Use a static property named `defaultProps` instead.",
            );
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */

      function validateFragmentProps(fragment) {
        {
          setCurrentlyValidatingElement(fragment);
          var keys = Object.keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== "children" && key !== "key") {
              error(
                "Invalid prop `%s` supplied to `React.Fragment`. " +
                  "React.Fragment can only have `key` and `children` props.",
                key,
              );

              break;
            }
          }

          if (fragment.ref !== null) {
            error(
              "Invalid attribute `ref` supplied to `React.Fragment`.",
            );
          }

          setCurrentlyValidatingElement(null);
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = "";

          if (
            type === undefined ||
            (typeof type === "object" &&
              type !== null &&
              Object.keys(type).length === 0)
          ) {
            info +=
              " You likely forgot to export your component from the file " +
              "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendumForProps(props);

          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          var typeString;

          if (type === null) {
            typeString = "null";
          } else if (Array.isArray(type)) {
            typeString = "array";
          } else if (
            type !== undefined &&
            type.$$typeof === REACT_ELEMENT_TYPE
          ) {
            typeString =
              "<" +
              (getComponentName(type.type) || "Unknown") +
              " />";
            info =
              " Did you accidentally export a JSX literal instead of a component?";
          } else {
            typeString = typeof type;
          }

          {
            error(
              "React.createElement: type is invalid -- expected a string (for " +
                "built-in components) or a class/function (for composite " +
                "components) but got: %s.%s",
              typeString,
              info,
            );
          }
        }

        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)

        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }
      var didWarnAboutDeprecatedCreateFactory = false;
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(
          null,
          type,
        );
        validatedFactory.type = type;

        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;

            warn(
              "React.createFactory() is deprecated and will be removed in " +
                "a future major release. Consider using JSX " +
                "or use React.createElement() directly instead.",
            );
          } // Legacy hook: remove it

          Object.defineProperty(validatedFactory, "type", {
            enumerable: false,
            get: function () {
              warn(
                "Factory.type is deprecated. Access the class directly " +
                  "before passing it to createFactory.",
              );

              Object.defineProperty(this, "type", {
                value: type,
              });
              return type;
            },
          });
        }

        return validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);

        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }

        validatePropTypes(newElement);
        return newElement;
      }

      {
        try {
          var frozenObject = Object.freeze({});
          var testMap = new Map([[frozenObject, null]]);
          var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
          // https://github.com/rollup/rollup/issues/1771
          // TODO: we can remove these if Rollup fixes the bug.

          testMap.set(0, 0);
          testSet.add(0);
        } catch (e) {}
      }

      var createElement$1 = createElementWithValidation;
      var cloneElement$1 = cloneElementWithValidation;
      var createFactory = createFactoryWithValidation;
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild,
      };

      react_development.Children = Children;
      react_development.Component = Component;
      react_development.Fragment = REACT_FRAGMENT_TYPE;
      react_development.Profiler = REACT_PROFILER_TYPE;
      react_development.PureComponent = PureComponent;
      react_development.StrictMode = REACT_STRICT_MODE_TYPE;
      react_development.Suspense = REACT_SUSPENSE_TYPE;
      react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
        ReactSharedInternals;
      react_development.cloneElement = cloneElement$1;
      react_development.createContext = createContext;
      react_development.createElement = createElement$1;
      react_development.createFactory = createFactory;
      react_development.createRef = createRef;
      react_development.forwardRef = forwardRef;
      react_development.isValidElement = isValidElement;
      react_development.lazy = lazy;
      react_development.memo = memo;
      react_development.useCallback = useCallback;
      react_development.useContext = useContext;
      react_development.useDebugValue = useDebugValue;
      react_development.useEffect = useEffect;
      react_development.useImperativeHandle = useImperativeHandle;
      react_development.useLayoutEffect = useLayoutEffect;
      react_development.useMemo = useMemo;
      react_development.useReducer = useReducer;
      react_development.useRef = useRef;
      react_development.useState = useState;
      react_development.version = ReactVersion;
    })();
  }
  return react_development;
}

(function (module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = requireReact_production_min();
  } else {
    module.exports = requireReact_development();
  }
})(react);

var React = /*@__PURE__*/ getDefaultExportFromCjs(react.exports);

var propTypes = { exports: {} };

var reactIs = { exports: {} };

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g ||
      a === f ||
      a === p ||
      a === q ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === t ||
          a.$$typeof === r ||
          a.$$typeof === h ||
          a.$$typeof === k ||
          a.$$typeof === n ||
          a.$$typeof === w ||
          a.$$typeof === x ||
          a.$$typeof === y ||
          a.$$typeof === v))
    );
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;

  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol
        ? Symbol.for("react.element")
        : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol
        ? Symbol.for("react.portal")
        : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol
        ? Symbol.for("react.context")
        : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol
        ? Symbol.for("react.memo")
        : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol
        ? Symbol.for("react.lazy")
        : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol
        ? Symbol.for("react.block")
        : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol
        ? Symbol.for("react.scope")
        : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API.",
            );
          }
        }

        return (
          isConcurrentMode(object) ||
          typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  (function (module) {
    if (process.env.NODE_ENV === "production") {
      module.exports = requireReactIs_production_min();
    } else {
      module.exports = requireReactIs_development();
    }
  })(reactIs);
  return reactIs.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers)
    return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;

  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();

  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has = requireHas();
  var checkPropTypes = requireCheckPropTypes();

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  factoryWithTypeCheckers = function (
    isValidElement,
    throwOnDirectAccess,
  ) {
    /* global Symbol */
    var ITERATOR_SYMBOL =
      typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = "<<anonymous>>";

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret,
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use `PropTypes.checkPropTypes()` to call them. " +
                "Read more at http://fb.me/use-check-prop-types",
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (
            process.env.NODE_ENV !== "production" &&
            typeof console !== "undefined"
          ) {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ":" + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                "You are manually calling a React.PropTypes validation " +
                  "function for the `" +
                  propFullName +
                  "` prop on `" +
                  componentName +
                  "`. This is deprecated " +
                  "and will throw in the standalone `prop-types` package. " +
                  "You may be seeing this warning due to a third-party PropTypes " +
                  "library. See https://fb.me/react-warning-dont-call-proptypes " +
                  "for details.",
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required " +
                  ("in `" +
                    componentName +
                    "`, but its value is `null`."),
              );
            }
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required in " +
                ("`" +
                  componentName +
                  "`, but its value is `undefined`."),
            );
          }
          return null;
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName,
          );
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret,
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                preciseType +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("`" + expectedType + "`."),
            { expectedType: expectedType },
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside arrayOf.",
          );
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an array."),
          );
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + "[" + i + "]",
            ReactPropTypesSecret,
          );
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement type."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                actualClassName +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("instance of `" + expectedClassName + "`."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " +
                arguments.length +
                " arguments. " +
                "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
            );
          } else {
            printWarning(
              "Invalid argument supplied to oneOf, expected an array.",
            );
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(
          expectedValues,
          function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          },
        );
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            String(propValue) +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected one of " +
              valuesString +
              "."),
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside objectOf.",
          );
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an object."),
          );
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret,
            );
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production"
          ? printWarning(
              "Invalid argument supplied to oneOfType, expected an instance of array.",
            )
          : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
              "received " +
              getPostfixForTypeWarning(checker) +
              " at index " +
              i +
              ".",
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret,
          );
          if (checkerResult == null) {
            return null;
          }
          if (
            checkerResult.data &&
            has(checkerResult.data, "expectedType")
          ) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage =
          expectedTypes.length > 0
            ? ", expected one of type [" +
              expectedTypes.join(", ") +
              "]"
            : "";
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`" + expectedTypesMessage + "."),
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`, expected a ReactNode."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(
      componentName,
      location,
      propFullName,
      key,
      type,
    ) {
      return new PropTypeError(
        (componentName || "React class") +
          ": " +
          location +
          " type `" +
          propFullName +
          "." +
          key +
          "` is invalid; " +
          "it must be a function, usually from the `prop-types` package, but received `" +
          type +
          "`.",
      );
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" +
                componentName +
                "`, expected `object`."),
          );
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret,
          );
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" +
                componentName +
                "`, expected `object`."),
          );
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            );
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` key `" +
                key +
                "` supplied to `" +
                componentName +
                "`." +
                "\nBad object: " +
                JSON.stringify(props[propName], null, "  ") +
                "\nValid keys: " +
                JSON.stringify(Object.keys(shapeTypes), null, "  "),
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret,
          );
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === "symbol") {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (
        typeof Symbol === "function" &&
        propValue instanceof Symbol
      ) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache =
      checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims)
    return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;

  var ReactPropTypesSecret = requireReactPropTypesSecret();

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret,
    ) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
          "Use PropTypes.checkPropTypes() to call them. " +
          "Read more at http://fb.me/use-check-prop-types",
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(
    ReactIs.isElement,
    throwOnDirectAccess,
  );
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var Button = function Button(props) {
  var name = props.name,
    clickHandler = props.clickHandler;
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "button",
      {
        onClick: clickHandler,
        className:
          "b px-3 py-2 mt2 dim ba b--black cursor text-sm font-medium dark-gray",
        type: "button",
      },
      name,
    ),
  );
};

Button.propTypes = {
  clickHandler: propTypes.exports.func.isRequired,
  name: propTypes.exports.string.isRequired,
};

function Card(_ref) {
  var item = _ref.item;
  var image = item.image,
    id = item.id,
    name = item.name,
    creators = item.creators,
    dateCreated = item.dateCreated,
    catalogNumber = item.catalogNumber,
    url = item.url; // const imageStyle = {
  //   backgroundImage: `url(${image})`,
  // };

  var alt = "".concat(name, " by ").concat(creators);
  return /*#__PURE__*/ React.createElement(
    "li",
    {
      key: id,
      className: "card-item",
    },
    /*#__PURE__*/ React.createElement(
      "a",
      {
        href: url,
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "card",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "card-image",
          },
          /*#__PURE__*/ React.createElement("img", {
            src: image,
            alt: alt,
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "card-content",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "card-column",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "card-title",
              },
              name,
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "card-creator",
              },
              creators,
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "card-column card-column-right",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "card-creation-date",
              },
              dateCreated,
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "card-catalog-number",
              },
              catalogNumber,
            ),
          ),
        ),
      ),
    ),
  );
}

Card.propTypes = {
  item: propTypes.exports.shape({
    id: propTypes.exports.string,
    name: propTypes.exports.string,
    creators: propTypes.exports.oneOfType([
      propTypes.exports.string,
      propTypes.exports.arrayOf(propTypes.exports.string),
    ]),
    image: propTypes.exports.string,
    dateCreated: propTypes.exports.oneOfType([
      propTypes.exports.string,
      propTypes.exports.number,
    ]),
    catalogNumber: propTypes.exports.string,
    url: propTypes.exports.string,
  }).isRequired,
};

function asyncGeneratorStep(
  gen,
  resolve,
  reject,
  _next,
  _throw,
  key,
  arg,
) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          "next",
          value,
        );
      }

      function _throw(err) {
        asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          "throw",
          err,
        );
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
        arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (
      _i = _i.call(arr);
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (
    n === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
  )
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}

var Title = function Title(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/ React.createElement(
    "h4",
    {
      className: "f4 font-normal ph0 mh0",
    },
    title,
  );
};
Title.propTypes = {
  title: propTypes.exports.string.isRequired,
};

var mapGoogleBooks = function mapGoogleBooks(item) {
  var _item$volumeInfo = item.volumeInfo,
    name = _item$volumeInfo.title,
    creators = _item$volumeInfo.authors,
    description = _item$volumeInfo.description;
  var remapped = {
    name: name,
    creators: creators,
    description: description,
  };
  remapped.id = item.id;
  return remapped;
};
var mapLastFmAlbums = function mapLastFmAlbums(item) {
  var name = item.name,
    artist = item.artist,
    id = item.mbid,
    url = item.url,
    image = item.image,
    catalogNumber = item.catno,
    dateCreated = item.year;
  var bigImage =
    image[3]["#text"].length > 0
      ? image[3]["#text"]
      : "http://placehold.it/320x320";
  var creators = [artist.name];
  var remapped = {
    dateCreated: dateCreated,
    id: id,
    name: name,
    creators: creators,
    url: url,
    image: bigImage,
    catalogNumber: catalogNumber,
  };
  return remapped;
};
var uniquey = function uniquey(text) {
  var rand = Math.floor(Math.random() * 100000);
  var unique = ""
    .concat(text.toLowerCase().replace(" ", "-"), "-")
    .concat(rand, ")}");
  return unique;
};
var remap = function remap(item, dataSource) {
  switch (dataSource) {
    case "googleBooks":
      return mapGoogleBooks(item);

    case "lastFmAlbums":
      return mapLastFmAlbums(item);

    default:
      return item;
  }
};

var CheckListItem = function CheckListItem(_ref) {
  var item = _ref.item;
  var id = item.id,
    name = item.name,
    creators = item.creators,
    description = item.description,
    updateItemStatus = item.updateItemStatus;

  if (!name && !description) {
    return null;
  }

  var itemCompleted = item.completed;
  var label = "".concat(name, ": ").concat(creators[0]);
  var element = /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "flex items-center mb-2",
      },
      /*#__PURE__*/ React.createElement("input", {
        className: "mr2",
        type: "checkbox",
        id: uniquey(id),
        value: name,
        "aria-label": label,
        checked: itemCompleted,
        onChange: function onChange() {
          return updateItemStatus();
        },
      }),
      /*#__PURE__*/ React.createElement(
        "label",
        {
          htmlFor: uniquey(id),
          className: "leading-normal",
        },
        name,
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "flex mb-2",
      },
      creators
        ? /*#__PURE__*/ React.createElement("text", null, creators)
        : null,
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "flex mb-2",
      },
      description
        ? /*#__PURE__*/ React.createElement("text", null, description)
        : null,
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(
        "button",
        {
          type: "button",
        },
        "Remove",
      ),
    ),
  );
  return element;
};

CheckListItem.propTypes = {
  item: propTypes.exports.oneOfType([
    propTypes.exports.object,
    propTypes.exports.func,
  ]).isRequired,
  updateItemStatus: propTypes.exports.func.isRequired,
};

var CheckList = function CheckList(_ref) {
  var items = _ref.items,
    updateItemStatus = _ref.updateItemStatus,
    title = _ref.title,
    dataSource = _ref.dataSource;

  var _useState = react.exports.useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    newItemValue = _useState2[0],
    setNewItemValue = _useState2[1];

  if (items && items.length > 0) {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      title
        ? /*#__PURE__*/ React.createElement(Title, {
            title: title,
          })
        : null,
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: newItemValue,
        onChange: function onChange(e) {
          return setNewItemValue(e.target.value);
        },
        placeholder: "Add a new item",
      }),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          type: "button",
        },
        "Add item",
      ),
      /*#__PURE__*/ React.createElement(
        "fieldset",
        {
          className: "bn",
        },
        items.map(function (item) {
          var remapped = remap(item, dataSource);
          return /*#__PURE__*/ React.createElement(CheckListItem, {
            key: item.id,
            item: remapped,
            updateItemStatus: updateItemStatus,
          });
        }),
      ),
    );
  }

  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    "No items to show.",
  );
};

CheckList.propTypes = {
  items: propTypes.exports.oneOfType([
    propTypes.exports.array,
    propTypes.exports.object,
  ]),
  title: propTypes.exports.string,
  updateItemStatus: propTypes.exports.func,
  dataSource: propTypes.exports.string,
};
CheckList.defaultProps = {
  items: null,
  title: null,
  updateItemStatus: null,
  dataSource: null,
};

var CloseButton = function CloseButton() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "close-button absolute white bg-dark-gray w2 pvs tc",
    },
    "X",
  );
};

/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

process.env.NODE_ENV !== "production"
  ? function (obj) {
      return Object.freeze(obj);
    }
  : function (obj) {
      return obj;
    };
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */

function createPath(_ref) {
  var _ref$pathname = _ref.pathname,
    pathname = _ref$pathname === void 0 ? "/" : _ref$pathname,
    _ref$search = _ref.search,
    search = _ref$search === void 0 ? "" : _ref$search,
    _ref$hash = _ref.hash,
    hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */

function parsePath(path) {
  var parsedPath = {};

  if (path) {
    var hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    var searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

const NavigationContext =
  /*#__PURE__*/ react.exports.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext =
  /*#__PURE__*/ react.exports.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/ react.exports.createContext({
  outlet: null,
  matches: [],
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

function invariant(cond, message) {
  if (!cond) throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = "",
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname
    ? toPathname.startsWith("/")
      ? toPathname
      : resolvePathname(toPathname, fromPathname)
    : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash),
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname =
    toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.

    from =
      routePathnameIndex >= 0
        ? routePathnames[routePathnameIndex]
        : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (
    toPathname &&
    toPathname !== "/" &&
    toPathname.endsWith("/") &&
    !path.pathname.endsWith("/")
  ) {
    path.pathname += "/";
  }

  return path;
}
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === ""
    ? "/"
    : typeof to === "string"
      ? parsePath(to).pathname
      : to.pathname;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");

const normalizeSearch = (search) =>
  !search || search === "?"
    ? ""
    : search.startsWith("?")
      ? search
      : "?" + search;

const normalizeHash = (hash) =>
  !hash || hash === "#"
    ? ""
    : hash.startsWith("#")
      ? hash
      : "#" + hash;

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function useHref(to) {
  !useInRouterContext()
    ? process.env.NODE_ENV !== "production"
      ? invariant(
          false, // TODO: This error is probably because they somehow have 2 versions of the
          // router loaded. We can help them understand how to avoid that.
          "useHref() may be used only in the context of a <Router> component.",
        )
      : invariant(false)
    : void 0;
  let { basename, navigator } =
    react.exports.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to);
  let joinedPathname = pathname;

  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash =
      toPathname != null && toPathname.endsWith("/");
    joinedPathname =
      pathname === "/"
        ? basename + (endsWithSlash ? "/" : "")
        : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash,
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return react.exports.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function useLocation() {
  !useInRouterContext()
    ? process.env.NODE_ENV !== "production"
      ? invariant(
          false, // TODO: This error is probably because they somehow have 2 versions of the
          // router loaded. We can help them understand how to avoid that.
          "useLocation() may be used only in the context of a <Router> component.",
        )
      : invariant(false)
    : void 0;
  return react.exports.useContext(LocationContext).location;
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function useNavigate() {
  !useInRouterContext()
    ? process.env.NODE_ENV !== "production"
      ? invariant(
          false, // TODO: This error is probably because they somehow have 2 versions of the
          // router loaded. We can help them understand how to avoid that.
          "useNavigate() may be used only in the context of a <Router> component.",
        )
      : invariant(false)
    : void 0;
  let { basename, navigator } =
    react.exports.useContext(NavigationContext);
  let { matches } = react.exports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(
    matches.map((match) => match.pathnameBase),
  );
  let activeRef = react.exports.useRef(false);
  react.exports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.exports.useCallback(
    function (to, options) {
      if (options === void 0) {
        options = {};
      }

      process.env.NODE_ENV !== "production"
        ? warning(
            activeRef.current,
            "You should call navigate() in a React.useEffect(), not when " +
              "your component is first rendered.",
          )
        : void 0;
      if (!activeRef.current) return;

      if (typeof to === "number") {
        navigator.go(to);
        return;
      }

      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
      );

      if (basename !== "/") {
        path.pathname = joinPaths([basename, path.pathname]);
      }

      (!!options.replace ? navigator.replace : navigator.push)(
        path,
        options.state,
      );
    },
    [basename, navigator, routePathnamesJson, locationPathname],
  );
  return navigate;
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function useResolvedPath(to) {
  let { matches } = react.exports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(
    matches.map((match) => match.pathnameBase),
  );
  return react.exports.useMemo(
    () =>
      resolveTo(to, JSON.parse(routePathnamesJson), locationPathname),
    [to, routePathnamesJson, locationPathname],
  );
}

/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = [
    "onClick",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
  ],
  _excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];

if (process.env.NODE_ENV !== "production");

function isModifiedEvent(event) {
  return !!(
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/ react.exports.forwardRef(
  function LinkWithRef(_ref4, ref) {
    let {
        onClick,
        reloadDocument,
        replace = false,
        state,
        target,
        to,
      } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

    let href = useHref(to);
    let internalOnClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    });

    function handleClick(event) {
      if (onClick) onClick(event);

      if (!event.defaultPrevented && !reloadDocument) {
        internalOnClick(event);
      }
    }

    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      react.exports.createElement(
        "a",
        _extends({}, rest, {
          href: href,
          onClick: handleClick,
          ref: ref,
          target: target,
        }),
      )
    );
  },
);

if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/ react.exports.forwardRef(
  function NavLinkWithRef(_ref5, ref) {
    let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        children,
      } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

    let location = useLocation();
    let path = useResolvedPath(to);
    let locationPathname = location.pathname;
    let toPathname = path.pathname;

    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      toPathname = toPathname.toLowerCase();
    }

    let isActive =
      locationPathname === toPathname ||
      (!end &&
        locationPathname.startsWith(toPathname) &&
        locationPathname.charAt(toPathname.length) === "/");
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;

    if (typeof classNameProp === "function") {
      className = classNameProp({
        isActive,
      });
    } else {
      // If the className prop is not a function, we use a default `active`
      // class for <NavLink />s that are active. In v5 `active` was the default
      // value for `activeClassName`, but we are removing that API and can still
      // use the old default behavior for a cleaner upgrade path and keep the
      // simple styling rules working as they currently do.
      className = [classNameProp, isActive ? "active" : null]
        .filter(Boolean)
        .join(" ");
    }

    let style =
      typeof styleProp === "function"
        ? styleProp({
            isActive,
          })
        : styleProp;
    return /*#__PURE__*/ react.exports.createElement(
      Link,
      _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to,
      }),
      typeof children === "function"
        ? children({
            isActive,
          })
        : children,
    );
  },
);

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */

function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return react.exports.useCallback(
    (event) => {
      if (
        event.button === 0 && // Ignore everything but left clicks
        (!target || target === "_self") && // Let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // Ignore clicks with modifier keys
      ) {
        event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
        // a push, so do the same here.

        let replace =
          !!replaceProp || createPath(location) === createPath(path);
        navigate(to, {
          replace,
          state,
        });
      }
    },
    [location, navigate, path, replaceProp, state, target, to],
  );
}

var Login = function Login(_ref) {
  var loginAction = _ref.loginAction;

  var _useState = react.exports.useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessage = _useState2[0];
  _useState2[1]; // eslint-disable-line no-unused-vars

  var _useState3 = react.exports.useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    shown = _useState4[0],
    setShown = _useState4[1];

  var _useState5 = react.exports.useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];

  var _useState7 = react.exports.useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    password = _useState8[0],
    setPassword = _useState8[1];

  var navigate = useNavigate();

  var back = function back(e) {
    setShown(false);
    e.stopPropagation();
    navigate("/");
  };

  var signUp = function signUp(e) {
    setShown(false);
    e.stopPropagation();
    navigate("/signup");
  };

  var resetPassword = function resetPassword(e) {
    setShown(false);
    e.stopPropagation();
    navigate("/reset-password");
  };

  var onLoginClicked = /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var userData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                setShown(false);
                console.log("TODO: login"); // eslint-disable-line no-unused-vars
                userData = {
                  email: email,
                  password: password,
                };
                loginAction(userData, "/dashboard");

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );

    return function onLoginClicked() {
      return _ref2.apply(this, arguments);
    };
  })();

  return shown
    ? /*#__PURE__*/ React.createElement(
        "div",
        {
          // eslint-disable-line
          onClick: back,
          tabIndex: 0,
          role: "button",
          className: "rui-modal-bg flex h-100",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className:
              "rui-modal center v-mid p-4 bg-washed-red relative",
          },
          /*#__PURE__*/ React.createElement(CloseButton, null),
          /*#__PURE__*/ React.createElement(Title, {
            title: "Log in",
          }),
          errorMessage &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "fail",
              },
              errorMessage,
            ),
          /*#__PURE__*/ React.createElement(
            "fieldset",
            {
              id: "login",
              className: "ba b--transparent ph0 mh0",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "mt-3",
              },
              /*#__PURE__*/ React.createElement(
                "label",
                {
                  htmlFor: "email",
                  className: "block fw6 leading-normal text-sm",
                },
                "Email",
                /*#__PURE__*/ React.createElement("input", {
                  id: "email",
                  value: email,
                  onChange: function onChange(e) {
                    return setEmail(e.target.value);
                  },
                  placeholder: "you@gmail.com",
                  className: "w-100",
                }),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "mv3",
              },
              /*#__PURE__*/ React.createElement(
                "label",
                {
                  className: "block fw6 leading-normal text-sm",
                  htmlFor: "password",
                },
                "Password",
                /*#__PURE__*/ React.createElement("input", {
                  id: "password",
                  type: "password",
                  value: password,
                  onChange: function onChange(e) {
                    return setPassword(e.target.value);
                  },
                  placeholder: "password",
                  className: "w-100",
                }),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "label",
              {
                className: "pa0 ma0 leading-normal text-sm cursor",
                htmlFor: "remember",
              },
              /*#__PURE__*/ React.createElement("input", {
                type: "checkbox",
                id: "remember",
              }),
              " Remember me",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            null,
            /*#__PURE__*/ React.createElement("input", {
              className:
                "b px-3 py-2 sans-serif mt2 dim ba b--black near-white bg-near-black cursor text-sm mid-gray",
              clickHander: onLoginClicked,
              disabled: !email || !password,
              type: "submit",
              value: "Log in",
            }),
          ),
          /*#__PURE__*/ React.createElement("hr", null),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "leading-normal mt-3",
            },
            /*#__PURE__*/ React.createElement(
              Link,
              {
                onClick: signUp,
                className: "text-sm link dim black block",
                to: "/signup",
              },
              "Sign Up",
            ),
            /*#__PURE__*/ React.createElement(
              Link,
              {
                onClick: resetPassword,
                className: "text-sm link dim black block",
                to: "/reset-password",
              },
              "Forgot your password?",
            ),
          ),
        ),
      )
    : null;
};

// eslint-disable-next-line react/function-component-definition

var Profile = function Profile(_ref) {
  var username = _ref.username;

  var _useState = react.exports.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  react.exports.useEffect(function () {
    fetch("https://api.github.com/users/".concat(username))
      .then(function (response) {
        return response.json();
      })
      .then(setData);
  }, []);

  if (data) {
    var name = data.name,
      image = data.avatar_url,
      createdAt = data.created_at,
      location = data.homeLocation,
      url = data.url,
      language = data.language,
      age = data.age,
      twitterUsername = data.twitter_username;
    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      image
        ? /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "p-4",
            },
            /*#__PURE__*/ React.createElement("img", {
              src: image,
              className: "br-100 h3 w3 dib",
              alt: "avatar",
            }),
          )
        : null,
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "profileName userCardContent",
        },
        /*#__PURE__*/ React.createElement(Title, {
          title: name,
        }),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "userCardSubTitle",
          },
          /*#__PURE__*/ React.createElement("div", null, location),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              className: "age",
            },
            age,
          ),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              className: "twitterUsername",
            },
            twitterUsername,
          ),
          /*#__PURE__*/ React.createElement(
            "span",
            {
              className: "language",
            },
            language,
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "websites",
        },
        url,
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "w100 memberDates paddingBottom",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "title",
          },
          "Joined",
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "content",
          },
          createdAt,
        ),
      ),
    );
  }

  return /*#__PURE__*/ React.createElement("div", null, "No data.");
};

Profile.propTypes = {
  username: propTypes.exports.string.isRequired,
};

var SignUp = function SignUp() {
  var _useState = react.exports.useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessage = _useState2[0];
  _useState2[1]; // eslint-disable-line no-unused-vars

  var _useState3 = react.exports.useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    shown = _useState4[0],
    setShown = _useState4[1];

  var _useState5 = react.exports.useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];

  var _useState7 = react.exports.useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    password = _useState8[0],
    setPassword = _useState8[1];

  var _useState9 = react.exports.useState(""),
    _useState10 = _slicedToArray(_useState9, 2),
    confirmPassword = _useState10[0],
    setConfirmPassword = _useState10[1];

  var navigate = useNavigate();

  var back = function back(e) {
    setShown(false);
    e.stopPropagation();
    navigate("/");
  };

  var logIn = function logIn(e) {
    setShown(false);
    e.stopPropagation();
    navigate("/signup");
  };

  var onSignUpClicked = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                setShown(false);
                console.log("TODO: signup"); // eslint-disable-line no-unused-vars

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );

    return function onSignUpClicked() {
      return _ref.apply(this, arguments);
    };
  })();

  return shown
    ? /*#__PURE__*/ React.createElement(
        "div",
        {
          // eslint-disable-line
          onClick: back,
          tabIndex: 0,
          role: "button",
          className: "rui-modal-bg flex h-100",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className:
              "rui-modal center v-mid p-4 bg-washed-red relative",
          },
          /*#__PURE__*/ React.createElement(CloseButton, null),
          /*#__PURE__*/ React.createElement(Title, {
            title: "Sign Up",
          }),
          errorMessage &&
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "fail",
              },
              errorMessage,
            ),
          /*#__PURE__*/ React.createElement(
            "fieldset",
            {
              className: "ba b--transparent ph0 mh0",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "mt-3",
              },
              /*#__PURE__*/ React.createElement(
                "label",
                {
                  htmlFor: "email",
                  className: "block fw6 leading-normal text-sm",
                },
                "Email",
                /*#__PURE__*/ React.createElement("input", {
                  id: "email",
                  value: email,
                  onChange: function onChange(e) {
                    return setEmail(e.target.value);
                  },
                  placeholder: "you@gmail.com",
                  className: "w-100",
                }),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "mv3",
              },
              /*#__PURE__*/ React.createElement(
                "label",
                {
                  className: "block fw6 leading-normal text-sm",
                  htmlFor: "password",
                },
                "Password",
                /*#__PURE__*/ React.createElement("input", {
                  id: "password",
                  type: "password",
                  value: password,
                  onChange: function onChange(e) {
                    return setPassword(e.target.value);
                  },
                  placeholder: "password",
                  className: "w-100",
                }),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "mv3",
              },
              /*#__PURE__*/ React.createElement(
                "label",
                {
                  className: "block fw6 leading-normal text-sm",
                  htmlFor: "password",
                },
                "Confirm Password",
                /*#__PURE__*/ React.createElement("input", {
                  id: "confirmPassword",
                  type: "password",
                  value: confirmPassword,
                  onChange: function onChange(e) {
                    return setConfirmPassword(e.target.value);
                  },
                  placeholder: "confirm password",
                  className: "w-100",
                }),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "label",
              {
                className: "pa0 ma0 leading-normal text-sm cursor",
                htmlFor: "remember",
              },
              /*#__PURE__*/ React.createElement("input", {
                type: "checkbox",
                id: "remember",
              }),
              " Remember me",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            null,
            /*#__PURE__*/ React.createElement("input", {
              className:
                "b px-3 py-2 sans-serif mt2 dim ba b--black near-white bg-near-black cursor text-sm mid-gray",
              onClick: onSignUpClicked,
              disabled:
                !email || !password || password !== confirmPassword,
              type: "submit",
              value: "Sign up",
            }),
          ),
          /*#__PURE__*/ React.createElement("hr", null),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "leading-normal mt-3",
            },
            /*#__PURE__*/ React.createElement(
              Link,
              {
                onClick: logIn,
                className: "text-sm link dim black block",
                to: "/login",
              },
              "Already have an account? Log in.",
            ),
          ),
        ),
      )
    : null;
};

exports.Button = Button;
exports.Card = Card;
exports.CheckList = CheckList;
exports.CheckListItem = CheckListItem;
exports.CloseButton = CloseButton;
exports.Login = Login;
exports.Profile = Profile;
exports.SignUp = SignUp;
exports.Title = Title;
//# sourceMappingURL=index.js.map
