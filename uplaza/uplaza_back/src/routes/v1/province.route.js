const express = require('express');
const httpStatus = require('http-status');
const auth = require('../../middlewares/auth');
const provinceController = require('../../controllers/province.controller')

const router = express.Router()

router.route("/")
.post(provinceController.createCity)
.get(provinceController.getAllCity)

router.route("/:provinceId")
.get(provinceController.getCity)
.delete(provinceController.deleteCity)

module.exports = router;