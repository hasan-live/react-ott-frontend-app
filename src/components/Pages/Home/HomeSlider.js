import React, { useState } from 'react';
import slider1 from '../../../assets/images/home/slider/slider1.png';
import slider2 from '../../../assets/images/home/slider/slider2.png';
import slider3 from '../../../assets/images/home/slider/slider3.png';
import SliderReact from "react-slick";
const images = [slider1, slider2, slider3, slider1, slider2, slider3, slider1, slider2, slider3];


const HomeSlider = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <section className="text-gray-600 py-2">
                <div className="mx-auto">
                    <SliderReact {...settings}>
                        {
                            images.map((image) => (
                                <div className="lg:w-1/6 md:w-1/4 gap-2">
                                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                        <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                                            <breadcrumb className="py-3 rounded-md w-full">
                                                <ol className="list-reset flex">
                                                    <li className="text-gray-500 ">2022.</li>
                                                    <li><a href="#" className="text-blue-600 hover:text-block ml-2 uppercase"> Action</a></li>
                                                    <li><span className="text-gray-500 mx-2">/</span></li>
                                                    <li><a href="#" className="text-blue-600 hover:text-block uppercase"> Adventure: </a></li>
                                                    <li className="text-gray-500 ml-2"> 2h 13m</li>
                                                </ol>
                                            </breadcrumb >
                                        </p>

                                        <h1 className="text-4xl font-bold uppercase">Thor: Love and Thunder</h1>
                                        <p className="py-6 font-leading-7 break-words">Thor: Love and Thunder is an upcoming American superhero
                                            film based on the Marvel Comics character Thor, produced by
                                            Marvel Studios and distributed by Walt Disney Studios Motion
                                            Pictures. It is intended to be the direct sequel to Thor: Ragnarok and the 29th film in the Marvel Cinematic Universe.</p>
                                        <h2 className="text-3xl font-semibold">COMING SOON</h2>

                                        <div className=" mt-4 flex flex-row sm:flex-row sm:justify-start lg:justify-start gap-2">
                                            <a className="btn btn-primary text-white ">Watch Now <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg></a>
                                            <a className="btn btn-outline btn-white ml-3 t">Add to Watchlist</a>

                                        </div>
                                        
                                    </div>
                                    <div className='flex flex1'>
                                    <img className="object-cover object-center rounded" alt="banner" src={image} />
                                    </div>
                                </div>



                            ))
                        }
                    </SliderReact>
                </div>
            </section >


        </>
    );
};

export default HomeSlider;