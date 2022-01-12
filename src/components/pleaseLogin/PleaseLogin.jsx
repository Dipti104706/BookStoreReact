import React from 'react'
import HeaderForLogin from '../headerforLogin/HeaderForLogin'
import './PleaseLogin.css';
import heartMsg from '../../assets/heartmessage.png';

function PleaseLogin() {
    return (
        <div>
            <HeaderForLogin/>
            <div className="extra">
                <div className="please">PLEASE LOG IN</div>
                <div className="logintoview">Login to view items in your wishlist.</div>
                <br/>
                <img src = {heartMsg} alt = "profile" className = "heartmsg"/>
            </div>            
        </div>
    )
}

export default PleaseLogin
