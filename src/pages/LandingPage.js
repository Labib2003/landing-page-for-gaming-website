import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: "url(" + "images/Untitled-1.jpg" + ")" }}>
                <div className='absolute top-0 w-full'>
                    <Navbar />
                </div>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-white">
                    <div class="uppercase">
                        <h1 class="max-w-[50rem] mx-auto mb-7 text-7xl font-bold leading-normal tracking-wide">Evolve Your Gaming Experience</h1>
                        <p class="max-w-4xl mx-auto mb-16 text-2xl font-bold">Play with friends or compete against rivals from around the world</p>
                        <div className='bg-white text-black text-lg w-96 mx-auto px-32 py-6 rounded'>Join Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;