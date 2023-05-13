const express = require('express');
const httpStatus = require('http-status');
const auth = require('../../middlewares/auth');
const {rolesController} = require('../../controllers');
const router = require('.');

const router = express.Router()


router.use('/')
.post(rolesController.createRole)
.get(rolesController.getRoles)

router.use('/roleId')
.delete(rolesController.deleteRole)
.patch(rolesController.updateRole)
.get(rolesController.getRole)

module.exports = router