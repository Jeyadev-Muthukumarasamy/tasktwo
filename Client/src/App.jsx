// import { useState } from 'react'
import './App.css'
import { Link,Route,Routes } from 'react-router-dom';
import Registration from '../Components/Registration';
import Product from "../Components/Product"
import Order from "../Components/Order"



import Login from '../Components/Login';
function App() {

  return (
    <>
    <div>
    <Routes>
    
    <Route path  = "/" element={<Login />}/>
    <Route path = "/signup" element = {<Registration />}/>
    <Route path = "/product" element={<Product />}/>
    <Route path = "/Orders" element = {<Order />}/>
   
    
    </Routes>
    </div>
      
    </>
  )
}

export default App
