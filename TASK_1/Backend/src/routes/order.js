
const express = require('express')


const orderController = require('../controller/order')

const router = new express.Router()

router.post("/create/order", orderController.create)
router.patch("/delivered/order", orderController.delivered)

module.exports = router
