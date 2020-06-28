import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import GnbData from '../../resource/json/gnb.json';
import css from './Header.scss';

interface IGnbItem {
    name: string;
    link: string;
}

const Header = () => {
    const [gnbData, setGnbData] = useState<IGnbItem[]>([]);

    useEffect(() => {
        setGnbData(GnbData);
    }, [gnbData]);

    const changeTheme = (e) => {
        e.preventDefault();
        const theme = e.target.getAttribute('data-type');
        document.getElementsByTagName('body')[0].className = theme;
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
                        gnbData.map(v => <li key={v.link}><NavLink to={v.link} activeClassName={css.active}>{v.name}</NavLink></li>)
                    }
                </ul>
            </nav>
            <ul>
                <li><button type="button" onClick={changeTheme} data-type="dark" style={{color: '#ff0000'}}>DARK</button></li>
                <li><button type="button" onClick={changeTheme} data-type="bright" style={{color: '#ff0000'}}>BRIGHT</button></li>
            </ul>
        </header>
    )
};

export default Header;