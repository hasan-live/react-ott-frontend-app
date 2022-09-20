import React from 'react';
import SubscriptionBuy from './SubscriptionBuy';
import SubscriptionPlan from './SubscriptionPlan';
import LiveTv from './LiveTv';


const MainContent = () => {
    return (
        <>
           <section className="bg-secondary my-12 text-base-100 rounded-[50px]">
            <LiveTv></LiveTv>
            <SubscriptionBuy></SubscriptionBuy>
            <SubscriptionPlan></SubscriptionPlan>
           </section>

        </>
    );
};

export default MainContent;