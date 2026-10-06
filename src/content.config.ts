// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  description: z.string(),

  // Sitio en vivo
  demo: z.string().url().optional(),
  // Repositorio: solo proyectos públicos
  repo: z.string().url().optional(),

  // Preview (ruta en /public, ej. "/projects/sandowrite.webp")
  image: z.string().optional(),
  imageAlt: z.string().optional(),

  category: z.enum(['landing', 'ecommerce', 'webapp', '3d', 'api']),
  tags: z.array(z.string()),

  year: z.number(),
  featured: z.boolean().default(false),
  order: z.number().default(0),
});

const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  start: z.string(),              // "2024-04"
  end: z.string().nullable(),     // null = actual
  description: z.string(),
  tags: z.array(z.string()),
  type: z.enum(['work', 'education']),
  order: z.number().default(0),
});

const projectsEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects/es' }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects/en' }),
  schema: projectSchema,
});

const experienceEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience/es' }),
  schema: experienceSchema,
});

const experienceEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience/en' }),
  schema: experienceSchema,
});

export const collections = { projectsEs, projectsEn, experienceEs, experienceEn };