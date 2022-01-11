import React from 'react'
import { Input, Space, Button } from 'antd';
import './Signin.css';
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { login } from '../../services/UserServices';


function Signin(props) {
    let history = useHistory()
    const emailRegex=/^[a-zA-Z0-9]+[._+-]{0,1}[a-zA-Z0-9]*@[a-zA-Z0-9]{1,10}.[a-zA-Z]{2,10}[.]*[a-zA-Z]*$/
    const psRegex=/^[a-zA-Z0-9]{1,}[A-Z]*[0-9]*[@&#%$*_-]*[a-zA-Z0-9]*$/

    const[loginError,setloginError]=React.useState({emailBorder:"",emailErrorMsg:"",psBorder:"",psErrorMsg:""})
    const[loginObj,setLoginObj]=React.useState({email:"",password:""})

    const takeEmail=(e) => {
        setLoginObj({...loginObj,email:e.target.value})
    }
    const takePassword=(e) => {
        setLoginObj({...loginObj,password:e.target.value})
    }

    const submit=() => {
        console.log(loginObj)
        if((emailRegex.test(loginObj.email)==true) && (psRegex.test(loginObj.password)==true)) {
            console.log(true)
            setloginError("")
            // login(loginObj).then((resp) => {   //then used for resolve stage of promise, grom the login async send a promise 
            //     console.log(resp)
            //     localStorage.setItem("token",resp.data.token);  //setitem takes two parameter name of  data , second actuall data
            //     localStorage.setItem("userID",resp.data.data.userId);
            //     history.push('/dashboard');
            // }).catch((err) => {           //catch used for reject stage
            //     console.log(err)
            // })
        }  
        else if((emailRegex.test(loginObj.email)==false) && (psRegex.test(loginObj.password)==true)){
            setloginError({emailBorder:"1px solid red",emailErrorMsg:"red",psBorder:"",psErrorMsg:""})
        }
        else if((psRegex.test(loginObj.password)==false) && (emailRegex.test(loginObj.email)==true)){
            setloginError({emailBorder:"",emailErrorMsg:"",psBorder:"1px solid red",psErrorMsg:"red"})
        }        
        else {
            console.log(false)
            setloginError({emailBorder:"1px solid red",emailErrorMsg:"red",psBorder:"1px solid red",psErrorMsg:"red"})
        }       
    }

    const takeclick = () => {
        props.listenSigninSignup(false)
    }

    return (
        <div className="Login">
            <div className="buttons">
                <div className="div" >LOGIN
                <button class="tab-btn" ></button>
                </div>
                <div className="div" style={{color: '#878787'}} onClick={takeclick}>SIGNUP
                    <button class="tab-btn2" ></button>
                </div>
            </div>
            <div className="credentials">
                <h6 style={{color:loginError.emailErrorMsg}}>EmailId</h6>
                <Input style={{border:loginError.emailBorder}} onChange={takeEmail}/>
                {/* <p id="error">{loginError.emailErrorMsg}</p>                */}
                <h6 style={{color:loginError.psErrorMsg}}>Password</h6>
                <Space direction="vertical">
                    <Input.Password style={{border:loginError.psBorder}} onChange={takePassword}/>                   
                </Space>
            </div> 
            <div className="forgot">
                <Button style={{color:'d5d0d0'}} id="button" type="link" onClick={()=>(history.push('/forgotpassword'))}><h6>Forgot Password?</h6></Button>
            </div>               
            <button className="loginButton" onClick={submit}>Login</button>                
            <h5>OR</h5>
            <div className = "account">
                <button id="accountButton">Facebook</button>
                <button id="accountButton2">Google</button>
            </div>         
        </div> 
    )
}

export default Signin
