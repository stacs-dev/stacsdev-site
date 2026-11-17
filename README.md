# STACSDEV

Static site for the STACSDEV subcommittee. Plain HTML/CSS with one small script. No build step and no dependencies.

## Run

Open `index.html` in a browser, or serve the folder (for example `npx serve .`).

## Layout

```
index.html            Home
code-olympics.html    Code Olympics
puzzles.html          Puzzles
obituaries.html       Obituaries
assets/style.css      All styling. The palette and fonts are the variables at the top.
assets/site.js        PAGES list, which builds the header nav and the footer
assets/favicon.svg
```

## Adding a page

1. Copy `puzzles.html` to `new-page.html` and replace its `<title>` and `<main>`.
2. Add `{ href: "new-page.html", title: "New Page" }` to `PAGES` in `assets/site.js`.

## Fonts

The font stack is `Libron, Readerly, Bookerly, Literata, Georgia`. Readerly and Bookerly are used only if they are
installed on the visitor's machine, because neither is licensed for web embedding. Literata, a typeface
designed for e-readers, loads from Google Fonts. To self-host these, add an `@font-face` rule in `style.css`.

## Moving to Next.js / TypeScript

The site is already split along a framework's lines:

- `PAGES` in `site.js` becomes a typed array used by a `<Header>` in `app/layout.tsx`.
- Each page's `<main>` becomes `app/<slug>/page.tsx`. It is markup only, so it copies straight into JSX (`class` → `className`).
- `assets/style.css` becomes `app/globals.css` unchanged.
