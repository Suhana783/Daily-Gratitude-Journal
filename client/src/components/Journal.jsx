import { useState } from 'react';
import Calendar from './Calendar';
import '../styles/Journal.css';

export default function Journal() {
  const [entry, setEntry] = useState('');
  
  return (
    <div className="journal-container">
      <div className="journal-header">
        <span className="sparkle">✨</span>
        <h1>My Journal</h1>
        <p>Take a moment each day to reflect on what you're grateful for ✨</p>
      </div>

      <div className="journal-content">
        <section className="calendar-box">
          <Calendar />
        </section>

        <section className="entry-box">
          <h3>What are you grateful for today? 💝</h3>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write your thoughts here... What brought you joy today? What are you thankful for?"
          />
          <div className="entry-actions">
            <button className="save-button">Save Entry</button>
          </div>
        </section>

        <section className="journey-box">
          <h3>Your Journey</h3>
          <div className="stats-container">
            <div className="stat">
              <span>Total entries:</span>
              <span className="stat-value">1</span>
            </div>
            <div className="stat">
              <span>Current streak:</span>
              <span className="stat-value">1 days</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}