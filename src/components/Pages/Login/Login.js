import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import loginbg from '../../../assets/images/Login/logoImage.png';
import movie1 from '../../../assets/images/Movies/movie1.png';
import movie2 from '../../../assets/images/Movies/movie2.png';
import movie3 from '../../../assets/images/Movies/movie3.png';
const images = [movie1, movie2, movie3, movie1, movie2, movie3, movie1, movie2, movie3];

const Login = () => {
    var settings = {
        dots: true,
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
                    dots: true
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
        <>
            <section class="text-gray-600 body-font relative mt-12">
                <div class="container px-5 py-full pt-12  mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w 2/3 md:w-1/2 bg-gray-700 rounded-lg overflow-hidden sm:mr-10  flex items-start justify-start relative">
                        <div className="card  mx-auto   ">
                            <h2 className='text-4xl mx-auto mb-8 text-white mt-5'><span className='font-bold'>OTT</span> APP</h2>
                            <div className="card lg:card-side bg-base-100 shadow-xl p-8 ">
                                <figure><img src={loginbg} alt="Album" /></figure>
                                <div className="card-body">
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary ">Pro</button>
                                    </div>
                                    <h2 className="card-title">Morbius</h2>
                                    <p>Action/Adventure</p>
                                    <div className='flex'>
                                        <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400 ml-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>  <span className=''>6.9</span>
                                        </p>

                                    </div>

                                    <div className='flex  items-center '>
                                        <button class="btn border-solid border-2 border-gray-500 ... text-white">Play<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>
                                        </button>
                                        <span className='flex justify-end'>
                                            <Link to=''> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg></Link>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className='mx-auto w-96 my-5 text-white'>
                                <h2 className='text-4xl my-3'>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w 2/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-12 mt-8 md:mt-0">
                        <div className="hero-content flex-col ">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                                <div className="text-center lg:text-left p-5 mt-3">
                                    <h1 className="text-5xl font-bold">Login in to
                                        your account</h1>
                                </div>
                                <div className="card-body">

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Select Your Country</span>

                                        </label>
                                        <select className="select select-bordered">
                                            <option disabled selected>Select Country</option>
                                            <option>Bangladesh</option>
                                            <option>India</option>
                                            <option>Pakistan</option>
                                            <option>Australia</option>
                                            <option>United State</option>
                                            <option>Turkey</option>
                                        </select>

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Enter Phone Number</span>
                                        </label>
                                        <input type="text" placeholder="+88-01***********" className="input input-bordered w-full max-w-xs" />

                                        <label className="label mt-3">
                                            <div class="flex items-center mb-4">
                                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-red-100 rounded border-red-300 focus:ring-red-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-red-700 dark:border-red-600" />
                                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-red-900 dark:text-gray-300">Privacy & Policy</label>
                                            </div>
                                        </label>

                                    </div>
                                    <div className="form-control mt-0">
                                        <button className="btn btn-primary text-white">Login</button>
                                    </div>
                                    <label className="label">
                                        <span>Don’t have an account? </span>
                                        <span>  <Link to="" type="checkbox" className="label-text text-red-600 text-bold link">Start with Premium</Link></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <label className="label mt-24">
                            <span className="label-text">DURBARTACH -© 2022 All Rights Reserved</span>
                            <div>
                                <Link to='' className="label-text-alt text-red-600">Terms & Conditions</Link>
                                <Link to='' className="label-text-alt ml-2 text-red-600">Privacy Policy</Link>
                            </div>
                        </label>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Login;