
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AboutArea from './AboutArea';
import BrandAreaHomeTwo from '../homes/home-2/BrandAreaHomeTwo';
import PortfolioAreaHomeOne from '../homes/home-2/PortfolioAreaHomeOne';
import ChooseAreaHomeOne from '../homes/home-2/ChooseAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/home-2/TestimonialAreaHomeOne';
import TeamAreaHomeOne from '../homes/home-2/TeamAreaHomeOne';
import NewsletterAreaHomeOne from '../homes/home-2/NewsletterAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const About = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb title="About Us" subtitle="About Us" />
            <AboutArea />
            <BrandAreaHomeTwo />
            <PortfolioAreaHomeOne />
            <ChooseAreaHomeOne />
            <TestimonialAreaHomeOne />
            <TeamAreaHomeOne />
            <NewsletterAreaHomeOne />
            <FooterOne />
        </>
    );
};

export default About;
