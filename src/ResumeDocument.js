import React, { forwardRef } from "react";
import TableEd from './TableEd.js';
import TableTraining from './TableTraining.js';
import TableCert from './TableCert.js';
import TableExp from './TableExperience.js';
import SkillList from './SkillList.js';
import TableRef from './TableRef.js';

const ResumeDocument = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <header className="resume-style">
                <h1>Muhammad Adam Bin Jama'alulain</h1>
                <p>Email : muhammadadambtp53@gmail.com</p>
                <p>Phone Number : 010-3351287</p>
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