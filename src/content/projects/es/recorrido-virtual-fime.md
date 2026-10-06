---
title: "Recorrido Virtual FIME"
summary: "Recorrido 360° del campus, sacado de un simulador de Unity que pesaba demasiado para la web."
description: "El simulador original de la facultad estaba hecho en Unity y exigía descargar un ejecutable, lo que descartaba a cualquier aspirante entrando desde el celular. Publicar los modelos 3D en la web tampoco era viable por peso, así que renderizé el recorrido a fotos equirectangulares y lo serví como un recorrido de 360° navegable en el navegador. Cambié libertad de movimiento por tiempo de carga, a propósito."
demo: "https://recorrido-virutal-fime.netlify.app/"
repo: "https://github.com/JSanndoval/recorrido-virtual-fime"
image: "/projects/recorrido-virtual-fime.webp"
imageAlt: "Vista panorámica de 360° del campus de FIME"
category: "3d"
tags: ["Three.js", "Astro", "WebGL"]
year: 2025
featured: false
order: 3
---

## El problema

La facultad tenía un simulador del campus hecho en Unity. Funcionaba, pero
era un ejecutable: había que descargarlo e instalarlo en Windows. Eso
descartaba de entrada a los aspirantes que entran desde el celular, que son
la mayoría. Una herramienta pensada para atraer estudiantes no puede pedir
una instalación antes de enseñar nada.

La salida obvia era llevar la escena al navegador. Pero los modelos del
simulador pesaban demasiado: mallas, texturas y un motor completo que un
aspirante con datos móviles nunca iba a terminar de descargar.

## Qué construí

En lugar de llevar la geometría a la web, dejé los modelos donde estaban y
renderizé fotos equirectangulares de cada punto del recorrido desde Unity.
El sitio sirve esas panorámicas como un recorrido navegable de 360°: te
desplazas entre puntos fijos, como en Street View.

El cambio de enfoque se lleva el peso de encima:

- Cada punto es una sola imagen, comprimible de forma agresiva
- No hay que descargar mallas, materiales ni motor de render
- La carga es progresiva: una panorámica a la vez, no un paquete inicial enorme
- Agregar un punto nuevo es exportar otra foto desde Unity, no tocar la escena

## La parte difícil

La parte difícil no fue técnica, fue decidir qué sacrificar.

Un recorrido en 3D real te deja caminar a donde quieras. Uno por panorámicas
te amarra a puntos fijos. Es una pérdida real y no quise disimularla.

La acepté porque el objetivo del proyecto no era que alguien explorara el
campus como un videojuego: era que un aspirante con mala señal viera cómo se
ve la facultad antes de decidir si va. Para eso, un recorrido que carga vale
infinitamente más que uno completo que nadie espera a que cargue.

Las panorámicas no son fotos del campus: las rendericé desde dentro del
propio proyecto 3D, colocando las cámaras en la escena de Unity y exportando
la equirectangular de cada posición. Eso cambia por completo el costo de
iterar. Con fotografía real, mover un punto de captura significa volver al
campus con el equipo; con cámaras dentro de la escena, es arrastrarla unos
metros y volver a exportar. Pude ajustar el recorrido tantas veces como hizo
falta hasta que la secuencia se sintiera bien.

## Resultado

El recorrido abre en el navegador de cualquier celular, sin descargar nada,
y el aspirante ve el campus en segundos en vez de instalar un ejecutable que
probablemente nunca iba a instalar.