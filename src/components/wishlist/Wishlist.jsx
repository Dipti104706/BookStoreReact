import React from 'react'
import FooterCopyrights from '../footer/Footer'
import BookHeader from '../header/Header';
import './wishlist.css';
import book from '../../assets/dont1.png';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

function Wishlist() {
    let history = useHistory()
    return (
        <div>
            <BookHeader/>
            <div className="wishlist">
                <div className="top">
                    <div className="home" onClick={()=>(history.push('/dashboard'))}> Home / </div>
                    <div className="part1">My Wishlist</div>
                </div>
                <div className="mid-container">
                    <h3>My Wishlist(01)</h3>
                </div>
                <div className="wishlistContainer">
                    <img className="BookImage" src={book}/>
                    <div className="allDescription">
                        <div className="bookName1">Don't Make Me Think</div>   
                        <div className="authorname1">by Steve Krug</div>                                   
                        <div className="price1">
                            <div className="discount1">Rs. 1500</div>
                            <div className="original1">Rs. 2000</div>
                        </div> 
                    </div>
                    <DeleteOutlined style={{color:'#a39f9f'}}/>                    
                </div>
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default Wishlist


