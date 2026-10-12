Construye mi portafolio profesional como sitio estático para GitHub Pages
(repo CDROBAYOM.github.io). Usa el skill frontend-design.

CONTEXTO
- Soy David Robayo, arquitecto de software con 8+ años en el sector
  financiero colombiano. Marca: "CDR Software Arch".
- Audiencia: CTOs y VPs de fintech y sectores regulados en LATAM, que deben
  decidir si me contratan para una auditoría o consultoría de arquitectura.
- Servicio de entrada: "Architecture Health Check".
- Idioma: inglés como principal, con toggle a español.

TONO Y ESTÉTICA
- Sobrio, técnico, de confianza; editorial y limpio, no "developer genérico".
- Nada de degradados morados ni plantillas reconocibles.
- Elige una dirección estética concreta y justifícala en 3 líneas antes de
  escribir código.

SECCIONES
1. Hero: propuesta de valor en una frase + CTA a agendar/contactar.
2. Servicios: Architecture Health Check (alcance, entregables, duración).
3. Caso destacado: ops-report-ai (cooperativa ficticia CoopNorte), con
   decisiones arquitectónicas (ADRs), diagramas C4 y fitness functions.
   Deja placeholders claros donde falte contenido.
4. Stack y experiencia: hexagonal, microservicios, seguridad (OIDC/PKCE, BFF),
   multi-cloud GCP/AWS, gobierno CI/CD. GCP Professional Cloud Architect.
5. Contacto: LinkedIn, GitHub, email.

RESTRICCIONES TÉCNICAS
- HTML/CSS/JS estático (o Astro si aporta valor), sin backend, despliegue
  directo a GitHub Pages con GitHub Actions.
- Responsive, accesible (contraste AA), Lighthouse > 90, SEO básico y Open Graph.
- Diagramas en Mermaid o SVG inline.
- No menciones a mi empleador actual ni uses datos de clientes reales:
  solo proyectos propios y ficticios.

PROCESO
Primero muestra el plan (dirección estética, tokens de diseño, estructura de
páginas). Espera mi aprobación y luego implementa.

---

## 7. PROPUESTA DE DISEÑO DETALLADA (PARA VALIDACIÓN)

### 7.1 Dirección Estética: "Technical Editorial"
- **Justificación:** Inspirada en publicaciones técnicas de alto rigor y confianza (como *ACM Queue* o *MIT Technology Review*), balanceando el perfil de un arquitecto para banca y sectores regulados: tipografía serif editorial para titulares y autoridad de marca, fondo casi-negro de tinta profunda (*deep ink*), y un acento en ámbar dorado/bronce que remite a instrumentación y precisión sin caer en los clichés de degradados de startups genéricas ni el clásico azul financiero tradicional.
- **Atmósfera visual:** Alto contraste legible (WCAG AA/AAA), estructura modular limpia, cuadrícula precisa, microinteracciones sobrias y diagramas técnicos claros (C4 / Mermaid / SVG).

---

### 7.2 Tokens de Diseño

#### Paleta de Color
- `--color-bg`: `#0C0D0F` (Fondo principal, tono carbón/tinta profunda)
- `--color-surface`: `#141619` (Superficie de tarjetas y contenedores)
- `--color-surface-elevated`: `#1C1F23` (Tarjetas destacadas o estados elevados)
- `--color-border`: `#26292D` (Bordes estructurales tenues)
- `--color-border-hover`: `#3E434A` (Bordes al interactuar)
- `--color-accent`: `#D4A346` (Acento ámbar/dorado de precisión técnica)
- `--color-accent-hover`: `#E5B75A` (Hover de llamadas a la acción)
- `--color-accent-muted`: `rgba(212, 163, 70, 0.12)` (Píldoras y resaltados tenues)
- `--color-text-primary`: `#F2EFE9` (Blanco cálido de alta legibilidad)
- `--color-text-secondary`: `#9CA3AF` (Gris medio neutro para descripciones y metadatos)
- `--color-text-muted`: `#525866` (Gris tenue para notas secundarias y placeholders)
- `--color-success`: `#34D399` (Indicadores de estado / Fitness Functions)

#### Tipografía
- **Titulares y Marca (`--font-display`):** `DM Serif Display`, serif (peso y autoridad editorial).
- **Cuerpo y UI (`--font-body`):** `Inter`, sans-serif (máxima neutralidad y legibilidad en pantallas).
- **Código y Métricas (`--font-mono`):** `JetBrains Mono`, monospace (ADRs, payloads, fitness functions y C4).

