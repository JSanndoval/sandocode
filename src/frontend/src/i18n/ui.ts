// src/i18n/ui.ts
export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.servicios": "Servicios",
    "nav.proyectos": "Proyectos",
    "nav.contacto": "Contacto",

    "hero.titulo": "Ingeniería Web & Diseño Estructural",
    "hero.descripcion":
      "Construyo aplicaciones web con la misma precisión técnica con la que estructuro progresiones armónicas o desarrollo proyectos narrativos. Arquitecturas estáticas limpias con Astro, cero sobreingeniería, y soluciones frontend diseñadas con atención meticulosa a la legibilidad y el rendimiento.",
    "hero.boton": "Explorar Proyectos",

    "servicios.titulo": "Soluciones IT",
    "servicios.1.titulo": "Desarrollo Frontend Estático",
    "servicios.1.desc":
      "Creación de interfaces ultrarrápidas y plantillas reutilizables utilizando Astro y Tailwind CSS, garantizando carga inmediata y SEO técnico impecable.",
    "servicios.2.titulo": "Headless E-commerce",
    "servicios.2.desc":
      "Implementación de arquitecturas modernas separando el frontend de la lógica de ventas utilizando herramientas como Medusa.",
    "servicios.3.titulo": "Automatización e Integraciones",
    "servicios.3.desc":
      "Desarrollo de soluciones interactivas e integración de servicios externos como Google Forms para la gestión de datos sin requerir backends complejos.",

    "proyectos.titulo": "Proyectos Destacados",
    "proyectos.subtitulo": "Explora mis desarrollos recientes.",
    "proyectos.verCodigo": "Ver Código",

    "contacto.titulo": "Inicia un Proyecto",
    "contacto.nombre": "Nombre",
    "contacto.email": "Correo Electrónico",
    "contacto.mensaje": "¿Cómo puedo ayudarte?",
    "contacto.enviar": "Enviar Mensaje",

    "footer.creditos": "Construido con Astro y Tailwind CSS.",

    "404.titulo": "Página no encontrada",
    "404.desc": "La ruta que buscas no existe o fue movida.",
    "404.boton": "Volver al inicio",
  },
  en: {
    "nav.inicio": "Home",
    "nav.servicios": "Services",
    "nav.proyectos": "Projects",
    "nav.contacto": "Contact",

    "hero.titulo": "Web Engineering & Structural Design",
    "hero.descripcion":
      "I build web applications with the same technical precision I use to structure harmonic progressions or develop narrative projects. Clean static architectures with Astro, zero over-engineering, and frontend solutions designed with meticulous attention to readability and performance.",
    "hero.boton": "Explore Projects",

    "servicios.titulo": "IT Solutions",
    "servicios.1.titulo": "Static Frontend Development",
    "servicios.1.desc":
      "Ultra-fast interfaces and reusable templates built with Astro and Tailwind CSS, guaranteeing instant load times and impeccable technical SEO.",
    "servicios.2.titulo": "Headless E-commerce",
    "servicios.2.desc":
      "Modern architectures that separate the frontend from sales logic using tools like Medusa.",
    "servicios.3.titulo": "Automation & Integrations",
    "servicios.3.desc":
      "Interactive solutions and integration of external services like Google Forms for data management without complex backends.",

    "proyectos.titulo": "Featured Projects",
    "proyectos.subtitulo": "Explore my recent work.",
    "proyectos.verCodigo": "View Code",

    "contacto.titulo": "Start a Project",
    "contacto.nombre": "Name",
    "contacto.email": "Email",
    "contacto.mensaje": "How can I help you?",
    "contacto.enviar": "Send Message",

    "footer.creditos": "Built with Astro and Tailwind CSS.",

    "404.titulo": "Page not found",
    "404.desc": "The page you're looking for doesn't exist or was moved.",
    "404.boton": "Back to home",
  },
} as const;
