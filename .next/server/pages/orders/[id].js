(() => {
var exports = {};
exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 7325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8306);
/* harmony import */ var _styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Order = ({
  order
}) => {
  const status = order.status;

  const statusClass = index => {
    if (index - status < 1) return (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().done);
    if (index - status === 1) return (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().inProgress);
    if (index - status > 1) return (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().undone);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().row),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
          className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().table),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
              className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().trTitle),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("th", {
                children: "Order ID"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("th", {
                children: "Customer"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("th", {
                children: "Address"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("th", {
                children: "Total"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("tbody", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
              className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().tr),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().id),
                  children: order._id
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),
                  children: order.customer
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().address),
                  children: order.address
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().total),
                  children: ["$ ", order.total]
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().row),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: statusClass(0),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
            src: "/img/paid.png",
            width: 30,
            height: 30,
            alt: ""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            children: "Payment"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
              className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
              src: "/img/checked.png",
              width: 20,
              height: 20,
              alt: ""
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: statusClass(1),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
            src: "/img/bake.png",
            width: 30,
            height: 30,
            alt: ""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            children: "Preparing"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
              className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
              src: "/img/checked.png",
              width: 20,
              height: 20,
              alt: ""
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: statusClass(2),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
            src: "/img/bike.png",
            width: 30,
            height: 30,
            alt: ""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            children: "On the way"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
              className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
              src: "/img/checked.png",
              width: 20,
              height: 20,
              alt: ""
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: statusClass(3),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
            src: "/img/delivered.png",
            width: 30,
            height: 30,
            alt: ""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            children: "Delivered"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], {
              className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkedIcon),
              src: "/img/checked.png",
              width: 20,
              height: 20,
              alt: ""
            })
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
          className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
          children: "CART TOTAL"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().totalText),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().totalTextTitle),
            children: "Subtotal:"
          }), "$ ", order.total]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().totalText),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().totalTextTitle),
            children: "Discount:"
          }), "$ 0.00"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().totalText),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().totalTextTitle),
            children: "Total:"
          }), "$ ", order.total]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          disabled: true,
          className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
          children: "PAID"
        })]
      })
    })]
  });
};

const getServerSideProps = async ({
  params
}) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ 8306:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Order_container__MlAs7",
	"left": "Order_left__T7fnj",
	"table": "Order_table___IhSD",
	"row": "Order_row__icbZr",
	"done": "Order_done__Zw6JT",
	"inProgress": "Order_inProgress__AzXXJ",
	"undone": "Order_undone__qmHnC",
	"checkedIcon": "Order_checkedIcon__JDEAS",
	"right": "Order_right__f0LLE",
	"wrapper": "Order_wrapper__h4Unr",
	"totalTextTitle": "Order_totalTextTitle__tvjTc",
	"button": "Order_button__ktKAN",
	"trTitle": "Order_trTitle__CD_yN",
	"tr": "Order_tr__e_VTn",
	"id": "Order_id__QJL52",
	"name": "Order_name__1nb_I",
	"address": "Order_address__m7hWm",
	"total": "Order_total__A3tQl"
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(7325)));
module.exports = __webpack_exports__;

})();