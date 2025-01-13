// src/components/Contacts/AddContact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
const AddContact = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container py-5">
      <div className="row bg-light align-items-center p-2 mb-3">
        <h1 className="col-md-10">New Contact</h1>
        <Link
          to="/contacts"
          className="btn btn-primary col-md-2 d-flex align-items-center justify-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <span className="ms-1">Contacts</span>
        </Link>
      </div>
      <div className="row p-4">
        <div className="card col-md-6 mx-auto">
          <div className="card-body mb-3 p-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
