import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return React.createElement('div', { className: 'page' },
    React.createElement('h1', null, 'About This App'),
    React.createElement('p', null, 'This app shows a multi-page layout using React Router v6 without any JSX syntax.'),
    React.createElement('p', null,
      React.createElement(Link, { to: '/' }, 'Back to Home')
    )
  );
}


