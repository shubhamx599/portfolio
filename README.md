# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
my-portfolio
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ css-logo.png
│  │  │  ├─ figma-logo.png
│  │  │  ├─ git-logo.png
│  │  │  ├─ github-logo.png
│  │  │  ├─ html-logo.png
│  │  │  ├─ icon-design.svg
│  │  │  ├─ icon-dev.svg
│  │  │  ├─ javascript-logo.png
│  │  │  ├─ logo.ico
│  │  │  ├─ my-avatar.jpg
│  │  │  ├─ project-1.jpg
│  │  │  ├─ project-2.png
│  │  │  ├─ project-3.jpg
│  │  │  ├─ project-4.png
│  │  │  ├─ project-5.png
│  │  │  ├─ project-6.png
│  │  │  ├─ reactjs-logo.png
│  │  │  └─ tailwindcss-logo.png
│  │  └─ videos
│  ├─ components
│  │  ├─ BackgroundElements.jsx
│  │  ├─ ContactForm.jsx
│  │  ├─ DesktopNavbar.jsx
│  │  ├─ Layout.jsx
│  │  ├─ MainContent.jsx
│  │  ├─ MobileNavbar.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ProjectCard.jsx
│  │  ├─ Sidebar.jsx
│  │  └─ SkillCard.jsx
│  ├─ context
│  │  └─ AppContext.jsx
│  ├─ data
│  │  ├─ experience.js
│  │  ├─ projects.js
│  │  └─ skills.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ About.jsx
│     ├─ Portfolio.jsx
│     └─ Resume.jsx
└─ vite.config.js

```