import TableProject from './TableProject.js';

export default function Posts() {
    return (
      <div className="project">
        <header>
          <h1>My Project</h1>
        </header>
          <main>
            <section id="intro">
                <h2>This Is My Project</h2>
                <p>I put my project here </p>
                <TableProject/>
            </section>
        </main>
      </div>
    );
  }