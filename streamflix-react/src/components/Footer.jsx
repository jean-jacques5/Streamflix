import React from 'react'

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Navigation secondaire" className="container">
        <h2>Liens utiles</h2>
        <ul>
          <li><a href="#">Aide</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Conditions d'utilisation</a></li>
        </ul>
      </nav>
      <p><small>&copy; <time dateTime="2025">2025</time> StreamFlix. Tous droits réservés.</small></p>
    </footer>
  )
}
