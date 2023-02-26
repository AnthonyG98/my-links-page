import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export function Contact() {
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    const inputErrBorders = {
      nameBorder: document.getElementById("name").style,
      subjectBorder: document.getElementById("subject").style,
      messageBorder: document.getElementById("message").style,
    };
    e.preventDefault();
    //Checking length of name, subject, and message
    if (name == undefined) {
      inputErrBorders.nameBorder.border = "1px solid red";
      setErrorMsg("Name cannot be blank");
      return e.preventDefault();
    }
    if (name.length < 5) {
      inputErrBorders.nameBorder.border = "1px solid red";
      setErrorMsg("Name must be longer than 5 characters");
      return e.preventDefault();
    }

    if (subject == undefined) {
      inputErrBorders.subjectBorder.border = "1px solid red";
      setErrorMsg("Subject cannot be blank");
      return e.preventDefault();
    }
    if (subject.length < 5) {
      inputErrBorders.subjectBorder.border = "1px solid red";
      setErrorMsg("Subject must be longer than 5 characters");
      return e.preventDefault();
    }

    if (message == undefined) {
      inputErrBorders.messageBorder.border = "1px solid red";
      setErrorMsg("Message cannot be blank");
      return e.preventDefault();
    }
    if (message.length < 5) {
      inputErrBorders.messageBorder.border = "1px solid red";
      setErrorMsg("Message must be longer than 5 characters");
      return e.preventDefault();
    }

    emailjs
      .sendForm(
        "service_6mfw3xf",
        "template_bb8aebw",
        form.current,
        "user_tF7OLHQ41f2A3l6UsEq8G"
      )
      .then(
        (result) => {
          alert("sent");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div class="contact-container" id="contact">
        <div class="contact-head-container">
          <p class="intouch" id="touch">
            Get in touch
          </p>
          <p className="green-mark">.</p>
        </div>
        <form class="form-container" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            id="subject"
          />
          <textarea
            placeholder="What's up?"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            id="message"
          ></textarea>
          <button className="send" type="submit" value="Send">
            Send
          </button>
          <p className="error">{errorMsg}</p>
        </form>
      </div>
      <div className="footer-container">
        <i class="fa-regular fa-copyright"></i>
        <p className="footer-text">All rights reserved Anthony G.</p>
      </div>
    </>
  );
}
