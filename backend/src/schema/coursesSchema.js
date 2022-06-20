const Joi = require('joi');

const post = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    difficulty: Joi.string().required()
}).options({
    abortEarly: false
});

const put = Joi.object({
    id: Joi.number().required(),
    name: Joi.string(),
    type: Joi.string(),
    difficulty: Joi.string()
}).options({
    abortEarly: false
});

const destroy = Joi.object({
    id: Joi.number().required()
}).options({
    abortEarly: false
});

module.exports = {
    post,
    put,
    destroy
}