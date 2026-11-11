import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();

  const wildlifeDestinations = [
    {
      name: "Jim Corbett",
      image: "/Images/jch1.webp",
      path: "/jim-corbett",
      description:
        "Explore the wild beauty of Jim Corbett National Park and experience thrilling wildlife safaris surrounded by forests, rivers and majestic landscapes.",
    },
    {
      name: "Kaziranga",
      image: "/Images/kz1.webp",
      path: "/kaziranga",
      description:
        "Discover the incredible wildlife of Kaziranga National Park, famous for its one-horned rhinoceros, rich biodiversity and beautiful natural landscapes.",
    },
  ];

  const wildlifeExperiences = [
    {
      icon: "🐅",
      number: "01",
      title: "Incredible Wildlife",
      description:
        "Witness majestic animals in their natural surroundings and experience the thrill of India's incredible wildlife.",
    },
    {
      icon: "🌳",
      number: "02",
      title: "Beautiful Forests",
      description:
        "Explore breathtaking forests, national parks, rivers and landscapes filled with natural beauty.",
    },
    {
      icon: "📸",
      number: "03",
      title: "Unforgettable Memories",
      description:
        "Enjoy exciting safari experiences, discover nature and create memories that last a lifetime.",
    },
  ];

  return (
    <main className="wildlife-page">

      {/* ================= HERO ================= */}

      <section className="wildlife-hero">

        <video
          className="wildlife-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/videoplayback (1).mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="wildlife-overlay"></div>

        <div className="wildlife-hero-content">

          <span className="wildlife-badge">
            INTO THE WILD
          </span>

          <h1>
            Wildlife Tourism
          </h1>

          <div className="wildlife-line"></div>

          <p>
            Discover the Wild Side of Incredible India
          </p>

        </div>

        <div className="wildlife-scroll">

          <span>
            EXPLORE
          </span>

          <span className="wildlife-scroll-arrow">
            ↓
          </span>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="wildlife-intro">

        <div className="container">

          <div className="wildlife-intro-content">

            <span className="wildlife-small-label">
              DISCOVER THE WILD
            </span>

            <h2>
              Where nature
              <br />
              tells its own story.
            </h2>

            <p>
              Explore India's incredible wildlife, beautiful
              forests and unforgettable safari experiences.
              Step into the wilderness and experience nature
              at its most extraordinary.
            </p>

          </div>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section className="wildlife-destinations">

        <div className="container">

          <div className="wildlife-section-heading">

            <div>

              <span>
                01
              </span>

              <h2>
                Explore The Wild
              </h2>

            </div>

            <p>
              Discover some of India's remarkable wildlife
              destinations and experience nature up close.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {wildlifeDestinations.map((destination, index) => (

              <div
                className="col-lg-6"
                key={destination.name}
              >

                <div className="wildlife-destination-card">

                  {/* IMAGE */}

                  <div className="wildlife-card-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <div className="wildlife-image-overlay"></div>

                    <span className="wildlife-number">
                      0{index + 1}
                    </span>

                    <span className="wildlife-category">
                      WILDLIFE DESTINATION
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="wildlife-card-content">

                    <h3>
                      {destination.name}
                    </h3>

                    <div className="wildlife-divider"></div>

                    <p>
                      {destination.description}
                    </p>

                    <button
                      className="wildlife-view-button"
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

      <section className="wildlife-experience">

        <div className="container">

          <div className="wildlife-section-heading centered">

            <span>
              02
            </span>

            <h2>
              Experience The Wild
            </h2>

            <p>
              Discover the moments that make a wildlife
              adventure unforgettable.
            </p>

          </div>


          <div className="row g-4">

            {wildlifeExperiences.map((experience) => (

              <div
                className="col-lg-4 col-md-6"
                key={experience.number}
              >

                <div className="wildlife-experience-card">

                  <div className="wildlife-experience-top">

                    <span className="wildlife-experience-number">
                      {experience.number}
                    </span>

                    <span className="wildlife-experience-icon">
                      {experience.icon}
                    </span>

                  </div>

                  <h3>
                    {experience.title}
                  </h3>

                  <p>
                    {experience.description}
                  </p>

                  <div className="wildlife-experience-arrow">
                    →
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="wildlife-cta">

        <div className="container">

          <div className="wildlife-cta-content">

            <span>
              YOUR WILD JOURNEY STARTS HERE
            </span>

            <h2>
              Ready for a Wild Adventure?
            </h2>

            <p>
              Leave the ordinary behind and discover the
              incredible wildlife of India with
              DREAM ESCAPE TOURS.
            </p>

            <div className="wildlife-cta-line"></div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Content;