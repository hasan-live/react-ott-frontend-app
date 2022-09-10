import React, { useState } from 'react';
import slider1 from '../../../assets/images/home/slider/slider1.png';
import slider2 from '../../../assets/images/home/slider/slider2.png';
import slider3 from '../../../assets/images/home/slider/slider3.png';
import SliderReact from "react-slick";
const images = [slider1, slider2, slider3, slider1, slider2, slider3, slider1, slider2, slider3];


const Slider = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section class="text-gray-600 py-6">
                {/* <div class="container max-width px-5   mx-auto">
                    <div class=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 class="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Tv Shows</h1>
                    </div>
                </div> */}

                <div class="flex flex-wrap m-4"></div>
                <SliderReact {...settings}>
                    {
                        images.map((image, index) => (
                            <div class="h-56 grid grid-cols-3 gap-8 content-center" key={index}>
                                <div class="h-full flex flex-col items-center text-center">
                                    <div>
                                        <figure> <img src={image} alt='image' /> </figure>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SliderReact>
            </section>


        </>
    );
};

export default Slider;