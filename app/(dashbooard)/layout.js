'use client'

import { useState, useEffect } from 'react'

export default function DashboardLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) {
    return (
      <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid #ddd',
            background: '#fff'
          }}
        >
          <h2 style={{ margin: 0 }}>GemTaxes</h2>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid #ddd',
              background: '#fff',
              cursor: 'pointer'
            }}
          >
            Menu
          </button>
        </header>

        {menuOpen && (
          <nav
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #ddd',
              background: '#fafafa'
            }}
          >
            <div style={{ display: 'grid', gap: '12px' }}>
              <a href="/chat">Chat</a>
              <a href="/household">Household</a>
              <a href="/login">Login</a>
            </div>
          </nav>
        )}

        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <aside style={{ width: '200px', padding: '24px', borderRight: '1px solid #ddd' }}>
        <h2>GemTaxes</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="/chat">Chat</a></li>
            <li><a href="/household">Household</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '24px' }}>
        {children}
      </main>
    </div>
  )
}
