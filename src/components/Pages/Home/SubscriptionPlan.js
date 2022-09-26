import axios from 'axios';
import React, { useEffect, useState } from 'react';
import plan1 from '../../../assets/images/home/subscription/plan/plan1.png';
import plan3 from '../../../assets/images/home/subscription/plan/plan3.png';

const SubscriptionPlan = () => {
    const [buyPlans, setBuyPlans] = useState([]);
    const [isError, setIsError] = useState("");


    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/available-subscription-plans");
            setBuyPlans(res.data.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);

    return (
        <>
            <div className="pricing-table-2 py-6 pb-6 md:py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Subscription Plan</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                    </div>
                    {
                        buyPlans.map((buyPlan) => (
                         
                            
                            <div className="shadow-lg lg:mx-[40px] md:flex items-center justify-center gap-6  md:mt-6">
                                <div className=" lg:w-1/3 my-2 md:my-6 ">
                                    <div className="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto rounded-3xl  transition-colors duration-300 transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-108 hover:bg duration-30">
                                        <div className="pricing-amount  p-10 transition-colors duration-300">
                                            <div className=""><span className="text-2xl font-bold">{buyPlan.plan_name}<br />
                                                of premium <br />
                                                for ৳ {buyPlan.regular_price}</span>
                                            </div>
                                        </div>
                                        <div className="p-10">

                                            <ul class="grid grid-cols-1 gap-4">
                                                <li class="inline-flex items-center">
                                                    <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                    </svg>

                                                    Discount Price : {buyPlan.discount_price}
                                                </li>

                                                <li class="inline-flex items-center">
                                                    <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                    </svg>

                                                    Discount Rate : {buyPlan.discount_rate}
                                                </li>

                                                <li class="inline-flex items-center">
                                                    <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                    </svg>

                                                    Discount Price : {buyPlan.discount_price}
                                                </li>
                                                <li class="inline-flex items-center">
                                                    <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                    </svg>

                                                    Discount Type : {buyPlan.discount_type}
                                                </li>
                                                <li class="inline-flex items-center">
                                                    <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                    </svg>

                                                    Discount expiry eate : {buyPlan.discount_expiry_date}
                                                </li>
                                                <li class="inline-flex items-center">
                                                    <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                    </svg>

                                                    Number of allowed device : {buyPlan.number_of_allowed_device}
                                                </li>
                                            </ul>



                                            <div className="mt-6 py-4">
                                                <button className="bg-green-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">UnSubscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))
                    }

                </div>
            </div>

        </>
    );
};

export default SubscriptionPlan;