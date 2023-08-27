const mongoose = require("mongoose");
const validator = require("validator");

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,   
    },
      
    price:{
      type:Number,
      required:true,

    },
  },
    { timestamps: true ,validateBeforeSave: true }

);

const Item = mongoose.model("item", ItemSchema);

module.exports = Item;
