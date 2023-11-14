export default function About() {
    return (
      <div className="about-me">
        <header>
          <h1>About Me</h1>
        </header>
        <main>
          <section id="bio">
            <h2>Biography</h2>
            <p>Some information about me.</p>
          </section>
          <section id="education">
            <h2>Education</h2>
            <p>Details about my educational background.</p>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <p>A list of my skills.</p>
          </section>
          <section id="experience">
            <h2>Experience</h2>
            <p>My professional experience.</p>
          </section>
        </main>
      </div>
    );
}