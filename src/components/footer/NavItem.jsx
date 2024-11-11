import React from 'react'

const NavItem = ({ path, value }) => {
    return (
        <>
            <li>
                <a href={path}>{value}</a>
            </li>
        </>
    )
}

export default NavItem
