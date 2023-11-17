import TableProject from './TableProject.js';
import React from 'react';

export default function Posts() {
    return (
      <div className="project">
        <header>
          <h1>My Project</h1>
        </header>
        <main id="project">
          <section>
            <h2>This Is My Project</h2>
            <TableProject/>
          </section>
        </main>
      </div>
    );
  }