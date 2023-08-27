
const express = require('express')

const itemController = require('../controller/item')



const router = new express.Router()


router.post("/create/item",itemController.create)
router.get("/get/item",itemController.get)
router.patch("/update/item",itemController.update)



module.exports = router
