import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out, ${formData.name}! Your message has been simulated.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = { width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e0', marginTop: '0.25rem' };

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Contact Us</h1>
      <p style={{ color: '#718096', textAlign: 'center', marginBottom: '2rem' }}>Have questions about the tracks? Send us a message.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Name</label>
          <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={inputStyle} placeholder="Your full name" />
        </div>
        <div>
          <label style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Email</label>
          <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={inputStyle} placeholder="you@example.com" />
        </div>
        <div>
          <label style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Subject</label>
          <input type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} style={inputStyle} placeholder="What is this regarding?" />
        </div>
        <div>
          <label style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Message</label>
          <textarea rows="4" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={inputStyle} placeholder="Write your query here..."></textarea>
        </div>
        <button type="submit" style={{ padding: '0.75rem', background: '#4c51bf', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;