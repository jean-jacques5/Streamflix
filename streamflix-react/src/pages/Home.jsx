import React from 'react'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" aria-describedby="hero-desc">
        <img src="/images/hero-bg.jpg" alt="" />
        <div>
          <h1 id="hero-title">Inception</h1>
          <p id="hero-desc">
            Un voleur qui s'infiltre dans les rêves des autres pour voler leurs secrets découvre qu'il doit réaliser l'impossible : planter une idée plutôt que de la voler.
          </p>

          <dl>
            <dt>Année</dt><dd><time dateTime="2010">2010</time></dd>
            <dt>Durée</dt><dd><time dateTime="PT2H28M">2h28</time></dd>
            <dt>Note</dt><dd><meter min="0" max="5" value="4.5" aria-label="Note 4,5 sur 5">4.5/5</meter></dd>
            <dt>Genres</dt><dd>Sci-Fi, Thriller</dd>
          </dl>

          <div role="group" aria-label="Actions du film">
            <button type="button">Lecture</button>
            <button type="button">Plus d'infos</button>
            <button type="button" aria-pressed="false">Ma Liste</button>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section aria-labelledby="tendances-heading">
        <h2 id="tendances-heading">Tendances actuelles</h2>
        <ul className="cards">
          <li>
            <article aria-labelledby="dk-title">
              <a href="#">
                <img src="/images/films/dark-knight.jpg" alt="Affiche du film The Dark Knight" />
                <h3 id="dk-title">The Dark Knight</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="2008">2008</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.8">4.8/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H32M">2h32</time></dd>
                <dt>Genres</dt><dd>Action, Crime, Drama</dd>
              </dl>
            </article>
          </li>
          <li>
            <article aria-labelledby="interstellar-title">
              <a href="#">
                <img src="/images/films/interstellar.jpg" alt="Affiche du film Interstellar" />
                <h3 id="interstellar-title">Interstellar</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="2014">2014</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.7">4.7/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H49M">2h49</time></dd>
                <dt>Genres</dt><dd>Sci-Fi, Drama</dd>
              </dl>
            </article>
          </li>
          <li>
            <article aria-labelledby="pf-title">
              <a href="#">
                <img src="/images/films/pulp-fiction.jpg" alt="Affiche du film Pulp Fiction" />
                <h3 id="pf-title">Pulp Fiction</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="1994">1994</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.6">4.6/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H34M">2h34</time></dd>
                <dt>Genres</dt><dd>Crime, Drama</dd>
              </dl>
            </article>
          </li>
        </ul>
      </section>

      <section aria-labelledby="recommandes-heading">
        <h2 id="recommandes-heading">Recommandés pour vous</h2>
        <ul className="cards">
          <li>
            <article aria-labelledby="inception-card-title">
              <a href="#">
                <img src="/images/films/inception.jpg" alt="Affiche du film Inception" />
                <h3 id="inception-card-title">Inception</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="2010">2010</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.5">4.5/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H28M">2h28</time></dd>
                <dt>Genres</dt><dd>Sci-Fi, Thriller</dd>
              </dl>
            </article>
          </li>
          <li>
            <article aria-labelledby="matrix-title">
              <a href="#">
                <img src="/images/films/matrix.jpg" alt="Affiche du film The Matrix" />
                <h3 id="matrix-title">The Matrix</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="1999">1999</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.5">4.5/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H16M">2h16</time></dd>
                <dt>Genres</dt><dd>Action, Sci-Fi</dd>
              </dl>
            </article>
          </li>
          <li>
            <article aria-labelledby="fg-title">
              <a href="#">
                <img src="/images/films/forrest-gump.jpg" alt="Affiche du film Forrest Gump" />
                <h3 id="fg-title">Forrest Gump</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="1994">1994</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.4">4.4/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H22M">2h22</time></dd>
                <dt>Genres</dt><dd>Drama, Romance</dd>
              </dl>
            </article>
          </li>
        </ul>
      </section>

      <section aria-labelledby="nouveautes-heading">
        <h2 id="nouveautes-heading">Nouveautés</h2>
        <ul className="cards">
          <li>
            <article aria-labelledby="interstellar-new-title">
              <a href="#">
                <img src="/images/films/interstellar.jpg" alt="Affiche du film Interstellar" />
                <h3 id="interstellar-new-title">Interstellar</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="2014">2014</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.7">4.7/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H49M">2h49</time></dd>
                <dt>Genres</dt><dd>Sci-Fi, Drama</dd>
              </dl>
            </article>
          </li>
          <li>
            <article aria-labelledby="dk-new-title">
              <a href="#">
                <img src="/images/films/dark-knight.jpg" alt="Affiche du film The Dark Knight" />
                <h3 id="dk-new-title">The Dark Knight</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="2008">2008</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.8">4.8/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H32M">2h32</time></dd>
                <dt>Genres</dt><dd>Action, Crime, Drama</dd>
              </dl>
            </article>
          </li>
          <li>
            <article aria-labelledby="inception-new-title">
              <a href="#">
                <img src="/images/films/inception.jpg" alt="Affiche du film Inception" />
                <h3 id="inception-new-title">Inception</h3>
              </a>
              <dl>
                <dt>Année</dt><dd><time dateTime="2010">2010</time></dd>
                <dt>Note</dt><dd><meter min="0" max="5" value="4.5">4.5/5</meter></dd>
                <dt>Durée</dt><dd><time dateTime="PT2H28M">2h28</time></dd>
                <dt>Genres</dt><dd>Sci-Fi, Thriller</dd>
              </dl>
            </article>
          </li>
        </ul>
      </section>

      <section id="ma-liste" className="grid-section" aria-labelledby="list-title">
        <h2 id="list-title">Ma liste</h2>
        <p>Connectez-vous pour retrouver vos favoris ici.</p>
      </section>

      <section id="inscription" aria-labelledby="inscription-title">
        <h2 id="inscription-title">Créer un compte</h2>
        <form action="#" method="post" noValidate>
          <div>
            <label htmlFor="name">Nom complet</label>
            <input id="name" name="name" type="text" required minLength={2} placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="jane@example.com" />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input id="password" name="password" type="password" required minLength={8} placeholder="8 caractères minimum" />
          </div>
          <div>
            <label htmlFor="password2">Confirmer le mot de passe</label>
            <input id="password2" name="password2" type="password" required minLength={8} placeholder="Répétez le mot de passe" />
          </div>
          <div>
            <input id="cgu" name="cgu" type="checkbox" required />
            <label htmlFor="cgu">J'accepte les <a href="#" id="contact">conditions d'utilisation</a>.</label>
          </div>
          <button type="submit" className="btn-primary">S'inscrire</button>
        </form>
      </section>
    </>
  )
}
