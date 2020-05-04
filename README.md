# Leslie Cohn-Wein's Personal Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/056b4a67-70e6-4af4-9be5-dee151b8e906/deploy-status)](https://app.netlify.com/sites/leslie-dot-dev/deploys)

This site was built with [Phil Hawksworth's](https://github.com/philhawksworth) [EleventyOne](https://github.com/philhawksworth/eleventyone) template.

EleventyOne includes:

- [Eleventy](https://11ty.io) with a skeleton site
- A date format filter for Nunjucks based on [Luxon](https://moment.github.io/luxon)
- A tiny CSS pipeline with PostCSS
- A tiny inline JS pipeline
- JS search index generator
- [Netlify Dev](https://www.netlify.com/products/dev) for testing [Netlify redirects](https://netlify.com/docs/redirects/)
- Serverless (FaaS) development pipeline with [Netlify Dev](https://www.netlify.com/products/dev) and [Netlify Functions](https://www.netlify.com/products/functions)


## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash
# install the dependencies
npm install

# It will then be available locally for building with
npm run start
```

## Add some Netlify helpers
Netlify Dev adds the ability to use Netlify redirects, proxies, and serverless functions.

```bash
# install the Netlify CLI in order to get Netlify Dev
npm install -g netlify-cli

# run a local server with some added Netlify sugar in front of Eleventy
netlify dev
```

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any serverless functions directly.
