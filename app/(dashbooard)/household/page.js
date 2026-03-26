'use client'

import { useState } from 'react'

export default function HouseholdPage() {
  const [filingStatus, setFilingStatus] = useState('')
  const [primaryFirstName, setPrimaryFirstName] = useState('')
  const [primaryLastName, setPrimaryLastName] = useState('')
  const [primaryIdType, setPrimaryIdType] = useState('SSN')
  const [primaryIdLast4, setPrimaryIdLast4] = useState('')

  const [hasSpouse, setHasSpouse] = useState('no')
  const [spouseFirstName, setSpouseFirstName] = useState('')
  const [spouseLastName, setSpouseLastName] = useState('')
  const [spouseIdType, setSpouseIdType] = useState('SSN')
  const [spouseIdLast4, setSpouseIdLast4] = useState('')
  const [filingSeparately, setFilingSeparately] = useState('no')

  const [saved, setSaved] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 2000)
  }

  return (
    <div style={{ maxWidth: '760px', width: '100%' }}>
      <h1 style={{ marginBottom: '20px' }}>Household</h1>

      <form onSubmit={handleSave} style={{ display: 'grid', gap: '16px' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px' }}>
          <h3 style={{ marginTop: 0 }}>Filing Status</h3>

          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
            style={{ width: '100%', padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
          >
            <option value="">Select filing status</option>
            <option value="single">Single</option>
            <option value="married_joint">Married Filing Jointly</option>
            <option value="married_separate">Married Filing Separately</option>
            <option value="head_of_household">Head of Household</option>
          </select>
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px' }}>
          <h3 style={{ marginTop: 0 }}>Primary Taxpayer</h3>

          <div style={{ display: 'grid', gap: '12px' }}>
            <input
              type="text"
              placeholder="First name"
              value={primaryFirstName}
              onChange={(e) => setPrimaryFirstName(e.target.value)}
              style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
            />

            <input
              type="text"
              placeholder="Last name"
              value={primaryLastName}
              onChange={(e) => setPrimaryLastName(e.target.value)}
              style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
            />

            <select
              value={primaryIdType}
              onChange={(e) => setPrimaryIdType(e.target.value)}
              style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
            >
              <option value="SSN">SSN</option>
              <option value="ITIN">ITIN</option>
            </select>

            <input
              type="text"
              placeholder="Tax ID last 4"
              value={primaryIdLast4}
              onChange={(e) => setPrimaryIdLast4(e.target.value)}
              maxLength={4}
              style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
            />
          </div>
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px' }}>
          <h3 style={{ marginTop: 0 }}>Spouse</h3>

          <div style={{ display: 'grid', gap: '12px' }}>
            <label>Do you have a spouse?</label>

            <select
              value={hasSpouse}
              onChange={(e) => setHasSpouse(e.target.value)}
              style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>

            {hasSpouse === 'yes' && (
              <>
                <input
                  type="text"
                  placeholder="Spouse first name"
                  value={spouseFirstName}
                  onChange={(e) => setSpouseFirstName(e.target.value)}
                  style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
                />

                <input
                  type="text"
                  placeholder="Spouse last name"
                  value={spouseLastName}
                  onChange={(e) => setSpouseLastName(e.target.value)}
                  style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
                />

                <select
                  value={spouseIdType}
                  onChange={(e) => setSpouseIdType(e.target.value)}
                  style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
                >
                  <option value="SSN">SSN</option>
                  <option value="ITIN">ITIN</option>
                </select>

                <input
                  type="text"
                  placeholder="Spouse tax ID last 4"
                  value={spouseIdLast4}
                  onChange={(e) => setSpouseIdLast4(e.target.value)}
                  maxLength={4}
                  style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
                />

                <label>Are you filing separately from your spouse?</label>

                <select
                  value={filingSeparately}
                  onChange={(e) => setFilingSeparately(e.target.value)}
                  style={{ padding: '14px', border: '1px solid #ccc', borderRadius: '10px' }}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </>
            )}
          </div>
        </div>

        <button
          type="submit"
          style={{
            padding: '14px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            background: '#111',
            color: '#fff',
            fontWeight: '600'
          }}
        >
          Save household
        </button>

        {saved && (
          <div
            style={{
              padding: '14px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              background: '#f8f8f8'
            }}
          >
            Household saved successfully.
          </div>
        )}
      </form>
    </div>
  )
}
