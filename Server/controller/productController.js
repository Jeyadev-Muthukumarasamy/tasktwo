const { products } = require("../model/productSchema");
const fetchProduct = async(req,res)=>{
    try {
        const data = await products.find();
        return res.status(200).json({
            message:"successfully fetched the data",
            data:data
        })
    } catch (error) {
        console.log(error)
    }
}
const fetchProductsByIncreasingPriceOrder = async (req, res) => {
    try {
        const dataAscending = await products.aggregate([
            { $sort: { price: 1 } } 
        ])

        console.log(dataAscending);

        res.status(200).json({
            message: "Successfully fetched the data",
            data: dataAscending
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occurred while fetching data",
            error: error.message
        });
    }
}


const fetchProductsByDecreasingOrder = async (req, res) => {
    try {
        const dataAscending = await products.aggregate([
            { $sort: { price: -1 } } 
        ])

        console.log(dataAscending);

        res.status(200).json({
            message: "Successfully fetched the data",
            data: dataAscending
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occurred while fetching data",
            error: error.message
        });
    }
}



const postProduct = async(req,res)=>{
    try {
        console.log(1)
        const {title,price,description,category,image,rating} = req.body;
        console.log(2)
        const product =await products.create({
            title,price,description,category,image,rating
        })
        console.log(product)
        console.log(3)
        res.status(200).json({
            message:"Successfully posted the product",
            data:product
        })
    } catch (error) {
        res.status(401).json({
            message:"oops there is an error",
            error:error
        })
        
    }
    
}

module.exports = {postProduct,fetchProductsByIncreasingPriceOrder,fetchProductsByDecreasingOrder,fetchProduct}