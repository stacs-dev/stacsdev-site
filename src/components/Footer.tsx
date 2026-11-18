import { useLocation } from "react-router-dom";
import { folioFor } from "../data/pages";

export function Footer() {
  const { pathname } = useLocation();

  return (
    <footer id="site-footer">
      <span>STACSDEV · {new Date().getFullYear()}</span>
      <span className="folio">{folioFor(pathname)}</span>
    </footer>
  );
}
