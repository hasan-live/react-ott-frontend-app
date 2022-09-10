import React, { useState } from 'react';
import live1 from '../../../assets/images/home/subscription/live/live1.png';
import live3 from '../../../assets/images/home/subscription/live/live3.png';
import Slider from "react-slick";

const images = [live1, live3, live1, live3, live1, live3];

const LiveTv = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        beforeChange: (current, next) => setImageIndex(next),
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

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>
            <div class="container px-5 py-6 mx-auto flex-wrap justify-between items-center">
            
                <div class="flex justify-between my-5">
                    <div>
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">Live</h1>
                        <p class="leading-relaxed text-white text-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <a href='#' className='text-white text-2xl text-center text-bold flex items-center '>More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                </div>

                <div>
                    <div class="flex flex-wrap m-4 "></div>
                    <Slider {...settings}>
                         {
                            images.map((image, index) => (
                                <div class="p-2  h-64 grid grid-cols-3 gap-4" key={index}>
                                    <div class="w-full flex flex-col items-center text-center">
                                            <div className={index == imageIndex ? 'slide activeSlide' : 'slide'}>
                                            <figure><img src={image} alt='image' /></figure>
                                            </div>
                                    </div>
                                </div>
                            ))
                        }


                    </Slider>

                </div>

            </div>
        </>
    );
};

export default LiveTv;