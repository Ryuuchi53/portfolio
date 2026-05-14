import React, { useState, useEffect } from "react";
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import TableEd from './TableEd.js';
import TableTraining from './TableTraining.js';
import TableCert from './TableCert.js';
import TableExp from './TableExperience.js';
import SkillList from './SkillList.js';

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

  return (
    <div className="about">
      <header>
        <h1>About Me</h1>
      </header>
      <main id="about">
        <section>
          <h2 style={{
            paddingBottom: "20px",
            backgroundColor: "rgb(0, 52, 70)",
            color: "white",
            borderBottom: "3px solid rgb(0, 52, 70)"
          }}>Who I am</h2>
          <p>My name is <span>{headerData.name}</span></p>
          <hr />
          <p>I graduated from <span>{headerData.university}</span> {headerData.degree}</p>
        </section>
        <section>
          <h2>Educations</h2>
          <TableEd />
        </section>
        <section>
          <h2>Training</h2>
          <TableTraining />
        </section>
        <section>
          <h2>Certification</h2>
          <TableCert />
        </section>
        <section>
          <h2>Skills</h2>
          <SkillList />
        </section>
        <section>
          <h2>Experience</h2>
          <TableExp />
        </section>
      </main>
    </div>
  );
}