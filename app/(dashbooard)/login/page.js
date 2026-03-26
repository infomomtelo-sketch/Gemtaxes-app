'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [step, setStep] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    setStep('verify-email')
  }

  function handleEmailVerified() {
    setStep('two-factor')
  }

  function handleVerifyCode(e) {
    e.preventDefault()
    setStep('success')
  }

  return (
    <div style={{ maxWidth: '460px', width: '100%' }}>
  <h1 style={{ marginBottom: '20px' }}>Login</h1>

      {step === 'login' && (
        <form onSubmit={handleLogin} style={{ display: 'grid', gap: '12px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
          />

         <button
  type="submit"
  style={{
    padding: '14px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    background: '#111',
    color: '#fff',
    fontWeight: '600',
    width: '100%'
  }}
>
  Sign in
</button>
          <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
            <a href="/forgot-password">Forgot password?</a>
            <a href="/forgot-username">Forgot username?</a>
            <a href="/create-account">Create account</a>
          </div>
        </form>
      )}

      {step === 'verify-email' && (
        <div style={{ display: 'grid', gap: '12px' }}>
          <div
            style={{
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '12px'
            }}
          >
            <h3>Verify your email</h3>
            <p>We sent a verification email to:</p>
            <p><strong>{email || 'your email address'}</strong></p>
            <p>Please verify your email before continuing.</p>
          </div>

          <button
            onClick={handleEmailVerified}
            style={{
              padding: '14px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            I verified my email
          </button>

          <button
            style={{
              padding: '14px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              cursor: 'pointer',
              background: '#fff'
            }}
          >
            Resend verification email
          </button>
        </div>
      )}

      {step === 'two-factor' && (
        <form onSubmit={handleVerifyCode} style={{ display: 'grid', gap: '12px' }}>
          <div
            style={{
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '12px'
            }}
          >
            <h3>Enter your 2-factor code</h3>
            <p>We sent a security code to your verified email.</p>
          </div>

          <input
            type="text"
            placeholder="Enter 6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
          />

          <button
            type="submit"
            style={{
              padding: '14px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            Verify code
          </button>

          <button
            type="button"
            style={{
              padding: '14px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              cursor: 'pointer',
              background: '#fff'
            }}
          >
            Resend code
          </button>
        </form>
      )}

      {step === 'success' && (
        <div
          style={{
            padding: '16px',
            border: '1px solid #ddd',
            borderRadius: '12px'
          }}
        >
          <h3>Login complete</h3>
          <p>Your email and 2-factor code were verified.</p>
          <p>You can now access your GemTaxes account.</p>
        </div>
      )}
    </div>
  )
}
