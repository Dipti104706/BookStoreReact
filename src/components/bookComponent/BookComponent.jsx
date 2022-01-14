import React from 'react';
import book from '../../assets/dont1.png';
import star from '../../assets/starlogo.jpg';
import './BookComponent.css';

function BookComponent(props) {
    return (
        <div className = "Bookcontainer">
            <div class="Imagepart">
                <img className="BookImg" src={props.allBooks.image}/>
            </div>
            <div className="Detailspart">  
                <div className="bookName">{props.allBooks.bookName}</div>   
                <div className="authorname">{props.allBooks.authorName}</div>  
                <div className="options">
                    <div className="ratings">
                        <span className="rating">{props.allBooks.rating}</span>
                        <img src={star} className = "starlogo" />
                    </div>
                    <span className = "reviewer">({props.allBooks.reviewer})</span>
                </div>                                 
                <div className="price">
                    <div className="discount">Rs. {props.allBooks.discountPrice}</div>
                    <div className="original">Rs. {props.allBooks.originalPrice}</div>
                </div>
            </div>                
        </div>
    )
}

export default BookComponent
