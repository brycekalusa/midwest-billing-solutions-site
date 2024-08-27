import ContactModal from "./ContactModal";

export default function Footer() {
  return (
    <footer className="container-fluid bg-white pt-3 pb-2">
      <p className="fs-5">
        Contact Us: <a>info@midwestbillingsolutions.com</a>
      </p>
      <p className="fs-5">Phone: 309-603-4714</p>
      <button
        className="fs-5"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Contact Us
      </button>
      <ContactModal />
      <p className="fs-5 pt-4">
        We are proud to be affiliated with{" "}
        <a href="https://medicorpcompliance.com/">
          Medicorp Compliance Solutions
        </a>
      </p>
      <p className="fs-6">Copyright 2022 Midwest Billing Solutions, LLC</p>
    </footer>
  );
}
