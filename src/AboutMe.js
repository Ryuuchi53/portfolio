import TableEd from './TableEd.js';
import TableTraining from './TableTraining.js';
import TableCert from './TableCert.js';
import TableExp from './TableExperience.js';
import SkillList from './SkillList.js';

export default function About() {
    return (
      <div className="about-me">
        <header>
          <h1>About Me</h1>
        </header>
        <main>
          <section>
            <h2>Who I am</h2>
            <p>My name is <span>Muhammad Adam Bin Jama'alulain</span></p>
            <p>I graduated from <span>Universiti Kebangsaan Malaysia (UKM)</span> with an Honours Bachelor's degree in Software Engineering (Information System Development).</p>
          </section>
          <section id='education'>
            <h2>Educations</h2>
            <TableEd/>
          </section>
          <section id='training'>
            <h2>Training</h2>
            <TableTraining/>
          </section>
          <section id='certification'>
            <h2>Certification</h2>
            <TableCert/>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <SkillList/>
          </section>
          <section id="experience">
            <h2>Experience</h2>
            <TableExp/>
          </section>
        </main>
      </div>
    );
}