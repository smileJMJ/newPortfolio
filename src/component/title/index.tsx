import React from 'react';
import H1 from '../h1';

import css from './Title.scss';

interface IProps {
    p: string | HTMLElement;
    h1: string | HTMLElement;
}

const Title = (props: IProps) => {
    return(
        <div className={css.title}>
            <p>{props.p}</p>
            <H1>{props.h1}</H1>
        </div>
    );
};

export default Title;