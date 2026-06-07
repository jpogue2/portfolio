---
title: "PacMan"
tags: ["other-projects"]
projectTags: ["Technical", "FPGA", "Digital Design", "Computer Architecture", "Game Programming"]
order: 10
---

As part of **EE 354: Introduction to Digital Circuits**, I developed a rapid prototype of Pac-Man implemented on a **Nexys A7 FPGA** using **Verilog in Xilinx Vivado**. To keep iteration fast on a short timeline, we intentionally simplified the visual system with a **sprite-less approach**, avoiding long synthesis cycles. This pushed the focus toward core digital design problems, including implementing game logic as **finite state machines**, encoding the maze and movement rules directly in hardware, and coordinating input handling, game state updates, and display output within a **synchronous system**.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/pacman/pacman.png" 
    alt="Sprite-less Pac-Man prototype running on FPGA" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Sprite-less Pac-Man prototype running on FPGA
  </figcaption>
</figure>