import React from 'react';
import {Link} from "react-router-dom";
import {IProjectDetailRs} from "../type";
import Title from "../../../component/title";
import TitleBorderBottom from "../../../component/titleBorderBottom";
import TitleInnerHtmlContent from "../../../component/titleInnerHtmlContent";
import Next from "../../../component/next";

import css from "../Detail.scss";
import InfoItem from "./InfoItem";

interface IProps {
    data: IProjectDetailRs;
}

const ProjectContent = (props: IProps) => {
    const {title, info, visual, introduce, result, experience, next} = props.data;
    const goList = <Link to="/project" className={css.goList}><span>목록으로</span><i></i></Link>;

    if(props) {
        return (
            <>
                <Title p={goList}>{title}</Title>
                <section className={css.visual}>
                    <figure><img src={visual} alt=""/></figure>
                    <TitleBorderBottom title="INFO">
                        <InfoItem data={info}/>
                    </TitleBorderBottom>
                </section>
                { introduce && <TitleInnerHtmlContent h1="INTRODUCE" content={introduce} /> }
                { result && <TitleInnerHtmlContent h1="RESULT" content={result} /> }
                { experience && <TitleInnerHtmlContent h1="EXPERIENCE" content={experience} /> }
                { next && <Next name={next.name} link={next.link}/> }
            </>
        );
    } else return <></>;
};

export default ProjectContent;