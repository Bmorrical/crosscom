import Joi from '@hapi/joi';

const dateInputValidator = Joi.object({
    input: Joi.number().required(),
});

export {
    dateInputValidator,
};
