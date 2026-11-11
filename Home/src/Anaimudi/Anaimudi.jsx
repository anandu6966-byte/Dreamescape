import { Link } from "react-router-dom";

function Content() {
  const photos = [
    "/Images/ana1.webp",
    "/Images/ana2.webp",
    "/Images/ana3.webp",
    "/Images/ana4.webp",
  ];

  const highlights = [
    {
      icon: "🌿",
      title: "Misty Forest Trails",
      text: "Journey through misty forests and lush Western Ghats landscapes surrounded by beautiful natural scenery.",
    },
    {
      icon: "🏔️",
      title: "Majestic Mountain Views",
      text: "Experience breathtaking mountain landscapes, peaceful trails and the natural beauty of Anaimudi.",
    },
    {
      icon: "🌄",
      title: "Mountain Adventure",
      text: "Enjoy an unforgettable adventure through the scenic mountains and valleys of Kerala.",
    },
  ];

  const information = [
    {
      icon: "📍",
      title: "Location",
      value: "Kerala, India",
    },
    {
      icon: "🥾",
      title: "Difficulty",
      value: "Easy to Moderate",
    },
    {
      icon: "📅",
      title: "Best Time",
      value: "November to February",
    },
    {
      icon: "🌿",
      title: "Experience",
      value: "Forest & Tea Plantation Adventure",
    },
  ];

  const inclusions = [
    "Accommodation",
    "Breakfast & Dinner",
    "Professional Trek Guide",
    "Camping Equipment",
    "Bonfire",
  ];

  const exclusions = [
    "5% GST",
    "Travel Insurance",
    "Personal Expenses",
    "Entry Fees",
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
          <source src="/anai.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>

        <div className="destination-hero-overlay"></div>

        <div className="destination-hero-content">

          <span className="hero-badge">
            WESTERN GHATS ADVENTURE
          </span>

          <h1>
            Anaimudi
          </h1>

          <p>
            Adventure Through the Oldest Peaks in the World
          </p>

          <div className="hero-line"></div>

        </div>

        <div className="hero-scroll">

          <span>
            Explore
          </span>

          <span className="scroll-arrow">
            ↓
          </span>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="destination-intro">

        <div className="container">

          <div className="intro-heading">

            <span className="small-label">
              DISCOVER ANAIMUDI
            </span>

            <h2>
              Into the Western Ghats
            </h2>

            <p>
              Journey through misty forests, rolling grasslands
              and breathtaking mountain trails while experiencing
              the raw beauty of Kerala's Western Ghats.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PHOTO GALLERY ================= */}

      <section className="destination-gallery">

        <div className="container">

          <div className="section-heading">

            <span>
              01
            </span>

            <h2>
              Explore Anaimudi
            </h2>

            <p>
              Discover the beautiful landscapes and peaceful
              surroundings of this mountain destination.
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
                  alt={`Anaimudi landscape ${index + 1}`}
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
              Anaimudi
            </h2>

            <div className="about-divider"></div>

            <p>
              Anaimudi offers an incredible journey through the
              misty forests, rolling grasslands and breathtaking
              mountain trails of Kerala's Western Ghats.
            </p>

            <p>
              Surrounded by lush greenery and spectacular
              landscapes, the region provides an ideal setting
              for nature lovers and adventure enthusiasts looking
              to escape into the mountains.
            </p>

            <p>
              From peaceful forest trails to impressive mountain
              views, an Anaimudi adventure gives travellers an
              opportunity to experience the natural beauty of
              Kerala in a memorable way.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section className="highlights-section">

        <div className="container">

          <div className="section-heading centered">

            <span>
              02
            </span>

            <h2>
              Anaimudi Highlights
            </h2>

            <p>
              Discover the experiences that make your mountain
              adventure memorable.
            </p>

          </div>


          <div className="row g-4">

            {highlights.map((item, index) => (

              <div
                className="col-md-4"
                key={index}
              >

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


      {/* ================= TREK INFORMATION ================= */}

      <section className="information-section">

        <div className="container">

          <div className="section-heading centered light-heading">

            <span>
              03
            </span>

            <h2>
              Trek Information
            </h2>

            <p>
              Important details to help you plan your Anaimudi
              adventure.
            </p>

          </div>


          <div className="row g-4">

            {information.map((item, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

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


      {/* ================= INCLUSIONS / EXCLUSIONS ================= */}

      <section className="package-section">

        <div className="container">

          <div className="section-heading centered">

            <span>
              04
            </span>

            <h2>
              Your Trek Package
            </h2>

            <p>
              Know what is included and excluded from your
              Anaimudi adventure.
            </p>

          </div>


          <div className="row g-4">

            {/* ================= INCLUSIONS ================= */}

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

                      <span>
                        ✓
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>


            {/* ================= EXCLUSIONS ================= */}

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

                      <span>
                        ×
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOOK NOW ================= */}

      <section className="destination-cta">

        <div className="cta-content">

          <span>
            YOUR NEXT ADVENTURE STARTS HERE
          </span>

          <h2>
            Ready to Explore Anaimudi?
          </h2>

          <p>
            Turn your travel plans into an unforgettable
            mountain adventure through Kerala.
          </p>

          <Link
            to="/booking"
            className="professional-book-button"
          >
            Book Your Adventure

            <span>
              →
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}

export default Content;