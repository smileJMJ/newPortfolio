import React from 'react';
import {observer} from "mobx-react";
import projectListVM from "./viewModel/ProjectListVM";
import ListItem from './view/ListItem';

interface IProps {
    maxlength?: number;
}

const List = observer((props: IProps) => {
    let {projectList} = projectListVM;
    const {maxlength} = props;
    if(maxlength) projectList = projectList.slice(0, maxlength);

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