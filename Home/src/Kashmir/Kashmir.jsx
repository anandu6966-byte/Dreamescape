
import { Link } from "react-router-dom";

function Content() {
  const photos = [
    "/Images/k1.webp",
    "/Images/k2.webp",
    "/Images/k3.webp",
    "/Images/k4.webp",
  ];

  return (
    <main className="kashmir-page">

      {/* ================= HERO ================= */}

      <section className="kashmir-hero">

        <video
          className="kashmir-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videoplayback (12).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="kashmir-overlay"></div>

        <div className="kashmir-hero-content">

          <span className="kashmir-label">
            DREAM ESCAPE TOURS
          </span>

          <h1>
            Kashmir
          </h1>

          <p className="kashmir-tagline">
            Where Heaven Meets Earth
          </p>

          <p className="kashmir-hero-description">
            Discover snow-covered mountains, peaceful lakes,
            breathtaking valleys and unforgettable Himalayan beauty.
          </p>

          <Link
            to="/booking"
            className="kashmir-hero-button"
          >
            Explore Kashmir
            <span> →</span>
          </Link>

        </div>

        <div className="kashmir-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="kashmir-intro">

        <div className="container text-center">

          <span className="kashmir-section-label">
            THE PARADISE OF EARTH
          </span>

          <h2>
            A Journey Into Himalayan Beauty
          </h2>

          <div className="kashmir-title-line"></div>

          <p>
            Kashmir is a breathtaking Himalayan destination where
            magnificent mountains, peaceful lakes, lush valleys and
            rich culture come together to create an unforgettable
            travel experience.
          </p>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="kashmir-gallery">

        <div className="container">

          <div className="kashmir-section-heading">

            <div>
              <span className="kashmir-section-label">
                DISCOVER
              </span>

              <h2>
                Beauty of Kashmir
              </h2>
            </div>

            <p>
              Explore the landscapes, lakes and mountains that make
              Kashmir one of India's most beautiful destinations.
            </p>

          </div>


          <div className="row g-4">

            {photos.map((photo, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

                <div className="kashmir-gallery-card">

                  <img
                    src={photo}
                    alt={`Kashmir destination ${index + 1}`}
                  />

                  <div className="kashmir-gallery-overlay">

                    <span>
                      Kashmir
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="kashmir-about">

        <div className="container">

          <div className="kashmir-about-box">

            <span className="kashmir-section-label">
              ABOUT THE DESTINATION
            </span>

            <h2>
              Welcome to Kashmir
            </h2>

            <div className="kashmir-title-line"></div>

            <p>
              Kashmir is a breathtaking destination in the Himalayas,
              famous for its snow-covered mountains, lush green valleys,
              peaceful lakes and stunning natural beauty. Often called
              the "Paradise on Earth", Kashmir attracts travellers with
              its unforgettable landscapes and peaceful atmosphere.
            </p>

            <p>
              Explore beautiful destinations such as Srinagar, Gulmarg,
              Pahalgam and Sonamarg. Enjoy a traditional Shikara ride
              on Dal Lake, discover charming valleys, experience
              snow-covered landscapes and explore the rich culture
              and traditions of the region.
            </p>

            <p>
              Whether you are looking for adventure, nature, relaxation
              or a romantic escape, Kashmir offers a magical journey
              filled with breathtaking views and unforgettable memories.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="kashmir-highlights">

        <div className="container">

          <div className="text-center kashmir-section-heading-center">

            <span className="kashmir-section-label">
              EXPERIENCES
            </span>

            <h2>
              Kashmir Highlights
            </h2>

            <p>
              Experience the most memorable attractions of the valley.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="kashmir-feature-card">

                <div className="kashmir-feature-icon">
                  🏔️
                </div>

                <span className="feature-number">
                  01
                </span>

                <h4>
                  Gulmarg Adventure
                </h4>

                <p>
                  Experience breathtaking mountain views, lush meadows
                  and exciting gondola rides in the beautiful landscapes
                  of Gulmarg.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="kashmir-feature-card">

                <div className="kashmir-feature-icon">
                  🚣
                </div>

                <span className="feature-number">
                  02
                </span>

                <h4>
                  Dal Lake & Shikara
                </h4>

                <p>
                  Relax on the peaceful waters of Dal Lake and enjoy
                  a traditional Shikara ride surrounded by beautiful
                  Himalayan scenery.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="kashmir-feature-card">

                <div className="kashmir-feature-icon">
                  ❄️
                </div>

                <span className="feature-number">
                  03
                </span>

                <h4>
                  Himalayan Landscapes
                </h4>

                <p>
                  Discover snow-covered mountains, peaceful valleys
                  and spectacular landscapes throughout Kashmir.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="kashmir-information">

        <div className="container">

          <div className="text-center kashmir-section-heading-center">

            <span className="kashmir-section-label">
              PLAN YOUR JOURNEY
            </span>

            <h2>
              Kashmir Travel Information
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="kashmir-info-card">

                <span className="info-icon">
                  📍
                </span>

                <span className="info-label">
                  LOCATION
                </span>

                <h5>
                  Kashmir, India
                </h5>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="kashmir-info-card">

                <span className="info-icon">
                  🥾
                </span>

                <span className="info-label">
                  ACTIVITY
                </span>

                <h5>
                  Easy to Moderate
                </h5>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="kashmir-info-card">

                <span className="info-icon">
                  📅
                </span>

                <span className="info-label">
                  BEST TIME
                </span>

                <h5>
                  March – June
                </h5>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="kashmir-info-card">

                <span className="info-icon">
                  ⛰️
                </span>

                <span className="info-label">
                  EXPERIENCE
                </span>

                <h5>
                  Nature & Adventure
                </h5>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INCLUSIONS ================= */}

      <section className="kashmir-inclusions">

        <div className="container">

          <div className="row g-4">

            {/* INCLUSIONS */}

            <div className="col-lg-6">

              <div className="kashmir-list-card inclusion-card">

                <div className="list-card-header">

                  <span className="list-icon">
                    ✓
                  </span>

                  <div>

                    <span>
                      INCLUDED
                    </span>

                    <h3>
                      Package Inclusions
                    </h3>

                  </div>

                </div>

                <ul>

                  <li>
                    <span>✓</span>
                    Comfortable Accommodation
                  </li>

                  <li>
                    <span>✓</span>
                    Breakfast & Dinner
                  </li>

                  <li>
                    <span>✓</span>
                    Local Sightseeing
                  </li>

                  <li>
                    <span>✓</span>
                    Transportation
                  </li>

                  <li>
                    <span>✓</span>
                    Professional Tour Assistance
                  </li>

                </ul>

              </div>

            </div>


            {/* EXCLUSIONS */}

            <div className="col-lg-6">

              <div className="kashmir-list-card exclusion-card">

                <div className="list-card-header">

                  <span className="list-icon">
                    ×
                  </span>

                  <div>

                    <span>
                      NOT INCLUDED
                    </span>

                    <h3>
                      Package Exclusions
                    </h3>

                  </div>

                </div>

                <ul>

                  <li>
                    <span>×</span>
                    5% GST
                  </li>

                  <li>
                    <span>×</span>
                    Travel Insurance
                  </li>

                  <li>
                    <span>×</span>
                    Personal Expenses
                  </li>

                  <li>
                    <span>×</span>
                    Entry Fees
                  </li>

                  <li>
                    <span>×</span>
                    Expenses Outside Package
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="kashmir-cta">

        <div className="kashmir-cta-overlay"></div>

        <div className="kashmir-cta-content">

          <span>
            YOUR HIMALAYAN JOURNEY AWAITS
          </span>

          <h2>
            Discover the Magic of Kashmir
          </h2>

          <p>
            Let DREAM ESCAPE TOURS take you on an unforgettable
            journey through the Paradise on Earth.
          </p>

          <Link
            to="/booking"
            className="kashmir-cta-button"
          >
            Book Your Kashmir Trip
            <span> →</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Content;

