import React from 'react';
import Title from '../../component/title';
import ProjectList from '../../component/projectList';

const List = () => {
    const p = 'Project';
    const h1 = <>2015-<br/>2020</>;

    return(
        <>
            <Title p={p} h1={h1}></Title>
            <ProjectList/>
        </>
    )
};

export default List;