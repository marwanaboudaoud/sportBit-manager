import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ShopPageNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 920);

  // Navigation items configuration
  const navItems = [
    { path: '/shop/productgroepen', label: 'Productgroepen', isFirst: true },
    { path: '/shop/abonnementen', label: 'Abonnementen' },
    { path: '/shop/rittenkaarten', label: 'Rittenkaarten' },
    { path: '/shop/artikelen', label: 'Artikelen' },
    { path: '/shop/kortingscodes', label: 'Kortingscodes' }
  ];

  // Check if current path matches the item
  const isActive = (path) => {
    if (path === '/shop/kortingscodes') {
      return location.pathname.startsWith(path);
    }
    return location.pathname === path || 
          (location.pathname === '/shop' && path === '/shop/productgroepen');
  };

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle dropdown selection change
  const handleSelectChange = (e) => {
    navigate(e.target.value);
  };

  // Find the current active path for default dropdown value
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
                className={`nav-link fw-bold text-black ${isActive(item.path) ? 'active-link' : ''} ${item.isFirst ? 'ps-0' : ''}`}
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

export default ShopPageNav;
