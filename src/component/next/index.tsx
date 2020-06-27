import React from 'react';
import { Link } from 'react-router-dom';
import TitleBorderBottom from "../titleBorderBottom";
import css from './Next.scss';

interface IProps {
    name: string;
    link: string;
}

const Next = (props: IProps) => {
    const {name, link} = props;
    return (
        <>
            <TitleBorderBottom title="NEXT">
                <Link to={link} className={css.next}>
                    <strong>{name}</strong>
                </Link>
            </TitleBorderBottom>
        </>
    );
};

export default Next;