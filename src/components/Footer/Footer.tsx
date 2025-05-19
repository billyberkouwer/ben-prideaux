import Link from "next/link";
import "./footer.scss";
import { sanityFetch } from "@/sanity/lib/live";
import { navSiteDataQuery } from "@/sanity/lib/queries";

async function Footer() {
  const navSiteData = await (
    await sanityFetch({ query: navSiteDataQuery })
  ).data;

  return (
    <footer className="container ">
      <div className="row pb-2">
        <span className="col align-self-end copyright">
          © 2022—{new Date().getFullYear()} {navSiteData?.title}
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
