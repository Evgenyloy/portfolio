import books from "./image/books.png";
import nasa from "./image/nasa.png";
import calc from "./image/калькулятор.png";
import "./petProject.scss";

const PetProject = () => {
  const projects = [
    {
      title: "Asteroid Tracking App",
      description:
        "Веб-приложение для отслеживания астероидов с использованием API NASA. Создано с помощью React и TypeScript, обеспечивает получение данных в реальном времени и имеет адаптивный дизайн.",
      image: nasa,
      demoLink: "https://nasa-api-sepia-one.vercel.app",
      alt: "NASA Asteroid Tracking App Screenshot",
    },
    {
      title: "Book Search App",
      description:
        "Приложение для поиска книг с использованием API Google Books. Разработано с помощью React и оформлено с помощью SASS для создания чистого, отзывчивого пользовательского интерфейса.",
      image: books,
      demoLink: "https://search-book-api-indol.vercel.app",
      alt: "Book Search App Screenshot",
    },
    {
      title: "Drag and Drop Calculator",
      description:
        "Интерактивный калькулятор с функцией перетаскивания. Создан с использованием JavaScript, React и CSS для уникального пользовательского опыта.",
      image: calc,
      demoLink: "https://evgenyloy.github.io/drag-and-drop-calculator/",
      alt: "Drag and Drop Calculator Screenshot",
    },
  ];

  return (
    <div className="pet-projects">
      <div className="container">
        <h2 className="pet-projects__title-main">Другие проекты</h2>
        <h4 className="pet-projects__subtitle">
          Проекты, реализованные в рамках тестовых заданий, находящихся в
          свободном доступе
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
              ></a>

              <h3 className="pet-projects__title">{project.title}</h3>
              <p className="pet-projects__description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetProject;
