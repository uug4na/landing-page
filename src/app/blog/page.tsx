
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
    title: "Cyber Transition | Blog",
};


const index = () => {
    return (
        <Wrapper>
            <Blog />
        </Wrapper>
    );
};

export default index;
