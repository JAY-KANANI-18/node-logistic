const Customer = require('mongoose').model('customer')

class customerClass  {

 
    static create = async function (req,res){
        try{

            let item = new Customer(req.body)

            await item.save()

            res.status(200).send({status:"Success", data:item})



        }catch(error){

            cosole.log(error.message)
            res.status(200).send({status:"Failed",message:"Something Went Wrong"})

        }


    }

    static get = async function (req,res){
        try{

            let items = await Customer.find({})


            res.status(200).send({status:"Success", data:items})



        }catch(error){
            
            cosole.log(error.message)
            res.status(200).send({status:"Failed",message:"Something Went Wrong"})

        }


    }


    static update = async function (req,res){
        try{

            let items = await Customer.findByIdAndUpdate(req.query.updateID,req.body,{new:true,multi:true})


            res.status(200).send({status:"Success", data:items})



        }catch(error){
            
            cosole.log(error.message)
            res.status(200).send({status:"Failed",message:"Something Went Wrong"})

        }


    }
}


module.exports =  customerClass