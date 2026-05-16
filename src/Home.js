import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import logo from './logo.svg';
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ResumeDocument from "./ResumeDocument";

export default function Home() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfMode, setPdfMode] = useState(false);
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Muhammad_Adam_Resume"
  });

  const handlePreviewPDF = async () => {
    setShowResume(true);
    setIsGenerating(true);
    setPdfMode(true);

    await new Promise((resolve) => setTimeout(resolve, 300));

    const element = resumeRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    setPdfMode(false);
    setIsGenerating(false);
    setShowResume(false);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "A4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position -= pdfHeight; // 🔥 IMPORTANT FIX (negative shift)
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("Muhammad_Adam_Resume.pdf");
  };

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

      <div className="button-container">
        {isMobile ? (
          <button className="resumeButton" onClick={handlePreviewPDF}>
            Download CV
          </button>
        ) : (
          <button className="resumeButton" onClick={handlePrint}>
            Download CV
          </button>
        )}
      </div>

      <div style={{ display: showResume ? "block" : "none" }} className={pdfMode ? "pdf-mode" : ""}>
        <ResumeDocument ref={resumeRef} />
      </div>
    </div>
  );
}