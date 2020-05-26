---
date: 2020-05-05
title: 💻 Selected Work
id: work
---

I’ve pushed some pixels. Here’s a super small selection.

<ul class="work">
  {%- for work in collections.work | reverse -%}
    {%- if work.data.video -%}
      <li>
        <a class="work__link link--naked" href="{{ work.data.url }}" target="_blank" rel="noopener nofollow">
          <video class="work__video" muted loop name="{{ work.data.title }}" src="/videos/{{ work.data.video }}"></video>
          <p class="work__details">
            <span class="work__emoji">▶️</span> <strong>{{ work.data.title }}</strong> (via {{ work.data.company }}) with {{ work.data.tech }} 
          </p>
        </a>
      </li>
    {%- elseif work.data.image -%}
      <li>
        <a class="work__link link--naked" href="{{ work.data.url }}" target="_blank" rel="noopener nofollow">
          <img class="work__image" src="/images/{{ work.data.image }}" alt="" />
          <p class="work__details">
            <strong>{{ work.data.title }}</strong> (via {{ work.data.company }}) with {{ work.data.tech }}
          </p>
        </a>
      </li>
    {%- endif -%}
  {%- endfor -%}
</ul>