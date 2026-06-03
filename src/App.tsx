import { useState } from 'react'
import './App.css'

const questions = [
  { id: 1, text: 'Do you have a bigger nose than most people you know?' },
  { id: 2, text: 'Do you find yourself haggling even when the price is already fair?' },
  { id: 3, text: 'Do you have strong opinions about the correct way to make chicken soup?' },
  { id: 4, text: 'Have you ever felt guilty about spending money on something fun?' },
  { id: 5, text: 'Do you know at least one lawyer or doctor in your family?' },
  { id: 6, text: 'Do you check the bill at a restaurant to make sure it adds up correctly?' },
  { id: 7, text: 'Have you ever loudly complained about a service and then left a tip anyway?' },
  { id: 8, text: 'Do you believe that education is the most important investment a person can make?' },
  { id: 9, text: 'Have you ever kept a plastic bag "because it might come in handy"?' },
  { id: 10, text: 'Do you feel personally responsible for things that are clearly not your fault?' },
]

type Answer = 'yes' | 'no'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [done, setDone] = useState(false)

  function handleAnswer(answer: Answer) {
    const next = [...answers, answer]
    setAnswers(next)
    if (current + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrent(current + 1)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setAnswers([])
    setDone(false)
  }

  if (done) {
    return (
      <div className="result-screen">
        <div className="result-card">
          <div className="star-of-david">✡</div>
          <h1 className="verdict">YOU ARE A JEW</h1>
          <p className="subtext">You always knew it, otherwise why would you take this test?</p>
          <button className="btn" onClick={handleRestart}>Take the test again</button>
        </div>
      </div>
    )
  }

  const q = questions[current]
  const progress = ((current) / questions.length) * 100

  return (
    <div className="quiz-screen">
      <div className="quiz-card">
        <div className="header">
          <h2 className="title">Am I a Jew?</h2>
          <span className="counter-label">{current + 1} / {questions.length}</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="question">{q.text}</p>

        <div className="btn-group">
          <button className="btn btn-yes" onClick={() => handleAnswer('yes')}>Yes</button>
          <button className="btn btn-no" onClick={() => handleAnswer('no')}>No</button>
        </div>
      </div>
    </div>
  )
}
