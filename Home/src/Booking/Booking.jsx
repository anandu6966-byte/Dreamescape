import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Content() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const [bookingId, setBookingId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [packageId, setPackageId] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("");
  const [idProof, setIdProof] = useState("");
  const [phone, setPhone] = useState("");

  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:3000/bookings";

  useEffect(() => {
    getBookings();
  }, []);

  // GET BOOKINGS
  function getBookings() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.log("Error:", error));
  }

  // SUBMIT BOOKING
  function handleSubmit(e) {
    e.preventDefault();

    const booking = {
      bookingId,
      customerId,
      packageId,
      date,
      travellers,
      idProof,
      phone,
    };

    // CREATE
    if (editId === null) {
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((response) => response.json())
        .then((data) => {
          setBookings([...bookings, data]);
          clearForm();

          // Go to payment page
          navigate("/payment");
        })
        .catch((error) => console.log("Error:", error));
    }

    // UPDATE
    else {
      fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((response) => response.json())
        .then((data) => {
          setBookings(
            bookings.map((item) =>
              item.id === editId ? data : item
            )
          );

          setEditId(null);
          clearForm();
        })
        .catch((error) => console.log("Error:", error));
    }
  }

  // EDIT BOOKING
  function editBooking(booking) {
    setBookingId(booking.bookingId);
    setCustomerId(booking.customerId);
    setPackageId(booking.packageId);
    setDate(booking.date);
    setTravellers(booking.travellers);
    setIdProof(booking.idProof);
    setPhone(booking.phone);

    setEditId(booking.id);

    // Scroll to form
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // DELETE BOOKING
  function deleteBooking(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) {
      return;
    }

    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBookings(
          bookings.filter((booking) => booking.id !== id)
        );
      })
      .catch((error) => console.log("Error:", error));
  }

  // CLEAR FORM
  function clearForm() {
    setBookingId("");
    setCustomerId("");
    setPackageId("");
    setDate("");
    setTravellers("");
    setIdProof("");
    setPhone("");
  }

  // CANCEL EDIT
  function cancelEdit() {
    setEditId(null);
    clearForm();
  }

  return (
    <div className="booking-page">

      {/* PAGE HEADER */}
      <div className="booking-header">
        <div>
          <span className="booking-subtitle">
            DREAM ESCAPE TOURS
          </span>

          <h1>Tour Booking Management</h1>

          <p>
            Create and manage your travel bookings with ease.
          </p>
        </div>

        <div className="booking-icon">
          ✈️
        </div>
      </div>

      {/* BOOKING FORM */}
      <div className="booking-card">

        <div className="card-heading">
          <div>
            <h2>
              {editId === null
                ? "Create New Booking"
                : "Edit Booking"}
            </h2>

            <p>
              {editId === null
                ? "Enter the traveller and tour details below."
                : "Update the booking information below."}
            </p>
          </div>

          <div className="card-number">
            {editId === null ? "01" : "02"}
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* BOOKING ID */}
            <div className="form-group">
              <label>Booking ID</label>

              <input
                type="text"
                placeholder="Enter booking ID"
                value={bookingId}
                onChange={(e) =>
                  setBookingId(e.target.value)
                }
                required
              />
            </div>

            {/* CUSTOMER ID */}
            <div className="form-group">
              <label>Customer ID</label>

              <input
                type="text"
                placeholder="Enter customer ID"
                value={customerId}
                onChange={(e) =>
                  setCustomerId(e.target.value)
                }
                required
              />
            </div>

            {/* PACKAGE ID */}
            <div className="form-group">
              <label>Package ID</label>

              <input
                type="text"
                placeholder="Enter package ID"
                value={packageId}
                onChange={(e) =>
                  setPackageId(e.target.value)
                }
                required
              />
            </div>

            {/* DATE */}
            <div className="form-group">
              <label>Travel Date</label>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                required
              />
            </div>

            {/* TRAVELLERS */}
            <div className="form-group">
              <label>Number of Travellers</label>

              <input
                type="number"
                min="1"
                placeholder="e.g. 2"
                value={travellers}
                onChange={(e) =>
                  setTravellers(e.target.value)
                }
                required
              />
            </div>

            {/* ID PROOF */}
            <div className="form-group">
              <label>ID Proof</label>

              <input
                type="text"
                placeholder="Aadhar / Passport / PAN"
                value={idProof}
                onChange={(e) =>
                  setIdProof(e.target.value)
                }
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                required
              />
            </div>

          </div>

          {/* BUTTONS */}
          <div className="form-actions">

            {editId !== null && (
              <button
                type="button"
                className="cancel-btn"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="submit-btn"
            >
              {editId === null
                ? "Book Tour"
                : "Update Booking"}
            </button>

          </div>
        </form>
      </div>

      {/* BOOKING LIST */}
      <div className="booking-card booking-table-card">

        <div className="table-heading">
          <div>
            <h2>Booking Details</h2>

            <p>
              {bookings.length}{" "}
              {bookings.length === 1
                ? "booking"
                : "bookings"}{" "}
              available
            </p>
          </div>

          <div className="booking-count">
            {bookings.length}
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="empty-bookings">
            <div className="empty-icon">📋</div>

            <h3>No Bookings Yet</h3>

            <p>
              Create your first tour booking using the
              form above.
            </p>
          </div>
        ) : (
          <div className="table-wrapper">

            <table className="booking-table">

              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer ID</th>
                  <th>Package ID</th>
                  <th>Travel Date</th>
                  <th>Travellers</th>
                  <th>ID Proof</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>

                    <td>
                      <span className="booking-id">
                        {booking.bookingId}
                      </span>
                    </td>

                    <td>{booking.customerId}</td>

                    <td>
                      <span className="package-badge">
                        {booking.packageId}
                      </span>
                    </td>

                    <td>{booking.date}</td>

                    <td>
                      <span className="traveller-badge">
                        👤 {booking.travellers}
                      </span>
                    </td>

                    <td>{booking.idProof}</td>

                    <td>{booking.phone}</td>

                    <td>
                      <div className="action-buttons">

                        <button
                          type="button"
                          className="edit-btn"
                          onClick={() =>
                            editBooking(booking)
                          }
                        >
                          ✏️ Edit
                        </button>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() =>
                            deleteBooking(booking.id)
                          }
                        >
                          🗑 Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>

    </div>
  );
}

export default Content;