import React, { useState } from 'react';
import movie1 from '../../../assets/images/Movies/movie1.png';
import movie2 from '../../../assets/images/Movies/movie2.png';
import movie3 from '../../../assets/images/Movies/movie3.png';

import Slider from "react-slick";
const images = [movie1, movie2, movie3, movie1, movie2, movie3, movie1, movie2, movie3];


const Trending = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
                <div class="container max-width px-5   mx-auto">
                    <div class=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 class="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Trending</h1>
                    </div>
                </div>

                <div class="flex flex-wrap m-4"></div>
                <Slider {...settings}>
                    {
                       
                        images.map((image, index) => (
                            <div class="p-2 lg:w-1/6 md:w-1/3 p-6">
                            <div className=' key={index}'>
                                <a href="#" class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3 brightness-100 hover:brightness-50">
                                    <img src={image} loading="lazy" alt="Photo by Austin Wade" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />

                                    <div class="flex gap-2 absolute bottom-2 pl-12 my-11 brightness-100 hover:brightness-50">
                                        <span class="bg-red-500 text-white text-sm font-bold tracking-wider uppercase rounded-lg   px-3  py-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                            </svg>
                                        </span>
                                    </div>
                                </a>

                                <div class="flex justify-between items-start gap-2 px-2">
                                    <div class="flex flex-col">
                                        <a href="#" class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Take Out Tango</a>
                                        <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                        <p>
                                            <div class="flex gap-0.5 -ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>

                                                <span className=''>6.9</span>
                                            </div>
                                        </p>
                                    </div>

                                    <div class="flex flex-col items-end">
                                        {/* <span class="text-gray-600 lg:text-lg font-bold">৳ 200</span> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </Slider>
            </section>


        </>
    );
};

export default Trending;