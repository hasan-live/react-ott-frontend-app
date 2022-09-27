import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const SliderDiv1 = () => {
    const [movTvShows, setMovTvShows] = useState([]);
    const [isError, setIsError] = useState("");



    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/sliders");
            setMovTvShows(res.data.data.original);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

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
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>

                {movTvShows.map((movTvShow, index) => (
              
                        <breadcrumb className="py-3 rounded-md w-full">
                            <ol className="list-reset flex">
                                <li className="text-gray-500">2022.</li>
                                <li><a href="#" className="text-blue-600 hover:text-block ml-2 uppercase"> Action</a></li>
                                <li><span className="text-gray-500 mx-2">/</span></li>
                                <li><a href="#" className="text-blue-600 hover:text-block uppercase"> Adventure: </a></li>
                                <li className="text-gray-500 ml-2"> 2h 13m</li>
                            </ol>
                        </breadcrumb >
                      
                   
                ))}

            </Slider>
        </div>
    );
};

export default SliderDiv1;