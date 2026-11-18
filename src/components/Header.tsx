import { NavLink } from "react-router-dom";
import { pages } from "../data/pages";

export function Header() {
  return (
    <header id="site-header">
      <NavLink className="masthead" to="/">
        STACSDEV
      </NavLink>
      <nav aria-label="Site">
        <ul>
          {pages.map((page) => (
            <li key={page.path}>
              <NavLink to={page.path} end>
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
