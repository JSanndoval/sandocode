---
title: "Invitaciones Digitales"
summary: "Plantilla de invitaciones digitales que carga en menos de un segundo y se adapta a cada evento desde un solo archivo."
description: "Las invitaciones digitales se comparten por WhatsApp y se abren en celulares con señal irregular, donde cada segundo de carga cuesta invitados. Desarrollé una plantilla estática con cuenta regresiva, confirmación de asistencia, mapas e itinerario, que carga en menos de un segundo y se adapta a cada evento editando un solo archivo de configuración. Sin CMS, sin base de datos y sin costo recurrente de hosting."
demo: "https://sofia-sebastian-boda.netlify.app/"
image: "/projects/invitation-template.webp"
imageAlt: "Invitación de boda digital con cuenta regresiva y confirmación de asistencia"
category: "landing"
tags: ["Astro", "Tailwind CSS", "JavaScript"]
year: 2026
featured: true
order: 2
---

## El problema

Una invitación digital se comparte por WhatsApp y se abre en el celular,
muchas veces con señal irregular y de camino a otro lado. Cada segundo de
carga cuesta invitados que nunca llegan a confirmar.

Del lado del negocio había otro problema: cada evento es distinto —una boda
no se parece a un baby shower— pero rehacer el sitio desde cero para cada
cliente no deja margen.

## Qué construí

Una plantilla estática en Astro y Tailwind que cubre varios tipos de evento
—boda, XV años, baby shower y cumpleaños— cada uno con su propia temática:

- Cuenta regresiva, confirmación de asistencia, mapa e itinerario
- Textos, colores, fechas y secciones activas viven en un solo archivo de configuración
- Los componentes no saben de qué evento se trata: solo leen la configuración
- Sin CMS, sin base de datos y sin costo recurrente de hosting

## La parte difícil

Decidir dónde trazar la línea entre lo configurable y lo que hay que tocar
en código. Si todo es configurable, el archivo de configuración termina
siendo un lenguaje de programación mal hecho. Si nada lo es, cada cliente se
convierte en un fork que hay que mantener por separado.

Dejé fijo el esqueleto de secciones y abrí a configuración solo lo que
cambia realmente entre eventos: paleta, tipografía, textos, y qué secciones
se muestran. Los componentes quedaron sin lógica de decisión propia, que es
lo que permite que una boda y un baby shower sean el mismo código.

## Resultado

Publicar un evento nuevo es editar un archivo y desplegar. La invitación de
Sofía y Sebastián salió de esta plantilla.