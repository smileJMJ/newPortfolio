import React from 'react';
import css from './TitleBorderBottom.scss';

interface IProps {
    title: string;
    children: string | JSX.Element;
}

const TitleBorderBottom = (props: IProps) => {
    const {title, children} = props;

    return (
        <dl className={css.titleBorderBottom}>
            <dt>{title}</dt>
            <dd>{children}</dd>
        </dl>
    )
};

export default TitleBorderBottom;