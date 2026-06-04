import "./about.scss";

const About = () => {
  return (
    <div className="about">
      {" "}
      <div className="container">
        {" "}
        <div className="about__inner">
          {" "}
          <h2 className="about__title">Обо мне</h2>{" "}
          {/*  <h3 className="about__sub-title">Немного обо мне</h3> */}
          <div className="about__content">
            {" "}
            <div className="about__section">
              {" "}
              <p>
                {" "}
                Я занимаюсь созданием сайтов и приложений, которые удобно
                использовать с телефона, планшета или компьютера. Люблю, когда
                код аккуратный, а интерфейс понятный с первого взгляда. В работе
                использую React, TypeScript, и CSS.
              </p>{" "}
            </div>{" "}
            <div className="about__section">
              {" "}
              <h4 className="about__section-title">Что умею</h4>{" "}
              <ul className="about__list">
                {" "}
                <li>
                  {" "}
                  Делаю адаптивные интерфейсы, которые хорошо выглядят на любом
                  устройстве
                </li>{" "}
                <li>
                  {" "}
                  Создаю динамичные приложения на React (Redux / RTK Query /
                  React Router)
                </li>{" "}
                <li> Пишу понятный и типизированный код</li>{" "}
                <li>
                  {" "}
                  Интегрирую API (уже работал с NASA, Google Books и другими)
                </li>{" "}
                <li>
                  {" "}
                  Работаю с современным CSS (Flexbox, Grid, CSS Variables)
                </li>{" "}
                <li>
                  {" "}
                  Уверенно работаю со state-менеджментом (Redux Toolkit, RTK
                  Query)
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="about__section">
              {" "}
              <h4 className="about__section-title">Как я сюда попал</h4>{" "}
              <p>
                {" "}
                Начинал, как и многие — с обычного HTML и CSS. Потом прошёл
                курсы на Udemy по JavaScript, TypeScript и React. С тех пор
                сделал довольно много разных проектов: от интернет-магазинов до
                интерактивных приложений. Сейчас продолжаю активно развиваться и
                пробовать новые инструменты.
              </p>{" "}
            </div>{" "}
            <div className="about__section"> </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default About;
