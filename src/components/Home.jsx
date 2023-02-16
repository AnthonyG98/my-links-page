import homeVideo from "../images/home.mp4";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Link, animateScroll as scroll } from "react-scroll";
export function Home() {
  const openNav = () => {
    const navContainer = document.getElementById("nav");
    navContainer.style.animation = "slide-menu 1s ease";
    navContainer.style.animationFillMode = "forwards";
  };
  const closeNav = () => {
    const navContainer = document.getElementById("nav");
    navContainer.style.animation = "close-menu 1s ease";
    navContainer.style.animationFillMode = "forwards";
  };
  return (
    <>
      <div className="App">
        <div className="bars-container" onClick={() => openNav()}>
          <div className="bar" id="bar-one"></div>
          <div className="bar" id="bar-two"></div>
        </div>
        <div className="menu-container" id="nav">
          <Link
            className="menu-link"
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeNav}
          >
            HOME
          </Link>
          <Link
            className="menu-link"
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeNav}
          >
            ABOUT ME
          </Link>
          <Link
            className="menu-link"
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeNav}
          >
            PROJECTS
          </Link>
          <Link
            className="menu-link"
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeNav}
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="home-container" id="home">
        <div className="home-background">
          <div className="home-text-container">
            <div className="align-text">
              <h1 className="home-text">Hey</h1>
              <p className="green-mark">,</p>
            </div>
            <div className="align-text">
              <h1 className="home-text">My name is Anthony</h1>
              <p className="green-mark">.</p>
            </div>
            <p className="green-mark" id="front">
              Frontend Developer.
            </p>
          </div>
        </div>

        <video autoPlay muted loop className="video">
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
