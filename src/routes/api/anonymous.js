import express from 'express';
import AnonymousController from '../../controllers/AnonymousController';

const router = express.Router();

// CHECK WITH AUTH
router.get('/', AnonymousController.heartBeat);

router.get('/tomorrows-offset', AnonymousController.getTomorrowsDate);
router.get('/yesterdays-offset', AnonymousController.getYesterdaysDate);
router.post('/fridays-date-from-calender-week-offset', AnonymousController.getFridaysDateFromCalenderWeek);
router.get('/start-day-of-next-week-offset', AnonymousController.getStartDayOfNextWeek);
router.get('/start-day-of-next-month-offset', AnonymousController.getStartDayOfNextMonth);
router.post('/start-day-by-calendar-week-offset', AnonymousController.getFirstDayByCalendarWeek);
router.post('/future-date-time-offset', AnonymousController.getFutureDateTime);

module.exports = router;
