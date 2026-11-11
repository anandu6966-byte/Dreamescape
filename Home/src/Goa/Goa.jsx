
import { Link } from "react-router-dom";

function Goa() {
  const photos = [
    "/Images/gh1.webp",
    "/Images/gh2.webp",
    "/Images/gh3.webp",
    "/Images/gh4.webp",
  ];

  return (
    <main className="goa-page">

      {/* ================= HERO ================= */}

      <section className="goa-hero">

        <video
          className="goa-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/goa.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>

        <div className="goa-hero-overlay"></div>

        <div className="goa-hero-content">

          <span className="goa-tag">
            BEACHES • ROMANCE • ADVENTURE
          </span>

          <h1>Goa</h1>

          <p>
            Where Land Meets Sea
          </p>

          <Link
            to="/booking"
            className="goa-hero-button"
          >
            Plan Your Goa Trip
          </Link>

        </div>

        <div className="goa-scroll">
          <span>Explore</span>

          <div></div>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="goa-intro">

        <div className="goa-container">

          <div className="goa-intro-grid">

            <div>

              <span className="goa-small-title">
                DISCOVER GOA
              </span>

              <h2>
                Where every moment
                <span> feels like a holiday</span>
              </h2>

            </div>

            <div>

              <p>
                Goa is one of India's most popular coastal destinations,
                famous for its beautiful beaches, vibrant atmosphere,
                historic churches, colourful streets and breathtaking
                sunsets.
              </p>

              <p>
                Whether you are looking for a romantic getaway, a relaxing
                beach holiday or an exciting adventure, Goa offers an
                unforgettable experience for every traveller.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="goa-gallery">

        <div className="goa-container">

          <div className="goa-section-heading">

            <span>VISUAL JOURNEY</span>

            <h2>
              Experience Goa
            </h2>

            <p>
              Beaches, sunsets, heritage and unforgettable moments.
            </p>

          </div>


          <div className="goa-photo-grid">

            {photos.map((photo, index) => (

              <div
                className={`goa-photo goa-photo-${index + 1}`}
                key={index}
              >

                <img
                  src={photo}
                  alt={`Goa destination ${index + 1}`}
                />

                <div className="goa-photo-overlay">

                  <span>

                    {index === 0 && "Golden Beaches"}

                    {index === 1 && "Coastal Beauty"}

                    {index === 2 && "Goa Sunsets"}

                    {index === 3 && "Goan Experience"}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="goa-highlights">

        <div className="goa-container">

          <div className="goa-section-heading light">

            <span>GOA EXPERIENCES</span>

            <h2>
              What awaits you
            </h2>

          </div>


          <div className="goa-feature-grid">

            <div className="goa-feature-card">

              <div className="goa-feature-icon">
                🏖️
              </div>

              <h3>
                Beautiful Beaches
              </h3>

              <p>
                Relax on Goa's beautiful coastline and enjoy peaceful
                beach days surrounded by stunning sea views.
              </p>

            </div>


            <div className="goa-feature-card">

              <div className="goa-feature-icon">
                🌅
              </div>

              <h3>
                Magical Sunsets
              </h3>

              <p>
                Watch spectacular sunsets over the Arabian Sea and
                create unforgettable memories.
              </p>

            </div>


            <div className="goa-feature-card">

              <div className="goa-feature-icon">
                🕯️
              </div>

              <h3>
                Romantic Moments
              </h3>

              <p>
                Enjoy romantic dinners, peaceful walks and memorable
                experiences with your loved one.
              </p>

            </div>


            <div className="goa-feature-card">

              <div className="goa-feature-icon">
                ⛪
              </div>

              <h3>
                Heritage & Culture
              </h3>

              <p>
                Explore Goa's historic churches, architecture, markets
                and unique cultural heritage.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="goa-info">

        <div className="goa-container">

          <div className="goa-section-heading">

            <span>PLAN YOUR JOURNEY</span>

            <h2>
              Trip Information
            </h2>

          </div>


          <div className="goa-info-grid">

            <div className="goa-info-card">

              <span>📍</span>

              <div>

                <small>LOCATION</small>

                <h4>
                  Goa, India
                </h4>

              </div>

            </div>


            <div className="goa-info-card">

              <span>🏖️</span>

              <div>

                <small>EXPERIENCE</small>

                <h4>
                  Beach & Leisure
                </h4>

              </div>

            </div>


            <div className="goa-info-card">

              <span>📅</span>

              <div>

                <small>BEST TIME</small>

                <h4>
                  November – February
                </h4>

              </div>

            </div>


            <div className="goa-info-card">

              <span>❤️</span>

              <div>

                <small>IDEAL FOR</small>

                <h4>
                  Couples & Families
                </h4>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PACKAGE ================= */}

      <section className="goa-package">

        <div className="goa-container">

          <div className="goa-package-grid">

            {/* INCLUDED */}

            <div className="goa-package-box">

              <span className="goa-package-label included">
                INCLUDED
              </span>

              <h2>
                Your Goa experience includes
              </h2>

              <ul>

                <li>
                  ✓ Comfortable accommodation
                </li>

                <li>
                  ✓ Breakfast & dinner
                </li>

                <li>
                  ✓ Local sightseeing
                </li>

                <li>
                  ✓ Beach visits
                </li>

                <li>
                  ✓ Tour assistance
                </li>

              </ul>

            </div>


            {/* EXCLUDED */}

            <div className="goa-package-box">

              <span className="goa-package-label excluded">
                NOT INCLUDED
              </span>

              <h2>
                Additional expenses
              </h2>

              <ul>

                <li>
                  × Travel insurance
                </li>

                <li>
                  × Personal expenses
                </li>

                <li>
                  × Entry fees
                </li>

                <li>
                  × Optional activities
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="goa-cta">

        <div className="goa-cta-overlay"></div>

        <div className="goa-cta-content">

          <span>
            YOUR GOA ADVENTURE STARTS HERE
          </span>

          <h2>
            Ready to escape to Goa?
          </h2>

          <p>
            Beaches, sunsets, romance and unforgettable memories
            are waiting for you.
          </p>

          <Link
            to="/booking"
            className="goa-cta-button"
          >
            BOOK YOUR GOA TOUR
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Goa;

