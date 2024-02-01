import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <div className="header-logo__wrapper">
          <img
            className="header-logo__wrapper-img"
            src={logo}
            alt="To-do-app Logo"
          />
          <p className="header-logo__wrapper-text">TO DO IN TOronto</p>
        </div>
      </Link>
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__list-item">Events </li>
          <li className="header-nav__list-item">Calendar</li>
        </ul>
      </nav>
    </header>
  );
}
