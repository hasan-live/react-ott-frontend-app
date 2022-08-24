import React from 'react';
import Movies from '../Movies/Movies';
import TvShows from '../TvShows/TvShows';
import AppAds from './AppAds';
import Banner from './Banner';
import MainContent from './MainContent';
import Sports from './Sports';
import Trending from './Trending';
import WhatsMovie from './WhatsMovie';



const Home = () => {
    return (
        <>
         <Banner></Banner>
         <MainContent></MainContent>
         <Trending></Trending>
         <Sports></Sports>
         <Movies></Movies>
         <TvShows></TvShows>
         <AppAds></AppAds>
         <WhatsMovie></WhatsMovie>
        
      
        </>
    );
};

export default Home;