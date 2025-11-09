import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

export default function App() {
  return React.createElement('div', null,
    React.createElement(Navbar, null),
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
      React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
      React.createElement(Route, { path: '/users', element: React.createElement(Users, null) }),
      React.createElement(Route, { path: '/users/:id', element: React.createElement(UserDetail, null) })
    )
  );
}



