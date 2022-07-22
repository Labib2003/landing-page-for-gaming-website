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
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Evolve Your Gaming Experience</h1>
                        <p class="mb-5">Play with friends or compete against rivals from around the world</p>
                        <button>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;