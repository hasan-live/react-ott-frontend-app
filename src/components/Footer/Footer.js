import React from 'react';
import Footerbottom from './Footerbottom';
import { Routes, Route, Link } from "react-router-dom";
import Footersubscriber from './Footersubscriber';
import Footerbands from './Footerbands';
import playicon1 from '../../assets/images/home/footer/playicon1.png';
import playicon2 from '../../assets/images/home/footer/playicon2.png';
import footerbg from '../../assets/images/home/footer/footer-app-bg.png';

const Footer = () => {
    return (
        <>
            <Footerbands />
            <Footersubscriber />
            <section class="footer px-20 py-10  bg-accent text-base-100">
                <div className='mx-auto'>
                    <div class="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" class="flex items-center">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
                             */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>

                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OTT</span>
                        </a>
                    </div>

                    <p>Miru is video streaming lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.Ut <br /> enim ad minim veniam, quis nostrud exercitation <br />  ullamco.Providing reliable tech since 1992</p>

                    <span className='text-xl font-bold text-white mt-2'>Follow Us</span>

                    <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-red-500 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-red-500 dark:hover:text-white">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <span class="sr-only">Youtube account</span>
                        </a>

                        <a href="#" class="text-gray-400 hover:text-red-500 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Instagram page</span>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-red-500 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-red-500 dark:hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">GitHub account</span>
                        </a>

                    </div>
                </div>

                <div>
                    <span class="footer-title">Quick Links</span>
                    <Link to='/about' class="link link-hover">About us</Link>
                    <Link to='/about' class="link link-hover">Contact Us</Link>
                    <Link to='/about' class="link link-hover">Products</Link>
                    <Link to='/about' class="link link-hover">Terms & Conditions</Link>
                    <Link to='/about' class="link link-hover">Privacy Policy</Link>
                </div>
                <div>
                    <span class="footer-title">Movie Categories +</span>
                    <Link to='/about' class="link link-hover">Action</Link>
                    <Link to='/about' class="link link-hover">Advanture</Link>
                    <Link to='/about' class="link link-hover">Comedy</Link>
                    <Link to='/about' class="link link-hover">Crime</Link>
                    <Link to='/about' class="link link-hover">Drama</Link>
                </div>

                <div>
                    <span class="footer-title">Categories</span>
                    <Link to='/about' class="link link-hover">Fantasy</Link>
                    <Link to='/about' class="link link-hover">Horror</Link>
                    <Link to='/about' class="link link-hover">Mystery</Link>
                    <Link to='/about' class="link link-hover">Romance</Link>
                    <Link to='/about' class="link link-hover">TV Series</Link>
                </div>
                <div>

                    <div class="card w-96 bg-white shadow-xl image-full">
                        <figure><img src={footerbg} alt="Shoes" /></figure>
                        <div class="card-body px-5">
                            <div className='text-center text-white'>
                                <h2 class="card-title text-2xl text-center"> Watch OTT Everywhere & <br />
                                    Get Unlimited Access </h2>
                                <p><span className='text-xl font-bold '>Download</span> the App Now </p>
                            </div>

                            <div class="card-actions flex  justify-center my-10 ">
                                <div class="flex justify-center my-10 ">

                                </div>
                                <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 bg-primary">
                                    <img src={playicon1} class="w-7 md:w-8" />
                                    <div class="text-left ml-3">
                                        <p class='text-xs text-gray-200 uppercase'>Download on the</p>
                                        <p class="text-sm md:text-base"> Play Store </p>
                                    </div>
                                </div>

                                <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                                    <img src={playicon2} class="w-7 md:w-8" />
                                    <div class="text-left ml-3">
                                        <p class='text-xs text-gray-200 uppercase'>Download on the </p>
                                        <p class="text-sm md:text-base"> Play Store </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=" bg-gray-800 rounded-lg">
                        <div class="max-w-xl mx-auto text-white py-10 px-2">
                            <div class="text-center">
                                <h3 class="text-2xl mb-3"> Watch OTT Everywhere & <br />
                                    Get Unlimited Access  </h3>
                                <p> <span className='text-xl font-bold'>Download</span> the App Now </p>
                                <div class="flex justify-center my-10 ">
                                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 bg-primary">
                                        <img src={playicon1} class="w-7 md:w-8" />
                                        <div class="text-left ml-3">
                                            <p class='text-xs text-gray-200 uppercase'>Download on the</p>
                                            <p class="text-sm md:text-base"> Play Store </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                                        <img src={playicon2} class="w-7 md:w-8" />
                                        <div class="text-left ml-3">
                                            <p class='text-xs text-gray-200 uppercase'>Download on the </p>
                                            <p class="text-sm md:text-base"> Play Store </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footerbottom />
        </>
    );
};

export default Footer;