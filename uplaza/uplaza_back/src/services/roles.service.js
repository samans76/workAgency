const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const {Roles}=require('../models')



const createRole = async(roleBody)=>{
    const role = await Roles.findOne({role:roleBody.role})
    if(role)throw new ApiError(httpStatus.BAD_REQUEST,"already")
    return Roles.create(roleBody)
}

const deleteRole = async(roleId)=>{
    const role = await Roles.findOne({_id:roleId})
    if(!role)throw new ApiError(httpStatus.BAD_REQUEST,"not found")
    return role.remove()
}

const updateRole = async(roleBody,roleId)=>{
    const role = await Roles.findOne({_id:roleId})
    if(!role)throw new ApiError(httpStatus.BAD_REQUEST,"not found")
    Object.assign(role,roleBody)
    await role.save()
    return role;
}

const getRole = async(roleId)=>{
    const role = await Roles.findOne({_id:roleId})
    if(!role)throw new ApiError(httpStatus.BAD_REQUEST,"not found")
    return role;
}

const getRoles = async()=>{
    const role = await Roles.find()
    return role;
}

module.exports = {
    createRole,
    deleteRole,
    updateRole,
    getRole,
    getRoles
}