#### Espaciado, Bordes y Layout
- `--space-unit`: `8px` (Escala armónica: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px).
- `--radius-sm`: `4px`
- `--radius-md`: `8px`
- `--radius-lg`: `12px`
- `--max-width`: `1120px` (Centrado con gutters fluidos de 24px).

---

### 7.3 Arquitectura de la Información y Secciones

```
+--------------------------------------------------------------------------+
| Header / Nav: Marca [CDR Software Arch] | Enlaces | Toggle EN/ES | CTA    |
+--------------------------------------------------------------------------+
| 1. Hero: Propuesta de valor en una frase | Badges clave | CTAs duales     |
+--------------------------------------------------------------------------+
| 2. Servicio de Entrada: "Architecture Health Check"                     |
|    - Alcance (3 áreas críticas)                                          |
|    - Entregables tangibles (Executive & Tech Deck, Risk Matrix, Roadmap) |
|    - Modalidad / Duración (2-3 semanas) | CTA a agendar sesión exploratoria|
+--------------------------------------------------------------------------+
| 3. Caso Destacado: "ops-report-ai" (Caso de Estudio CoopNorte)          |
|    - Contexto de negocio y desafío de gobernanza/cumplimiento           |
|    - Arquitectura C4 (Diagrama Container / Component)                    |
|    - ADRs (Decision Records: Hexagonal, BFF, OIDC/PKCE)                  |
|    - Fitness Functions de arquitectura (latencia, acoplamiento, scans)   |
|    - Placeholders estructurados para profundización técnica              |
+--------------------------------------------------------------------------+
| 4. Stack Técnico & Gobernanza                                            |
|    - Especialidades: Hexagonal, Microservicios, Seguridad FinTech        |
|    - Multi-Cloud: GCP (Cloud Architect Certified) & AWS                 |
|    - Gobernanza CI/CD y automatización de políticas                      |
+--------------------------------------------------------------------------+
| 5. Contacto & Canales Directos                                           |
|    - Formato de contacto directo (Email, LinkedIn, GitHub)              |
|    - Enlace a reunión exploratoria (Calendar/Mailto directo)             |
+--------------------------------------------------------------------------+
| Footer: Credenciales, versión, año y nota de confidencialidad           |
+--------------------------------------------------------------------------+
```

---

### 7.4 Estructura Técnica de Archivos

Implementación estática nativa (sin dependencias de empaquetado complejas para compatibilidad absoluta con GitHub Pages):
```
cdrobayom.github.io/
├── index.html               # Markup semántico estructurado, accesible y bilingüe
├── css/
│   ├── reset.css            # Normalización y base
│   ├── tokens.css           # Custom properties de diseño
│   └── style.css            # Componentes, layout responsivo y estados
├── js/
│   ├── i18n.js              # Diccionario bilingüe (EN principal / ES alternativo)
│   └── app.js               # Toggle de idioma, interacciones y render de diagramas
├── assets/
│   ├── icons/               # SVGs inline/reutilizables para stack y marcas
│   └── diagrams/            # Diagramas C4 en SVG/Mermaid
├── docs/
│   └── design-plan.md       # Este documento con especificaciones y validación
└── .github/
    └── workflows/
        └── deploy.yml       # Automatización de GitHub Pages
```

---

### 7.5 Plan de Implementación por Fases (Documentado para Trazabilidad)

1. **Fase 1: Fundación y Tokens (Design System Base)** ✅ COMPLETADA — 2026-10-12
   - ✅ `css/reset.css` — Modern opinionated reset (Andy Bell base), `prefers-reduced-motion`, `.sr-only`.
   - ✅ `css/tokens.css` — Todos los design tokens: colores, tipografía fluida (clamp), espaciado, radios, sombras, z-index, transitions.
   - ✅ `css/style.css` — Design system completo: base tipográfica, layout (container/grid/flex), Nav, Buttons (primary/secondary/ghost), Cards, Badges, Section Headers, Placeholder, animaciones `animate-on-scroll`.
   - ✅ `js/app.js` — Interacciones base: nav scroll spy + sticky border + mobile hamburger, lang toggle EN/ES con localStorage, IntersectionObserver fade-in.
   - ✅ `index.html` — Esqueleto semántico con SEO, Open Graph, JSON-LD, carga del design system y preview visual de tokens para validación.
   - ✅ `.nojekyll` — Previene procesamiento Jekyll, permite servir HTML/CSS/JS estáticos directamente.
   - ⚠️ **Cambio de modelo documentado:** Implementación ejecutada con Claude Sonnet 4.6 (Thinking). El `_config.yml` de Jekyll existente se conserva pero se neutraliza con `.nojekyll`.
