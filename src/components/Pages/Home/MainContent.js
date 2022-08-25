import React from 'react';
import play1 from '../../../assets/images/home/subscription/play/play1.png';
import playthird1 from '../../../assets/images/home/subscription/play/playthird1.png';
import playthird2 from '../../../assets/images/home/subscription/play/playthird2.png';
import playthird3 from '../../../assets/images/home/subscription/play/playthird3.png';
import playfull from '../../../assets/images/home/subscription/play/playfull.png';
import SubscriptionBuy from './SubscriptionBuy';
import SubscriptionPlan from './SubscriptionPlan';
import LiveTv from './LiveTv';


const MainContent = () => {
    return (
        <>
           <section class="bg-secondary text-base-100 rounded-[50px]">
            <LiveTv></LiveTv>
            <SubscriptionBuy></SubscriptionBuy>
            <SubscriptionPlan></SubscriptionPlan>
           </section>

        </>
    );
};

export default MainContent;