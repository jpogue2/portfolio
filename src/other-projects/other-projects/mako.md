---
title: "Mako POV"
tags: ["other-projects"]
projectTags: ["Technical", "Computer Graphics", "OpenGL", "Animation"]
order: 3
---

As part of **CSCI 420: Computer Graphics**, I built a **first-person roller coaster simulation** inspired by SeaWorld Orlando's Mako using modern OpenGL. I generated the track by sampling a **Catmull–Rom spline** and sweeping a cross-section along it, computing a stable tangent–normal–binormal frame to keep the camera and rails smoothly oriented through steep turns and drops.

To drive the motion, I approximated coaster speed with a **gravity-based energy model**, converting height changes into velocity along the spline for a more believable sense of acceleration. To ground the experience spatially, I textured the environment using **satellite imagery of SeaWorld Orlando**, resulting in a POV ride with per-fragment lighting for depth and readability.

<figure style="text-align: center; margin: 2rem 0;">
  <video 
    controls 
    width="600" 
    style="max-width: 80%; border-radius: 0.5rem;"
    preload="metadata"
  >
    <source src="/assets/videos/mako.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #444;">
    First-person POV of the simulated Mako coaster.
  </figcaption>
</figure>