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
    ],
    unsureText: [
      'Single is usually for someone who is not married for tax filing purposes.',
      'Married Filing Jointly means one return together with your spouse.',
      'Married Filing Separately means each spouse files a separate return.',
      'Head of Household may apply in special household support situations.'
    ],
    compareTitle: 'Compare filing status options',
    compareItems: [
      {
        title: 'Married Filing Jointly',
        points: ['One combined return', 'Often simpler', 'May allow more credits']
      },
      {
        title: 'Married Filing Separately',
        points: ['Separate returns', 'Keeps tax responsibility separate', 'Some credits may be limited']
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
    ],
    unsureText: [
      'A W-2 usually comes from an employer who paid you wages.',
      'It often shows wages, federal tax withheld, and Social Security and Medicare amounts.',
      'If you worked as an employee, you likely received a W-2.'
    ],
    compareTitle: 'Compare common work income types',
    compareItems: [
      {
        title: 'W-2',
        points: ['Employee income', 'Taxes often withheld already', 'Usually from an employer']
      },
      {
        title: '1099',
        points: ['Independent contractor or other non-wage income', 'Taxes may not be withheld', 'Often from gigs or client work']
      }
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
    ],
    unsureText: [
      'A 1099 is often used for contractor, gig, payment app, or other non-wage income.',
      'If you were not treated as an employee, you may have received a 1099 instead of a W-2.',
      'Some users receive both W-2 and 1099 forms in the same year.'
    ],
    compareTitle: 'Compare W-2 and 1099',
    compareItems: [
      {
        title: 'W-2',
        points: ['Employee', 'Employer usually withholds taxes', 'Payroll-style income']
      },
      {
        title: '1099',
        points: ['Independent work or other payments', 'May require tracking your own taxes', 'Common for gigs and side work']
      }
    ]
  }
]

function formatAnswer(questionId, value) {
  const labels = {
    filing_status: {
      single: 'Single',
      married_joint: 'Married Filing Jointly',
      married_separate: 'Married Filing Separately',
      head_of_household: 'Head of Household',
      skipped: 'Skipped'
    },
    w2_income: {
      yes: 'Yes',
      no: 'No',
      not_sure: 'Not sure',
      skipped: 'Skipped'
    },
    has_1099: {
      yes: 'Yes',
      no: 'No',
      not_sure: 'Not sure',
      skipped: 'Skipped'
    }
  }

  return labels[questionId]?.[value] || value
}

export default function ChatPage() {
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [helperMode, setHelperMode] = useState('')

  const currentQuestion = questions[stepIndex]
  const isComplete = stepIndex >= questions.length

  function handleSelect(value) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value
    }))
    setHelperMode('')
    setStepIndex((prev) => prev + 1)
  }

  function handleCompare() {
    setHelperMode('compare')
  }

  function handleUnsure() {
    setHelperMode('unsure')
  }

  function handleBack() {
    if (stepIndex === 0) return
    setHelperMode('')
    setStepIndex((prev) => prev - 1)
  }

  function handleSkip() {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: 'skipped'
    }))
    setHelperMode('')
    setStepIndex((prev) => prev + 1)
  }

  function chooseDirect(value) {
    handleSelect(value)
  }

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Chat Interview</h1>

      {!isComplete && (
        <>
          <div style={{ marginBottom: '12px', color: '#555' }}>
            Question {stepIndex + 1} of {questions.length}
          </div>

          <QuestionCard
            title={currentQuestion.title}
            helpText={currentQuestion.helpText}
            options={currentQuestion.options}
            onSelect={handleSelect}
            onCompare={handleCompare}
            onUnsure={handleUnsure}
          />

          <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={handleBack}
              disabled={stepIndex === 0}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid #ddd',
                cursor: stepIndex === 0 ? 'not-allowed' : 'pointer',
                opacity: stepIndex === 0 ? 0.5 : 1
              }}
            >
              Back
            </button>

            <button
              onClick={handleSkip}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid #ddd',
                cursor: 'pointer'
              }}
            >
              Skip
            </button>
          </div>

          {helperMode === 'unsure' && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                maxWidth: '760px'
              }}
            >
              <h3>Not sure?</h3>
              {currentQuestion.unsureText?.map((line, index) => (
                <p key={index} style={{ marginBottom: '8px' }}>{line}</p>
              ))}
            </div>
          )}

          {helperMode === 'compare' && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                maxWidth: '760px'
              }}
            >
              <h3>{currentQuestion.compareTitle}</h3>

              {currentQuestion.compareItems?.map((item) => (
                <div key={item.title} style={{ marginBottom: '16px' }}>
                  <strong>{item.title}</strong>
                  {item.points.map((point, index) => (
                    <div key={index}>• {point}</div>
                  ))}
                </div>
              ))}

              {currentQuestion.id === 'filing_status' && (
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
              )}
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
          <p><strong>Filing status:</strong> {formatAnswer('filing_status', answers.filing_status)}</p>
          <p><strong>W-2 forms:</strong> {formatAnswer('w2_income', answers.w2_income)}</p>
          <p><strong>1099 forms:</strong> {formatAnswer('has_1099', answers.has_1099)}</p>

          <button
            onClick={() => {
              setAnswers({})
              setHelperMode('')
              setStepIndex(0)
            }}
            style={{
              marginTop: '16px',
              padding: '12px 16px',
              borderRadius: '10px',
              border: '1px solid #ddd',
              cursor: 'pointer'
            }}
          >
            Start over
          </button>
        </div>
      )}
    </div>
  )
}
