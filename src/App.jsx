import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </>
  );
}

export default App;
