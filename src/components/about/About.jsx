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
                Специализируюсь на создании быстрых, адаптивных и удобных
                веб-приложений. Особое внимание уделяю чистому коду,
                качественной типизации и продуманному пользовательскому
                интерфейсу.
              </p>{" "}
            </div>{" "}
            <div className="about__section">
              {" "}
              <h4 className="about__section-title">Что умею</h4>{" "}
              <ul className="about__list">
                {" "}
                <li>
                  Разработка современных SPA-приложений с акцентом на
                  производительность и UX (Mobile-First)
                </li>
                <li>
                  Глубокая работа с React-экосистемой: Redux Toolkit, RTK Query,
                  Zustand, TanStack Query Пишу понятный и типизированный код
                </li>
                <li>
                  Создание сложных пользовательских интерфейсов (многоуровневые
                  фильтры, Drag & Drop, поиск в реальном времени, пагинация)
                </li>
                <li>
                  Полная типизация TypeScript, чистая архитектура, Vite + Vercel
                </li>
                <li>
                  Интеграция с внешними REST API и Firebase (Auth + Firestore)
                </li>
              </ul>{" "}
            </div>{" "}
            <div className="about__section">
              {" "}
              <h4 className="about__section-title">Опыт</h4>{" "}
              <p>
                {" "}
                За последний год реализовал 5 полноценных проектов, включая
                интернет-магазин с авторизацией и корзиной, игровой портал с
                продвинутой фильтрацией и интерактивные приложения с сложными
                взаимодействиями. Активно развиваюсь, быстро осваиваю новые
                инструменты и ищу возможность применить накопленный опыт в
                коммерческой разработке.
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
