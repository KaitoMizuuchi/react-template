import React from 'react';
import NavItem from './NavItem';

const navData = [
    {
        path: "/home",
        value: "home",
    },
    {
        path: "/about",
        value: "about",
    },
    {
        path: "/",
        value: "login",
    }
]

const Navigation = () => {
    return (
        <nav className="l-header__nav">
            <ul className="l-header__nav-list">
                {
                    navData && navData.length !== 0 ?
                        navData.map((navItem, index) => (
                            <NavItem path={navItem.path} value={navItem.value} key={index} />
                        ))
                        :
                        null
                }
            </ul>
        </nav>
    )
}

export default Navigation
