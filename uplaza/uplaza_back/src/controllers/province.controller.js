const catchAsync = require("../utils/catchAsync")
const httpStatus = require('http-status');
const cityService = require('../services/province.service')

const createCity = catchAsync(async (req,res)=>{
    const city = await cityService.createCity(req.body)
    res.status(httpStatus.OK).send(city)
})

const getAllCity = catchAsync(async (req,res)=>{
    const city = await cityService.getAllCity()
    res.status(httpStatus.OK).send(city)
})

const getCity = catchAsync(async (req,res)=>{
    const city = await cityService.getCity(req.params.cityId)
    res.status(httpStatus.OK).send(city)
})

const deleteCity = catchAsync(async (req,res)=>{
    const city = await cityService.deleteCity(req.params.cityId)
    res.status(httpStatus.OK).send(city)
})

module.exports = {
    createCity,
    getAllCity,
    getCity,
    deleteCity
}