import React from "react";
import icon from "../../img/svg/icon";
import content from "./Content";

const contact = content.en_EN.contact;
function Contact() {
  return (
    <section id="contact">
      <h2>GET IN TOUCH WITH US</h2>
      <div className="contact-container">
        <div className="contact-box">
          <div className="address-box">
            <h3>{contact.name}</h3>
            <p>{contact.address}</p>
            <span>{contact.openDays}</span>
            <span>{contact.openHours}</span>
            <div className="mail-box">
              <a href={"mailto:" + contact.email1}>
                {icon.envelopeFill} {contact.email1}
              </a>
              <a href={"mailto:" + contact.email2}>
                {icon.envelopeFill} {contact.email2}
              </a>
            </div>
          </div>
          <div className="socmed-box">
            {contact.socialmedia.map((content) => (
              <a
                key={content.id}
                href={content.url}
                target="_blank"
                rel="noreferrer"
              >
                {content.name}
              </a>
            ))}
            <div className="empty-socmed"></div>
            <div className="empty-socmed"></div>
          </div>
        </div>
        <div className="map-box">
          <iframe
            title="Socketspace Indonesia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9340809375867!2d107.69529071431693!3d-6.898487669425262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd040e09a4f3%3A0x14cfb3bbb3987d24!2sSocketSpace%20-%20PT.%20Transformasi%20Data%20Indonesia!5e0!3m2!1sen!2sid!4v1644400036032!5m2!1sen!2sid"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
