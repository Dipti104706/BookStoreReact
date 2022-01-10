import React from 'react'
import img from '../../assets/loginpic.png';
import { Input, Space, Button } from 'antd';
import './Signup.css'
import "antd/dist/antd.css";

function Signup() {
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
                    <h6>FullName</h6>
                    <Input placeholder="" style={{width:245}}/>
                    <h6>EmailId</h6>
                    <Input placeholder="" style={{width:245}}/>
                    {/* <p id="error">{loginError.emailErrorMsg}</p>                */}
                    <h6>Password</h6>
                    <Space direction="vertical">
                        <Input.Password placeholder="" />                   
                    </Space>
                    <h6>Mobile Number</h6>
                    <Input placeholder="" style={{width:245}}/>
            `   </div> 
                <button className="loginButton">Signup</button>
            </div>           
        </div>
    )
}

export default Signup
