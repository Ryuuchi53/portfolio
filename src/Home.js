import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import logo from './logo.svg';
import { useReactToPrint } from "react-to-print";
import ResumeDocument from "./ResumeDocument";
import { PDFDownloadLink, Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';

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

  // Simple mobile check
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // PDF styles
  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    header: { fontSize: 18, marginBottom: 10 },
    sectionTitle: { fontSize: 14, marginBottom: 5 },
    text: { marginBottom: 5 },
    logo: { width: 50, height: 50, marginTop: 10 }
  });

  const MobilePDF = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>{content.header}</Text>
        <Text style={styles.sectionTitle}>{content.sectionTitle}</Text>
        {content.text.map((line, index) => (
          <Text style={styles.text} key={index}>{line}</Text>
        ))}
        <Image style={styles.logo} src={logo} />
      </Page>
    </Document>
  );

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

      {/* Desktop print */}
      <div style={{ display: "none" }}>
        <ResumeDocument ref={resumeRef} />
      </div>

      <div className="button-container">
        {isMobile ? (
          <PDFDownloadLink document={<MobilePDF />} fileName="Muhammad_Adam_Resume.pdf">
            {({ loading }) => (
              <button className="resumeButton" disabled={loading}>
                {loading ? 'Preparing...' : 'Download CV'}
              </button>
            )}
          </PDFDownloadLink>
        ) : (
          <button className="resumeButton" onClick={handlePrint}>
            Download CV
          </button>
        )}
      </div>
    </div>
  );
}