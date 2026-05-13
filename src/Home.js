import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import logo from './logo.svg';
import { useReactToPrint } from "react-to-print";
import ResumeDocument from "./ResumeDocument";

export default function Home() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Muhammad_Adam_Resume"
  });

  useEffect(() => {
    const homeRef = ref(db, 'projects/home');

    const unsubscribe = onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        const firstKey = Object.keys(data)[0];
        setContent(data[firstKey]);
      } else {
        setContent(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!content) return <p>No content available.</p>;

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="home">
      <header>
        <h1>Welcome To My Website</h1>
      </header>
      <main id='home'>
        <section>
          <h2>How I build this website</h2>
          <div className='main-text'>
            <ul className="list">
              {content.text.map((line, index) => (
                <li key={index}>
                  <p>{line}</p>
                </li>
              ))}
            </ul>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </section>
      </main>
      <div style={{ display: "none" }}>
        <ResumeDocument ref={resumeRef} />
      </div>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="button-container">
          <button className="resumeButton" onClick={handlePrint}>
            Download CV
          </button>
        </div>
      )}
    </div>
  );
}