import React from 'react';
import book from '../../assets/dont1.png';
import star from '../../assets/starlogo.jpg';
import './BookComponent.css';

function BookComponent() {
    return (
        <div className = "Bookcontainer">
            <div class="Imagepart">
                <img className="BookImg" src={book}/>
            </div>
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
            </div>                
        </div>
    )
}

export default BookComponent
