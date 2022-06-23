"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3417);


async function handler(req, res) {
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const {
    method,
    cookies
  } = req;
  const token = cookies.token;

  if (method === 'GET') {
    try {
      // const findItem = {
      //   title:"pizza1"
      // };
      const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  if (method === 'POST') {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not Authenticated!");
    }

    try {
      const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [854], () => (__webpack_exec__(7619)));
module.exports = __webpack_exports__;

})();