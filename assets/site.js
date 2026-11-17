// The one list of pages. To add a page: copy an existing .html file, change its <main>, add a line here.
const PAGES = [
  { href: "index.html", title: "Home" },
  { href: "code-olympics.html", title: "Code Olympics" },
  { href: "puzzles.html", title: "Puzzles" },
  { href: "obituaries.html", title: "Obituaries" },
];

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"];

const current = location.pathname.split("/").pop() || "index.html";
const index = PAGES.findIndex((page) => page.href === current);

document.getElementById("site-header").innerHTML = `
  <a class="masthead" href="index.html">STACSDEV</a>
  <nav aria-label="Site">
    <ul>
      ${PAGES.map((page) => `<li><a href="${page.href}"${page.href === current ? ' aria-current="page"' : ""}>${page.title}</a></li>`).join("")}
    </ul>
  </nav>`;

document.getElementById("site-footer").innerHTML = `
  <span>STACSDEV &middot; ${new Date().getFullYear()}</span>
  <span class="folio">${ROMAN[index] ?? index + 1}</span>`;
