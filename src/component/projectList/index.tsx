import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import ProjectListVM from "./viewModel/ProjectListVM";
import ListItem from './view/ListItem';


const projectListVM: ProjectListVM = new ProjectListVM();
const List = observer(() => {
    const {listData} = projectListVM;
    useEffect(() => {
        projectListVM.load();
    }, []);
    console.log('listData', listData);
    return(
        <ul>
            {
                listData.map((v, i) => <li key={i}>
                    <ListItem data={v}/>
                </li>)
            }
        </ul>
    );
});

export default List;