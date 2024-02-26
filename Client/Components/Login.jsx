import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import Product from './Product'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState(null); 
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:3001/api/login", {
                name: name,
                password: password
            });
            localStorage.setItem("token", response.data.token.accessToken);
            localStorage.setItem("userId",response.data.userId)
            setUserId(response.data.userId);

            console.log(response.data.userId,"user")
            
            
           navigate("/product")
            
        } catch (error) {
            console.log(error);
        }
    };

    console.log(userId)

    return (
        <div className='login--container'>
            <p className='login--heading'>Login</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' className='logininput' value={name} onChange={handleNameChange} />
                <br />
                <input type="password" placeholder='Enter your password' className='logininput' value={password} onChange={handlePasswordChange} />
                <br />
                <button className='signin'>Sign In</button>
            </form>
            {console.log(userId,"from bottom") }
             {userId && <Product userId={userId} />} 
             <Link to = "/signup">
             <p>Not a user then sign up</p>
             </Link>
            
            
        </div>
        
    );
};

export default Login;
