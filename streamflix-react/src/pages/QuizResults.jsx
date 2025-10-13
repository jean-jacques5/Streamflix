function scoreMessage(score){
  if (score <= 3) return "Vous devriez regarder plus de films ! 🎬"
  if (score <= 6) return "Pas mal ! Un vrai amateur de cinéma 🍿"
  if (score <= 8) return "Excellent ! Vous êtes un cinéphile confirmé 🌟"
  return "Parfait ! Vous êtes un expert du 7ème art ! 🏆"
}

export default function QuizResults({ questions, answers, onRestart }) {
  const total = questions.length
  const corrects = answers.filter(a => a && a.selected === a.correctAnswer).length

  return (
    <div className="quiz-results">
      <h2>Vous avez obtenu {corrects}/{total} !</h2>
      <p className="message">{scoreMessage(corrects)}</p>

      <ol className="results-list">
        {questions.map((q, idx) => {
          const a = answers[idx]
          const isCorrect = a?.selected === q.correctAnswer
          return (
            <li key={q.id} className={`result-item ${isCorrect ? 'ok' : 'ko'}`}>
              <p className="q">{q.question}</p>
              <p className="your">
                Votre réponse : <strong>{a?.selected ?? '—'}</strong> {isCorrect ? '✓' : '✗'}
              </p>
              {!isCorrect && (
                <p className="good">Bonne réponse : <strong>{q.correctAnswer}</strong></p>
              )}
            </li>
          )
        })}
      </ol>

      <div className="quiz-actions">
        <button className="btn-restart" onClick={onRestart}>Recommencer le quiz</button>
        <a className="btn-home" href="/">Retour à l'accueil</a>
      </div>
    </div>
  )
}
