import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-link">
        <h2>Logo</h2>
      </Link>
      <Nav />
    </header>
  );
};
