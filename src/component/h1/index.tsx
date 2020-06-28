import React from 'react';
import css from './H1.scss'

interface IProps {
    children: string | React.ReactNode;
}
const H1 = (props: IProps) => {
    return(
        <h1 className={css.h1}>{props.children}</h1>
    )
};

export default H1;