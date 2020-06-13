---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<article class="post">
  <header class="header">
    <div class="skewed" aria-hidden="true"></div>
    <div class="header__content container">
      <h1>{{ title }}</h1>
      <p class="date">
        ✍️ <time datetime="{{ date }}">{{ date | dateDisplay("LLLL d, y") }}</time>
      </p>
    </div>
  </header>

  <div class="post__content">
    {{ content | safe }}
  </div>
</article>