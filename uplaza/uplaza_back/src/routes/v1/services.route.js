const express = require('express');
const httpStatus = require('http-status');
const auth = require('../../middlewares/auth');
const serviceController = require('../../controllers/services.controller');
const validate = require('../../middlewares/validate');
const serviceValidation = require('../../validations/services.validation')

const router = express.Router()

router.route("/")
.post(validate(serviceValidation.createService),serviceController.createService)
.get(serviceController.getServices)

router.route("/:serviceId")
.get(validate(serviceValidation.getService),serviceController.getServiceById)
.patch(validate(serviceValidation.updateService),serviceController.updateService)

module.exports = router;