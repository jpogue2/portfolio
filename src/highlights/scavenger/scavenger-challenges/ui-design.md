---
title: "Designing UI/UX Under Embedded Constraints"
tags: ["scavenger-challenges"]
---

Unlike many capstone projects with a single measurable target, **The SCavenger was ultimately judged by an experiential metric: fun**. Early design work focused on what makes an “escape room in a box” engaging. I distilled our approach into three principles, each presenting unique challenges.

1. <strong>The player should feel appropriately challenged</strong>. Players bring different levels of puzzle-solving experience, so the system needed adjustable difficulty without changing core gameplay. We implemented an <strong>on-demand clue system</strong> that lets players request progressively stronger hints when they get stuck.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-clue.jpg" 
    alt="Example Clue for Puzzle #1: It's Bright in Here!" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Example player-requested clue for Puzzle #1
  </figcaption>
</figure>

2. <strong>The interface should be intuitive</strong>. We evaluated several input schemes (including a joystick) and ultimately chose a four-button model: <strong>Power</strong>, <strong>Next</strong>, <strong>Back</strong>, and <strong>Clue</strong>. Supporting dialogue, prompts, clue confirmation, and multi-step clue navigation within this constraint required a carefully designed <strong>finite state machine</strong> to keep behavior predictable and prevent dead ends.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-clue-states.png" 
    alt="Finite state machine governing clue navigation using a four-button interface" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Finite state machine governing clue navigation using a four-button interface
  </figcaption>
</figure>

3. <strong>The player should feel emotionally connected to the story</strong>. Delivering narrative on a microcontroller with only a <strong>64-character LCD</strong> and a <strong>buzzer</strong> required deliberate pacing and expressive feedback. I wrote a [short narrative](https://docs.google.com/document/d/1yN7U8qsw3FAz7uXZCeV_KPWzGUr-HrtYTuVLABrnC-4/edit?usp=sharing) and implemented delivery using <strong>character-by-character text rendering</strong> paired with a <strong>narrator-associated tonal "voice signature"</strong> synchronized with on-screen text.

<figure style="text-align: center; margin: 2rem 0;">
  <video 
    controls 
    width="600" 
    style="max-width: 40%; border-radius: 0.5rem;"
    preload="metadata"
  >
    <source src="/assets/videos/scavenger-dialogue.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #444;">
    Demonstration of character-by-character text rendering with narrator-associated audio cues
  </figcaption>
</figure>

Implementing this cleanly was more complex than it sounds: the LCD’s low-level command interface, unconventional memory addressing (rows mapped non-sequentially), and text-layout edge cases (word wrapping, line breaks, and responsive button handling during rendering) all had to be managed without breaking pacing or usability.