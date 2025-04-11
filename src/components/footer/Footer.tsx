import Link from "next/link";
import "./footer.scss";
import InstagramIcon from "../socialIcons/InstagramIcon";
import EmailIcon from "../socialIcons/EmailIcon";
import VideoIcon from "../socialIcons/VideoIcon";

function Footer() {
  return (
    <footer className="container ">
      <div className="row pt-5 pb-2">
        <span className="col align-self-end">
          © {new Date().getFullYear()} Ben Prideaux
        </span>
        <div className="social-links__container col align-self-end">
          <Link className="icon__container" href="">
            <InstagramIcon height={40} width={40} />
          </Link>
          <Link className="icon__container" href="">
            <EmailIcon height={40} width={74} />
          </Link>
          <Link className="icon__container" href="">
            <VideoIcon height={40} width={53} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
