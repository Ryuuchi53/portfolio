import React, { useState, useEffect } from "react";
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import logo from './logo.svg';
import Resume from "./Resume";
import { pdf } from '@react-pdf/renderer';

export default function Home() {
  const [content, setContent] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [educations, setEducations] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [certs, setCerts] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [references, setReferences] = useState([]);
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

  /* HEADER DATA */

  useEffect(() => {
    const headerRef = ref(db, "projects/header");
    const unsubscribe = onValue(headerRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const firstKey = Object.keys(data)[0];

        setHeaderData(data[firstKey]);
      } else {
        setHeaderData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const educationRef = ref(db, "projects/educations");
    const unsubscribe = onValue(educationRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          date: value.date,
          school_name: value.school_name,
          field_of_study: value.field_of_study,
        }));
        setEducations(data);
      } else {
        setEducations([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const skillsRef = ref(db, "projects/skills");
    const unsubscribe = onValue(skillsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          name: value.name,
          list: value.list,
        }));
        setSkills(data);
      } else {
        setSkills([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const trainingsRef = ref(db, "projects/trainings");
    const unsubscribe = onValue(trainingsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          date: value.date,
          programme_name: value.programme_name,
          field: value.field,
        }));
        setTrainings(data);
      } else {
        setTrainings([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const certificationsRef = ref(db, "projects/certifications");
    const unsubscribe = onValue(certificationsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          date: value.date,
          name: value.name,
          link: value.link,
        }));
        setCerts(data);
      } else {
        setCerts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const experiencesRef = ref(db, "projects/experiences");
    const unsubscribe = onValue(experiencesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          date: value.date,
          position: value.position,
          company: value.company,
          description: value.description,
        }));
        setExperiences(data);
      } else {
        setExperiences([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const referencesRef = ref(db, "projects/references");

    const unsubscribe = onValue(referencesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          name: value.name,
          position: value.position,
          company: value.company,
          address: value.address,
          email: value.email,
          office_number: value.office_number,
        }));
        setReferences(data);
      } else {
        setReferences([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null;
  if (!headerData || !headerData || !educations || !skills || !trainings || !certs || !experiences || !references) return null;

  const handlePreviewPDF = async () => {
    if (!headerData || !educations || !skills || !trainings || !certs || !experiences || !references) return;
    const blob = await pdf(
      <Resume headerData={headerData} educations={educations} skills={skills} trainings={trainings} certs={certs} experiences={experiences} references={references} b/>
    ).toBlob();

    const url = URL.createObjectURL(blob);

    window.open(url, '_blank');
  };

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
        <button className="resumeButton" onClick={handlePreviewPDF}>
          My Resume
        </button>
      </div>
    </div>
  );
}