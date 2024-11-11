import React from 'react'
import NavItem from './NavItem'

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
        <>
            <h2>Footer</h2>
            <nav className="l-footer__nav">
                <ul className="l-footer__list">
                    {
                        navData && navData.length !== 0 ?
                            navData.map((navItem) => (
                                <NavItem path={navItem.path} value={navItem.value} />
                            ))
                            :
                            null
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
