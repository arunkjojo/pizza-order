"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2843);


async function handler(req, res) {
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const {
    method
  } = req;

  if (method === 'GET') {
    try {
      const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  if (method === 'POST') {
    try {
      // console.log(req.body)
      const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(req.body);
      res.status(201).json(order);
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
var __webpack_exports__ = __webpack_require__.X(0, [11], () => (__webpack_exec__(3219)));
module.exports = __webpack_exports__;

})();