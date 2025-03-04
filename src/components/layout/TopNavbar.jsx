import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleQuestion, faGift, faBullhorn } from '@fortawesome/free-solid-svg-icons';

export const TopNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                {/* Move Toggle Button to the Right */}
                <button
                    className="navbar-toggler ms-auto"  // Added ms-auto to align right
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links (collapsible part) */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
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
