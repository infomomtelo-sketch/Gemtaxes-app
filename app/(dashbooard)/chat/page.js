'use client'

import { useState } from 'react'
import QuestionCard from '../../../components/QuestionCard'

const questions = [
  {
    id: 'filing_status',
    title: 'How do you want to file?',
    helpText: 'This affects your tax result, credits, and which return is prepared.',
    options: [
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
  },
  {
    id: 'w2_income',
    title: 'Did you receive any W-2 forms this year?',
    helpText: 'Choose yes if you had wages from an employer.',
    options: [
      { value: 'yes', label: 'Yes', description: 'I received at least one W-2.' },
      { value: 'no', label: 'No', description: 'I did not receive a W-2.' },
      { value: 'not_sure', label: 'Not sure', description: 'I need help identifying my income form.' }
    ]
  },
  {
    id: 'has_1099',
    title: 'Did you receive any 1099 forms this year?',
    helpText: 'This includes forms like 1099-NEC, 1099-K, or other 1099 income forms.',
    options: [
      { value: 'yes', label: 'Yes', description: 'I received one or more 1099 forms.' },
      { value: 'no', label: 'No', description: 'I did not receive any 1099 forms.' },
      { value: 'not_sure', label: 'Not sure', description: 'I need help identifying my income form.' }
    ]
  }
]

export default function ChatPage() {
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [helperMode, setHelperMode] = useState('')

  const currentQuestion = questions[stepIndex]
  const isComplete = stepIndex >= questions.length

  function handleSelect(value) {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value
    }

    setAnswers(nextAnswers)
    setHelperMode('')
    setStepIndex(stepIndex + 1)
  }

  function handleCompare() {
    setHelperMode('compare')
  }

  function handleUnsure() {
    setHelperMode('unsure')
  }

  function chooseDirect(value) {
    handleSelect(value)
  }

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Chat Interview</h1>

      {!isComplete && (
        <>
          <QuestionCard
            title={currentQuestion.title}
            helpText={currentQuestion.helpText}
            options={currentQuestion.options}
            onSelect={handleSelect}
            onCompare={handleCompare}
            onUnsure={handleUnsure}
          />

          {helperMode === 'unsure' && currentQuestion.id === 'filing_status' && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                maxWidth: '760px'
              }}
            >
              <h3>Not sure which one to choose?</h3>
              <p>Married Filing Jointly means one return together.</p>
              <p>Married Filing Separately means each spouse files a separate return.</p>
              <p>Filing separately can reduce some credits and deductions.</p>
            </div>
          )}

          {helperMode === 'compare' && currentQuestion.id === 'filing_status' && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                maxWidth: '760px'
              }}
            >
              <h3>Compare these options</h3>

              <div style={{ marginBottom: '16px' }}>
                <strong>Married Filing Jointly</strong>
                <div>• One combined return</div>
                <div>• Often simpler</div>
                <div>• May allow more credits</div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <strong>Married Filing Separately</strong>
                <div>• Separate returns</div>
                <div>• Keeps tax responsibility separate</div>
                <div>• Some credits may be limited</div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => chooseDirect('married_joint')}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                    cursor: 'pointer'
                  }}
                >
                  Choose Joint
                </button>

                <button
                  onClick={() => chooseDirect('married_separate')}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                    cursor: 'pointer'
                  }}
                >
                  Choose Separate
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {isComplete && (
        <div
          style={{
            maxWidth: '760px',
            padding: '16px',
            border: '1px solid #ddd',
            borderRadius: '12px'
          }}
        >
          <h2>Interview Summary</h2>
          <p><strong>Filing status:</strong> {answers.filing_status}</p>
          <p><strong>W-2 forms:</strong> {answers.w2_income}</p>
          <p><strong>1099 forms:</strong> {answers.has_1099}</p>
        </div>
      )}
    </div>
  )
}
