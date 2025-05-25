---
title: Musical Steps
permalink: /highlights/musical-steps/index.html
description: An Arduino-based interactive mini-golf hole built by Jeremy Pogue.
layout: page
---

<img src="/assets/images/musical-steps-jeremy.jpg" alt="Jeremy Pogue in front of Musical Steps" sizes="(max-width: 615px) 50vw, 100vw" loading="eager" decoding="sync" style="border-radius: 0.5rem">

<a href="https://github.com/jpogue2/MiniGolfv1" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="no-arrow github-link" 
   style="display: inline-flex; align-items: center; font-weight: bold; gap: 0.5rem;">
  <img 
    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
    width="40" 
    height="40" 
    alt="GitHub logo" 
    style="display: inline-block;"> GitHub for Musical Steps
</a>

One of the signature courses in USC’s Themed Entertainment program is a year-long miniature golf project, where students design the course in the fall and build it in the spring. Although I wasn’t enrolled in the class, I was brought on as a <strong>volunteer technical director to create the embedded system</strong> for an ambitious, puzzle-based hole called <strong>Musical Steps</strong>.

The course was themed as an enchanted garden inhabited by mischievous fairies, with each hole presenting a playful, tricky challenge. In Musical Steps, players encounter a staircase with steps that each play a musical note—but in the wrong order. Their task is <strong>to rearrange the steps</strong> based on subtle, color-based clues hidden throughout the environment.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/musical-steps-clues.png" 
    alt="Clues for Musical Steps" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Numbered tiles in the background hinted at how to arrange the steps.
  </figcaption>
</figure>

My role was to <strong>bring this creative concept to life</strong> and ensure the experience delivered on its interactive intent.

And, spoiler alert, <strong>it worked</strong>!

<figure style="text-align: center; margin: 2rem 0;">
  <video 
    controls 
    width="600" 
    style="max-width: 40%; border-radius: 0.5rem;"
    preload="metadata"
  >
    <source src="/assets/videos/musical-steps.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #444;">
    A short demo of Musical Steps in action, with audio!
  </figcaption>
</figure>

What I initially thought would be a relatively simple project turned out to be the most involved undertaking of my senior year. After countless hours spent troubleshooting out on the lawn where the course was installed, I came away with a deep appreciation for <strong>modularity, simplicity, and most importantly, proper desks</strong>.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/not-a-desk.png" 
    alt="Jeremy Pogue underneath the Musical Steps" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Me at my "desk" (underneath Musical Steps)
  </figcaption>
</figure>

Here's a quick look at how it works:

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/musical-steps-exposed.png" 
    alt="Musical Steps exposed" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    The Electronics of Musical Steps
  </figcaption>
</figure>

