---
title: "Sandowrite — Literary Platform"
summary: "Long-form reading platform with measured typography and a .docx-to-Markdown converter to publish straight from Word."
description: "Publishing fiction on a generic blog means fighting templates designed for marketing, not for long-form reading. I built a text-first platform with typography measured for extended sessions and instant load times. The hardest piece: a .docx-to-Markdown converter that lets me write in Word and publish without touching HTML."
demo: "https://sandowrite.com/"
image: "/projects/sandowrite.webp"
imageAlt: "Sandowrite home page showing the list of stories"
category: "webapp"
tags: ["Astro", "TypeScript", "Tailwind CSS"]
year: 2026
featured: true
order: 1
---

## The problem

I write horror fiction and needed somewhere to publish it. Generic blogs are
built for marketing: wide columns, tight line height, call-to-action cards
interrupting every three paragraphs. None of that works for someone who's
going to sit down for twenty minutes with a short story.

## What I built

A static Astro platform focused entirely on the text:

- A 65-70 character line measure, where the eye stops getting tired
- 1.8 line height and a type hierarchy designed for long sessions
- Instant load, with no client-side JavaScript on the reading pages
- Every story is a Markdown file, versioned in Git

## The hard part

I draft in Word, and converting to Markdown by hand was a tax that ended up
discouraging me from publishing at all. I built a `.docx`-to-Markdown
converter that preserves italics, scene breaks and Spanish typographic quotes.

The case that gave me the most trouble was telling an emphasis italic apart
from a character's inner thought: typographically they're identical in the
`.docx`, but semantically I wanted them to come out with different tags. I
solved it with a markup convention of my own in the source document.

## Result

I publish from Word and the story goes live without touching HTML. The site
loads in under a second and the writing workflow stopped having friction.