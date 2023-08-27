const Order = require('mongoose').model('order')

class orderClass  {

    static create = async function (req,res){
        try{

        }catch(error){
            cosole.log(error.message)
            res.status(200).send({message:"Something Went Wrong"})

        }


    }
    static delivered = async function (req,res){
        try{

        }catch(error){
            cosole.log(error.message)
            res.status(200).send({message:"Something Went Wrong"})

        }


    }
}


module.exports =  orderClass