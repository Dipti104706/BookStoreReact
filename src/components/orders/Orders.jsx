import React from 'react'
import './Orders.css';
import FooterCopyrights from '../footer/Footer'
import BookHeader from '../header/Header';
import book from '../../assets/dont1.png';
import { useHistory } from "react-router-dom";

function Orders() {
    let history = useHistory();
    return (
        <div>
            <BookHeader/>
            <div className="orders">
                <div className="top">
                    <div className="home" onClick={()=>(history.push('/dashboard'))}> Home / </div>
                    <div className="part1">My Order</div>
                </div>
                <div className="wishlistContainer">
                    <img className="BookImage" src={book}/>
                    <div className="orderDescription">
                        <div className="bookName1">Don't Make Me Think</div>   
                        <div className="authorname1">by Steve Krug</div>                                   
                        <div className="price1">
                            <div className="discount1">Rs. 1500</div>
                            <div className="original1">Rs. 2000</div>
                        </div> 
                    </div>
                    <div className="datecontainer">
                        <div className="greenDot"></div>
                        <div className="date">Order Placed on May 21</div>
                    </div>
                                       
                </div>
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default Orders
