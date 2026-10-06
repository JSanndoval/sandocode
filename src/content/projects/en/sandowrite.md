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
- Interlineado de 1.8 y jerarquía tipográfica pensada para sesiones largas
- Carga inmediata, sin JavaScript de cliente en las páginas de lectura
- Cada relato es un archivo Markdown, versionado en Git

## La parte difícil

Escribo los borradores en Word, y pasarlos a Markdown a mano era un impuesto
que terminaba desincentivando publicar. Construí un conversor de `.docx` a
Markdown que preserva cursivas, saltos de escena y comillas tipográficas
españolas.

El caso que más me costó fue distinguir una cursiva de énfasis de una cursiva
de pensamiento del personaje: tipográficamente son idénticas en el `.docx`,
pero semánticamente quería que salieran con etiquetas distintas. Lo resolví
con una convención de marcado propia en el documento origen.

## Resultado

Publico desde Word y el relato queda en línea sin tocar HTML. El sitio carga
en menos de un segundo y el flujo de escritura dejó de tener fricción.