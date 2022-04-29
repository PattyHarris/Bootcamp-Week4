# Week 4

In this week's sessions, the website from Week 2 will be used as the basis for the exercises.  The website will be refactored a bit to use a common layout component (using Astro specific tags).

A backend server will be added as well using express.js.

Further comments to follow.

1. When refactoring using the Astro tags, we included the following at the top of each of the pages:
```
---
import Layout from '../layout/common.astro'
---
```
The "Layout" class can be anything you want - this class is then used to encompass the contents of the page - we're passing the title as an Astro.prop.

```
<Layout title="Blog">
...
</Layout>
```

2. To deploy the client on Netlify, I had to setup the deploy settings as follows:
    - Base directory: client
    - Build command: npm run build
    - Publish directory: client/dist

The key was the publish directory, since Astro puts the results of the build in a 'dist' folder.
Netlify normally will recognize an Astro project, but because the Astro stuff is in a sub-folder, it is confused.  

3.  At some point we added the tailwindcss.cdn in a script tag - but we really didn't need this since we had installed it as a dependency anyway.  The CDN was also causing a number of us to see a CORS issue (in the developer's console) - this can be mitigated using 'defer' in the script tag.  Removing the script usage fixes the problem anyway....

# ======================================================
# Leaving this stuff here for further reference....

# Astro Starter Kit: Minimal

```
npm init astro -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).
