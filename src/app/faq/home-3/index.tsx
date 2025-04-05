// HomeThree.tsx
'use client'
import React, { useRef } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeThree from './HeroAreaHomeThree';
import FeatureAreaHomeThree from './FeatureAreaHomeThree';
import ServiceAreaHomeThree from './ServiceAreaHomeThree';
import AboutAreaHomeThree from './AboutAreaHomeThree';
import BrandAreaHomeTwo from '@/components/homes/home-2/BrandAreaHomeTwo';
import AboutUsAreaHomeThree from './AboutUsAreaHomeThree';
import CounterAreaHomeOne from '../home/CounterAreaHomeOne';
import PriceAreaHomeOne from '../home/PriceAreaHomeOne';
import TestimonialAreaHomeOne from '../home/TestimonialAreaHomeOne';
import ChooseAreaHomeOne from '../home/ChooseAreaHomeOne';
import TeamAreaHomeOne from '../home/TeamAreaHomeOne';
import BlogAreaHomeOne from '../home/BlogAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeThree = () => {
    // Initialize refs
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);

    // Scroll function implementation
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <HeaderOne
                scrollToSection={scrollToSection}
                refs={{
                    heroRef,
                    aboutRef,
                    servicesRef,
                    aboutUsRef
                }}
            />
            {/* Add ref to each section component that needs scrolling */}
            <div ref={heroRef}><HeroAreaHomeThree /></div>
            <FeatureAreaHomeThree />
            <div ref={servicesRef}><ServiceAreaHomeThree /></div>
            <div ref={aboutRef}><AboutAreaHomeThree /></div>
            <BrandAreaHomeTwo />
            <div ref={aboutUsRef}><AboutUsAreaHomeThree /></div>
            <CounterAreaHomeOne style_2={true} />
            <PriceAreaHomeOne />
            <TestimonialAreaHomeOne />
            <ChooseAreaHomeOne />
            <TeamAreaHomeOne />
            <BlogAreaHomeOne />
            <FooterOne />
        </>
    );
};

export default HomeThree;
