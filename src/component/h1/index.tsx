import React from 'react';
import css from './H1.scss'

interface IProps {
    child: string | HTMLElement
}
const H1 = (props: IProps) => {
    return(
        <h1>{props.child}</h1>
    )
};

export default H1;