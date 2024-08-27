export default function ContactModal() {
  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-3" id="contactModalLabel">
              Contact Us
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid fs-6">
              <div className="row">
                <div className="col position-relative">
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <p>info@midwestbillingsolutions.com</p>
                    <p>309-603-4714</p>
                    <p>Peoria, IL 61615</p>
                  </div>
                </div>
                <div className="col-7">
                  <form
                    action="https://formsubmit.co/info@midwestbillingsolutions.com"
                    method="POST"
                  >
                    <div className="container">
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
                          <div className="col text-start">
                            <p className="mt-3">
                              Interested Services (check all that apply)
                            </p>
                            <ul
                              style={{ listStyleType: "none", paddingLeft: 0 }}
                            >
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
                                <label htmlFor="Claims Coding">
                                  Claims Coding
                                </label>
                              </li>
                              <li>
                                <input
                                  className="me-2"
                                  type="checkbox"
                                  name="Credentialing"
                                ></input>
                                <label htmlFor="Credentialing">
                                  Credentialing
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col text-start">
                            <label htmlFor="Message">Message*</label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="6"
                              name="Message"
                              placeholder="The information provided on this form is used for the sole purpose of identifying your companies needs. Your information will not be sold, shared, or otherwise retained."
                              required
                            ></textarea>
                          </div>
                        </div>
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
                        <input
                          type="hidden"
                          name="_captcha"
                          value="false"
                        ></input>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
