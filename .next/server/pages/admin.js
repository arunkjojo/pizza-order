(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 9615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9539);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const Index = ({
  products,
  orders
}) => {
  const {
    0: pizzaList,
    1: setPizzaList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(products);
  const {
    0: orderList,
    1: setOrderList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(orders);
  const status = ["preparing", "On the way", "Delivered", "Completed"];

  const handleDeleteProduct = async id => {
    if (window.confirm('Are you sure, Delete this item?')) {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("http://localhost:3000/api/products/" + id);
        setPizzaList(pizzaList.filter(pizza => pizza._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOrderNextStage = async id => {
    const orderItem = orderList.filter(order => order._id === id)[0];
    const currentStatus = orderItem.status;

    if (currentStatus < 3) {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put("http://localhost:3000/api/orders/" + id, {
          status: currentStatus + 1
        });
        console.log([res.data, ...orderList.filter(order => order._id !== id)]);
        setOrderList([res.data, ...orderList.filter(order => order._id !== id)]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOrderPrevStage = async id => {
    const orderItem = orderList.filter(order => order._id === id)[0];
    const currentStatus = orderItem.status;

    if (currentStatus > -1) {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put("http://localhost:3000/api/orders/" + id, {
          status: currentStatus - 1
        });
        console.log([res.data, ...orderList.filter(order => order._id !== id)]);
        setOrderList([res.data, ...orderList.filter(order => order._id !== id)]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteOrder = async id => {
    if (window.confirm('Are you sure, Delete this order?')) {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("http://localhost:3000/api/orders/" + id);
        setOrderList(orderList.filter(order => order._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "Products"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().table),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().trTitle),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Image"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "ID"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Title"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Price"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Action"
            })]
          })
        }), pizzaList.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("tbody", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().tr),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: product.img,
                width: 50,
                height: 50,
                objectFit: "cover",
                alt: product.title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
              children: [product._id.slice(0, 5), "..."]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: product.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
              children: ["$", product.prices[0]]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                children: "Edit"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                onClick: () => handleDeleteProduct(product._id),
                children: "Delete"
              })]
            })]
          })
        }, product._id))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "Orders"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().table),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().trTitle),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "ID"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Customer"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Price"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Payment"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Status"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Action"
            })]
          })
        }), orderList.map(order => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("tbody", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().tr),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                passHref: true,
                href: "/orders/" + order._id,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                  children: [order._id.slice(0, 5), "..."]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: order.customer
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
              children: ["$", order.total]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: order.method == 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                children: "Cash"
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                children: "Paid"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: status[order.status]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
              children: [order.status !== 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                onClick: () => handleOrderNextStage(order._id),
                children: "Next Stage"
              }), order.status !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                onClick: () => handleOrderPrevStage(order._id),
                children: "Prev Stage"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                onClick: () => handleDeleteOrder(order._id),
                children: "Delete"
              })]
            })]
          })
        }, order._id))]
      })]
    })]
  });
};

const getServerSideProps = async ctx => {
  var _ctx$req;

  const myCookie = ((_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.cookies) || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        parmanent: false
      }
    };
  }

  const productRes = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:3000/api/products/`);
  const orderRes = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:3000/api/orders/`);
  return {
    props: {
      products: productRes.data,
      orders: orderRes.data
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ 9539:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Admin_container__7Kd1y",
	"item": "Admin_item__FuGBz",
	"table": "Admin_table__brNHw",
	"button": "Admin_button___uar2",
	"link": "Admin_link__2bV6e"
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,664], () => (__webpack_exec__(9615)));
module.exports = __webpack_exports__;

})();