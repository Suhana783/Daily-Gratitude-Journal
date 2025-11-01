import { useState } from 'react';

const prompts = Array.from({ length: 21 }, (_, i) => `Day ${i+1}: Prompt for day ${i+1}.`);

export default function Challenge() {
  const [completed, setCompleted] = useState([0]); // example: day 1 completed
  const current = completed.length;

  const markComplete = (day) => {
    if (day === current + 1) {
      setCompleted(prev => [...prev, day]);
    }
  };

  return (
    <div className="page-wrap">
      <h2 className="page-title">21-Day Gratitude Challenge</h2>
      <div className="card progress-card">
        <div className="progress">Progress: {current} / 21</div>
      </div>

      <div className="challenge-list">
        {prompts.map((p, idx) => {
          const day = idx + 1;
          const status = day <= current ? (day < current ? 'completed' : 'current') : 'locked';
          return (
            <div key={day} className={`challenge-card ${status}`}>
              <div className="day">Day {day}</div>
              <div className="prompt">{p}</div>
              <div className="card-actions">
                {status === 'current' && <button className="button primary" onClick={() => markComplete(day)}>Mark as Complete</button>}
                {status === 'completed' && <span className="completed-badge">✓ Completed</span>}
                {status === 'locked' && <span className="locked">🔒 Complete previous days to unlock</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}