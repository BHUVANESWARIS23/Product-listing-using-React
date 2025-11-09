import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return React.createElement('nav', { className: "fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 flex gap-4" },
    React.createElement(NavLink, { to: '/', className: ({ isActive }) => isActive ? "bg-blue-500 px-3 py-1 rounded" : "hover:bg-gray-700 px-3 py-1 rounded" }, 'Home'),
    React.createElement(NavLink, { to: '/about', className: ({ isActive }) => isActive ? "bg-blue-500 px-3 py-1 rounded" : "hover:bg-gray-700 px-3 py-1 rounded" }, 'About'),
    React.createElement(NavLink, { to: '/users', className: ({ isActive }) => isActive ? "bg-blue-500 px-3 py-1 rounded" : "hover:bg-gray-700 px-3 py-1 rounded" }, 'Users')
  );
}

export default Navbar;