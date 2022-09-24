import React from 'react';
import Movies from '../Movies/Movies';
import TvShows from '../TvShows/TvShows';
import AppAds from './AppAds';
import Banner from './Banner';
import Slider from './Slider';
import MainContent from './MainContent';
import Sports from './Sports';
import Trending from './Trending';
import WhatsMovie from './WhatsMovie';
import MoviesSale from '../MoviesSale/MoviesSale';
import MovieSection from '../Movies/MovieSection';
import MovieTrendingSection from '../Movies/MovieTrendingSection';


const Home = () => {
    return (
        <>
         <Banner></Banner>
         <Slider></Slider>
         <MovieTrendingSection></MovieTrendingSection>
         <MainContent></MainContent>
         <MoviesSale></MoviesSale>
         <Sports></Sports>
         <MovieSection></MovieSection>
         <TvShows></TvShows>
         <AppAds></AppAds>
         <WhatsMovie></WhatsMovie>
        
      
        </>
    );
};

export default Home;