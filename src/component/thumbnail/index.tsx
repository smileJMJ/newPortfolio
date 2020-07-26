import React from 'react';
import {IThumbnail} from './type';

import css from './Thumbnail.scss';

const Thumbnail = (props: IThumbnail) => {
    const {thumbnailType, thumbnail} = props;
    const thumbnailEle = thumbnail && thumbnail.map((v, i) => <img key={v+i} src={v} alt=""/>);

    return (
        <div className={css.thumbnail}>
            <figure data-type={thumbnailType}>{thumbnailEle}</figure>
        </div>
    );
};

export default Thumbnail;