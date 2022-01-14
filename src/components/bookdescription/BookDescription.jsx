import React from 'react'
import HeaderForLogin from '../headerforLogin/HeaderForLogin'
import { useHistory } from "react-router-dom";
import BookImage from '../../assets/dont1.png';
import './BookDescription.css';
import Feedback from '../../components/feedback/Feedback';

function BookDescription() {
    let history = useHistory();
    return (
        <div className="MainHeader">
        <HeaderForLogin />      
        <p className="paths">
            <button className = "gotohome" onClick={()=>(history.push('/dashboard'))}> Home / </button><span id="pathtobook">Book</span>
        </p>

        <div className="imagebox">
            <img src={BookImage} alt="Image" className = "booklogo3" />
        </div>
        <div className="tagbuttons">          
            <button id="addtobag">ADD TO BAG</button>       
            <button id="wishlist"> WISHLIST</button>        
        </div>
        <div className = "description">
             <div className="detailsofbook">
                <p id="booktitle">Don't Make Me Think</p>
                <p id ="authorbook">by Steve Krug</p>
                <div className="ratingbox">
                    <span>4★</span>
             </div>
             <span className="countreviewbook">(20)</span>
             <span className="bookprice">Rs. 1500</span> 
             <span className="originalprice"><s>Rs. 2000</s></span>
             <hr className="borderline"></hr>
             <div className="descriptionofbookdetails">
             <ul id="caption"><li>Book Detail</li></ul>
             <p id="Bookparagraph">Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject.</p>
             <hr className="borderline"></hr> 
        </div>

        <div className="feedback">
            <div className="feedback-title">
                <p className="para-for-custfeedback">Customer Feedback</p>
            </div>
            <div className="rating-pad">
            <div className="overallrating">
            <p className="para-for-overallrating"> Overall rating</p>
           <div id="stars">☆ ☆ ☆ ☆ ☆ </div>
            <div className="writereview">
                <input className="input-for-review" type="text" placeholder="Write your review" /> 
                <div className="submitbutton">Submit</div>
            </div>
        </div>
        <Feedback/>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default BookDescription
