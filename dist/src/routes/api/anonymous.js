"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _AnonymousController = _interopRequireDefault(require("../../controllers/AnonymousController"));

var router = _express["default"].Router(); // CHECK WITH AUTH


router.get('/', _AnonymousController["default"].heartBeat);
router.get('/tomorrows-offset', _AnonymousController["default"].getTomorrowsDate);
router.get('/yesterdays-offset', _AnonymousController["default"].getYesterdaysDate);
router.post('/fridays-date-from-calender-week-offset', _AnonymousController["default"].getFridaysDateFromCalenderWeek);
router.get('/start-day-of-next-week-offset', _AnonymousController["default"].getStartDayOfNextWeek);
router.get('/start-day-of-next-month-offset', _AnonymousController["default"].getStartDayOfNextMonth);
router.post('/start-day-by-calendar-week-offset', _AnonymousController["default"].getFirstDayByCalendarWeek);
router.post('/future-date-time-offset', _AnonymousController["default"].getFutureDateTime);
module.exports = router;