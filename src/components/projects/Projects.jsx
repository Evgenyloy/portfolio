import "./projects.scss";
import shopyImg from "../../image/shopy3.png";
import mmoImg from "../../image/mmogames.jpeg";
import { ImLink } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="projects__inner">
          <div className="projects__title">Projects</div>
          <div className="projects__sub-title">My works for portfolio</div>
          <div className="projects__row">
            <div className="project__item item">
              <div className="item__img-cont">
                <img
                  className="item__img"
                  src={shopyImg}
                  alt="site image"
                ></img>
                <a
                  href="https://shopy-ts-two.vercel.app"
                  className="item__link"
                  target="_blank"
                ></a>
              </div>

              <div className="item__wrapper">
                <h2 className="item__title">Online store shopy</h2>
                <p className="item__description">
                  Small online store. The project implements a shopping cart,
                  favorites, product filters, and authorization via Firebase.
                </p>
                <p className="item__stack">
                  Tech stack : JavaScript, React, Redux, React Router 6
                </p>
                <div className="item__inner">
                  <div className="item__link-wrapper">
                    <ImLink className="item__link-chain" />
                    <a
                      href="https://shopy-ts-two.vercel.app"
                      className="item__live-link item__link"
                      target="_blank"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="item__link-wrapper">
                    <AiFillGithub className="item__link-git" />
                    <a
                      href="https://github.com/Evgenyloy/shopy-ts"
                      className="item__git-link item__link"
                      target="_blank"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project__item item">
              <div className="item__img-cont">
                <img src={mmoImg} alt="site image" className="item__img"></img>
                <a
                  href="https://game-protal-ts2.vercel.app"
                  className="item__link"
                  target="_blank"
                ></a>
              </div>
              <div className="item__wrapper">
                <h2 className="item__title">MMOgames portal</h2>
                <p className="item__description">
                  A site dedicated to the topic of multiplayer online games. It
                  is possible to view news, as well as search and filter
                  individual games.
                </p>
                <p className="item__stack">
                  Tech stack : JavaScript, React, Zustand, React Router 6
                </p>
                <div className="item__inner">
                  <div className="item__link-wrapper">
                    <ImLink className="item__link-chain" />
                    <a
                      href="https://game-protal-ts2.vercel.app"
                      className="item__live-link "
                      target="_blank"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="item__link-wrapper">
                    <AiFillGithub className="item__link-git" />
                    <a
                      href="https://github.com/Evgenyloy/gamePortal-ts"
                      className="item__git-link "
                      target="_blank"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
