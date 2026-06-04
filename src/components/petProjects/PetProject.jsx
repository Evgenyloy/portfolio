import books from "./image/mmogames.webp";
import nasa from "./image/nasa.webp";
import calc from "./image/калькулятор.webp";
import { AiFillGithub } from "react-icons/ai";
import "./petProject.scss";

const PetProject = () => {
  const projects = [
    {
      title: "Drag and Drop Calculator",
      description:
        "Интерактивный калькулятор с функцией перетаскивания. Создан с использованием JavaScript, CSS и React.",
      image: calc,
      demoLink: "https://evgenyloy.github.io/drag-and-drop-calculator/",
      alt: "Drag and Drop Calculator Screenshot",
      githubLink: "https://github.com/Evgenyloy/drag-and-drop-calculator",
    },
    {
      title: "Asteroid Tracking App",
      description:
        "Веб-приложение для отслеживания астероидов с использованием API NASA. Создано с помощью React и TypeScript, обеспечивает получение данных в реальном времени и имеет адаптивный дизайн.",
      image: nasa,
      demoLink: "https://nasa-api-kohl-iota.vercel.app",
      alt: "NASA Asteroid Tracking App Screenshot",
      githubLink: "https://github.com/Evgenyloy/nasa-api",
    },
    {
      title: "Mmo games portal",
      description:
        "Сайт, посвящен теме многопользовательских онлайн-игр. Возможен просмотр новостей, а также поиск и фильтрация отдельных игр.",
      image: books,
      demoLink: "https://game-portal-ts.vercel.app",
      alt: "MMOgames Portal Screenshot",
      githubLink: "https://github.com/Evgenyloy/game-portal-ts",
    },
  ];

  return (
    <div className="pet-projects">
      <div className="container">
        <h2 className="pet-projects__title-main">Другие проекты</h2>
        <h4 className="pet-projects__subtitle">
          Проекты реализованные в рамках тестовых заданий
        </h4>
        <div className="pet-projects__inner">
          {projects.map((project, index) => (
            <div className="pet-projects__item" key={index}>
              <img
                src={project.image}
                alt={project.alt}
                className="pet-projects__img"
                loading="lazy"
              />
              <a
                href={project.demoLink}
                className="pet-projects__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
              >
                {" "}
              </a>
              <h3 className="pet-projects__title">{project.title}</h3>
              <p className="pet-projects__description">{project.description}</p>
              <div className="pet-projects__link-wrapper">
                <AiFillGithub className="pet-projects__link-git" />
                <a
                  href={project.githubLink}
                  className="pet-projects__git-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Hub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetProject;
