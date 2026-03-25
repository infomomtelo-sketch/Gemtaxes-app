export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>GemTaxes</h1>
      <p>Your AI tax assistant is starting.</p>

      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/chat">Chat</a></li>
        <li><a href="/households">Household</a></li>
      </ul>
    </main>
  )
}
