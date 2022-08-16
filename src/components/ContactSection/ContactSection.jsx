import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import SectionTitle from "../SectionTitle/SectionTitle";
import HTMLTag from "../HTMLTag/HTMLTag";
import Icon from "../Icon";
import "./ContactSection.css";
import Button from "../Button/Button";

function ContactSection() {
  const formRef = useRef();

  const serviceId = process.env.REACT_APP_SERVICE_ID,
    templateId = process.env.REACT_APP_TEMPLATE_ID,
    publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const btn = e.target.children[3];
    btn.textContent = "Sending...";

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        alert("Your email has been successfully sent!")
        setContact({
          name: "",
          email: "",
          message: ""
        });
        setDisabled(true);
        btn.textContent = "Sent";
      }, (error) => {
        alert('An error occurred')
        setDisabled(false);
        btn.textContent = "Send";
      });
  }

  const handleChange = (e) => {
    e.persist();
    setContact(contact => ({...contact, [e.target.name]: e.target.value}));
  }

  return (
    <div className="contact">
      <div>
        <SectionTitle className="contact__title">Contact me</SectionTitle>
        <div className="contact__social-media--container">
          <HTMLTag name="div" className="social-media">
            <ul className="contact__social-media">
              <li className="twitter">
                <a href="https://twitter.com/mackevvv" target="_blank" rel="noreferrer">
                  <Icon name="twitter" size={30}/>
                </a>
              </li>
              <li className="instagram">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Icon name="instagram" size={30}/>
                  <svg width="0" height="0">
                    <defs>
                      <radialGradient id="instagram-gradient" r="150%" cx="30%" cy="107%">
                        <stop stopColor="#fdf497" offset="0" />
                        <stop stopColor="#fdf497" offset="0.05" />
                        <stop stopColor="#fd5949" offset="0.45" />
                        <stop stopColor="#d6249f" offset="0.6" />
                        <stop stopColor="#285AEB" offset="0.9" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className="github">
                <a href="https://github.com/Mackevv" target="_blank" rel="noreferrer">
                  <Icon name="github" size={30}/>
                </a>
              </li>
            </ul>
          </HTMLTag>
        </div>
      </div>
      <div className="contact__form">
        <HTMLTag name="form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input type="text"
                     name="name"
                     placeholder="John Doe"
                     required
                     value={contact.name}
                     onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@doe.com"
                required
                value={contact.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Hello! I'm contacting you because..."
                required
                value={contact.message}
                onChange={handleChange}
              />
            </div>
            <Button btnType="submit" btnStyle="primary" disabled={disabled}>
              Send <Icon name="arrow" size={14} />
            </Button>
          </form>
        </HTMLTag>
      </div>
    </div>
  );
}

export default ContactSection;