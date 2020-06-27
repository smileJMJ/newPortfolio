import React from 'react';
import TitleBorderBottom from "../titleBorderBottom";
import css from './Footer.scss';

const Footer = () => {
    return(
        <footer className={css.footer}>
            <ul>
                <li>
                    <TitleBorderBottom title="COPYRIGHT">
                        <p>© 2020 MJPF. All rights reserved</p>
                    </TitleBorderBottom>
                </li>
                <li>
                    <TitleBorderBottom title="CONNECT">
                        <ul>
                            <li className={css.email}><a href="mailto:mjj0324@gmail.com" title="EMAIL">
                                <span className={css.hidden}>EMAIL</span>
                                <i></i>
                            </a></li>
                            <li className={css.github}><a href="https://github.com/smileJMJ" target="_blank" title="GITHUB">
                                <span className={css.hidden}>GITHUB</span>
                                <i></i>
                            </a></li>
                        </ul>
                    </TitleBorderBottom>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;