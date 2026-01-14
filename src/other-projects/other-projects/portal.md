---
title: "Portal"
tags: ["other-projects"]
projectTags: ["Technical", "Game Programming", "C++", "OpenGL", "Physics Simulation"]
order: 1
---

<style>
  html, body { margin: 0; padding: 0; height: 100%; }
  #canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
  .game-wrap {
    width: 100%;
    max-width: 1100px;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
  }
  .game-wrap > canvas {
    width: 100%;
    height: 100%;
  }
</style>

As part of **ITP 380: Video Game Programming**, I built a **Portal-inspired 3D game** as my final project, working directly with **SDL and OpenGL** rather than a commercial engine.

My primary role was **gameplay programming**. I designed and implemented multiple levels, each focused on exercising a different mechanic: physics-based 3D platforming, a functional Portal gun with correct portal physics, real-time portal window rendering, movable blocks, laser puzzles, audio and dialogue systems, and a pause UI.

<figure style="text-align: center; margin: 2rem 0;">
  <div style="width: min(1100px, 100%); margin: 0 auto; aspect-ratio: 16 / 9;">
  <iframe
    src="/assets/portal-web/Lab12.html"
    style="width: 100%; height: 100%; border: 0; border-radius: 12px;"
    allow="fullscreen; autoplay"
    allowfullscreen
  ></iframe>
  </div>

  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666;">
    Click to focus. Press Esc to release cursor. WASD + Space to move. Left-click to shoot blue portal, right-click to shoot orange portal. <a href="/assets/portal-web/Lab12.html" target="_blank" rel="noopener">Open fullscreen</a>
  </figcaption>
</figure>
