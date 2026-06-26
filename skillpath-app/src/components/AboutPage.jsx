import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#2d3748' }}>About SkillPath</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#4a5568' }}>
        <strong>SkillPath</strong> is an advanced, multi-page application platform built to enhance career path clarity. Our primary purpose is to address information discovery fragmentation across software engineering disciplines.
      </p>
      
      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2d3748' }}>Key Platform Offerings:</h3>
      <ul style={{ paddingLeft: '1.5rem', color: '#4a5568' }}>
        <li style={{ marginBottom: '0.5rem' }}>Modularized front-end asset libraries optimized for quick deployment.</li>
        <li style={{ marginBottom: '0.5rem' }}>Integrated routing pathways using industry-standard React architectures.</li>
        <li style={{ marginBottom: '0.5rem' }}>Dynamic cross-device responsive rendering models.</li>
      </ul>
    </div>
  );
};

export default AboutPage;