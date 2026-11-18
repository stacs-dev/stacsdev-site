# STACSDEV

React + TypeScript single-page site for the STACSDEV subcommittee, built with Vite. The styling is reused unchanged from the original static site.

## Run

```
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```
npm run build
npm run preview
```

`npm run build` type-checks with TypeScript and outputs a static bundle to `dist/`. Deploy `dist/` to any static host, but configure the host to rewrite unknown paths to `index.html` so direct links to routes work (Vite's dev and preview servers do this already).

## Layout

```
index.html               Vite entry point (head metadata, fonts, #root)
src/main.tsx             mounts the app with BrowserRouter
src/App.tsx              route definitions
src/data/pages.ts        single list of pages, folio numerals and document titles
src/components/
  Layout.tsx             header, <main> outlet, footer; sets the page title
  Header.tsx             masthead and navigation
  Footer.tsx             year and folio
src/pages/
  Home.tsx               Home
  CodeOlympics.tsx       Code Olympics
  Puzzles.tsx            Puzzles
  Obituaries.tsx         Obituaries
src/styles/style.css     all styling; the palette and fonts are the variables at the top
public/favicon.svg
```

## Adding a page

1. Create `src/pages/NewPage.tsx` containing the page's content as JSX.
2. Add `<Route path="new-page" element={<NewPage />} />` inside the layout route in `src/App.tsx`.
3. Add `{ path: "/new-page", title: "New Page", documentTitle: "New Page · STACSDEV" }` to `pages` in `src/data/pages.ts`. This drives both the nav link and the footer folio.

## Fonts

The font stack is `Literata, Georgia, serif`. Literata is a typeface designed for e-readers and loads from Google Fonts (the links live in `index.html`). To self-host it, add an `@font-face` rule in `style.css`.
