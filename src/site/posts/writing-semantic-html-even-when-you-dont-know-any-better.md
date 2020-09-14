---
title: "Writing semantic HTML even when you don't know any better: progress vs meter"
date: 2020-09-13
description: There are something like 110 unique tags in HTML5. How can you figure out which semantic element to use when you don't even know what's available to you? Let's take a look at a real-world example.
ogimage: https://leslie.dev/images/posts/writing-semantic-html-even-when-you-dont-know-any-better/og.jpg
---

There are something like {% externalLink '110 unique tags in HTML5', 'http://html5doctor.com/element-index/' %}. Not exactly the easiest list to memorize, am I right? (Even for me, and I'm the kind of person whose {% externalLink 'desktop wallpaper', 'https://www.smashingmagazine.com/2015/05/desktop-wallpaper-calendars-june-2015/#periodic-table-of-html5-elements' %} shows a periodic table of HTML5 elements.)

So, how can you figure out which {% externalLink 'semantic element', 'https://www.freecodecamp.org/news/semantic-html5-elements/#why-use-semantic-elements' %} to use when you don't even know what's available to you? Let's take a look at a real-world example.

## Define the component requirements

The design team at Netlify recently passed off a new Figma component for implementation in React. Looks pretty straightforward to me!

<p class="post__half">
<img src="/images/posts/writing-semantic-html-even-when-you-dont-know-any-better/metric-widget.png" alt="Screenshot: UI widget with a status bar, showing $218 of $400 spent on groceries"  />
</p>

I started by making a quick list of the requirements. The component should have:

- the ability to act like a link if an `href` is passed
- a status bar to indicate current usage, which looked a lot like the `<progress>` element to me
- a numeric `value` and `max` limit
- the ability to handle different units (such as money, file size, etc.)
- styles that match the mockup, including hover and focus states

<div class="separator"></div>

## Ask: "Does my markup make sense in plain English?"

Knowing the requirements can help us translate the component into code. 

Narrowing in on the link and status bar reqs, I wrote three lines of markup:

```html
<a href="http://leslie.dev">
	<progress value="218" max="400">54%</progress>
</a>
```
<progress value="218" max="400">54%</progress>

Why did I use `<progress>`? First, because I knew it existed, and second, because the default styles for `<progress>` look _almost exactly like_ the design mockup I was given.

But when I write new HTML, I try to ask myself: "Does this markup make sense in plain English?" This is, after all, the essence of what the word **semantic** means: the "correct interpretation of the meaning of a word" (source: {% externalLink 'dictionary.com', 'https://www.dictionary.com/browse/semantics' %}). In most cases, we should be able to "translate" our markup into an intelligible sentence.

So: "$218 used is progress toward a $400 budget."

Not quite right, huh? It would probably make more sense to call this "money usage," not "money progress."

**Rewording markup in plain English can help make semantic discrepancies more obvious.** Checking {% externalLink 'the MDN docs', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress' %} also provides some clarity:

> The HTML `<progress>` element displays an indicator showing the completion progress of a task

We're definitely not showing the completion progress of a task here. Case closed! We shouldn't use `<progress>` for this component.

<div class="separator separator--alt"></div>

## Follow the docs

So, what element should we use instead? 

Lucky for us, MDN is great at giving hints. If we keep reading the docs about `<progress>`, we'll come across a note under {% externalLink 'the "Attributes" heading', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#Attrributes' %} that mentions the related `<meter>` element:

> The HTML `<meter>` element represents either a scalar value within a known range or a fractional value

To steal a catchphrase from former Netlify designer {% externalLink 'Rafa Conde', 'https://rafa.design/' %}: 🛎️ Ding! 

We want to communicate that $218 was used in relation to a maximum budget of $400. This is the element we want!

<div class="separator"></div>

## Keep learning: `<meter>` in context

If it seems like we had to do a lot of work in order to make a one-word change in the final markup, you wouldn't be wrong.

```html
<a href="http://leslie.dev">
	<meter value="218" max="400">$218/$400</meter>
</a>
```
<meter value="218" max="400">$218/$400</meter>

So why put all this effort in? 

Well, besides the obvious {% externalLink 'accessibility wins', 'https://24ways.org/2017/accessibility-through-semantic-html/' %}, **using the proper semantic element can give us more functionality for free**. 

In this case, `<meter>` has some special attributes baked in that `<progress>` does not. Along with  `min` and `max`, `<meter>` also supports `low` , `high`, and `optimum`. These attributes let us specify the bounds of the measured range, and we can also use them to hook into pseudo classes for custom styling.

This means we can control the color of our status bar based on the value!

So now we can style the bar to be green when it's in the lower bound, blue in the optimum or expected range, and yellow as we near the limit of our budget.

```html
<a href="http://leslie.dev">
	<meter value="370" max="400" high="300" optimum="200">$370/$400</meter>
</a>
```
<meter value="370" max="400" high="300" optimum="200">$370/$400</meter>

CSS Tricks offers more {% externalLink 'tips for styling the `<meter>` element', 'https://css-tricks.com/html5-meter-element/' %}. 

If you're interested in how I styled this particular component to match the mockup, {% externalLink 'let me know on Twitter', 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fleslie.dev%2Fposts%2Fwriting-semantic-html-even-when-you-dont-know-any-better%2F&via=lesliecdubs&text=Hey%20Leslie%2C%20I%20wanna%20know%20how%20you%20styled%20the%20%60%3Cmeter%3E%60%20element%21' %} and maybe I'll draft a follow-up (spoiler: applying selective rounded corners to the different states of `<meter>` is a trip!).

<div class="separator separator--alt"></div>

## TLDR: Semantics matter

When writing new markup:

- Ask: "Does my markup make sense in plain English?" Rewording markup in plain English can help make semantic discrepancies more obvious.
- Read the MDN docs to confirm your usage
- Leverage baked-in functionality for free
