'use client'

export default function QuestionCard({
  title,
  helpText,
  options,
  onSelect,
  onCompare,
  onUnsure,
}) {
  return (
    <div style={{ maxWidth: '760px' }}>
      <h2 style={{ marginBottom: '8px' }}>{title}</h2>
      {helpText && (
        <p style={{ marginBottom: '16px', color: '#555' }}>{helpText}</p>
      )}

      <div style={{ display: 'grid', gap: '12px' }}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            style={{
              textAlign: 'left',
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '12px',
              background: '#fff',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontWeight: '600', marginBottom: '4px' }}>
              {option.label}
            </div>
            {option.description && (
              <div style={{ color: '#555', fontSize: '14px' }}>
                {option.description}
              </div>
            )}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <button
          onClick={onUnsure}
          style={{
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}
        >
          I’m not sure
        </button>

        <button
          onClick={onCompare}
          style={{
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}
        >
          Compare for me
        </button>
      </div>
    </div>
  )
}
