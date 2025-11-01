import { useState } from 'react';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);

  const save = () => {
    // placeholder for API call
    setSaved(true);
  };

  const edit = () => setSaved(false);
  const remove = () => { setEntry(''); setSaved(false); };

  return (
    <div className="page-wrap">
      <h2 className="page-title">My Journal</h2>
      <div className="grid">
        <section className="card calendar-card">
          <h3>Calendar</h3>
          <div className="calendar-placeholder">[calendar widget]</div>
        </section>

        <section className="card entry-card">
          <h3>{saved ? 'Saved Entry' : 'What are you grateful for today?'}</h3>

          {!saved ? (
            <>
              <textarea className="input-field textarea" value={entry} onChange={e => setEntry(e.target.value)} placeholder="Write your thoughts here... What brought you joy today? What are you thankful for?" />
              <div className="actions">
                <button className="button primary" onClick={save}>Save Entry</button>
                <button className="button ghost" onClick={() => setEntry('')}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <div className="saved-text">{entry || 'No content'}</div>
              <div className="actions">
                <button className="button" onClick={edit}>Edit</button>
                <button className="button danger" onClick={remove}>Delete</button>
              </div>
            </>
          )}
        </section>

        <section className="card metrics-card">
          <h3>Your Journey</h3>
          <div className="metric">Total entries: <strong>1</strong></div>
          <div className="metric">Current streak: <strong>1 day</strong></div>
        </section>
      </div>
    </div>
  );
}