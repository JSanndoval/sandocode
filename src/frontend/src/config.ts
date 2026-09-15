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

  defaultLang: "es",
  dir: "ltr",
  timezone: "America/Monterrey",

  // Redes — pon enabled: false para ocultar sin borrar
  socials: [
    { name: "GitHub", href: "https://github.com/tu-usuario", enabled: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/tu-usuario", enabled: true },
    { name: "Instagram", href: "https://instagram.com/sandowrite", enabled: false },
  ],

  // Secciones visibles en la página
  sections: {
    showServices: true,
    showProjects: true,
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