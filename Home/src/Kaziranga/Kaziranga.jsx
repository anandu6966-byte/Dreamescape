
import { Link } from "react-router-dom";

function Kaziranga() {
  const photos = [
    "/Images/ka1.webp",
    "/Images/ka2.webp",
    "/Images/Ka3.webp",
    "/Images/ka4.webp",
  ];

  const highlights = [
    {
      icon: "🦏",
      title: "One-Horned Rhinoceros",
      text: "Discover the iconic greater one-horned rhinoceros in its natural habitat."
    },
    {
      icon: "🐅",
      title: "Royal Bengal Tigers",
      text: "Explore the park's forests and grasslands in search of magnificent wildlife."
    },
    {
      icon: "🌿",
      title: "Wild Landscapes",
      text: "Experience beautiful grasslands, wetlands, forests and rich biodiversity."
    }
  ];

  const information = [
    {
      icon: "📍",
      title: "Location",
      value: "Assam, India"
    },
    {
      icon: "🚙",
      title: "Safari",
      value: "Jeep Safari"
    },
    {
      icon: "📅",
      title: "Best Time",
      value: "October to June"
    },
    {
      icon: "🐘",
      title: "Experience",
      value: "Wildlife Safari"
    }
  ];

  const inclusions = [
    "Accommodation",
    "Breakfast & Dinner",
    "Professional Safari Guide",
    "Safari Experience",
    "Bonfire"
  ];

  const exclusions = [
    "5% GST",
    "Travel Insurance",
    "Personal Expenses",
    "Entry Fees"
  ];

  return (
    <main className="destination-page">

      {/* ================= HERO ================= */}

      <section className="destination-hero">

        <video
          className="destination-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/kav.mp4" type="video/mp4" />
        </video>

        <div className="destination-hero-overlay"></div>

        <div className="destination-hero-content">

          <span className="hero-badge">
            WILDLIFE ESCAPE
          </span>

          <h1>Kaziranga</h1>

          <p>
            The Lost World
          </p>

          <div className="hero-line"></div>

        </div>

        <div className="hero-scroll">
          <span>Explore</span>
          <span className="scroll-arrow">↓</span>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="destination-intro">

        <div className="container">

          <div className="intro-heading">

            <span className="small-label">
              DISCOVER KAZIRANGA
            </span>

            <h2>
              Into the Wild
            </h2>

            <p>
              A remarkable journey through one of India's most
              extraordinary wildlife destinations.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="destination-gallery">

        <div className="container">

          <div className="section-heading">

            <span>01</span>

            <h2>
              Explore the Wilderness
            </h2>

            <p>
              Discover the landscapes and wildlife that make Kaziranga unique.
            </p>

          </div>

          <div className="professional-gallery">

            {photos.map((photo, index) => (

              <div
                className={`gallery-item gallery-${index + 1}`}
                key={index}
              >

                <img
                  src={photo}
                  alt={`Kaziranga wildlife ${index + 1}`}
                />

                <div className="gallery-overlay">
                  <span>
                    0{index + 1}
                  </span>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-destination">

        <div className="container">

          <div className="about-card">

            <div className="about-label">
              ABOUT THE DESTINATION
            </div>

            <h2>
              Kaziranga National Park
            </h2>

            <div className="about-divider"></div>

            <p>
              Kaziranga National Park is one of India's most famous
              wildlife destinations, located in Assam and renowned
              for its greater one-horned rhinoceros.
            </p>

            <p>
              Its grasslands, wetlands and forests provide a habitat
              for elephants, wild water buffalo, deer, tigers and
              numerous species of birds.
            </p>

            <p>
              A visit to Kaziranga offers an opportunity to experience
              India's wildlife and natural landscapes through exciting
              safari experiences.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="highlights-section">

        <div className="container">

          <div className="section-heading centered">

            <span>02</span>

            <h2>
              Highlights
            </h2>

            <p>
              Experiences that make your Kaziranga journey memorable.
            </p>

          </div>

          <div className="row g-4">

            {highlights.map((item, index) => (

              <div className="col-md-4" key={index}>

                <div className="professional-card">

                  <div className="card-icon">
                    {item.icon}
                  </div>

                  <span className="card-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="information-section">

        <div className="container">

          <div className="section-heading centered light-heading">

            <span>03</span>

            <h2>
              Travel Information
            </h2>

            <p>
              Everything you need to know before your adventure.
            </p>

          </div>

          <div className="row g-4">

            {information.map((item, index) => (

              <div className="col-lg-3 col-md-6" key={index}>

                <div className="info-card">

                  <div className="info-icon">
                    {item.icon}
                  </div>

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.value}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= INCLUSIONS ================= */}

      <section className="package-section">

        <div className="container">

          <div className="section-heading centered">

            <span>04</span>

            <h2>
              Your Journey Includes
            </h2>

            <p>
              Plan your trip with clarity and confidence.
            </p>

          </div>

          <div className="row g-4">

            {/* INCLUSIONS */}

            <div className="col-md-6">

              <div className="package-card inclusion-card">

                <div className="package-header">

                  <div className="package-icon">
                    ✓
                  </div>

                  <div>
                    <span>
                      INCLUDED
                    </span>

                    <h3>
                      Inclusions
                    </h3>
                  </div>

                </div>

                <ul>

                  {inclusions.map((item, index) => (

                    <li key={index}>
                      <span>✓</span>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </div>


            {/* EXCLUSIONS */}

            <div className="col-md-6">

              <div className="package-card exclusion-card">

                <div className="package-header">

                  <div className="package-icon">
                    ×
                  </div>

                  <div>
                    <span>
                      NOT INCLUDED
                    </span>

                    <h3>
                      Exclusions
                    </h3>
                  </div>

                </div>

                <ul>

                  {exclusions.map((item, index) => (

                    <li key={index}>
                      <span>×</span>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="destination-cta">

        <div className="cta-overlay"></div>

        <div className="container">

          <div className="cta-content">

            <span>
              YOUR NEXT ADVENTURE STARTS HERE
            </span>

            <h2>
              Ready to Explore Kaziranga?
            </h2>

            <p>
              Turn your travel plans into an unforgettable
              wildlife experience.
            </p>

            <Link
              to="/booking"
              className="professional-book-button"
            >
              Book Your Adventure
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Kaziranga;

