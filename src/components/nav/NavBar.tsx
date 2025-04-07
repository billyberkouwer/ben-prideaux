import Link from "next/link";
import "./nav-bar.scss";

export default function NavBar({ isFixed }: { isFixed?: boolean }) {
  return (
    <nav
      className={`nav-bar__container container-fluid ${isFixed ? "fixed" : ""}`}
    >
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
