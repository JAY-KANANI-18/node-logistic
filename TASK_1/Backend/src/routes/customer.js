
const express = require('express')


const customer1Controller = require('../controller/customer')


const router = new express.Router()


router.post("/create/customer",customer1Controller.create)
router.get("/get/customer",customer1Controller.get)
router.patch("/update/customer",customer1Controller.update)




module.exports = router
