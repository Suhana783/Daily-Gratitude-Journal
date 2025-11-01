import { useState } from 'react';

export default function Auth({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });

  const submit = (e) => {
    e.preventDefault();
    // placeholder: set auth true for demo
    setIsAuthenticated(true);
  };

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <h3>{isLogin ? 'Login' : 'Create Account'}</h3>
        <form onSubmit={submit}>
          {!isLogin && <input className="input-field" placeholder="Username" value={form.username} onChange={e => setForm({...form, username: e.target.value})} />}
          <input className="input-field" placeholder="Email or Username" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input className="input-field" type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
          {!isLogin && <input className="input-field" type="password" placeholder="Confirm Password" value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} />}
          <div className="actions">
            <button className="button primary" type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
          </div>
        </form>

        <div className="auth-switch">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button className="link-btn" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up' : 'Login'}</button>
        </div>
      </div>
    </div>
  );
}