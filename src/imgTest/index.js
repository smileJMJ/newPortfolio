import React from 'react';

import css from './imgTest.scss';
import RyanJpg from '../resource/img/라이언jpg.jpg';
import RyanPng from '../resource/img/라이언png.png';
import RyanGif from '../resource/img/라이언gif.gif';
import RyanSmall from '../resource/img/라이언작은이미지.jpeg';

const ImgTest = () => {
    return(
        <div className={css.imgTest}>
            <img src={RyanJpg} alt=""/>
            <img src={RyanPng} alt=""/>
            <img src={RyanGif} alt=""/>
            <img src={RyanSmall} alt=""/>
        </div>
    );
};

export default ImgTest;