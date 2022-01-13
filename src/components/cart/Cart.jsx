import React from 'react'
import FooterCopyrights from '../footer/Footer'
import HeaderForLogin from '../headerforLogin/HeaderForLogin'
import book from '../../assets/dont1.png';
import map from '../../assets/images (1).png';
import { useHistory } from "react-router-dom";
import { CaretDownOutlined,PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';
import './Cart.css';
import Address from '../address/Address';
import OrderSummery from '../ordersummery/OrderSummery';


function Cart() {
    let history = useHistory();
    const[switchContainers, setSwitchContainers]= React.useState(true)
    const[switchorders, setSwitchOrders]= React.useState(true)
    const listenAddress = () => {
        setSwitchContainers(false)
    } 

    const listenAddressDetails = (data) => {
        if (data === true){
            setSwitchContainers(true)
        }
    }

    const listenOrder = () => {
        setSwitchOrders(false)
    } 

    const listenOrderDetails = (data) => {
        if (data === true){
            setSwitchOrders(true)
        }
    }
    

    return (
        <div>
            <HeaderForLogin/>
            <div className="orders">
                <div className="top">
                    <div className="home" onClick={()=>(history.push('/dashboard'))}> Home / </div>
                    <div className="part1">My Order</div>
                </div>
                <div className="placeOrder">
                    <div className="heading1">
                        <h3 style={{marginLeft:29}}>My Cart(01)</h3>
                        <div className="location">
                            <img className="map" src={map}/>
                            <div className="current">Use current location</div>
                            <CaretDownOutlined style={{color:'grey'}}/>
                        </div>
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
                            <div className="quantity">
                                <MinusCircleOutlined style={{color:'grey'}}/>
                                <div className="one">  1</div>
                                <PlusCircleOutlined style={{color:'grey'}}/>
                                <div style={{fontSize:10, marginLeft:14}}>Remove</div>
                            </div> 
                        </div>
                                                             
                    </div>
                    <button className="continueShopping1" >PLACE ORDER</button> 
                </div>
                <div className="addressDetails">
                    {
                        switchContainers ? <h4 id="summery" onClick={listenAddress}>Address Details</h4> :<Address listenAddressDetails={listenAddressDetails} />
                    }
                </div>
                <div className="addressDetails">
                    {
                        switchorders ? <h4 id="summery" onClick={listenOrder}>Order summery</h4> :<OrderSummery listenOrderDetails={listenOrderDetails} />
                    }
                </div>
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default Cart
