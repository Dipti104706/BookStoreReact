import React from 'react';
import BookComponent from '../../components/bookComponent/BookComponent';
import FooterCopyrights from '../../components/footer/Footer';
import BookHeader from '../../components/header/Header';
import './Dashboard.css';

function Dashboard() {
    return (
        <div>
            <BookHeader/>
            <BookComponent/>
            <FooterCopyrights/>
        </div>
    )
}

export default Dashboard
