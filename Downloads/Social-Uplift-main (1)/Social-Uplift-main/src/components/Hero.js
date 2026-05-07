import React, { useEffect, useRef } from 'react';
import LightRays from './LightRays';
import FadeInText from './FadeInText'; 
import './Hero.css';

const Hero = () => {
    const glowRef = useRef(null);

    // Soft parallax glow movement
    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const handleMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 40; 
            const y = (e.clientY / innerHeight - 0.5) * 30; 

            glow.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    const headlineWords = "We're Not Just Making Content — We're Telling Your Story";
    const taglineWords = "At Social Uplift, we create marketing that people can't scroll past. We turn ideas into results with creativity, strategy, and passion.";

    return (
        <section className="hero" id="home">

            {/* --- Background Animation --- */}
            <div className="light-rays-wrapper">
                <LightRays
                    raysOrigin='top-center' 
                    raysColor='#FF69B4' 
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={3.0}
                    pulsating={true}
                    mouseInfluence={0.25}
                    distortion={0.1}
                />
            </div>

            {/* --- Parallax Glow Layer --- */}
            <div className="hero-parallax-glow" ref={glowRef}></div>

            {/* --- Hero Content --- */}
            <div className="container">
                <div className="hero-content" style={{ position: "relative", zIndex: 10 }}>
                    <h1>
                        {/* 1. Headline: Starts almost immediately */}
                        <FadeInText
                            text={headlineWords}
                            className="text-white text-[3.5rem] font-bold"
                            delay={0.5} 
                        />
                    </h1>

                    <p>
                        {/* 2. Tagline: Starts at 2.0s (After headline finishes reading) */}
                        <FadeInText
                            text={taglineWords}
                            className="text-gray-300 max-w-[700px] mx-auto opacity-90"
                            delay={1.5} 
                        />
                    </p>

                    {/* 3. Button: Appears at 5.5s (After tagline finishes reading) */}
                    <a 
                        href="#portfolio" 
                        className="btn fade-in-slow" 
                        style={{ animationDelay: "5.5s", opacity: 0 }} 
                    >
                        View Our Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;