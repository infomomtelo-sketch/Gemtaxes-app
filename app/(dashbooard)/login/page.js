export default function LoginPage() {
  return (
    <div style={{ maxWidth: '420px' }}>
      <h1 style={{ marginBottom: '20px' }}>Login</h1>

      <div style={{ display: 'grid', gap: '12px' }}>
        <input
          type="email"
          placeholder="Email"
          style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
        />

        <button
          style={{
            padding: '14px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  )
}
