const mongoose = require("mongoose");
const validator = require("validator");
// const AutoIncrement = require('mongoose-sequence')(mongoose);
var autoIncrement = require('mongoose-id-autoincrement');


const CustomerSchema = new mongoose.Schema(
    {
        unique_id: Number,


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


// CustomerSchema.plugin(AutoIncrement, { inc_field: 'customerId' });
// CustomerSchema.plugin(autoIncrement.plugin, {model: 'customers', field: 'unique_id', startAt: 1, incrementBy: 1});

CustomerSchema.pre('save', async function(next) {
    if (!this.isNew) {
      return next(); // Skip if not a new document (updating)
    }
  
    const highestCustomer = await this.constructor.findOne({}, {}, { sort: { unique_id: -1 } });
    const highestId = highestCustomer ? highestCustomer.unique_id : 0;
  
    this.unique_id = highestId + 1;
    next();
  });
  

const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;
