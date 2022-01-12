import React from 'react';
import { Input, Space } from 'antd';
import './Signup.css'
import "antd/dist/antd.css";

function Signup(props) {
    const nameRegex=/^[A-Z]{1}[a-z]{2,}$/
    const emailSignUpRegex=/^[a-zA-Z0-9]+[._+-]{0,1}[a-zA-Z0-9]*@[a-zA-Z0-9]{1,10}.[a-zA-Z]{2,10}[.]*[a-zA-Z]*$/
    const psSignUpRegex=/^[a-zA-Z0-9]{1,}[A-Z]*[0-9]*[@&#%$*_-]*[a-zA-Z0-9]*$/
    const numberRegex=/^[0-9]{10}$/

    const[signUpError,setSignUpError]=React.useState({firstBorder:"",firstErrorMsg:"",lastBorder:"",lastErrorMsg:"",emailSignUpBorder:"",emailSignUpErrorMsg:"",psSignUpBorder:"",psSignUpErrorMsg:""})
    const[signUpObj,setSignUpObj]=React.useState({firstNameSign:"",emailSign:"",passwordSign:"",numberSign:""})
    
    const takeFirstName=(e) => {
        setSignUpObj({...signUpObj,firstNameSign:e.target.value})
    }

    const takeEmailSignUp=(e) => {
        setSignUpObj({...signUpObj,emailSign:e.target.value})
    }

    const takeSignUpPassword=(e) => {
        setSignUpObj({...signUpObj,passwordSign:e.target.value})
    }

    const takeNumber=(e) => {
        setSignUpObj({...signUpObj,numberSign:e.target.value})
    }

    const register=() => {
        console.log(signUpObj)
        if((nameRegex.test(signUpObj.firstNameSign)===true) && (numberRegex.test(signUpObj.numberSign)===true) && (emailSignUpRegex.test(signUpObj.emailSign)===true) && (psSignUpRegex.test(signUpObj.passwordSign)===true)) {
            console.log(true)
            setSignUpError("")
            // const signUpDb={firstName:signUpObj.firstNameSign,lastName:signUpObj.lastNameSign,email:signUpObj.emailSign,password:signUpObj.passwordSign};
            // signup(signUpDb).then((resp) => {   //then used for resolve stage of promise, grom the login async send a promise 
            //     console.log(resp)
            //     history.push('/')
            // }).catch((err) => {           //catch used for reject stage
            //     console.log(err)
            // })
        }     
        else if((nameRegex.test(signUpObj.firstNameSign)===false) &&  (numberRegex.test(signUpObj.numberSign)===true) && (emailSignUpRegex.test(signUpObj.emailSign)===true) && (psSignUpRegex.test(signUpObj.passwordSign)===true)){
            console.log(false)
            setSignUpError({firstBorder:"1px solid red",firstErrorMsg:"Invalid fullname"})
        }
        else if((numberRegex.test(signUpObj.numberSign)===false) && (nameRegex.test(signUpObj.firstNameSign)===true) && (emailSignUpRegex.test(signUpObj.emailSign)===true) && (psSignUpRegex.test(signUpObj.passwordSign)===true)){
            console.log(false)
            setSignUpError({lastBorder:"1px solid red",lastErrorMsg:"Invalid number"})
        }
        else if((emailSignUpRegex.test(signUpObj.emailSign)===false && (nameRegex.test(signUpObj.firstNameSign)===true) && (numberRegex.test(signUpObj.numberSign)===true) && (psSignUpRegex.test(signUpObj.passwordSign)===true))){
            console.log(false)
            setSignUpError({emailSignUpBorder:"1px solid red",emailSignUpErrorMsg:"Invalid email"})
        }
        else if((psSignUpRegex.test(signUpObj.passwordSign)===false) && (nameRegex.test(signUpObj.firstNameSign)===true) && (numberRegex.test(signUpObj.numberSign)===true) && (emailSignUpRegex.test(signUpObj.emailSign)===true)){
            console.log(false)
            setSignUpError({psSignUpBorder:"1px solid red",psSignUpErrorMsg:"Invalid password"})
        }
        else{
            console.log("ggggg")
            setSignUpError({firstBorder:"1px solid red",firstErrorMsg:"Enter fullname",lastBorder:"1px solid red",lastErrorMsg:"Enter Number",emailSignUpBorder:"1px solid red",emailSignUpErrorMsg:"Enter email",psSignUpBorder:"1px solid red",psSignUpErrorMsg:"Enter password"})
        }
    }

    const takeclick = () => {
        props.listenSigninSignup(true)
    }

    return (
        <div className="Login">
            <div className="buttons">
                <div className="div" style={{color: '#878787'}} onClick={takeclick}>LOGIN
                    <button class="tab-btn1" ></button> 
                </div>
                <div className="div">SIGNUP
                    <button class="tab-btn"></button>
                </div>
            </div>
            <div className="credentials">
                <h6>FullName</h6>
                <Input style={{border:signUpError.firstBorder,width:245}} onChange={takeFirstName} placeholder="" />
                <p id="error1">{signUpError.firstErrorMsg}</p>
                <h6>EmailId</h6>
                <Input style={{border:signUpError.emailSignUpBorder,width:245}} onChange={takeEmailSignUp} placeholder="" />
                <p id="error1">{signUpError.emailSignUpErrorMsg}</p>               
                <h6>Password</h6>
                <Space direction="vertical">
                    <Input.Password style={{border:signUpError.psSignUpBorder}} onChange={takeSignUpPassword} placeholder="" />                   
                </Space>
                <p id="error1">{signUpError.psSignUpErrorMsg}</p>
                <h6>Mobile Number</h6>
                <Input style={{border:signUpError.lastBorder,width:245}} onChange={takeNumber} placeholder="" />
                <p id="error1">{signUpError.lastErrorMsg}</p>
            </div> 
            <button onClick={register} className="loginButton">Signup</button>
        </div>
    )
}

export default Signup
