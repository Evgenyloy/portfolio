import Header from "../header/Header";
import Hero from "../hero/Hero";
import Technologies from "../technologies/Technologies";
import Projects from "../projects/Projects";
import Footer from "../footer/Footer";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import PetProject from "../petProjects/PetProject";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <PetProject />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
