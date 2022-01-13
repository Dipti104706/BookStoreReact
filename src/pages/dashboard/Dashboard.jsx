import React from 'react';
import BookComponent from '../../components/bookComponent/BookComponent';
import FooterCopyrights from '../../components/footer/Footer';
import BookHeader from '../../components/header/Header';
import './Dashboard.css';
import HeaderForLogin from '../../components/headerforLogin/HeaderForLogin';

function Dashboard() {
    const[switchContainers, setSwitchContainers]= React.useState(false)
    const listenheader = () => {
            if (localStorage.getItem("token")){
                setSwitchContainers(true)
            }            
            else{
                setSwitchContainers(false)
            }
    } 
    return (
        <div>
            <div onLoad={listenheader}>
                {
                    switchContainers ? <HeaderForLogin /> :<BookHeader/>
                    // switchContainers ? <BookHeader /> :<HeaderForLogin/>
                }
            </div>
            {/* <BookHeader/>
            <HeaderForLogin/> */}
            <BookComponent/>
            <FooterCopyrights/>
        </div>
    )
}

export default Dashboard
