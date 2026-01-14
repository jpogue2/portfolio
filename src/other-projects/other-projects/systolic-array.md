---
title: "Systolic Array"
tags: ["other-projects"]
projectTags: ["Technical", "VLSI", "Digital Design", "ASIC Design", "Cadence Virtuoso"]
order: 4
---

As part of **EE 477: MOS VLSI Circuit Design**, I designed and implemented a **full-custom 4×4 systolic array for matrix multiplication** using Cadence Virtuoso. The architecture was built around a grid of pipelined processing elements that stream input matrices through the array while accumulating partial sums in a regular, scalable dataflow. Ripple-carry adders were built from a [research-derived CMOS full-adder cell](https://www.semanticscholar.org/paper/Low-Power-and-High-Performance-1-Bit-CMOS-Cell-Navi-Kavehei/5f2099a6f33cf69d818c6543b8dd57a2a32a5cf0) optimized at the transistor level for area and delay.

I completed schematic design, full-custom layout, and functional verification of the array, balancing correctness, area, and timing constraints. The final design was awarded **Best Design out of over 100 teams**, based on PAD (power consumption, area, and delay) efficiency.

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/vlsi/processing-element.png" 
    alt="Annotated schematic of a single processing element (PE)" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Annotated schematic of a single processing element (PE)
  </figcaption>
</figure>

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/vlsi/waveform-verification.png" 
    alt="Transient waveform verifying functionality of the 4×4 systolic array" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Transient waveform verifying functionality of the 4×4 systolic array
  </figcaption>
</figure>

<figure style="text-align: center; margin: 2rem 0;">
  <img 
    src="/assets/images/projects/vlsi/layout.png" 
    alt="Full-custom layout of the 4×4 systolic array. Gross!" 
    loading="eager" 
    decoding="sync" 
    style="border-radius: 0.5rem; max-width: 600px; width: 100%; height: auto;"
  >
  <figcaption style="margin-top: 1rem; font-size: 1rem; color: #161616;">
    Full-custom layout of the 4×4 systolic array. Gross!
  </figcaption>
</figure>