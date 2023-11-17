import React from 'react';
import TableEd from './TableEd.js';
import TableTraining from './TableTraining.js';
import TableCert from './TableCert.js';
import SkillList from './SkillList.js';
import TableExp from './TableExperience.js';

export default function About() {
    return (
      <div className="about-me">
        <header>
          <h1>About Me</h1>
        </header>
        <main id='about'>
          <section>
            <h2 style={{
              paddingBottom: "20px",
              backgroundColor: "rgb(0, 52, 70)",
              color: "white",
              borderBottom: "3px solid rgb(0, 52, 70)"
            }}>Who I am</h2>
            <p>My name is <span>Muhammad Adam Bin Jama'alulain</span></p>
            <hr/>
            <p>I graduated from <span>Universiti Kebangsaan Malaysia (UKM)</span> with an Honours Bachelor's degree in Software Engineering (Information System Development).</p>
          </section>
          <section>
            <h2>Educations</h2>
            <TableEd/>
          </section>
          <section>
            <h2>Training</h2>
            <TableTraining/>
          </section>
          <section>
            <h2>Certification</h2>
            <TableCert/>
          </section>
          <section>
            <h2>Skills</h2>
            <SkillList/>
          </section>
          <section>
            <h2>Experience</h2>
            <TableExp/>
          </section>
        </main>
      </div>
    );
}