// =====================================================
// J4 - StreamFlix : premiers pas en JavaScript
// Exercices 1 à 6 implémentés proprement
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------
  // Helpers
  // ---------------------------------------------------
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Récupère l'input de recherche (id #search du sujet, sinon #search-input de ton header)
  const searchInput = $('#search') || $('#search-input');

  // Toutes les cartes films (évite le hero)
  const filmArticles = $$('main article');

  // ---------------------------------------------------
  // Exercice 1 : Afficher / masquer des sections
  // ---------------------------------------------------
  // On cible les sections de films (celles qui ont un h2)
  const filmSections = $$('main section').filter(sec => sec.querySelector('h2'));

  filmSections.forEach((section) => {
    const h2 = section.querySelector('h2');
    if (!h2) return;

    // Création du bouton
    const btn = document.createElement('button');
    btn.className = 'btn-toggle-section';
    btn.type = 'button';
    btn.textContent = 'Masquer';

    // Insertion juste après le H2
    h2.insertAdjacentElement('afterend', btn);

    // Trouver le conteneur à cacher (la grille / liste) :
    // priorité: [role="list"], sinon .cards, sinon tout sauf h2 et le bouton.
    const list =
      section.querySelector('[role="list"]') ||
      section.querySelector('.cards') ||
      h2.nextElementSibling;

    btn.addEventListener('click', () => {
      if (!list) return;
      list.classList.toggle('hidden');
      btn.textContent = list.classList.contains('hidden') ? 'Afficher' : 'Masquer';
    });
  });

  // ---------------------------------------------------
  // Exercice 2 : Compteur de films
  // ---------------------------------------------------
  const totalFilms = filmArticles.length;
  const footer = document.querySelector('footer');
  if (footer) {
    const p = document.createElement('p');
    p.id = 'catalog-count';
    p.style.marginTop = '0.5rem';
    p.textContent = `Catalogue : ${totalFilms} film${totalFilms > 1 ? 's' : ''} disponible${totalFilms > 1 ? 's' : ''}`;
    footer.appendChild(p);
  }

  // ---------------------------------------------------
  // Exercice 3 : Marquer un film comme "Vu"
  // ---------------------------------------------------
  // Au clic sur une carte, on toggle .watched
  filmArticles.forEach((article) => {
    article.addEventListener('click', (e) => {
      // Si on clique un lien à l'intérieur, on empêche la nav pour la démo
      const link = e.target.closest('a');
      if (link) e.preventDefault();

      article.classList.toggle('watched');
    });
  });

  // ---------------------------------------------------
  // Exercice 4 : Recherche simple
  // ---------------------------------------------------
  // Crée / récupère un message "Aucun résultat"
  let noResultEl = $('#no-results');
  if (!noResultEl) {
    noResultEl = document.createElement('p');
    noResultEl.id = 'no-results';
    noResultEl.textContent = 'Aucun résultat';
    noResultEl.style.display = 'none';
    noResultEl.style.textAlign = 'center';
    noResultEl.style.margin = '1rem 0';
    $('main')?.appendChild(noResultEl);
  }

  const applySearch = (term) => {
    const searchTerm = term.trim().toLowerCase();
    let visibleCount = 0;

    filmArticles.forEach((article) => {
      const titleEl = article.querySelector('h3');
      const title = (titleEl?.textContent || '').toLowerCase();

      const match = title.includes(searchTerm);
      article.style.display = match ? 'block' : 'none';
      if (match) visibleCount += 1;
    });

    noResultEl.style.display = visibleCount === 0 ? 'block' : 'none';
  };

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      applySearch(this.value);
    });
  }

  // ---------------------------------------------------
  // Exercice 5 : Modal simple
  // ---------------------------------------------------
  // On crée la modal via JS pour éviter de modifier le HTML
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" aria-label="Fermer la fenêtre">&times;</span>
      <div id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalBody = $('#modal-body', modal);
  const modalClose = $('.close', modal);

  function openModal(title, metaHTML = '') {
    modalBody.innerHTML = `<h2 style="margin-bottom:.75rem;">${title}</h2>${metaHTML}`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // évite le scroll sous la modal
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(); // clic en dehors du contenu
  });

  // Ouvrir la modal au clic sur une carte (en plus du toggle .watched déjà mis)
  filmArticles.forEach((article) => {
    article.addEventListener('dblclick', (e) => {
      // double-clic = ouvrir modal (pour éviter conflit avec watched)
      const title = article.querySelector('h3')?.textContent?.trim() || 'Film';
      const year = article.querySelector('dd')?.textContent?.trim() || '';
      openModal(title, year ? `<p style="opacity:.8">Année : ${year}</p>` : '');
    });
  });

  // ---------------------------------------------------
  // Exercice 6 (bonus) : Changement de thème
  // ---------------------------------------------------
  // On essaie d'ajouter le bouton dans le header nav
  const headerNav = document.querySelector('header nav');
  const themeBtn = document.createElement('button');
  themeBtn.type = 'button';
  themeBtn.id = 'theme-toggle';
  themeBtn.className = 'btn-theme-toggle';
  themeBtn.textContent = 'Mode clair';
  headerNav?.appendChild(themeBtn);

  const updateThemeBtn = () => {
    const dark = document.body.classList.contains('dark-theme');
    themeBtn.textContent = dark ? 'Mode clair' : 'Mode sombre';
  };

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    updateThemeBtn();
  });

  // Init label
  updateThemeBtn();
});
