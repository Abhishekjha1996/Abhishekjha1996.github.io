import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import("./Contact.css");

export default function Contact() {
  return (
    <>
      <div id="contact" className="connect">
        <div className="container" id="contact-linkedin">
          <h1 className="con-head">Contact Me</h1>
          <p id="contact-email">
            Drop me a mail at <strong> <a href="mailto:abhishek.jha001996@gmail.com" className="mail-id">abhishek.jha001996@gmail.com</a></strong>
          </p>
          <p id="contact-phone">Phone: +91 8240443100</p>
          
          <div className="links">
            <a
              href="https://github.com/Abhishekjha1996"
              target="_blank"
              rel="noreferrer"
              id="contact-github"
            >
             
              <AiFillGithub className="fontlink"/>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekjha96/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="fontlink"/>
              
            </a>
            <a
              href="https://twitter.com/ajha6667/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <i class="fab fa-twitter"></i> */}
              <AiFillTwitterSquare className="fontlink"/>
            </a>
          </div>

          <h4 className="copyright-text">You can clone my website || Made by Abhishek</h4>
        </div>
      </div>

    </>
  );
}