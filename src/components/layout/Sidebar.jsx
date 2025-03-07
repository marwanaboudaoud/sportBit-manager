import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGears, 
  faCartShopping, 
  faComments, 
  faChartPie, 
  faFileText, 
  faWarehouse, 
  faCalendarDays 
} from '@fortawesome/free-solid-svg-icons';
import sportLogo from '../../assets/images/sport.png'; 


export const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || 
           (location.pathname === '/' && path === '/management') || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  const navItems = [
    { path: '/management', icon: faChartPie, label: 'Management', iconWidth: '24px', iconHeight: '23px' },
    { path: '/administration', icon: faFileText, label: 'Administratie', iconWidth: '17px', iconHeight: '22px' },
    { path: '/calender', icon: faCalendarDays, label: 'Administratie', iconWidth: '21px', iconHeight: '24px' },
    { path: '/shop', icon: faCartShopping, label: 'Shop', iconWidth: '27px', iconHeight: '24px' },
    { path: '/communication', icon: faComments, label: 'Communicatie', iconWidth: '27px', iconHeight: '24px' },
    { path: '/club-management', icon: faWarehouse, label: 'Clubbeheer', iconWidth: '30px', iconHeight: '24px' },
    { path: '/configuration', icon: faGears, label: 'Configuratie', iconWidth: '30px', iconHeight: '24px' }
  ];

  return (
    <div className="sidebar bg-white text-black">
       <div className="logo-container text-center">
        <img 
          src={sportLogo} 
          alt="SportLogo" 
          className="sidebar-logo img-fluid" 
        />
      </div>
      <ul className="list-unstyled">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={`d-flex flex-column align-items-center p-3 text-black text-decoration-none ${isActive(item.path) ? 'active-link' : ''}`}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className="me-3 mb-2" 
                style={{ 
                  width: item.iconWidth, 
                  height: item.iconHeight 
                }} 
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>   
    </div>
  );
};
