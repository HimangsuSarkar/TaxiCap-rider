import { Button } from 'bootstrap';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Login.css';

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    })
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }
    const handleSubmit = () => {

    }

    return (

        <div>
            <h1>Email:{user.email}</h1>
            < form onSubmit={handleSubmit} >
                <input type="text" name="name" onBlur={handleBlur} placeholder="Enter your Name" /><br /><br />
                <input type="email" name="email" onBlur={handleBlur} placeholder="Enter your Email" required /><br /><br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Enter your Password" required /><br /><br />
                <input type="submit" value="Sign In" />
            </form >
        </div>
    );
}
export default Login;
