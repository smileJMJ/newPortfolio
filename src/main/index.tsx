import React from 'react';
import ProjectList from '../component/projectList';
import Title from "../component/title";
import Next from '../component/next';
import Introduce from './view/Introduce';

const LatestWork = () => {

    return (
        <>
            <Title p="">
                <strong>Introduce</strong>
            </Title>
            <Introduce/>
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