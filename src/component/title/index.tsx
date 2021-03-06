import React from 'react';
import H1 from '../h1';

import css from './Title.scss';

interface IProps {
    p: string | React.ReactNode;
    children: string | React.ReactNode;
}

const Title = (props: IProps) => {
    const {p, children} = props;

    return (
        <div className={css.title}>
            <p>{p}</p>
            <H1>{children}</H1>
        </div>
    );
};

export default Title;