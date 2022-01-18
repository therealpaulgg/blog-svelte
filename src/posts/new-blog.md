---
createdAt: '2022-01-07'
updatedAt: '2022-01-07'
excerpt: "I've written a new blog! Read to find out why."
title: New Blog!
tags: [personal]
---

## Old Blog Features & History

Back when I was working as a student at EdPlus (ASU Online), I got so much work done that they just let me get paid to work on personal projects. I wrote a full-stack blog application, which was one of my earliest large undertakings as a developer. It was written in a Node.JS backend and a Vue frontend. All CSS was done by hand, no frameworks to help. It had a LOT of features:

- Authentication
- Permissions
- Comments
- Creating new posts with a side-by-side markdown-to-content editor
- Profiles
- ...and a bunch of other stuff

## Problems

I'm still to this day quite proud of this creation. However, as I used it over the years, I began to run into a few issues. 

- Sometimes creating/editing would feel awkward because of the editor's limitations. I couldn't just paste images into the editor, and sometimes the keyboard shortcuts I worked so hard to implement (like bolding/italicizing text) fell short. I realized I would have to write additional code to implement these features when I really just wanted to be able to write basic markdown code.
- Whenever I migrated my server infrastructure, everything would always be relatively easy to set up...EXCEPT my blog. Migrating the blog instance to other servers was never easy because it required a systemd service, Postgres database, and proper webserver configuration. Moving the database over was not a simple task due to the ORM I used (TypeORM). The ORM in this case ended up causing more issues than solutions.
- It felt heavy. While it was quite performant overall, I felt that I had built something where most of the features just weren't necessary. This was __my__ blog, not an organization's blog.

## The Solution

A newer approach to web development that I didn't really understand at time was the concept of JAMStack or static site generators. However I grew to realize that because the content of my blog rarely changes, and every time it does change it can be updated just by compiling code, I didn't need the heavy blog infrastructure (effectively a CMS) I had set up.

### Technologies (Svelte & SvelteKit)

I have always been a big fan of Vue.JS (especially Vue 3) and have used it at work and for personal projects. Unfortunately, the static site generating methods being provided either weren't updated yet (because open source solutions lagged behind the initial release of Vue 3 by 1-2 years) or were not lightweight enough for my purposes. The main options I had looked into were Nuxt.JS and Gridsome. Gridsome wasn't up to date and Nuxt didn't really seem like a good use case for me. So I looked towards other frameworks.

I ended up settling on a quite novel technology, Svelte with SvelteKit. I have built sites with Svelte before, but it was much harder a year ago due to the awkwardness of project configuration and not as much adoption as other frameworks. SvelteKit allowed me to VERY easily create a static site generator with markdown content, which is what this blog is. Whenever I want to write a blog post, I simply create a new markdown file with content, push to Github, and then my build system takes care of the rest. I'm so far a big fan of the simplicity and usability of SvelteKit, and Svelte's perhaps the most performant framework I've ever used. It even uses Vite, a truly amazing dev server & build tool.

I took most of the inspiration for making this from this repo: [https://github.com/svelteland/svelte-kit-blog-demo/](https://github.com/svelteland/svelte-kit-blog-demo/). Enhancements I personally added were utilizing Typescript, as well as more up-to-date packages & better libraries.

You can view the source code for this repo on my Github. [https://github.com/therealpaulgg/blog-svelte](https://github.com/therealpaulgg/blog-svelte)

## Conclusion

So sure, I now don't have support for adding comments to my blog posts, or a WYSIWYG editor. But to be honest, I'm more comfortable writing markdown in a VSCode editor, and lazy enough to maintain this easy static site generator that I won't miss any of the features I created.

My original full stack blog code can be found here (yes, it is no longer maintained): [https://github.com/therealpaulgg/Blog](https://github.com/therealpaulgg/Blog)