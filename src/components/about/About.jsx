import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <h2 className="about__title">Обо мне</h2>
          {/*  <h3 className="about__sub-title">Немного обо мне</h3> */}
          <div className="about__content">
            <div className="about__section">
              <p>
                Привет, меня зовут Евгений, я начинающий разработчик, увлеченный
                созданием адаптивных, удобных для пользователя веб-приложений. Я
                специализируюсь на создании чистых, современных интерфейсов с
                помощью React, TypeScript и передовых методов CSS, таких как
                SASS и BEM.
              </p>
            </div>
            <div className="about__section">
              <h4 className="about__section-title">Что я делаю</h4>
              <ul className="about__list">
                <li>
                  Создаю адаптивные и пиксель-перфект интерфейсы с
                  использованием медиазапросов, гибких макетов и современных
                  практик CSS.
                </li>
                <li>
                  Разрабатываю динамичные веб-приложения на React, а также
                  интегрирую библиотеки, такие как Redux, RTK Query и React
                  Router DOM, для управления состоянием и навигации.
                </li>
                <li>
                  Пишу чистый, типизированный код на TypeScript для обеспечения
                  масштабируемости и поддерживаемости.
                </li>
                <li>
                  Интегрирую API для создания интерактивных функций, таких как
                  получение данных в реальном времени (например, NASA API,
                  Google Books API)
                </li>
                <li>
                  Фокусируюсь на пользовательском опыте, обеспечивая интуитивную
                  навигацию и доступность на всех устройствах.
                </li>
              </ul>
            </div>
            <div className="about__section">
              <h4 className="about__section-title">Мой путь</h4>
              <p>
                Я начал свой путь во фронтенд-разработке с изучения HTML и CSS,
                затем приобретал курсы на Udemi для изучения Java Script, Type
                Script и React и с тех пор создал разнообразное портфолио
                проектов: от платформ электронной коммерции до интерактивных игр
                и приложений, работающих с API. Я постоянно учусь и
                экспериментирую с новыми инструментами.
              </p>
            </div>
            <div className="about__section">
              <h4 className="about__section-title">Контакты</h4>
              <p>
                Связаться со мной можно с помощью почты{" "}
                <a href="mailto:evgenyloy@gmail.com" className="about__link">
                  evgenyloy@gmail.com
                </a>{" "}
                или{" "}
                <a href="tel:+79092153830" className="about__link">
                  +7-909-215-38-30
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
