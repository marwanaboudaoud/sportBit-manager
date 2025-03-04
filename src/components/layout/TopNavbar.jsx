import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleQuestion, faGift, faBullhorn } from '@fortawesome/free-solid-svg-icons';

export const TopNavbar = () => {
    return (
        <nav className="navbar top-navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="ms-auto"> 
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">
                                <FontAwesomeIcon icon={faUser} className="user-icon me-3" />
                                SportBit Support
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a href="/" className="nav-link text-white">
                                <FontAwesomeIcon icon={faCircleQuestion} className="question-icon me-3" />
                                Helpcenter
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white">
                                <FontAwesomeIcon icon={faGift} className="question-icon" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white">
                                <FontAwesomeIcon icon={faBullhorn} className="question-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
