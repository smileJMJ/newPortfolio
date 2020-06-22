import React from 'react';
import {Link} from "react-router-dom";
import {IProjectListItem} from "../types";

interface IProps {
    data: IProjectListItem;
}

const ListItem = (props: IProps) => {
    const {data} = props;
    return(
        <Link to={data['url']}>
            <dl>
                <dt>{data['title']}</dt>
                <dd>{data['term']}</dd>
                <dd>{data['category']}</dd>
                <dd><img src={data['thumbnail']} alt=""/></dd>
            </dl>
        </Link>
    );
};

export default ListItem;