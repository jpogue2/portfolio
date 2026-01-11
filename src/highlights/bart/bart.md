---
title: Bartholomew Banksworth
permalink: /highlights/bart/index.html
description: A Monopoly opponent robot built by Jeremy Pogue.
layout: page
---

<img src="/assets/images/projects/bart/bart-team.jpeg" alt="Jeremy Pogue with his Bartholomew Banksworth team" sizes="(max-width: 615px) 50vw, 100vw" loading="eager" decoding="sync" style="border-radius: 0.5rem">

<a href="https://github.com/uscmakers/BartholomewBanksworth" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="no-arrow github-link" 
   style="display: inline-flex; align-items: center; font-weight: bold; gap: 0.5rem;">
  <img 
    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
    width="40" 
    height="40" 
    alt="GitHub logo" 
    style="display: inline-block;"> GitHub for Bartholomew Banksworth
</a>

Bartholomew Banksworth is a physical Monopoly-playing robot designed to autonomously interact with the board, track game state, and compete against human players. I led the project end-to-end as the year-long project manager, creative lead, and embedded systems engineer.

The project was developed through USC Makers, a multidisciplinary student organization focused on hands-on engineering and robotics. After spending my first year as a general member, I proposed and led Bartholomew Banksworth during my junior year, guiding a full team of seven engineers from initial concept through final implementation.

In practice, leading the project meant wearing several hats throughout the year.

## My Roles and Responsibilities

{% set itemList = collections['bart-roles'] %}
{% include 'partials/details.njk' %}

{% css "local" %}
  {% include "css/custom-card.css" %}
{% endcss %}

## Demo Video

Speaking of video editing, here’s a demo of Bartholomew Banksworth as shown at the USC Makers final showcase.

<figure style="text-align: center; margin: 2rem 0;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/7D3RmFLuJUY"
    width="67%"
    height="450"
    frameborder="0"
    allowfullscreen>
  </iframe>
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666;">
    Full project walkthrough and demo of Bartholomew Banksworth.
  </figcaption>
</figure>

## How Does it Work?

At a glance, Bartholomew Banksworth combines a **mechanical system** for moving game pieces with a **software agent** that decides what those movements should be. Here’s a high-level look at how the system fits together.

### Mechanical System: 

Underneath the circular Monopoly board, a **rotating lever arm** moves player pieces using electromagnets. The lever arm sweeps through concentric circles beneath the board, allowing it to move individual pieces without collision.

The arm is driven by a stepper motor connected via a **belt-and-pulley system**, providing precise, repeatable positioning. Because the electromagnets must remain powered while the arm rotates continuously, a **slip ring** is used to maintain a wired electrical connection without cables twisting or tangling during motion.

This setup allows the robot to manipulate pieces smoothly while remaining independent from players above the board.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/bart/bart-lever-arm.jpeg" 
    alt="Bartholomew Banksworth's lever arm consisting of a belt-and-pulley system, a slip ring, and electromagnets" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Bartholomew Banksworth's lever arm consisting of a belt-and-pulley system, a slip ring, and electromagnets
  </figcaption>
</figure>

### Electrical System:

A **Raspberry Pi** serves as the central controller for the physical system. It handles motor control through a dedicated **motor driver module**, which was carefully tuned to deliver the correct current for both the stepper motor and the mechanical load of the lever arm.

This tuning was essential for reliable operation: too little current led to missed steps and loss of positional accuracy, while too much risked overheating. The final configuration balanced precision, reliability, and hardware safety over long gameplay sessions.

### Software System:

On the software side, a **Python backend maintains the game state** based on terminal input provided by the human players. The backend is written in an object-oriented style, with classes representing players, properties, and core game mechanics.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/bart/bart-object-oriented.png" 
    alt="Object-oriented architecture of the Monopoly game engine" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Object-oriented architecture of the Monopoly game engine
  </figcaption>
</figure>

This game state feeds into a **reinforcement-learning agent built using SIMPLE (Self-Play in Multi-player Environments)**, which evaluates the current situation and selects actions such as movement and strategic decisions. Those high-level decisions are translated into motor commands and sent to the Raspberry Pi, which executes the corresponding physical movements and tracks the assumed position of the system.

## Results & Outcomes

By the end of the year, Bartholomew Banksworth met the goals we set out at the start of the project.

From a technical standpoint, the final system successfully:
<ul class="list-disc pl-6 space-y-2">
  <li>
    <strong>Physically moves player pieces</strong> on a standard Monopoly board using an under-board actuation mechanism
  </li>
  <li>
    <strong>Participates in gameplay</strong> alongside human players in a way that felt intuitive and engaging
  </li>
  <li>
    <strong>Makes non-scripted decisions</strong> driven by a reinforcement-learning-based agent rather than hardcoded logic
  </li>
</ul>

Just as importantly, the project was a success from a **team** and **leadership** perspective. Of the six other engineers on the team, **four went on to become project managers** on subsequent projects. Several cited their experience on Bartholomew Banksworth as the most **positive and formative project** of their academic careers.

## What I Would Have Done Differently

Looking back, a few design decisions stand out as areas where additional time or different prioritization could have improved the system.

1. **Added closed-loop position feedback for the motor system.** The lever arm currently relies on open-loop stepper control, which is susceptible to small positional drift over time. Adding a potentiometer or encoder to directly sense motor position would have allowed for periodic correction and more robust long-term operation.
2. **Started reinforcement learning development earlier in the project timeline.** Because reinforcement learning was both new to the team and central to the project’s ambition, earlier experimentation would have enabled more thorough training and deeper exploration.
3. **Explored direct sensing of game state as a stretch goal.** Given additional time and budget, I would have liked the robot to infer game state directly—using cameras, light sensors, or other sensing methods, rather than relying on terminal input from players. While intentionally out of scope for this project, it remains an exciting direction for future work.