import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react';
import ProjectViewVM from './viewModel/projectViewVM';


const projectViewVM = new ProjectViewVM();
const View = observer((props: any) => {
    const id = props.match.params.id;
    const {projectContent} = projectViewVM;

    useEffect(() => {
        projectViewVM.load(id);
    }, []);

    return(
        <>
            {   projectContent &&
                <div>
                    <h1>{projectContent.title}</h1>
                </div>
            }
        </>
    );
});

export default View;