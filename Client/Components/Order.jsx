import React, { useEffect, useState } from 'react';
import "./Product.css"
import axios from 'axios';
// imrpot "./Product.css"

const Order = () => {
  const [orderdata, setOrderData] = useState([]);
  const data = localStorage.getItem("userId");
  console.log(data)

  const API_URL = `http://localhost:3001/api/fetchById/${data}`

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data.orders)
      setOrderData(response.data.orders);
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
 
      


    <div className='product--container'>
      {orderdata.map(order => (
        <div key={order._id} className='ordergrid-one'>
          <img src={order.productId[0].image} alt={order.productId[0].title} className='product--image'/>
          <div className='ordergrid-two'>
            <p className='product--title'>{order.productId[0].title}</p>
            <p className='product--description'>{order.productId[0].description}</p>
            <p className='product--price'>${order.productId[0].price}</p>
          </div>
          <div className='ordergrid-three'>
            <p>Rating: {order.productId[0].rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
