import React, {useEffect, useState} from 'react';
import ProjectViewVM from './viewModel/projectViewVM';

const projectViewVM = new ProjectViewVM();
const View = (props: any) => {
    const id = props.match.params.id;
    const {projectContent} = projectViewVM;

    useEffect(() => {
        projectViewVM.load(id);
    }, []);
console.log(projectContent);
    return(
        <>
            {   projectContent &&
                <div>
                    <h1>{projectContent}</h1>
                </div>
            }
        </>
    );
};

export default View;