<ul class="list-disc pl-6 space-y-2">
  <li>A <strong>"step triggered" event</strong> is detected using a
    <a href="https://www.amazon.com/MakerHawk-Analog-Ceramic-Vibration-Arduino/dp/B07KS5NV4V/ref=asc_df_B07KS5NV4V?mcid=58eb0866b3eb3960a0b3842f84601896&hvocijid=5790331022510568222-B07KS5NV4V-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=5790331022510568222&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014437&hvtargid=pla-2281435177898&psc=1" target="_blank" rel="noopener noreferrer" class="underline text-blue-600 hover:text-blue-800">
      piezo vibration sensor</a> on each step platform.</li>
  <li>Each step contains an RFID tag, and each step platform is fitted with a corresponding <a href="https://www.amazon.com/6Pcs-RC522-Module-Reader-Sensor/dp/B0CC4JGN3P/ref=sr_1_1?crid=1ENJI7G3DU4B6&dib=eyJ2IjoiMSJ9.WUkOSrh0fcOQCttGFp_4EQoJNnbbNxcewTt7APRtP1WU45O2a3vyZsWuHiFlclr-Ko42QNqvnN9QJ_ogk4fFBBOXk52kfmuCFaX9VA4Uah32WNsNA0-eNPGIE5Iwutdq44A7oIPaP5a2fm9ncLLG9Hx378_mECRjKey6FI10ddSKyL5zO_-G7BdX7fs4ABFPqa-_gpHDEjQYrW79rArKFF_SSWxQkyCENoUtDR6dQ27R5wUju4Jk2EcnMjm_bkClrt4xQy_wf5X8JaWUheYGYCWFcA-krPzxvijeK8IFYLA.w_ZSg7cbIOtHhG5Wczwd2woxV_Xq4i-NMRQxI3kAJTM&dib_tag=se&keywords=rfid%2Breader%2Bmodule&qid=1748152168&s=industrial&sprefix=rfid%2Breader%2Bmodul%2Cindustrial%2C121&sr=1-1&th=1" target="_blank" rel="noopener noreferrer" class="underline text-blue-600 hover:text-blue-800">
      RFID reader</a>. <strong>This tracks where steps are placed</strong>.</li>
  <li>A Python script <strong>displays the status</strong> of each component and <strong>sends audio output</strong> to a speaker. The Python script receives status and audio messages from the Arduino Mega via <strong>serial communication</strong>.</li>
  <li>When a step is placed <strong>correctly</strong>, it plays a musical tone when triggered. When a step is placed <strong>incorrectly</strong>, it plays a dissonant chord.</li>
  <li>When <strong>all steps are placed correctly</strong> and the final step is triggered, a <a href="https://www.amazon.com/Baomain-Solenoid-Electromagnet-JF-0530B-PushPull/dp/B01K41EZAU/ref=sr_1_4?crid=3CS5SELJ19DPS&dib=eyJ2IjoiMSJ9.0UagFtcPNAlkrgC9TgDN942XVs3p9SZfe6GKyh4fN5mnz0GNAyFU_80oOrT8vbIvvamC2oJlgNuqCpzKslCPTPPh6YfRUMHFT-MjQmKVB0ps4diKJTzeLtxeCOMWH9sDSots4N8EpDPnF88jNvnMfyujVPmXJuCV7ZdyXD2EstggJ71NxKP0Njgi6Bzj9smFs8TZYWxMm9Nm8C0ovBverE9O0SlbCWxhUkATKI8wt_OpzW2Vbk2bjpP-HYvMdlKbA3jb99PhTDitS26_kDzOt4OFQva7g8xyjaqzOsnbaC4.9-8WNrhI7CspqbZmYraxNN6U6p27rSR0-1Bue0qHYz8&dib_tag=se&keywords=12v+solenoid&qid=1748152332&s=industrial&sprefix=12v+solenoid%2Cindustrial%2C136&sr=1-4" target="_blank" rel="noopener noreferrer" class="underline text-blue-600 hover:text-blue-800">
      solenoid</a> releases a trapdoor. The solenoid is controlled with a <a href="https://www.amazon.com/AEDIKO-Channel-Optocoupler-Isolation-Support/dp/B095YFJ69T/ref=sr_1_3?crid=XUZF2D80XD05&dib=eyJ2IjoiMSJ9.qU_BUkhonYLK1u91-Gp8CwPDjEBfJAr0IqIa0x9Fdc-yg1MnR6Mr2lwCz4Ky4_JTCnDXbO6-bCHInzguOzZ7JHus58gyJQOX0BCc4DPWVBYC9Fu8LHLy0FBofH1EyM5ydyoZApXfrlaeFs9YmnvuH_iAhLl_x6CHjpUaVq3QtDvZru-1aSXq6AlDFFLfYafFfUcyzdyLKYE-tlYY-_E0tqwP2GTJLoOa9X_k2Lmss38_Z-MqaFXMJmylrAnS5LcYvnE-gqYTU5wbGvANBK_8KQau-FepjcCW6AfQIQuuL78.2XPSdgyqy9jg-V4Y7q7gZOnqsEZV4fjOdCfB_lAuwwQ&dib_tag=se&keywords=12v%2Brelay&qid=1748152266&s=industrial&sprefix=12v%2Brelay%2Cindustrial%2C153&sr=1-3&th=1" target="_blank" rel="noopener noreferrer" class="underline text-blue-600 hover:text-blue-800">
      12V relay</a>.</li>
    <li>A pushbutton toggles the solenoid and resets the internal game logic, <strong>allowing operators to prepare the hole for the next party</strong>.</li>
</ul>

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/musical-steps-block-diagram.png" 
    alt="Block diagram for Musical Steps" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Block Diagram for Musical Steps
  </figcaption>
</figure>

I followed a workflow of unit testing new components individually and integrating them incrementally through small, iterative steps. That said, a few moments called for a bit more scrappiness and improvisation.

## The Biggest Technical Challenges

{% set itemList = collections['golf-challenges'] %}
{% include 'partials/details.njk' %}

{% css "local" %}
  {% include "css/custom-card.css" %}
{% endcss %}