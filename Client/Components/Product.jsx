import React, { useEffect, useState } from 'react';
import "./Product.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    // console.log(userId)
    const userId = localStorage.getItem("userId")
    console.log(userId)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/getProducts");
            setProducts(response.data.data); 
        } catch (error) {
            console.log(error);
        }
    };

    const handlePriceAsc=async()=>{
        try {
            const response = await axios.get("http://localhost:3001/api/fetchPriceIncreasing");
            setProducts(response.data.data); 
        } catch (error) {
            console.log(error);
        }

    }

    const handlePriceDesc=async()=>{
        try {
            const response = await axios.get("http://localhost:3001/api/fetchPriceDecreasing");
            setProducts(response.data.data); 
        } catch (error) {
            console.log(error);
        }

    }

    const postOrder = async(item)=>{
        console.log(item,"hello")
        try {
            const response = await axios.post("http://localhost:3001/api/createOrder",
            {
                userId:userId,
                productId:item
                

            }
           
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <button onClick={handlePriceAsc} className="filterbutton">Filter Price in increasing order</button>

        <button onClick={handlePriceDesc} className="filterbutton">Filter Price in decreasing order</button>
        <Link to = "/Orders">
           
            
        <button className='button--order'>Orders</button>
        </Link>
        <div className='product--container'>
      
            {products.map(product => (
                <div className='product--cardtotal' key={product._id}>
                    <div className='product--cardimage'>
                        <img src={product.image} className='product--image' alt={product.title} />
                        <p className='product--title'>{product.title}</p>
                        <p className='product--price'>{product.price}</p>
                        <p className='product--description'>{product.description}</p>
                        <p className='product--category'>{product.category}</p>
                        <p className='product--ratings'>{product.rating}</p>
                        
                        <button onClick={()=>postOrder(product._id)}>Order Now</button>
                    </div>
                </div>
            ))}
            
           
           
        </div>
      

        </>
    );
}

export default Product;
