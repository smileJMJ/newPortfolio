import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { observer } from 'mobx-react';
import ProjectViewVM from './viewModel/projectViewVM';
import Title from "../../component/title";
import TitleBorderBottom from "../../component/titleBorderBottom";
import TitleInnerHtmlContent from '../../component/titleInnerHtmlContent';
import {IInfo} from "./types";

import css from './View.scss';
import Next from "../../component/next";

interface IInfoItem {
    info: IInfo;
}

const projectViewVM = new ProjectViewVM();

const InfoItem = (props: IInfoItem) => {
    let {info} = props;
    let element = [];

    for(let key in info) {
        const val = info[key];
        element.push(<li key={key}><dl>
                <dt>{key}</dt>
            <dd>{ key === 'link' ? <a href={val} target="_blank">{val}</a> : val}</dd>
            </dl></li>);
    }
    
    return element;
};

const View = observer((props: any) => {
    const id = props.match.params.id;
    const {projectContent} = projectViewVM;
    const {title, info, visual, introduce, result, experience, next} = projectContent;

    const goList = <Link to="/project" className={css.goList}><span>목록으로</span><i></i></Link>;

    useEffect(() => {
        projectViewVM.load(id);
    }, []);

    return(
        <>
            {   projectContent &&
                <>
                    <Title p={goList}>{title}</Title>
                    <section className={css.visual}>
                        <figure><img src={visual} alt=""/></figure>
                        <TitleBorderBottom title="INFO">
                            <ul><InfoItem info={info}/></ul>
                        </TitleBorderBottom>
                    </section>
                    { introduce && <TitleInnerHtmlContent h1="INTRODUCE" content={introduce} /> }
                    { result && <TitleInnerHtmlContent h1="RESULT" content={result} /> }
                    { experience && <TitleInnerHtmlContent h1="EXPERIENCE" content={experience} /> }
                    { next && <Next name={next.name} link={next.link}/> }
                </>
            }
        </>
    );
});

export default View;