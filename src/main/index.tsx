import React, {useEffect, useRef} from 'react';
import ProjectList from '../component/projectList';
import Title from "../component/title";
import Next from '../component/next';
import Typing from '../component/typing/Typing';

const LatestWork = () => {
    const typing = useRef(null);
    let typingOption = {
        eleRef: typing.current,
        letter: ["테스트입니다.", "두번째 테스트구요!"],
        letterTime: 0.04,
        letterDelay: 0.07,
        startDelay: 0.3,
        eraseDelay: 0.3,
        cursorEnd: true,
        infinite: true
    };

    return (
        <>
            <Typing option={typingOption}/>
            <Title p="Project">
                <strong>Latest<br/>Work</strong>
            </Title>
            <ProjectList maxlength={3}/>
            <Next name="About" link="/about"/>
        </>
    );
};

const Main = () => {
    return(
        <>
            <LatestWork/>
        </>
    );
};

export default Main;