import React from 'react';
import Title from "../component/title";
import Next from "../component/next";
import ScrollToTop from "../component/scrollToTop";

const ABOUT = () => {
    return (
        <>
            <ScrollToTop/>
            <Title p="ABOUT">
                <strong>Front-End<br/>Developer</strong>
            </Title>
            <Next name="Project" link="/project"/>
        </>
    );
};

export default ABOUT;