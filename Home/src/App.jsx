import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ChatBot from "./Components/Chatbot";
import Content from "./Components/Content";
import ScrollToTop from "./Components/ScrollToTop";

import Login from "./Login/Login";
import Registration from "./Registration/Registration";

import Kedarkantha from "./Kedarkantha/Kedarkantha";
import Kashmir from "./Kashmir/Kashmir";
import Mussoorie from "./Mussoorie/Mussoorie";
import Tawang from "./Tawang/Tawang";
import LehLadakh from "./Leh Laddakh/Leh Laddakh";

import Wildlife from "./Wildlife/Wildlife";
import Honeymoon from "./Honeymoon/Honeymoon";
import Trekking from "./Trekking/Trekking";

import JimCorbett from "./JimCorbet/JimCorbet";
import Kaziranga from "./Kaziranga/Kaziranga";

import Goa from "./Goa/Goa";
import Anamudi from "./Anaimudi/Anaimudi";

import Booking from "./Booking/Booking";
import Payment from "./Payment/Payment";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checkingRegistration, setCheckingRegistration] = useState(true);
  const [hasRegistration, setHasRegistration] = useState(false);

  useEffect(() => {
    const showRegistration =
      sessionStorage.getItem("showRegistration");

    // If user clicked Logout,
    // show Registration page directly
    if (showRegistration === "true") {
      setCheckingRegistration(false);
      return;
    }

    fetch("http://localhost:3002/registrations")
      .then((response) => response.json())
      .then((data) => {
        setHasRegistration(data.length > 0);
        setCheckingRegistration(false);
      })
      .catch((error) => {
        console.log(error);
        setCheckingRegistration(false);
      });
  }, []);

  if (checkingRegistration) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark-mode" : "light-mode"}>

        <ScrollToTop />

        <Routes>

          {/* ROOT */}
          <Route
            path="/"
            element={
              sessionStorage.getItem("showRegistration") === "true" ? (
                <>
                  {sessionStorage.removeItem("showRegistration")}
                  <Registration />
                  <Footer />
                </>
              ) : hasRegistration ? (
                <Navigate to="/login" replace />
              ) : (
                <>
                  <Registration />
                  <Footer />
                </>
              )
            }
          />

          {/* LOGIN */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* HOME */}
          <Route
            path="/home"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />

                <Content />

                <Footer />

                <ChatBot />
              </>
            }
          />

          {/* DESTINATIONS */}

          <Route
            path="/kedarkantha"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Kedarkantha />
                <Footer />
                <ChatBot />
              </>
            }
          />

          <Route
            path="/kashmir"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Kashmir />
                <Footer />
                <ChatBot />
              </>
            }
          />

          <Route
            path="/mussoorie"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Mussoorie />
                <Footer />
                <ChatBot />
              </>
            }
          />

          <Route
            path="/tawang"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Tawang />
                <Footer />
                <ChatBot />
              </>
            }
          />

          <Route
            path="/leh-ladakh"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <LehLadakh />
                <Footer />
                <ChatBot />
              </>
            }
          />

          {/* EXPERIENCE PAGES */}

          <Route
            path="/wildlife"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Wildlife />
                <Footer />
                <ChatBot />
              </>
            }
          />

          <Route
            path="/honeymoon"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Honeymoon />
                <Footer />
                <ChatBot />
              </>
            }
          />

          <Route
            path="/trekking"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Trekking />
                <Footer />
                <ChatBot />
              </>
            }
          />

          {/* WILDLIFE */}

          <Route
            path="/jim-corbett"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <JimCorbett />
                <Footer />
                <ChatBot />
              </>
            }
          />

          <Route
            path="/kaziranga"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Kaziranga />
                <Footer />
                <ChatBot />
              </>
            }
          />

          {/* HONEYMOON */}

          <Route
            path="/goa"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Goa />
                <Footer />
                <ChatBot />
              </>
            }
          />

          {/* TREKKING */}

          <Route
            path="/anaimudi"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Anamudi />
                <Footer />
                <ChatBot />
              </>
            }
          />

          {/* BOOKING */}

          <Route
            path="/booking"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Booking />
                <Footer />
                <ChatBot />
              </>
            }
          />

          {/* PAYMENT */}

          <Route
            path="/payment"
            element={
              <>
                <Header
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Payment />
                <Footer />
                <ChatBot />
              </>
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;