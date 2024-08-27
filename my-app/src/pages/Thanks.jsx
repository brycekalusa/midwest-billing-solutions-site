import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Thanks() {
  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-white">Thank you! We will be in touch!</h1>
        <Link to="/" className="fs-3">
          Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
