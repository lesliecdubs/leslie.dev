---
title: Leslie Cohn-Wein builds stuff
subtitle: Frontend leader & engineering manager at <a href="http://www.netlify.com" target="_blank" rel="noopener nofollow">Netlify</a> working remote from Dallas.<br />Former agency dev at <a href="http://canvasunited.com" target="_blank" rel="noopener nofollow">Canvas United</a> and IBM IX in NYC.<br/>Pronounced CONE🍦-wine🍷. She/her.
layout: layouts/home.njk
---

<!-- Loop through collecton in /about folder -->
{%- for about in collections.about -%}
  {% include 'about-item.njk' %}
{%- endfor -%}
