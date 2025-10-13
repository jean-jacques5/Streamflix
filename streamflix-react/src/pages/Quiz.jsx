import React, { useMemo, useState } from 'react'
import quizQuestions from '../data/quizQuestions.js'

export default function Quiz() {
  const questions = useMemo(() => quizQuestions, [])
  const total = questions.length

  const [step, setStep] = useState('start') // 'start' | 'question' | 'result'
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null) // option string
  const [answers, setAnswers] = useState([])     // {id, question, selected, correctAnswer}

  const current = questions[index]

  const start = () => {
    setStep('question')
    setIndex(0)
    setAnswers([])
    setSelected(null)
  }

  const choose = (opt) => setSelected(opt)

  const next = () => {
    if (selected == null) return
    const entry = {
      id: current.id,
      question: current.question,
      selected,
      correctAnswer: current.correctAnswer
    }
    const nextAnswers = [...answers, entry]
    setAnswers(nextAnswers)
    setSelected(null)

    if (index + 1 < total) {
      setIndex(index + 1)
    } else {
      setStep('result')
    }
  }

  const score = answers.reduce((acc, a) => acc + (a.selected === a.correctAnswer ? 1 : 0), 0)

  return (
    <section className="quiz-wrap container">
      {step === 'start' && (
        <div className="quiz-card">
          <h1>Quiz Cinéma — Testez vos connaissances !</h1>
          <p className="muted">10 questions sur l'univers du cinéma.</p>
          <button className="btn-primary" onClick={start}>Commencer le quiz</button>
        </div>
      )}

      {step === 'question' && current && (
        <div className="quiz-card">
          <div className="quiz-progress">
            <div className="quiz-progress-bar" style={{ width: `${((index+1)/total)*100}%` }} />
          </div>
          <p className="quiz-step">Question {index + 1}/{total}</p>
          <h2 className="quiz-question">{current.question}</h2>

          <div className="quiz-options">
            {current.options.map((opt) => (
              <button
                key={opt}
                onClick={() => choose(opt)}
                className={`quiz-option ${selected === opt ? 'selected' : ''}`}
                aria-pressed={selected === opt}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="quiz-actions">
            <button
              className="btn-primary"
              onClick={next}
              disabled={selected == null}
            >
              {index + 1 === total ? 'Voir mes résultats' : 'Question suivante'}
            </button>
          </div>
        </div>
      )}

      {step === 'result' && (
        <div className="quiz-card">
          <h2>Résultats</h2>
          <p className="quiz-score">Vous avez obtenu <strong>{score}/{total}</strong> !</p>

          <p className="quiz-message">
            {score <= 3 && "Vous devriez regarder plus de films ! 🎬"}
            {score >= 4 && score <= 6 && "Pas mal ! Un vrai amateur de cinéma 🍿"}
            {score >= 7 && score <= 8 && "Excellent ! Vous êtes un cinéphile confirmé 🌟"}
            {score >= 9 && "Parfait ! Vous êtes un expert du 7ème art ! 🏆"}
          </p>

          <ul className="quiz-results">
            {answers.map((a) => {
              const ok = a.selected === a.correctAnswer
              return (
                <li key={a.id} className={`quiz-result ${ok ? 'ok' : 'ko'}`}>
                  <p className="q-text">{a.question}</p>
                  <p className="your">
                    Votre réponse : <strong>{a.selected || '—'}</strong> {ok ? '✓' : '✗'}
                  </p>
                  {!ok && (
                    <p className="correct">
                      Bonne réponse : <strong>{a.correctAnswer}</strong>
                    </p>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="quiz-actions">
            <button className="btn-secondary" onClick={() => setStep('start')}>Recommencer</button>
            <a className="btn-ghost" href="/">Retour à l'accueil</a>
          </div>
        </div>
      )}
    </section>
  )
}
