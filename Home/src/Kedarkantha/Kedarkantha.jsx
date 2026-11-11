import { Link } from "react-router-dom";

function Content() {
  const photos = [
    "/Images/desti1.webp",
    "/Images/desti2.webp",
    "/Images/dest4.webp",
    "/Images/dest 6.webp",
  ];

  const highlights = [
    {
      icon: "🏔️",
      title: "Beautiful Himalayan Views",
      text: "Enjoy spectacular views of snow-covered Himalayan peaks throughout the trek.",
    },
    {
      icon: "❄️",
      title: "Snow Trekking",
      text: "Experience the magical beauty of snow-covered trails and peaceful pine forests.",
    },
    {
      icon: "🌄",
      title: "Summit Sunrise",
      text: "Witness an unforgettable sunrise from the Kedarkantha summit.",
    },
  ];

  const information = [
    {
      icon: "📍",
      title: "Location",
      value: "Uttarakhand, India",
    },
    {
      icon: "🥾",
      title: "Difficulty",
      value: "Easy to Moderate",
    },
    {
      icon: "📅",
      title: "Best Time",
      value: "December to April",
    },
    {
      icon: "⛰️",
      title: "Experience",
      value: "Snow & Himalayan Adventure",
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
          <source
            src="/videoplayback.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="destination-hero-overlay"></div>

        <div className="destination-hero-content">

          <span className="hero-badge">
            HIMALAYAN TREK
          </span>

          <h1>
            Kedarkantha
          </h1>

          <p>
            Adventure Above the Ordinary
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
              DISCOVER KEDARKANTHA
            </span>

            <h2>
              Into the Himalayas
            </h2>

            <p>
              Discover snow-covered trails, peaceful forests,
              breathtaking mountain views and an unforgettable
              Himalayan trekking experience.
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
              Explore the Trek
            </h2>

            <p>
              Take a glimpse at the landscapes waiting for you
              on the Kedarkantha trail.
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
                  alt={`Kedarkantha trek ${index + 1}`}
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
              Kedarkantha Trek
            </h2>

            <div className="about-divider"></div>

            <p>
              Kedarkantha is one of the most popular winter
              trekking destinations in India. Located in the
              beautiful state of Uttarakhand, the trek takes
              you through dense pine forests, peaceful meadows
              and snow-covered Himalayan landscapes.
            </p>

            <p>
              The Kedarkantha trek is famous for its breathtaking
              mountain views and beautiful summit. During winter,
              the entire trail transforms into a spectacular snowy
              landscape, making it a favourite destination for
              adventure lovers and nature enthusiasts.
            </p>

            <p>
              One of the highlights of the trek is reaching the
              Kedarkantha summit and witnessing the magnificent
              Himalayan sunrise. The panoramic views from the
              summit make the journey truly unforgettable.
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
              Trek Highlights
            </h2>

            <p>
              Experience the most memorable moments of the
              Kedarkantha adventure.
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
              Important details to help you plan your Kedarkantha
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
              Kedarkantha trekking package.
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
            Ready for Kedarkantha?
          </h2>

          <p>
            Turn your trekking plans into an unforgettable
            Himalayan adventure.
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