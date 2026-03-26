'use client'

import { useState } from 'react'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi. I am your GemTaxes assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')

  function handleSend() {
    if (!input.trim()) return

    setMessages([
      ...messages,
      { role: 'user', content: input },
      { role: 'assistant', content: 'Message received. GPT-5.4 will be connected here next.' }
    ])
    setInput('')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
      <h1 style={{ marginBottom: '20px' }}>Chat</h1>

      <div
        style={{
          flex: 1,
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '16px',
          overflowY: 'auto',
          background: '#fafafa',
          marginBottom: '16px'
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '12px'
            }}
          >
            <div
              style={{
                maxWidth: '70%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: message.role === 'user' ? '#111' : '#e9e9e9',
                color: message.role === 'user' ? '#fff' : '#111'
              }}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about taxes, W-2, 1099, deductions..."
          style={{
            flex: 1,
            padding: '14px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            fontSize: '16px'
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend()
          }}
        />

        <button
          onClick={handleSend}
          style={{
            padding: '14px 20px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}
