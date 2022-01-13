import React from 'react'
import FooterCopyrights from '../footer/Footer'
import HeaderForLogin from '../headerforLogin/HeaderForLogin'
import { useHistory } from "react-router-dom";
import BookImage from '../../assets/dont1.png';
import star from '../../assets/starlogo.jpg';
import './BookDescription.css';

function BookDescription() {
    let history = useHistory();
    return (
        <div>
            <HeaderForLogin/>
            <div className="bookDesp">
                <div className="top">
                    <div className="home" onClick={()=>(history.push('/dashboard'))}> Home / </div>
                    <div className="part1">Book(01)</div>
                </div>
                <div className="wholePart">
                    <div className="imagepart">
                        <img src={BookImage} className = "bookimge" />
                        <div className="addto">
                            <button  className="loginButton">ADD TO BAG</button>
                            <button className="loginButton">WISHLIST</button>
                        </div>
                    </div>
                    <br/>
                    <div className="despPart">
                        <div className="Detailspart">  
                            <div className="bookName">Don't Make Me Think</div>   
                            <div className="authorname">by Steve Krug</div>  
                            <div className="options">
                                <div className="ratings">
                                    <span className="rating">4.5</span>
                                    <img src={star} className = "starlogo" />
                                </div>
                                <span className = "reviewer">(20)</span>
                            </div>                                 
                            <div className="price">
                                <div className="discount">Rs. 1500</div>
                                <div className="original">Rs. 2000</div>
                            </div>
                            <div id="line">-</div>
                            <div className="allBookDetails">
                                <div className="dot2"></div>
                                <div className="bookDet">Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject.</div>

                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default BookDescription
