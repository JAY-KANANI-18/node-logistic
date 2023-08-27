const mongoose = require("mongoose");
const validator = require("validator");

const CustomerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        city: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        }
    },
    { timestamps: true, validateBeforeSave: true }

);

const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;
