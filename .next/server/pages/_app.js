(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./redux/cartSlice.js
var cartSlice = __webpack_require__(5646);
;// CONCATENATED MODULE: ./redux/store.js


/* harmony default export */ const store = ((0,toolkit_.configureStore)({
  reducer: {
    cart: cartSlice/* default */.ZP
  }
}));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(7656);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.jsx





const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Footer_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).item,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: "/img/bg.png",
        objectFit: "cover",
        layout: "fill",
        alt: ""
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).item,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).card,
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: (Footer_module_default()).motto,
          children: "OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA."
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).card,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: (Footer_module_default()).title,
          children: "FIND OUR RESTAURANTS"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Footer_module_default()).text,
          children: ["0123 A. Don Road #303.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " NewYork, 85022", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " (123) 456-7890"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Footer_module_default()).text,
          children: ["5001 K. Laquie Rd #204.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " NewYork, 85022", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " (123) 456-7890"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Footer_module_default()).text,
          children: ["1614 E. Erwin St #104.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " NewYork, 85022", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " (123) 456-7890"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).card,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: (Footer_module_default()).title,
          children: "WORKING HOURS"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Footer_module_default()).text,
          children: ["MONDAY UNTIL FRIDAY", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " 9:00 \u2013 22:00"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Footer_module_default()).text,
          children: ["SATURDAY - SUNDAY", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " 11:00 \u2013 22:00"]
        })]
      })]
    })]
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(469);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.jsx







const Navbar = () => {
  const quantity = (0,external_react_redux_.useSelector)(state => state.cart.quantity);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Navbar_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Navbar_module_default()).item,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).callButton,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/img/telephone.png",
          alt: "",
          width: "32",
          height: "32"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).texts,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Navbar_module_default()).text,
          children: "ORDER NOW!"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: `tel:9400247717`,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Navbar_module_default()).text,
            style: {
              cursor: "pointer"
            },
            children: "9400247717"
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Navbar_module_default()).item,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Navbar_module_default()).list,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: `/`,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (Navbar_module_default()).listItem,
            style: {
              cursor: "pointer"
            },
            children: "Homepage"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).listItem,
          children: "Products"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/img/logo_200x200.png",
          alt: "",
          width: "160px",
          height: "160px"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).listItem,
          children: "Events"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).listItem,
          children: "Blog"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: (Navbar_module_default()).listItem,
          children: "Contact"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Navbar_module_default()).item,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `/cart`,
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Navbar_module_default()).cart,
          style: {
            cursor: "pointer"
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            src: "/img/cart.png",
            alt: "",
            width: "30px",
            height: "30px"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Navbar_module_default()).counter,
            children: quantity
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Layout.jsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 5646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gK": () => (/* binding */ addProduct),
/* harmony export */   "mc": () => (/* binding */ reset),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createSlice
} = __webpack_require__(5184);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: state => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
  }
});
const {
  addProduct,
  reset
} = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);

/***/ }),

/***/ 7656:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__iN3aW",
	"item": "Footer_item__ikrg0",
	"card": "Footer_card__RLUtm",
	"title": "Footer_title__ZStl1",
	"text": "Footer_text__TFiKo",
	"motto": "Footer_motto__0f9zG"
};


/***/ }),

/***/ 469:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__rxFeS",
	"item": "Navbar_item__03eIQ",
	"callButton": "Navbar_callButton__LuClE",
	"texts": "Navbar_texts__nL5pb",
	"text": "Navbar_text__JLMGY",
	"list": "Navbar_list__h0uMs",
	"listItem": "Navbar_listItem__twU0F",
	"cart": "Navbar_cart__SbQah",
	"counter": "Navbar_counter__GLebN"
};


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664], () => (__webpack_exec__(1461)));
module.exports = __webpack_exports__;

})();