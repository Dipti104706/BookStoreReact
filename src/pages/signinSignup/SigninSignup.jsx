import React from 'react'
import { Input, Space, Button } from 'antd';
import './SigninSignup.css';
import "antd/dist/antd.css";
import img from '../../assets/loginpic.png';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';

function SigninSignup() {
    const[switchContainers, setSwitchContainers]= React.useState(true)
    const listenSigninSignup = (data) => {
        console.log(data)
        if (data === true){
            setSwitchContainers(true)
        }
        else{
            setSwitchContainers(false)
        }
    } 
    return (
        <div className="Signin">
            <div className="logo">
                <img src={img} alt="logo" className="image"/>
                <br/>  
                <p className="text">ONLINE BOOK SHOPPING</p>
            </div>
            <div className="Login1">
                {
                    switchContainers ? <Signin listenSigninSignup={listenSigninSignup} /> :<Signup  listenSigninSignup={listenSigninSignup}/>
                }
            </div>
        </div>
    )
}

export default SigninSignup
