---
title: "Sandocode — This Portfolio"
summary: "This portfolio. Content in Markdown collections validated with Zod, plus a bilingual pre-build check."
description: "The site you're looking at. I built it as a content system rather than loose pages: projects and experience live in Markdown collections validated with Zod, and a pre-build script verifies that every entry exists in both Spanish and English before deploying. Sections toggle from a single configuration file, without touching components."
demo: "https://sandocode.com/"
repo: "https://github.com/JSanndoval/sandocode"
image: "/projects/sandocode.webp"
imageAlt: "sandocode portfolio home page"
category: "landing"
tags: ["Astro", "TypeScript", "Tailwind CSS", "i18n"]
year: 2026
featured: false
order: 4
---

## The problem

My previous portfolio was built in React with styled-components, and adding
a project meant touching code: create a component, import it, slot it into
the list. Every content change ended up as a commit in the page's logic.

I also wanted it bilingual, and duplicating the markup for Spanish and
English guaranteed the two versions would drift apart sooner or later.

## What I built

I rebuilt it from scratch in Astro, as a content system rather than loose
pages:

- Projects and experience live in Markdown collections validated with Zod:
  if a field is missing or mistyped, the build fails
- A single Layout and a translation dictionary instead of per-language
  duplicated markup
- Sections toggle on and off from one config file, without touching components
- Contact form on Netlify Forms with a honeypot field against bots

## The hard part

Keeping two languages in sync without relying on manual discipline. It's very
easy to add a project in Spanish, leave English for later and forget: the
English visitor hits an incomplete section and nobody finds out.

I wrote a script that runs before the build, compares the collections for
both languages and breaks the deploy if an entry exists in one and is missing
from the other. It isn't sophisticated, but it turns a silent failure into
one that's impossible to ignore.

## Result

Adding a project means creating two Markdown files. The site only deploys if
both languages are complete.