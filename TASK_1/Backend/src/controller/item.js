const Items = require('mongoose').model('item')

class itemClass  {

    static create = async function (req,res){
        try{
            console.log("body",req.body);

            let item = new Items(req.body)

            await item.save()

            res.status(200).send({status:"Success", data:item})



        }catch(error){

            console.log(error.message)
            res.status(200).send({status:"Failed",message:"Something Went Wrong"})

        }


    }

    static get = async function (req,res){
        try{

            let items = await Items.find({})


            res.status(200).send({status:"Success", data:items})



        }catch(error){
            
            cosole.log(error.message)
            res.status(200).send({status:"Failed",message:"Something Went Wrong"})

        }


    }


    static update = async function (req,res){
        try{

            let items = await Items.findByIdAndUpdate(req.query.updateID,req.body,{new:true,multi:true})


            res.status(200).send({status:"Success", data:items})



        }catch(error){
            
            cosole.log(error.message)
            res.status(200).send({status:"Failed",message:"Something Went Wrong"})

        }


    }
}


module.exports =  itemClass