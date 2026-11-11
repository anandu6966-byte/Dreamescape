import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();

  const wildlifeDestinations = [
    {
      name: "Kedarkantha",
      image: "/Images/Kedarkantha.jpg",
      path: "/kedarkantha",
      description:
        "Kedarkantha is one of Uttarakhand's popular Himalayan summit treks. Starting from Sankri in Uttarkashi, the trek reaches around 12,500 ft and offers spectacular snow-covered landscapes, forests and mountain views.",
    },
    {
      name: "Anaimudi",
      image: "/Images/Anh.webp",
      path: "/anaimudi",
      description:
        "Anamudi, meaning 'Elephant's Head', is the highest peak in South India at about 2,695 metres. Located near Munnar, Kerala, it is surrounded by spectacular grasslands, shola forests and Western Ghats landscapes.",
    },
  ];

  const experiences = [
    {
      icon: "🥾",
      number: "01",
      title: "Adventure Begins",
      description:
        "Adventure begins where the road ends. Find your path, feel the thrill and embrace the journey.",
    },
    {
      icon: "⛰️",
      number: "02",
      title: "Beyond The Ordinary",
      description:
        "Leave the ordinary behind, breathe deep, climb high and explore landscapes beyond your limits.",
    },
    {
      icon: "🌄",
      number: "03",
      title: "Unforgettable Moments",
      description:
        "Every trail creates a memory. Discover breathtaking views and moments worth remembering.",
    },
  ];

  return (
    <main className="adventure-page">

      {/* ================= HERO ================= */}

      <section className="adventure-hero">

        <video
          className="adventure-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/videoplayback (6).mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="adventure-hero-overlay"></div>

        <div className="adventure-hero-content">

          <span className="adventure-badge">
            DREAM • EXPLORE • CONQUER
          </span>

          <h1>
            Adventure
          </h1>

          <div className="adventure-line"></div>

          <p>
            A journey through nature, filled with adventure,
            challenge and breathtaking views.
          </p>

        </div>

        <div className="adventure-scroll">

          <span>
            EXPLORE
          </span>

          <span className="adventure-scroll-arrow">
            ↓
          </span>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="adventure-intro">

        <div className="container">

          <div className="adventure-intro-content">

            <span className="adventure-small-label">
              FIND YOUR ADVENTURE
            </span>

            <h2>
              Chase the peaks,
              <br />
              conquer the trails.
            </h2>

            <p>
              Every trail tells a story and every step creates a
              memory. Explore India's incredible mountain
              landscapes and discover the wild within.
            </p>

          </div>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section className="adventure-destinations">

        <div className="container">

          <div className="adventure-section-heading">

            <div>

              <span>
                01
              </span>

              <h2>
                Choose Your Adventure
              </h2>

            </div>

            <p>
              Discover remarkable mountain destinations
              waiting to be explored.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {wildlifeDestinations.map((destination, index) => (

              <div
                className="col-lg-6"
                key={destination.name}
              >

                <div className="adventure-destination-card">

                  {/* IMAGE */}

                  <div className="adventure-card-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <div className="adventure-image-overlay"></div>

                    <span className="destination-number">
                      0{index + 1}
                    </span>

                    <span className="destination-category">
                      MOUNTAIN ADVENTURE
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="adventure-card-content">

                    <h3>
                      {destination.name}
                    </h3>

                    <div className="destination-divider"></div>

                    <p>
                      {destination.description}
                    </p>

                    <button
                      className="adventure-view-button"
                      onClick={() =>
                        navigate(destination.path)
                      }
                    >
                      <span>
                        Explore Destination
                      </span>

                      <strong>
                        →
                      </strong>

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="adventure-experience">

        <div className="container">

          <div className="adventure-section-heading centered light">

            <span>
              02
            </span>

            <h2>
              The Adventure Awaits
            </h2>

            <p>
              Leave the ordinary behind and step into something
              unforgettable.
            </p>

          </div>


          <div className="row g-4">

            {experiences.map((experience) => (

              <div
                className="col-lg-4 col-md-6"
                key={experience.number}
              >

                <div className="adventure-experience-card">

                  <div className="experience-top">

                    <span className="experience-number">
                      {experience.number}
                    </span>

                    <span className="experience-icon">
                      {experience.icon}
                    </span>

                  </div>

                  <h3>
                    {experience.title}
                  </h3>

                  <p>
                    {experience.description}
                  </p>

                  <div className="experience-arrow">
                    →
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= QUOTE SECTION ================= */}

      <section className="adventure-quote">

        <div className="container">

          <div className="adventure-quote-content">

            <span>
              YOUR NEXT STORY STARTS HERE
            </span>

            <h2>
              Don't just dream about
              adventure. Live it.
            </h2>

            <p>
              Step outside your comfort zone, discover new
              landscapes and create memories that last a lifetime.
            </p>

            <div className="quote-line"></div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Content;