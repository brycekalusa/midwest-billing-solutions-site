import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="container text-white">
        <h1 className="mt-5 mb-5">Our Team</h1>
        <div className="row">
          <div className="col">
            <img src="/brandi.png" className="img-fluid" alt="..."></img>
            <h2 className="mt-3">Brandi Schaich, CPC, CPB</h2>
            <p>
              Brandi has been in the medical billing industry since 2012,
              holding many roles within that time. She started in basic
              charge/data entry, moved on to insurance billing and denial
              follow-up, and then patient billing and collections.
              <br></br>
              <br></br>
              In 2016, Brandi attended Midwest Technical Institute in pursuit of
              becoming a Certified Professional Coder (CPC) through the American
              Academy of Professional Coders (AAPC). She became certified in
              January 2017 nd has been coding ever since. Most recently, Brandi
              passed the Certified Professional Biller exam through the AAPC,
              earning her the CPB credential.
            </p>
          </div>
          <div className="col">
            <img src="/stevy.png" className="img-fluid" alt="..."></img>
            <h2 className="mt-3">Stevy Barrett, CPB, CPC</h2>
            <p>
              Stevy joined the medical industry in 2016 after completing courses
              at Midwest Technical Institute. She became a Certified
              Professional Coder through the American Academy of Professional
              Coders (AAPC) in 2017, and was offered a job as an accounts
              receivable manager and billing specialist shortly after.
              <br></br>
              <br></br>
              She spent almost 5 years working for a small practice with focuses
              on weight loss and hormone replacement therapy. During her tenure
              with this practice, she implemented many crucial changes to
              billing procedures, as well as updates to front office processes.
              Stevy was also instrumental in obtaining new contracts with
              various insurance companies for current and new providers as
              necessary.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
