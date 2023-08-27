const Vehicle = require('mongoose').model('vehicle')

class vehicleClass {

    static create = async function (req, res) {
        try {

            let item = new Vehicle(req.body)

            await item.save()

            res.status(200).send({ status: "Success", data: item })



        } catch (error) {

            console.log(error.message)
            res.status(200).send({ status: "Failed", message: "Something Went Wrong" })

        }


    }

    static get = async function (req, res) {
        try {

            let items = await Vehicle.find({})


            res.status(200).send({ status: "Success", data: items })



        } catch (error) {

            cosole.log(error.message)
            res.status(200).send({ status: "Failed", message: "Something Went Wrong" })

        }


    }


    static getcities = async function (req, res) {
        try {

            let items = await Vehicle.find({},{city:1})


            res.status(200).send({ status: "Success", data: items })



        } catch (error) {

            cosole.log(error.message)
            res.status(200).send({ status: "Failed", message: "Something Went Wrong" })

        }


    }

    static update = async function (req, res) {
        try {

            let items = await Vehicle.findByIdAndUpdate(req.query.updateID, req.body, { new: true, multi: true })


            res.status(200).send({ status: "Success", data: items })



        } catch (error) {

            cosole.log(error.message)
            res.status(200).send({ status: "Failed", message: "Something Went Wrong" })

        }


    }
}


module.exports = vehicleClass