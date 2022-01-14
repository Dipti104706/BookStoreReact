import React from 'react'
import booklogo from '../../assets/booklogo.png';
import './ResetPassword.css';
import { Input, Space, Button } from 'antd';
import { useHistory } from "react-router-dom";
import { forgotpassword, login } from '../../services/UserServices';


function ResetPassword() {
    let history=useHistory()
    const[forgotObj,setForgotObj]=React.useState({email:""})

    const takeEmail=(e) => {
        setForgotObj({...forgotObj,email:e.target.value})
    }
    let mailToSend=forgotObj.email;
    const reset=() => {
        forgotpassword(mailToSend).then((resp)=>{
            console.log(resp)
            history.push('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="forgotpassword">           
           <div className="header"> 
                <img src={booklogo} alt="" class="booklogo"/> 
                <p className="bookstoreheader">BookStore</p>
            </div>
            <div className="passwordBody">
                <div><h2>Forget Your Password?</h2></div>
                <div className="resetPs">
                    <p id="message">Enter your email address and we'll send you a link to reset your password.</p>
                    <h6 className="emaill">EmailId</h6>
                    <Input placeholder="" style={{width:304},{borderColor:'#d5d0d0'}} onChange={takeEmail}/>
                    <button className="resetButton" onClick={reset}>Reset Password</button>
                </div>
                <div>
                    <button className="newAccount" onClick={()=>(history.push('/'))} >CREATE ACCOUNT</button>
                </div>

            </div>        
            
        </div>
    )
}

export default ResetPassword
