import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import ProjectListVM from "./viewModel/projectListVM";
import {Link} from "react-router-dom";


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
                listData.map(v => <li key={v['title']}>
                    <Link to={v['url']}>
                        <dl>
                            <dt>{v['title']}</dt>
                            <dd>{v['term']}</dd>
                            <dd>{v['category']}</dd>
                            <dd><img src={v['thumbnail']} alt=""/></dd>
                        </dl>
                    </Link>
                </li>)
            }
        </ul>
    );
});

export default List;