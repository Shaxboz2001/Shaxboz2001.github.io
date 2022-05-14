import React from "react";
import Card from "./Card";
function About() {
  return (
    <section className="about">
      <h1>Our services</h1>
      <p>We offer to you our services </p>
      <div className="card-container">
        <Card
          imgUrl="https://img.cppng.com/download/2020-06/14-2-web-design-png.png"
          serviceName="Web Design"
        />
        <Card
          imgUrl="https://png.pngtree.com/png-vector/20190611/ourlarge/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg"
          serviceName="Web Development"
        />
        <Card
          imgUrl="https://img.cppng.com/download/2020-06/3-2-graphic-design-free-download-png.png"
          serviceName="Graphic Design"
        />
      </div>
    </section>
  );
}

export default About;
