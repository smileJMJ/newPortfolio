import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import projectListVM from "./viewModel/ProjectListVM";
import ListItem from './view/ListItem';

const List = observer(() => {
    const {projectList} = projectListVM;

    return(
        <ul>
            {
                projectList.map((v, i) => <li key={i}>
                    <ListItem data={v}/>
                </li>)
            }
        </ul>
    );
});

export default List;