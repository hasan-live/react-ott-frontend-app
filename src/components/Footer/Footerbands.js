import React from 'react';
import Slider from "react-slick";
import brand1 from '../../assets/images/home/brands/brand1.gif';

const images = [brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1, brand1];
const Footerbands = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
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
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section class="bg-secondary rounded-t-[50px]">
                <div className='container mx-auto '>
                    <div class="flex flex-wrap m-4 "></div>
                    <Slider {...settings}>
                        {
                            images.map((image, index) => (
                                <div class="p-4 lg:w-1/2 md:w-1/3" >
                                    <div class="h-full flex flex-col items-center text-center transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30">

                                        <figure>
                                            <div >
                                                <a href='#'>
                                                    <img src={image} alt='image' />
                                                </a>
                                            </div>
                                        </figure>

                                    </div>
                                </div>
                            ))
                        }

                    </Slider>

                </div>
            </section>

            {/* <section class="bg-secondary text-base-100  rounded-t-[50px]">
                <div class="container py-5 mx-auto">
                    <div class="flex flex-wrap -m-4">

                        <div class="p-4 md:w-1/5">
                            <div class="flex rounded-lg h-full p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg title-font font-bold">Highlow</h2>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/5">
                            <div class="flex rounded-lg h-full p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg title-font font-bold">Highlow</h2>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/5">
                            <div class="flex rounded-lg h-full p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg title-font font-bold">Highlow</h2>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/5">
                            <div class="flex rounded-lg h-full p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg title-font font-bold">Highlow</h2>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/5">
                            <div class="flex rounded-lg h-full p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white text-lg title-font font-bold">Highlow</h2>
                                </div>
                            </div>
                        </div>
                        
                       
                      
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Footerbands;