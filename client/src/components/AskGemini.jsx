import { useState } from 'react';
import '../styles/AskGemini.css';

export default function AskGemini() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Ask Gemini</h1>
        <p>Your AI companion for gratitude, mindfulness, and reflection ✨</p>
      </div>

      <div className="chat-box">
        {messages.length === 0 ? (
          <div className="empty-state">
            <div className="gemini-icon">✨</div>
            <h3>Start a conversation</h3>
            <p>Ask me anything about gratitude, mindfulness, journaling tips, or how to make the most of your daily practice.</p>
          </div>
        ) : (
          <div className="messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about gratitude, mindfulness, or your day..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}