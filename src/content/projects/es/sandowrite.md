---
title: "Sandowrite — Plataforma Literaria"
summary: "Plataforma de lectura larga con tipografía medida y un conversor de .docx a Markdown para publicar desde Word."
description: "Publicar narrativa en un blog genérico significa pelear con plantillas diseñadas para marketing, no para lectura larga. Construí una plataforma centrada en el texto, con tipografía medida para sesiones extensas y carga inmediata. La pieza que más me costó: un conversor de .docx a Markdown que me deja escribir en Word y publicar sin tocar HTML."
demo: "https://sandowrite.com/"
image: "/projects/sandowrite.webp"
imageAlt: "Portada de Sandowrite mostrando el listado de relatos"
category: "webapp"
tags: ["Astro", "TypeScript", "Tailwind CSS"]
year: 2026
featured: true
order: 1
---

## El problema

Escribo narrativa de terror y necesitaba dónde publicarla. Los blogs genéricos
están diseñados para marketing: columnas anchas, interlineado apretado,
tarjetas de llamada a la acción interrumpiendo cada tres párrafos. Nada de eso
sirve para alguien que se va a sentar veinte minutos a leer un relato.

## Qué construí

Una plataforma estática en Astro centrada exclusivamente en el texto:

- Medida de línea de 65-70 caracteres, que es donde el ojo deja de cansarse
- Interlineado amplio y jerarquía tipográfica pensada para sesiones largas
- Carga inmediata, sin JavaScript de cliente en las páginas de lectura
- Los relatos admiten series y capítulos, no solo entradas sueltas

## La parte difícil

Empecé con los relatos como archivos Markdown en el repo. Funcionaba, pero
tenía un costo que no vi al principio: solo podía publicar desde la
computadora donde estaba el proyecto. Y como escribo los borradores en Word,
cada publicación implicaba convertir a Markdown a mano.

Decidí mover el contenido a Postgres con Prisma, manteniendo el sitio
estático mediante un cargador propio del Content Layer de Astro. Esa es la
parte que me interesa de la solución: la base de datos entra en tiempo de
build, no en tiempo de petición. El visitante sigue recibiendo HTML estático
y yo gano poder escribir y publicar desde cualquier dispositivo.

Encima construí un conversor de `.docx` a Markdown para que el borrador de
Word llegue al sitio sin que yo toque etiquetas.

## Resultado

Publico desde donde sea, el sitio sigue cargando como estático, y el flujo
de escritura dejó de tener fricción.