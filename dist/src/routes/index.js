"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _anonymous = _interopRequireDefault(require("./api/anonymous"));

var router = _express["default"].Router();

router.use('/', _anonymous["default"]);
module.exports = router;