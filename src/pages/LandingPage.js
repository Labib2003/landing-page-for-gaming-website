import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-[41px]"
                style={{ backgroundImage: "url(" + "images/Untitled-1.jpg" + ")" }}
            >
                <div className='absolute top-0 w-full'>
                    <Navbar />
                </div>
                <div className="hero-overlay w-full bg-opacity-60 poppins"></div>
                <div className="hero-content text-center text-white">
                    <div className="uppercase">
                        <h1 className="max-w-[50rem] mx-auto mb-7 text-xl md:text-5xl lg:text-7xl font-bold leading-normal tracking-wide poppins"
                            style={{ "textShadow": "10px 10px 0px #000000" }}
                        >Evolve Your Gaming Experience</h1>
                        <p className="max-w-4xl mx-auto mb-16 text-sm md:text-xl lg:text-2xl font-bold poppins leading-normal tracking-wide">Play with friends or compete against rivals from around the world</p>
                        <div className='bg-white text-black text-sm lg:text-lg w-40 md:w-96 mx-auto md:px-32 md:py-6 rounded poppins'>Join Now</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-3 mb-40 max-w-screen-2xl mx-auto px-3 lg:px-0'>
                <div className='lg:w-[139px] lg:h-[139px] rounded-full bg-blue-500 border-[18px] border-blue-400 grid place-content-center mx-auto'>
                    <img src="images/icon1.png" alt="icon" />
                </div>
                <div className='hidden lg:block lg:w-[216px] lg:h-[1px] bg-black my-auto mx-auto'></div>
                <div className='lg:w-[139px] lg:h-[139px] rounded-full bg-blue-500 border-[18px] border-blue-400 grid place-content-center mx-auto'>
                    <img src="images/icon2.png" alt="icon" />
                </div>
                <div className='hidden lg:block lg:w-[216px] lg:h-[1px] bg-black my-auto mx-auto'></div>
                <div className='lg:w-[139px] lg:h-[139px] rounded-full bg-blue-500 border-[18px] border-blue-400 grid place-content-center mx-auto'>
                    <img src="images/icon3.png" alt="icon" />
                </div>
                <div className='mx-auto text-center poppins'>
                    <h1 className='font-semibold lg:text-2xl uppercase'>Sign Up</h1>
                    <p>Create your account</p>
                </div>
                <div className='hidden lg:block'></div>
                <div className='mx-auto text-center poppins'>
                    <h1 className='font-semibold lg:text-2xl uppercase'>Compete</h1>
                    <p>Join Tournaments to compete with others</p>
                </div>
                <div className='hidden lg:block'></div>
                <div className='mx-auto text-center poppins'>
                    <h1 className='font-semibold lg:text-2xl uppercase'>Win & earn</h1>
                    <p>Win and earn in the form of crypto</p>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;