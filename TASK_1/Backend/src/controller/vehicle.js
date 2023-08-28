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

            let items = await Vehicle.aggregate([
                {
                    $group: {
                        _id: null,
                        cities: { $addToSet: "$city" } // Collect unique cities in an array
                    }
                },
                {
                    $project: {
                        _id: 0,
                        cities: 1
                    }
                }

            ])
            console.log(items);


            res.status(200).send({ status: "Success", data: items[0].cities})



        } catch (error) {

            console.log(error)
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
    static getCityVehicles = async function (req,res) {

        try{
            let vehicles = await Vehicle.find({city:req.query.city
                ,aciveOrderCount:{$lt:2}
            })

            res.status(200).send({status:"success",data:vehicles})

        }catch(error){
            console.log(error)
            res.status(200).send({status:"failed",message:"something went wrong"})

        }
        
    }
}


module.exports = vehicleClass