import React from 'react'
import book from '../../assets/dont1.png';
import './OrderSummery.css';

function OrderSummery(props) {
    const listencart =() =>{
        props.listenOrderDetails(true);
    }    
    return (
        <div className="Ordersummery">
                    <div className="heading1">
                        <h3 style={{marginLeft:29}} onClick={listencart}>Order Summery</h3>
                    </div>
                    
                    <div className="wishlistContainer1">
                        <img className="BookImage" src={book}/>
                        <div className="orderDescription1">
                            <div className="bookName1">Don't Make Me Think</div>   
                            <div className="authorname1">by Steve Krug</div>                                   
                            <div className="price1">
                                <div className="discount1">Rs. 1500</div>
                                <div className="original1">Rs. 2000</div>
                            </div> 
                        </div>                                                             
                    </div>
                    <button className="continueShopping1" >CHECKOUT</button> 
                </div>
    )
}

export default OrderSummery
