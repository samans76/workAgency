const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {servicesService}=require('../services')

const createService = catchAsync(async(req,res)=>{
    const service = await servicesService.createService(req.body)
    res.status(httpStatus.CREATED).send(service)
})

const getServices = catchAsync(async(req,res)=>{
    const services = await servicesService.getServices()
    res.status(httpStatus.OK).send(services)
})

const getServiceById = catchAsync(async(req,res)=>{
    const service = await servicesService.getServiceById(req.params.serviceId)
    res.status(httpStatus.OK).send(service)
})

const updateService = catchAsync(async(req,res)=>{
    const service = await servicesService.updateServiceById(req.params.serviceId,req.body)
    res.status(httpStatus.OK).send(service)
})

module.exports={createService,getServices,getServiceById,updateService}