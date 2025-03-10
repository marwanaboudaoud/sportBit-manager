import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const ShopPageNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 920);

  const navItems = [
    { path: '/shop/productgroepen', label: 'Productgroepen', isFirst: true },
    { path: '/shop/abonnementen', label: 'Abonnementen' },
    { path: '/shop/rittenkaarten', label: 'Rittenkaarten' },
    { path: '/shop/artikelen', label: 'Artikelen' },
    { path: '/shop/discount-codes', label: 'Kortingscodes' }
  ];

  const isActive = (path) => {
    if (path === '/shop/discount-codes') {
      return location.pathname.startsWith(path);
    }
    return location.pathname === path || 
          (location.pathname === '/shop' && path === '/shop/productgroepen');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectChange = (e) => {
    navigate(e.target.value);
  };

  const getCurrentPath = () => {
    const activeItem = navItems.find(item => isActive(item.path));
    return activeItem ? activeItem.path : navItems[0].path;
  };

  return (
    <div className="shop-nav-container">
      {/* Desktop Navigation */}
      {!isMobile && (
        <ul className="nav shop-navbar">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link text-black roboto-bold ${isActive(item.path) ? 'active-link' : ''} ${item.isFirst && !isActive(item.path) ? 'ps-0' : ''}`}
                >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {isMobile && (
        <div className="mobile-shop-nav">
          <select 
            className="form-select" 
            value={getCurrentPath()} 
            onChange={handleSelectChange}
            aria-label="Shop navigation"
          >
            {navItems.map((item, index) => (
              <option key={index} value={item.path}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

