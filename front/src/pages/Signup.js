import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert('Signup successful. Please login.');
        navigate('/');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', textAlign: 'center', width: '300px' }}>
        <h2 style={{ marginBottom: '1rem', color: '#2563eb' }}>Create an Account</h2>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <button type="submit" style={{ padding: '0.6rem', fontSize: '1rem', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Signup
          </button>
        </form>
        <p style={{ marginTop: '1rem' }}>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
