import React from 'react'
import HeaderForLogin from '../headerforLogin/HeaderForLogin'
import { useHistory } from "react-router-dom";
import BookImage from '../../assets/dont1.png';
import './BookDescription.css';
import Feedback from '../../components/feedback/Feedback';
import { getBookById,Addtocart,AddtoWishlist } from '../../services/UserServices';

function BookDescription() {
    let history = useHistory();

    const [currentBook,setcurrentBook] = React.useState([]);
    React.useEffect(()=>{
            getBookById().then((response)=>{
                setcurrentBook(response.data.data)
            }).catch(err => {console.log(err)})
        },[]);
    
    const cart =() =>{
        let obj = {
            userId: parseInt(localStorage.getItem("userId")),
            bookId: currentBook.bookId
            }
            Addtocart(obj).then((response)=>{
                console.log(response);
                alert("Book added to wishlist");
            }).catch(err => {
                console.log(err);
            })
    }

    const wishlist =() =>{
        let obj = {
            userId: parseInt(localStorage.getItem("userId")),
            bookId: currentBook.bookId
            }
            AddtoWishlist(obj).then((response)=>{
                console.log(response);
                alert("Book added to wishlist");
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="MainHeader">
        <HeaderForLogin />      
        <p className="paths">
            <button className = "gotohome" onClick={()=>(history.push('/dashboard'))}> Home / </button><span id="pathtobook">Book</span>
        </p>

        <div className="imagebox">
            <img src={currentBook.image} alt="Image" className = "booklogo3" />
        </div>
        <div className="tagbuttons">          
            <button id="addtobag" onClick={cart}>ADD TO BAG</button>       
            <button id="wishlist" onClick={wishlist}> WISHLIST</button>        
        </div>
        <div className = "description">
             <div className="detailsofbook">
                <p id="booktitle">{currentBook.bookName}</p>
                <p id ="authorbook">{currentBook.authorName}</p>
                <div className="ratingbox">
                    <span>{currentBook.rating}★</span>
             </div>
             <span className="countreviewbook">({currentBook.reviewer})</span>
             <span className="bookprice">Rs. {currentBook.discountPrice}</span> 
             <span className="originalprice"><s>Rs. {currentBook.originalPrice}</s></span>
             <hr className="borderline"></hr>
             <div className="descriptionofbookdetails">
             <ul id="caption"><li>Book Detail</li></ul>
             <p id="Bookparagraph">{currentBook.bookDescription}</p>
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
