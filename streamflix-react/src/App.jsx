import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<section style={{padding:'2rem'}}><h2>Page introuvable</h2></section>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
