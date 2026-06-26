import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: '#e53e3e', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#2d3748' }}>Page Not Found</h2>
      <p style={{ color: '#718096', marginBottom: '2rem' }}>Oops! The page path you are looking for does not exist or has been shifted.</p>
      <Link to="/" style={{ padding: '0.6rem 1.2rem', background: '#4c51bf', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Return to Landing Page
      </Link>
    </div>
  );
};

export default NotFoundPage;