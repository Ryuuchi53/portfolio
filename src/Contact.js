import React, { useState, useEffect } from "react";
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';

export default function About() {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headerRef = ref(db, 'projects/header');

    const unsubscribe = onValue(headerRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const firstKey = Object.keys(data)[0];
        setHeaderData(data[firstKey]);
      } else {
        setHeaderData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  const facebookUrl = headerData.facebook;
  const linkedinUrl = headerData.linkedin;
  const githubUrl = headerData.github;

  return (
    <div className="contact">
      <header>
        <h1>Contact me</h1>
      </header>
      <main id="contact">
        <section>
          <h2>Email</h2>
          <p style={{
            backgroundColor: "rgb(0, 52, 70)",
            color: "white",
            padding: "20px"
          }}>{headerData.email}</p>
        </section>
        <section>
          <h2>Phone Number</h2>
          <p style={{
            backgroundColor: "rgb(0, 52, 70)",
            color: "white",
            padding: "20px"
          }}>{headerData.phone}</p>
        </section>
        <div className='icon'>
          <ul className="social-icons">
            <li><a href={facebookUrl} target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href={linkedinUrl} target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href={githubUrl} target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}