import React from 'react';

const imageUrl = "https://source.unsplash.com/xkBaqlcqeb4";

export default function Home() {
  return (
    <div className="home">
      <header>
        <h1>Welcome To My Website</h1>
      </header>
      <main id='home'>
        <section>
          <h2>How I build this website</h2>
          <p>I build this website using react to make it more responsive and interactive.</p>
          <img src={imageUrl} alt="react" />
        </section>
      </main>
    </div>
  );
}
