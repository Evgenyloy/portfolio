import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <h2 className="about__title">About</h2>
          <h3 className="about__sub-title">A little bit about yourself</h3>
          <p className="about__text">
            <span>
              Hi, I’m Evgeny, a beginner frontend developer passionate about
              creating responsive and user-friendly web applications. I
              specialize in building clean, modern interfaces using React,
              TypeScript, and advanced CSS techniques like SASS and BEM
              methodology. My goal is to craft digital products that are both
              functional and visually appealing.
            </span>
            <span>
              What I Do: Build responsive and pixel-perfect interfaces using
              media queries, flexible layouts, and modern CSS practices. <br />{" "}
              Develop dynamic web applications with React, utilizing both class
              components and hooks, and integrating libraries like Redux, RTK
              Query, and React Router DOM for state management and navigation.
              <br /> Write clean, typed code with TypeScript to ensure
              scalability and maintainability. <br /> Integrate APIs to create
              interactive features, such as real-time data fetching (e.g., NASA
              API, book search) and drag-and-drop functionality (e.g.,
              interactive calculator). <br /> Focus on user experience, ensuring
              intuitive navigation and accessibility across all devices.
            </span>
            <span>
              My Journey: <br /> I started my frontend development journey by
              learning HTML and CSS, then deepened my skills through Udemy
              courses on JavaScript, TypeScript, and React. Since then, I’ve
              built a diverse portfolio of projects, from e-commerce platforms
              to interactive games and API-driven applications. I’m constantly
              learning and experimenting with new tools to stay at the forefront
              of web development.
            </span>
            <span>
              Connect: <br />
              Check out my projects below or reach out to collaborate via email:
              evgenyloy@gmail.com or phone: +7-961-189-29-43.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
