import React, {useEffect, useRef} from 'react';
import {TweenMax} from 'gsap/all';
import {IThumbnail} from './type';

import css from './Thumbnail.scss';

const Thumbnail = (props: IThumbnail) => {
    const {thumbnailType, thumbnail, isMotion} = props;
    const refArr: React.RefObject<HTMLSpanElement>[] = [];
    const thumbnailEle = thumbnail && thumbnail.map((v, i) => {
        const ref = useRef(null);
        refArr.push(ref);
        return <img key={v+i} src={v} ref={ref} alt=""/>;
    });

    useEffect(() => {
        if(!!thumbnailType && thumbnailType !== 'mobile') {
            const dir = thumbnailType === 'left' ? {x: -30, y: 30} : {x: 30, y: 30};
            const ref = refArr[0].current;
            const ref1 = refArr[1].current;
            const ref2 = refArr[2].current;

            TweenMax.killTweensOf([ref1, ref2]);

            if(isMotion) {
                TweenMax.set(ref1, {display: 'block', autoAlpha: 0, x: dir.x, y: dir.y});
                TweenMax.set(ref2, {display: 'block', autoAlpha: 0, x: dir.x, y: dir.y});
                TweenMax.to(ref, 0.4, {autoAlpha: 1, x: -dir.x * 0.5, y: 0, ease: 'Quad.easeInOut'});
                TweenMax.to(ref1, 0.3, {autoAlpha: 1, x: 0, y: 0, ease: 'Quad.easeInOut', delay: 0.1});
                TweenMax.to(ref2, 0.3, {autoAlpha: 1, x: 0, y: 0, ease: 'Quad.easeInOut', delay: 0.15});
            } else {
                TweenMax.to(ref2, 0.3, {autoAlpha: 0, x: dir.x, y: dir.y, ease: 'Quad.easeIn', onComplete: function() {
                        TweenMax.set(ref2, {display: 'none'});
                    }});
                TweenMax.to(ref1, 0.3, {autoAlpha: 0, x: dir.x, y: dir.y, ease: 'Quad.easeIn', onComplete: function() {
                    TweenMax.set(ref1, {display: 'none'});
                }, delay: 0.1});
                TweenMax.to(ref, 0.4, {x: 0, ease: 'Quad.easeInOut', delay: 0.15});
            }
        }
    }, [isMotion]);

    return (
        <div className={css.thumbnail}>
            <figure data-type={thumbnailType}>{thumbnailEle}</figure>
        </div>
    );
};

export default Thumbnail;