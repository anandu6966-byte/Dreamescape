import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Content() {
  // Same API used by Registration
  const API_URL = "http://localhost:3002/registrations";

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

 
  // LOGIN
  

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");

    // Check empty fields
    if (!username || !password) {
      setMessage("Please enter username and password");
      return;
    }

    try {
      // Get registered users from JSON Server
      const response = await axios.get(API_URL);

      const users = response.data;

      // Remove extra spaces and ignore capital/small letters
      const enteredUsername = username.trim().toLowerCase();
      const enteredPassword = password.trim();

      // Find matching registered user
      const user = users.find((item) => {
        const firstName = item.fname?.trim().toLowerCase();

        const fullName =
          `${item.fname || ""} ${item.lname || ""}`
            .trim()
            .toLowerCase();

        const registeredPassword =
          item.password?.toString().trim();

        return (
          (firstName === enteredUsername ||
            fullName === enteredUsername) &&
          registeredPassword === enteredPassword
        );
      });

     
      // LOGIN SUCCESS
    

      if (user) {
        // Save logged-in user
        localStorage.setItem(
          "loggedUser",
          JSON.stringify(user)
        );

        // Save login status
        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        setMessage("Login successful!");

        // Go to Home page
        navigate("/home");
      }

      // ==========================================
      // LOGIN FAILED
      // ==========================================

      else {
        setMessage("Invalid username or password");
      }
    } catch (error) {
      console.log(error);

      setMessage("Unable to connect to server");
    }
  };

  return (
    <main className="login-page">

      {/* ======================================
          LOGIN BACKGROUND
      ====================================== */}

      <div className="login-background">

        {/* LOGO */}

        <div className="login-logo">

          <h2>
            <span className="text-danger">D</span>
            ream

            <span className="text-danger">E</span>
            scape
          </h2>

        </div>

        {/* ======================================
            LOGIN FORM
        ====================================== */}

        <div className="login-content">

          <div className="card login-box border-0 shadow">

            <div className="card-body p-4">

              <h4 className="heading text-center p-2 mb-4">
                Login Form
              </h4>

              <form onSubmit={handleLogin}>

                {/* USERNAME */}

                <div className="input-group mb-3">

                  <span className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    required
                  />

                </div>

                {/* PASSWORD */}

                <div className="input-group mb-3">

                  <span className="input-group-text">
                    <i className="fa-solid fa-lock"></i>
                  </span>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />

                </div>

                {/* FORGOT PASSWORD */}

                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={(e) =>
                    e.preventDefault()
                  }
                >
                  Forgot Password?
                </a>

                {/* LOGIN BUTTON */}

                <div className="d-grid mt-4">

                  <button
                    type="submit"
                    className="btn btn-dark"
                  >
                    Login
                  </button>

                </div>

              </form>

              {/* MESSAGE */}

              {message && (
                <div className="text-center text-white mt-3">
                  {message}
                </div>
              )}

              {/* SIGNUP */}

              <p className="text-center text-white mt-4 mb-0">

                Not a Member?{" "}

                <span
                  onClick={() => navigate("/")}
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline"
                  }}
                >
                  Signup Now
                </span>

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================
          FOOTER
      ====================================== */}

      <footer className="footer">

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

    </main>
  );
}

export default Content;