import othersideImg from "../images/otherside.png";
import nationalParkImg from "../images/nationalpark.png";
import postPoemImg from "../images/postpoem.png";

export function Projects() {
  return (
    <>
      <div className="project-container" id="projects">
        <h1 className="project-head">
          Projects <p className="green-mark">.</p>
        </h1>
        <div className="my-project-container">
          <img src={othersideImg} alt="Of me" className="bio-pic" />
          <div className="tech-skills">
            <p className="project-title">Otherside Messaging App</p>
            <div className="bio-text-container">
              <p className="bio-text">
                This application utilizes all my knowledge of CRUD developement
                that allows registered users to communicate with each other.
              </p>
              <div className="projects-btn-container">
                <a
                  className="project-link"
                  href="https://othersidemessaging.netlify.app/"
                  target="_blank"
                >
                  VIEW LIVE
                </a>
                <a
                  className="project-link"
                  href="https://github.com/AnthonyG98/typescript-messaging-app"
                >
                  SOURCE CODE
                </a>
              </div>
            </div>
            <p>Built using:</p>
            <div className="tools-container">
              <p className="skill">REACT</p>
              <p className="skill">TYPESCRIPT</p>
              <p className="skill">REDUX</p>
              <p className="skill">MYSQL</p>
              <p className="skill">NODE</p>
            </div>
          </div>
        </div>
        <div className="my-project-container" id="project-two">
          <img src={nationalParkImg} alt="Of me" className="bio-pic" />
          <div className="tech-skills">
            <p className="project-title">National Park API</p>
            <div className="bio-text-container">
              <p className="bio-text">
                This app allows users to broad search from a National Park API.
                It allowed me to learn how to read API documentation from a
                different source and how to manipulate it into my own project.
              </p>
              <div className="projects-btn-container" id="project-two-btns">
                <a
                  className="project-link"
                  href="https://visionary-sorbet-e0ba84.netlify.app/"
                  target="_blank"
                >
                  VIEW LIVE
                </a>
                <a
                  className="project-link"
                  href="https://github.com/AnthonyG98/National-Park"
                >
                  SOURCE CODE
                </a>
              </div>
            </div>
            <p>Built using:</p>
            <div className="tools-container">
              <p className="skill">REACT</p>
            </div>
          </div>
        </div>
        <div className="my-project-container">
          <img src={postPoemImg} alt="Of me" className="bio-pic" />
          <div className="tech-skills">
            <p className="project-title">Post-a-Poem App</p>
            <div className="bio-text-container">
              <p className="bio-text">
                A sign up and post app that allows registered users to browse
                other user's profiles and like poems they have posted. Saved
                poems are unique to every user and users can remove them from
                their favorites.
              </p>
              <div className="projects-btn-container">
                <a
                  className="project-link"
                  href="https://postpoem.netlify.app/"
                  target="_blank"
                >
                  VIEW LIVE
                </a>
                <a
                  className="project-link"
                  href="https://github.com/AnthonyG98/post-poem"
                >
                  SOURCE CODE
                </a>
              </div>
            </div>
            <p>Built using:</p>
            <div className="tools-container">
              <p className="skill">REACT</p>
              <p className="skill">MYSQL</p>
              <p className="skill">NODE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
