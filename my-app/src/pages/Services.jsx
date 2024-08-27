import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-75 mb-5 text-white">
        <h1 className="mt-5 mb-5">Services</h1>
        <p className="fs-5">
          We provide high quality, professional services to medical practices of
          all stages and sizes.
        </p>
        <p>
          <b>Packaging and group rates available</b>
        </p>
        <div className="row mb-3 border-bottom">
          <div className="col">
            <h2>Revenue Cycle Management</h2>
            <p>
              Our Revenue Cycle Management services strive to maximize
              reimbursement while keeping AR days low. From the moment the claim
              is created until it is paid in full, we work the claim from all
              angles ensuring timely payments from insurance carriers. Included
              with this service:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Coding review</li>
              <li>Claims submission</li>
              <li>Payment posting</li>
              <li>Denials, appeals, and claims rejection management</li>
              <li>Patient statements (additional charge per statement sent)</li>
              <li>Availability to patients to discuss billing questions</li>
              <li>
                Provide online bill-pay option for patients (additional fee)
              </li>
            </ul>
            <p>
              <b>Pricing varies based on practice size and needs</b>
            </p>
          </div>
        </div>
        <div className="row mb-3 border-bottom">
          <h2 className="mb-3">Add-on Services</h2>
          <div className="col border-end">
            <h3 className="fs-4">Accounts Receivable Recovery</h3>
            <p>
              One of the biggest issues established practices can face is a
              large unworked 120+ AR bucket. In many instances, the easiest fix
              is to follow-up on simple insurance denials and claim rejections.
              Our Accounts Receivable Recovery service prioritizes these claims
              in order to get them cleaned up and paid before timely filing
              limits expire.
            </p>
            <p>
              <b>Pricing upon request</b>
            </p>
          </div>
          <div className="col">
            <h3 className="fs-4">Insurance Verification</h3>
            <p>
              Another issue a practice can face is incorrect or outdated
              insurance information on file for a patient. This can cost a
              practice time and money while tracking down the correct
              information.
              <br></br>
              <br></br>
              For insurance verification prior to claim submission, we offer
              reliable insurance verification services to ensure timely and
              accurate claim processing.
            </p>
            <p>
              <b>Pricing upon request</b>
            </p>
          </div>
          <div className="col border-start">
            <h3 className="fs-4">Claims Coding</h3>
            <p>
              Our revenue cycle management service includes review of your code
              selections prior to claim submission to ensure coding guidelines
              are met. Any changes that need to be made will be sent to your
              practice for review.
              <br></br>
              <br></br>
              We also offer a full coding service in which you don’t have to
              choose your own codes, we’ll assign them for you based on the
              documentation.
            </p>
            <p>
              <b>Pricing upon request</b>
            </p>
          </div>
        </div>
        <div className="row">
          <h2>Additional Services</h2>
          <div className="col">
            <h3 className="fs-4">Credentialing</h3>
            <p>
              Our credentialing services are a great option for new providers
              looking to become established or for those practices trying to
              expand their current patient base. We provide an easy, hassle-free
              process to obtain in-network status with requested carriers,
              including Medicare and Medicaid. Status updates can be provided on
              weekly, monthly, or as-available basis.
            </p>
            <p>
              <b>Pricing starts as low as $1,500.00 USD</b>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
