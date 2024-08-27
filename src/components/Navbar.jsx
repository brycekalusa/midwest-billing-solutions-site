import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary fs-3">
      <div className="container-fluid">
        <a className="navbar-brand fs-2" href="#">
          Midwest Billing Solutions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <div className="navbar-nav">
            <Link to="/" className="nav-link" href="#">
              Home
            </Link>
            <Link to="/services" className="nav-link" href="#">
              Services
            </Link>
            <Link to="/team" className="nav-link" href="#">
              Our Team
            </Link>
            <Link to="/reviews" className="nav-link" href="#">
              Reviews
            </Link>
            <button
              type="button"
              className="btn btn-light fs-4"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact Us
            </button>
            <ContactModal />
            <div className="d-flex p-1 mx-auto">
              <a
                className="px-2"
                href="https://www.facebook.com/midwestbilling"
              >
                <img src="public\facebook.svg" style={{ height: "50%" }}></img>
              </a>
              <a
                className="px-2"
                href="https://www.instagram.com/midwestbilling/"
              >
                <img src="public\instagram.svg" style={{ height: "50%" }}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
