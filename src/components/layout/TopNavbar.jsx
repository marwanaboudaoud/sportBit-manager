import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleQuestion, faGift, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ icon, text, href = '/', hasMargin = true }) => (
    <li className="nav-item">
        <a className="nav-link text-white" href={href}>
            <FontAwesomeIcon 
                icon={icon} 
                className={`nav-icon ${hasMargin && text ? 'me-3' : ''}`} 
                aria-hidden="true"
            />
            {text && <span>{text}</span>}
        </a>
    </li>
);

const navItems = [
    { icon: faUser, text: 'SportBit Support' },
    { icon: faCircleQuestion, text: 'Helpcenter' },
    { icon: faGift, text: '' },
    { icon: faBullhorn, text: '' }
];

export const TopNavbar = () => {
    return (
        <nav className="navbar top-navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="ms-auto">
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        {navItems.map((item, index) => (
                            <NavItem 
                                key={index}
                                icon={item.icon} 
                                text={item.text}
                                hasMargin={!!item.text}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
