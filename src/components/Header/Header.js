import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img
          className="header-logo__img"
          // src={}
          alt="To-do-app Logo"
        />
      </Link>
      <nav>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
