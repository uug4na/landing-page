
import BlogDetails from '@/components/blog-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
    title: "Cyber Transition | Blog Details",
};


const index = () => {
    return (
        <Wrapper>
            <BlogDetails />
        </Wrapper>
    );
};

export default index;
