import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Reviews() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-50 mt-5 mb-5 text-white">
        <h1 className="mb-5">Reviews</h1>
        <p>
          “Pekin Family Practice is extremely happy with the services provided
          us by Midwest Billing Solutions, LLC.
          <br></br>
          <br></br>
          Our practice had tried three other billing services in a 2 ½ year time
          period... We were thrilled to find Midwest Billing Solutions, LLC
          could not only handle the old AR, maximize receipts even with aged
          claims and negotiate agreeable solutions, but also process our claims
          correctly and in a timely fashion.
          <br></br>
          <br></br>
          Their knowledge of medical coding is superior. Best of all, they
          handle our patients with care and respect – an absolute “must” for Dr.
          Fisher.
          <br></br>
          <br></br>
          We highly recommend Midwest Billing Solutions, LLC, to any and all
          practices.”
          <br></br>
          <br></br>
          <p>
            <em>- Chris Fisher, Practice Manger - Pekin Family Practice.</em>
          </p>
        </p>
      </div>
      <Footer />
    </>
  );
}
