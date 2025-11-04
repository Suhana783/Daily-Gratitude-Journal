import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/journal');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Check if backend is running first
      const endpoint = isLogin ? 'login' : 'register';
      const body = isLogin 
        ? { email, password }
        : { 
            username: formData.get('username'), 
            email, 
            password 
          };

      console.log('Sending request to:', `http://localhost:5000/api/auth/${endpoint}`);
      console.log('Request body:', body);

      const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers.get('content-type'));

      // Check if response is actually JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server is not responding with JSON. Please check if backend is running.');
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      if (isLogin) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/journal');
      } else {
        setIsLogin(true);
        setError('');
        alert('Account created successfully! Please login.');
      }

    } catch (err) {
      console.error('Auth error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h1>✨ Gratitude Journal</h1>
        <p>Start your gratitude journey today! ✨</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            className="auth-input"
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="auth-input"
          required
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder={isLogin ? "Enter your password" : "Create a password"}
            className="auth-input"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>

        {!isLogin && (
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            className="auth-input"
            required
          />
        )}

        <button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>

      <div className="auth-switch">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          type="button"
          className="switch-button"
          onClick={() => {
            setIsLogin(!isLogin);
            setError('');
          }}
        >
          {isLogin ? 'Sign up' : 'Login'}
        </button>
      </div>
    </div>
  );
}