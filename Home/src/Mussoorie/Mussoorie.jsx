import { Link } from "react-router-dom";

function Content() {
  const photos = [
    "/Images/mu1.webp",
    "/Images/mu2.webp",
    "/Images/Mussorie.jpg",
    "/Images/mu4.webp",
  ];

  return (
    <main className="mussoorie-page">

      {/* ================= HERO SECTION ================= */}

      <section className="mussoorie-hero">

        <video
          className="mussoorie-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videoplayback (9).mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="mussoorie-hero-overlay"></div>

        <div className="mussoorie-hero-content">

          <span className="mussoorie-hero-badge">
            UTTARAKHAND • QUEEN OF THE HILLS
          </span>

          <h1>
            Mussoorie
          </h1>

          <div className="mussoorie-hero-line"></div>

          <p>
            A Paradise in the Mountains
          </p>

          <Link
            to="/booking"
            className="mussoorie-hero-button"
          >
            Plan Your Journey
            <span>→</span>
          </Link>

        </div>

        <div className="mussoorie-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <strong>↓</strong>
        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="mussoorie-intro">

        <div className="container">

          <div className="mussoorie-intro-content">

            <span className="mussoorie-small-label">
              DISCOVER MUSSOORIE
            </span>

            <h2>
              Where the hills
              <br />
              tell their story.
            </h2>

            <p>
              Discover misty valleys, peaceful mountain roads,
              lush green landscapes and breathtaking Himalayan
              views in the beautiful hill station of Mussoorie.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="mussoorie-gallery">

        <div className="container">

          <div className="mussoorie-section-heading">

            <div>

              <span>01</span>

              <h2>
                The Beauty of Mussoorie
              </h2>

            </div>

            <p>
              Explore the charming landscapes, scenic viewpoints
              and peaceful atmosphere of the Queen of the Hills.
            </p>

          </div>


          <div className="row g-4">

            {photos.map((photo, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

                <div className="mussoorie-photo-card">

                  <img
                    src={photo}
                    alt={`Mussoorie landscape ${index + 1}`}
                  />

                  <div className="mussoorie-photo-overlay"></div>

                  <span className="mussoorie-photo-number">
                    0{index + 1}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="mussoorie-about">

        <div className="container">

          <div className="mussoorie-about-card">

            <div className="mussoorie-about-label">
              ABOUT THE DESTINATION
            </div>

            <h2>
              Mussoorie — The Queen of the Hills
            </h2>

            <p>
              Mussoorie is a beautiful hill station in Uttarakhand,
              often known as the “Queen of the Hills.” Surrounded
              by lush green mountains, misty valleys and
              breathtaking Himalayan views, it is one of India's
              most popular mountain getaways.
            </p>

            <p>
              The town is famous for its scenic landscapes,
              pleasant weather, charming streets, waterfalls
              and viewpoints. Visitors can explore popular
              attractions such as Mall Road, Gun Hill, Kempty
              Falls and Lal Tibba while enjoying the peaceful
              atmosphere of the hills.
            </p>

            <p>
              Whether you're looking for adventure, nature or a
              relaxing escape from the busy city, Mussoorie offers
              a memorable journey filled with beautiful mountain
              views and unforgettable experiences.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="mussoorie-highlights">

        <div className="container">

          <div className="mussoorie-section-heading centered">

            <span>02</span>

            <h2>
              Mussoorie Highlights
            </h2>

            <p>
              Experience the landscapes, attractions and peaceful
              mountain atmosphere that make Mussoorie special.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="mussoorie-highlight-card">

                <div className="mussoorie-highlight-icon">
                  ☁️
                </div>

                <h3>
                  Queen of Hills
                </h3>

                <p>
                  Experience charming streets, cool mountain
                  air and the peaceful beauty of Mussoorie.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="mussoorie-highlight-card">

                <div className="mussoorie-highlight-icon">
                  🌲
                </div>

                <h3>
                  Himalayan Views
                </h3>

                <p>
                  Enjoy breathtaking views of Himalayan peaks
                  and beautiful misty mountain valleys.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="mussoorie-highlight-card">

                <div className="mussoorie-highlight-icon">
                  💦
                </div>

                <h3>
                  Kempty Falls
                </h3>

                <p>
                  Explore the beautiful Kempty Falls surrounded
                  by lush green mountain scenery.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="mussoorie-information">

        <div className="container">

          <div className="mussoorie-section-heading centered">

            <span>03</span>

            <h2>
              Journey Information
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="mussoorie-info-card">

                <span>📍</span>

                <h4>
                  Location
                </h4>

                <p>
                  Uttarakhand, India
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="mussoorie-info-card">

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

              <div className="mussoorie-info-card">

                <span>📅</span>

                <h4>
                  Best Time
                </h4>

                <p>
                  March to June &
                  <br />
                  September to November
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="mussoorie-info-card">

                <span>⛰️</span>

                <h4>
                  Experience
                </h4>

                <p>
                  Mountains & Himalayan Adventure
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INCLUSIONS / EXCLUSIONS ================= */}

      <section className="mussoorie-package">

        <div className="container">

          <div className="row g-4">

            {/* INCLUSIONS */}

            <div className="col-md-6">

              <div className="mussoorie-package-card inclusion">

                <div className="mussoorie-package-icon">
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

              <div className="mussoorie-package-card exclusion">

                <div className="mussoorie-package-icon">
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

      <section className="mussoorie-cta">

        <div className="mussoorie-cta-content">

          <span>
            YOUR MOUNTAIN ESCAPE AWAITS
          </span>

          <h2>
            Ready to discover
            <br />
            Mussoorie?
          </h2>

          <p>
            Leave the busy city behind and experience the
            peaceful beauty of the mountains.
          </p>

          <Link
            to="/booking"
            className="mussoorie-cta-button"
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