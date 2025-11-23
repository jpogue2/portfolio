---
title: Coasterboard
permalink: /coasterboard/index.html
description: Jeremy Pogue's coaster rankings!
layout: page
lastUpdated: November 23, 2025
---

Welcome to my Coasterboard! Roller coasters are a big part of my life, so I've compiled everything I've ridden and listed them in ranked-ish order. Tell me where I need to visit next!

Disclaimer: These rankings are completely agnostic of each experience's actual quality. They are riddled with personal bias and emotional significance. So, they are basically meaningless. But, isn't it fun to rank things?

**Last Updated: {{ lastUpdated }}**

<ol>
  {% for coaster in coasterboard %}
    <li>{{ coaster.name }} ({{ coaster.park }})</li>
  {% endfor %}
</ol>