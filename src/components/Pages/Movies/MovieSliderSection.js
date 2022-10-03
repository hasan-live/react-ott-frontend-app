import React, { useEffect, useState } from 'react';
import MovieSlider from '../../../assets/images/Movies/MovieSlider.png';
import MovieSlider1 from '../../../assets/images/Movies/MoveSlider1.png';
import MovieSlider2 from '../../../assets/images/Movies/MoveSlider2.png';
import axios from 'axios';
import Slider from 'react-slick';

const MovieSliderSection = () => {
    const [movSliders, setMovSliders] = useState([]);
    const [isError, setIsError] = useState("");



    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/frontend/custom/sliders");
            setMovSliders(res.data.data.original);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);

    // console.log(movSliders)


    var settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>
            <div className="mt-28">
                <Slider {...settings}>
                    {
                        movSliders.map((movSlider, idx) => (

                            <div className=" lg:w-1/6 md:w-1/4 p-3 mx-5">
                                <div className=' key={index}'>
                                    <div className='relative  brightness-100 hover:brightness-60 '>
                                        <a href="#" className="group h-full md:h-full block  rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3 brightness-100 hover:brightness-50">
                                            <img src={movSlider.image} loading="lazy" alt="Movie" className="h-full w-full  object-center group-hover:scale-105 transition duration-200" />
                                            <span className="bg-red-500 text-white text-sm  font-bold uppercase rounded-br-lg absolute left-0 top-10 px-3 py-1.5 hover:opacity-0"></span>

                                            <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center opacity-0 hover:opacity-1 hover:opacity-100  hover:brightness-100 ">
                                                <a href='#' className="relative flex items-center justify-center  w-min flex-shrink-0 p-2 text-center text-primary  rounded-full group-hover:primary text-white text-5xl bg-primary group-hover:stroke-white" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="w-12 h-12  ml-1 mx-auto">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </a>
                                    </div>

                                </div>




                            </div>



                        ))
                    }
                </Slider>





            </div>
        </>
    );
};

export default MovieSliderSection;