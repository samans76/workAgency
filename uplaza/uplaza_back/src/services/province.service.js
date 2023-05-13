const httpStatus = require('http-status')
const {City} = require('../models')
const ApiError = require('../utils/ApiError')


const createCity = async(cityBody)=>{

    const city = await City.findOne({name:cityBody.name})
    if(!city ){
        return City.create(cityBody)
        
    }else{
        throw new ApiError(httpStatus.BAD_REQUEST,"already")
    }
}

const getAllCity = async()=>{
    const city =await City.find()
    return city
}

const getCity = async(cityId)=>{
     const city =await City.findById(cityId)
     return city
}

const deleteCity = async(cityId)=>{
    const city =await City.deleteOne({_id:cityId})
    return city
}

const updateCity = async(cityId,body)=>{
    const city = await City.findById(cityId)
    await Object.assign(body)
    await city.save()
}


module.exports = {createCity,updateCity,getAllCity,getCity,deleteCity}