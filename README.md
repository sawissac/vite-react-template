# React Template 2.0.0

Simple `React Template` with useful utility for static site single pages.

# Folder structures

```
|- 📁 src
   \ 🎨 layout
      - Layout components for the cosmic aesthetic of your application.
   \ 📄 pages
      - React components, your canvas for crafting individual pages/screens.
   \ 🧰 lib
      - Reusable utility functions, libraries, and external dependencies for supercharged functionality.
   \ 🌐 stores
      - State management files: stores, contexts, and Redux magic for controlling the universe within your app.
   \ 🌀 templates
      - Reusable template components or layouts - the stardust that shapes the cosmos of multiple pages.
   \ 🔧 utils
      - General utility functions and helpers, your trusty tools for navigating the galaxy of code.
   \ 🪝 hooks
      - Custom React hooks, encapsulating logic like constellations, ready to be woven into the fabric of components.
```

# Docker Image Build Command

**Developement**
```
   docker compose -f compose.dev.yaml build --no-cache && docker compose -f compose.dev.yanl up
```

**Production**
```
   docker compose -f compose.prod.yaml build --no-cache && docker compose -f compose.prod.yanl up
```
# Yarn packages

`package.json` file, which contains information about the dependencies and devDependencies of a JavaScript project. Here's a breakdown of some key dependencies and devDependencies:

**Dependencies:**

1. `@radix-ui/react-icons`: Version 1.3.0
2. `class-variance-authority`: Version 0.7.0
3. `clsx`: Version 2.0.0
4. `formik`: Version 2.4.5
5. `formik-validator-zod`: Version 1.0.2
6. `immer`: Version 10.0.2
7. `js-cookie`: Version 3.0.5
8. `lodash`: Version 4.17.21
9. `moment`: Version 2.29.4
10. `react`: Version 18.2.0
11. `react-dom`: Version 18.2.0
12. `react-intl`: Version 6.5.2
13. `react-paginate`: Version 8.2.0
14. `react-query`: Version 3.39.3
15. `react-router-dom`: Version 6.15.0
16. `rooks`: Version 7.14.1
17. `swiper`: Version 11.0.4
18. `tailwind-merge`: Version 1.14.0
19. `tailwindcss-animate`: Version 1.0.7
20. `uuid`: Version 9.0.1
21. `zod`: Version 3.22.4
22. `zustand`: Version 4.4.1

**DevDependencies:**

1. `@types/js-cookie`: Version 3.0.3
2. `@types/lodash`: Version 4.14.197
3. `@types/node`: Version 20.5.7
4. `@types/react`: Version 18.2.15
5. `@types/react-dom`: Version 18.2.7
6. `@typescript-eslint/eslint-plugin`: Version 6.0.0
7. `@typescript-eslint/parser`: Version 6.0.0
8. `@vitejs/plugin-react`: Version 4.0.3
9. `autoprefixer`: Version 10.4.15
10. `eslint`: Version 8.45.0
11. `eslint-plugin-react-hooks`: Version 4.6.0
12. `eslint-plugin-react-refresh`: Version 0.4.3
13. `husky`: Version 8.0.0
14. `postcss`: Version 8.4.29
15. `prettier`: Version 3.0.3
16. `pretty-quick`: Version 3.1.3
17. `tailwindcss`: Version 3.3.3
18. `typescript`: Version 5.0.2
19. `vite`: Version 4.4.5

This setup includes various libraries and tools for developing a JavaScript project, with a focus on React and TypeScript.
