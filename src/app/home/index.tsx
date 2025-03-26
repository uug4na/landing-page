"use client"

import React, { useRef  } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import AoutUsAreaHomeOne from './AoutUsAreaHomeOne';
import PortfolioAreaHomeOne from './PortfolioAreaHomeOne';
import ChooseAreaHomeOne from './ChooseAreaHomeOne';
import PriceAreaHomeOne from './PriceAreaHomeOne';
import TestimonialAreaHomeOne from './TestimonialAreaHomeOne';
import TeamAreaHomeOne from './TeamAreaHomeOne';
import NewsletterAreaHomeOne from './NewsletterAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CounterAreaHomeOne from './CounterAreaHomeOne';

const HomeOne: React.FC = () => {
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
            />            <HeroAreaHomeOne />
            <CounterAreaHomeOne />
            <AboutAreaHomeOne />
            <ServiceAreaHomeOne />
            <AoutUsAreaHomeOne />
            <PortfolioAreaHomeOne />
            <ChooseAreaHomeOne />
            <PriceAreaHomeOne />
            <TestimonialAreaHomeOne />
            <TeamAreaHomeOne />
            <NewsletterAreaHomeOne />
            <FooterOne />
        </>
    );
};

export default HomeOne;
