import { useState } from 'react';
import '../styles/Challenge.css';

export default function Challenge() {
  const [currentDay, setCurrentDay] = useState(1);
  const totalDays = 21;

  const challenges = Array(totalDays).fill().map((_, i) => ({
    day: i + 1,
    completed: i < currentDay,
    locked: i > currentDay,
    prompt: `Day ${i + 1}: Write about three things that made you smile today.`
  }));

  return (
    <div className="challenge-container">
      <div className="challenge-header">
        <h1>21-Day Gratitude Challenge</h1>
        <p>Transform your mindset with 21 days of intentional gratitude ✨</p>
      </div>

      <div className="progress-card">
        <h3>Your Progress</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(currentDay / totalDays) * 100}%` }}
          ></div>
        </div>
        <p>{currentDay}/{totalDays} Days</p>
        <p className="progress-message">Keep going! You're {Math.round((currentDay / totalDays) * 100)}% of the way there.</p>
      </div>

      <div className="challenge-list">
        {challenges.map(challenge => (
          <div 
            key={challenge.day} 
            className={`challenge-item ${challenge.completed ? 'completed' : ''} ${challenge.locked ? 'locked' : ''}`}
          >
            <div className="challenge-day">Day {challenge.day}</div>
            <p className="challenge-prompt">{challenge.prompt}</p>
            {challenge.completed ? (
              <div className="status">✓ Completed</div>
            ) : challenge.locked ? (
              <div className="status">🔒 Complete previous days to unlock</div>
            ) : (
              <button className="mark-complete">Mark as Complete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}