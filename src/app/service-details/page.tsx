
import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
    title: "Cyber Transition | Service Details",
};

const index = () => {
    return (
        <Wrapper>
            <ServiceDetails />
        </Wrapper>
    );
};

export default index;
