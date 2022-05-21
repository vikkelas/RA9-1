import React from 'react';
import {NavLink} from "react-router-dom";
const setActive = ({isActive})=> isActive?'menu__item menu__item-active':'menu__item';

const Menu = () => {
    return (
        <nav className='menu'>
            <NavLink className={setActive} to="/">Главная</NavLink>
            <NavLink className={setActive} to="/drift">Дрифт-такси</NavLink>
            <NavLink className={setActive} to="/timeattack">Time Attack</NavLink>
            <NavLink className={setActive} to="/forza">Forza Karting</NavLink>
        </nav>
    );
};

export default Menu;