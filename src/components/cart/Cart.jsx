import React from 'react'
import FooterCopyrights from '../footer/Footer'
import HeaderForLogin from '../headerforLogin/HeaderForLogin'
import map from '../../assets/images (1).png';
import { useHistory } from "react-router-dom";
import { CaretDownOutlined } from '@ant-design/icons';
import './Cart.css';
import Address from '../address/Address';
import OrderSummery from '../ordersummery/OrderSummery';
import CartComponent from './CartComponent';
import { GetCartDetails } from '../../services/UserServices';


function Cart() {
    let history = useHistory();
    const[switchContainers, setSwitchContainers]= React.useState(true)
    const[switchorders, setSwitchOrders]= React.useState(true) 
    const [cartList,setCartList] = React.useState([]);
    
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
    React.useEffect(()=>{
        GetCartDetails().then((response)=>{
            console.log(response.data.data)
            setCartList(response.data.data)
        }).
        catch(err => {
            console.log(err)
        })
    },[]);

    const cartTable=cartList.map((x)=>(<CartComponent key={x.cartID} allCartList={x} />))
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
