import techImg from "../images/me.jpeg";

export function About() {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-icon-container">
          <div className="about-icon">
            <i class="far fa-sticky-note"></i>
            <p>DEDICATED</p>
          </div>
          <div className="about-icon">
            <i class="fas fa-search"></i>
            <p>DETAIL-ORIENTED</p>
          </div>
          <div className="about-icon">
            <i class="fas fa-coffee"></i>
            <p>CAFFEINATED</p>
          </div>
        </div>
        <div className="skills-container">
          <div className="tech-skills-container">
            <div className="tech-head">
              <h1>Skills</h1>
              <p className="green-mark">.</p>
            </div>
            <div className="tech-bio-container">
              <img src={techImg} alt="Of me" className="bio-pic" />
              <div className="tech-skills">
                <p className="my-stack">My stack:</p>
                <div className="stack-container">
                  <p className="skill">REACT</p>
                  <p className="skill">TYPESCRIPT</p>
                  <p className="skill">REDUX</p>
                  <p className="skill">MYSQL</p>
                  <p className="skill">NODE</p>
                </div>
                <div className="bio-text-container">
                  <p className="bio-text">
                    Hey, I'm Anthony, a self-taught Frontend developer. I've
                    been coding since June of 2020 and I'm doing more each day!
                    My experience ranges from small businesses to Microsoft. If
                    I'm not coding, I enjoy all things music: creating and
                    listening. Got any suggestions for me to listen to?
                  </p>
                  <div className="skills-icon-container">
                    <a
                      className="icon-link"
                      href="https://github.com/AnthonyG98"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                    <a
                      className="icon-link"
                      href="https://www.linkedin.com/in/anthony-gonzo/"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