2. **Fase 2: Estructura HTML Semántica & i18n** ✅ COMPLETADA — 2026-10-12
   - ✅ `index.html` — Layout semántico completo (`<header>`, `<main>`, `<section>`, `<footer>`, `<details>`) con todas las 5 secciones estructuradas y etiquetadas con atributos de accesibilidad e internacionalización.
   - ✅ `js/i18n.js` — Diccionario bilingüe completo EN (predeterminado) / ES (alternativo) cubriendo toda la taxonomía: navegación, hero, servicios (alcance, entregables, precio/duración), caso de estudio (contexto, desafíos, C4, 3 ADRs completos, fitness functions), stack técnico en 4 dimensiones, certificación GCP, canales de contacto y footer.
   - ✅ `js/app.js` — Motor de traducción dinámico ampliado para traducir claves individuales (`data-i18n`), colecciones de ADRs (`data-i18n-adr`), columnas de métricas (`data-i18n-ff`), filas de tabla de fitness functions y listas dinámicas de alcance y stack. Persistencia en `localStorage` y preservación de iconos SVG.
   - ⚠️ **Cambio de modelo documentado:** Iniciada con Claude Sonnet 4.6 (Thinking); concluida y extendida con Gemini 3.8 Flash (Medium).

3. **Fase 3: Secciones de Contenido Clave & Estilos de Layout** ✅ COMPLETADA — 2026-10-12
   - ✅ `css/style.css` — Estilos específicos implementados para todas las secciones según la estética "Technical Editorial":
     - Hero: tipografía display, micro-grilla arquitectónica de fondo (`.hero-section__grid-deco`), badges de credenciales y CTAs duales.
     - Servicios: grilla de 3 tarjetas (`.services-grid`), viñetas instrumentales, tarjeta destacada de duración del engagement y nota de confidencialidad NDA.
     - Caso de estudio (`ops-report-ai / CoopNorte`): contenedor C4 con integración de Mermaid 11 en tema dark, tarjetas ADR colapsables (`<details>`) con animación suave de chevron e indicadores de estado, y tabla responsiva de Fitness Functions con badges semánticos (`PASS` / `PLACEHOLDER`).
     - Stack & Experiencia: grilla 2x2, píldoras estilizadas por disciplina y tarjeta destacada de certificación Google Cloud Professional Cloud Architect con hexágono SVG.
     - Contacto: tarjeta de acción principal y accesos directos estructurados con iconos y estados hover enriquecidos.
     - Footer: navegación de retorno, copyright, nota explícita de clientes ficticios/sin datos de empleador.
   - ⚠️ **Cambio de modelo documentado:** Implementada con Gemini 3.8 Flash (Medium).

4. **Fase 4: Accesibilidad, SEO & Open Graph** ✅ COMPLETADA — 2026-10-12
   - ✅ SEO y Redes Sociales: Etiquetas `<title>`, `<meta description>`, `<link rel="canonical">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:locale`), Twitter Card y microdatos estructurados JSON-LD (`@type: Person`, `@type: ProfessionalService`).
   - ✅ Accesibilidad WCAG AA:
     - Enlace de salto `#skip-link` con foco visible de alto contraste.
     - Navegación accesible por teclado en menús, botones de idioma y tarjetas ADR (`<summary>`).
     - Atributos ARIA: `aria-labelledby`, `aria-label`, `role="list"`, `aria-expanded`, `aria-pressed`, `aria-hidden` en SVGs decorativos.
     - Respeto nativo a `prefers-reduced-motion` tanto en CSS como en JavaScript.
     - Contraste cromático verificado: texto primario `#F2EFE9` sobre fondo `#0C0D0F` (>15:1) y acento `#D4A346` (>4.5:1).

5. **Fase 5: Validación Técnica & GitHub Actions** ⏳ EN CURSO
   - ✅ `.nojekyll` configurado en la raíz para desactivar procesamiento Jekyll en Pages.
   - ✅ Workflow `.github/workflows/deploy.yml` validado (subida y despliegue directo de artefacto estático).
   - ⚠️ Nota de entorno: El subagente de navegador reportó fallo de inicialización en `open_browser_url` debido a la descarga del driver de Playwright restringida por red en el entorno local (error 404 de CDN de Playwright). La validación estructural y sintáctica se completó mediante inspección de código estático y pruebas del servidor.
   - 📌 Pendiente: Commit y push hacia `main` para despliegue final y verificación en vivo en `https://cdrobayom.github.io/`.