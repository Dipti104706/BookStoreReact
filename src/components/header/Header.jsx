import React from 'react'
import booklogo from '../../assets/booklogo.png';
import './Header.css';
import { Input } from 'antd';
import "antd/dist/antd.css";
import search from '../../assets/icons8-search.svg';
import profile from '../../assets/profilelogo.jpg';
import person from '../../assets/people.png';
import order from '../../assets/order.png';
import heart from '../../assets/heart.png';
import cart from '../../assets/supermarket.svg';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { useHistory } from 'react-router';

function BookHeader() {
    let history = useHistory()
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
      };
    
      const canBeOpen = open && Boolean(anchorEl);
      const id = canBeOpen ? 'transition-popper' : undefined;
    

    return (
        <div className="header">
            <div className = "headerside">
                <img src={booklogo} class="booklogo"/>
                <p className="bookstoreheader">BookStore</p>
            </div>
            <div className="Search">
                <img className="Search-logo" src={search} alt="search"/>
                <Input className="Search-Text" style={{background:'rgb(255 255 255)',borderColor:'rgb(255 255 255)',width:300, height:28}} placeholder="Search..."/>           
            </div>
            <div className="profile" onClick={handleClick}>
                <img src = {profile} className = "mainprofilelogo"/>
                <div>Dipti</div>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ border: 0, p: 0, bgcolor: 'grey',background:'rgb(255 255 255)' }}>
                            <div className="popper">
                                <p className = "hello">Hello User,</p>
                                <div className="division">
                                    <img src = {person} alt = "profile" className = "icons"/>
                                    <p className = "tags">Profile</p>
                                </div>
                                <div className="division">
                                    <img src = {order} alt = "profile" className = "icons"/>
                                    <p className = "tags" onClick={()=>(history.push('/orders'))}>My Orders</p>
                                </div>
                                <div className="division">
                                    <img src = {heart} alt = "profile" className = "icons"/>
                                    <p className = "tags" onClick={()=>(history.push('/wishlist'))}>My Wishlist</p>
                                </div>
                                <button className = "logout">Logout</button>
                            </div>
                        </Box>
                    </Fade>
                    )}
                </Popper>
            </div>
            <div className="cart">
                <img src = {cart} className = "cartlogo"/>
                <div>Cart</div>
            </div>            
        </div>
    )
}

export default BookHeader
