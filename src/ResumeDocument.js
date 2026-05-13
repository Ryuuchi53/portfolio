import React, { forwardRef, useState, useEffect } from "react";
import { db } from './firebase';
import { ref as dbRef, onValue } from 'firebase/database';
import TableEd from './TableEd.js';
import TableTraining from './TableTraining.js';
import TableCert from './TableCert.js';
import TableExp from './TableExperience.js';
import SkillList from './SkillList.js';
import TableRef from './TableRef.js';

const ResumeDocument = forwardRef((props, ref) => {
    const [headerData, setHeaderData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const headerRef = dbRef(db, 'projects/header');

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

    if (loading) return <div ref={ref}><p>Loading...</p></div>;

    const publicUrl = headerData.image;

    return (
        <div ref={ref}>
            <header className="resume-style">
                <div className="resume-header">
                    <img src={publicUrl} alt="Profile" className="profile-image" />
                    <div className="resume-header-text">
                        <h1>{headerData.name}</h1>
                        <p>Email : {headerData.email}</p>
                        <p>Phone Number : {headerData.phone}</p>
                    </div>
                </div>
            </header>
            <main className="resume-style">
                <section className="resume-style">
                    <h2>Educations</h2>
                    <TableEd />
                </section>
                <section className="resume-style">
                    <h2>Training</h2>
                    <TableTraining />
                </section>
                <section className="resume-style">
                    <h2>Certification</h2>
                    <TableCert />
                </section>
                <section className="resume-style">
                    <h2>Skills</h2>
                    <SkillList />
                </section>
                <section className="resume-style">
                    <h2>Experience</h2>
                    <TableExp />
                </section>
                <section className="resume-style">
                    <h2>References</h2>
                    <TableRef />
                </section>
            </main>
        </div>
    );
});

export default ResumeDocument;