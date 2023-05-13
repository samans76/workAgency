const express = require('express');
const httpStatus = require('http-status');
const auth = require('../../middlewares/auth');
const providersController = require('../../controllers/providers.controller');
// const validate = require('../../middlewares/validate');
// const serviceValidation = require('../../validations/services.validation')

const router = express.Router()

router.route("/")
.post(providersController.createProvider)
.get(providersController.getProviders)

router.route("/:providerId")
.get(providersController.getProvider)
.patch(providersController.updateProvider)
.delete(providersController.deleteProvider)

module.exports = router;