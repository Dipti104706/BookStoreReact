import React from 'react';
import BookComponent from '../../components/bookComponent/BookComponent';
import FooterCopyrights from '../../components/footer/Footer';
import BookHeader from '../../components/header/Header';
import './Dashboard.css';
import HeaderForLogin from '../../components/headerforLogin/HeaderForLogin';
import { getBooks } from '../../services/UserServices';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Dashboard() {
    const[switchContainers, setSwitchContainers]= React.useState(false)
    const[bookArray, setBookArray] = React.useState([])

    const GetBooks =() => {
        getBooks().then((resp) => {
        console.log(resp.data.data)  
        setBookArray(resp.data.data)    
    }).catch((err) => {
        console.log(err)
    })
}
    

    const listenheader = () => {
            if (localStorage.getItem("token")){
                console.log("jjjj")
                GetBooks();
                setSwitchContainers(true)
            }            
            else{
                setSwitchContainers(false)
            }
    } 

    const bookList=bookArray.map((x)=>(<BookComponent key={x.bookId} allBooks={x} />))
    return (
        <div>
            <div onLoad={listenheader}>
                {
                    // switchContainers ? <HeaderForLogin /> :<BookHeader />
                    switchContainers ? <BookHeader /> :<HeaderForLogin/>
                }
            </div>
            <div className="mid-container1">
                    <div>Books</div>
                    <div className="item">(128 items)</div>
                </div>
            <div className="mainNotesContainer" >
                {bookList} 
            </div>
            <Stack spacing={2} style={{marginLeft:500}}>
                <Pagination count={10} shape="rounded" />
            </Stack>
            <FooterCopyrights/>
        </div>
    )
}

export default Dashboard
