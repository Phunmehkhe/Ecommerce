import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <ProductList />
            <Footer />
        </div>
    )
}

export default Home;