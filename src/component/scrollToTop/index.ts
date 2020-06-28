import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {gsap, TweenMax, ScrollToPlugin} from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);
const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        //window.scrollTo(0, 0);
        TweenMax.to(window, 0.3, {scrollTo: {y: 0, autoKill: false}, ease: 'Cubic.easeOut'});
    }, [pathname]);

    return null;
};

export default ScrollToTop;