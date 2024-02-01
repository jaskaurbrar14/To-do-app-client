import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img className="header-logo__img" src={logo} alt="To-do-app Logo" />
      </Link>
      <nav>
        <ul>
          <li>Events </li>
          <li>Calendar</li>
        </ul>
      </nav>
    </header>
  );
}
