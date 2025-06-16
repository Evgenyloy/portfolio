import { useEffect, useRef } from "react";
import "./footer.scss";

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <nav className="footer__inner">
          <ul className="footer__nav-list">
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(refs.hero)}
            >
              Начало
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(refs.projects)}
            >
              Проекты
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(refs.technologies)}
            >
              Технологии
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(refs.about)}
            >
              Обо мне
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(refs.contacts)}
            >
              Контакты
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
