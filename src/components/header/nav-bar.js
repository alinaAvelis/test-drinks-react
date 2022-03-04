import React, {useState, useEffect} from 'react';
import { NavItem } from './nav-item';
import { CloseBtn } from '../close-btn/close-btn';
import { BurgerBtn } from '../burger-btn/burger-btn';

export const NavBar = (props) => {
    const [burgerStyle, setBurgerStyle] = useState("button  header__btn  burger_btn");
    const [closeStyle, setCloseStyle] = useState("button  header__btn  close_btn");
    const [wrapperStyle, setWrapperStyle] = useState("nav_bar__wrapper");
    const linkText = props.linkText;

    const setStyles = (burger, close, wrapper) => {
        setBurgerStyle(burger);
        setCloseStyle(close);
        setWrapperStyle(wrapper);
    }

    const closeMenu = () => {
        if(window.innerWidth < 1500) {
            setStyles("button  header__btn  burger_btn", "button  header__btn  close_btn  hide", "nav_bar__wrapper  hide");
        }
    } 
    
    const openMenu = () => {
        if(window.innerWidth < 1500) {
            setStyles("button  header__btn  burger_btn  hide", "button  header__btn  close_btn", "nav_bar__wrapper");
        }
    }

    useEffect(() => {
        setStyles("button  header__btn  burger_btn", "button  header__btn  close_btn", "nav_bar__wrapper");
        closeMenu();
    }, [])

    const onClickCloseHundler = () => {
        closeMenu();
    }

    const onClickBurgerHundler = () => {
        openMenu();
    }

    const onClickItemMenuHundler = () => {
        closeMenu();
    }
  

    const elements = linkText.map((item) => {
        return (
            <li key={item.id}>
                <NavItem path={item.path} text={item.name} onClickItemMenuHundler={onClickItemMenuHundler}/>
            </li>
        )
    });

    return (
        <div className="nav_bar__container">
            <div className='nav_bar__btns'>
                <BurgerBtn 
                    svgStyles="close_svg"
                    btnStyle={burgerStyle}
                    onClickBurgerHundler={onClickBurgerHundler}
                    />
                <CloseBtn 
                    svgStyles="close_svg"
                    btnStyle={closeStyle}
                    onClickCloseHundler={onClickCloseHundler}
                />
            </div>
            <div className={wrapperStyle}>
                <ul className='list_style_type_none  nav_bar'>
                    {elements}
                </ul>
            </div>
        </div>
        
    )
}