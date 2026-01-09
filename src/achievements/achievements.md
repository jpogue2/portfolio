---
title: Achievements
permalink: /achievements/index.html
description: "Jeremy Pogue's awards and accolades."
layout: page
---

Here are a few examples of recognitions I’ve received for my academic and personal achievements.
<!-- loop docs -->
{% set itemList = collections.achievements %}
{% include 'partials/details.njk' %}

{% css "local" %}
  {% include "css/custom-card.css" %}
{% endcss %}
