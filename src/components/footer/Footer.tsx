import Link from "next/link";
import "./footer.scss";
import InstagramIcon from "../socialIcons/InstagramIcon";
import EmailIcon from "../socialIcons/EmailIcon";
import VideoIcon from "../socialIcons/VideoIcon";

function Footer() {
  return (
    <footer className="container ">
      <div className="row pb-2">
        <span className="col align-self-end">
          © {new Date().getFullYear()} Ben Prideaux
        </span>
        <div className="social-links__container col align-self-end">
          <Link className="social-link" href="">
            Instagram
          </Link>
          <Link className="social-link" href="">
            YouTube
          </Link>
          <Link className="social-link" href="">
            Vimeo
          </Link>
          <Link className="social-link" href="">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
