import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ENDPOINT); // Ensure the endpoint is in your .env file

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="form-heading">Contact Me</h2>

      <div className="form-label">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="form-control"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="form-label">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Enter your message"
          className="form-control"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting} 
        className="btn-primary"
      >
        Send
      </button>

      {state.succeeded && (
        <div className="success-message visible">
          <p>Your message has been sent!</p>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
