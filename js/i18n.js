/**
 * i18n.js — CDR Software Arch Portfolio
 * Fase 2: Diccionario bilingüe EN (principal) / ES (alternativo)
 *
 * Consumido por app.js → applyTranslations(lang)
 * Clave: window.CDR_I18N[lang][dot.notation.key]
 */

window.CDR_I18N = {

  /* =========================================================
     ENGLISH — Primary
  ========================================================= */
  en: {
    nav: {
      services: 'Services',
      case:     'Case Study',
      stack:    'Stack',
      contact:  'Contact',
      cta:      'Schedule a Call',
    },

    hero: {
      label:    'Software Architect · LATAM FinTech',
      headline: 'Your architecture either scales under pressure — or it doesn\'t.',
      sub:      'I help CTOs and VPs in FinTech and regulated sectors diagnose architectural risk before it becomes a production crisis.',
      cta: {
        primary:   'Book an Architecture Health Check',
        secondary: 'See My Work',
      },
      badges: {
        gcp:      'GCP Professional Cloud Architect',
        years:    '8+ Years · Financial Sector',
        latam:    'LATAM · Colombia',
      },
    },

    services: {
      label:    'Service',
      title:    'Architecture Health Check',
      subtitle: 'A structured diagnostic for teams that need clarity on where their architecture stands — and what to fix first.',
      scope: {
        title: 'Scope',
        items: [
          'Structural risk analysis: coupling, modularity and dependency boundaries',
          'Security posture review: identity flows (OIDC/PKCE, BFF), data exposure and compliance readiness',
          'Operational fitness: CI/CD pipelines, observability gaps and deployment resilience',
        ],
      },
      deliverables: {
        title: 'Deliverables',
        items: [
          'Executive Deck — risk summary for non-technical stakeholders',
          'Technical Report — detailed findings with severity ratings and ADRs',
          'Remediation Roadmap — prioritized action plan with effort estimates',
        ],
      },
      duration: {
        label: 'Engagement',
        value: '2 – 3 weeks',
      },
      cta: 'Schedule an Exploratory Session',
      note: 'NDA available before sharing any system details.',
    },

    case: {
      label:    'Featured Case Study',
      title:    'ops-report-ai',
      client:   'CoopNorte · Cooperative Financial Institution (Fictitious)',
      tagline:  'Modernizing a compliance reporting system under strict regulatory constraints.',
      context: {
        title: 'Business Context',
        body:  'CoopNorte processed end-of-day financial reports through a monolithic batch system prone to failures under peak load. Regulatory audits required tamper-proof audit trails and role-based access to sensitive reporting data — capabilities the existing architecture couldn\'t provide.',
      },
      challenge: {
        title: 'Architecture Challenges',
        items: [
          'Tight coupling between report generation, storage and delivery layers',
          'No identity boundaries — any internal service could access any report',
          'Missing fitness functions: no automated checks for latency SLOs or coupling regression',
        ],
      },
      c4: {
        title:       'C4 Container Diagram',
        placeholder: 'PLACEHOLDER — C4 Container diagram (Mermaid/SVG). To be added with final architecture documentation.',
      },
      adrs: {
        title: 'Architecture Decision Records',
        items: [
          {
            id:      'ADR-001',
            title:   'Hexagonal Architecture as structural pattern',
            status:  'Accepted',
            context: 'Domain logic was bleeding into infrastructure layers (DB queries in controllers, framework coupling in business rules).',
            decision:'Adopt Ports & Adapters to isolate domain from infrastructure. All external dependencies communicate through defined interfaces.',
            consequences: 'Higher initial complexity; decoupled domain enables independent testing and future adapter swaps without domain changes.',
          },
          {
            id:      'ADR-002',
            title:   'BFF pattern for web and mobile API surfaces',
            status:  'Accepted',
            context: 'A single generic API was being consumed by both the compliance web portal and a mobile app, leading to over-fetching and fragile versioning.',
            decision:'Introduce a Backend-for-Frontend layer per client type. Each BFF owns its aggregation logic and data contract.',
            consequences: 'Increases deployment units; removes shared-API coupling and allows independent evolution of each client experience.',
          },
          {
            id:      'ADR-003',
            title:   'OIDC/PKCE with BFF session management',
            status:  'Accepted',
            context: 'Sensitive financial reports required identity-aware access control. Storing tokens in the browser posed XSS risk.',
            decision:'Use OIDC Authorization Code + PKCE flow with token storage in BFF session (HttpOnly cookies). Browser never holds tokens.',
            consequences: 'Adds BFF complexity; eliminates token theft attack surface from browser-side JS.',
          },
        ],
      },
      fitness: {
        title: 'Fitness Functions',
        columns: ['Function', 'Threshold', 'Trigger', 'Status'],
        rows: [
          ['p95 report generation latency', '< 800 ms', 'CI pipeline · k6 load test', 'PASS'],
          ['ArchUnit: no domain → infra coupling', 'Zero violations', 'CI pipeline · ArchUnit', 'PASS'],
          ['OWASP Dependency-Check', 'No CRITICAL CVEs', 'Nightly scan', 'PASS'],
          ['Report delivery SLO', '> 99.5 % success rate', 'Synthetic monitor · 5 min', '— PLACEHOLDER —'],
          ['Cross-module fan-out', '≤ 3 outbound deps per module', 'CI pipeline · custom', '— PLACEHOLDER —'],
        ],
        placeholder: 'PLACEHOLDER — Remaining fitness functions to be documented with production metrics.',
      },
    },

    stack: {
      label:    'Stack & Experience',
      title:    'Technical Depth Across the Full Architecture Stack',
      subtitle: 'Eight years building and reviewing systems in regulated financial environments across LATAM.',
      groups: {
        architecture: {
          label: 'Architecture',
          items: ['Hexagonal / Ports & Adapters', 'Domain-Driven Design', 'Microservices', 'Event-Driven Architecture', 'API Design (REST · GraphQL · AsyncAPI)', 'Architecture Decision Records'],
        },
        security: {
          label: 'Security',
          items: ['OIDC / OAuth 2.0', 'PKCE · BFF Pattern', 'mTLS · Service Mesh', 'Secrets Management', 'SAST / DAST Integration', 'SCA & CVE Scanning'],
        },
        cloud: {
          label: 'Cloud & Infrastructure',
          items: ['GCP · Professional Cloud Architect ✓', 'AWS · Multi-Account Strategy', 'Terraform · IaC', 'Kubernetes · GKE · EKS', 'Multi-Cloud Networking (VPN · BGP)', 'Cloud Cost Governance'],
        },
        cicd: {
          label: 'CI/CD & Governance',
          items: ['GitHub Actions · GitLab CI', 'ArgoCD · GitOps', 'Policy-as-Code (OPA)', 'ArchUnit · Fitness Functions', 'SLO / SLA Definition', 'Incident Runbooks'],
        },
      },
      cert: {
        title: 'Google Cloud Certified',
        sub:   'Professional Cloud Architect',
        note:  'Issued by Google Cloud',
      },
    },

    contact: {
      label:    'Contact',
      title:    'Let\'s talk architecture.',
      subtitle: 'Whether you\'re planning a modernization, facing a production risk, or need a second opinion on a design decision — I\'m available for a focused conversation.',
      cta:      'Send me a message',
      channels: {
        linkedin: 'Connect on LinkedIn',
        github:   'See my GitHub',
        email:    'Email directly',
      },
      nda:      'Happy to sign an NDA before any technical discussion.',
    },

    footer: {
      copy:  '© 2025 CDR Software Arch. David Robayo.',
      craft: 'Built with craft, not templates.',
      disclaimer: 'All case studies use fictitious client names. No current employer data is referenced.',
    },
  },

  /* =========================================================
     ESPAÑOL — Alternativo
  ========================================================= */
  es: {
    nav: {
      services: 'Servicios',
      case:     'Caso de Estudio',
      stack:    'Stack',
      contact:  'Contacto',
      cta:      'Agenda una Llamada',
    },

    hero: {
      label:    'Arquitecto de Software · FinTech LATAM',
      headline: 'Tu arquitectura escala bajo presión — o no lo hace.',
      sub:      'Ayudo a CTOs y VPs de FinTech y sectores regulados a diagnosticar el riesgo arquitectónico antes de que se convierta en una crisis en producción.',
      cta: {
        primary:   'Agenda un Architecture Health Check',
        secondary: 'Ver mi trabajo',
      },
      badges: {
        gcp:   'GCP Professional Cloud Architect',
        years: '8+ Años · Sector Financiero',
        latam: 'LATAM · Colombia',
      },
    },

    services: {
      label:    'Servicio',
      title:    'Architecture Health Check',
      subtitle: 'Un diagnóstico estructurado para equipos que necesitan claridad sobre el estado de su arquitectura — y qué corregir primero.',
      scope: {
        title: 'Alcance',
        items: [
          'Análisis de riesgo estructural: acoplamiento, modularidad y fronteras de dependencias',
          'Revisión de postura de seguridad: flujos de identidad (OIDC/PKCE, BFF), exposición de datos y cumplimiento normativo',
          'Fitness operacional: pipelines CI/CD, brechas de observabilidad y resiliencia de despliegue',
        ],
      },
      deliverables: {
        title: 'Entregables',
        items: [
          'Executive Deck — resumen de riesgos para stakeholders no técnicos',
          'Reporte Técnico — hallazgos detallados con severidad y ADRs',
          'Hoja de Ruta de Remediación — plan de acción priorizado con estimados de esfuerzo',
        ],
      },
      duration: {
        label: 'Duración',
        value: '2 – 3 semanas',
      },
      cta:  'Agendar Sesión Exploratoria',
      note: 'NDA disponible antes de compartir cualquier detalle del sistema.',
    },

    case: {
      label:    'Caso Destacado',
      title:    'ops-report-ai',
      client:   'CoopNorte · Institución Financiera Cooperativa (Ficticia)',
      tagline:  'Modernizando un sistema de reportes de cumplimiento bajo restricciones regulatorias estrictas.',
      context: {
        title: 'Contexto de Negocio',
        body:  'CoopNorte procesaba reportes financieros de cierre del día a través de un sistema batch monolítico, propenso a fallos bajo carga pico. Las auditorías regulatorias exigían trazas de auditoría a prueba de manipulaciones y acceso basado en roles a datos sensibles — capacidades que la arquitectura existente no podía proveer.',
      },
      challenge: {
        title: 'Desafíos Arquitectónicos',
        items: [
          'Acoplamiento estrecho entre las capas de generación, almacenamiento y entrega de reportes',
          'Sin fronteras de identidad — cualquier servicio interno podía acceder a cualquier reporte',
          'Fitness functions ausentes: sin verificaciones automatizadas de SLOs de latencia ni regresión de acoplamiento',
        ],
      },
      c4: {
        title:       'Diagrama C4 de Contenedores',
        placeholder: 'PLACEHOLDER — Diagrama C4 de contenedores (Mermaid/SVG). Se agregará con la documentación final de arquitectura.',
      },
      adrs: {
        title: 'Architecture Decision Records',
        items: [
          {
            id:      'ADR-001',
            title:   'Arquitectura Hexagonal como patrón estructural',
            status:  'Aceptado',
            context: 'La lógica de dominio se filtraba hacia las capas de infraestructura (queries de BD en controladores, acoplamiento de framework en reglas de negocio).',
            decision:'Adoptar Ports & Adapters para aislar el dominio de la infraestructura. Todas las dependencias externas se comunican mediante interfaces definidas.',
            consequences: 'Mayor complejidad inicial; el dominio desacoplado permite pruebas independientes y reemplazo futuro de adaptadores sin cambios al dominio.',
          },
          {
            id:      'ADR-002',
            title:   'Patrón BFF para superficies de API web y móvil',
            status:  'Aceptado',
            context: 'Una API genérica única era consumida tanto por el portal web de cumplimiento como por una app móvil, generando over-fetching y versionado frágil.',
            decision:'Introducir una capa Backend-for-Frontend por tipo de cliente. Cada BFF gestiona su propia lógica de agregación y contrato de datos.',
            consequences: 'Aumenta las unidades de despliegue; elimina el acoplamiento por API compartida y permite evolución independiente de cada experiencia de cliente.',
          },
          {
            id:      'ADR-003',
            title:   'OIDC/PKCE con gestión de sesión en BFF',
            status:  'Aceptado',
            context: 'Los reportes financieros sensibles requerían control de acceso basado en identidad. Almacenar tokens en el navegador presentaba riesgo de XSS.',
            decision:'Usar flujo OIDC Authorization Code + PKCE con almacenamiento de tokens en sesión del BFF (cookies HttpOnly). El navegador nunca gestiona tokens.',
            consequences: 'Agrega complejidad al BFF; elimina la superficie de ataque de robo de tokens desde JS en el navegador.',
          },
        ],
      },
      fitness: {
        title:   'Fitness Functions',
        columns: ['Función', 'Umbral', 'Disparador', 'Estado'],
        rows: [
          ['Latencia p95 generación de reporte', '< 800 ms', 'Pipeline CI · k6 load test', 'APROBADO'],
          ['ArchUnit: sin acoplamiento dominio → infra', 'Cero violaciones', 'Pipeline CI · ArchUnit', 'APROBADO'],
          ['OWASP Dependency-Check', 'Sin CVEs CRÍTICOS', 'Escaneo nocturno', 'APROBADO'],
          ['SLO de entrega de reportes', '> 99.5 % tasa de éxito', 'Monitor sintético · 5 min', '— PLACEHOLDER —'],
          ['Fan-out entre módulos', '≤ 3 deps salientes por módulo', 'Pipeline CI · custom', '— PLACEHOLDER —'],
        ],
        placeholder: 'PLACEHOLDER — Las fitness functions restantes se documentarán con métricas de producción.',
      },
    },

    stack: {
      label:    'Stack & Experiencia',
      title:    'Profundidad Técnica en Todo el Stack de Arquitectura',
      subtitle: 'Ocho años construyendo y revisando sistemas en entornos financieros regulados en LATAM.',
      groups: {
        architecture: {
          label: 'Arquitectura',
          items: ['Hexagonal / Ports & Adapters', 'Domain-Driven Design', 'Microservicios', 'Arquitectura Event-Driven', 'Diseño de APIs (REST · GraphQL · AsyncAPI)', 'Architecture Decision Records'],
        },
        security: {
          label: 'Seguridad',
          items: ['OIDC / OAuth 2.0', 'PKCE · Patrón BFF', 'mTLS · Service Mesh', 'Gestión de Secretos', 'Integración SAST / DAST', 'Análisis SCA y CVE'],
        },
        cloud: {
          label: 'Cloud e Infraestructura',
          items: ['GCP · Professional Cloud Architect ✓', 'AWS · Estrategia Multi-Cuenta', 'Terraform · IaC', 'Kubernetes · GKE · EKS', 'Networking Multi-Cloud (VPN · BGP)', 'Gobernanza de Costos Cloud'],
        },
        cicd: {
          label: 'CI/CD & Gobernanza',
          items: ['GitHub Actions · GitLab CI', 'ArgoCD · GitOps', 'Policy-as-Code (OPA)', 'ArchUnit · Fitness Functions', 'Definición SLO / SLA', 'Runbooks de Incidentes'],
        },
      },
      cert: {
        title: 'Google Cloud Certified',
        sub:   'Professional Cloud Architect',
        note:  'Emitido por Google Cloud',
      },
    },

    contact: {
      label:    'Contacto',
      title:    'Hablemos de arquitectura.',
      subtitle: 'Ya sea que estés planeando una modernización, enfrentando un riesgo en producción, o necesites una segunda opinión sobre una decisión de diseño — estoy disponible para una conversación enfocada.',
      cta:      'Envíame un mensaje',
      channels: {
        linkedin: 'Conectar en LinkedIn',
        github:   'Ver mi GitHub',
        email:    'Email directo',
      },
      nda: 'Disponible para firmar NDA antes de cualquier discusión técnica.',
    },

    footer: {
      copy:       '© 2025 CDR Software Arch. David Robayo.',
      craft:      'Construido con oficio, no con plantillas.',
      disclaimer: 'Todos los casos de estudio usan nombres de clientes ficticios. No se referencian datos del empleador actual.',
    },
  },
};
