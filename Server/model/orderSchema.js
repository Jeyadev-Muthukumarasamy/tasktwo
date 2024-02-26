    const mongoose = require("mongoose");

    const orderSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userlogs"
        },
        productId: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: "productlogs"
        }]
    });

    module.exports = {
        orderDetails: mongoose.model("orderlogs", orderSchema)
    };
