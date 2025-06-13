import React from 'react';
import Hyperspeed from './Hyperspeed';
import DotGrid from './DotGrid';

const Hero = () => {
    return (
        <section className="hero h-screen">
            <div className="hero-content">
                <div className="h-200 w-full">
                <DotGrid/>
                </div>
            </div>
        </section>
    );
};

export default Hero;