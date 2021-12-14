import React, { useState, useEffect } from "react";
import { MenuList } from "./MenuList";
import { BiMenuAltRight } from "react-icons/bi";
import "../styles/Header.css";

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);
  useEffect(() => {
    const menu = document.getElementById("menu");
    const allLi = menu.querySelectorAll("li");

    function linkAction() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

      setMenuActive(!setMenuActive);
    }

    allLi.forEach((n) => n.addEventListener("click", linkAction));
  }, []);

  const toggleActive = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <header className="header">
      <nav className="nav bd_grid">
        <a href="#" className="nav_logo">
          Praca u podstaw
        </a>
        <ul id="menu" className={isMenuActive ? "show" : ""}>
          {MenuList &&
            MenuList.map((n) => (
              <li key={n.id}>
                <a href={n.hyper_link}>{n.link_name}</a>
              </li>
            ))}
        </ul>
        <i className="toggleMenu" onClick={toggleActive}>
          <BiMenuAltRight />
        </i>
      </nav>
    </header>
  );
}

export { Header };
