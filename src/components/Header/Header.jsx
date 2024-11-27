import "./Header.scss";
import logo from "/assets/logo/wabisabi-text-logo.png";
// import user from "/assets/images/user.HEIC";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="nav">
      <nav className="nav__container">
        <Link to="/">
          <img src={logo} alt="wabisabi logo" className="nav__logo" />
        </Link>
        <div className="nav__wrap-navlinks">
          <NavLink to="/about" className="nav__navlink">about</NavLink>
          <NavLink to="/tasks" className="nav__navlink">tasks</NavLink>
          <NavLink to="/rewards" className="nav__navlink">rewards</NavLink>
        </div>
        <div className="nav__img-user"></div>
      </nav>
    </header>
  );
}
