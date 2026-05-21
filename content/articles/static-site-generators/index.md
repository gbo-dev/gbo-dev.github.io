+++
title = "Static Site Generators"
description = "A look at modern static site generators and why you might want one"
date = 2026-05-21
draft = true
+++

The landscape has become full of good options for spinning up clean and easily-managed static websites. A quick glance at most quickstart guides and you're up and running in minutes. Or, point an agent to the repo and ask it to set it up for you. GLM-5.1 took 45s to look into how to setup, install, and run VitePress for example.

### My explorations

| SSG                                 | Notes                                                                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [Hugo](https://gohugo.io/)          | **Go**: Mature ecosystem, big theme library, and fast builds.                                                             |
| [Astro](https://astro.build/)       | **TypeScript**: Island architecture -> Majority of page is static HTML + small amount of (island) complexity in whatever framework you prefer when needed. |
| [Zola](https://www.getzola.org/)    | **Rust**: Single binary, no runtime dependencies. Fast and light builds.
| [VitePress](https://vitepress.dev/) | **TypeScript**: Vite and Vue-powered. Seems fantastic for out-of-the-box wiki and documentation, but also works well for personal sites.                                                                 |

I started out using [Hugo](https://gohugo.io/). I noticed it had great community support for themes and customizations, where I went for modifying the popular PaperMod theme to my liking. Being a bit personally biased towards Go, I went for it.

I noticed I didn't love the template system and its syntax, and themes was a bit clunky. But it did the job. From [0.146.0](https://github.com/gohugoio/hugo/releases/tag/v0.146.0) onwards, it seems they've made improvements for the build template system: "Refreshed build template system – simpler and much better". If I weren't so happy with Zola, I might give it another shot.

Astro

Zola

VitePress

### This site

This site is built with Zola (initially Hugo, then Astro, now Zola). I initially was looking to go below the [14 kB limit](https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/) for fun, but that will have to wait as I enjoy Iosevka too much.
