import React from 'react';

import { Logo } from '../logo/logo';
import { NavBar } from './nav-bar';
import "./header.scss";


export const Header = () => {
    const linkText = [
        {id: 1, name: 'Коллекция', path: '/'}, 
        {id: 2, name: 'Производство', path: '/production'}, 
        {id: 3, name: 'Hаследие', path: '/heritage'}, 
        {id: 4, name: 'Контакты', path: '/contacts'}];
    return (
        <header className="header">
            <Logo 
                isImg={true}
                isName={true}
                isDesc={true} 
                logoClass = "header__logo"
                nameClass = "logo__name  uppercase"
                descClass = "header__logo__desc uppercase"
                companyName="Бутурлин"
                desc="Завод напитков основан в 1897г."
            />

            <NavBar 
                linkText={linkText}
            />
        </header>
    )
}