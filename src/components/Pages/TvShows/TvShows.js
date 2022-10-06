import React from 'react';
import TvShowBanglaDubbings from './TvShowBanglaDubbings';
import TvShowDramaSales from './TvShowDramaSales';
import TvShowMostPopulars from './TvShowMostPopulars';
import TvShowSliders from './TvShowSliders';
import TvShowTranding from './TvShowTranding';

const TvShows = () => {
    return (
        <>
          <TvShowSliders></TvShowSliders>  
          <TvShowTranding></TvShowTranding>
          <TvShowDramaSales></TvShowDramaSales>
          <TvShowMostPopulars></TvShowMostPopulars>
          <TvShowBanglaDubbings></TvShowBanglaDubbings>
        </>
    );
};

export default TvShows;