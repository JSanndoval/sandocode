// scripts/check-projects.mjs
import { readdirSync } from 'node:fs';
import path from 'node:path';

const base = path.resolve('src/content/projects');
const langs = ['es', 'en'];

const filesByLang = {};
for (const lang of langs) {
  const dir = path.join(base, lang);
  filesByLang[lang] = new Set(
    readdirSync(dir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''))
  );
}

const [a, b] = langs;
const missingInB = [...filesByLang[a]].filter((f) => !filesByLang[b].has(f));
const missingInA = [...filesByLang[b]].filter((f) => !filesByLang[a].has(f));

let hasError = false;

if (missingInB.length) {
  hasError = true;
  console.error(`❌ Faltan en "${b}/": ${missingInB.join(', ')}`);
}
if (missingInA.length) {
  hasError = true;
  console.error(`❌ Faltan en "${a}/": ${missingInA.join(', ')}`);
}

if (hasError) {
  console.error('\nCada proyecto debe existir en ambos idiomas (mismo nombre de archivo).');
  process.exit(1);
}

console.log(`✅ Todos los proyectos (${filesByLang[a].size}) tienen su par en ES y EN.`);