export default function QuizPlay({ questions, currentIndex, selected, onSelect, onNext }) {
  const q = questions[currentIndex]
  const progressText = `Question ${currentIndex + 1}/${questions.length}`
  const canNext = selected !== null && selected !== undefined

  return (
    <div className="quiz-play">
      <div className="quiz-header">
        <h2 className="quiz-question">{q.question}</h2>
        <div className="quiz-progress">
          <span>{progressText}</span>
          <div className="bar">
            <div
              className="bar-fill"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="quiz-options" role="group" aria-label="Réponses possibles">
        {q.options.map((opt) => {
          const active = selected === opt ? 'active' : ''
          return (
            <button
              key={opt}
              className={`option ${active}`}
              onClick={() => onSelect(opt)}
            >
              {opt}
            </button>
          )
        })}
      </div>

      <div className="quiz-actions">
        <button className="btn-next" onClick={onNext} disabled={!canNext}>
          {currentIndex === questions.length - 1 ? 'Voir mes résultats' : 'Question suivante'}
        </button>
      </div>
    </div>
  )
}
