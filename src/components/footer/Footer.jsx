import { useEffect } from 'react';
import './footer.scss';

const Footer = () => {
  const smoothScroll = (arg) => {
    arg.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  let projects, hero, technologies, about, contacts;

  useEffect(() => {
    hero = document.querySelector('.App');
    projects = document.querySelector('.projects');
    technologies = document.querySelector('.technologies');
    about = document.querySelector('.about');
    contacts = document.querySelector('.contacts');
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__inner">
          <ul className="footer__nav-list">
            <li className="footer__nav-item" onClick={() => smoothScroll(hero)}>
              Home
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(projects)}
            >
              Projects
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(technologies)}
            >
              Tech Stack
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(about)}
            >
              About
            </li>
            <li
              className="footer__nav-item"
              onClick={() => smoothScroll(contacts)}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
