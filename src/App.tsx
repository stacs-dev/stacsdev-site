import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { CodeOlympics } from "./pages/CodeOlympics";
import { Puzzles } from "./pages/Puzzles";
import { Obituaries } from "./pages/Obituaries";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="code-olympics" element={<CodeOlympics />} />
        <Route path="puzzles" element={<Puzzles />} />
        <Route path="obituaries" element={<Obituaries />} />
      </Route>
    </Routes>
  );
}
