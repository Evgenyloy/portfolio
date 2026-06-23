import "./projects.scss";
import shopyImg from "../../image/shopy3.webp";
import mmoImg from "../../image/books.webp";
import { ImLink } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      title: "Интернет-магазин Shopy",
      description:
        "Полнофункциональный интернет-магазин с адаптивным дизайном. На Проекте реализованна корзина, избранное, фильтры товаров и аутентификация через Firebase.",
      stack:
        "JavaScript, React, Redux, React Router Dom, Firebase Authentication, Cloud Firestore",
      image: shopyImg,
      demoLink: "https://shopy-ts.vercel.app",
      githubLink: "https://github.com/Evgenyloy/shopy-ts",
      alt: "Shopy Online Store Screenshot",
    },
    {
      title: "Book Search App",
      description:
        "Приложение для поиска книг с использованием API Google Books. Разработано с помощью React. Реализованны карточки книг, инфинити скролл и маршрутизация.",
      stack: "React, Redux, React Router Dom, RTK Query.",
      image: mmoImg,
      demoLink: "https://search-book-api-pi.vercel.app",
      githubLink: "https://github.com/Evgenyloy/search-book-api",
      alt: "Book Search App Screenshot",
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="projects__inner">
          <h2 className="projects__title">Проекты</h2>
          <h3 className="projects__sub-title">
            Мои основные работы для портфолио
          </h3>
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
                  <p className="item__warning">{project.warning}</p>
                  <p className="item__description">{project.description}</p>
                  <p className="item__stack">Технологии: {project.stack}</p>
                  <a
                    href={project.demoLink}
                    className="item__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    {" "}
                  </a>
                </div>
                <div className="item__inner">
                  <div className="item__link-wrapper">
                    <ImLink className="item__link-chain" />
                    <a
                      href={project.demoLink}
                      className="item__live-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Превью
                    </a>
                  </div>
                  <div className="item__link-wrapper">
                    <AiFillGithub className="item__link-git" />
                    <a
                      href={project.githubLink}
                      className="item__git-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git Hub
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
