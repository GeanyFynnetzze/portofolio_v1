import React from 'react';
import './contact.css';
import banner from '../../assets/bannerv2.webp';
import { AiFillMessage } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_KEY_SERVICE,
        process.env.REACT_APP_KEY_TEMPLATE,
        form.current,
        process.env.REACT_APP_KEY_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="contact--intro">
        <h5>Keep in touch?</h5>
        <h2>Message me!</h2>
      </div>
      <div className="container contact--container">
        <AiFillMessage className="contact--logo" />
        <div className="contact--img">
          <img src={banner} alt="Contact image" />
        </div>
        <div>
          <form className="contact--form" ref={form} onSubmit={sendEmail}>
            <div className="form--name">
              <label htmlFor="name">Name </label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form--email">
              <label htmlFor="email">Email </label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form--message">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="7" required />
            </div>
            <button type="submit" className="btn btn--send">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
