


exports.init
    = function (app) {


        require("../model/customer")
        require("../model/item")
        require("../model/vehicle")
        require("../model/order")



        const itemRouter = require("../routes/item");
        const customerRouter = require("../routes/customer");
        const vehicleRouter = require("../routes/vehicle");
        const orderRouter = require("../routes/order");


        // app.use(authenticate)
        app.use(itemRouter);
        app.use(customerRouter);
        app.use(orderRouter);
        app.use(vehicleRouter);
        return app
    }


function authenticate(req,res,next) {
    console.log(req); 
    next()     // exact defined route
    console.log("In authernticate function")
}

