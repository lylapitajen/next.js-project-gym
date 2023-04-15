"use client";
import { useState, useEffect } from "react";
import Button from "./Button";

const defaultEnquiry = {
  fname: "",
  lname: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [enquiry, setEnquiry] = useState(defaultEnquiry);

  //   useEffect(() => {
  //     console.log(enquiry);
  //   }, [enquiry]);

  const handleChange = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnquiry(defaultEnquiry);
  };
  return (
    <form
      className="contact-form"
      id="contact"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="names-container">
        <div className="form-row">
          <label className="form-label" htmlFor="fname">
            First name:
          </label>
          <input
            className="form-input"
            type="text"
            id="fname"
            name="fname"
            placeholder="First name"
            spellCheck="false"
            onChange={handleChange}
            value={enquiry.fname}
          ></input>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="lname">
            Last name:
          </label>
          <input
            className="form-input"
            type="text"
            id="lname"
            name="lname"
            placeholder="Last name"
            spellCheck="false"
            onChange={handleChange}
            value={enquiry.lname}
          ></input>
        </div>
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          spellCheck="false"
          onChange={handleChange}
          value={enquiry.email}
        ></input>
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="messsage">
          Message:
        </label>
        <textarea
          className="form-input"
          id="message"
          name="message"
          placeholder="Your message ..."
          spellCheck="false"
          onChange={handleChange}
          value={enquiry.message}
        ></textarea>
      </div>

      <Button modifiers={["gradient"]} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
