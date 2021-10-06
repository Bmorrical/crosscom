"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateInputValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var dateInputValidator = _joi["default"].object({
  input: _joi["default"].number().required()
});

exports.dateInputValidator = dateInputValidator;