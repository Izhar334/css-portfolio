import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website"
        />
      </Head>
      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main className={styles.main}>
        <h2>Hello! I&apos;m Izhar Ahmed</h2>
        <b>
          I&apos;m a Website Developer. Here, you&apos;ll find more about my
          skills, experience, and contact information.
        </b>
        <br />
        <Link className={styles.button} href="/about">
         Learn More
        </Link>
        <p>
          I&apos;m a passionate web developer skilled in building dynamic and
          responsive websites that provide excellent user experiences. With
          expertise in HTML, CSS, JavaScript, and frameworks like React and
          Next.js, I create clean, efficient code and intuitive interfaces. I
          have a strong understanding of frontend and backend development,
          allowing me to build full-stack applications that are both functional
          and visually appealing. My goal is to stay updated with the latest web
          technologies and continuously improve my skills. I enjoy
          problem-solving and collaborating with others to bring creative
          digital solutions to life, ensuring quality and performance in every
          project.
        </p>
      </main>
    </div>
  );
}
