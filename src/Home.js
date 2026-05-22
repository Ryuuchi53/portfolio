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
  const [pdfMode, setPdfMode] = useState(false);
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Muhammad_Adam_Resume"
  });

  const handlePreviewPDF = async () => {
    setShowResume(true);
    setPdfMode(true);

    await document.fonts.ready;
    await new Promise(requestAnimationFrame);
    await new Promise(requestAnimationFrame);

    const element = resumeRef.current;

    // 🔧 SAVE ORIGINAL STYLES
    const originalTransform = element.style.transform;
    const originalWidth = element.style.width;

    // 🔧 FORCE STABLE LAYOUT (BEFORE CAPTURE)
    element.style.transform = "scale(1)";
    element.style.width = "794px";

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollY: 0,
      windowWidth: element.offsetWidth,
      windowHeight: element.offsetHeight,
      letterRendering: true,
    });

    // 🔧 RESTORE ORIGINAL STYLES (AFTER CAPTURE)
    element.style.transform = originalTransform;
    element.style.width = originalWidth;

    setPdfMode(false);
    setShowResume(false);

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const pageHeightPx = (canvas.width * pdfHeight) / pdfWidth;

    const overlap = 2; // small overlap is actually better than big one

    const pxPageHeight = pageHeightPx;

    let position = 0;
    let pageIndex = 0;

    while (position < canvas.height) {
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;

      const remainingHeight = canvas.height - position;

      const sliceHeight = Math.min(pxPageHeight, remainingHeight);

      pageCanvas.height = sliceHeight;

      const ctx = pageCanvas.getContext("2d");

      // IMPORTANT: floor the values to avoid subpixel blur
      ctx.drawImage(
        canvas,
        0,
        Math.floor(position),
        canvas.width,
        Math.floor(sliceHeight),
        0,
        0,
        canvas.width,
        sliceHeight
      );

      const imgData = pageCanvas.toDataURL("image/png");

      const imgHeight = (sliceHeight * pdfWidth) / canvas.width;

      if (pageIndex > 0) pdf.addPage();

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      position += pxPageHeight - overlap; // subtle overlap, not large
      pageIndex++;
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
        <ResumeDocument ref={resumeRef} pdfMode={pdfMode} />
      </div>
    </div>
  );
}