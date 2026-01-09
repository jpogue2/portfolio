---
title: "Challenge #1: Assembly and Wire Management"
tags: ["golf-challenges"]
---

Each musical step includes two electrical components: a piezo vibration sensor and an RFID reader. The piezo requires two wires <strong>(GND and Signal)</strong>, while the RFID reader needs seven <strong>(CS, SCK, MOSI, MISO, GND, RST, and 3.3V)</strong>. By sharing the GND connection, each step requires 8 unique wires, adding up to <strong>80 wires</strong> across all 10 steps.

At the start of the semester, I gave myself a week to complete the wiring. But I severely underestimated the complexity of managing that many connections at scale, and it ended up taking <strong>over a month</strong>. 

My initial plan was to run individual wires from the Arduino Mega to each RFID reader and vibration sensor pin. However, this raised two major concerns:
1. <strong>Cable management</strong>: With 80 wires hanging off a physical staircase, the setup would be messy, fragile, and prone to failure.
2. <strong>Maintainability</strong>: If a sensor stopped working mid-operation, fixing it would require a soldering iron and potentially hours of disassembly and rework.

I approached my <a href="https://jpogue.netlify.app/highlights/scavenger" class="underline text-blue-600 hover:text-blue-800">senior capstone</a> advisor with these concerns, and he suggested using <strong>ribbon cable</strong> to connect each peripheral step to a central protoboard. If a step failed, its cable could be easily detached, making component replacement quick and straightforward.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/musical-steps-step.jpeg" 
    alt="The electrical components on a single step were a piezo vibration sensor and an RFID reader." 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Each step was wired to the central protoboard using ribbon cable.
  </figcaption>
</figure>

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/musical-steps-motherboard.jpeg" 
    alt="Motherboard for Musical Steps" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    The central protoboard connects all peripheral steps to the Arduino Mega.
  </figcaption>
</figure>

As a result, wiring up a single step became <strong>an hours-long process</strong>. For each one, the ribbon cable had to be carefully measured, cut to length, and crimped onto connectors. On the step side, eight wires were measured, cut, stripped, soldered to their respective components, and threaded through small holes in the step platform. The RFID reader was mounted to the wall, and the piezo sensor was adhered directly to the step.

On the protoboard side, pin headers were cut and soldered in place, both for each ribbon cable and for the shared signals (MISO, MOSI, SCK, RST, GND, and 3.3V). <strong>Only after all of this could the sensors be connected to the Arduino Mega for integration testing</strong>.

If I had done this alone, it would have taken days. But fortunately, other team members were eager to help. I created a series of <strong>step-by-step instructions</strong> to guide them through assembling and testing each component. Here’s an example for the piezo vibration sensors.

<div style="text-align: center;">
  <iframe 
    src="/assets/files/piezo-instructions.pdf" 
    width="60%" 
    height="300px" 
    style="border: none; display: inline-block;">
  </iframe>
</div>