import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="h-20 text-black-600 bg-sky-600 flex gap-4 justify-center pt-4 ">
      <a
        href="https://www.facebook.com/imu.imad.73"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ color: "#ffffff" }}
          size="xl"
          className=" rounded-full hover:bg-slate-800 "
        />
      </a>

      <a
        href="https://www.linkedin.com/in/arsalan-farooq-9b32b1292/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#ffffff" }}
          size="xl"
          className=" rounded-1 hover:bg-slate-800 "
        />
      </a>

      <a
        href="https://github.com/arsalanfarooq12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className=" rounded-full hover:bg-slate-800 "
          icon={faGithub}
          style={{ color: "#ffffff" }}
          size="xl"
        />
      </a>
    </footer>
  );
}
