---
title: "Debugging the GPS Module"
tags: ["scavenger-challenges"]
---

While most puzzles were tested at a desk, the GPS challenge demanded real-world conditions, and quickly became the most technically unpredictable part of the system.

1. <strong>GPS data doesn’t wait for you</strong>

Early implementations relied on blocking serial reads to capture a full NMEA sentence (e.g., "$GPRMC,...\r\n"). This led to severe bugs: the system would freeze waiting for a message, or display corrupted/incomplete coordinate data if a partial sentence was parsed.

To fix this, I rewrote the serial handling using an <strong>interrupt-driven ring buffer</strong>. Each character from the GPS module was read non-blocking via UART and stored until a full sentence was detected (\r\n). A `gps_ready` flag marked when a complete message was available. This allowed the game loop to remain responsive while waiting for valid GPS data in the background.

<figure style="text-align: center; margin: 2rem 0;">
  <video 
    controls 
    width="600" 
    style="max-width: 40%; border-radius: 0.5rem;"
    preload="metadata"
  >
    <source src="/assets/videos/scavenger-gps-raw.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #444;">
    Raw NMEA GPS output captured on-device during debugging
  </figcaption>
</figure>

2. <strong>You only get one sentence at a time</strong>

Parsing the GPS stream was also trickier than expected. Multiple sentence types ($GPGGA, $GPRMC) arrived in unpredictable order. Fields could shift depending on the sentence type, and many fields (like coordinates) would be left blank until a satellite fix was acquired.

To handle this, I wrote a robust parser that accepted both sentence types, extracted latitude and longitude fields based on sentence format, and ignored invalid or zeroed-out coordinates until a fix was confirmed.

3. <strong>Testing required... elevation</strong>

Because GPS reception was unreliable indoors, I often had to test outside. The most reliable results came from standing on top of a parking garage, holding the project box like a handheld scanner while watching the LCD slowly update with raw GPS data.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/scavenger/scavenger-parking.png" 
    alt="Late-night rooftop debugging" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Late-night rooftop debugging
  </figcaption>
</figure>