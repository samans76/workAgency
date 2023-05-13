const Joi = require('joi')



const createService = {
    body:Joi.object().keys({
        name:Joi.string().required()
    })
}

const getService = {
    params: Joi.object().keys({
        serviceId:Joi.string().required()
    })
}

const updateService = {
    params : Joi.object().keys({
        name:Joi.string().required()
    })
}

module.exports = {createService,getService,updateService}