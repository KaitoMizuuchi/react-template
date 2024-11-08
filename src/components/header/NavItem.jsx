import React from 'react'
import { Link } from 'react-router-dom';

const NavItem = ({ path, value }) => {
    return (
        <li className="l-header__nav-item">
            <Link to={path} className="l-header__nav-link">
                {value}
            </Link>
        </li>
    )
}

export default NavItem;
