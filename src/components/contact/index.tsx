import React from 'react';
import HeaderOneService from '@/layouts/headers/HeaderOneSer';
import ContactArea from './ContactArea';
import Breadcrumb from '../common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Contact = () => {
    return (
        <>
            <HeaderOneService    />
            <Breadcrumb title="Contact Us" subtitle="Contact" />
            <ContactArea />
            <FooterOne />
        </>
    );
};

export default Contact;
