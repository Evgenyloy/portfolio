import { useEffect, useRef } from "react";
import "./header.scss";

const Header = () => {
  const refs = {
    hero: useRef(null),
    projects: useRef(null),
    technologies: useRef(null),
    about: useRef(null),
    contacts: useRef(null),
  };

  useEffect(() => {
    refs.hero.current = document.querySelector(".App");
    refs.projects.current = document.querySelector(".projects");
    refs.technologies.current = document.querySelector(".technologies");
    refs.about.current = document.querySelector(".about");
    refs.contacts.current = document.querySelector(".contacts");
  }, []);

  const smoothScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <ul className="header__nav-list">
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(refs.hero)}
            >
              Home
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(refs.projects)}
            >
              Projects
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(refs.technologies)}
            >
              Tech Stack
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(refs.about)}
            >
              About
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(refs.contacts)}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
