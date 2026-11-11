import { Link } from "react-router-dom";

function Content() {
  const photos = [
    "/Images/leh1.webp",
    "/Images/leh2.webp",
    "/Images/leh3.webp",
    "/Images/leh4.webp",
  ];

  return (
    <main className="leh-page">

      {/* ================= HERO SECTION ================= */}

      <section className="leh-hero">

        <video
          className="leh-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videoplayback (8).mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="leh-hero-overlay"></div>

        <div className="leh-hero-content">

          <span className="leh-hero-badge">
            LAND OF HIGH PASSES • LADAKH
          </span>

          <h1>
            Leh Ladakh
          </h1>

          <div className="leh-hero-line"></div>

          <p>
            Chasing Roads, Conquering Mountains
          </p>

          <Link
            to="/booking"
            className="leh-hero-button"
          >
            Plan Your Journey
            <span>→</span>
          </Link>

        </div>

        <div className="leh-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <strong>↓</strong>
        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="leh-intro">

        <div className="container">

          <div className="leh-intro-content">

            <span className="leh-small-label">
              DISCOVER LEH LADAKH
            </span>

            <h2>
              Where the roads
              <br />
              meet the mountains.
            </h2>

            <p>
              Journey through dramatic Himalayan landscapes,
              legendary mountain passes, peaceful monasteries
              and crystal-clear alpine lakes in the extraordinary
              land of Ladakh.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="leh-gallery">

        <div className="container">

          <div className="leh-section-heading">

            <div>

              <span>01</span>

              <h2>
                The Beauty of Leh Ladakh
              </h2>

            </div>

            <p>
              Discover rugged mountains, winding roads,
              high-altitude lakes and breathtaking Himalayan
              landscapes.
            </p>

          </div>


          <div className="row g-4">

            {photos.map((photo, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

                <div className="leh-photo-card">

                  <img
                    src={photo}
                    alt={`Leh Ladakh landscape ${index + 1}`}
                  />

                  <div className="leh-photo-overlay"></div>

                  <span className="leh-photo-number">
                    0{index + 1}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="leh-about">

        <div className="container">

          <div className="leh-about-card">

            <div className="leh-about-label">
              ABOUT THE DESTINATION
            </div>

            <h2>
              Leh Ladakh — Into the High Himalayas
            </h2>

            <p>
              Leh Ladakh is a spectacular high-altitude
              destination in the Himalayas, known for its rugged
              mountains, dramatic landscapes, peaceful valleys
              and crystal-clear lakes. Often called the
              “Land of High Passes,” Ladakh is a dream destination
              for adventure seekers and nature lovers.
            </p>

            <p>
              The region is famous for its spectacular mountain
              roads, ancient monasteries, high-altitude villages
              and beautiful lakes. Visitors can explore the
              unique culture of Ladakh, experience breathtaking
              Himalayan scenery and travel through some of the
              world's most dramatic mountain landscapes.
            </p>

            <p>
              From adventurous journeys across high mountain
              passes to peaceful moments beside turquoise lakes,
              Leh Ladakh offers an unforgettable escape into
              the heart of the Himalayas.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="leh-highlights">

        <div className="container">

          <div className="leh-section-heading centered">

            <span>02</span>

            <h2>
              Leh Ladakh Highlights
            </h2>

            <p>
              Experience legendary roads, spectacular mountain
              passes and unforgettable Himalayan landscapes.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="leh-highlight-card">

                <div className="leh-highlight-icon">
                  🏍️
                </div>

                <h3>
                  Epic Bike Adventures
                </h3>

                <p>
                  Ride through breathtaking mountain roads,
                  winding passes and dramatic Himalayan
                  landscapes.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="leh-highlight-card">

                <div className="leh-highlight-icon">
                  🏔️
                </div>

                <h3>
                  High Mountain Passes
                </h3>

                <p>
                  Experience legendary Himalayan passes
                  surrounded by towering peaks and spectacular
                  mountain scenery.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="leh-highlight-card">

                <div className="leh-highlight-icon">
                  💙
                </div>

                <h3>
                  Pangong Lake
                </h3>

                <p>
                  Witness the mesmerizing blue waters of
                  Pangong Lake against a spectacular mountain
                  backdrop.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="leh-information">

        <div className="container">

          <div className="leh-section-heading centered">

            <span>03</span>

            <h2>
              Journey Information
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="leh-info-card">

                <span>📍</span>

                <h4>
                  Location
                </h4>

                <p>
                  Ladakh, India
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="leh-info-card">

                <span>🥾</span>

                <h4>
                  Difficulty
                </h4>

                <p>
                  Moderate to Challenging
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="leh-info-card">

                <span>📅</span>

                <h4>
                  Best Time
                </h4>

                <p>
                  May to September
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="leh-info-card">

                <span>⛰️</span>

                <h4>
                  Experience
                </h4>

                <p>
                  High-Altitude Himalayan Adventure
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INCLUSIONS / EXCLUSIONS ================= */}

      <section className="leh-package">

        <div className="container">

          <div className="row g-4">

            {/* INCLUSIONS */}

            <div className="col-md-6">

              <div className="leh-package-card inclusion">

                <div className="leh-package-icon">
                  ✓
                </div>

                <h3>
                  INCLUSIONS
                </h3>

                <ul>
                  <li>Accommodation</li>
                  <li>Breakfast & Dinner</li>
                  <li>Professional Trek Guide</li>
                  <li>Camping Equipment</li>
                  <li>Bonfire</li>
                </ul>

              </div>

            </div>


            {/* EXCLUSIONS */}

            <div className="col-md-6">

              <div className="leh-package-card exclusion">

                <div className="leh-package-icon">
                  ×
                </div>

                <h3>
                  EXCLUSIONS
                </h3>

                <ul>
                  <li>5% GST</li>
                  <li>Travel Insurance</li>
                  <li>Personal Expenses</li>
                  <li>Entry Fees</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="leh-cta">

        <div className="leh-cta-content">

          <span>
            YOUR HIMALAYAN ADVENTURE AWAITS
          </span>

          <h2>
            Ready to discover
            <br />
            Leh Ladakh?
          </h2>

          <p>
            Follow the mountain roads, explore breathtaking
            landscapes and experience the magic of Ladakh.
          </p>

          <Link
            to="/booking"
            className="leh-cta-button"
          >
            BOOK YOUR JOURNEY
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Content;