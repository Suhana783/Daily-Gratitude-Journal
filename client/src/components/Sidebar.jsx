import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-mark">✨</div>
          <div className="logo-text">Gratitude</div>
        </div>
        <p className="subtitle">Your daily reflection space</p>
      </div>

      <nav className="nav">
        <NavLink to="/journal" className="nav-link">📒 My Journal</NavLink>
        <NavLink to="/ask-gemini" className="nav-link">🤖 Ask Gemini</NavLink>
        <NavLink to="/challenge" className="nav-link">🏆 21-Day Challenge</NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-button">Logout</button>
      </div>
    </aside>
  );
}