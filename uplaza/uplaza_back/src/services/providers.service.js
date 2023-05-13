const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const {Providers}=require('../models')


const createProvider = async(providerBody)=>{
    const provider = await Providers.findOne({email:providerBody.email})
    if(provider) throw new ApiError(httpStatus.BAD_REQUEST,"already")
    return await Providers.create(providerBody)
}

const getProvider = async(id)=>{
    const provider = await Providers.findById(id)
    if(!provider) throw new ApiError(httpStatus.BAD_REQUEST,"not found")
    return provider
}

const getProviders = async()=>{
    const provider = await Providers.find();
    return provider
}

const deleteProvider = async(id)=>{
    const provider = await Providers.findOneAndDelete({_id:id})
    return provider
}

const updateProvider = async(id,providerBody)=>{
    const provider = await Providers.findById(id)
    if(!provider)throw new ApiError(httpStatus.BAD_REQUEST,"not found")
    Object.assign(provider,providerBody)
    await provider.save()
    return provider;
}


module.exports = {
    createProvider,
    getProvider,
    getProviders,
    deleteProvider,
    updateProvider
}