import React from 'react'
import FooterCopyrights from '../footer/Footer'
import map from '../../assets/images (1).png';
import { useHistory } from "react-router-dom";
import { CaretDownOutlined } from '@ant-design/icons';
import './Cart.css';
import Address from '../address/Address';
import OrderSummery from '../ordersummery/OrderSummery';
import CartComponent from './CartComponent';
import { GetCartDetails,GetAddressDetails } from '../../services/UserServices';
import BookHeader from '../header/Header';

function Cart() {
    let history = useHistory();
    const[switchContainers, setSwitchContainers]= React.useState(true)
    const[switchorders, setSwitchOrders]= React.useState(true) 
    const [cartList,setCartList] = React.useState([]);
    const [addressList,setAddressList] = React.useState([]);
    const[listenCart, setListenCart]= React.useState(false) ;
    const[countOfBook, setCountOfBook]= React.useState(1) ;
    
    const listenAddress = () => {
        setSwitchContainers(false)
    } 

    const listenBookCount = (data) => {
        console.log(data)
        setCountOfBook(data);
    }

    const listenAddressDetails = (data) => {
        if (data === true){
            setSwitchContainers(true)
        }
    }

    React.useEffect(()=>{
        GetAddressDetails().then((response)=>{
            console.log(response.data.data)
            setAddressList(response.data.data)
        }).
        catch(err => {
            console.log(err)
        })
    },[switchContainers]);

    const listenOrder = () => {
        setSwitchOrders(false)
    } 
    
    const listenOrderSummery = (data) => {
        if (data === false){
            setSwitchOrders(false)
        }
    }

    const listenOrderDetails = (data) => {
        if (data === true){
            setSwitchOrders(true)
        }
    }

    const listenToCart = (data) => {
        if (data === true){
            setListenCart(true)
        }
    }

    React.useEffect(()=>{
        GetCartDetails().then((response)=>{
            console.log(response.data.data)
            setCartList(response.data.data)
        }).
        catch(err => {
            console.log(err)
        })
    },[listenCart]);

    const cartTable=cartList.map((x)=>(<CartComponent key={x.cartID} allCartList={x} listenBookCount={listenBookCount} listenToCart={listenToCart} />))
    const addressTable=addressList.map((x)=>(<Address key={x.addressId} allAddressList={x} listenOrderSummery={listenOrderSummery} listenAddressDetails={listenAddressDetails} />))
    const summeryTable=cartList.map((x)=>(<OrderSummery key={x.cartID} allCartList={x} count={countOfBook} listenOrderDetails={listenOrderDetails} />))
    
    return (
        <div>
            <BookHeader/>
            <div className="orders">
                <div className="top">
                    <div className="home" onClick={()=>(history.push('/dashboard'))}> Home / </div>
                    <div className="part1">My Order</div>
                </div>
                <div className="placeOrder">
                    <div className="heading1">
                        <h3 style={{marginLeft:29}}>My Cart({cartList.length})</h3>
                        <div className="location">
                            <img className="map" src={map}/>
                            <div className="current">Use current location</div>
                            <CaretDownOutlined style={{color:'grey'}}/>
                        </div>
                    </div>                   
                    <div className="cartDiv">
                         {cartTable}                                    
                    </div>
                    {/* <button className="continueShopping1" >PLACE ORDER</button>  */}
                </div>
                <div className="addressDetails">
                    {
                        switchContainers ? <h4 id="summery" onClick={listenAddress}>Address Details</h4> :<div>{addressTable}</div>                        
                    }
                </div>
                <div className="addressDetails">
                    {
                        switchorders ? <h4 id="summery" onClick={listenOrder}>Order summery</h4> :<div>{summeryTable}</div>
                    }
                </div>
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default Cart
