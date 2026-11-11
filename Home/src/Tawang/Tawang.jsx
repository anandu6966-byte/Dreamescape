import { Link } from "react-router-dom";

function Content() {
  const photos = [
    "/Images/ta1.webp",
    "/Images/ta2.webp",
    "/Images/ta3.webp",
    "/Images/ta4.webp",
  ];

  return (
    <main className="tawang-page">

      {/* ================= HERO SECTION ================= */}

      <section className="tawang-hero">

        <video
          className="tawang-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videoplayback (3).mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="tawang-hero-overlay"></div>

        <div className="tawang-hero-content">

          <span className="tawang-hero-badge">
            EASTERN HIMALAYAS • ARUNACHAL PRADESH
          </span>

          <h1>
            Tawang
          </h1>

          <div className="tawang-hero-line"></div>

          <p>
            Where Mountains Meet the Sky
          </p>

          <Link
            to="/booking"
            className="tawang-hero-button"
          >
            Plan Your Journey
            <span>→</span>
          </Link>

        </div>

        <div className="tawang-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <strong>↓</strong>
        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="tawang-intro">

        <div className="container">

          <div className="tawang-intro-content">

            <span className="tawang-small-label">
              DISCOVER TAWANG
            </span>

            <h2>
              Where the Himalayas
              <br />
              touch the sky.
            </h2>

            <p>
              Discover snow-covered mountains, peaceful valleys,
              ancient monasteries and breathtaking Himalayan
              landscapes in one of India's most beautiful
              mountain destinations.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="tawang-gallery">

        <div className="container">

          <div className="tawang-section-heading">

            <div>
              <span>01</span>

              <h2>
                The Beauty of Tawang
              </h2>
            </div>

            <p>
              Explore the landscapes, culture and unforgettable
              mountain scenery that make Tawang special.
            </p>

          </div>


          <div className="row g-4">

            {photos.map((photo, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

                <div className="tawang-photo-card">

                  <img
                    src={photo}
                    alt={`Tawang landscape ${index + 1}`}
                  />

                  <div className="tawang-photo-overlay"></div>

                  <span className="tawang-photo-number">
                    0{index + 1}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ABOUT TAWANG ================= */}

      <section className="tawang-about">

        <div className="container">

          <div className="tawang-about-card">

            <div className="tawang-about-label">
              ABOUT THE DESTINATION
            </div>

            <h2>
              Tawang — A Himalayan Escape
            </h2>

            <p>
              Tawang is a breathtaking mountain destination in
              Arunachal Pradesh, surrounded by the majestic
              Eastern Himalayas. Known for its snow-covered
              landscapes, peaceful valleys, beautiful lakes and
              scenic mountain roads, Tawang is a wonderful
              destination for nature lovers and adventure seekers.
            </p>

            <p>
              The region is famous for the magnificent Tawang
              Monastery, one of the largest Buddhist monasteries
              in India. Visitors can explore the area's rich
              culture, peaceful monasteries, high-altitude lakes
              and spectacular Himalayan scenery.
            </p>

            <p>
              From adventurous mountain journeys to peaceful
              moments surrounded by nature, Tawang offers an
              unforgettable escape into the beauty of the Himalayas.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="tawang-highlights">

        <div className="container">

          <div className="tawang-section-heading centered">

            <span>02</span>

            <h2>
              Tawang Highlights
            </h2>

            <p>
              Discover some of the experiences that make a
              journey through Tawang memorable.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="tawang-highlight-card">

                <div className="tawang-highlight-icon">
                  🛕
                </div>

                <h3>
                  Tawang Monastery
                </h3>

                <p>
                  Explore one of the most famous Buddhist
                  monasteries in India and experience its
                  peaceful surroundings.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="tawang-highlight-card">

                <div className="tawang-highlight-icon">
                  🌲
                </div>

                <h3>
                  Mountain Trails
                </h3>

                <p>
                  Travel through peaceful forests, winding
                  mountain roads and beautiful Himalayan trails.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="tawang-highlight-card">

                <div className="tawang-highlight-icon">
                  🧗
                </div>

                <h3>
                  Adventure & Exploration
                </h3>

                <p>
                  Enjoy a mountain escape filled with scenic
                  landscapes, exploration and outdoor adventure.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="tawang-information">

        <div className="container">

          <div className="tawang-section-heading centered">

            <span>03</span>

            <h2>
              Journey Information
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="tawang-info-card">

                <span>📍</span>

                <h4>
                  Location
                </h4>

                <p>
                  Arunachal Pradesh, India
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="tawang-info-card">

                <span>🥾</span>

                <h4>
                  Difficulty
                </h4>

                <p>
                  Easy to Moderate
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="tawang-info-card">

                <span>📅</span>

                <h4>
                  Best Time
                </h4>

                <p>
                  March to May &
                  <br />
                  September to November
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="tawang-info-card">

                <span>⛰️</span>

                <h4>
                  Experience
                </h4>

                <p>
                  Snow & Himalayan Adventure
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INCLUSIONS ================= */}

      <section className="tawang-package">

        <div className="container">

          <div className="row g-4">

            {/* INCLUSIONS */}

            <div className="col-md-6">

              <div className="tawang-package-card inclusion">

                <div className="tawang-package-icon">
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

              <div className="tawang-package-card exclusion">

                <div className="tawang-package-icon">
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

      <section className="tawang-cta">

        <div className="tawang-cta-content">

          <span>
            YOUR HIMALAYAN ADVENTURE AWAITS
          </span>

          <h2>
            Ready to discover
            <br />
            Tawang?
          </h2>

          <p>
            Pack your bags and experience the breathtaking
            beauty of the Eastern Himalayas.
          </p>

          <Link
            to="/booking"
            className="tawang-cta-button"
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