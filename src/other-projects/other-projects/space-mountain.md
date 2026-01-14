---
title: "Queue Time Analysis"
tags: ["other-projects"]
projectTags: ["Technical", "Machine Learning", "Themed Entertainment"]
order: 2
---

As part of **CSCI 467: Introduction to Machine Learning**, I developed a data-driven analysis of short-term **queue time prediction for Disneyland’s Space Mountain**. Using historical wait time data augmented with temporal, weather, and holiday features, I evaluated multiple regression and learning-based models.

A **tuned XGBoost model** achieved the best performance, **predicting queue times within 15 minutes** on test data. Error analysis highlighted the impact of unmodeled factors such as ride closures.

<div style="text-align: center; margin-top: 1.5rem;">
  <iframe
    src="/assets/files/space-mountain.pdf"
    width="100%"
    height="600"
    style="border: none; max-width: 100%;">
  </iframe>
</div>