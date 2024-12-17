import ProjectDetails from '@/components/project-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
    title: "Cyber Transition | Project Details",
};

const index = () => {
    return (
        <Wrapper>
            <ProjectDetails />
        </Wrapper>
    );
};

export default index;
