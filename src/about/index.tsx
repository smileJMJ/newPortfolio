import React from 'react';
import Title from "../component/title";
import Next from "../component/next";

const ABOUT = () => {
    return (
        <>
            <Title p="ABOUT">
                <strong>Front-End<br/>Developer</strong>
            </Title>
            <Next name="Project" link="/project"/>
        </>
    );
};

export default ABOUT;