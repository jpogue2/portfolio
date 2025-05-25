---
title: "Challenge #2: Long-Range SPI"
tags: ["golf-challenges"]
---

The RFID readers communicate using the [SPI protocol](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface). SPI was originally designed for <strong>short-distance, high-speed communication</strong> on a single PCB. However, Musical Steps required SPI to function reliably over distances of <strong>up to seven feet</strong>, well beyond its intended range.

This limitation was a known concern from the outset and became a central focus of early unit testing. In those tests, I found that the RFID readers operated reliably at short distances or in small groups, but <strong>began to fail</strong> and become unresponsive when the wiring extended <strong>beyond four feet</strong>.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/musical-steps-rfid.jpeg" 
    alt="An Early RFID Unit Test" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 30%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    An Early RFID Unit Test
  </figcaption>
</figure>

I achieved early success by combining several signal integrity strategies:

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Reducing the SPI clock speed</strong> from 1 MHz to 500 kHz.</li>
    <li><strong>Adding 100Ω series resistors</strong> on the SCK, MOSI, and CS lines to dampen reflections.</li>
    <li><strong>Alternating GND and signal lines</strong> within each ribbon cable to minimize crosstalk and ensure clean return paths.</li>
</ul>

With these improvements, <strong>I was able to reliably operate two RFID readers simultaneously over distances of up to 7 feet</strong>.

But scaling beyond that, even to three readers, remained unreliable.

I tried just about every trick in the book: adjusting clock speeds further, experimenting with multiple RFID and Software SPI libraries, and even borrowing [Professor Allan Weber’s](https://sipi.usc.edu/~weber/) portable oscilloscope to diagnose the issue.

<strong>One idea remained</strong>. Since I had verified that the readers worked reliably in pairs, I theorized that I could run SPI over five independent sets of Arduino pins: one for each pair of readers. The catch? I could no longer use the Arduino’s built-in hardware SPI library.

So, [I painstakingly rewrote the entire SPI communication for the RFID readers in software](https://github.com/jpogue2/MiniGolfv1/blob/master/MFRC522_BitBang.cpp).

<strong>And, it worked</strong>! With a bit-banged implementation of SPI, long-range communication was no longer an issue. The RFID readers responded reliably, even at full distance.

<figure style="text-align: center; margin: 2rem 0;">
  <video 
    controls 
    width="600" 
    style="max-width: 40%; border-radius: 0.5rem;"
    preload="metadata"
  >
    <source src="/assets/videos/musical-steps-rfid-working.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #444;">
    The RFID readers are working!
  </figcaption>
</figure>