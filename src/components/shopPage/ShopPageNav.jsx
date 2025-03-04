import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ShopPageNav = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === `/shop${path}` || 
               (location.pathname === '/shop' && path === '/productgroepen');
    };

    return (
        <div>
            <ul className="nav shop-navbar">
                <li className="nav-item text-black">
                    <Link 
                        to="/shop/productgroepen" 
                        className={`nav-link fw-bold text-black  ${isActive('/productgroepen') ? 'active-link' : 'ps-0'}`}
                    >
                        Productgroepen
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/shop/abonnementen" 
                        className={`nav-link fw-bold text-black ${isActive('/abonnementen') ? 'active-link' : ''}`}
                    >
                        Abonnementen
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/shop/rittenkaarten" 
                        className={`nav-link fw-bold text-black ${isActive('/rittenkaarten') ? 'active-link' : ''}`}
                    >
                        Rittenkaarten
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/shop/artikelen" 
                        className={`nav-link fw-bold text-black ${isActive('/artikelen') ? 'active-link' : ''}`}
                    >
                        Artikelen
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/shop/kortingscodes" 
                        className={`nav-link fw-bold text-black ${isActive('/kortingscodes') ? 'active-link' : ''}`}
                    >
                        Kortingscodes
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ShopPageNav;
