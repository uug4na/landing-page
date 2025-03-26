"use client"
import HeaderOne from '@/layouts/headers/HeaderOne';
import React, { useRef } from 'react';
import HeroAreaHomeTwo from './HeroAreaHomeTwo';
import AboutAreaHomeTwo from './AboutAreaHomeTwo';
import ServiceAreaHomeTwo from './ServiceAreaHomeTwo';
import AboutUsAreaHomeTwo from './AboutUsAreaHomeTwo';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeTwo: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const refs = {
        heroRef,
        aboutRef,
        servicesRef,
        aboutUsRef
    };

    return (
        <>
            <HeaderOne
                scrollToSection={scrollToSection}
                refs={refs}
            />
            <div ref={heroRef}>
                <HeroAreaHomeTwo />
            </div>
            <div ref={servicesRef}>
                <ServiceAreaHomeTwo />
            </div>
            <div ref={aboutUsRef}>
                <AboutAreaHomeTwo />
            </div>
            {/* <div ref={aboutUsRef}>
                <AboutUsAreaHomeTwo />
            </div> */}
            <FooterOne />
        </>
    );
};

export default HomeTwo;
