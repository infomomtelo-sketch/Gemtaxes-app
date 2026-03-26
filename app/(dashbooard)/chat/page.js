'use client'

import { useState } from 'react'
import QuestionCard from '../../../components/QuestionCard'

const filingStatusOptions = [
  {
    value: 'single',
    label: 'Single',
    description: 'Use this if you are not married for tax filing purposes.'
  },
  {
    value: 'married_joint',
    label: 'Married Filing Jointly',
    description: 'One return together with your spouse. Often simpler for married couples.'
  },
  {
    value: 'married_separate',
    label: 'Married Filing Separately',
    description: 'Separate returns. Sometimes used to keep finances or tax responsibility separate.'
  },
  {
    value: 'head_of_household',
    label: 'Head of Household',
    description: 'May apply if you paid most household costs and meet IRS qualifying rules.'
  }
]

export default function ChatPage() {
  const [selectedAnswer, setSelectedAnswer] = useState('')

  function handleSelect(value) {
    setSelectedAnswer(value)
  }

  function handleCompare() {
    alert('Compare flow will be added next.')
  }

  function handleUnsure() {
    alert('Guided help flow will be added next.')
  }

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Chat Interview</h1>

      <QuestionCard
        title="How do you want to file?"
        helpText="This affects your tax result, credits, and which return is prepared."
        options={filingStatusOptions}
        onSelect={handleSelect}
        onCompare={handleCompare}
        onUnsure={handleUnsure}
      />

      {selectedAnswer && (
        <div style={{ marginTop: '20px', padding: '16px', border: '1px solid #ddd', borderRadius: '12px' }}>
          <strong>Selected:</strong> {selectedAnswer}
        </div>
      )}
    </div>
  )
}
