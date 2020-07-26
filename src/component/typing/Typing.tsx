import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import TypingStore from "./store/TypingStore";
import Motion from "./Motion";

import css from './Typing.scss';

interface IProps {
    option: IOption;
}

const Typing = observer((props: IProps) => {
    const {option} = props;
    const typingStore = new TypingStore(option);
    const motion = new Motion(option);
    const {resultArr} = typingStore;
    const letterStr = resultArr.map((v, i) => <span key={v+i} className={css.letter}>{v}</span>);

    useEffect(() => {
        motion.typingMotionControl();
    }, []);

    return (
        <div className={css.typingArea}>
            {letterStr}
            {option.cursorEnd && <span className={css.cursor}></span>}
        </div>
    );
});

export default Typing;