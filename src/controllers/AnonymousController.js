import {
    maintenanceMode,
    maintenanceModeMessage,
} from '../config';
import {
    AnonymousService,
} from '../services';
import {dateInputValidator} from "../validators"

exports.heartBeat = async (req, res, next) => {
    try {
        const mode = {
            ghost: maintenanceMode,
        };
        if (mode.ghost.toString() === 'true') {
            const search = '_';
            const replaceWith = ' ';
            mode.detail = maintenanceModeMessage
                .split(search)
                .join(replaceWith)
                .toUpperCase();
        }
        res.json(mode);
    } catch (error) {
        next(error);
    }
};

exports.getTomorrowsDate = async (req, res, next) => {
    try {
        const result = await AnonymousService.getTomorrowsDate();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

exports.getYesterdaysDate = async (req, res, next) => {
    try {
        const result = await AnonymousService.getYesterdaysDate();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

exports.getFridaysDateFromCalenderWeek = async (req, res, next) => {
    try {
        const {value, error} = dateInputValidator.validate(req.body);
        if (error) {
            const errorMessages = error.details.map((el) => el.message);
            throw new AppError(400, errorMessages);
        }

        const result = await AnonymousService.getFridaysDateFromCalenderWeek(value);

        res.json(result);
    } catch (err) {
        next(err);
    }
}

exports.getStartDayOfNextWeek = async (req, res, next) => {
    try {
        const result = await AnonymousService.getStartDayOfNextWeek();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

exports.getStartDayOfNextMonth = async (req, res, next) => {
    try {
        const result = await AnonymousService.getStartDayOfNextMonth();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

exports.getFirstDayByCalendarWeek = async (req, res, next) => {
    try {
        const {value, error} = dateInputValidator.validate(req.body);
        if (error) {
            const errorMessages = error.details.map((el) => el.message);
            throw new AppError(400, errorMessages);
        }

        const result = await AnonymousService.getFirstDayByCalendarWeek(value);

        res.json(result);
    } catch (err) {
        next(err);
    }
}

exports.getFutureDateTime = async (req, res, next) => {
    try {
        const {value, error} = dateInputValidator.validate(req.body);
        if (error) {
            const errorMessages = error.details.map((el) => el.message);
            throw new AppError(400, errorMessages);
        }

        const result = await AnonymousService.getFutureDateTime(value);

        res.json(result);
    } catch (err) {
        next(err);
    }
}
