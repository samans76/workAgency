const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {providerService}=require('../services')



const createProvider = catchAsync(async(req,res)=>{
    const provider = await providerService.createProvider(req.body)
    res.status(httpStatus.OK).send(provider)
})
const getProvider = catchAsync(async(req,res)=>{
    const provider = await providerService.getProvider(req.params.providerId)
    res.status(httpStatus.OK).send(provider)
})
const getProviders = catchAsync(async(req,res)=>{
    const provider = await providerService.getProviders()
    res.status(httpStatus.ok).send(provider)
})
const updateProvider = catchAsync(async(req,res)=>{
    const provider = await providerService.updateProvider(req.params.providerId,req.body)
    res.status(httpStatus.ok).send(provider)
})
const deleteProvider = catchAsync(async(req,res)=>{
    const provider = await providerService.deleteProvider(req.params.providerId)
    res.status(httpStatus.ok).send(provider)
})

module.exports = {
    createProvider,
    getProvider,
    getProviders,
    updateProvider,
    deleteProvider
}