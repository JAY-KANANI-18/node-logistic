
const express = require('express')

const vehicleController = require('../controller/vehicle')



const router = new express.Router()


router.post("/create/vehicle",vehicleController.create)
router.get("/get/vehicle",vehicleController.get)
router.post("/create/vehicle",vehicleController.create)
router.get("/get/vehicle/cities",vehicleController.getcities)
router.get("/get/cityVehicles",vehicleController.getCityVehicles)



module.exports = router
