import React from 'react';
import banner1 from '../../../assets/images/home/banner/banner1.png';
import EffectOverflow from './EffectOverflow';
import SliderDiv1 from './SliderDiv1';
import SliderDiv2 from './SliderDiv2';

const HomeSlider = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <SliderDiv1></SliderDiv1>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-2/2 w-6/6">
                        <SliderDiv2></SliderDiv2>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HomeSlider;