import React from 'react';
import { Input, Space, Button } from 'antd';
import './Signup.css'
import "antd/dist/antd.css";

function Signup(props) {

    const takeclick = () => {
        props.listenSigninSignup(true)
    }

    return (
        <div className="Login">
            <div className="buttons">
                <div className="div" onClick={takeclick}>LOGIN
                <button class="tab-btn1" ></button>
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
            </div> 
            <button className="loginButton">Signup</button>
        </div>
    )
}

export default Signup
