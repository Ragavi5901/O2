// src/Components/Button.jsx
import React from 'react';

export function Button({ children, onClick, variant = 'default', size = 'md' }) {
  const base =
    'rounded px-4 py-2 font-semibold transition duration-200';

  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
}
