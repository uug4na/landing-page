
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AboutAreaHomeThree from '../homes/home-3/AboutAreaHomeThree';
import TeamAreaHomeOne from '../homes/home-2/TeamAreaHomeOne';
import CounterAreaHomeOne from '../homes/home-2/CounterAreaHomeOne';
import PriceAreaHomeOne from '../homes/home-2/PriceAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/home-2/TestimonialAreaHomeOne';
import BlogAreaHomeOne from '../homes/home-2/BlogAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const AboutTwo = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb title="About Us Two" subtitle="About Us Two" />
            <AboutAreaHomeThree />
            <TeamAreaHomeOne />
            <CounterAreaHomeOne style_3={true} />
            <PriceAreaHomeOne />
            <TestimonialAreaHomeOne />
            <BlogAreaHomeOne />
            <FooterOne />
        </>
    );
};

export default AboutTwo;
