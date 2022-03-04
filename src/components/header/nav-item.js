import React from 'react';
import { NavLink} from 'react-router-dom';


export const NavItem = (props) => {
    return (
        <NavLink 
            exact={true}
            // isActive={() => {
            //     if(location.pathname === '/') {
            //         return true
            //     }
            //   }}
            to={props.path} 
            className="nav__link"
            activeClassName="nav__link  nav__link--active"
            onClick={() => {props.onClickItemMenuHundler()}}
        >     
                {props.text}
        </NavLink>
    )
}