import { Link } from "react-router-dom";

export function MyLinks() {
  return (
    <div className="myLinks-container">
      <div className="links-img"></div>
      <p className="my-links-head">These are my links:</p>
      <div className="my-links">
        <Link to="/" className="my-link">
          PORTFOLIO
        </Link>
        <a
          href="https://www.linkedin.com/in/anthony-gonzo/"
          className="my-link"
          target="_blank"
        >
          LINKEDIN
        </a>
        <a
          href="../images/resume3.pdf"
          target="_blank"
          type="application/pdf"
          className="my-link"
        >
          RESUME
        </a>
      </div>
    </div>
  );
}
