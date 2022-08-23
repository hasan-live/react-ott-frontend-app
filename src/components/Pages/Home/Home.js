import React from 'react';
import Movies from '../Movies/Movies';
import Banner from './Banner';
import MainContent from './MainContent';
import Sports from './Sports';
import Trending from './Trending';



const Home = () => {
    return (
        <>
         <Banner></Banner>
         <MainContent></MainContent>
         <Trending></Trending>
        
         <Sports></Sports>
         <Movies></Movies>
        </>
    );
};

export default Home;