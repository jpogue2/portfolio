---
title: Coasterboard
permalink: /coasterboard/index.html
description: Jeremy's coaster rankings!
layout: page
lastUpdated: May 23, 2025
---

Welcome to my Coasterboard! Here, I've compiled all of the roller coasters I've ridden and listed them in ranked-ish order. Tell me where I need to visit next!

Disclaimer: These rankings are completely agnostic of each experience's actual quality. They are riddled with personal bias and emotional significance. So, they are basically meaningless. But, isn't it fun to rank things?

**Last Updated: {{ lastUpdated }}**

<ol>
  {% for coaster in coasterboard %}
    <li>{{ coaster.name }} ({{ coaster.park }})</li>
  {% endfor %}
</ol>