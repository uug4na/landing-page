

import HeaderOne from '@/layouts/headers/HeaderOne';
import HeaderOneService from '@/layouts/headers/HeaderOneSer';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceArea from './ServiceArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Service = () => {
    return (
        <>
            {/* <HeaderOne /> */}
            <HeaderOneService />
            <Breadcrumb title="Service" subtitle="Service" />
            <ServiceArea />
            <FooterOne />
        </>
    );
};

export default Service;
