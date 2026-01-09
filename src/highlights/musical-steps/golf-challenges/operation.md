---
title: "Challenge #4: Operation"
tags: ["golf-challenges"]
---

The mini-golf course operated continuously over the span of a full day, so it was important to make the system as simple and intuitive as possible for operators to manage. This led to two key design decisions:
1. <strong>A physical reset button:</strong> Pressing this pushbutton resets all internal game state variables and toggles the solenoid, allowing the operator to easily re-close the trapdoor between rounds.
2. <strong>A real-time GUI:</strong> A simple graphical interface was created to display the status of each step and its components. This GUI was integrated into the Python script responsible for audio playback, as described in the previous section.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/musical-steps-gui.png" 
    alt="GUI for Musical Steps" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    The Operator GUI for Musical Steps
  </figcaption>
</figure>