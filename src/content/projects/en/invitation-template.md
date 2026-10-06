---
title: "Digital Invitations"
summary: "Digital invitation template that loads in under a second and adapts to each event from a single config file."
description: "Digital invitations get shared over WhatsApp and opened on phones with patchy signal, where every second of load time costs guests. I built a static template with a countdown, RSVP, maps and itinerary that loads in under a second and adapts to each event by editing a single configuration file. No CMS, no database, no recurring hosting cost."
demo: "https://sofia-sebastian-boda.netlify.app/"
image: "/projects/invitation-template.webp"
imageAlt: "Digital wedding invitation with countdown and RSVP"
category: "landing"
tags: ["Astro", "Tailwind CSS", "JavaScript"]
year: 2026
featured: true
order: 2
---

## The problem

A digital invitation gets shared over WhatsApp and opened on a phone, often
on patchy signal and on the way somewhere else. Every second of load time
costs guests who never make it to the RSVP.

There was a business problem too: every event is different — a wedding looks
nothing like a baby shower — but rebuilding the site from scratch for each
client leaves no margin.

## What I built

A static Astro and Tailwind template covering several event types —
weddings, quinceañeras, baby showers and birthdays — each with its own theme:

- Countdown, RSVP, venue map and itinerary
- Copy, colors, dates and active sections all live in a single config file
- Components don't know which event they're rendering: they just read the config
- No CMS, no database, no recurring hosting cost

## The hard part

Deciding where to draw the line between what's configurable and what has to
be touched in code. Make everything configurable and the config file turns
into a badly designed programming language. Make nothing configurable and
every client becomes a fork you maintain separately.

I kept the section skeleton fixed and opened up only what actually changes
between events: palette, typography, copy, and which sections show. The
components ended up with no decision logic of their own, which is what lets
a wedding and a baby shower be the same codebase.

## Result

Publishing a new event means editing one file and deploying. The Sofía and
Sebastián invitation came out of this template.