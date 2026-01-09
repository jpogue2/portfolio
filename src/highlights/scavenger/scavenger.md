---
title: The SCavenger
permalink: /highlights/scavenger/index.html
description: An interactive adventure journal embedded system that Jeremy Pogue developed for his senior capstone project.
layout: page
---

<div style="text-align: center;">
    <img src="/assets/images/projects/scavenger/scavenger-team.jpg" alt="Jeremy Pogue and his team alongside The SCavenger" sizes="(max-width: 615px) 40vw, 50vw" loading="eager" decoding="sync" style="border-radius: 0.5rem; width: 800px;">
</div>

<a href="https://github.com/tinkerpinky10/ee459-project" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="no-arrow github-link" 
   style="display: inline-flex; align-items: center; font-weight: bold; gap: 0.5rem;">
  <img 
    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
    width="40" 
    height="40" 
    alt="GitHub logo" 
    style="display: inline-block;"> GitHub for The SCavenger
</a>

<a href="/assets/files/scavenger-report.pdf"
   target="_blank"
   rel="noopener noreferrer"
   class="no-arrow report-link"
   style="display: inline-flex; align-items: center; gap: 0.5rem; font-weight: bold; text-decoration: none;">
  <span style="font-size: 2.2rem;" aria-hidden="true">📄</span>
  <span style="text-decoration: underline;">Final Project Report</span>
</a>

As my senior capstone project, <strong>The SCavenger</strong> represents the culmination of my four-year undergraduate education. Our challenge was to design an embedded system that addressed a problem within one of three themes: <strong>hiking/camping, health and wellness, or gardening</strong>. 

I collaborated with two fellow Viterbi engineers and two designers from Otis College of Art and Design to create The SCavenger: <strong>a device designed to encourage physical movement among traditionally sedentary gamers</strong>.

The SCavenger is <strong>an interactive adventure journal</strong> – <strong>an "escape room in a box"</strong> – that challenges players to <strong>solve puzzles by engaging with their physical environment</strong>. Some puzzles prompt players to toggle lights, change elevation, or travel to specific GPS coordinates. Guiding the experience is a narrator who introduces each puzzle and shares stories from her past life, weaving a narrative through the gameplay.

<figure style="text-align: center; margin: 2rem;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-puzzles.png" 
    alt="Puzzle Diagram for the SCavenger" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    The SCavenger features six puzzles in linear order.
  </figcaption>
</figure>

At a system level, The SCavenger consists of a **central microcontroller** coordinating **sensors, audio and display output, and persistent game state** across a linear progression.

The project was intentionally built from first principles, starting with an **ATmega328p microcontroller and a wire-wrapped protoboard**. Initial development focused on establishing reliable power delivery, generating a stable clock signal via an external oscillator, and configuring a programming interface for firmware deployment. Each subsystem was validated through targeted testing before moving on to sensor integration.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-oscilloscope-test.png" 
    alt="An early oscilloscope test verifying pin outputs" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    An early oscilloscope test verifying pin outputs
  </figcaption>
</figure>

Once the core system was operational, we integrated sensors and peripheral devices using a consistent workflow:

1. <strong>Research</strong>. Review datasheets and relevant documentation
2. <strong>Test</strong>. Build a minimal hardware setup and write a focused software unit test
3. <strong>Integrate</strong>. Abstract low-level register access into helper functions and incorporate the device into the broader system

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-code-snippet.png" 
    alt="Block diagram of The SCavenger's physical components" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Helper function that generates hardware-timed audio using Timer1
  </figcaption>
</figure>

By the end of the semester, this approach resulted in a fully integrated system composed of the following hardware components:

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-hardware-block-diagram.png" 
    alt="Block diagram of The SCavenger's physical components" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Block diagram of The SCavenger's physical components
  </figcaption>
</figure>

## Significant Efforts I Contributed

{% set itemList = collections['scavenger-challenges'] %}
{% include 'partials/details.njk' %}

{% css "local" %}
  {% include "css/custom-card.css" %}
{% endcss %}