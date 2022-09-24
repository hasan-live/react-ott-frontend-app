import React, { useEffect, useState } from 'react';
import Feature1 from '../../../assets/images/Movies/MovieFeature1.png';
import Slider from "react-slick";

const images = [Feature1, Feature1, Feature1, Feature1, Feature1];

const MovieFeatureItems = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                    slidesToScroll: 1,

                }
            }
        ]
    };

    return (
        <>
            <section className="text-gray-600 py-10">
                <div className="container max-width px-5   mx-auto">
                    <div className=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 className="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Sports</h1>
                    </div>
                </div>

                <div className="flex flex-wrap m-4 rounded"></div>

                <Slider {...settings}>
                    {
                        images.map((image) => (
                            <div className="p-2  h-64 grid grid-cols-3 gap-6" >
                                <div className="w-full flex flex-col items-center text-center">
                                    <div >
                                        <figure className='transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-110 hover:bg duration-30'><a href=''><img src={image} alt='image' /></a></figure>
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

export default MovieFeatureItems;