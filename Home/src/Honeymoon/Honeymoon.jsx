
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();

  const honeymoonDestinations = [
    {
      name: "Kashmir",
      image: "/Images/Kashmir.jpg",
      path: "/kashmir",
      description:
        "Escape to the breathtaking beauty of Kashmir, where snow-capped mountains, peaceful lakes, lush valleys, and romantic landscapes create the perfect honeymoon experience.",
      tag: "Mountain Romance",
    },
    {
      name: "Goa",
      image: "/Images/goh.webp",
      path: "/goa",
      description:
        "Escape to Goa for a romantic honeymoon filled with golden beaches, breathtaking sunsets, peaceful coastal views, and unforgettable moments together.",
      tag: "Beach Romance",
    },
  ];

  return (
    <main className="honeymoon-page">

      {/* ================= HERO ================= */}

      <section className="honeymoon-hero">

        <video
          className="honeymoon-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videoplayback (14).mp4" type="video/mp4" />
        </video>

        <div className="honeymoon-overlay"></div>

        <div className="honeymoon-hero-content">

          <span className="hero-small-text">
            DREAM ESCAPE TOURS
          </span>

          <h1>
            Paradise of <span>Love</span>
          </h1>

          <p>
            Discover beautiful destinations and create unforgettable
            memories with the one you love.
          </p>

          <button
            className="hero-book-btn"
            onClick={() => navigate("/booking")}
          >
            Plan Your Honeymoon
            <span> →</span>
          </button>

        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="honeymoon-intro">

        <div className="container text-center">

          <span className="section-label">
            ROMANTIC ESCAPES
          </span>

          <h2>
            Two Hearts, One Beautiful Journey
          </h2>

          <div className="title-line"></div>

          <p>
            Your love story deserves a beautiful destination. Discover
            romantic places where breathtaking landscapes, peaceful
            moments, and unforgettable experiences come together.
          </p>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section className="honeymoon-destinations">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="section-label">
                DESTINATIONS
              </span>

              <h2>
                Romantic Places to Explore
              </h2>
            </div>

            <p>
              Choose a destination and begin your unforgettable journey.
            </p>

          </div>


          <div className="row g-4">

            {honeymoonDestinations.map((destination) => (

              <div
                className="col-lg-6"
                key={destination.name}
              >

                <div className="honeymoon-card">

                  <div className="honeymoon-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <div className="image-overlay"></div>

                    <span className="destination-tag">
                      {destination.tag}
                    </span>

                    <div className="destination-name">
                      <h3>{destination.name}</h3>
                    </div>

                  </div>


                  <div className="honeymoon-card-body">

                    <p>
                      {destination.description}
                    </p>

                    <button
                      className="destination-btn"
                      onClick={() => navigate(destination.path)}
                    >
                      Explore {destination.name}
                      <span> →</span>
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="love-experience">

        <div className="container">

          <div className="text-center experience-heading">

            <span className="section-label">
              YOUR JOURNEY
            </span>

            <h2>
              Experience the Love
            </h2>

            <p>
              More than a holiday — create memories that stay with you
              forever.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="love-box">

                <div className="love-icon">
                  💕
                </div>

                <span className="love-number">
                  01
                </span>

                <h4>
                  Where Love Meets Paradise
                </h4>

                <p>
                  Discover breathtaking destinations designed for
                  peaceful and romantic moments together.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="love-box">

                <div className="love-icon">
                  💑
                </div>

                <span className="love-number">
                  02
                </span>

                <h4>
                  Love. Travel. Forever.
                </h4>

                <p>
                  Turn your honeymoon into a beautiful journey filled
                  with experiences you will always remember.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="love-box">

                <div className="love-icon">
                  🌹
                </div>

                <span className="love-number">
                  03
                </span>

                <h4>
                  Unforgettable Memories
                </h4>

                <p>
                  From sunsets to scenic landscapes, make every moment
                  of your journey special.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="honeymoon-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <span>
            YOUR PERFECT JOURNEY AWAITS
          </span>

          <h2>
            Start Your Love Story Somewhere Beautiful
          </h2>

          <p>
            Let DREAM ESCAPE TOURS help you create memories that last
            a lifetime.
          </p>

          <button
            onClick={() => navigate("/booking")}
            className="cta-button"
          >
            Book Your Journey
            <span> →</span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default Content;

