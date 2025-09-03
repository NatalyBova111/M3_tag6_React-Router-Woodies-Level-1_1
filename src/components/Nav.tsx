import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img className="brand-logo" src={Logo} alt="Woodies logo" />
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/categories">Products</NavLink>
        </nav>
      </div>
    </header>
  );
}
