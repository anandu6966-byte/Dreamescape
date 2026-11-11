function Footer() {
  return (
    <footer id="about" className="footer mt-5 p-5">

    

        <div className="container-fluid px-5">

          <div className="row">

            {/* ABOUT */}

            <div className="col-md-6">

              <h5>About Us</h5>

              <p>Contact Us</p>

              <p>Partner With Us</p>

              <p>Contact Us</p>

            </div>

            {/* NEWSLETTER */}

            <div className="col-md-6 text-md-end">

              <h6>
                Sign Up For Our Newsletter
              </h6>

              <div className="input-group mb-3 newsletter">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />

                <button className="btn btn-primary">
                  Submit
                </button>

              </div>

              <h5>Stay Connected</h5>

              <img
                src="/images/insta.PNG"
                className="social-icon me-2"
                alt="Instagram"
              />

              <img
                src="/images/fb.PNG"
                className="social-icon me-2"
                alt="Facebook"
              />

              <img
                src="/images/twitter.PNG"
                className="social-icon"
                alt="Twitter"
              />

            </div>

          </div>

        </div>

      </footer>

  
  );
}

export default Footer;

