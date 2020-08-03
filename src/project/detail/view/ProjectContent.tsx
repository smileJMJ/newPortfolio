import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import {TweenMax} from 'gsap/all';
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
    const ref = useRef(null);
    const goList = <Link to="/project" className={css.goList}><span>목록으로</span><i></i></Link>;

    useEffect(() => {
        TweenMax.set(ref.current, {display: 'block', autoAlpha: 0, y: 100});
        TweenMax.to(ref.current, 1.0, {autoAlpha: 1, y: 0, ease: 'Quad.easeOut', delay: 0.3});
    }, [props]);

    if(props) {
        return (
            <div className={css.detail} ref={ref}>
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