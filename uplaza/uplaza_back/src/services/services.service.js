const httpStatus = require('http-status');
const { Services } = require('../models/services.model');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} serviceBody
 * @returns {Promise<Services>}
 */
const createService = async (serviceBody) => {
  if (serviceBody.name) {
    return Services.create(serviceBody);

  } else {
   throw new ApiError(httpStatus.BAD_REQUEST, 'error');
  }
};

const getServices = async () => {
  const services = await Services.find();
  return services;
};

const getServiceById = async (id) => {
    const service = await Services.findById(id)
    if(!service)throw new ApiError(httpStatus.BAD_REQUEST,"not found")
    else return service;
};

const updateServiceById = async(id,updateBody)=>{
    const service = await Services.findById(id)
    if(!service)throw new ApiError(httpStatus.BAD_REQUEST,"not found")
    else {
        Object.assign(service,updateBody)
        await service.save()
        return service;
    }
}

const deleteServiceById = async(id)=>{
  const service = await Services.deleteOne({_id:id})
  res.status(httpStatus.OK).send(service)
}



module.exports={createService,getServices,getServiceById,updateServiceById}
