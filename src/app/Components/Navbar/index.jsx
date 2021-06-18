import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../Avatar";
import Image from "../Image";
import constants from "../../utils/Constants";
import { getUser, logOut } from "../../utils/auth";
import "./index.scss";

const Navbar = () => {
  const navRef = useRef();

  const history = useHistory();

  const { username } = getUser();

  const redirect = () => {
    history.push(constants.LANDING_ROUTE);
  };

  const logUserOut = () => {
    logOut(redirect);
  };

  const navToggle = () => {
    if (navRef.current.className === "nav__menu__container") {
      navRef.current.className += " open";
    } else {
      navRef.current.className = "nav__menu__container";
    }
  };

  return (
    <nav className="page__nav">
      <div className="wrapper">
        <div className="nav__logo">
          <Link to={constants.LANDING_ROUTE}>
            <Image />
          </Link>
        </div>
        <div className="nav__items">
          <div className="nav__dashboard--lg">
            <Link to={constants.DASHBOARD_ROUTE}>Dashboard</Link>
          </div>
          <div className="nav__avatar">
            <button onClick={navToggle}>
              <Avatar />
            </button>
          </div>
        </div>
      </div>
      <div className="nav__menu__container" ref={navRef}>
        <ol className="nav__menu">
          <li>
            <Avatar />
          </li>
          <li>
            <Link to={`/${username}`}>View Profile</Link>
          </li>
          <li className="nav__dashboard--sm">
            <Link to={constants.DASHBOARD_ROUTE}>Dashboard</Link>
          </li>
          <li>
            <button onClick={logUserOut}>Log out</button>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
