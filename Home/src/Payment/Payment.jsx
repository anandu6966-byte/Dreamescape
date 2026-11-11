import { useEffect, useState } from "react";
import axios from "axios";


function Payment() {
  const [payments, setPayments] = useState([]);

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:3001/payments";

  // READ
  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DOWNLOAD PAYMENT RECEIPT
  const downloadReceipt = (payment) => {
    const receipt = `
================================
        DREAMSCAPE TOURS
          PAYMENT RECEIPT
================================

Payment ID     : ${payment.id}
Amount Paid    : ₹${payment.amount}
Payment Method : ${payment.method}
Payment Status : PAID

================================
       THANK YOU FOR BOOKING
          WITH US!
================================
`;

    const blob = new Blob([receipt], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `Payment_Receipt_${payment.id}.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  // CREATE / UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount === "" || method === "") {
      alert("Please enter all payment details");
      return;
    }

    const paymentData = {
      amount: Number(amount),
      method: method,
    };

    // UPDATE
    if (editId !== null) {
      axios
        .put(`${API_URL}/${editId}`, paymentData)
        .then((response) => {
          setPayments(
            payments.map((payment) =>
              payment.id === editId ? response.data : payment
            )
          );

          setEditId(null);
          setAmount("");
          setMethod("");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // CREATE / CONFIRM PAYMENT
    else {
      axios
        .post(API_URL, paymentData)
        .then((response) => {
          setPayments([...payments, response.data]);

          downloadReceipt(response.data);

          setAmount("");
          setMethod("");

          alert("Payment successful! Receipt downloaded.");
        })
        .catch((error) => {
          console.log(error);
          alert("Payment failed!");
        });
    }
  };

  // EDIT
  const handleEdit = (payment) => {
    setAmount(payment.amount);
    setMethod(payment.method);
    setEditId(payment.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this payment?"
    );

    if (!confirmDelete) {
      return;
    }

    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setPayments(
          payments.filter((payment) => payment.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setEditId(null);
    setAmount("");
    setMethod("");
  };

  return (
    <div className="payment-page">

      {/* ================= HERO SECTION ================= */}

      <section className="payment-hero">

        <img
          src="/Images/Payment.webp"
          alt="Payment"
          className="payment-hero-image"
        />

        <div className="payment-hero-overlay"></div>

        <div className="payment-hero-content">

          <span className="payment-eyebrow">
            DREAM ESCAPE TOURS
          </span>

          <h1>
            Secure & Easy
            <span> Payments</span>
          </h1>

          <p>
            Complete your booking securely and get your
            payment receipt instantly.
          </p>

          <div className="payment-hero-icon">
            💳
          </div>

        </div>

        {/* ================= PAYMENT FORM ================= */}

        <div className="payment-form-container">

          <form
            onSubmit={handleSubmit}
            className="professional-payment-form"
          >

            <div className="payment-form-header">

              <div className="payment-card-icon">
                💳
              </div>

              <div>
                <span className="payment-small-title">
                  {editId !== null
                    ? "UPDATE PAYMENT"
                    : "SECURE PAYMENT"}
                </span>

                <h2>
                  {editId !== null
                    ? "Edit Payment"
                    : "Complete Your Payment"}
                </h2>
              </div>

            </div>

            <div className="payment-divider"></div>

            {/* AMOUNT */}

            <div className="payment-input-group">

              <label>
                Amount to be Paid
              </label>

              <div className="payment-input-wrapper">

                <span className="payment-input-icon">
                  ₹
                </span>

                <input
                  type="number"
                  min="1"
                  placeholder="Enter payment amount"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  required
                />

              </div>

            </div>

            {/* PAYMENT METHOD */}

            <div className="payment-input-group">

              <label>
                Payment Method
              </label>

              <div className="payment-input-wrapper">

                <span className="payment-input-icon">
                  💳
                </span>

                <select
                  value={method}
                  onChange={(e) =>
                    setMethod(e.target.value)
                  }
                  required
                >

                  <option value="">
                    Select payment method
                  </option>

                  <option value="GPay">
                    Google Pay
                  </option>

                  <option value="Paytm">
                    Paytm
                  </option>

                  <option value="PayPal">
                    PayPal
                  </option>

                </select>

              </div>

            </div>

            {/* SECURITY MESSAGE */}

            <div className="payment-security">

              <span>🔒</span>

              <div>
                <strong>Secure Payment</strong>

                <p>
                  Your payment information is handled
                  securely.
                </p>
              </div>

            </div>

            {/* BUTTONS */}

            <div className="payment-form-actions">

              <button
                type="submit"
                className="payment-confirm-btn"
              >

                {editId !== null
                  ? "UPDATE PAYMENT"
                  : "CONFIRM PAYMENT"}

              </button>

              {editId !== null && (

                <button
                  type="button"
                  className="payment-cancel-btn"
                  onClick={handleCancel}
                >
                  CANCEL
                </button>

              )}

            </div>

          </form>

        </div>

      </section>


      {/* ================= PAYMENT DETAILS ================= */}

      <section className="payment-details-section">

        <div className="payment-details-header">

          <div>

            <span className="payment-section-label">
              TRANSACTION HISTORY
            </span>

            <h2>
              Payment Details
            </h2>

            <p>
              View and manage your completed payments.
            </p>

          </div>

          <div className="payment-count">

            <span>
              {payments.length}
            </span>

            <small>
              Payments
            </small>

          </div>

        </div>


        {/* TABLE */}

        <div className="payment-table-card">

          {payments.length === 0 ? (

            <div className="payment-empty">

              <div className="payment-empty-icon">
                💳
              </div>

              <h3>
                No Payment Details
              </h3>

              <p>
                Your payment transactions will appear
                here after you complete a payment.
              </p>

            </div>

          ) : (

            <div className="payment-table-wrapper">

              <table className="professional-payment-table">

                <thead>

                  <tr>

                    <th>
                      Payment ID
                    </th>

                    <th>
                      Amount
                    </th>

                    <th>
                      Payment Method
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {payments.map((payment) => (

                    <tr key={payment.id}>

                      <td>

                        <span className="payment-id">
                          #{payment.id}
                        </span>

                      </td>

                      <td>

                        <span className="payment-amount">
                          ₹{payment.amount}
                        </span>

                      </td>

                      <td>

                        <span className="payment-method-badge">
                          {payment.method}
                        </span>

                      </td>

                      <td>

                        <span className="payment-status">
                          ✓ PAID
                        </span>

                      </td>

                      <td>

                        <div className="payment-actions">

                          <button
                            className="payment-edit-btn"
                            onClick={() =>
                              handleEdit(payment)
                            }
                          >
                            ✏️ Edit
                          </button>

                          <button
                            className="payment-delete-btn"
                            onClick={() =>
                              handleDelete(payment.id)
                            }
                          >
                            🗑️ Delete
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

      </section>

    </div>
  );
}

export default Payment;