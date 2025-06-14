import { useEffect } from 'react';
import './header.scss';

const Header = () => {
  const smoothScroll = (arg) => {
    arg.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  let projects, hero, technologies, about, contacts;
  useEffect(() => {
    projects = document.querySelector('.projects');
    hero = document.querySelector('.App');
    technologies = document.querySelector('.technologies');
    about = document.querySelector('.about');
    contacts = document.querySelector('.contacts');
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <ul className="header__nav-list">
            <li className="header__nav-item" onClick={() => smoothScroll(hero)}>
              Home
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(projects)}
            >
              Projects
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(technologies)}
            >
              Tech Stack
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(about)}
            >
              About
            </li>
            <li
              className="header__nav-item"
              onClick={() => smoothScroll(contacts)}
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

/* const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}; */
