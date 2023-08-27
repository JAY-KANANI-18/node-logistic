const mongoose = require("mongoose");
const validator = require("validator");

const VehicleSchema = new mongoose.Schema(
    {
        registrationNumber: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        vehicleType: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            enum:['bike','truck']
        },
        city:{
            type:String,
            required: true,
            trim: true,
            lowercase: true,
        },
        aciveOrderCount:{
            type:Number,
            required:true,
            default:0,
            max:2
        }
    },
    { timestamps: true, validateBeforeSave: true }

);

const Vehicle = mongoose.model("vehicle", VehicleSchema);

module.exports = Vehicle;
