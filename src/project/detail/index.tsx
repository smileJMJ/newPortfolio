import React, {useEffect} from 'react';
import { observer } from 'mobx-react';
import ProjectViewStore from "./store/ProjectViewStore";

import ProjectContent from "./view/ProjectContent";
import ScrollToTop from "../../component/scrollToTop";

const ProjectView = observer((props: any) => {
    const id = props.match.params.id;
    const {projectContent} = ProjectViewStore;

    useEffect(() => {
        ProjectViewStore.load(id);
    }, [id]);

    return(
        <>
            <ScrollToTop/>
            <ProjectContent data={projectContent}/>
        </>
    );
});

export default ProjectView;