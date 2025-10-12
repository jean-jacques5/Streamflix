document.addEventListener('DOMContentLoaded', () => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const searchInput = $('#search-input') || $('#search');
  const footer = $('footer');
  const main = $('main');
  const filmArticles = $$('main article');

  // 1) Afficher / Masquer sections
  const filmSections = $$('main section').filter(sec => sec.querySelector('h2'));
  filmSections.forEach((section) => {
    const h2 = section.querySelector('h2');
    if (!h2) return;
    const btn = document.createElement('button');
    btn.className = 'btn-toggle-section';
    btn.type = 'button';
    btn.textContent = 'Masquer';
    h2.insertAdjacentElement('afterend', btn);

    const list = section.querySelector('[role="list"]') || section.querySelector('.cards') || h2.nextElementSibling;
    btn.addEventListener('click', () => {
      if (!list) return;
      list.classList.toggle('hidden');
      btn.textContent = list.classList.contains('hidden') ? 'Afficher' : 'Masquer';
    });
  });

  // 2) Compteur de films
  const total = filmArticles.length;
  if (footer) {
    const p = document.createElement('p');
    p.id = 'catalog-count';
    p.style.marginTop = '0.5rem';
    p.textContent = `Catalogue : ${total} film${total > 1 ? 's' : ''} disponible${total > 1 ? 's' : ''}`;
    footer.appendChild(p);
  }

  // 3) Marquer un film comme "Vu"
  filmArticles.forEach((article) => {
    article.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link) e.preventDefault(); // éviter la navigation pour la démo
      article.classList.toggle('watched');
    });
  });

  // 4) Recherche simple
  let noResultEl = $('#no-results');
  if (!noResultEl) {
    noResultEl = document.createElement('p');
    noResultEl.id = 'no-results';
    noResultEl.textContent = 'Aucun résultat';
    noResultEl.style.display = 'none';
    noResultEl.style.textAlign = 'center';
    noResultEl.style.margin = '1rem 0';
    main?.appendChild(noResultEl);
  }

  const applySearch = (term) => {
    const t = term.trim().toLowerCase();
    let visible = 0;
    filmArticles.forEach((article) => {
      const title = article.querySelector('h3')?.textContent?.toLowerCase() || '';
      const match = title.includes(t);
      article.style.display = match ? 'block' : 'none';
      if (match) visible++;
    });
    noResultEl.style.display = visible === 0 ? 'block' : 'none';
  };

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      applySearch(this.value);
    });
  }

  // 5) Modal simple
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
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  filmArticles.forEach((article) => {
    article.addEventListener('dblclick', () => {
      const title = article.querySelector('h3')?.textContent?.trim() || 'Film';
      const year = article.querySelector('dd')?.textContent?.trim() || '';
      openModal(title, year ? `<p style="opacity:.8">Année : ${year}</p>` : '');
    });
  });

  // 6) Thème sombre/clair (sans persistance)
  const headerNav = document.querySelector('header nav');
  const themeBtn = document.createElement('button');
  themeBtn.type = 'button';
  themeBtn.id = 'theme-toggle';
  themeBtn.className = 'btn-theme-toggle';
  themeBtn.textContent = 'Mode sombre';
  headerNav?.appendChild(themeBtn);

  const updateThemeBtn = () => {
    const dark = document.body.classList.contains('dark-theme');
    themeBtn.textContent = dark ? 'Mode clair' : 'Mode sombre';
  };
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    updateThemeBtn();
  });
  updateThemeBtn();
});
