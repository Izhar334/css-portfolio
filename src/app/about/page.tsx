import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
      </Head>
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>
      <main className={styles.main}>
        <h2>Who Am I?</h2>
        <p>
          I’m a dedicated web developer with a passion for crafting seamless,
          engaging digital experiences. With a strong foundation in HTML, CSS,
          JavaScript, and frameworks like React and Next.js, I specialize in
          building responsive, user-focused websites and applications. I thrive
          on problem-solving, learning new technologies, and continually pushing
          my skills to the next level. In addition to front-end expertise, I
          have experience in backend development, allowing me to create
          full-stack solutions that are efficient and visually appealing. I’m
          driven by a commitment to quality, innovation, and collaboration,
          aiming to deliver impactful solutions that meet both client needs and
          industry standards.
        </p>
      </main>
      <div className={styles.main}>
        <h2>Get in Touch</h2>
        <p>Email: izharkhanq58@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <Link href={"https://www.linkedin.com/in/izhar334"} target="_blank">
            Izhar Ahmed
          </Link>
        </p>
        <p>
          GitHub:{" "}
          <Link href={"https://github.com/izhar334"} target="_blank">
            Izhar QaimKhani
          </Link>
        </p>
        <p>Phone: +923131217022</p>
      </div>
    </div>
  );
}
