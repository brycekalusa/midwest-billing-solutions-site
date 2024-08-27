import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container text-white mt-5">
        <div className="row">
          <div className="col">
            <h1>Contact us</h1>
            <p>info@midwestbillingsolutions.com</p>
            <p>309-603-4714</p>
            <p>Peoria, IL 61615</p>
          </div>
          <div className="col">
            <form
              action="https://formsubmit.co/kalusa82@gmail.com"
              method="POST"
            >
              <div className="container mx-auto w-75">
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="First name"
                      placeholder="First name*"
                      required
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="Last name"
                      placeholder="Last name*"
                      required
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      placeholder="Email*"
                      required
                    ></input>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="mt-3">
                        Interested Services (check all that apply)
                      </p>
                      <ul style={{ listStyleType: "none" }}>
                        <li>
                          <input
                            className="me-2"
                            type="checkbox"
                            name="Revenue Cycle Management"
                          ></input>
                          <label htmlFor="Revenue Cycle Management">
                            Revenue Cycle Management
                          </label>
                        </li>
                        <li>
                          <input
                            className="me-2"
                            type="checkbox"
                            name="Claims Recovery & Denial Management"
                          ></input>
                          <label htmlFor="Claims Recovery & Denial Management">
                            Claims Recovery & Denial Management
                          </label>
                        </li>
                        <li>
                          <input
                            className="me-2"
                            type="checkbox"
                            name="Insurance Verification"
                          ></input>
                          <label htmlFor="Insurance Verification">
                            Insurance Verification
                          </label>
                        </li>
                        <li>
                          <input
                            className="me-2"
                            type="checkbox"
                            name="Claims Coding"
                          ></input>
                          <label htmlFor="Claims Coding">Claims Coding</label>
                        </li>
                        <li>
                          <input
                            className="me-2"
                            type="checkbox"
                            name="Credentialing"
                          ></input>
                          <label htmlFor="Credentialing">Credentialing</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="Message">Message*</label>
                      <input
                        className="form-control"
                        style={{ height: 150 }}
                        type="textarea"
                        name="Message"
                        placeholder="The information provided on this form is used for the sole purpose of identifying your companies needs. Your information will not be sold, shared, or otherwise retained."
                        required
                      ></input>
                    </div>
                  </div>
                  <button type="submit">Send</button>
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:5173/thanks"
                  ></input>
                  <input
                    type="hidden"
                    name="_subject"
                    value="New inquiry!"
                  ></input>
                  <input type="hidden" name="_captcha" value="false"></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <input
        style={{ height: 150 }}
        type="textarea"
        name="Message"
        placeholder="The information provided on this form is used for the sole purpose of identifying your companies needs. Your information will not be sold, shared, or otherwise retained."
        required
      ></input>
    </>
  );
}
