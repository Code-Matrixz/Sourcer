import React from 'react';
import Hyperspeed from './Hyperspeed';
import DotGrid from './DotGrid';

const Hero = () => {
    React.useEffect(() => {
        // Animate only the div with id 'letter-o'
        const letterO = document.getElementById('letter-o');
        if (letterO) {
            import('gsap').then(({ gsap }) => {
                gsap.set(letterO, { y: 80, opacity: 0 });
                gsap.to(letterO, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay:1,
                    ease: "back.out(1.7)"
                });
            });
        }
    }, []);

    return (
        <section className="hero h-screen">
            <div className="hero-content relative">
                <div className="h-150 w-full relative flex items-center justify-center">
                    <DotGrid />
                    <div className="message absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-9xl font-bold font-poppins flex flex-col">
                        <div className="open-source flex gap-6">
                            <div className="open flex">
                                <div id="letter-o">O</div>
                                <div id="letter-p">p</div>
                                <div id="letter-e">e</div>
                                <div id="letter-n">n</div>
                            </div>
                            <div className="open flex">
                                <div id="letter-s">S</div>
                                <div id="letter-o-2">o</div>
                                <div id="letter-u">u</div>
                                <div id="letter-r">r</div>
                                <div id="letter-c">c</div>
                                <div id="letter-e-2">e</div>
                            </div>
                        </div>
                        <div className="anything flex">
                            <div id="letter-a">A</div>
                            <div id="letter-n-2">n</div>
                            <div id="letter-y">y</div>
                            <div id="letter-t">t</div>
                            <div id="letter-h">h</div>
                            <div id="letter-i">i</div>
                            <div id="letter-n-3">n</div>
                            <div id="letter-g">g</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;