import React from 'react';
import H1 from "../h1";
import css from './TitleInnerHtmlContent.scss';

interface IProps {
    h1: string | React.ReactNode;
    content: string | React.ReactNode;
}

const TitleInnerHtmlContent = (props: IProps) => {
    const {h1, content} = props;

    return (
        <section className={css.titleInnerHtmlContent}>
            <H1>{h1}</H1>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </section>
    );
};

export default TitleInnerHtmlContent;