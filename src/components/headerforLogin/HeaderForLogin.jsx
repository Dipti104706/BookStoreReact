import React from 'react'
import booklogo from '../../assets/booklogo.png';
import './HeaderForLogin.css';
import { Input } from 'antd';
import "antd/dist/antd.css";
import search from '../../assets/icons8-search.svg';
import profile from '../../assets/profilelogo.jpg';
import order from '../../assets/order.png';
import heart from '../../assets/heart.png';
import cart from '../../assets/supermarket.svg';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { useHistory } from 'react-router';

function HeaderForLogin() {
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
                <div>Profile</div>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ border: 0, p: 0, bgcolor: 'grey' }}>
                            <div className="popper1">
                                <p className = "Welcome">Welcome</p>
                                <div className="info">To access account and manage orders</div>
                                <button className = "logout"  onClick={()=>(history.push('/'))}>LOGIN/SIGNUP</button>
                                <div style={{color:'#dbd2d2',marginLeft:12}}>____________________________</div>
                                <div className="division">
                                    <img src = {order} alt = "profile" className = "icons"/>
                                    <p className = "tags" onClick={()=>(history.push('/please'))}>My Orders</p>
                                </div>
                                <div className="division">
                                    <img src = {heart} alt = "profile" className = "icons"/>
                                    <p className = "tags" onClick={()=>(history.push('/please'))}>My Wishlist</p>
                                </div>
                            </div>
                        </Box>
                    </Fade>
                    )}
                </Popper>
            </div>
            <div className="cart">
                <img src = {cart} onClick={()=>(history.push('/cart'))} className = "cartlogo"/>
                <div>Cart</div>
            </div>            
        </div>
    )
}

export default HeaderForLogin
