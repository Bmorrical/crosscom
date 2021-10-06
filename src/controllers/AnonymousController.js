import {
    maintenanceMode,
    maintenanceModeMessage,
} from '../config';

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
