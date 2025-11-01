import { useState } from 'react';

export default function AskGemini() {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');

  const send = () => {
    if (!prompt.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', text: prompt };
    setMessages(prev => [...prev, userMsg]);
    setPrompt('');
    // placeholder bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now()+1, role: 'gemini', text: "Thanks for sharing — that's a great reflection." }]);
    }, 600);
  };

  return (
    <div className="page-wrap">
      <h2 className="page-title">Ask Gemini</h2>
      <div className="card chat-card">
        <div className="chat-window">
          {messages.length === 0 && <div className="empty-chat">Start a conversation about gratitude, mindfulness, or your day.</div>}
          {messages.map(m => (
            <div key={m.id} className={m.role === 'user' ? 'chat-bubble user' : 'chat-bubble gemini'}>
              {m.role === 'gemini' && <span className="gemini-mark">🌟</span>}
              <div>{m.text}</div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input className="input-field" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ask me anything about gratitude, mindfulness, or your day..." />
          <button className="button primary" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  );
}