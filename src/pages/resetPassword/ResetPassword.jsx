import React from 'react'
import booklogo from '../../assets/booklogo.png';
import './ResetPassword.css';
import { Input, Space, Button } from 'antd';

function ResetPassword() {
    return (
        <div className="forgotpassword">           
           <div className="header"> 
                <img src={booklogo} alt="" class="booklogo"/> 
                <p className="bookstoreheader">BookStore</p>
            </div>
            <div className="passwordBody">
                <div><h3>Forget Your Password?</h3></div>
                <div className="resetPs">
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                    <h6>EmailId</h6>
                    <Input placeholder="" style={{width:245}}/>
                </div>

            </div>        
            
        </div>
    )
}

export default ResetPassword
