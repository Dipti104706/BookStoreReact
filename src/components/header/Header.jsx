import React from 'react'
import booklogo from '../../assets/booklogo.png';
import './Header.css';
import { Input } from 'antd';
import "antd/dist/antd.css";
import search from '../../assets/icons8-search.svg';
import profile from '../../assets/profilelogo.jpg';
import cart from '../../assets/supermarket.svg';
import { useHistory } from 'react-router';

function BookHeader() {
    return (
        <div className="header">
            <div className = "headerside">
                <img src={booklogo} class="booklogo"/>
                <p className="bookstoreheader">BookStore</p>
            </div>
            <div className="Search">
                <img className="Search-logo" src={search} alt="search"/>
                <Input className="Search-Text" style={{background:'rgb(255 255 255)',borderColor:'rgb(255 255 255)',width:300}} placeholder="Search..."/>           
            </div>
            <div className="profile">
                <img src = {profile} className = "mainprofilelogo"/>
                <div>Dipti</div>
            </div>
            <div className="cart">
                <img src = {cart} className = "cartlogo"/>
                <div>Cart</div>
            </div>
            
        </div>
    )
}

export default BookHeader
