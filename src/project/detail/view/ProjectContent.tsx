import React from 'react';
import {Link} from "react-router-dom";
import {IProjectDetailRs} from "../type";
import Title from "../../../component/title";
import TitleBorderBottom from "../../../component/titleBorderBottom";
import TitleInnerHtmlContent from "../../../component/titleInnerHtmlContent";
import InfoItem from "./InfoItem";
import Thumbnail from "../../../component/thumbnail";
import Next from "../../../component/next";

import css from "../Detail.scss";


interface IProps {
    data: IProjectDetailRs;
}

const ProjectContent = (props: IProps) => {
    const {title, info, thumbnailType, thumbnail, introduce, result, experience, next} = props.data;
    const goList = <Link to="/project" className={css.goList}><span>목록으로</span><i></i></Link>;

    if(props) {
        return (
            <div className={css.detail}>
                <Title p={goList}>{title}</Title>
                <section className={css.visual}>
                    <div className={css.thumb}>
                        {thumbnail && <Thumbnail thumbnailType={thumbnailType} thumbnail={thumbnail} isMotion={false}/>}
                    </div>
                    <TitleBorderBottom title="INFO">
                        <InfoItem data={info}/>
                    </TitleBorderBottom>
                </section>
                { introduce && <TitleInnerHtmlContent h1="INTRODUCE" content={introduce} /> }
                { result && <TitleInnerHtmlContent h1="RESULT" content={result} /> }
                { experience && <TitleInnerHtmlContent h1="EXPERIENCE" content={experience} /> }
                { next && <Next name={next.name} link={next.link}/> }
            </div>
        );
    } else return <></>;
};

export default ProjectContent;