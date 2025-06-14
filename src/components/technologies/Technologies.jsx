import "./technologies.scss";
import sass from "./image/sass.png";
import html from "./image/html.png";
import css from "./image/css.png";
import js from "./image/js3.png";
import ts from "./image/ts3.png";
import react from "./image/react.png";

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="container">
        <div className="technologies__inner">
          <h2 className="technologies__title">My Tech Stack</h2>
          <h3 className="technologies__sub-title">
            {" "}
            Technologies I’ve been working with recently
          </h3>
          <div className="technologies__list-wrapper">
            <ul className="technologies__list">
              <li className="technologies__list-item">
                <span>HTML</span>

                <img src={html} alt="sass" />
              </li>
              <li className="technologies__list-item">
                <span>CSS</span>
                <img src={css} alt="sass" />
              </li>
              <li className="technologies__list-item">
                <span>SASS</span>
                <img src={sass} alt="sass" />
              </li>
              <li className="technologies__list-item">
                <span>JavaScript</span>
                <img src={js} alt="sass" />
              </li>
              <li className="technologies__list-item">
                <span>TypeScript</span>
                <img src={ts} alt="sass" />
              </li>
              <li className="technologies__list-item">
                <span>React</span>
                <img src={react} alt="sass" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
