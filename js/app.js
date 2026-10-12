/**
 * app.js — CDR Software Arch Portfolio
 * Fase 1: Interacciones base del Design System
 *
 * Módulos:
 *  1. Nav: scroll spy + sticky border + mobile hamburger
 *  2. Lang Toggle: EN ↔ ES con persistencia en localStorage
 *  3. Animate on scroll: IntersectionObserver para fade-in
 *
 * Fase 2 agregará: contenido i18n completo (i18n.js)
 * Fase 3 agregará: render de diagramas Mermaid
 */

'use strict';

/* =========================================================
   1. NAV — Scroll detection & mobile menu
   ========================================================= */

(function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!nav) return;

  // Sticky border on scroll
  const onScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  // Mobile hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll spy — mark active nav link based on scroll position
  const sections = document.querySelectorAll('main section[id]');
  const navLinkItems = document.querySelectorAll('.nav__link[href^="#"]');

  if (sections.length && navLinkItems.length) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinkItems.forEach(link => {
              link.classList.toggle(
                'is-active',
                link.getAttribute('href') === `#${id}`
              );
            });
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(section => spyObserver.observe(section));
  }
})();

/* =========================================================
   2. LANG TOGGLE — EN ↔ ES
   ========================================================= */

(function initLangToggle() {
  const html = document.documentElement;
  const btnEn = document.getElementById('lang-en');
  const btnEs = document.getElementById('lang-es');

  const STORAGE_KEY = 'cdr-lang';
  const SUPPORTED = ['en', 'es'];

  // Get saved preference or default to 'en'
  const getSavedLang = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : 'en';
  };

  const setLang = (lang) => {
    if (!SUPPORTED.includes(lang)) return;

    html.setAttribute('lang', lang);
    html.setAttribute('data-lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    // Update toggle button states
    if (btnEn) {
      btnEn.classList.toggle('is-active', lang === 'en');
      btnEn.setAttribute('aria-pressed', String(lang === 'en'));
    }
    if (btnEs) {
      btnEs.classList.toggle('is-active', lang === 'es');
      btnEs.setAttribute('aria-pressed', String(lang === 'es'));
    }

    // Apply i18n translations (populated in Phase 2 via i18n.js)
    applyTranslations(lang);
  };

  const applyTranslations = (lang) => {
    if (typeof window.CDR_I18N === 'undefined') return;

    const dict = window.CDR_I18N[lang] || {};

    // 1. Standard [data-i18n] keys
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(dict, key);
      if (value) {
        if (el.children.length === 0) {
          el.textContent = value;
        } else {
          // Update text node only, preserving icons/SVGs
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
              node.textContent = value;
            }
          });
        }
      }
    });

    // 2. ADR entries [data-i18n-adr="<index>.<field>"]
    document.querySelectorAll('[data-i18n-adr]').forEach(el => {
      const [idxStr, field] = el.getAttribute('data-i18n-adr').split('.');
      const idx = parseInt(idxStr, 10);
      const item = dict.case?.adrs?.items?.[idx];
      if (item && item[field]) {
        el.textContent = item[field];
      }
    });

    // 3. Fitness function column headers [data-i18n-ff="col.<index>"]
    document.querySelectorAll('[data-i18n-ff]').forEach(el => {
      const [type, idxStr] = el.getAttribute('data-i18n-ff').split('.');
      const idx = parseInt(idxStr, 10);
      if (type === 'col' && dict.case?.fitness?.columns?.[idx]) {
        el.textContent = dict.case.fitness.columns[idx];
      }
    });

    // 4. Fitness function table rows
    const tbody = document.getElementById('fitness-table-body');
    if (tbody && dict.case?.fitness?.rows) {
      tbody.innerHTML = dict.case.fitness.rows.map(row => {
        const isPass = row[3] === 'PASS' || row[3] === 'APROBADO';
        const badgeClass = isPass ? 'badge badge--success' : 'badge badge--surface text-muted';
        return `<tr>
          <td>${row[0]}</td>
          <td class="font-mono text-sm">${row[1]}</td>
          <td class="text-muted text-sm">${row[2]}</td>
          <td><span class="${badgeClass}">${row[3]}</span></td>
        </tr>`;
      }).join('');
    }

    // 5. Dynamic lists
    const scopeList = document.getElementById('services-scope-list');
    if (scopeList && dict.services?.scope?.items) {
      scopeList.innerHTML = dict.services.scope.items.map(item => `<li>${item}</li>`).join('');
    }

    const delivList = document.getElementById('services-deliverables-list');
    if (delivList && dict.services?.deliverables?.items) {
      delivList.innerHTML = dict.services.deliverables.items.map(item => `<li>${item}</li>`).join('');
    }

    const chalList = document.getElementById('case-challenges-list');
    if (chalList && dict.case?.challenge?.items) {
      chalList.innerHTML = dict.case.challenge.items.map(item => `<li>${item}</li>`).join('');
    }

    // 6. Stack pills
    const updatePills = (id, items, accentIdx = -1) => {
      const el = document.getElementById(id);
      if (el && items) {
        el.innerHTML = items.map((item, idx) => {
          const cls = idx === accentIdx ? 'badge badge--accent' : 'badge badge--surface';
          return `<li class="${cls}">${item}</li>`;
        }).join('');
      }
    };
    updatePills('stack-arch-list', dict.stack?.groups?.architecture?.items);
    updatePills('stack-security-list', dict.stack?.groups?.security?.items);
    updatePills('stack-cloud-list', dict.stack?.groups?.cloud?.items, 0);
    updatePills('stack-cicd-list', dict.stack?.groups?.cicd?.items);
  };

  // Resolve dot-notation keys like 'nav.services'
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, key) => {
      return acc && typeof acc === 'object' ? acc[key] : undefined;
    }, obj);
  };

  // Bind toggle buttons
  if (btnEn) btnEn.addEventListener('click', () => setLang('en'));
  if (btnEs) btnEs.addEventListener('click', () => setLang('es'));

  // Initialize on load
  setLang(getSavedLang());
})();

/* =========================================================
   3. ANIMATE ON SCROLL — IntersectionObserver fade-in
   ========================================================= */

(function initAnimateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  // Skip animations if user prefers reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();
