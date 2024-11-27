import "./Header.scss";
import logo from "/assets/logo/wabisabi-logo.jpeg";
// import user from "/assets/images/user.HEIC";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="nav">
      <nav className="nav__container">
        <Link to="/">
          <img src={logo} alt="wabisabi logo" className="nav__logo"/>
        </Link>
        <div className="nav__wrap-navlinks">
          <NavLink to="/about">about</NavLink>
          <NavLink to="/tasks">tasks</NavLink>
          <NavLink to="/rewards">rewards</NavLink>
        </div>
        <div className="nav__wrap-user">
          <p>love u,</p>
          <div className="nav__img-user"></div>
        </div>
      </nav>
    </header>
  );
}
