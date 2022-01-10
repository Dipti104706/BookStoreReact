import React from 'react'
import { Input, Space, Button } from 'antd';
import './Signin.css'
import "antd/dist/antd.css";
import img from '../../assets/loginpic.png';

function Signin() {
    return (
        <div className="Signin">
            <div className="logo">
                <img src={img} alt="logo" className="image"/>
                <br/>  
                <p className="text">ONLINE BOOK SHOPPING</p>
            </div>
            <div className="Login">
                <div className="buttons">
                    <div className="div">LOGIN
                    <button class="tab-btn" ></button>
                    </div>
                    <div className="div">SIGNUP
                        <button class="tab-btn"></button>
                    </div>
                </div>
                <div className="credentials">
                    <h6>EmailId</h6>
                    <Input placeholder="Email" style={{width:245}}/>
                    {/* <p id="error">{loginError.emailErrorMsg}</p>                */}
                    <h6>Password</h6>
                    <Space direction="vertical">
                        <Input.Password placeholder="Password" />                   
                    </Space>
                </div> 
                <div className="forgot">
                    <Button style={{color:'grey'}} id="button" type="link">Forgot Password?</Button>
                </div>               
                <button className="loginButton">Login</button>                
                <h5>OR</h5>
                <div className = "account">
                    <button id="accountButton">Facebook</button>
                    <button id="accountButton2">Google</button>
                </div>         
            </div>   
        </div>
    )
}

export default Signin
