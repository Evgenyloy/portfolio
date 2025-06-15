import books from "./image/books.png";
import nasa from "./image/nasa.png";
import calc from "./image/калькулятор.png";
import "./petProject.scss";

const PetProject = () => {
  const projects = [
    {
      title: "Asteroid Tracking App",
      description:
        "A web app for tracking asteroids using NASA's API. Built with React and TypeScript, featuring real-time data fetching and responsive design.",
      image: nasa,
      demoLink: "https://nasa-api-sepia-one.vercel.app",
      alt: "NASA Asteroid Tracking App Screenshot",
    },
    {
      title: "Book Search App",
      description:
        "An application for searching books using Google Books API. Developed with React and styled with SASS for a clean, responsive UI.",
      image: books,
      demoLink: "https://search-book-api-indol.vercel.app",
      alt: "Book Search App Screenshot",
    },
    {
      title: "Drag and Drop Calculator",
      description:
        "An interactive calculator with drag-and-drop functionality. Built with JavaScript, React, and CSS for a unique user experience.",
      image: calc,
      demoLink: "https://evgenyloy.github.io/drag-and-drop-calculator/",
      alt: "Drag and Drop Calculator Screenshot",
    },
  ];

  return (
    <div className="pet-projects">
      <div className="container">
        <h2 className="pet-projects__title-main">Other Projects</h2>
        <h4 className="pet-projects__subtitle">Things I’ve built so far</h4>
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
