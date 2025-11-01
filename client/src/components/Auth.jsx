import { useState } from 'react';
import '../styles/Auth.css';

export default function Auth({ setIsAuthenticated }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (isSignUp && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // For now, just authenticate (we'll add API integration later)
    setIsAuthenticated(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">✨ Gratitude Journal</div>
          <h2>Start your gratitude journey today! ✨</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Choose a username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="auth-input"
            />
          )}

          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="auth-input"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              className="auth-input"
            />
          )}

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="auth-button">
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        <div className="auth-switch">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button 
            className="switch-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Login' : 'Sign up'}
          </button>
        </div>
      </div>
    </div>
  );
}