import { Link, useNavigate } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  function handleLogout() {
    // Remove login information
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("isLoggedIn");

    // Tell the root page that logout was clicked
    sessionStorage.setItem("showRegistration", "true");

    // Go to Registration page
    navigate("/");
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-light bg-white" : "navbar-dark bg-dark"
      }`}
    >
      <div className="container">

        <Link
          className="navbar-brand"
          to="/home"
        >
          <h1>
            <span style={{ color: "red" }}>D</span>REAM
            <span style={{ color: "red" }}>E</span>SCAPE
          </h1>
        </Link>

        <button
          className={`navbar-toggler ${
            darkMode ? "navbar-light" : "navbar-dark"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={
              darkMode
                ? "navbar-toggler-icon dark-toggler"
                : "navbar-toggler-icon"
            }
          ></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={handleLogout}
              >
                Log out
              </button>
            </li>

            {/* DARK MODE BUTTON */}

            <li className="nav-item ms-3">
              <button
                className="dark-mode-button"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Header;