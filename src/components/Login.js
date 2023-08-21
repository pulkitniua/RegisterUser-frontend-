import React from 'react';
import axios from 'axios';
import { useState } from "react";

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    async function login(event){
        event.preventDefault();
        try {
            
           const response =  axios.post("http://localhost:8080/api/v1/employee/login",
            {
                username:name,
                password:password
            });
            const userData = response.data;
            //storing data in state
            setUser(userData);
            //Set authentication token
            localStorage.setItem('authToken', userData.token);
            
            alert("Login Successful");

            setName("");
            setPassword("");
            setError('');
        } catch (error) {
           
            setError('Invalid credentials');
            alert("Login failed");
            
        }

    };
    return (
            
            <div className="main-container">
            <h2>Login</h2>
            <form onSubmit={login}>
            <label>Enter Name </label>
            <input type="text" className="widthbox" name="name" value={name} onChange={e=>{
                setName(e.target.value);
            }}/>
            <label>Enter Password </label>
            <input type="password" className="widthbox" name="pass" value={password} onChange={e=>{
                setPassword(e.target.value);
            }}/>
            <div className="btn-container">
            <button type="submit" >Login</button>
            </div>
            </form>
            {user && (
        <div>
          <h3>Welcome, {user.username}!</h3>
          
        </div>
      )}
        </div>
    )
}

export default Login;