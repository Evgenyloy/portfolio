import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <h2 className="about__title">About</h2>
          <h3 className="about__sub-title">A little bit about myself</h3>
          <div className="about__content">
            <div className="about__section">
              <p>
                Hi, I’m Evgeny, a beginner frontend developer passionate about
                creating responsive, user-friendly web applications. I
                specialize in crafting clean, modern interfaces with React,
                TypeScript, and advanced CSS techniques like SASS and BEM.
              </p>
            </div>
            <div className="about__section">
              <h4 className="about__section-title">What I Do</h4>
              <ul className="about__list">
                <li>Craft responsive, pixel-perfect UI with modern CSS.</li>
                <li>
                  Build dynamic React apps with hooks, Redux, and React Router.
                </li>
                <li>Write scalable, typed code using TypeScript.</li>
                <li>
                  Integrate APIs for real-time features (e.g., NASA API, book
                  search).
                </li>
                <li>Focus on intuitive UX and accessibility across devices.</li>
              </ul>
            </div>
            <div className="about__section">
              <h4 className="about__section-title">My Journey</h4>
              <p>
                I started with HTML and CSS, then mastered JavaScript,
                TypeScript, and React through Udemy courses. My portfolio
                includes e-commerce platforms, interactive games, and API-driven
                apps. I’m always learning new tools to stay ahead in web
                development.
              </p>
            </div>
            <div className="about__section">
              <h4 className="about__section-title">Connect</h4>
              <p>
                Check out my projects below or reach out via{" "}
                <a href="mailto:evgenyloy@gmail.com" className="about__link">
                  evgenyloy@gmail.com
                </a>{" "}
                or{" "}
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
