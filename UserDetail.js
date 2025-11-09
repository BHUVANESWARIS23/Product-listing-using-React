import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === Number(id));

  return React.createElement('div', { className: "max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow" },
    React.createElement('h1', { className: "text-xl font-bold mb-4" }, 'User Detail'),
    user
      ? React.createElement('p', { className: "text-gray-700 mb-4" }, 'ID: ${user.id}   |   Name: ${user.name}   |   Email: ${user.email}')
      : React.createElement('p', null, 'User not found'),
    React.createElement('button', { onClick: () => navigate(-1), className: "mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" }, 'Go Back')
  );
}

export default UserDetail;