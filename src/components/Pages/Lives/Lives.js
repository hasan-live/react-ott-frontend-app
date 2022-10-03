import React from 'react';
import LiveMovies from './LiveMovies';
import LiveSliders from './LiveSliders';
import LiveSports from './LiveSports';
import OthersChannelLive from './OthersChannelLive';
import RecommendedLive from './RecommendedLive';

const Lives = () => {
    return (
        <>
            <LiveSliders></LiveSliders>
            <RecommendedLive></RecommendedLive>
            <OthersChannelLive></OthersChannelLive>
            <LiveSports></LiveSports>
            <LiveMovies></LiveMovies>
        </>
    );
};

export default Lives;