// layout.tsx
import HomeTwo from '@/components/homes/home-2';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
    title: "Cyber Transition",
    icons: {
        icon: '/src/app/favicon.ico',
    },
};

const Index = () => {
    return (
        <Wrapper>
            <HomeTwo />
        </Wrapper>
    );
};

export default Index;
