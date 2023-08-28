const { findByIdAndUpdate } = require('../model/item');
const Vehicle = require('../model/vehicle');

const Order = require('mongoose').model('order')

class orderClass {

    static create = async function (req, res) {
        try {

            console.log(req.body);
            let order = new Order(req.body)
            await order.save()
            await Vehicle.findByIdAndUpdate(order.vehicleId,{$inc :{aciveOrderCount:1}})
            res.status(200).send({ status: "success", data: order })
        } catch (error) {
            console.log(error)
            res.status(200).send({ message: "Something Went Wrong" })

        }


    }
    static delivered = async function (req, res) {
        try {
            let order =await Order.findOneAndUpdate({vehicleId:req.body.vehicleId},{isDelivered:true})
            let vehicle = await Vehicle.findByIdAndUpdate({_id:req.body.vehicleId},{$inc:{aciveOrderCount:-1}})
            res.status(200).send({ status: "success", data: order })

        } catch (error) {
            cosole.log(error.message)
            res.status(200).send({ message: "Something Went Wrong" })

        }


    }
}


module.exports = orderClass