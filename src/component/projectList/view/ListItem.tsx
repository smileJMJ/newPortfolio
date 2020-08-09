import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {TweenMax} from 'gsap/all';
import Thumbnail from "../../thumbnail";
import {IProjectListItem} from "../type";

import css from './ListItem.scss';

interface IProps {
    data: IProjectListItem;
}

const ListItem = (props: IProps) => {
    const {data} = props;
    const [isMotion, setIsMotion] = useState(false);
    const thumb = useRef(null);

    const handleMouseEnter = () => {
        if(isMotion) return;
        setIsMotion(true);
    };

    const handleMouseLeave = () => {
        if(!isMotion) return;
        setIsMotion(false);
    };

    return(
        <Link to={data['url']} className={css.listItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <dl className={css.title}>
                <dt>
                    <strong dangerouslySetInnerHTML={{__html: data['title']}}></strong>
                    <span>{data['category'].join(', ')}</span>
                </dt>
                <dd className={css.term}>{data['term']}</dd>
                <dd className={css.link}>View case <i></i></dd>
            </dl>
            <div className={css.thumb} ref={thumb}>
                <Thumbnail thumbnailType={data['thumbnailType']} thumbnail={data['thumbnail']} isMotion={isMotion}/>
            </div>
        </Link>
    );
};

export default ListItem;