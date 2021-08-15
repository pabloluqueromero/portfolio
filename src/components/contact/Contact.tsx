import { send, init } from "emailjs-com";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Utils from "../Utils";
import './Contact.scss';
import {emailData} from '../../email';
export default function Contact() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [refSection, inViewSection, entrySection] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const changeHandler = (event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(event.currentTarget.value);
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    init(emailData.USER_ID);

    send('portfolio', emailData.TEMPLATE_ID, {
      from_name: name,
      message: message,
      email: email
    })
      .then((result) => {
        alert(`Thank you ${name} for your message, I will get back to you shortly!`);
        setName(""); 
        setEmail("");
        setMessage("");})
      .catch(e => console.log(e));
  };

  return (
    <section  className="section-container"  id="contact">
      <div
        ref={refSection}
        className="section-subcontainer"
        animation-name="fade-up"
        animation-duration="500"
        style={Utils.animate(inViewSection, entrySection)}>
        <h1 className="section-container-title">
          Contact me
        </h1>

        <div className="contact-content-container">
          <p className="contact-form-description">
            I am always open to discussion and try to check my inbox regularly. If you have any questions, or just want to say hi I'll get back to you as soon as I can!
          </p>
          <div className="contact-content-container-sub">
            <div className="map-container">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://maps.google.com/maps?q=MAdrid&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>


            <form
              name="contact"
              className="contact-form"
              onSubmit={handleSubmit}>
              <div className="contact-form-input-element">
                <label htmlFor="name" className="contact-form-input-element-title">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={e =>changeHandler(e,setName)}
                  required
                  className="contact-form-input-element-box"
                />
              </div>
              <div className="contact-form-input-element">
                <label htmlFor="email" className="contact-form-input-element-title">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={e =>changeHandler(e,setEmail)}
                  required
                  className="contact-form-input-element-box"
                />
              </div>
              <div className="contact-form-input-element">
                <label
                  htmlFor="message"
                  className="contact-form-input-element-title">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={e =>changeHandler(e,setMessage)}
                  required
                  className="contact-form-input-element-box"
                />
              </div>
              <button
                type="submit"
                className="button text-s">
                Submit
              </button>
            </form>

          </div></div>
      </div>
    </section>
  );
}