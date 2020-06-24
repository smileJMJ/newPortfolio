import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.scss';


const Header = () => {
    return(
        <header className={css.header}>
            <h1><Link to="/">
                <span className={css.hidden}>MJ Portfolio</span>
            </Link></h1>
            <nav className={css.gnb}>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;