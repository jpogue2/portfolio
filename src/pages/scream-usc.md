---
title: Scream USC
permalink: /highlights/scream-usc/index.html
description: A USC student organization dedicated to amusement park engineers and enthusiasts.
layout: page
---

Welcome to my Coasterboard! Here, I've compiled all of the roller coasters I've ridden and listed them in ranked-ish order. Tell me where I need to visit next!

Disclaimer: These rankings are completely agnostic of each experience's actual quality. They are riddled with personal bias and emotional significance. So, they are basically meaningless. But, isn't it fun to rank things?

<ol>
  {% for coaster in coasterboard %}
    <li>{{ coaster.name }} ({{ coaster.park }})</li>
  {% endfor %}
</ol>