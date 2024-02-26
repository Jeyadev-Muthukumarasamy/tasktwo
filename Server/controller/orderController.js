const { orderDetails } = require('../model/orderSchema');
const mongoose = require("mongoose");
const productSchema = require('../model/productSchema');
const createOrder = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        if (!userId) {
            return res.status(400).send({ message: "User ID is required." });
        }

        let userExists = await orderDetails.findById(userId);

        if (!userExists) {
           
            var newOrder = await new orderDetails({
                userId: userId,
                productId: Array.isArray(productId) ? productId : [productId]
            });
           
            const datas = await newOrder.save();
            console.log(datas)
        } else {
            
            userExists.productId.push(...(Array.isArray(productId) ? productId : [productId]));
            
            await userExists.save();
        }
       

        res.status(201).send({ message: "Order created."
       
     });
    } catch (err) {
        res.status(500).send({ message: err.message || "Error creating order." });
    }
};
const getOrderById = async (req, res) => {
    try {
        console.log("Fetching user orders...");
        const userId = req.params.userId;

        
        const userOrders = await orderDetails.find({ userId: userId }).populate({
            path: 'productId',
            model: 'productlogs'
        });

        res.status(200).json({ orders: userOrders });
    } catch (err) {
        res.status(500).json({ message: err.message || "Error fetching user orders." });
    }
};


module.exports = { getOrderById };




module.exports = { createOrder,getOrderById };
