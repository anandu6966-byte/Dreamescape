import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function RedirectIfLoggedIn({ children }) {
  const [checking, setChecking] = useState(true);
  const [hasRegisteredUser, setHasRegisteredUser] = useState(false);

  useEffect(() => {
    const showRegistration =
      sessionStorage.getItem("showRegistration");

    // If user clicked Logout, show Registration page
    if (showRegistration === "true") {
      sessionStorage.removeItem("showRegistration");
      setChecking(false);
      return;
    }

    // Normal visit to /
    fetch("http://localhost:3002/registrations")
      .then((response) => response.json())
      .then((data) => {
        setHasRegisteredUser(data.length > 0);
        setChecking(false);
      })
      .catch((error) => {
        console.log(error);
        setChecking(false);
      });
  }, []);

  if (checking) {
    return null;
  }

  // Registration already exists
  if (hasRegisteredUser) {
    return <Navigate to="/login" replace />;
  }

  // No registration exists
  return children;
}

export default RedirectIfLoggedIn;