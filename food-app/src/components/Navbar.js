import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./sidebar";
import {
  faHome,
  faList,
  faCog,
  faUser,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation()
  //Link array
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Login",
      path: "/login",
      icon: faUser,
    },
    {
      name: "Sign up",
      path: "/register",
      icon: faSignIn,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <nav className="navbar container">
        <Link to="/" className="logo">
          Mr.HaJu's <span>Recipes</span> sharing
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
            className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
            <FontAwesomeIcon icon={link.icon} /> {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
