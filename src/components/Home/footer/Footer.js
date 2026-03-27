import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Contate-nos</h1>
        <address className="footer-contacts">
          <div>
            <h3>Phone</h3>
            <p>(13)1234-5678</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>hello@vitawave.com</p>
          </div>
          <h3>
            Social
            <a
              href="https://www.instagram.com/jvmanzanow/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://github.com/ManzanoW"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/joao-vytor/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </h3>
        </address>
      </div>
    </div>
  );
}
