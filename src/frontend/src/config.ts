// src/config.ts
export const SITE = {
  website: "https://sandocode.com/",
  author: "Jorge Sandoval",
  title: "sandocode",
  tagline: "IT Solutions",
  desc: "Ingeniería web y diseño estructural. Arquitecturas estáticas limpias con Astro, cero sobreingeniería",
  descEn: "Web engineering and structural design. Clean static architectures with Astro, zero over-engineering.",

  email: "contacto@sandocode.com",
  ogImage: "sandocode.webp", // en /public

  // WhatsApp: solo dígitos con código de país, sin +, espacios ni guiones
  whatsapp: {
    number: "528124269725",
    // Mensaje precargado al abrir el chat
    messageEs: "Hola Jorge, vi tu portafolio en sandocode y me gustaría platicar sobre un proyecto.",
    messageEn: "Hi Jorge, I saw your portfolio on sandocode and I'd like to talk about a project.",
  },

  defaultLang: "es",
  dir: "ltr",
  timezone: "America/Monterrey",

  // Redes — pon enabled: false para ocultar sin borrar
  socials: [
    { name: "GitHub", href: "https://github.com/JSanndoval", enabled: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jorge-sandoval-9044a717b", enabled: true },
    { name: "Instagram", href: "https://instagram.com/sandowrite", enabled: false },
  ],

  // Secciones visibles en la página
  sections: {
    showAbout: true,
    showStats: true,
    showServices: true,
    showProcess: true,
    showProjects: true,
    showFaq: true,
    showContact: true,
  },

  // Efectos visuales de fondo
  backdropEffects: {
    leftGlow: true,
    rightGlow: true,
    },
    
  // Formulario
  form: {
    name: "contacto",
    thanksPath: { es: "/gracias", en: "/en/thanks" },
  },
} as const;