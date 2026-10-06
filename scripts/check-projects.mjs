// scripts/check-projects.mjs
import { readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const langs = ['es', 'en'];

function checkCollection(name) {
  const base = path.resolve('src/content', name);
  if (!existsSync(base)) {
    console.log(`⏭  "${name}" no existe todavía, se omite.`);
    return true;
  }

  const filesByLang = {};
  for (const lang of langs) {
    const dir = path.join(base, lang);
    filesByLang[lang] = new Set(
      readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
    );
  }

  const [a, b] = langs;
  const missingInB = [...filesByLang[a]].filter((f) => !filesByLang[b].has(f));
  const missingInA = [...filesByLang[b]].filter((f) => !filesByLang[a].has(f));
  let ok = true;

  if (missingInB.length) {
    ok = false;
    console.error(`❌ [${name}] Faltan en "${b}/": ${missingInB.join(', ')}`);
  }
  if (missingInA.length) {
    ok = false;
    console.error(`❌ [${name}] Faltan en "${a}/": ${missingInA.join(', ')}`);
  }
  if (ok) console.log(`✅ [${name}] ${filesByLang[a].size} entradas con su par en ES y EN.`);

  return ok;
}

const results = ['projects', 'experience'].map(checkCollection);

if (results.includes(false)) {
  console.error('\nCada entrada debe existir en ambos idiomas (mismo nombre de archivo).');
  process.exit(1);
}