"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/**
 * Return the time difference from the current time to tomorrow +24 hours
 * @returns {Promise<void>}
 */
exports.getTomorrowsDate = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var today, tomorrow;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          today = new Date();
          tomorrow = new Date(today);
          tomorrow.setDate(tomorrow.getDate() + 1);
          return _context.abrupt("return", {
            success: true,
            errors: [],
            data: tomorrow.setDate(tomorrow.getDate() + 1) - today
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/**
 * Return the time difference from the current time from yesterday -24 hours
 * @returns {Promise<void>}
 */

exports.getYesterdaysDate = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var today, tomorrow;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          today = new Date();
          tomorrow = new Date(today);
          tomorrow.setDate(tomorrow.getDate() + 1);
          return _context2.abrupt("return", {
            success: true,
            errors: [],
            data: today - tomorrow.setDate(tomorrow.getDate() + 1)
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/**
 * Return the time difference from Friday of any date's calendar week
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */

exports.getFridaysDateFromCalenderWeek = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", {
            success: true,
            errors: [],
            data: ""
          });

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}));
/**
 * Return the time difference from the start of next week
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */

exports.getStartDayOfNextWeek = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
  return _regenerator["default"].wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", {
            success: true,
            errors: [],
            data: ""
          });

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
}));
/**
 * Return the time difference from the start of next month
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */

exports.getStartDayOfNextMonth = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
  return _regenerator["default"].wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", {
            success: true,
            errors: [],
            data: ""
          });

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5);
}));
/**
 * Return the time difference from the first day of any date's calendar week
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */

exports.getFirstDayByCalendarWeek = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
  return _regenerator["default"].wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", {
            success: true,
            errors: [],
            data: ""
          });

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6);
}));
/**
 * Return the time difference from an arbitrary future date/time
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */

exports.getFutureDateTime = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
  return _regenerator["default"].wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", {
            success: true,
            errors: [],
            data: ""
          });

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  }, _callee7);
}));