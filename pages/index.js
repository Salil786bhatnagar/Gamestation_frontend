import React from 'react'
import Header from '../Components/Header/Header'
import Gameinfo from '../Components/Gameinfromation/Gameinfo'
import Register from '../Components/Register/index';
import Product_rent from '../Components/Products-Rent/Product_rent';
import Blogs from '../Components/Blog/Blogs';
import BatterThanEMI from '../Components/BatterThanEMI';
import GreatestStories from '../Components/GreatestStories';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <>
            {/* <Header/> */}
            <Gameinfo/>
            <Register/>
            <Product_rent/>
            <BatterThanEMI />
            <GreatestStories />
            <Blogs/>
            {/* <Footer/> */}
        </>
    )
}
