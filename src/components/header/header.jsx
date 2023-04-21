import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const[isPersonIdActive,setIsPersonIdActive] = useState(false)
  const isActiveHandle = () => {
    setActive((prev) => !prev);
    setIsPersonIdActive(false)
  };
  const isPersonActiveHandle = () => {
    setIsPersonIdActive((prev) => !prev);
    setActive(false)
  };
  return (
    <div className="header">
      <div className="person">
        <span>Person</span>
      </div>
      <div className="navBar">
        <ul>
          <li>Table</li>
          <Link
            to="personId"
            className={isPersonIdActive ? "activeLink" : "desactive"}
            onClick={isPersonActiveHandle}
          >
            Person Id
          </Link>
          <li>
            <Link
              to="create"
              className={isActive ? "activeLink" : "desactive"}
              onClick={isActiveHandle}
            >
              Create Id
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
