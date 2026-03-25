export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <aside style={{ width: '240px', padding: '24px', borderRight: '1px solid #ddd' }}>
        <h2>GemTaxes</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="/chat">Chat</a></li>
            <li><a href="/household">Household</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
  

      <main style={{ flex: 1, padding: '32px' }}>
        {children}
      </main>
    </div>
  )
}
