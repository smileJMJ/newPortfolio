import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import GnbData from '../../resource/json/gnb.json';
import css from './Header.scss';

interface IGnbItem {
    name: string;
    link: string;
    blank: boolean; // 새창 여부
}

const Header = () => {
    const [gnbData, setGnbData] = useState<IGnbItem[]>([]);

    useEffect(() => {
        setGnbData(GnbData);
        changeTheme('dark');
    }, [gnbData]);

    const changeTheme = (theme: string) => {
        document.getElementsByTagName('body')[0].setAttribute('data-theme', theme);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const theme = e.target.getAttribute('data-type');
        changeTheme(theme);
    };

    return(
        <header className={css.header}>
            <h1><Link to="/">
                <span className={css.hidden}>MJ Portfolio</span>
            </Link></h1>
            <nav className={css.gnb}>
                <ul>
                    {
                        gnbData.length > 0 &&
                        gnbData.map(v => {
                            if(v.blank) return <li key={v.link}><a href={v.link} target="_blank">{v.name}</a></li>;
                            return <li key={v.link}><NavLink to={v.link} activeClassName={css.active}>{v.name}</NavLink></li>;
                        })
                    }
                </ul>
            </nav>
            <ul className={css.btnArea}>
                <li><button type="button" className={css.btnDark} onClick={handleClick} data-type="dark" title="DARK"></button></li>
                <li><button type="button" className={css.btnBright} onClick={handleClick} data-type="bright" title="BRIGHT"></button></li>
            </ul>
        </header>
    )
};

export default Header;