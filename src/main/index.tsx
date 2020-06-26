import React from 'react';
import ProjectList from '../component/projectList';
import Title from "../component/title";

const LatestWork = () => {
    const p = 'Project';
    const h1 = <>Latest<br/>Work</>;
    return(
        <>
            <Title p={p} h1={h1}></Title>
            <ProjectList maxlength={3}/>
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