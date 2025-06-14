import { ImLink } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import books from "./image/books.png";
import nasa from "./image/nasa.png";
import calc from "./image/калькулятор.png";
import "./petProject.scss";

const PetProject = () => {
  return (
    <div className="pet-projects">
      <div className="container">
        <h2>Other Projects</h2>
        <h3>Things i have built so far</h3>
        <div className="pet-projects__inner">
          {/*  */}
          <div className="pet-projects__item">
            <img src={nasa} alt="" className="pet-projects__img" />
            <a
              href="https://nasa-api-sepia-one.vercel.app"
              className="pet-projects__link"
              target="_blank"
            ></a>
            <h4 className="pet-projects__title">Asteroid tracking app</h4>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="pet-projects__item">
            <img src={books} alt="" className="pet-projects__img" />
            <a
              href="https://search-book-api-indol.vercel.app"
              className="pet-projects__link"
              target="_blank"
            ></a>
            <h4 className="pet-projects__title">Book search app</h4>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="pet-projects__item">
            <img src={calc} alt="" className="pet-projects__img" />
            <a
              href="https://evgenyloy.github.io/drag-and-drop-calculator/"
              className="pet-projects__link"
              target="_blank"
            ></a>
            <h4 className="pet-projects__title">Drag and drop calculator</h4>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default PetProject;
