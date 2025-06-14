import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__text-block">
            <h1 className="hero__title">
              Hi, My name is Evgeniy <br />{' '}
              <span>I'm beginner a front-end developer</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
