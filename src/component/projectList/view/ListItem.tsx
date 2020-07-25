import React from 'react';
import {Link} from "react-router-dom";
import {IProjectListItem} from "../type";
import css from './ListItem.scss';

interface IProps {
    data: IProjectListItem;
}

const ListItem = (props: IProps) => {
    const {data} = props;
    const thumbnail = data['thumbnail'] && data['thumbnail'].map((v, i) => <img key={v+i} src={v} alt=""/>);

    return(
        <Link to={data['url']} className={css.listItem}>
            <dl className={css.title}>
                <dt>
                    <strong>{data['title']}</strong>
                    <span>{data['category'].join(', ')}</span>
                </dt>
                <dd className={css.term}>{data['term']}</dd>
                <dd className={css.link}>View case <i></i></dd>
            </dl>
            <div className={css.thumb}>
                <figure data-type={data['thumbnailType']}>{thumbnail}</figure>
            </div>
        </Link>
    );
};

export default ListItem;