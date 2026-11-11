
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Content() {
  const navigate = useNavigate();

  const API_URL = "http://localhost:3002/registrations";

  const [registrations, setRegistrations] = useState([]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [proof, setProof] = useState("");
  const [phone, setPhone] = useState("");

  const [editId, setEditId] = useState(null);

  

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

 

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setRegistrations(data))
      .catch((error) => console.log(error));
  }, []);

  // ==========================================
  // CLEAR FORM
  // ==========================================

  function clearForm() {
    setFname("");
    setLname("");
    setPassword("");
    setAge("");
    setDob("");
    setProof("");
    setPhone("");
    setEditId(null);
  }

  // ==========================================
  // SUBMIT REGISTRATION
  // ==========================================

  function handleSubmit(e) {
    e.preventDefault();

    const registration = {
      fname,
      lname,
      password,
      age,
      dob,
      proof,
      phone,
    };

    if (editId === null) {
      // Add new registration
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registration),
      })
        .then((response) => response.json())
        .then((newRegistration) => {
          setRegistrations([
            ...registrations,
            newRegistration,
          ]);

          clearForm();

          // Go to Login after successful registration
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Update existing registration
      fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registration),
      })
        .then((response) => response.json())
        .then((updatedRegistration) => {
          setRegistrations(
            registrations.map((item) =>
              item.id === editId
                ? updatedRegistration
                : item
            )
          );

          clearForm();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // ==========================================
  // EDIT REGISTRATION
  // ==========================================

  function editRegistration(registration) {
    setFname(registration.fname);
    setLname(registration.lname);
    setPassword(registration.password);
    setAge(registration.age);
    setDob(registration.dob);
    setProof(registration.proof);
    setPhone(registration.phone);
    setEditId(registration.id);
  }

  // ==========================================
  // DELETE REGISTRATION
  // ==========================================

  function deleteRegistration(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setRegistrations(
        registrations.filter(
          (registration) =>
            registration.id !== id
        )
      );
    });
  }

  return (
    <main className="registration-content">

      <form onSubmit={handleSubmit}>

        <h3 className="text-center mb-4">
          {editId === null
            ? "Registration"
            : "Edit Registration"}
        </h3>

        <div className="form-row">
          <label>First Name</label>

          <input
            type="text"
            value={fname}
            onChange={(e) =>
              setFname(e.target.value)
            }
            required
          />
        </div>

        <div className="form-row">
          <label>Last Name</label>

          <input
            type="text"
            value={lname}
            onChange={(e) =>
              setLname(e.target.value)
            }
            required
          />
        </div>

        <div className="form-row">
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />
        </div>

        <div className="form-row">
          <label>Age</label>

          <input
            type="number"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
            required
          />
        </div>

        <div className="form-row">
          <label>Date of Birth</label>

          <input
            type="date"
            value={dob}
            onChange={(e) =>
              setDob(e.target.value)
            }
            required
          />
        </div>

        <div className="form-row">
          <label>ID Proof</label>

          <input
            type="text"
            value={proof}
            onChange={(e) =>
              setProof(e.target.value)
            }
            required
          />
        </div>

        <div className="form-row">
          <label>Phone Number</label>

          <input
            type="tel"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            required
          />
        </div>

        <div className="text-center mt-4">

          <button type="submit">
            {editId === null
              ? "Register"
              : "Update"}
          </button>

          {editId !== null && (
            <button
              type="button"
              className="cancel-button"
              onClick={clearForm}
            >
              Cancel
            </button>
          )}

        </div>

      </form>

      <section className="registration-list">

        <h3>Registered Users</h3>

        {registrations.length === 0 ? (
          <p>No Registrations Added</p>
        ) : (
          registrations.map((registration) => (

            <div
              className="registration-card"
              key={registration.id}
            >

              <h5>
                {registration.fname}{" "}
                {registration.lname}
              </h5>

              <p>
                Age: {registration.age}
              </p>

              <p>
                DOB: {registration.dob}
              </p>

              <p>
                ID Proof: {registration.proof}
              </p>

              <p>
                Phone: {registration.phone}
              </p>

              <button
                onClick={() =>
                  editRegistration(registration)
                }
              >
                Edit
              </button>

              <button
                className="delete-button"
                onClick={() =>
                  deleteRegistration(
                    registration.id
                  )
                }
              >
                Delete
              </button>

            </div>

          ))
        )}

      </section>

    </main>
  );
}

export default Content;

