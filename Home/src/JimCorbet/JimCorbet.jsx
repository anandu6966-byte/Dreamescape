
import { Link } from "react-router-dom";

function JimCorbett() {
  const photos = [
    "/Images/jc 5.webp",
    "/Images/jc3.webp",
    "/Images/jc4.webp",
    "/Images/jc6.webp",
  ];

  return (
    <main className="corbett-page">

      {/* ================= HERO ================= */}

      <section className="corbett-hero">

        <video
          className="corbett-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/jcv.mp4" type="video/mp4" />
        </video>

        <div className="corbett-hero-overlay"></div>

        <div className="corbett-hero-content">

          <span className="corbett-tag">
            WILDLIFE • UTTARAKHAND
          </span>

          <h1>Jim Corbett</h1>

          <p>
            Where the wild meets the wilderness
          </p>

          <Link
            to="/booking"
            className="corbett-hero-button"
          >
            Plan Your Safari
          </Link>

        </div>

        <div className="corbett-scroll">
          <span>Explore</span>
          <div></div>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="corbett-intro">

        <div className="corbett-container">

          <div className="corbett-intro-grid">

            <div>

              <span className="corbett-small-title">
                DISCOVER THE WILD
              </span>

              <h2>
                An unforgettable
                <span> wildlife escape</span>
              </h2>

            </div>

            <div>

              <p>
                Jim Corbett National Park is one of India's most
                celebrated wildlife destinations, offering a unique
                opportunity to experience forests, rivers, grasslands
                and diverse wildlife in their natural surroundings.
              </p>

              <p>
                From exciting jeep safaris to peaceful birdwatching,
                Corbett offers memorable experiences for nature lovers,
                photographers and adventure seekers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="corbett-gallery">

        <div className="corbett-container">

          <div className="corbett-section-heading">

            <span>VISUAL JOURNEY</span>

            <h2>
              Into the Wild
            </h2>

            <p>
              Experience the landscapes and wildlife of Jim Corbett.
            </p>

          </div>


          <div className="corbett-photo-grid">

            {photos.map((photo, index) => (

              <div
                className={`corbett-photo photo-${index + 1}`}
                key={index}
              >

                <img
                  src={photo}
                  alt={`Jim Corbett wildlife ${index + 1}`}
                />

                <div className="photo-overlay">
                  <span>
                    {index === 0 && "Wildlife"}
                    {index === 1 && "Wilderness"}
                    {index === 2 && "Nature"}
                    {index === 3 && "Adventure"}
                  </span>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="corbett-highlights">

        <div className="corbett-container">

          <div className="corbett-section-heading light">

            <span>EXPERIENCES</span>

            <h2>
              What awaits you
            </h2>

          </div>


          <div className="corbett-feature-grid">

            <div className="corbett-feature-card">

              <div className="feature-icon">
                🐅
              </div>

              <h3>
                Wildlife Safari
              </h3>

              <p>
                Explore the wilderness on an exciting safari and
                experience the incredible biodiversity of Corbett.
              </p>

            </div>


            <div className="corbett-feature-card">

              <div className="feature-icon">
                🚙
              </div>

              <h3>
                Jeep Adventure
              </h3>

              <p>
                Travel through forest trails and scenic landscapes
                while discovering the beauty of the national park.
              </p>

            </div>


            <div className="corbett-feature-card">

              <div className="feature-icon">
                🦜
              </div>

              <h3>
                Birdwatching
              </h3>

              <p>
                Discover a remarkable variety of birds while exploring
                the forests, rivers and grasslands.
              </p>

            </div>


            <div className="corbett-feature-card">

              <div className="feature-icon">
                📸
              </div>

              <h3>
                Photography
              </h3>

              <p>
                Capture dramatic landscapes, wildlife and unforgettable
                moments throughout your journey.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TRIP INFORMATION ================= */}

      <section className="corbett-info">

        <div className="corbett-container">

          <div className="corbett-section-heading">

            <span>PLAN YOUR JOURNEY</span>

            <h2>
              Trip Information
            </h2>

          </div>


          <div className="corbett-info-grid">

            <div className="corbett-info-card">

              <span>📍</span>

              <div>
                <small>LOCATION</small>
                <h4>Uttarakhand, India</h4>
              </div>

            </div>


            <div className="corbett-info-card">

              <span>🚙</span>

              <div>
                <small>EXPERIENCE</small>
                <h4>Wildlife Safari</h4>
              </div>

            </div>


            <div className="corbett-info-card">

              <span>📅</span>

              <div>
                <small>BEST TIME</small>
                <h4>October – June</h4>
              </div>

            </div>


            <div className="corbett-info-card">

              <span>🌿</span>

              <div>
                <small>IDEAL FOR</small>
                <h4>Nature & Wildlife</h4>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INCLUDED ================= */}

      <section className="corbett-package">

        <div className="corbett-container">

          <div className="corbett-package-grid">

            {/* INCLUDED */}

            <div className="package-box">

              <span className="package-label included">
                INCLUDED
              </span>

              <h2>
                Your experience includes
              </h2>

              <ul>
                <li>✓ Comfortable accommodation</li>
                <li>✓ Breakfast & dinner</li>
                <li>✓ Wildlife safari experience</li>
                <li>✓ Professional tour assistance</li>
                <li>✓ Local sightseeing</li>
              </ul>

            </div>


            {/* NOT INCLUDED */}

            <div className="package-box exclusion">

              <span className="package-label excluded">
                NOT INCLUDED
              </span>

              <h2>
                Additional expenses
              </h2>

              <ul>
                <li>× Travel insurance</li>
                <li>× Personal expenses</li>
                <li>× Additional entry fees</li>
                <li>× Optional activities</li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="corbett-cta">

        <div className="corbett-cta-overlay"></div>

        <div className="corbett-cta-content">

          <span>
            YOUR WILDLIFE ADVENTURE STARTS HERE
          </span>

          <h2>
            Ready to explore Jim Corbett?
          </h2>

          <p>
            Create unforgettable memories in the heart of
            India's wilderness.
          </p>

          <Link
            to="/booking"
            className="corbett-cta-button"
          >
            BOOK YOUR TOUR
          </Link>

        </div>

      </section>

    </main>
  );
}

export default JimCorbett;

