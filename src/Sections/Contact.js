import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const [unset, setUnset] = useState(true);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ds0ybkx",
        "template_wgpacqg",
        form.current,
        "X9FZgsDJSow5wxOmd"
      )
      .then((result) => {
        console.log(result.status);
      })
      .catch((err) => {
        alert("error");
      })
      .finally(() => {
        setUnset(!unset);
      });
    e.target.reset();
  };

  return (
    <form className="contact-form" id="contact" ref={form} onSubmit={sendEmail}>
      <h2 className="form-heading">Contact Me</h2>
      <div className="form-label">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          name="user_name"
          type="text"
          required
          placeholder="Enter your name"
        />
      </div>
      <div className="form-label">
        <label>Email</label>
        <input
          className="form-control"
          name="user_email"
          type="email"
          required
          placeholder="Enter your email"
          pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$"
        />
      </div>
      <div className="form-label">
        <label>Message</label>
        <textarea
          className="form-control"
          name="message"
          required
          placeholder="Enter your message"
        />
      </div>
      <button className="btn-primary" type="submit">
        Send
      </button>
      <div className={unset ? "success-message" : "success-message visible"}>
        <p>Your message has been sent!</p>
      </div>
    </form>
  );
}

export default Contact;
