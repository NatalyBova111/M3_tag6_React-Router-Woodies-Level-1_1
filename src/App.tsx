import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Jenson from "./pages/Jenson";
import Deon from "./pages/Deon";
import Krisha from "./pages/Krisha";

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className={`app ${isHome ? "home-bg" : ""}`}>
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/jenson" element={<Jenson />} />
          <Route path="/products/deon" element={<Deon />} />
          <Route path="/products/krisha" element={<Krisha />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
