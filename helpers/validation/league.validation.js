const Joi = require("joi");



function addLeagueValidator(request, response, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        longitude: Joi.string().required(),
        latitude: Joi.string().required(),
        price: Joi.string().required()
    });
    validateRequest(request, next, schema);
};


function findLeagueValidator(request, response, next) {
    const schema = Joi.object({
        radius: Joi.string().required(),
        longitude: Joi.string().required(),
        latitude: Joi.string().required(),
        budget: Joi.string().required()
    });
    validateRequest(request, next, schema);
};



function validateRequest(request, next, schema) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };

    const { error, value } = schema.validate(request.body, options);

    if(error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        request.body = value;
        next();
    }
}

module.exports = {
    addLeagueValidator,
    findLeagueValidator
};