const mongoose = require("mongoose");
const validator = require("validator");

const OrderSchema = new mongoose.Schema(
  {
    itemId: {
      type:mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "item",
    },
    customerId :{
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "customer",

    },
    vehicleId:{
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "vehicle",

    },
    isDelivered:{
        type:Boolean,
        default:false
    },

      
    price:{
      type:Number,
      required:true,

    },
  },
    { timestamps: true ,validateBeforeSave: true }

);

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
