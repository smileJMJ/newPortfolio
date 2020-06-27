import React from 'react';
import ProjectList from '../component/projectList';
import Title from "../component/title";
import Next from '../component/next';

const LatestWork = () => {
    return (
        <>
            <Title p="Project">
                <strong>Latest<br/>Work</strong>
            </Title>
            <ProjectList maxlength={3}/>
            <Next name="About" link="/about"/>
        </>
    );
};

const Main = () => {
    return(
        <>
            <LatestWork/>
        </>
    );
};

export default Main;