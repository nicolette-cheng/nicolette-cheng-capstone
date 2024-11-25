import "./Header.scss";
import logo from "/assets/logo/wabisabi-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="wabisabi logo" />
        </Link>
      </nav>
    </header>
  );
}
