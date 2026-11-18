export type Page = {
  path: string;
  title: string;
  documentTitle: string;
};

// The one list of pages: drives the nav, the footer folio and document titles.
export const pages: Page[] = [
  { path: "/", title: "Home", documentTitle: "STACSDEV" },
  { path: "/code-olympics", title: "Code Olympics", documentTitle: "Code Olympics · STACSDEV" },
  { path: "/puzzles", title: "Puzzles", documentTitle: "Puzzles · STACSDEV" },
  { path: "/obituaries", title: "Obituaries", documentTitle: "Obituaries · STACSDEV" },
];

export const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"];

export function folioFor(path: string): string {
  const index = pages.findIndex((page) => page.path === path);
  return ROMAN[index] ?? String(index + 1);
}
