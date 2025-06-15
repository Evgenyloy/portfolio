import "./projects.scss";
import shopyImg from "../../image/shopy3.png";
import mmoImg from "../../image/mmogames.jpeg";
import { ImLink } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      title: "Online store shopy",
      description:
        "Small online store. The project implements a shopping cart, favorites, product filters, and authorization via Firebase.",
      stack: "JavaScript, React, Redux, React Router",
      image: shopyImg,
      demoLink: "https://shopy-ts-two.vercel.app",
      githubLink: "https://github.com/Evgenyloy/shopy-ts",
      alt: "Shopy Online Store Screenshot",
    },
    {
      title: "MMOgames portal",
      description:
        "A site dedicated to the topic of multiplayer online games. It is possible to view news, as well as search and filter individual games.",
      stack: "JavaScript, React, Zustand, Tanstack Query",
      image: mmoImg,
      demoLink: "https://game-protal-ts2.vercel.app",
      githubLink: "https://github.com/Evgenyloy/gamePortal-ts",
      alt: "MMOgames Portal Screenshot",
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="projects__inner">
          <h2 className="projects__title">Projects</h2>
          <h3 className="projects__sub-title">My works for portfolio</h3>
          <div className="projects__row">
            {projects.map((project, index) => (
              <div className="project__item item" key={index}>
                <div className="projects__wrapper">
                  <div className="item__img-cont">
                    <img
                      className="item__img"
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="item__title">{project.title}</h2>
                  <p className="item__description">{project.description}</p>
                  <p className="item__stack">Tech stack: {project.stack}</p>
                  <a
                    href={project.demoLink}
                    className="item__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                  ></a>
                </div>
                <div className="item__inner">
                  <div className="item__link-wrapper">
                    <ImLink className="item__link-chain" />
                    <a
                      href={project.demoLink}
                      className="item__live-link item__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="item__link-wrapper">
                    <AiFillGithub className="item__link-git" />
                    <a
                      href={project.githubLink}
                      className="item__git-link item__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
