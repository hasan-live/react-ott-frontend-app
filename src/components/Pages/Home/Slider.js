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
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
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
            <section class="text-gray-600 py-3">
                <div class="mx-auto">
                    <SliderReact {...settings}>
                        {
                            images.map((image) => (

                                <div class="grid grid-rows-6 grid-flow-col gap-8">
                                    <a href="#" class="group h-56   flex items-end   mt-8 overflow-hidden  relative p-8 rounded-lg ">
                                        <img src={image} loading="lazy" alt="slider" class="  object-cover object-center absolute inset-0 group-hover:scale-105 transition duration-50" />
                                        <div class="bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-800 absolute  pointer-events-none"></div>

                                        <div class="flex relative  md: justify-end sm:justify-center md:justify-end lg:justify-between xl:justify-around">
                                            <div class="flex">
                                                <p>
                                                    <div class="flex gap-1.0 -ml-3 mt-[9]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                        </svg>
                                                        <span className='text-white text-xl text-bold'>English</span>
                                                    </div>
                                                </p>

                                            </div>
                                        </div>
                                    </a>
                                </div>

                               

                            ))
                        }
                    </SliderReact>
                </div>
            </section >


        </>
    );
};

export default Slider;