import Link from "next/link";
import "./nav-bar.scss";

export default function NavBar() {
  return (
    <nav className="nav-bar__container container-fluid">
      <div className="row  ">
        <div className="col-4">
          <Link href={"/"}>Ben Prideaux</Link>
        </div>
        <div className="col-4">
          <span>Portfolio / Video Editor</span>
        </div>
        <span className="menu-button__wrapper col-4">
          <button>Menu</button>
        </span>
      </div>
    </nav>
  );
}
