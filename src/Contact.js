import React from 'react';
export default function About() {
    return (
      <div className="contact">
        <header>
          <h1>Contact me</h1>
        </header>
        <main id="contact">
          <section>
            <h2>Email</h2>
            <a href="mailto:muhammadadambtp53@gmail.com"><p style={{
              backgroundColor: "rgb(0, 52, 70)",
              color: "white",
              padding: "20px"
            }}>muhammadadambtp53@gmail.com</p></a>
          </section>
          <section>
            <h2>Phone Number</h2>
            <a href="tel:0103351287"><p style={{
              backgroundColor: "rgb(0, 52, 70)",
              color: "white",
              padding: "20px"
            }}>0103351287</p></a>
          </section>
        </main>
      </div>
    );
}