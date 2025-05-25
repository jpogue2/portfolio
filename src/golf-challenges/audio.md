---
title: "Challenge #3: Audio Delay"
tags: ["golf-challenges"]
---

This issue didn’t surface until the system was fully integrated. But by that point, several sources of audio delay had become apparent.

Initially, the speaker was controlled directly by the Arduino Mega via a [serial MP3 player module](https://www.amazon.com/DIYables-Player-Arduino-ESP8266-Raspberry/dp/B0CF593SWY/ref=sr_1_5?crid=2ZK4QLLU1WFNI&dib=eyJ2IjoiMSJ9.lRuqJ9HfGuzoeMdWgV2YTNwgNaJyT9CaAabNKzMa4YOrMrfLHXImI9gwZMEznqsOESiw3k-42NTMOFHws0jf5KIqSceAq9YIaejra0ATFQJNSChiSB8Z8DQiWhG5MlpqbTZHI0ZSVM2-yCHxkzBs15v7I_gQpZfjX2-8qVXglAYjMcY6_ScYg7vfdA7sPU3-g4XnxYIRGSKe3qbdm7wZYC948KQURE5qjw0mE3Bhi7s.8Uf6KMjaGsPMECScV1CoSgZyKica62KjWxsgg5W9O1I&dib_tag=se&keywords=arduino+to+3.5mm+mp3&qid=1748213654&sprefix=arduino+to+3.5mm+mp%2Caps%2C149&sr=8-5). These modules require MP3 files to be preloaded onto a microSD card and accept traditional commands like Play, Next, and Back. However, the onboard processor introduces noticeable latency when handling these commands, resulting in a delay between when a step is triggered and when the corresponding tone is played.

Further delay came from the software-implemented SPI communication with the RFID readers, as described in the previous section. While this bit-banged SPI allowed for reliable long-distance communication, scanning all readers could take up to 4 seconds. Because the Arduino Mega is single-threaded, this would sometimes delay tone playback by several seconds.

To reduce these delays, I implemented three key solutions:
1. <strong>Replaced the MP3 module with a Python script:</strong> By routing audio playback through a Python script over serial (at 9600 baud), the system became significantly more responsive.
2. <strong>Reduced RFID polling frequency:</strong> Instead of scanning continuously, RFID readers are polled every 10 seconds. This has minimal impact on gameplay, as players typically take longer than that to place a step and prepare for the next action.
3. <strong>Paused scanning during final play:</strong> Once the steps are arranged correctly, RFID scanning is suspended until the game is reset. This ensures that audio feedback is immediate during the most crucial and satisfying moment: the player's victory attempt.