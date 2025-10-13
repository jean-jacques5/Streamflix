import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav aria-label="Navigation principale" className="container">
        <NavLink to="/" aria-label="Retour à l'accueil StreamFlix" className="brand">
          <img src="/images/logo.png" alt="StreamFlix" height="40" />
        </NavLink>

        <ul className="main-menu">
          <li><NavLink to="/" end>Accueil</NavLink></li>
          <li><a href="#tendances-heading">Films</a></li>
          <li><a href="#recommandes-heading">Séries</a></li>
          <li><a href="#ma-liste">Ma Liste</a></li>
          <li><NavLink to="/quiz">Quiz Cinéma</NavLink></li>
        </ul>

        <form action="/recherche" method="get" role="search" aria-label="Recherche de contenus" className="header-search">
          <label htmlFor="search-input">Rechercher un film ou une série</label>
          <input id="search-input" name="q" type="search" placeholder="Rechercher..." minLength={2} required />
          <button type="submit">Rechercher</button>
        </form>

        <details className="profile-menu">
          <summary>Profil</summary>
          <nav aria-label="Menu du profil">
            <ul>
              <li><a href="#inscription">S'inscrire / Se connecter</a></li>
              <li><a href="#ma-liste">Ma liste</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </details>
      </nav>
    </header>
  )
}
