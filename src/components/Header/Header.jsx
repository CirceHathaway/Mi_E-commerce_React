import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-link">
        <img
          src="/images/logo.png"
          alt="Logo del sitio"
          className="logo-img"
        />
      </Link>
      <Nav />
    </header>
  );
};