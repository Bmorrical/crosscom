/**
 * Return the time difference from the current time to tomorrow +24 hours
 * @returns {Promise<void>}
 */
exports.getTomorrowsDate = async () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    return {
        success: true,
        errors: [],
        data: tomorrow.setDate(tomorrow.getDate() + 1) - today,
    }
}

/**
 * Return the time difference from the current time from yesterday -24 hours
 * @returns {Promise<void>}
 */
exports.getYesterdaysDate = async () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    return {
        success: true,
        errors: [],
        data: today - tomorrow.setDate(tomorrow.getDate() + 1),
    }
}

/**
 * Return the time difference from Friday of any date's calendar week
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */
exports.getFridaysDateFromCalenderWeek = async () => {
    // todo

    return {
        success: true,
        errors: [],
        data: "",
    }
}

/**
 * Return the time difference from the start of next week
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */
exports.getStartDayOfNextWeek = async () => {
    // todo

    return {
        success: true,
        errors: [],
        data: "",
    }
}

/**
 * Return the time difference from the start of next month
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */
exports.getStartDayOfNextMonth = async () => {
    // todo

    return {
        success: true,
        errors: [],
        data: "",
    }
}

/**
 * Return the time difference from the first day of any date's calendar week
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */
exports.getFirstDayByCalendarWeek = async () => {
    // todo

    return {
        success: true,
        errors: [],
        data: "",
    }
}

/**
 * Return the time difference from an arbitrary future date/time
 * @returns {Promise<{data: string, success: boolean, errors: *[]}>}
 */
exports.getFutureDateTime = async () => {
    // todo

    return {
        success: true,
        errors: [],
        data: "",
    }
}
