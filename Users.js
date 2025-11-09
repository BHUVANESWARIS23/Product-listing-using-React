import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

function Users() {
  const listItems = users.map(user =>
    React.createElement('li', { key: user.id, className: "bg-white p-4 rounded shadow hover:bg-blue-100 transition" },
      React.createElement(Link, { to: "/users/"+user.id, className: "text-blue-600 font-medium" }, user.name)
    )
  );

  return React.createElement('div', { className: "max-w-2xl mx-auto p-6" },
    React.createElement('h1', { className: "text-2xl font-bold mb-4" }, 'Users'),
    React.createElement('ul', { className: "space-y-3" }, listItems)
  );
}

export default Users;