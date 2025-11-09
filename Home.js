import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return React.createElement('div', { className: 'page' },
    React.createElement('h1', null, 'Welcome to Our App'),
    React.createElement('p', null, 'This is the home page.'),
    React.createElement('p', null,
      React.createElement(Link, { to: '/about' }, 'About'),
      ' | ',
      React.createElement(Link, { to: '/users' }, 'Users')
    )
  );
}


