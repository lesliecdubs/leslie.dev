---
title: Leslie Cohn-Wein builds stuff
subtitle: Design systems engineering manager at <a href="http://www.github.com" target="_blank" rel="noopener nofollow">GitHub</a> working remote from Dallas.<br />Previously frontend at <a href="http://www.netlify.com" target="_blank" rel="noopener nofollow">Netlify</a>, <a href="http://canvasunited.com" target="_blank" rel="noopener nofollow">Canvas United</a>, and IBM IX in NYC.<br/>Pronounced CONE🍦-wine🍷. She/her.
layout: layouts/home.njk
---

<!-- Loop through collecton in /about folder -->
{%- for about in collections.about -%}
  {% include 'about-item.njk' %}
{%- endfor -%}
