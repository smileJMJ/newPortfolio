import React from 'react';
import {observer} from "mobx-react";
import ProjectListStore from "./store/ProjectListStore";
import ListItem from './view/ListItem';

interface IProps {
    maxlength?: number;
}

const List = observer((props: IProps) => {
    const {projectList} = ProjectListStore;
    const {maxlength} = props;
    let data = projectList;

    if(maxlength) data = projectList.slice(0, maxlength); // 노출개수 제한 있을 때
    const listItem = data.map(v => <li key={v.title}><ListItem data={v}/></li>);

    return <ul>{listItem}</ul>;
});

export default List;