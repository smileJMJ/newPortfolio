import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { observer } from 'mobx-react';
import ProjectViewVM from './viewModel/projectViewVM';
import Title from "../../component/title";
import TitleBorderBottom from "../../component/titleBorderBottom";
import TitleInnerHtmlContent from '../../component/titleInnerHtmlContent';
import {ISpecs} from "../../types";

import css from './View.scss';

interface ISpecItem {
    specs: ISpecs;
}

const projectViewVM = new ProjectViewVM();

const SpecItem = (props: ISpecItem) => {
    let {specs} = props;
    let element = [];

    for(let key in specs) {
        element.push(<li key={key}><dl>
                <dt>{key}</dt>
                <dd>{specs[key]}</dd>
            </dl></li>);
    }
    
    return element;
};

const View = observer((props: any) => {
    const id = props.match.params.id;
    const {projectContent} = projectViewVM;
    const {title, specs, visual, introduce, result, experience} = projectContent;

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
                        <TitleBorderBottom title="SPECS">
                            <ul><SpecItem specs={specs}/></ul>
                        </TitleBorderBottom>
                    </section>
                    { introduce && <TitleInnerHtmlContent h1="INTRODUCE" content={introduce} /> }
                    { result && <TitleInnerHtmlContent h1="RESULT" content={result} /> }
                    { experience && <TitleInnerHtmlContent h1="EXPERIENCE" content={experience} /> }
                </>
            }
        </>
    );
});

export default View;