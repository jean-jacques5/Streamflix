export default function QuizStart({ onStart }) {
  return (
    <div className="quiz-start">
      <h1 id="quiz-title">Quiz Cinéma - Testez vos connaissances !</h1>
      <p className="subtitle">10 questions sur l'univers du cinéma</p>
      <p className="desc">Répondez aux 10 questions, vous ne pouvez pas revenir en arrière. Bonne chance 🎬</p>
      <button className="btn-start" onClick={onStart}>Commencer le quiz</button>
    </div>
  )
}
