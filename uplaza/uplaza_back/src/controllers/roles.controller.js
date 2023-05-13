const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { roleService } = require('../services');

const createRole = catchAsync(async (req, res) => {
  const role = await roleService.createRole(req.body);
  res.status(httpStatus.OK).send(role);
});

const deleteRole = catchAsync(async (req, res) => {
  const role = await roleService.deleteRole(req.params.roleId);
  res.status(httpStatus.OK).send(role);
});

const updateRole = catchAsync(async (req, res) => {
  const role = await roleService.updateRole(req.body, req.params.roleId);
  res.status(httpStatus.OK).send(role);
});

const getRole = catchAsync(async (req, res) => {
  const role = await roleService.getRole(req.params.roleId);
  res.status(httpStatus.OK).send(role);
});
const getRoles = catchAsync(async (req, res) => {
  const role = await roleService.getRoles();
  res.status(httpStatus.OK).send(role);
});

module.exports={
    createRole,
    deleteRole,
    updateRole,
    getRole,
    getRoles
}