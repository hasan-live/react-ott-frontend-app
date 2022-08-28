import React from 'react';
import live1 from '../../../assets/images/home/subscription/live/live1.png';
import live2 from '../../../assets/images/home/subscription/live/live2.png';
import live3 from '../../../assets/images/home/subscription/live/live3.png';
import Slider from "react-slick";
const LiveTv = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
            <div class="container px-5 py-24 mx-auto flex-wrap justify-between items-center">
                <section class="text-gray-600">
                    <div class="container flex flex-wrap px-5 py-12 mx-auto items-center ">
                        <div class="md:w-1/2 md:pr-12  border-gray-200">
                            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">Live</h1>
                            <p class="leading-relaxed text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>

                        </div>
                        <div class="flex md:w-1/2 md:pl-12 mx-auto ">
                            <div className='flex '>
                                <a href='#' className='text-white text-center'>More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <div class="flex flex-wrap m-4 "></div>
                    <Slider {...settings}>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={live1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={live3} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={live1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={live1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={live1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={live1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={live1} alt="movies" /></figure>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>
        </>
    );
};

export default LiveTv;