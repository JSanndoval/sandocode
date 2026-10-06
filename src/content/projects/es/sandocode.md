---
title: "Sandocode — Este Portafolio"
summary: "Este portafolio. Contenido en colecciones Markdown validadas con Zod y un check de pre-build bilingüe."
description: "El sitio que estás viendo. Lo construí como sistema de contenido en lugar de páginas sueltas: los proyectos y la experiencia viven en colecciones de Markdown validadas con Zod, y un script de pre-build verifica que cada entrada exista en español e inglés antes de desplegar. Secciones activables desde un solo archivo de configuración, sin tocar componentes."
demo: "https://sandocode.com/"
repo: "https://github.com/JSanndoval/sandocode"
image: "/projects/sandocode.webp"
imageAlt: "Portada del portafolio sandocode"
category: "landing"
tags: ["Astro", "TypeScript", "Tailwind CSS", "i18n"]
year: 2026
featured: false
order: 4
---

## El problema

Mi portafolio anterior estaba hecho en React con styled-components, y
agregar un proyecto significaba tocar código: crear un componente,
importarlo, acomodarlo en la lista. Cada cambio de contenido terminaba
siendo un commit en la lógica de la página.

Además lo quería bilingüe, y duplicar el marcado para español e inglés
garantizaba que tarde o temprano las dos versiones se iban a desincronizar.

## Qué construí

Lo rehice desde cero en Astro, como sistema de contenido en lugar de páginas
sueltas:

- Proyectos y experiencia viven en colecciones de Markdown validadas con Zod:
  si falta un campo o el tipo no corresponde, el build falla
- Un solo Layout y un diccionario de traducciones, en vez de marcado
  duplicado por idioma
- Las secciones se encienden y apagan desde un archivo de configuración, sin
  tocar componentes
- Formulario con Netlify Forms y campo trampa contra bots

## La parte difícil

Mantener dos idiomas sincronizados sin depender de disciplina manual. Es muy
fácil agregar un proyecto en español, dejar el inglés para después y
olvidarlo: el visitante en inglés se encuentra una sección incompleta y
nadie se entera.

Escribí un script que corre antes del build, compara las colecciones de los
dos idiomas y rompe el despliegue si una entrada existe en uno y falta en el
otro. No es sofisticado, pero convierte un error silencioso en uno imposible
de ignorar.

## Resultado

Agregar un proyecto es crear dos archivos Markdown. El sitio solo se
despliega si ambos idiomas están completos.