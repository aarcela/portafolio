export type Locale = "en" | "es";

export const content = {
  en: {
    meta: {
      title: "Andres Arcela — Full Stack & Mobile Engineer",
      description:
        "Senior Full Stack & Mobile Engineer specializing in React Native, Ionic, and B2B SaaS. Open to full-time and freelance opportunities.",
    },
    nav: {
      work: "Work",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      download: "Download CV",
    },
    hero: {
      name: "Andres Arcela",
      role: "Senior Full Stack & Mobile Engineer",
      summary:
        "I modernize legacy systems, ship mobile apps at scale, and build B2B SaaS platforms — bridging technical execution with business strategy.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Download CV",
      available: "Open to roles & freelance",
    },
    work: {
      title: "Selected work",
      subtitle: "Products and platforms I’ve built, led, or shipped.",
      items: [
        {
          name: "GetWodus",
          role: "Founder / Full Stack",
          period: "2017 — Present",
          description:
            "End-to-end B2B SaaS for fitness facility management — from marketing site to member-facing mobile apps and a multi-tenant admin console. Designed for onboarding gyms at scale, with bookings, memberships, and operations in one commercial-ready product.",
          href: "https://www.getwodus.com",
          tags: ["SaaS", "Mobile", "Admin", "Multi-tenant"],
        },
        {
          name: "Pits CrossFit",
          role: "Product / Full Stack",
          period: "2017 — Present",
          description:
            "Custom management platform for an early-adopter CrossFit box: public website, financial admin panel, and iOS/Android apps. Members book classes via QR, stay connected with in-app social chat, and the gym runs day-to-day ops from one stack I still actively maintain.",
          href: "https://www.pitscrossft.com",
          tags: ["Ionic", "Node.js", "iOS", "Android"],
        },
        {
          name: "Mi Movistar",
          role: "Lead Engineer — Telefónica VE",
          period: "2023 — Present",
          description:
            "Leading the rewrite of Telefónica Venezuela’s flagship self-service app — balance, recharges, bill pay, and packages — from legacy native Android/iOS into a unified React Native codebase. Manage 4 developers under Clean Architecture and strict PR reviews; cut maintenance overhead by 50% while keeping feature parity.",
          href: "https://play.google.com/store/apps/details?id=com.telefonica.movistar",
          tags: ["React Native", "CI/CD", "Leadership"],
        },
        {
          name: "CrediTotal",
          role: "Senior Mobile — Hazling",
          period: "2024 — 2025",
          description:
            "Buy-now-pay-later finance app for Mundo Total retail across Venezuela. Architected and shipped Android/iOS with Ionic & Node.js, integrating secure payment flows and real-time backends — past 100,000 downloads in the first three months.",
          href: "https://play.google.com/store/apps/details?id=com.hazling.creditotal",
          tags: ["Ionic", "Angular", "Payments"],
        },
        {
          name: "Filtros Winner",
          role: "Full Stack",
          period: "Freelance",
          description:
            "Inventory and client management for a filters business: catalog search with Algolia, Firebase-backed data, and a Next.js front end deployed on Vercel — built for day-to-day operations, not demos.",
          href: "https://github.com/aarcela/filtros-winner",
          tags: ["Next.js", "Firebase", "Algolia"],
        },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "A decade spanning engineering leadership, mobile, and product.",
      items: [
        {
          company: "Telefónica VE (TMVE)",
          role: "Lead Software Engineer & Solutions Architect",
          period: "May 2023 — Present",
          points: [
            "Spearheading MiMovistar migration to React Native; manage a team of 4.",
            "Architected CI/CD pipelines and reusable modules; 50% less maintenance overhead.",
            "Previously (2015–2023): network benchmarking tools that saved 95% of hardware budget.",
          ],
        },
        {
          company: "Condato (via Efiempresas)",
          role: "Senior Frontend Developer (Contractor)",
          period: "Nov 2025 — Present",
          points: [
            "Scalable Angular & Ionic frontend modules across enterprise projects.",
            "Backend microservices with NestJS for end-to-end architecture.",
          ],
        },
        {
          company: "Hazling",
          role: "Senior Mobile Developer (Ionic/Angular)",
          period: "Apr 2024 — Nov 2025",
          points: [
            "Shipped Android/iOS apps scaling to 100k+ downloads in 3 months.",
            "Built Creditotal with secure payments and real-time services.",
          ],
        },
        {
          company: "Freelance",
          role: "Senior Full Stack & Product Creator",
          period: "Mar 2017 — Present",
          points: [
            "GetWodus B2B SaaS, Pits CrossFit suite, Filtros Winner, and more.",
          ],
        },
        {
          company: "BairesDev",
          role: "Frontend Developer (Angular)",
          period: "Jul 2022 — Jul 2023",
          points: [
            "Built 17 scalable Angular modules with Jest coverage.",
            "Created the company’s first reusable UI component library.",
          ],
        },
        {
          company: "Binary Mango",
          role: "Technical Project Manager",
          period: "Jul 2021 — Mar 2022",
          points: [
            "Introduced Scrum to shorten release cycles; built a client bug-tracking portal.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Tools I use to design, ship, and scale products.",
      groups: [
        {
          label: "Mobile & Frontend",
          items: [
            "React Native",
            "Ionic",
            "Expo",
            "React",
            "Angular",
            "TypeScript",
            "Redux",
            "Jest",
          ],
        },
        {
          label: "Backend & Cloud",
          items: [
            "Node.js",
            "NestJS",
            "Python",
            "Firebase",
            "AWS",
            "GitHub Actions",
            "Bitrise",
          ],
        },
        {
          label: "Databases",
          items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firestore"],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        { degree: "MBA", school: "IESA", year: "2022" },
        { degree: "Master in Project Management", school: "FUNIBER", year: "2022" },
        { degree: "Telecommunication Engineer", school: "UCAB", year: "2015" },
      ],
      languagesLabel: "Languages",
      languages: "Spanish (Native) · English (Professional)",
    },
    contact: {
      title: "Let’s work together",
      subtitle:
        "Available for full-time roles and freelance engagements — mobile, full stack, or technical leadership.",
      emailLabel: "Email me",
      email: "arcela34@gmail.com",
      linksLabel: "Elsewhere",
      linkedin: "https://www.linkedin.com/in/andres-arcela/",
      github: "https://github.com/aarcela/",
    },
    footer: {
      rights: "Andres Arcela",
    },
  },
  es: {
    meta: {
      title: "Andres Arcela — Ingeniero Full Stack & Mobile",
      description:
        "Ingeniero Senior Full Stack & Mobile especializado en React Native, Ionic y SaaS B2B. Abierto a oportunidades full-time y freelance.",
    },
    nav: {
      work: "Proyectos",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
      download: "Descargar CV",
    },
    hero: {
      name: "Andres Arcela",
      role: "Ingeniero Senior Full Stack & Mobile",
      summary:
        "Modernizo sistemas legacy, lanzo apps móviles a escala y construyo plataformas SaaS B2B — uniendo ejecución técnica y estrategia de negocio.",
      ctaPrimary: "Contactar",
      ctaSecondary: "Descargar CV",
      available: "Abierto a roles y freelance",
    },
    work: {
      title: "Proyectos seleccionados",
      subtitle: "Productos y plataformas que he construido, liderado o lanzado.",
      items: [
        {
          name: "GetWodus",
          role: "Fundador / Full Stack",
          period: "2017 — Presente",
          description:
            "SaaS B2B integral para gestión de centros fitness — desde el sitio de marketing hasta apps móviles para miembros y un admin multi-tenant. Pensado para onboarding de gimnasios a escala, con reservas, membresías y operaciones en un producto listo para comercializar.",
          href: "https://www.getwodus.com",
          tags: ["SaaS", "Mobile", "Admin", "Multi-tenant"],
        },
        {
          name: "Pits CrossFit",
          role: "Producto / Full Stack",
          period: "2017 — Presente",
          description:
            "Plataforma de gestión a medida para un box CrossFit early-adopter: web pública, panel financiero y apps iOS/Android. Los miembros reservan clases con QR, se conectan con chat social in-app, y el gimnasio opera el día a día desde un stack que sigo manteniendo activamente.",
          href: "https://www.pitscrossft.com",
          tags: ["Ionic", "Node.js", "iOS", "Android"],
        },
        {
          name: "Mi Movistar",
          role: "Lead Engineer — Telefónica VE",
          period: "2023 — Presente",
          description:
            "Lidero la reescritura de la app flagship de autogestión de Telefónica Venezuela — saldo, recargas, pago de facturas y paquetes — desde nativo legacy Android/iOS hacia una base unificada en React Native. Gestión de 4 desarrolladores con Clean Architecture y revisiones estrictas de PR; 50% menos overhead de mantenimiento con paridad de funcionalidades.",
          href: "https://play.google.com/store/apps/details?id=com.telefonica.movistar",
          tags: ["React Native", "CI/CD", "Liderazgo"],
        },
        {
          name: "CrediTotal",
          role: "Senior Mobile — Hazling",
          period: "2024 — 2025",
          description:
            "App financiera buy-now-pay-later para el retail Mundo Total en Venezuela. Arquitectura y lanzamiento Android/iOS con Ionic y Node.js, integrando flujos de pago seguros y backends en tiempo real — más de 100.000 descargas en los primeros tres meses.",
          href: "https://play.google.com/store/apps/details?id=com.hazling.creditotal",
          tags: ["Ionic", "Angular", "Pagos"],
        },
        {
          name: "Filtros Winner",
          role: "Full Stack",
          period: "Freelance",
          description:
            "Inventario y gestión de clientes para un negocio de filtros: búsqueda de catálogo con Algolia, datos en Firebase y frontend Next.js en Vercel — pensado para operación diaria, no para demos.",
          href: "https://github.com/aarcela/filtros-winner",
          tags: ["Next.js", "Firebase", "Algolia"],
        },
      ],
    },
    experience: {
      title: "Experiencia",
      subtitle: "Una década entre liderazgo de ingeniería, mobile y producto.",
      items: [
        {
          company: "Telefónica VE (TMVE)",
          role: "Lead Software Engineer & Solutions Architect",
          period: "May 2023 — Presente",
          points: [
            "Migración de MiMovistar a React Native; gestión de un equipo de 4.",
            "Pipelines CI/CD y módulos reutilizables; 50% menos overhead de mantenimiento.",
            "Antes (2015–2023): herramientas de benchmarking de red que ahorraron el 95% del presupuesto de hardware.",
          ],
        },
        {
          company: "Condato (vía Efiempresas)",
          role: "Senior Frontend Developer (Contractor)",
          period: "Nov 2025 — Presente",
          points: [
            "Módulos frontend escalables en Angular e Ionic para proyectos enterprise.",
            "Microservicios backend con NestJS para arquitectura end-to-end.",
          ],
        },
        {
          company: "Hazling",
          role: "Senior Mobile Developer (Ionic/Angular)",
          period: "Abr 2024 — Nov 2025",
          points: [
            "Apps Android/iOS con más de 100k descargas en 3 meses.",
            "Creditotal con pagos seguros y servicios en tiempo real.",
          ],
        },
        {
          company: "Freelance",
          role: "Senior Full Stack & Product Creator",
          period: "Mar 2017 — Presente",
          points: [
            "GetWodus SaaS B2B, suite Pits CrossFit, Filtros Winner y más.",
          ],
        },
        {
          company: "BairesDev",
          role: "Frontend Developer (Angular)",
          period: "Jul 2022 — Jul 2023",
          points: [
            "17 módulos Angular escalables con cobertura Jest.",
            "Primera librería de componentes UI reutilizable de la empresa.",
          ],
        },
        {
          company: "Binary Mango",
          role: "Technical Project Manager",
          period: "Jul 2021 — Mar 2022",
          points: [
            "Scrum para acortar ciclos de release; portal de tracking de bugs para clientes.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "Herramientas con las que diseño, lanzo y escalo productos.",
      groups: [
        {
          label: "Mobile & Frontend",
          items: [
            "React Native",
            "Ionic",
            "Expo",
            "React",
            "Angular",
            "TypeScript",
            "Redux",
            "Jest",
          ],
        },
        {
          label: "Backend & Cloud",
          items: [
            "Node.js",
            "NestJS",
            "Python",
            "Firebase",
            "AWS",
            "GitHub Actions",
            "Bitrise",
          ],
        },
        {
          label: "Bases de datos",
          items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firestore"],
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        { degree: "MBA", school: "IESA", year: "2022" },
        { degree: "Máster en Gestión de Proyectos", school: "FUNIBER", year: "2022" },
        { degree: "Ingeniero en Telecomunicaciones", school: "UCAB", year: "2015" },
      ],
      languagesLabel: "Idiomas",
      languages: "Español (Nativo) · Inglés (Profesional)",
    },
    contact: {
      title: "Trabajemos juntos",
      subtitle:
        "Disponible para roles full-time y proyectos freelance — mobile, full stack o liderazgo técnico.",
      emailLabel: "Escríbeme",
      email: "arcela34@gmail.com",
      linksLabel: "Enlaces",
      linkedin: "https://www.linkedin.com/in/andres-arcela/",
      github: "https://github.com/aarcela/",
    },
    footer: {
      rights: "Andres Arcela",
    },
  },
} as const;

export type Content = (typeof content)[Locale];
