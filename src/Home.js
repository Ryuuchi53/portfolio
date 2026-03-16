import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import logo from './logo.svg';

export default function Home() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="home">
      <header>
        <h1>{content.header}</h1>
      </header>
      <main id='home'>
        <section>
          <h2>{content.sectionTitle}</h2>
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
    </div>
  );
}