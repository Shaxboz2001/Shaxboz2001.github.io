import React from "react";

function Contact() {
  return (
    <section className="contact-section">
      <div className="top-contact">
        <h1>Get in Touch</h1>
        <h3>
          Want to get in touch ? We'd love to hear from you! Here is how you can
          reach us
        </h3>
      </div>
      <div className="bottom-contact">
        <div className="card-contact left">
          <i class="fa-solid fa-phone"></i>
          <h2>Talk to Sales</h2>
          <p>
            Interested in Hubspot's marketing software ? Just pick up the phone
            to chat with a member of our sales team.
          </p>
          <a href="tel:+998333977646">+998333977646</a>
          <a href="#!">View all global numbers</a>
        </div>
        <div className="card-contact right">
          <i class="fa-solid fa-message"></i>
          <h2>Contact Customer Support</h2>
          <p>
            Sometimes you need a little help from your friend.Or a Hubspot
            Support rep.Don't Worry ... We are here for you !{" "}
          </p>
          <a href="#!" id="btn">
            CONTACT SUPPORT
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
