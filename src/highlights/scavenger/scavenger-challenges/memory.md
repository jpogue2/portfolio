---
title: "Managing Flash and EEPROM Memory"
tags: ["scavenger-challenges"]
---

Flash and EEPROM memory were used to address two distinct constraints: **narrative storage and persistent game state**.

To support a story-driven experience, the project required storing a large amount of dialogue text. The ATmega328P provides only **2 KB of SRAM**, which is quickly exhausted by runtime variables and buffers. Early attempts to store dialogue in RAM proved infeasible as additional puzzles were added. To solve this, **all dialogue text was moved into flash memory (PROGMEM), which offers 32 KB total** (approximately 30 KB usable). This approach comfortably accommodated the full narrative while preserving SRAM for critical state and runtime logic.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-flash-mem.png" 
    alt="Code snippet allocating dialogue text to flash memory" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Code snippet that allocates dialogue text to flash memory
  </figcaption>
</figure>

Separately, the device needed to retain progress across power cycles for both testing and user convenience. **This was achieved using the ATmega328P’s EEPROM, where a single persistent value - the player’s current puzzle index - was stored**. The value was updated whenever the player progressed, allowing the game to resume from the correct point on the next power-up.