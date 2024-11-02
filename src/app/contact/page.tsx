import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch"/>
      </Head>
      <header className={styles.header}>
        <h1>Contact Me</h1>
      </header>
      <main className={styles.main}>
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
      </main>
    </div>
  );
}
