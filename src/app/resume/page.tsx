import React from "react";
import styles from "../styles/resume.module.css";

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="resume-title">Izhar&apos;s Resume</h1>

      {/* Contact Information */}
      <section className="resume-section">
        <h2 className="resume-section-title">Contact Information</h2>
        <p>Email: izharkhanq58@gmail.com</p>
        <p>Phone: +923131217022</p>
        <p>LinkedIn: linkedin.com/in/izhar334</p>
        <p>GitHub: github.com/izhar334</p>
      </section>

      {/* Expertise */}
      <section className="resume-section">
        <h2 className="resume-section-title">Expertise</h2>
        <ul className="resume-expertise-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript / TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2 className="resume-section-title">Experience</h2>
        <p>
          With several years of hands-on experience in web development, I have
          had the opportunity to work on diverse projects ranging from simple
          websites to complex web applications. I specialize in both front-end
          and back-end development, utilizing technologies such as HTML, CSS,
          JavaScript, TypeScript, and frameworks like React and Next.js. My work
          involves building responsive, user-friendly interfaces and ensuring
          seamless functionality across all devices. I am skilled in
          problem-solving and optimizing code for performance and scalability.
          Through my projects, I have developed a keen eye for detail and a
          commitment to delivering quality solutions that meet client needs and
          enhance user experience.
        </p>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        <p>
          I hold a Bachelor of Commerce (B.Com) degree from the University of
          Sindh, where I gained a solid foundation in business principles,
          accounting, and economics. My studies provided me with a comprehensive
          understanding of financial management, business strategies, and
          economic analysis, which have strengthened my analytical and
          problem-solving skills. This background has been invaluable in my web
          development career, especially when working with e-commerce projects
          and business-focused applications. The skills and knowledge I acquired
          during my degree have equipped me to approach projects with a
          strategic mindset, balancing technical skills with an understanding of
          business objectives
        </p>
      </section>
    </div>
  );
}
