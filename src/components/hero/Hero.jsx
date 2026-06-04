import "./hero.scss";
import image from "../../image/drawing.svg";

const Hero = () => {
  return (
    <div className="hero">
      {" "}
      <div className="container">
        {" "}
        <div className="hero__inner">
          {" "}
          <div className="hero__text-block">
            {" "}
            <h1 className="hero__title">
              {" "}
              Привет, меня зовут Евгений <br />{" "}
              <span>Я начинающий фронтенд-разработчик</span>{" "}
            </h1>{" "}
            <img src={image} alt="" className="hero__image" />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Hero;
