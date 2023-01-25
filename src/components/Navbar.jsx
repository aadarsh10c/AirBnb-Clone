import React from 'react';
import imgUrl from '../assets/img/airbnb-logo.png';

export default function Navbar (){
    return (
        <nav className="nav">
            <img src={imgUrl} alt="Air BnB Logo" className="nav--logo" />
        </nav>
    );
}