// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().url(),
  tags: z.array(z.string()),
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

export const collections = { projectsEs, projectsEn };