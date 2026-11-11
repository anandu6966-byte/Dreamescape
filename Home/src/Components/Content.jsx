import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Content() {
  const navigate = useNavigate();

  /* ================= REVIEW STATES ================= */

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [reviews, setReviews] = useState([
    {
      name: "Rahul",
      rating: 5,
      review: "Amazing travel experience!",
    },
    {
      name: "Anjali",
      rating: 4,
      review: "Beautiful destinations and great service.",
    },
  ]);

  /* ================= SUBMIT REVIEW ================= */

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!name || !review || rating === 0) {
      alert("Please enter your name, review and rating.");
      return;
    }

    const newReview = {
      name: name,
      rating: rating,
      review: review,
    };

    setReviews([...reviews, newReview]);

    setName("");
    setReview("");
    setRating(0);
  };

  /* ================= DESTINATIONS ================= */

  const destinations = [
    {
      name: "Kedarkantha",
      image: "/Images/Kedarkantha.jpg",
      path: "/kedarkantha",
      description: "Adventure Above the Ordinary",
    },
    {
      name: "Tawang",
      image: "/Images/Tawang.jpg",
      path: "/tawang",
      description: "Where Heaven Meets Himalayas",
    },
    {
      name: "Mussoorie",
      image: "/Images/Mussorie.jpg",
      path: "/mussoorie",
      description: "The Queen of the Hills",
    },
    {
      name: "Leh Laddakh",
      image: "/Images/Leh.ledakh.jpg",
      path: "/leh-ladakh",
      description: "Adventure Touches the Sky",
    },
    {
      name: "Kashmir",
      image: "/Images/Kashmir.jpg",
      path: "/kashmir",
      description: "Paradise on Earth",
    },
  ];

  /* ================= EXPERIENCES ================= */

  const experiences = [
    {
      name: "Wildlife Tourism",
      image: "/Images/jch1.webp",
      path: "/wildlife",
      description:
        "Explore India's national parks and experience the beauty of wildlife.",
      icon: "🐅",
    },
    {
      name: "Honeymoon Destinations",
      image: "/Images/ka1.webp",
      path: "/honeymoon",
      description:
        "Discover romantic destinations perfect for unforgettable moments.",
      icon: "❤️",
    },
    {
      name: "Trekking Destinations",
      image: "/Images/dest 6.webp",
      path: "/trekking",
      description:
        "Experience thrilling mountain trails and breathtaking landscapes.",
      icon: "🥾",
    },
  ];

  return (
    <main className="home-page">

      {/* =====================================================
                         HERO SECTION
      ===================================================== */}

      <section className="home-hero">

        <video
          className="home-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videoplayback big.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">

          <span className="home-hero-badge">
            DREAM • EXPLORE • DISCOVER
          </span>

          <h1>
            Explore the
            <br />
            Beauty of India
          </h1>

          <div className="home-hero-line"></div>

          <p>
            Discover unforgettable destinations with
            <br />
            DREAM ESCAPE TOURS
          </p>

          <button
            className="home-hero-button"
            onClick={() => navigate("/booking")}
          >
            Start Your Journey
            <span>→</span>
          </button>

        </div>

        <div className="home-hero-scroll">

          <span>
            SCROLL TO EXPLORE
          </span>

          <strong>
            ↓
          </strong>

        </div>

      </section>


      {/* =====================================================
                    DESTINATION INTRODUCTION
      ===================================================== */}

      <section className="home-intro">

        <div className="container">

          <div className="home-intro-content">

            <span className="home-small-label">
              DISCOVER INDIA
            </span>

            <h2>
              One country.
              <br />
              Endless journeys.
            </h2>

            <p>
              From snow-covered Himalayan peaks to peaceful
              valleys, vibrant cities and breathtaking landscapes,
              India offers experiences for every kind of traveller.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
                    POPULAR DESTINATIONS
      ===================================================== */}

      <section className="home-destinations">

        <div className="container">

          <div className="home-section-heading">

            <div>

              <span>
                01
              </span>

              <h2>
                India's Best Destinations
              </h2>

            </div>

            <p>
              Choose your next unforgettable adventure and
              discover places that deserve to be remembered.
            </p>

          </div>


          <div className="row g-4">

            {destinations.map((destination, index) => (

              <div
                className="col-lg col-md-4 col-sm-6"
                key={destination.name}
              >

                <div
                  className="home-destination-card"
                  onClick={() =>
                    navigate(destination.path)
                  }
                >

                  <div className="home-destination-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <div className="home-destination-overlay"></div>

                    <span className="home-destination-number">
                      0{index + 1}
                    </span>

                  </div>


                  <div className="home-destination-content">

                    <h3>
                      {destination.name}
                    </h3>

                    <p>
                      {destination.description}
                    </p>

                    <span className="home-explore-link">
                      Explore
                      <strong>→</strong>
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
                       EXPERIENCE SECTION
      ===================================================== */}

      <section className="home-experiences">

        <div className="container">

          <div className="home-section-heading centered">

            <span>
              02
            </span>

            <h2>
              Travel Your Way
            </h2>

            <p>
              Discover experiences designed to make your
              journey unforgettable.
            </p>

          </div>


          <div className="row g-4">

            {experiences.map((experience, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={experience.name}
              >

                <div className="home-experience-card">

                  <div className="home-experience-image">

                    <img
                      src={experience.image}
                      alt={experience.name}
                    />

                    <div className="home-experience-overlay"></div>

                    <span className="home-experience-number">
                      0{index + 1}
                    </span>

                    <span className="home-experience-icon">
                      {experience.icon}
                    </span>

                  </div>


                  <div className="home-experience-content">

                    <h3>
                      {experience.name}
                    </h3>

                    <p>
                      {experience.description}
                    </p>

                    <button
                      onClick={() =>
                        navigate(experience.path)
                      }
                      className="home-experience-button"
                    >
                      Explore Now
                      <span>→</span>
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
                         REVIEWS
      ===================================================== */}

      <section className="home-reviews">

        <div className="container">

          <div className="home-section-heading centered">

            <span>
              03
            </span>

            <h2>
              Trusted By Travellers
            </h2>

            <p>
              Every journey is made special by the people
              who experience it with us.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-6">

              <div className="home-rating-card">

                <span className="home-rating-icon">
                  ⭐
                </span>

                <h3>
                  4.9 / 5
                </h3>

                <div className="home-stars">
                  ★★★★★
                </div>

                <h5>
                  Exceptional Experiences
                </h5>

                <p>
                  Rated by more than 10,000 customers.
                </p>

              </div>

            </div>


            <div className="col-md-6">

              <div className="home-rating-card">

                <span className="home-rating-icon">
                  ❤️
                </span>

                <h3>
                  10,000+
                </h3>

                <div className="home-stars">
                  ★★★★★
                </div>

                <h5>
                  Happy Travellers
                </h5>

                <p>
                  Thousands of travellers have explored
                  India with DREAM ESCAPE TOURS.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
                       REVIEW SIDE PANEL
      ===================================================== */}

      <div className="home-review-container">

        <div className="home-review-tab">
          ⭐ Review
        </div>


        <div className="home-review-panel">

          <h3>
            ⭐ Customer Review
          </h3>

          <p className="home-review-subtitle">
            Share your travel experience
          </p>


          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="form-control mb-3"
          />


          {/* RATING */}

          <div className="home-star-rating">

            <p>
              Your Rating
            </p>

            {[1, 2, 3, 4, 5].map((star) => (

              <span
                key={star}
                onClick={() =>
                  setRating(star)
                }
                className={
                  star <= rating
                    ? "home-star active"
                    : "home-star"
                }
              >
                ★
              </span>

            ))}

          </div>


          <textarea
            placeholder="Write your review..."
            value={review}
            onChange={(e) =>
              setReview(e.target.value)
            }
            className="form-control mb-3"
            rows="4"
          ></textarea>


          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleReviewSubmit}
          >
            Submit Review
          </button>


          <hr />


          <h5>
            Recent Reviews
          </h5>


          <div className="home-review-list">

            {reviews.map((item, index) => (

              <div
                className="home-review-item"
                key={index}
              >

                <strong>
                  {item.name}
                </strong>

                <div>

                  {[1, 2, 3, 4, 5].map((star) => (

                    <span
                      key={star}
                      className={
                        star <= item.rating
                          ? "home-small-star active"
                          : "home-small-star"
                      }
                    >
                      ★
                    </span>

                  ))}

                </div>

                <p>
                  {item.review}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
                     INCREDIBLE INDIA
      ===================================================== */}

      <section className="home-india">

        <img
          src="/Images/taj.webp"
          alt="Incredible India"
          className="home-india-background"
        />

        <div className="home-india-overlay"></div>


        <div className="home-india-content">

          <span>
            DISCOVER THE LAND OF DIVERSITY
          </span>

          <h2>
            Incredible India
          </h2>

          <div className="home-india-line"></div>

          <p>
            Experience the incredible beauty of India,
            a land of rich culture, fascinating history,
            breathtaking landscapes and unforgettable
            experiences.
          </p>

          <p>
            From the majestic Himalayas to peaceful
            backwaters, vibrant cities and golden beaches,
            India has something extraordinary for every
            traveller.
          </p>

          <button
            className="home-india-button"
            onClick={() => navigate("/about")}
          >
            Discover More
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================================
                       FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">

        <div className="home-final-content">

          <span>
            YOUR JOURNEY STARTS HERE
          </span>

          <h2>
            Where will you
            <br />
            go next?
          </h2>

          <p>
            Pack your bags, follow your curiosity and
            discover the extraordinary.
          </p>

          <button
            className="home-final-button"
            onClick={() => navigate("/booking")}
          >
            Plan Your Adventure
            <span>→</span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default Content;