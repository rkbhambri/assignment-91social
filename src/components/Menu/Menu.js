import React from 'react';
import { Link } from 'react-router-dom';
import { isEqual } from '../../helpers/miscellenous'
import './Menu.css';

const Menu = (props) => {
    return (
        <div className="menu">
            <ul>
                <li style={{ borderBottom: isEqual(window.location.pathname, '/history') ? '2px solid #ccc' : '' }}>
                    <Link to='/history'>History</Link>
                </li>
                <li style={{ borderBottom: isEqual(window.location.pathname, '/address') ? '2px solid #ccc' : '' }}>
                    <Link to='/address'>Address</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
