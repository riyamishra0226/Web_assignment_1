import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a202c', color: '#a0aec0', padding: '1.5rem 2rem', textAlign: 'center', fontSize: '0.9rem', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} SkillPath Enhancement Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;