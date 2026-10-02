import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        MyApp<span>.</span>
      </NavLink>

      <div className="navbar__links">
        <NavLink to="/" className="navbar__link">
          Home
        </NavLink>

        <NavLink to="/about" className="navbar__link">
          About
        </NavLink>

        <NavLink to="/contact" className="navbar__link">
          Contact
        </NavLink>

        <NavLink to="/products" className="navbar__link">
          Products
        </NavLink>

        <NavLink to="/login" className="navbar__link">
          Login
        </NavLink>

        <NavLink to="/register" className="navbar__register">
          Get Started
        </NavLink>

        {/* Theme button */}
        <button className="theme-button">
          <span className="theme-button__icon">☀️</span>
          <span className="theme-button__text">Light</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;